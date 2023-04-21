export let required = value => {
    if (value) return undefined;
    return 'Field is required'
}
export let maxLengthC = (maxLength) => {
    return (value) => {
        if (maxLength < value.length) return `maxlength is ${maxLength} symbols`
        return undefined
    }
}
export let minLengthC = (minLength) => {
    return (value) => {
        if (minLength > value.length) return `minlength is ${minLength} symbols`
        return undefined
    }
}