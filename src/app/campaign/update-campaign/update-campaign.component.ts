import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import campaignJson from '../../../utils/payload-rmp.json';
import brandJson from '../../../utils/brands.json';
import { UntypedFormGroup, FormBuilder, Validators } from "@angular/forms";
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
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
    const id = this.route?.snapshot?.paramMap?.get("id");
    this.campaign = campaignJson.requests?.find(campaign => campaign?.requestId === Number(id));
  }


}
