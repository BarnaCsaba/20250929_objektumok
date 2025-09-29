export class Auto {
    constructor(modell, evjarat, szin) {
        this._modell = modell;
        this._evjarat = evjarat;
        this._szin = szin;
    }

    getKor() {
        const aktualisEv = new Date().getFullYear()
        return aktualisEv - this._evjarat
    }

    get modell() {
        return this._modell
    }

    set modell(_modell) {
        this._modell = _modell
    }

    get evjarat() {
        return this._evjarat
    }

    set evjarat(_evjarat) {
        this._evjarat = _evjarat
    }

    get szin() {
        return this._szin
    }

    set szin(_szin) {
        this._szin = _szin
    }
}