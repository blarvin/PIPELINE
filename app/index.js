
function CoolDogs (petDog) {
    var dogs = {
        small: ['chihuahua', 'whippit', 'shitzu', 'daschund'],
        shaggy: ['burmese', 'collie', 'sheepdog'],
        smart: ['bloodhound', 'GSP', 'komondor']
    }

    return !!dogs.smart.includes(petDog)
}

module.exports = CoolDogs
