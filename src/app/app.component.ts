import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  name = "Ram"
  type = "text";
  MyClass = "Show"

  col ="3";
  constructor(){
    setTimeout(() => {
      this.type = "pass";
    }, 2000);
//alert("Hello Stephin");
  }

  getNUMBER(a:number,b:number,c:number) {
    return a+b+c
  }

  Onclick(name:string)
{
  return this.name = name;
}
setTitle(elem:any){
this.title = elem.target.value
  
}
showall : boolean =false;
EventChange(){
  
  this.showall = !this.showall
  
}



}
