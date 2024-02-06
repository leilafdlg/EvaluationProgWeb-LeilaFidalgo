import Country from "./modules/Country.js"


export default class Game {
    #score
    constructor(countryData) {
        this.#score = 0;
        this.countriesData = countriesData;
        this.currentCountryIndex = 0;
        this.currentCountry = new Country(this.countriesData[this.currentCountryIndex]);
        this.currentCountry.displayFlag(); 

    }

    // recup le score de la partie
    get score() {
        return this.#score;
    }


}
