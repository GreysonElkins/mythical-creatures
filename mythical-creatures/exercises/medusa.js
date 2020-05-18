class Medusa {
  constructor (monster) {
    if (monster == undefined) {
      this.name = undefined;
    } else if (typeof monster == 'object') {
      this.name = monster.name;
    } else {
      this.name = monster
    }
    this.statues = [];
  }
  stare(victim) {
    if (this.statues.length < 3) {
      victim.stoned = true;
      this.statues.push(victim);
    } else if (this.statues.length == 3) {
      this.statues[0].stoned = false;
      this.statues.shift();
      victim.stoned = true;
      this.statues.push(victim);
    }
  }
}


module.exports = Medusa;
