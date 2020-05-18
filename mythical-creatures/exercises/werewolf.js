class Werewolf {
  constructor (name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.victims = [];
  }
  transform() {
    if (this.human == true) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    }
  }
  eat(victim) {
    if (this.hungry == true) {
      this.victims.push(victim);
      this.transform();
    } else {
      return `I'm not a sicko, sicko.`
    }
  }
}

module.exports = Werewolf;
