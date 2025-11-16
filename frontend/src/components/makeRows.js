function makeRow(studyPlan,type) {

  if(type === "table"){
    const row = document.createElement("tr")
    const cells = [
      [studyPlan.id, "ecors-id"],
      [studyPlan.planCode, "ecors-planCode"],
      [studyPlan.nameEng, "ecors-nameEng"],
      [studyPlan.nameTh, "ecors-nameTh"],
    ]
  
    for (const [text, className] of cells) {
      if (text === null) return null
      
      const detail = document.createElement("td")
  
      if (className) detail.className = className
      
      detail.textContent = String(text)
      row.className = 'ecors-row'
      row.appendChild(detail)
    }
  
    return row
  }

  if(type === "dropdown"){
    if (studyPlan.planCode === null || studyPlan.nameEng === null) return null

    const row = document.createElement("option")
    row.className = 'ecors-plan-row'
    row.value = studyPlan.id

    const planCode = document.createElement("span")
    planCode.className = 'ecors-plan-code'
    planCode.textContent = studyPlan.planCode

    const nameEng = document.createElement("span")
    nameEng.className = 'ecors-plan-name'
    nameEng.textContent = studyPlan.nameEng

    const mid = document.createTextNode(' - ')

    row.appendChild(planCode)
    row.appendChild(mid)
    row.appendChild(nameEng)

    return row

  }
}

export {makeRow}