let sessions = localStorage.getItem('session')
let normal_sessions = JSON.parse(sessions)
let main = document.createElement('main')
let i = 1
for (let session of normal_sessions) {
    let div = document.createElement('div')
    div.setAttribute('class', 'session')

    let h4 = document.createElement('h4')
    h4.innerText = `Session:${i++}`

    let month_p = document.createElement('p')
    month_p.setAttribute('id', 'month')
    month_p.innerText = `Month: ${session['month']}`

    let day_p = document.createElement('p')
    day_p.setAttribute('id', 'day')
    day_p.innerText = `Day: ${session['day']}`

    let time_p = document.createElement('p')
    time_p.setAttribute('id', 'time')
    time_p.innerText = `Time: ${session['time']}`

    div.append(h4, month_p, day_p, time_p)
    main.appendChild(div)
}
document.body.appendChild(main)

