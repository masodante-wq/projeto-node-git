const db = require('../config/database');

class TecnicoModel {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM tecnicos');
    return rows;
  }

  static async create(tecnico) {
    const { nome } = tecnico;

    const [result] = await db.query(
      'INSERT INTO tecnicos (nome) VALUES (?)',
      [nome]
    );

    return result.insertId;
  }

  static async update(id, tecnico) {
    const { nome } = tecnico;

    const [result] = await db.query(
      'UPDATE tecnicos SET nome = ? WHERE id_tecnico = ?',
      [nome, id]
    );

    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.query(
      'DELETE FROM tecnicos WHERE id_tecnico = ?',
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = TecnicoModel;
