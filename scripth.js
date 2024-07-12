// days

let days= new Date();
let dy=days.getDay();
let mt=days.getMonth();
let dt=padzero(days.getDate());
let yr=days.getFullYear();

// function
let daylist=[ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']  // day lst
document.getElementById('day').innerHTML=daylist[dy]

// month
let monthlst=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
document.getElementById('month').innerHTML=monthlst[mt]

// day
document.getElementById('date').innerHTML=dt

// year
document.getElementById('year').innerHTML=yr


// time
let ampm=document.getElementById('ampm');
function displaytime() {
    let time=new Date()
    let hr=time.getHours();
    let min=padzero(time.getMinutes());
    let sec=padzero(time.getSeconds());
    if (hr>12) {
        hr=hr -12;
        ampm.innerHTML="PM"

    }
    else{
         ampm.innerHTML="AM"
    }

    document.getElementById('hours').innerText=hr
    document.getElementById('minuts').innerHTML=min
    document.getElementById('secnds').innerHTML=sec

    // condition check
   
}

// zero

function padzero(num) {
   return  num<10?'0'+num:num
}
setInterval(displaytime,500)

