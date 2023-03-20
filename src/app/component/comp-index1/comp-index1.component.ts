import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, UrlSegment } from '@angular/router';
import { TempDataSaveService } from 'src/app/temp-data-save.service';

@Component({
  selector: 'app-comp-index1',
  templateUrl: './comp-index1.component.html',
  styleUrls: ['../../a_main_screen/main-scr/main-scr.component.css']
})
export class CompIndex1Component implements OnInit {

  // start;
  name;
  nextBtn=true;
  constructor(private router: Router, private service:TempDataSaveService) {
    // this.start=true;
   }



  ngOnInit(): void {
    this.name=this.service.getName();
    if(this.name==undefined ||this.name==null ||this.name=='')
{
  this.nextBtn=true;
}
else{
  this.nextBtn=false;
}
  }

  check(value)
  {
    this.nextBtn=this.service.nextBtn(value)
  }

  nameChoosen(pagename:any)
  {
    this.service.setNextBtn('display')
     this.service.setName(this.name)
    console.log(pagename);
   this.router.navigate([`${pagename}`])

  }

}
