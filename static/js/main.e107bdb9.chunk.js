(this["webpackJsonpprojet-11"]=this["webpackJsonpprojet-11"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(12),i=c.n(n),r=c(3),o=c(4),l=c(6),d=c(5),j=c(8),u=c(2),m=c(0),h=a.a.createContext(),b=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).fetchAccommodations=function(){try{fetch("/api/data.json").then((function(e){return e.json()})).then((function(e){return s.setState({accommodations:e})}))}catch(e){console.log(e)}},s.state={accommodations:[]},s}return Object(o.a)(c,[{key:"render",value:function(){return Object(m.jsx)(h.Provider,{value:{accommodations:this.state.accommodations,fetchAccommodations:this.fetchAccommodations},children:this.props.children})}}]),c}(a.a.Component),O=c.p+"static/media/LogoHeader.4d157f85.svg",x=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"header",children:Object(m.jsxs)("nav",{className:"header-nav",children:[Object(m.jsx)("div",{className:"header-logo",children:Object(m.jsx)(j.b,{to:"/",children:Object(m.jsx)("img",{src:O,alt:"Kasa Logo"})})}),Object(m.jsxs)("ul",{className:"header-menu",children:[Object(m.jsx)(j.c,{to:"/",children:Object(m.jsx)("li",{className:"header-menu-link",children:"Accueil"})}),Object(m.jsx)(j.c,{to:"/about-us",children:Object(m.jsx)("li",{className:"header-menu-link",children:"A Propos"})})]})]})})}}]),c}(s.Component),p=c.p+"static/media/LogoFooter.f80e0836.svg",v=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsxs)("section",{className:"footer-container",children:[Object(m.jsx)(j.b,{to:"/",children:Object(m.jsxs)("h2",{className:"footer-logo",children:[Object(m.jsx)("img",{src:p,alt:"Kasa Logo"}),Object(m.jsx)("span",{className:"sr-only",children:"Kasa"})]})}),Object(m.jsx)("p",{className:"footer-copyright",children:"\xa9 2020 Kasa. All rights reserved"})]})})}}]),c}(s.Component),g=c.p+"static/media/home.8dbc3e4f.jpg",f=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return 0===this.context.accommodations.length&&this.context.fetchAccommodations(),Object(m.jsxs)("div",{className:"page-home",children:[Object(m.jsxs)("div",{className:"page-home-header",children:[Object(m.jsx)("img",{src:g,alt:"landscape"}),Object(m.jsx)("h1",{className:"page-home-header-title",children:"Chez vous, partout et ailleurs"})]}),this.context.accommodations.length&&Object(m.jsx)("div",{className:"page-home-list",children:this.context.accommodations.map((function(e){return Object(m.jsx)(j.b,{to:"/accommodation/".concat(e.id),state:e,children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-image",children:Object(m.jsx)("img",{src:e.cover,alt:e.title})}),Object(m.jsx)("div",{className:"card-header",children:e.title})]})},e.id)}))})]})}}]),c}(s.Component);f.contextType=h;var N=c(9),y=c.p+"static/media/chevron-left.26fa51a3.svg",k=c.p+"static/media/chevron-right.4634ee0d.svg";function C(e){var t=e.direction,c=e.goTo;return Object(m.jsx)("button",{onClick:c,type:"button",className:"next"===t?"slider-button next":"slider-button previous",children:Object(m.jsx)("img",{src:"next"===t?k:y,alt:"next"===t?"Next image":"Previous image"})})}function q(e){var t=e.pictures,c=Object(s.useState)({index:0,inProgress:!1}),a=Object(N.a)(c,2),n=a[0],i=a[1];return Object(m.jsxs)("div",{className:"slider",children:[t.map((function(e,t){return n.index===t&&Object(m.jsx)("div",{className:"slider-picture",children:Object(m.jsx)("img",{src:e,alt:""})},"slider-"+t)})),Object(m.jsx)(C,{direction:"next",goTo:function(){if(!n.inProgress){var e=n.index;n.index<t.length-1?e++:e=0,i({index:e,inProgress:!0}),setTimeout((function(){return i({index:e,inProgress:!1})}),400)}}}),Object(m.jsx)(C,{direction:"previous",goTo:function(){if(!n.inProgress){var e=n.index;n.index>0?e--:e=t.length-1,i({index:e,inProgress:!0}),setTimeout((function(){return i({index:e,inProgress:!1})}),400)}}}),Object(m.jsxs)("div",{className:"slider-counter",children:[n.index+1," / ",t.length]})]})}var w=c.p+"static/media/star-full.4194ea79.svg",P=c.p+"static/media/star-empty.8c1c3798.svg";function A(e){for(var t=e.stars,c=[],s=1;s<=5;s++)c.push(s<=t);return Object(m.jsx)("ul",{className:"rating",children:c.map((function(e,t){return Object(m.jsx)("li",{className:e?"rating-star active":"rating-star",children:Object(m.jsx)("img",{src:e?w:P,alt:e?"Star full":"Star empty"})},"star-".concat(t))}))})}var L=c.p+"static/media/chevron-down.870199ea.svg",S=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var s,a=e.title,n=e.children;return Object(r.a)(this,c),(s=t.call(this)).title=a,s.children=n,s.contentRef=null,s.state={show:!1},s}return Object(o.a)(c,[{key:"toggleShow",value:function(){this.setState({show:!this.state.show})}},{key:"getContentHeight",value:function(){return this.contentRef.scrollHeight}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:this.state.show?"accordion active":"accordion",children:[Object(m.jsxs)("div",{className:"accordion-header",onClick:this.toggleShow.bind(this),children:[Object(m.jsx)("span",{children:this.title}),Object(m.jsx)("img",{src:L,alt:"Chevron"})]}),Object(m.jsx)("div",{className:"accordion-content",ref:function(t){return e.contentRef=t},style:{height:this.state.show?this.getContentHeight():0},children:Object(m.jsx)("div",{className:"accordion-content-wrapper",children:this.children})})]})}}]),c}(s.Component);function K(){var e=Object(s.useState)(),t=Object(N.a)(e,2),c=t[0],a=t[1],n=Object(u.e)(),i=Object(s.useContext)(h),r=Object(u.f)(),o=Object(u.g)();return Object(s.useEffect)((function(){if(n.state)a(n.state);else if(i.accommodations&&i.accommodations.length){var e=i.accommodations.find((function(e){return e.id===o.id}));e?a(e):r("/404")}else i.fetchAccommodations()}),[n,i,o,r]),c?Object(m.jsxs)("div",{className:"accommodation",children:[Object(m.jsx)(q,{pictures:c.pictures}),Object(m.jsxs)("div",{className:"accommodation-header",children:[Object(m.jsxs)("div",{className:"accommodation-header-1",children:[Object(m.jsx)("h1",{className:"accommodation-header-title",children:c.title}),Object(m.jsx)("p",{className:"accommodation-header-secondary",children:c.location}),Object(m.jsx)("ul",{className:"accommodation-header-tags",children:c.tags.map((function(e,t){return Object(m.jsx)("li",{className:"accommodation-header-tag",children:e},"tag-".concat(t))}))})]}),Object(m.jsxs)("div",{className:"accommodation-header-2",children:[Object(m.jsxs)("div",{className:"accommodation-header-host",children:[Object(m.jsx)("div",{className:"accommodation-header-host-name",children:c.host.name}),Object(m.jsx)("div",{className:"accommodation-header-host-picture",children:Object(m.jsx)("img",{src:c.host.picture,alt:c.host.name})})]}),Object(m.jsx)(A,{stars:c.rating})]})]}),Object(m.jsxs)("div",{className:"accommodation-content",children:[Object(m.jsx)("div",{className:"accommodation-content-description",children:Object(m.jsx)(S,{title:"Description",children:c.description})}),Object(m.jsx)("div",{className:"accommodation-content-equipments",children:Object(m.jsx)(S,{title:"\xc9quipements",children:Object(m.jsx)("ul",{children:c.equipments.map((function(e,t){return Object(m.jsx)("li",{className:"accommodation-content-equipment",children:e},"equipment-".concat(t))}))})})})]})]}):Object(m.jsx)(m.Fragment,{})}var T=c.p+"static/media/about-us.5e30ecd5.jpg",R=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"page-about-us",children:[Object(m.jsx)("div",{className:"page-about-us-header",children:Object(m.jsx)("img",{src:T,alt:"landscape"})}),Object(m.jsxs)("div",{className:"page-about-us-content",children:[Object(m.jsx)(S,{title:"Fiabilit\xe9",children:"Les annonces post\xe9es sur Kasa garantissent une fiabilit\xe9 totale. Les photos sont conformes aux logements, et toutes les informations sont r\xe9guli\xe8rement v\xe9rifi\xe9es  par nos \xe9quipes."}),Object(m.jsx)(S,{title:"Respect",children:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entra\xeenera une exclusion de notre plateforme."}),Object(m.jsx)(S,{title:"Service",children:"Nos \xe9quipes se tiennent \xe0 votre disposition pour vous fournir une exp\xe9rience parfaite. N'h\xe9sitez pas \xe0 nous contacter si vous avez la moindre question."}),Object(m.jsx)(S,{title:"Responsabilit\xe9",children:"La s\xe9curit\xe9 est la priorit\xe9 de Kasa. Aussi bien pour nos h\xf4tes que pour les voyageurs, chaque logement correspond aux crit\xe8res de s\xe9curit\xe9 \xe9tablis par nos services. En laissant une note aussi bien \xe0 l'h\xf4te qu'au locataire, cela permet \xe0 nos \xe9quipes de v\xe9rifier que les standards sont bien respect\xe9s. Nous organisons \xe9galement des ateliers sur la s\xe9curit\xe9 domestique pour nos h\xf4tes."})]})]})}}]),c}(s.Component),z=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"page-error404",children:[Object(m.jsx)("h1",{className:"page-error404-title",children:"404"}),Object(m.jsx)("p",{className:"page-error404-secondary",children:"Oups! La page que vous demandez n'existe pas."}),Object(m.jsx)(j.b,{to:"/",className:"page-error404-link",children:"Retourner sur la page d\u2019accueil"})]})}}]),c}(s.Component),H=(c(18),function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(m.jsx)(b,{children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(x,{}),Object(m.jsx)("main",{className:"main",children:Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/",exact:!0,element:Object(m.jsx)(f,{})}),Object(m.jsx)(u.a,{path:"/accommodation/:id",exact:!0,element:Object(m.jsx)(K,{})}),Object(m.jsx)(u.a,{path:"/about-us",exact:!0,element:Object(m.jsx)(R,{})}),Object(m.jsx)(u.a,{path:"/404",exact:!0,element:Object(m.jsx)(z,{})})]})}),Object(m.jsx)(v,{})]})})}}]),c}(s.Component));i.a.render(Object(m.jsx)(H,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e107bdb9.chunk.js.map