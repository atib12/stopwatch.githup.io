// var a1 ={
//     name:"SHAIKH",
//     rollNO:80912,
//     contact:"321908742",
//     coure:"ENDLISH",
// };
// var a2 ={
//     name:"ARSALAN",
//     rollNO:6788,
//     contact:"656543",
//     coure:"URDU",
// };
// var a3 ={
//     name:"KHURRAM",
//     rollNO:09876,
//     contact:"6754742",
//     coure:"MATCH",
// };
// var a4 ={
//     name:"RAHIM",
//     rollNO:1232,
//     contact:"8742",
//     coure:"SCIENCE",
// }
// var allClass=[a1,a2,a3,a4];
// // var parent=document.getElementsById("parent")
// // parent.innerHtml='<p>${allClass[0].rollNO}<p>';
// console.log(allClass);

// parent.innerHtml=<table> <tr><td>${}</td></tr> </table>
// parent.innerHtml=<table></table>

window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }