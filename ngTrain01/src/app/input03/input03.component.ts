import { Component, Input } from '@angular/core';
import { Data01 } from '../data01';
import { Path02Service } from '../path02.service';

@Component({
  selector: 'app-input03',
  templateUrl: './input03.component.html',
  styleUrls: ['./input03.component.css']
})
export class Input03Component {
  constructor(private path02Service: Path02Service) {}
  data01: Data01 = {
    prop01: "prop01value",
    prop02: 5
  }
  @Input() data01a: Data01 = {
    prop01: "",
    prop02: 0
  };

  getData01a() : void {
    //this.data01a = this.path01Service.getData01();
    this.path02Service.getData01().subscribe(data01a => this.data01a = data01a);
  }

  ngOnInit(): void {
    this.getData01a();
  }

  btn02OnClick(): void {

    //this.svcTrans02.put01(this.dtoTrans02).subscribe(
    this.path02Service.put01(this.data01a).subscribe(
      retObj => {
        console.log("==retObj==");
        console.log(retObj);
        console.log("==retObj End==");
        //this.optDtoTrans01Out = optDtoTrans01Out;
        if (null == retObj) {
          //this.svcMessage.add("retObj is null.");
          console.log("retObj is null.");
        }
        else {
            
          this.data01a = retObj;
        }
      }
    );
  }


}
