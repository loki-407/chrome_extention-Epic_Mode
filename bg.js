chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.name == "playTrack") {
        var trackName = msg.track;
        //console.log(trackName);
        var audioEle = document.querySelector('.audio');
        audioEle['src'] = 'track-' + trackName + '.mp3';
        audioEle.play();
    }

    if (msg.name == "pauseTrack") {
        var audioEle = document.querySelector('.audio');
        audioEle.pause();
    }

});
