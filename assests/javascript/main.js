console.log("Page load");
const obj = { a: "name", b: "address" };
const obj1 = { [Symbol("city")]: "Indore" };
const obj2 = {};

/**
 * TODO: Check object is empty or not
 * case1: Check object is empty
 * case2: Check object not contain symbol
 *
 */

/**
 * First method
 * It handle case1 and case2
 * */
const isEmpty = (object) => {
    return (
        !Object.getOwnPropertyNames(object).length &&
        !Object.getOwnPropertySymbols(object).length
    );
};

console.log({ obj }, isEmpty(obj)); // false
console.log({ obj1 }, isEmpty(obj1)); // false
console.log({ obj2 }, isEmpty(obj2)); // true

/**
 * Second method
 * It not handle symbol key
 */

const isEmptySecondMethod = (object) => {
    for (let pro in object) return false;
    return true;
};
console.log({ obj }, isEmptySecondMethod(obj)); //false
console.log({ obj1 }, isEmptySecondMethod(obj1)); //true
console.log({ obj2 }, isEmptySecondMethod(obj2)); //true
