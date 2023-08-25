const Board = require("./Board")
const Player = require("./Player")

class Game {
    #player1
    #player2
    #board
    #isGameover
    #turn
    constructor(player1, player2, board) {
        this.#player1 = player1
        this.#player2 = player2
        this.#board = board
        this.#isGameover = false
        this.#turn = 0
    }
    static Gamestart(player1Name, player2Name) {
        try {
            
            let player1 = new Player(player1Name, 'X')
            let player2 = new Player(player2Name, 'O')
            let board = new Board()
            if (player1Name == player2Name || typeof player1.name != 'string' || typeof player2.name != 'string') {
                throw new Error('Enter valid string')
            }
            return ['object created', new Game(player1, player2, board)]
        } catch (error) {
            console.log(error.message);
        }
    }

    play(cellNumber) {

        try {
            
            if (this.#isGameover) {
                return 'Game over'
            }
            if (typeof cellNumber != 'number' || cellNumber < 0 || cellNumber > 8) { //validation of checknumber
    
                throw new Error("The cellNumber is not present in the cell")
            }
            let isaCellEmpty = this.#board.isEmpty(cellNumber)
    
            if (!isaCellEmpty) {
                return 'Cell is marked'
            }
    
            let presentPlayer
            if (this.#turn % 2 == 0) {
                presentPlayer = this.#player1
            }
            else {
                presentPlayer = this.#player2
            }
    
            presentPlayer.markCell(this.#board.cells[cellNumber])
    
            this.#turn++;
            this.#board.PrintBoard()
    
            if (this.#board.isWinner()) {
                this.#isGameover = true
                return `${presentPlayer.name} is the  winner`
            }
            if (this.#board.isDraw()) {
                this.#isGameover = true
                return "Its a Draw"
            }
            return 'Continue Playing'
        } catch (error) {
            console.log(error.message);
        }

    }

}
module.exports = Game

