const timedisplay = document.getElementById("timedisplay");
const light = document.getElementById("lightbtn");
const dark = document.getElementById("darkbtn");

light.addEventListener("click", function(){
   localStorage.setItem("color", "light");
   document.body.classList.add("light");
   document.body.classList.remove("dark");
})

dark.addEventListener("click", function(){
    localStorage.setItem("color", "dark");
   document.body.classList.add("dark");
   document.body.classList.remove("light");
});


let updateTime = setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();;

    hours = hours % 12;
    hours = hours ? hours : 12;

     minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    document.getElementById("timedisplay").innerHTML = hours + " : " + minutes + " : " + seconds;
},1000);

let day = new Date();

document.getElementById("date").innerText ="📅"+ day.getDate() + " / " + (day.getMonth() + 1) + " / " + day.getFullYear();
document.getElementById("daydisplay").innerText =
    "🌞 " + day.toLocaleDateString("en-US", {
        weekday: "long"
    });

document.getElementById("monthdisplay").innerText =
    "📅 " + day.toLocaleDateString("en-US", {
        month: "long"
    });
