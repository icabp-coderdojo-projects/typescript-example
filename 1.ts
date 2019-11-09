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
  low: boolean;
  sad: { a: string };
  power: string;
}

let hero: SuperHero = { name: "sdas", age: 1000, power: "Flying" };

let hero2: Superhero2 = hero as Superhero2;

interface Cool {
  low: boolean;
  sad: { a: string };
}

let z = (hero as any) as Cool;

type weird = number | string;
let a: weird = "£";

a = 1;
