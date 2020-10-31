(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),d=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=d(a),O=r,j=s["".concat(l,".").concat(O)]||s[O]||p[O]||b;return a?n.a.createElement(j,c(c({ref:t},i),{},{components:a})):n.a.createElement(j,c({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},590:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(7),b=(a(0),a(1006)),l={id:"refreshcontrol",title:"RefreshControl"},c={unversionedId:"refreshcontrol",id:"refreshcontrol",isDocsHomePage:!1,title:"RefreshControl",description:"This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.",source:"@site/../docs/refreshcontrol.md",slug:"/refreshcontrol",permalink:"/docs/next/refreshcontrol",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/refreshcontrol.md",version:"current",lastUpdatedAt:1598019764,sidebar:"components",previous:{title:"Pressable",permalink:"/docs/next/pressable"},next:{title:"ScrollView",permalink:"/docs/next/scrollview"}},o=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[]},{value:'<div class="label required basic">Required</div><strong><code>refreshing</code></strong>',id:"requiredrefreshing",children:[]},{value:'<code>colors</code> <div class="label android">Android</div>',id:"colors-android",children:[]},{value:'<code>enabled</code> <div class="label android">Android</div>',id:"enabled-android",children:[]},{value:"<code>onRefresh</code>",id:"onrefresh",children:[]},{value:'<code>progressBackgroundColor</code> <div class="label android">Android</div>',id:"progressbackgroundcolor-android",children:[]},{value:'<code>progressViewOffset</code> <div class="label android">Android</div>',id:"progressviewoffset-android",children:[]},{value:'<code>size</code> <div class="label android">Android</div>',id:"size-android",children:[]},{value:'<code>tintColor</code> <div class="label ios">iOS</div>',id:"tintcolor-ios",children:[]},{value:'<code>title</code> <div class="label ios">iOS</div>',id:"title-ios",children:[]},{value:'<code>titleColor</code> <div class="label ios">iOS</div>',id:"titlecolor-ios",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"RefreshLayoutConsts.SIZE",id:"refreshlayoutconstssize",children:[]}]}],i={rightToc:o};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at ",Object(b.b)("inlineCode",{parentName:"p"},"scrollY: 0"),", swiping down triggers an ",Object(b.b)("inlineCode",{parentName:"p"},"onRefresh")," event."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("div",{className:"snack-player","data-snack-name":"RefreshControl","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20RefreshControl%2C%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%20%7D%20from%20'react-native'%3B%0A%0Aconst%20wait%20%3D%20(timeout)%20%3D%3E%20%7B%0A%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20timeout))%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Brefreshing%2C%20setRefreshing%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20const%20onRefresh%20%3D%20React.useCallback(()%20%3D%3E%20%7B%0A%20%20%20%20setRefreshing(true)%3B%0A%20%20%20%20wait(2000).then(()%20%3D%3E%20setRefreshing(false))%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollView%7D%0A%20%20%20%20%20%20%20%20refreshControl%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CRefreshControl%0A%20%20%20%20%20%20%20%20%20%20%20%20refreshing%3D%7Brefreshing%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onRefresh%3D%7BonRefresh%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPull%20down%20to%20see%20RefreshControl%20indicator%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20scrollView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'pink'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Note: ",Object(b.b)("inlineCode",{parentName:"p"},"refreshing")," is a controlled prop, this is why it needs to be set to ",Object(b.b)("inlineCode",{parentName:"p"},"true")," in the ",Object(b.b)("inlineCode",{parentName:"p"},"onRefresh")," function otherwise the refresh indicator will stop immediately.")),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"view-props"},Object(b.b)("a",Object(r.a)({parentName:"h3"},{href:"/docs/next/view#props"}),"View Props")),Object(b.b)("p",null,"Inherits ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/view#props"}),"View Props"),"."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"requiredrefreshing"},Object(b.b)("div",{class:"label required basic"},"Required"),Object(b.b)("strong",{parentName:"h3"},Object(b.b)("inlineCode",{parentName:"strong"},"refreshing"))),Object(b.b)("p",null,"Whether the view should be indicating an active refresh."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"colors-android"},Object(b.b)("inlineCode",{parentName:"h3"},"colors")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"The colors (at least one) that will be used to draw the refresh indicator."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"array of ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/colors"}),"colors"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enabled-android"},Object(b.b)("inlineCode",{parentName:"h3"},"enabled")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"Whether the pull to refresh functionality is enabled."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onrefresh"},Object(b.b)("inlineCode",{parentName:"h3"},"onRefresh")),Object(b.b)("p",null,"Called when the view starts refreshing."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progressbackgroundcolor-android"},Object(b.b)("inlineCode",{parentName:"h3"},"progressBackgroundColor")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"The background color of the refresh indicator."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progressviewoffset-android"},Object(b.b)("inlineCode",{parentName:"h3"},"progressViewOffset")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"Progress view top offset."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"size-android"},Object(b.b)("inlineCode",{parentName:"h3"},"size")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"Size of the refresh indicator."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/refreshcontrol#refreshlayoutconstssize"}),"RefreshControl.SIZE")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"RefreshLayoutConsts.SIZE.DEFAULT")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tintcolor-ios"},Object(b.b)("inlineCode",{parentName:"h3"},"tintColor")," ",Object(b.b)("div",{class:"label ios"},"iOS")),Object(b.b)("p",null,"The color of the refresh indicator."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"title-ios"},Object(b.b)("inlineCode",{parentName:"h3"},"title")," ",Object(b.b)("div",{class:"label ios"},"iOS")),Object(b.b)("p",null,"The title displayed under the refresh indicator."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"titlecolor-ios"},Object(b.b)("inlineCode",{parentName:"h3"},"titleColor")," ",Object(b.b)("div",{class:"label ios"},"iOS")),Object(b.b)("p",null,"The color of the refresh indicator title."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),Object(b.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(b.b)("h3",{id:"refreshlayoutconstssize"},"RefreshLayoutConsts.SIZE"),Object(b.b)("p",null,"The SwipeRefreshLayout Android component constants. The acctual component size may vary between devices. You can read more about the native component in the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.android.com/reference/androidx/swiperefreshlayout/widget/SwipeRefreshLayout"}),"Android documentation"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"enum")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Constants:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DEFAULT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Default RefreshControl size")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"LARGE"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Large RefreshControl size")))))}d.isMDXComponent=!0}}]);