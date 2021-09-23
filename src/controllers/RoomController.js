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
      if (!roomExistIds) {
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
  open(req, res) {
    const roomId = req.params.room
    res.render('room', { roomId: roomId })
  }
}
