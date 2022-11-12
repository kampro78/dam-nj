function add()
{
    back_imgtag = new Image();
    back_imgtag.onload = uploadbackground;
    back_imgtag.src = backgund_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src = rover_image;
}

function uploadbackground() {
   ctx.drawImage(back_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.Drawimage(rover_imgtag, 0, 0, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == '87')
     {
        up();
        console.log("up");
     } 
     if(keyPressed == '83')
     {
        down();
        console.log("down");
     } 
     if(keyPressed == '65')
     {
        left();
        console.log("left");
     } 
     if(keyPressed == '68')
     {
        right();
        console.log("right");
     } 
}

function up()
{
  if(rover_y >=0)
   rover_y = rover_y - 10;
   console.log("When up arrow is pressed, x= " + rover_x + "| y =" + rover_y);
   uploadbackground();
   uploadrover();
}
function down()
{
  if(rover_y >=500)
   rover_y = rover_y + 10;
   console.log("When down arrow is pressed, x= " + rover_x + "| y =" + rover_y);
   uploadbackground();
   uploadrover();
}
function left()
{
  if(rover_x >=0)
   rover_x = rover_x - 10;
   console.log("When left arrow is pressed, x= " + rover_x + "| y =" + rover_y);
   uploadbackground();
   uploadrover();
}
function right()
{
  if(rover_x >=700)
   rover_x = rover_x + 10;
   console.log("When right arrow is pressed, x= " + rover_x + "| y =" + rover_y);
   uploadbackground();
   uploadrover();
}