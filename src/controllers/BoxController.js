import Box from "../models/Box";

class BoxController {
  async index(req, res) {
    const boxes = await Box.find({});

    return res.json(boxes);
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id)
    .populate({
      path: 'files',
      options: { sort: {createdAt: -1 } }
    });

    return res.json(box);
  }

  async store(req, res) {
    const box = await Box.create(req.body);

    return res.json(box);
  }

  async delete(req, res) {
    const box = await Box.findById(req.params.id);

    if (box == null) {
      return res.send("Este Registro não foi encontrado.");
    }

    await box.delete();
    return res.send("Registro excluído com sucesso.");
  }
}

export default new BoxController();