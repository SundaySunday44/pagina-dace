import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-dace',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto-dace.component.html',
  styleUrl: './contacto-dace.component.css'
})
export class ContactoDaceComponent {
  
  asunto: string = '';
  mensaje: string = '';
  numero: string = '593992766321';

  enviarMensaje(){
    if(this.mensaje.trim() && this.asunto.trim()){
      const url = `https://wa.me/${this.numero}?text=${encodeURIComponent('Hola gracias por comunicarte, pronto te atenderemos: ASUNTO: ' + this.asunto + ' MENSAJE: ' + this.mensaje)}`;
      window.open(url, '_blank');
      this.asunto = '';
      this.mensaje = '';
    }else{
      console.error('Por favor, completa todos los campos.');
    }
  }
}
