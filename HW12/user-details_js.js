let url = new URL(location.href)

let parameter = url.searchParams.get('id')

let style = document.createElement("style")

function addStyle(style, value) {
    style.innerText += ` ${value}`
    document.head.appendChild(style);
}

fetch(`https://jsonplaceholder.typicode.com/users/${parameter}`)
    .then(user => user.json())
    .then(user => {
        let div = document.createElement('div');
        for (const userElement in user) {
            if (userElement === 'address'|| userElement === 'company') {
                let firstObj = document.createElement('p')
                firstObj.classList.add('firstObj')
                firstObj.innerText = `${userElement}:`
                console.log(userElement)

                for (let element in user[userElement]) {
                    if (element !== 'geo') {
                        let p = document.createElement('p')
                        p.innerText = `${element}: ${user[userElement][element]}`;
                        p.classList.add('element-firstObj')
                        firstObj.appendChild(p)
                        div.appendChild(firstObj)
                    }
                    else {
                        let secondObj = document.createElement('p')
                        secondObj.innerText = `${element}:`
                        secondObj.classList.add('element-firstObj')
                        secondObj.classList.add('secondObj')

                        let geo = user.address[`${element}`]

                        for (let geoElement in geo) {
                            let p = document.createElement('p')
                            p.innerText = `${geoElement}: ${geo[geoElement]}`;
                            p.classList.add('element-secondObj')
                            secondObj.appendChild(p)
                            div.appendChild(secondObj)
                        }
                        firstObj.appendChild(secondObj)
                    }
                }
            }
            else {
                let p = document.createElement('p')
                p.innerText = `${userElement}: ${user[userElement]}`;
                div.appendChild(p)
            }
        }
        document.body.appendChild(div);
    });

value_style = ".element-firstObj{margin-left: 20px;}"
addStyle(style, value_style)

value_style = ".element-secondObj{margin-left: 10px;}"
addStyle(style, value_style)
