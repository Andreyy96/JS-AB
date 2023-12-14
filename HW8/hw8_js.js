// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let users = [
    new User(1, 'vasya', 'bond', 'email1@gmail.com', '0974346431'),
    new User(20, 'petya', 'bond', 'email2@gmail.com', '0974346432'),
    new User(3, 'kolya', 'bond', 'email3@gmail.com', '0974346433'),
    new User(43, 'olya', 'bond', 'email4@gmail.com', '0974346434'),
    new User(5, 'max', 'bond', 'email5@gmail.com', '0974346435'),
    new User(6, 'anya', 'bond', 'email6@gmail.com', '0974346436'),
    new User(734, 'oleg', 'bond', 'email7@gmail.com', '0974346437'),
    new User(8, 'andrey', 'bond', 'email8@gmail.com', '0974346438'),
    new User(90, 'olya', 'bond', 'email9@gmail.com', '0974346439'),
    new User(10, 'max', 'bond', 'email10@gmail.com', '09743464380')
]

console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsers = users.filter(value => value.id % 2 === 0)

console.log(filterUsers)

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = users.sort((a, b) => a.id - b.id)
console.log(sortUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {
    constructor(id, name, surname, email, phone, order) {
        User.apply(this, arguments)
        this.order = order
    }
}

let clients = [
    new Client(1, 'vasya', 'bond', 'email1@gmail.com', '0974346431',
        ['cigarettes', 'sugar']),
    new Client(20, 'petya', 'bond', 'email2@gmail.com', '0974346432',
        ['bear', 'vodka', 'fish', 'water']),
    new Client(3, 'kolya', 'bond', 'email3@gmail.com', '0974346433',
        ['apples', 'banana', 'tomatoes']),
    new Client(43, 'olya', 'bond', 'email4@gmail.com', '0974346434',
        ['cigarettes', 'sugar', 'lemon']),
    new Client(5, 'max', 'bond', 'email5@gmail.com', '0974346435',
        ['cucumbers','oil']),
    new Client(6, 'anya', 'bond', 'email6@gmail.com', '0974346436',
        ['meat', 'papers', 'chilli']),
    new Client(734, 'oleg', 'bond', 'email7@gmail.com', '0974346437',
        ['fish']),
    new Client(8, 'andrey', 'bond', 'email8@gmail.com', '0974346438',
        ['vine', 'meat', 'potatoes']),
    new Client(90, 'olya', 'bond', 'email9@gmail.com', '0974346439',
        ['vine']),
    new Client(10, 'max', 'bond', 'email10@gmail.com', '09743464380',
        [ 'meat', 'potatoes'])
]

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length)

console.log(clients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarInfo (producer, year, max_speed, engine_capacity) {
    this.producer = producer
    this.year = year
    this.max_speed = max_speed
    this.engine_capacity = engine_capacity
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${max_speed}км на годину`)
    }

    this.info = function () {
        console.log(`
        виробник: ${this.producer}
        год: ${this.year}
        максимальна швидкість: ${this.max_speed}км
        об'єм двигуна: ${this.engine_capacity}`)
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed += newSpeed
    }

    this.changeYear = function (newValue) {
        this.year = newValue
    }

    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let car = new CarInfo('Germany', 2022, 250, 3.5)

car.drive()

car.info()

let speed = +prompt('Введіть швидкість', '10')
car.increaseMaxSpeed(speed)

let year = +prompt('Введіть рік', '2000')
car.changeYear(year)

car.addDriver({name: 'vasya', gender: 'man', phone: '0974346432'})

console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car {
    constructor(producer, year, max_speed, engine_capacity) {
        this.producer = producer
        this.year = year
        this.max_speed = max_speed
        this.engine_capacity = engine_capacity
        this.driver = {}
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.max_speed}км на годину`)
    }

    info() {
        console.log(`
        виробник: ${this.producer}     
        год: ${this.year}
        максимальна швидкість: ${this.max_speed}км
        об'єм двигуна: ${this.engine_capacity}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.max_speed += newSpeed
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driver) {
        this.driver = driver
    }
}

let car2 = new Car('Germany', 2023, 240, 4.0)

car2.drive()
car2.info()

speed = +prompt('Введіть швидкість', '30')
car2.increaseMaxSpeed(speed)

year = +prompt('Введіть рік', '2010')
car2.changeYear(year)

car2.addDriver({name: 'max', gender: 'man', phone: '0974346432'})

console.log(car2)

// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(nameWoman, age, foot_size) {
        this.name = nameWoman
        this.age = age
        this.foot_size = foot_size
    }
}

class Prince {

    constructor(name, age, found_shoe) {
        this.name = name
        this.age = age
        this.shoe = found_shoe
    }

    fiendCinderella(women) {
        for(let woman of women) {
            if(this.shoe === woman.foot_size) {
                console.log(`${this.name}, ти знайшов попелюшку - name: ${woman.name}, age: ${woman.age}, foot size: ${woman.foot_size}`)
            }
        }
    }

    fiend(women) {
        console.log(women.find(woman => this.shoe === woman.foot_size))
    }
}

let women = [
    new Cinderella('olya', 32, 32),
    new Cinderella('alina', 34, 33),
    new Cinderella('ira', 23, 30),
    new Cinderella('nastya', 28, 33),
    new Cinderella('sasha', 29, 29),
    new Cinderella('masha', 30, 34),
    new Cinderella('angelina', 31, 30),
    new Cinderella('vika', 29, 28),
    new Cinderella('ira', 30, 30),
    new Cinderella('sasha', 27, 31)
]

let prince = new Prince('vasya', 31, 28)


prince.fiendCinderella(women)

prince.fiend(women)