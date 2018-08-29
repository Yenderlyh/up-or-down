'use strict';
function buildDom(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
  }
function main(){
    var splashMain;
    var gameOverMain;
    var game; // instance of Game

    //splash
    
    function buildSplash() {
        splashMain = buildDom(`
        <main>
            <h1>Up or Down<h1>
            <button>Start</button>
        </main>
        `);
        document.body.appendChild(splashMain);
        splashMain.querySelector('button').addEventListener('click',startGame)
    }

    function destroySplash() {
        splashMain.remove()
    }
    //game

    function startGame() {
        destroySplash();
        destroyGameOver();

        game = new Game();
        game.start();

        window.setTimeout(function () {
            gameOver();
        },3000)
    }

    function destroyGame(){
        game.destroy();
    }

    //gameover
    function gameOver() {
        destroyGame();
        buildGameOver();
    }

    function buildGameOver(){
        var score=99;

        gameOverMain = buildDom (`
            <main>
                <h1>Game Over<h1>
                <p> your score: 99<p>
                <button>Restart</button>
            </main>
        `)
        gameOverMain.addEventListener('click',startGame);

        document.body.appendChild(gameOverMain);
    }

    function destroyGameOver() {
        if (gameOverMain) {
            gameOverMain.remove();
        }
    }

    //initialize

    buildSplash()   
    
    

}

window.addEventListener('load', main)
