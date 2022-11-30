function getimg()
{
    $tmp= document.forms[0].template.value;
    document.img1.src= $tmp + ".bmp";
    
}


bool = 0;
var idtimer;
delay = 3000;
function animation()
{ 
    if(bool == 0)
    {
        document.img1.src = "step.bmp"
        bool = 1;
    }
    else if(bool==1)
    {
        document.img1.src = "scn.bmp"
        bool = 2;
    }
    else if(bool==2)
    {
        document.img1.src = "cdb.bmp"
        bool = 0;
    }
    idtimer = setTimeout('animation()', delay);
}


pictures = new Array();
pictures[1].src="step.bmp";
pictures[2].src="scn.bmp";
pictures[3].src="cdb.bmp";
for(i=0; i<4; i++)
 {
   pictures[i] = new Image();
   if(i==1) pictures[i].src = "step.bmp";
   if(i==2) pictures[i].src = "scn.bmp";
   if(i==3) pictures[i].src = "cdb.bmp";
 }

function LoadImg() {
  document.images[0].src =
     pictures[document.form1.item.selectedIndex].src;
     bool=document.form1.item.selectedIndex;
}
