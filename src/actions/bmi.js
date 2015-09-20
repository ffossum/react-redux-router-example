export function resetBmi(height, weight) {
    return {type: 'bmi-reset', value: {height: height, weight: weight}}
}

export function setBmiProperty(property, value) {
    return {type: 'bmi-' + property, value: value};
}