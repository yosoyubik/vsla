(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t);a(162);var s=a(7),i=a.n(s),n=a(51),r=a.n(n),o=a(8),l=a(0),c=a.n(l),d=a(152),u=a(153),f=(a(159),a(161)),m=a.n(f),p=function(e){return Object(o.a)("div",{className:"box",style:{marginBottom:"0px",padding:"5px"}},Object(o.a)("div",{className:"level is-mobile"},Object(o.a)("div",{className:"level-left"},Object(o.a)("figure",null,Object(o.a)(m.a,{className:"image is-64x64",fixed:e.img?e.img.node.childImageSharp.fixed:{}}))),Object(o.a)("div",{className:"level-left"},Object(o.a)("div",{className:"level"},Object(o.a)("div",{className:"level-item"},Object(o.a)("p",null,Object(o.a)("span",{className:"icon"},Object(o.a)("i",{className:"fas fa-phone"})),Object(o.a)("strong",null,e.name)," ",Object(o.a)("small",null,e.phone))),Object(o.a)("div",{className:"level-item"},Object(o.a)("div",{className:"level-left"},Object(o.a)("strong",null,e.shares),Object(o.a)("span",{className:"icon is-large has-text-success"},Object(o.a)("i",{className:"fas fa-2x fa-toolbox"}))),Object(o.a)("div",{className:"level-left"},Object(o.a)("span",{className:"icon is-large has-text-info"},Object(o.a)("i",{className:"fas fa-2x fa-hand-holding-usd"})),Object(o.a)("strong",null,e.loans)))))))},h=a(156),b=a(155);a.d(t,"query",function(){return y});var g=function(e){return Object(o.a)("div",{className:"level",style:{marginBottom:"10px"}},Object(o.a)("div",{className:"level-item"},Object(o.a)(h.a,{onClick:e.onClick,class:"fas fa-lg fa-user-alt has-text-info",text:"Kara Mamba"})))},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).addMember=a.addMember.bind(r()(r()(a))),a.state={members:[]},a.numbers=["754238536","05489806","654593536","15463536","95464536"],a.names=["Assibi","Cof","Coffi","Coffie","Colee","Coley","Colie","Dura","Durah","Durrah","Fara","Fari","Farih","Farra","Farry","Gaddo","Gambo","Jummai","Ladi"],a.pics=t.pics,a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;b.a.table("members").toArray().then(function(t){e.setState({members:t})})},a.addMember=function(){var e=this;console.log("button pressed");var t={imgIndex:Math.floor(Math.random()*(this.pics.length-1)),name:this.names[Math.floor(Math.random()*(this.names.length-1))],phone:this.numbers[Math.floor(Math.random()*(this.numbers.length-1))],shares:Math.floor(50*Math.random())+1,loans:Math.floor(20*Math.random())+1};b.a.table("members").add(t).then(function(a){var s=[t].concat(e.state.members);e.setState({members:s})}).catch(function(e){console.log(e)})},a.render=function(){var e=this;return Object(o.a)("div",null,Object(o.a)(g,{onClick:this.addMember}),this.state.members.map(function(t){return Object(o.a)(p,{key:t.id,img:e.pics[t.imgIndex],name:t.name,phone:t.phone,shares:t.shares,loans:t.loans})}))},t}(c.a.Component),y=(t.default=function(e){var t=e.data;return Object(o.a)(d.a,null,Object(o.a)(u.a,null),Object(o.a)(v,{pics:t.pics.edges}))},"92569365")},150:function(e,t,a){var s;e.exports=(s=a(154))&&s.default||s},151:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var s=a(8),i=a(0),n=a.n(i),r=a(4),o=a.n(r),l=a(149),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(150),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var f=a(33);a.d(t,"parsePath",function(){return f.a});var m=n.a.createContext({}),p=function(e){return Object(s.a)(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(s.a)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){"use strict";var s=a(8);a(0);t.a=function(e){var t=e.children;return Object(s.a)("div",{className:"is-mobile",style:{maxWidth:240}},t)}},153:function(e,t,a){"use strict";var s=a(8),i=(a(0),a(151)),n=function(e){return Object(s.a)("li",null,Object(s.a)(i.Link,{activeClassName:"is-active",to:e.to},Object(s.a)("div",{className:"level"},Object(s.a)("div",{className:"level-item"},e.children),Object(s.a)("div",{className:"level-item"},Object(s.a)("span",{className:"icon fa-lg"},Object(s.a)("i",{className:e.class,"aria-hidden":"true"}))))))};t.a=function(){return Object(s.a)("div",{className:"tabs is-centered is-small",style:{marginBottom:"4px"}},Object(s.a)("ul",{className:"is-mobile"},Object(s.a)(n,{class:"fas is-medium fa-2x fa-toolbox",to:"/fund/"},"Asusu"),Object(s.a)(n,{class:"fas is-medium fa-2x fa-people-carry",to:"/meetings/"},"Taro"),Object(s.a)(n,{class:"fas is-medium fa-2x fa-users",to:"/members/"},"Mambobi")))}},154:function(e,t,a){"use strict";a.r(t);a(52);var s=a(0),i=a.n(s),n=a(4),r=a.n(n),o=a(53),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){"use strict";var s=new(a(157).a)("vslaDB");s.version(1).stores({fund:"++id, people, ins, outs",members:"++id, &name, phone, shares, loans, &imgIndex",meetings:"++id, people, &date, ins, outs",attendance:"++, meetingId, memberId, [meetingId+memberId]"}),s.fund.add({people:30,inputs:300,outputs:45}),s.members.bulkAdd([{name:"Amina",phone:173739279,shares:31,loans:4,imgIndex:Math.floor(14*Math.random())},{name:"Fara",phone:24627835,shares:15,loans:34,imgIndex:Math.floor(14*Math.random())},{name:"Ladi",phone:18394026,shares:25,loans:4,imgIndex:Math.floor(14*Math.random())},{name:"Hannah",phone:17363898,shares:13,loans:3,imgIndex:Math.floor(14*Math.random())}]),s.meetings.bulkAdd([{people:"6",date:"Mon Oct 12 2019",ins:"10",outs:"3"},{people:"10",date:"Wed Nov 09 2018",ins:"100",outs:"80"},{people:"15",date:"Fri Oct 21 2017",ins:"145",outs:"30"},{people:"21",date:"Sun Jun 19 2016",ins:"10",outs:"13"},{people:"9",date:"Wed Oct 03 2015",ins:"30",outs:"33"},{people:"18",date:"Sat Feb 29 2014",ins:"10",outs:"53"},{people:"20",date:"Mon Oct 01 2013",ins:"70",outs:"3"}]),t.a=s},156:function(e,t,a){"use strict";var s=a(8);a(0);t.a=function(e){return Object(s.a)("a",{onClick:e.onClick,className:"button is-fullwidth",style:{marginTop:"10px",marginBottom:"5px"}},Object(s.a)("div",{className:"columns is-mobile"},Object(s.a)("div",{className:"column"},Object(s.a)("span",{className:"icon is-large"},Object(s.a)("i",{className:e.class,"aria-hidden":"true"}))),Object(s.a)("div",{className:"column"},Object(s.a)("strong",null,e.text)),Object(s.a)("div",{className:"column"},Object(s.a)("span",{className:"icon"},Object(s.a)("i",{className:"fas fa-angle-down","aria-hidden":"true"})))))}},159:function(e,t,a){"use strict";a(160)("fixed",function(e){return function(){return e(this,"tt","","")}})},160:function(e,t,a){var s=a(12),i=a(25),n=a(17),r=/"/g,o=function(e,t,a,s){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(s).replace(r,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),s(s.P+s.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},161:function(e,t,a){"use strict";var s=a(9);t.__esModule=!0,t.default=void 0;var i,n=s(a(7)),r=s(a(51)),o=s(a(158)),l=s(a(54)),c=s(a(0)),d=s(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",s=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+s+i+"<img "+o+l+t+r+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.style,s=e.onLoad,i=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},n,{onLoad:s,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var s=!0,i=!1,n=t.fadeIn,o=m(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,i=!0),"undefined"==typeof window&&(s=!1),t.critical&&(s=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:s,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,s=e.className,i=e.style,n=void 0===i?{}:i,r=e.imgStyle,o=void 0===r?{}:r,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,y=e.Tag,O=e.itemProp,j="boolean"==typeof v?"lightgray":v,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),N={title:t,alt:this.state.isVisible?"":a,style:S,className:m};if(p){var x=p;return c.default.createElement(y,{className:(s||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(g,(0,l.default)({src:x.base64},N)),x.tracedSVG&&c.default.createElement(g,(0,l.default)({src:x.tracedSVG},N)),j&&c.default.createElement(y,{title:t,style:{backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(g,{alt:a,title:t,src:x.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t},x))}}))}if(h){var L=h,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},n);return"inherit"===n.display&&delete I.display,c.default.createElement(y,{className:(s||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&c.default.createElement(g,(0,l.default)({src:L.base64},N)),L.tracedSVG&&c.default.createElement(g,(0,l.default)({src:L.tracedSVG},N)),j&&c.default.createElement(y,{title:t,style:{backgroundColor:j,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),c.default.createElement(g,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:y,sizes:O,fixed:y,fluid:O,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var j=v;t.default=j},162:function(e,t,a){var s=a(26).f,i=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in i||a(18)&&s(i,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-members-js-8b65e9c61021f26ece8f.js.map