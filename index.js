const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('3 Hello from Render + GitHub!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
