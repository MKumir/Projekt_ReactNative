export const PRIJAVA_KORISNIKA = 'PRIJAVA_KORISNIKA'
export const ODJAVA_KORISNIKA = 'ODJAVA_KORISNIKA'

import Korisnik from '../../models/Korisnik'

export const prijavaKorisnika = (korisnik) => {
    return {
        type: PRIJAVA_KORISNIKA,
        logiraniKorisnik: new Korisnik (
                            korisnik.id,
                            korisnik.ime,
                            korisnik.prezime,
                            korisnik.uloga,
                            korisnik.username,
                            korisnik.pass
                        )
    }
}

export const odjavaKorisnika = () => {
    return {
        type: ODJAVA_KORISNIKA
    }
}




