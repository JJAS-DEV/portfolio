import { Routes } from '@angular/router';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  // 1. Ruta principal
 {
        path:'',redirectTo:'/presentacion',  pathMatch:'full'   },


    {
        path:'presentacion',
        component:PresentacionComponent
    },

    {
        path:'contacto',
        component:FormComponent
    },
          { path: '**', component: PresentacionComponent }
  
   
  

  // 2. Si escriben /sad, redirige automáticamente a la raíz ''
];


