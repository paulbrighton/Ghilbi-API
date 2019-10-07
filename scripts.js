const request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  const data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title)
      console.log(movie.description)
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h2 = document.createElement('h2')
      h2.textContent = movie.title

      const p = document.createElement('p')
      p.textContent = movie.description

      container.appendChild(card)

      card.appendChild(h2)
      card.appendChild(p)
    })
  } else {
    console.log('error')
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = 'Error, this doesn\'t seem to be working.'

    app.appendChild(errorMessage)
  }
}

request.send()

const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)
