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
        usuario: 'usuario 1',
        status: 'DESAPARECIDO',
        tempo: '3 horas',
        title: 'ProcuraPet',
        description: 'Encontre o pet perdido ou ajude a encontrar um pet perdido.',
        image: 'https://http.cat/images/100.jpg'
    },

    {
        // id: crypto.randomUUID(),
        id: '2',
        usuario: 'usuario 2',
        status: 'ADOAÇÃO',
        tempo: '2 dias',
        title: 'Sobre',
        description: 'ProcuraPet é uma plataforma para ajudar a encontrar pets perdidos.',
        image: 'https://http.cat/status/200.jpg'
    },

    {
        // id: crypto.randomUUID(),
        id: '3',
        usuario: 'usuario 3',
        status: 'DESAPARECIDO',
        tempo: '3 dias',
        title: 'Contato',
        description: 'Entre em contato conosco para mais informações.',
        image: 'https://http.cat/images/102.jpg'
    },

    {
        // id: crypto.randomUUID(),
        id: '4',
        usuario: 'usuario 4',
        status: 'ADOÇÃO',
        tempo: '4 dias',
        title: 'Ajuda',
        description: 'Se você encontrou um pet perdido, entre em contato conosco.',
        image: 'https://http.cat/images/103.jpg'
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});