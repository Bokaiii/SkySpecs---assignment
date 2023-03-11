import { Component, Input, OnInit } from '@angular/core';
import { faCaretDown, faCaretRight, faFile, faFileWaveform, faGears, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  faCaretDown = faCaretDown;
  faCaretRight = faCaretRight;
  faFileWaveform = faFileWaveform;
  faGears = faGears;
  faFile = faFile;

  @Input() header: string = '';
  @Input() icon: IconDefinition = this.faGears;
  @Input() hidden: boolean = false;
  @Input() greyFiles: number = 0;
  @Input() yellowFiles: number = 0;

  ngOnInit(): void {
    
  }

  public toggleAccordion(): void {
    this.hidden = !this.hidden;
  }
}
