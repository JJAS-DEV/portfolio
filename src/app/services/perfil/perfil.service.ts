import { Injectable } from '@angular/core';
import { Perfil } from '../../models/perfil';
import { perfil } from '../../data/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor() { }
  mostrarInformacion():Perfil{
    return perfil;
  }
}
