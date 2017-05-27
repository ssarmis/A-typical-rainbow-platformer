var canvas;
var context;

var absolute_vel = 12;


var w;
var h;
var grid_size = 96;
var tiles = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var camera;
var player;	

var entities = [];
var blocks = [];

var Keys = {
	pressed: {},
	
	isDown: function(keyCode){ return pressed[keyCode];},
	onKeyDown: function(event){ this.pressed[event.keyCode] = true;},
	onKeyUp: function(event){ delete this.pressed[event.keyCode];}
};

window.onload = function(){
	canvas = document.getElementById('game-canvas');
	context = canvas.getContext("2d");
	// for interpolation
	context.mozImageSmoothingEnabled = false;
	context.webkitImageSmoothingEnabled = false;
	context.msImageSmoothingEnabled = false;
	context.imageSmoothingEnabled = false;
	window.addEventListener("keydown", function(event){Keys.onKeyDown(event);}, false);
	window.addEventListener("keyup", function(event){Keys.onKeyUp(event);}, false);
	
	w = tiles[0].length;
	h = tiles.length;

	camera = new Camera();
	player = new Player();
	entities.push(player);
	
	for(var y = 0; y < h; y++){
		for(var x = 0; x < w; x++){
			if(tiles[y][x] == 1) {
				blocks.push(new Block(0, x * grid_size, y * grid_size, "res/tex/sheet.png"));
			} else if(tiles[y][x] == 2) {
				entities.push(new Roopa(x * grid_size, y * grid_size));
				blocks.push(null);
			} else blocks.push(null);
			
		}
	}

	setInterval(main_loop, 1000 / 60);
}

var background = new Image();
background.src = "res/tex/background.png";

function main_loop(){
	context.drawImage(background, 0, 0, canvas.width, canvas.height);


	camera.update();
	for(var i = 0; i < entities.length; i++){
		if(!entities[i].removed){
			entities[i].update();
			entities[i].render();
		} else entities.splice(i, 1);
	}

	for(var i = 0; i < blocks.length; i++){
		if(blocks[i] != null)
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
	var speed = 5;
	var speed_cap = 20;

	var MOVE_PATH = "res/tex/walk_animation_player.png";
	var MOVE_PATH_REVERSE = "res/tex/walk_animation_player_reverse.png";
	var IDLE_PATH = "res/tex/idle_animation_player.png";

	var action = "MOVING";
	var current_file = IDLE_PATH;

	var history = [];
	var tw = grid_size;
	var th = grid_size;
	var grounded = false;
	var grav_acc = 0.98;
	var gravity = grav_acc;
	var jump_vel = 0;
	var jump_height = 20;

	this.update = function(){
		time++;
		time %= del * 5;

		grounded = this.on_ground(this.ya);

		if(grounded) this.ya = 0;
		else {
			this.ya += gravity;
			if(this.ya > absolute_vel) this.ya = absolute_vel;
		}

		if(Keys.pressed[37]) this.xa -= speed;
		else if(this.xa < 0) this.xa = 0;

		if(Keys.pressed[39]) this.xa += speed;
		else if(this.xa > 0) this.xa = 0;
		
		if(Keys.pressed[38] && grounded) jump_vel -= jump_height;
		else jump_vel = 0;
	
		if(this.xa < -speed_cap) this.xa = -speed_cap;
		if(this.xa > speed_cap) this.xa = speed_cap;
		if(this.xa == 0) action = "IDLE";
		else action = "MOVING";

		this.ya += jump_vel;

		if(this.xa != 0 || this.ya != 0){
			history.push(new Vector2(this.x, this.y));
			this.move(this.xa, this.ya);
		}
		if(time < del * 5 * 0.8) history.shift();
		if(history.length > 20) history.shift();
	}

	var rainbow_colors = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];

	this.render = function(){
		var xx = this.x - camera.x;
		var yy = this.y - camera.y;

		for(var i = 0; i < history.length; i++){
			context.fillStyle = rainbow_colors[Math.floor(Math.random() * rainbow_colors.length)];
			context.fillRect(history[i].x - camera.x + tw / 2 - 10 + i - history.length,
			 history[i].y - camera.y + th / 2, i + 5, i + 5);
		}

		switch(action){
			case "IDLE":
				current_file = IDLE_PATH;
				if(time < (del * 5) / 2)
					this.draw_image(current_file, xx, yy, 16, 16, 0, 0, tw, th);
				else 
					this.draw_image(current_file, xx, yy, 16, 16, 16, 0, tw, th);
				break;

			case "MOVING":
				if(this.xa > 0)	current_file = MOVE_PATH;
				else if(this.xa < 0) current_file = MOVE_PATH_REVERSE;
				if(time <= del)
					this.draw_image(current_file, xx, yy, 16, 16, 0, 0, tw, th);
				else if(time > del && time <= del * 2)
					this.draw_image(current_file, xx, yy, 16, 16, 16, 0, tw, th);
				else if(time > del * 2 && time <= del * 3)
					this.draw_image(current_file, xx, yy, 16, 16, 32, 0, tw, th);
				else if(time > del * 3 && time <= del * 4)
					this.draw_image(current_file, xx, yy, 16, 16, 48, 0, tw, th);
				else if(time > del * 4 && time <= del * 5)
					this.draw_image(current_file, xx, yy, 16, 16, 64, 0, tw, th);
				else console.log("SKIPPED " + time);

				break;
		}
		
	}

	this.move = function(xa, ya){
		if(xa != 0 && ya != 0){
			this.move(xa, 0);
			this.move(0, ya);
			return;
		}

		if(this.can_pass(xa, ya)){
			this.x += xa;
			this.y += ya;
		}
	}

	this.can_pass = function(xa, ya){
		var x0 = this.x + 30 + xa;
		var x1 = this.x + tw - 40 + xa;
		var y0 = this.y + th / 4 + ya;
		var y1 = this.y + th + ya;

		// context.fillStyle = "#ff0000";
		// context.fillRect(x0 - camera.x, y0 - camera.y, 5, 5);
		// context.fillRect(x1 - camera.x, y0 - camera.y, 5, 5);
		// context.fillRect(x0 - camera.x, y1 - camera.y, 5, 5);
		// context.fillRect(x1 - camera.x, y1 - camera.y, 5, 5);

		for(var i = 0; i < blocks.length; i++){
			if(blocks[i] != null){
				if(x0 < blocks[i].x1 && x1 > blocks[i].x0 &&
			   	y0 < blocks[i].y1 && y1 > blocks[i].y0){
			   		this.xa = 0;
					return false;	
				} 
			}
		}

		return true;
	}

	this.on_ground = function(ya){
		var x0 = this.x + tw / 2;
		var y0 = this.y + th + ya + 1;

		for(var i = 0; i < blocks.length; i++){
			if(blocks[i] != null){
				if(x0 < blocks[i].x1 && x0 > blocks[i].x0 &&
			   	y0 < blocks[i].y1 && y0 > blocks[i].y0) return true;
			}
		}
		return false;
	}

	this.draw_image = function(source, x, y, w, h, tx, ty, tw, th){
	    context.drawImage(img, tx, ty, w, h, x, y, tw, th);
		img.src = source;
	}
}


function Roopa(x, y){

	this.removed = false;
	this.x = x;
	this.y = y;
	this.xa = 0;
	this.ya = 0;

	var img = new Image();
	var time = 0;
	var del = 5;
	var speed = 3;
	var speed_cap = 12;

	var PATH = "res/tex/walk_animation_roopa.png";
	
	var current_file = PATH;

	var left = false;
	var right = true;

	var tw = grid_size;
	var th = grid_size;
	var grounded = false;
	var grav_acc = 0.98;
	var gravity = grav_acc;

	this.update = function(){
		time++;
		time %= del * 5;

		grounded = this.on_ground(this.ya);

		if(grounded) {
			this.ya = -10;
		} else {
			this.ya += gravity;
			if(this.ya > absolute_vel) this.ya = absolute_vel;
		}

		if(left) this.xa = -speed;
		if(right) this.xa = speed;
		//if(!this.check_ground(this.xa)) this.xa = -this.xa;

		if(this.xa < -speed_cap) this.xa = -speed_cap;
		if(this.xa > speed_cap) this.xa = speed_cap;

		// console.log(grounded);

		this.move(this.xa, this.ya);
	}

	this.render = function(){
		var xx = this.x - camera.x;
		var yy = this.y - camera.y;

		if(time < (del * 5) / 2)
			this.draw_image(current_file, xx, yy, 16, 16, 0, 0, tw, th);
		else 
			this.draw_image(current_file, xx, yy, 16, 16, 16, 0, tw, th);

	}

	this.move = function(xa, ya){
		if(xa != 0 && ya != 0){
			this.move(xa, 0);
			this.move(0, ya);
			return;
		}

		if(this.can_pass(xa, ya)){
			this.x += xa;
			this.y += ya;
		}
	}

	this.can_pass = function(xa, ya){
		var x0 = this.x + tw / 4 + xa;
		var x1 = this.x + tw - tw / 4 + xa;
		var y0 = this.y + th / 4 + ya;
		var y1 = this.y + th + ya - 10;

		for(var i = 0; i < blocks.length; i++){
			if(blocks[i] != null){
				if(x0 < blocks[i].x1 && x1 > blocks[i].x0 &&
			   	y0 < blocks[i].y1 && y1 > blocks[i].y0){
			   		if(left) {
			   			left = false;
			   			right = true;
			   		} else if(right) {
			   			right = false;
			   			left = true;
			   		}
					return false;	
				} 
			}
		}

		return true;
	}

	this.on_ground = function(ya){
		var x0 = this.x + tw / 2;
		var y0 = this.y + th + ya + 2;

		context.fillStyle = "#ff0000";
		context.fillRect(x0 - camera.x, y0 - camera.y, 5, 5);

		for(var i = 0; i < blocks.length; i++){
			if(blocks[i] != null){
				if(x0 < blocks[i].x1 && x0 > blocks[i].x0 &&
			   	y0 < blocks[i].y1 && y0 > blocks[i].y0) return true;
			}
		}
		return false;
	}

	this.check_ground = function(xa){

		var xx;
		if(xa > 0)
			xx = this.x + tw + 5 + xa;
		else if(xa < 0)
			xx = this.x - 5 + xa;

		var yy = this.y + th + th / 2;
		var tx = Math.floor(xx / grid_size);
		var ty = Math.floor(yy / grid_size);

		for(var i = 0; i < blocks.length; i++){
			if(blocks[tx + ty * w] == null) return false;
		}

		return true;
	}

	this.draw_image = function(source, x, y, w, h, tx, ty, tw, th){
		img.src = source;
	    context.drawImage(img, tx, ty, w, h, x, y, tw, th);
	}

}

function Block(id, x, y, path){

	var img = new Image();
	var id = id;
	var tw = grid_size;
	var th = grid_size;
	this.x = x;
	this.y = y;
	var tx = Math.floor(this.x / grid_size);
	var ty = Math.floor(this.y / grid_size);
	this.x0 = this.x;
	this.x1 = this.x + tw;
	this.y0 = this.y;
	this.y1 = this.y + th;

	this.render = function(){
		var xx = this.x - camera.x;
		var yy = this.y - camera.y;
		var x1 = this.x1 - camera.x;
		var y1 = this.y1 - camera.y;

		var u = blocks[tx + (ty - 1) * w] == null;
		var d = blocks[tx + (ty + 1) * w] == null;
		var r = blocks[(tx + 1) + ty * w] == null;
		var l = blocks[(tx - 1) + ty * w] == null;

		this.draw_image(path, xx, yy, 16, 16, 0, 0, tw, th);

		if(u) this.draw_image(path, xx, yy - th + 2, 16, 16, 16, 0, tw, th);	
		if(d) this.draw_image(path, xx, y1 - 2, 16, 16, 48 + 16, 0, tw, th);	
		if(l) this.draw_image(path, xx - tw + 2, yy, 16, 16, 48, 0, tw, th);	
		if(r) this.draw_image(path, x1 - 2, yy, 16, 16, 32, 0, tw, th);	

	}

	this.draw_image = function(source, x, y, w, h, tx, ty, tw, th){
	    context.drawImage(img, tx, ty, w, h, x, y, tw, th);
		img.src = source;
	}
}


function Camera(){
	this.x = 0;
	this.y = 0;

	this.update = function(){
		this.x = player.x - canvas.width / 2;
		this.y = player.y - canvas.height / 2;
	}

}

function Vector2(x, y){
	this.x = x;
	this.y = y;
}