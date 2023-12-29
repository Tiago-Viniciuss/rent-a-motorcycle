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


function changeLanguage1() {
    let language1 = document.getElementById('language1')

    language1.style.display = 'block'
    
}

function changeLanguage2() {
    let language2 = document.getElementById('language2')

    language2.style.display = 'block'
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

function openBooking(event) {
    
    let booking = document.getElementById('booking')
    let bikeName1 = document.getElementById('bikeName')
    let bikeMarkName1 = document.getElementById('bikeMarkName')
    let username1 = document.getElementById('username')
    let name = String(bikeName1.innerText)
    let mark = String(bikeMarkName1.innerText)
    let username = String(username1.value)

    if (username.length != 0) {
        localStorage.setItem('Bike Name', name)
        localStorage.setItem('Bike Mark', mark)
        localStorage.setItem('Username', username)

        booking.style.display = 'block'
        location.href = '#reserveButton'
        event.preventDefault()
    }
        
    
}

function sendRequest() {
    // Obter os valores dos campos do formulário
    var pickupLocation = document.getElementById('pickup').value;
    var dropoffLocation = document.getElementById('dropoff').value;
    var pickupDate = document.getElementById('pickupDate').value;
    var dropoffDate = document.getElementById('dropoffDate').value;

    // Formatar as datas como dd/mm/aaaa
    var formattedPickupDate = formatDateString(pickupDate);
    var formattedDropoffDate = formatDateString(dropoffDate);

    // Armazenar no localStorage

    localStorage.setItem('pickupLocation', pickupLocation);
    localStorage.setItem('dropoffLocation', dropoffLocation);
    localStorage.setItem('formattedPickupDate', formattedPickupDate);
    localStorage.setItem('formattedDropoffDate', formattedDropoffDate);

    location.href = 'finishbook.html'
    alert('Enviando Pedido')
  }

  function formatDateString(dateString) {
    // Criar um objeto Date para manipular a data
    var dateObject = new Date(dateString);

    // Extrair dia, mês e ano
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1; // Mês é baseado em zero, então adicionamos 1
    var year = dateObject.getFullYear();

    

    // Formatar a data como dd/mm/aaaa
    return day + '/' + month + '/' + year;

    
  }

  

  function cancelBooking() {
    // Limpar o localStorage
    localStorage.clear();
    alert('Booking canceled. Local Storage cleared.');
  }

function loadData() {
    let username = document.getElementById('usernameBook')
    let bikeModel = document.getElementById('bikemodelBook')
    let bikeMarkName = document.getElementById('bikemarkBook')
    let pickupDateBook = document.getElementById('pickupDateBook')
    let dropoffDateBook = document.getElementById('dropofDateBook')
    let pickuplocation = document.getElementById('pickupLocationBook')
    let dropoflocation = document.getElementById('dropofLocationBook')
    let bikePicture = document.getElementById('bikeChosen')
    let valueDay = document.getElementById('valuePerDay')
    let numberDays = document.getElementById('numberDays')
    let totalValue = document.getElementById('totalValue')

    username.innerText = localStorage.getItem('Username')
    bikeModel.innerText = localStorage.getItem('Bike Name')
    bikeMarkName.innerText = localStorage.getItem('Bike Mark')
    pickupDateBook.innerText = localStorage.getItem('formattedPickupDate')
    dropoffDateBook.innerText = localStorage.getItem('formattedDropoffDate')
    pickuplocation.innerText = localStorage.getItem('pickupLocation')
    dropoflocation.innerText = localStorage.getItem('dropoffLocation')
    let indice = localStorage.getItem('Bike Picture')

    var pickupDate = localStorage.getItem('formattedPickupDate');
    var dropoffDate = localStorage.getItem('formattedDropoffDate');

    console.log('pickupDate from localStorage:', pickupDate);
    console.log('dropoffDate from localStorage:', dropoffDate);

    // Verificar se as datas do localStorage estão definidas
    if (!pickupDate || !dropoffDate) {
      alert('Datas não encontradas no localStorage. Certifique-se de que as datas foram salvas corretamente.');
      return;
    }

    // Converter as datas para objetos Date
    var pickupDateObj = parseDateString(pickupDate);
    var dropoffDateObj = parseDateString(dropoffDate);

    console.log('pickupDateObj:', pickupDateObj);
    console.log('dropoffDateObj:', dropoffDateObj);

    // Verificar se as datas são válidas
    if (!pickupDateObj || !dropoffDateObj || isNaN(pickupDateObj.getTime()) || isNaN(dropoffDateObj.getTime())) {
      alert('Datas inválidas. Certifique-se de que as datas foram salvas corretamente.');
      return;
    }

    // Calcular a diferença em milissegundos entre as datas
    var timeDiff = dropoffDateObj.getTime() - pickupDateObj.getTime();

    // Calcular o número de dias
    var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    let calcMoto0 = daysDiff * 45
    let calcMoto1 = daysDiff * 65
    let calcMoto2 = daysDiff * 65
    let calcMoto3 = daysDiff * 70
    let calcMoto4 = daysDiff * 60
    let calcMoto5 = daysDiff * 75


    console.log(calcMoto0)

    if (indice == 0) {
        bikePicture.style.backgroundImage = 'url(imagens/iron883.png)'
        valueDay.innerText = '$45'
        numberDays.innerText = daysDiff
        totalValue.innerHTML = `$${calcMoto0}`
    } else if (indice == 1) {
        bikePicture.style.backgroundImage = 'url(imagens/fortyeight.png)'
        valueDay.innerText = '$65'
        numberDays.innerText = daysDiff
        totalValue.innerHTML = `$${calcMoto1}`
    } else if (indice == 2) {
        bikePicture.style.backgroundImage = 'url(imagens/ftr1200.png)'
        valueDay.innerText = '$65'
        numberDays.innerText = daysDiff
        totalValue.innerHTML = `$${calcMoto2}`
    } else if (indice == 3 ) {
        bikePicture.style.backgroundImage = 'url(imagens/bmwk1300s.png)'
        valueDay.innerText = '$70'
        numberDays.innerText = daysDiff
        totalValue.innerHTML = `$${calcMoto3}`
    } else if (indice == 4) {
        bikePicture.style.backgroundImage = 'url(imagens/ducatienduro.png)'
        valueDay.innerText = '$60'
        numberDays.innerText = daysDiff
        totalValue.innerHTML = `$${calcMoto4}`
    } else if (indice == 5 ){
        bikePicture.style.backgroundImage = 'url(imagens/ducatimonster1200.png)'
        valueDay.innerText = '$75'
        numberDays.innerText = daysDiff
        totalValue.innerHTML = `$${calcMoto5}`
    }
  }

  

  // Função para converter string de data no formato dd/mm/aaaa para objeto Date
  function parseDateString(dateString) {
    var parts = dateString.split('/');
    if (parts.length === 3) {
      var day = parseInt(parts[0], 10);
      var month = parseInt(parts[1], 10) - 1; // Mês é baseado em zero
      var year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return null;
  
    
    
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

function openInsurancePlus() {
    let insuranceMenu = document.getElementById('insurancePlus')

    insuranceMenu.classList.toggle('on')
}

function openAboutUsPlus() {
    let aboutUsMenu = document.getElementById('aboutUsPlus')

    aboutUsMenu.classList.toggle('on')
}