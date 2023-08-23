class Player{

    constructor(name, symbol){
        this.name=name
        this.symbol=symbol
    }

    markCell(x){
        x.markCell(this.symbol) 
    }

    
}

module.exports=Player