const app = require('./index');
const port = process.env.PORT || 8080;
const connect = require('./Configs/db');
app.listen(port, async () => {
  await connect();
  console.log('Listining to the  port', port);
});
