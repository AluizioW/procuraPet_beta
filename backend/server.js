const express = require('express');
const app = express();
const cors = require('cors');

const port = 3210;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json([
    {
        // id: crypto.randomUUID(),
        id: '1',
        title: 'ProcuraPet',
        description: 'Encontre o pet perdido ou ajude a encontrar um pet perdido.',
        image: 'https://http.cat/images/100.jpg'
    },

    {
        // id: crypto.randomUUID(),
        id: '2',
        title: 'Sobre',
        description: 'ProcuraPet é uma plataforma para ajudar a encontrar pets perdidos.',
        image: 'https://http.cat/status/200.jpg'
    },

    {
        // id: crypto.randomUUID(),
        id: '3',
        title: 'Contato',
        description: 'Entre em contato conosco para mais informações.',
        image: 'https://http.cat/images/102.jpg'
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});