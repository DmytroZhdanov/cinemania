!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("i8Q71"),a("cs7FV"),a("gVa74");var s=a("bpxeT"),c=a("2TvXO"),i=a("iM4cy"),o=a("6xLQz");function d(e){var t=JSON.parse(sessionStorage.getItem("genres"));return e.map((function(e){return t.genres.find((function(t){return t.id===e})).name}))}function u(e){return e.map((function(e){var t=e.genre_ids,n=e.id,r=e.poster_path,a=e.release_date,s=e.title,c=e.vote_average,i=a.slice(0,4),u=r?"https://image.tmdb.org/t/p/w500".concat(r):"./images/image-not-found.jpg",l=(0,o.generateRatingStarsMarkup)(c),p=d(t).join(", ");return'<li class="cards-item" data-movie-card-id="'.concat(n,'">\n      <img\n        src="').concat(u,'"\n        alt="Poster of the movie"\n        class="movie-card-poster"\n      />\n      <div class="cards-content">\n        <div class="cards-text-content">\n          <h3 class="cards-title">').concat(s,'</h3>\n          <p class="cards-text">').concat(p," | ").concat(i,'</p>\n        </div>\n        <div class="rating-stars-wrapper">').concat(l,"\n        </div>\n      </div>\n    </li>")})).join("")}var l=document.querySelector("[data-weekly-trends-list]"),p=window.innerWidth<768?1:3;function f(){return(f=e(s)(e(c).mark((function t(){var n,r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.fetchWeekTrends)();case 2:n=e.sent,r=n.results.slice(0,p),a=u(r),l.innerHTML=a;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}!function(){f.apply(this,arguments)}(),a("7hKzD"),(0,a("9qBU4").setGenresToSS)();var v=document.querySelector("[data-header-home]"),g=document.querySelector("[data-header-catalogue]"),m=document.querySelector("[data-header-library]");v.classList.add("js-current"),m.classList.remove("js-current"),g.classList.remove("js-current")}();
//# sourceMappingURL=index.19d7ce4b.js.map
