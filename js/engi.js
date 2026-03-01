let comandos = 0, termos = 0, idioma = "pt-br", numero_pag = 0, json_comandos = {}, num_command = 0

function get(elemento) {

    let div = document.getElementById(elemento)

    // Verificando se há elementos com o ID informado, em caso negativo, procura por elementos com a mesma classe informada
    if (!div) div = document.getElementsByClassName(elemento)

    return div
}

function transita_commands(auto) {

    if (typeof auto != "undefined")
        comandos = 0

    let transitador = get("transitador")
    transitador.style.height = "0px"
    transitador.style.animation = `transita_commands ${comandos ? "reverse" : ""} 1s`

    setTimeout(() => {
        if (comandos == 1) {
            get("comandos").style.display = "none"
            get("infos_iniciais").style.display = "block"
            get("infos_secundarias").style.display = "block"
        } else {
            get("comandos").style.display = "block"
            get("termos").style.display = "none"
            get("infos_iniciais").style.display = "none"
            get("infos_secundarias").style.display = "none"

            termos = 0
        }
    }, 500)

    setTimeout(() => {
        transitador.style.animation = "none"
        comandos = !comandos

        localStorage.setItem("site_alonsal_comandos", comandos)
    }, 1000)
}

function transita_terms(auto) {

    if (typeof auto != "undefined")
        termos = 0

    let transitador = get("transitador")
    transitador.style.height = "0px"
    transitador.style.animation = `transita_terms ${!termos ? "reverse" : ""} 1s`

    setTimeout(() => {
        if (termos == 1) {
            get("termos").style.display = "none"
            get("infos_iniciais").style.display = "block"
            get("infos_secundarias").style.display = "block"
        } else {
            get("termos").style.display = "block"
            get("comandos").style.display = "none"
            get("infos_iniciais").style.display = "none"
            get("infos_secundarias").style.display = "none"

            comandos = 0
        }
    }, 500)

    setTimeout(() => {
        transitador.style.animation = "none"
        termos = !termos

        localStorage.setItem("site_alonsal_termos", termos)
    }, 1000)
}

function troca_pag(comando) {

    let pag_comandos = ""

    Object.keys(json_comandos).forEach(area => {

        if (comando)
            if (area.includes(comando.split(".")[0])) {

                pag_comandos = `<hr><h4>${json_comandos[area].header}</h4>`

                Object.keys(json_comandos[area].commands).forEach(comando => {

                    let descricao = json_comandos[area]["commands"][comando].funcao

                    if (descricao.length > 40)
                        descricao = `${descricao.slice(0, 40)}...`

                    pag_comandos += `<a href='#' onclick=\"infos_comandos(\'${area}.${comando}\')\"><div class='emj'>${json_comandos[area]["commands"][comando].emoji}</div> <mr>${json_comandos[area]["commands"][comando].aliases}</mr></a> - ${descricao}</a><br>`
                })

                if (json_comandos[area].footer) // Conteúdo no rodapé da lista de comandos
                    pag_comandos += `<hr>${json_comandos[area].footer}`
            }
    })

    get("pagina_comandos").innerHTML = pag_comandos
    alvos = get("button_react")

    for (let i = 0; i < alvos.length; i++) {
        alvos[i].style.backgroundColor = "rgb(47, 49, 54)"
        alvos[i].style.border = "1px solid rgba(0, 0, 0, 0)"
    }

    altera_selecionado = get(`select_${comando.split(".")[0]}`)

    altera_selecionado[0].style.backgroundColor = "rgb(59, 64, 90)"
    altera_selecionado[0].style.border = "1px solid rgb(88, 101, 242)"
}

function alterar_idioma() {

    idioma = localStorage.getItem("idioma_site_alonsal")
    if (idioma == "en-us") idioma = "pt-br"
    else if (idioma == "pt-br") idioma = "en-us"

    localStorage.setItem("idioma_site_alonsal", idioma ?? "en-us")

    loadLanguage(idioma)
    traduz_site()
}

function traduz_site() {

    if (!idioma) return
    else {

        if (idioma === "en-us")
            get("conteudo_termos").innerHTML = `<h2>Terms of Service & Privacy</h2>
            <hr>
            <p>Alonsal is a multitasking bot that is constantly evolving, so that all features can work as expected.
                in the best possible way,<br>it is necessary that we save some user data through the various
                servers.

                <br><br><br>
                When using Alonsal, some data about you will be saved by the bot for uses
                future ones may<br>
                provide faster and more customized returns. We will discuss what we saved and what is at your disposal
                control, as well as the way in which<br>
                We process the collected data and its subsequent disposal.
            </p>

            <br>
            <h3>Terms of use</h3>
            <hr>
            <p>
                Everyone is free to use Alonsal at any time on any server where it is located. When using 
                Alonsal for the first time using a slash command ( <mx>/</mx> ),<br> you agree to
                to have
                some data temporarily saved in our database. Data such as,
            <ul>
                <li>Your current avatar (avatar link only)</li>
                <li>Your discord user ID</li>
                <li>Your discord username</li>
                <li>Your preferred bot language (default set to pt-br)</li>
            </ul>

            By default, all users who use Alonsal will have basic data saved in their database, these
            data is not distributed or passed on to third parties at any time,<br> since it is specific and
            used only by the bot during its operation.<br><br>

            You also agree to the possibility of being prevented from using Alonsal without prior notice if
            undue exploitation or abuse of authority by available resources are detected.<br>
            And the possibility of collecting usage statistics in commands, anonymously, as you use the
            bot.
            </p>

            <br>
            <h3>What is collected</h3>
            <hr>
            <p>
                Alonsal collects minimal user data for its database. Most of these data,
                These are personalized configuration resources where the user can interact through the various
                available commands.<br><br>

                In total, with the exception of what was previously described, all data mentioned below is exclusive and
                purely cosmetic or shortcuts for using functions included in the bot. Like <mx>/lastfm</mx>
                per
                example.

            <ul>
                <li>The language that Alonsal will answer you</li>
                <li>Links to external platform profiles</li>
                <li>Customization of the profile created by Alonsal</li>
                <li>Shortcuts and cosmetics, including embed colors</li>
                <li>The servers in which you hold moderate positions</li>
                <li>Alonsal behavior settings. Like commands visible only to you and other customizations</li>
            </ul>
            </p>

            <br>
            <h4>Data collection on servers</h4>
            <hr>
            <p>
                If you are in the position of moderator, on a server, when using Alonsal's resources and commands,
                may result in saving extra data about users who are mentioned.<br>

                Resources such as the <mx>🛑 Warns</mx> system and the <mx>📛 Anti-spam system</mx>,
                using them, especially the first one mentioned, Alonsal will save data about you for having granted
                a warn to a member, and data about the member.<br><br>

                Given these being,
            <ul>
                <li>User ID of moderator and warned member</li>
                <li>Username of moderator and warned member</li>
                <li>The ID of the server where the warn was issued</li>
                <li>The reason for the warn, a justification created by the moderator</li>
            </ul>

            Alonsal will also be able to save different data based on the active resources on the servers.
            For example, excessively sent links that have been identified as spam. <br><br>

            Data like this is used to improve Alonsal's performance and bring more security to all
            members as they are added.
            </p>

            <br>
            <h3>Third party behaviors and unpredictability</h3>
            <hr>
            <p>
                By being part of a server, we refrain from the uses that server moderators may
                exercise
                through Alonsal and its behavior on the server.<br><br>

                By being present on a server where the bot is also present, you may be subject to receiving
                warns
                created by the server moderators,<br>if they use this system through the
                Alonsal.
                <br><br>

                You may also be subject to punishment across different servers if Alonsal
                is configured to perform<br>
                <mx>📡 Networking</mx> on a server for which you received a punishment. This functionality is a feature
                included in
                bot,
                however, its configuration depends on and is done
                entirely by third parties,<br>without any involvement from the bot's creators, and whether its use will be enabled
                in
                a server is decided by the moderators.<br><br>

                You can see which features are enabled on a server using the command <mx>/panel guild</mx>, 
                it is worth mentioning again that these features are configured and activated by the moderators of the
                server where Alonsal is, having no involvement with the bot's creators.<br><br>

                You will also be able to receive notifications through the server when you receive warns in any
                server or receive notifications in DM when it is identified that you may have committed spam.<br>
                Both notifications depend on activation by moderators, and will not occur if there is no
                an activation by third parties.<br><br>

                You may also be subject to being reported to other servers as an individual who caused
                problems on a server. When reported by a moderator, he will register you on the <br>bad list
                Alonsal's behavior, and you will be visible to all other servers if the moderator comes
                announcing this addition for servers that have the <mx>📢 External Reports</mx> feature
                enabled.<br><br>

                When reported, Alonsal will save some of your data such as your Discord user ID, your nickname, the
                server on which it was reported, the justification for the report, and the ID and username of the moderator who
                carried out the
                action.

                <br><br>
                Having an external report on record will make you visible to everyone else's moderators
                servers where Alonsal and you are also present simultaneously.
            </p>

            <br>
            <h3>Privacy and your data</h3>
            <hr>
            <p>
                Alonsal has several features for data management. These in user scope and in
                server scope.<br><br>

                When using it, you can request personalized deletions for specific or total data for the
                your username in our database.<br>
                By default, all users saved in the Alonsal database have an expiration date, this expiration date
                expiration date is internally called "<mx>Downtime</mx>" and it represents when a user
                is inactive. When this date is reached, <br>Alonsal will mark all data related to the server
                or to the user for deletion, allowing time for the user or the server to respond.
                can interrupt the scheduled deletion.<br><br>When using Alonsal, you can set a delay time
                personalized inactivity, and the
                From the moment the bot understands that you are inactive, based on this time, it will mark
                your data for deletion.

                <hr>

            <h4>Downtime</h4>
            Just like the previously mentioned global and server scope, downtime also follows this
            default.<br>
            When defining custom downtimes for both scopes, Alonsal will consider as inactive
            a user who does not appear active until the time, in timestamp, is exceeded.<br><br>

            Downtime is calculated every time you interact with the server, through the ranking of
            experience.<br><br>

            When interacting with the server by sending messages or using Alonsal commands, the bot will recalculate a waiting time.
            inactivity according to the current time added with your configuration to be considered inactive.<br><br>

            On a global scale, you will be able to interact on any server where Alonsal is located, and your
            inactivity will be restarted.<br>
            In server scope, you must interact with all servers where you want to keep your data
            related to the server maintained in our database.<br><br>

            <hr>
            <h4>Data levels</h4>
            The data saved by Alonsal about you has two scopes, global and server.
            Both scopes are represented in several tables through the resources available in the bot, and by itself
            same, all scopes are<br>accessible in an integrated way through <mx>/data</mx>, so that you, as
            user can delete data of all types.<br><br>

            <hr>
            <h5>Your data in global scope</h5>
            <ul>
                <li>Modules created.</li>
                <li>Badges you've earned.</li>
                <li>The Global Experience Ranking.</li>
                <li>Servers where you are a moderator and Alonsal is also a member.</li>
            </ul>

            <hr>
            <h5>Your data in server scope</h5>
            <ul>
                <li>Lists and tasks created.</li>
                <li>The server experience ranking.</li>
                <li>The report ticket created on the server.</li>
            </ul>
            </p>

            <br>
            <h3>DM notifications and automations</h3>
            <hr>
            <p>
                It is possible to receive several notifications in DM through Alonsal from resources directly involved with the bot.<br><br>
                By default, starting on 03/04/2024, all new users registered on Alonsal will have their DM notifications turned off.<br>
                You can activate possible DM notifications when other users use resources and refer you, such as sending Bufunfas and earning badges.<br><br>

                <hr>
                <h4>Priority notifications</h4>
                Some notifications are sent as a priority in DM, not respecting your configuration regarding notifications in DM.<br>
                Notifications of this type are configured by you and will be sent regardless of whether or not you allow them to be sent in DM.<br><br>

                When configuring a custom module through <mx>/module add</mx>, you agree that the automatic sending of notifications in DM is in your interest, and that this sending will only be interrupted if you decide not to receive any more, by deactivating the configured module.<br>
            </p>

            <br>
            <h3>Usage statistics and anonymized data</h3>
            <hr>
            <p>
                For proper functioning and guidance on Alonsal's most important resources, we collect data
                some information anonymously as the bot is used.<br><br>Data such as,

            <ul>
                <li>Commands, buttons and menus used</li>
                <li>Busy bufunfas (alonsal money)</li>
                <li>Server originating from the command</li>
                <li>Entry and exit of servers</li>
            </ul>

            In server scope, some information is less hidden, therefore, we are aware of which
            servers which commands are being used, and which commands are being activated. But we don't have access
            about the information that is sent along with these commands, such as texts, selections and the like.<br><br>

            For the user, much data is treated anonymously, and the vast majority of data is only used
            to generate statistics<br>
            of daily use of Alonsal. Some of this information, such as the number of commands used,
            public access through <mx>/alonsal</mx>.

            <br><br>
            This data can be used and is only available for use by Alonsal in its various functions,
            when necessary. They are not modified or accessed by the creators of Alonsal, and their management and
            Access, in almost its entirety, is completely dependent on the user with whom the same data is used.
            part.<br><br>
            </p>`
        else
            get("conteudo_termos").innerHTML = `<h2>Termos de serviço & Privacidade</h2>
        <hr>
        <p>O Alonsal é um bot multitarefas em constante evolução, para que todos os recursos possam funcionar da
            melhor forma possível, <br>é necessário que salvemos alguns dados dos usuários através dos diversos
            servidores.

            <br><br><br>
            Ao utilizar o Alonsal, alguns dados a respeito de você serão salvos pelo bot para que utilizações
            futuras possam<br>
            conceder retornos mais rápidos e customizados. Iremos abordar sobre o que salvamos e o que está ao seu
            controle, bem como, a forma como<br>
            tratamos os dados coletados e o posterior descarte dos mesmos.
        </p>

        <br>
        <h3>Termos de uso</h3>
        <hr>
        <p>
            Todos são livres para usar o Alonsal a qualquer momento em qualquer servidor onde o mesmo estiver. Ao
            utilizar o Alonsal pela primeira vez através de um comando de barra ( <mx>/</mx> ),<br> você concorda em
            ter
            alguns dados salvos de forma temporária em nossa base de dados. Dados esses como,
        <ul>
            <li>Seu avatar atual (apenas link do avatar)</li>
            <li>Seu ID de usuário discord</li>
            <li>Seu nome de usuário discord</li>
            <li>Seu idioma de preferência no bot (definido por padrão como pt-br)</li>
        </ul>

        Por padrão, todos os usuários que utilizarem o Alonsal, terão dados básicos salvos em seu banco dados, esses
        dados não são distribuidos nem repassados para terceiros em momento algum,<br> uma vez que são específicos e
        utilizados somente pelo bot durante seu funcionamento.<br><br>

        Você também estará de acordo na possibilidade de ser impedido de utilizar o Alonsal sem aviso prévio caso
        uma exploração indevida ou abuso de autoridade por parte dos recursos disponíveis sejam detectados.<br>
        E na possibilidade de ser coletado estatísticas de uso em comandos, de forma anônima, conforme utiliza o
        bot.
        </p>

        <br>
        <h3>O que é coletado</h3>
        <hr>
        <p>
            O Alonsal faz a coleta mínima de dados dos usuários para o seu banco de dados. A maioria desses dados,
            são recursos de configuração personalizada onde o próprio usuário poderá interagir através dos diversos
            comandos disponíveis.<br><br>

            Ao todo, com ressalva ao descrito anteriormente, todos os dados citados abaixo são exclusivos e
            puramente cosméticos ou atalhos para a utilização de funções inclusas no bot. Como o <mx>/lastfm</mx>
            por
            exemplo.

        <ul>
            <li>O Idioma que o Alonsal irá te responder</li>
            <li>Links para perfis de plataformas externas</li>
            <li>Customizações do perfil criado pelo Alonsal</li>
            <li>Atalhos e cosméticos, incluindo cores de embeds</li>
            <li>Os servidores em que você possui cargos moderativos</li>
            <li>Configurações de comportamentos do Alonsal. Como comandos visíveis apenas para você e outras customizações</li>
        </ul>
        </p>

        <br>
        <h4>Coleta de dados em servidores</h4>
        <hr>
        <p>
            Você estando na posição de moderador, em um servidor, ao utilizar os recursos e comandos do Alonsal,
            poderá surtir no salvamento de dados extras sobre usuários que forem mencionados.<br>

            Recursos esses como o sistema de <mx>🛑 Advertências</mx> e o sistema de <mx>📛 Anti-spam</mx>, ao
            utilizar eles, em especial o primeiro citado, o Alonsal irá salvar dados sobre você por ter concedido
            uma advertência a algum membro, e dados sobre o membro.<br><br>

            Dados esses sendo,
        <ul>
            <li>ID de usuário do moderador e do membro advertido</li>
            <li>Nome de usuário do moderador e do membro advertido</li>
            <li>O ID do servidor onde foi feito a advertência</li>
            <li>O Motivo da advertência, uma justificativa criada pelo moderador</li>
        </ul>

        O Alonsal também poderá salvar dados diversos com base nos recursos ativos nos servidores.
        Como por exemplo, links enviados excessivamente que foram identificados como Spam. <br><br>

        Dados como esse são utilizados para melhorar a performance do Alonsal e trazer mais segurança para todos os
        membros a medida que são acrescentados.
        </p>

        <br>
        <h3>Comportamentos de terceiros e imprevisibilidade</h3>
        <hr>
        <p>
            Ao fazer parte de um servidor, nós nos abstemos das utilizações que os moderadores do servidor podem
            exercer
            através do Alonsal e o seu comportamento no servidor.<br><br>

            Ao estar presente em um servidor onde o bot também está, você poderá estar sujeito a receber
            advertências
            criadas pelos moderadores do servidor,<br>se os mesmos vierem a utilizar esse sistema através do
            Alonsal.
            <br><br>

            Você também poderá estar sujeito à aplicação de punições através de diversos servidores caso o Alonsal
            esteja configurado para realizar<br>
            <mx>📡 Networking</mx> em um servidor ao qual você recebeu uma punição. Essa funcionalidade é um recurso
            incluso no
            bot,
            porém, sua configuração depende e é feita
            inteiramente por terceiros,<br>sem envolvimento algum dos criadores do bot, e se seu uso será habilitado
            em
            um servidor é decidido pelos moderadores.<br><br>

            Você poderá ver quais recursos estão habilitados em um servidor através do comando <mx>/panel guild</mx>
            , vale ressaltar novamente, de que, esses recursos são configurados e ativados pelos moderadores do
            servidor onde o Alonsal está, não tendo envolvimento algum com os criadores do bot.<br><br>

            Você também poderá receber notificações através do servidor quando receber advertências em algum
            servidor ou receber notificações em DM quando for identificado que você possa ter cometido um Spam.<br>
            Ambas as notificações dependem da ativação por parte dos moderadores, e não irão ocorrer caso não haja
            uma ativação por parte de terceiros.<br><br>

            Você também poderá estar sujeito a ser reportado para outros servidores como um individuo que causou
            problemas em um servidor. Ao ser reportado por um moderador, ele irá registrar você na lista de mau
            comportamento do Alonsal, e você ficará visível para todos os outros servidores, caso o moderador venha
            a anunciar essa adição para os servidores que estão com o recurso de <mx>📢 Reportes externos</mx>
            habilitado.<br><br>

            Ao ser reportado, o Alonsal irá salvar alguns dados seus como seu ID de usuário Discord, seu nick, o
            servidor em que foi reportado, a justificativa pelo reporte, e o ID e nome de usuário do moderador que
            realizou a
            ação.

            <br><br>
            Possuir um reporte externo em registro te deixará visivel para os moderadores de todos os outros
            servidores onde o Alonsal e você também estiverem em presentes de forma simultânea.
        </p>

        <br>
        <h3>Privacidade e seus dados</h3>
        <hr>
        <p>
            O Alonsal conta com diversos recursos para gerenciamento de dados. Estes em escopo de usuário e em
            escopo de servidor.<br><br>

            Ao utilizar ele você poderá solicitar exclusões personalizadas por dados específicos ou totais para o
            seu usuário em nosso banco de dados.<br>
            Por padrão, todos os usuários salvos no banco de dados do Alonsal possuem data de validade, essa data de
            validade é chamada internamente de "<mx>Tempo de inatividade</mx>" e ela representa quando um usuário
            está inativo. Ao ser alcançada essa data, o Alonsal irá marcar todos os dados relacionados ao servidor
            ou ao usuário para exclusão, concedendo um tempo<br>de manifestação para que o usuário ou o servidor
            possam interromper a exclusão programada.<br><br>Ao utilizar o Alonsal, você poderá definir um tempo de
            inatividade personalizado, e a
            <br>partir do momento que o bot entender que você se encontra inativo, com base nesse tempo, ele marcará
            os seus dados para exclusão.

            <hr>

        <h4>O Tempo de inatividade</h4>
        Assim como o escopo global e de servidor mencionado anteriormente, o tempo de inatividade também segue esse
        padrão.<br>
        Ao definir tempos de inatividade customizados para ambos os escopos, o Alonsal irá considerar como inativo
        um usuário que não se demonstrar ativo até que o tempo, este em timestamp, seja ultrapassado.<br><br>

        O Tempo de inatividade é calculado toda vez que você interagir no servidor, através do ranking de
        experiência.<br><br>

        Ao interagir no servidor enviando mensagens ou usando comandos do Alonsal, o bot irá recalcular um tempo de
        inatividade conforme o tempo atual adicionado com a sua configuração para ser considerado inativo.<br><br>

        Em escopo global, você poderá interagir em qualquer servidor onde o Alonsal estiver, e seu tempo de
        inatividade será reiniciado.<br>
        Em escopo de servidor, você deverá interagir em todos os servidores onde quiser manter os seus dados
        relacionados ao servidor mantidos em nossa base de dados.<br><br>

        <hr>
        <h4>Níveis de dados</h4>
        Os dados salvos pelo Alonsal sobre você possuem dois escopos, sendo o global e o de servidor.
        Ambos os escopos estão representados em várias tabelas através dos recursos disponíveis no bot, e por si
        mesmas, todos os escopos são acessíveis de forma integrada através do <mx>/data</mx>, para que você como
        usuário possa excluir dados de todos os tipos.<br><br>

        <hr>
        <h5>Seus dados em escopo global</h5>
        <ul>
            <li>Módulos criados.</li>
            <li>Badges que você ganhou.</li>
            <li>O Ranking de experiência global.</li>
            <li>Servidores onde você é moderador e o Alonsal também faz parte.</li>
        </ul>

        <hr>
        <h5>Seus dados em escopo de servidor</h5>
        <ul>
            <li>Listas e tarefas criadas.</li>
            <li>O Ranking de experiência no servidor.</li>
            <li>O ticket de denúncia criado no servidor.</li>
        </ul>
        </p>

        <br>
        <h3>Notificações em DM e automatizações</h3>
        <hr>
        <p>
            É possível receber várias notificações em DM através do Alonsal de recursos envolvidos diretamente com o bot.<br><br>
            Por padrão, iniciando em 03/04/2024, todos os novos usuários registrados no Alonsal terão suas notificações em DM desligadas.<br>
            Você poderá ativar possiveis notificações em DM quando outros usuários utilizarem recursos e referenciem você, como no envio de Bufunfas e no ganho de badges.<br><br>

            <hr>
            <h4>Notificações prioritárias</h4>
            Algumas notificações são enviadas de forma prioritária em DM não respeitando a sua configuração sobre notificações em DM.<br>
            Notificações desse tipo são configuradas por você e serão enviadas independentemente de você permitir ou não o envio em DM.<br><br>

            Ao configurar um módulo customizado através do <mx>/module add</mx>, você concorda que o envio automático de notificações em DM é de interesse seu, e que esse envio só será interrompido caso você decida por não receber mais, desativando o módulo configurado.<br>
        </p>

        <br>
        <h3>Estatísticas de uso e dados anonimizados</h3>
        <hr>
        <p>
            Para o bom funcionamento e orientação aos recursos mais importantes do Alonsal, realizamos a coleta de
            algumas informações de forma anônima conforme o bot é utilizado.<br><br>Dados esses como,

        <ul>
            <li>Comandos, botões e menus utilizados</li>
            <li>Bufunfas movimentadas (a moeda interna alonsal)</li>
            <li>Servidor que gerou o comando</li>
            <li>Entrada e saída de servidores</li>
        </ul>

        Em escopo de servidor, algumas informações são menos escondidas, sendo assim, temos conhecimento de quais
        servidores os comandos estão sendo utilizados, e quais comandos estão sendo ativados. Mas não temos acesso
        sobre as informações que são enviadas junto com esses comandos, como textos, seleções de botões ou menus e afins.<br><br>

        Para o escopo do usuário, muitos dados são tratados de forma anônima, e em sua grande maioria, servem apenas
        para gerar estatísticas<br>
        de uso diário do Alonsal. Sendo algumas dessas informações, como a quantidade de comandos utilizados, de
        acesso público através do comando <mx>/alonsal</mx>.

        <br><br>
        Dados esses podem ser utilizados e estão disponíveis apenas para uso do Alonsal em suas diversas funções,
        quando necessários. Os mesmos não são modificados ou acessados pelos criadores do Alonsal, e sua gestão e
        acesso, em quase sua totalidade é dependente totalmente do usuário com qual os mesmos dados fazem
        parte.<br><br>
        </p>`
    }

    json_comandos = []
}

function infos_comandos(comando) {

    num_command = comando
    if (idioma == null) idioma = "pt-br"

    if (!json_comandos["dive"]) { // Salvando os dados num array para usar localmente

        fetch(`https://raw.githubusercontent.com/Alonses/Alonsite/refs/heads/main/resources/json/guia_${idioma.slice(0, 2)}.json`)
            .then(response => response.json())
            .then(async dados => {

                json_comandos = dados
                const comando_alvo = json_comandos[comando.split(".")[0]]["commands"][comando.split(".")[1]]

                get("comando_nome").innerHTML = `${comando_alvo.comando} ${comando_alvo.emoji}`
                get("comando_usos").innerHTML = `${translations["comando.uso"]}: <mr>${comando_alvo.aliases.split(",")[0]} ${comando_alvo.usos.split(",")[0]}</mr>`
                get("comando_descricao").innerHTML = `${translations["comando.funcionamento"]}: ${comando_alvo.funcao}`

                let aliases = comando_alvo.aliases.split(",")
                for (let i = 0; i < aliases.length; i++)
                    aliases[i] = `<mr>${aliases[i]}</mr>`

                get("comando_aliases").innerHTML = `${translations["comando.aliases"]}: ${aliases.join(" ")}`

                let usos = comando_alvo.usos.split(",")

                for (let i = 0; i < usos.length; i++) {

                    const descricao = usos[i].split("|")[1]

                    usos[i] = `<mr>${aliases[0].replace("<mr>", "").replace("</mr>", "")} ${usos[i].split("|")[0]}</mr> - ${descricao}`
                }

                get("comando_usos").innerHTML = `${translations["comando.usos"]}:<br> ${usos.join("<br>")}`
            })
            .catch(() => {
                get("comando_nome").innerHTML = translations["comando.falta_traducao"]
                get("comando_usos").innerHTML = ""
                get("comando_aliases").innerHTML = ""
                get("comando_descricao").innerHTML = ""
            })
    } else { // Coleta os dados do array ao invés de requisitar ao git novamente
        const comando_alvo = json_comandos[comando.split(".")[0]]["commands"][comando.split(".")[1]]

        if (typeof comando_alvo === "undefined") {
            get("comando_nome").innerHTML = translations["comando.falta_traducao"]
            get("comando_usos").innerHTML = ""
            get("comando_aliases").innerHTML = ""
            get("comando_descricao").innerHTML = ""

            return
        }

        get("comando_nome").innerHTML = `${comando_alvo.comando} ${comando_alvo.emoji}`
        get("comando_descricao").innerHTML = `${translations["comando.funcionamento"]}: ${comando_alvo.funcao}`

        let aliases = comando_alvo.aliases.split(",")
        for (let i = 0; i < aliases.length; i++)
            aliases[i] = `<mr>${aliases[i]}</mr>`

        get("comando_aliases").innerHTML = `Aliases: ${aliases.join(" ")}`

        let usos = comando_alvo.usos.split(",")

        for (let i = 0; i < usos.length; i++) {

            const descricao = usos[i].split("|")[1]
            let uso = usos[i].split("|")[0].length > 0 ? ` ${usos[i].split("|")[0]}` : ``

            usos[i] = `<mr>${aliases[0].replace("<mr>", "").replace("</mr>", "")}${uso}</mr> - ${descricao}`
        }

        get("comando_usos").innerHTML = `${translations["comando.usos"]}:<br> ${usos.join("<br>")}`
    }
}