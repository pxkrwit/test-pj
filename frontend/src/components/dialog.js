let dialog = null

function showDialog(text) {
  if(!dialog){
    dialog = document.createElement('dialog')
    dialog.className = 'ecors-dialog'
    document.body.appendChild(dialog)
  
    const dialogMessage = document.createElement('p')
    dialogMessage.className = 'ecors-dialog-message'
    dialog.appendChild(dialogMessage)
  }

  const message = dialog.querySelector('.ecors-dialog-message')
  message.textContent = text
  if(!dialog.open) dialog.showModal()
}

function closeDialog() {
  if(dialog && dialog.open) dialog.close()
}

export {showDialog,closeDialog}