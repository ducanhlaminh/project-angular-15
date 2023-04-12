import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UseServiceService } from 'src/app/module/user/use-service.service';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-info-user',
    templateUrl: './info-user.component.html',
    styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit, AfterViewInit {
    formUser: any = new FormGroup({
        avatar: new FormControl(''),
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
    });
    valueInputPre = '';
    inforUser: any = { name: '', email: '', phone: '', avatar: '' };
    @ViewChild('upload') upload: any;
    constructor(public UserService: UseServiceService, private toastr: ToastrService) {}
    ngOnInit() {
        this.UserService.getCurrent().subscribe((res: any) => {
            this.inforUser = res.user;
            this.UserService.isLogin = true;
            this.formUser.patchValue({
                avatar: res.user.avatar,
                name: res.user.name,
                email: res.user.email,
                phone: res.user.phone,
            });
        });
    }
    ngAfterViewInit() {
        console.log(1);
    }
    showSuccess() {
        this.toastr.success('Cập nhật thành công');
    }
    onSubmit(e: any) {
        var formData = new FormData();
        formData.append('avatar', e.value.avatar);
        formData.append('email', e.value.email);
        formData.append('name', e.value.name);
        formData.append('phone', e.value.phone);
        this.UserService.updateInfor(formData).subscribe((res: any) => {
            if (res.status === 0) {
                this.showSuccess();
                this.UserService.getCurrent().subscribe((res: any) => {
                    this.inforUser = res.user;
                    this.formUser.patchValue({
                        avatar: res.user.avatar,
                        name: res.user.name,
                        email: res.user.email,
                        phone: res.user.phone,
                    });
                });
            }
        });
    }
    uploadAvatar() {
        this.upload.nativeElement.click();
    }
    focus(e: any) {
        this.valueInputPre = e.target.value;
        var edit = e.srcElement.nextElementSibling;
        edit.style.display = 'flex';
    }
    blur(e: any) {
        const key = e.target.name;
        console.log(key);

        this.inforUser[key] = this.valueInputPre;
        this.valueInputPre = '';
        var el = e.srcElement.nextElementSibling;
        el.style.display = 'none';
    }
    cancel(e: any) {
        let input = e.srcElement.parentElement.previousElementSibling;
        input.value = this.valueInputPre;
        this.valueInputPre = '';
        var edit = input.nextElementSibling;
        edit.style.display = 'none';
    }

    upImg(evt: any) {
        var files = evt.target.files;
        var file = files[0];
        this.formUser.patchValue({
            avatar: evt.target.files[0],
        });
        console.log(this.formUser);
    }
}
