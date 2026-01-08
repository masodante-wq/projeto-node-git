const PecaModel = require('../models/pecaModel');

class PecaService {
  static async getAllPecas() {
    return await PecaModel.findAll();
  }

  static async createPeca(peca) {
    if (!peca.descricao) {
      throw new Error('A descrição da peça é obrigatória.');
    }

    return await PecaModel.create(peca);
  }

  static async updatePeca(id, peca) {
    const updatedRows = await PecaModel.update(id, peca);
    if (updatedRows === 0) {
      throw new Error('Peça não encontrada.');
    }
    return updatedRows;
  }

  static async deletePeca(id) {
    const deletedRows = await PecaModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Peça não encontrada.');
    }
    return deletedRows;
  }
}

module.exports = PecaService;
