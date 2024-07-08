document.addEventListener('DOMContentLoaded', () => {
  const dragon = document.getElementById('dragon');
  const container = document.getElementById('game-container');

  let dragonPosition = {
      x: 375,
      y: 275
  };

  const moveDragon = (direction) => {
      switch (direction) {
          case 'ArrowUp':
              if (dragonPosition.y > 0) dragonPosition.y -= 10;
              break;
          case 'ArrowDown':
              if (dragonPosition.y < container.offsetHeight - dragon.offsetHeight) dragonPosition.y += 10;
              break;
          case 'ArrowLeft':
              if (dragonPosition.x > 0) dragonPosition.x -= 10;
              break;
          case 'ArrowRight':
              if (dragonPosition.x < container.offsetWidth - dragon.offsetWidth) dragonPosition.x += 10;
              break;
      }
      updateDragonPosition();
  };

  const updateDragonPosition = () => {
      dragon.style.left = dragonPosition.x + 'px';
      dragon.style.top = dragonPosition.y + 'px';
  };

  document.addEventListener('keydown', (e) => {
      moveDragon(e.key);
  });
});
