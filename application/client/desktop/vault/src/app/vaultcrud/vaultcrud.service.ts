import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class VaultcrudService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(vault): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/vault', vault);
    }
    GpUpdate(vault): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/vault', vault);
    }
    GpSearch(vault): Observable<any> {
        const temp = [];
 	 	const objectKeyPair = Object.entries(vault);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	return this.http.get(this.sharedService.DESKTOP_API + `/vault/get/search${temp.length > 0 ? `?${temp.join('&')}` : ''}`);
    }
    GpDelete(vaultId): Observable<any> {
        return this.http.delete(this.sharedService.DESKTOP_API + '/vault/' + vaultId);
    }
    (): Observable<any> {
        
    }
}