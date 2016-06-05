
var bankValue = 10;
var guess = [];





//Check bank value, if >=2, proceed. Else, insult broke player. 
function bankCheck() {
    if (bankValue < 2) {
        document.getElementById("message").innerHTML += '<h3 style="color:red">I got 99 problems, and clearly your net-worth is one... No money, no play</h3>';
    } else {
        console.log("good to go, bank is full");
        document.getElementById("message").innerHTML = "Game On!";
        checkInput();
    }
    drawNums();
}


//Check if any input field is blank
function checkInput() {
    for (i = 1; i <= 4; i++) {
        var inputnow = "input" + i;
        //console.log(inputnow);
        var newNum = document.getElementById(inputnow).value;
        console.log(newNum);
        if (newNum.length < 1 || newNum == undefined) {
            document.getElementById("message").innerHTML += "<p>Hey, you forgot to enter a number. You might do that before I just decide to keep your money and tell you to go away</p>";
        } else {
            console.log("checking number" + newNum);
            checkNum(newNum);
        }
    }
}


//Check if type is integer and in range 1-10, check if it's unique and style red border around duplicate
function checkNum(x) {

    var arrayLength = guess.length;
    var nomatch = true;
    if (x > 0 && x < 11 && (x % 1 === 0)) {
        if (guess.length < 1) {
            match = true;
            console.log("First number " + guess);
        } else {
            for (i = 0; i <= arrayLength; i++) {
                if (guess[i] === x) {
                    document.getElementById("message").innerHTML += "<p>Oops! Duplicate numbers! Try again!</p>";
                    match = false;
                    break;
                }
            }
        }
    }

    if (match) {
        console.log("no match so pushing: ",x)
        guess.push(x);

    }

}

// end of checknum function




//Draw 4 random numbers and append to draw array. Use Math.random for numbers in nums array, then remove number at that index. Loop 4 times.

function drawNums() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var drawResult = [];
    for (i = 0; i < 4; i++) {
        var draw = Math.floor(Math.random() * nums.length);
        //console.log(draw);
        drawResult[i] = nums[draw];
        nums.splice(draw, 1);
    }
    console.log(drawResult);
    compareNums(drawResult, guess);
}



//compare the guess to the draw

function compareNums(x, y) {
    var numMatches = 0;
    for (i = 0; i < 4; i++) {
        var a = y[i];
        console.log("Your guess: " + a);
        for (j = 0; j < 4; j++) {
            console.log("The draw: " + x[j]);
            if (a == x[j]) {
                console.log("A match!");
                numMatches++;
                break;
            }
        }
    }
    console.log("Your matches: " + numMatches);
    console.log(x);
    calcMoney(numMatches);
}


//calc the money
function calcMoney(theMatches) {
    bankValue = bankValue - 2 + (Math.pow(2, theMatches));
    console.log("You new Bank value is: " + bankValue);
    guess = [];

}
