window.onload = () =>{
    console.log("janela carregada")
    alternaTamanho()
}
let contador = 0;
const alternaTamanho = () =>{
    const botaoFecha = document.getElementsByClassName('botao-flutuante');
    botaoFecha[0].addEventListener('click', () =>{
        if(contador === 0){
            contador = 1
            alteraClasseMenu()
            document.getElementsByClassName('header')[0].classList.remove('head')
        }else if(contador === 1){
            contador = 0
            document.getElementsByClassName('header')[0].classList.add('head')
            alteraClasseMenu()
        }
    })
}
const alteraClasseMenu = () => {

    if(contador != 0)
         document.getElementsByClassName('head')[0].classList.add('header')  
    if(contador != 1)
         document.getElementsByClassName('head')[0].classList.remove('header')
}