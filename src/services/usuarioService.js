
const UsuarioModel = require('../models/usuarioModel');

class UsuarioService {
  static async getAllUsuarios() {
    return await UsuarioModel.findAll();
  }

  static async createUsuario(usuario) {
    const existente = await UsuarioModel.findByEmail(usuario.email);
    if (existente) {
      throw new Error('Email já cadastrado.');
    }

    return await UsuarioModel.create(usuario);
  }

  static async updateUsuario(id, usuario) {
    const updatedRows = await UsuarioModel.update(id, usuario);
    if (updatedRows === 0) {
      throw new Error('Usuário não encontrado.');
    }
    return updatedRows;
  }

  static async deleteUsuario(id) {
    const deletedRows = await UsuarioModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Usuário não encontrado.');
    }
    return deletedRows;
  }
}

module.exports = UsuarioService;
