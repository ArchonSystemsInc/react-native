(window.webpackJsonp=window.webpackJsonp||[]).push([[455],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,h=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return a?r.a.createElement(h,s(s({ref:t},l),{},{components:a})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},537:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(7),o=(a(0),a(1006)),i={title:"React Native Open Source Update March 2019",author:"Christoph Nakazawa",authorTitle:"Engineer at Facebook",authorURL:"https://twitter.com/cpojer",authorImageURL:"https://avatars2.githubusercontent.com/u/13352?s=460&v=4",authorTwitter:"cpojer",tags:["announcement"]},s={permalink:"/blog/2019/03/01/react-native-open-source-update",source:"@site/blog/2019-03-01-react-native-open-source-update.md",description:"We announced our React Native Open Source roadmap in Q4 2018 after deciding to invest more in the React Native open source community.",date:"2019-03-01T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"React Native Open Source Update March 2019",readingTime:4.695,truncated:!1,prevItem:{title:"Releasing React Native 0.59",permalink:"/blog/2019/03/12/releasing-react-native-059"},nextItem:{title:"The State of the React Native Community in 2018",permalink:"/blog/2019/01/07/state-of-react-native-community"}},c=[{value:"Pull Requests",id:"pull-requests",children:[]},{value:"Lean Core",id:"lean-core",children:[]},{value:"Leading User Problems",id:"leading-user-problems",children:[]},{value:"0.59 Release",id:"059-release",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],l={rightToc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We announced our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/blog/2018/11/01/oss-roadmap"}),"React Native Open Source roadmap")," in Q4 2018 after deciding to invest more in the React Native open source community."),Object(o.b)("p",null,"For our first milestone, we focused on identifying and improving the most visible aspects of our community. Our goals were to reduce outstanding pull requests, reduce the project's surface area, identify leading user problems, and establish guidelines for community management."),Object(o.b)("p",null,"In the past two months, we made more progress than we expected. Read on for more details:"),Object(o.b)("h3",{id:"pull-requests"},"Pull Requests"),Object(o.b)("p",null,"In order to build a healthy community, we must respond quickly to code contributions. In past years, we de-prioritized reviewing community contributions and accumulated 280 pull requests (December 2018). In the first milestone, we reduced the number of open pull requests to ~65. Simultaneously, the average number of pull requests opened per day increased from 3.5 to 7 which means we have handled about ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/pulls?page=24&q=is%3Apr+closed%3A%3E2018-12-01&utf8=%E2%9C%93"}),"600 pull requests")," in the last three months."),Object(o.b)("p",null,"We merged ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/pulls?utf8=%E2%9C%93&q=is%3Apr+closed%3A%3E2018-12-01+label%3A%22Merged%22+"}),"almost two-thirds")," and closed one-third of the pull requests. They were closed without being merged if they are obsolete or low quality, or if they unnecessarily increase the project's surface area. Most of the merged pull requests fixed bugs, improved cross-platform parity, or introduced new features. Notable contributions include improving type safety and the ongoing work to support AndroidX."),Object(o.b)("p",null,"At Facebook, we run React Native from master, so we test all changes first before they make it into a React Native Release. Out of all the merged pull requests, only six caused issues: four only affected internal development and two were caught in the release candidate state."),Object(o.b)("p",null,"One of the more visible community contributions was ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/pull/22242"}),"the updated \u201cRedBox\u201d screen"),". It's a good example of how the community is making the developer experience friendlier."),Object(o.b)("h3",{id:"lean-core"},"Lean Core"),Object(o.b)("p",null,"React Native currently has a very wide surface area with many unmaintained abstractions that we do not use a lot at Facebook. We are working on reducing the surface area in order to make React Native smaller and allow the community to take better care of abstractions that are mostly unused at Facebook."),Object(o.b)("p",null,"In the first milestone, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/reactnative/status/1093171521114247171"}),"we asked the community for help on the Lean Core project"),". The response was overwhelming and we could barely keep up with all the progress. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/23313"}),"Check out all the work completed in less than a month"),"!"),Object(o.b)("p",null,"What we are most excited about is that maintainers have jumped in fixing long standing issues, adding tests, and supporting long requested features. These modules are getting more support than they ever did within React Native, showing that this is a great step for the community. Examples of such projects are ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-webview"}),"WebView")," that has ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/titozzz/status/1101283928026034176"}),"received many pull requests")," since their extraction and the CLI that is now ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.callstack.io/the-react-native-cli-has-a-new-home-79b63838f0e6"}),"maintained by members of the community")," and received much needed improvements and fixes."),Object(o.b)("h3",{id:"leading-user-problems"},"Leading User Problems"),Object(o.b)("p",null,"In December, we asked the community what they ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/64"}),"disliked about React Native"),". We aggregated the responses and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/104"}),"replied to each and every problem"),". Fortunately, many of the issues that our community faces are also problems at Facebook. In our next milestone, we plan to address some of the main problems."),Object(o.b)("p",null,"One of the highest voted problems was the developer experience of upgrading to newer versions of React Native. Unfortunately, this is not something that we experience ourselves because we run React Native from master. Thankfully, members from the community already stepped up to address this problem:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/thymikee"}),"Micha\u0142 Pierzcha\u0142a")," from Callstack ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/react-native-cli/pull/176/files"}),"improved react-native upgrade")," by using ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/rn-diff-purge"}),"rn-diff-purge")," under the hood. We also updated the website to remove outdated upgrade instructions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/23563"}),"We plan on recommending CocoaPods by default for iOS projects")," which will reduce churn in project files when upgrading React Native. This will make it easier for people to install and link third-party modules which is even more important in the context of Lean Core as we expect projects to link more modules by default.")),Object(o.b)("h3",{id:"059-release"},"0.59 Release"),Object(o.b)("p",null,"Without the help of the React Native community, especially ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/grabbou"}),"Mike Grabowski")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kelset"}),"Lorenzo Sciandra"),", we would not be able to ship releases. We want to improve the release management process and plan to be more involved from now on:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We will work with community members to create a blog post for each major release."),Object(o.b)("li",{parentName:"ul"},"We will show breaking changes directly in the CLI when people upgrade to new versions."),Object(o.b)("li",{parentName:"ul"},"We will reduce the time it takes to make a release. We are exploring ways to increase automated testing and also creating an improved manual test plan.")),Object(o.b)("p",null,"Many of these plans will be incorporated in the upcoming ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/releases/tag/v0.59.0-rc.3"}),"React Native 0.59 release"),". 0.59 will ship with React Hooks, a new 64-bit version of JavaScriptCore for Android, and many performance and functionality improvements. It is currently published as a release candidate and is expected to be stable within the next two weeks."),Object(o.b)("h3",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"For the next two months, we will continue managing pull requests ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://k03lwm00zo.codesandbox.io/"}),"to stay on track")," while also starting to reduce the number of outstanding GitHub issues. We will continue reducing the surface area of React Native through the Lean Core project. We plan to address 5 of the top community problems. As we finalize the community guidelines, we will turn attention to our website and documentation."),Object(o.b)("p",null,"We are very excited to host over ten contributors from our community at Facebook London in March to help drive several of these efforts. We are glad that you are using React Native and hope that you'll see and feel the improvements we are working on in 2019. We'll be back with another update in a few months and ",Object(o.b)("em",{parentName:"p"},"will be merging your pull requests in the meantime!")," \u269b\ufe0f\u270c\ufe0f"))}u.isMDXComponent=!0}}]);