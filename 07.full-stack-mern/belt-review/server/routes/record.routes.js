const express = require("express");
const router = express.Router();
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../controllers/record.controller');

router.route('/')
  .get(getAll)
  .post(createOne);

router.route('/:id')
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);

module.exports = router;