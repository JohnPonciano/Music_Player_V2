let currentMusic = 0

const music = document.querySelector("#audio")

const seekBar = document.querySelector('.seek-bar')
const songName = document.querySelector('.music-name')
const artistName = document.querySelector('.artist-name')
const disk = document.querySelector('.disk')
const currentTime = document.querySelector('.current-time')
const musicDuration = document.querySelector('.song-duration')
const playBtn = document.querySelector('.play-btn')
const fowardBtn = document.querySelector('.foward-btn')
const backwardBtn = document.querySelector('.backward-btn')


playBtn.addEventListener('click', ()=>{
    if(playBtn.className.includes("pause")){
        music.play()
    }else{
        music.pause()
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})


//setup music

//if you have other API server, you edit need edit music.src and dik.style.backdroundImage
const setMusic = (i) =>{
    seekBar.value = 0;
    let misc = songs[i];
    let song = misc[0]
    currentMusic = i;
    music.src = `http://localhost:1337${song.path}`;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url(http://localhost:1337${song.cover})`;

    currentTime.innerHTML = '00:00'
    setTimeout(()=>{
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    },300)
}

setMusic(0);

const formatTime = (time) =>{
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`
    }
    let sec = Math.floor(time % 60)
    if(sec < 10){
        sec = `0${sec}`
    }
    return `${min}:${sec}`
}

setInterval(()=>{
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime)
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        fowardBtn.click()
    }
},500)


seekBar.addEventListener("change", ()=>{
    music.currentTime = seekBar.value;
})

const playMusic = () =>{
    music.play()
    playBtn.classList.remove('pause');
    disk.classList.add('play')
}
//foward and backward button

fowardBtn.addEventListener('click', ()=>{
    if(currentMusic >= songs.length -1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic()
})


backwardBtn.addEventListener('click', ()=>{
    if(currentMusic <= 0){
        currentMusic = songs.length - 1 ;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic()
})