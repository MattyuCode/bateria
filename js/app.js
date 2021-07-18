let percentage = document.querySelector('.percentage');
let percent = document.querySelector('.percent');

navigator.getBattery().then(function (battery) {
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = battery.level * 100 + '%';
})

  
const Body = document.querySelector('body');
const BotonDark = document.querySelector('.btn');

BotonDark.onclick = () => {
    Body.classList.toggle('dark'); // este dark lo agrega en el body al dark click en el boton

    if (Body.classList.contains('dark')) {
        localStorage.setItem('ModoDark-activado', 'true');
    } else {
        localStorage.setItem('ModoDark-activado', 'false');
    }
}
// esto hace que guarda el modo dark en el local storage de tu dispositivo 
// al actualizar el navegador queda fijo hasta que se desactive el dark
if (localStorage.getItem('ModoDark-activado') === 'true') {
    Body.classList.add('dark');
} else {
    Body.classList.remove('dark');
}