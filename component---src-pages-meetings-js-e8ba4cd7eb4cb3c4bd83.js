(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),i=a(51),r=a.n(i),o=a(8),l=a(0),c=a.n(l),u=a(153),d=function(e){return Object(o.a)("div",{className:"box",style:{marginBottom:"0px",padding:"0px"}},Object(o.a)("article",{className:"media"},Object(o.a)("div",{className:"media-content"},Object(o.a)("div",{className:"level content",style:{marginBottom:"0px"}},Object(o.a)("div",{className:"level-item"},Object(o.a)("strong",{className:"is-large"},e.date))),Object(o.a)("div",{className:"level content is-mobile"},Object(o.a)("div",{className:"level-item"},Object(o.a)("strong",null,e.people),Object(o.a)("span",{className:"icon is-large"},Object(o.a)("i",{className:"fas fa-2x fa-users","aria-hidden":"true"}))),Object(o.a)("div",{className:"level-item"},Object(o.a)("strong",null,e.ins),Object(o.a)("span",{className:"icon is-large has-text-success"},Object(o.a)("i",{className:"fas fa-2x fa-sign-in-alt","aria-hidden":"true"})),Object(o.a)("span",{className:"icon is-large has-text-danger"},Object(o.a)("i",{className:"fas fa-2x fa-sign-out-alt","aria-hidden":"true"})),Object(o.a)("strong",null,e.outs))))))},p=a(156),f=a(154),m={fund:{people:30,inputs:300,outputs:45},members:[{name:"Amina",phone:173739279,shares:31,loans:4},{name:"Fara",phone:24627835,shares:15,loans:34},{name:"Ladi",phone:18394026,shares:25,loans:4},{name:"Hannah",phone:17363898,shares:13,loans:3}],meetings:[{people:"6",date:"01-02-19",ins:"10",outs:"3"},{people:"10",date:"03-04-18",ins:"100",outs:"80"},{people:"15",date:"29-05-17",ins:"145",outs:"30"},{people:"21",date:"02-06-16",ins:"10",outs:"13"},{people:"9",date:"015-07-15",ins:"30",outs:"33"},{people:"18",date:"03-08-14",ins:"10",outs:"53"},{people:"20",date:"15-10-13",ins:"70",outs:"3"}]},h=function(e){return Object(o.a)("div",{className:"level",style:{marginBottom:"10px"}},Object(o.a)("div",{className:"level-litem"},Object(o.a)(p.a,{onClick:e.onClick,class:"fas fa-lg fa-people-carry has-text-info",text:"Fara Taro"})))},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).newMeeting=a.newMeeting.bind(r()(r()(a))),a.state={meetings:t.meetings},a.dates=["24-05-19","11-11-19","14-03-19","01-12-19","12-07-19","09-02-19"],a}s()(t,e);var a=t.prototype;return a.newMeeting=function(){console.log("button pressed"),this.setState({meetings:[{people:Math.floor(30*Math.random())+1,date:this.dates[Math.floor(Math.random()*(this.dates.length-1))],ins:Math.floor(30*Math.random())+1,outs:Math.floor(20*Math.random())+1}].concat(this.state.meetings)})},a.render=function(){return Object(o.a)("div",null,Object(o.a)(h,{onClick:this.newMeeting}),this.state.meetings.map(function(e,t){return Object(o.a)(d,{key:t,people:e.people,date:e.date,ins:e.ins,outs:e.outs})}))},t}(c.a.Component);t.default=function(){return Object(o.a)(u.a,null,Object(o.a)(f.a,null),Object(o.a)(v,{meetings:m.meetings}))}},149:function(e,t,a){"use strict";var n=a(9);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var s=n(a(152)),i=n(a(52)),r=n(a(7)),o=n(a(51)),l=n(a(53)),c=n(a(4)),u=n(a(0)),d=a(19),p=a(150);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,l.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,s=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(s.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,r=void 0===n?this.defaultGetProps:n,o=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),m=t.replace,h=(0,s.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=f(a);return u.default.createElement(d.Link,(0,i.default)({to:v,state:c,getProps:r,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(a,{state:c,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=u.default.forwardRef(function(e,t){return u.default.createElement(h,(0,i.default)({innerRef:t},e))});t.default=v;var b=function(e,t){window.___navigate(f(e),t)};t.navigate=b;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var n=a(8),s=a(0),i=a.n(s),r=a(4),o=a.n(r),l=a(149),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(151),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var p=a(33);a.d(t,"parsePath",function(){return p.a});var f=i.a.createContext({}),m=function(e){return Object(n.a)(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(n.a)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},152:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}},153:function(e,t,a){"use strict";var n=a(8);a(0);t.a=function(e){var t=e.children;return Object(n.a)("div",{className:"is-mobile",style:{maxWidth:240}},t)}},154:function(e,t,a){"use strict";var n=a(8),s=(a(0),a(150)),i=function(e){return Object(n.a)("li",null,Object(n.a)(s.Link,{activeClassName:"is-active",to:e.to},Object(n.a)("div",{className:"level"},Object(n.a)("div",{className:"level-item"},e.children),Object(n.a)("div",{className:"level-item"},Object(n.a)("span",{className:"icon fa-lg"},Object(n.a)("i",{className:e.class,"aria-hidden":"true"}))))))};t.a=function(){return Object(n.a)("div",{className:"tabs is-centered is-small",style:{marginBottom:"4px"}},Object(n.a)("ul",{className:"is-mobile"},Object(n.a)(i,{class:"fas is-medium fa-2x fa-toolbox",to:"/fund/"},"Asusu"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-people-carry",to:"/meetings/"},"Taro"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-users",to:"/members/"},"Mambobi")))}},155:function(e,t,a){"use strict";a.r(t);a(54);var n=a(0),s=a.n(n),i=a(4),r=a.n(i),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";var n=a(8);a(0);t.a=function(e){return Object(n.a)("a",{onClick:e.onClick,className:"button is-fullwidth",style:{marginTop:"10px",marginBottom:"5px"}},Object(n.a)("div",{className:"columns is-mobile"},Object(n.a)("div",{className:"column"},Object(n.a)("span",{className:"icon is-large"},Object(n.a)("i",{className:e.class,"aria-hidden":"true"}))),Object(n.a)("div",{className:"column"},Object(n.a)("strong",null,e.text)),Object(n.a)("div",{className:"column"},Object(n.a)("span",{className:"icon"},Object(n.a)("i",{className:"fas fa-angle-down","aria-hidden":"true"})))))}}}]);
//# sourceMappingURL=component---src-pages-meetings-js-e8ba4cd7eb4cb3c4bd83.js.map