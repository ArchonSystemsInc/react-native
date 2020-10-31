(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return a?n.a.createElement(d,c(c({ref:t},p),{},{components:a})):n.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},292:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(7),o=(a(0),a(1006)),i={title:"Dive into React Native Performance",author:"Pieter De Baets",authorTitle:"Software Engineer at Facebook",authorURL:"https://github.com/javache",authorImageURL:"https://avatars1.githubusercontent.com/u/5676?v=3&s=460",authorTwitter:"javache",tags:["engineering"]},c={permalink:"/blog/2016/03/28/dive-into-react-native-performance",source:"@site/blog/2016-03-28-dive-into-react-native-performance.md",description:"React Native allows you to build Android and iOS apps in JavaScript using React and Relay's declarative programming model. This leads to more concise, easier-to-understand code; fast iteration without a compile cycle; and easy sharing of code across multiple platforms. You can ship faster and focus on details that really matter, making your app look and feel fantastic. Optimizing performance is a big part of this. Here is the story of how we made React Native app startup twice as fast.",date:"2016-03-28T00:00:00.000Z",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"Dive into React Native Performance",readingTime:1.085,truncated:!1,prevItem:{title:"React Native: A year in review",permalink:"/blog/2016/04/13/react-native-a-year-in-review"},nextItem:{title:"Introducing Hot Reloading",permalink:"/blog/2016/03/24/introducing-hot-reloading"}},s=[{value:"Why the hurry?",id:"why-the-hurry",children:[]}],p={rightToc:s};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React Native allows you to build Android and iOS apps in JavaScript using React and Relay's declarative programming model. This leads to more concise, easier-to-understand code; fast iteration without a compile cycle; and easy sharing of code across multiple platforms. You can ship faster and focus on details that really matter, making your app look and feel fantastic. Optimizing performance is a big part of this. Here is the story of how we made React Native app startup twice as fast."),Object(o.b)("h2",{id:"why-the-hurry"},"Why the hurry?"),Object(o.b)("p",null,"With an app that runs faster, content loads quickly, which means people get more time to interact with it, and smooth animations make the app enjoyable to use. In emerging markets, where ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.facebook.com/posts/952628711437136/classes-performance-and-network-segmentation-on-android/"}),"2011 class phones")," on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://newsroom.fb.com/news/2015/10/news-feed-fyi-building-for-all-connectivity/"}),"2G networks")," are the majority, a focus on performance can make the difference between an app that is usable and one that isn't."),Object(o.b)("p",null,"Since releasing React Native on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/blog/2015/03/26/introducing-react-native.html"}),"iOS")," and on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/"}),"Android"),", we have been improving list view scrolling performance, memory efficiency, UI responsiveness, and app startup time. Startup sets the first impression of an app and stresses all parts of the framework, so it is the most rewarding and challenging problem to tackle."),Object(o.b)("footer",null,Object(o.b)("a",{href:"https://code.facebook.com/posts/895897210527114/dive-into-react-native-performance/",className:"btn"},"Read more")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This is an excerpt. Read the rest of the post on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.facebook.com/posts/895897210527114/dive-into-react-native-performance/"}),"Facebook Code"),".")))}l.isMDXComponent=!0}}]);