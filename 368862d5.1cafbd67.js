(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),b=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var i=b.a.createContext({}),d=function(e){var t=b.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=d(n),j=a,u=p["".concat(r,".").concat(j)]||p[j]||O[j]||l;return n?b.a.createElement(u,o(o({ref:t},i),{},{components:n})):b.a.createElement(u,o({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=j;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var i=2;i<l;i++)r[i]=n[i];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),b=n(7),l=(n(0),n(1006)),r={id:"toolbarandroid",title:"ToolbarAndroid"},o={unversionedId:"toolbarandroid",id:"version-0.61/toolbarandroid",isDocsHomePage:!1,title:"ToolbarAndroid",description:"NOTE: Toolbar Android has been deprecated and removed from the package since React Native v0.61.0. Use @react-native-community/toolbar-android instead.",source:"@site/versioned_docs/version-0.61/toolbarandroid.md",slug:"/toolbarandroid",permalink:"/docs/0.61/toolbarandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/toolbarandroid.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/components",previous:{title:"TextInput",permalink:"/docs/0.61/textinput"},next:{title:"TouchableHighlight",permalink:"/docs/0.61/touchablehighlight"}},c=[{value:"Props",id:"props",children:[{value:"<code>actions</code>",id:"actions",children:[]},{value:"<code>contentInsetStart</code>",id:"contentinsetstart",children:[]},{value:"<code>contentInsetEnd</code>",id:"contentinsetend",children:[]},{value:"<code>logo</code>",id:"logo",children:[]},{value:"<code>navIcon</code>",id:"navicon",children:[]},{value:"<code>onActionSelected</code>",id:"onactionselected",children:[]},{value:"<code>onIconClicked</code>",id:"oniconclicked",children:[]},{value:"<code>overflowIcon</code>",id:"overflowicon",children:[]},{value:"<code>rtl</code>",id:"rtl",children:[]},{value:"<code>subtitle</code>",id:"subtitle",children:[]},{value:"<code>subtitleColor</code>",id:"subtitlecolor",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleColor</code>",id:"titlecolor",children:[]}]}],i={rightToc:c};function d(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"NOTE"),": Toolbar Android has been deprecated and removed from the package since React Native v0.61.0. Use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/toolbar-android"}),"@react-native-community/toolbar-android")," instead.")),Object(l.b)("p",null,"React component that wraps the Android-only ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/support/v7/widget/Toolbar.html"}),Object(l.b)("inlineCode",{parentName:"a"},"Toolbar")," widget"),". A Toolbar can display a logo, navigation icon (e.g. hamburger menu), a title & subtitle and a list of actions. The title and subtitle are expanded so the logo and navigation icons are displayed on the left, title and subtitle in the middle and the actions on the right."),Object(l.b)("p",null,"If the toolbar has an only child, it will be displayed between the title and actions."),Object(l.b)("p",null,"Although the Toolbar supports remote images for the logo, navigation and action icons, this should only be used in DEV mode where ",Object(l.b)("inlineCode",{parentName:"p"},"require('./some_icon.png')")," translates into a bundler URL. In release mode you should always use a drawable resource for these icons. Using ",Object(l.b)("inlineCode",{parentName:"p"},"require('./some_icon.png')")," will do this automatically for you, so as long as you don't explicitly use e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"{uri: 'http://...'}"),", you will be good."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"render: function() {\n  return (\n    <ToolbarAndroid\n      logo={require('./app_logo.png')}\n      title=\"AwesomeApp\"\n      actions={[{title: 'Settings', icon: require('./icon_settings.png'), show: 'always'}]}\n      onActionSelected={this.onActionSelected} />\n  )\n},\nonActionSelected: function(position) {\n  if (position === 0) { // index of 'Settings'\n    showSettings();\n  }\n}\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/view#props"}),"View Props"),"."),Object(l.b)("h3",{id:"actions"},Object(l.b)("inlineCode",{parentName:"h3"},"actions")),Object(l.b)("p",null,"Sets possible actions on the toolbar as part of the action menu. These are displayed as icons or text on the right side of the widget. If they don't fit they are placed in an 'overflow' menu."),Object(l.b)("p",null,"This property takes an array of objects, where each object has the following keys:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"title"),": ",Object(l.b)("strong",{parentName:"li"},"required"),", the title of this action"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"icon"),": the icon for this action, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"require('./some_icon.png')")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"show"),": when to show this action as an icon or hide it in the overflow menu: ",Object(l.b)("inlineCode",{parentName:"li"},"always"),", ",Object(l.b)("inlineCode",{parentName:"li"},"ifRoom")," or ",Object(l.b)("inlineCode",{parentName:"li"},"never")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"showWithText"),": boolean, whether to show text alongside the icon or not")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"array of object: {title: string,icon: optionalImageSource,show: enum('always', 'ifRoom', 'never'),showWithText: bool}"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"contentinsetstart"},Object(l.b)("inlineCode",{parentName:"h3"},"contentInsetStart")),Object(l.b)("p",null,"Sets the content inset for the toolbar starting edge."),Object(l.b)("p",null,"The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"contentinsetend"},Object(l.b)("inlineCode",{parentName:"h3"},"contentInsetEnd")),Object(l.b)("p",null,"Sets the content inset for the toolbar ending edge."),Object(l.b)("p",null,"The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"logo"},Object(l.b)("inlineCode",{parentName:"h3"},"logo")),Object(l.b)("p",null,"Sets the toolbar logo."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optionalImageSource"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"navicon"},Object(l.b)("inlineCode",{parentName:"h3"},"navIcon")),Object(l.b)("p",null,"Sets the navigation icon."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optionalImageSource"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onactionselected"},Object(l.b)("inlineCode",{parentName:"h3"},"onActionSelected")),Object(l.b)("p",null,"Callback that is called when an action is selected. The only argument that is passed to the callback is the position of the action in the actions array."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"oniconclicked"},Object(l.b)("inlineCode",{parentName:"h3"},"onIconClicked")),Object(l.b)("p",null,"Callback called when the icon is selected."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"overflowicon"},Object(l.b)("inlineCode",{parentName:"h3"},"overflowIcon")),Object(l.b)("p",null,"Sets the overflow icon."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optionalImageSource"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"rtl"},Object(l.b)("inlineCode",{parentName:"h3"},"rtl")),Object(l.b)("p",null,"Used to set the toolbar direction to RTL. In addition to this property you need to add"),Object(l.b)("p",null,'android:supportsRtl="true"'),Object(l.b)("p",null,"to your application AndroidManifest.xml and then call ",Object(l.b)("inlineCode",{parentName:"p"},"setLayoutDirection(LayoutDirection.RTL)")," in your MainActivity ",Object(l.b)("inlineCode",{parentName:"p"},"onCreate")," method."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"subtitle"},Object(l.b)("inlineCode",{parentName:"h3"},"subtitle")),Object(l.b)("p",null,"Sets the toolbar subtitle."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"subtitlecolor"},Object(l.b)("inlineCode",{parentName:"h3"},"subtitleColor")),Object(l.b)("p",null,"Sets the toolbar subtitle color."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h3"},"testID")),Object(l.b)("p",null,"Used to locate this view in end-to-end tests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"title"},Object(l.b)("inlineCode",{parentName:"h3"},"title")),Object(l.b)("p",null,"Sets the toolbar title."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"titlecolor"},Object(l.b)("inlineCode",{parentName:"h3"},"titleColor")),Object(l.b)("p",null,"Sets the toolbar title color."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))))}d.isMDXComponent=!0}}]);