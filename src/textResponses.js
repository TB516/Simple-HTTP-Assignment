const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};

const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

module.exports = {
  hello,
  getTimeString,
  getHello,
  getTime,
};
