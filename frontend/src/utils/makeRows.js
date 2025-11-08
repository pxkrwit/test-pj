function makeRow(studyPlan) {
  const row = document.createElement("tr")
  const cells = [
    [studyPlan.id, "ecors-id"],
    [studyPlan.plan_code, "ecors-studyCode"],
    [studyPlan.name_eng, "ecors-nameEng"],
    [studyPlan.name_th, "ecors-nameTh"],
  ];

  for (const [text, className] of cells) {
    if (text === null) {
      return null
    }

    const detail = document.createElement("td")

    if (className) detail.className = className
    
    detail.textContent = String(text)
    row.appendChild(detail)
  }

  return row
}

export {makeRow}