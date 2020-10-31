(window.webpackJsonp=window.webpackJsonp||[]).push([[760],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,O=d["".concat(i,".").concat(p)]||d[p]||u[p]||c;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},831:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),c=(n(0),n(1006)),i={id:"systrace",title:"Systrace"},o={unversionedId:"systrace",id:"version-0.60/systrace",isDocsHomePage:!1,title:"Systrace",description:"Reference",source:"@site/versioned_docs/version-0.60/systrace.md",slug:"/systrace",permalink:"/docs/0.60/systrace",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/systrace.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"StyleSheet",permalink:"/docs/0.60/stylesheet"},next:{title:"Text Style Props",permalink:"/docs/0.60/text-style-props"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>installReactHook()</code>",id:"installreacthook",children:[]},{value:"<code>setEnabled()</code>",id:"setenabled",children:[]},{value:"<code>isEnabled()</code>",id:"isenabled",children:[]},{value:"<code>beginEvent()</code>",id:"beginevent",children:[]},{value:"<code>endEvent()</code>",id:"endevent",children:[]},{value:"<code>beginAsyncEvent()</code>",id:"beginasyncevent",children:[]},{value:"<code>endAsyncEvent()</code>",id:"endasyncevent",children:[]},{value:"<code>counterEvent()</code>",id:"counterevent",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"installreacthook"},Object(c.b)("inlineCode",{parentName:"h3"},"installReactHook()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static installReactHook(useFiber)\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"setenabled"},Object(c.b)("inlineCode",{parentName:"h3"},"setEnabled()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static setEnabled(enabled)\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isenabled"},Object(c.b)("inlineCode",{parentName:"h3"},"isEnabled()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static isEnabled()\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beginevent"},Object(c.b)("inlineCode",{parentName:"h3"},"beginEvent()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static beginEvent(profileName?, args?)\n")),Object(c.b)("p",null,"beginEvent/endEvent for starting and then ending a profile within the same call stack frame."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"endevent"},Object(c.b)("inlineCode",{parentName:"h3"},"endEvent()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static endEvent()\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beginasyncevent"},Object(c.b)("inlineCode",{parentName:"h3"},"beginAsyncEvent()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static beginAsyncEvent(profileName?)\n")),Object(c.b)("p",null,"beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"endasyncevent"},Object(c.b)("inlineCode",{parentName:"h3"},"endAsyncEvent()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static endAsyncEvent(profileName?, cookie?)\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"counterevent"},Object(c.b)("inlineCode",{parentName:"h3"},"counterEvent()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static counterEvent(profileName?, value?)\n")),Object(c.b)("p",null,"Register the value to the profileName on the systrace timeline."))}s.isMDXComponent=!0}}]);