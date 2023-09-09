import { Component } from '@angular/core';
import { Data01 } from '../data01';
import { Path01Service } from '../path01.service';

@Component({
  selector: 'app-input02',
  templateUrl: './input02.component.html',
  styleUrls: ['./input02.component.css']
})
export class Input02Component {
  constructor(private path01Service: Path01Service) {}
  data01: Data01 = {
    prop01: "prop01value",
    prop02: 3
  }
  data01a: Data01 = {
    prop01: "",
    prop02: 0
  };

  getData01a() : void {
    //this.data01a = this.path01Service.getData01();
    this.path01Service.getData01().subscribe(data01a => this.data01a = data01a);
  }

  ngOnInit(): void {
    this.getData01a();
  }
}
