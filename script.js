// map filter sort reduce reverse
/*
// map
const beatles = ['John', 'Paul', 'Ringo', 'George'];

// function callBack(name) {
//     return name
// }
// prefix every name with 'Mr'
const p = beatles.map(function (name) {
    'Mr ' + name;
});

// const numbers = [1, 2, 3, 4, 5];

// function doubleTriple(number) {
//     if (number % 2 === 0) {
//         return number * 2
//     }
//     return number * 3
// }

// const doubled = numbers.map(doubleTriple)

console.log(doubled);

// console.log(p);

const students = [
    {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75
    },
    {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65
    },
    {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95
    },
    {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72
    }
];

const res = students.map(function (student) {
    return {
        name: student.name,
        projects: student.firstProject
            + student.secondProject
    }
});
console.log(res);

// new array containing the student objects in this
// format: { name: <name>, projects: <sum of projects>}

// reduce
*/
// const numbers = [1, 2, 3];

// const sum = numbers.reduce(function (acc, val) {
//     console.log('acc is ', acc);
//     console.log('val is ', val);
//     return acc + val;
// }, 0)

// console.log(sum);

const names = ['brian', 'mike', 'alan', 'bruce'];

// const lengths = names.reduce(function (acc, val) {
//     console.log('acc is ', acc);
//     console.log('val is ', val);
//     return acc + val.length;
// }, 0)
// console.log(lengths);

const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 }
];

// const ages = people.reduce(function (sum, person) {
//     console.log(person)
//     return sum + person.age
// }, 0);
// console.log(ages);

const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacter: "Amazon",
    reviews:
        [
            {
                user: "Pavel Nedved",
                comments: "It was really usefull, strongly recommended",
                rate: 4
            },
            {
                user: "Alvaro Trezeguet",
                comments: "It lasted 2 days",
                rate: 1
            },
            {
                user: "David Recoba",
                comments: "Awesome",
                rate: 5
            },
            {
                user: "Jose Romero",
                comments: "Good value for money",
                rate: 4
            },
            {
                user: "Antonio Cano",
                comments: "It broked really fast",
                rate: 2
            },
        ]
}

// sum up all the rates for this product

// filter - iterates over the array and returns a new array

// with all the elements that match the condition 
// that was set


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evens = numbers.filter(function (number) {
    if (number % 2 === 0 && number > 4) {
        return true
    }
})
console.log(evens);

// https://www.codewars.com/kata/54edbc7200b811e956000556








