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

        localStorage.setItem("site_alonsal_comandos", comandos);
    }, 1000);
}

function troca_pag(num_pag){
    
    numero_pagina = num_pag;

    if(idioma == "pt-br")
        paginas = ["Comandos Divertidos 😜 <br>😇 <span class='comando_line'>.apaz</span> | <span class='comando_line'>.apz</span> - União <br>😋 <span class='comando_line'>.asfiha</span> | <span class='comando_line'>.asf</span> - Servidos? <br>😡 <span class='comando_line'>.abriga</span> | <span class='comando_line'>.ab</span> - Porradaria! <br>🐮 <span class='comando_line'>.agado <@></span> | <span class='comando_line'>.aga <@></span> - Teste a Gadisse de alguém <br>💖 <span class='comando_line'>.amor <@> <@></span> - Teste o amor entre duas pessoas <br>🙌 <span class='comando_line'>.abaidu</span> - Louvado seja! <br>♟️ <span class='comando_line'>.apiao</span> - Roda o pião Dona Maria! <br>📘 <span class='comando_line'>.acurio</span> | <span class='comando_line'>.ac</span> - Uma curiosidade aleatória <br>🃏 <span class='comando_line'>.ajoke</span> | <span class='comando_line'>.aj</span> - Invoca uma piada <br>🤡 <span class='comando_line'>.acazalbe</span> | <span class='comando_line'>.acaz</span> - Cazalbe! <br>🍹 <span class='comando_line'>.ajailson</span> | <span class='comando_line'>.aja</span> - Jailson! <br>🍕 <span class='comando_line'>.arasputia</span> | <span class='comando_line'>.ara</span> - Rasputia!", "Comandos Utilitários 🧭<br>🏓 <span class='comando_line'>.aping</span> | <span class='comando_line'>.ap</span> - Mostra seu ping<br>🔣 <span class='comando_line'>.am 8&7!</span> | <span class='comando_line'>.am ---.. .-... --...</span> - Codifica e decodifica do morse<br>👨🏻‍💻 <span class='comando_line'>.abn Alonso</span> | <span class='comando_line'>.abn 11100011</span> - Codifica e decodifica do binário<br>◀️ <span class='comando_line'>.arev Alonso</span> - Inverte e desinverte o texto<br>🔍 <span class='comando_line'>.awiki Alonso</span> | <span class='comando_line'>.aw Alonso</span> - Pesquisa na wikipedia<br>⛅ <span class='comando_line'>.atempo</span> | <span class='comando_line'>.at sao paulo</span> - Clima atual de algum local<br>🦗 <span class='comando_line'>.amoji >emoji<</span> - Aumenta o tamanho do emoji<br>📻 <span class='comando_line'>.arep 9?</span> - O Alonsal falará em TTS <br>👤 <span class='comando_line'>.avatar</span> | <span class='comando_line'>.avatar <@></span> - Ver seu avatar ou de outro usuário <br>🌎 <span class='comando_line'>.amc</span> | <span class='comando_line'>.amc diamante</span> - Exibe infos de um item do Minecraft<br>🖼️ <span class='comando_line'>.aih</span> - Comandos de imagens", "Comandos de Jogos ⛳<br>✂️ <span class='comando_line'>.ajkp papel</span> | <span class='comando_line'>.ajkp</span> - Jokenpô<br>🟡 <span class='comando_line'>.acoin cara</span> | <span class='comando_line'>.aco coroa</span> - Teste sua sorte<br>🎲 <span class='comando_line'>.adado</span> | <span class='comando_line'>.ada 10 16</span> - Roda um ou vários dados com várias faces<br>🏗️ <span class='comando_line'>.apula</span> | <span class='comando_line'>.apredios</span> - Jogo do Pula Prédios!<br>🌎 <span class='comando_line'>.amc</span> | <span class='comando_line'>.amc diamante</span> - Exibe infos de um item do Minecraft", "Manutenção do Alonsal 🛠️<br>🆔 <span class='comando_line'>.ainfo</span> - Informações minhas<br>✉️ <span class='comando_line'>.amail >sua_mensagem<</span> - Envie uma mensagem para mim! :P<br>💌 <span class='comando_line'>.acvv</span> | <span class='comando_line'>.aconvite</span> - Convide-me para um Servidor!<br>💃 &nbsp;<span class='comando_line'>.ahub</span> | <span class='comando_line'>.aserver</span> - Entre no Hub multiconectado do Alonsal<br>🍰 <span class='comando_line'>.asuporte</span> - Ajude a manter e desenvolver o Alonsal", "Manipulação de Ibagens 🖼️<br>⬜ <span class='comando_line'>.aimg bw >sua_imagem<</span> | <span class='comando_line'>.ai bw >sua_imagem<</span> - Torna uma ou várias imagens preta e branca<br><br>🕺 &nbsp;| Sugira efeitos tops para o Alonsal usando o <span class='comando_line'>.amail >seu_efeito_top<</span> !<br><br>💁🏼‍♂️ | <em>Você pode abrir este menu com o comando <span class='comando_line'>.aih</span></em>", "Comandos Moderativos 📜<br>🕺 &nbsp; <span class='comando_line'>.addemoji 🕺 dancando</span> - Adiciona um emoji ao servidor<br>😢 <span class='comando_line'>.armoji 😢</span>  - Remove um emoji do servidor<br>🗑️ <span class='comando_line'>.acl 10</span> - Remove várias mensagens de uma vez<br><br>♨️ | <em>Mensagens com este símbolo serão excluídas automaticamente.</em><br>🛑 | <em>Estes comandos não são habilitados para usuários sem cargos administrativos.</em>"];
    else
        paginas = ["Funny Commands 😜 <br>😇 <span class='comando_line'>.apaz</span> | <span class='comando_line'>.apz</span> - Union <br>😋 <span class='comando_line'>.asfiha</span> | <span class='comando_line'>.asf</span> - Served? <br>😡 <span class='comando_line'>.abriga</span> | <span class='comando_line'>.ab</span> - Breaking! <br>🐮 <span class='comando_line'>.agado <@></span> | <span class='comando_line'>.aga <@></span> - Test someone's livestock level <br>💖 <span class='comando_line'>.amor <@> <@></span> - Test the love between two people <br>🙌 <span class='comando_line'>.abaidu</span> - Praise be! <br>♟️ <span class='comando_line'>.apiao</span> - Rotate the pawn Ms. Maria! <br>📘 <span class='comando_line'>.acurio</span> | <span class='comando_line'>.ac</span> - A random curiosity <br>🃏 <span class='comando_line'>.ajoke</span> | <span class='comando_line'>.aj</span> - Invoke a joke <br>🤡 <span class='comando_line'>.acazalbe</span> | <span class='comando_line'>.acaz</span> - Cazalbe! <br>🍹 <span class='comando_line'>.ajailson</span> | <span class='comando_line'>.aja</span> - Jailson! <br>🍕 <span class='comando_line'>.arasputia</span> | <span class='comando_line'>.ara</span> - Rasputia!", "Utility Commands 🧭<br>🏓 <span class='comando_line'>.aping</span> | <span class='comando_line'>.ap</span> - Show your ping<br>🔣 <span class='comando_line'>.am 8&7!</span> | <span class='comando_line'>.am ---.. .-... --...</span> - Encodes and decodes morse<br>👨🏻‍💻 <span class='comando_line'>.abn Alonso</span> | <span class='comando_line'>.abn 11100011</span> - Encodes and decodes binary<br>◀️ <span class='comando_line'>.arev Alonso</span> - Reverse text characters<br>🔍 <span class='comando_line'>.awiki Alonso</span> | <span class='comando_line'>.aw Alonso</span> - Search on wikipedia<br>⛅ <span class='comando_line'>.atempo</span> | <span class='comando_line'>.at los angeles</span> - Current weather somewhere<br>🦗 <span class='comando_line'>.amoji >emoji<</span> - Increase emoji size<br>📻 <span class='comando_line'>.arep 9?</span> - Alonsal will speak in TTS <br>👤 <span class='comando_line'>.avatar</span> | <span class='comando_line'>.avatar <@></span> - View your avatar or another user's <br>🌎 <span class='comando_line'>.amc</span> | <span class='comando_line'>.amc diamond</span> - Display info for a Minecraft item<br>🖼️ <span class='comando_line'>.aih</span> - Image commands", "Game Commands ⛳<br>✂️ <span class='comando_line'>.ajkp papel</span> | <span class='comando_line'>.ajkp</span> - Jokenpo<br>🟡 <span class='comando_line'>.acoin cara</span> | <span class='comando_line'>.aco coroa</span> - Test your luck<br>🎲 <span class='comando_line'>.adado</span> | <span class='comando_line'>.ada 10 16</span> - Roll one or more dice with multiple faces<br>🏗️ <span class='comando_line'>.apula</span> | <span class='comando_line'>.apredios</span> - Pula Buildings Game!<br>🌎 <span class='comando_line'>.amc</span> | <span class='comando_line'>.amc diamond</span> - Display info for a Minecraft item", "Alonsal Maintenance 🛠️<br>🆔 <span class='comando_line'>.ainfo</span> - My informations<br>✉️ <span class='comando_line'>.amail >your_message<</span> - Send a message to me! :P<br>💌 <span class='comando_line'>.acvv</span> | <span class='comando_line'>.aconvite</span> - Invite me to a server!<br>💃 &nbsp;<span class='comando_line'>.ahub</span> | <span class='comando_line'>.aserver</span> - Enter Alonsal's Multiconnected Hub<br>🍰 <span class='comando_line'>.asuporte</span> - Help maintain and develop the Alonsal", "Image manipulation 🖼️<br>⬜ <span class='comando_line'>.aimg bw >your_image<</span> | <span class='comando_line'>.ai bw >your_image<</span> - Makes one or more images black and white<br><br>🕺 &nbsp;| Suggest top effects to Alonsal using the <span class='comando_line'>.amail >your_top_effect<</span> !<br><br>💁🏼‍♂️ | <em>You can open this menu with the command <span class='comando_line'>.aih</span></em>", "Moderative Commands 📜<br>🕺 &nbsp; <span class='comando_line'>.addemoji 🕺 dancing</span> - Add an emoji to the server<br>😢 <span class='comando_line'>.armoji 😢</span>  - Remove an emoji from the server<br>🗑️ <span class='comando_line'>.acl 10</span> - Remove multiple messages at once<br><br>♨️ | <em>Messages with this symbol will be automatically deleted.</em><br>🛑 | <em>These commands are not enabled for users without administrative roles.</em>"];

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

        let strings_traduz = ["trad_aoba", "trad_comands_apr", "trad_server", "trad_convide", "trad_convidar", "trad_comands", "trad_descri_inicial", "trad_bandeira"];

        if(idioma == "en-us")
            traducoes = ["Hey, I'm Alonsal!", "Below is my list of commands ;D", "My Server", "Invite Me", "Invite", "Commands", "I was born with the desire to help people in some useful functions, and with your permission, I can contribute to various places on your server!", "🇧🇷"];
        else
            traducoes = ["Aoba, Eu sou o Alonsal!", "Abaixo está minha lista de comandos ;D", "Meu servidor", "Me Convide", "Convidar", "Comandos", "Nasci com a vontade de ajudar pessoas com algumas funções úteis, e com sua permissão, posso contribuir em vários lugares do seu servidor!", "🇺🇸"];
        
        for(var i = 0; i < strings_traduz.length; i++){
            document.getElementById(strings_traduz[i]).innerHTML = traducoes[i];
        }
    }

    troca_pag(numero_pagina);
}