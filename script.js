function menu() {
    const coluna = document.querySelector('#JanelaMenu')
    const fundoFull = document.querySelector('body')

    if (coluna.style.display == 'none' && fundoFull.style.display == 'none') {
        coluna.style.display = 'block'
        fundoFull.style.display = 'block'
        
        
        
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

/*----  JANELA SOBRE O PROJETO  -----------------------------------------------*/
function fecharSobre() {
    const coluna = document.querySelector('#fundoSobre')

    if (coluna.style.display == 'block') {
        coluna.style.display = 'none'
    }
    
}

function botaoSobre() {
    const coluna = document.querySelector('#fundoSobre')

    if (coluna.style.display == 'none') {
        coluna.style.display = 'block'
    }
}

/*----  JANELA DE CONFIRMAÇÃO PARA LIMPAR TUDO  -------------------------------*/

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


/*----  JANELA DE MATRÍCULA NÃO CADASTRADA  -------------------------------*/
function OkNaoPossui() {
    const janelaOkNaoPossui = document.querySelector('#fundoJanelaNaoPossuiMatricula')

    if (janelaOkNaoPossui.style.display == 'block') {
        janelaOkNaoPossui.style.display = 'none'
    }   
}
function fecharOkNaoPossui() {
    const janelaFecharOkNaoPossui = document.querySelector('#fundoJanelaNaoPossuiMatricula')

    if (janelaFecharOkNaoPossui.style.display == 'block') {
        janelaFecharOkNaoPossui.style.display = 'none'
    }   
}


/*----  JANELA INSIRA UMA MATRÍCULA  -------------------------------*/
function OkCadastro() {
    const janelaCadastro = document.querySelector('#fundoJanelaCadastroMatricula')

    if (janelaCadastro.style.display == 'block') {
        janelaCadastro.style.display = 'none'
    }   
}
function fecharOkCadastro() {
    const janelaFecharCadastro = document.querySelector('#fundoJanelaCadastroMatricula')

    if (janelaFecharCadastro.style.display == 'block') {
        janelaFecharCadastro.style.display = 'none'
    }   
}


/*----  JANELA NÃO POSSUI 6 LINHAS  -------------------------------*/
function OkPrecisaDe6Linhas() {
    const janelaCadastro = document.querySelector('#fundoPrecisaDe6Linhas')

    if (janelaCadastro.style.display == 'block') {
        janelaCadastro.style.display = 'none'
    }   
}
function fecharPrecisaDe6Linhas() {
    const janelaFecharCadastro = document.querySelector('#fundoPrecisaDe6Linhas')

    if (janelaFecharCadastro.style.display == 'block') {
        janelaFecharCadastro.style.display = 'none'
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


const textarea = document.getElementById('textoMatricula');
        textarea.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        });





/*-----  TRANSFERÊNCIA DE DADOS  ----------------------------------*/
function enviar() {
    var texto = document.getElementById("caixaTexto").value
    var linha = texto.split('\n')
    fechar()


    if (linha.length > 6) {
        const janela = document.querySelector('#fundoPrecisaDe6Linhas')

        if (janela.style.display == 'none') {
            janela.style.display = 'block'
        }

        const coluna = document.querySelector('#JanelaMenu')
        coluna.style.display = 'block'
    }
    else if (linha.length < 6){

        const coluna = document.querySelector('#JanelaMenu')

        if (coluna.style.display = 'block') {
            return
        }
    }
    

    
    var identAero = linha[0].substring(5 , 12)
    document.getElementById('identAero').innerHTML = identAero

    var regrasVoo = linha[0].substring(13,14)
    document.getElementById('regrasVoo').innerHTML = regrasVoo

    var tipoVoo = linha[0].substring(14,15)
    document.getElementById('tipoVoo').innerHTML = tipoVoo

    var tipoAero = linha[1].substring(1,5)
    document.getElementById('tipoAero').innerHTML = tipoAero

    var catEstTurb = linha[1].substring(6,7)
    document.getElementById('catEstTurb').innerHTML = catEstTurb

    var equipamento = linha[1].substring(8)
    document.getElementById('equipamento').innerHTML = equipamento

    var aerodroPart = linha[2].substring(1,5)
    document.getElementById('aerodroPart').innerHTML = aerodroPart

    var hora = linha[2].substring(5,9)
    document.getElementById('hora').innerHTML = hora

    var veloCruz = linha[3].substring(1,6)
    document.getElementById('veloCruz').innerHTML = veloCruz

    var nivel = linha[3].substring(6,10)
    document.getElementById('nivel').innerHTML = nivel

    var rota = linha[3].substring(11);
    document.getElementById('rota').innerHTML = rota
    
    var aerodroDest = linha[4].substring(1,5)
    document.getElementById('aerodroDest').innerHTML = aerodroDest
    

    var totalEtt = linha[4].substring(5,9)
    document.getElementById('totalEtt').innerHTML = totalEtt

    var aerodroAltn = linha[4].substring(10,14)
    document.getElementById('aerodroAltn').innerHTML = aerodroAltn

    var aerodroAltn2 = linha[4].substring(15,19)
        document.getElementById('aerodroAltn2').innerHTML = aerodroAltn2

    var ultimaLinha = linha[5].slice(1,-1)
        document.getElementById('OutrosDados').innerHTML = ultimaLinha

        
    
        
    






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
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";


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
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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

    }else if (["PR-YSH"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "BLACK RED AND YELLOW";
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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

    }else if (["PR-YSI"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "YELLOW BLUE AND WHITE";
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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

    }else if (["PR-YSK"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "PINK WHITE AND YELLOW";
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";
    
    
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
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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
    
    }else if (["PR-AUQ"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE AND RED";
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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
    
    }else if (["PR-AXH"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "COLORFUL BLUE";
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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
    
    }else if (["PR-AYV"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE YELLOW AND GREEN";
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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
    
    }else if (["PR-AYX"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND GREEN";
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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
    
    }else if (["PR-AYY"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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
    
    }else if (["PR-AUO/QC","PR-AYI/QC","PR-AYJ/QC"].includes(textoMatricula)) {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND YELLOW";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";

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
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";
        
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
        document.getElementById('pessoasABordo').innerHTML = "TBN";
        document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";
        
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
else if (["PS-AEB","PS-AEC","PS-AED","PS-AEE","PS-AEG","PS-AEH","PS-AEI","PS-AEJ",
    "PS-AEK","PS-AEL","PS-AEM","PS-AEN","PS-AEP","PS-AEO","PS-AEQ","PS-AER"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";


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
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";

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

}else if (["PS-AEA"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND PINK";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";

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
    
}else if (["PS-AEF"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE GREEN AND YELLOW";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";

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
    
}


/*-----   ATR  ---------------------------------------------------------------*/
else if (["PR-AKA/QC","PR-AKB/QC","PR-AKC/QC","PR-AKD/QC","PR-AKM","PR-AKN","PR-AQA",
    "PR-AQE","PR-AQH","PR-AQI","PR-AQJ","PR-AQK","PR-AQL","PR-AQM","PR-AQN","PR-AQO",
    "PR-AQP","PR-AQQ","PR-AQR","PR-AQS","PR-AQT","PR-AQV","PR-AQW","PR-AQZ","PR-ATV",
    "PR-ATW","PR-YXA","PR-YXB","PR-YXC","PR-YXT"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";


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
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";

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
    
}else if (["PR-AKG"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";

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
    
}else if (["PR-AKO"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "BLUE GREEN AND YELLOW";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";

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
    
}else if (["PR-AKI","PR-AKJ","PR-AKL","PR-AQB","PR-TKI","PR-TKJ","PR-TKK","PR-TKL","PR-TKM"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";
    
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
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";


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
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";

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
    
}else if (["PR-YJF"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "RED AND YELLOW";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";

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
    
}



/*-----   B737  ---------------------------------------------------------------*/
else if (["PR-AJY","PR-AJZ"].includes(textoMatricula)) {
    document.getElementById('corEMarcaDaAeronave').innerHTML = "WHITE AND BLUE";
    document.getElementById('pessoasABordo').innerHTML = "TBN";
    document.getElementById('observacoes').innerHTML = "FIRST AID KIT";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('capacidade').innerHTML = "";
    document.getElementById('autonomia').innerHTML = "";


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
    
    document.getElementById('botaoC2').style.display = 'block'

}



else if ([""].includes(textoMatricula)) {
    const janela = document.querySelector('#fundoJanelaNaoPossuiMatricula')

    if (janela.style.display == 'none') {
        janela.style.display = 'block'
    }

    const coluna = document.querySelector('#JanelaMenu')
    coluna.style.display = 'block'
}











     else {
        document.getElementById('corEMarcaDaAeronave').innerHTML = "";
        document.getElementById('pessoasABordo').innerHTML = "";
        document.getElementById('observacoes').innerHTML = "";
        document.getElementById('numero2').innerHTML = "";
        document.getElementById('capacidade').innerHTML = "";
        document.getElementById('autonomia').innerHTML = "";


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


        const janela = document.querySelector('#fundoJanelaCadastroMatricula')

        if (janela.style.display == 'none') {
            janela.style.display = 'block'
        }

        const coluna = document.querySelector('#JanelaMenu')
        coluna.style.display = 'block'
    }


    var autonomiaMenu = document.getElementById('textoAutonomiaMenu').value
        document.getElementById('autonomia').innerHTML = autonomiaMenu

    var nomeComandante = document.getElementById('textoNomeComandante').value
    var anacComandante = document.getElementById('textoPilotoAnac').value
        document.getElementById('pilotoEmComando').innerHTML = nomeComandante + ' ' + anacComandante

    var nomeDov = document.getElementById('textoNomeDov').value
        document.getElementById('nome').innerHTML = nomeDov

    var anacDov = document.getElementById('textoAnac').value
        document.getElementById('codigoDac').innerHTML = anacDov

}

