(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,a,t){"use strict";t.r(a);var n=t(8),s=(t(0),t(152)),i=(t(157),function(e){return Object(n.a)("article",{className:"media box"},Object(n.a)("figure",{className:"media-left"},Object(n.a)("p",{className:"image is-64x64"},Object(n.a)("img",{src:"https://bulma.io/images/placeholders/128x128.png"}))),Object(n.a)("div",{className:"media-content"},Object(n.a)("div",{className:"content"},Object(n.a)("p",null,Object(n.a)("strong",null,e.name)," ",Object(n.a)("small",null,e.phone)," ",Object(n.a)("small",null,e.age))),Object(n.a)("nav",{className:"level is-mobile"},Object(n.a)("div",{className:"level-item"},Object(n.a)("strong",null,e.shares),Object(n.a)("span",{className:"icon is-large has-text-success"},Object(n.a)("i",{className:"fas fa-2x fa-toolbox"}))),Object(n.a)("div",{className:"level-item"},Object(n.a)("strong",null,e.loans),Object(n.a)("span",{className:"icon is-large has-text-info"},Object(n.a)("i",{className:"fas fa-2x fa-hand-holding-usd"}))))))}),r=t(155),o=function(e){return Object(n.a)("div",{className:"level"},Object(n.a)("div",{className:"level-litem"},Object(n.a)(r.a,{class:"fas fa-lg fa-user-alt has-text-info",text:"Kara Mamobbi"})))};a.default=function(){return Object(n.a)("div",null,Object(n.a)(s.a,null),Object(n.a)(o,null),Object(n.a)(i,{name:"Amina",phone:"+227 173739279",shares:"30",loans:"4"}),Object(n.a)(i,{name:"Tijani",phone:"+227 24627835",shares:"15",loans:"34"}),Object(n.a)(i,{name:"Sani",phone:"+227 18394026",shares:"25",loans:"4"}),Object(n.a)(i,{name:"Murtala",phone:"+227 17363898",shares:"13",loans:"3"}))}},149:function(e,a,t){"use strict";var n=t(9);a.__esModule=!0,a.withPrefix=p,a.navigateTo=a.replace=a.push=a.navigate=a.default=void 0;var s=n(t(153)),i=n(t(54)),r=n(t(7)),o=n(t(51)),c=n(t(52)),l=n(t(4)),u=n(t(0)),d=t(18),f=t(150);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/vsla/"+e)}var m={activeClassName:l.default.string,activeStyle:l.default.object},b=function(e){function a(a){var t;t=e.call(this)||this,(0,c.default)((0,o.default)((0,o.default)(t)),"defaultGetProps",function(e){return e.isCurrent?{className:[t.props.className,t.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},t.props.style,t.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),t.state={IOSupported:n},t.handleRef=t.handleRef.bind((0,o.default)((0,o.default)(t))),t}(0,r.default)(a,e);var t=a.prototype;return t.componentDidUpdate=function(e,a){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},t.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},t.handleRef=function(e){var a,t,n,s=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(a=e,t=function(){___loader.enqueue((0,f.parsePath)(s.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(a),n.disconnect(),t())})})).observe(a))},t.render=function(){var e=this,a=this.props,t=a.to,n=a.getProps,r=void 0===n?this.defaultGetProps:n,o=a.onClick,c=a.onMouseEnter,l=(a.activeClassName,a.activeStyle,a.ref,a.innerRef,a.state),m=a.replace,b=(0,s.default)(a,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=p(t);return u.default.createElement(d.Link,(0,i.default)({to:h,state:l,getProps:r,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(t).pathname)},onClick:function(a){return o&&o(a),0!==a.button||e.props.target||a.defaultPrevented||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||(a.preventDefault(),v(t,{state:l,replace:m})),!0}},b))},a}(u.default.Component);b.propTypes=(0,i.default)({},m,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var h=b;a.default=h;var v=function(e,a){window.___navigate(p(e),a)};a.navigate=v;var O=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};a.push=O;a.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};a.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),O(e)}},150:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return b}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return m});var n=t(8),s=t(0),i=t.n(s),r=t(4),o=t.n(r),c=t(149),l=t.n(c);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var u=t(151),d=t.n(u);t.d(a,"PageRenderer",function(){return d.a});var f=t(33);t.d(a,"parsePath",function(){return f.a});var p=i.a.createContext({}),m=function(e){return Object(n.a)(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):Object(n.a)("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,a,t){var n;e.exports=(n=t(154))&&n.default||n},152:function(e,a,t){"use strict";var n=t(8),s=(t(0),t(150)),i=function(e){return Object(n.a)("li",null,Object(n.a)(s.Link,{activeClassName:"is-active",to:e.to},Object(n.a)("div",{className:"level"},Object(n.a)("div",{className:"level-item"},e.children),Object(n.a)("div",{className:"level-item"},Object(n.a)("span",{className:"icon fa-lg"},Object(n.a)("i",{className:e.class,"aria-hidden":"true"}))))))};a.a=function(e){var a=e.children;return Object(n.a)("div",{className:"tabs is-centered is-small"},Object(n.a)("ul",{className:"is-mobile"},Object(n.a)(i,{class:"fas is-medium fa-2x fa-home",to:"/"},"Soma"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-toolbox",to:"/fund/"},"Asusu"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-people-carry",to:"/meetings/"},"Taro"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-users",to:"/members/"},"Mambobi")),a)}},153:function(e,a){e.exports=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}},154:function(e,a,t){"use strict";t.r(a);t(53);var n=t(0),s=t.n(n),i=t(4),r=t.n(i),o=t(55),c=t(2),l=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return s.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=l},155:function(e,a,t){"use strict";var n=t(8);t(0);a.a=function(e){return Object(n.a)("a",{className:"button is-fullwidth"},Object(n.a)("div",{className:"columns is-mobile"},Object(n.a)("div",{className:"column"},Object(n.a)("span",{className:"icon is-large"},Object(n.a)("i",{className:e.class,"aria-hidden":"true"}))),Object(n.a)("div",{className:"column"},Object(n.a)("strong",null,e.text)),Object(n.a)("div",{className:"column"},Object(n.a)("span",{className:"icon"},Object(n.a)("i",{className:"fas fa-angle-down","aria-hidden":"true"})))))}},157:function(e,a,t){var n=t(25).f,s=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in s||t(17)&&n(s,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-members-js-325c119ab4d75d4b215c.js.map