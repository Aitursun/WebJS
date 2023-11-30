document.addEventListener("DOMContentLoaded", function () {
    const parentBlock = document.querySelector('.parent_block');
    const childBlock = document.querySelector('.child_block');

    let positionX = 0;
    let positionY = 0;
    let interval;
    let moveDirection = 'right';

    function moveSquare() {
        switch (moveDirection) {
            case 'right':
                if (positionX < parentBlock.clientWidth - childBlock.clientWidth) {
                    positionX += 1;
                } else {
                    moveDirection = 'down';
                }
                break;
            case 'down':
                if (positionY < parentBlock.clientHeight - childBlock.clientHeight) {
                    positionY += 1;
                } else {
                    moveDirection = 'left';
                }
                break;
            case 'left':
                if (positionX > 0) {
                    positionX -= 1;
                } else {
                    moveDirection = 'up';
                }
                break;
            case 'up':
                if (positionY > 0) {
                    positionY -= 1;
                } else {
                    moveDirection = 'right';
                }
                break;
        }

        childBlock.style.left = positionX + 'px';
        childBlock.style.top = positionY + 'px';
    }

    interval = setInterval(moveSquare, 10);

    const moveRightButton = document.getElementById('moveRight');
    const moveDownButton = document.getElementById('moveDown');
    const moveLeftButton = document.getElementById('moveLeft');
    const moveUpButton = document.getElementById('moveUp');

    moveRightButton.addEventListener('click', function () {
        moveDirection = 'right';
    });

    moveDownButton.addEventListener('click', function () {
        moveDirection = 'down';
    });

    moveLeftButton.addEventListener('click', function () {
        moveDirection = 'left';
    });

    moveUpButton.addEventListener('click', function () {
        moveDirection = 'up';
    });
});






