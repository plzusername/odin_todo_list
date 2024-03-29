const { isBefore, isAfter, add  } = require("date-fns");
const { cloneDeep } = require('lodash')
import { redoIds } from './redoIds.js'

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

        return toBeFilteredArray
    }

    static addProject(project){
        project.id = viewAll.projects.length
        viewAll.projects.push(project)

    }
    static removeProject(project){
        viewAll.projects.splice(project.id,1)
        redoIds(viewAll.projects)
    }

}



export {viewAll}