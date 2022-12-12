const http = require('./src/api/app');

const port = process.env.PORT || 3001;

http.listen(port);
console.log(`Api rodando na porta ${port}`);