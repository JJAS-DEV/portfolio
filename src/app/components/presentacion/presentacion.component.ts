import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';
import { Lightbox, LightboxModule } from 'ngx-lightbox';


@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [CommonModule, LightboxModule],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent implements OnInit {
   albums: { src: string; caption: string; thumb: string }[] = [];
  albumSEgundo: { src: string; caption: string; thumb: string }[] = [];
  
  

  constructor( private lightbox: Lightbox,  private route: ActivatedRoute, private scroller: ViewportScroller,private router:Router) {
      this.albums = [
         {
        src:  'SistemaInventario/SistemaInventario(4).png',
        caption: 'Imagen 3',
        thumb: 'SistemaInventario/SistemaInventario(4).png'
      },
      {
        src:  'SistemaInventario/SistemaInventario(5).png',
        caption: 'Imagen 1',
        thumb: 'SistemaInventario/SistemaInventario(5).png'
      },
      {
        src:  'SistemaInventario/SistemaInventario(6).png',
        caption: 'Imagen 2',
        thumb: 'SistemaInventario/SistemaInventario(6).png'
      },
     
      {
        src:  'SistemaInventario/sistemaInventario(1).jpeg',
        caption: 'Imagen 4',
        thumb: 'SistemaInventario/sistemaInventario(1).jpeg'
      },
      {
        src:  'SistemaInventario/SistemaInventario(2).jpeg',
        caption: 'Imagen 5',
        thumb: 'SistemaInventario/SistemaInventario(2).jpeg'
      },
      
      {
        src:  'SistemaInventario/SistemaInventario(3).jpeg',
        caption: 'Imagen 6',
        thumb: 'SistemaInventario/SistemaInventario(3).jpeg'
      }
      
    ];

    this.albumSEgundo = [
      {
        src:  'proyecto2/proyecto_login.png', 
        caption: 'Imagen 1',
        thumb: 'proyecto2/proyecto_login.png'
      }
    ];
   }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.scroller.scrollToAnchor(fragment);
        }, 100); // espera para que el DOM esté listo
      }
    });


    
  
    
  }


 open(index: number, album: { src: string; caption: string; thumb: string }[]): void {
    this.lightbox.open(album, index);
  }

  close(): void {
    this.lightbox.close();
  }
  
  fotoSegundoProyecto:String="proyecto2/proyecto_login.png";

  indiceActual: number = 0;

  
scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
