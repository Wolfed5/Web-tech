
function clearsel() {
    var ctx = document.querySelector('canvas').getContext('2d');
    var x = 0;
    ctx.clearRect(0,0, 1000, 1000);
                       }


                       function drawShape() {
            
                        // get the canvas element using the DOM
                        var canvas = document.getElementById('mycanvas');
                        
                        // Make sure we don't execute when canvas isn't supported
                        if (canvas.getContext) {
                        
                           // use getContext to use the canvas for drawing
                           var ctx = canvas.getContext('2d');
                           
                           // draw a rectangle with default settings
             ctx.fillRect(0,0,150,150);
                           
                           // Save the default state
             ctx.save();
                           
                           // Make changes to the settings
             ctx.fillStyle = '#66FFFF'
             ctx.fillRect( 15,15,120,120); 
                           
                           // Save the current state
             ctx.save();
                           
                           // Make the new changes to the settings
             ctx.fillStyle = '#993333'
             ctx.globalAlpha = 0.5;
             ctx.fillRect(30,30,90,90);
             
             // Restore previous state
             ctx.restore();
             
             // Draw a rectangle with restored settings
             ctx.fillRect(45,45,60,60); 
             
             // Restore original state
             ctx.restore();
             
             // Draw a rectangle with restored settings
             ctx.fillRect(40,40,90,90); 
             } else {
             alert('You need Safari or Firefox 1.5+ to see this demo.');
             }
             }

             function createImage() {
                var ctx = document.getElementById('mycanvas').getContext('2d');
                var x = 0;
                
                function animation() {
                     ctx.clearRect(0,0, 1000, 1000);
                     ctx.fillRect(x, 10, 10, 10);
                     x = x+1;
                     if (x > 999) { x = 0;}
                     setTimeout(animation, 50);
                                                        }
            animation();
            
                                                    }


                                   function createImage1() {
                var ctx = document.getElementById('mycanvas').getContext('2d');
                var x = 0;
                ctx.save();
                
                function animation() {
                     
                     ctx.clearRect(0,0, 1000, 1000);
                     
                     ctx.fillRect(x, 10, 10, 10);
                     
                     x = x+1;
                     ctx.restore();
                     if (x > 999) { x = 0;}
                     setTimeout(animation, 50)
                   //  if(x<1000) 
                     ctx.restore();
                                                        }
            animation();
            
                                                    }                             
                                        








