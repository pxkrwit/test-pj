import { showDeclaredPlans } from "../api/declaredPlans" 

async function loadDeclared(keycloak) {
  const studentId = keycloak.tokenParsed?.preferred_username
  const fullName = keycloak.tokenParsed?.name
  const fullNameEl = document.getElementById("fullName")
  const statusDeclare = document.querySelector(".ecors-declared-plan")
  
  if (!statusDeclare) return
  try {
    const declaredPlan = await showDeclaredPlans(studentId)
    fullNameEl.textContent = fullName
    if(declaredPlan.plan === "Not Declared") return
    statusDeclare.textContent = ` ${declaredPlan.plan} on ${declaredPlan.now}`
    
  } catch (error) {
    console.log("Error loading declared plan:", error)
  }
}

export { loadDeclared }