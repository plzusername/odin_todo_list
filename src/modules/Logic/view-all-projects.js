const { isBefore, isAfter, add  } = require("date-fns");
const { cloneDeep } = require('lodash')
import { filterEmptyProjects } from "./remove-empty-project";
import { projectDomify } from "../DOM/DOM-functions/generate-DOM-project";
import { content } from '../DOM/generate-content/generate-content-section'
class viewAll{
    static projects = []

    static filterTasksBasedOnDays(daysIntoFuture) {
        let toBeFilteredArray=cloneDeep(viewAll.projects)

        toBeFilteredArray.forEach(project => {
            project.tasks = project.tasks.filter(function (task){
                const beforeOrAfterToday = daysIntoFuture > 0 ? isAfter(task.due_date, new Date()) : isBefore(task.due_date, new Date())
                const withinDayLimit = daysIntoFuture > 0 ? isBefore(task.due_date, add(new Date(), { days: daysIntoFuture })) : isAfter(task.due_date, add(new Date(), { days: daysIntoFuture }))

                return beforeOrAfterToday && withinDayLimit
            }

            );
        });

        return filterEmptyProjects(toBeFilteredArray)
    }

    static addProject(project){
        const projectDomified = projectDomify(project)
        viewAll.projects.push(projectDomified)
        content.appendChild(projectDomified)

    }
}



export {viewAll}