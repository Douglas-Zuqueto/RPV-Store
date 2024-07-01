const CupomModel = new URL('../models/categoriaModel.js', import.meta.url);

exports.getAllCupons = async (req, res) => {
  try {
    const cupons = await CupomModel.readList();
    res.status(200).json(cupons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCupomById = async (req, res) => {
  try {
    const cupom = await CupomModel.read(req.params.id);
    res.status(200).json(cupom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCupom = async (req, res) => {
  try {
    const newCupom = req.body;
    await CupomModel.create(newCupom);
    res.status(201).json({ message: "Cupom criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCupom = async (req, res) => {
  try {
    const updatedCupom= req.body;
    await CupomModel.update(updatedCupom, req.params.id);
    res.status(200).json({ message: "Cupom atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCupom = async (req, res) => {
  try {
    await CupomModel.delete(req.params.id);
    res.status(200).json({ message: "Cupom deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
