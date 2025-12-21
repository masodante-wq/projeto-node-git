const db = require('../config/database');

class ClienteModel {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM clientes');
    return rows;
  }

  static async create(cliente) {
    const {
      tipo_cliente,
      nome,
      nome_fantasia,
      documento,
      telefone,
      email
    } = cliente;

    const [result] = await db.query(
      `INSERT INTO clientes 
      (tipo_cliente, nome, nome_fantasia, documento, telefone, email)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [tipo_cliente, nome, nome_fantasia, documento, telefone, email]
    );

    return result.insertId;
  }

  static async update(id, cliente) {
    const {
      tipo_cliente,
      nome,
      nome_fantasia,
      documento,
      telefone,
      email
    } = cliente;

    const [result] = await db.query(
      `UPDATE clientes SET
        tipo_cliente = ?,
        nome = ?,
        nome_fantasia = ?,
        documento = ?,
        telefone = ?,
        email = ?
      WHERE id_cliente = ?`,
      [tipo_cliente, nome, nome_fantasia, documento, telefone, email, id]
    );

    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.query(
      'DELETE FROM clientes WHERE id_cliente = ?',
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = ClienteModel;
