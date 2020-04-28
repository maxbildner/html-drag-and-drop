window.addEventListener("load", () => {
  // grab draggable react logo image
  let logo = document.getElementById('drag1');
  
  // make img draggable (default true for images)
  logo.setAttribute('draggable', 'true');

  // grab dropable elements
  let divs = document.querySelectorAll('.drop-able')

  // as soon as image is dragged
  logo.addEventListener('dragstart', e => {

    // set image id as payload of what we're dragging
    e.dataTransfer.setData("text", e.target.id);
  });

  // add event listeners to all dropable elements
  for (let i = 0; i < divs.length; i++) {
    let div = divs[i];
    
    // set where the image can be dropped
    div.addEventListener('dragover', e => e.preventDefault());

    // when image enters drop area
    div.addEventListener('dragenter', e => {
      e.preventDefault();
      
      // e.target == <div class="drop-able"></div>
      e.target.className += ' hovered';
    });

    // when image leaves drop area
    div.addEventListener('dragleave', e => {
      e.preventDefault();

      // e.target == <div class="drop-able hovered"></div>
      e.target.className = 'drop-able';
    });

    // when image is dropped
    div.addEventListener('drop', e => {
      e.preventDefault();

      // e.target == <div class="drop-able"></div>
      // appendChild appends logo as the last child of e.target
      e.target.appendChild(logo);

      e.target.className = 'drop-able';
    });
  } 
});