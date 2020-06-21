var Colors = {
    black: function () { fill(0, 0, 0) },
    null: function () { fill(150); },
    funcFor: function () { fill(100, 100, 10); }
}

function copyFunc(funcBlock){
    var anofuncBlock=funcBlock;
    return anofuncBlock;
}

class FuncBlock {
    size = functSize;
    width = this.size;
    height = this.size;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    color = Colors.black;

    change(funcBlock){
        let tx=this.x;
        let ty=this.y;

        Object.assign(this,funcBlock);
        this.x=tx;
        this.y=ty;
    }

    draw() {
        push();
        
        this.color();
        stroke(0.1);
        rect(this.x, this.y, this.size, this.size);
        pop();
    }
}

class FuncNull extends FuncBlock {
    color = Colors.null;
}

class FuncFor extends FuncBlock {
    color = Colors.funcFor;
}