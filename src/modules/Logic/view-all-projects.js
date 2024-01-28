const { isBefore, isAfter, add  } = require("date-fns");
const { cloneDeep } = require('lodash')
import { filterEmptyProjects } from "./remove-empty-project";
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
}



export {viewAll}