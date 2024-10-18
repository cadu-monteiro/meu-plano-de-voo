function menu() {
    const coluna = document.querySelector('#JanelaMenu')
    const infoMenu = document.querySelector('#insersaoDados')

    if (coluna.style.display == 'none') {
        coluna.style.display = 'block'
        
        
    } else {
        coluna.style.display = 'none'
        
    }
    if (coluna.style.display = 'block') {
        return
    }

}
function fechar() {
    const coluna = document.querySelector('#JanelaMenu')

    if (coluna.style.display == 'block') {
        coluna.style.display = 'none'
    }
    
}
function fecharConfirmacao() {
    const confirmacao = document.querySelector('#fundoJanelaDeConfirmacao')

    if (confirmacao.style.display == 'block') {
        confirmacao.style.display = 'none'
    }
    
}

function nao() {
    const confirmacao = document.querySelector('#fundoJanelaDeConfirmacao')

    if (confirmacao.style.display == 'block') {
        confirmacao.style.display = 'none'
    }
}
function sim() {
    location.reload()
}

function limpar() {
    const janelaConfirmacao = document.getElementById('fundoJanelaDeConfirmacao')


    if (janelaConfirmacao.style.display == 'none') {
        janelaConfirmacao.style.display = 'block'

    }
    
}

document.querySelector('#textoMatricula').addEventListener('input', function() {
    this.value = this.value.toUpperCase()
    var texto = this.value
    

    if (texto.length === 3 && !texto.includes('-')) {
        this.value = texto.slice(0,2) + '-' + texto.slice(2)
    }
    else if (texto.length == 7 && !texto.includes('/')) {
        this.value = texto.slice(0,6) + '/' + texto.slice(6)
    }


})





/*--- IMPORTAÇÃO DA ASSINATURA DIGITAL ----------------------------*/
document.getElementById('inputImagem').addEventListener('change', function (){
    carregarImagem()
})

function carregarImagem() {
    const input = document.getElementById('inputImagem')
    const img = document.getElementById('assinatura')

    if (input.files && input.files[0]) {
        const leitor = new FileReader()

        leitor.onload = function(e) {
            img.src = e.target.result;
            img.style.display = "block"
        }

        leitor.readAsDataURL(input.files[0])
    }
}





/*--- VERIFICAÇÃO DE ERROS ----------------------------------------*/






/*-----  TRANSFERÊNCIA DE DADOS  ----------------------------------*/
function enviar() {
    var texto = document.getElementById("caixaTexto").value
    var linha = texto.split('\n')
    fechar()

    

    var identAero = linha[0]
        var transf = identAero.substring(5 , 12)
        if (identAero.includes(String + Number + Number + String)) {
            document.getElementById('identAero').innerHTML = transf
        }else {
            document.getElementById('identAero').innerHTML = ""
        }
        

    var regrasVoo = linha[0]
        var transf = regrasVoo.substring(13,14)
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
        var contar = OutrosDados.length
        var menosUm = contar - 1
        var transf = OutrosDados.substring(1 , menosUm);
        document.getElementById('OutrosDados').innerHTML = transf




/* -----  INFORMAÇÕES SUPLEMENTARES  ------------------------------------------*/
    var textoMatricula = document.getElementById("textoMatricula").value.trim();
    
/* -----  EQUIPAMENTOS  -------------------------------------------------------*/



/*-----   A320  ---------------------------------------------------------------*/
    if (["PR-YSQ","PR-YRA","PR-YRB","PR-YRC","PR-YRD","PR-YRE","PR-YRF",
        "PR-YRH","PR-YRI","PR-YRJ","YRK","PR-YRL","PR-YRN","PR-YRO","PR-YRQ",
        "PR-YRR","PR-YRT","PR-YRU","PR-YRV","PR-YRW","YRX","PR-YRY",
        "PR-YRZ","PR-YSA","PR-YSB","PR-YSC","YSD","YSE","PR-YSF","PR-YSG",
        "PR-YSL","PR-YSN","PR-YSN","PR-YSO","PR-YSP","PR-YYA","PR-YYB","PR-YYC",
        "PR-YYD","PR-YYE","PR-YYF","PR-YYG","PR-YYH","PR-YYI","PR-YYJ","PR-YYL",
        "PR-YYK"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";


        document.getElementById('botaoU2').style.display = 'block'
        document.getElementById('botaoV2').style.display = 'block'

        document.getElementById('botaoP2').style.display = 'block'
        document.getElementById('botaoD2').style.display = 'block'
        document.getElementById('botaoM2').style.display = 'block'
        document.getElementById('botaoJ02').style.display = 'block'
        document.getElementById('botaoL2').style.display = 'block'
        document.getElementById('botaoF2').style.display = 'block'
        document.getElementById('botaoU02').style.display = 'block'
        document.getElementById('botaoV02').style.display = 'block'
        document.getElementById('botaoD02').style.display = 'block'
        document.getElementById('botaoC2').style.display = 'block'

    }else if (["PR-YRS"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND PINK";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";

    }else if (["PR-YSH"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "BLACK RED AND YELLOW";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";

    }else if (["PR-YSI"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "YELLOW BLUE AND WHITE";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";

    }else if (["PR-YSK"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "PINK WHITE AND YELLOW";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";

    }



/*-----   E195  ---------------------------------------------------------------*/
    else if (["PR-AUE","PR-AUF","PR-AUH","PR-AUI","PR-AUJ","PR-AUM","PR-AUN","PR-AUP",
        "PR-AXA","PR-AXB","PR-AXC","PR-AXD","PR-AXE","PR-AXF","PR-AXG","PR-AXI","PR-AXJ",
        "PR-AXK","PR-AXL","PR-AXN","PR-AXO","PR-AXP","PR-AXR","PR-AXS","PR-AXT","PR-AXU",
        "PR-AXX","PR-AXY","PR-AXZ","PR-AYE","PR-AYF","PR-AYG","PR-AYK","PR-AYU","PR-AYW",
        "PR-AYZ"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
    
        document.getElementById('botaoU2').style.display = 'block'
        document.getElementById('botaoV2').style.display = 'block'
    
        document.getElementById('botaoP2').style.display = 'block'
        document.getElementById('botaoD2').style.display = 'block'
        document.getElementById('botaoM2').style.display = 'block'
        document.getElementById('botaoJ02').style.display = 'block'
        document.getElementById('botaoL2').style.display = 'block'
        document.getElementById('botaoF2').style.display = 'block'
        document.getElementById('botaoU02').style.display = 'block'
        document.getElementById('botaoV02').style.display = 'block'
        document.getElementById('botaoD02').style.display = 'block'
        document.getElementById('botaoC2').style.display = 'block'
    
    }else if (["PR-AYI/QC","PR-AYJ/QC"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND YELLOW";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
    }else if (["PR-AUQ"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE AND RED";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
    }else if (["PR-AXH"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "COLORFUL BLUE";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
    }else if (["PR-AYV"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE YELLOW AND GREEN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
    }else if (["PR-AYX"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND GREEN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
    }else if (["PR-AYY"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
    }else if (["PR-AUO/QC","PR-AYI/QC","PR-AYJ/QC"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND YELLOW";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";

        document.getElementById('botaoU2').style.display = 'block'
        document.getElementById('botaoV2').style.display = 'block'
    
        document.getElementById('botaoP2').style.display = 'block'
        document.getElementById('botaoD2').style.display = 'block'
        document.getElementById('botaoM2').style.display = 'block'
        document.getElementById('botaoL2').style.display = 'block'
        document.getElementById('botaoF2').style.display = 'block'
        document.getElementById('botaoU02').style.display = 'block'
        document.getElementById('botaoV02').style.display = 'block'
        document.getElementById('botaoD02').style.display = 'block'
        document.getElementById('botaoC2').style.display = 'block'
        
    }else if (["PR-AXW/QC"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        
        document.getElementById('botaoU2').style.display = 'block'
        document.getElementById('botaoV2').style.display = 'block'
    
        document.getElementById('botaoP2').style.display = 'block'
        document.getElementById('botaoD2').style.display = 'block'
        document.getElementById('botaoM2').style.display = 'block'
        document.getElementById('botaoL2').style.display = 'block'
        document.getElementById('botaoF2').style.display = 'block'
        document.getElementById('botaoU02').style.display = 'block'
        document.getElementById('botaoV02').style.display = 'block'
        document.getElementById('botaoD02').style.display = 'block'
        document.getElementById('botaoC2').style.display = 'block'
        
    }else if (["PR-AYL/QC","PR-AYN"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        
        document.getElementById('botaoU2').style.display = 'block'
        document.getElementById('botaoV2').style.display = 'block'
    
        document.getElementById('botaoP2').style.display = 'block'
        document.getElementById('botaoD2').style.display = 'block'
        document.getElementById('botaoM2').style.display = 'block'
        document.getElementById('botaoL2').style.display = 'block'
        document.getElementById('botaoF2').style.display = 'block'
        document.getElementById('botaoU02').style.display = 'block'
        document.getElementById('botaoV02').style.display = 'block'
        document.getElementById('botaoD02').style.display = 'block'
        document.getElementById('botaoC2').style.display = 'block'
        
    }


/*-----   E295  ---------------------------------------------------------------*/
else if (["PR-AEB","PR-AEC","PR-AED","PR-AEE","PR-AEG","PR-AEH","PR-AEI","PR-AEJ",
    "PR-AEK","PR-AEL","PR-AEM","PR-AEN","PR-AEP","PR-AEO","PR-AEQ","PR-AER"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";


    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoM2').style.display = 'block'
    document.getElementById('botaoJ02').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}else if (["PR-PJN"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "COLORFUL BLUE";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";

}else if (["PR-AEA"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND PINK";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
}else if (["PR-AEF"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE GREEN AND YELLOW";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
}


/*-----   ATR  ---------------------------------------------------------------*/
else if (["PR-AKA/QC","PR-AKB/QC","PR-AKC/QC","PR-AKD/QC","PR-AKM","PR-AKN","PR-AQA",
    "PR-AQE","PR-AQH","PR-AQI","PR-AQJ","PR-AQK","PR-AQL","PR-AQM","PR-AQN","PR-AQO",
    "PR-AQP","PR-AQQ","PR-AQR","PR-AQS","PR-AQT","PR-AQV","PR-AQW","PR-AQZ","PR-ATV",
    "PR-ATW","PR-YXA","PR-YXB","PR-YXC","PR-YXT"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";


    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoM2').style.display = 'block'
    document.getElementById('botaoJ02').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}else if (["PR-AKF/QC"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND PINK";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
}else if (["PR-AKG"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
}else if (["PR-AKO"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE GREEN AND YELLOW";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
}else if (["PR-AKI","PR-AKJ","PR-AKL","PR-AQB","PR-TKI","PR-TKJ","PR-TKK","PR-TKL","PR-TKM"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoM2').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'
    
}
    

/*-----   A321  ---------------------------------------------------------------*/
else if (["PR-YJA","PR-YJB","PR-YJC","PR-YJD"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";


    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoM2').style.display = 'block'
    document.getElementById('botaoJ02').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}else if (["PR-YJE"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE GREEN AND YELLOW";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
}else if (["PR-YJF"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "RED AND YELLOW";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    
}



/*-----   B737  ---------------------------------------------------------------*/
else if (["PR-AJY","PR-AJZ"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";


    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoM2').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}



/*-----   A330  ---------------------------------------------------------------*/
else if (["PR-AIU"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "6";
    document.getElementById('capacidade').innerHTML = "300";



    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}else if (["PR-AIV"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE GREEN AND YELLOW";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "6";
    document.getElementById('capacidade').innerHTML = "300";



    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}else if (["PR-AIW","PR-AIZ"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "6";
    document.getElementById('capacidade').innerHTML = "300";



    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}


/*-----   A330 NEO  ------------------------------------------------------------*/
else if (["PR-ANY","PR-ANZ","PR-ANW","PR-ANX"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "6";
    document.getElementById('capacidade').innerHTML = "300";



    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}else if (["PR-ANV"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND PINK";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "6";
    document.getElementById('capacidade').innerHTML = "300";



    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}


/*-----   A350  ------------------------------------------------------------*/
else if (["PR-AOY","PR-AOW"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "8";
    document.getElementById('capacidade').innerHTML = "400";



    document.getElementById('botaoU2').style.display = 'block'
    document.getElementById('botaoV2').style.display = 'block'

    document.getElementById('botaoP2').style.display = 'block'
    document.getElementById('botaoD2').style.display = 'block'
    document.getElementById('botaoL2').style.display = 'block'
    document.getElementById('botaoF2').style.display = 'block'
    document.getElementById('botaoU02').style.display = 'block'
    document.getElementById('botaoV02').style.display = 'block'
    document.getElementById('botaoD02').style.display = 'block'
    document.getElementById('botaoC2').style.display = 'block'

}














     else {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "";
        document.getElementById('pessoasABordo').innerHTML = "";
        document.getElementById('observacoes').innerHTML = "";


        document.getElementById('botaoU2').style.display = 'none'
        document.getElementById('botaoV2').style.display = 'none'
        document.getElementById('botaoE2').style.display = 'none'
        document.getElementById('botaoS2').style.display = 'none'
        document.getElementById('botaoP2').style.display = 'none'
        document.getElementById('botaoD2').style.display = 'none'
        document.getElementById('botaoM2').style.display = 'none'
        document.getElementById('botaoJ2').style.display = 'none'
        document.getElementById('botaoJ02').style.display = 'none'
        document.getElementById('botaoL2').style.display = 'none'
        document.getElementById('botaoF2').style.display = 'none'
        document.getElementById('botaoU02').style.display = 'none'
        document.getElementById('botaoV02').style.display = 'none'
        document.getElementById('botaoD02').style.display = 'none'
        document.getElementById('botaoC2').style.display = 'none'
        document.getElementById('botaoN2').style.display = 'none' 
    }

/*-----   A320  ---------------------------------------------------------------*/

}

