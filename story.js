function makeChoice(nextPartId, choice) {
    saveChoice(nextPartId, choice);
    navigateToPart(nextPartId);
    playMusicForPart(nextPartId);
}

function saveChoice(partId, choice) {
    localStorage.setItem(partId, choice);
}

function navigateToPart(partId) {
    let currentPart = document.querySelector('.story-part:not([style*="display: none"]) .content-container');

    if (currentPart) {
        // Apply fade-out animation
        currentPart.style.animationName = 'fadeOut';

        // After the animation completes, switch content and fade in
        setTimeout(() => {
            switchContent(partId);
        }, 3000); // Duration of the fade-out animation
    } else {
        switchContent(partId);
    }
}

function switchContent(partId) {
    // Hide all parts
    document.querySelectorAll('.story-part').forEach(part => part.style.display = 'none');

    // Show the next part
    let nextPart = document.getElementById(partId);
    nextPart.style.display = 'block';

    // Apply fade-in animation to new part
    let newContent = nextPart.querySelector('.content-container');
    newContent.style.animationName = 'fadeIn';
}

function playMusicForPart(partId) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = getMusicForPart(partId);
    audioPlayer.play();
}

function getMusicForPart(partId) {
    const musicTracks = {
        'part1': 'Un sax et son piano.wav',
        'part2': 'Un sax et son piano.wav',
        'part2bis': 'Un sax et son piano.wav',
        'part3': 'Un sax et son piano.wav',
        'part3bis': 'Un sax et son piano.wav',
        'part4': 'Un sax et son piano.wav',
        'part4bis': 'Un sax et son piano.wav',
        // Add more parts and their corresponding music files
    };
    return musicTracks[partId] || '';
}

function checkProgressOrStart() {
    const parts = ['part1', 'part2', 'part2bis', 'part3', 'part3bis', 'part4','part4bis']; // Add all parts here
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

