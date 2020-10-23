
// map filter sort reduce reverse
/*
// map
const beatles = ['John', 'Paul', 'Ringo', 'George'];

// function callBack(name) {
//     return name
// }
// prefix every name with 'Mr'
const p = beatles.map(function (name) {
    return 'Mr ' + name;
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


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const evens = numbers.filter(function (number) {
//     if (number % 2 === 0 && number > 4) {
//         return true
//     }
// })
// console.log(evens);

// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arr) {
    const sheep = arr.filter(function (el) {
        // if (el === true) {
        //   return true
        // }
        return el
    })
    return sheep.length
}

const places = [
    {
        title: "Awesome Suite 20' away from la Rambla",
        price: 200,
        type: "Private Room",
        pool: true,
        garage: false
    },
    {
        title: "Private apartment",
        price: 190,
        type: "Entire Place",
        pool: true,
        garage: true
    },
    {
        title: "Apartment with awesome views",
        price: 400,
        type: "Entire Place",
        pool: false,
        garage: false
    },
    {
        title: "Apartment in la Rambla",
        price: 150,
        type: "Private Room",
        pool: false,
        garage: true
    },
    {
        title: "Comfortable place in Barcelona´s center",
        price: 390,
        type: "Entire place",
        pool: true,
        garage: true
    }
];

const listOfTitles = places.map(function (place) {
    return place.title;
})

// filter out all the places with a price above 300

const above300 = places.filter(function (place) {
    if (place.price > 300) {
        return true
    }
})
// console.log(above300);


// kata filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function gooseFilter(birds) {
    const geese = [
        "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const filtered = birds.filter(function (bird) {
        // if the bird is not in the geese array
        // return true
        // if (geese.indexOf(bird) === - 1) {
        //   return true
        // }
        if (!geese.includes(bird)) {
            return true
        }
        // return geese.indexOf(bird) === - 1
    });

    return filtered;
}

// gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// reverse - reverses an array

const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

const word = 'helloworld';

// console.log(word.split('o'));
// use split() and join() to turn a string into
// an array and back
// 'hello'.split('').reverse().join('')

// sort - sorts the array (in place) and returns a new array



const numbers = [22, 23, 68, 1, 99, 0, 112, 64];

function compare(a, b) {
    // if (a < b) {
    //     return 3;
    // }
    // if (a === b) {
    //     return 0;
    // }
    // if (b < a) {
    //     return - 3;
    // }
    return b - a;
}

const sorted = numbers.sort(function (a, b) {
    // sorted ascending
    return a - b
    // sorted descending
    // return b -a
});
console.log(sorted);





