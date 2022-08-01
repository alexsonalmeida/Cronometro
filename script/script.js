const visor = document.querySelector('.visor')
let seg = 0
let min = 0
let hrs = 0
let intervalo
let iniciado = false

const verifica0 = unidade => {
    if (unidade < 10) return `0${unidade}`
    return unidade
}

const incrementaCronometro = () => {
    seg++

    if (seg > 59) {
        min++
        seg = 0
    }

    if (min > 59) {
        hrs++
        min = 0
    }   

    visor.innerText = `${verifica0(hrs)}:${verifica0(min)}:${verifica0(seg)}`    
}

const iniciarCronometro = () => {
    if (!iniciado) {
      intervalo = setInterval(incrementaCronometro, 1000)
      iniciado = true  
    }
}

const pausarCronometro = () => {
    clearInterval(intervalo)
    iniciado = false
}

const zerarCronometro = () => {
    clearInterval(intervalo)
    seg = 0
    min = 0
    hrs = 0
    visor.innerHTML = verifica0(hrs) + ':' + verifica0(min) + ':' + verifica0(seg)
    iniciado = false
}