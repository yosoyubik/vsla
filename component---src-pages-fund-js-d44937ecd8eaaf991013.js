(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var a=n(8),r=(n(0),n(150)),i=n(152);t.default=function(){return Object(a.a)(r.a,null,Object(a.a)("div",null,"Welcome to VSLA funds"),Object(a.a)(i.a,null))}},148:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return b}),n.d(t,"StaticQuery",function(){return m});var a=n(8),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(147),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(148),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var f=n(33);n.d(t,"parsePath",function(){return f.a});var b=i.a.createContext({}),m=function(e){return Object(a.a)(b.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,n){"use strict";var a=n(8),r=(n(0),n(149)),i=n(153),o=n.n(i),c=function(e){return Object(a.a)("li",{style:{display:"inline-block",marginRight:"1rem"}},Object(a.a)(r.Link,{to:e.to},e.children))};t.a=function(e){var t=e.children;return o.a.setNavigation("nav-menu"),Object(a.a)("div",{style:{margin:"0 auto",maxWidth:650,padding:"1.25rem 1rem"}},Object(a.a)("header",{style:{marginBottom:"1.5rem"}},Object(a.a)(r.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},Object(a.a)("h3",{style:{display:"inline"}},"VSLA")),Object(a.a)("ul",{className:"wrapper",id:"nav-menu",style:{listStyle:"none",float:"right"}},Object(a.a)(c,{className:"navigable",to:"/"},"Home"),Object(a.a)(c,{className:"navigable",to:"/meetings/"},"Meetings"),Object(a.a)(c,{className:"navigable",to:"/members/"},"Members"),Object(a.a)(c,{className:"navigable",to:"/fund/"},"Fund"))),t)}},151:function(e,t,n){"use strict";n.r(t);n(51);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,n){"use strict";var a=n(8);n(0);t.a=function(){return Object(a.a)("footer",{className:"softkey"},Object(a.a)("div",{id:"softkey-left"},"Back"),Object(a.a)("div",{id:"softkey-center"},"SELECT"),Object(a.a)("div",{id:"softkey-right"},"Options"))}}}]);
//# sourceMappingURL=component---src-pages-fund-js-d44937ecd8eaaf991013.js.map