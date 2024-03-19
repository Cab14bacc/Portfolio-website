let projectOffset = 0;

document.getElementById("project-previous").addEventListener("click", () => decrementProjectOffset(1));
document.getElementById("project-next").addEventListener("click", () => incrementProjectOffset(1));

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
