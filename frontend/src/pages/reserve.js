import { initKeycloak, logOutSystem,logInSystem } from "../keycloak/keycloak.js"
import { loadData} from "../api/studyPlans.js";
import { loadDeclared } from "./loginData.js";
import { clickDeclared } from "../utils/crud.js"; 

document.addEventListener("DOMContentLoaded", async () => {
  const logoutBtn = document.getElementById("logoutBtn")
  const select = document.getElementById("studyPlan")
  const declaredBtn = document.getElementById("btndeclare")

  let value = null
  select.addEventListener("change", () => {
    value = select.value
    if (!value) return
    console.log("select plan : ", value)
  })
  
  initKeycloak(async (keycloak) => {
    if (!keycloak.authenticated) {
      logInSystem()
      return
    }

    const studentId = keycloak.tokenParsed.preferred_username
    if(declaredBtn){
      declaredBtn.addEventListener("click", async () => {
        return await clickDeclared(value, studentId)
      })
    }
    const loadStatus = await loadDeclared(keycloak)
    loadData("reserve")

    logoutBtn.addEventListener("click", () => {
      logOutSystem()
    })
  })
  

  
})

