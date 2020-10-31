(window.webpackJsonp=window.webpackJsonp||[]).push([[696],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(h,p(p({ref:t},l),{},{components:n})):o.a.createElement(h,p({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1053:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ConfigureReleaseScheme-68e17e8d9a2cf2b73adb47865b45399d.png"},772:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(7),a=(n(0),n(1006)),i={id:"publishing-to-app-store",title:"Publishing to Apple App Store"},p={unversionedId:"publishing-to-app-store",id:"version-0.61/publishing-to-app-store",isDocsHomePage:!1,title:"Publishing to Apple App Store",description:"The publishing process is the same as any other native iOS app, with some additional considerations to take into account.",source:"@site/versioned_docs/version-0.61/publishing-to-app-store.md",slug:"/publishing-to-app-store",permalink:"/docs/0.61/publishing-to-app-store",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/publishing-to-app-store.md",version:"0.61",lastUpdatedAt:1603945169},c=[{value:"1. Enable App Transport Security",id:"1-enable-app-transport-security",children:[]},{value:"2. Configure release scheme",id:"2-configure-release-scheme",children:[]},{value:"3. Build app for release",id:"3-build-app-for-release",children:[]}],l={rightToc:c};function s(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The publishing process is the same as any other native iOS app, with some additional considerations to take into account."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are using Expo then read the Expo Guide for ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/distribution/building-standalone-apps/"}),"Building Standalone Apps"),".")),Object(a.b)("h3",{id:"1-enable-app-transport-security"},"1. Enable App Transport Security"),Object(a.b)("p",null,"App Transport Security is a security feature introduced in iOS 9 that rejects all HTTP requests that are not sent over HTTPS. This can result in HTTP traffic being blocked, including the developer React Native server. ATS is disabled for ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," by default in React Native projects in order to make development easier."),Object(a.b)("p",null,"You should re-enable ATS prior to building your app for production by removing the ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," entry from the ",Object(a.b)("inlineCode",{parentName:"p"},"NSExceptionDomains")," dictionary and setting ",Object(a.b)("inlineCode",{parentName:"p"},"NSAllowsArbitraryLoads")," to ",Object(a.b)("inlineCode",{parentName:"p"},"false")," in your ",Object(a.b)("inlineCode",{parentName:"p"},"Info.plist")," file in the ",Object(a.b)("inlineCode",{parentName:"p"},"ios/")," folder. You can also re-enable ATS from within Xcode by opening your target properties under the Info pane and editing the App Transport Security Settings entry."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If your application needs to access HTTP resources on production, see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/"}),"this post")," to learn how to configure ATS on your project.")),Object(a.b)("h3",{id:"2-configure-release-scheme"},"2. Configure release scheme"),Object(a.b)("p",null,"Building an app for distribution in the App Store requires using the ",Object(a.b)("inlineCode",{parentName:"p"},"Release")," scheme in Xcode. Apps built for ",Object(a.b)("inlineCode",{parentName:"p"},"Release")," will automatically disable the in-app Developer menu, which will prevent your users from inadvertently accessing the menu in production. It will also bundle the JavaScript locally, so you can put the app on a device and test whilst not connected to the computer."),Object(a.b)("p",null,"To configure your app to be built using the ",Object(a.b)("inlineCode",{parentName:"p"},"Release")," scheme, go to ",Object(a.b)("strong",{parentName:"p"},"Product")," \u2192 ",Object(a.b)("strong",{parentName:"p"},"Scheme")," \u2192 ",Object(a.b)("strong",{parentName:"p"},"Edit Scheme"),". Select the ",Object(a.b)("strong",{parentName:"p"},"Run")," tab in the sidebar, then set the Build Configuration dropdown to ",Object(a.b)("inlineCode",{parentName:"p"},"Release"),"."),Object(a.b)("p",null,Object(a.b)("img",{src:n(1053).default})),Object(a.b)("h4",{id:"pro-tips"},"Pro Tips"),Object(a.b)("p",null,"As your App Bundle grows in size, you may start to see a blank screen flash between your splash screen and the display of your root application view. If this is the case, you can add the following code to ",Object(a.b)("inlineCode",{parentName:"p"},"AppDelegate.m")," in order to keep your splash screen displayed during the transition."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),'  // Place this code after "[self.window makeKeyAndVisible]" and before "return YES;"\n  UIStoryboard *sb = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];\n  UIViewController *vc = [sb instantiateInitialViewController];\n  rootView.loadingView = vc.view;\n')),Object(a.b)("p",null,"The static bundle is built every time you target a physical device, even in Debug. If you want to save time, turn off bundle generation in Debug by adding the following to your shell script in the Xcode Build Phase ",Object(a.b)("inlineCode",{parentName:"p"},"Bundle React Native code and images"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),' if [ "${CONFIGURATION}" == "Debug" ]; then\n  export SKIP_BUNDLING=true\n fi\n')),Object(a.b)("h3",{id:"3-build-app-for-release"},"3. Build app for release"),Object(a.b)("p",null,"You can now build your app for release by tapping ",Object(a.b)("inlineCode",{parentName:"p"},"\u2318B")," or selecting ",Object(a.b)("strong",{parentName:"p"},"Product")," \u2192 ",Object(a.b)("strong",{parentName:"p"},"Build")," from the menu bar. Once built for release, you'll be able to distribute the app to beta testers and submit the app to the App Store."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"React Native CLI")," to perform this operation using the option ",Object(a.b)("inlineCode",{parentName:"p"},"--configuration")," with the value ",Object(a.b)("inlineCode",{parentName:"p"},"Release")," (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"npx react-native run-ios --configuration Release"),").")))}s.isMDXComponent=!0}}]);