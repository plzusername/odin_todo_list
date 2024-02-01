import { viewAll } from '../Logic/view-all-projects'
import { createTask } from '../DOM/DOM-functions/create-task-DOM'
import { taskGenerator } from '../Logic/task-generator'
import { Storage } from './main-Storage'

function StoreAddedTask(){
    const parentProject = document.querySelector(`[data-id="${(event.target.dataset.id)}"]`)
    const objOfTheParentProject = viewAll.projects[parentProject.dataset.id]
    const generatedTask = new taskGenerator(0, 0, objOfTheParentProject, 0, 0, 0)
    objOfTheParentProject.addTask( generatedTask.title, generatedTask.description, generatedTask.checked, generatedTask.priority, generatedTask.due_date )
    Storage.projects[objOfTheParentProject.id].tasks.push(generatedTask)
    parentProject.appendChild(createTask(generatedTask))
}

export{ StoreAddedTask }