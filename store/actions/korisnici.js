export const BRISANJE_KORISNIKA = 'BRISANJE_KORISNIKA'
export const DODAJ_KORISNIKA = 'DODAJ_KORISNIKA'

import Korisnik from "../../models/Korisnik";

export const brisanjeKorisnika = (id) => {
    return {
        type: BRISANJE_KORISNIKA,
        idKorisnika: id
    }
}

export const dodajKorisnika = (noviObjekt) => {
    return {
        type: DODAJ_KORISNIKA,
        korisnik: new Korisnik(
                    noviObjekt.id, 
                    noviObjekt.ime, 
                    noviObjekt.prezime, 
                    noviObjekt.uloga,
                    noviObjekt.username,
                    noviObjekt.pass
                )
    }
}
