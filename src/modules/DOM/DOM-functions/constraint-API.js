document.addEventListener(('DOMContentLoaded'), ()=>{
    const createTaskTitleInput = document.querySelector('.title-input-task-create')
    const editTaskTitleInput = document.querySelector('.title-input-task-edit')
    const createNoteTitleInput = document.querySelector('.title-input-note')
    const editNoteTitleInput = document.querySelector('.edit-note-form  .title-input-note')
    
    
    const createTaskDescriptionInput = document.querySelector('.create-task-form .description-input-task-create')
    const editTaskDescriptionInput = document.querySelector('.edit-task-form .description-input-task-edit')
    const createNoteDescriptionInput = document.querySelector('.create-note-form .description-input-note')
    const editNoteDescriptionInput = document.querySelector('.edit-note-form  .description-input-note')
    
    const textInputs = [createTaskTitleInput, editTaskTitleInput,  createNoteTitleInput, editNoteTitleInput, createTaskDescriptionInput, editTaskDescriptionInput, createNoteDescriptionInput, editNoteDescriptionInput]
    const modes = [['Title', 30], ['Description', 50]]
    
    textInputs.forEach((titleInput, index) =>{
        titleInput.addEventListener('input', ()=>{
            if(titleInput.value.length > modes[Math.round(+`0.${index+1}`)][1]) {
                console.log(titleInput.value.length)
                titleInput.setCustomValidity(`Sorry there, but the ${modes[Math.round(+`0.${index+1}`)][0]} is too long!`)
            }
            else{
                titleInput.setCustomValidity('')
            }
        })
    })
})