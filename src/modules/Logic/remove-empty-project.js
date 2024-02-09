function filterEmptyProjects(projectsArray){
    return projectsArray.filter(project => project.tasks.length != 0)
}

export {filterEmptyProjects}