import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: any[] = [];
  
  constructor() { }

  cadastrarUsuario(usuario: any) {
    
    this.usuarios.push(usuario);
  }

  getUsuarios(): any[] {
    return this.usuarios;
  }
}
