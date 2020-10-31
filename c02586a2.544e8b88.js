(window.webpackJsonp=window.webpackJsonp||[]).push([[693],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,h=u["".concat(r,".").concat(m)]||u[m]||p[m]||i;return a?o.a.createElement(h,c(c({ref:t},b),{},{components:a})):o.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var b=2;b<i;b++)r[b]=a[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},769:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),o=a(7),i=(a(0),a(1006)),r={title:"React Native Open Source Update June 2019",author:"Christoph Nakazawa",authorTitle:"Engineer at Facebook",authorURL:"https://twitter.com/cpojer",authorImageURL:"https://avatars2.githubusercontent.com/u/13352?s=460&v=4",authorTwitter:"cpojer",tags:["announcement"]},c={permalink:"/blog/2019/06/12/react-native-open-source-update",source:"@site/blog/2019-06-12-react-native-open-source-update.md",description:"Code & Community Health",date:"2019-06-12T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"React Native Open Source Update June 2019",readingTime:7.16,truncated:!1,prevItem:{title:"Announcing React Native 0.60",permalink:"/blog/2019/07/03/version-60"},nextItem:{title:"React Native at F8 and Open Source Podcast",permalink:"/blog/2019/05/01/react-native-at-f8-and-podcast"}},s=[{value:"Code &amp; Community Health",id:"code--community-health",children:[{value:"Meaningful Community Contributions",id:"meaningful-community-contributions",children:[]},{value:"Lean Core",id:"lean-core",children:[]}]},{value:"User Feedback",id:"user-feedback",children:[]},{value:"Continuous Integration",id:"continuous-integration",children:[]},{value:"Next",id:"next",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"code--community-health"},"Code & Community Health"),Object(i.b)("p",null,"In the past six months, a total of 2800 commits were made to React Native by more than 550 contributors. 400 contributors from the community created more than ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/pulls?page=24&q=is%3Apr+closed%3A%3E2018-12-01&utf8=%E2%9C%93"}),"1,150 Pull Requests"),", of which ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/pulls?utf8=%E2%9C%93&q=is%3Apr+closed%3A%3E2018-12-01+label%3A%22Merged%22+"}),"820 Pull Requests")," were merged."),Object(i.b)("p",null,"The average number of Pull Requests per day throughout the past six months has increased from three to about six, even though we split the website, CLI and many modules out of React Native via the Lean Core effort. The average amount of open pull requests is now below 25 and we usually reply with suggestions and reviews within hours or days."),Object(i.b)("h3",{id:"meaningful-community-contributions"},"Meaningful Community Contributions"),Object(i.b)("p",null,"We\u2019d like to highlight a number of recent contributions which we thought were awesome:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Accessibility:")," React Native 0.60 will ship with many improvements to accessibility APIs both on Android and iOS. All of the new features are directly using APIs provided by the underlying platform so they\u2019ll integrate with native assistance technologies both on Android and iOS. We\u2019d like to thank ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/marcmulcahy"}),"Marc Mulcahy"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/24746"}),"Alan Kenyon"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/elucaswork"}),"Estev\xe3o Lucas"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/sweggersen"}),"Sam Mathias Weggersen")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/janicduplessis"}),"Janic Duplessis")," for their contributions:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/24095"}),"Additional Accessibility Roles + States")," and a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/24608"}),"new Accessibility States API"),". Added a number of missing accessibility roles for various components and a new API for better web support in the future."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/24746"}),"AccessibilityInfo.announceForAccessibility"),". Added support for Android, previously iOS-only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/24695"}),"Extended Accessibility Actions Support"),". Added callbacks to deal with accessibility around user-defined actions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/23913"}),"Support for iOS Accessibility flags")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/23839"}),'support for "reduce motion"'),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/24359"}),"Android keyboard accessibility improvements"),". Added a ",Object(i.b)("inlineCode",{parentName:"li"},"clickable")," prop and an ",Object(i.b)("inlineCode",{parentName:"li"},"onClick")," callback for invoking actions via keyboard navigation ",Object(i.b)("em",{parentName:"li"},"(note: this will soon be renamed to ",Object(i.b)("inlineCode",{parentName:"em"},"focusable"),").")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/24387"}),"Use CALayers to draw text"),". Fixed an issue that made scaled-up text disappear on iOS."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New App Screen:")," The community came up with a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/122"}),"design for the new app screen")," that is implemented in 0.60. This screen is what most people see when they are first using React Native. It now links first time users to the documentation and the look fits with our upcoming website redesign \ud83c\udf1f. Huge thanks to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://twitter.com/orta"}),"Orta"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.linkedin.com/in/ashurson/"}),"Adam Shurson"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/glauberfc"}),"Glauber Castro"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/karanpratapsingh"}),"Karan Singh"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/_eliperkins"}),"Eli Perkins"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/lbentosilva"}),"Lucas Bento")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/ericlewis"}),"Eric Lewis")," for all their work and collaboration!",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Check out the new app screen on the \u201c",Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://www.youtube.com/watch?v=ImlAqMZxveg"}),"React Native Show"),"\u201c "),"video series."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"TurboModule Types:")," The new ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/40"}),"TurboModules system")," requires ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/24875"}),"types for all native modules")," to guarantee type safe operations in native. In just over two weeks, the community sent ~40 Pull Requests to complete this work for flow typed native modules. Aside from the people already mentioned above, we\u2019d like to thank ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/michalchudziak"}),"Micha\u0142 Chudziak"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/thymikee"}),"Micha\u0142 Pierzcha\u0142a"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wojteg1337"}),"Wojtek Szafraniec"),", and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jeanregisser"}),"Jean Regisser")," and everyone else who sent one or more Pull Requests."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Haste:")," Since 2015 React Native used the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/reactjs/reactjs.org/commit/0629e3e2289ed54fac854472aec9a5f6c8318c98#diff-c42b758729cb89976b3a8fd51d1227fa"}),"\u201chaste\u201d module system")," that allows importing modules just via a global id instead of a relative path which is convenient but not well supported by many tools. ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/JI"}),"James Ide")," proposed removing haste, similar to how React removed haste many years ago. He planned all the work through an ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/24316"}),"umbrella task")," and he sent 18 Pull Requests to make it happen! Check out ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/JI/status/1136369775083319296"}),"his Twitter thread")," to learn more."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Android Fragments:")," ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jpshelley"}),"John Shelley"),"\u2018s proposal to make React Native work via ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/12199"}),"Android Fragments")," was merged and will be available in 0.61. ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.android.com/guide/components/fragments"}),"Read more about Android Fragments here"),".")),Object(i.b)("h3",{id:"lean-core"},"Lean Core"),Object(i.b)("p",null,"The primary motivation of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/6"}),"Lean Core")," has been to split modules out of React Native into separate repositories so they can receive better maintenance. In just a six months repositories like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-webview"}),"WebView"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-netinfo"}),"NetInfo"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-async-storage"}),"AsyncStorage"),", the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native-website"}),"website")," and the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli"}),"CLI")," received more than 800 Pull Requests combined. Besides better maintenance, these projects can also be independently released more often than React Native itself."),Object(i.b)("p",null,"We have also taken the opportunity to remove obsolete polyfills and legacy components from React Native itself. Polyfills were necessary in the past to support language features like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"}),Object(i.b)("inlineCode",{parentName:"a"},"Map"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"}),Object(i.b)("inlineCode",{parentName:"a"},"Set"))," in older versions of JavaScriptCore (JSC). Now that React Native ships with a new version, these polyfills were removed."),Object(i.b)("p",null,"This work is still in progress and many more things still need to be split out or removed both on the native and JavaScript side but there are early signs that we managed to reverse the trend of increasing the surface area and app size: When looking at the JavaScript bundle for example, about a year ago in version 0.54 the React Native JavaScript bundle size was 530kb and grew to 607kb (+77kb) by version 0.57 in just 6 months. Now we are seeing a bundle size reduction of 28kb down to 579kb on master, a delta of more than 100kb!"),Object(i.b)("p",null,"As we conclude the first iteration of the Lean Core effort, we will make an effort to be more intentional about new APIs added to React Native and we will continuously evaluate ways to make React Native smaller and faster, as well as finding ways to empower the community to take ownership of various components."),Object(i.b)("h2",{id:"user-feedback"},"User Feedback"),Object(i.b)("p",null,"Six months ago we asked the community \u201c",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/64"}),"What do you dislike about React Native?"),"\u201d which gave a good overview of problems people are facing. We ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/104"}),"replied to the post a few months ago")," and it's time to summarize the progress that was made on top issues:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Upgrading:")," The React Native community rallied around with multiple improvements to the upgrading experience: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"}),"autolinking"),", a better upgrading command via ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/rn-diff-purge"}),"rn-diff-purge"),", an upgrade helper website (coming soon). We\u2019ll also make sure to communicate breaking changes and exciting new features by publishing blog posts for each major release. Many of these improvements will make future upgrades beyond the 0.60 release significantly easier."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Support / Uncertainty:")," Many people were frustrated with the lack of activity on Pull Requests and general uncertainty about Facebook's investment in React Native. As we've shown above, we can confidently say that we are ready for many more Pull Requests and we are eagerly looking forward to your proposals and contributions!"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Performance:")," React Native 0.59 shipped with a new and much faster version of JavaScriptCore (JSC). Separately, we have been working on making it easier to enable ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/performance#ram-bundles-inline-requires"}),"inline-requires")," by default and we have more exciting updates for you in the next couple of months."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Documentation:")," We recently started an effort to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native-website/issues/929"}),"overhaul and rewrite all of React Native's documentation"),". If you are looking to contribute, we\u2019d love to get your help!"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Warnings in Xcode:")," We ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/22609"}),"got rid of all the existing warnings")," and are making an effort not to introduce new warnings."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Hot Reloading:")," The React team is building a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/dan_abramov/status/1126948870137753605"}),"new hot reloading system")," that will soon be integrated into React Native.")),Object(i.b)("p",null,"Unfortunately we weren\u2019t able to improve everything just yet:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Debugging:")," We fixed many inconvenient bugs and issues people that we have been running into every day, but unfortunately we haven't made as much progress on this as we would like. We recognize that debugging with React Native isn't great and we'll prioritize improving this in the future."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Metro symlinks:")," Unfortunately we haven't been able to implement a simple and straightforward solution for this yet. However, React Native users ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/metro/issues/1"}),"shared various workarounds")," that may work for you.")),Object(i.b)("p",null,"Given the large amount of changes in the past six months, we'd like to ask you the same question again. If you are using the latest version of React Native and you have things you'd like to give feedback on, please comment on our new edition of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/134"}),"\u201cWhat do you dislike about React Native?\u201d")),Object(i.b)("h2",{id:"continuous-integration"},"Continuous Integration"),Object(i.b)("p",null,"Facebook merges all Pull Requests and internal changes directly into Facebook\u2019s repository first and then syncs all commits back to GitHub. Facebook\u2019s infrastructure is different from common continuous integration services and not all open source tests were run inside of Facebook. This means that commits that sync out to GitHub frequently break tests in open source which take a lot of time to fix."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/hectorramos"}),"H\xe9ctor Ramos")," from the React Native team spent the past two months improving React Native's continuous integration systems both at Facebook and on GitHub. Most of the open source tests are now run before changes are committed to React Native at Facebook which will keep CI stable on GitHub when commits are being synchronized."),Object(i.b)("h2",{id:"next"},"Next"),Object(i.b)("p",null,"Make sure to check out our talks about the future of React Native! In the next couple of months, members of the React Native team at Facebook will speak at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://infinite.red/ChainReactConf"}),"Chain React")," and at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-native.eu/"}),"React Native EU"),". Also, watch out for our next release, 0.60, which is right around the corner. ",Object(i.b)("em",{parentName:"p"},"It's going to be exciting")," \u2728"))}l.isMDXComponent=!0}}]);