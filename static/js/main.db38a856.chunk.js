(this["webpackJsonpbeers-api."]=this["webpackJsonpbeers-api."]||[]).push([[0],{22:function(A,e,c){},23:function(A,e,c){},30:function(A,e,c){},31:function(A,e,c){},32:function(A,e,c){},33:function(A,e,c){},34:function(A,e,c){},35:function(A,e,c){},36:function(A,e,c){},37:function(A,e,c){},38:function(A,e,c){},39:function(A,e,c){},40:function(A,e,c){"use strict";c.r(e);var n=c(1),t=c.n(n),a=c(15),s=c.n(a),l=(c(22),c(8)),r=c(5),i=c(2),o=(c(23),c(0));var g=function(A){var e=A.beersArr,c=Object(i.f)().beerId;return e.find((function(A){return A.id===c})),Object(o.jsx)("div",{})},j=(c(30),c(31),function(A){var e=A.placeholder,c=A.handleInput,n=A.searchTerm;return Object(o.jsx)("form",{className:"search",children:Object(o.jsx)("input",{className:"nav__input",type:"text",value:n,placeholder:e,onChange:c})})}),b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBrZVNbsIwEIXHjsOiP1KOEHbdRHUVQbsr3ABOUHoy4ASoJ4Bl1YBqKVK35QhZhwTXA6WkJY6dlFmNlTff89gjB0CFz7kXhN0BnCGQc8O5jznBxHXcdyDEIwCCZmlfCJFAzcANXrHWXDG4WiZOlrYpBddDMAqk+rBVAq6E/wBjeDljj/RDRAKknB6EdQ1KwMgQ8XL5QnERr6JREwMdmGUXfcxJURyEnYk6oqfDuuoOqsBCLJITuK2BDbgUbjKwBWvhOoM0S4eMtWY24Ep4mcHfkCAXLLscloGN8EoDCdN49TaqqjXC9wbdT6X0C+C1ArdNddQkuA3vx7/A+y35QaczNtVqd45Tcc3cmZL0QFstJ3EUPes+Ux0Yx60IxqlwMtomIMWPUJJRVQdUBy4ft9c1zTZ9WwNiDz6OG745W+bOJRB+JJ0eEakLrmNAmoBtDXZn3gSMgW9N1R2QIAwHQJxZXbCpg5zIO+rk+ULlSVNwaQdSJq2Nk3w7P/i7Ds4QyOG8t/uDfQE3Dg8rHoPtugAAAABJRU5ErkJggg==";c(32),c(33);var d=function(A){var e=A.handleHighABVClick,c=A.selection,n=A.filterHighABV;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"nav__HighABV",onClick:e,value:n,selection:c,children:"High ABV (<6.0%)"})})};c(34);var B=function(A){var e=A.handleClassicRangeClick,c=A.selection,n=A.filterClassic;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"nav__ClassicRange",onClick:e,value:n,selection:c,children:"Classic Range"})})};c(35);var m=function(A){var e=A.handleAcidicClick,c=A.selection,n=A.filterAcidic;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"nav__Acidic",onClick:e,value:n,selection:c,children:"Acidic"})})};c(36);var u=function(A){var e=A.handleAllBeersClick;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"nav__SeeAllBeers",onClick:e,children:"All Beers"}),Object(o.jsx)("span",{className:"toolTipText",children:"See the entire range"})]})};var h=function(A){var e=A.handleHighABVClick,c=A.handleAcidicClick,n=A.handleClassicRangeClick,t=A.handleAllBeersClick;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)(u,{handleAllBeersClick:t})}),Object(o.jsx)(r.b,{to:"/highABV",children:Object(o.jsx)(d,{handleHighABVClick:e})}),Object(o.jsx)(r.b,{to:"/classicRange",children:Object(o.jsx)(B,{handleClassicRangeClick:n})}),Object(o.jsx)(r.b,{to:"/acidic",children:Object(o.jsx)(m,{handleAcidicClick:c})})]})},O=(c(37),function(A){var e=A.toggleNav;return Object(o.jsx)("div",{className:"nav-menu",children:Object(o.jsxs)("div",{className:"nav-menu__content",children:[Object(o.jsx)("img",{src:b,alt:"Close menu",className:"nav-menu__cross",onClick:e}),Object(o.jsx)(r.b,{to:"/",className:"nav-menu__item",onClick:e,children:"Home"}),Object(o.jsx)(r.b,{to:"/acidic",title:"Rated Albums",className:"nav-menu__item",onClick:e,children:"Acidic Beers"}),Object(o.jsx)(r.b,{to:"/highABV",className:"nav-menu__item",onClick:e,children:"High ABV Beers"}),Object(o.jsx)(r.b,{to:"/classicRange",className:"nav-menu__item",onClick:e,children:"Classic Range Beers"})]})})}),f=function(A){var e=Object(n.useState)(!1),c=Object(l.a)(e,2),t=c[0],a=c[1],s=function(){a(!t)},r=A.placeholder,i=A.searchTerm,g=A.handleInput,d=A.handleHighABVClick,B=A.handleClassicRangeClick,m=A.handleAcidicClick,u=A.handleAllBeersClick;return Object(o.jsxs)("nav",{className:"sideNav",children:[t&&Object(o.jsx)(O,{toggleNav:s}),Object(o.jsx)(j,{className:"sideNav__SearchBar",placeholder:r,searchTerm:i,handleInput:g}),Object(o.jsx)(h,{className:"sideNav__BeerFilter",handleAcidicClick:m,handleClassicRangeClick:B,handleHighABVClick:d,handleAllBeersClick:u}),Object(o.jsx)("img",{className:"menu-cross",src:b,alt:"cross"}),Object(o.jsx)("img",{className:"hamburger",src:"data:image/png;base64,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",alt:"menu",onClick:s})]})},k=(c(38),c(39),function(A){var e=A.beersArr.map((function(A,e){var c=A.name,n=A.image_url,t=A.tagline,a=A.description,s=A.food_pairing;A.id;return Object(o.jsx)("div",{className:"flip-card beer-tile",children:Object(o.jsxs)("div",{className:"flip-card-inner",children:[Object(o.jsxs)("div",{className:"flip-card-front",children:[Object(o.jsx)("h3",{className:"beer-tile__header",children:c}),Object(o.jsx)("img",{className:"beer-tiles__img",src:n,alt:c}),Object(o.jsxs)("h4",{className:"beer-tile__tagline",children:['"',t,'"']})]}),Object(o.jsxs)("div",{className:"flip-card-back",children:[Object(o.jsx)("h3",{className:"beer-tile__header",children:c}),Object(o.jsxs)("div",{className:"beer-tile__description-box",children:[Object(o.jsx)("h4",{className:"beer-tile__heading",children:"Description"}),Object(o.jsxs)("h5",{className:"beer-tile__description",children:[a?function(A){if(A.length>200){var e=A.indexOf(".",200);return A.split("").slice(0,e+1).join("")}}(a):"Sorry, no description for this beer"," "]}),Object(o.jsx)("h4",{className:"beer-tile__heading",children:"Drink this beer with..."}),Object(o.jsx)("h5",{className:"beer-tile__description",children:s})]})]})]})},c+e)}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"beer-tiles",children:e})})}),C=c.p+"static/media/brewDogWhite.11452bf1.png",N=function(A){var e=A.beersArr,c=A.placeholder,n=A.searchTerm,t=A.handleInput;return Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"brewDogLogo",src:C,alt:"brewDogLogo"}),Object(o.jsx)(j,{placeholder:c,searchTerm:n,handleInput:t})]}),Object(o.jsx)("section",{className:"beerCards",children:Object(o.jsx)(k,{beersArr:e})})]})},p=function(){var A=Object(n.useState)("?page=1&per_page=80"),e=Object(l.a)(A,2),c=e[0],t=e[1],a=Object(n.useState)(""),s=Object(l.a)(a,2),j=s[0],b=s[1],d=Object(n.useState)([]),B=Object(l.a)(d,2),m=B[0],u=B[1],h=Object(n.useState)([]),O=Object(l.a)(h,2),k=O[0],C=O[1],p=Object(n.useState)([]),y=Object(l.a)(p,2),Q=y[0],D=y[1],v=Object(n.useState)([]),M=Object(l.a)(v,2),Z=M[0],w=M[1];Object(n.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers".concat(c)).then((function(A){return A.json()})).then((function(A){u(A)})),fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80").then((function(A){return A.json()})).then((function(A){C(A)})),fetch("https://api.punkapi.com/v2/beers?abv_gt=6").then((function(A){return A.json()})).then((function(A){D(A)})),fetch("https://api.punkapi.com/v2/beers?brewed_before=01-2010").then((function(A){return A.json()})).then((function(A){w(A)}))}),[c]);var x=function(A){var e=A.target.value.toLowerCase();b(e)},G=m.filter((function(A){return A.name.toLowerCase().includes(j)})),z=k.filter((function(A){return A.ph<4}));return Object(o.jsx)(r.a,{children:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("header",{children:Object(o.jsx)(f,{placeholder:"Search",searchTerm:j,handleInput:x,handleAcidicClick:function(){t("?page=2&per_page=80")},handleClassicRangeClick:function(){t("?page=2&per_page=80")},handleHighABVClick:function(){t("?page=2&per_page=80")},handleAllBeersClick:function(){t("?page=2&per_page=80")}})}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/acidic",children:Object(o.jsx)(N,{beersArr:z,placeholder:"Search",searchTerm:j,handleInput:x})}),Object(o.jsx)(i.a,{path:"/classicRange",children:Object(o.jsx)(N,{beersArr:Z,placeholder:"Search",searchTerm:j,handleInput:x})}),Object(o.jsx)(i.a,{path:"/highABV",children:Object(o.jsx)(N,{beersArr:Q,placeholder:"Search",searchTerm:j,handleInput:x})}),Object(o.jsx)(i.a,{path:"/beer/:beerId",children:Object(o.jsx)(g,{beersArr:k})}),Object(o.jsx)(i.a,{path:"/",children:Object(o.jsx)(N,{beersArr:G,placeholder:"Search",searchTerm:j,handleInput:x})})]})]})})},y=function(A){A&&A instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(e){var c=e.getCLS,n=e.getFID,t=e.getFCP,a=e.getLCP,s=e.getTTFB;c(A),n(A),t(A),a(A),s(A)}))};s.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.db38a856.chunk.js.map