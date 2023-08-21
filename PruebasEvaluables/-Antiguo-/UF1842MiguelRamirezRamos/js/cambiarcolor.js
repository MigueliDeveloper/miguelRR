const card = document.querySelector('#cuerpoPrincipal');
const colors = document.querySelectorAll('.informacionAcademia div');

let color = '#e5031d';

colors.forEach((item, i) => {
    item.addEventListener('click', () => {
        const root = document.querySelector(':root');

        root.style.setProperty('--product-img', `url(img/${item.className}.jpg)`);
        root.style.setProperty('--bg-color', color);
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