!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in a){var e=a[n];delete a[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){a[n]=e},e.parcelRequired7c6=i),i("i8Q71"),i("cs7FV"),i("gVa74");var r=i("bpxeT"),c=i("2TvXO"),o=i("iM4cy"),s=i("6xLQz"),l=i("4cCwH");function u(n){return n.map((function(n){var e=n.genre_ids,t=n.id,a=n.poster_path,i=n.release_date,r=n.title,c=n.vote_average,o=i.slice(0,4),u=a?"https://image.tmdb.org/t/p/w500".concat(a):"./images/image-not-found.jpg",d=(0,s.generateRatingStarsMarkup)(c),p=(0,l.getGenresByGenresId)(e).join(", ");return'<li class="cards-item">\n                  <button type="button" class="btn cards-item-btn">\n                    <img\n                      src="'.concat(u,'"\n                      alt="Poster of the movie"\n                      class="movie-card-poster"\n                    />\n                    <div class="cards-content" id="').concat(t,'">\n                      <div class="cards-text-content">\n                        <h3 class="cards-title">').concat(r,'</h3>\n                        <p class="cards-text">').concat(p," | ").concat(o,'</p>\n                      </div>\n                      <div class="rating-stars-wrapper">').concat(d,"\n                      </div>\n                    </div>\n                  </button>\n                </li>")})).join("")}var d=i("csoLP");function p(n){if("DIV"===n.target.nodeName){var e=n.target.getAttribute("id");(0,d.openModalMovieDetails)(e)}}r=i("bpxeT"),c=i("2TvXO"),o=i("iM4cy"),l=i("4cCwH");function m(n,e){var t=localStorage.getItem("library");return t&&JSON.parse(t).find((function(n){return n.id===e}))?'<button type="button" data-remove-from-library-btn-upcoming class="'.concat(n,'">Remove from library</button>'):'<button type="button" data-add-to-library-btn-upcoming class="'.concat(n,'">Add to library</button>')}function g(n){var e=n.backdrop_path,t=n.title,a=n.genre_ids,i=n.overview,r=n.popularity,c=n.poster_path,o=n.release_date,s=n.vote_average,u=n.vote_count,d=n.id,p=(0,l.getGenresByGenresId)(a).join(", ");return' <picture>\n      <source\n        srcset="https://image.tmdb.org/t/p/original/'.concat(e,'"\n        media="(min-width:1280px)"\n      />\n      <source\n        srcset="https://image.tmdb.org/t/p/original/').concat(e,'"\n        media="(min-width:768px)"\n      />\n      <source\n        srcset="https://image.tmdb.org/t/p/original/').concat(c,'"\n        media="(min-width:320px)"\n      />\n      <img\n        class="upcoming-movie-img"\n        src="https://image.tmdb.org/t/p/original/').concat(c,'"\n        alt="').concat(t,'"\n      />\n    </picture>\n    \n    <div class="upcoming-column">\n      <h2 class="upcoming-headline">').concat(t,'</h2>\n      <div class="upcoming-wrap">\n        <div class="upcoming-inner-wrap">\n          <div class="upcoming-wrapper upcoming-wrapper-gap">\n            <ul class="upcoming-list">\n              <li class="upcoming-item-data">\n                <p class="upcoming-subject">Release date</p>\n              </li>\n              <li class="upcoming-item-data-num">\n                <p class="upcoming-date">').concat(o.split("-").reverse().join("."),'</p>\n              </li>\n            </ul>\n    \n            <ul class="upcoming-list">\n              <li class="upcoming-item-vote">\n                <p class="upcoming-subject">Vote / Votes</p>\n              </li>\n              <li class="upcoming-item-vote-num">\n                <p class="upcoming-vote">\n                  <span class="upcoming-inner-box">').concat(s,'</span>\n                  <span class="upcoming-inner-color">/</span>\n                  <span class="upcoming-inner-box-votes">').concat(u,'</span>\n                </p>\n              </li>\n            </ul>\n          </div>\n          <div class="upcoming-wrapper">\n            <ul class="upcoming-list">\n              <li class="upcoming-item-pop">\n                <p class="upcoming-subject">Popularity</p>\n              </li>\n              <li class="upcoming-item-pop-num">\n                <p class="upcoming-famous">').concat(r.toFixed(1),'</p>\n              </li>\n            </ul>\n    \n            <ul class="upcoming-list">\n              <li class="upcoming-item-genre">\n                <p class="upcoming-subject">Genre</p>\n              </li>\n              <li class="upcoming-item-genre-num">\n                <p class="upcoming-janres">').concat(p,'</p>\n              </li>\n            </ul>\n          </div>\n        </div>\n    \n        <h3 class="upcoming-caption">About</h3>\n        <p class="upcoming-description">\n          ').concat(i,"\n        </p>\n        <div data-library-btn-upcoming>\n          ").concat(m("btn btn-filled",d),"\n        </div>\n      </div>\n    </div>")}var v=i("gNR05");function b(n,e,t){(0,v.removeMovieFromLibrary)(t);var a=document.querySelector("[data-library-btn-upcoming]"),i=m(n,e);a.innerHTML=i,document.querySelector("[data-add-to-library-btn-upcoming]").addEventListener("click",(function(){h(n,e,t)}),{once:!0})}var f=i("kyEhf");function h(n,e,t){(0,f.addMovieToLibrary)(t);var a=document.querySelector("[data-library-btn-upcoming]"),i=m(n,e);a.innerHTML=i,document.querySelector("[data-remove-from-library-btn-upcoming]").addEventListener("click",(function(){b(n,e,t)}),{once:!0})}function y(n,e,t,a){n?document.querySelector("[data-add-to-library-btn-upcoming]").addEventListener("click",(function(){h(e,t,a)}),{once:!0}):document.querySelector("[data-remove-from-library-btn-upcoming]").addEventListener("click",(function(){b(e,t,a)}),{once:!0})}var w=document.querySelector(".js-upcomming-cards"),x=document.querySelector(".js-upcomming-default");function L(){return(L=n(r)(n(c).mark((function e(){var t,a,i,r,s;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.fetchUpcomingThisMonth)();case 3:t=n.sent,a=t.results,i=a[Math.floor(Math.random()*a.length)],(r=document.querySelector("[data-upcoming]")).innerHTML=g(i),s=r.innerHTML.includes("Add to library"),"btn btn-filled",y(s,"btn btn-filled",i.id,i),n.next=22;break;case 13:if(n.prev=13,n.t0=n.catch(0),console.error(n.t0.message),w.classList.add("visually-hidden"),x.setAttribute("data-shown",!0),"true"!==M.getAttribute("data-shown")){n.next=21;break}return M.lastElementChild.textContent="We don’t have any results.",n.abrupt("return");case 21:x.classList.remove("visually-hidden");case 22:case"end":return n.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){L.apply(this,arguments)}();var k=document.querySelector("[data-weekly-trends-list]"),S=document.querySelector(".js-weekly-trends-cards"),M=document.querySelector(".js-weekly-trends-default"),q=window.innerWidth<768?1:3;function T(){return(T=n(r)(n(c).mark((function e(){var t,a,i;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.fetchWeekTrends)();case 3:t=n.sent,a=t.results.slice(0,q),i=u(a),k.innerHTML=i,k.addEventListener("click",(function(n){p(n)})),n.next=19;break;case 10:if(n.prev=10,n.t0=n.catch(0),console.error(n.t0.message),S.classList.add("visually-hidden"),M.setAttribute("data-shown",!0),"true"!==x.getAttribute("data-shown")){n.next=18;break}return x.lastElementChild.textContent="We don’t have any results.",n.abrupt("return");case 18:M.classList.remove("visually-hidden");case 19:case"end":return n.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){T.apply(this,arguments)}(),i("7hKzD"),(0,i("9qBU4").setGenresToSS)(),document.querySelectorAll("[data-header-home]").forEach((function(n){return n.classList.add("js-current")}))}();
//# sourceMappingURL=index.cd3f99e1.js.map
