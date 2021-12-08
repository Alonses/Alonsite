var comandos = 0, idioma = "pt-br", numero_pag = 0, json_comandos = [], num_command = 0;

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

    if(idioma == "pt-br" || idioma == null)
        paginas = ["Comandos Divertidos 😜 <br><a href='#' onclick=\"infos_comandos(\'pt\', 0)\"><div class='emj'>🏅</div> <mr>.arank</mr> | <mr>.ar <@></mr></a> - Veja o rank do servidor ou de um usuário</a><br><a href='#' onclick=\"infos_comandos(\'pt\', 1)\"><div class='emj'>🐮</div> <mr>.agado <@></mr> | <mr>.aga <@></mr></a> - Teste a Gadisse de alguém<br><a href='#' onclick=\"infos_comandos(\'pt\', 2)\"><div class='emj'>💖</div> <mr>.alove <@> <@></mr></a> - Teste o amor entre duas pessoas<br><a href='#' onclick=\"infos_comandos(\'pt\', 3)\"><div class='emj'>🙌</div> <mr>.abaidu</mr></a> - Louvado seja! <br><a href='#' onclick=\"infos_comandos(\'pt\', 4)\"><div class='emj'>📻</div> <mr>.arep 9?</mr></a> - O Alonsal falará em TTS <br><a href='#' onclick=\"infos_comandos(\'pt\', 43)\"><div class='emj'>💅</div> <mr>.ana slomdo</mr></a> - Cria alguns anagramas<br><a href='#' onclick=\"infos_comandos(\'pt\', 5)\"><div class='emj'>📘</div> <mr>.acurio</mr> | <mr>.ac</mr></a> - Uma curiosidade aleatória<br><a href='#' onclick=\"infos_comandos(\'pt\', 6)\"><div class='emj'>🃏</div> <mr>.ajoke</mr> | <mr>.aj</mr></a> - Invoca uma piada<br><a href='#' onclick=\"infos_comandos(\'pt\', 7)\"><div class='emj'>✒</div> <mr>.asans slondo</mr></a> - EsCrEva aSsIm", "Comandos Utilitários 🧭<br><a href='#' onclick=\"infos_comandos(\'pt\', 8)\"><div class='emj'>🏓</div> <mr>.aping</mr> | <mr>.ap</mr></a> - Mostra seu ping<br><a href='#' onclick=\"infos_comandos(\'pt\', 9)\"><div class='emj'>🔣</div> <mr>.am 8&7!</mr> | <mr>.am ---.. .-... --...</mr></a> - Codifica e decodifica do morse<br><a href='#' onclick=\"infos_comandos(\'pt\', 10)\"><div class='emj'>👨🏻‍💻</div> <mr>.abn Alonso</mr> | <mr>.abn 11100011</mr></a> - Codifica e decodifica do binário<br><a href='#' onclick=\"infos_comandos(\'pt\', 11)\"><div class='emj'>◀️</div> <mr>.arev Alonso</mr></a> - Inverte e desinverte o texto<br><a href='#' onclick=\"infos_comandos(\'pt\', 12)\"><div class='emj'>🔐</div> <mr>.acr >chave< >seu_texto<</mr> | <mr>.acr >chave< >cripto<</mr></a> - Texto criptografado<br><a href='#' onclick=\"infos_comandos(\'pt\', 44)\"><div class='emj'>🧮</div> <mr>.acalc 2 + 1</mr> | <mr>.acalc 5!</mr></a> - Calculadora alonsal<br><a href='#' onclick=\"infos_comandos(\'pt\', 13)\"><div class='emj'>🔍</div> <mr>.awiki Alonso</mr> | <mr>.aw Alonso</mr></a> - Pesquisa na wikipedia<br><a href='#' onclick=\"infos_comandos(\'pt\', 14)\"><div class='emj'>⛅</div> <mr>.atempo</mr> | <mr>.at sao paulo</mr></a> - Clima atual de algum local<br><a href='#' onclick=\"infos_comandos(\'pt\', 15)\"><div class='emj'>🏛</div> <mr>.acons</mr> | <mr>.acon 21-01</mr></a> - Um acontecimento numa data<br><a href='#' onclick=\"infos_comandos(\'pt\', 16)\"><div class='emj'>🦗</div> <mr>.amoji >emoji<</mr></a> - Aumenta o tamanho do emoji<br><a href='#' onclick=\"infos_comandos(\'pt\', 41)\"><div class='emoj'><img id='emj_steam' src=\"https://th.bing.com/th/id/R.dc9023a21d267f5a69f80d73f6e89dc2?rik=3XtZuRHyuD3yhQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2ffroyoshark%2fenkel%2f512%2fSteam-icon.png&ehk=Q%2bLzz3YeY7Z8gPsTI2r1YF4KgfPnV%2bHMJkEoSx%2bKPy0%3d&risl=&pid=ImgRaw&r=0\"></div> <mr>.asus slondotk</mr></a> - O perfil de alguém na steam<br><a href='#' onclick=\"infos_comandos(\'pt\', 45)\"><div class='emj'>📝</div> <mr>.arm o slomdo</mr> | <mr>.arp o i slomdo</mr></a> - Remove ou substuí os caracteres<br><a href='#' onclick=\"infos_comandos(\'pt\', 17)\"><div class='emj'>👤</div> <mr>.avatar</mr> | <mr>.avatar <@></mr></a> - Ver seu avatar ou de outro usuário<br><a href='#' onclick=\"infos_comandos(\'pt\', 18)\"><div class='emj'>👥</div> <mr>.aicon</mr></a> - Ver o ícone do servidor <br><a href='#' onclick=\"infos_comandos(\'pt\', 19)\"><div class='emj'>🌎</div> <mr>.amc</mr> | <mr>.amc diamante</mr></a> - Exibe infos de um item do Minecraft<br><a href='#' onclick=\"infos_comandos(\'pt\', 20)\"><div class='emj'>🌐</div> <mr>.asvinfo</mr></a> - Informações do servidor<br><a href='#' onclick=\"infos_comandos(\'pt\', 21)\"><div class='emj'>🎐</div> <mr>.ausinfo</mr></a> - Informações de um usuário<br><a href='#' onclick=\"infos_comandos(\'pt\', 22)\"><div class='emj'>📑</div> <mr>.acinfo</mr></a> - Informações de um canal", "Comandos de Jogos ⛳<br><a href='#' onclick=\"infos_comandos(\'pt\', 23)\"><div class='emj'>✂️</div> <mr>.ajkp papel</mr> | <mr>.ajkp</mr></a> - Jokenpô<br><a href='#' onclick=\"infos_comandos(\'pt\', 24)\"><div class='emj'>🟡</div> <mr>.acoin cara</mr> | <mr>.aco coroa</mr></a> - Teste sua sorte<br><a href='#' onclick=\"infos_comandos(\'pt\', 25)\"><div class='emj'>🎲</div> <mr>.adado</mr> | <mr>.ada 10 16</mr></a> - Roda um ou vários dados com várias faces<br><a href='#' onclick=\"infos_comandos(\'pt\', 26)\"><div class='emj'>🏗️</div> <mr>.apula</mr> | <mr>.apredios</mr></a> - Jogo do Pula Prédios!<br><a href='#' onclick=\"infos_comandos(\'pt\', 41)\"><div class='emoj'><img id='emj_steam' src=\"https://th.bing.com/th/id/R.dc9023a21d267f5a69f80d73f6e89dc2?rik=3XtZuRHyuD3yhQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2ffroyoshark%2fenkel%2f512%2fSteam-icon.png&ehk=Q%2bLzz3YeY7Z8gPsTI2r1YF4KgfPnV%2bHMJkEoSx%2bKPy0%3d&risl=&pid=ImgRaw&r=0\"></div> <mr>.asus slondotk</mr></a> - O perfil de alguém na steam<br><a href='#' onclick=\"infos_comandos(\'pt\', 42)\"><div class='emj'>🗳️</div> <mr>.ach s t k </mr> | <mr>.ach [2 s t k</mr></a> - Escolha uma ou várias opções<br><a href='#' onclick=\"infos_comandos(\'pt\', 27)\"><div class='emj'>🎮</div> <mr>.angm >@cargo<</mr></a> - Anúncios de jogos Gratuitos<br><a href='#' onclick=\"infos_comandos(\'pt\', 19)\"><div class='emj'>🌎</div> <mr>.amc</mr> | <mr>.amc diamante</mr></a> - Exibe infos de um item do Minecraft", "Manutenção do Alonsal 🛠️<br><a href='#' onclick=\"infos_comandos(\'pt\', 28)\"><div class='emj'>🆔</div> <mr>.ainfo</mr></a> - Informações minhas<br><a href='#' onclick=\"infos_comandos(\'pt\', 29)\"><div class='emj'>💻</div> <mr>.asite</mr></a> - O meu site com diversos comandos<br><a href='#' onclick=\"infos_comandos(\'pt\', 30)\"><div class='emj'>✉️</div> <mr>.amail >sua_mensagem<</mr></a> - Envie uma mensagem para mim! :P<br><a href='#' onclick=\"infos_comandos(\'pt\', 31)\"><div class='emj'>💌</div> <mr>.acvv</mr> | <mr>.aconvite</mr></a> - Convide-me para um Servidor!<br><a href='#' onclick=\"infos_comandos(\'pt\', 32)\"><div class='emj'>💃</div><mr>.ahub</mr> | <mr>.aserver</mr></a> - Entre no Hub multiconectado do Alonsal<br><a href='#' onclick=\"infos_comandos(\'pt\', 33)\"><div class='emj'>🍰</div> <mr>.asuporte</mr></a> - Ajude a manter e desenvolver o Alonsal <br><a href='#' onclick=\"infos_comandos(\'pt\', 34)\"><div class='emj'>🇺🇸</div> <mr>.alang en</mr> | <mr>.alang pt</mr></a> - Altera o idioma do Alonsal", "Comandos Moderativos 📜<br><a href='#' onclick=\"infos_comandos(\'pt\', 35)\"><div class='emj'>🕺</div> <mr>.addemoji 🕺 dancando</mr></a> - Adiciona um emoji ao servidor<br><a href='#' onclick=\"infos_comandos(\'pt\', 36)\"><div class='emj'>😢</div> <mr>.armoji 😢</mr></a> - Remove um emoji do servidor<br><a href='#' onclick=\"infos_comandos(\'pt\', 37)\"><div class='emj'>🗑️</div> <mr>.acl 10</mr></a> - Remove várias mensagens de uma vez<br><a href='#' onclick=\"infos_comandos(\'pt\', 46)\"><div class='emj'>🔐</div> <mr>.alock</mr> | <mr>.aunlk</mr></a> - Bloqueia e desbloqueia um canal<br><a href='#' onclick=\"infos_comandos(\'pt\', 38)\"><div class='emj'>🔨</div> <mr>.aban @Slondo</mr></a> - Bane um usuário do servidor<br><a href='#' onclick=\"infos_comandos(\'pt\', 39)\"><div class='emj'>👎</div> <mr>.akick @Slondo</mr></a> - Expulsa um usuário<br><a href='#' onclick=\"infos_comandos(\'pt\', 40)\"><div class='emj'>🔣</div> <mr>.apx >novoprefixo<</mr></a> - Altera o prefixo do Alonsal<br><a href='#' onclick=\"infos_comandos(\'pt\', 27)\"><div class='emj'>🎮</div> <mr>.angm >@cargo<</mr></a> - Anúncios de jogos Gratuitos<br><br>♨️ | <em>Mensagens com este símbolo serão excluídas automaticamente.</em><br>🛑 | <em>Estes comandos não são habilitados para usuários sem cargos administrativos.</em><br>🇺🇸 | <em>Use the command <mr>.alang en</mr> to switch to <mr>american english</mr></em>"];
    else
        paginas = ["Funny Commands 😜 <br><a href='#' onclick=\"infos_comandos(\'en\', 0)\"><div class='emj'>🏅</div> <mr>.arank</mr> | <mr>.ar <@></mr></a> - See the rank of the server or a user<br><a href='#' onclick=\"infos_comandos(\'en\', 1)\"><div class='emj'>🐮</div> <mr>.agado <@></mr> | <mr>.aga <@></mr></a> - Test someone's livestock level <br><a href='#' onclick=\"infos_comandos(\'en\', 2)\"><div class='emj'>💖</div> <mr>.amor <@> <@></mr></a> - Test the love between two people <br><a href='#' onclick=\"infos_comandos(\'en\', 3)\"><div class='emj'>🙌</div> <mr>.abaidu</mr></a> - Praise be! <br><a href='#' onclick=\"infos_comandos(\'en\', 4)\"><div class='emj'>📻</div> <mr>.arep 9?</mr></a> - Alonsal will speak in TTS<br><a href='#' onclick=\"infos_comandos(\'en\', 43)\"><div class='emj'>💅</div> <mr>.ana slomdo</mr></a> - Generate some anagrams<br><a href='#' onclick=\"infos_comandos(\'en\', 5)\"><div class='emj'>📘</div> <mr>.acurio</mr> | <mr>.ac</mr></a> - A random curiosity <br><a href='#' onclick=\"infos_comandos(\'en\', 6)\"><div class='emj'>🃏</div> <mr>.ajoke</mr> | <mr>.aj</mr></a> - Invoke a joke<br><a href='#' onclick=\"infos_comandos(\'en\', 7)\"><div class='emj'>✒</div> <mr>.asans slondo</mr></a> - WrItE LiKe tHiS", "Utility Commands 🧭<br><a href='#' onclick=\"infos_comandos(\'en\', 8)\"><div class='emj'>🏓</div> <mr>.aping</mr> | <mr>.ap</mr></a> - Show your ping<br><a href='#' onclick=\"infos_comandos(\'en\', 9)\"><div class='emj'>🔣</div> <mr>.am 8&7!</mr> | <mr>.am ---.. .-... --...</mr></a> - Encodes and decodes morse<br><a href='#' onclick=\"infos_comandos(\'en\', 10)\"><div class='emj'>👨🏻‍💻</div> <mr>.abn Alonso</mr> | <mr>.abn 11100011</mr></a> - Encodes and decodes binary<br><a href='#' onclick=\"infos_comandos(\'en\', 11)\"><div class='emj'>◀️</div> <mr>.arev Alonso</mr></a> - Reverse text characters<br><a href='#' onclick=\"infos_comandos(\'en\', 12)\"><div class='emj'>🔐</div> <mr>.acr >key< >your_text<</mr> | <mr>.acr >key< >crypto<</mr></a> - Encrypted text<br><a href='#' onclick=\"infos_comandos(\'pt\', 44)\"><div class='emj'>🧮</div> <mr>.acalc 2 + 1</mr> | <mr>.acalc 5!</mr></a> - Alonsal calculator<br><a href='#' onclick=\"infos_comandos(\'en\', 13)\"><div class='emj'>🔍</div> <mr>.awiki Alonso</mr> | <mr>.aw Alonso</mr></a> - Search on wikipedia<br><a href='#' onclick=\"infos_comandos(\'en\', 14)\"><div class='emj'>⛅</div> <mr>.aweather</mr> | <mr>.awe los angeles</mr></a> - Current weather somewhere<br><a href='#' onclick=\"infos_comandos(\'en\', 15)\"><div class='emj'>🏛</div> <mr>.acons</mr> | <mr>.acon 01-21</mr></a> - An event on a date<br><a href='#' onclick=\"infos_comandos(\'en\', 16)\"><div class='emj'>🦗</div> <mr>.amoji >emoji<</mr></a> - Increase emoji size<br><a href='#' onclick=\"infos_comandos(\'en\', 41)\"><div class='emoj'><img id='emj_steam' src=\"https://th.bing.com/th/id/R.dc9023a21d267f5a69f80d73f6e89dc2?rik=3XtZuRHyuD3yhQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2ffroyoshark%2fenkel%2f512%2fSteam-icon.png&ehk=Q%2bLzz3YeY7Z8gPsTI2r1YF4KgfPnV%2bHMJkEoSx%2bKPy0%3d&risl=&pid=ImgRaw&r=0\"></div> <mr>.asus slondotk</mr></a> - Someone's steam profile<br><a href='#' onclick=\"infos_comandos(\'en\', 45)\"><div class='emj'>📝</div> <mr>.arm o slomdo</mr> | <mr>.arp o i slomdo</mr></a> - Remove or replace characters<br><a href='#' onclick=\"infos_comandos(\'en\', 17)\"><div class='emj'>👤</div> <mr>.avatar</mr> | <mr>.avatar <@></mr></a> - View your avatar or another user's<br><a href='#' onclick=\"infos_comandos(\'en\', 18)\"><div class='emj'>👥</div> <mr>.aicon</mr></a> - See server icon<br><a href='#' onclick=\"infos_comandos(\'en\', 19)\"><div class='emj'>🌎</div> <mr>.amc</mr> | <mr>.amc diamond</mr></a> - Display info for a Minecraft item<br><a href='#' onclick=\"infos_comandos(\'en\', 20)\"><div class='emj'>🌐</div> <mr>.asvinfo</mr></a> - Server information<br><a href='#' onclick=\"infos_comandos(\'en\', 21)\"><div class='emj'>🎐</div> <mr>.ausinfo</mr></a> - User Information<br><a href='#' onclick=\"infos_comandos(\'en\', 22)\"><div class='emj'>📑</div> <mr>.acinfo</mr></a> - Channel information", "Game Commands ⛳<br><a href='#' onclick=\"infos_comandos(\'en\', 23)\"><div class='emj'>✂️</div> <mr>.ajkp paper</mr> | <mr>.ajkp</mr></a> - Jokenpo<br><a href='#' onclick=\"infos_comandos(\'en\', 24)\"><div class='emj'>🟡</div> <mr>.acoin tails</mr> | <mr>.aco heads</mr></a> - Test your luck<br><a href='#' onclick=\"infos_comandos(\'en\', 25)\"><div class='emj'>🎲</div> <mr>.adice</mr> | <mr>.adi 10 16</mr></a> - Roll one or more dice with multiple faces<br><a href='#' onclick=\"infos_comandos(\'en\', 26)\"><div class='emj'>🏗️</div> <mr>.apula</mr> | <mr>.apredios</mr></a> - Pula Buildings Game!<br><a href='#' onclick=\"infos_comandos(\'en\', 41)\"><div class='emoj'><img id='emj_steam' src=\"https://th.bing.com/th/id/R.dc9023a21d267f5a69f80d73f6e89dc2?rik=3XtZuRHyuD3yhQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2ffroyoshark%2fenkel%2f512%2fSteam-icon.png&ehk=Q%2bLzz3YeY7Z8gPsTI2r1YF4KgfPnV%2bHMJkEoSx%2bKPy0%3d&risl=&pid=ImgRaw&r=0\"></div> <mr>.asus slondotk</mr></a> - Someone's steam profile<br><a href='#' onclick=\"infos_comandos(\'pt\', 42)\"><div class='emj'>🗳️</div> <mr>.ach s t k </mr> | <mr>.ach [2 s t k</mr></a> - Choose one or several options<br><a href='#' onclick=\"infos_comandos(\'en\', 27)\"><div class='emj'>🎮</div> <mr>.angm >@cargo<</mr></a> - Free game notifications<br><a href='#' onclick=\"infos_comandos(\'en\', 19)\"><div class='emj'>🌎</div> <mr>.amc</mr> | <mr>.amc diamond</mr></a> - Display info for a Minecraft item", "Alonsal Maintenance 🛠️<br><a href='#' onclick=\"infos_comandos(\'en\', 28)\"><div class='emj'>🆔</div> <mr>.ainfo</mr></a> - My informations<br><a href='#' onclick=\"infos_comandos(\'en\', 29)\"><div class='emj'>💻</div> <mr>.asite</mr></a> - My website with several commands <br><a href='#' onclick=\"infos_comandos(\'en\', 30)\"><div class='emj'>✉️</div> <mr>.amail >your_message<</mr></a> - Send a message to me! :P<br><a href='#' onclick=\"infos_comandos(\'en\', 31)\"><div class='emj'>💌</div> <mr>.ainv</mr> | <mr>.ainvite</mr></a> - Invite me to a server!<br><a href='#' onclick=\"infos_comandos(\'en\', 32)\"><div class='emj'>💃</div> <mr>.ahub</mr> | <mr>.aserver</mr></a> - Enter Alonsal's Multiconnected Hub<br><a href='#' onclick=\"infos_comandos(\'en\', 33)\"><div class='emj'>🍰</div> <mr>.asuporte</mr></a> - Help maintain and develop the Alonsal<br><a href='#' onclick=\"infos_comandos(\'en\', 34)\"><div class='emj'>🇧🇷</div> <mr>.alang en</mr> | <mr>.alang pt</mr></a> - Change Alonsal's language", "Moderative Commands 📜<br><a href='#' onclick=\"infos_comandos(\'en\', 35)\"><div class='emj'>🕺</div><mr>.addemoji 🕺 dancing</mr></a> - Add an emoji to the server<br><a href='#' onclick=\"infos_comandos(\'en\', 36)\"><div class='emj'>😢</div> <mr>.armoji 😢</mr></a> - Remove an emoji from the server<br><a href='#' onclick=\"infos_comandos(\'en\', 37)\"><div class='emj'>🗑️</div> <mr>.acl 10</mr></a> - Remove multiple messages at once<br><a href='#' onclick=\"infos_comandos(\'en\', 46)\"><div class='emj'>🔐</div> <mr>.alock</mr> | <mr>.aunlk</mr></a> - Lock and unlock a channel<br><a href='#' onclick=\"infos_comandos(\'en\', 38)\"><div class='emj'>🔨</div> <mr>.aban @Slondo</mr></a> - Ban a user<br><a href='#' onclick=\"infos_comandos(\'en\', 39)\"><div class='emj'>👎</div> <mr>.akick @Slondo</mr></a> - Kicks out a user<br><a href='#' onclick=\"infos_comandos(\'en\', 40)\"><div class='emj'>🔣</div> <mr>.apx >novoprefixo<</mr></a> - Change Alonsal prefix<br><a href='#' onclick=\"infos_comandos(\'en\', 27)\"><div class='emj'>🎮</div> <mr>.angm >@cargo<</mr></a> - Free game notifications<br><br>♨️ | <em>Messages with this symbol will be automatically deleted.</em><br>🛑 | <em>These commands are not enabled for users without administrative roles.</em><br>🇧🇷 | <em>Use o comando <mr>.alang pt</mr> para trocar para o <mr>português brasileiro</mr></em>"];

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

    json_comandos = [];

    troca_pag(numero_pagina);
    infos_comandos(idioma, num_command);
}


function infos_comandos(idioma, comando){

    num_command = comando;
    console.log(idioma);

    if(idioma == null)
        idioma = "pt";
    
    if(idioma === "en-us") idioma = "en";
    if(idioma === "pt-br") idioma = "pt";

    if(json_comandos.length < 1){ // Salvando os dados num array para usar localmente
        fetch(`https://raw.githubusercontent.com/brnd-21/site-do-alonsal/main/json/guia_${idioma}.json`)
        .then(response => response.json())
        .then(async dados => {
            
            const comando_alvo = dados.guia[comando];
            json_comandos = dados.guia;

            document.getElementById("comando_nome").innerHTML = `${comando_alvo.comando} ${comando_alvo.emoji}`;
            document.getElementById("comando_usos").innerHTML = `Uso : <mr>${comando_alvo.aliases.split(",")[0]} ${comando_alvo.usos.split(",")[0]}</mr>`;
            document.getElementById("comando_descricao").innerHTML = `Funcionamento : ${comando_alvo.funcao}`;

            if(idioma === "en")
                document.getElementById("comando_descricao").innerHTML = `Action : ${comando_alvo.funcao}`;

            let aliases = comando_alvo.aliases.split(",");
            for(let i = 0; i < aliases.length; i++){
                aliases[i] = `<mr>${aliases[i]}</mr>`;
            }

            document.getElementById("comando_aliases").innerHTML = `Aliases : ${aliases.join(" ")}`;

            let usos = comando_alvo.usos.split(",");

            for(let i = 0; i < usos.length; i++){

                const descricao = usos[i].split("|")[1];

                usos[i] = `<mr>${aliases[0].replace("<mr>", "").replace("</mr>", "")} ${usos[i].split("|")[0]}</mr> - ${descricao}`;
            }

            document.getElementById("comando_usos").innerHTML = `Usos :<br> ${usos.join("<br>")}`;

            if(idioma === "en")
                document.getElementById("comando_usos").innerHTML = `Uses :<br> ${usos.join("<br>")}`;
        })
        .catch(() => {
            document.getElementById("comando_nome").innerHTML = "Não foi possível carregar informações deste comando no momento 😿";
            document.getElementById("comando_usos").innerHTML = "";
            document.getElementById("comando_aliases").innerHTML = "";
            document.getElementById("comando_descricao").innerHTML = "";

            if(idioma === "en")
                document.getElementById("comando_nome").innerHTML = "Could not load information for this command at this time 😿";
        })
    }else{ // Coleta os dados do array ao invés de requisitar ao git novamente
        const comando_alvo = json_comandos[comando];

        console.log(comando_alvo);

        if(typeof comando_alvo === "undefined"){
            document.getElementById("comando_nome").innerHTML = "Não foi possível carregar informações deste comando no momento 😿";
            document.getElementById("comando_usos").innerHTML = "";
            document.getElementById("comando_aliases").innerHTML = "";
            document.getElementById("comando_descricao").innerHTML = "";

            if(idioma === "en")
                document.getElementById("comando_nome").innerHTML = "Could not load information for this command at this time 😿";

            return;
        }

        document.getElementById("comando_nome").innerHTML = `${comando_alvo.comando} ${comando_alvo.emoji}`;
        document.getElementById("comando_descricao").innerHTML = `Funcionamento : ${comando_alvo.funcao}`;

        if(idioma === "en")
            document.getElementById("comando_descricao").innerHTML = `Action : ${comando_alvo.funcao}`;

        let aliases = comando_alvo.aliases.split(",");
        for(let i = 0; i < aliases.length; i++){
            aliases[i] = `<mr>${aliases[i]}</mr>`;
        }

        document.getElementById("comando_aliases").innerHTML = `Aliases : ${aliases.join(" ")}`;

        let usos = comando_alvo.usos.split(",");

        for(let i = 0; i < usos.length; i++){

            const descricao = usos[i].split("|")[1];
            let uso = usos[i].split("|")[0].length > 0 ? ` ${usos[i].split("|")[0]}`: ``;

            usos[i] = `<mr>${aliases[0].replace("<mr>", "").replace("</mr>", "")}${uso}</mr> - ${descricao}`;
        }

        document.getElementById("comando_usos").innerHTML = `Usos :<br> ${usos.join("<br>")}`;

        if(idioma === "en")
            document.getElementById("comando_usos").innerHTML = `Uses :<br> ${usos.join("<br>")}`;
    }
}