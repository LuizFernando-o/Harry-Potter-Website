/* ----- Scroll top ----- */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // Exibe o botão sroll top quando rolar a página para baixo
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)