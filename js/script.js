const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = ['Sławomir - Weselny Pyton', 'Daj To Głośniej - Zwariowana Noc', 'Zbigniew Wodecki - Chałupy']

//Song number
let songIndex = 0

//Initially load song into DOM
loadSong(songs[songIndex])
//Functions
function loadSong(song){
    title.innerText = song
    audio.src = 'music/'+song+'.wav'
    cover.src = 'images/'+song+'.jpg'
}
function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}
function pauseSong(){
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}
function prevSong(){
    songIndex--
    if(songIndex<0){
        songIndex=songs.length - 1
    }
    loadSong(songs[songIndex])
    playSong()
}
function nextSong(){
    songIndex++
    if(songIndex>songs.length-1){
        songIndex=0
    }
    loadSong(songs[songIndex])
    playSong()
}
//Event listeners
    playBtn.addEventListener('click',()=>{
    const playBtn = document.querySelector('#play i.fas')    
    const isPlaying = playBtn.classList.contains('fa-pause')

    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})

prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)