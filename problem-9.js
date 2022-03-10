const obj = { name: "marouf", age: 24 };
const objStr = JSON.stringify(obj);
console.log(objStr);
localStorage.setItem("Name-List", objStr);
const loc = localStorage.getItem("Name-List");
console.log(JSON.parse(loc));
