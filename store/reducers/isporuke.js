import { ISPORUKE } from '../../data/isporuke-podaci'
import { BRISANJE_ISPORUKE, DODAJ_ISPORUKU, PROMJENA_STATUSA_ISPORUKE } from '../actions/isporuke'

const pocetnoStanje = {
    isporuke: ISPORUKE,
}


const isporukaReducer = (state = pocetnoStanje, action) => {
    switch(action.type) {

        case BRISANJE_ISPORUKE: {
            const odabrana = state.isporuke.find(i => i.id === action.idIsporuke)
            if(odabrana !== null) {
                const isporuke = [...state.isporuke]
                const noveIsporuke = isporuke.filter( i => i.id !== odabrana.id)
                return {...state, isporuke: noveIsporuke}
            } else {
                return {...state}
            }
        }

        case DODAJ_ISPORUKU: {
            const novaIsporuka = action.isporuka

             if (novaIsporuka !== null) {
                const isporuke = [...state.isporuke]
                const noveIsporuke = isporuke.concat(novaIsporuka)
                return{...state, isporuke: noveIsporuke}
             } else {
                return {...state}
             }
        }

        case PROMJENA_STATUSA_ISPORUKE: {
            const odabranaIndex = state.isporuke.findIndex(i => i.id === action.idIsporuke)
                
            if (odabranaIndex >= 0) {
                const noveIsporuke = [...state.isporuke]
                noveIsporuke[odabranaIndex].status = !noveIsporuke[odabranaIndex].status
                return {...state, isporuke: noveIsporuke}
            } else {
                return {...state}
            }
        }

        default: 
        return state
    }
}

export default isporukaReducer;