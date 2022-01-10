function temporizador(){
    //Contadores
    let segundos_html = document.getElementById('cont_seg')
    let segundos = 0

    let minutos_html = document.getElementById('cont_min')
    let minutos = 0

    let horas_html =  document.getElementById('cont_hor')
    let horas = 0

    //simbolos
    let aum_seg = document.getElementById("aum_seg")
    let dis_seg = document.getElementById("dis_seg")

    let aum_min = document.getElementById("aum_min")
    let dis_min = document.getElementById("dis_min")

    let aum_hor = document.getElementById("aum_hor")
    let dis_hor = document.getElementById("dis_hor")

    //botones
    let boton_empezar = document.getElementById('empezar')
    let boton_resetear = document.getElementById('resetear')


    aum_seg.addEventListener('click', function(){
        if(segundos > 58){
            segundos = -1
        }
        segundos++
        segundos_html.innerHTML = segundos
        const audio = new Audio('sonidos/son_click.mp3')
        audio.play()
    },true)
    dis_seg.addEventListener('click', function(){
        if(segundos < 1){
            segundos = 60
        }
        segundos--
        segundos_html.innerHTML = segundos
        const audio = new Audio('sonidos/son_click.mp3')
    audio.play()
    },true)

    aum_min.addEventListener('click', function(){
        if(minutos > 58){
            minutos = -1
        }
        minutos++
        minutos_html.innerHTML = minutos
        const audio = new Audio('sonidos/son_click.mp3')
    audio.play()
    },true)
    dis_min.addEventListener('click', function(){
        if(minutos < 1){
            minutos = 60
        }
        minutos--
        minutos_html.innerHTML = minutos
        const audio = new Audio('sonidos/son_click.mp3')
    audio.play()
    },true)

    aum_hor.addEventListener('click', function(){
        if(horas > 98){
            horas = -1
        }
        horas++
        horas_html.innerHTML = horas
        const audio = new Audio('sonidos/son_click.mp3')
    audio.play()
    },true)
    dis_hor.addEventListener('click', function(){
        if(horas < 1){
            horas = 100
        }
        
        horas--
        horas_html.innerHTML = horas
        const audio = new Audio('sonidos/son_click.mp3')
    audio.play()
    },true)

    boton_empezar.addEventListener('click',function(){
        let time_segundos = setInterval(() => {
            boton_empezar.style.display = 'none'
            if(segundos < 1){
                if(minutos == 0){
                    segundos = 1
                    clearInterval(time_segundos)
                    const son_alarma = new Audio('sonidos/sonido_alarma.mp3')
                    son_alarma.play()
                    son_alarma.loop = true
                    boton_empezar.style.display = 'none'
                }
                else{
                    segundos = 60
                    minutos--
                    minutos_html.innerHTML = minutos
                    //ERROR
                        if(horas == 0){
                            minutos = 1
                        }
                        else{
                            minutos = 60
                            horas--
                            horas_html.innerHTML = horas
                        }
                }
            }
            segundos--
            segundos_html.innerHTML = segundos
        }, 1000);
        const audio = new Audio('sonidos/son_click.mp3')
        audio.play()
    },true)
}


temporizador()