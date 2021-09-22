module.exports = {
  create(req, res) {
    let roomid = 1234

    res.redirect(`/room/${roomid}`)
  }
}
