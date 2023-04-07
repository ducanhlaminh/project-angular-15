import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UseServiceService } from 'src/app/module/user/use-service.service';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-info-user',
    templateUrl: './info-user.component.html',
    styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit, AfterViewInit {
    formUser: any;
    valueInputPre = '';
    inforUser = this.UserService.userInfor;
    @ViewChild('upload') upload: any;
    constructor(public UserService: UseServiceService) {}
    ngOnInit() {
        this.formUser = new FormGroup({
            avatar: new FormControl(this.UserService.userInfor?.url),
            name: new FormControl(this.UserService.userInfor.name, Validators.required),
            email: new FormControl(this.UserService.userInfor.email, Validators.required),
            phone: new FormControl(this.UserService.userInfor.phone, Validators.required),
        });
    }
    ngAfterViewInit() {
        console.log(1);
    }
    onSubmit(e: any) {
        var formData = new FormData();
        formData.append('avatar', e.value.avatar);
        formData.append('email', e.value.email);
        formData.append('name', e.value.name);
        formData.append('phone', e.value.phone);
        this.UserService.updateInfor(formData).subscribe((res: any) => {
            if (res.status === 0) {
                this.UserService.getCurrent().subscribe((res: any) => {
                    this.UserService.userInfor = res.user;
                    this.UserService.userInfor.url = res.avatar;
                    console.log(this.UserService.userInfor);
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
        this.UserService.userInfor[key] = this.valueInputPre;
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
