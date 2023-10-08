document.addEventListener('DOMContentLoaded', function() {
    function playGame() {
        const randomNum1 = Math.floor(Math.random() * 3) + 1;
        const randomNum2 = Math.floor(Math.random() * 3) + 1;

        document.getElementById('player1').setAttribute('src', getImagePath(randomNum1));
        document.getElementById('player2').setAttribute('src', getImagePath(randomNum2));

        updateResult(randomNum1, randomNum2);
    }

    function getImagePath(number) {
        switch (number) {
            case 1:
                return 'images/rock.png';
            case 2:
                return 'images/scissor.png';
            case 3:
                return 'images/paper.png';
            default:
                return '';
        }
    }

    function updateResult(num1, num2) {
        const resultElement = document.getElementById('result');
        if (num1 === num2) {
            resultElement.innerText = 'It\'s a tie!';
        } else if ((num1 === 1 && num2 === 2) || (num1 === 2 && num2 === 3) || (num1 === 3 && num2 === 1)) {
            resultElement.innerText = 'Player 1 wins!';
        } else {
            resultElement.innerText = 'Player 2 wins!';
        }
    }

    // You can add more functions or code here if needed.
});
