/**
 * 执行者
 */
class Cooker {
  cook() {
    console.log('做饭');
  }
}

class Cleaner {
  clean() {
    console.log('保洁');
  }
}

/**
 * 命令的调度者
 */
class CookCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.cook();
  }
}

class CleanCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.clean();
  }
}

/**
 * 消费者——使用者
 */
class Customer {
  constructor(command) {
    this.command = command;
  }
  setCommand(command) {
    this.command = command;
  }
  clean() {
    this.command.execute();
  }
  cook() {
    this.command.execute();
  }
}

let cooker = new Cooker();
let cleaner = new Cleaner();
let cookerCommand = new CookCommand(cooker);
let cleanerCommand = new CleanCommand(cleaner);
let customer = new Customer();
customer.setCommand(cookerCommand);
customer.cook();
customer.setCommand(cleanerCommand);
customer.clean();
