import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
        providedIn: 'root',
})
export class UseServiceService {
        constructor(private http: HttpClient) {}
        login(email: string, password: string) {
                return this.http.post('http://localhost:8888/api/v1/auth/login', { email, password }, {});
        }
        logout() {
                localStorage.setItem('token', '');
        }
}
