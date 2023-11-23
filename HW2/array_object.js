// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['main', 10.4, true, 'type', 1, 2, 3, 4, [5, 6, 7], false]

console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1  = {
    title: 'The Fellowship of the Ring',
    pageCount: 	423,
    genre: 'fantasy'
}

console.log(book1)

let book2 = {
    title: 'The Witcher: Sword of Destiny',
    pageCount : 384,
    genre: 'fantasy'
}

console.log(book2)

let book3 = {
    title: 'A Game of Thrones',
    pageCount: 694,
    genre: 'fantasy'
}

console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" -
// являється  масивом. Кожен автор має поля name та age.

book1.authors = [{
    name: 'J. R. R. Tolkien',
    age: '81 (died)'
}]

book2.authors = [{
    name: 'Andrzej Sapkowski',
    age: 75
}]

 book3.authors = [{
    name: 'George R. R. Martin',
    age: 75
}]

console.log(book1)
console.log(book2)
console.log(book3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Anna', username: 'GiRl', password: '123456'},
    {name: 'Denis', username: 'BoY', password: '654321'},
    {name: 'Nicolay', username: 'T-REX', password: '123456T-REX'},
    {name: 'Alex', username: 'AVALON', password: '10P12'},
    {name: 'Anatolii', username: 'tERMINATOR', password: '98765'},
    {name: 'Anastasia', username: 'Mist', password: '1q2w3e4r5t'},
    {name: 'Andrii', username: 'Student90', password: '19XXX10'},
    {name: 'Ruslan', username: 'Persival', password: '97643'},
    {name: 'Anna', username: 'KiLLer', password: 'lkjhgf'},
    {name: 'Anna', username: 'Master', password: '123456toy'}
]

console.log(users[0]['password'])
console.log(users[1]['password'])
console.log(users[2]['password'])
console.log(users[3]['password'])
console.log(users[4]['password'])
console.log(users[5]['password'])
console.log(users[6]['password'])
console.log(users[7]['password'])
console.log(users[8]['password'])
console.log(users[9]['password'])
