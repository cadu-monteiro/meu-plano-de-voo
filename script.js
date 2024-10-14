function toggleMenu() {
    const idColuna = document.getElementById('idColuna')
        idColuna.classList.toggle('coluna')
    
    const idColuna2 = document.getElementById('idColuna2')
        idColuna2.classList.toggle('coluna2')   
}

function enviar() {
    var texto = document.getElementById("caixaTexto").value
    var linha = texto.split('\n')
    

    var identAero = linha[0]
        var transf = identAero.substring(5 , 12)
        document.getElementById('identAero').innerHTML = transf

    var regrasVoo = linha[0]
        var transf = regrasVoo.substring(13 , 14)
        document.getElementById('regrasVoo').innerHTML = transf
    
    var tipoVoo = linha[0]
        var transf = tipoVoo.substring(14,15)
        document.getElementById('tipoVoo').innerHTML = transf
   
    var tipoAero = linha[1]
        var transf = tipoAero.substring(1,5)
            document.getElementById('tipoAero').innerHTML = transf

    var catEstTurb = linha[1]
        var transf = catEstTurb.substring(6,7)
            document.getElementById('catEstTurb').innerHTML = transf

    var equipamento = linha[1]
        var transf = equipamento.substring(8)
        document.getElementById('equipamento').innerHTML = transf

    var aerodroPart = linha[2]
        var transf = aerodroPart.substring(1,5)
        document.getElementById('aerodroPart').innerHTML = transf

    var hora = linha[2]
        var transf = hora.substring(5,9)
        document.getElementById('hora').innerHTML = transf

    var veloCruz = linha[3]
        var transf = veloCruz.substring(1,6)
        document.getElementById('veloCruz').innerHTML = transf

    var nivel = linha[3]
        var transf = nivel.substring(6,10)
        document.getElementById('nivel').innerHTML = transf

    var rota = linha[3];
        var transf = rota.substring(11);
        document.getElementById('rota').innerHTML = transf

    var aerodroDest = linha[4];
        var transf = aerodroDest.substring(1,5);
        document.getElementById('aerodroDest').innerHTML = transf
        
    var totalEtt = linha[4];
        var transf = totalEtt.substring(5,9);
        document.getElementById('totalEtt').innerHTML = transf

    var aerodroAltn = linha[4];
        var transf = aerodroAltn.substring(10,14);
        document.getElementById('aerodroAltn').innerHTML = transf

    var aerodroAltn2 = linha[4];
        var transf = aerodroAltn2.substring(15,19);
        document.getElementById('aerodroAltn2').innerHTML = transf

    var OutrosDados = linha[5];
        var contar = OutrosDados.length;
        var menosUm = contar - 1
        var transf = OutrosDados.substring(1 , menosUm);
        document.getElementById('OutrosDados').innerHTML = transf
}

function mudarU() {
    const botao1 = document.getElementById('botaoU1')
    const botao2 = document.getElementById('botaoU2')

    if (botao1.style.display == 'none') {
        botao1.style.display = 'block'
        botao2.style.display = 'none'
    }else {
        botao1.style.display = 'none'
        botao2.style.display = 'block'
    }
}
function mudarV() {
    const botao1 = document.getElementById('botaoV1')
    const botao2 = document.getElementById('botaoV2')

    if (botao1.style.display == 'none') {
        botao1.style.display = 'block'
        botao2.style.display = 'none'
    }else {
        botao1.style.display = 'none'
        botao2.style.display = 'block'
    }
}
function mudarE() {
    const botao1 = document.getElementById('botaoE1')
    const botao2 = document.getElementById('botaoE2')

    if (botao1.style.display == 'none') {
        botao1.style.display = 'block'
        botao2.style.display = 'none'
    }else {
        botao1.style.display = 'none'
        botao2.style.display = 'block'
    }
}


