import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  // Array de imágenes del carrusel
  images: string[] = [
    '/dace1.png',
    '/dace2.png',
    '/dace3.png'
  ];

  // Índice de la imagen actual
  currentIndex: number = 0;

  ngOnInit(): void {
    this.startCarousel();
  }

  // Inicia el carrusel cambiando la imagen cada 3 segundos
  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Cambia cada 3 segundos
  }

  // Cambia la imagen activa al hacer clic en un indicador
  changeImage(index: number): void {
    this.currentIndex = index;
  }
  setCurrentIndex(index: number): void {
    this.currentIndex = index;
  }

}
