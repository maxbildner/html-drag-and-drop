window.addEventListener("load", () => {
  // set event listeners to all logos
  let logos = document.querySelectorAll('.logos');
  
  for (let i = 0; i < logos.length; i++) {
    let logo = logos[i];

    // as soon as image is dragged
    logo.addEventListener('dragstart', e => {
      // set image id as payload of what we're dragging
      e.dataTransfer.setData("text", e.target.id);
    });
  }

  
  // grab dropable elements
  let divs = document.querySelectorAll('.drop-able')

  // add event listeners to all dropable elements
  for (let i = 0; i < divs.length; i++) {
    let div = divs[i];
    
    // set where the image can be dropped
    div.addEventListener('dragover', e => e.preventDefault());

    // when image enters drop area
    div.addEventListener('dragenter', e => {
      e.preventDefault();
      console.log('dragenter')
      
      // e.currentTarget == <div class="drop-able hovered"></div>
      e.currentTarget.className += ' hovered';
    });

    // when image leaves drop area
    div.addEventListener('dragleave', e => {
      e.preventDefault();
      console.log('dragleave')
      // e.currentTarget == <div class="drop-able hovered"></div>
      e.currentTarget.className = 'drop-able';
    });

    // when image is dropped
    div.addEventListener('drop', e => {
      e.preventDefault();
      console.log('drop')
      
      let id = e.dataTransfer.getData('text');
      // e.target == <div class="drop-able"></div>
      // appendChild appends logo as the last child of e.target
      // e.target.appendChild(document.getElementById(id));
      e.currentTarget.appendChild(document.getElementById(id));

      // e.target.className = 'drop-able';
      e.currentTarget.className = 'drop-able';
    });
  } 
});