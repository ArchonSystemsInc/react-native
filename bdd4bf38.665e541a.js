(window.webpackJsonp=window.webpackJsonp||[]).push([[690],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var b=a(0),n=a.n(b);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},l=Object.keys(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),o=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,l=e.originalType,r=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(a),d=b,j=u["".concat(r,".").concat(d)]||u[d]||O[d]||l;return a?n.a.createElement(j,c(c({ref:t},m),{},{components:a})):n.a.createElement(j,c({ref:t},m))}));function j(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var l=a.length,r=new Array(l);r[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:b,r[1]=c;for(var m=2;m<l;m++)r[m]=a[m];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},766:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var b=a(2),n=a(7),l=(a(0),a(1006)),r={id:"slider",title:"\ud83d\udea7 Slider"},c={unversionedId:"slider",id:"slider",isDocsHomePage:!1,title:"\ud83d\udea7 Slider",description:"Deprecated. Use @react-native-community/slider instead.",source:"@site/../docs/slider.md",slug:"/slider",permalink:"/docs/next/slider",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/slider.md",version:"current",lastUpdatedAt:1603945169},i=[{value:"Props",id:"props",children:[{value:"<code>style</code>",id:"style",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>maximumValue</code>",id:"maximumvalue",children:[]},{value:"<code>minimumTrackTintColor</code>",id:"minimumtracktintcolor",children:[]},{value:"<code>minimumValue</code>",id:"minimumvalue",children:[]},{value:"<code>onSlidingComplete</code>",id:"onslidingcomplete",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>step</code>",id:"step",children:[]},{value:"<code>maximumTrackTintColor</code>",id:"maximumtracktintcolor",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>value</code>",id:"value",children:[]},{value:"<code>thumbTintColor</code>",id:"thumbtintcolor",children:[]},{value:"<code>maximumTrackImage</code>",id:"maximumtrackimage",children:[]},{value:"<code>minimumTrackImage</code>",id:"minimumtrackimage",children:[]},{value:"<code>thumbImage</code>",id:"thumbimage",children:[]},{value:"<code>trackImage</code>",id:"trackimage",children:[]}]}],m={rightToc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(b.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-slider"}),"@react-native-community/slider")," instead.")),Object(l.b)("p",null,"A component used to select a single value from a range of values."),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/view#props"}),"View Props"),"."),Object(l.b)("h3",{id:"style"},Object(l.b)("inlineCode",{parentName:"h3"},"style")),Object(l.b)("p",null,"Used to style and layout the ",Object(l.b)("inlineCode",{parentName:"p"},"Slider"),". See ",Object(l.b)("inlineCode",{parentName:"p"},"StyleSheet.js")," and ",Object(l.b)("inlineCode",{parentName:"p"},"ViewStylePropTypes.js")," for more info."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"View.style"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"disabled"},Object(l.b)("inlineCode",{parentName:"h3"},"disabled")),Object(l.b)("p",null,"If true the user won't be able to move the slider. Default value is false."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"maximumvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"maximumValue")),Object(l.b)("p",null,"Initial maximum value of the slider. Default value is 1."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"minimumtracktintcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"minimumTrackTintColor")),Object(l.b)("p",null,"The color used for the track to the left of the button. Overrides the default blue gradient image on iOS."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"minimumvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"minimumValue")),Object(l.b)("p",null,"Initial minimum value of the slider. Default value is 0."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onslidingcomplete"},Object(l.b)("inlineCode",{parentName:"h3"},"onSlidingComplete")),Object(l.b)("p",null,"Callback that is called when the user releases the slider, regardless if the value has changed. The current value is passed as an argument to the callback handler."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onvaluechange"},Object(l.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(l.b)("p",null,"Callback continuously called while the user is dragging the slider."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"step"},Object(l.b)("inlineCode",{parentName:"h3"},"step")),Object(l.b)("p",null,"Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"maximumtracktintcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"maximumTrackTintColor")),Object(l.b)("p",null,"The color used for the track to the right of the button. Overrides the default gray gradient image on iOS."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h3"},"testID")),Object(l.b)("p",null,"Used to locate this view in UI automation tests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"value"},Object(l.b)("inlineCode",{parentName:"h3"},"value")),Object(l.b)("p",null,"Initial value of the slider. The value should be between minimumValue and maximumValue, which default to 0 and 1 respectively. Default value is 0."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"This is not a controlled component"),", you don't need to update the value during dragging."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"thumbtintcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"thumbTintColor")),Object(l.b)("p",null,"The color used to tint the default thumb images on iOS, or the color of the foreground switch grip on Android."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"maximumtrackimage"},Object(l.b)("inlineCode",{parentName:"h3"},"maximumTrackImage")),Object(l.b)("p",null,"Assigns a maximum track image. Only static images are supported. The leftmost pixel of the image will be stretched to fill the track."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Image.propTypes.source"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"minimumtrackimage"},Object(l.b)("inlineCode",{parentName:"h3"},"minimumTrackImage")),Object(l.b)("p",null,"Assigns a minimum track image. Only static images are supported. The rightmost pixel of the image will be stretched to fill the track."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Image.propTypes.source"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"thumbimage"},Object(l.b)("inlineCode",{parentName:"h3"},"thumbImage")),Object(l.b)("p",null,"Sets an image for the thumb. Only static images are supported."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Image.propTypes.source"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"trackimage"},Object(l.b)("inlineCode",{parentName:"h3"},"trackImage")),Object(l.b)("p",null,"Assigns a single image for the track. Only static images are supported. The center pixel of the image will be stretched to fill the track."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Image.propTypes.source"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"iOS")))))}o.isMDXComponent=!0}}]);