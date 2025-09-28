import { Routes } from '@angular/router';
import { PresentacionComponent } from './components/presentacion/presentacion.component';

export const routes: Routes = [  
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/presentacion'
  }
,
    {path:'presentacion',


    component:PresentacionComponent,
    

},  { path: '**', component: PresentacionComponent }];
