const { isBefore, isAfter, add  } = require("date-fns");

class viewAll{
    static projects = []

    static filterTasksBasedOnDays(daysIntoFuture) {
        viewAll.projects.forEach(project => {
            project.tasks = project.tasks.filter(task => 
              isBefore(task.due_date, add(new Date(), { days: daysIntoFuture })) &&
              isAfter(task.due_date, new Date())
            );
          });
    }
}

export {viewAll}