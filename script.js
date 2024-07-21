const songs = [
    { title: 'Shape of You', artist: 'Ed Sheeran', src: 'song1.mp3', albumArt: 'album-art.jpg' },
    { title: 'Blank Space', artist: 'Taylor Swift', src: 'song2.mp3', albumArt: 'album-art.jpg' },
    { title: '7 Rings', artist: 'Ariana Grande', src: 'song3.mp3', albumArt: 'album-art.jpg' },
    { title: 'God\'s Plan', artist: 'Drake', src: 'song4.mp3', albumArt: 'album-art.jpg' },
    { title: 'Bad Guy', artist: 'Billie Eilish', src: 'song5.mp3', albumArt: 'album-art.jpg' },
    { title: 'Uptown Funk', artist: 'Bruno Mars', src: 'song6.mp3', albumArt: 'album-art.jpg' },
    { title: 'Blinding Lights', artist: 'The Weeknd', src: 'song7.mp3', albumArt: 'album-art.jpg' },
    { title: 'Rolling in the Deep', artist: 'Adele', src: 'song8.mp3', albumArt: 'album-art.jpg' },
    { title: 'Sorry', artist: 'Justin Bieber', src: 'song9.mp3', albumArt: 'album-art.jpg' },
    { title: 'Levitating', artist: 'Dua Lipa', src: 'song10.mp3', albumArt: 'album-art.jpg' },
    { title: 'Someone Like You', artist: 'Adele', src: 'song11.mp3', albumArt: 'album-art.jpg' },
    { title: 'Love Yourself', artist: 'Justin Bieber', src: 'song12.mp3', albumArt: 'album-art.jpg' },
    { title: 'Havana', artist: 'Camila Cabello', src: 'song13.mp3', albumArt: 'album-art.jpg' },
    { title: 'Senorita', artist: 'Shawn Mendes', src: 'song14.mp3', albumArt: 'album-art.jpg' },
    { title: 'Memories', artist: 'Maroon 5', src: 'song15.mp3', albumArt: 'album-art.jpg' },
    { title: 'Hello', artist: 'Adele', src: 'song16.mp3', albumArt: 'album-art.jpg' },
    { title: 'Can\'t Stop the Feeling', artist: 'Justin Timberlake', src: 'song17.mp3', albumArt: 'album-art.jpg' },
    { title: 'Stitches', artist: 'Shawn Mendes', src: 'song18.mp3', albumArt: 'album-art.jpg' },
    { title: 'Faded', artist: 'Alan Walker', src: 'song19.mp3', albumArt: 'album-art.jpg' },
    { title: 'Cheap Thrills', artist: 'Sia', src: 'song20.mp3', albumArt: 'album-art.jpg' }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const albumArt = document.getElementById('album-art');
const libraryList = document.getElementById('library-list');
const searchResults = document.getElementById('search-results');

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    if (sectionId === 'library') {
        displayLibrary();
    }
}

function displayLibrary() {
    libraryList.innerHTML = '';
    songs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        libraryList.appendChild(li);
    });
}

function searchLibrary() {
    const query = document.getElementById('search-input').value.toLowerCase();
    searchResults.innerHTML = '';
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query));
    filteredSongs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        searchResults.appendChild(li);
    });
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    albumArt.src = song.albumArt;
    audioPlayer.play();
}

document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSongIndex);
});
