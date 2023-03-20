import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TempDataSaveService } from 'src/app/temp-data-save.service';
import Swal from "sweetalert2";
import { Location } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-comp-index4',
  templateUrl: './comp-index4.component.html',
  styleUrls: ['./comp-index4.component.css'],
})
export class CompIndex4Component implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private service: TempDataSaveService,
    private location: Location
  ) {}

  chooseRoom = 'Null';
  join = false;
  create = false;

  url;
  name;
  nextBtn = true;
  code = '';
  // create 1
  roomName;
  noOfplayer;
  //create next 1.1
  create1 = false;
  join1 = false;
  randomCode;

  ngOnInit(): void {
    this.chooseRoom = this.router.snapshot.paramMap.get('name');
    this.url = this.service.getAvatar();
    this.name = this.service.getName();
    this.nextBtn;
    this.create1;
    this.join1;
    if (this.chooseRoom == 'join') {
      this.join = true;
    } else {
      this.create = true;
    }
  }

  check(value) {
    if (value.length == '6') {
      this.nextBtn = false;
    } else {
      this.nextBtn = true;
    }
  }
  nameChoosen(value) {
    Swal.fire('info', 'No Page Found !', 'warning');
  }

  choosJoin1() {
    this.join = false;
    this.join1 = true;
  }

  checkRoomPlayer1(value) {
    this.roomName = value;
    this.checkRoomPlayer();
  }
  checkRoomPlayer2(value) {
    this.noOfplayer = value;
    this.checkRoomPlayer();
  }

  checkRoomPlayer() {
    if (
      this.roomName == '' ||
      this.roomName == null ||
      this.roomName == undefined ||
      this.noOfplayer == '' ||
      this.noOfplayer == null ||
      this.noOfplayer == undefined
    ) {
      this.nextBtn = true;
    } else {
      this.nextBtn = false;
    }
  }

  createChoosen() {
    this.create = false;
    this.randomNo();
    this.create1 = true;
    // ($("#create_next") as any).modal("show");
  }

  // next create
  randomNumber;
  randomNo() {
    this.randomNumber = Math.round(Math.random() * 10000000000);
  }

  info() {
    Swal.fire('Info', 'No other page Found !', 'warning');
  }
  back() {
    this.location.back();
  }
}
