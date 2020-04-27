// https://codepen.io/bradtraversy/pen/odmVgN

window.addEventListener("load", () => {                                         // once dom and all assets loaded
  const picture = document.querySelector('.fill');                              // returns first html element that matches .pics class
  // picture = <img src="react-logo.png" alt="react-logo" class="pics">

  const boxes = document.querySelectorAll('.boxes');                            // returns nodeList (array like)
  // boxes = NodeList [div.boxes, div.boxes, ... ]

  picture.addEventListener('dragstart', (e) => {                                // when we start to drag an image
    let pic = e.target; 
    pic.className += ' hold';                                                   // give image we're dragging a border
    setTimeout(() => (pic.className = 'invisible'), 0);                         // make image from where we dragged it invisible
  });

  picture.addEventListener('dragend', (e) => {                                  // when we let go of image
    e.target.className = 'fill';                                                // make image visible
  });


  // loop through empty boxes and add listeners
  for (let i = 0; i < boxes.length; i++) {
    const boxdiv = boxes[i];
    boxdiv.addEventListener('dragover', (e) => e.preventDefault());
    
    boxdiv.addEventListener('dragenter', (e) => {                               // give div we're hovering image over light blue background
      e.preventDefault();
      // e.target == <div class="boxes"></div>
      e.target.className += ' hovered';
    });

    boxdiv.addEventListener('dragleave', (e) =>  {                              // as soon as we drag the image, make div background empty grey
      e.preventDefault();
      e.target.className = 'boxes';
    });

    boxdiv.addEventListener('drop', (e) => {                                    // as soon as we drop image
      e.preventDefault();
      e.target.className = 'boxes';                                             // reset classname of div we dropped image into
      e.target.append(picture);                                                 // append picture to div we dropped image into
    });
  }
});