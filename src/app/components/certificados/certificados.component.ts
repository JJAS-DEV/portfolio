import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../../services/certificado.service';
import { certificado } from '../../models/certificado';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [],
  templateUrl: './certificados.component.html',

  styleUrls: [
    './certificados.component.css',
    '../presentacion/presentacion.component.css'
  ]
})
export class CertificadosComponent implements OnInit {
  certficados: certificado[] = []
  certifiadoSeleccionado!: certificado;

  ngOnInit(): void {
    this.certficados = this.service.findAll();



  }


  showMoadal: boolean = false;

  openModal(id: number) {

    let encontrado = this.certficados.find(c => c.id === id);
    if (encontrado) {
      this.certifiadoSeleccionado = encontrado;
    }

    this.showMoadal = !this.showMoadal;



  }
  siguiente(id: number) {
    id = id + 1;
    if (id < this.certficados.length) {
      let encontrado = this.certficados.find(c => c.id === id);
      if (encontrado) {
        console.log(id);
        this.certifiadoSeleccionado = encontrado;
      }
    } else {
      console.log("no hay mas certificados");
      this.atras(1);

    }
  }
  atras(id: number) {
    id = id - 1;
    if (id >= 0) {
    let encontrado = this.certficados.find(c => c.id === id);
    if (encontrado) {
      console.log(id);
      this.certifiadoSeleccionado = encontrado;
    }
  }else {
    this.certifiadoSeleccionado = this.certficados[this.certficados.length - 1];
  }
  }
  constructor(private service: CertificadoService) {

  }


}
