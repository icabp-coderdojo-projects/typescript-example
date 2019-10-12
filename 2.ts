const element = document.querySelector("#add") as HTMLDivElement;

if (element.children[0]) {
  let child = element.children[0];
  child.innerHTML = "";
}

let caller = <T>(func: () => T) => console.log(func());

caller(() => "hi");
