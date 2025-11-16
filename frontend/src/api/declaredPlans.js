import { formatTimestamp, formatShowDeclaredPlans } from "../utils/formatter.js"
import { showDialog } from "../components/dialogs.js"

const API_BASE = import.meta.env.VITE_APP_URL

async function showDeclaredPlans(studentId) {
    const res = await fetch(`${API_BASE}/students/${studentId}/declared-plan`)
    const data = await res.json()

    const plan = formatShowDeclaredPlans(data.planId)
    const creatAt = formatTimestamp(data.createdAt)
    const updateAt = formatTimestamp(data.updatedAt)
    const now = creatAt < updateAt ? updateAt : creatAt

    return { plan, now }
}

// POST Method
async function addStudyPlan(studentId, planId) {
  console.log("addStudyPlan studentId:", studentId)
  try {
    const res = await fetch(`${API_BASE}/students/${studentId}/declared-plan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({planId}),
    })
    if (res.status !== 201) showDialog('You may have declared study plan already. Please check again.',"confirm")
    const addedPlan = await res.json()
    return addedPlan
  } catch (error) {
    throw new Error(error.message)
  }
}

export { showDeclaredPlans, addStudyPlan }