const card = document.querySelector('.card');
const colors = document.querySelectorAll('.colors div');

// let hexCodes = ['#e5031d', '#1503e5', '#15e503', '#e5ce03'];
let hexCodes = ['#EA25B5', '#CDEAE8', '#FF82F4', '#04BBEC', '#00214A', '#0D3F7C'];

colors.forEach((item, i) => {
    item.addEventListener('click', () => {
        const root = document.querySelector(':root');

        root.style.setProperty('--product-img', `url(../img/${item.className}.jpg)`);
        root.style.setProperty('--bg-color', hexCodes[i]);
    })
})

card.addEventListener('click', () => {
    card.classList.add('active');
})

window.addEventListener('click', (e) => {
    if(e.target.className == ''){
        card.classList.remove('active');
    }
})