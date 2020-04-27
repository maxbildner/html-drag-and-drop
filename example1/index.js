window.addEventListener("load", () => {                                         // once dom and all assets loaded
  let mypic = document.getElementById('picture');
  let leftbox = document.getElementById('leftbox');
  let rightbox = document.getElementById('rightbox');

  // 'dragstart' happens as soon as you start to drag the image
  mypic.addEventListener("dragstart", (e) => {
    let code = '<img id="picture" src="react-logo.png">';
    e.dataTransfer.setData('Text', code);
  });  

  // when we're done dragging image, delete it from DOM
  mypic.addEventListener('dragend', (e) => {
    // let pic = e.target;            
    // pic.style.visibility = 'hidden';                                         // works but doesn't remove img element from DOM

    let pic = e.target;
    pic.parentNode.removeChild(pic);
  });


  // 'dragenter' is when something enters the area
  leftbox.addEventListener("dragenter", (e) => {
    e.preventDefault();                                                         // prevent default browser actions from happening
    leftbox.style.background="SkyBlue";
  });             
  
  // changes background color of leftbox back to default color if user changes mind
  leftbox.addEventListener("dragleave", (e) => {
    e.preventDefault();
    leftbox.style.background="lightgrey";
  });             
  
  leftbox.addEventListener("dragover", (e) =>  {
    e.preventDefault();
  });

  leftbox.addEventListener("drop", (e) => {
    e.preventDefault();
    leftbox.innerHTML = e.dataTransfer.getData('Text');
  });


  rightbox.addEventListener("dragenter", (e) => {
    e.preventDefault();                                                         // prevent default browser actions from happening
    rightbox.style.background = "SkyBlue";
  }); 

  rightbox.addEventListener("dragleave", (e) => {
    e.preventDefault();
    rightbox.style.background = "lightgrey";
  });  

  rightbox.addEventListener("drop", (e) => {
    e.preventDefault();
  });
});