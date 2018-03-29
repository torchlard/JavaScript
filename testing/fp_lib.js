
function curry(fn){
  const arity = fn.length;
  return function $curry(...args){
    if(args.length < arity){
      return $curry.bind(null, ...args);
    }
    return fn.call(null, ...args);
  };
}

const concat = curry((a, b) => a.concat(b));
const split = curry((sep, str) => str.split(sep));
const filter = curry((fn, xs) => xs.filter(fn));
const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));
const add = curry((a, b) => a + b);
const map = curry((fn, f) => f.map(fn));
const flip = curry((fn, a, b) => fn(b, a));
const match = curry((re, str) => re.test(str));
const prop = curry((p, obj) => obj[p]);



function compose(...fns) {
  const n = fns.length;
  return function $compose(...args) {
    let $args = args;

    for (let i = n - 1; i >= 0; i -= 1) {
      $args = [fns[i].call(null, ...$args)];
    }
    return $args[0];
  };
}

const sortBy = curry((fn, xs) => {
  return xs.sort((a, b) => {
    if (fn(a) === fn(b)) {
      return 0;
    }

    return fn(a) > fn(b) ? 1 : -1;
  });
});

function inspect(x) {
  if (x && typeof x.inspect === 'function') {
    return x.inspect();
  }

  function inspectFn(f) {
    return f.name ? f.name : f.toString();
  }

  function inspectTerm(t) {
    switch (typeof t) {
      case 'string':
        return `'${t}'`;
      case 'object': {
        const ts = Object.keys(t).map(k => [k, inspect(t[k])]);
        return `{${ts.map(kv => kv.join(': ')).join(', ')}}`;
      }
      default:
        return String(t);
    }
  }

  function inspectArgs(args) {
    return Array.isArray(args) ? `[${args.map(inspect).join(', ')}]` : inspectTerm(args);
  }

  return (typeof x === 'function') ? inspectFn(x) : inspectArgs(x);
}