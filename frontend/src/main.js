import { loadData } from "./api/studyPlans"
import { initKeycloak, logInSystem, resetToken } from "./keycloak/keycloak"

document.addEventListener("DOMContentLoaded", () => {

  loadData("table")

  const loginBtn = document.getElementById("loginBtn")

  const params = new URLSearchParams(window.location.search)
  const checkLogIn = params.get("loggedOut") === "true"

  if(checkLogIn) resetToken()

  initKeycloak((init) => {
    if (init.authenticated) {
      window.location.href = "/reserve.html"
      return
    }

    loginBtn.addEventListener("click", () => {
      logInSystem()
    })
  })

})