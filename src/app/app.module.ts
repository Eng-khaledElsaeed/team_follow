import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SamplePageIComponent } from './sample-page-i/sample-page-i.component';
import { SamplePageIiComponent } from './sample-page-ii/sample-page-ii.component';
import { SamplePageIiiComponent } from './sample-page-iii/sample-page-iii.component';
import { SamplePageIvComponent } from './sample-page-iv/sample-page-iv.component';
import { SamplePageVComponent } from './sample-page-v/sample-page-v.component';
import { SamplePageViComponent } from './sample-page-vi/sample-page-vi.component';
import { SamplePageViiComponent } from './sample-page-vii/sample-page-vii.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    SamplePageIComponent,
    SamplePageIiComponent,
    SamplePageIiiComponent,
    SamplePageIvComponent,
    SamplePageVComponent,
    SamplePageViComponent,
    SamplePageViiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
