(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),s=n,O=p["".concat(i,".").concat(s)]||p[s]||u[s]||b;return a?r.a.createElement(O,o(o({ref:t},c),{},{components:a})):r.a.createElement(O,o({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<b;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},532:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(7),b=(a(0),a(1006)),i={id:"drawerlayoutandroid",title:"DrawerLayoutAndroid"},o={unversionedId:"drawerlayoutandroid",id:"version-0.63/drawerlayoutandroid",isDocsHomePage:!1,title:"DrawerLayoutAndroid",description:"React component that wraps the platform DrawerLayout (Android only). The Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the drawerPosition prop and its width can be set by the drawerWidth prop.",source:"@site/versioned_docs/version-0.63/drawerlayoutandroid.md",slug:"/drawerlayoutandroid",permalink:"/docs/drawerlayoutandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/drawerlayoutandroid.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/components",previous:{title:"VirtualizedList",permalink:"/docs/virtualizedlist"},next:{title:"TouchableNativeFeedback",permalink:"/docs/touchablenativefeedback"}},l=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>drawerBackgroundColor</code>",id:"drawerbackgroundcolor",children:[]},{value:"<code>drawerLockMode</code>",id:"drawerlockmode",children:[]},{value:"<code>drawerPosition</code>",id:"drawerposition",children:[]},{value:"<code>drawerWidth</code>",id:"drawerwidth",children:[]},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",children:[]},{value:"<code>onDrawerClose</code>",id:"ondrawerclose",children:[]},{value:"<code>onDrawerOpen</code>",id:"ondraweropen",children:[]},{value:"<code>onDrawerSlide</code>",id:"ondrawerslide",children:[]},{value:"<code>onDrawerStateChanged</code>",id:"ondrawerstatechanged",children:[]},{value:"<code>renderNavigationView</code>",id:"rendernavigationview",children:[]},{value:"<code>statusBarBackgroundColor</code>",id:"statusbarbackgroundcolor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>closeDrawer()</code>",id:"closedrawer",children:[]},{value:"<code>openDrawer()</code>",id:"opendrawer",children:[]}]}],c={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"React component that wraps the platform ",Object(b.b)("inlineCode",{parentName:"p"},"DrawerLayout")," (Android only). The Drawer (typically used for navigation) is rendered with ",Object(b.b)("inlineCode",{parentName:"p"},"renderNavigationView")," and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the ",Object(b.b)("inlineCode",{parentName:"p"},"drawerPosition")," prop and its width can be set by the ",Object(b.b)("inlineCode",{parentName:"p"},"drawerWidth")," prop."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("div",{className:"snack-player","data-snack-name":"DrawerLayoutAndroid Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20DrawerLayoutAndroid%2C%20Text%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BdrawerPosition%2C%20setDrawerPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20changeDrawerPosition%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(drawerPosition%20%3D%3D%3D%20%22left%22)%20%7B%0A%20%20%20%20%20%20setDrawerPosition(%22right%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20setDrawerPosition(%22left%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20const%20navigationView%20%3D%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.navigationContainer%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20margin%3A%2010%2C%20fontSize%3A%2015%20%7D%7D%3EI'm%20in%20the%20Drawer!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CDrawerLayoutAndroid%0A%20%20%20%20%20%20drawerWidth%3D%7B300%7D%0A%20%20%20%20%20%20drawerPosition%3D%7BdrawerPosition%7D%0A%20%20%20%20%20%20renderNavigationView%3D%7B()%20%3D%3E%20navigationView%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20margin%3A%2010%2C%20fontSize%3A%2015%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20DrawerLayoutAndroid%20example%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Change%20Drawer%20Position%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20changeDrawerPosition()%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20margin%3A%2010%2C%20fontSize%3A%2015%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Drawer%20on%20the%20%7BdrawerPosition%7D!%20Swipe%20from%20the%20side%20to%20see!%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FDrawerLayoutAndroid%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%2050%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20navigationContainer%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20paddingTop%3A%2050%2C%0A%20%20%20%20backgroundColor%3A%20%22%23fff%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true"}),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("p",null,"Inherits ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/view#props"}),"View Props"),"."),Object(b.b)("h3",{id:"drawerbackgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"drawerBackgroundColor")),Object(b.b)("p",null,"Specifies the background color of the drawer. The default value is ",Object(b.b)("inlineCode",{parentName:"p"},"white"),". If you want to set the opacity of the drawer, use rgba. Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'return (\n  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)" />\n);\n')),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"drawerlockmode"},Object(b.b)("inlineCode",{parentName:"h3"},"drawerLockMode")),Object(b.b)("p",null,"Specifies the lock mode of the drawer. The drawer can be locked in 3 states:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"unlocked (default), meaning that the drawer will respond (open/close) to touch gestures."),Object(b.b)("li",{parentName:"ul"},"locked-closed, meaning that the drawer will stay closed and not respond to gestures."),Object(b.b)("li",{parentName:"ul"},"locked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (",Object(b.b)("inlineCode",{parentName:"li"},"openDrawer"),"/",Object(b.b)("inlineCode",{parentName:"li"},"closeDrawer"),").")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('unlocked', 'locked-closed', 'locked-open')"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"drawerposition"},Object(b.b)("inlineCode",{parentName:"h3"},"drawerPosition")),Object(b.b)("p",null,"Specifies the side of the screen from which the drawer will slide in. By default it is set to ",Object(b.b)("inlineCode",{parentName:"p"},"left"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('left', 'right')"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"drawerwidth"},Object(b.b)("inlineCode",{parentName:"h3"},"drawerWidth")),Object(b.b)("p",null,"Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"keyboarddismissmode"},Object(b.b)("inlineCode",{parentName:"h3"},"keyboardDismissMode")),Object(b.b)("p",null,"Determines whether the keyboard gets dismissed in response to a drag."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"'none' (the default), drags do not dismiss the keyboard."),Object(b.b)("li",{parentName:"ul"},"'on-drag', the keyboard is dismissed when a drag begins.")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('none', 'on-drag')"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ondrawerclose"},Object(b.b)("inlineCode",{parentName:"h3"},"onDrawerClose")),Object(b.b)("p",null,"Function called whenever the navigation view has been closed."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ondraweropen"},Object(b.b)("inlineCode",{parentName:"h3"},"onDrawerOpen")),Object(b.b)("p",null,"Function called whenever the navigation view has been opened."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ondrawerslide"},Object(b.b)("inlineCode",{parentName:"h3"},"onDrawerSlide")),Object(b.b)("p",null,"Function called whenever there is an interaction with the navigation view."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ondrawerstatechanged"},Object(b.b)("inlineCode",{parentName:"h3"},"onDrawerStateChanged")),Object(b.b)("p",null,"Function called when the drawer state has changed. The drawer can be in 3 states:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"idle, meaning there is no interaction with the navigation view happening at the time"),Object(b.b)("li",{parentName:"ul"},"dragging, meaning there is currently an interaction with the navigation view"),Object(b.b)("li",{parentName:"ul"},"settling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"rendernavigationview"},Object(b.b)("inlineCode",{parentName:"h3"},"renderNavigationView")),Object(b.b)("p",null,"The navigation view that will be rendered to the side of the screen and can be pulled in."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"statusbarbackgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"statusBarBackgroundColor")),Object(b.b)("p",null,"Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"closedrawer"},Object(b.b)("inlineCode",{parentName:"h3"},"closeDrawer()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"closeDrawer();\n")),Object(b.b)("p",null,"Closes the drawer."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"opendrawer"},Object(b.b)("inlineCode",{parentName:"h3"},"openDrawer()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"openDrawer();\n")),Object(b.b)("p",null,"Opens the drawer."))}d.isMDXComponent=!0}}]);