// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
	const drivers = {...object };
	drivers[key] = value;
	return drivers;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(object, key){
    let newObject = {...object}
    delete newObject[`${key}`]
    return newObject
}

function destructivelyDeleteFromDriverByKey(object, key){
    delete object[`${key}`]
    return object
}