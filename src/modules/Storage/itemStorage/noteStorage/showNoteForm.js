function showNoteForm(){
    const noteForm = document.querySelector('.create-note-form')

    noteForm.classList.add('visible')

    const formAffect = document.querySelector('.form-affect')
    formAffect.classList.add('form-affect-visible')
}

export { showNoteForm }