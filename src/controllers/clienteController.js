const ClienteService = require('../services/clienteService');

class ClienteController {
  static async getAll(req, res) {
    try {
      const clientes = await ClienteService.getAllClientes();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const id = await ClienteService.createCliente(req.body);
      res.status(201).json({ message: 'Cliente criado com sucesso.', id });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      await ClienteService.updateCliente(id, req.body);
      res.json({ message: 'Cliente atualizado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await ClienteService.deleteCliente(id);
      res.json({ message: 'Cliente removido com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ClienteController;
