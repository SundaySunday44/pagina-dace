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
  images: string[] = [
    '/dace1.png',
    '/dace2.png',
    '/dace3.png'
  ];
  currentIndex: number = 0;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Cambia cada 3 segundos
  }
}
