(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1007:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1008:function(e,t,n){"use strict";var a=n(0),r=n(1009);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1010:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1008),c=n(1007),l=n(54),i=n.n(l),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(o.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(l),O=v[0],g=v[1],j=Object(a.useState)(!1),y=j[0],w=j[1];if(null!=b){var C=h[b];null!=C&&C!==O&&d.some((function(e){return e.value===C}))&&g(C)}var N=function(e){g(e),null!=b&&f(b,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},T=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",T)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},1011:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},1012:function(e,t,n){"use strict";var a=n(6),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),c=r?"ios":"android",l=r?"macos":o?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:c,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},298:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),o=(n(0),n(1006)),c=n(1010),l=n(1011),i=n(1012),s={id:"appearance",title:"Appearance"},u={unversionedId:"appearance",id:"appearance",isDocsHomePage:!1,title:"Appearance",description:"`jsx",source:"@site/../docs/appearance.md",slug:"/appearance",permalink:"/docs/next/appearance",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/appearance.md",version:"current",lastUpdatedAt:1603945169,sidebar:"api",previous:{title:"Animated.ValueXY",permalink:"/docs/next/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/next/appregistry"}},d=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>getColorScheme()</code>",id:"getcolorscheme",children:[]},{value:"<code>addChangeListener()</code>",id:"addchangelistener",children:[]},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",children:[]}]}],b={rightToc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Appearance } from 'react-native';\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Appearance")," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."),Object(o.b)("h4",{id:"developer-notes"},"Developer notes"),Object(o.b)(c.a,{groupId:"guide",defaultValue:"web",values:i.a.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},Object(o.b)(l.a,{value:"web",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"Appearance")," API is inspired by the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://drafts.csswg.org/mediaqueries-5/"}),"Media Queries draft")," from the W3C. The color scheme preference is modeled after the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"}),Object(o.b)("inlineCode",{parentName:"a"},"prefers-color-scheme")," CSS media feature"),"."))),Object(o.b)(l.a,{value:"android",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme"}),"Dark theme")," preference on Android 10 (API level 29) devices and higher."))),Object(o.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/"}),"Dark Mode")," preference on iOS 13 devices and higher.")))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"Appearance")," module to determine if the user prefers a dark color scheme:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // Use dark color scheme\n}\n")),Object(o.b)("p",null,"Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"usecolorscheme"}),Object(o.b)("inlineCode",{parentName:"a"},"useColorScheme"))," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",Object(o.b)("inlineCode",{parentName:"p"},"StyleSheet"),"."),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"getcolorscheme"},Object(o.b)("inlineCode",{parentName:"h3"},"getColorScheme()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static getColorScheme()\n")),Object(o.b)("p",null,"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),Object(o.b)("p",null,"Supported color schemes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"light"),": The user prefers a light color theme."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dark"),": The user prefers a dark color theme."),Object(o.b)("li",{parentName:"ul"},"null: The user has not indicated a preferred color theme.")),Object(o.b)("p",null,"See also: ",Object(o.b)("inlineCode",{parentName:"p"},"useColorScheme")," hook."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: ",Object(o.b)("inlineCode",{parentName:"p"},"getColorScheme()")," will always return ",Object(o.b)("inlineCode",{parentName:"p"},"light")," when debugging with Chrome.")),Object(o.b)("h3",{id:"addchangelistener"},Object(o.b)("inlineCode",{parentName:"h3"},"addChangeListener()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static addChangeListener(listener)\n")),Object(o.b)("p",null,"Add an event handler that is fired when appearance preferences change."),Object(o.b)("h3",{id:"removechangelistener"},Object(o.b)("inlineCode",{parentName:"h3"},"removeChangeListener()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static removeChangeListener(listener)\n")),Object(o.b)("p",null,"Remove an event handler."))}p.isMDXComponent=!0}}]);