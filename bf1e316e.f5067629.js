(window.webpackJsonp=window.webpackJsonp||[]).push([[692],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(l,".").concat(f)]||p[f]||b[f]||r;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1007:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},1008:function(e,t,n){"use strict";var a=n(0),o=n(1009);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},1010:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1008),l=n(1007),i=n(54),c=n.n(i),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,b=e.groupId,f=e.className,d=Object(r.a)(),m=d.tabGroupChoices,v=d.setTabGroupChoices,O=Object(a.useState)(i),h=O[0],j=O[1],y=Object(a.useState)(!1),g=y[0],w=y[1];if(null!=b){var C=m[b];null!=C&&C!==h&&p.some((function(e){return e.value===C}))&&j(C)}var x=function(e){j(e),null!=b&&v(b,e)},N=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},k=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",k)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},f)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),P(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},1011:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},1012:function(e,t,n){"use strict";var a=n(6),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),l=o?"ios":"android",i=o?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},768:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return f}));var a=n(2),o=n(7),r=(n(0),n(1006)),l=n(1010),i=n(1011),c=n(1012),s={id:"platformcolor",title:"PlatformColor"},u={unversionedId:"platformcolor",id:"platformcolor",isDocsHomePage:!1,title:"PlatformColor",description:"`js",source:"@site/../docs/platformcolor.md",slug:"/platformcolor",permalink:"/docs/next/platformcolor",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/platformcolor.md",version:"current",lastUpdatedAt:1603945169,sidebar:"api",previous:{title:"PixelRatio",permalink:"/docs/next/pixelratio"},next:{title:"Share",permalink:"/docs/next/share"}},p=[{value:"Example",id:"example",children:[]}],b={rightToc:p};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"PlatformColor(color1, [color2, ...colorN]);\n")),Object(r.b)("p",null,"You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor")," function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor")," function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application."),Object(r.b)("p",null,"If you pass more than one string value to the ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor")," function, it will treat the first value as the default and the rest as fallback."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"PlatformColor('bogusName', 'linkColor');\n")),Object(r.b)("p",null,"Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components."),Object(r.b)("h4",{id:"developer-notes"},"Developer notes"),Object(r.b)(l.a,{groupId:"guide",defaultValue:"web",values:c.a.getDevNotesTabs(["web"]),mdxType:"Tabs"},Object(r.b)(i.a,{value:"web",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you\u2019re familiar with design systems, another way of thinking about this is that ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor")," lets you tap into the local design system's color tokens so your app can blend right in!")))),Object(r.b)("p",null,"For a full list of the types of system colors supported, see:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Android:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.android.com/reference/android/R.attr"}),"R.attr")," - ",Object(r.b)("inlineCode",{parentName:"li"},"?attr")," prefix"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.android.com/reference/android/R.color"}),"R.color")," - ",Object(r.b)("inlineCode",{parentName:"li"},"@android:color")," prefix"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"}),"iOS UIColor"))),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport {\n  Platform,\n  PlatformColor,\n  StyleSheet,\n  Text,\n  View\n} from 'react-native';\n\nexport default (App = () => (\n  <View>\n    <Text style={styles.labelCell}>\n      I am a special label color!\n    </Text>\n  </View>\n));\n\nconst styles = StyleSheet.create({\n  labelCell: {\n    flex: 1,\n    alignItems: 'stretch',\n    ...Platform.select({\n      ios: { color: PlatformColor('label') },\n      android: {\n        color: PlatformColor('?attr/colorControlNormal')\n      },\n      default: { color: 'black' }\n    })\n  }\n});\n")),Object(r.b)("p",null,"The string value provided to the ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor")," function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a ",Object(r.b)("inlineCode",{parentName:"p"},"Platform.OS === 'platform'")," or a ",Object(r.b)("inlineCode",{parentName:"p"},"Platform.Select()"),", as shown on the example above."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," You can find a complete example that demonstrates proper, intended use of ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor")," in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js"}),"PlatformColorExample.js"),".")))}f.isMDXComponent=!0}}]);