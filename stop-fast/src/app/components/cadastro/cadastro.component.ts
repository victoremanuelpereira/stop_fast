import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/cadastro.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  user: any = {};
  usuariosCadastrados: any[] = [];

  constructor(private usuarioService: UsuarioService) {}



  cadastrarUsuario() {
    this.usuarioService.cadastrarUsuario(this.user); 
    this.usuariosCadastrados = this.usuarioService.getUsuarios(); 
    this.user = {}; 
  }
}
