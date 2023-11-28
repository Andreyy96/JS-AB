// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let massive = ['9BtEaz60Bmj', 'NanAkter', 'cGedziKme', 'Wx8y377GQB', 'AqGbVqLbqNu', 'yyqsFUpR', '9aw0OZ5',
//     'Qc3BqGx', 'rL2TUkkK7s6', 'gaVgVg9T41U']

let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

for (let i = 0; i < 10; i++) {
    document.write(`<div><p>${text}</p></div>`)
}

// for (let str of massive) {
//     document.write(`<div><p>${str}</p></div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 1; i <= 10; i++) {
    document.write(`<div><p>${text} - id: ${i}</p></div>`)
}

// for (let num = 0; num < massive.length; num++) {
//     document.write(`<div><p>${massive[num]} -${num}</p></div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let massive2 = ['9BtEaz60Bmj', 'NanAkter', 'cGedziKme', 'Wx8y377GQB', 'AqGbVqLbqNu', 'yyqsFUpR', '9aw0OZ5',
// 'Qc3BqGx', 'rL2TUkkK7s6', 'gaVgVg9T41U', 'nXRBPKDm', '3M3orawnzv', '9thJjEp', 'zmyTgphTC5', 'TxyupXvd',
//     'K5RTiQa', '4PXd5asQPm', 'hpj18muHWp', '6CHYhpw2', 'Kztws7YOYRS']

let text2 = 'Commodoscelerisque'

let h = 0
while (h < 20) {
    document.write(`<h1>${text2}</h1>`)
    h++
}

// let j = 0
// while (j < massive2.length) {
//     document.write(`<h1>${massive2[j]}</h1>`)
//     j++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

h = 1
while (h <= 20) {
    document.write(`<h1>${text2} - id: ${h}</h1>`)
    h++
}

// j = 0
// while (j < massive2.length) {
//     document.write(`<h1>${massive2[j]} - id: ${j}</h1>`)
//     j++
// }


// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону.
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']

    document.write(`<ul>`)
    for ( let item of listOfItems) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
    
for (const product of products) {
    document.write(`<div class="product-card">
                    <h3 class="product-title">${product['title']}. Price - ${product['price']}</h3>
                    <img src=${product['image']} alt="" class="product-image">
                    </div>`)
}

//-----------------------------------------------------------------------------

// за допомоги циклу вивести:
//     - користувачів зі статусом true

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let user of users) {
    if (user['status']) {
        console.log(user)
    }
}

// - користувачів зі статусом false

console.log('')

for (let user of users) {
    if (!user['status']) {
        console.log(user)
    }
}

// - користувачів які старші за 30 років

console.log('')

for (let user of users) {
    if (user['age'] >= 30 ) {
        console.log(user)
    }
}