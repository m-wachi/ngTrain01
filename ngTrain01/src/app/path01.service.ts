import { Injectable } from '@angular/core';
import { Data01 } from './data01';

@Injectable({
  providedIn: 'root'
})
export class Path01Service {

  constructor() { }

  getData01(): Data01 {
    return {prop01: "pro01Value2", prop02: 5};
  }
}
