import { Routes } from '@angular/router';
import { ContactoDaceComponent } from './contacto-dace/contacto-dace.component';
import { ServiciosDaceComponent } from './servicios-dace/servicios-dace.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'contacto-dace', component: ContactoDaceComponent },
    { path: 'servicios-dace', component : ServiciosDaceComponent }
];
