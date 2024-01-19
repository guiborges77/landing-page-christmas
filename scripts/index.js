let count = 0
const countElement = document.getElementById('cart-count')

const audioMerryChristmas = new Audio('./assets/audio/merry-christmas.mp3')
const audioConfetti = new Audio('./assets/audio/confetti.wav')

audioMerryChristmas.volume = 0.2;
audioConfetti.volume = 0.1;

function addItem() {
    if(count == 0){
        countElement.style.display = 'block';
    }
    count++
    countElement.innerText = count

    audioConfetti.play()
    audioMerryChristmas.play()

    handleConfettiEffect()
}