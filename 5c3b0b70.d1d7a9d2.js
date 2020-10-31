(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=i,m=p["".concat(r,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},433:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(7),o=(n(0),n(1006)),r={id:"usewindowdimensions",title:"useWindowDimensions"},c={unversionedId:"usewindowdimensions",id:"usewindowdimensions",isDocsHomePage:!1,title:"useWindowDimensions",description:"`jsx",source:"@site/../docs/usewindowdimensions.md",slug:"/usewindowdimensions",permalink:"/docs/next/usewindowdimensions",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/usewindowdimensions.md",version:"current",lastUpdatedAt:1589574880,sidebar:"api",previous:{title:"useColorScheme",permalink:"/docs/next/usecolorscheme"},next:{title:"BackHandler",permalink:"/docs/next/backhandler"}},s=[{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>fontScale</code>",id:"fontscale",children:[]},{value:"<code>height</code>",id:"height",children:[]},{value:"<code>scale</code>",id:"scale",children:[]},{value:"<code>width</code>",id:"width",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import { useWindowDimensions } from 'react-native';\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useWindowDimensions")," automatically updates ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," values when screen size changes. You can get your application window's width and height like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"const windowWidth = useWindowDimensions().width;\nconst windowHeight = useWindowDimensions().height;\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"useWindowDimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20useWindowDimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20window%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bwindow.height%7D%2C%20width%20-%20%24%7Bwindow.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-native-community/react-native-hooks#usedimensions"}),"useDimensions")," hook from the community ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-native-community/react-native-hooks"}),"React native hooks")," library aims to make handling screen/window size changes easier to work with."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/DaniAkash/react-native-responsive-dimensions"}),"React Native Responsive Dimensions")," also comes with responsive hooks.")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"fontscale"},Object(o.b)("inlineCode",{parentName:"h3"},"fontScale")),Object(o.b)("p",null,"The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().fontScale;\n")),Object(o.b)("h3",{id:"height"},Object(o.b)("inlineCode",{parentName:"h3"},"height")),Object(o.b)("p",null,"The height in pixels of the window or screen your app occupies."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().height;\n")),Object(o.b)("h3",{id:"scale"},Object(o.b)("inlineCode",{parentName:"h3"},"scale")),Object(o.b)("p",null,"The pixel ratio of the device your app is running on."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().scale;\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A value of ",Object(o.b)("inlineCode",{parentName:"p"},"1")," indicates PPI/DPI of 96 (76 on some platforms). ",Object(o.b)("inlineCode",{parentName:"p"},"2")," indicates a Retina or high DPI display.")),Object(o.b)("h3",{id:"width"},Object(o.b)("inlineCode",{parentName:"h3"},"width")),Object(o.b)("p",null,"The width in pixels of the window or screen your app occupies."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().width;\n")))}d.isMDXComponent=!0}}]);