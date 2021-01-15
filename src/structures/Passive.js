/**
 * @prop {String} name The name of the passive.
 * @prop {Function} requirement The function used to identify whether or not the passive should activate.
 * @prop {Function} passive The actual passive.
 * @prop {Number} cooldown Amount of time before the passive can be activated again in seconds.
 */

class Passive {
    /**
     * @param {String} name The name of the passive.
     * @param {Function} requirement The function used to identify whether or not the passive should activate. MUST RETURN A BOOLEAN!!
     * @param {Function} passive The actual passive.
     * @param {Number} cd Amount of time before the passive can be activated again in seconds. Put 0 for no cooldown.
     */
    constructor(name, requirement, passive, cooldown){
        this.name = name || "Passive",
        this.requirement = requirement || function placeholder(){
            return false;
        };
        this.passive = passive || function passiveplaceholder(){};
        this.cd = cooldown || 0;
    }
}

module.exports = Passive;