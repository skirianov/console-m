const log = require('simple-node-logger').createSimpleLogger();

const console_init  = () => {
  log.setLevel('trace');
  log.log("Initializing Console Logger")
  let cons = console.log.bind(document);
  log.log("Console Logger Function initialized and bound");
  return cons;
}

const c = console_init();
 
module.exports = {
  c
}