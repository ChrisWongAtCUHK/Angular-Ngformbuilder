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
        let $fbEditor = $(document.getElementById('fb-editor')),
          $formContainer = $(document.getElementById('fb-rendered-form')),
          fbOptions = {
            onSave: () => {
              $fbEditor.toggle();
              $formContainer.toggle();
              $('form', $formContainer).formRender({
                formData: formBuilder.formData
              });
            }
          },
          formBuilder = $fbEditor.formBuilder(fbOptions);

        $('.edit-form', $formContainer).click(() => {
          $fbEditor.toggle();
          $formContainer.toggle();
        });
      });

    }, 2000)
  }
}
