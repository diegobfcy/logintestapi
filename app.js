const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use(cors());

app.post('/api/sendData', (req, res) => {
  try {
    const { dni, name, password } = req.body;

    const modifiedName = name.toUpperCase();
    const concatenatedValue = dni + modifiedName;

    res.json({
      success: true,
      message: 'Data received successfully',
      concatenatedValue,
    });
    console.log(concatenatedValue);
  } catch (error) {
    console.error('Error processing data:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
