(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1097:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/0.62-flipper-dc5a5cb54cc6033750c56f3c147c6ce3.png"},417:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(7),o=(a(0),a(1006)),i={title:"Announcing React Native 0.62 with Flipper",author:"Rick Hanlon",authorTitle:"React Native Core at Facebook",authorURL:"https://twitter.com/rickhanlonii",authorImageURL:"https://avatars3.githubusercontent.com/u/2440089?s=460&v=4",authorTwitter:"rickhanlonii",tags:["announcement","release"]},c={permalink:"/blog/2020/03/26/version-0.62",source:"@site/blog/2020-03-26-version-0.62.md",description:"Today we\u2019re releasing React Native version 0.62 which includes support for Flipper by default.",date:"2020-03-26T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],title:"Announcing React Native 0.62 with Flipper",readingTime:4.255,truncated:!1,prevItem:{title:"Announcing React Native 0.63 with LogBox",permalink:"/blog/2020/07/06/version-0.63"},nextItem:{title:"Meet Doctor, a new React Native command",permalink:"/blog/2019/11/18/react-native-doctor"}},l=[{value:"Flipper by default",id:"flipper-by-default",children:[]},{value:"New dark mode features",id:"new-dark-mode-features",children:[]},{value:"Moving Apple TV to react-native-tvos",id:"moving-apple-tv-to-react-native-tvos",children:[]},{value:"More upgrade support",id:"more-upgrade-support",children:[]},{value:"Other improvements",id:"other-improvements",children:[]},{value:"Breaking changes",id:"breaking-changes",children:[]},{value:"Deprecations",id:"deprecations",children:[]},{value:"Thanks",id:"thanks",children:[]}],p={rightToc:l};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Today we\u2019re releasing React Native version 0.62 which includes support for Flipper by default."),Object(o.b)("p",null,"This release comes in the midst of a global pandemic. We\u2019re releasing this version today to respect the work of hundreds of contributors who made this release possible and to prevent the release from falling too far behind master. Please be mindful of the reduced capacity of contributors to help with issues and prepare to delay upgrading if necessary."),Object(o.b)("h2",{id:"flipper-by-default"},"Flipper by default"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://fbflipper.com/"}),"Flipper")," is a developer tool for debugging mobile apps. It\u2019s popular in the Android and iOS communities, and in this release we\u2019ve enabled support by default for new and existing React Native apps."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screenshot of Flipper for React Native",src:a(1097).default})),Object(o.b)("p",null,"Flipper provides the following features out of the box:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Metro Actions"),": Reload the app and trigger the Dev Menu right from the toolbar."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Crash Reporter"),": View crash reports from Android and iOS devices."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"React DevTools"),": Use the newest version of React DevTools right alongside all your other tools."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Network Inspector"),": View all of the network requests made by device applications."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Metro and Device Logs"),": View, search, and filter all logs from both Metro and the Device."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Native Layout Inspector"),": View and edit the native layout output by the React Native renderer."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Database and Preference Inspectors"),": View and edit the device databases and preferences.")),Object(o.b)("p",null,"Additionally, since Flipper is an extensible platform, it provides a marketplace that pulls plugins from NPM so you can publish and install custom plugins specific to your workflows. See the available plugins ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/search?q=flipper-plugin"}),"here"),"."),Object(o.b)("p",null,"For more information, check out the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://fbflipper.com/docs/features/react-native"}),"Flipper documentation"),"."),Object(o.b)("h2",{id:"new-dark-mode-features"},"New dark mode features"),Object(o.b)("p",null,"We\u2019ve added a new ",Object(o.b)("inlineCode",{parentName:"p"},"Appearance")," module to provide access to the user's appearance preferences, such as their preferred color scheme (light or dark)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // Use dark color scheme\n}\n")),Object(o.b)("p",null,"We\u2019ve also added a hook to subscribe to state updates to the users preferences:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Text, useColorScheme } from 'react-native';\n\nconst MyComponent = () => {\n  const colorScheme = useColorScheme();\n  return <Text>useColorScheme(): {colorScheme}</Text>;\n};\n")),Object(o.b)("p",null,"See the docs for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/appearance"}),"Appearance")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/usecolorscheme"}),"useColorScheme")," for more information."),Object(o.b)("h2",{id:"moving-apple-tv-to-react-native-tvos"},"Moving Apple TV to react-native-tvos"),Object(o.b)("p",null,"As part of our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/blog/#lean-core"}),"Lean Core effort")," and to bring Apple TV in line with other platforms like React Native Windows and React Native macOS, we\u2019ve started to remove Apple TV specific code from core."),Object(o.b)("p",null,"Going forward, Apple TV support for React Native will be maintained in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-tvos"}),"react-native-community/react-native-tvos")," along with the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-tvos")," NPM package. This is a full fork of the main repository, with only the changes needed to support Apple TV."),Object(o.b)("p",null,"Releases of ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-tvos")," will be based on the public release of React Native. For this 0.62 release of ",Object(o.b)("inlineCode",{parentName:"p"},"react-native")," please upgrade Apple TV projects to use ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-tvos")," 0.62."),Object(o.b)("h2",{id:"more-upgrade-support"},"More upgrade support"),Object(o.b)("p",null,"When 0.61 was released, the community introduced a new ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/"}),"upgrade helper")," tool to support developers upgrading to new versions of React Native. The upgrade helper provides a diff of changes from the version you're on to the version you're targeting, allowing you to see the changes that need to be made for your specific upgrade."),Object(o.b)("p",null,"Even with this tool, issues come up when upgrading. Today we're introducing more dedicated upgrading support by announcing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/upgrade-support"}),"Upgrade-Support"),". Upgrade Support is a GitHub issue tracker where users can submit issues specific to upgrading their projects to receive help from the community."),Object(o.b)("p",null,"We're always working to improve the upgrade experience, and we hope that these tools give users the support they need in the edge cases we haven't covered yet."),Object(o.b)("h2",{id:"other-improvements"},"Other improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LogBox"),": We\u2019re adding the new LogBox error and warning experience as an opt-in; to enable it, add ",Object(o.b)("inlineCode",{parentName:"li"},"require('react-native').unstable_enableLogBox()")," to your ",Object(o.b)("inlineCode",{parentName:"li"},"index.js")," file."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"React DevTools v4"),": This change includes an upgrade to the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/blog/2019/08/15/new-react-devtools.html"}),"latest React DevTools")," which offers significant performance gains, an improved navigation experience, and full support for React Hooks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Accessibility improvements"),": We\u2019ve made improvements to accessibility including adding ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/accessibility#accessibilityvalue-ios-android"}),"accessibilityValue"),", missing props on ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/8c0c860e38f57e18296f689e47dfb4a54088c260"}),"Touchables"),", ",Object(o.b)("inlineCode",{parentName:"li"},"onSlidingComplete")," ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/c7aa6dc8270c0eabc913fe6c617c8131e3f4b3c5"}),"accessibility events"),", and changing the default role of Switch component from ",Object(o.b)("inlineCode",{parentName:"li"},'"button"')," to ",Object(o.b)("inlineCode",{parentName:"li"},'"switch"'),".")),Object(o.b)("h2",{id:"breaking-changes"},"Breaking changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Remove PropTypes"),": We're removing ",Object(o.b)("inlineCode",{parentName:"li"},"propTypes")," from core components in order to reduce the app size impact of React Native core and to favor static type systems which check at compile time instead of runtime."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Remove accessibilityStates"),": We\u2019ve ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/7b35f427fd66cb0f36921b992095fe5b3c14d8b9"}),"removed")," the deprecated ",Object(o.b)("inlineCode",{parentName:"li"},"accessibilityStates")," property in favor of the new ",Object(o.b)("inlineCode",{parentName:"li"},"accessibilityState")," prop which is a more semantically rich way for components to describe information about their state to accessibility services."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TextInput changes"),": We removed ",Object(o.b)("inlineCode",{parentName:"li"},"onTextInput")," ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/3f7e0a2c9601fc186f25bfd794cd0008ac3983ab"}),"from TextInput")," as it\u2019s uncommon, not W3C compliant, and difficult to implement in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/4"}),"Fabric"),". We also removed the undocumented ",Object(o.b)("inlineCode",{parentName:"li"},"inputView")," prop, and ",Object(o.b)("inlineCode",{parentName:"li"},"selectionState"),".")),Object(o.b)("h2",{id:"deprecations"},"Deprecations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AccessibilityInfo.fetch")," was already deprecated, but in this release we ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/523ab8333800afbfb169c6fd70ab6611fe07cc2a"}),"added a warning"),"."),Object(o.b)("li",{parentName:"ul"},"Setting ",Object(o.b)("inlineCode",{parentName:"li"},"useNativeDriver")," is ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/5876052615f4858ed5fc32fa3da9b64695974238"}),"now required")," to support switching the default in the future."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"ref")," of an ",Object(o.b)("inlineCode",{parentName:"li"},"Animated")," component is now the internal component and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/66e72bb4e00aafbcb9f450ed5db261d98f99f82a"}),"deprecated")," ",Object(o.b)("inlineCode",{parentName:"li"},"getNode"),".")),Object(o.b)("h2",{id:"thanks"},"Thanks"),Object(o.b)("p",null,"Thank you to the hundreds of contributors that helped make 0.62 possible!"),Object(o.b)("p",null,"To see all the updates, take a look at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#0620"}),"0.62 changelog"),"."))}s.isMDXComponent=!0}}]);