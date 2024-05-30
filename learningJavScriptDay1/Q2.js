/*
In JavaScript, a prototype is a mechanism through which objects inherit 
properties and methods from other objects. 
Every JavaScript object has a prototype, which is also an object. 
When an object is created, it inherits properties and methods from its prototype
*/

class RacketSports{
  constructor(name,playedWith,year){
    this.Name= name,
    this.playedWith= playedWith,
    this.year= year
  }
  //this is a prototype
  sportsInformation(){
    console.log(`this is ${this.Name} palyed with ${this.playedWith} came in year ${this.year}`);
  }
}

class Badminton extends RacketSports{
  // constructor(startedFrom,famousIn){
  //    super('badminton','shuttle',1911); 
  //    this.startedFrom=startedFrom,
  //   this.famousIn = famousIn
  // }
  // ${this.startedFrom} ${this.famousIn}
  //this is a prototype
  aboutbadminton(){
    console.log(`Badminton come form  and is most famous in  in the world`)
  }
}

const tenis = new RacketSports('tenis','ball',1945);
tenis.sportsInformation();
// const one = new Badminton('India', 'Maleasia');
// one.sportsInformation();
// one.aboutbadminton();
// tenis.aboutbadminton();

const badminton = new Badminton("Badminton",'shuttle',1676);
badminton.aboutbadminton();
badminton.sportsInformation();


// example 2


class Mobiles{
  constructor(name,brand,ram){
    this.Name=name,
    this.brand=brand,
    this.ram = ram
  }

  storage() {
    return this.ram*100;  
  }
}

class Vivo extends Mobiles{
  proccrer(processer){
    console.log(`Vivo this phone has ${processer} powerfull processer`)
  }
}

const elvenr = new Vivo('eveln11r', 'oneplus',6);
elvenr.proccrer('eightgen1');
console.log(elvenr.storage());
console.log(elvenr);