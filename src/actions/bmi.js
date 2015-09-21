export function resetBmi(height, weight) {
    return {type: 'bmi-reset', payload: {height: height, weight: weight}}
}

export function setBmiProperty(property, value) {
    return {type: 'bmi-' + property, payload: value};
}