window.addEventListener("load", () => {                                         // once dom and all assets loaded
  // const picture = document.querySelector('.pics');                              // returns first html element that matches .pics class
  const picture = document.querySelector('.fill');                              // returns first html element that matches .pics class
  // picture = <img src="react-logo.png" alt="react-logo" class="pics">

  const empties = document.querySelectorAll('.empty');                          // returns nodeList (array like)
  // empties = NodeList [div.empty, div.empty, ... ]

  picture.addEventListener('dragstart', (e) => {                                // when we start to drag an image
    let pic = e.target; 
    pic.className += ' hold';                                                   // give image we're dragging a border
    setTimeout(() => (pic.className = 'invisible'), 0);                         // make image from where we dragged it invisible
  });

  picture.addEventListener('dragend', (e) => {                                  // when we let go of image
    e.target.className = 'fill';                                                // make image visible
  });


  // loop through empty boxes and add listeners
  for (let i = 0; i < empties.length; i++) {
    const emptydiv = empties[i];
    emptydiv.addEventListener('dragover', (e) => e.preventDefault());
    
    emptydiv.addEventListener('dragenter', (e) => {                             // give div we're hovering image over light blue background
      e.preventDefault();
      e.target.className += ' hovered';
    });

    emptydiv.addEventListener('dragleave', (e) =>  {                            // as soon as we drag the image, make div background empty grey
      e.preventDefault();
      e.target.className = 'empty';
    });

    emptydiv.addEventListener('drop', (e) => {
      e.preventDefault();
      e.target.className = 'empty';
      e.target.append(picture);
    });
  }
});