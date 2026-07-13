function relogio(){

    const agora = new Date();
    let hora = agora.getHours();

    var main = document.getElementsByTagName('main')[0];
    
    
    if(hora >= 6 && hora < 12 ){
        main.style.backgroundImage = "url('imagens/background_morning.png')";         
    }else if(hora >= 12 && hora < 18){
        main.style.backgroundImage = "url('imagens/background_afternoon.png')";
    }else{
        main.style.backgroundImage = "url('imagens/background.png')";
    }
}
relogio()
