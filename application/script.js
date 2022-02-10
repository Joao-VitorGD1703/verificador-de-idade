function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var radius = document.querySelectorAll("input[type = 'radio']")
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(radius[0].checked){
            gen = 'Masculino'
            if(idade >= 0 && idade <= 5){
            //bebe
                img.setAttribute('src', 'homemBebe.jpg')
            }else if(idade >=6 && idade <= 11){
            //criança
                 img.setAttribute('src', 'homemCrianca.jpg')
            }else if(idade >= 12 && idade <= 21){
            // jovem
                 img.setAttribute('src', 'homemJovem.jpg')
            } else if(idade >= 22 && idade <= 59){
            //adulto
                 img.setAttribute('src','homemAdulto.jpg')
            }else{
            //idoso
                 img.setAttribute('src', 'homemIdoso.jpg')
            }
        }else{
            gen = 'Femenino'
            if(idade >= 0 && idade <= 5){
                img.setAttribute('src', 'mulherBebe.jpg')
            }else if(idade >= 6 && idade <= 11){
                img.setAttribute('src', 'mulherCrianca.jpg')
            }else if (idade >= 12 && idade <= 21){
                img.setAttribute('src', 'mulherJovem.jpg')
            }else if (idade >= 22 && idade <= 59){
                img.setAttribute('src', 'mulherAdulta.jpg')
            }else{
                img.setAttribute('src', 'mulherIdosa.jpg')
            }

        }
        
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }

}