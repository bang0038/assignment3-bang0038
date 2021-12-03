// Pulling elements from their ID attribute in HTML
const christmas = document.getElementById('christmas')
const newyears = document.getElementById('new-years')
const valentines = document.getElementById('valentines')

// Setting dates
const christmasDay = new Date('12/25/2021')
const newyearsDay = new Date ('01/01/2022')
const valentinesDay = new Date ('02/14/2022')

// Telling js how to count in milliseconds
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

// Christmas Day countdown starts here

function christmasCountdown() {
  const today = new Date()
  const timeSpan = christmasDay - today

  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  christmas.innerHTML =
    days + ' days ' + hours + ' hours ' + minutes + ' minutes and ' + seconds + ' seconds remaining until Christmas Day'
}

startTimer = setInterval(christmasCountdown, second)

// New Years Day countdown starts here

function newyearsCountdown() {
    const today = new Date()
    const timeSpan = newyearsDay - today
  
    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)
  
    newyears.innerHTML =
    days + ' days ' + hours + ' hours ' + minutes + ' minutes and ' + seconds + ' seconds remaining until the New Year'}
  
    startTimer = setInterval(newyearsCountdown, second)

  // Valentines Day countdown starts here

  function valentinesCountdown() {
    const today = new Date()
    const timeSpan = valentinesDay - today
  
    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)
  
    valentines.innerHTML =
    days + ' days ' + hours + ' hours ' + minutes + ' minutes and ' + seconds + ' seconds remaining until Valentines Day'}
  
    startTimer = setInterval(valentinesCountdown, second)