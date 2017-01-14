//Galeria Su 
$(".open_fancybox").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/IPRP1.PNG',                
            title : 'Página inicial do jogo em Processing'
        },
        {
            href : '../img/IPRP2.PNG',                
            title : 'Jogo a decorrer'
        },
        {
            href : '../img/IPRP5.PNG',                
            title : 'Jogo em pausa'
        },
        {
            href : '../img/IPRP3.PNG',                
            title : 'Quando o utilizador perde o jogo'
        },
        {
            href : '../img/IPRP4.PNG',                
            title : 'Quando o utilizador ganha o jogo'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
    $(".open_fancybox1").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/PED1.PNG',                
            title : 'Página inicial da Batalha Naval em Java'
        },
        {
            href : '../img/PED2.PNG',                
            title : 'Tabuleiro do jogo'
        },
        {
            href : '../img/PED3.PNG',                
            title : 'Tabuleiro do jogo com botão de batota primido'
        },
        {
            href : '../img/PED4.PNG',                
            title : 'Tabuleiro do jogo com algumas casas a "Água" e outras a "Fogo"'
        },
        {
            href : '../img/PED5.PNG',                
            title : 'Fim do jogo'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
    
    $(".open_fancybox2").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/DesenhoComposicao.PNG',                
            title : 'Desenho em tons azuis'
        },
        {
            href : '../img/DesenhoComposicao1.PNG',                
            title : 'Desenho com textura de uma folha'
        },
        {
            href : '../img/DesenhoComposicao2.PNG',                
            title : 'Desenho com diversas cores'
        },
        {
            href : '../img/DesenhoComposicao3.PNG',                
            title : 'Desenho com textura de ferrugem'
        },
        {
            href : '../img/DesenhoComposicao4.PNG',                
            title : 'Desenho em tons verdes'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
    
    $(".open_fancybox3").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/TIPO3.PNG',                
            title : 'Revista'
        },
        {
            href : '../img/TIPO4.PNG',                
            title : 'Revista'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
    
    $(".open_fancybox4").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/TIPO5.PNG',                
            title : 'Desdobrável'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
    
    $(".open_fancybox5").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/DesignComposicao3.PNG',                
            title : 'Pictogramas de instrumentos musicais'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
    
    $(".open_fancybox6").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/DesignComposicao2.PNG',                
            title : 'Cartaz sobre o extremismo'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
    
    $(".open_fancybox7").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/TIPO2.PNG',                
            title : 'Publicidade'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
    
    $(".open_fancybox8").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/TIPO1.PNG',                
            title : 'Ementa'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
    
    $(".open_fancybox9").click(function() {
    
    $.fancybox.open([
        {
            href : '../img/THD1.PNG',                
            title : 'Capa do trabalho sobre Arts and Crafts'
        },
        {
            href : '../img/THD2.PNG',                
            title : 'Uma das páginas do trabalho sobre Arts and Crafts'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});

//Like
 $(".material-icons").click(function(){

var conta = $(this).next(".vezes").text();     
        $(this).toggleClass("like");
    if($(this).hasClass("like")) {
    conta++;
        console.log(conta);
    } else {
        conta--;
    }
    $(this).next(".vezes").text(conta);
});

//Google Maps
var myCenter = new google.maps.LatLng(40.20778685, -8.42558026);
    
function initialize() {
var mapProp = {
center:myCenter,
zoom:10,
scrollwheel:false,
draggable:true,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
position:myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);