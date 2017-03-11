console.log('Loaded!');
var element =document.getElementById('main-text');
element.innerHtml='NEW VALUE';
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{
    var interval = setInterval(moveRight,100);
};
var button = document.getElementById('counter');
var counter =0;
button.onclick = function() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE)
        { 
            if(request.status === 200)
        { var counter = request.responseText;
        
        }
    }
};
request.open('GET' , 'http://sonashrivastava.imad.hasura-app.io/counter', true);
request.send(null);
};