import{S as l,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="44812074-4f691c7d06d5961145b89341f",d="https://pixabay.com/api/";function m(o){return fetch(`${d}?key=${f}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("Failed to fetch images");return t.json()}).then(t=>t.hits)}let c=null;function h(o){const t=document.getElementById("gallery");t.innerHTML=o.map(n=>p(n)).join(""),c?c.refresh():c=new l(".gallery a")}function p({webformatURL:o,largeImageURL:t,tags:n,likes:s,views:e,comments:r,downloads:i}){return`
    <div class="photo-card">
      <a href="${t}">
        <img src="${o}" alt="${n}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${s}</p>
        <p><b>Views:</b> ${e}</p>
        <p><b>Comments:</b> ${r}</p>
        <p><b>Downloads:</b> ${i}</p>
      </div>
    </div>
  `}function a(o){u.error({title:"Error",message:o})}const g=document.getElementById("search-form"),y=document.getElementById("search-input");document.getElementById("gallery");g.addEventListener("submit",o=>{o.preventDefault();const t=y.value.trim();if(!t){a("Please enter a search term");return}m(t).then(n=>{n.length===0?a("Sorry, there are no images matching your search query. Please try again!"):h(n)}).catch(n=>{a("An error occurred while fetching images")})});
//# sourceMappingURL=commonHelpers.js.map
