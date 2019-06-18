let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tupian.jpg') {
      myImage.setAttribute('src', 'images/tu.jpg');
    } else {
      myImage.setAttribute('src', 'images/tupian.jpg');
    }
}
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '你好，今天你渣了吗？' + name + '。';
  }
  
  function setUserName() {
    let myName = prompt('请输入你渣男的称号！');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName;