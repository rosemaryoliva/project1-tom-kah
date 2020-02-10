  $(function() {
        var elem = $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
            {
           // height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log(percent);
            }
        });
        $(window).resize(function() {
          if ($(window).width() <= 768) {
            elem.destroy();
          }
          else {
            elem.reinitialize();
          }
        });
    });

// Mushroom Chopping 

    $('.food-item').click(function(){
      $('#food-item1').slideUp(300).fadeOut('slow')
      $('food-item').remove('#food-item1').delay(1000)
      //$('#food-item2').fadeIn(400) 
    })

     $('#food-item2').click(function(){
       $('#food-item2').slideUp(300)
      //$('#food-item2').remove('#food-item2')
       $('food-item').remove('#food-item2').delay(1000)
       $('#food-item3').fadeIn(400)
       //$('#food-item3').toggleClass('hide')

     })
     $('#food-item3').click(function(){
       $('#food-item3').slideUp(300)
      //$('#food-item2').remove('#food-item2')
       $('food-item').remove('#food-item3').delay(1000)
       $('#food-item4').fadeIn(400)
       //$('#food-item3').toggleClass('hide')
     })


     $('.onion-item').click(function(){
      $('#onion-item1').slideUp(300).fadeOut('slow')
      $('onion-item').remove('#onion-item1').delay(1000)
      //$('#food-item2').fadeIn(400) 
    })

     $('#onion-item2').click(function(){
       $('#onion-item2').slideUp(300)
      //$('#food-item2').remove('#food-item2')
       $('onion-item').remove('#onion-item2').delay(1000)
       $('#onion-item3').fadeIn(400)
       //$('#food-item3').toggleClass('hide')

     })
     $('#onion-item3').click(function(){
       $('#onion-item3').slideUp(300)
      //$('#food-item2').remove('#food-item2')
       $('onion-item').remove('#onion-item3').delay(1000)
       $('#onion-item4').fadeIn(400)
       //$('#food-item3').toggleClass('hide')
     })