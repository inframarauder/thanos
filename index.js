var glove = $('.infinity');
var snapBanner = $('.snap');
var audio = new Audio('https://olivia-ng.com/codepen/avengers/fingersnap.mp3');


function shuffleArray(array){
    var l = array.length;

    while(l--){
        var index =Math.floor( Math.random()*(l));

        var temp = array[l];
        array[l] = array[index];
        array[index] = temp;
    }

    return array;
}

function fade(array){
    var l = array.length;
    var heroes = shuffleArray(array).slice(0,(l/2));
    
    for(var i=0; i<heroes.length; i++){
        var hero = heroes[i];
        if($(hero).hasClass('alive')){
            $(hero).fadeOut(1000,()=>{
                $(hero).removeClass('alive');
                 $(hero).addClass('faded');
            });
        }
    }
}

 glove.click(()=>{
    audio.play();
    glove.attr('class','hide');
    snapBanner.attr('class','snap');
    if($('.row').hasClass('snapped')){
        if($('.hero').hasClass('faded')){
            $('.hero').fadeIn(1000,()=>{
                $('.hero').removeClass('faded');
                 $('.hero').addClass('alive');
            });
        }
        $('.row').removeClass('snapped');
    }else{
        fade($('.hero'));
        $('.row').addClass('snapped');
    }
    
    setTimeout(()=>{
        glove.attr('class','infinity');
        snapBanner.attr('class','snap hide');
    },1500);
    
});