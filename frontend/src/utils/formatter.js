function formatTimestamp(time) {
  if (!time) return "-"
  const date = new Date(time)
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  }
  const formatter = new Intl.DateTimeFormat("en-GB", options)
  const formatted = formatter.format(date)
  return `${formatted} (${timeZone})`
}

function formatShowDeclaredPlans(planId){
  switch(planId){
    case 1:
      return "FE - Frontend Developer"
    case 2:
      return "BE - Backend Developer"
    case 3:
      return "FS - Full-Stack Developer"
    case 4:
      return "AI - AI Developer"
    case 5:
      return "DS - Data Scientist"
    case 6:
      return "DA - Data Analyst"
    case 7:
      return "DE - Data Engineer"
    case 8:
      return "DB - Database Administrator"
    case 9:
      return "UX/UI - UX/UI Designer"
    default:
      return "Not Declared"
  }
}

export { formatTimestamp, formatShowDeclaredPlans }