var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize(
  process.env.db,
  process.env.user,
  process.env.pw,
  {
    host: process.env.host,
    dialect: process.env.dialect,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

var Question = sequelize.define(
  'questions',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    content: Sequelize.STRING,
    survey_id: Sequelize.INTEGER,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
    question_type_id: Sequelize.INTEGER
  },
  {
    timestamps: false
  }
);

router.get('/questions/', function (req, res, next) {
  Question.findAll().then(function (questions) {
    res.json(questions);
  });
});

/* GET question. */
router.get('/questions/:id', function (req, res, next) {
  Question.findAll({
    where: {
      id: req.params.id
    }
  }).then(function (questions) {
    res.json(questions);
  });
});

module.exports = router;
