const db = require('../config/database');

class UsuarioModel {
  static async findAll() {
    const [rows] = await db.query('SELECT id_usuario, nome, email, perfil FROM usuarios');
    return rows;
  }

  static async findByEmail(email) {
    const [rows] = await db.query(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );
    return rows[0];
  }

  static async create(usuario) {
    const { nome, email, senha_hash, perfil } = usuario;

    const [result] = await db.query(
      `INSERT INTO usuarios (nome, email, senha_hash, perfil)
       VALUES (?, ?, ?, ?)`,
      [nome, email, senha_hash, perfil]
    );

    return result.insertId;
  }

  static async update(id, usuario) {
    const { nome, email, senha_hash, perfil } = usuario;

    const [result] = await db.query(
      `UPDATE usuarios SET
        nome = ?,
        email = ?,
        senha_hash = ?,
        perfil = ?
       WHERE id_usuario = ?`,
      [nome, email, senha_hash, perfil, id]
    );

    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.query(
      'DELETE FROM usuarios WHERE id_usuario = ?',
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = UsuarioModel;
