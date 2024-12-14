  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').style.display = "block";
    document.getElementById('homeLink').classList.add('active');
    document.getElementById('homeLink').classList.add('white-icon');
    document.querySelector('.code').style.marginTop = '-30px';
    document.querySelector('.all').style.color = '#fa5252';
    logoHome()
});



function showBlock(section) {
    const blocks = ['home', 'resume', 'work', 'contact'];

    blocks.forEach(id => {
        if (id === section) {
            document.getElementById(id).style.display = 'block'
            
        } 
            else {
                document.getElementById(id).style.display= 'none'
            };
    });

    
}

function logoHome() { 
  const logo = document.querySelector('.logo');
  const homeLink = document.getElementById('homeLink');
  logo.addEventListener("click" , () => {
    homeLink.classList.add('active');
    homeLink.classList.add('white-icon');
    logo.style.background = 'transparent'
})
showBlock('home');
}

const btnAll = document.querySelectorAll('.link');

for (let i = 0; i < btnAll.length; i++) {
  btnAll[i].addEventListener('click', function () {
    
    for (let btnDefault of btnAll) {
      btnDefault.classList.remove('active');
      btnDefault.classList.remove('white-icon')
    }
  
    btnAll[i].classList.add('active');
    btnAll[i].classList.add('white-icon')
  });

}





const link = document.querySelectorAll('.showlink');
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function() {
    for (let i = 0; i < link.length; i++) {
      link[i].style.color = '#57657a'
    }
    link[i].style.color = '#fa5252'
  })
}

function showCard(div) {
  const cards = ['app', 'web', 'des', 'mentor', 'code'];

  cards.forEach(nameLink => {
    if (nameLink === div) {
      document.getElementById(nameLink).style.display = 'flex'

    }
    else {
      document.getElementById(nameLink).style.display = 'none'
    }
  })
}

function showAll() {
const flexC = document.querySelectorAll('.flex-c');
flexC.forEach(blocks => blocks.style.display = 'flex');
document.querySelector('.code').style.marginTop = '-30px';
}

function showWeb() {
  document.querySelector('.code').style.display = 'flex',
  document.querySelector('.blog').style.display = 'flex',
  document.querySelector('.code').style.margin = '0',
  document.querySelector('.app').style.display = 'none',
  document.querySelector('.mentor').style.display = 'none',
  document.querySelector('.ui').style.display = 'none'
}

setInterval(function() {
  let date = new Date();
  document.querySelector('.current_time').innerHTML = (date.toLocaleTimeString());
});
