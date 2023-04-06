import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { UseServiceService } from 'src/app/module/user/use-service.service';
import { Buffer } from 'buffer';
@Component({
    selector: 'app-info-user',
    templateUrl: './info-user.component.html',
    styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit {
    formUser: any;
    image: any;
    valueInputPre = '';
    @ViewChild('upload') upload: any;
    constructor(public UserService: UseServiceService, private sanitizer: DomSanitizer) {}
    ngOnInit() {
        console.log('log');

        this.image = this.UserService.userInfor.avatar_test;

        console.log(this.image);

        this.formUser = new FormGroup({
            avatar: new FormControl(this.UserService.userInfor?.avatar),
            name: new FormControl(this.UserService.userInfor.name, Validators.required),
            email: new FormControl(this.UserService.userInfor.email, Validators.required),
            phone: new FormControl(this.UserService.userInfor.phone, Validators.required),
        });
    }
    // upImg(e: any) {
    //     let file = e.target.files[0];

    //     this.formUser.patchValue({
    //         avatar: this.toBase64(file),
    //         // formControlName2: myValue2 (can be omitted)
    //     });
    // }
    onSubmit(e: any) {
        console.log(e);
        var formData = new FormData();
        formData.append('avatar', e.value.avatar);
        formData.append('email', e.value.email);
        formData.append('name', e.value.name);
        formData.append('phone', e.value.phone);
        this.UserService.updateInfor(formData).subscribe((res: any) => {
            if (res.status === 0) {
                this.UserService.getCurrent().subscribe((res: any) => {
                    return (this.UserService.userInfor = res.user);
                });
            }
        });
    }
    uploadAvatar() {
        this.upload.nativeElement.click();
    }
    focus(e: any) {
        this.valueInputPre = e.srcElement.value;
        var edit = e.srcElement.nextElementSibling;
        edit.style.display = 'flex';
    }
    blur(e: any) {
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
        console.log(file);

        this.formUser.patchValue({
            avatar: evt.target.files[0],
        });
        console.log(this.formUser);
    }
}
