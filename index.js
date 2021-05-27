function wakeDog(dogName, dogBreed) {
    let message = `Wake ${dogName} the ${dogBreed}`;
    return message;
}

function leashDog(dogName, dogBreed) {
    let message = `Leash ${dogName} the ${dogBreed}`;
    return message;
}

function walkToPark(dogName, dogBreed) {
    let message = `Walk to the park with ${dogName} the ${dogBreed}`;
    return message;
}

function throwFrisbee(dogName, dogBreed) {
    let message = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return message;
}

function walkHome(dogName, dogBreed) {
    let message = `Walk home with ${dogName} the ${dogBreed}`
    return message;
}

function unleashDog(dogName, dogBreed) {
    let message = `Unleash ${dogName} the ${dogBreed}`;
    return message;
}

function exerciseDog(dogName, dogBreed) {
    let returnVals = [];
    for (let i = 0; i < routine.length; i++) {
        let func = routine[i];
        returnVals[i] = func(dogName, dogBreed);
    }

    return returnVals;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

