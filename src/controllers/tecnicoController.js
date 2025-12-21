const TecnicoService = require('../services/tecnicoService');

class TecnicoController {
  static async getAll(req, res) {
    try {
      const tecnicos = await TecnicoService.getAllTecnicos();
      res.json(tecnicos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const id = await TecnicoService.createTecnico(req.body);
      res.status(201).json({ message: 'Técnico criado com sucesso.', id });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      await TecnicoService.updateTecnico(id, req.body);
      res.json({ message: 'Técnico atualizado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await TecnicoService.deleteTecnico(id);
      res.json({ message: 'Técnico removido com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = TecnicoController;
