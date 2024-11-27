function clock(){

    var monthNmae=["January","Febuary","March","April","May",
    
    "June","July","August","September","October","November",
    
    "December"]
    
    var daysname=["Sunday",'Monday',"Tuesday","Wednesday",
    
    "Thursday","Friday","Saturday"
    
    ]
    
    var today= new Date();
    
    document.getElementById('day').innerHTML=(daysname[today.getDay()]+
    
    ","+today.getDate()+" "+monthNmae[today.getMonth()]+""+today.getFullYear(
    
    ));
    
    }var inter = setInterval(clock,400)
    
    function showTime(){
    
    var now = new Date();
    
    var hours = now.getHours();
    
    var minutes = now.getMinutes();
    
    var seconds = now.getSeconds();
    
    var Date=now.getDate()
    
    document.getElementById("hour").
    
    innerHTML=hours;
    
    document.getElementById("minutes").
    
    innerHTML=minutes;
    
    document.getElementById("seconds").
    
    innerHTML=seconds;
    
    document.getElementById("date");
    
    innerHTML=Date
    
    }
    
    setInterval(showTime, 10);
    
    const $ = (selector) => {
    
    return document.querySelector(selector);
    
    }
    
    const hour = $('.hour');
    
    const dot = $('.dot');
    
    const min = $('.min');
    
    const week = $('.week');
    
    const date=$('.day');
    
    let showDot = true;
    
    function update() {
    
    showDot = !showDot;
    
    const now = new Date();
    
    if (showDot) {
    
    dot.classList.add('invisible');
    
    }else {
    
    dot.classList.remove('invisible');
    
    }
    
    hour.textContent = String(now.getHours())
    
    .padStart(2, '0');
    
    min.textContent = String(now.getMinutes())
    
    .padStart(2, '0');
    
    Array
    
    .from(week.children)
    
    .forEach(
    
    (ele) => {
    
    ele.classList.remove('active');
    
    }
    
    );
    
    week
    
    .children[now.getDate()]
    
    .classList
    
    .add('active'); 
    
    };
    
    setInterval(update,500);