// const mess = {
//     fruit: ['blueberry', 'bluer-berry', 'bluest-berry'],
//     dogs: [
//         {
//             nickname: 'Catsnack',
//             size: 'Small'
//         },
//         {
//             nickname: 'Red',
//             size: 'tall',
//             favoriteThings: ['Starbucks', 'Candy', 'Avocado', 'Donut']
//         }
//     ]
// }

// console.log(mess.dogs[1].favoriteThings[1])

const washFruit = function() {
    console.log('I am washing the fruit')
}

const blendFruit = () => {
    console.log(`I am blending the fruit`)
}

function addGarnish() {
    console.log('Adding the Garnish')
}

function makeSmoothie(fruit1, fruit2, step1, step2, step3){
    step1();
    step2();
    step3();
    console.log(`I've made you a ${fruit1} and ${fruit2} smoothie.`)
    return `${fruit1} and ${fruit2} smoothie.`
}

let smoothie = makeSmoothie('banana', 'apple', washFruit, blendFruit, addGarnish)
console.log(smoothie)