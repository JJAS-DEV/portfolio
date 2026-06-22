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
  constructor(private service: CertificadoService) {

  }


}
