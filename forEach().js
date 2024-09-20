console.log("forEach()");

const example = [45, 53, 62, 11, 13];

let store = "";

let myFunction = (value) => {
    store += value + "\n";
}
example.forEach(myFunction);
console.log(store);

console.log("map ");

const n = [{ name:"premium", color: "green" }];
console.log(n.map(myFunc));

function myFunc(item){
    return [item.name,item.color].join(" ");
}
