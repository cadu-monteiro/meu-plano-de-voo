function toggleMenu() {
    const idColuna = document.getElementById('idColuna')
        idColuna.classList.toggle('coluna')
    
    const idColuna2 = document.getElementById('idColuna2')
        idColuna2.classList.toggle('coluna2')   
}

function enviar() {
    var texto = document.getElementById("caixaTexto").value
    var linha = texto.split('\n')
    

    var identAero = linha[2]
        var transf = identAero.substring(5 , 12)
        document.getElementById('identAero').innerHTML = transf

    var regrasVoo = linha[2]
        var transf = regrasVoo.substring(13 , 14)
        document.getElementById('regrasVoo').innerHTML = transf
    
    var tipoVoo = linha[2]
        var transf = tipoVoo.substring(14,15)
        document.getElementById('tipoVoo').innerHTML = transf
   
    var tipoAero = linha[3]
        var transf = tipoAero.substring(1,5)
            document.getElementById('tipoAero').innerHTML = transf

    var catEstTurb = linha[3]
        var transf = catEstTurb.substring(6,7)
            document.getElementById('catEstTurb').innerHTML = transf

    var equipamento = linha[3]
        var transf = equipamento.substring(8)
        document.getElementById('equipamento').innerHTML = transf

    var aerodroPart = linha[4]
        var transf = aerodroPart.substring(1,5)
        document.getElementById('aerodroPart').innerHTML = transf

    var hora = linha[4]
        var transf = hora.substring(5,9)
        document.getElementById('hora').innerHTML = transf

    var veloCruz = linha[5]
        var transf = veloCruz.substring(1,6)
        document.getElementById('veloCruz').innerHTML = transf

    var nivel = linha[5]
        var transf = nivel.substring(6,10)
        document.getElementById('nivel').innerHTML = transf

    var rota = linha[5];
        var transf = rota.substring(11);
        document.getElementById('rota').innerHTML = transf

    var aerodroDest = linha[6];
        var transf = aerodroDest.substring(1,5);
        document.getElementById('aerodroDest').innerHTML = transf
        
    var totalEtt = linha[6];
        var transf = totalEtt.substring(5,9);
        document.getElementById('totalEtt').innerHTML = transf

    var aerodroAltn = linha[6];
        var transf = aerodroAltn.substring(10,14);
        document.getElementById('aerodroAltn').innerHTML = transf

    var aerodroAltn2 = linha[6];
        var transf = aerodroAltn2.substring(15,19);
        document.getElementById('aerodroAltn2').innerHTML = transf

    var OutrosDados = linha[7];
        var contar = OutrosDados.length;
        var menosUm = contar - 1
        var transf = OutrosDados.substring(1 , menosUm);
        document.getElementById('OutrosDados').innerHTML = transf
}

