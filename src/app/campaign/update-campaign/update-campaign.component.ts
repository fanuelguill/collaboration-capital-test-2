import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import campaignJson from '../../../utils/payload-rmp.json';
import brandJson from '../../../utils/brands.json';
import { UntypedFormGroup, FormBuilder, Validators } from "@angular/forms";
import { MAT_DATE_FORMATS } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class UpdateCampaignComponent implements OnInit {

  campaign: any;
  brands = brandJson;
  updatingForm: UntypedFormGroup;

  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder) { 
    this.updatingForm = this._formBuilder.group({
      brandId: [this.campaign?.brand?.brandId, Validators.required ],
      campaignName: [this.campaign?.campaignName, Validators.required],
    })
  }

  ngOnInit() {
    // console.log("this.route?.snapshot?.paramMap?.get('id')", this.route?.snapshot?.paramMap?.get("id"));
    const id = this.route?.snapshot?.paramMap?.get("id");
    this.campaign = campaignJson.requests?.find(campaign => campaign?.requestId === Number(id));
    console.log("this.campaign", this.campaign);
  }


}
