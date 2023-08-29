import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const route:Routes=[
  {
    path:"",
    pathMatch:'full',
    component: PortfolioComponent
  }
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class PortfolioRoutingModule { }
