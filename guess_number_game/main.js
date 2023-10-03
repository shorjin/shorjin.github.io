console.log('project 3 js connected');
let history = [];

function myFunction() {
    document.getElementById("myForm").reset();
}

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let remain = 10;
let list = document.getElementById("myList");
let highscore = 0;

document.getElementById("check").onclick = function () {
    const number = document.getElementById("number").value;
    const messagebox = document.getElementById("message");
    const score = document.getElementById("score");
    const hscore = document.getElementById("hscore");

    if (answer < number && remain > 1 && number >= 1 && number <= 100) {
        messagebox.innerHTML = `<p>Your Guess is too High</p>`;
        remain--;
        score.innerHTML = `<p>Score:${remain}</p>`;
        history.push(number);
        let li = document.createElement("li");
        li.innerText = `• ${number}`;
        list.appendChild(li);
    } else if (answer > number && remain > 1 && number >= 1 && number <= 100) {
        messagebox.innerHTML = `<p>Your Guess is too Low</p>`;
        remain--;
        score.innerHTML = `<p>Score:${remain}</p>`;
        history.push(number);
        let li = document.createElement("li");
        li.innerText = `• ${number}`;
        list.appendChild(li);
    } else if (answer == number && remain > 1) {
        document.getElementById("myDiv").style.backgroundColor = "#66CDAA";
        document.getElementById('myImage').src = "win.png";
        document.getElementById('number').value = '';
        document.getElementById('number').placeholder = 'Please input your name!';
        document.getElementById('check').textContent = 'Submit';
        document.getElementById('message').style.position = "relative";
        document.getElementById('check').style = "position:relative; left:0%; top:1%; padding:1%";
        messagebox.innerHTML = `<p style="color:black;"><strong>Congratulations!</strong></p>
        <p style="color:black;">Your guess was correct, <strong>${answer}</strong> is my secret number</p>
        <p style="color:black;"><strong>Your Score: ${remain}</strong></p>`;
        document.getElementById('check').onclick = function () {
            location.href = 'thankyou.html';
        }
    } else if (remain === 1) {
        remain--;
        document.getElementById('myImage').src = "lose.png";
        document.getElementById("number").style.display = "none";
        messagebox.innerHTML = `<p style="color:blue;"><strong>Unfortunately You Lost the Game</strong></p>
        <p style="color:DarkSlateGray;">Don't give up and Try Again. You can win next time.</p>
        <div style="color:DarkSlateGray;font-size:20px;">My number was: <strong>${answer}</strong></div>`;
        score.innerHTML = `<p>Score:${remain}</p>`;
        document.getElementById('check').textContent = 'Try Again';
        document.getElementById('message').style.position = "relative";
        document.getElementById('message').style.marginBottom = "20px"; // Add margin to the bottom
        document.getElementById('check').style.position = "relative";
        document.getElementById('check').style.marginTop = "10px"; // Adjust margin-top
        document.getElementById('check').style.padding = "10px 20px"; // Adjust padding
        document.getElementById('check').onclick = function () {
            location.reload();
        }
        history.push(number);
        let li = document.createElement("li");
        li.innerText = `• ${number}`;
        list.appendChild(li);
    } else {
        messagebox.innerHTML = `<p style="color:white;"><strong>You can only enter numbers between 1 and 100</strong></p>`;
    }
    console.log(history);
}