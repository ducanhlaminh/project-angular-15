import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UseServiceService } from 'src/app/module/user/use-service.service';

@Component({
    selector: 'app-info-user',
    templateUrl: './info-user.component.html',
    styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit {
    formUser: any;
    @ViewChild('upload') upload: any;
    constructor(private UserService: UseServiceService) {}
    ngOnInit() {
        console.log(this.UserService.userInfor);

        this.formUser = new FormGroup({
            avatar: new FormControl(''),
            name: new FormControl(this.UserService.userInfor.user?.name, Validators.required),
            email: new FormControl(this.UserService.userInfor.user?.email, Validators.required),
            phone: new FormControl(this.UserService.userInfor.user?.phone, Validators.required),
        });
    }

    onSubmit(e: any) {
        console.log(e.value);

        this.UserService.updateInfor(e.value).subscribe((res: any) => {
            if (res.status === 0) {
                this.UserService.getCurrent().subscribe((res: any) => (this.UserService.userInfor = res.user));
            }
        });
    }
    uploadAvatar() {
        this.upload.nativeElement.click();
    }
}
