const add = (a, b) => {
return a+b;
};

const sub = (a, b) => {
    return a-b;
};

const mult = (a, b) => {
    return a*b;
};

const name = "Arshad";

// module.exports = name;

// .................................................

// module.exports = add;

// ...............................................

// module.exports.add = add;
// module.exports.sub = sub;

// ..............................................


// module.exports.add1 = add;
// module.exports.sub1 = sub;
// module.exports.mult1 = mult;

// module.exports = {add, sub, mult};

// .....................................................

module.exports = { add, sub, mult, name };