let power = (base, exponent) => {

    // recursion
    // base case
    if (exponent === 0) return 1
    return base * power(base, exponent-1)
}

power(2,2)
    2 * 2
            2 * 1
                    1