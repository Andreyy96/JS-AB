// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let className =  ['wrap', 'collapse', 'alpha', 'beta']

let createDiv = document.createElement('div')
createDiv.setAttribute('id', 'textBlock-1')

let style = document.createElement("style")
function addStyle(style, value) {
    style.innerText += ` ${value}`
    document.head.appendChild(style);
}

for (const classNameElement of className) {
    createDiv.classList.add(classNameElement)
}

createDiv.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facere, fuga! Ad, aliquid ' +
    'commodi ea eligendi impedit iure nam optio praesentium quasi rem sunt, tempora totam, ut? Earum, non ullam.'

value_style = ".collapse{background-color:blue; color:yellow; font-size:20px; margin-bottom:8px}"
addStyle(style, value_style)

document.body.appendChild(createDiv)

let div2 = createDiv.cloneNode(true)
console.log(createDiv === div2)
div2.setAttribute('id', 'copyBlock')

document.body.appendChild(div2)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let massive = ['Main', 'Products', 'About us', 'Contacts']

// first
let navigate = document.createElement('ul')

for (const massiveElement of massive) {
    let li  = document.createElement('li')
    li.innerText = massiveElement
    navigate.appendChild(li)
}

document.body.appendChild(navigate)

// second
let navigate2 = document.createElement('ul')

for (const massiveElement of massive) {
    navigate2.innerHTML += `<li>${massiveElement}</li>`
}

document.body.appendChild(navigate2)


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.innerText = coursesAndDurationArrayElement['title']
    div.innerText += ` 
    monthDuration: ${coursesAndDurationArrayElement['monthDuration']}`
    document.body.appendChild(div)
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>, в якому буде
// <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.classList.add('item')

    let h1 = document.createElement('h1')
    h1.innerText = element.title
    h1.classList.add('heading')

    let p =  document.createElement('p')
    p.innerText = `monthDuration: ${element.monthDuration}`
    p.classList.add('description')

    div.append(h1, p)

    document.body.appendChild(div)
}

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
]

function createSimpsonDiv(simpsons) {
    for (const simpson of simpsons) {
        let memberDiv = document.createElement('div')
        memberDiv.classList.add('member')

        let img = document.createElement('img')
        img.src = simpson.photo

        let fullName = document.createElement('p')
        fullName.innerText = `${simpson.name} ${simpson.surname}`

        let age = document.createElement('p')
        age.innerText = `age: ${simpson.age}`

        let info = document.createElement('p')
        info.innerText = simpson.info

        memberDiv.append(img, fullName, age, info)

        document.body.appendChild(memberDiv)
    }
}

createSimpsonDiv(simpsons)


// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
]


for (const coursesArrayElement of coursesArray) {
    let div = document.createElement('div')
    div.classList.add('course')

    let title = document.createElement('h1')
    title.classList.add('name-course')
    title.innerText = coursesArrayElement['title']

    let span = document.createElement('span')

    let month_duration = document.createElement('p')
    month_duration.setAttribute('id', 'month-duration')
    month_duration.innerText = `Month duration: ${coursesArrayElement['monthDuration']}`

    let hour_duration =  document.createElement('p')
    hour_duration.setAttribute('id', 'hour-duration')
    hour_duration.innerText = `Hour duration: ${coursesArrayElement['hourDuration']}`


    let containerDiv = document.createElement('div')
    containerDiv.classList.add('container')

    let ul = document.createElement('ul')
    for (let element of coursesArrayElement['modules']) {
        let li = document.createElement('li')
        li.innerText = element
        ul.appendChild(li)
    }

    span.append(month_duration, hour_duration)
    containerDiv.appendChild(ul)
    div.append(title, span, containerDiv)

    document.body.appendChild(div)
}

value_style = ".name-course{text-align: center;}"
addStyle(style, value_style)

value_style = ".course{border: 1px solid red; margin-bottom: 5px;}"
addStyle(style, value_style)

value_style = "span{display: flex; gap: 20px;}"
addStyle(style, value_style)

value_style = "#month-duration{width: 30vw; text-align: center;}"
addStyle(style, value_style)

value_style = "#hour-duration{width: 66vw; text-align: center;}"
addStyle(style, value_style)

console.log({...document.querySelectorAll('.item-grid-card__meta')})

//mikkit task
let array = []

let title  = [...document.querySelectorAll('.item-grid-card__title')].map(el => el.innerText)

let author = [...document.querySelectorAll('.item-grid-music-preview__author')].map(el => el.innerText)

for (let i of title) {
    array.push({title: i})
}
for (let i = 0; i < author.length; i++) {
    array[i]['author'] = author[i]
}
