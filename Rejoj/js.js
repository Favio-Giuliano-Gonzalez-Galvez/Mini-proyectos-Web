function reloj(){
    let cont_seg = document.getElementById('segundos')
    let cont_min = document.getElementById('minutos')
    let cont_horas = document.getElementById('horas')
    let hora = new Date
    let segundos= hora.getSeconds()
    let minutos = hora.getMinutes()
    let horas = hora.getHours()
    setInterval(function(){
        cont_seg.innerHTML = segundos
        cont_min.innerHTML = minutos
        cont_horas.innerHTML = horas
        segundos++
        if(segundos > 59){
            segundos = 0
            minutos++
        }
        if (minutos > 59) {
            minutos = 0
            horas++
        }
        if(horas > 23){
            horas = 0
        }
    },1000)
}
reloj()