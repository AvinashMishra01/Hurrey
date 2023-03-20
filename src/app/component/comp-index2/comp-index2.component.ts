import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TempDataSaveService } from 'src/app/temp-data-save.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-comp-index2',
  templateUrl: './comp-index2.component.html',
  // styleUrls: ['../../a_main_screen/main-scr/main-scr.component.css']
  styleUrls: ['./comp-index2.component.css'],
})
export class CompIndex2Component implements OnInit {
  constructor(private router: Router, private service: TempDataSaveService, private location:Location) {}
  name;
  ngOnInit() {
    this.name = this.service.getName();
    console.log('thsi is second comp', this.name);

  }

  nextBtn = true;
  check(value) {
    var avatarEle = Array.from(document.getElementsByClassName('avt_img'));
    for (let index = 0; index < avatarEle.length; index++) {
      if (avatarEle[index].attributes[1].nodeValue != value) {
        avatarEle[index].classList.add('img_disabled');
      } else {
        avatarEle[index].classList.remove('img_disabled');
      }
    }
    this.service.setAvatar(value);
    this.nextBtn = this.service.nextBtn(value);
  }

  nextHandler(index3) {
    this.service.setNextBtn('display')
    this.router.navigate([`${index3}`]);
  }

back(){
 this.router.navigate(['/back/notStart'])
}

}
