const HistoricoModel = new URL('../models/historicoModel.js', import.meta.url);

exports.lerMeuHIstorico = async (req, res) => {
  try {
    const historicos = await HistoricoModel.readList();
    res.json(historicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createHistorico = async (req, res) => {
  try {
    const newHistorico = req.body;
    const historico = await HistoricoModel.create(newHistorico);
    res.status(201).json(historico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHistorico = async (req, res) => {
  try {
    const updatedHistorico = req.body;
    const historico = await HistoricoModel.update(updatedHistorico, req.params.id);
    res.json(historico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHistorico = async (req, res) => {
  try {
    await HistoricoModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
