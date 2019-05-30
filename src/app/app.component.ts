import { AfterViewInit, Component, NgZone } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular NgFormbuilder';

  constructor(private ngZone: NgZone) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // delay 2 seconds waiting scripts to load
      this.ngZone.runOutsideAngular(() => {
        $(document.getElementById('fb-editor')).formBuilder();
      });

    }, 2000)
  }
}
