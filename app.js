const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
