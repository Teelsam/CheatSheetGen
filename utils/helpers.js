module.exports = {
    // Equality check: Returns true if a is equal to b, false otherwise
    eq: (a, b) => a === b,

    // Inequality check: Returns true if a is not equal to b, false otherwise
    ne: (a, b) => a !== b,

    // Logical AND: Returns true if both a and b are truthy, false otherwise
    and: (a, b) => a && b,

    // Logical AND for three values: Returns true if all a, b, and c are truthy, false otherwise
    and3: (a, b, c) => a && b && c
};
