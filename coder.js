// Mapa para armazenar o mapa usado para a conversão original
let originalMap = {};

// Mapas para os modos "basic", "advanced" e "ultimate"
const leetMaps = {
    'basic': {
        'a': '4',
        'e': '3',
        'g': '6',
        'i': '1',
        'o': '0',
        's': '5',
        't': '7'
    },
    'advanced': {
        'a': '4',
        'b': '|3',
        'c': '(',
        'd': '|)',
        'e': '3',
        'f': '|=',
        'g': '9',
        'h': '|-|',
        'i': '!',
        'j': '_|',
        'k': '|<',
        'l': '1',
        'm': '|v|',
        'n': '^/',
        'o': '0',
        'p': '|*',
        'q': 'q,',
        'r': '|2',
        's': '5',
        't': '7',
        'u': '|_|',
        'v': '\\/',
        'w': '\\/\\/',
        'x': '><',
        'y': '`/',
        'z': '2'
    },
    'ultimate': {
        'a': '4',
        'b': '8',
        'c': '<',
        'd': '|)',
        'e': '3',
        'f': '|=',
        'g': '6',
        'h': '|-|',
        'i': '!',
        'j': '_)',
        'k': '|(',
        'l': '1',
        'm': '|\\/|',
        'n': '(/)',
        'o': '0',
        'p': '|>',
        'q': '?',
        'r': '|2',
        's': '5',
        't': '+',
        'u': '|_|',
        'v': '\\/',
        'w': '\\|/',
        'x': '%',
        'y': '`/',
        'z': '7_'
    }
};

// Função para obter o mapa LEET apropriado
function getLeetMap(mode) {
    if (mode === 'custom') {
        // Crie um mapa a partir dos valores dos campos de entrada na seção "Configuração"
        const customMap = {};
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        alphabet.split('').forEach(letter => {
            const value = document.getElementById('custom' + letter.toUpperCase()).value;
            if (value) {
                customMap[letter] = value;
            }
        });
        return customMap;
    } else {
        // Retorne o mapa para o modo selecionado
        return leetMaps[mode];
    }
}


// Função para converter texto normal para LEET
function toLeet(normalText, mode) {
    const leetMap = getLeetMap(mode);
    originalMap = leetMap; // Armazena o mapa usado para a conversão original
    return normalText.toLowerCase().split('').map(char => leetMap[char] || char).join('');
}

// Função para converter LEET para texto normal
function fromLeet(leetText) {
    const normalMap = Object.keys(originalMap).reduce((acc, key) => {
        acc[originalMap[key]] = key;
        return acc;
    }, {});

    let normalText = '';
    while (leetText.length > 0) {
        let found = false;
        for (let key in normalMap) {
            if (leetText.startsWith(key)) {
                normalText += normalMap[key];
                leetText = leetText.slice(key.length);
                found = true;
                break;
            }
        }
        if (!found) {
            normalText += leetText[0];
            leetText = leetText.slice(1);
        }
    }
    return normalText;
}

// Quando o botão "Converter para LEET" é clicado
document.getElementById('toLeetButton').addEventListener('click', function() {
    const normalText = document.getElementById('normalText').value;
    const mode = document.getElementById('mode').value;
    const leetText = toLeet(normalText, mode);
    document.getElementById('leetText').value = leetText;
});

// Quando o botão "Converter para texto normal" é clicado
document.getElementById('fromLeetButton').addEventListener('click', function() {
    const leetText = document.getElementById('leetText').value;
    const normalText = fromLeet(leetText);
    document.getElementById('leetText').value = normalText;
});

var alphabetConfig = document.getElementById('alphabetConfig');
alphabetConfig.innerHTML = '';
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
alphabet.forEach(function(letter) {
    var div = document.createElement('div');
    div.innerHTML = letter.toLowerCase() + ', ' + letter + ' <input type="text" id="custom' + letter + '" maxlength="1">';
    alphabetConfig.appendChild(div);
});
document.getElementById('mode').addEventListener('change', function() {
    var mode = this.value;
    var customConfig = document.getElementById('customConfig');
    if (mode === 'custom') {
        customConfig.style.pointerEvents = 'auto';
        customConfig.style.opacity = '1';
    } else {
        customConfig.style.pointerEvents = 'none';
        customConfig.style.opacity = '0.5';
    }
});