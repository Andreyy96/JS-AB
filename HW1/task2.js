// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Андрій'
let middleName = 'Миколайович'
let lastName = 'Бондаренко'

let person1 = `${firstName} ${middleName} ${lastName}`
let person2 = firstName + ' ' + middleName + ' ' + lastName

console.log(person1)
console.log(person2)
