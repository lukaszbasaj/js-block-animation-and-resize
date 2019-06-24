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
}

export default Block;