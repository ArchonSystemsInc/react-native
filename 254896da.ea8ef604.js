(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),c=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),p=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),s=n,O=u["".concat(r,".").concat(s)]||u[s]||d[s]||l;return a?c.a.createElement(O,b(b({ref:t},o),{},{components:a})):c.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=s;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var o=2;o<l;o++)r[o]=a[o];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},239:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),c=a(7),l=(a(0),a(1006)),r={id:"imagepickerios",title:"\ud83d\udea7 ImagePickerIOS"},b={unversionedId:"imagepickerios",id:"version-0.61/imagepickerios",isDocsHomePage:!1,title:"\ud83d\udea7 ImagePickerIOS",description:"Deprecated. Use @react-native-community/image-picker-ios instead.",source:"@site/versioned_docs/version-0.61/imagepickerios.md",slug:"/imagepickerios",permalink:"/docs/0.61/imagepickerios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/imagepickerios.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/api",previous:{title:"\ud83d\udea7 ImageEditor",permalink:"/docs/0.61/imageeditor"},next:{title:"Image Style Props",permalink:"/docs/0.61/image-style-props"}},i=[{value:"Methods",id:"methods",children:[{value:"<code>canRecordVideos()</code>",id:"canrecordvideos",children:[]},{value:"<code>canUseCamera()</code>",id:"canusecamera",children:[]},{value:"<code>openCameraDialog()</code>",id:"opencameradialog",children:[]},{value:"<code>openSelectDialog()</code>",id:"openselectdialog",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-image-picker-ios"}),"@react-native-community/image-picker-ios")," instead.")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"canrecordvideos"},Object(l.b)("inlineCode",{parentName:"h3"},"canRecordVideos()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static canRecordVideos(callback)\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"canusecamera"},Object(l.b)("inlineCode",{parentName:"h3"},"canUseCamera()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static canUseCamera(callback)\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"opencameradialog"},Object(l.b)("inlineCode",{parentName:"h3"},"openCameraDialog()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static openCameraDialog(config, successCallback, cancelCallback)\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"config"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"successCallback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cancelCallback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"config")," is an object containing:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"videoMode")," : An optional boolean value that defaults to false.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"successCallback")," is an optional callback function that's invoked when the select dialog is opened successfully. It will include the following data:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[string, number, number]"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"cancelCallback")," is an optional callback function that's invoked when the camera dialog is canceled."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"openselectdialog"},Object(l.b)("inlineCode",{parentName:"h3"},"openSelectDialog()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static openSelectDialog(config, successCallback, cancelCallback)\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"config"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"successCallback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cancelCallback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"config")," is an object containing:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"showImages")," : An optional boolean value that defaults to false."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"showVideos"),": An optional boolean value that defaults to false.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"successCallback")," is an optional callback function that's invoked when the select dialog is opened successfully. It will include the following data:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[string, number, number]"))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"cancelCallback")," is an optional callback function that's invoked when the select dialog is canceled."))}p.isMDXComponent=!0}}]);