import { KORISNICI } from '../../data/korisnici-podaci'
import { BRISANJE_KORISNIKA, DODAJ_KORISNIKA} from '../actions/korisnici'

const pocetnoStanje = {
    korisnici: KORISNICI
}


const korisnikReducer = (state = pocetnoStanje, action) => {
    switch(action.type) {

        case BRISANJE_KORISNIKA: {
            const odabrani = state.korisnici.find(k => k.id === action.idKorisnika)
            if(odabrani !== null) {
                const korisnici = [...state.korisnici]
                const noviKorisnici = korisnici.filter( k => k.id !== odabrani.id)
                return {...state, korisnici: noviKorisnici}
            } else {
                return {...state}
            }
        }

        case DODAJ_KORISNIKA: {
            const noviKorisnik = action.korisnik

             if (noviKorisnik !== null) {
                const korisnici = [...state.korisnici]
                const noviKorisnici = korisnici.concat(noviKorisnik)
                return{...state, korisnici: noviKorisnici}
             } else {
                return {...state}
             }
        }
        

        default: 
        return state
    }
}

export default korisnikReducer;