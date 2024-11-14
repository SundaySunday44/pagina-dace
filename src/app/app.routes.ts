import { Routes } from '@angular/router';
import { ContactoDaceComponent } from './contacto-dace/contacto-dace.component';
import { ServiciosDaceComponent } from './servicios-dace/servicios-dace.component';

export const routes: Routes = [
    { path: 'contacto-dace', component: ContactoDaceComponent },
    { path: 'servicios-dace', component : ServiciosDaceComponent }
];
