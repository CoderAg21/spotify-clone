// global variables
let artistNames = ["Arjit Singh", 'Lata Mangeshkar', "Diljit Dosanigh", "Singer", "Armaan Malik", "Pritam", "Shankar Mahadevan", "Diljit Dosanigh", "Singers"];
let albumNames = ["Rockstar", "khairiyat", "jai Shree Ram", "O Mere Dil Ke Chain", "Panchayat Season 3", "Rockstar", "khairiyat", "jai Shree Ram", "O Mere Dil Ke Chain", "Panchayat Season 3"];
let newReleases = ["Shershaah", "ankhiyaan Gulaab", "Dheme Dheme", "Rockstar", "Haan tu hai", "ankhiyaan Gulaab", "Dheme Dheme", "Rockstar", "Haan tu hai", "Shershaah"];
let linrarySongs = ["Shershaah", "Ankhiyaan Gulaab", "Dheme Dheme", "Rockstar", "Haan Tu Hain", "ankhiyaan Gulaab", "Dheme Dheme", "Rockstar", "Haan Tu Hain", "Shershaah"];
let artistImgs = ['https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_500x500.jpg', 'https://c.saavncdn.com/artists/Lata_Mangeshkar_004_20230623105323_500x500.jpg', 'https://c.saavncdn.com/artists/Diljit_Dosanjh_005_20231025073054_500x500.jpg', 'https://c.saavncdn.com/artists/Himesh_Reshammiya_500x500.jpg', 'https://c.saavncdn.com/artists/Armaan_Malik_004_20231026182653_500x500.jpg']
let albumImgs = ['https://c.saavncdn.com/408/Rockstar-Hindi-2011-20221212023139-150x150.jpg', 'https://c.saavncdn.com/937/Chhichhore-Hindi-2019-20190904104023-150x150.jpg', 'https://c.saavncdn.com/256/Shree-Hanuman-Chalisa-Hanuman-Ashtak-Hindi-1992-20230904173628-150x150.jpg', 'https://c.saavncdn.com/086/Mere-Jeevan-Saathi-Hindi-1972-20200901153944-150x150.jpg', 'https://c.saavncdn.com/131/Panchayat-Season-3-Music-from-the-Series-Hindi-2024-20240529154803-150x150.jpg'];
let newReleaseImgs = ['https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-150x150.jpg', 'https://c.saavncdn.com/937/Chhichhore-Hindi-2019-20190904104023-150x150.jpg', 'https://c.saavncdn.com/256/Shree-Hanuman-Chalisa-Hanuman-Ashtak-Hindi-1992-20230904173628-150x150.jpg', 'https://c.saavncdn.com/086/Mere-Jeevan-Saathi-Hindi-1972-20200901153944-150x150.jpg', 'https://c.saavncdn.com/131/Panchayat-Season-3-Music-from-the-Series-Hindi-2024-20240529154803-150x150.jpg'];


let volRange = document.getElementById("volRange");
//importing songs from online 
let musicId = ['https://pagalfree.com/musics/128-Ranjha - Shershaah 128 Kbps.mp3', 'https://pagalfree.com/musics/128-Akhiyaan Gulaab - Teri Baaton Mein Aisa Uljha Jiya 128 Kbps.mp3', 'https://pagalfree.com/musics/128-Dheeme Dheeme - Pati Patni Aur Woh 128 Kbps.mp3', 'https://pagalfree.com/musics/128-Aur Ho - Rockstar 128 Kbps.mp3', 'https://pagalfree.com/musics/128-Haan Tu Hain - Jannat 128 Kbps.mp3', 'https://pagalfree.com/musics/128-Ranjha - Shershaah 128 Kbps.mp3', 'https://pagalfree.com/musics/128-Akhiyaan Gulaab - Teri Baaton Mein Aisa Uljha Jiya 128 Kbps.mp3', 'https://pagalfree.com/musics/128-Dheeme Dheeme - Pati Patni Aur Woh 128 Kbps.mp3', 'https://pagalfree.com/musics/128-Aur Ho - Rockstar 128 Kbps.mp3', 'https://pagalfree.com/musics/128-Haan Tu Hain - Jannat 128 Kbps.mp3'];
let songNameInSeekPlayer = document.querySelector(".songNameInSeekPlayer");
let artists = document.querySelector(".artistName");
let musicC = document.querySelector(".musicCurrentTime") // music current time
let musicD = document.querySelector(".musicDuration") // music duration
let albums = document.querySelector(".albums");
let newRelease = document.querySelector(".newRelease");
let newRelease2 = document.querySelector(".newRelease2");
let library = document.querySelector(".library");
let playPause = document.querySelector(".playPause");
let forwardBtn = document.querySelector(".forward");
let backwardBtn = document.querySelector(".backward");
let musicSeekbar = document.querySelector(".musicTimeRange");
let songDetails = document.querySelector(".songDetails");
let divElement;
let imgElement;
let h4Element;
let paraElement;
let img2Element;
let span2Element;
let music = new Audio("https://pagalfree.com/musics/128-Haan Tu Hain - Jannat 128 Kbps.mp3");
music.volume = .50;
let musicPlays = false;
let i = 5;

//Adding events to sum buttons
playPause.addEventListener("click", songPlayPause);
forwardBtn.addEventListener("click", function () {
    nextSong(i);
});
backwardBtn.addEventListener("click", function () {
    PreviousSong(i);
});
musicSeekbar.addEventListener("input", changeAudioCurrentTime)
//Adding functions to elemensts of web page
function playlists(param, divEle, category, imgs) {
    for (let k = 0; k < param.length; k++) {
        divElement = document.createElement("div");
        imgElement = document.createElement("img");
        imgElement.classList.add(`${category}Boxes`)
        h4Element = document.createElement("h4");
        paraElement = document.createElement("p");
        divElement.classList.add("boxes");
        h4Element.innerHTML = param[k];
        paraElement.innerHTML = category;
        paraElement.style.fontSize = ".7rem"
        imgElement.src = imgs[k];
        divEle.append(divElement);
        divElement.append(imgElement);
        divElement.append(h4Element);
        divElement.append(paraElement);
    }
};

playlists(artistNames, artists, "Artist", artistImgs)
playlists(albumNames, albums, "Album", albumImgs)
playlists(newReleases, newRelease, "Song", newReleaseImgs)
playlists(newReleases, newRelease2, "Song", newReleaseImgs)

// to better understand this function; visit the html page line number 28..
function libraryFunc() {
    for (let i = 0; i < linrarySongs.length; i++) {
        divElement = document.createElement("div");
        imgElement = document.createElement("img");
        spanElement = document.createElement("span");
        span2Element = document.createElement("span");
        divElement.classList.add("songDetails");
        imgElement.setAttribute("class", "musicIcon");
        spanElement.setAttribute("class", "songName");
        divElement.setAttribute("name", `music${i + 1}`);
        library.append(divElement);
        imgElement.src = "musicIcon.png";
        spanElement.innerText = linrarySongs[i];
        img2Element = document.createElement("img");
        divElement.append(imgElement);
        divElement.append(spanElement);
        divElement.setAttribute("id", `music${i + 1}`)
        img2Element.style.height = "10px";
        img2Element.style.width = "10px";
        span2Element.setAttribute("class", "play");
        img2Element.src = "play.png";
        span2Element.innerHTML = "Play now";
        divElement.append(span2Element);
        span2Element.append(img2Element)

    };
};

libraryFunc();


function songPlayPause() {
    if (musicPlays) {
        playPause.src = "play.png";
        musicPlays = false;
        music.pause();
    }
    else {
        playPause.src = "pause.png";
        musicPlays = true
        music.play();
        songNameInSeekPlayer.innerText = linrarySongs[i - 1]
        console.log(music.currentTime, music.duration)
        audioSeek();
        //console.log(i)
    }


}
function nextSong(songNo) {
    document.getElementById(`music${i}`).style.opacity = 1
    i++;
    music.pause();
    music = new Audio(musicId[i - 1]);
    songNameInSeekPlayer.innerText = linrarySongs[i - 1]
    music.play();
    playPause.src = "pause.png"
    musicPlays = true
    document.getElementById(`music${i}`).style.opacity = .5
    audioSeek();

}
function PreviousSong(songNo) {
    document.getElementById(`music${i}`).style.opacity = 1;
    i--;
    music.pause();
    music = new Audio(musicId[i - 1]);
    songNameInSeekPlayer.innerText = linrarySongs[i - 1]
    music.play();
    playPause.src = "pause.png";
    musicPlays = true;
    document.getElementById(`music${i}`).style.opacity = .5;
    audioSeek();


}

function changeAudioCurrentTime() {
    music.currentTime = (musicSeekbar.value * music.duration) / 1000;
    // console.log(musicSeekbar.value);
}
function audioSeek() {
    music.volume = (Number.parseInt(volRange.value) / 100)
    document.getElementById(`music${i}`).style.opacity = .5
    setTimeout(() => {

    }, 100);
    setInterval(() => {

        if (String(music.duration) == 'NaN') {
            musicSeekbar.value = 0;
            musicD.innerText = '00:00';
            musicC.innerText = `${(Math.floor(music.currentTime / 60))}:${Math.floor(music.currentTime % 60)}`;
            console.log("hurra")
        }
        else {
            musicSeekbar.value = (music.currentTime / music.duration) * 1000
            musicC.innerText = `${(Math.floor(music.currentTime / 60))}:${Math.floor(music.currentTime % 60)}`;
            musicD.innerText = `${(Math.floor(music.duration / 60))}:${Math.floor(music.duration % 60)}`;
            // console.log((music.currentTime/music.duration)*100)

            if (music.currentTime == music.duration) {
                // console.log("music Ended")
                document.getElementById(`music${i}`).style.opacity = 1
                i++;
                music = new Audio(`music${i}.mp3`);
                music.play();
                document.getElementById(`music${i}`).style.opacity = .5

            }
            else {
                // console.log("Music is playing");
            }
        }
    }, 100);
    console.log("plau")
}



//creating volume range function
volRange.addEventListener("input", () => {
    music.volume = (Number.parseInt(volRange.value) / 100)
})


// inserting event to library
for (let j = 1; j < 11; j++) {

    document.getElementById(`music${j}`).addEventListener("click", function () {
        songPlay(j)
    })

}
function songPlay(params) {
    document.getElementById(`music${i}`).style.opacity = 1
    console.log(i)
    i = params
    // console.log(i)
    songNameInSeekPlayer.innerText = linrarySongs[i - 1]
    music.pause();
    music = new Audio(musicId[i - 1]);
    music.play();
    audioSeek();
    playPause.src = "pause.png";
    musicPlays = true;

};
