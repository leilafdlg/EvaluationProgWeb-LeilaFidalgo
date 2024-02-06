
export default class Country {
    constructor(countryData) {
        this.countryData = countryData;
        this.allResponses = [];
    }


    //     // Getter pour récupérer le drapeau du pays
    //     get flag() {
    //     return this.countryData.flags.png;
    // }


    // Méthode pour extraire et organiser les bonnes réponses
    extractValidResponses() {
        const translations = this.countryData.translations;
        const commonNames = Object.values(translations).map(translation => translation.common.toLowerCase());
        return new Set(commonNames);
    }
}







