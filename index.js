const log = require('simple-node-logger').createSimpleLogger();
const isNode = require("./utils").isNode;
const remoteC = require('./remote-c').remoteC;

const console_init  = () => {
  log.setLevel('trace');
  log.log("Initializing Console Logger")

  let cons = (isNode)  ? console.log : console.log.bind(document);

  log.log("Console Logger Function initialized and bound");

  return cons;
}

const c = console_init();
remoteC.init(c);

module.exports = {
  c,
  remoteC
}