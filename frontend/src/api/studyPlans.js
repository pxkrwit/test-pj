import {showDialog,closeDialog} from "../components/dialogs"
import { renderData } from "../components/renderData"

const API_BASE = import.meta.env.VITE_APP_URL

async function loadData(type) {
    try{
        const res = await fetch(`${API_BASE}/study-plans`)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (typeof data === 'object' && !Array.isArray(data)) return data.data
        console.log(data)
        closeDialog()
        
        if(type === "reserve") renderData(data,"dropdown")
        if(type === "table") renderData(data,"table")
        
    } catch (e){
        console.log('loadData error : ',e)
        showDialog('There is a problem. Please try again later.')
    }
}


export {loadData}