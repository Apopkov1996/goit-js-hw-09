function e(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:o,step:n,amount:l}=t.currentTarget.elements;if(o.value<0||n.value<0||l.value<0)alert("Please enter a positive number");else for(let t=0;t<l.value;t+=1){let l=t+1;const r=Number(o.value)+n.value*t;e(l,r).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.245ce194.js.map