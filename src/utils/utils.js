export const createFirebaseGeneric = (customObject) => {
    const firebaseGeneric = {};
    Object.keys(customObject).forEach((propertyName) => {
        if (customObject[propertyName] !== firebaseGeneric[propertyName]) {
            firebaseGeneric[propertyName] = customObject[propertyName];
        }
    });
    return firebaseGeneric;
}

export const getId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };