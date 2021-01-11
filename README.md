BCWorkshop
==========
The one and only library you will need to create Beycord Beys!

**Table of Contents**  
 • [Getting Started](#getting-started)  
 • [How generating works](#how-generating-works)  
 • [Error handling](#error-handling)  
 • [Examples](#examples)  
 • [Useful links](#useful-links)

# Getting Started
> THIS GUIDE ASSUMES THAT YOU HAVE BASIC COMPUTER KNOWLEDGE SUCH AS CREATING FOLDERS OR USING THE TERMINAL.

Make sure you have [Node.js](https://nodejs.org/en/) installed before continuing. Version 12.0.0+ is required. Next, create a folder where you want to make Beys in (this will become your project folder) and open the terminal (command prompt) with the current directory (cd) as your project folder. You will need to type the following in the terminal:
```xl
npm init
```
It will now prompts you to enter some information. But you can just spam enter until it lets you do commands again.  
![!Terminal1](https://media.discordapp.net/attachments/671569234891112482/798071277394591815/unknown.png)  
After that, choose ONE installation command that suits you and enter it in the terminal:
```xl
// If you want to install BCWorkshop with no extra coding helpers or performance boosters:
npm install --no-optional bcworkshop
// If you have no idea how to build Discord embed objects manually and you need the stuff mentioned above:
npm install bcworkshop
```
You can also add ``--save`` after the installation command if you want it saved in your package.json for whatever reason. (OPTIONAL)

After installing BCWorkshop into your project folder, create 2 empty folders for BCWorkshop to read data and generate Beys in. You can name them whatever you want but make sure you remember the folder's usage. You will also need to create a file named `index.js` or whatever you called your main file in the `npm init` prompt. You should end up with a project folder that looks something like this:
![ProjectFolder](https://media.discordapp.net/attachments/692234599350140961/797386222623784990/unknown.png)  
That's it! You've set up a development environment needed to create Beys. If you made it this far, you can relax now because you've done the hardest step.

# How generating works
**Activating**  
If you have `generateBeysOnReady` set as true on the third parameter of bcworkshop.Workshop, generation will automatically begin once the workshop has finished setting up after you run your main file where the workshop is in using the `node` command or something else. If it is false, generation won't start if you didn't add `workshop.generate()` somewhere in your main file.  
**Reading Data**  
BCWorkshop reads Bey data from your data directory, which's path is the first parameter of the bcworkshop.Workshop constructor. Each and every file in the data directory should be a `.js` file that contains Bey data such as the one shown in [Examples](#examples). Although BCWorkshop won't actually break but just throw an error at you if it detects a non Beyblade file in your data directory. It's still highly unrecommended to store junk in it.  
**Generating**  
After processing the data of valid Beyblades in your data directory, BCWorkshop will start generating the Beys in your generation directory, which's path is the second parameter of the bcworkshop.Workshop constructor. After the generation began, you should start to notice new `.js` files appearing in your generation directory within seconds or minutes.  

# Error handling
BCWorkshop has two ways of handling errors or bugs if any is present.  
**Way 1: Console logging**  
BCWorkshop will log the error in your terminal, telling you which file and line the error is at. BCWorkshop usually chooses this way when it's a problem on your code's end such as an error in the code you wrote.  
**Way 2: File overwriting**  
BCWorkshop will overwrite the `.js` file the broken Bey is supposed to be generated in with a `.log` file containing the error. BCWorkshop usually chooses this way when it's a problem on your file's end such as an unsupported character or corrupted file.

# Examples
**Example Workshop**
```js
const bcworkshop = require("bcworkshop");
const workshop = new bcworkshop.Workshop("path/to/data/directory/", "path/to/generate/beys/in/", {generateBeysOnReady: true});
```
**Example Beyblade (with special move)**
```js
// This file is inside path/to/data/directory
const bcworkshop = require("bcworkshop");
const { MessageEmbed } = require("discord.js");

function SPECIALREQUIREMENT(acted, victim, message, player){
    return acted.sp >= 3; // If the player has more than 3 Energy.
}

function SPECIALMOVE(acted, victim, message, player){
    victim.hp -= 50; // Decreases the opponent's hitpoints by 50.
}

const SPECIALNAME = new bcworkshop.Special("SPECIAL NAME", SPECIALREQUIREMENT, SPECIALMOVE);

const BEYNAME = new bcworkshop.Beyblade({name: "BEY NAME", type: "BEY TYPE", imageLink: "BEY IMAGE LINK"})
.attachSpecial(SPECIALNAME);

module.exports = BEYNAME;
// EXPORTING THE BEY IS EXTREMELY IMPORTANT!! BCWorkshop won't recognize the Bey in the file if it isn't exported using [module.exports].
```
You can view more examples [here](https://github.com/SunSOG/bcworkshop/tree/dev/examples).

# Useful links
 • [Documentation GitBook](https://bcworkshop.overcold.cf)