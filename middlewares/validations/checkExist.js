const checkExits = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params
    const station = await Model.findOne({
      where: {
        id,
      },
    })
    if (station) {
      next()
    } else {
      res.status(404).send(`Can't find station with id ${id}`)
    }
  }
}
module.exports = {
  checkExits,
}
