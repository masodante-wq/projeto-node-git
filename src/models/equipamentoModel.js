const db = require('../config/database');

class EquipamentoModel {
  static async findAll() {
    const [rows] = await db.query(`
      SELECT 
        e.*,
        c.nome AS cliente_nome
      FROM equipamentos e
      JOIN clientes c ON c.id_cliente = e.cliente_id
    `);
    return rows;
  }

  static async create(equipamento) {
    const {
      cliente_id,
      categoria,
      marca,
      modelo,
      numero_serie
    } = equipamento;

    const [result] = await db.query(
      `INSERT INTO equipamentos
      (cliente_id, categoria, marca, modelo, numero_serie)
      VALUES (?, ?, ?, ?, ?)`,
      [cliente_id, categoria, marca, modelo, numero_serie]
    );

    return result.insertId;
  }

  static async update(id, equipamento) {
    const {
      cliente_id,
      categoria,
      marca,
      modelo,
      numero_serie
    } = equipamento;

    const [result] = await db.query(
      `UPDATE equipamentos SET
        cliente_id = ?,
        categoria = ?,
        marca = ?,
        modelo = ?,
        numero_serie = ?
      WHERE id_equipamento = ?`,
      [cliente_id, categoria, marca, modelo, numero_serie, id]
    );

    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.query(
      'DELETE FROM equipamentos WHERE id_equipamento = ?',
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = EquipamentoModel;
