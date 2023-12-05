// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let findSquareRectangle = (a, b) => a * b
console.log(findSquareRectangle(15, 10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let findSquareCircle = (r) => 3.14 * (r * r)
console.log(findSquareCircle(4))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let r = 6
let h = 10

let getSquareCylinder = (r, h) => (2 * 3.14 * r * h) + (2 * 3.14 * r * (r + h))
console.log(getSquareCylinder(r, h))

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [10, 'RafaelLal', 791.44, 'Finibuspretium', 315, 'Venenatisvelit']

let printArray = (array) => {
    for (let item of array)
        console.log(item)
}

printArray(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let text = prompt('Text for paragraph', 'Elementumridiculus')

let createParagraph = (text) => document.write(`<p>${text}</p>`)

createParagraph(text)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let text2 = prompt('Text for list(1)', 'twylXqKoG2')

let  createList = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createList(text2)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

let text_li = prompt('Text for list(2)', 'Leoleo')
let count_li =+prompt('write count li', '3')

let createList2 = (text, count_li) => {
    document.write(`<ul>`)
    for (let i = 0; i < count_li; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createList2(text_li, count_li)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let massive = [728, 753, 'LipingCai', 'PiTs0e1t', true, 7 < 6, 'Famespotenti', 434, false]

let filterArray = (array) => {
    document.write(`<ul>`)
    for (let item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

filterArray(massive)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

let printDocumentUser = (users) => {
    for (let user of users) {
        document.write(`<div><h4>id: ${user['id']}</h4>
                             <p>name: ${user['name']} age: ${user['age']}</p></div>`)
    }
}

printDocumentUser(users)

// - створити функцію яка повертає найменьше число з масиву

let array_number = [137, 545, 396, 679, 609, 98, 732, 308, 218]

let getMinNumber = (array_number) => {
    let min_number = array_number[0]
    for (let number of array_number) {
        if (number < min_number) {
            min_number = number
        }
    }
    return min_number
}

// let number = getMinNumber(array_number)
// console.log(number)

console.log(getMinNumber(array_number))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let massive_number = [1, 2, 10, 20, 7, 5]

let sumArrayNumbers = (massive_number) => {
    let sum_number = 0
    for (let num of massive_number) {
        sum_number += num
    }
    return sum_number
}

// let sum_array = sumArrayNumbers(massive_number)
// console.log(sum_array)

console.log(sumArrayNumbers(massive_number))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arr_number= [11,22,33,44]
let index1 = +prompt(`index1, length array: ${arr_number.length-1}`, '0')
let index2 = +prompt(`index2, length array: ${arr_number.length-1}`, '1')

let swapValue = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    return arr
}

// arr_number = swapValue(arr_number, index1, index2)
// console.log(arr_number)

console.log(swapValue(arr_number, index1, index2))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let value =  +prompt('Введіть сумму', '10000')
let array_currency = [{currency:'USD',value:40},{currency:'EUR',value:42}]
let exchangeCurrency = prompt('exchangeCurrency: USD, EUR', 'USD')

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let element of array_currency) {
        if (exchangeCurrency === element['currency']) {
            return `${sumUAH}UAH = ${sumUAH / element['value']}${exchangeCurrency}`
        }
    }
}

// let result = exchange(value, array_currency, exchangeCurrency)
// console.log(result)

console.log(exchange(value, array_currency, exchangeCurrency))