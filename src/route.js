const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

/* ROTAS PARA O LAYOUT */
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

/* ROTAS DE SALA */
route.get('/room/:room', RoomController.open)
route.post('/create-room', RoomController.create)

/* ROTAS DE PERGUNTAS */
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route
