
document.getElementById("project-previous").addEventListener("click", () => decrementProjectOffset(1));
document.getElementById("project-next").addEventListener("click", () => incrementProjectOffset(1));

document.getElementById("nav-dropdown-menu-button").addEventListener("click", () => toggleNavDropdown());

//main page nav dropdown
let dropdown = document.getElementById("navlist-dropdown");
let dropdown_button= document.getElementById("nav-dropdown-menu-button");
let media_min_750px = window.matchMedia("(min-width: 1000px)");
let filter = document.getElementById("filter");

media_min_750px.addEventListener("change", () => { 
  dropdown.style.display = "none";
  dropdown_button.style.backgroundColor = "white";
  filter.style.display = "none";
})


function toggleNavDropdown() { 
  if (dropdown.style.display === "none") {
    dropdown.style.display = "inline-flex";
    dropdown_button.style.backgroundColor = "rgba(0,0,0,0.15)";
    filter.style.display = "block";
  }
  else {
    dropdown.style.display = "none";
    dropdown_button.style.backgroundColor = "white";
    filter.style.display = "none";
  }
}

//main page projects gallery
let projectOffset = 0;
function incrementProjectOffset(n) {
  projectOffset+=n;
  showProjects(projectOffset);
}

function decrementProjectOffset(n) {
    projectOffset-=n;
    showProjects(projectOffset);
}

function showProjects() {
    
    let numProjects;
    let projects = document.getElementsByClassName("project-tile");
    numProjects = projects.length;

    if (Math.abs(projectOffset) >= numProjects) {
        projectOffset = 0;
    }

    for (let i = 0; i < projects.length; i++) {
        projects[i].style.order = 0;
    }

    for (let i = 0; i < projects.length; i++) {
        let index = (i + projectOffset);
        if (index < 0) {
          index = numProjects + index;
        }
        else if (index >= numProjects) {
          index = index - numProjects;
        }

        projects[i].style.order = index + 1;
    }

    
}


