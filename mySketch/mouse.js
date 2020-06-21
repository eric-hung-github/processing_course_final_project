class Mouse {
    x;
    y;
    block = null;

    update() {
        //console.log(this.block)
        this.x = mouseX;
        this.y = mouseY;
        if (this.block != null) {
            this.block.x = this.x - functSize / 2;
            this.block.y = this.y - functSize / 2;
            this.block.draw();
        }
    }

    press() {
        
        var gettedBlock = this.getBlock(gridss);
        if (gettedBlock == null) {
            gettedBlock = this.getBlock(toolsBlock);
        }

        this.block = Object.assign( Object.create( Object.getPrototypeOf(gettedBlock)), gettedBlock)
        //gettedBlock.change(Object.create(FuncBlock))
        //Object.assign(gettedBlock,Object.create( FuncBlock));
        //console.log("get", this.block);
    }

    release() {
        //console.log("release", this.block);
        let gettedBlock = this.getBlock(gridss);

        if (gettedBlock == null) {
            gettedBlock = this.getBlock(toolsBlock);
        }

        if (this.block != null && gettedBlock != null) {
            //console.log("change");
            gettedBlock.change(this.block);
        }
        delete this.block;
    }

    getBlock(blockss) {
        for (let i = 0; i < blockss.length; i++) {
            const blocks = blockss[i];
            for (let j = 0; j < blocks.length; j++) {
                const block = blocks[j];
                if (this.isGetThisBlock(blockss[i][j])) return blockss[i][j];
            }
        }
        return null;
    }

    isGetThisBlock(FuncBlock) {
        if (FuncBlock.x < this.x && FuncBlock.x + FuncBlock.width > this.x && FuncBlock.y < this.y && FuncBlock.y + FuncBlock.width > this.y) {
            return true;
        } else return false;
    }



};


