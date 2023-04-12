import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { param } from 'jquery';

@Injectable({
    providedIn: 'root',
})
export class UseServiceService {
    isLogin: boolean = false;
    constructor(private http: HttpClient) {}
    login(email: string, password: string) {
        return this.http.post('http://localhost:8888/api/v1/auth/login', { email, password }, {});
    }
    logout() {
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
    getBillsUserById(data: any) {
        return this.http.get('http://localhost:8888/api/v1/bill2/products', { params: { bid: data } });
    }
    getAvatar(id: string) {
        return this.http.get('http://localhost:8888/api/v1/user/avatar', { params: { id: id } });
    }
    deleteBill(data: any) {
        return this.http.delete('http://localhost:8888/api/v1/bill/update', { params: { data } });
    }
}
