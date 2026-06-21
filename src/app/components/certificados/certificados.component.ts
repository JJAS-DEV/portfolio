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
  certficados:certificado[]=[]
  ngOnInit(): void {
    this.certficados=this.service.findAll();

  }

  constructor(private service:CertificadoService ){

  }


}
