class column {
    col: number
    three: game.LedSprite
    two: game.LedSprite
    one: game.LedSprite
    zero: game.LedSprite
    constructor(theCol: number) {
        this.col = theCol
        this.three = null
        this.two = null
        this.one = null
        this.zero = null
    }
    //displays the current count in the column in binary
    disp(time: number): void {
        if (time > 7) {
            this.three = game.createSprite(this.col, 1)
            //calls the function again to display any remaining
            //binary digits
            this.disp(time -= 8)
        } else if (time > 3) {
            this.two = game.createSprite(this.col, 2)
            this.disp(time -= 4)
        } else if (time > 1) {
            this.one = game.createSprite(this.col, 3)
            this.disp(time -= 2)
        } else if (time == 1) {
            this.zero = game.createSprite(this.col, 4)
        }
    }
    //clears any sprites that are displayed
    clrScr(): void {
        if (this.zero) this.zero.delete()
        if (this.one) this.one.delete()
        if (this.two) this.two.delete()
        if (this.three) this.three.delete()
    }
}
/* Error 84
function colon(): void {
    let cTop: game.LedSprite = game.createSprite(2, 1)
    let cBot: game.LedSprite = game.createSprite(2, 3)
    cTop.setBlink(1)
    cBot.setBlink(1)
}*/

basic.forever(function () {
    //call the colon function
    //colon()
    //Instantiate the column objects
    let min2 = new column(0)
    let min1 = new column(1)
    let sec2 = new column(3)
    let sec1 = new column(4)

    input.onButtonPressed(Button.B, function () {
        //Iterate through seconds and minutes, calling each column object
        for (let i: number = 0; i < 10; i++) {
            min2.disp(i)
            for (let j: number = 0; j < 10; j++) {
                min1.disp(j)
                for (let k: number = 0; k < 6; k++) {
                    sec2.disp(k)
                    for (let l: number = 0; l < 10; l++) {
                        sec1.disp(l)
                        basic.pause(1000)
                        sec1.clrScr()
                    }
                    sec2.clrScr()
                }
                min1.clrScr()
            }
            min2.clrScr()
        }
    })
    /*
    input.onButtonPressed(Button.A, function () {
        if (game.isRunning) {
            game.pause()
        } else {
            game.resume()
        }
    })*/
})
