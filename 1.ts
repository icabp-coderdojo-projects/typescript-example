interface Person {
  name: string;
  age: number;
}

interface SuperHero extends Person {
  power: string;
}

interface OldPerson extends Person {
  alive: boolean;
}

interface Superhero2 {
  name: string;
  age: number;
  power: string;
}

let hero: SuperHero = { name: 13, age: 1000, power: "Flying" };

let hero2: Superhero2 = hero as Superhero2;

function changePower(person: any) {
  console.log(person.age, person.name);
}
changePower(hero);
