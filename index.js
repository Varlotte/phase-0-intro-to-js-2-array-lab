// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;
function destructivelyAppendCat(name) {
    return cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
};
function  destructivelyRemoveLastCat(name){
    return cats.pop("Garfield");
    //remove Garfield from array
};

function destructivelyRemoveFirstCat(name){
   return cats.shift("Milo");
    //destructively remove Milo
};

function  appendCat(name){
    //add Broom to end of new copy of array
    const cats2 = [...cats, "Broom"];
    return cats2;
};

function prependCat(name){
    //prepends Arnold and creates new array
    const cats3 = ["Arnold", ...cats];
    return cats3;
};

function removeLastCat(){
    //removes Garfield and returns a new array
    return cats.slice(0,-1);
}

function removeFirstCat(){
    //remove Milo and create a new array
    return cats.slice(1);
}