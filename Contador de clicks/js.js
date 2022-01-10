function a_d_r(){
    let contador_h = document.getElementById('contador')
    let aumentar = document.getElementById('aumentar')
    let contador= 0

    aumentar.addEventListener('click',function(){
        contador++
        contador_h.innerHTML = contador
        
    },true)

    let disminuir = document.getElementById('disminuir')

    disminuir.addEventListener('click',function(){
        contador--
        contador_h.innerHTML = contador
    },true)

    let resetear = document.getElementById('resetear')
    
    resetear.addEventListener('click', function(){
        contador = 0
        contador_h.innerHTML = contador
    },true)



    let automatico = document.getElementById('automatico')

    automatico.addEventListener('click',function(){
        let c = setInterval(() => {
            automatico.style.background = 'green'
            contador++
            contador_h.innerHTML = contador
        }, 1000);
    },true)
}
a_d_r()