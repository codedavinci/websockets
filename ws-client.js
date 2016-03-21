var ws = new WebSocket("ws://localhost:3000");

ws.onopen = function(){
    setTitle("Connected to webchat");
};

ws.onclose = function(){
  setTitle("DISCONNECTED");  
};

ws.onmessage = function(payLoad) {
  displayMsg(payLoad.data);  
};


document.forms[0].onsubmit = function(){
  var msg = document.getElementById('message');
    
   ws.send(input.value);    
    msg.value = '';
};

function setTitle(title){
  document.querySelector('h1').innerHTML = title;  
}

function displayMsg(msg) {
    var p = document.createElement('p');   
    p.innerText = msg;
    document.querySelector('div.messages').appendChild(p);
};