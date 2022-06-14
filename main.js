//Math.round - zaokrouhlí matematicky od 0.5 nahoru
//Math.floor - zaokrouhlí dolů
//Math.ceil - zaokrouhlí nahoru

document.getElementById('button').addEventListener('click', () => {
  let cubeImage = document.getElementById('kostka') // je lepší mít proměnné lokálně, abychom mohli funkci vzít a kompletně ji použít i jinde
  let message = document.getElementById('zprava')

  let number = Math.floor(Math.random() * 6 + 1)
  //let number = Math.ceil(Math.random() * 6) - druhá možnost. Když nepřičítáme 1, tak může padnout i nula, což je u házení kostkou nežádoucí.

  if (number === 6) {
    message.innerHTML = 'Hodila jsi šestku a vyhráváš!'
  } else {
    message.innerHTML = `Hodila jsi ${number}. <br> Zkus to znovu.`
  }
  cubeImage.src = `obrazky/${number}.png`
})
