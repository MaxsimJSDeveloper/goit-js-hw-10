import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",m);function m(r){r.preventDefault();const e=s.elements.state.value.toLowerCase(),t=s.elements.delay.value;n(e,t).then(()=>{i.success({title:"OK",message:`✅ Fulfilled promise in ${t} ms`})}).catch(()=>{i.error({title:"Error",message:`❌ Rejected promise in ${t} ms`})}),s.reset()}function n(r,e){return new Promise((t,o)=>{setTimeout(()=>{r==="fulfilled"?t(e):o(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
