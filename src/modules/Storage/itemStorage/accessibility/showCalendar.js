import { content } from "../../../DOM/generate-content/generate-content-section"
import { createElement } from "../../../DOM/utility/createElement"
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { viewAll } from "../../../Logic/view-all-projects";



function showCalendar(){
    const calendarElement = createElement({class:'calendar-container'}, 'div', '', [])
    content.appendChild(calendarElement)

    const Tasks = viewAll.projects.map(project =>{
      return project.tasks
    })

    const rgbToHexadecimals = {
      'Low': '#16CD13',
      'Medium': '#D1D50D',
      'High': ' #DF310E'
    }


    const events = Tasks.flat().map(task =>{
      const eventColor = rgbToHexadecimals[task.priority]
      return { 
        title:task.title,
        start:task.due_date,
        backgroundColor: eventColor
       }
    })

    let calendar = new Calendar(calendarElement, {
        plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
        initialView: 'dayGridMonth',
        navLinks: true,
      headerToolbar: {
          left: 'title',
          right: 'prev,next today'
        },
        events:events
      });

      calendar.render();
}

export {showCalendar}