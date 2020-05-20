import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EsercitazioneBergamo2';

  cliccami(event){
    console.log('cliccato')
    event.stopPropagation();
  }
}
