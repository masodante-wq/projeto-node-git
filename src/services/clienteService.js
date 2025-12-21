const ClienteModel = require('../models/clienteModel');

class ClienteService {
  static async getAllClientes() {
    return await ClienteModel.findAll();
  }

  static async createCliente(cliente) {
    if (!cliente.tipo_cliente || !cliente.nome || !cliente.documento) {
      throw new Error('Campos obrigatórios: tipo_cliente, nome e documento.');
    }

    return await ClienteModel.create(cliente);
  }

  static async updateCliente(id, cliente) {
    const updatedRows = await ClienteModel.update(id, cliente);
    if (updatedRows === 0) {
      throw new Error('Cliente não encontrado.');
    }
    return updatedRows;
  }

  static async deleteCliente(id) {
    const deletedRows = await ClienteModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Cliente não encontrado.');
    }
    return deletedRows;
  }
}

module.exports = ClienteService;
