// Kalkulator
function calculate() {
    const input = document.getElementById('calcInput').value;
    const result = input * 2; // Contoh sederhana, menggandakan angka
    document.getElementById('calcResult').innerText = `Hasil: ${result}`;
}

// Weather Tool (Contoh sederhana, Anda perlu API untuk cuaca)
function getWeather() {
    const city = document.getElementById('city').value;
    // Anda perlu menggunakan API cuaca untuk mendapatkan data cuaca
    // Ini hanya contoh statis
    document.getElementById('weatherResult').innerText = `Cuaca di ${city}: Cerah, 25°C`;
}

// Random Quote Generator
const quotes = [
    "Kutipan 1: Hidup adalah 10% apa yang terjadi pada kita dan 90% bagaimana kita bereaksi terhadapnya.",
    "Kutipan 2: Kesuksesan adalah kemampuan untuk pergi dari satu kegagalan ke kegagalan lain tanpa kehilangan semangat.",
    "Kutipan 3: Jangan menunggu; waktu tidak akan pernah 'tepat'. Mulailah dari tempat Anda berdiri, dan bekerja dengan alat apa pun yang Anda miliki."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteResult').innerText = quotes[randomIndex];
}

// Kontak Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah dikirim!');
    this.reset(); // Reset form setelah pengiriman
});
