const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'seu provedor de email',
  auth: {
    user: 'seu_email@example.com',
    pass: 'sua_senha_do_email',
  },
});

app.post('/api/enviar-email', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  try {
    await transporter.sendMail({
      from: 'seu_email@example.com',
      to: 'seu_email@example.com',
      subject: `Nova mensagem de ${nome} (${email})`,
      text: mensagem,
    });

    res.status(200).send('Mensagem enviada com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    res.status(500).send('Ocorreu um erro ao enviar a mensagem.');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
