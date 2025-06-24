
const msg = document.getElementById("msg");
const btnIniciar = document.getElementById("iniciarBtn")
const zona = document.getElementById("zonaJuego");

const tablero = document.getElementById('tablero');
const mensaje = document.getElementById('mensaje');


btnIniciar.addEventListener('click', iniciar);


tablero.innerHTML = '';
const div = document.createElement('div')
div.classList.add('casilla')
tablero.appendChild(div);



function iniciar() {
    msg.textContent = "Prepárate...";
    setTimeout(() => {

        tablero.innerHTML = '';
        tablero.appendChild(div)
        const divc = document.createElement('div')
        divc.classList.add('casillaclick')
        tablero.appendChild(divc);

        var rgbRandom1 = randomColor();
        var rgbRandom2 = randomColor();
        var rgbRandom3 = randomColor();
        
        divc.style.backgroundColor = `rgba(${rgbRandom1}, ${rgbRandom2}, ${rgbRandom3})`

        const contWidth = tablero.clientWidth;
        const contHeight = tablero.clientHeight;

        const maxX = contWidth - 70;
        const maxY = contHeight - 70;


        var randomX
        var randomY

        do {
            randomY = Math.floor(Math.random() * maxY);
            console.log(randomY)
        } while ((randomY < 120 || randomY > 450));

        do {
            randomX = Math.floor(Math.random() * maxX);
            console.log(randomX + 'X')

        } while ((randomX < 10 || randomX > 338));


        divc.style.left = `${randomX}px`;
        divc.style.top = `${randomY}px`;

        tiempoInicio = Date.now();

        temporizadorFallo = setTimeout(() => {
            msg.textContent = "¡Muy lento! Perdiste.";
            divc.remove();
        }, 3000);


        divc.addEventListener('click', () => {
            const tiempoReaccion = Date.now() - tiempoInicio;
            clearTimeout(temporizadorFallo);
            msg.textContent = `¡Bien! Tu tiempo de reacción fue de ${tiempoReaccion / 1000}s`;
            // ${tiempoReaccion} ms

            divc.remove();
        });

    }, (Math.floor((Math.random() * 3) + 1)) * 1000);



}


function randomColor() {
    return Math.floor(Math.random() * 255)
}