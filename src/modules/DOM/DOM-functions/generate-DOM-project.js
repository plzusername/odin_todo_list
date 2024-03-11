import { finishDraggingTracker, startDraggingTracker } from "../../Storage/itemStorage/taskStorage/changeTaskProject";
import { createElement } from "../utility/createElement";
import { createInputAdder } from "./create-input-adder";
import { createTask } from "./create-task-DOM";

function projectDomify(project){
    const projectName=createElement({class:'project-header'} ,'h1', project.title, [])

    const taskAdder=createInputAdder('Add task')

    const addTaskText = createElement({class:'add-task-text'}, 'p', 'Add task', [])
    const add_icon = taskAdder["add_icon"]

    const addTaskContainer = createElement({class:'add-task-container'}, 'div', '', [addTaskText,add_icon])

    const deleteTaskText = createElement({class:'delete-project-text'}, 'p', 'Delete project', [])
    const delete_icon = createElement({class:`delete-project-icon fa-solid fa-trash`}, 'i', '',[])

    const deleteTaskContainer = createElement({class:'delete-project-container'}, 'div', '', [deleteTaskText,delete_icon])

    const tasks = project.tasks.map(task =>{
        return createTask(task)
    })

    const taskContainer = createElement({class:'task-parent-container'}, 'div', '', ...[tasks])

    add_icon.dataset.id =project.id

    const projectContainer=createElement({class:'project-container'}, 'div', '', [projectName, addTaskContainer, deleteTaskContainer, taskContainer])
    
    projectContainer.dataset.id=project.id

    // const sortableTasks = Sortable.create(taskContainer, {
    //     animation:150,
    //     group:`project-list`,
    //     onStart(evt){
    //         startDraggingTracker(evt)
    //     },
    //     onEnd(evt){
    //         finishDraggingTracker(evt)
    //     }
    // })

    return projectContainer

}

export{projectDomify}
