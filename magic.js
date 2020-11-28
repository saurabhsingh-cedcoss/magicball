
var userName = " ";

var userQues = ["will you be fired from ur current company?", "will you die this year?", "will you receive a good news today?", "will you get to jail?", "can you ever go to any foreign country?", "will you get your lover this month?", "will you survive above 50 yers?", "will you found a good job?"];

var userAns = ["It is certain.", "Don’t count on it.", "It is decidedly so.", "Ask again later.", "	My reply is no.", "Without a doubt.", "	Better not tell you now.", "	My sources say no.", "Yes – definitely.", "Cannot predict now.", "	Outlook not so good.", "You may rely on it.", "	Concentrate and ask again.", "Very doubtful.", "As I see it,yes.", "Most likely.", "Outlook good.Yes.", "Signs point to yes."];
var btn = 0;
var quesNo = 0;

function welcome() {
    document.getElementById('block').style.display = "none";

    userName = document.getElementById('userName').value;
    console.log("welcome " + userName);
    if (btn == 0) {
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("CONTINUE");
        x.setAttribute("onClick", "askQues()");
        x.setAttribute("id", "wel");
        x.appendChild(t);
       var con= document.querySelector('.con');
       con.appendChild(x);
        btn++;
        var x2 = document.createElement("BUTTON");
        var t2 = document.createTextNode("quit");
        x2.setAttribute("onClick", "location.href='thanks.html'");
        x2.setAttribute("id", "quit");
        x2.appendChild(t2);
        con.appendChild(x2);
        // document.querySelector('.container').style.backgroundImage = " url('wow.jpeg')";
        document.querySelector('.container').style.backgroundSize = "1400px 700px";
        document.getElementById('s1').innerHTML = "welcome " + userName;
        document.getElementById('s2').innerHTML = "press continue to get next question !!! ";
    }
}
function askQues() {

    if (quesNo < userQues.length) {

        document.getElementById('s1').innerHTML = userQues[quesNo];

        document.getElementById('s2').innerHTML = " ";
        document.querySelector('.container').style.backgroundImage = " url('loading.gif')";
        document.querySelector('.container').classList.add("shake-slow");
        // document.querySelector('.container').style.backgroundSize = "1300px 800px";
        document.querySelector('.new').style.backgroundImage = "url('magic.gif')";
        document.querySelector('#wel').style.display = "none";
        setTimeout(() => { document.getElementById('s2').innerHTML = randomAnswer(); }, 4000);
        setTimeout(() => { document.querySelector('.container').style.backgroundImage = " url('wow3.jpeg')"; }, 4000);
        setTimeout(() => { document.querySelector('.new').style.backgroundImage = " url('magic.gif')"; }, 4000);
        setTimeout(() => { document.querySelector('#wel').style.display = "block"; }, 4000);
        setTimeout(() => { document.querySelector('.container').classList.remove("shake-slow"); }, 4000);
        // x1.setAttribute("onClick", "askQues()");
        console.log(userQues[quesNo]);
        console.log(randomAnswer());
        quesNo++;
    }
}
function randomAnswer() {
    var randNo = Math.floor(Math.random() * 18);
    return userAns[randNo];
}
function open() {
    window.href('thanks.html');
}