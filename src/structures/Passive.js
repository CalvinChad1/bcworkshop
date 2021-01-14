/**
 * @prop {String} name The name of the passive.
 * @prop {function} requirement The function used to identify whether or not the passive should activate.
 * @prop {function} passive The actual passive.
 * @prop {number} cooldown Amount of time before the passive can be activated again in seconds.
 */

class Passive {
    /**
     * @arg {String} name The name of the passive.
     * @arg {function} requirement The function used to identify whether or not the passive should activate. MUST RETURN A BOOLEAN!!
     * @arg {function} passive The actual passive.
     * @arg {number} cd Amount of time before the passive can be activated again in seconds. Put 0 for no cooldown.
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