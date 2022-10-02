import { PRIJAVA_KORISNIKA, ODJAVA_KORISNIKA } from "../actions/login"


const pocetnoStanje = {
    korisnik: null,

}


const loginReducer = (state = pocetnoStanje, action) => {
    switch(action.type) {

        case PRIJAVA_KORISNIKA: {
            return {...state, korisnik: action.logiraniKorisnik}
        }

        case ODJAVA_KORISNIKA: {
            return {...state, korisnik: null}
        }

        default: 
        return state
    }
}

export default loginReducer;