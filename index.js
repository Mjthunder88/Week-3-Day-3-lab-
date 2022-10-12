let message = document.querySelector('#message')
let form = document.querySelector('form')


function addMovie (event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    movie.appendChild(deleteBtn)
    let list = document.querySelector('ul')
    list.appendChild(movie)
    inputField.value = ''
    deleteBtn.addEventListener('click', deleteMovie)
    movieTitle.addEventListener('click', crossOffMovie)
    
}

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}

form.addEventListener('submit', addMovie)



//-----------------cross out section------------------------

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} Watched! `
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}


//---------------Intermediat---------------

function revealMessage () {
    message.classList.remove('hide')
    setTimeout(hideMessage, 1000)

}    
    
function hideMessage () {
    message.classList = 'hide'
}