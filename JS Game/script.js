window.onload = function () {
    const rightPlayer = document.querySelector('.rightPlayer');
    const leftPlayer = document.querySelector('.leftPlayer');
    const timerElement = document.getElementById('timer'); 
    
    
    let currentXRight = 0, currentYRight = 0; 
    let currentXLeft = window.innerWidth - 50, currentYLeft = window.innerHeight - 50; 
    
    
    let movingRight = false, movingLeft = false;

    
    rightPlayer.style.position = 'absolute';
    leftPlayer.style.position = 'absolute';
    leftPlayer.style.left = currentXLeft + 'px';
    leftPlayer.style.top = currentYLeft + 'px';
    rightPlayer.style.left = currentXRight + 'px';
    rightPlayer.style.top = currentYRight + 'px';

    
    let timeElapsed = 0;
    let timerInterval;

    
    function startTimer() {
        if (timerInterval) return; 
        timeElapsed = 0;  
        timerInterval = setInterval(() => {
            timeElapsed++; 
            
            const formattedTime = String(timeElapsed).padStart(4, '0');
            timerElement.textContent = `${formattedTime}`; 
        }, 1000); 
    }

    
    window.addEventListener('keydown', (event) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        
        if (timeElapsed === 0) {
            startTimer();
        }

        
        if (event.key === 'ArrowRight') {
            
            if (currentXRight + 50 <= windowWidth - rightPlayer.offsetWidth) {
                currentXRight += 50;
                rightPlayer.style.left = currentXRight + 'px';
            }
        } else if (event.key === 'ArrowLeft') {
            
            if (currentXRight - 50 >= 0) {
                currentXRight -= 50;
                rightPlayer.style.left = currentXRight + 'px';
            }
        } else if (event.key === 'ArrowUp') {
            
            if (currentYRight - 50 >= 0) {
                currentYRight -= 50;
                rightPlayer.style.top = currentYRight + 'px';
            }
        } else if (event.key === 'ArrowDown') {
            
            if (currentYRight + 50 <= windowHeight - rightPlayer.offsetHeight) {
                currentYRight += 50;
                rightPlayer.style.top = currentYRight + 'px';
            }
        }

        
        if (event.key === 'w') {
            
            if (currentYLeft - 50 >= 0) {
                currentYLeft -= 50;
                leftPlayer.style.top = currentYLeft + 'px';
            }
        } else if (event.key === 'a') {
            
            if (currentXLeft - 50 >= 0) {
                currentXLeft -= 50;
                leftPlayer.style.left = currentXLeft + 'px';
            }
        } else if (event.key === 's') {
            
            if (currentYLeft + 50 <= windowHeight - leftPlayer.offsetHeight) {
                currentYLeft += 50;
                leftPlayer.style.top = currentYLeft + 'px';
            }
        } else if (event.key === 'd') {
            
            if (currentXLeft + 50 <= windowWidth - leftPlayer.offsetWidth) {
                currentXLeft += 50;
                leftPlayer.style.left = currentXLeft + 'px';
            }
        }

        
        checkCollision();
    });

    
    window.addEventListener('keyup', (event) => {
        
        
    });

    
    function checkCollision() {
        const rightRect = rightPlayer.getBoundingClientRect();
        const leftRect = leftPlayer.getBoundingClientRect();

        
        if (rightRect.left < leftRect.right &&
            rightRect.right > leftRect.left &&
            rightRect.top < leftRect.bottom &&
            rightRect.bottom > leftRect.top) {
            
            alert("추격자 승리! 경과 시간: " + timeElapsed + "초");
            
            clearInterval(timerInterval); 
            window.location.reload(); 
        }
    }
}
