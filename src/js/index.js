
const LinkDoVideo = video.src;
const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const botaofecharModal = document.querySelector('.fechar-modal');



function alternarModal() {
    modal.classList.toggle('aberto');
}


botaoTrailer.addEventListener("click", () => {
    
    alternarModal();
    video.setAttribute("src", LinkDoVideo);

});





botaofecharModal.addEventListener('click',() => {
    
    alternarModal();
    video.setAttribute('src', "");

} );











