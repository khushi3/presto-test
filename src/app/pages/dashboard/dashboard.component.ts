import {Component, ViewEncapsulation} from '@angular/core';
import { Directive } from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')

})
export class Dashboard {

 
}
