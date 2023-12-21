// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з
// вашим об'єктом

let mainDiv = document.createElement('div')
mainDiv.classList.toggle('mainDiv')

let form = document.forms.registration

mainDiv.appendChild(form)
document.body.appendChild(mainDiv)

form.onsubmit = (ev) => {
    ev.preventDefault()

    let createDiv = document.createElement('div')
    createDiv.classList.toggle('info')
    document.body.appendChild(createDiv)

    let div = document.getElementsByClassName('info')[0]

    div.innerText = `Name: ${this.username.value}
                     SurName: ${this.surname.value}
                     Age: ${this.age.value}`

    mainDiv.appendChild(div)
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1

let createDiv = document.createElement('div')
createDiv.setAttribute('id', 'count-reload')
document.body.appendChild(createDiv)

window.addEventListener('load', function () {
    if (!localStorage.getItem('number')) {
        localStorage.setItem('number', 0)
    } else {
        let div = document.getElementById('count-reload')
        let count = localStorage.getItem('number')
        let number = JSON.parse(count) + 1
        div.innerText = `count reload: ${number}`
        localStorage.setItem('number', number)
    }

})


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

date = new Date()

window.addEventListener('load', function () {
    let session = JSON.parse(localStorage.getItem('session')) || []
    let month = date.getMonth()+1
    let day = date.getDate()
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    session.push({month, day, time})
    localStorage.setItem('session', JSON.stringify(session));
})
//
// // ----------------------------------------------------------------------------------------
// // зробити масив на 100 об'єктів та дві кнопки prev next
// // при завантажені сторінки з'являються перші 10 об'єктів.
// //     При натисканні next виводяться настпні 10 об'єктів
// // При натисканні prev виводяться попередні 10 об'єкті

createDiv3 = document.createElement('div')
createDiv3.setAttribute('id', 'urls')

let createButtonU =  document.createElement('button')
createButtonU.setAttribute('id', 'up')
createButtonU.innerText = 'up'

let createButtonD =  document.createElement('button')
createButtonD.setAttribute('id', 'down')
createButtonD.innerText = 'down'


let currentPage = 0;
const array=[
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: 'tru'},
    {id: 12, name: 'vasya', age: 31, status: 'fals'},
    {id: 13, name: 'petya', age: 30, status: 'tru'},
    {id: 14, name: 'kolya', age: 29, status: 'tru'},
    {id: 15, name: 'olya', age: 28, status: 'fals'},
    {id: 16, name: 'max', age: 30, status: 'tru'},
    {id: 17, name: 'anya', age: 31, status: 'fals'},
    {id: 18, name: 'oleg', age: 28, status: 'fals'},
    {id: 19, name: 'andrey', age: 29, status: 'tru'},
    {id: 20, name: 'masha', age: 30, status: 'tru'},
    {id: 21, name: 'olya', age: 31, status: 'fals'},
    {id: 22, name: 'max', age: 3, status: true},
    {id: 23, name: 'vasya', age: 3, status: false},
    {id: 24, name: 'petya', age: 3, status: true},
    {id: 25, name: 'kolya', age: 2, status: true},
    {id: 26, name: 'olya', age: 2, status: false},
    {id: 27, name: 'max', age: 3, status: true},
    {id: 28, name: 'anya', age: 3, status: false},
    {id: 29, name: 'oleg', age: 2, status: false},
    {id: 30, name: 'andrey', age: 2, status: true},
    {id: 31, name: 'masha', age: 3, status: true},
    {id: 32, name: 'olya', age: 3, status: false},
    {id: 33, name: 'max', age: 31, status: true},
    {id: 34, name: 'vasya', age: 31, status: false},
    {id: 35, name: 'petya', age: 30, status: true},
    {id: 36, name: 'kolya', age: 29, status: true},
    {id: 37, name: 'olya', age: 28, status: false},
    {id: 38, name: 'max', age: 30, status: true},
    {id: 39, name: 'anya', age: 31, status: false},
    {id: 40, name: 'oleg', age: 28, status: false},
    {id: 41, name: 'andrey', age: 29, status: true},
    {id: 42, name: 'masha', age: 30, status: true},
    {id: 43, name: 'olya', age: 31, status: false},
    {id: 44, name: 'max', age: 30, status: true},
    {id: 45, name: 'max', age: 31, status: true},
    {id: 46, name: 'vasya', age: 31, status: false},
    {id: 47, name: 'petya', age: 30, status: true},
    {id: 48, name: 'kolya', age: 29, status: true},
    {id: 49, name: 'olya', age: 28, status: false},
    {id: 50, name: 'max', age: 30, status: true},
    {id: 51, name: 'anya', age: 31, status: false},
    {id: 52, name: 'oleg', age: 28, status: false},
    {id: 53, name: 'andrey', age: 29, status: true},
    {id: 54, name: 'masha', age: 30, status: true},
    {id: 55, name: 'olya', age: 31, status: false},
    {id: 56, name: 'max', age: 31, status: true},
    {id: 57, name: 'max', age: 30, status: true},
    {id: 58, name: 'vasya', age: 31, status: false},
    {id: 59, name: 'petya', age: 30, status: true},
    {id: 60, name: 'kolya', age: 29, status: true},
    {id: 61, name: 'olya', age: 28, status: false},
    {id: 62, name: 'max', age: 30, status: true},
    {id: 63, name: 'anya', age: 30, status: false},
    {id: 64, name: 'oleg', age: 28, status: false},
    {id: 65, name: 'andrey', age: 20, status: true},
    {id: 66, name: 'masha', age: 30, status: true},
    {id: 67, name: 'olya', age: 31, status: false},
    {id: 68, name: 'max', age: 31, status: true},
    {id: 69, name: 'max', age: 310, status: true},
    {id: 70, name: 'vasya', age: 310, status: false},
    {id: 71, name: 'petya', age: 300, status: true},
    {id: 72, name: 'kolya', age: 290, status: true},
    {id: 73, name: 'olya', age: 280, status: false},
    {id: 74, name: 'max', age: 300, status: true},
    {id: 75, name: 'anya', age: 310, status: false},
    {id: 76, name: 'oleg', age: 280, status: false},
    {id: 77, name: 'andrey', age: 290, status: true},
    {id: 78, name: 'masha', age: 300, status: true},
    {id: 79, name: 'olya', age: 310, status: false},
    {id: 80, name: 'max', age: 310, status: true},
    {id: 81, name: 'max', age: 310, status: true},
    {id: 82, name: 'vasya', age: 310, status: false},
    {id: 83, name: 'petya', age: 300, status: true},
    {id: 84, name: 'kolya', age: 290, status: true},
    {id: 85, name: 'olya', age: 280, status: false},
    {id: 86, name: 'max', age: 300, status: true},
    {id: 87, name: 'anya', age: 310, status: false},
    {id: 88, name: 'oleg', age: 280, status: false},
    {id: 89, name: 'andrey', age: 290, status: true},
    {id: 90, name: 'masha', age: 300, status: true},
    {id: 91, name: 'olya', age: 310, status: false},
    {id: 92, name: 'max', age: 310, status: true},
    {id: 93, name: 'max', age: 310, status: true},
    {id: 94, name: 'vasya', age: 310, status: false},
    {id: 95, name: 'petya', age: 300, status: true},
    {id: 96, name: 'kolya', age: 290, status: true},
    {id: 97, name: 'olya', age: 280, status: false},
    {id: 98, name: 'max', age: 300, status: true},
    {id: 99, name: 'anya', age: 310, status: false},
    {id: 100, name: 'oleg', age: 280, status: false}]


function getArrayElements() {
    let removes = document.querySelectorAll('.array-element')
    if (removes) {
        removes.forEach( e => e.remove() );
    }

    let arrayTenElements =  array.slice(currentPage * 10, (currentPage * 10) + 10).map(item => `ID: ${item.id} Name: ${item.name} Age: ${item.age} Status: ${item.status};`)
    for (const string of arrayTenElements) {
        let p = document.createElement('p')
        p.classList.toggle('array-element')
        p.innerText = string
        createDiv3.append(p)
    }
}

getArrayElements(currentPage)

createButtonU.onclick = () => {
    if(currentPage < 9) {
        currentPage += 1
        getArrayElements(currentPage)
    } else {
        currentPage = 9
        getArrayElements(currentPage)
    }

}

createButtonD.onclick = () => {
    if(currentPage > 0) {
        currentPage -= 1
        getArrayElements(currentPage)
    } else {
        currentPage = 0
        getArrayElements(currentPage)
    }
}


document.body.append(createDiv3, createButtonU, createButtonD)
// -------------------------------------------------------------------------------------

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".

createDiv = document.createElement('div')
let createP = document.createElement('p')
createP.setAttribute('id', 'text')
createP.innerText = 'text for delete'

let createButton = document.createElement('button')
createButton.setAttribute('id', 'delete-element')
createButton.innerText = 'Delete'

createDiv.append(createP, createButton)
document.body.appendChild(createDiv)

let button = document.getElementById('delete-element')

button.onclick = function () {
    let id = prompt('delete id', 'text')
    let element = document.getElementById(id)
    element.remove()
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

createDiv = document.createElement('div')
let createForm  = document.createElement('form')
let createInput = document.createElement('input')
createButton = document.createElement('button')

createForm.setAttribute('id', 'checkAge')

createInput.setAttribute('id', 'userAge')
createInput.setAttribute('name', 'userAge')
createInput.setAttribute('placeholder', 'userAge')
createButton.innerText = 'Send'

createForm.append(createInput, createButton)
createDiv.append(createForm)
document.body.appendChild(createDiv)

form = document.forms.checkAge

form.onsubmit = (ev) => {
    ev.preventDefault()
    if (this.userAge.value <= 0 || this.userAge.value > 100) {
        alert('Вік не було введено')
    }
    else if (this.userAge.value >= 18) {
        alert('Вам більше 18 років')
    }
    else {
        alert('Вам менше 18 років , покинення будь ласка сайт')
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let createTableDiv = document.createElement('div')

let formTable = document.forms.createTable

formTable.onsubmit = (ev) => {
    ev.preventDefault()

    let table = document.createElement('table')
    table.setAttribute('class', 'table')

    for (let i = 0; i < this.column.value; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < this.row.value; j++) {
           let td = document.createElement('td')
            td.innerText = this.information.value
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    createTableDiv.append(formTable,table)
}
document.body.appendChild(createTableDiv)