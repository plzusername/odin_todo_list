function filterProject(){
    const projects = document.querySelectorAll('.project-container')

    const clickedProjectID = event.target.dataset.id
    
    projects.forEach(project =>{
        if(project.dataset.id != clickedProjectID){
            project.style.display = 'none'
        }
        else{
            project.style.display = 'block'
        }
    })
}

export {filterProject}

