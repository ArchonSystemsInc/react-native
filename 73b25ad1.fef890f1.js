(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},517:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(7),o=(n(0),n(1006)),i={id:"interactionmanager",title:"InteractionManager"},c={unversionedId:"interactionmanager",id:"interactionmanager",isDocsHomePage:!1,title:"InteractionManager",description:"InteractionManager allows long-running work to be scheduled after any interactions/animations have completed. In particular, this allows JavaScript animations to run smoothly.",source:"@site/../docs/interactionmanager.md",slug:"/interactionmanager",permalink:"/docs/next/interactionmanager",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/interactionmanager.md",version:"current",lastUpdatedAt:1589574791,sidebar:"api",previous:{title:"Easing",permalink:"/docs/next/easing"},next:{title:"Keyboard",permalink:"/docs/next/keyboard"}},l=[{value:"Example",id:"example",children:[{value:"Basic",id:"basic",children:[]},{value:"Advanced",id:"advanced",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>runAfterInteractions()</code>",id:"runafterinteractions",children:[]},{value:"<code>createInteractionHandle()</code>",id:"createinteractionhandle",children:[]},{value:"<code>clearInteractionHandle()</code>",id:"clearinteractionhandle",children:[]},{value:"<code>setDeadline()</code>",id:"setdeadline",children:[]}]},{value:"Properties",id:"properties",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"InteractionManager allows long-running work to be scheduled after any interactions/animations have completed. In particular, this allows JavaScript animations to run smoothly."),Object(o.b)("p",null,"Applications can schedule tasks to run after interactions with the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"InteractionManager.runAfterInteractions(() => {\n  // ...long-running synchronous task...\n});\n")),Object(o.b)("p",null,"Compare this to other scheduling alternatives:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"requestAnimationFrame(): for code that animates a view over time."),Object(o.b)("li",{parentName:"ul"},"setImmediate/setTimeout(): run code later, note this may delay animations."),Object(o.b)("li",{parentName:"ul"},"runAfterInteractions(): run code later, without delaying active animations.")),Object(o.b)("p",null,"The touch handling system considers one or more active touches to be an 'interaction' and will delay ",Object(o.b)("inlineCode",{parentName:"p"},"runAfterInteractions()")," callbacks until all touches have ended or been cancelled."),Object(o.b)("p",null,"InteractionManager also allows applications to register animations by creating an interaction 'handle' on animation start, and clearing it upon completion:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"var handle = InteractionManager.createInteractionHandle();\n// run animation... (`runAfterInteractions` tasks are queued)\n// later, on animation completion:\nInteractionManager.clearInteractionHandle(handle);\n// queued tasks run if all handles were cleared\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"runAfterInteractions")," takes either a plain callback function, or a ",Object(o.b)("inlineCode",{parentName:"p"},"PromiseTask")," object with a ",Object(o.b)("inlineCode",{parentName:"p"},"gen")," method that returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),". If a ",Object(o.b)("inlineCode",{parentName:"p"},"PromiseTask")," is supplied, then it is fully resolved (including asynchronous dependencies that also schedule more tasks via ",Object(o.b)("inlineCode",{parentName:"p"},"runAfterInteractions"),") before starting on the next task that might have been queued up synchronously earlier."),Object(o.b)("p",null,"By default, queued tasks are executed together in a loop in one ",Object(o.b)("inlineCode",{parentName:"p"},"setImmediate")," batch. If ",Object(o.b)("inlineCode",{parentName:"p"},"setDeadline")," is called with a positive number, then tasks will only be executed until the deadline (in terms of js event loop run time) approaches, at which point execution will yield via setTimeout, allowing events such as touches to start interactions and block queued tasks from executing, making apps more responsive."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"InteractionManager Function Component Basic Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Animated%2C%0A%20%20InteractionManager%2C%0A%20%20Platform%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20View%2C%0A%7D%20from%20%22react-native%22%3B%0A%0Aconst%20instructions%20%3D%20Platform.select(%7B%0A%20%20ios%3A%20%22Press%20Cmd%2BR%20to%20reload%2C%5Cn%22%20%2B%20%22Cmd%2BD%20or%20shake%20for%20dev%20menu%22%2C%0A%20%20android%3A%0A%20%20%20%20%22Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5Cn%22%20%2B%0A%20%20%20%20%22Shake%20or%20press%20menu%20button%20for%20dev%20menu%22%2C%0A%7D)%3B%0A%0Aconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%0A%0Aconst%20useFadeIn%20%3D%20(duration%20%3D%205000)%20%3D%3E%20%7B%0A%20%20const%20%5Bopacity%5D%20%3D%20useState(new%20Animated.Value(0))%3B%0A%0A%20%20%2F%2F%20Running%20the%20animation%20when%20the%20component%20is%20mounted%0A%20%20useMount(()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Animated.timing()%20create%20a%20interaction%20handle%20by%20default%2C%20if%20you%20want%20to%20disabled%20that%0A%20%20%20%20%2F%2F%20behaviour%20you%20can%20set%20isInteraction%20to%20false%20to%20disabled%20that.%0A%20%20%20%20Animated.timing(opacity%2C%20%7B%0A%20%20%20%20%20%20toValue%3A%201%2C%0A%20%20%20%20%20%20duration%2C%0A%20%20%20%20%7D).start()%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20opacity%3B%0A%7D%3B%0A%0Aconst%20Ball%20%3D%20(%7B%20onShown%20%7D)%20%3D%3E%20%7B%0A%20%20const%20opacity%20%3D%20useFadeIn()%3B%0A%0A%20%20%2F%2F%20Running%20a%20method%20after%20the%20animation%0A%20%20useMount(()%20%3D%3E%20%7B%0A%20%20%20%20const%20interactionPromise%20%3D%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onShown())%3B%0A%20%20%20%20return%20()%20%3D%3E%20interactionPromise.cancel()%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%2C%20%7B%20opacity%20%7D%5D%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CBall%20onShown%3D%7B()%20%3D%3E%20Alert.alert(%22Animation%20is%20done%22)%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%20%20ball%3A%20%7B%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20%22salmon%22%2C%0A%20%20%20%20borderRadius%3A%20100%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("h3",{id:"advanced"},"Advanced"),Object(o.b)("div",{className:"snack-player","data-snack-name":"InteractionManager Function Component Advanced Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Animated%2C%0A%20%20InteractionManager%2C%0A%20%20Platform%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20View%2C%0A%7D%20from%20%22react-native%22%3B%0A%0Aconst%20instructions%20%3D%20Platform.select(%7B%0A%20%20ios%3A%20%22Press%20Cmd%2BR%20to%20reload%2C%5Cn%22%20%2B%20%22Cmd%2BD%20or%20shake%20for%20dev%20menu%22%2C%0A%20%20android%3A%0A%20%20%20%20%22Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5Cn%22%20%2B%0A%20%20%20%20%22Shake%20or%20press%20menu%20button%20for%20dev%20menu%22%2C%0A%7D)%3B%0A%0Aconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%0A%0A%2F%2F%20You%20can%20create%20a%20custom%20interaction%2Fanimation%20and%20add%0A%2F%2F%20support%20for%20InteractionManager%0Aconst%20useCustomInteraction%20%3D%20(timeLocked%20%3D%202000)%20%3D%3E%20%7B%0A%20%20useMount(()%20%3D%3E%20%7B%0A%20%20%20%20const%20handle%20%3D%20InteractionManager.createInteractionHandle()%3B%0A%0A%20%20%20%20setTimeout(%0A%20%20%20%20%20%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%2C%0A%20%20%20%20%20%20timeLocked%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%3B%0A%20%20%7D)%3B%0A%7D%3B%0A%0Aconst%20Ball%20%3D%20(%7B%20onInteractionIsDone%20%7D)%20%3D%3E%20%7B%0A%20%20useCustomInteraction()%3B%0A%0A%20%20%2F%2F%20Running%20a%20method%20after%20the%20interaction%0A%20%20useMount(()%20%3D%3E%20%7B%0A%20%20%20%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onInteractionIsDone())%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%5D%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CBall%20onInteractionIsDone%3D%7B()%20%3D%3E%20Alert.alert(%22Interaction%20is%20done%22)%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%20%20ball%3A%20%7B%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20%22salmon%22%2C%0A%20%20%20%20borderRadius%3A%20100%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": ",Object(o.b)("inlineCode",{parentName:"p"},"InteractionManager.runAfterInteractions()")," is not working properly on web. It triggers immediately without waiting until the interaction is finished.")),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"runafterinteractions"},Object(o.b)("inlineCode",{parentName:"h3"},"runAfterInteractions()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static runAfterInteractions(task)\n")),Object(o.b)("p",null,'Schedule a function to run after all interactions have completed. Returns a cancellable "promise".'),Object(o.b)("hr",null),Object(o.b)("h3",{id:"createinteractionhandle"},Object(o.b)("inlineCode",{parentName:"h3"},"createInteractionHandle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static createInteractionHandle()\n")),Object(o.b)("p",null,"Notify manager that an interaction has started."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"clearinteractionhandle"},Object(o.b)("inlineCode",{parentName:"h3"},"clearInteractionHandle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static clearInteractionHandle(handle)\n")),Object(o.b)("p",null,"Notify manager that an interaction has completed."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"setdeadline"},Object(o.b)("inlineCode",{parentName:"h3"},"setDeadline()")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static setDeadline(deadline)\n")),Object(o.b)("p",null,"A positive number will use setTimeout to schedule any tasks after the eventLoopRunningTime hits the deadline value, otherwise all tasks will be executed in one setImmediate batch (default)."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("hr",null))}d.isMDXComponent=!0}}]);