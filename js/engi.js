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
        paginas = ["Comandos Divertidos 😜 <br>😇 <mr>.apaz</mr> | <mr>.apz</mr> - União <br>😋 <mr>.asfiha</mr> | <mr>.asf</mr> - Servidos? <br>😡 <mr>.abriga</mr> | <mr>.ab</mr> - Porradaria! <br>🐮 <mr>.agado <@></mr> | <mr>.aga <@></mr> - Teste a Gadisse de alguém <br>💖 <mr>.alove <@> <@></mr> - Teste o amor entre duas pessoas <br>🙌 <mr>.abaidu</mr> - Louvado seja! <br>♟️ <mr>.apiao</mr> - Roda o pião Dona Maria! <br>📘 <mr>.acurio</mr> | <mr>.ac</mr> - Uma curiosidade aleatória <br>🃏 <mr>.ajoke</mr> | <mr>.aj</mr> - Invoca uma piada <br>🤡 <mr>.acazalbe</mr> | <mr>.acaz</mr> - Cazalbe! <br>🍹 <mr>.ajailson</mr> | <mr>.aja</mr> - Jailson! <br>🍕 <mr>.arasputia</mr> | <mr>.ara</mr> - Rasputia!", "Comandos Utilitários 🧭<br>🏓 <mr>.aping</mr> | <mr>.ap</mr> - Mostra seu ping<br>🔣 <mr>.am 8&7!</mr> | <mr>.am ---.. .-... --...</mr> - Codifica e decodifica do morse<br>👨🏻‍💻 <mr>.abn Alonso</mr> | <mr>.abn 11100011</mr> - Codifica e decodifica do binário<br>◀️ <mr>.arev Alonso</mr> - Inverte e desinverte o texto<br>🔐 <mr>.acr >chave< >seu_texto<</mr> | <mr>.acr >chave< >cripto<</mr> - Texto criptografado<br>🔍 <mr>.awiki Alonso</mr> | <mr>.aw Alonso</mr> - Pesquisa na wikipedia<br>⛅ <mr>.atempo</mr> | <mr>.at sao paulo</mr> - Clima atual de algum local<br>🏛 <mr>.acon</mr> | <mr>.acon 21-01</mr> - Um acontecimento numa data<br>🦗 <mr>.amoji >emoji<</mr> - Aumenta o tamanho do emoji<br>📻 <mr>.arep 9?</mr> - O Alonsal falará em TTS <br>👤 <mr>.avatar</mr> | <mr>.avatar <@></mr> - Ver seu avatar ou de outro usuário <br>👥 <mr>.aicon</mr> - Ver o ícone do servidor <br>🌎 <mr>.amc</mr> | <mr>.amc diamante</mr> - Exibe infos de um item do Minecraft<br>🖼️ <mr>.aih</mr> - Comandos de imagens", "Comandos de Jogos ⛳<br>✂️ <mr>.ajkp papel</mr> | <mr>.ajkp</mr> - Jokenpô<br>🟡 <mr>.acoin cara</mr> | <mr>.aco coroa</mr> - Teste sua sorte<br>🎲 <mr>.adado</mr> | <mr>.ada 10 16</mr> - Roda um ou vários dados com várias faces<br>🏗️ <mr>.apula</mr> | <mr>.apredios</mr> - Jogo do Pula Prédios!<br>🌎 <mr>.amc</mr> | <mr>.amc diamante</mr> - Exibe infos de um item do Minecraft", "<mr>Atenção: Por enquanto só aceito URL's do Youtube</mr><br>-----------------------------<br>📯 <mr>.as url</mr> | <mr>.as</mr> - Entra num canal de voz e toca um url<br>🔍 <mr>.as finca chimia</mr> - Pesquisa por um vídeo no Ytb<br>📃 <mr>.aspl</mr> - Mostra a playlist atual<br>⏸ <mr>.asp</mr> - Pausa a reprodução<br>▶ <mr>.asr</mr> - Resume a reprodução<br>⏩ <mr>.assk</mr> | <mr>.assk 5</mr> - Pula a faixa que está tocando/ou para a n° faixa<br>⏭️ <mr>.assk all</mr> - Pula todas as faixas<br>🔁 <mr>.asrp</mr> - Ativa/desativa o repeteco<br>📢 <mr>.asfd</mr> - Ativa/desativa o anúncio de faixas<br>📻 <mr>.asnp</mr> - Informações da faixa atual<br>🗑 <mr>.asrm 5</mr> | <mr>.asrm all</mr> - Remove uma ou todas as faixas da playlist<br>👋 <mr>.asds</mr> - Desconecta o Alonsal do canal de voz<br>💿 <mr>.asra ms</mr> | <mr>.asra ms 10</mr> - Escolhe uma ou várias músicas aleatórias<br>💿 <mr>.asra me</mr> | <mr>.asra me 10</mr> - Escolhe uma ou várias músicas aleatórias zueiras<br>💿 <mr>.asra jg</mr> | <mr>.asra jg 10</mr> - Escolhe uma ou várias trilhas sonoras de jogos<br>💿 <mr>.asra op</mr> | <mr>.asra op 10</mr> - Escolhe uma ou várias músicas clássicas", "Manutenção do Alonsal 🛠️<br>🆔 <mr>.ainfo</mr> - Informações minhas<br>💻 <mr>.asite</mr> - O meu site com diversos comandos <br>✉️ <mr>.amail >sua_mensagem<</mr> - Envie uma mensagem para mim! :P<br>💌 <mr>.acvv</mr> | <mr>.aconvite</mr> - Convide-me para um Servidor!<br>💃 &nbsp;<mr>.ahub</mr> | <mr>.aserver</mr> - Entre no Hub multiconectado do Alonsal<br>🍰 <mr>.asuporte</mr> - Ajude a manter e desenvolver o Alonsal", "Manipulação de Ibagens 🖼️<br>⬜ <mr>.aimg bw >sua_imagem<</mr> | <mr>.ai bw >sua_imagem<</mr> - Torna uma ou várias imagens preta e branca<br><br>🕺 &nbsp;| Sugira efeitos tops para o Alonsal usando o <mr>.amail >seu_efeito_top<</mr> !<br><br>💁🏼‍♂️ | <em>Você pode abrir este menu com o comando <mr>.aih</mr></em>", "Comandos Moderativos 📜<br>🕺 &nbsp; <mr>.addemoji 🕺 dancando</mr> - Adiciona um emoji ao servidor<br>😢 <mr>.armoji 😢</mr> - Remove um emoji do servidor<br>🗑️ <mr>.acl 10</mr> - Remove várias mensagens de uma vez<br><br>♨️ | <em>Mensagens com este símbolo serão excluídas automaticamente.</em><br>🛑 | <em>Estes comandos não são habilitados para usuários sem cargos administrativos.</em>"];
    else
        paginas = ["Funny Commands 😜 <br>😇 <mr>.apaz</mr> | <mr>.apz</mr> - Union <br>😋 <mr>.asfiha</mr> | <mr>.asf</mr> - Served? <br>😡 <mr>.abriga</mr> | <mr>.ab</mr> - Breaking! <br>🐮 <mr>.agado <@></mr> | <mr>.aga <@></mr> - Test someone's livestock level <br>💖 <mr>.amor <@> <@></mr> - Test the love between two people <br>🙌 <mr>.abaidu</mr> - Praise be! <br>♟️ <mr>.apiao</mr> - Rotate the pawn Ms. Maria! <br>📘 <mr>.acurio</mr> | <mr>.ac</mr> - A random curiosity <br>🃏 <mr>.ajoke</mr> | <mr>.aj</mr> - Invoke a joke <br>🤡 <mr>.acazalbe</mr> | <mr>.acaz</mr> - Cazalbe! <br>🍹 <mr>.ajailson</mr> | <mr>.aja</mr> - Jailson! <br>🍕 <mr>.arasputia</mr> | <mr>.ara</mr> - Rasputia!", "Utility Commands 🧭<br>🏓 <mr>.aping</mr> | <mr>.ap</mr> - Show your ping<br>🔣 <mr>.am 8&7!</mr> | <mr>.am ---.. .-... --...</mr> - Encodes and decodes morse<br>👨🏻‍💻 <mr>.abn Alonso</mr> | <mr>.abn 11100011</mr> - Encodes and decodes binary<br>◀️ <mr>.arev Alonso</mr> - Reverse text characters<br>🔐 <mr>.acr >key< >your_text<</mr> | <mr>.acr >key< >crypto<</mr> - Encrypted text<br>🔍 <mr>.awiki Alonso</mr> | <mr>.aw Alonso</mr> - Search on wikipedia<br>⛅ <mr>.aweather</mr> | <mr>.awe los angeles</mr> - Current weather somewhere<br>🏛 <mr>.acon</mr> | <mr>.acon 01-21</mr> - An event on a date<br>🦗 <mr>.amoji >emoji<</mr> - Increase emoji size<br>📻 <mr>.arep 9?</mr> - Alonsal will speak in TTS <br>👤 <mr>.avatar</mr> | <mr>.avatar <@></mr> - View your avatar or another user's <br>👥 <mr>.aicon</mr> - See server icon <br>🌎 <mr>.amc</mr> | <mr>.amc diamond</mr> - Display info for a Minecraft item<br>🖼️ <mr>.aih</mr> - Image commands", "Game Commands ⛳<br>✂️ <mr>.ajkp paper</mr> | <mr>.ajkp</mr> - Jokenpo<br>🟡 <mr>.acoin tails</mr> | <mr>.aco heads</mr> - Test your luck<br>🎲 <mr>.adice</mr> | <mr>.adi 10 16</mr> - Roll one or more dice with multiple faces<br>🏗️ <mr>.apula</mr> | <mr>.apredios</mr> - Pula Buildings Game!<br>🌎 <mr>.amc</mr> | <mr>.amc diamond</mr> - Display info for a Minecraft item", "<mr>Attention: I currently only accept URL's from Youtube</mr><br>-----------------------------<br>📯 <mr>.as url</mr> | <mr>.as</mr> - Enter a voice channel and play a url<br>🔍 <mr>.as finca chimia</mr> - Search for a video on Youtube<br>📃 <mr>.aspl</mr> - Show current playlist<br>⏸ <mr>.asp</mr> - Pause playback<br>▶ <mr>.asr</mr> - Resume playback<br>⏩ <mr>.assk</mr> | <mr>.assk 5</mr> - Skip the currently playing track / or to the track N°<br>⏭️ <mr>.assk all</mr> - Skip all tracks<br>🔁 <mr>.asrp</mr> - Enable / Disable repeat<br>📢 <mr>.asfd</mr> - Enable / disable music announcement<br>📻 <mr>.asnp</mr> - Current track info<br>🗑 <mr>.asrm 5</mr> | <mr>.asrm all</mr> - Remove one or all tracks from the playlist<br>👋 <mr>.asds</mr> - Disconnect Alonsal from the voice channel<br>💿 <mr>.asra ms</mr> | <mr>.asra ms 10</mr> - Choose one or several random songs<br>💿 <mr>.asra me</mr> | <mr>.asra me 10</mr> - Choose one or several funny random songs<br>💿 <mr>.asra jg</mr> | <mr>.asra jg 10</mr> - Choose one or several game soundtracks<br>💿 <mr>.asra op</mr> | <mr>.asra op 10</mr> - Choose one or several classic songs", "Alonsal Maintenance 🛠️<br>🆔 <mr>.ainfo</mr> - My informations<br>💻 <mr>.asite</mr> - My website with several commands <br>✉️ <mr>.amail >your_message<</mr> - Send a message to me! :P<br>💌 <mr>.acvv</mr> | <mr>.aconvite</mr> - Invite me to a server!<br>💃 &nbsp;<mr>.ahub</mr> | <mr>.aserver</mr> - Enter Alonsal's Multiconnected Hub<br>🍰 <mr>.asuporte</mr> - Help maintain and develop the Alonsal", "Image manipulation 🖼️<br>⬜ <mr>.aimg bw >your_image<</mr> | <mr>.ai bw >your_image<</mr> - Makes one or more images black and white<br><br>🕺 &nbsp;| Suggest top effects to Alonsal using the <mr>.amail >your_top_effect<</mr> !<br><br>💁🏼‍♂️ | <em>You can open this menu with the command <mr>.aih</mr></em>", "Moderative Commands 📜<br>🕺 &nbsp; <mr>.addemoji 🕺 dancing</mr> - Add an emoji to the server<br>😢 <mr>.armoji 😢</mr> - Remove an emoji from the server<br>🗑️ <mr>.acl 10</mr> - Remove multiple messages at once<br><br>♨️ | <em>Messages with this symbol will be automatically deleted.</em><br>🛑 | <em>These commands are not enabled for users without administrative roles.</em>"];

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

        let strings_traduz = ["trad_aoba", "trad_comands_apr", "trad_server", "trad_convide", "trad_convidar", "trad_comands", "trad_descri_inicial", "trad_bandeira", "trad_infos_secundarias", "trad_infos_secundarias2", "trad_diversao", "trad_utilidades", "trad_jogos", "trad_musicas", "trad_manutencao", "trad_manipul_imagens", "trad_moderativos", "trad_versao"];

        if(idioma == "en-us")
            traducoes = ["Hey, I'm Alonsal!", "Below is my list of commands ;D", "My Server", "Invite Me", "Invite", "Commands", "I was born with the desire to help people in some useful functions, and with your permission, I can contribute to various places on your server!", "🇧🇷", "I'm divided into 7 categories, they:", "I currently have 58 commands!", "Fun", "Utilities", "Games", "Music", "Managment", "Image manipulation", "Moderative commands", "Version"];
        else
            traducoes = ["Aoba, Eu sou o Alonsal!", "Abaixo está minha lista de comandos ;D", "Meu servidor", "Me Convide", "Convidar", "Comandos", "Nasci com a vontade de ajudar pessoas com algumas funções úteis, e com sua permissão, posso contribuir em vários lugares do seu servidor!", "🇺🇸", "Estou dividido em 7 categorias, sendo elas:", "Atualmente tenho 58 comandos!", "Diversão", "Utilidades", "Jogos", "Músicas", "Manutenção", "Manipulação de imagens", "Comandos moderativos", "Versão"];
        
        for(var i = 0; i < strings_traduz.length; i++){
            alvos = document.getElementsByClassName(strings_traduz[i]);

            for(var x = 0; x < alvos.length; x++){
                alvos[x].innerHTML = traducoes[i];
            }
        }
    }

    troca_pag(numero_pagina);
}