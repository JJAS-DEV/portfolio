import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.scroller.scrollToAnchor(fragment);
        }, 100); // espera para que el DOM esté listo
      }
    });
  }



  fotos: string[] = [
    'SistemaInventario/SistemaInventario(5).png',
    'SistemaInventario/SistemaInventario(4).png',
    'SistemaInventario/sistemaInventario(1).jpeg',
    'SistemaInventario/SistemaInventario(2).jpeg',
    'SistemaInventario/SistemaInventario(3).jpeg',
    'SistemaInventario/SistemaInventario(6).png',


  ];

  indiceActual: number = 0;

  siguienteFoto() {
    this.indiceActual = (this.indiceActual + 1) % this.fotos.length;
  }

  anteriorFoto() {
    this.indiceActual =
      (this.indiceActual - 1 + this.fotos.length) % this.fotos.length;
  }



}
