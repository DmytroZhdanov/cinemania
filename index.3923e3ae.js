!function(){function e(e){return e&&e.__esModule?e.default:e}function r(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var r=i[e];delete i[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){i[e]=r},t.parcelRequired7c6=o),o.register("ijwS8",(function(e,r){})),o.register("i1PHi",(function(e,r){o("4cCwH"),o("gedTJ"),o("jYJVO"),o("4qEtv")})),o.register("4cCwH",(function(t,n){r(t.exports,"getGenresByGenresId",(function(){return c}));var i=o("bpxeT"),a=o("2TvXO"),u=o("iM4cy");function c(e){return l.apply(this,arguments)}function l(){return(l=e(i)(e(a).mark((function r(t){var n,i;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.fetchGenresList)();case 2:return n=e.sent,i=t.map((function(e){return n.genres.find((function(r){return r.id===e})).name})),e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))).apply(this,arguments)}})),o.register("gedTJ",(function(e,t){function n(e,r){var t=localStorage.getItem(library);return JSON.parse(t).find((function(e){return e.id===r}))?'<button type="button" data-remove-from-library-btn class="'.concat(e,'">Remove from library</button>'):'<button type="button" data-add-to-library-btn class="'.concat(e,'">Add to library</button>')}r(e.exports,"generateLibraryBtnMarkup",(function(){return n}))})),o.register("jYJVO",(function(e,t){function n(e){if(localStorage.getItem(library)){var r=localStorage.getItem(library),t=JSON.parse(r);t.push(e),localStorage.setItem("library",JSON.stringify(t))}else{var n=[];n.push(e),localStorage.setItem("library",JSON.stringify(n))}}r(e.exports,"onLibraryBtnAddClick",(function(){return n}))})),o.register("4qEtv",(function(e,t){function n(e){var r=localStorage.getItem(library),t=JSON.parse(r).filter((function(r){return r.id!==e.id}));localStorage.setItem("library",JSON.stringify(t))}r(e.exports,"onLibraryBtnRemoveClick",(function(){return n}))}))}();
//# sourceMappingURL=index.3923e3ae.js.map
