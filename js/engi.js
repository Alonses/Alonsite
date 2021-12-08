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
        paginas = ["Comandos Divertidos 😜 <br><div class='emj'>🏅</div> <mr>.arank</mr> | <mr>.ar <@></mr> - Veja o rank do servidor ou de um usuário<br><div class='emj'>🐮</div> <mr>.agado <@></mr> | <mr>.aga <@></mr> - Teste a Gadisse de alguém <br><div class='emj'>💖</div> <mr>.alove <@> <@></mr> - Teste o amor entre duas pessoas <br><div class='emj'>🙌</div> <mr>.abaidu</mr> - Louvado seja! <br><div class='emj'>📻</div> <mr>.arep 9?</mr> - O Alonsal falará em TTS <br><div class='emj'>📘</div> <mr>.acurio</mr> | <mr>.ac</mr> - Uma curiosidade aleatória <br><div class='emj'>🃏</div> <mr>.ajoke</mr> | <mr>.aj</mr> - Invoca uma piada<br><div class='emj'>✒</div> <mr>.asans slondo</mr> - EsCrEva aSsIm", "Comandos Utilitários 🧭<br><div class='emj'>🏓</div> <mr>.aping</mr> | <mr>.ap</mr> - Mostra seu ping<br><div class='emj'>🔣</div> <mr>.am 8&7!</mr> | <mr>.am ---.. .-... --...</mr> - Codifica e decodifica do morse<br><div class='emj'>👨🏻‍💻</div> <mr>.abn Alonso</mr> | <mr>.abn 11100011</mr> - Codifica e decodifica do binário<br><div class='emj'>◀️</div> <mr>.arev Alonso</mr> - Inverte e desinverte o texto<br><div class='emj'>🔐</div> <mr>.acr >chave< >seu_texto<</mr> | <mr>.acr >chave< >cripto<</mr> - Texto criptografado<br><div class='emj'>🔍</div> <mr>.awiki Alonso</mr> | <mr>.aw Alonso</mr> - Pesquisa na wikipedia<br><div class='emj'>⛅</div> <mr>.atempo</mr> | <mr>.at sao paulo</mr> - Clima atual de algum local<br><div class='emj'>🏛</div> <mr>.acons</mr> | <mr>.acon 21-01</mr> - Um acontecimento numa data<br><div class='emj'>🦗</div> <mr>.amoji >emoji<</mr> - Aumenta o tamanho do emoji<br><div class='emj'>👤</div> <mr>.avatar</mr> | <mr>.avatar <@></mr> - Ver seu avatar ou de outro usuário <br><div class='emj'>👥</div> <mr>.aicon</mr> - Ver o ícone do servidor <br><div class='emj'>🌎</div> <mr>.amc</mr> | <mr>.amc diamante</mr> - Exibe infos de um item do Minecraft<br><div class='emj'>🌐</div> <mr>.asvinfo</mr> - Informações do servidor <br><div class='emj'>🎐</div> <mr>.ausinfo</mr> - Informações de um usuário <br><div class='emj'>📑</div> <mr>.acinfo</mr> - Informações de um canal", "Comandos de Jogos ⛳<br><div class='emj'>✂️</div> <mr>.ajkp papel</mr> | <mr>.ajkp</mr> - Jokenpô<br><div class='emj'>🟡</div> <mr>.acoin cara</mr> | <mr>.aco coroa</mr> - Teste sua sorte<br><div class='emj'>🎲</div> <mr>.adado</mr> | <mr>.ada 10 16</mr> - Roda um ou vários dados com várias faces<br><div class='emj'>🏗️</div> <mr>.apula</mr> | <mr>.apredios</mr> - Jogo do Pula Prédios!<br><div class='emj'>🎮</div> <mr>.angm >@cargo<</mr> - Anúncios de jogos Gratuitos <br><div class='emj'>🌎</div> <mr>.amc</mr> | <mr>.amc diamante</mr> - Exibe infos de um item do Minecraft", "Manutenção do Alonsal 🛠️<br><div class='emj'>🆔</div> <mr>.ainfo</mr> - Informações minhas<br><div class='emj'>💻</div> <mr>.asite</mr> - O meu site com diversos comandos <br><div class='emj'>✉️</div> <mr>.amail >sua_mensagem<</mr> - Envie uma mensagem para mim! :P<br><div class='emj'>💌</div> <mr>.acvv</mr> | <mr>.aconvite</mr> - Convide-me para um Servidor!<br><div class='emj'>💃</div><mr>.ahub</mr> | <mr>.aserver</mr> - Entre no Hub multiconectado do Alonsal<br><div class='emj'>🍰</div> <mr>.asuporte</mr> - Ajude a manter e desenvolver o Alonsal <br><div class='emj'>🇺🇸</div> <mr>.alang en</mr> | <mr>.alang pt</mr> - Altera o idioma do Alonsal", "Comandos Moderativos 📜<br><div class='emj'>🕺</div> <mr>.addemoji 🕺 dancando</mr> - Adiciona um emoji ao servidor<br><div class='emj'>😢</div> <mr>.armoji 😢</mr> - Remove um emoji do servidor<br><div class='emj'>🗑️</div> <mr>.acl 10</mr> - Remove várias mensagens de uma vez <br><div class='emj'>🔨</div> <mr>.aban @Slondo</mr> - Bane um usuário do servidor<br><div class='emj'>👎</div> <mr>.akick @Slondo</mr> - Expulsa um usuário <br><div class='emj'>🔣</div> <mr>.apx >novoprefixo<</mr> - Altera o prefixo do Alonsal<br><div class='emj'>🎮</div> <mr>.angm >@cargo<</mr> - Anúncios de jogos Gratuitos<br><br>♨️ | <em>Mensagens com este símbolo serão excluídas automaticamente.</em><br>🛑 | <em>Estes comandos não são habilitados para usuários sem cargos administrativos.</em><br>🇺🇸 | <em>Use the command <mr>.alang en</mr> to switch to <mr>american english</mr></em>"];
    else
        paginas = ["Funny Commands 😜 <br><div class='emj'>🏅</div> <mr>.arank</mr> | <mr>.ar <@></mr> - See the rank of the server or a user<br><div class='emj'>🐮</div> <mr>.agado <@></mr> | <mr>.aga <@></mr> - Test someone's livestock level <br><div class='emj'>💖</div> <mr>.amor <@> <@></mr> - Test the love between two people <br><div class='emj'>🙌</div> <mr>.abaidu</mr> - Praise be! <br><div class='emj'>📻</div> <mr>.arep 9?</mr> - Alonsal will speak in TTS<br><div class='emj'>📘</div> <mr>.acurio</mr> | <mr>.ac</mr> - A random curiosity <br><div class='emj'>🃏</div> <mr>.ajoke</mr> | <mr>.aj</mr> - Invoke a joke<br><div class='emj'>✒</div> <mr>.asans slondo</mr> - WrItE LiKe tHiS", "Utility Commands 🧭<br><div class='emj'>🏓</div> <mr>.aping</mr> | <mr>.ap</mr> - Show your ping<br><div class='emj'>🔣</div> <mr>.am 8&7!</mr> | <mr>.am ---.. .-... --...</mr> - Encodes and decodes morse<br><div class='emj'>👨🏻‍💻</div> <mr>.abn Alonso</mr> | <mr>.abn 11100011</mr> - Encodes and decodes binary<br><div class='emj'>◀️</div> <mr>.arev Alonso</mr> - Reverse text characters<br><div class='emj'>🔐</div> <mr>.acr >key< >your_text<</mr> | <mr>.acr >key< >crypto<</mr> - Encrypted text<br><div class='emj'>🔍</div> <mr>.awiki Alonso</mr> | <mr>.aw Alonso</mr> - Search on wikipedia<br><div class='emj'>⛅</div> <mr>.aweather</mr> | <mr>.awe los angeles</mr> - Current weather somewhere<br><div class='emj'>🏛</div> <mr>.acons</mr> | <mr>.acon 01-21</mr> - An event on a date<br><div class='emj'>🦗</div> <mr>.amoji >emoji<</mr> - Increase emoji size <br><div class='emj'>👤</div> <mr>.avatar</mr> | <mr>.avatar <@></mr> - View your avatar or another user's <br><div class='emj'>👥</div> <mr>.aicon</mr> - See server icon <br><div class='emj'>🌎</div> <mr>.amc</mr> | <mr>.amc diamond</mr> - Display info for a Minecraft item<br><div class='emj'>🌐</div> <mr>.asvinfo</mr> - Server information <br><div class='emj'>🎐</div> <mr>.ausinfo</mr> - User Information <br><div class='emj'>📑</div> <mr>.acinfo</mr> - Channel information", "Game Commands ⛳<br><div class='emj'>✂️</div> <mr>.ajkp paper</mr> | <mr>.ajkp</mr> - Jokenpo<br><div class='emj'>🟡</div> <mr>.acoin tails</mr> | <mr>.aco heads</mr> - Test your luck<br><div class='emj'>🎲</div> <mr>.adice</mr> | <mr>.adi 10 16</mr> - Roll one or more dice with multiple faces<br><div class='emj'>🏗️</div> <mr>.apula</mr> | <mr>.apredios</mr> - Pula Buildings Game!<br><div class='emj'>🎮</div> <mr>.angm >@cargo<</mr> - Free game notifications<br><div class='emj'>🌎</div> <mr>.amc</mr> | <mr>.amc diamond</mr> - Display info for a Minecraft item", "Alonsal Maintenance 🛠️<br><div class='emj'>🆔</div> <mr>.ainfo</mr> - My informations<br><div class='emj'>💻</div> <mr>.asite</mr> - My website with several commands <br><div class='emj'>✉️</div> <mr>.amail >your_message<</mr> - Send a message to me! :P<br><div class='emj'>💌</div> <mr>.ainv</mr> | <mr>.ainvite</mr> - Invite me to a server!<br><div class='emj'>💃</div> <mr>.ahub</mr> | <mr>.aserver</mr> - Enter Alonsal's Multiconnected Hub<br><div class='emj'>🍰</div> <mr>.asuporte</mr> - Help maintain and develop the Alonsal<br><div class='emj'>🇧🇷</div> <mr>.alang en</mr> | <mr>.alang pt</mr> - Change Alonsal's language", "Moderative Commands 📜<br><div class='emj'>🕺</div><mr>.addemoji 🕺 dancing</mr> - Add an emoji to the server<br><div class='emj'>😢</div> <mr>.armoji 😢</mr> - Remove an emoji from the server<br><div class='emj'>🗑️</div> <mr>.acl 10</mr> - Remove multiple messages at once<br><div class='emj'>🔨</div> <mr>.aban @Slondo</mr> - Ban a user<br><div class='emj'>👎</div> <mr>.akick @Slondo</mr> - Kicks out a user<br><div class='emj'>🔣</div> <mr>.apx >novoprefixo<</mr> - Change Alonsal prefix<br><div class='emj'>🎮</div> <mr>.angm >@cargo<</mr> - Free game notifications<br><br>♨️ | <em>Messages with this symbol will be automatically deleted.</em><br>🛑 | <em>These commands are not enabled for users without administrative roles.</em><br>🇧🇷 | <em>Use o comando <mr>.alang pt</mr> para trocar para o <mr>português brasileiro</mr></em>"];

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

    if(typeof idioma === "undefined")
        return;
    else{

        let strings_traduz = ["trad_aoba", "trad_comands_apr", "trad_server", "trad_convide", "trad_convidar", "trad_comands", "trad_descri_inicial", "trad_bandeira", "trad_infos_secundarias", "trad_infos_secundarias2", "trad_diversao", "trad_utilidades", "trad_jogos", "trad_manutencao", "trad_moderativos", "trad_versao"];

        if(idioma === "en-us")
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
    infos_comandos(idioma, 0);
}


function infos_comandos(idioma, comando){

    if(typeof idioma === "undefined")
        idioma = "pt";
    
    if(idioma === "en-us") idioma = "en";
    if(idioma === "pt-br") idioma = "pt";

    fetch(`https://raw.githubusercontent.com/brnd-21/site-do-alonsal/main/json/guia_${idioma}.json`)
    .then(response => response.json())
    .then(async dados => {
        
        const comando_alvo = dados.guia[comando];

        document.getElementById("comando_nome").innerHTML = `${comando_alvo.comando} ${comando_alvo.emoji}`;
        document.getElementById("comando_usos").innerHTML = `Uso : <mr>${comando_alvo.aliases.split(",")[0]} ${comando_alvo.usos.split(",")[0]}</mr>`;
        document.getElementById("comando_descricao").innerHTML = `Funcionamento : ${comando_alvo.funcao}`;

        let aliases = comando_alvo.aliases.split(",");
        for(let i = 0; i < aliases.length; i++){
            aliases[i] = `<mr>${aliases[i]}</mr>`;
        }

        document.getElementById("comando_aliases").innerHTML = `Aliases : ${aliases.join(" ")}`;

        let usos = comando_alvo.usos.split(",");
        for(let i = 0; i < usos.length; i++){
            const descricao = usos[i].split("|")[1]; 
            usos[i] = `<mr>${aliases[i].replace("<mr>", "").replace("</mr>", "")} ${usos[i].split("|")[0]}</mr> - ${descricao}`;
        }

        document.getElementById("comando_usos").innerHTML = `Usos :<br> ${usos.join("<br>")}`;
    })
    .catch(err => {
        console.log(err);
    })
}