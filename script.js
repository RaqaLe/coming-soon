var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 1000,
    time,
    count,
    size = 10,
    speed = 20,
    parts = new Array,
    //colors = ['red','#f57900','yellow','#ce5c00','#5c3566'];
	colors = ['DarkOrchid','blue','yellow','lightblue','aqua', 'Fuchsia', 'red'];
	//colors = ['#DFDFDF','#0AD3DD','#10137A','#FFFFFF','aqua', '#017EFC', 'red'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function create() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0,0,w,h);
  //canvas.addEventListener('mousemove', MouseMove, false);
  for(var i = 0; i < arc; i++) {
    var li = parts[i];
    var distanceFactor = DistanceBetween( mouse, parts[i] );
    distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
	console.log(`distanceFactor=${distanceFactor}, li.size=${li.size}`);
	
    ctx.fillStyle = li.c;
    ctx.strokeStyle=li.c;
	
	/*
    ctx.beginPath();
    ctx.arc(li.x,li.y,li.size*distanceFactor,0,Math.PI*2,false);
    if(i%2==0)
      ctx.stroke();
    else
      ctx.fill();
  
 	//ctx.font = "20px serif";
	//ctx.fillText(randomPhrase(i), li.x,li.y);
	
	*/	 
	
	// Set the font to Font Awesome
    //ctx.font = '25px FontAwesome';
	let fontSize;
	if(distanceFactor == 1) //normal-sized icons
		fontSize = li.size*distanceFactor*2;
	else //big-sized icons at mouse position
		fontSize = li.size*distanceFactor;
	
	ctx.font = `${fontSize}px FontAwesome`
	ctx.fillText(randomSmiley(i), li.x,li.y);
	
    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);
    
    if(li.x > w){
       li.x = 0; 
    }
    if(li.y > h) {
       li.y = 0; 
    }
    if(li.x < 0) {
       li.x = w; 
    }
    if(li.y < 0) {
       li.y = h; 
    }
   
     
  }
  
  if(time < speed) {
    time++;
  }
  setTimeout(particles,1000/rate);
}
function MouseMove(e) {
   mouse.x = e.layerX;
   mouse.y = e.layerY;
}
function DistanceBetween(p1,p2) {
   var dx = p2.x-p1.x;
   var dy = p2.y-p1.y;
   return Math.sqrt(dx*dx + dy*dy);
}

function randomPhrase(i)
{
	switch(true)
	{
		case (i < 10): return `Success`; break;
		case (i < 20): return `Hello`; break;
		case (i < 30): return `Hi`; break;
		case (i < 40): return `Delighted`; break;
		case (i < 50): return `Cool`; break;
		case (i < 60): return `Happy`; break;
		case (i < 70): return `Work`; break;
		case (i < 80): return `Share`;break;
		case (i < 90): return `Communities`; break; 
		case (i < 100): return `Friends`; break; 
		case (i < 120): return `Like`; break; 
		case (i < 130): return `Come`; break; 
		case (i < 140): return `Enjoy`; break; 
		case (i < 150): return `Family`; break; 
		case (i < 160): return `Join Us`; break; 
		case (i < 170): return `For You`; break; 
		case (i < 180): return `Good Vibes`; break; 
		case (i < 190): return `Be Positive`; break; 
		case (i < 200): return `Have Fun`; break; 
		case (i < 210): return `Comment`; break; 
		case (i < 220): return `Proud`; break; 
		case (i < 230): return `love`; break;
		case (i < 240): return `hope`; break;
		case (i < 250): return `joy`; break;
		case (i < 260): return `gratitude`; break;
		case (i < 270): return `kindness`; break; 
		case (i < 280): return `optimism`; break;
		case (i < 290): return `inspiration`; break; 
		case (i < 300): return `confidence`; break;
		case (i < 310): return `harmony`; break;
		case (i < 320): return `laughter`; break;
		case (i < 330): return `appreciation`; break; 
		default: return `Raqa Le`;
	}
	
}

function randomSmiley(i)
{
	switch(true)
	{
		case (i < 10): return `\uf630`; break;
		case (i < 20): return `\uf5d2`; break;
		case (i < 30): return `\uf567`; break;
		case (i < 40): return `\uf12e`; break;
		case (i < 50): return `\uf579`; break;
		case (i < 60): return `\uf579`; break;
		case (i < 70): return `\uf086`; break;
		case (i < 80): return `\uf4ad`; break;
		case (i < 90): return `\uf57a`; break;
		case (i < 100): return `\uf57a`; break;
		case (i < 110): return `\uf57f`; break;
		case (i < 120): return `\uf57f`; break;
		case (i < 130): return `\uf580`; break;
		case (i < 140): return `\uf580`; break;
		case (i < 150): return `\uf581`; break;
		case (i < 160): return `\uf11b`; break;
		case (i < 170): return `\uf582`; break;
		case (i < 180): return `\uf582`; break;
		case (i < 190): return `\uf583`; break;
		case (i < 200): return `\uf583`; break;
		case (i < 210): return `\uf584`; break;
		case (i < 220): return `\uf584`; break;
		case (i < 230): return `\uf585`; break;
		case (i < 240): return `\uf585`; break;
		case (i < 250): return `\uf586`; break;
		case (i < 260): return `\uf586`; break;
		case (i < 270): return `\uf587`; break;
		case (i < 280): return `\uf587`; break;
		case (i < 290): return `\uf588`; break;
		case (i < 300): return `\uf588`; break;
		case (i < 310): return `\uf589`; break;
		case (i < 320): return `\uf06b`; break;
		case (i < 330): return `\uf58a`; break;
		case (i < 340): return `\uf58a`; break;
		case (i < 350): return `\uf58b`; break;
		case (i < 360): return `\uf7b6`; break;
		case (i < 370): return `\uf58c`; break;
		case (i < 380): return `\uf58c`; break;
		case (i < 390): return `\uf596`; break;
		case (i < 400): return `\uf596`; break;
		case (i < 410): return `\uf597`; break;
		case (i < 420): return `\uf597`; break;
		case (i < 430): return `\uf598`; break;
		case (i < 440): return `\uf598`; break;
		case (i < 450): return `\uf599`; break;
		case (i < 460): return `\uf599`; break;
		case (i < 470): return `\uf59a`; break;
		case (i < 480): return `\uf59a`; break;
		case (i < 490): return `\uf59b`; break;
		case (i < 500): return `\uf59b`; break;
		case (i < 510): return `\uf59c`; break;
		case (i < 520): return `\uf7d0`; break;
		case (i < 530): return `\uf11a`; break;
		case (i < 540): return `\uf11a`; break;
		case (i < 550): return `\uf5a4`; break;
		case (i < 560): return `\uf5a4`; break;
		case (i < 570): return `\uf5a5`; break;
		case (i < 580): return `\uf5a5`; break;
		case (i < 590): return `\uf201`; break;
		case (i < 600): return `\uf200`; break;
		case (i < 610): return `\uf651`; break;
		case (i < 620): return `\uf7e4`; break;
		case (i < 630): return `\uf118`; break;
		case (i < 640): return `\uf118`; break;
		case (i < 650): return `\uf5b8`; break;
		case (i < 660): return `\uf5b8`; break;
		case (i < 670): return `\uf4da`; break;
		case (i < 680): return `\uf4da`; break;
		case (i < 690): return `\uf5c2`; break;
		case (i < 700): return `\uf5c2`; break;
		case (i < 710): return `\uf21e`; break;
		case (i < 720): return `\uf522`; break;
		case (i < 730): return `shine`; break;
		case (i < 740): return `inspire`; break;
		case (i < 750): return `follow`; break;
		case (i < 760): return `like`; break;
		case (i < 770): return `share`; break;
		case (i < 780): return `enjoy`; break;
		case (i < 790): return `have fun`; break;
		case (i < 800): return `love`; break;
		case (i < 810): return `post`; break;
		case (i < 820): return `comment`; break;
		default: return `\uf004`;
	}
}



create();
particles();
canvas.addEventListener('mousemove', MouseMove, false);