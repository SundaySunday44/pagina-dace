import { Routes } from '@angular/router';
import { ContactoDaceComponent } from './contacto-dace/contacto-dace.component';
import { ServiciosDaceComponent } from './servicios-dace/servicios-dace.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent},
    { path: 'contacto-dace', component: ContactoDaceComponent },
    { path: 'servicios-dace', component : ServiciosDaceComponent },
    {path: 'quienes-somos', component: QuienesSomosComponent}
];
