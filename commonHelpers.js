import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y}from"./assets/vendor-a4e39586.js";const s=document.querySelector("button[data-start]"),d=document.querySelector("#datetime-picker"),h=document.querySelector("span[data-days"),f=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]");document.querySelector("body");s.setAttribute("disabled","");let l,e=document.createElement("div");e.style.padding="0";e.style.border="none";e.style.borderRadius="4px";e.style.backgroundColor="#EF4040";e.style.color="#fff";e.style.position="absolute";e.style.top="50%";e.style.left="450%";e.style.transform="translate(-50%, -50%)";e.style.zIndex="9999";e.innerText="Please choose a date in the future";e.style.display="flex";e.style.justifyContent="space-evenly";e.style.alignItems="center";e.style.height="64px";e.style.width="300px";let n=document.createElement("button");n.style.border="none";n.style.backgroundColor="#EF4040";n.style.marginLeft="10px";n.style.display="flex";n.style.padding="0";n.style.width="auto";n.style.height="auto";n.insertAdjacentHTML("beforeend",'<svg width=12 height=12><use href="../img/sprite.svg#icon-Vector"></use></svg>');n.onclick=function(){n.remove(),e.remove()};function v(){e.appendChild(n),s.appendChild(e)}y(d,{enableTime:!0,time_24hr:!0,defaultDate:new Date,dateFormat:"Y-m-d H-i",minuteIncrement:1,onClose(t){console.log(t[0]),t[0]<new Date?v():(l=t[0].getTime(),s.removeAttribute("disabled"),n.remove(),e.remove())}});function g(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:u,seconds:m}}function r(t){return`${t}`.padStart(2,"0")}s.addEventListener("click",()=>{s.setAttribute("disabled",""),d.setAttribute("disabled","");const t=setInterval(()=>{let a=l-new Date;const o=g(a);if(b.textContent=r(o.seconds),p.textContent=r(o.minutes),f.textContent=r(o.hours),h.textContent=r(o.days),a<1e3){clearInterval(t),d.removeAttribute("disabled");return}},1e3)});
//# sourceMappingURL=commonHelpers.js.map
