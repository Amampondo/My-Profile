function toAbout(){
    window.location.assign("about.html");
}
function toWorkExperience(){
    window.location.assign("workexperience.html");
}
function toProjects(){
    window.location.assign("projects.html");
}
document.addEventListener('mousemove',function(e){
    let circle = document.getElementById("circle");
    let delta = circle.offsetWidth/2;
    circle.style.left = e.pageX - delta - 20 + 'px';
    circle.style.top = e.pageY - delta - 20 + 'px';
})
function enlarge(){
    let circle = document.getElementById("circle");
    let innerCircle = document.getElementById("innerCircle");
    circle.style.opacity = 0;
    innerCircle.style.opacity = 1;
}
function contract(){
    let circle = document.getElementById("circle");
    circle.style.opacity = 1;
}