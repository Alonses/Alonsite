var comandos = 0, idioma = "pt-br", numero_pag = 0;

function transita_comands(auto){

    if(typeof auto != "undefined")
        comandos = 0;

    let transitador = document.getElementById("transitador");
    transitador.style.height = "0px";
    transitador.style.animation = "transita_comands 1s";

    setTimeout(() => {
        if(comandos == 1){
            document.getElementById("comandos").style.display = "none";
            document.getElementById("infos_iniciais").style.display = "block";
            document.getElementById("infos_secundarias").style.display = "block";
        }else{
            document.getElementById("comandos").style.display = "block";
            document.getElementById("infos_iniciais").style.display = "none";
            document.getElementById("infos_secundarias").style.display = "none";
        }
    }, 500);

    setTimeout(() => {
        transitador.style.animation = "none";
        
        if(comandos == 0)
            comandos = 1;
        else
            comandos = 0;

        localStorage.setItem("site_alonsal_comandos", comandos);
    }, 1000);
}

function troca_pag(num_pag){
    
    numero_pagina = num_pag;

    if(idioma == "pt-br")
        paginas = ["Comandos Divertidos 😜 <br>🐮 <mr>.agado <@></mr> | <mr>.aga <@></mr> - Teste a Gadisse de alguém <br>💖 <mr>.alove <@> <@></mr> - Teste o amor entre duas pessoas <br>🙌 <mr>.abaidu</mr> - Louvado seja! <br>📻 <mr>.arep 9?</mr> - O Alonsal falará em TTS <br>📘 <mr>.acurio</mr> | <mr>.ac</mr> - Uma curiosidade aleatória <br>🃏 <mr>.ajoke</mr> | <mr>.aj</mr> - Invoca uma piada<br>✒ <mr>.asans slondo</mr> - EsCrEva aSsIm", "Comandos Utilitários 🧭<br>🏓 <mr>.aping</mr> | <mr>.ap</mr> - Mostra seu ping<br>🔣 <mr>.am 8&7!</mr> | <mr>.am ---.. .-... --...</mr> - Codifica e decodifica do morse<br>👨🏻‍💻 <mr>.abn Alonso</mr> | <mr>.abn 11100011</mr> - Codifica e decodifica do binário<br>◀️ <mr>.arev Alonso</mr> - Inverte e desinverte o texto<br>🔐 <mr>.acr >chave< >seu_texto<</mr> | <mr>.acr >chave< >cripto<</mr> - Texto criptografado<br>🔍 <mr>.awiki Alonso</mr> | <mr>.aw Alonso</mr> - Pesquisa na wikipedia<br>⛅ <mr>.atempo</mr> | <mr>.at sao paulo</mr> - Clima atual de algum local<br>🏛 <mr>.acon</mr> | <mr>.acon 21-01</mr> - Um acontecimento numa data<br>🦗 <mr>.amoji >emoji<</mr> - Aumenta o tamanho do emoji<br>👤 <mr>.avatar</mr> | <mr>.avatar <@></mr> - Ver seu avatar ou de outro usuário <br>👥 <mr>.aicon</mr> - Ver o ícone do servidor <br>🌎 <mr>.amc</mr> | <mr>.amc diamante</mr> - Exibe infos de um item do Minecraft<br>🌐 <mr>.asvinfo</mr> -  Informações do servidor <br> 🎐 <mr>.ausinfo</mr> - Informações de um usuário <br> 📑 <mr>.acinfo</mr> - Informações de um canal", "Comandos de Jogos ⛳<br>✂️ <mr>.ajkp papel</mr> | <mr>.ajkp</mr> - Jokenpô<br>🟡 <mr>.acoin cara</mr> | <mr>.aco coroa</mr> - Teste sua sorte<br>🎲 <mr>.adado</mr> | <mr>.ada 10 16</mr> - Roda um ou vários dados com várias faces<br>🏗️ <mr>.apula</mr> | <mr>.apredios</mr> - Jogo do Pula Prédios!<br>🎮 <mr>.angm >@cargo<</mr> - Anúncios de jogos Gratuitos <br> 🌎 <mr>.amc</mr> | <mr>.amc diamante</mr> - Exibe infos de um item do Minecraft", "Manutenção do Alonsal 🛠️<br>🆔 <mr>.ainfo</mr> - Informações minhas<br>💻 <mr>.asite</mr> - O meu site com diversos comandos <br>✉️ <mr>.amail >sua_mensagem<</mr> - Envie uma mensagem para mim! :P<br>💌 <mr>.acvv</mr> | <mr>.aconvite</mr> - Convide-me para um Servidor!<br>💃 &nbsp;<mr>.ahub</mr> | <mr>.aserver</mr> - Entre no Hub multiconectado do Alonsal<br>🍰 <mr>.asuporte</mr> - Ajude a manter e desenvolver o Alonsal <br> 🇺🇸 <mr>.alang en</mr> | <mr>.alang pt</mr> - Altera o idioma do Alonsal", "Comandos Moderativos 📜<br>🕺 &nbsp; <mr>.addemoji 🕺 dancando</mr> - Adiciona um emoji ao servidor<br>😢 <mr>.armoji 😢</mr> - Remove um emoji do servidor<br>🗑️ <mr>.acl 10</mr> - Remove várias mensagens de uma vez <br> 🔨 <mr>.aban @Slondo</mr> - Bane um usuário do servidor<br> 👎 <mr>.akick @Slondo</mr> - Expulsa um usuário <br> 🔣 <mr>.apx >novoprefixo<</mr> - Altera o prefixo do Alonsal<br>🎮 <mr>.angm >@cargo<</mr> - Anúncios de jogos Gratuitos<br><br>♨️ | <em>Mensagens com este símbolo serão excluídas automaticamente.</em><br>🛑 | <em>Estes comandos não são habilitados para usuários sem cargos administrativos.</em><br>🇺🇸 | <em>Use the command <mr>.alang en</mr> to switch to <mr>american english</mr></em>"];
    else
        paginas = ["Funny Commands 😜 <br>🐮 <mr>.agado <@></mr> | <mr>.aga <@></mr> - Test someone's livestock level <br>💖 <mr>.amor <@> <@></mr> - Test the love between two people <br>🙌 <mr>.abaidu</mr> - Praise be! <br>📻 <mr>.arep 9?</mr> - Alonsal will speak in TTS<br>📘 <mr>.acurio</mr> | <mr>.ac</mr> - A random curiosity <br>🃏 <mr>.ajoke</mr> | <mr>.aj</mr> - Invoke a joke", "Utility Commands 🧭<br>🏓 <mr>.aping</mr> | <mr>.ap</mr> - Show your ping<br>🔣 <mr>.am 8&7!</mr> | <mr>.am ---.. .-... --...</mr> - Encodes and decodes morse<br>👨🏻‍💻 <mr>.abn Alonso</mr> | <mr>.abn 11100011</mr> - Encodes and decodes binary<br>◀️ <mr>.arev Alonso</mr> - Reverse text characters<br>🔐 <mr>.acr >key< >your_text<</mr> | <mr>.acr >key< >crypto<</mr> - Encrypted text<br>🔍 <mr>.awiki Alonso</mr> | <mr>.aw Alonso</mr> - Search on wikipedia<br>⛅ <mr>.aweather</mr> | <mr>.awe los angeles</mr> - Current weather somewhere<br>🏛 <mr>.acon</mr> | <mr>.acon 01-21</mr> - An event on a date<br>🦗 <mr>.amoji >emoji<</mr> - Increase emoji size <br>👤 <mr>.avatar</mr> | <mr>.avatar <@></mr> - View your avatar or another user's <br>👥 <mr>.aicon</mr> - See server icon <br>🌎 <mr>.amc</mr> | <mr>.amc diamond</mr> - Display info for a Minecraft item<br>🌐 <mr>.asvinfo</mr> -  Server information <br> 🎐 <mr>.ausinfo</mr> - User Information <br> 📑 <mr>.acinfo</mr> - Channel information", "Game Commands ⛳<br>✂️ <mr>.ajkp paper</mr> | <mr>.ajkp</mr> - Jokenpo<br>🟡 <mr>.acoin tails</mr> | <mr>.aco heads</mr> - Test your luck<br>🎲 <mr>.adice</mr> | <mr>.adi 10 16</mr> - Roll one or more dice with multiple faces<br>🏗️ <mr>.apula</mr> | <mr>.apredios</mr> - Pula Buildings Game!<br>🎮 <mr>.angm >@cargo<</mr> - Free game notifications<br>🌎 <mr>.amc</mr> | <mr>.amc diamond</mr> - Display info for a Minecraft item", "Alonsal Maintenance 🛠️<br>🆔 <mr>.ainfo</mr> - My informations<br>💻 <mr>.asite</mr> - My website with several commands <br>✉️ <mr>.amail >your_message<</mr> - Send a message to me! :P<br>💌 <mr>.acvv</mr> | <mr>.aconvite</mr> - Invite me to a server!<br>💃 &nbsp;<mr>.ahub</mr> | <mr>.aserver</mr> - Enter Alonsal's Multiconnected Hub<br>🍰 <mr>.asuporte</mr> - Help maintain and develop the Alonsal<br> 🇧🇷 <mr>.alang en</mr> | <mr>.alang pt</mr> - Change Alonsal's language", "Moderative Commands 📜<br>🕺 &nbsp; <mr>.addemoji 🕺 dancing</mr> - Add an emoji to the server<br>😢 <mr>.armoji 😢</mr> - Remove an emoji from the server<br>🗑️ <mr>.acl 10</mr> - Remove multiple messages at once<br> 🔨 <mr>.aban @Slondo</mr> - Ban a user<br> 👎 <mr>.akick @Slondo</mr> - Kicks out a user<br>🔣 <mr>.apx >novoprefixo<</mr> - Change Alonsal prefix<br>🎮 <mr>.angm >@cargo<</mr> - Free game notifications<br><br>♨️ | <em>Messages with this symbol will be automatically deleted.</em><br>🛑 | <em>These commands are not enabled for users without administrative roles.</em><br>🇧🇷 | <em>Use o comando <mr>.alang pt</mr> para trocar para o <mr>português brasileiro</mr></em>"];

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

function alterar_idioma(){

    idioma = localStorage.getItem("idioma_site_alonsal");

    if(idioma == "en-us")
        idioma = "pt-br";
    else if(typeof idioma == "undefined" || idioma == "pt-br" || idioma == "null")
        idioma = "en-us";

    localStorage.setItem("idioma_site_alonsal", idioma);

    traduz_site();
}

function traduz_site(){

    if(typeof idioma == "undefined")
        return;
    else{

        let strings_traduz = ["trad_aoba", "trad_comands_apr", "trad_server", "trad_convide", "trad_convidar", "trad_comands", "trad_descri_inicial", "trad_bandeira", "trad_infos_secundarias", "trad_infos_secundarias2", "trad_diversao", "trad_utilidades", "trad_jogos", "trad_manutencao", "trad_moderativos", "trad_versao"];

        if(idioma == "en-us")
            traducoes = ["Hey, I'm Alonsal!", "Below is my list of commands ;D", "My Server", "Invite Me", "Invite", "Commands", "I was born with the desire to help people in some useful functions, and with your permission, I can contribute to various places on your server!", "🇧🇷", "I'm divided into 5 categories, they:", "I currently have 40 commands!", "Fun", "Utilities", "Games", "Managment", "Moderative commands", "Version"];
        else
            traducoes = ["Aoba, Eu sou o Alonsal!", "Abaixo está minha lista de comandos ;D", "Meu servidor", "Me Convide", "Convidar", "Comandos", "Nasci com a vontade de ajudar pessoas com algumas funções úteis, e com sua permissão, posso contribuir em vários lugares do seu servidor!", "🇺🇸", "Estou dividido em 5 categorias, sendo elas:", "Atualmente tenho 40 comandos!", "Diversão", "Utilidades", "Jogos", "Manutenção", "Comandos moderativos", "Versão"];
        
        for(var i = 0; i < strings_traduz.length; i++){
            alvos = document.getElementsByClassName(strings_traduz[i]);

            for(var x = 0; x < alvos.length; x++){
                alvos[x].innerHTML = traducoes[i];
            }
        }
    }

    troca_pag(numero_pagina);
}