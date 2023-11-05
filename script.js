const button = document.getElementById("p_wordButton");
const audioElements = [];
let clickCount = 0;

button.addEventListener("click", () => {
    clickCount++; // increment click count
    const newP_wordAudio = new Audio("p-word_elements/oh%20diba%20nakakaputangina.mp3");
    audioElements.push(newP_wordAudio);
    
    newP_wordAudio.addEventListener("ended", () => {
        audioElements.splice(audioElements.indexOf(newP_wordAudio), 1); // stacks audio if clicked fast
    });
    
    newP_wordAudio.play(); // play audio
    
    // display click count
    document.getElementById("clickCount").textContent = `Number of times Juan Karlos P*tangina'd: ${clickCount}`;
});
