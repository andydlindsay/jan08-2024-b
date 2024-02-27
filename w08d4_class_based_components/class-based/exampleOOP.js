class Rectangle {

	constructor(length, width){
		console.log(`the constructor is running: length=${length} width=${width}`);
		this.length = length;
		this.width = width;	
	}

	area(){
		return this.length * this.width;
	}

}

const r1 = new Rectangle(3, 4);
console.log('r1', r1);

console.log('r1.area()', r1.area());


class ShoeBox extends Rectangle {

	constructor(length, width, depth){
		super(length, width);
		this.depth = depth;
	}

	volume(){
		return this.area() * this.depth;		
	}

}

const v1 = new ShoeBox(3, 4, 5);
console.log('v1', v1);
console.log('v1.volume()', v1.volume());
console.log('v1.area()', v1.area());
