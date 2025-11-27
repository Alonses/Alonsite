let ouvinte = false
let tocando = {}

function sync_alonpi(manual) {

    tocando = {}

    fetch("https://alonpi.discloud.app/radio")
        .then(res => res.json())
        .then(async formatado => {

            tocando = formatado
            sincroniza_tempo()

            if (ouvinte || manual) radio(true)

            get("nome_musica").innerHTML = `${tocando.music.name}${tocando.music?.author ? ` - ${tocando.music?.author}` : ""}`
        })
}

function sincroniza_tempo() {

    let barra_progresso = get("barra_progresso_musica")
    const progresso = (tocando.current / tocando.music.duration) * 100
    barra_progresso.style.width = `${progresso}%`

    if (ouvinte) {

        // Jaba alonsal
        if (tocando.music?.type) get("barra_progresso_musica").style.backgroundColor = "rgba(143, 150, 46, 0.5)"
        else get("barra_progresso_musica").style.backgroundColor = "rgba(46, 150, 144, 0.5)"
    } else {

        // Jaba alonsal
        if (tocando.music?.type) get("barra_progresso_musica").style.backgroundColor = "rgba(81, 85, 32, 0.5)"
        else get("barra_progresso_musica").style.backgroundColor = "rgba(34, 78, 76, 0.5)"
    }

    get("tempo_musica").innerHTML = `${formatTime(tocando.current)} / ${formatTime(tocando.music.duration)}`

    if (tocando.current < tocando.music.duration)
        setTimeout(() => { sincroniza_tempo(++tocando.current) }, 1000)
    else
        sync_alonpi()
}

function radio(radio_ativo) {

    const radio = get("player_som")

    // Sincronizando com a API
    if (!tocando.music?.internal)
        sync_alonpi(true)

    if (radio_ativo) return troca_musica()

    if (!ouvinte) {
        troca_musica()
        ouvinte = true
    } else {
        radio.pause()
        ouvinte = false
    }
}

function troca_musica() {

    // Sincroniza a tag de áudio com o que está sendo enviado pela API
    const radio = get("player_som")

    if (tocando.music?.type) radio.src = `./resources/songs/props/${tocando.music.internal}.mp3`
    else radio.src = `./resources/songs/musics/${tocando.music.internal}.mp3`

    radio.volume = get("volumeSlider").value
    radio.currentTime = tocando.current

    radio.play()
}

function sincroniza_volume() {

    // Altera o volume da música de fundo
    const radio = get("player_som")
    radio.volume = get("volumeSlider").value
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60

    // padStart garante 2 dígitos
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0')
}

sync_alonpi()