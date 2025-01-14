class Example extends InteractiveBox {

    #points = []
    #counter = 0

    constructor(name, container, height, width) {
        super(name, container, height, width)

        this.setPoints(this.#getDefaultPath());;
    }

    onTimeTravel(value) {
        this.#counter = value * this.#points.length | 0;
    }

    setPoints(points) {
        this.#counter = 0;
        this.#points = points;
    };

    draw(ctx) {
        if (this.#points.length < 2)
            return;

        this.clearCanvas();
        
        this.setTime(this.#counter++ / (this.#points.length - 1));
        if (this.#counter > this.#points.length) {
            this.#counter = 0;
        }

        ctx.beginPath();
        ctx.lineWidth = 2.0;
        ctx.strokeStyle = 'red';
        ctx.moveTo(this.#points[0].x, this.#points[0].y);
        for (var i = 1; i < this.#counter; i++) {
            ctx.lineTo(this.#points[i].x, this.#points[i].y);
        }
        ctx.stroke();
    };

    #getDefaultPath() {
        var circle = [];
        for (var i = 0; i < 100; i++) {
            circle[i] = {
                x: 250 + 50 * Math.cos(Math.PI * 2 / 100 * i),
                y: 250 + 50 * Math.sin(Math.PI * 2 / 100 * i)
            }
        }
        return circle;
    }

}