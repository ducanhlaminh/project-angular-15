import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
        providedIn: 'root',
})
export class CheckOutService {
        address: any = { provice: [], district: [], warn: '', detailAddress: '' };
        constructor(private http: HttpClient) {
                this.getProvice();
        }
        getProvice() {
                this.address.district = [];
                this.address.warn = [];
                this.http
                        .get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
                                headers: { token: '47678ca2-68a7-11ed-b190-ea4934f9883e' },
                        })
                        .subscribe((data: any) => {
                                this.address.provice = data.data;
                        });
        }
        getDistrict(province: any) {
                this.address.warn = [];
                this.http
                        .get('https://online-gateway.ghn.vn/shiip/public-api/master-data/district', {
                                headers: { token: '47678ca2-68a7-11ed-b190-ea4934f9883e' },
                                params: { province_id: province.ProvinceID },
                        })
                        .subscribe((data: any) => {
                                this.address.district = data.data;
                        });
        }
        getWarn(district: any) {
                this.http
                        .get('https://online-gateway.ghn.vn/shiip/public-api/master-data/ward', {
                                headers: { token: '47678ca2-68a7-11ed-b190-ea4934f9883e' },
                                params: { district_id: district.DistrictID },
                        })
                        .subscribe((data: any) => {
                                this.address.warn = data.data;
                        });
        }
}
