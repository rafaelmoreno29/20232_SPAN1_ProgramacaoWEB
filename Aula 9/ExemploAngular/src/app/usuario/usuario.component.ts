import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioDetalhesComponent } from './usuario-detalhes/usuario-detalhes.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarios: any = [];
  constructor(
    private usuarioService: UsuarioService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.obterUsuarios().subscribe((data: any) => {
      this.usuarios = data;
    });
  }
  obterUsuarios() {
    return this.usuarioService.obterUsuarios();
  }

  abrirModal() {
    const modalRef = this.modalService.open(UsuarioDetalhesComponent);
    modalRef.result.then((retornoModal: any) => {
      this.obterUsuarios().subscribe((data: any) => {
        this.usuarios = data;
      });
    });
  }
}
