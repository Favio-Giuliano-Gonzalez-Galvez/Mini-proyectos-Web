function mostrar_palabras(){
    let inp_text = document.getElementById("inp_text").value
    let mostrador = document.getElementById("mostrador_caracteres")
    let mostrador_p = document.getElementById('mostrador_palabras')
    inp_text = String(inp_text)
    let num_letras = inp_text.length
    mostrador.innerHTML = num_letras
    let mostrador_palabras = inp_text.split(" ")
    mostrador_palabras = mostrador_palabras.length
    mostrador_p.innerHTML = mostrador_palabras
    
}