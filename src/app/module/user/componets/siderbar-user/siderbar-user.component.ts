import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-siderbar-user',
    templateUrl: './siderbar-user.component.html',
    styleUrls: ['./siderbar-user.component.scss'],
})
export class SiderbarUserComponent {
    faChevronRight = faChevronRight;
}
