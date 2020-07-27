// Anonymus Function or private function in javascript
(function () {
    function Question (question, answer, correctAnswer) {
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.printQuestion = function () {
        console.log(this.question);
        for (var i=0; i<this.answer.length;i++) {
            console.log(i + ':' + this.answer[i]);
        }
    }

    Question.prototype.correctAns = function (answer, callback) {
        if (answer === this.correctAnswer) {
            console.log('Correct answer');
            sc = callback(true);
        } else {
            console.log('Wrong Answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (sc) {
        console.log('score is: ' + sc);
        console.log('---------------------------')
    }

    var q1 = new Question('What is my name?', ['Aditya', 'John', 'James'], 0);

    var q2 = new Question('What is my job?', ['Developer', 'UI'], 0);

    questions = [q1, q2];

    function score () {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    while (true) {
        randomQuestion = questions[Math.floor(Math.random()*questions.length)];

        randomQuestion.printQuestion();

        var answer = prompt('Choose the correct answer!');

        if (answer !== 'exit') {
            randomQuestion.correctAns(parseInt(answer), keepScore);
        } else {
            break;
        }

    }

})();