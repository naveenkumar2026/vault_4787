import { Component, OnInit } from '@angular/core';
import { VaultcrudService } from './vaultcrud.service';

@Component({
  selector: 'app-vaultcrud',
  templateUrl: './vaultcrud.component.html',
  styleUrls: ['./vaultcrud.component.scss'],
})

export class VaultcrudComponent implements OnInit {
    queryId: any;
    columnDefs: any = [{ headerName: 'Credentials', field: 'credentials'  },{ headerName: 'User-id', field: 'user-id'  },];
    public vault = {
        type: '',
        credentials: '',
        user-id: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private vaultcrudService: VaultcrudService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpCreate() {
        this.vaultcrudService.GpCreate(this.vault).subscribe(data => {
            this.vault.type = ''
 	 	this.vault.credentials = ''
 	 	this.vault.user-id = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.vaultcrudService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.vaultcrudService.GpUpdate(this.vault).subscribe(data => {
            this.vault.type = ''
 	 	this.vault.credentials = ''
 	 	this.vault.user-id = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.vaultcrudService.GpSearch(this.vault).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.vaultcrudService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
}