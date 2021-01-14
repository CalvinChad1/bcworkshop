/**
 * @prop {String} name The name of the special move.
 * @prop {Function} requirement The function used to define whether the special is executable.
 * @prop {Function} special The actual special move to be executed.
 */

class Special {
    /**
     * 
     * @arg {String} name The name of the special move. 
     * @arg {Function} requirement The function used to define whether the special is executable. MUST RETURN A BOOLEAN!
     * @arg {Function} special The actual special move to be executed.
     */
    constructor(name, requirement, special){
        this.name = name || "Special",
        this.requirement = requirement || function placeholder(){
            return false;
        };
        this.special = special || function specialplaceholder(){};
    }
}

module.exports = Special;