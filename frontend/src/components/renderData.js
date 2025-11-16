import { makeRow } from "./makeRows"

function renderData(data,type){
    if(type === "table"){
        const tbody = document.getElementById('ecors-row')
        if(!tbody) return
    
        tbody.innerHTML = ''
        data.forEach(e => {
            const row = makeRow(e,"table")
            if(row) tbody.appendChild(row)
        })
    }

    if(type === "dropdown"){
        const dropdown = document.getElementById('studyPlan')
        if(!dropdown) return

        data.forEach(e => {
            const option = makeRow(e,"dropdown")
            if(option) dropdown.appendChild(option)
        })
    }
}

export {renderData}