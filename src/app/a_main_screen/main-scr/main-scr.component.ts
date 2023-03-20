import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CompIndex1Component } from 'src/app/component/comp-index1/comp-index1.component';
import { TempDataSaveService } from 'src/app/temp-data-save.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-main-scr',
  templateUrl: './main-scr.component.html',
  styleUrls: ['./main-scr.component.css']
})
export class MainScrComponent implements OnInit {


  start=true;

  constructor(private router: ActivatedRoute, private service:TempDataSaveService) {
    // this.start=true;
   }
   backTo='';

  ngOnInit(): void {
        this.backTo=this.router.snapshot.paramMap.get('id');
       if(this.backTo==null ||this.backTo=='' || this.backTo==undefined)
       {
        setTimeout(() => {
          this.start = false;

        }, 2000);
      }
    else{
      this.service.getName()
            this.start=false;
        }

       }


}
