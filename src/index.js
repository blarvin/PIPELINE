import React from 'react';
import ReactDOM from 'react-dom';

const headline = "pipey McPipeface";

ReactDOM.render(
    <div>{headline}</div>,
    document.getElementById('app')
)

function CoolDogs (petDog) {
    var dogs = {
        small: ['chihuahua', 'whippit', 'shitzu', 'daschund'],
        shaggy: ['burmese', 'collie', 'sheepdog'],
        smart: ['bloodhound', 'GSP', 'komondor']
    }

    return !!dogs.smart.includes(petDog)
}

module.exports = CoolDogs
console.log("PIPELINE entry point")
