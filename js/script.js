// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

var search_form=document.getElementById('search_form');


function message(){
  var email= document.getElementById('email').value;
  console.log(email);
  if(email==""){
    document.getElementById('contact-btn').setAttribute("href", "#pop-info_form");
      alert(`please input the email and then type message `);
  }
  else {
    document.getElementById('contact-btn').setAttribute("href", "#pop-info");
      alert(`THANK YOU ! ${email} for contacting us we will get you back soon `);
      document.getElementById('email').value="";
      document.getElementById('message').value="";
  }


}


function clear_form(){
  document.getElementById('email').value="";
  document.getElementById('message').value="";
}




search_form.onclick=function search_car(){

  var year=document.getElementById('search-input').value;

  document.getElementById('car-1').classList.add("mystyle");
if(year==2019){
document.getElementById('car-1').classList.remove("overall_display");
document.getElementById('car-2').classList.remove("overall_display");
document.getElementById('car-3').classList.remove("overall_display");
document.getElementById('car-4').classList.add("overall_display");
document.getElementById('car-5').classList.remove("overall_display");
document.getElementById('car-6').classList.add("overall_display");
document.getElementById('car-7').classList.add("overall_display");
document.getElementById('car-8').classList.add("overall_display");
document.getElementById('car-9').classList.add("overall_display");
document.getElementById('car-10').classList.remove("overall_display");
return false;
}
else if (year==2018) {
  document.getElementById('car-1').classList.add("overall_display");
  document.getElementById('car-2').classList.add("overall_display");
  document.getElementById('car-3').classList.add("overall_display");
  document.getElementById('car-4').classList.add("overall_display");
  document.getElementById('car-5').classList.add("overall_display");
  document.getElementById('car-6').classList.add("overall_display");
  document.getElementById('car-7').classList.remove("overall_display");
  document.getElementById('car-8').classList.add("overall_display");
  document.getElementById('car-9').classList.remove("overall_display");
  document.getElementById('car-10').classList.add("overall_display");
  return false;
}
else if (year==2017) {
  document.getElementById('car-1').classList.add("overall_display");
  document.getElementById('car-2').classList.add("overall_display");
  document.getElementById('car-3').classList.add("overall_display");
  document.getElementById('car-4').classList.remove("overall_display");
  document.getElementById('car-5').classList.add("overall_display");
  document.getElementById('car-6').classList.add("overall_display");
  document.getElementById('car-7').classList.add("overall_display");
  document.getElementById('car-8').classList.add("overall_display");
  document.getElementById('car-9').classList.add("overall_display");
  document.getElementById('car-10').classList.add("overall_display");
  return false;
}
else if (year==2015) {
  document.getElementById('car-1').classList.add("overall_display");
  document.getElementById('car-2').classList.add("overall_display");
  document.getElementById('car-3').classList.add("overall_display");
  document.getElementById('car-4').classList.add("overall_display");
  document.getElementById('car-5').classList.add("overall_display");
  document.getElementById('car-6').classList.add("overall_display");
  document.getElementById('car-7').classList.add("overall_display");
  document.getElementById('car-8').classList.remove("overall_display");
  document.getElementById('car-9').classList.add("overall_display");
  document.getElementById('car-10').classList.add("overall_display");
  return false;
}
else if (year==2012) {
  document.getElementById('car-1').classList.add("overall_display");
  document.getElementById('car-2').classList.add("overall_display");
  document.getElementById('car-3').classList.add("overall_display");
  document.getElementById('car-4').classList.add("overall_display");
  document.getElementById('car-5').classList.add("overall_display");
  document.getElementById('car-6').classList.remove("overall_display");
  document.getElementById('car-7').classList.add("overall_display");
  document.getElementById('car-8').classList.add("overall_display");
  document.getElementById('car-9').classList.add("overall_display");
  document.getElementById('car-10').classList.add("overall_display");
return false;
}
else{
  alert(`Sorry! No cars available that are manufactured in ${year}. Please search for a different year.`);
return false;
}


}

// search_form.onsubmit=function search_car() {
//     let input = document.getElementById('search-input').value
//     input=input.toLowerCase();
//     let x =
//
//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";
//         }
//     }
// }
