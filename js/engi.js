var comandos = 0;

function transita_comands(){

    let transitador = document.getElementById("transitador");
    transitador.style.height = "0px";
    transitador.style.animation = "transita_comands 1s";

    setTimeout(() => {
        if(comandos == 1){
            document.getElementById("comandos").style.display = "none";
            document.getElementById("infos_iniciais").style.display = "block";
        }else{
            document.getElementById("comandos").style.display = "block";
            document.getElementById("infos_iniciais").style.display = "none";
        }
    }, 500);

    setTimeout(() => {
        transitador.style.animation = "none";
        
        if(comandos == 0)
            comandos = 1;
        else
            comandos = 0;

    }, 1000);
}

function troca_pag(num_pag){

    paginas = ["Comandos Divertidos 😜 <br>😇 <span class='comando_line'>.apaz</span> | <span class='comando_line'>.apz</span> - União <br>😋 <span class='comando_line'>.asfiha</span> | <span class='comando_line'>.asf</span> - Servidos? <br>😡 <span class='comando_line'>.abriga</span> | <span class='comando_line'>.ab</span> - Porradaria! <br>🐮 <span class='comando_line'>.agado <@></span> | <span class='comando_line'>.aga <@></span> - Teste a Gadisse de alguém <br>💖 <span class='comando_line'>.amor <@> <@></span> - Teste o amor entre duas pessoas <br>🙌 <span class='comando_line'>.abaidu</span> - Louvado seja! <br>♟️ <span class='comando_line'>.apiao</span> - Roda o pião Dona Maria! <br>📘 <span class='comando_line'>.acurio</span> | <span class='comando_line'>.ac</span> - Uma curiosidade aleatória <br>🃏 <span class='comando_line'>.ajoke</span> | <span class='comando_line'>.aj</span> - Invoca uma piada <br>🤡 <span class='comando_line'>.acazalbe</span> | <span class='comando_line'>.acaz</span> - Cazalbe! <br>🍹 <span class='comando_line'>.ajailson</span> | <span class='comando_line'>.aja</span> - Jailson! <br>🍕 <span class='comando_line'>.arasputia</span> | <span class='comando_line'>.ara</span> - Rasputia!", "Comandos Utilitários 🧭<br>🏓 <span class='comando_line'>.aping</span> | <span class='comando_line'>.ap</span> - Mostra seu ping<br>🔣 <span class='comando_line'>.am 8&7!</span> | <span class='comando_line'>.am ---.. .-... --...</span> - Codifica e decodifica do morse<br>👨🏻‍💻 <span class='comando_line'>.abn Alonso</span> | <span class='comando_line'>.abn 11100011</span> - Codifica e decodifica do binário<br>◀️ <span class='comando_line'>.arev Alonso</span> - Inverte e desinverte o texto<br>🔍 <span class='comando_line'>.awiki Alonso</span> | <span class='comando_line'>.aw Alonso</span> - Pesquisa na wikipedia<br>⛅ <span class='comando_line'>.atempo</span> | <span class='comando_line'>.at sao paulo</span> - Clima atual de algum local<br>🦗 <span class='comando_line'>.amoji >emoji<</span> - Aumenta o tamanho do emoji<br>📻 <span class='comando_line'>.arep 9?</span> - O Alonsal falará em TTS <br>👤 <span class='comando_line'>.avatar</span> | <span class='comando_line'>.avatar <@></span> - Ver seu avatar ou de outro usuário <br>🌎 <span class='comando_line'>.amc</span> | <span class='comando_line'>.amc diamante</span> - Exibe infos de um item do Minecraft<br>🖼️ <span class='comando_line'>.aih</span> - Comandos de imagens", "Comandos de Jogos ⛳<br>✂️ <span class='comando_line'>.ajkp papel</span> | <span class='comando_line'>.ajkp</span> - Jokenpô<br>🟡 <span class='comando_line'>.acoin cara</span> | <span class='comando_line'>.aco coroa</span> - Teste sua sorte<br>🎲 <span class='comando_line'>.adado</span> | <span class='comando_line'>.ada 10 16</span> - Roda um ou vários dados com várias faces<br>🏗️ <span class='comando_line'>.apula</span> | <span class='comando_line'>.apredios</span> - Jogo do Pula Prédios!<br>🌎 <span class='comando_line'>.amc</span> | <span class='comando_line'>.amc diamante</span> - Exibe infos de um item do Minecraft", "Manutenção do Alonsal 🛠️<br>🆔 <span class='comando_line'>.ainfo</span> - Informações minhas<br>✉️ <span class='comando_line'>.amail <sua msg></span> - Envie uma mensagem para mim! :P<br>💌 <span class='comando_line'>.acvv</span> | <span class='comando_line'>.aconvite</span> - Convide-me para um Servidor!<br>💃 &nbsp;<span class='comando_line'>.ahub</span> | <span class='comando_line'>.aserver</span> - Entre no Hub multiconectado do Alonsal<br>🍰 <span class='comando_line'>.asuporte</span> - Ajude a manter e desenvolver o Alonsal", "Manipulação de Ibagens 🖼️<br>⬜ <span class='comando_line'>.aimg bw >suaimagem<</span> | <span class='comando_line'>.ai bw >suaimagem<</span> - Torna uma ou várias imagens preta e branca<br><br>🕺 &nbsp;| Sugira efeitos tops para o Alonsal usando o <span class='comando_line'>.amail >seu_efeito_top<</span> !<br><br>💁🏼‍♂️ | <em>Você pode abrir este menu com o comando <span class='comando_line'>.aih</span></em>", "Comandos Moderativos 📜<br>🕺 &nbsp; <span class='comando_line'>.addemoji 🕺 dancando</span> - Adiciona um emoji ao servidor<br>😢 <span class='comando_line'>.armoji 😢</span>  - Remove um emoji do servidor<br>🗑️ <span class='comando_line'>.acl 10</span> - Remove várias mensagens de uma vez<br><br>♨️ | <em>Mensagens com este símbolo serão excluídas automaticamente.</em><br>🛑 | <em>Estes comandos não são habilitados para usuários sem cargos administrativos.</em>"];

    document.getElementById("pagina_comandos").innerHTML = paginas[num_pag];

    alvos = document.getElementsByClassName("button_react");

    for(var i = 0; i < alvos.length; i++){
        alvos[i].style.backgroundColor = "rgb(47, 49, 54)";
        alvos[i].style.border = "1px solid rgba(0, 0, 0, 0)";
    }

    altera_selecionado = document.getElementsByClassName("select_"+ num_pag);
    
    altera_selecionado[0].style.backgroundColor = "rgb(59, 64, 90)";
    altera_selecionado[0].style.border = "1px solid rgb(88, 101, 242)";
}