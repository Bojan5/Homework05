// Task 1:

// Write a function testNumber() that takes a number as an argument and returns a Promise that tests if the value is less than or equal to 10.
//  If it is, it's successful, if not it should be rejected. (The function should wait at least 2 seconds to do the calculation).

// function testNumber(number) {
//     return new Promise((resolve, reject) => {
//         if(number <= 10) {
//             setTimeout(() => {
//                 resolve(`Successful`);
//             }, 2000);
//         }
//         setTimeout(() => {
//             reject(`Rejected`);
//         }, 2000);
//     })
// }

// testNumber(5).then(success => {console.log(success);})

// .catch(error => {console.log(error);})

// .finally(() => console.log(`Everything is done at: ${new Date()}`))



// Task 2:

// Write a function changeAllToCaps() that will take an array of words (strings), make them all caps. Be sure to check if all the items in the array are strings. If at lest one is not a string, reject this promise, if all are strings return the array as changed.

// Write a function that will take an array of words (strings), and sort them alphabetically in an ascending order (A, B, C...). Check if there are 2 of more words in the array. If there is 1 or less, log that there are not enough words to be sorted. If there are enough words, return them as sorted.

// Connect these functions by chaining, log the array at the end. Handle any errors, and print out the time needed to complete these operation (each function should wait at least 2 seconds before returning value).

// Bonus: Complete the same tasks with async/await.


let wordArray = [`martin`, `darko`, `neno`, `aleksandar`, `ivo`];

function changeAllToCaps(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < wordArray.length; i++) {
                if (typeof wordArray[i] === 'string') {
                    wordArray[i] = wordArray[i].toUpperCase();
                }
            }
            resolve(wordArray);
        }, 2000);
        setTimeout(() => {
            reject(`Reject!`);
        }, 2000);
    })
}

function sortAscending(array) {
    if (array.length <= 1) {
        console.log(`Not enough words to be sorted.`);
    }
    return array.sort();
}

// console.log(sortAscending(wordArray));


changeAllToCaps(wordArray).then(wordArray => {
        sortAscending(wordArray);
        console.log(wordArray);
    })
    .catch(error => { console.log(error); })

    .finally(() => console.log(`Done at: ${new Date()}`))