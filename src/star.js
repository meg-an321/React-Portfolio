document.addEventListener('mousemove', (event) => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${event.clientX}px`;
    star.style.top = `${event.clientY}px`;
    document.getElementById('star-container').appendChild(star);
  
    setTimeout(() => {
      star.remove();
    }, 1000); // Remove the star after 1 second
  });