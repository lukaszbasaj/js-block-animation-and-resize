class Block {
    constructor() {
        this.size = 0;
        this.position = 0;
        this.moveToLeft = true;
        this.colorOffset = 0;
        this.block = document.querySelector(".block");
    }
}

export default Block;