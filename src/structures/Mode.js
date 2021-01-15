/**
 * @prop {String} name The name of the mode.
 * @prop {Function} requirement The function used to identify whether or not the mode should activate.
 * @prop {Function} mode Stuff to do when the Bey has entered the mode.
 * @prop {Boolean} activateOnStart Whether the mode should already be activated / on when the battle starts.
 */

class Mode {
    /**
     * @param {String} name The name of the mode.
     * @param {Function} requirement The function used to identify whether or not the mode should activate. MUST RETURN A BOOLEAN!!
     * @param {Function} mode Stuff to do when the Bey has entered the mode. (OPTIONAL)
     */
    constructor(name, requirement, mode){
        this.name = name || "Mode",
        this.requirement = requirement || function placeholder(){
            return false;
        };
        this.mode = mode || function Modeplaceholder(){};
    }
}

module.exports = Mode;