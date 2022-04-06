const res = require("express/lib/response");
const Receita = require("../models/Receita");
let mensagem = "";

const getAll = async (req, res) => {
  try {
    const receitas = await Receita.findAll();
    res.render("index", { receitas, receitaEd: null, receitaDelete: null });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const cadastro = (req, res) => {
  try {
    res.render("cadastro");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const contatos = (req, res) => {
  try {
    res.render("contatos");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const add = async (req, res) => {
  try {
    const receita = req.body;
    if (!receita) {
      return res.redirect("/cadastro");
    }

    await Receita.create(receita);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const receitas = await Receita.findAll();
    const receita = await Receita.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        receitas,
        receitaEd: receita,
        receitaDelete: null,
      });
    } else {
      res.render("index", {
        receitas,
        receitaEd: null,
        receitaDelete: receita,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const receitas = req.body;
    await Receita.update(receitas, { where: { id: req.params.id } });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
const remove = async(req,res) => {
  try {
    await Receita.destroy({where: {id: req.params.id}})
    res.render("contatos");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
}

module.exports = {
  getAll,
  cadastro,
  contatos,
  add,
  getById,
  update,
  remove,
};
