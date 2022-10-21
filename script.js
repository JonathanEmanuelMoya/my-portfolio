let visibleMenu = false;

function showHiddenMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList = "";
        visibleMenu = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        visibleMenu = true;
    }
}


function select(){
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}



function skillsEffect(){
    let skills = document.getElementById("skills");
    let distance_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distance_skills >= 300){
        let hability = document.getElementsByClassName("progress");
        hability[0].classList.add("html");
        hability[1].classList.add("css");
        hability[2].classList.add("javascript");
        hability[3].classList.add("react");
        hability[4].classList.add("nodejs");
        hability[5].classList.add("comunication");
        hability[6].classList.add("teamwork");
        hability[7].classList.add("creativity");
        hability[8].classList.add("dedication");
        hability[9].classList.add("good-practices");
    }
}


window.onscroll = function () {
    skillsEffect();
}
