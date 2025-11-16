import { addStudyPlan } from "../api/declaredPlans.js"

async function clickDeclared(planId,studentId){
    return await addStudyPlan(studentId, Number(planId))
}

export { clickDeclared }