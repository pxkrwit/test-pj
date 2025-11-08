import {showDialog,closeDialog} from "../components/dialog"
import { renderData } from "../utils/renderData"

const API_BASE = import.meta.env?.VITE_APP_URL ?? "http://localhost:3000"

async function loadData() {
    try{
        const res = await fetch(`${API_BASE}/study-plans`)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        closeDialog()
        renderData(data)

    } catch (e){
        console.log('loadData error : ',e)
        showDialog('There is a problem. Please try again later.')
    }
}

export {loadData}
