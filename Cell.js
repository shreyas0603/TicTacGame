class Cell{

    constructor(){
       this.mark='E'
    }

    isEmpty(){
        return this.mark=='E'
    }

    markCell(symbol){
       return this.mark=symbol
    }

    getMark(){
        return this.mark  
    }

}


module.exports = Cell