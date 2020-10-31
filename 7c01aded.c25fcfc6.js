(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{1006:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},547:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(2),r=t(7),a=(t(0),t(1006)),i={id:"platform-specific-code",title:"Platform Specific Code"},c={unversionedId:"platform-specific-code",id:"version-0.63/platform-specific-code",isDocsHomePage:!1,title:"Platform Specific Code",description:"When building a cross-platform app, you'll want to re-use as much code as possible. Scenarios may arise where it makes sense for the code to be different, for example you may want to implement separate visual components for Android and iOS.",source:"@site/versioned_docs/version-0.63/platform-specific-code.md",slug:"/platform-specific-code",permalink:"/docs/platform-specific-code",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/platform-specific-code.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/docs",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"},next:{title:"More Resources",permalink:"/docs/more-resources"}},l=[{value:"Platform module",id:"platform-module",children:[{value:"Detecting the Android version",id:"detecting-the-android-version",children:[]},{value:"Detecting the iOS version",id:"detecting-the-ios-version",children:[]}]},{value:"Platform-specific extensions",id:"platform-specific-extensions",children:[]},{value:"Native-specific extensions (i.e. sharing code with NodeJS and Web)",id:"native-specific-extensions-ie-sharing-code-with-nodejs-and-web",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When building a cross-platform app, you'll want to re-use as much code as possible. Scenarios may arise where it makes sense for the code to be different, for example you may want to implement separate visual components for Android and iOS."),Object(a.b)("p",null,"React Native provides two ways to organize your code and separate it by platform:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/platform-specific-code#platform-module"}),Object(a.b)("inlineCode",{parentName:"a"},"Platform")," module"),"."),Object(a.b)("li",{parentName:"ul"},"Using ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/platform-specific-code#platform-specific-extensions"}),"platform-specific file extensions"),".")),Object(a.b)("p",null,"Certain components may have properties that work on one platform only. All of these props are annotated with ",Object(a.b)("inlineCode",{parentName:"p"},"@platform")," and have a small badge next to them on the website."),Object(a.b)("h2",{id:"platform-module"},"Platform module"),Object(a.b)("p",null,"React Native provides a module that detects the platform in which the app is running. You can use the detection logic to implement platform-specific code. Use this option when only small parts of a component are platform-specific."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Platform, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  height: Platform.OS === 'ios' ? 200 : 100\n});\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Platform.OS")," will be ",Object(a.b)("inlineCode",{parentName:"p"},"ios")," when running on iOS and ",Object(a.b)("inlineCode",{parentName:"p"},"android")," when running on Android."),Object(a.b)("p",null,"There is also a ",Object(a.b)("inlineCode",{parentName:"p"},"Platform.select")," method available, that given an object where keys can be one of ",Object(a.b)("inlineCode",{parentName:"p"},"'ios' | 'android' | 'native' | 'default'"),", returns the most fitting value for the platform you are currently running on. That is, if you're running on a phone, ",Object(a.b)("inlineCode",{parentName:"p"},"ios")," and ",Object(a.b)("inlineCode",{parentName:"p"},"android")," keys will take preference. If those are not specified, ",Object(a.b)("inlineCode",{parentName:"p"},"native")," key will be used and then the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," key."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Platform, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    ...Platform.select({\n      ios: {\n        backgroundColor: 'red'\n      },\n      android: {\n        backgroundColor: 'green'\n      },\n      default: {\n        // other platforms, web for example\n        backgroundColor: 'blue'\n      }\n    })\n  }\n});\n")),Object(a.b)("p",null,"This will result in a container having ",Object(a.b)("inlineCode",{parentName:"p"},"flex: 1")," on all platforms, a red background color on iOS, a green background color on Android, and a blue background color on other platforms."),Object(a.b)("p",null,"Since it accepts ",Object(a.b)("inlineCode",{parentName:"p"},"any")," value, you can also use it to return platform specific component, like below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const Component = Platform.select({\n  ios: () => require('ComponentIOS'),\n  android: () => require('ComponentAndroid')\n})();\n\n<Component />;\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const Component = Platform.select({\n  native: () => require('ComponentForNative'),\n  default: () => require('ComponentForWeb')\n})();\n\n<Component />;\n")),Object(a.b)("h3",{id:"detecting-the-android-version"},"Detecting the Android version"),Object(a.b)("p",null,"On Android, the ",Object(a.b)("inlineCode",{parentName:"p"},"Platform")," module can also be used to detect the version of the Android Platform in which the app is running:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Platform } from 'react-native';\n\nif (Platform.Version === 25) {\n  console.log('Running on Nougat!');\n}\n")),Object(a.b)("h3",{id:"detecting-the-ios-version"},"Detecting the iOS version"),Object(a.b)("p",null,"On iOS, the ",Object(a.b)("inlineCode",{parentName:"p"},"Version")," is a result of ",Object(a.b)("inlineCode",{parentName:"p"},"-[UIDevice systemVersion]"),', which is a string with the current version of the operating system. An example of the system version is "10.3". For example, to detect the major version number on iOS:'),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Platform } from 'react-native';\n\nconst majorVersionIOS = parseInt(Platform.Version, 10);\nif (majorVersionIOS <= 9) {\n  console.log('Work around a change in behavior');\n}\n")),Object(a.b)("h2",{id:"platform-specific-extensions"},"Platform-specific extensions"),Object(a.b)("p",null,"When your platform-specific code is more complex, you should consider splitting the code out into separate files. React Native will detect when a file has a ",Object(a.b)("inlineCode",{parentName:"p"},".ios.")," or ",Object(a.b)("inlineCode",{parentName:"p"},".android.")," extension and load the relevant platform file when required from other components."),Object(a.b)("p",null,"For example, say you have the following files in your project:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"BigButton.ios.js\nBigButton.android.js\n")),Object(a.b)("p",null,"You can then require the component as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import BigButton from './BigButton';\n")),Object(a.b)("p",null,"React Native will automatically pick up the right file based on the running platform."),Object(a.b)("h2",{id:"native-specific-extensions-ie-sharing-code-with-nodejs-and-web"},"Native-specific extensions (i.e. sharing code with NodeJS and Web)"),Object(a.b)("p",null,"You can also use the ",Object(a.b)("inlineCode",{parentName:"p"},".native.js")," extension when a module needs to be shared between NodeJS/Web and React Native but it has no Android/iOS differences. This is especially useful for projects that have common code shared among React Native and ReactJS."),Object(a.b)("p",null,"For example, say you have the following files in your project:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"Container.js # picked up by Webpack, Rollup or any other Web bundler\nContainer.native.js # picked up by the React Native bundler for both Android and iOS (Metro)\n")),Object(a.b)("p",null,"You can still require it without the ",Object(a.b)("inlineCode",{parentName:"p"},".native")," extension, as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import Container from './Container';\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Pro tip:")," Configure your Web bundler to ignore ",Object(a.b)("inlineCode",{parentName:"p"},".native.js")," extensions in order to avoid having unused code in your production bundle, thus reducing the final bundle size."))}p.isMDXComponent=!0}}]);