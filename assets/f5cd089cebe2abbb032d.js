(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{183:function(t,e,r){var content=r(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("3fb289ba",content,!0,{sourceMap:!1})},190:function(t,e,r){var map={"./free-hosting-for-your-personal-website.md":[181,9],"./singapore-local-polytechnics-courses-visualisation.md":[182,10]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=190,t.exports=n},191:function(t,e,r){"use strict";var n=r(183);r.n(n).a},192:function(t,e,r){(t.exports=r(31)(!1)).push([t.i,".article a{color:#f56565;font-weight:700}.article a:hover{text-decoration:underline}.article h1{font-size:4rem}.article h1,.article h2{font-weight:500;margin-top:1rem;margin-bottom:1rem}.article h2{font-size:2.25rem}.article h3{font-size:1.5rem;font-weight:500;margin-top:1rem;margin-bottom:1rem}.article p{font-size:1.25rem;font-weight:400;margin-bottom:1.5rem;line-height:1.625;letter-spacing:.025em}.article .well{padding:1rem;background-color:#edf2f7;border-radius:.5rem}.article .well p:last-child{margin-bottom:0}.article ol{list-style-type:decimal;padding-left:2.5rem}.article ul{list-style-type:disc;padding-left:2.5rem}.article ol li,.article ul li{font-size:1.25rem;font-weight:400;margin-top:1rem;line-height:1.625;letter-spacing:.025em}.article .created-date{color:#a0aec0}.article img{height:auto;width:100%;margin:1.25rem auto;border-radius:.5rem}.article blockquote{border-left-width:8px;padding:.5rem;border-color:#edf2f7;background-color:#f7fafc;border-radius:.5rem}.article blockquote p{margin:0}.article hr{margin-top:.5rem;margin-bottom:.5rem}",""])},204:function(t,e,r){"use strict";r.r(e);r(29);var n,o=r(4),l={transition:"slide",asyncData:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,article;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,r(190)("./".concat(n.slug,".md"));case 3:return article=t.sent,t.abrupt("return",{attributes:article.attributes,html:article.html});case 5:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),data:function(){return{scroll:""}},computed:{parallex:function(){return"translateY(".concat(.4*this.scroll,"px)")}},methods:{handleScroll:function(){this.scroll=window.scrollY},parallexArticle:function(t){return"translateY(".concat(this.scroll*t,"px)")}},head:function(){return{title:this.attributes.title,meta:[{hid:"description",name:"description",content:this.attributes.title},{hid:"og:description",property:"og:description",content:this.attributes.title}]}},mounted:function(){window.addEventListener("scroll",this.handleScroll)}},c=(r(191),r(10)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("div",{staticClass:"bg-green-500 lg:pt-16"},[r("div",{ref:"jumbotron",staticClass:"w-full md:w-1/2 p-4 mx-auto"},[r("div",{style:{transform:t.parallexArticle(.6)}},[r("nuxt-link",{staticClass:"rounded-full px-5 p-2 border border-white text-white block md:inline-block text-center font-bold hover:underline",attrs:{to:"/articles"}},[t._v("Back to Articles")]),t._v(" "),r("img",{staticClass:"mt-5\n                10",attrs:{src:t.attributes.img,alt:t.attributes.imgAlt}})],1),t._v(" "),r("h1",{staticClass:"text-4xl lg:text-6xl text-center font-normal",style:{transform:t.parallexArticle(.5)}},[t._v(t._s(t.attributes.title))])])]),t._v(" "),r("div",{staticClass:"bg-white relative text-gray-900"},[r("div",{staticClass:"article w-full md:w-10/12 lg:w-1/2 p-4 mx-auto"},[r("p",[t._v(t._s(t.attributes.description))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.html)}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);