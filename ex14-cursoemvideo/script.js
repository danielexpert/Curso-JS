function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e  ${minutos} minutos.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'images/manha.svg'
        document.body.style.background = '#F9A020'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'images/tarde.svg'
        document.body.style.background = '#F59428'
    } else{
        //BOA NOITE
        img.src = 'images/night.svg'
        document.body.style.background = '#475059'
    }
}
