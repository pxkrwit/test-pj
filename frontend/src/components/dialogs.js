let dialogEl = null
let messageEl = null
let okButton = null

function showDialog(message, type = "lock") {
  if (!dialogEl) {
    dialogEl = document.createElement("dialog")
    dialogEl.className = "ecors-dialog"
    document.body.appendChild(dialogEl)

    messageEl = document.createElement("p")
    messageEl.className = "ecors-dialog-message"
    dialogEl.appendChild(messageEl)

    okButton = document.createElement("button")
    okButton.textContent = "Ok"
    okButton.className = "ecors-button-dialog"
    okButton.addEventListener("click", () => dialogEl.close())
    dialogEl.appendChild(okButton)
  }

  messageEl.textContent = message

  if (type === "lock") {
    okButton.style.display = "none"
    dialogEl.removeAttribute("open")
    dialogEl.removeAttribute("onclose")
    dialogEl.addEventListener("cancel", (e) => e.preventDefault()) 
    dialogEl.showModal()
  } else if (type === "confirm") {
    okButton.style.display = "inline-block"
    dialogEl.removeEventListener("cancel", (e) => e.preventDefault())
    dialogEl.showModal()
  }
}

function closeDialog() {
  if (dialogEl && dialogEl.open) dialogEl.close()
}

export { showDialog, closeDialog }
