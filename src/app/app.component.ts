import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown';
  link?:string;
  showMe(val:string) {
    if(val=="win")
    this.link="/assets/windows.png";
    else if(val=="lin")
    this.link="/assets/linux.png";
    else if(val=="mac")
    this.link="/assets/mac.png";
    else if(val=="ubu")
    this.link="/assets/Ubuntoos.png";
    else
    this.link="none";
  }
  num?:string;
   Date = new Date;
   ShowState(value:string){

   }
}
