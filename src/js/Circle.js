class Circle {
    constructor(animation) {
        this.canvas = animation.canvas
        this.ctx = animation.ctx
        this.mouse = animation.mouse
        this.radius = 5 + Math.random() * 6
        this.speed = {x: -2 + (Math.random()*5), y: -2 + (Math.random()*4)}
        this.position = {
            x:this.radius + Math.random() * (this.canvas.width - 2 * this.radius),
            y:this.radius + Math.random() * (this.canvas.height - 2 * this.radius)
        }
        this.color = Circle.colors.sort(() => 0.5 - Math.random())[0]
        this.minRadius = this.radius
    }
    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        this.ctx.fill()
    }
    update() {
        //Checking edges
        if(this.position.y + this.radius > this.canvas.height || this.position.y - this.radius < 0) {
            this.speed.y = -this.speed.y
        }
        if(this.position.x + this.radius > this.canvas.width || this.position.x - this.radius < 0) {
            this.speed.x = -this.speed.x
        }
        this.position.y += this.speed.y
        this.position.x += this.speed.x
        //Interact with the mouse
        if (this.position.x >= this.mouse.x - this.mouse.zoneSize/2 &&
            this.position.x <= this.mouse.x + this.mouse.zoneSize/2 &&
            this.position.y >= this.mouse.y - this.mouse.zoneSize/2 &&
            this.position.y <= this.mouse.y + this.mouse.zoneSize/2) {
            if (this.radius < Circle.maxRadius) {
                this.radius += 1
            }
        } else if(this.radius > this.minRadius) {
            this.radius -= 1
        }

        this.draw()
    }
    static get colors() {
        return ['#9C7785','#474457','#DFCDDD','#E8B452','#D6384F']
    }
    static get maxRadius() {
        return 30
    }


}

export default Circle