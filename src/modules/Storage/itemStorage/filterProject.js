function filterProject(){
    const projects = document.querySelectorAll('.project-container')

    const clickedProjectID = event.target.dataset.id

    projects.forEach(project =>{
        project.style.display = 'none'
    })

    projects[clickedProjectID].style.display = 'block'
}

export {filterProject}

