const EquipamentoService = require('../services/equipamentoService');

class EquipamentoController {
  static async getAll(req, res) {
    try {
      const equipamentos = await EquipamentoService.getAllEquipamentos();
      res.json(equipamentos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const id = await EquipamentoService.createEquipamento(req.body);
      res.status(201).json({ message: 'Equipamento criado com sucesso.', id });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      await EquipamentoService.updateEquipamento(id, req.body);
      res.json({ message: 'Equipamento atualizado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await EquipamentoService.deleteEquipamento(id);
      res.json({ message: 'Equipamento removido com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = EquipamentoController;
