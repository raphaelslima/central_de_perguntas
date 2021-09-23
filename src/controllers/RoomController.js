const Database = require('../db/config')

module.exports = {
  async create(req, res) {
    const db = await Database()
    const pass = req.body.password

    let roomid = ''

    let isRoom = true

    while (isRoom) {
      /*CRIA O ID DA SALA*/
      for (let i = 0; i < 6; i++) {
        roomid += Math.floor(Math.random() * 10).toString()
      }
      /* VERIFICA SE EXISTE */
      const roomExistIds = await db.all(`SELECT id FROM rooms`)
      isRoom = roomExistIds.some(roomExistId => roomExistId === roomid)

      /*INSERE NA SALA*/
      if (!isRoom) {
        db.run(`
        INSERT INTO rooms (
          id,
          pass
        ) VALUES (
          ${parseInt(roomid)},
          ${pass}
        )`)
      }
    }

    db.close()

    res.redirect(`/room/${roomid}`)
  },

  /*ABRE A SALA E MOSTRA AS PERGINTAS DA SALA*/
  async open(req, res) {
    const db = await Database()
    const roomId = req.params.room
    const questions = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} AND read = 0`
    )
    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} AND read = 1`
    )

    let isNoQuestion = false

    if (questions.length == 0) {
      if (questionsRead.length == 0) {
        isNoQuestion = true
      }
    }

    res.render('room', {
      roomId: roomId,
      questions: questions,
      questionsRead: questionsRead,
      isNoQuestion: isNoQuestion
    })
  },

  async enter(req, res) {
    const roomId = req.body.roomId

    res.redirect(`/room/${roomId}`)
  }
}
