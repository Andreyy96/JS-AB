// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let text1 = 'hello world'
let text2 = 'lorem ipsum'
let text3 = 'javascript is cool'

console.log(`hello world length: ${text1.length}`)
console.log(`lorem ipsum length: ${text2.length}`)
console.log(`javascript is cool length: ${text3.length}`)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let textUpper1 = text1.toUpperCase()
let textUpper2 = text2.toUpperCase()
let textUpper3 =  text3.toUpperCase()

console.log(textUpper1)
console.log(textUpper2)
console.log(textUpper3)

// - Перевести до нижнього регістру настипні стрінгові значення
//     'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let textLower1 = textUpper1.toLowerCase()
let textLower2 = textUpper2.toLowerCase()
let textLower3 = textUpper3.toLowerCase()

console.log(textLower1)
console.log(textLower2)
console.log(textLower3)

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str_dirty = ' dirty string   '
// let index1 = str_dirty.indexOf('d')
// let index2 = str_dirty.lastIndexOf('g')
// str = str_dirty.slice(index1, index2+1)
// console.log(str)

let str_dirty2 = str_dirty.trim()
console.log(str_dirty2)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. ['Ревуть', 'воли', 'як', 'ясла', 'повні']

str = 'Ревуть воли як ясла повні'

let stringToarray = (str) => str.split(' ')

let arr = stringToarray(str)
console.log(Array.isArray(arr))


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr_nums = [10, 8, -7 ,55 ,987 ,-1011 ,0 ,1050 ,0]

let new_arr_nums = arr_nums.map(value => String(value))
// let new_arr_nums = arr_nums.map(value => value.toString())
console.log(new_arr_nums)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let directory = prompt('ascending descending', 'ascending')

let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) =>  a - b)
    } else if (direction === 'descending') {
        return nums.sort((a, b) =>  b - a)
    }
}

let arr_numbers = sortNums(nums, directory)
console.log(arr_numbers)

// --------------------------------------------------------------------------------------------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration)
console.log(coursesAndDurationArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterMonthDuration = (coursesAndDurationArray.filter((item) =>
    item.monthDuration >= 5))
console.log(filterMonthDuration)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

newCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => {
    return  {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration}
})

console.log(newCoursesAndDurationArray)

//  описати колоду карт (від 6 до туза без джокерів) ----------------------------------------------------------------

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'}
]

//  - знайти піковий туз

console.log(cards.find(value => value.cardSuit === 'spade' && value.value === 'ace'))

//  - всі шістки

console.log(cards.filter(value => value.value === '6'))

//  - всі червоні карти

console.log(cards.filter(value => value.color === 'red'))

//  - всі буби

console.log(cards.filter(value => value.cardSuit === 'diamond'))

//  - всі трефи від 9 та більше

console.log(cards.filter(value => value.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(value.value) ))

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuit === 'spade') {
        previousValue.spades.push(currentValue)
    } else if (currentValue.cardSuit === 'diamond') {
        previousValue.diamonds.push(currentValue)
    } else if (currentValue.cardSuit === 'heart') {
        previousValue.hearts.push(currentValue)
    } else {
        previousValue.clubs.push(currentValue)
    }
    return previousValue
}, {spades:[], diamonds:[], hearts:[], clubs:[]})

console.log(reduce)

// ---------------------------------------------------------------------------

let coursesArray = [
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
    ]

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((value => value.modules.includes('sass'))))


// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((value => value.modules.includes('docker'))))