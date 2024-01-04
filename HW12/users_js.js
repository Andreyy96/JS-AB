async function printUsers(){
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    let main = document.createElement('main')
    let ul = document.createElement('ul')

    for (const user of users) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        li.setAttribute('id', `${user.id}`)

        a.innerText = `ID${user.id}: ${user.name}`

        a.setAttribute('href', `user-details.html?id=${user.id}`)

        li.appendChild(a)
        ul.appendChild(li)
    }
    main.appendChild(ul)
    document.body.appendChild(main)
}

printUsers()