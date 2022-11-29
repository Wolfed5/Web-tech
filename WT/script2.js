count = 5; // количество изображений на  web-странице

pics = new Array(5);

function preload() { 

  // упреждающая загрузка 5-ти изображений и размещение их в массиве

for (i=0; i<count; i++) pics[i] = new Image();

    pics[0].src = "step.bmp";

    pics[1].src = "scn.bmp";

    pics[2].src = "cdb.bmp";

    pics[3].src = "cdb.bmp";

    pics[4].src = "cdb.bmp";


document.images[0].src = pics[1].src;
}
function up()

{

document.mypic.src="step.bmp"

}

function down()

{

document.mypic.src="cdb.bmp"

}

bool = 0;
var idtimer;
delay = 1000;
function animation()
{ 
 //   for(i=0;i>-1;i++)
 //   {
    if(bool == 0)
    {
        document.img1.src = "http://placehold.it/300x300?text=2"
        bool = 1;
    }
    else if(bool==1)
    {
        document.img1.src = "http://placehold.it/300x300?text=3"
        bool = 2;
    }
    else if(bool==2)
    {
        document.img1.src = "http://placehold.it/300x300?text=4"
        bool = 3;
    }
    else if(bool==3)
    {
        document.img1.src = "http://placehold.it/300x300?text=5"
        bool = 4;
    }
    else if(bool==4)
    {
        document.img1.src = "http://placehold.it/300x300?text=6"
        bool = 5;
    }
    else if(bool==5)
    {
        document.img1.src = "http://placehold.it/300x300?text=7"
        bool = 6;
    }
    else if(bool==6)
    {
        document.img1.src = "http://placehold.it/300x300?text=8"
        bool = 7;
    }
    else if(bool==7)
    {
        document.img1.src = "http://placehold.it/300x300?text=9"
        bool = 8;
    }
    else if(bool==8)
    {
        document.img1.src = "http://placehold.it/300x300?text=10"
        bool = 9;
    }
    else if(bool==9)
    {
        document.img1.src = "http://placehold.it/300x300?text=11"
        bool = 10;
    }
    else if(bool==10)
    {
        document.img1.src = "http://placehold.it/300x300?text=12"
        bool = 11;
    }
    else if(bool==11)
    {
        document.img1.src = "http://placehold.it/300x300?text=1"
        bool = 0;
    }
    idtimer = setTimeout('animation()', delay);
    }
//}
