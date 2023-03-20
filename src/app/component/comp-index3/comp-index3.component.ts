import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TempDataSaveService } from 'src/app/temp-data-save.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-comp-index3',
  templateUrl: './comp-index3.component.html',
  styleUrls: ['./comp-index3.component.css'],
})
export class CompIndex3Component implements OnInit {
  constructor(
    private router: Router,
    private service: TempDataSaveService,
    private location: Location
  ) {}
  nextBtn;
  url = '';
  name;
  ngOnInit(): void {
    this.name = this.service.getName();
    this.url = this.service.getAvatar();
  }

  nextHandler(value) {
    this.router.navigate([`${value}`]);
  }

  back() {
    this.location.back();
  }
}
