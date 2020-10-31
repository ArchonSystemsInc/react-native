(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(a),u=o,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||n;return a?r.a.createElement(h,c(c({ref:t},p),{},{components:a})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<n;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1095:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/0.60-new-init-screen-5b31714cd0630d7df25c66cab80c210b.png"},1096:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/0.60-upgrade-helper-220ec6d7cb848ee06ae952c142c1cf2a.png"},365:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var o=a(2),r=a(7),n=(a(0),a(1006)),i={title:"Announcing React Native 0.60",author:"Ryan Turner",authorTitle:"Core Maintainer & React Native Developer",authorURL:"https://twitter.com/turnrye",authorImageURL:"https://avatars0.githubusercontent.com/u/701035?s=460&v=4",authorTwitter:"turnrye",tags:["announcement","release"]},c={permalink:"/blog/2019/07/03/version-60",source:"@site/blog/2019-07-03-version-60.md",description:"After months of hard work from hundreds of contributors, the React Native Core team is proud to announce the release of version 0.60. This release handles significant migrations for both Android and iOS platforms, and many issues are resolved too. This blog post covers the highlights of the release. As always though, refer to the changelog for more detailed information. Finally, thank you contributors for helping us to make this milestone!",date:"2019-07-03T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],title:"Announcing React Native 0.60",readingTime:4.03,truncated:!1,prevItem:{title:"Meet Hermes, a new JavaScript Engine optimized for React Native",permalink:"/blog/2019/07/17/hermes"},nextItem:{title:"React Native Open Source Update June 2019",permalink:"/blog/2019/06/12/react-native-open-source-update"}},s=[{value:"Focus on Accessibility",id:"focus-on-accessibility",children:[]},{value:"A Fresh Start",id:"a-fresh-start",children:[]},{value:"AndroidX Support",id:"androidx-support",children:[]},{value:"CocoaPods by Default",id:"cocoapods-by-default",children:[]},{value:"Lean Core Removals",id:"lean-core-removals",children:[]},{value:"Native Modules are now Autolinked",id:"native-modules-are-now-autolinked",children:[]},{value:"Upgrade Helper",id:"upgrade-helper",children:[]},{value:"A Note to Library Maintainers",id:"a-note-to-library-maintainers",children:[]},{value:"Thanks",id:"thanks",children:[]}],p={rightToc:s};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"After months of hard work from hundreds of contributors, the React Native Core team is proud to announce the release of version 0.60. This release handles significant migrations for both Android and iOS platforms, and many issues are resolved too. This blog post covers the highlights of the release. As always though, refer to the changelog for more detailed information. Finally, thank you contributors for helping us to make this milestone!"),Object(n.b)("h2",{id:"focus-on-accessibility"},"Focus on Accessibility"),Object(n.b)("p",null,"There have been many improvements to the accessibility APIs, like ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/cfe0032"}),"announceForAccessibility"),", plus improvements to ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/1aeac1c"}),"roles"),", ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/14b4668"}),"action support"),", ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/0090ab3"}),"flags"),", and more. Accessibility is a complex science, but we hope these improvements make it a bit easier to be an A11Y. Be sure to check ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/blog/2019/06/12/react-native-open-source-update#meaningful-community-contributions"}),"React Native Open Source Update June 2019")," for more details of these changes."),Object(n.b)("h2",{id:"a-fresh-start"},"A Fresh Start"),Object(n.b)("p",null,'React Native\'s start screen has been updated! Thank you to the many contributors who helped create the new UI. This new "Hello World" will welcome users to the ecosystem in a more friendly, engaging way.'),Object(n.b)("p",null,Object(n.b)("img",{alt:"The new init screen helps developers get started from the get-go with resources and a good example",src:a(1095).default})),Object(n.b)("h2",{id:"androidx-support"},"AndroidX Support"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.android.com/jetpack/androidx"}),"AndroidX")," is a major step forward in the Android ecosystem, and the old support library artifacts are being deprecated. For 0.60, React Native has been migrated over to AndroidX. This is a breaking change, and ",Object(n.b)("strong",{parentName:"p"},"your native code and dependencies will need to be migrated")," as well."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"With this change, React Native apps will need to begin using AndroidX themselves. They cannot be used side-by-side in one app, so all of the app code and dependency code needs to be using one or the other."),Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/matt-oakes"}),"matt-oakes")," on ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/129"}),"discussions-and-proposals"))),Object(n.b)("p",null,"While your own native code will need to be migrated by you, ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mikehardy"}),"@mikehardy"),", ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/cawfree"}),"@cawfree"),", and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/m4tt72"}),"@m4tt72")," built a ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mikehardy/jetifier"}),'clever tool named "jetifier"')," to patch your ",Object(n.b)("inlineCode",{parentName:"p"},"node_modules"),". Library maintainers will need to upgrade, but this tool provide you with a temporary solution while giving them time to release an AndroidX version. So if you find errors related to AndroidX migration, give this a shot."),Object(n.b)("h2",{id:"cocoapods-by-default"},"CocoaPods by Default"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/blob/master/proposals/0004-cocoapods-support-improvements.md"}),"CocoaPods are now part of React Native's iOS project"),". If you weren't already, be sure to open iOS platform code using the ",Object(n.b)("inlineCode",{parentName:"p"},"xcworkspace")," file from now on (protip: try ",Object(n.b)("inlineCode",{parentName:"p"},"xed ios")," from the root project directory). Also, the ",Object(n.b)("inlineCode",{parentName:"p"},"podspec"),"s for the internal packages have changed to make them compatible with the Xcode projects, which will help with troubleshooting and debugging. Expect to make ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/2321b3f"}),"some straightforward changes")," to your ",Object(n.b)("inlineCode",{parentName:"p"},"Podfile")," as part of the upgrade to 0.60 to bring this exciting support. Note that we are aware of a compatibility issue with ",Object(n.b)("inlineCode",{parentName:"p"},"use_frameworks!"),", and we're tracking an ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/25349"}),"issue")," with workarounds and a future patch."),Object(n.b)("h2",{id:"lean-core-removals"},"Lean Core Removals"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"WebView")," and ",Object(n.b)("strong",{parentName:"p"},"NetInfo")," were previously extracted into separate repositories, and in 0.60 we\u2019ve finished migrating them out of the React Native repository. Additionally, in response to community feedback about new App Store policy, ",Object(n.b)("strong",{parentName:"p"},"Geolocation")," has been extracted. If you haven\u2019t already, complete your migration by adding dependencies to ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-webview"}),"react-native-webview"),", ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-netinfo"}),"@react-native-community/netinfo"),", and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-geolocation"}),"@react-native-community/geolocation"),". If you'd like an automated solution, consider using ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/lucasbento/rn-update-deprecated-modules"}),"rn-upgrade-deprecated-modules"),". Maintainers have made more than 100 commits to these repositories since extraction and we\u2019re excited to see the community\u2019s support!"),Object(n.b)("h2",{id:"native-modules-are-now-autolinked"},"Native Modules are now Autolinked"),Object(n.b)("p",null,"The team working on the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli"}),"React Native CLI")," has introduced major improvements to native module linking called ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"}),"autolinking"),"! Most scenarios will not require the use of ",Object(n.b)("inlineCode",{parentName:"p"},"react-native link")," anymore. At the same time, the team overhauled the linking process in general. Be sure to ",Object(n.b)("inlineCode",{parentName:"p"},"react-native unlink")," any preexisting dependencies as mentioned in the docs above."),Object(n.b)("h2",{id:"upgrade-helper"},"Upgrade Helper"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/lucasbento"}),"@lucasbento"),", ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/pvinis"}),"@pvinis"),", ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/kelset"}),"@kelset"),", and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/watadarkstar"}),"@watadarkstar")," have built a great tool called ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/"}),"Upgrade Helper")," to make the upgrade process simpler. It helps React Native users with brownfield apps or complex customizations to see what's changed between versions. Take a look at the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/upgrading"}),"updated upgrading docs")," and try it out today for your upgrade path!"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Upgrade Helper cleanly and easily shows the changes needed to migrate to a different version of React Native",src:a(1096).default})),Object(n.b)("h2",{id:"a-note-to-library-maintainers"},"A Note to Library Maintainers"),Object(n.b)("p",null,"Changes for AndroidX will almost certainly require updates to your library, so be sure to include support soon. If you're not able to upgrade yet, consider checking your library against the jetifier to confirm that users are able to patch your library at build time."),Object(n.b)("p",null,"Review the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"}),"autolinking")," docs to update your configs and readme. Depending on how your library was previously integrated, you may also need to make some additional changes. Check the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/docs/dependencies.md"}),"dependencies")," guide from the CLI for information on how to define your dependency interface."),Object(n.b)("h2",{id:"thanks"},"Thanks"),Object(n.b)("p",null,"While these are the highlights that we noted, there are many others to be excited about. To see all the updates, take a look at the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md"}),"changelog"),". As always, stay tuned for more news. Enjoy 0.60 in the meantime!"))}l.isMDXComponent=!0}}]);