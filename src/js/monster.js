
/* 
 * arrow key biondings
 */



$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            console.log("left");
            // posX += 20;
            $('.monster-wrap').css("transform", "scaleX(1)");  // flips element back to normal
            
            let leftHit = $('.monster-wrap').css("right");
            let leftWall = $('body').width();
            leftWall -= $('.monster-wrap').width();
            leftWall = parseInt(leftWall);
            leftHit = parseInt(leftHit);

            console.log(leftHit);
            console.log(leftWall);

            if (leftHit >= leftWall-100) { //not working because we're comparing a string
                    console.log( 'hit left border');
                    $('body').css("background-position-x", "+=7px");
                    $('.grass-strip').css("background-position-x", "+=10px"); 
                    $('.ground-objects').children().css("left", "+=10px"); 
            } else {
                $('.monster-wrap').css("right", "+=20px"); 
            }
        break;

        case 38: // up
            console.log("up");
            
            $('.character').removeClass("bg-s1");
            $('.character').addClass("jump-1");

            if ($( '.monster-wrap' ).css('bottom') === monster.height) {
                $( '.monster-wrap' ).animate({
                    bottom: '+=60px',
                }, {
                    duration: 300,
                    complete: function() {
                    $( ".monster-wrap" ).animate({
                        bottom: monster.height,
                      }, {
                        duration: 300,
                        complete: function() {
                                $('.character').removeClass("jump-1");
                                $('.character').addClass("bg-s1");
                            }
                        });
                    }
                });
            }

        break;
        
        case 39: // right
            console.log("right");
            $('.monster-wrap').css("transform", "scaleX(-1)"); // flips element
            let rightHit = parseInt($( '.monster-wrap' ).css('right'));

            if ( rightHit <= 100 ) {
                console.log('hit right border');
                $('body').css("background-position-x", "-=7px"); 
                $('.grass-strip').css("background-position-x", "-=10px"); 
                $('.ground-objects').children().css("left", "-=10px"); 
                return;
            }

            $('.monster-wrap').css("right", "-=20px"); 

        break;

        case 40: // down
            console.log("down");
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
