const PecaService = require('../services/pecaService');

class PecaController {
  static async getAll(req, res) {
    try {
      const pecas = await PecaService.getAllPecas();
      res.json(pecas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const id = await PecaService.createPeca(req.body);
      res.status(201).json({ message: 'Peça criada com sucesso.', id });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      await PecaService.updatePeca(id, req.body);
      res.json({ message: 'Peça atualizada com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await PecaService.deletePeca(id);
      res.json({ message: 'Peça removida com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = PecaController;
