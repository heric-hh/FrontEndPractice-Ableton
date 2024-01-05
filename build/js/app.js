window.addEventListener( "DOMContentLoaded" , function() {

    iniciarApp();

} );


function iniciarApp() {
    
    seleccionarMenu();

}


function seleccionarMenu() {

    const openMenu = document.querySelector( ".btn-menu" );
    const openMore = document.querySelector( ".btn-more" );   
    openMenu.addEventListener( "click" , abrirMenu );
    openMore.addEventListener( "click" , abrirMore );

}


function abrirMenu() {

    const menuAzul = document.querySelector( ".nav-menu" );
    const mainNavList = document.querySelector( ".nav-cont__main-nav__list" );
    menuAzul.classList.toggle( "--open" );
    mainNavList.classList.toggle( "--open" );
    
}


function abrirMore() {

    const moreMenu = document.querySelector( ".more-menu" );
    const moreLink = document.querySelector( "a.highlight" );
    moreMenu.classList.toggle( "--open" );
    
    if (moreMenu.classList.contains( "--open" ) )
        moreLink.innerText = "More -";
    else 
        moreLink.innerText = "More +";
    
}