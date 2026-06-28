import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil/perfil.service';
import { Perfil } from '../../models/perfil';

@Component({
  selector: 'perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css','../presentacion/presentacion.component.css']
})
export class PerfilComponent implements OnInit {

  perfil!:Perfil;
  open:boolean=false;

  constructor(private perfilInformacion:PerfilService){

    
  }
  ngOnInit(): void {
        this.perfil=this.perfilInformacion.mostrarInformacion();

  }

  
  openModal(){
    this.open=!this.open
  }

}
