(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),d=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,h=s["".concat(l,".").concat(u)]||s[u]||p[u]||o;return a?n.a.createElement(h,c(c({ref:t},b),{},{components:a})):n.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<o;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},360:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(7),o=(a(0),a(1006)),l={id:"shadow-props",title:"Shadow Props"},c={unversionedId:"shadow-props",id:"shadow-props",isDocsHomePage:!1,title:"Shadow Props",description:"`SnackPlayer name=Shadow%20Props&supportedPlatforms=ios",source:"@site/../docs/shadow-props.md",slug:"/shadow-props",permalink:"/docs/next/shadow-props",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/shadow-props.md",version:"current",lastUpdatedAt:1589574570,sidebar:"components",previous:{title:"Layout Props",permalink:"/docs/next/layout-props"},next:{title:"Text Style Props",permalink:"/docs/next/text-style-props"}},i=[{value:"Props",id:"props",children:[{value:"<code>shadowColor</code>",id:"shadowcolor",children:[]},{value:"<code>shadowOffset</code>",id:"shadowoffset",children:[]},{value:"<code>shadowOpacity</code>",id:"shadowopacity",children:[]},{value:"<code>shadowRadius</code>",id:"shadowradius",children:[]}]}],b={rightToc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"snack-player","data-snack-name":"Shadow Props","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20Slider%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20ShadowPropSlider%20%3D%20(%7B%20label%2C%20value%2C%20...props%20%7D)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%7Blabel%7D%20(%7Bvalue.toFixed(2)%7D)%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CSlider%20step%3D%7B1%7D%20value%3D%7Bvalue%7D%20%7B...props%7D%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BshadowOffsetWidth%2C%20setShadowOffsetWidth%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowOffsetHeight%2C%20setShadowOffsetHeight%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowRadius%2C%20setShadowRadius%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowOpacity%2C%20setShadowOpacity%5D%20%3D%20useState(0.1)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.square%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20shadowOffsetWidth%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20-shadowOffsetHeight%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowOpacity%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowRadius%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.controls%7D%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOffset%20-%20X%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetWidth%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetWidth(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOffset%20-%20Y%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetHeight%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetHeight(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowRadius%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B100%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowRadius%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowRadius(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOpacity%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20step%3D%7B0.05%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOpacity%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOpacity(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20square%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%20%20height%3A%20150%2C%0A%20%20%20%20shadowColor%3A%20%22black%22%2C%0A%20%20%20%20width%3A%20150%0A%20%20%7D%2C%0A%20%20controls%3A%20%7B%0A%20%20%20%20paddingHorizontal%3A%2012%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("p",null,"These properties are iOS only - for similar functionality on Android, use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"view-style-props#elevation"}),Object(o.b)("inlineCode",{parentName:"a"},"elevation")," property"),"."),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"shadowcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowColor")),Object(o.b)("p",null,"Sets the drop shadow color"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shadowoffset"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowOffset")),Object(o.b)("p",null,"Sets the drop shadow offset"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"object: {width: number,height: number}"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shadowopacity"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowOpacity")),Object(o.b)("p",null,"Sets the drop shadow opacity (multiplied by the color's alpha component)"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shadowradius"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowRadius")),Object(o.b)("p",null,"Sets the drop shadow blur radius"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))))}d.isMDXComponent=!0}}]);