var canvas;
var context;
var player;	

var entities = [];
var blocks = [];

var Keys = {
	pressed: {},
	
	isDown: function(keyCode){return pressed[keyCode];},
	onKeyDown: function(event){ this.pressed[event.keyCode] = true;},
	onKeyUp: function(event){ delete this.pressed[event.keyCode];}
};

window.onload = function(){
	canvas = document.getElementById('game-canvas');
	context = canvas.getContext("2d");
	// for interpolation
	context.imageSmoothingEnabled = false;
	context.webkitImageSmoothingEnabled = false;
	context.mozImageSmoothingEnabled = false;
	
	window.addEventListener("keydown", function(event){Keys.onKeyDown(event);}, false);
	window.addEventListener("keyup", function(event){Keys.onKeyUp(event);}, false);
	
	player = new Player();
	entities.push(player);
	
	for(var i = 0; i < canvas.width / 48; i++){
		blocks.push(new Block(i * 48, 100, "res/tex/sheet.png"));
	}

	setInterval(main_loop, 1000 / 60);
}

function main_loop(){
	context.fillStyle = "#ffffff";
	context.fillRect(0, 0, canvas.width, canvas.height);

	for(var i = 0; i < entities.length; i++){
		if(!entities[i].removed){
			entities[i].update();
			entities[i].render();
		} else entities.splice(i, 1);
	}

	for(var i = 0; i < blocks.length; i++){
		blocks[i].render();
	}
}


function Player(){

	this.removed = false;
	this.x = 0;
	this.y = 0;
	this.xa = 0;
	this.ya = 0;

	var img = new Image();
	var time = 0;
	var del = 5;
	var speed = 1;
	var speed_cap = 4;

	var MOVE_PATH = "res/tex/walk_animation_player.png";
	var MOVE_PATH_REVERSE = "res/tex/walk_animation_player_reverse.png";
	var IDLE_PATH = "res/tex/idle_animation_player.png";

	var action = "MOVING";
	var current_file = IDLE_PATH;

	var tw = 32;
	var th = 32;

	this.update = function(){
		time++;
		time %= del * 5;

		if(Keys.pressed[37]) this.xa -= speed;
		else if(this.xa < 0) this.xa += speed / 4;

		if(Keys.pressed[39]) this.xa += speed;
		else if(this.xa > 0) this.xa -= speed / 4;
		
		if(Keys.pressed[38]);//up
	
		if(this.xa < -speed_cap) this.xa = -speed_cap;
		if(this.xa > speed_cap) this.xa = speed_cap;
		if(this.xa == 0) action = "IDLE";
		else action = "MOVING";
		this.x += this.xa;
		this.y += this.ya;
	}

	this.render = function(){
		switch(action){
			case "IDLE":
				current_file = MOVE_PATH;
				this.draw_image(current_file, this.x, this.y, 16, 16, 0, 0, tw, th);
				break;

			case "MOVING":
				if(this.xa > 0)	current_file = MOVE_PATH;
				else if(this.xa < 0) current_file = MOVE_PATH_REVERSE;
				if(time <= del)
					this.draw_image(current_file, this.x, this.y, 16, 16, 0, 0, tw, th);
				else if(time > del && time <= del * 2)
					this.draw_image(current_file, this.x, this.y, 16, 16, 16, 0, tw, th);
				else if(time > del * 2 && time <= del * 3)
					this.draw_image(current_file, this.x, this.y, 16, 16, 32, 0, tw, th);
				else if(time > del * 3 && time <= del * 4)
					this.draw_image(current_file, this.x, this.y, 16, 16, 48, 0, tw, th);
				else if(time > del * 4 && time <= del * 5)
					this.draw_image(current_file, this.x, this.y, 16, 16, 64, 0, tw, th);
				else console.log("SKIPPED " + time);

				break;
		}
	}

	this.draw_image = function(source, x, y, w, h, tx, ty, tw, th){
	    context.drawImage(img, tx, ty, w, h, x, y, tw, th);
		img.src = source;
	}
}

function Block(x, y, path){

	var img = new Image();
	this.x = x;
	this.y = y;
	var tw = 48;
	var th = 48;

	this.render = function(){
		var u = blocks[this.x + (this.y - 1) * (canvas.width / 48)] == null;
		// TODO make the variables work!
		// var d = blocks[this.x + (this.y - 1) * (canvas.width / 48)] == null;
		// var l = blocks[this.x + (this.y - 1) * (canvas.width / 48)] == null;
		// var d = blocks[this.x + (this.y - 1) * (canvas.width / 48)] == null;
		if(u){
			this.draw_image(path, this.x, this.y - 48, 16, 16, 16, 0, tw, th);	
		} 
		this.draw_image(path, this.x, this.y, 16, 16, 0, 0, tw, th);
	}

	this.draw_image = function(source, x, y, w, h, tx, ty, tw, th){
	    context.drawImage(img, tx, ty, w, h, x, y, tw, th);
		img.src = source;
	}
}