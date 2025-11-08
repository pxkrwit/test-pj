import { makeRow } from "./makeRows"
function renderData(data){
    const tbody = document.getElementById('ecors-row')
    if(!tbody) return

    tbody.innerHTML = ''
    data.forEach(e => {
        const row = makeRow(e)
        if(row) tbody.appendChild(row)
    })
}

export {renderData}