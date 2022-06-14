//Math.round - zaokrouhlí matematicky od 0.5 nahoru
//Math.floor - zaokrouhlí dolů
//Math.ceil - zaokrouhlí nahoru

let button = document.getElementById('button')
let cubeImage = document.getElementById('kostka')
let message = document.getElementById('zprava')

button.addEventListener('click', () => {
  let number = Math.floor(Math.random() * 6 + 1)
  //let number = Math.ceil(Math.random() * 6) - druhá možnost. Když nepřičítáme 1, tak může padnout i nula, což je u házení kostkou nežádoucí.

  if (number === 6) {
    message.innerHTML = 'Hodila jsi šestku a vyhráváš!'
  } else {
    message.innerHTML = `Hodila jsi ${number}. <br> Zkus to znovu.`
  }
  cubeImage.src = `obrazky/${number}.png`
})
