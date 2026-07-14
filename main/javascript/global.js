function relogio(){

    const agora = new Date();
    let hora = agora.getHours();

    var main = document.getElementsByTagName('main')[0];
    
    
    if(hora >= 6 && hora < 12 ){
        main.style.backgroundImage = "url('imagens/background_morning.png')";
        main.style.color = '#000000';         
    }else if(hora >= 12 && hora < 18){
        main.style.backgroundImage = "url('imagens/background_afternoon.png')";
        main.style.color = '#ffffff';
    }else{
        main.style.backgroundImage = "url('imagens/background.png')";
        main.style.color = '#ffffff';
    }
}
relogio()
