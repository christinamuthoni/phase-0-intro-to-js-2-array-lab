// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let name1 = [...cats, "Broom"]
    return name1;
}
function prependCat(name){
const allCats = ["Arnold", ...cats]
return allCats;
}
function removeLastCat(){
    const copyCats = cats.slice(0, cats.length -1);
    return copyCats;
}
function removeFirstCat(){
    const catts= cats.slice(1)
    return catts
}