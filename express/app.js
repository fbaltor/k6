const app = require('express')();

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(`incoming request! ${new Date().getTime()}`);
  res.json({
    id,
  });
});

app.listen(PORT, console.log(`server listening at port ${PORT}`));
