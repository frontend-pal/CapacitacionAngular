import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado = 0;
  texto = '0';

  sumar() {
    this.resultado++;
    this.texto = this.resultado.toString();
  }

  restar() {
    this.resultado--;
    this.texto = this.resultado.toString();
  }
}
