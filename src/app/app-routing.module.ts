import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './campaign/list/list.component';
import { UpdateCampaignComponent } from './campaign/update-campaign/update-campaign.component';

const routes: Routes = [
  {
    path: "",
    component: ListComponent
  },
  { 
    path: "campaign/update/:id",
    component: UpdateCampaignComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
