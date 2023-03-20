const afe = function (a, b, c) {
    if (isNaN(arguments[0] + arguments[1] + arguments[2])) {
        throw new TypeError(
            `${arguments[0]} ${arguments[1]} ${arguments[2]} must be a number`,
        );
    }
    arguments[0] = Math.pow(arguments[0], 2);
    arguments[1] = Math.pow(arguments[1], 2);
    arguments[2] = Math.pow(arguments[2], 2);
    console.log(a + b + c);

    return a + b + c;
};

afe(3, 8, 12);
afe(9, 11, 17);
