for (let i=0; i< 1000; i++) {
    const star = document.createElement ('div');
    star.className = 'star';
    document.body.appendChild(star);
    star.style.left = `${Math.random()* 100}vw`;
    star.style.top = `${Math.random()* 100}vh`;
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.animationDuration = `${Math.random()* 6 + 4}s`;
}
document.body.style.backgroundColor = "#000330";