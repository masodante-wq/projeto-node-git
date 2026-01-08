const EquipamentoModel = require('../models/equipamentoModel');

class EquipamentoService {
  static async getAllEquipamentos() {
    return await EquipamentoModel.findAll();
  }

  static async createEquipamento(equipamento) {
    if (!equipamento.cliente_id) {
      throw new Error('O cliente_id é obrigatório.');
    }

    return await EquipamentoModel.create(equipamento);
  }

  static async updateEquipamento(id, equipamento) {
    const updatedRows = await EquipamentoModel.update(id, equipamento);
    if (updatedRows === 0) {
      throw new Error('Equipamento não encontrado.');
    }
    return updatedRows;
  }

  static async deleteEquipamento(id) {
    const deletedRows = await EquipamentoModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Equipamento não encontrado.');
    }
    return deletedRows;
  }
}

module.exports = EquipamentoService;
