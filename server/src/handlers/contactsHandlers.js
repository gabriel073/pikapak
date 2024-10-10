const { postContact } = require('../controllers/contactsController')

const postContactHandler = async (req, res) => {
  const contact = req.body
  await postContact(contact)
  try {
    res.status(200).json(contact)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = { postContactHandler }
