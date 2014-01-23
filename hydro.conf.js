module.exports = function(hydro) {
  hydro.set({
    suite: 'ldir',
    formatter: 'hydro-simple',
    proxies: { t: 'addTest' },
    tests: [ 'test/*.js' ]
  });
};
