function makeChoice(nextPartId, choice) {
    saveChoice(nextPartId, choice);
    navigateToPart(nextPartId);
    playMusicForPart(nextPartId);
}

function saveChoice(partId, choice) {
    localStorage.setItem(partId, choice);
}

function navigateToPart(partId) {
    document.querySelectorAll('.story-part').forEach(part => part.style.display = 'none');
    document.getElementById(partId).style.display = 'block';
}

function playMusicForPart(partId) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = getMusicForPart(partId);
    audioPlayer.play();
}

function getMusicForPart(partId) {
    const musicTracks = {
        'part1': 'path/to/un piano et son piano.wav',
        'part2': 'path/to/un piano et son piano.wav',
        'part3': 'path/to/un piano et son piano.wav',
        // Add more parts and their corresponding music files
    };
    return musicTracks[partId] || '';
}

function checkProgressOrStart() {
    const parts = ['part1', 'part2', 'part3']; // Add all parts here
    let started = false;
    for (let partId of parts) {
        if (localStorage.getItem(partId)) {
            navigateToPart(partId);
            playMusicForPart(partId);
            started = true;
            break;
        }
    }
    if (!started) navigateToPart('part1');
}

checkProgressOrStart();

// Disable back button functionality
window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};