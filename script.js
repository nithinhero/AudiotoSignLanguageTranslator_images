const startBtn = document.getElementById('start-btn');
const outputText = document.getElementById('output-text');
const signLanguageOutput = document.getElementById('sign-language-output');

// Map letters to sign language images
const signLanguageMap = {
    A: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/a.jpg',
    B: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/b.jpg',
    C: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/c.jpg',
    D: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/d.jpg',
    E: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/e.jpg',
    F: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/f.jpg',
    G: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/g.jpg',
    H: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/h.jpg',
    I: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/i.jpg',
    J: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/j.jpg',
    K: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/k.jpg',
    L: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/l.jpg',
    M: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/m.jpg',
    N: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/n.jpg',
    O: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/o.jpg',
    P: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/p.jpg',
    Q: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/q.jpg',
    R: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/r.jpg',
    S: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/s.jpg',
    T: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/t.jpg',
    U: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/u.jpg',
    V: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/v.jpg',
    W: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/w.jpg',
    X: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/x.jpg',
    Y: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/y.jpg',
    Z: 'C:/Users/dell/Documents/AudiotoSignLanguageTranslator_images/letters/z.jpg',
    
    
    // Add more letters with their corresponding image paths
};

// Speech recognition setup
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    outputText.textContent = transcript;

    // Translate to sign language
    displaySignLanguage(transcript);
});

recognition.addEventListener('end', () => {
    recognition.start(); // Continue listening
});

startBtn.addEventListener('click', () => {
    recognition.start();
    outputText.textContent = 'Listening...';
});

function displaySignLanguage(text) {
    signLanguageOutput.innerHTML = ''; // Clear previous output
    text.toUpperCase().split('').forEach(char => {
        if (signLanguageMap[char]) {
            const img = document.createElement('div');
            img.classList.add('sign-letter');
            img.style.backgroundImage = `url(${signLanguageMap[char]})`;
            signLanguageOutput.appendChild(img);
        }
    });
}
