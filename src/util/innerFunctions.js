const innerFunctions = { add: (a) => (e) => e + a,
    sub:(a) => (e) => e - a,
    mul:(a) => (e) => e * a,
    div:(a) => (e) => e / a,
    mod:(a) => (e) => e % a,
    pow:(a) => (e) => e ** a,
    sqrt: (e) => e ** 0.5,
}

export default innerFunctions;