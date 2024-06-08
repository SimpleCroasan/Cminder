import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nota} from './nota';
import { NotaService} from './nota.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nota',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent implements OnInit {
  asignaturaId: number;
  notas: Nota[] = [];
  nuevaNota: Nota = new Nota();
  mostrarModalAgregar = false;


  constructor(private route: ActivatedRoute, private notaService: NotaService,private router: Router) { }

  ngOnInit(): void {
    this.asignaturaId = Number(this.route.snapshot.paramMap.get('id'));
    this.getNotas();
  }

  getNotas(): void {
    this.notaService.getNotas(this.asignaturaId).subscribe(notas => this.notas = notas);
  }

  confirmarAgregar(): void {
    this.nuevaNota = new Nota(); // Crear una nueva nota vacía
    this.mostrarModalAgregar = true;
  }
  
  agregarNota(): void {
    if (this.nuevaNota.titulo && this.nuevaNota.valor && this.nuevaNota.porcentaje) {
      this.nuevaNota.asignaturaId = this.asignaturaId;
      this.notaService.insertarNota(this.nuevaNota).subscribe(nota => {
        this.notas.push(nota);
        this.nuevaNota = new Nota();
        this.mostrarModalAgregar = false;
      });
    }
  }
  
  actualizarTitulo(event: any): void {
    this.nuevaNota.titulo = event.target.value;
  }
  
  actualizarValor(event: any): void {
    this.nuevaNota.valor = Number(event.target.value);
  }
  
  actualizarPorcentaje(event: any): void {
    this.nuevaNota.porcentaje = Number(event.target.value);
  }



  onOkClick(): void {
    this.notaService.calcularNotaFinal(this.asignaturaId);
    
    this.router.navigate(['/asignaturas']);
  
  }

  irAAsignaturas(): void {
    this.router.navigate(['/asignaturas']); 
  }

  borrarNota(nota: Nota): void {
    if (nota && nota.id !== undefined) {
      this.notaService.borrarNota(nota.id).subscribe(() => {
        this.notas = this.notas.filter(n => n !== nota);
        
      });
      location.reload();
    }
  }

  
  
}