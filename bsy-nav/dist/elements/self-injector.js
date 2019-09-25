const loadScript = (source, defer, module, type) => {
  return new Promise(res => {
    const script = document.createElement('script');
    script.onload = res;
    script.src = source;
    script.defer = !!defer;
    script.noModule = !!module ? undefined : true;
    script.type = type;
    document.head.appendChild(script);
  })
};

const es5 = loadScript('https://bsy-nav.firebaseapp.com/ship-es5.js', true, false).then(() => console.log('loaded es5'));
const es2015 = loadScript('https://bsy-nav.firebaseapp.com/ship-es2015.js', false, true, 'module').then(() => console.log('loaded es2015'));

Promise.race([es5, es2015]).then(() => {
  const nav = document.createElement('bsy-nav-overlay');
  document.body.appendChild(nav);
  console.log('injected');
});
