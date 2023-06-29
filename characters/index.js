const server = require("./src/server");

const PORT= 8001;

server.listen(8001, () => {
  console.log(`Character server listening on port ${PORT}`);
});
