let special = (s: string) => s.concat(" bleh");

let specialNorm = function(s: string) {
  return +s;
};

function gen<T>(f: (l: string) => T): T {
  return f("22");
}

gen(special);

gen(specialNorm);
