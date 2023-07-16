(function(){
    "use strict"
    const gameControl = document.getElementById("gamecontrol");
    const startGame = document.getElementById("startgame");
    const game = document.getElementById("game");
    const actions = document.getElementById("actions");
    const score =document.getElementById("score");
    
    let data = {
        dice: ["1die.jpg", "2die.jpg", "3die.jpg",
        "4die.jpg","5die.jpg","6die.jpg"],
        players: ['player1', 'player2'],
        index: 0,
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        scores: [0, 0],
        gameEnd: 51,
        color: ["#99b3ff", "#ffcc99"]
    }

    data.players[0]= prompt("Please enter your name as plyer 1")
    data.players[1]= prompt("Please enter your name as plyer 2")

    startGame.addEventListener("click", function(){
        gameControl.innerHTML = "<p>The Game Has Started</p>";

        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';


        document.getElementById("quit").addEventListener("click", function(){
            location.reload();
        });

        setReturn();



    });

    data.index = Math.round(Math.random());


        function setReturn(){

        game.innerHTML = `<p>Roll the dice for the ${data.players[data.index]}</p>`;    
        
        actions.innerHTML = '<button id="roll">Roll the Dice</button>';
        
        document.getElementById("roll").addEventListener("click",function(){
            console.log("set turn ! ");
            throwDice();
            checkWinning();

        })

    };

    function throwDice(){
        actions.innerHTML = "";

        data.roll1 = Math.floor(Math.random() * 6) + 1;
        data.roll2 = Math.floor(Math.random() * 6) + 1;

        game.innerHTML = `<p>Roll the dice for the ${data.players[data.index]}</p>`;    
        game.innerHTML += `<img src= '${data.dice[data.roll1 - 1]}' alt="roll1">`;
        game.innerHTML += `<img src= '${data.dice[data.roll2 - 1]}' alt="roll">`;
        
        data.rollSum = data.roll1 +  data.roll2;


        if (data.rollSum === 2){
            game.innerHTML += `<p>Oh snap! Snake eyes!</p>`;  
            game.style.background = "#ff6666";

            data.scores[data.index] = 0
            data.index ? (data.index = 0):(data.index = 1);
            setTimeout(setReturn, 2000);
            checkWinning();


        }else if (data.roll1 === 1 | data.roll2 === 1){
            data.index ? (data.index = 0):(data.index = 1);

            game.innerHTML += `<p>Sorry one of your rolls was a one, swithching to ${data.players[data.index]} </p>`;
            setTimeout(setReturn, 2000);
            checkWinning();


        }else{
            data.scores[data.index] = data.scores[data.index]+ data.rollSum;
            actions.innerHTML = '<button id="rollagain">Roll agian</button><button id="pass">Pass</button>';

            document.getElementById("rollagain").addEventListener("click", function(){

                throwDice();
                checkWinning();

            });

            document.getElementById("pass").addEventListener("click", function(){
                data.index ? (data.index = 0):(data.index = 1);
                throwDice();
                checkWinning();



            });
    };
    
    };

    
    function checkWinning(){
        if (data.scores[data.index] > data.gameEnd){
            document.getElementById("quit").innerHTML = "Start a new Game?";
            actions.innerHTML = "";
            game.innerHTML = `<h5> congratulation ${data.players[data.index]} </h5> <canvas id="canvas"></canvas>`;
            celebrate();
            score.innerHTML = `<h2>${data.players[data.index]} wins With ${data.scores[data.index]} points!</h2>`;
        }else{
            score.innerHTML = `<p>The Score is currently <strong> ${data.players[0]} ${data.scores[0]}</strong> and <strong> ${data.players[1]} ${data.scores[1]}</strong></p>`;

        };
    };

    function showpoints(){
        score.innerHTML = `<p>The Score is currently <strong> ${data.players[0]} ${data.scores[0]}</strong> and <strong> ${data.players[1]} ${data.scores[1]}</strong></p>`;

    };

    function celebrate(){
        let W = window.innerWidth;
            let H = window.innerHeight;
            const canvas = document.getElementById("canvas");
            const context = canvas.getContext("2d");
            const maxConfettis = 150;
            const particles = [];

            const possibleColors = [
            "DodgerBlue",
            "OliveDrab",
            "Gold",
            "Pink",
            "SlateBlue",
            "LightBlue",
            "Gold",
            "Violet",
            "PaleGreen",
            "SteelBlue",
            "SandyBrown",
            "Chocolate",
            "Crimson"
            ];

            function randomFromTo(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
            }

            function confettiParticle() {
            this.x = Math.random() * W; // x
            this.y = Math.random() * H - H; // y
            this.r = randomFromTo(11, 33); // radius
            this.d = Math.random() * maxConfettis + 11;
            this.color =
                possibleColors[Math.floor(Math.random() * possibleColors.length)];
            this.tilt = Math.floor(Math.random() * 33) - 11;
            this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
            this.tiltAngle = 0;

            this.draw = function() {
                context.beginPath();
                context.lineWidth = this.r / 2;
                context.strokeStyle = this.color;
                context.moveTo(this.x + this.tilt + this.r / 3, this.y);
                context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
                return context.stroke();
            };
            }

            function Draw() {
            const results = [];

            // Magical recursive functional love
            requestAnimationFrame(Draw);

            context.clearRect(0, 0, W, window.innerHeight);

            for (var i = 0; i < maxConfettis; i++) {
                results.push(particles[i].draw());
            }

            let particle = {};
            let remainingFlakes = 0;
            for (var i = 0; i < maxConfettis; i++) {
                particle = particles[i];

                particle.tiltAngle += particle.tiltAngleIncremental;
                particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
                particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

                if (particle.y <= H) remainingFlakes++;

                // If a confetti has fluttered out of view,
                // bring it back to above the viewport and let if re-fall.
                if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
                particle.x = Math.random() * W;
                particle.y = -30;
                particle.tilt = Math.floor(Math.random() * 10) - 20;
                }
            }

            return results;
            }

            window.addEventListener(
            "resize",
            function() {
                W = window.innerWidth;
                H = window.innerHeight;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            },
            false
            );

            // Push new confetti objects to `particles[]`
            for (var i = 0; i < maxConfettis; i++) {
            particles.push(new confettiParticle());
            }

            // Initialize
            canvas.width = W;
            canvas.height = H;
            Draw();
    }
})();