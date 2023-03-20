import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScrComponent } from './a_main_screen/main-scr/main-scr.component';
import { FormsModule } from '@angular/forms';
import { CompIndex1Component } from './component/comp-index1/comp-index1.component';
import { CompIndex2Component } from './component/comp-index2/comp-index2.component';
import { CompIndex3Component } from './component/comp-index3/comp-index3.component';
import { CompIndex4Component } from './component/comp-index4/comp-index4.component';
@NgModule({
  declarations: [
    AppComponent,
    MainScrComponent,
    CompIndex1Component,
    CompIndex2Component,
    CompIndex3Component,
    CompIndex4Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
