class Magician {
  constructor (object) {
    if (object == undefined) {
      this.name = undefined
    } else {
    this.name = object.name
    }

    if (object == undefined) {
    this.topHat = true;
    } else if (object.topHat == undefined) {
    this.topHat = true;
    } else {
    this.topHat = object.topHat;
    }

    this.confident = false;
    this.spellsCast = 0;
  }
  incantation(magicWords) {
    return magicWords.toUpperCase() + `!`;
  }
  cast() {
    this.spellsCast += 1;
    if (this.spellsCast > 2) {
      this.confident = true;
    }
    if (this.topHat === true) {
    return `PULL RABBIT FROM TOP HAT`
    } else if (this.topHat === false) {
    return `PULL DOVE FROM SLEEVE`
    }
  }
  performShowStopper() {
    if (this.spellsCast < 3) {
      return 'Oh no! Practice more before attempting this trick!'
    } else {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }
}

module.exports = Magician;
