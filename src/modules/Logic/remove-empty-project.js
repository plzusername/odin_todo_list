function filterEmptyProjects(projectsAArray){
    return projectsAArray.filter(project => project.tasks.length != 0)
}

export {filterEmptyProjects}