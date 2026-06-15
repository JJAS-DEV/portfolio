import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Mensaje } from '../../models/mensaje';
import emailjs from '@emailjs/browser';   // 👈 Importa la librería correcta
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  url: string = 'img/ninja.png';

    constructor(private router: Router) {}   // 👈 Inyecta Router
  items:Mensaje={
  nombre: "",
  apellido: "",
  correo: "",
  asunto: "",
  mensaje: ""
  }
 addItem(mensaje: NgForm): void {
    if (mensaje.valid) {
      emailjs.send(
        'service_xw1hklq',   // 👉 tu Service ID
        'template_hpbgxd8', // 👉 tu Template ID
        mensaje.value,      // 👉 datos del formulario
        { publicKey: '0GsSM9Vg5vu8z8LPF' } // 👉 tu Public Key real
      ).then(() => {
        Swal.fire({
          title: '✅ Correo enviado',
          text: 'Tu mensaje fue enviado correctamente',
          icon: 'success',
          confirmButtonColor: '#4CAF50'
        }).then(() => {
          // 👇 Redirige al inicio después de cerrar el SweetAlert
          this.router.navigate(['/presentacion']);
        });
        mensaje.resetForm();
      }).catch(err => {
        Swal.fire({
          title: '❌ Error',
          text: 'Hubo un problema al enviar el correo',
          icon: 'error',
          confirmButtonColor: '#d33'
        });
        console.error('❌ Error al enviar correo', err);
      });
    } else {
      Swal.fire({
        title: '⚠️ Formulario inválido',
        text: 'Por favor completa todos los campos requeridos',
        icon: 'warning',
        confirmButtonColor: '#f39c12'
      });
    }
  }



}
