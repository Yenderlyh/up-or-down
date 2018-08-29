'use strict';
function Game() {
    var self = this;
    self.onGameOverCallback = null;
    self.score = 0;
    self.timeLeft = null;
    self.cards = [1,2,5,7,8,13,6,12,3];
    self.step = null;
}

Game.prototype.start = function () {
    self.gameMain = buildDom(`
        <main>
            <header>
                <div class = "top">
                    <div class="score">
                        <span class="label"> Score: <span class="value">203</span> </span> 
                    </div>
                    <div class="timer">
                        <span class = "lab">Time left: <span class="value">3</span></span> 
                    </div>
                </div>
            </header>
            <div class="deck">
                <div class="current-card">5</div>
                <div class="actions">
                    <button class="up">up</button>
                    <button class= "down">down</button>
                </div>
                <div class="next-card">?</div>
            </div>
            <footer>
                <p>
                    <span class="label">Step:</span>
                    <span class="step-no">1</span> / <span class="total-steps">51</span>
                </p>
          </footer>

        </main>
`   );
self.currentCardElement = self.gameMain.querySelector ('.currentCard')
    document.body.appendChild (self.gameMain);
    window.setTimeout(function() {
        self.onGameOverCallback();
    },3000)
}    
   
Game.prototype.onOver = function () {
   var self = this;

   this.onGameOverCallback= callback;
}

Game.prototype.destroy = function() {
    var self=this;
    this.gameMain.remove();
}