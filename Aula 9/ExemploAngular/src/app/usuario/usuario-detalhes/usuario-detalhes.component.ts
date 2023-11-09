import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css'],
})
export class UsuarioDetalhesComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {}

  salvar(usuario) {
    this.usuarioService.inserirUsuario(usuario.value).subscribe(() => {
      alert('Salvo com sucesso!');
      this.activeModal.close();
    });
  }
}
