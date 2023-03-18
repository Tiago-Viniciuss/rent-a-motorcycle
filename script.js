function showMenu() {
    let button = document.getElementById('menuButton')
    let menu = document.getElementById('menu')
    let menuComplement = document.getElementById('menuComplement')

    menu.classList.toggle('active')
    menuComplement.classList.toggle('active')

    if (menu.className == 'bg-dark active') {
        button.innerHTML = 'close'
    } else {
        button.innerHTML = 'menu'
    }
}

function closeMenu() {
    let menu = document.getElementById('menu')
    let menuComplement = document.getElementById('menuComplement')
    let button = document.getElementById('menuButton')

    menu.classList.toggle('active')
    menuComplement.classList.toggle('active')
    button.innerHTML = 'menu'

}

function changeLogo() {
    let brandMobile = document.getElementById('brandMobile')
    let brandDesktop = document.getElementById('brandDesktop')

    if (window.innerWidth > 1000) {
        brandMobile.style.display = 'none'
        brandDesktop.style.display = 'block'
    } else {
        brandMobile.style.display = 'block'
        brandDesktop.style.display = 'none'
    }
}


const bikes = document.querySelectorAll('.bikeMark')
const picture = document.querySelectorAll('.image')
const price = document.getElementById('price')
const bikeName = document.getElementById('bikeName')
const bikeMarkName = document.getElementById('bikeMarkName')
const bikeYear = document.getElementById('bikeYear')
const bikeFuel = document.getElementById('bikeFuel')


bikes.forEach((bikeMark, indice) => {
    bikeMark.addEventListener('click', () => {
        const bikeSelected = document.querySelector('.selected')
        bikeSelected.classList.remove('selected')
        bikeMark.classList.add('selected')

        const activedPicture = document.querySelector('.actived')
        activedPicture.classList.remove('actived')

        picture[indice].classList.add('actived')

        if (indice == 0) {
            price.innerHTML = '$45/per day'
            bikeName.innerHTML = '<strong>Iron 883</strong>'
            bikeMarkName.innerHTML = '<strong>Harley Davidson<sup>®</sup></strong>'
            bikeYear.innerHTML = '<strong>2015</strong>'
            bikeFuel.innerHTML = '<strong>Gasoline</strong>'
        } else if (indice == 1) {
            price.innerHTML = '$65/per day'
            bikeName.innerHTML = '<strong>Forty Eight</strong>'
            bikeMarkName.innerHTML = '<strong>Harley Davidson<sup>®</sup></strong>'
            bikeYear.innerHTML = '<strong>2018</strong>'
            bikeFuel.innerHTML = '<strong>Gasoline</strong>'
        } else if (indice == 2) {
            price.innerHTML = '$65/per day'
            bikeName.innerHTML = '<strong>FTR 1200</strong>'
            bikeMarkName.innerHTML = '<strong>Indian Motorcycles<sup>®</sup></strong>'
            bikeYear.innerHTML = '<strong>2020</strong>'
            bikeFuel.innerHTML = '<strong>Gasoline</strong>'
        } else if (indice == 3) {
            price.innerHTML = '$70/per day'
            bikeName.innerHTML = '<strong>K1300S</strong>'
            bikeMarkName.innerHTML = '<strong>BMW Motorcycles<sup>®</sup></strong>'
            bikeYear.innerHTML = '<strong>2010</strong>'
            bikeFuel.innerHTML = '<strong>Gasoline</strong>'
        } else if (indice == 4) {
            price.innerHTML = '$60/per day'
            bikeName.innerHTML = '<strong>Scrambler Enduro</strong>'
            bikeMarkName.innerHTML = '<strong>Ducati<sup>®</sup></strong>'
            bikeYear.innerHTML = '<strong>2018</strong>'
            bikeFuel.innerHTML = '<strong>Gasoline</strong>'
        } else if (indice == 5) {
            price.innerHTML = '$75/per day'
            bikeName.innerHTML = '<strong>Monster 1200</strong>'
            bikeMarkName.innerHTML = '<strong>Ducati<sup>®</sup></strong>'
            bikeYear.innerHTML = '<strong>2016</strong>'
            bikeFuel.innerHTML = '<strong>Gasoline</strong>'
        }

        localStorage.setItem ('Bike Picture', indice)
    })

})

function openBooking() {
    let booking = document.getElementById('booking')
    let bikeName1 = document.getElementById('bikeName')
    let bikeMarkName1 = document.getElementById('bikeMarkName')
    let username1 = document.getElementById('username')
    let name = String(bikeName1.innerText)
    let mark = String(bikeMarkName1.innerText)
    let username = String(username1.value)

    if (username.length > 0) {
        localStorage.setItem('Bike Name', name)
        localStorage.setItem('Bike Mark', mark)
        localStorage.setItem('Username', username)

        alert(`Let's Ride, ${username}!`)

        booking.style.display = 'block'
        location.href = '#booking'
    } else {
        alert('Write your name, please!')
    }
}

function sendRequest() {
    let pickuplocation = document.getElementById('pickup')
    let dropoflocation = document.getElementById('dropof')
    let pickupDate1 = document.getElementById('pickupDate')
    let dropofDate1 = document.getElementById('dropofDate')

    let pickupvalue = pickuplocation.options[pickuplocation.selectedIndex].value
    let dropofvalue = dropoflocation.options[dropoflocation.selectedIndex].value
    let pickupDate = String(pickupDate1.value)
    let dropofDate = String(dropofDate1.value)
    let pickDate = pickupDate.split('-').reverse().join('/')
    let dropDate = dropofDate.split('-').reverse().join('/')

    if (pickupDate.length == 0 || dropofDate.length == 0) {
        alert('Insert date, please!')
    } else {
        localStorage.setItem('Pick-up Location', pickupvalue)
        localStorage.setItem('Drop-of Location', dropofvalue)
        localStorage.setItem('Pick-up Date', pickDate)
        localStorage.setItem('Drop-of Date', dropDate)
        location.href = 'finishbook.html'
    }
}

function cancelBooking() {
    let booking = document.getElementById('booking')

    booking.style.display = 'none'
}

function loadData() {
    let username = document.getElementById('usernameBook')
    let bikeModel = document.getElementById('bikemodelBook')
    let bikeMarkName = document.getElementById('bikemarkBook')
    let pickupDate = document.getElementById('pickupDateBook')
    let dropofDate = document.getElementById('dropofDateBook')
    let pickuplocation = document.getElementById('pickupLocationBook')
    let dropoflocation = document.getElementById('dropofLocationBook')
    let bikePicture = document.getElementById('bikeChosen')
    
    username.innerText = localStorage.getItem('Username')
    bikeModel.innerText = localStorage.getItem('Bike Name')
    bikeMarkName.innerText = localStorage.getItem('Bike Mark')
    pickupDate.innerText = localStorage.getItem('Pick-up Date')
    dropofDate.innerText = localStorage.getItem('Drop-of Date')
    pickuplocation.innerText = localStorage.getItem('Pick-up Location')
    dropoflocation.innerText = localStorage.getItem('Drop-of Location')
    let indice = localStorage.getItem('Bike Picture')

    


    if (indice == 0) {
        bikePicture.style.backgroundImage = 'url(imagens/iron883.png)'
    } else if (indice == 1) {
        bikePicture.style.backgroundImage = 'url(imagens/fortyeight.png)'
    } else if (indice == 2) {
        bikePicture.style.backgroundImage = 'url(imagens/ftr1200.png)'
    } else if (indice == 3 ) {
        bikePicture.style.backgroundImage = 'url(imagens/bmwk1300s.png)'
    } else if (indice == 4) {
        bikePicture.style.backgroundImage = 'url(imagens/ducatienduro.png)'
    } else if (indice == 5 ){
        bikePicture.style.backgroundImage = 'url(imagens/ducatimonster1200.png)'
    }
}

function finishBooking() {
    location.href = 'index.html'
}

function openClientPlus() {
    let clientMenu = document.getElementById('clientPlus')

    clientMenu.classList.toggle('on')
}

function openWorkshopPlus() {
    let workshopMenu = document.getElementById('workshopPlus')

    workshopMenu.classList.toggle('on')
}