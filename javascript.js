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

     $('.lemongrass-item').click(function(){
      $('#lemongrass-item1').slideUp(300).fadeOut('slow')
      $('lemongrass-item').remove('#lemongrass-item1').delay(1000)
      //$('#food-item2').fadeIn(400) 
    })


      $('.garlic-item').click(function(){
      $('#garlic-item1').slideUp(300).fadeOut('slow')
      $('garlic-item').remove('#garlic-item1').delay(1000)
      //$('#food-item2').fadeIn(400) 
    })

 $('.ginger-item').click(function(){
      $('#ginger-item1').slideUp(300).fadeOut('slow')
      $('ginger-item').remove('#ginger-item1').delay(1000)
      //$('#food-item2').fadeIn(400) 
    })

     $('#ginger-item2').click(function(){
       $('#ginger-item2').slideUp(300)
      //$('#food-item2').remove('#food-item2')
       $('ginger-item').remove('#ginger-item2').delay(1000)
       $('#ginger-item3').fadeIn(400)
       //$('#food-item3').toggleClass('hide')

 })


     $('.step-1-onion').click(function(){
      $('#onion-color').fadeOut(300).fadeOut('slow')
      $('step-1-onion').remove('#onion-color').delay(1000)
      //$('#food-item2').fadeIn(400) 
    })


      $('.step-1-ginger').click(function(){
      $('#ginger-color').fadeOut(300).fadeOut('slow')
      $('step-1-ginger').remove('#ginger-color').delay(1000)
      //$('#food-item2').fadeIn(400) 
    })

       $('.step-1-lemongrass').click(function(){
      $('#lemongrass-color').fadeOut(300).fadeOut('slow')
      $('step-1-lemongrass').remove('#lemongrass-color').delay(1000)
      //$('#food-item2').fadeIn(400) 
    })
 $('.step-1-curry').click(function(){
      $('#curry-color').fadeOut(300).fadeOut('slow');
      $('step-1-curry').remove('#curry-color').delay(1000);
      //$('#food-item2').fadeIn(400) 
    })
 
    //$("#image").rotate(angle);
   
jQuery(document).ready(function($){
 
    // Define a blank array for the effect positions. This will be populated based on width of the title.
    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4,6,8,10];
 
    // Push the header width values to bArray
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
     
    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 
    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function(){
         
        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
         
        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-bubble').animate({
            'bottom': '90%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
 
 
    }, 350);
 
});

$('#button').on('click', function() {
    //$("#image").rotate(angle);
    $('#pot').fadeOut(300).fadeOut('slow');
      $('pot-1').remove('#pot').delay(1000);

});
