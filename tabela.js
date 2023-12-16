window.onload = function() {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');

    for (var letter in leetAlphabet) {
        var row = document.createElement('tr');
        var cellLetter = document.createElement('td');
        var cellValues = document.createElement('td');

        cellLetter.textContent = letter;
        cellValues.textContent = leetAlphabet[letter].join(', ');

        row.appendChild(cellLetter);
        row.appendChild(cellValues);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);

    // Adicione a tabela ao elemento 'main'
    document.querySelector('main').appendChild(table);
}
var leetAlphabet = {
    'A': ['4', '/\\', '@', '/-\\', '^', 'ä', 'ª', 'aye'],
    'B': ['8', '6', '|3', 'ß', 'P>', '|:'],
    'C': ['[', '¢', '<', '('],
    'D': ['|))', 'o|', '[)', 'I>', '|>', '?'],
    'E': ['3', '&', '£', 'ë', '[-', '€', 'ê', '|=-'],
    'F': ['|=', 'ph', '|#'],
    'G': ['6', '&', '(_+', '9', 'C-', 'gee (,'],
    'H': ['[#', '/-/', '[-]', '{=}', '<~>', '|-|', ']~[', '}{', ']-[', '?', '8', '}-{'],
    'I': ['1', '!', '|', '&', 'eye', '3y3', 'ï', '][', '[]'],
    'J': ['j', ';', '_/,'],
    'K': ['X', '|<', '|{', ']{', '}<', '|('],
    'L': ['1', '7', '1_', '|', '|_', '#', '¬', '£'],
    'M': ['//.', '^^', '|v|', '[V]', '{V}', '|\\/|', '/\\/\\', '(u)', '[]V[]', '(V)', '/|\\', 'IVI'],
    'N': ['N //', '^/', '|\\|', '/\\/', '[\\]', ', <\\>', '{\\}', '[]\\[]', 'n', '/V', '₪'],
    'O': ['0', '()', '?p', ',', '*', 'ö'],
    'P': ['|^', '|*', '|o', '|^(o)', '|>', '|"', '9', '[]D', '|̊', '|7'],
    'Q': ['q', '9', '(_,) o,'],
    'R': ['|2', 'P\\', '|?', '|^', 'lz', '[z', '12', 'Я'],
    'S': ['5', '$', 'z', '§', 'ehs'],
    'T': ['7', '+', '-|-', '1', '\'][\'', '"|"'],
    'U': ['(_)', '|_|', 'v', 'ü'],
    'V': ['\\/'],
    'W': ['\\//', 'vv', '//', '\\^/', '(n)', '\\V/', '\\//', '\\X/', '|\\/'],
    'X': ['><', 'Ж', 'ecks', ')('],
    'Y': ['Y', 'j', '`/', '¥'],
    'Z': ['2', 'z', '~\\_', '~/_', '%']
};