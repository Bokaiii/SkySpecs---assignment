import { Component, OnInit } from '@angular/core';
import {
  faStar,
  faWarning,
  faCalendar,
  faKeyboard,
  faLocationPin,
  faCaretRight,
  faCaretDown,
  faFileWaveform,
  faGears,
  faFan,
} from '@fortawesome/free-solid-svg-icons';
import { Envelope, WindmillComponent, Windmill, WindmillSite } from 'typings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SkySpecs-assignment';
  faStar = faStar;
  faWarning = faWarning;
  faCalendar = faCalendar;
  faKeyboard = faKeyboard;
  faLocationPin = faLocationPin;
  faCaretRight = faCaretRight;
  faCaretDown = faCaretDown;
  faFileWaveform = faFileWaveform;
  faGears = faGears;
  faFan = faFan;

  public siteList: WindmillSite[] = [];

  ngOnInit(): void {
    this.initList();
  }

  public initList(): void {
    const envelopes: Envelope[] = [
      {name: 'Envelope Spectrum HST1', description: 'Bachmann/7/HST1/7.120.x.x/0'},
      {name: 'Envelope Spectrum HST1-AX', description: 'Bachmann/6/HST1-AX/6.120.x.x/0'},
      {name: 'Envelope Spectrum PST1', description: 'Bachmann/4/PST1/4.120.x.x/0'},
      {name: 'Envelope Spectrum PST2', description: 'Bachmann/5/PST2/5.120.x.x/0'},
      {name: 'Envelope Spectrum HST1', description: 'Bachmann/7/HST1/7.100.x.x/0'},
      {name: 'Envelope Spectrum HST1-AX', description: 'Bachmann/6/HST1-AX/6.100.x.x/0'},
      {name: 'Envelope Spectrum PST1', description: 'Bachmann/4/PST1/4.100.x.x/0'},
      {name: 'Envelope Spectrum PST2', description: 'Bachmann/5/PST2/5.100.x.x/0'},
    ];

    const gearBoxComponents: WindmillComponent[] = [
      {name: 'Low Speed Shaft', components: [], envelopes: []},
      {name: 'Intermediate Shaft', components: [], envelopes: []},
      {name: 'High Speed Shaft', components: [], envelopes: []}
    ];

    const components: WindmillComponent[] = [
      {name: 'Rotor Shaft',
      components: [
        {name: 'Bearing',
        components: [{name: 'RE', components: [], envelopes: []}, {name: 'NRE', components: [], envelopes: []}],
        envelopes: []
        }],
      envelopes: []},
      {name: 'Gear Box', components: gearBoxComponents, envelopes: envelopes},
      {name: 'Generator Shaft', components: [], envelopes: []}
    ];

    const windmills: Windmill[] = [
      {name: 'T-01', components: components},
      {name: 'T-02', components: components}
    ];

    const site: WindmillSite = {
      name: 'Bachmann Site',
      windmills: windmills
    };

    const site2: WindmillSite = {
      name: 'Test Site',
      windmills: windmills
    };

    this.siteList.push(site);
    this.siteList.push(site2);
  }
}
