var f=function(){for(var a=document.querySelectorAll(".output"),n=0;n<a.length;n++)for(var t=a[n],e=c(t,"count"),r=t.attributes,u=0;u<e;u++){for(var l=document.createElement("span"),o=0;o<r.length;o++)l.setAttribute(r[o].name,r[o].value);l.className="swatch",t.appendChild(l)}};function v(a){var n=document.getElementById("logo"),t=n.childNodes,e=[];for(var r in t){var u=t[r];u.attributes&&e.push(u)}var l=randomColor({count:e.length,seed:a});for(var r in e){var o=e[r];o.setAttribute("fill",l[r])}}var i=function(a){v(a);var n=document.querySelectorAll(".swatch");for(var t in n){var e={},r=n[t],u=r.attributes;if(u)for(var l=0;l<u.length;l++)e[u[l].name]=u[l].value;e.count&&delete e.count;var o=randomColor(e);r.style&&(r.style.background=o),r.innerHTML=o.toString()}};function c(a,n){for(var t in a.attributes)if(n===a.attributes[t].name)return a.attributes[t].value}
