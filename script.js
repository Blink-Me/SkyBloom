let stage = 1;

function waterPlant() {
  const water = document.getElementById('water-drop');
  const plant = document.getElementById('plant');

  // Reset animation

  water.style.opacity = '1';
  water.style.animation = 'none';
  void water.offsetWidth; // Force reflow
  water.style.animation = 'drop 2s ease-in forwards';

  // Listen for animation end to change plant stage
  function onDropEnd() {
    water.style.opacity = '0';
    stage++;
    if (stage > 3) stage = 3;
    if (stage === 3) {
      plant.src = 'Stage3.png';
    } else {
      plant.src = `stage${stage}.png`;
    }
    water.removeEventListener('animationend', onDropEnd);
  }
  water.addEventListener('animationend', onDropEnd);
}

