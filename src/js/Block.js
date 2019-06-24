class Block {
    constructor() {
        this.size = 0;
        this.position = 0;
        this.moveToLeft = true;
        this.colorOffset = 0;
        this.block = document.querySelector(".block");
    }

    getRandomBackground() {
        const chars = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += chars[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    renderBlock() {
        this.size = this.position / 10;
        this.block.style.height = `${this.size}vw`;
        this.block.style.width = `${this.size}vw`;
        this.block.style.left = `${this.position}%`
        let nextColorOffset = (Math.round(this.block.offsetLeft / 50) * 50);
        if (this.colorOffset !== nextColorOffset) {
            this.colorOffset = nextColorOffset;
            this.block.style.background = this.getRandomBackground();
        }
    }
}

export default Block;