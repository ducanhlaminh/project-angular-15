import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UseServiceService {
    userInfor: any;
    constructor(private http: HttpClient) {}
    login(email: string, password: string) {
        return this.http.post('http://localhost:8888/api/v1/auth/login', { email, password }, {});
    }
    logout() {
        this.userInfor = null;
        localStorage.setItem('token', '');
    }
    getCurrent() {
        return this.http.get('http://localhost:8888/api/v1/user/current');
    }
    signup(email: string, password: string) {
        return this.http.post('http://localhost:8888/api/v1/auth/register', { email, password });
    }
    updateInfor(data: any) {
        return this.http.put('http://localhost:8888/api/v1/user/', data);
    }
    getBillsUser(data: any) {
        return this.http.get('http://localhost:8888/api/v1/bill2', { params: data });
    }
    getAvatar(id: any) {
        return this.http.get('http://localhost:8888/api/v1/user/avatar', { params: { id: id } });
    }
}
