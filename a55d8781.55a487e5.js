(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,d=u["".concat(o,".").concat(b)]||u[b]||h[b]||i;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},680:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),i=(a(0),a(1006)),o={title:"State of React Native 2018",author:"Sophie Alpert",authorTitle:"Engineering Manager on React at Facebook",authorURL:"https://github.com/sophiebits",authorImageURL:"https://avatars2.githubusercontent.com/u/6820?s=460&v=4",authorTwitter:"sophiebits",tags:["engineering"]},c={permalink:"/blog/2018/06/14/state-of-react-native-2018",source:"@site/blog/2018-06-14-state-of-react-native-2018.md",description:"It's been a while since we last published a status update about React Native.",date:"2018-06-14T00:00:00.000Z",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"State of React Native 2018",readingTime:4.68,truncated:!1,prevItem:{title:"Releasing 0.56",permalink:"/blog/2018/07/04/releasing-react-native-056"},nextItem:{title:"Using TypeScript with React Native",permalink:"/blog/2018/05/07/using-typescript-with-react-native"}},s=[{value:"Architecture",id:"architecture",children:[]},{value:"Community",id:"community",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It's been a while since we last published a status update about React Native."),Object(i.b)("p",null,"At Facebook, we're using React Native more than ever and for many important projects. One of our most popular products is Marketplace, one of the top-level tabs in our app which is used by 800 million people each month. Since its creation in 2015, all of Marketplace has been built with React Native, including over a hundred full-screen views throughout different parts of the app."),Object(i.b)("p",null,"We're also using React Native for many new parts of the app. If you watched the F8 keynote last month, you'll recognize Blood Donations, Crisis Response, Privacy Shortcuts, and Wellness Checks \u2013 all recent features built with React Native. And projects outside the main Facebook app are using React Native too. The new Oculus Go VR headset includes ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.oculus.com/app/"}),"a companion mobile app")," that is fully built with React Native, not to mention React VR powering many experiences in the headset itself."),Object(i.b)("p",null,"Naturally, we also use many other technologies to build our apps. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://fblitho.com/"}),"Litho")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://componentkit.org/"}),"ComponentKit")," are two libraries we use extensively in our apps; both provide a React-like component API for building native screens. It's never been a goal for React Native to replace all other technologies \u2013 we are focused on making React Native itself better, but we love seeing other teams borrow ideas from React Native, like bringing ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://instagram-engineering.com/instant-feedback-in-ios-engineering-workflows-c3f6508c76c8"}),"instant reload")," to non-JavaScript code too."),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("p",null,"When we started the React Native project in 2013, we designed it to have a single \u201cbridge\u201d between JavaScript and native that is asynchronous, serializable, and batched. Just as React DOM turns React state updates into imperative, mutative calls to DOM APIs like ",Object(i.b)("inlineCode",{parentName:"p"},"document.createElement(attrs)")," and ",Object(i.b)("inlineCode",{parentName:"p"},".appendChild()"),", React Native was designed to return a single JSON message that lists mutations to perform, like ",Object(i.b)("inlineCode",{parentName:"p"},'[["createView", attrs], ["manageChildren", ...]]'),". We designed the entire system to never rely on getting a synchronous response back and to ensure everything in that list could be fully serialized to JSON and back. We did this for the flexibility it gave us: on top of this architecture, we were able to build tools like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/debugging#chrome-developer-tools"}),"Chrome debugging"),", which runs all the JavaScript code asynchronously over a WebSocket connection."),Object(i.b)("p",null,"Over the last 5 years, we found that these initial principles have made building some features harder. An asynchronous bridge means you can't integrate JavaScript logic directly with many native APIs expecting synchronous answers. A batched bridge that queues native calls means it's harder to have React Native apps call into functions that are implemented natively. And a serializable bridge means unnecessary copying instead of directly sharing memory between the two worlds. For apps that are entirely built in React Native, these restrictions are usually bearable. But for apps with complex integration between React Native and existing app code, they are frustrating."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"We're working on a large-scale rearchitecture of React Native to make the framework more flexible and integrate better with native infrastructure in hybrid JavaScript/native apps.")," With this project, we'll apply what we've learned over the last 5 years and incrementally bring our architecture to a more modern one. We're rewriting many of React Native's internals, but most of the changes are under the hood: existing React Native apps will continue to work with few or no changes."),Object(i.b)("p",null,"To make React Native more lightweight and fit better into existing native apps, this rearchitecture has three major internal changes. First, we are changing the threading model. Instead of each UI update needing to perform work on three different threads, it will be possible to call synchronously into JavaScript on any thread for high-priority updates while still keeping low-priority work off the main thread to maintain responsiveness. Second, we are incorporating ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html"}),"async rendering")," capabilities into React Native to allow multiple rendering priorities and to simplify asynchronous data handling. Finally, we are simplifying our bridge to make it faster and more lightweight; direct calls between native and JavaScript are more efficient and will make it easier to build debugging tools like cross-language stack traces."),Object(i.b)("p",null,"Once these changes are completed, closer integrations will be possible. Today, it's not possible to incorporate native navigation and gesture handling or native components like UICollectionView and RecyclerView without complex hacks. After our changes to the threading model, building features like this will be straightforward."),Object(i.b)("p",null,"We'll release more details about this work later this year as it approaches completion."),Object(i.b)("h2",{id:"community"},"Community"),Object(i.b)("p",null,"Alongside the community inside Facebook, we're happy to have a thriving population of React Native users and collaborators outside Facebook. We'd like to support the React Native community more, both by serving React Native users better and by making the project easier to contribute to."),Object(i.b)("p",null,"Just as our architecture changes will help React Native interoperate more cleanly with other native infrastructure, React Native should be slimmer on the JavaScript side to fit better with the JavaScript ecosystem, which includes making the VM and bundler swappable. We know the pace of breaking changes can be hard to keep up with, so we'd like to find ways to have fewer major releases. Finally, we know that some teams are looking for more thorough documentation in topics like startup optimization, where our expertise hasn't yet been written down. Expect to see some of these changes over the coming year."),Object(i.b)("p",null,"If you're using React Native, you're part of our community; keep letting us know how we can make React Native better for you."),Object(i.b)("p",null,"React Native is just one tool in a mobile developer's toolbox, but it's one that we strongly believe in \u2013 and we're making it better every day, with over 2500 commits in the last year from 500+ contributors."))}p.isMDXComponent=!0}}]);