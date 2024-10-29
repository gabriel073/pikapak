const { PrismaClient } = require('@prisma/client')
const nodeMailer = require('nodemailer')

const prisma = new PrismaClient()

const postContact = async (contact) => {
  await prisma.contact.create({ data: { ...contact, completed: false } })
  await prisma.$disconnect()

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASS,
    },
  })

  const mail = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: `${contact.name} quiere ponerse en contacto`,
    html: `
      <h2>Nombre: ${contact.name}</h2>
      <h2>Whatsapp: ${contact.whatsapp}</h2>
      <h2>Email: ${contact.email}</h2>
      <h3>Mensaje: ${contact.message}</h2>
    `,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}

module.exports = { postContact }
