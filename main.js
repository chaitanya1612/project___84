canvas = document.getElementById('myCanvas'); ctx = canvas.getContext("2d"); car1_width = 120;
 car1_height = 70; car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png"; 
 car1_x = 10; car1_y = 10; car2_width = 120;
  car2_height = 70; car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png"; 
  car2_x = 10; car2_y = 100; 
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
car1_imgTag=new Image();
car1_imgTag.onload=uploadcar1;
car1_imgTag.src=car1_image;
car2_imgTag=new Image();
car2_imgTag.onload=uploadcar2;
car2_imgTag.src=car2_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
    function uploadcar2(){
        ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
    }

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
    car1up();

    console.log("up arrow key");
}
if(keyPressed=='40')
{
    car1down();

    console.log("down arrow key");
}
if(keyPressed=='37')
{
    car1left();

    console.log("left arrow key");
}
if(keyPressed=='39')
{
    car1right();

    console.log("right arrow key");
}


if(keyPressed=='87')
{
    car2up();

    console.log("key w");
}
if(keyPressed=='83')
{
    car2down();
y
    console.log("key s");
}
if(keyPressed=='66')
{
    car2left();

    console.log("key d");
}
if(keyPressed=='65')
{
    car1right();

    console.log("key a");
}
}

function up(){
if(car2_y>=0){
car2_y=car2_y-10;
console.log("when key w is pressed, x = "+car2_x+"  y = "+car2_y);
uploadBackground();
uploadcar2();

}

}

function down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
    console.log("when key s is pressed, x = "+car2_x+"  y = "+car2_y);
    uploadBackground();
    uploadcar2();
    
    }
    
    }
    function left(){
        if(car2_x>=0){
            car2_x=car2_x-10;
        console.log("when key d is pressed, x = "+car2_x+"  y = "+car2_y);
        uploadBackground();
        uploadcar2();
        
        }
        
        }
        function right(){
            if(car2_x<=700){
                car2_x=car2_x+10;
            console.log("when key a is pressed, x = "+car2_x+"  y = "+car2_y);
            uploadBackground();
            uploadcar2();
            
            }
            
            }
            function up(){
                if(car1_y>=0){
                car1_y=car1_y-10;
                console.log("when up arrow is pressed, x = "+car1_x+"  y = "+car1_y);
                uploadBackground();
                uploadcar1();
                
                }
                
                }
                
                function down(){
                    if(car1_y<=500){
                        car1_y=car1_y+10;
                    console.log("when down arrow is pressed, x = "+car1_x+"  y = "+car1_y);
                    uploadBackground();
                    uploadcar1();
                    
                    }
                    
                    }
                    function left(){
                        if(car1_x>=0){
                            car1_x=car1_x-10;
                        console.log("when left arrow is pressed, x = "+car1_x+"  y = "+car1_y);
                        uploadBackground();
                        uploadcar1();
                        
                        }
                        
                        }
                        function right(){
                            if(car1_x<=700){
                                car1_x=car1_x+10;
                            console.log("when right arrow is pressed, x = "+car1_x+"  y = "+car1_y);
                            uploadBackground();
                            uploadcar1();
                            
                            }
                            
                            }