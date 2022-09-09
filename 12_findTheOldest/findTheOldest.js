const findTheOldest = function(persons) {
    return persons.reduce((oldest, current) => {
        old = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        now = getAge(current.yearOfBirth, current.yearOfDeath);
        return old < now ? current : oldest;

        
    });
    
}
function getAge(alive, dead) {
    // if no dead, dead becomes the current year, passes test one and two becuase both are checked
    if (!dead) {
        dead = new Date().getFullYear();
        return dead - alive;
    }
    return dead - alive;
}

// Do not edit below this line
module.exports = findTheOldest;
