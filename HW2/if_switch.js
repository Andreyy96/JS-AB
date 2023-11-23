// Логічні розгалуження:
//  - Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введіть довільне число')

if (x !== 0) {
    console.log('Вірно')
} else  {
    console.log('Невірно')
}

// let num = 1
//
// if (num !== 0) {
//     console.log('Вірно')
// } else  {
//     console.log('Невірно')
// }
//
// num = 0
//
// if (num !== 0) {
//     console.log('Вірно')
// } else  {
//     console.log('Невірно')
// }
//
// num = -3
//
// if (num !== 0) {
//     console.log('Вірно')
// } else  {
//     console.log('Невірно')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть число 0 до 59')

if (time <= 14 && time >= 0) {
    console.log(`${time} хвилин належить до 1 четверті години`)
} else if(time <= 29 && time >= 15)  {
    console.log(`${time} хвилин належить до 2 четверті години`)
} else if (time <= 44 && time >= 30) {
    console.log(`${time} хвилин належить до 3 четверті години`)
} else if (time <= 59 && time >= 45) {
    console.log(`${time} хвилин належить до 4 четверті години`)
} else {
    console.log(`${time} хвилин не входить в діапозон от 0 до 59`)
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = +prompt('Введіть число 1 до 31')

if (day <= 10 && day >= 1) {
    console.log(`${day} день належить до 1 декади місяця`)
} else if(day <= 20 && day >= 11)  {
    console.log(`${day} день належить до 2 декади місяця`)
} else if (day <= 31 && day >= 21) {
    console.log(`${day} день належить до 3 декади місяця`)
} else {
    console.log(`${day} не входить в діапозон от 1 до 31`)
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

dayWeek = +prompt('Введіть номер дня тиждня')

switch (dayWeek) {
    case 1 :
        console.log('Зробити роботу по дому')
        break
    case 2 :
        console.log('Ввіднести ноутбук в сервісний центр')
        break
    case 3 :
        console.log('Пустой розклад')
        break
    case 4 :
        console.log('Забрати ноутбук з сервісного центру')
        break
    case 5 :
        console.log('Піти у кінотеатр на новий фільм')
        break
    case 6 :
        console.log('День англійської мови')
        break
    case 7 :
        console.log('Відпочинок у парку')
        break
    default :
        console.log('Не вірно введено номер дня тиждня')
}

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

 let a= +prompt('Введіть перше число')
 let b = +prompt('Введіть друге число')

 if (a > b) {
     console.log(`a = ${a} > b = ${b}`)
 } else if (a < b) {
     console.log(`a = ${a} < b = ${b}`)
 } else if (a === b){
     console.log(`a: ${a} === b: ${b}`)
 } else {
     console.log(`Введено не число a: ${a} b: ${b}`)
 }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)

let x2 = prompt()
console.log(typeof x2, x2)

if (x2 === 0 || x2 === null || x2 === '' || x2 ===  undefined || true === Number.isNaN(x2)) {
    x2 = "default"
    console.log(x2)
} else {
    console.log(x2)
}

// -----------------------------------------

// let x4 = 0
// console.log(typeof x4, x4)
//
// if (x4 === 0 || x4 === null || x4 === '' || x4 ===  undefined || true === Number.isNaN(x4)) {
//     x4 = "default"
//     console.log(x4)
// } else {
//     console.log(x4)
// }
//
// let x5
// console.log(typeof x5, x5)
//
// if (x5 === 0 || x5 === null || x5 === '' || x5 ===  undefined || true === Number.isNaN(x5)) {
//     x5 = "default"
//     console.log(x5)
// } else {
//     console.log(x5)
// }
//
// let x6 = null
// console.log(typeof x6, x6)
//
// if (x6 === 0 || x6 === null || x6 === '' || x6 ===  undefined || true === Number.isNaN(x6)) {
//     x6 = "default"
//     console.log(x6)
// } else {
//     console.log(x6)
// }
//
// let x7 = ''
// console.log(typeof x7, x7)
//
// if (x7 === 0 || x7 === null || x7 === '' || x7 ===  undefined || true === Number.isNaN(x7)) {
//     x7 = "default"
//     console.log(x7)
// } else {
//     console.log(x7)
//
// }
//
// let x8 = +prompt('NaN')
// console.log(typeof x8, x8)
// console.log(Number.isNaN(x8))
// if (x8 === 0 || x8 === null || x8 === '' || x8 ===  undefined || true === Number.isNaN(x8)) {
//      x8 = "default"
//      console.log(x8)
// } else {
//     console.log(x8)
// }

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

//  let number_course = +prompt('Choose id course : 0 = JavaScript Complex, 1 = Java Complex,' +
//     '2 = Python Complex, 3 = QA Complex, 4 = FullStack, 5 = Frontend')
//
// if (coursesAndDurationArray[number_course].monthDuration > 5) {
//      console.log('Супер')
// } else if (coursesAndDurationArray[number_course].monthDuration <= 5) {
//     console.log('Не супер')
// } else {
//     console.log('Fails')
// }

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[0].monthDuration <= 5) {
    console.log('Не супер')
} else {
    console.log('Fails')
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[0].monthDuration <= 5) {
    console.log('Не супер')
} else {
    console.log('Fails')
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[0].monthDuration <= 5) {
    console.log('Не супер')
} else {
    console.log('Fails')
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[0].monthDuration <= 5) {
    console.log('Не супер')
} else {
    console.log('Fails')
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[0].monthDuration <= 5) {
    console.log('Не супер')
} else {
    console.log('Fails')
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[0].monthDuration <= 5) {
    console.log('Не супер')
} else {
    console.log('Fails')
}