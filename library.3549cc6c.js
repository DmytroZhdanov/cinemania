var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n("bUb57"),n("8FnLx"),n("eEHR3");var a=n("coBnA");function o(e,t){return e.slice(9*t,9*t+9)}a=n("coBnA");function i(){libraryDivLoadMoreBtn=document.querySelector("[data-div-load-more-btn]"),L.totalLibraryPage===L.curentPage+1?(m.libraryMovieList.insertAdjacentHTML("beforeend",(0,a.generateMovieCardsMarkup)(o(m.LibraryFromLocalStorage,L.curentPage))),m.libraryMovieList.classList.add("movie-cards-list-css-no-btn"),m.libraryMovieList.classList.remove("movie-cards-list-css"),libraryDivLoadMoreBtn.remove()):(m.libraryMovieList.insertAdjacentHTML("beforeend",(0,a.generateMovieCardsMarkup)(o(m.LibraryFromLocalStorage,L.curentPage))),L.curentPage+=1)}function s(){m.libraryMovieList.insertAdjacentHTML("afterend",'\n                        <div class="btn-list-load-more" data-div-load-more-btn>\n                            <button type="button" class="btn btn-filled" data-load-more-btn>\n                            Load more\n                            </button>\n                        </div>')}var l=n("2ZOXv");function c(e){const t=e.map((({genre_ids:e,genres:t})=>e?(0,l.getGenresByGenresId)(e):t.map((e=>e.name)))),r=[...new Set(t.flat())].sort();return r.splice(0,0,"All"),r}function d(e){const t=JSON.parse(sessionStorage.getItem("genres"));return e.map((e=>t.genres.find((t=>t.name===e)).id))}function u(e){const t=[];return m.LibraryFromLocalStorage.map((r=>{(r.genre_ids?r.genre_ids:r.genres.map((e=>e.id))).includes(...e)&&t.push(r)})),t}a=n("coBnA");function v(e,t,r){const n=document.querySelector("[data-load-more-btn]");if(e<=1)m.libraryMovieList.innerHTML=(0,a.generateMovieCardsMarkup)(r),n&&n.remove();else if(m.libraryMovieList.innerHTML=(0,a.generateMovieCardsMarkup)(o(r,t)),!n){s(),t+=1,m.libraryMovieList.classList.add("movie-cards-list-css");document.querySelector("[data-load-more-btn]").addEventListener("click",(function(){const n=document.querySelector("[data-div-load-more-btn]");e===t+1?(m.libraryMovieList.insertAdjacentHTML("beforeend",(0,a.generateMovieCardsMarkup)(o(r,t))),m.libraryMovieList.classList.add("movie-cards-list-css-no-btn"),m.libraryMovieList.classList.remove("movie-cards-list-css"),n.remove()):(m.libraryMovieList.insertAdjacentHTML("beforeend",(0,a.generateMovieCardsMarkup)(o(r,t))),t+=1)}))}}function b(e){if("All"==e)location.reload();else{const t=u(d([`${e}`]));v(t?Math.ceil(t.length/9):0,0,t)}}function g(e){const t=document.documentElement,r=document.querySelector(".dropdown-title-icon"),n=document.querySelector(".dropdown-title"),a=document.querySelector(".dropdown-list"),o=document.querySelector(".main-button"),i=document.querySelector(".floating-icon"),s={},l=e;for(let e=0;e<l.length;e++)s[l[e]]="M430 460h30V351.327a258.217 258.217 0 0 1-30 44.817V460zM230 0C102.975 0 0 102.975 0 230s102.975 230 230 230 230-102.975 230-230S357.025 0 230 0zm0 40c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55zM46.607 188.283c0-30.376 24.624-55 55-55 30.375 0 55 24.624 55 55 0 30.375-24.625 55-55 55s-55-24.625-55-55zm104.042 205.934c-30.375 0-55-24.624-55-55s24.625-55 55-55c30.376 0 55 24.624 55 55s-24.624 55-55 55zM230 250c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zm79.351 144.217c-30.376 0-55-24.624-55-55s24.624-55 55-55c30.375 0 55 24.624 55 55s-24.624 55-55 55zm49.042-150.934c-30.375 0-55-24.625-55-55 0-30.376 24.625-55 55-55 30.376 0 55 24.624 55 55 0 30.375-24.625 55-55 55z";window.addEventListener("load",(()=>{!function(e,t){t.innerHTML+=e.map(((e,t)=>`\n      <li class="dropdown-list-item">\n        <button class="dropdown-button list-button"  data-translate-value="${100*t}%">\n          <span class="text-truncate text-btn">${e}</span>\n        </button>\n      </li>\n    `)).join("")}(l,a)}));const c=(e,r,n)=>{t.style.setProperty("--rotate-arrow",0!==e?e+"deg":0),t.style.setProperty("--dropdown-height",0!==r?r+"rem":0),t.style.setProperty("--list-opacity",n)};o.addEventListener("click",(()=>{const e=4.6*l.length+3.5;"0"===(t.style.getPropertyValue("--dropdown-height")||"0")?c(180,e,1):c(0,0,0)})),a.addEventListener("mouseover",(e=>{const r=e.target.dataset.translateValue;t.style.setProperty("--translate-value",r)})),a.addEventListener("click",(e=>{const t=e.target.innerText.trim();b(t);const a=s[t];r.innerHTML=y(a),n.innerHTML=t,c(0,0,0)})),a.addEventListener("mousemove",(e=>{const r=t.style.getPropertyValue("--floating-icon-size")||0,n=e.clientX-a.getBoundingClientRect().x,o=e.clientY-a.getBoundingClientRect().y,l=e.target.innerText.trim(),c=s[l];i.innerHTML=y(c),t.style.setProperty("--floating-icon-left",n-r/2+"px"),t.style.setProperty("--floating-icon-top",o-r/2+"px")}))}function y(e){return`\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ganre-svg">\n            <path d="${e}" />\n          </svg>\n        `}var p=n("b5Bih");const m={libraryMovieList:document.querySelector("[data-library-list]"),libraryOppsText:document.querySelector("[data-library-oops-text]"),libraryFilterGanreBackdrop:document.querySelector("[data-library-filter-ganre]"),LibraryFromLocalStorage:JSON.parse(localStorage.getItem("library"))};let L={totalLibraryPage:m.LibraryFromLocalStorage?Math.ceil(m.LibraryFromLocalStorage.length/9):0,curentPage:0};!function(){if(m.LibraryFromLocalStorage&&m.LibraryFromLocalStorage.length){if(m.libraryFilterGanreBackdrop.innerHTML='\n  <button class="dropdown-button main-button">\n  <span class="dropdown-title-icon">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 512 512"\n      class="ganre-svg"\n    >\n      <path\n        d="M430 460h30V351.327a258.217 258.217 0 0 1-30 44.817V460zM230 0C102.975 0 0 102.975 0 230s102.975 230 230 230 230-102.975 230-230S357.025 0 230 0zm0 40c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55zM46.607 188.283c0-30.376 24.624-55 55-55 30.375 0 55 24.624 55 55 0 30.375-24.625 55-55 55s-55-24.625-55-55zm104.042 205.934c-30.375 0-55-24.624-55-55s24.625-55 55-55c30.376 0 55 24.624 55 55s-24.624 55-55 55zM230 250c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zm79.351 144.217c-30.376 0-55-24.624-55-55s24.624-55 55-55c30.375 0 55 24.624 55 55s-24.624 55-55 55zm49.042-150.934c-30.375 0-55-24.625-55-55 0-30.376 24.625-55 55-55 30.376 0 55 24.624 55 55 0 30.375-24.625 55-55 55z"\n      />\n    </svg>\n  </span>\n  <span class="dropdown-title text-truncate text-mein-btn">Genre</span>\n  <span class="dropdown-arrow">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 16 16"\n      class="ganre-svg"\n    >\n      <path\n        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"\n      />\n    </svg>\n  </span>\n</button>\n<div class="dropdown-list-container">\n  <div class="dropdown-list-wrapper">\n    <ul class="dropdown-list"></ul>\n    <div class="floating-icon" aria-hidden="true"></div>\n  </div>\n</div>\n        ',g(c(m.LibraryFromLocalStorage)),L.totalLibraryPage<=1)m.libraryMovieList.innerHTML=(0,a.generateMovieCardsMarkup)(m.LibraryFromLocalStorage),m.libraryMovieList.classList.add("movie-cards-list-css-no-btn");else{m.libraryMovieList.innerHTML=(0,a.generateMovieCardsMarkup)(o(m.LibraryFromLocalStorage,L.curentPage)),s(),L.curentPage+=1,m.libraryMovieList.classList.add("movie-cards-list-css");document.querySelector("[data-load-more-btn]").addEventListener("click",i)}m.libraryMovieList.addEventListener("click",p.onMovieCardClick)}else m.libraryOppsText.innerHTML='\n        <p>OOPS...<br>\n        We are very sorry!<br>\n        You don’t have any movies at your library.</p>\n          <div class="btn-list-search">\n          <a  href="./catalogue.html" class="btn btn-filled">\n          Search movie\n          </a>\n          </div>\n        ',m.libraryOppsText.classList.add("library-ops-text-css")}(),n("epHO8"),(0,n("aSB85").setGenresToSS)();document.querySelectorAll("[data-header-library]").forEach((e=>e.classList.add("js-current")));
//# sourceMappingURL=library.3549cc6c.js.map
