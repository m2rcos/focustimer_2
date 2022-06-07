import Sounds from './sounds.js'

const sound = Sounds()

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMoore = document.querySelector('.moore')
const buttonLess = document.querySelector('.less')

const buttonFirePlace = document.querySelector('.fireplace')
const buttonForrest = document.querySelector('.forrest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')

const buttonLigth = document.querySelector('.ligth')
const buttonDark = document.querySelector('.dark')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.secondes')

const volumeButtonFireplace = document.getElementById('fireplace')
const volumeButtonForrest = document.getElementById('forrest')
const volumeButtonCoffee = document.getElementById('coffee')
const volumeButtonRain = document.getElementById('rain')

let timerTimeOut

buttonLigth.addEventListener('click', function () {
  buttonLigth.classList.add('hide')
  buttonDark.classList.remove('hide')

  document.querySelector('.clear').classList.add('darken')
})

buttonDark.addEventListener('click', function () {
  buttonDark.classList.add('hide')
  buttonLigth.classList.remove('hide')

  document.querySelector('.clear').classList.remove('darken')
})

buttonFirePlace.addEventListener('click', function () {
  document.querySelector('.bgcard-fireplace').classList.add('bg-select')
  document.querySelector('.bgimage-fireplace').classList.add('img-select')
  document.querySelector('.bgcard-coffee').classList.remove('bg-select')
  document.querySelector('.bgimage-coffee').classList.remove('img-select')
  document.querySelector('.bgcard-rain').classList.remove('bg-select')
  document.querySelector('.bgimage-rain').classList.remove('img-select')
  document.querySelector('.bgcard-forrest').classList.remove('bg-select')
  document.querySelector('.bgimage-forrest').classList.remove('img-select')
  sound.pressButton()
  sound.pressButtonStop()
  sound.pressButtonFirePlace()
})

buttonCoffee.addEventListener('click', function () {
  document.querySelector('.bgcard-coffee').classList.add('bg-select')
  document.querySelector('.bgimage-coffee').classList.add('img-select')
  document.querySelector('.bgcard-fireplace').classList.remove('bg-select')
  document.querySelector('.bgimage-fireplace').classList.remove('img-select')
  document.querySelector('.bgcard-rain').classList.remove('bg-select')
  document.querySelector('.bgimage-rain').classList.remove('img-select')
  document.querySelector('.bgcard-forrest').classList.remove('bg-select')
  document.querySelector('.bgimage-forrest').classList.remove('img-select')
  sound.pressButton()
  sound.pressButtonStop()
  sound.pressButtonCoffee()
})

buttonRain.addEventListener('click', function () {
  document.querySelector('.bgcard-rain').classList.add('bg-select')
  document.querySelector('.bgimage-rain').classList.add('img-select')
  document.querySelector('.bgcard-coffee').classList.remove('bg-select')
  document.querySelector('.bgimage-coffee').classList.remove('img-select')
  document.querySelector('.bgcard-fireplace').classList.remove('bg-select')
  document.querySelector('.bgimage-fireplace').classList.remove('img-select')
  document.querySelector('.bgcard-forrest').classList.remove('bg-select')
  document.querySelector('.bgimage-forrest').classList.remove('img-select')
  sound.pressButton()
  sound.pressButtonStop()
  sound.pressButtonRain()
})

buttonForrest.addEventListener('click', function () {
  document.querySelector('.bgcard-forrest').classList.add('bg-select')
  document.querySelector('.bgimage-forrest').classList.add('img-select')
  document.querySelector('.bgcard-rain').classList.remove('bg-select')
  document.querySelector('.bgimage-rain').classList.remove('img-select')
  document.querySelector('.bgcard-coffee').classList.remove('bg-select')
  document.querySelector('.bgimage-coffee').classList.remove('img-select')
  document.querySelector('.bgcard-fireplace').classList.remove('bg-select')
  document.querySelector('.bgimage-fireplace').classList.remove('img-select')
  sound.pressButton()
  sound.pressButtonStop()
  sound.pressButtonForrest()
})

buttonPlay.addEventListener('click', function () {
  countDown()
  sound.pressButton()
})

buttonMoore.addEventListener('click', function () {
  let minutes = Number(minutesDisplay.textContent)

  minutes = minutes + 5
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  sound.pressButton()
})

buttonLess.addEventListener('click', function () {
  let minutes = Number(minutesDisplay.textContent)

  if (minutes > 4) {
    minutes = minutes - 5
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  clearTimeout(timerTimeOut)
  sound.pressButton()
})

// Volumes
volumeButtonForrest.addEventListener('click', function () {
  sound.buttonForrest.volume = this.value
})
volumeButtonFireplace.addEventListener('click', function () {
  sound.buttonFirePlace.volume = this.value
})
volumeButtonRain.addEventListener('click', function () {
  sound.buttonRain.volume = this.value
})
volumeButtonCoffee.addEventListener('click', function () {
  sound.buttonCoffee.volume = this.value
})

function resetTimer() {
  updateTimeDisplay(25, 0)
}

function updateTimeDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimeDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      sound.timeEnd()
      resetTimer()
      sound.pressButtonStop()
      return
    }

    if (seconds <= 0) {
      seconds = 60

      --minutes
    }

    updateTimeDisplay(minutes, String(seconds - 1))

    countDown()
  }, 1000)
}
