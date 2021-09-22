const Database = require('../db/config')

module.exports = {
  async create(req, res) {
    const db = await Database()
    const pass = req.body.password

    let roomid = ''

    for (let i = 0; i < 6; i++) {
      roomid += Math.floor(Math.random() * 10).toString()
    }

    db.run(`
    INSERT INTO rooms (
      id,
      pass
    ) VALUES (
      ${parseInt(roomid)},
      ${pass}
    )`)

    db.close()

    res.redirect(`/room/${roomid}`)
  }
}
