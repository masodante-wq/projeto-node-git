const db = require('../config/database');

class PecaModel {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM pecas');
    return rows;
  }

  static async create(peca) {
    const { descricao } = peca;

    const [result] = await db.query(
      'INSERT INTO pecas (descricao) VALUES (?)',
      [descricao]
    );

    return result.insertId;
  }

  static async update(id, peca) {
    const { descricao } = peca;

    const [result] = await db.query(
      'UPDATE pecas SET descricao = ? WHERE id_peca = ?',
      [descricao, id]
    );

    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.query(
      'DELETE FROM pecas WHERE id_peca = ?',
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = PecaModel;
