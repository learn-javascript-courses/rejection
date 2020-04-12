
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

export default pipe;