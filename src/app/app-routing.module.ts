import { SamplePageViiComponent } from './sample-page-vii/sample-page-vii.component';
import { SamplePageViComponent } from './sample-page-vi/sample-page-vi.component';
import { SamplePageVComponent } from './sample-page-v/sample-page-v.component';
import { SamplePageIvComponent } from './sample-page-iv/sample-page-iv.component';
import { SamplePageIiiComponent } from './sample-page-iii/sample-page-iii.component';
import { SamplePageIiComponent } from './sample-page-ii/sample-page-ii.component';
import { SamplePageIComponent } from './sample-page-i/sample-page-i.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
  {path : '', component: TestPageComponent,children:[
    {path : 'page-1',component:SamplePageIComponent},
    {path : 'page-2',component:SamplePageIiComponent},
    {path : 'page-3',component:SamplePageIiiComponent},
    {path : 'page-4',component:SamplePageIvComponent},
    {path : 'page-5',component:SamplePageVComponent},
    {path : 'page-6',component:SamplePageViComponent},
    {path : 'page-7',component:SamplePageViiComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
