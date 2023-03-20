import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TempDataSaveService {
  constructor() {}
  name;
  selectedAvatar;


  setName(userName) {
    this.name = userName;
    console.log('service', this.name);
  }

  setAvatar(value: any) {
    this.selectedAvatar = value;
  }
  getAvatar() {
    switch (this.selectedAvatar) {
      case "avatar_img1":
          return '../../../assets/avt1.png'
      case "avatar_img2":
          return '../../../assets/avt2.png'
      case "avatar_img3":
         return '../../../assets/avt3.png'
      case "avatar_img4":

  return '../../../assets/avt4.png'

      case "avatar_img5":
return '../../../assets/avt5.png'


      default:
        break;
    }


    return this.selectedAvatar;
  }

  getName() {
    return this.name;
  }

  nextBtn(vlaue) {
    if (vlaue.length > 0) {
      return false;
    } else {
      return true;
    }
  }

backBtn
setNextBtn(value)
{
this.backBtn=value;
}
 getNextBtn()
 {
  if(this.backBtn==''||this.backBtn==null||this.backBtn==undefined)
  {
    return false
  }
  else{
    return true;
  }
 }

}
