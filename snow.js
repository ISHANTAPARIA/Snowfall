class snow {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: false
        }
        this.r = 1;
        this.body = Bodies.circle(x, y, this.r, options);

        this.image = loadImage("snow5 .png");


    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        image(this.image, this.body.position.x, this.body.position.y);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }

};