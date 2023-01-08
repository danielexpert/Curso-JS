function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
         window.alert(`[ERRO] Verifique os dados e tente novamente! `)  
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'kidM (1).png')
            } else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'jovemM (1).png')
            } else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'adultoM (1).png')
            }else{
                // idoso
                img.setAttribute('src', 'idosoM (1).png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // criança f
                img.setAttribute('src', 'kidF (1).png')
            } else if(idade < 21){
                // Jovem f
                img.setAttribute('src', 'jovemF (1).png')
            } else if(idade < 50){
                // Adulto f
                img.setAttribute('src', 'adultaF (1).png')
            }else{
                // idoso f
                img.setAttribute('src', 'idosaF (1).png')
            }
            
        }
        res.style.textAlign  =  'center'
        res.innerHTML = `Detectamos um ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}