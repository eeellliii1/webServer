(function(){function p(o,i,f){var a="function"==typeof require&&require;function c(n,r){if(!i[n]){if(!o[n]){var u="function"==typeof require&&require,u;if(!r&&u)return u(n,!0);if(a)return a(n,!0);throw(u=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",u}var u=i[n]={exports:{}};o[n][0].call(u.exports,function(r){var e;return c(o[n][1][r]||r)},u,u.exports,p,o,i,f)}return i[n].exports}for(var r=0;r<f.length;r++)c(f[r]);return c}return p})()({1:[function(require,module,exports){
const {default : axios} = requestAnimationFrame("axios");

var test;

async function apiCallTest()
{
    try
    {
        test = await axios.get("http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=start");
        console.log(test);
    }
    catch(error)
    {
        console.error(error);
        return;
    }
}

apiCallTest();
},{}]},{},[1]);
