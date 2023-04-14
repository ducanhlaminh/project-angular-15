import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { ToastrService } from 'ngx-toastr';
import { UseServiceService } from 'src/app/module/user/use-service.service';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-info-user',
    templateUrl: './info-user.component.html',
    styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit {
    formUser: any = new FormGroup({
        avatar: new FormControl(''),
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', Validators.required),
    });
    valueInputPre = '';
    urlAvatarPreview: any;
    inforUser: any = { name: '', email: '', phone: '', avatar: '' };
    fileSelected = false;
    @ViewChild('upload') upload: any;
    showComfirm: any = { name: false, email: false, phone: false };
    constructor(
        public UserService: UseServiceService,
        private toastr: ToastrService,
        private sanitizer: DomSanitizer,
    ) {}
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
    resetDirtyForm() {
        Object.keys(this.formUser.controls).forEach((key) => {
            if (this.formUser.controls[key].dirty === true) {
                this.formUser.get(key).markAsPristine();
            }

            // control.dirty = false;
        });
    }
    getFormData(formGroup: FormGroup) {
        const formData: any = {};
        Object.keys(formGroup.controls).forEach((key) => {
            const control = formGroup.controls[key];
            if (control.dirty || (this.formUser.valid && this.fileSelected)) {
                formData[key] = control.value;
            } else {
                console.log(key);
            }
        });
        return formData;
    }
    showSuccess() {
        this.toastr.success('Cập nhật thành công');
    }
    checkEmail() {
        return true;
    }
    onSubmit(e: any) {
        console.log(this.formUser.value.email !== this.valueInputPre && this.formUser.get('email').invalid);

        // var formData: any = new FormData();
        // const formSubmit = this.getFormData(this.formUser);
        // Object.entries(formSubmit).forEach(([key, value]) => {
        //     formData.append(key, value);
        // });

        // this.UserService.updateInfor(formData).subscribe((res: any) => {
        //     if (res.status === 0) {
        //         this.showSuccess();
        //         this.UserService.getCurrent().subscribe((res: any) => {
        //             this.inforUser = res.user;
        //             this.formUser.patchValue({
        //                 avatar: res.user.avatar,
        //                 name: res.user.name,
        //                 email: res.user.email,
        //                 phone: res.user.phone,
        //             });
        //             this.urlAvatarPreview = '';
        //             this.resetDirtyForm();
        //         });
        //     }
        // });
    }
    uploadAvatar() {
        this.upload.nativeElement.click();
    }
    focus(e: any) {
        this.valueInputPre = e.target.value;
        this.showComfirm[e.target.name] = true;
    }
    blur(e: any) {
        const key: any = e.target.name;
        this.showComfirm[key] = false;
        this.inforUser[key] = this.valueInputPre;
        this.valueInputPre = '';
    }
    cancel(e: any) {
        let input = e.srcElement.parentElement.previousElementSibling;
        input.value = this.valueInputPre;
        this.valueInputPre = '';
    }

    upImg(evt: any) {
        var files = evt.target.files;
        const reader = new FileReader();
        this.fileSelected = true;
        var file = files[0];
        this.urlAvatarPreview = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));

        this.formUser.patchValue({
            avatar: evt.target.files[0],
        });
        console.log(this.formUser);
    }
}
