(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,m=l["".concat(o,".").concat(d)]||l[d]||u[d]||c;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},742:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),c=(n(0),n(1006)),o={id:"inputaccessoryview",title:"InputAccessoryView"},i={unversionedId:"inputaccessoryview",id:"version-0.63/inputaccessoryview",isDocsHomePage:!1,title:"InputAccessoryView",description:"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.",source:"@site/versioned_docs/version-0.63/inputaccessoryview.md",slug:"/inputaccessoryview",permalink:"/docs/inputaccessoryview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/inputaccessoryview.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/components",previous:{title:"TouchableNativeFeedback",permalink:"/docs/touchablenativefeedback"},next:{title:"\ud83d\udea7 MaskedViewIOS",permalink:"/docs/maskedviewios"}},s=[{value:"Props",id:"props",children:[{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>nativeID</code>",id:"nativeid",children:[]},{value:"<code>style</code>",id:"style",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a ",Object(c.b)("inlineCode",{parentName:"p"},"TextInput")," has focus. This component can be used to create custom toolbars."),Object(c.b)("p",null,"To use this component wrap your custom toolbar with the InputAccessoryView component, and set a ",Object(c.b)("inlineCode",{parentName:"p"},"nativeID"),". Then, pass that ",Object(c.b)("inlineCode",{parentName:"p"},"nativeID")," as the ",Object(c.b)("inlineCode",{parentName:"p"},"inputAccessoryViewID")," of whatever ",Object(c.b)("inlineCode",{parentName:"p"},"TextInput")," you desire. A basic example:"),Object(c.b)("div",{className:"snack-player","data-snack-name":"InputAccessoryView","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20InputAccessoryView%2C%20ScrollView%2C%20TextInput%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20inputAccessoryViewID%20%3D%20'uniqueID'%3B%0A%20%20const%20initialText%20%3D%20'Placeholder%20Text'%3B%0A%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState(initialText)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%20keyboardDismissMode%3D%22interactive%22%3E%0A%20%20%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2050%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20inputAccessoryViewID%3D%7BinputAccessoryViewID%7D%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20setText(text)%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Btext%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%20%20%3CInputAccessoryView%20nativeID%3D%7BinputAccessoryViewID%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setText(initialText)%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Reset%20Text%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FInputAccessoryView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true"}),Object(c.b)("p",null,"This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a ",Object(c.b)("inlineCode",{parentName:"p"},"TextInput")," with the ",Object(c.b)("inlineCode",{parentName:"p"},"InputAccessoryView")," component, and don't set a ",Object(c.b)("inlineCode",{parentName:"p"},"nativeID"),". For an example, look at ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/InputAccessoryView/InputAccessoryViewExample.js"}),"InputAccessoryViewExample.js"),"."),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"backgroundcolor"},Object(c.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/colors"}),"color")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"nativeid"},Object(c.b)("inlineCode",{parentName:"h3"},"nativeID")),Object(c.b)("p",null,"An ID which is used to associate this ",Object(c.b)("inlineCode",{parentName:"p"},"InputAccessoryView")," to specified TextInput(s)."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"style"},Object(c.b)("inlineCode",{parentName:"h3"},"style")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/view-style-props"}),"style")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("h1",{id:"known-issues"},"Known issues"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/18997"}),"react-native#18997"),": Doesn't support multiline ",Object(c.b)("inlineCode",{parentName:"li"},"TextInput")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/20157"}),"react-native#20157"),": Can't use with a bottom tab bar")))}p.isMDXComponent=!0}}]);