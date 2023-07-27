const TODAYS_YEAR = new Date().getFullYear();

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        return personAge > oldestAge ? person : oldest;
    });
};

const getAge = function(birthYear, deathYear){
    if(!deathYear){
        deathYear = TODAYS_YEAR;
    }
    return deathYear - birthYear;
}



// Do not edit below this line
module.exports = findTheOldest;
