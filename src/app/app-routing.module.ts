import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScrComponent } from './a_main_screen/main-scr/main-scr.component';
import { CompIndex1Component } from './component/comp-index1/comp-index1.component';
import { CompIndex2Component } from './component/comp-index2/comp-index2.component';
import { CompIndex3Component } from './component/comp-index3/comp-index3.component';

import { CompIndex4Component } from './component/comp-index4/comp-index4.component';



const routes: Routes = [
  {path: '', redirectTo:'/main', pathMatch:'full' },


  {path : "main", component: MainScrComponent},
  {path : "back/:id", component: MainScrComponent},
 {path : "index1", component: CompIndex1Component},
 {path : "index2", component: CompIndex2Component},
 {path : 'index3', component: CompIndex3Component},
 {path : 'index4/:name', component: CompIndex4Component},
 {path: '**', redirectTo:'/main', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
