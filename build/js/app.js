window.addEventListener( "DOMContentLoaded" , function() {

    iniciarApp();

} );


function iniciarApp() {
    
    seleccionarMenu();

}


function seleccionarMenu() {

    const openMenu = document.querySelector( '.btn-menu' );    
    openMenu.addEventListener( "click" , abrirMenu );

}


function abrirMenu() {

    const menuAzul = document.querySelector( ".nav-menu" );
    const mainNavList = document.querySelector( ".nav-cont__main-nav__list" );
    menuAzul.classList.toggle( "--open" );
    mainNavList.classList.toggle( "--open" );
}