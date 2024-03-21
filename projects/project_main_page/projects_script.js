
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
// project search and tags filter
let projects_search = document.getElementById("project-search");
projects_search.addEventListener("keyup", (event) => {projectSearchTagFilter()});

let project_tags = document.getElementsByClassName("project-tag");

for (let index = 0; index < project_tags.length; index++) {
  project_tags[index].addEventListener("click", (event) => {
    projectTagToggle(event);
    projectSearchTagFilter();
  });
}



function projectSearchTagFilter(){ 
  let project_tiles = document.getElementsByClassName("project-tile");
  let filters = [].slice.call(project_tags);
  
  filters = filters.filter((x) => x.style.backgroundColor === "black");
  filters = filters.map((x) => x.innerText.toUpperCase());

  filters.push(projects_search.value.toUpperCase());
  console.log(filters);
  
  let allFound = true;

  for (let index = 0; index < project_tiles.length; index++) {

    project_tiles[index].style.display = "block";
    allFound = true;
    let project_title = project_tiles[index].getElementsByClassName("project-tile-title")[0].innerText.toUpperCase();
    let project_description = project_tiles[index].getElementsByClassName("project-tile-description")[0].innerText.toUpperCase();

    for (let i = 0; i < filters.length; i++) {
      if(project_title.indexOf(filters[i]) == -1 && project_description.indexOf(filters[i]) == -1) {
        allFound = false;
        break;
      }    
    }

    if(allFound === false){
      project_tiles[index].style.display = "none";
    }

  }
}

function projectTagToggle(event){

  if(event.target.control.checked === false){
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
  }
  else{
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
  }
}



