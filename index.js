const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
const options = { method: 'GET', headers: { accept: 'application/json' } };

let btn = document.getElementById('generate');
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let quoteCont;
let authorName;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(url, options)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            quoteCont = data.data.content;
            authorName = data.data.author;
            quote.innerHTML = `'${quoteCont}'`;
            author.innerHTML = `-${authorName}`
        })
})


document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || (e.key >= 'F1' && e.key <= 'F12')) {
        e.stopPropagation();
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', e => e.preventDefault(), false)