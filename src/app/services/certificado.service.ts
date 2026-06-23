import { Injectable } from '@angular/core';
import { certificado } from '../models/certificado';
import { certificados } from '../data/certificados';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  constructor() { }

  findAll():certificado[]{
    return certificados;

  }
}
