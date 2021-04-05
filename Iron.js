class Iron{
	constructor(x,y,r)
	{
		var options = {
			'density':30,
			'friction':3,
			'restitution':0.8
		  };
	// assign options to the stone ball
		this.x=x;
		this.y=y;
		this.r=r
        this.body = Bodies.rectangle(x, y, 50, 50, options);
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");

			pop()
	}

}