(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,a){"use strict";a.r(t);var n=a(8),r=(a(0),a(152)),i=a(156),s=a.n(i),o=function(){return Object(n.a)("div",{className:"card"},Object(n.a)("div",{className:"card-content is-centered"},Object(n.a)("figure",{className:"image is-64x64"},Object(n.a)("img",{src:s.a,alt:"logo"}))),Object(n.a)("div",{className:"card-content"},Object(n.a)("div",{className:"content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ",Object(n.a)("a",null,"@bulmaio"),".")))};t.default=function(){return Object(n.a)("div",null,Object(n.a)(r.a,null),Object(n.a)(o,null))}},149:function(e,t,a){"use strict";var n=a(9);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(153)),i=n(a(54)),s=n(a(7)),o=n(a(51)),c=n(a(52)),u=n(a(4)),l=n(a(0)),d=a(18),f=a(150);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/vsla/"+e)}var v={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var a;a=e.call(this)||this,(0,c.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,s=void 0===n?this.defaultGetProps:n,o=t.onClick,c=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),v=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=p(a);return l.default.createElement(d.Link,(0,i.default)({to:h,state:u,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(a,{state:u,replace:v})),!0}},m))},t}(l.default.Component);m.propTypes=(0,i.default)({},v,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var h=m;t.default=h;var b=function(e,t){window.___navigate(p(e),t)};t.navigate=b;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return v});var n=a(8),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(149),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(151),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var f=a(33);a.d(t,"parsePath",function(){return f.a});var p=i.a.createContext({}),v=function(e){return Object(n.a)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(n.a)("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}v.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},152:function(e,t,a){"use strict";var n=a(8),r=(a(0),a(150)),i=function(e){return Object(n.a)("li",null,Object(n.a)(r.Link,{activeClassName:"is-active",to:e.to},Object(n.a)("div",{className:"level"},Object(n.a)("div",{className:"level-item"},e.children),Object(n.a)("div",{className:"level-item"},Object(n.a)("span",{className:"icon fa-lg"},Object(n.a)("i",{className:e.class,"aria-hidden":"true"}))))))};t.a=function(e){var t=e.children;return Object(n.a)("div",{className:"tabs is-centered is-small"},Object(n.a)("ul",{className:"is-mobile"},Object(n.a)(i,{class:"fas is-medium fa-2x fa-home",to:"/"},"Soma"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-toolbox",to:"/fund/"},"Asusu"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-people-carry",to:"/meetings/"},"Taro"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-users",to:"/members/"},"Mambobi")),t)}},153:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},154:function(e,t,a){"use strict";a.r(t);a(53);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(55),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},156:function(e,t,a){e.exports=a.p+"static/care-43e9bff548f0fd20287ad41a4b143f59.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-d9a75eac77fa888d35f7.js.map