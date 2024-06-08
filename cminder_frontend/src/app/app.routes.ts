import { Routes } from '@angular/router';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { NotaComponent } from './nota/nota.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [

    {path: 'asignaturas', component: AsignaturasComponent
    
    },

    {path: '', component: InicioComponent

    },
    
    {path: 'notas/:id', component: NotaComponent

    }



];
