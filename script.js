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
    })

})