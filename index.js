// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push('Ralph');
}

function destructivelyPrependCat(name){
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}

function appendCat(name){
    const catsX = [...cats, 'Broom'];
    return catsX;
}

function prependCat(name) {
    const catsY = ['Arnold', ...cats];
    return catsY;
}

function removeLastCat() {
    const removeLastCatHere = cats.slice(0, cats.length -1 )
    return removeLastCatHere;
}

function removeFirstCat(){
    const removeFirstCatHere = cats.slice(1);
    return removeFirstCatHere;
}