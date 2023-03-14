import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormBuilder, Validators } from "@angular/forms";
import campaignJson from '../../../utils/payload-rmp.json';
import brandJson from '../../../utils/brands.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  campaigns = campaignJson.requests;
  brands = brandJson;
  filterForm: UntypedFormGroup;
  
  today = Date.now();

  constructor(private _formBuilder: FormBuilder, private router: Router) {
    this.filterForm = this._formBuilder.group({
      searchValue: ['', Validators.required],
      brandId: [ '' ]
    })
  }

  ngOnInit() {  }

  filterByBrand (brandId: any) {
    console.log("Number(brandId)", Number(brandId));

    if (this.filterForm?.get('brandId')?.value) {
      this.campaigns = campaignJson?.requests?.filter(campaign => Number(campaign?.brand?.brandId) === Number(brandId))
    } else {
      this.campaigns = campaignJson?.requests;
    }
  }

  filterSearch (searchValue: any) {
    this.campaigns = campaignJson?.requests?.filter(campaign => campaign?.campaignName?.toLowerCase().includes(searchValue?.toLowerCase()))
  }

  selectCampaign (requestId: any) {
    this.router.navigate(['/campaign/update', requestId]);
  }

}
