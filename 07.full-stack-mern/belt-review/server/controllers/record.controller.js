const Record = require("../models/record.model");

// get all
const getAll = (_, res) => {
  Record.find()
    .then((records) => res.status(200).json(records))
    .catch((err) => res.status(400).json(err));
};

// get one
const getOne = (req, res) => {
  const { id } = req.params;
  console.log(id)
  Record.findById({_id: id})
    .then((record) => res.status(200).json(record))
    .catch((err) => res.status(400).json(err));
};

// create
const createOne = (req, res) => {
  Record.create(req.body)
    .then((record) => res.status(201).json(record))
    .catch((err) => res.status(400).json(err));
};

// update
const updateOne = (req, res) => {
  const { id } = req.params;
  Record.findByIdAndUpdate({_id: id}, req.body, { new: true })
    .then((record) => res.status(200).json(record))
    .catch((err) => res.status(400).json(err));
};

// delete
const deleteOne = (req, res) => {
  const { id } = req.params;
  Record.findByIdAndDelete({_id: id})
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };
