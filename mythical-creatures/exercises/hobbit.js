class Hobbit {
  constructor (name) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;

    if (this.name == 'Frodo') {
      this.hasRing = true;
    } else {
      this.hasRing = false;
    }
  }
  checkAge() {
    if (this.age >= 33 && this.age < 101) {
      this.adult = true;
    } else if (this.age > 100) {
      this.adult = true;
      this.old = true;
    }
  }
  celebrateBirthday() {
    this.age += 1;
    this.checkAge();
  }
  timeTravel(years, traveler) {
    this.age += years;
    this.checkAge();
  }
}


module.exports = Hobbit;
