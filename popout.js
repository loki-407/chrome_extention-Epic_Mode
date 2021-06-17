document.querySelector('button.play').addEventListener('click',function(){
    var SelTrack = document.querySelector('select').value;

    var msg ={
        name:"playTrack",
        track:SelTrack
    };

    //console.log(msg);
    chrome.runtime.sendMessage(msg);

});

document.querySelector('button.pause').addEventListener('click',function(){

    var msg ={
        name:"pauseTrack"
    };

    chrome.runtime.sendMessage(msg);

});