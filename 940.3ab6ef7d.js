(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{1002:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1006),c=n(1033),l=n(22),i=n(1020),s=n(2),u=n(7),p=n(1007),m=n(1021),d=n(1122),y=n(1008),f=n(1119),h=n(1120),b=n(1121),g=n(1118),v=n(1032),k=n(1078),j=n(206),O=n.n(j);var E=function e(t,n){return"link"===t.type?Object(d.a)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function N(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),y=c.items,f=c.label,h=E(c,m),b=(n=h,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!h&&c.collapsed)})),v=g[0],k=g[1];Object(a.useEffect)((function(){h&&!b&&v&&k(!1)}),[h,b,v]);var j=Object(a.useCallback)((function(e){e.preventDefault(),k((function(e){return!e}))}),[k]);return 0===y.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[O.a.menuLinkText]=!i,t)),onClick:i?j:void 0,href:i?"#!":void 0},d),f),r.a.createElement("ul",{className:"menu__list"},y.map((function(e){return r.a.createElement(x,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function w(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=E(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(v.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:c},Object(k.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function x(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(w,e)}}var C=function(e){var t,n,o=e.path,l=e.sidebar,i=e.sidebarCollapsible,u=void 0===i||i,d=Object(a.useState)(!1),k=d[0],j=d[1],E=Object(m.a)().navbar,N=E.title,w=E.hideOnScroll,C=Object(c.a)().isClient,P=Object(b.a)(),_=P.logoLink,T=P.logoLinkProps,S=P.logoImageUrl,I=P.logoAlt,D=Object(y.a)().isAnnouncementBarClosed,L=Object(g.a)().scrollY;Object(f.a)(k);var M=Object(h.a)();return Object(a.useEffect)((function(){M===h.b.desktop&&j(!1)}),[M]),r.a.createElement("div",{className:Object(p.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=w,t))},w&&r.a.createElement(v.a,Object(s.a)({tabIndex:-1,className:O.a.sidebarLogo,to:_},T),null!=S&&r.a.createElement("img",{key:C,src:S,alt:I}),null!=N&&r.a.createElement("strong",null,N)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",O.a.menu,(n={"menu--show":k},n[O.a.menuWithAnnouncementBar]=!D&&0===L,n))},r.a.createElement("button",{"aria-label":k?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!k)}},k?r.a.createElement("span",{className:Object(p.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:O.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(x,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:o})})))))},P=n(1076),_=n(1114),T=n(1031),S=n(207),I=n.n(S),D=n(1082);function L(e){var t,n,a=e.currentDocRoute,l=e.versionMetadata,s=e.children,u=Object(c.a)(),p=u.siteConfig,m=u.isClient,d=l.pluginId,y=l.permalinkToSidebar,f=l.docsSidebars,h=l.version,b=y[a.path],g=f[b];return r.a.createElement(i.a,{key:m,searchMetadatas:{version:h,tag:Object(D.b)(d,h)}},r.a.createElement("div",{className:I.a.docPage},g&&r.a.createElement("div",{className:I.a.docSidebarContainer,role:"complementary"},r.a.createElement(C,{key:b,sidebar:g,path:a.path,sidebarCollapsible:null===(t=null===(n=p.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:I.a.docMainContainer},r.a.createElement(o.a,{components:P.a},s))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(T.matchPath)(a.pathname,e)}));return o?r.a.createElement(L,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):r.a.createElement(_.default,e)}},1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(y,l(l({ref:t},s),{},{components:n})):r.a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1069:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},1070:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],c=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=c);for(var l=n;l!=r;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},1071:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),c=n(1007),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(19).a,theme:l};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=u({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],y=n[c][o];if("string"==typeof y?(u=c>0?u:["plain"],s=y):(u=d(u,y.type),y.alias&&(u=d(u,y.alias)),s=y.content),"string"==typeof s){var f=s.split(p),h=f.length;l.push({types:u,content:f[0]});for(var b=1;b<h;b++)m(l),i.push(l=[]),l.push({types:u,content:f[b]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return m(l),i}(void 0!==c?t.tokenize(a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),b=n(1069),g=n.n(b),v=n(1070),k=n.n(v),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(1072),E=n(1021),N=function(){var e=Object(E.a)().prism,t=Object(O.a)().isDarkTheme,n=e.theme||j,a=e.darkTheme||n;return t?a:n},w=n(55),x=n.n(w),C=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},_=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,l=e.metastring,s=Object(E.a)().prism,u=Object(r.useState)(!1),p=u[0],m=u[1],d=Object(r.useState)(!1),y=d[0],f=d[1];Object(r.useEffect)((function(){f(!0)}),[]);var b=Object(r.useRef)(null),v=[],j="",O=N();if(l&&C.test(l)){var w=l.match(C)[1];v=k.a.parse(w).filter((function(e){return e>0}))}l&&_.test(l)&&(j=l.match(_)[0].split("title=")[1].replace(/"+/g,""));var T=n&&n.replace(/language-/,"");!T&&s.defaultLanguage&&(T=s.defaultLanguage);var S=t.replace(/\n$/,"");if(0===v.length&&void 0!==T){for(var I,D="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(T),M=t.replace(/\n$/,"").split("\n"),B=0;B<M.length;){var A=B+1,R=M[B].match(L);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=A+",";break;case"highlight-start":I=A;break;case"highlight-end":D+=I+"-"+(A-1)+","}M.splice(B,1)}else B+=1}v=k.a.parse(D),S=M.join("\n")}var F=function(){g()(S),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(h,Object(a.a)({},i,{key:String(y),theme:O,code:S,language:T}),(function(e){var t,n,r=e.className,l=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,j&&o.a.createElement("div",{style:l,className:x.a.codeBlockTitle},j),o.a.createElement("div",{className:x.a.codeBlockContent},o.a.createElement("button",{tabIndex:0,ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(x.a.copyButton,(t={},t[x.a.copyButtonWithTitle]=j,t)),onClick:F},p?"Copied":"Copy"),o.a.createElement("div",{className:Object(c.a)(r,x.a.codeBlock,(n={},n[x.a.codeBlockWithTitle]=j,n))},o.a.createElement("div",{className:x.a.codeBlockLines,style:l},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},u({token:e,key:t})))})))}))))))}))}},1076:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),c=n(1032),l=n(1071),i=n(7),s=n(1007),u=n(1021),p=(n(68),n(69)),m=n.n(p),d=function(e){return function(t){var n,a=t.id,r=Object(i.a)(t,["id"]),c=Object(u.a)().navbar.hideOnScroll;return a?o.a.createElement(e,r,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(n={},n[m.a.enhancedAnchor]=!c,n)),id:a}),r.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):o.a.createElement(e,r)}},y=n(70),f=n.n(y),h={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(l.a,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(c.a,e)},pre:function(e){return o.a.createElement("div",Object(a.a)({className:f.a.mdxCodeBlock},e))},h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")};t.a=h},1114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1020);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);