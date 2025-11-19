const textArea = document.getElementById('textArea');
const counter = document.getElementById('counter');
const maxChars = 100;


textArea.addEventListener('input', () => {
let remaining = maxChars - textArea.value.length;
counter.textContent = `Characters left: ${remaining}`;
});

if (remaining > 50) {
counter.className = 'green';
} else if (remaining > 20) {
counter.className = 'orange';
} else {
counter.className = 'red';
}


