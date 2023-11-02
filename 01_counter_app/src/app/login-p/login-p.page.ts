import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.page.html',
  styleUrls: ['./login-p.page.scss'],
})
export class LoginPPage implements OnInit {

  rutInput: string;
  isInputValid: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  onRutInputChange() {
    // Verifica si el valor del campo de entrada contiene solo números
    this.isInputValid = /^[0-9Kk\-]+$/.test(this.rutInput);
  }
  validateRut() {
    // Agregar lógica para validar el RUT aquí
    const rut = this.rutInput;
    if (this.isValidRut(rut)) {
      // RUT válido
      console.log('RUT válido');
    } else {
      // RUT inválido
      console.log('RUT inválido');
    }
  }

  isValidRut(rut: string): boolean {
    // Expresión regular para validar RUT sin punto ni guión con dígito verificador
    const rutPattern = /^\d{7,8}-?(\d|k|K)$/;
    if (!rutPattern.test(rut)) {
      return false; // El formato del RUT es incorrecto
    }
  
    // Extraer el número y el dígito verificador
    const [rutNumber, rutDv] = rut.split('-');
    // Validar el dígito verificador
    return this.calculateDv(rutNumber) === rutDv.toUpperCase();
  }
  
  calculateDv(rutNumber: string): string {
    // Elimina cualquier posible punto o guión en el RUT
    rutNumber = rutNumber.replace(/\./g, '').replace(/-/g, '');
  
    // Convierte el RUT a un número entero
    let rut = parseInt(rutNumber, 10); // Cambiamos 'const' a 'let'
  
    // Calcula el dígito verificador
    let suma = 0;
    let multiplicador = 2;
  
    while (rut > 0) {
      const digito = rut % 10;
      suma += digito * multiplicador;
  
      rut = Math.floor(rut / 10);
  
      multiplicador++;
      if (multiplicador > 7) {
        multiplicador = 2;
      }
    }
  
    const dvCalculado = 11 - (suma % 11);
  
    // En caso de que el DV sea 11, lo reemplazamos por '0'
    if (dvCalculado === 11) {
      return '0';
    }
    // En caso de que el DV sea 10, lo reemplazamos por 'K'
    if (dvCalculado === 10) {
      return 'K';
    }
  
    return dvCalculado.toString();
  }
}
