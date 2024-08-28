const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const placeholderImage = document.getElementById('placeholderImage');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');

function encode(text) {
    return Array.from(text)
        .map(char => {
            if (/[a-z\s]/.test(char)) {
                return char.charCodeAt(0) + 1;
            }
            return '';
        })
        .map(code => String.fromCharCode(code))
        .join('');
}

function decode(text) {
    return Array.from(text)
        .map(char => {
            if (/[a-z\s]/.test(char)) {
                return char.charCodeAt(0) - 1;
            }
            return '';
        })
        .map(code => String.fromCharCode(code))
        .join('');
}

encryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase().replace(/[^a-z\s]/g, '');
    const encryptedText = encode(text);
    displayOutput(encryptedText);
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase().replace(/[^a-z\s]/g, '');
    const decryptedText = decode(text);
    displayOutput(decryptedText);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(outputText.textContent)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error: ', err));
});

function displayOutput(text) {
    if (text) {
        placeholderImage.style.display = 'none';
        outputText.querySelector('.labels').style.display = 'none';
        
        outputText.textContent = text;
        copyBtn.style.display = 'block';
    } else {
        placeholderImage.style.display = 'block';
        outputText.querySelector('.labels').style.display = 'block';
        
        outputText.textContent = '';
        copyBtn.style.display = 'none';
    }
}
