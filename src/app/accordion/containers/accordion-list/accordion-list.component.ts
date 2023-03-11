import { Component, Input } from '@angular/core';
import { faCaretDown, faFan, faFileWaveform, faGears, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { WindmillSite } from 'typings';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.css']
})
export class AccordionListComponent {

  faCaretDown = faCaretDown;
  faLocationPin = faLocationPin;
  faFileWaveform = faFileWaveform;
  faGears = faGears;
  faFan = faFan;

  @Input() siteList: WindmillSite[] = [];
}
