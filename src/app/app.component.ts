import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todounopar-ui';

  constructor(private config: PrimeNGConfig){}

  ngOnInit() {
    this.config.setTranslation({
      accept: 'Sim',
      reject: 'Cancelar'
    });
  }
}
