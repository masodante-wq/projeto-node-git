const TecnicoModel = require('../models/tecnicoModel');

class TecnicoService {
  static async getAllTecnicos() {
    return await TecnicoModel.findAll();
  }

  static async createTecnico(tecnico) {
    if (!tecnico.nome) {
      throw new Error('O nome do técnico é obrigatório.');
    }

    return await TecnicoModel.create(tecnico);
  }

  static async updateTecnico(id, tecnico) {
    const updatedRows = await TecnicoModel.update(id, tecnico);
    if (updatedRows === 0) {
      throw new Error('Técnico não encontrado.');
    }
    return updatedRows;
  }

  static async deleteTecnico(id) {
    const deletedRows = await TecnicoModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Técnico não encontrado.');
    }
    return deletedRows;
  }
}

module.exports = TecnicoService;
