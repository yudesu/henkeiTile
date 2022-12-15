let num = 10;
let lattice = [];
let tile;
let base = [];
let scalar
let slider;

function setup(){
    createCanvas(500,500);
    scalar = height * 1.0/ num;
    slider = createSlider(0,1000,700);
    makeSqVector();
    lattice = makeSqLattice();
    //drawTiling();
}

function makeSqVector(){
    base = [];
    base.push({x:0, y:slider.value()/1000*1})
    base.push({x:slider.value()/1000*1, y:0})
}

function makeSqLattice(){
    let mat = []
    for (let i = 0; i < num + 1; i++){
	let row = [];
	for (let j = 0; j < num + 1; j++){
	    let v = {x: (i*scalar)*base[0].x + (j*scalar)*base[1].x,
		     y: (i*scalar)*base[0].y + (j*scalar)*base[1].y
		    }
	    row.push(v);
	}
	mat.push(row);
    }
    return(mat);
}

function drawTiling(){
    background(color("white"));
    for (let vecArr of lattice){
	for (let vec of vecArr){
	    //fill(color('hsba('+ floor(random(255)) +',100%,100%,0.5)'));
        fill(color("lightgray"));
	    rect(vec.x, vec.y, slider.value()/1000*scalar, slider.value()/1000*scalar);
	}
    }
}

function draw(){
    makeSqVector();
    lattice = makeSqLattice();
    drawTiling();
}