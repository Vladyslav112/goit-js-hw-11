import{i as l,S as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function u(e){const r=document.getElementById("gallery"),n=e.map(f).join("");r.innerHTML=n,h()}function f(e){return`
    <div class="photo-card">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${e.likes}</p>
        <p><b>Views</b> ${e.views}</p>
        <p><b>Comments</b> ${e.comments}</p>
        <p><b>Downloads</b> ${e.downloads}</p>
      </div>
    </div>
  `}function i(e){l.error({title:"Error",message:e})}function m(){const e=document.createElement("div");e.className="loader",document.body.appendChild(e)}function a(){const e=document.querySelector(".loader");e&&e.remove()}function h(){new d(".photo-card a").refresh()}const p="44812074-4f691c7d06d5961145b89341f",y="https://pixabay.com/api/";function g(e){return fetch(`${y}?key=${p}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>r.hits)}const b=document.getElementById("search-form"),L=document.getElementById("search-input"),v=document.getElementById("gallery");b.addEventListener("submit",e=>{e.preventDefault();const r=L.value.trim();if(!r){i("Please enter a search term");return}v.innerHTML="",m(),g(r).then(n=>{a(),n.length===0?i("Sorry, there are no images matching your search query. Please try again!"):u(n)}).catch(n=>{a(),i("An error occurred while fetching images")})});
//# sourceMappingURL=commonHelpers.js.map
