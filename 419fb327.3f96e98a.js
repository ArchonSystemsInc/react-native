(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,b=p["".concat(o,".").concat(m)]||p[m]||h[m]||r;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},342:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(7),r=(n(0),n(1006)),o={id:"height-and-width",title:"Height and Width"},s={unversionedId:"height-and-width",id:"version-0.63/height-and-width",isDocsHomePage:!1,title:"Height and Width",description:"A component's height and width determine its size on the screen.",source:"@site/versioned_docs/version-0.63/height-and-width.md",slug:"/height-and-width",permalink:"/docs/height-and-width",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/height-and-width.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/docs",previous:{title:"Style",permalink:"/docs/style"},next:{title:"Layout with Flexbox",permalink:"/docs/flexbox"}},l=[{value:"Fixed Dimensions",id:"fixed-dimensions",children:[]},{value:"Flex Dimensions",id:"flex-dimensions",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A component's height and width determine its size on the screen."),Object(r.b)("h2",{id:"fixed-dimensions"},"Fixed Dimensions"),Object(r.b)("p",null,"The general way to set the dimensions of a component is by adding a fixed ",Object(r.b)("inlineCode",{parentName:"p"},"width")," and ",Object(r.b)("inlineCode",{parentName:"p"},"height")," to style. All dimensions in React Native are unitless, and represent density-independent pixels."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Height and Width","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20FixedDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%20100%2C%20height%3A%20100%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%20150%2C%20height%3A%20150%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20FixedDimensionsBasics%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("p",null,"Setting dimensions this way is common for components that should always render at exactly the same size, regardless of screen dimensions."),Object(r.b)("h2",{id:"flex-dimensions"},"Flex Dimensions"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"flex")," in a component's style to have the component expand and shrink dynamically based on available space. Normally you will use ",Object(r.b)("inlineCode",{parentName:"p"},"flex: 1"),", which tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the ",Object(r.b)("inlineCode",{parentName:"p"},"flex")," given, the higher the ratio of space a component will take compared to its siblings."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed ",Object(r.b)("inlineCode",{parentName:"p"},"width")," and ",Object(r.b)("inlineCode",{parentName:"p"},"height")," or ",Object(r.b)("inlineCode",{parentName:"p"},"flex"),", the parent will have dimensions of 0 and the ",Object(r.b)("inlineCode",{parentName:"p"},"flex")," children will not be visible.")),Object(r.b)("div",{className:"snack-player","data-snack-name":"Flex Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20FlexDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%2F%2F%20Try%20removing%20the%20%60flex%3A%201%60%20on%20the%20parent%20View.%0A%20%20%20%20%20%20%2F%2F%20The%20parent%20will%20not%20have%20dimensions%2C%20so%20the%20children%20can't%20expand.%0A%20%20%20%20%20%20%2F%2F%20What%20if%20you%20add%20%60height%3A%20300%60%20instead%20of%20%60flex%3A%201%60%3F%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%202%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%203%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20FlexDimensionsBasics%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("p",null,"After you can control a component's size, the next step is to ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/flexbox"}),"learn how to lay it out on the screen"),"."))}d.isMDXComponent=!0}}]);