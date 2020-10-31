(window.webpackJsonp=window.webpackJsonp||[]).push([[672],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=d(a),O=n,j=s["".concat(l,".").concat(O)]||s[O]||p[O]||b;return a?r.a.createElement(j,i(i({ref:t},o),{},{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},748:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(7),b=(a(0),a(1006)),l={id:"listview",title:"ListView"},i={unversionedId:"listview",id:"version-0.62/listview",isDocsHomePage:!1,title:"ListView",description:"DEPRECATED - use one of the new list components, such as FlatList or SectionList for bounded memory use, fewer bugs, better performance, an easier to use API, and more features. Check out this blog post for more details.",source:"@site/versioned_docs/version-0.62/listview.md",slug:"/listview",permalink:"/docs/0.62/listview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/listview.md",version:"0.62",lastUpdatedAt:1603945169},c=[{value:"Props",id:"props",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Props",id:"props-1",children:[{value:"<code>dataSource</code>",id:"datasource",children:[]},{value:"<code>initialListSize</code>",id:"initiallistsize",children:[]},{value:"<code>onEndReachedThreshold</code>",id:"onendreachedthreshold",children:[]},{value:"<code>pageSize</code>",id:"pagesize",children:[]},{value:"<code>renderRow</code>",id:"renderrow",children:[]},{value:"<code>renderScrollComponent</code>",id:"renderscrollcomponent",children:[]},{value:"<code>scrollRenderAheadDistance</code>",id:"scrollrenderaheaddistance",children:[]},{value:"<code>stickyHeaderIndices</code>",id:"stickyheaderindices",children:[]},{value:"<code>enableEmptySections</code>",id:"enableemptysections",children:[]},{value:"<code>renderHeader</code>",id:"renderheader",children:[]},{value:"<code>onEndReached</code>",id:"onendreached",children:[]},{value:"<code>stickySectionHeadersEnabled</code>",id:"stickysectionheadersenabled",children:[]},{value:"<code>renderSectionHeader</code>",id:"rendersectionheader",children:[]},{value:"<code>renderSeparator</code>",id:"renderseparator",children:[]},{value:"<code>onChangeVisibleRows</code>",id:"onchangevisiblerows",children:[]},{value:"<code>removeClippedSubviews</code>",id:"removeclippedsubviews",children:[]},{value:"<code>renderFooter</code>",id:"renderfooter",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"<code>getMetrics()</code>",id:"getmetrics",children:[]},{value:"<code>scrollTo()</code>",id:"scrollto",children:[]},{value:"<code>scrollToEnd()</code>",id:"scrolltoend",children:[]},{value:"<code>flashScrollIndicators()</code>",id:"flashscrollindicators",children:[]}]}],o={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"DEPRECATED - use one of the new list components, such as ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.62/flatlist"}),Object(b.b)("inlineCode",{parentName:"a"},"FlatList"))," or ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.62/sectionlist"}),Object(b.b)("inlineCode",{parentName:"a"},"SectionList"))," for bounded memory use, fewer bugs, better performance, an easier to use API, and more features. Check out this ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/blog/2017/03/13/better-list-views"}),"blog post")," for more details."),Object(b.b)("p",null,"ListView - A core component designed for efficient display of vertically scrolling lists of changing data. The minimal API is to create a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/listviewdatasource"}),Object(b.b)("inlineCode",{parentName:"a"},"ListView.DataSource")),", populate it with a flat array of data blobs, and instantiate a ",Object(b.b)("inlineCode",{parentName:"p"},"ListView")," component with that data source and a ",Object(b.b)("inlineCode",{parentName:"p"},"renderRow")," callback which takes a blob from the data array and returns a renderable component."),Object(b.b)("p",null,"Minimal example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"class MyComponent extends Component {\n  constructor() {\n    super();\n    const ds = new ListView.DataSource({\n      rowHasChanged: (r1, r2) => r1 !== r2\n    });\n    this.state = {\n      dataSource: ds.cloneWithRows(['row 1', 'row 2'])\n    };\n  }\n\n  render() {\n    return (\n      <ListView\n        dataSource={this.state.dataSource}\n        renderRow={(rowData) => <Text>{rowData}</Text>}\n      />\n    );\n  }\n}\n")),Object(b.b)("p",null,"ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (",Object(b.b)("inlineCode",{parentName:"p"},"onEndReached"),") and on the set of rows that are visible in the device viewport change (",Object(b.b)("inlineCode",{parentName:"p"},"onChangeVisibleRows"),"), and several performance optimizations."),Object(b.b)("p",null,"There are a few performance operations designed to make ListView scroll smoothly while dynamically loading potentially very large (or conceptually infinite) data sets:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Only re-render changed rows - the rowHasChanged function provided to the data source tells the ListView if it needs to re-render a row because the source data has changed - see ListViewDataSource for more details.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Rate-limited row rendering - By default, only one row is rendered per event-loop (customizable with the ",Object(b.b)("inlineCode",{parentName:"p"},"pageSize")," prop). This breaks up the work into smaller chunks to reduce the chance of dropping frames while rendering rows."))),Object(b.b)("h3",{id:"props"},"Props"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/scrollview#props"}),"ScrollView props..."))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#datasource"}),Object(b.b)("inlineCode",{parentName:"a"},"dataSource"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#initiallistsize"}),Object(b.b)("inlineCode",{parentName:"a"},"initialListSize"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#onendreachedthreshold"}),Object(b.b)("inlineCode",{parentName:"a"},"onEndReachedThreshold"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#pagesize"}),Object(b.b)("inlineCode",{parentName:"a"},"pageSize"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#renderrow"}),Object(b.b)("inlineCode",{parentName:"a"},"renderRow"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#renderscrollcomponent"}),Object(b.b)("inlineCode",{parentName:"a"},"renderScrollComponent"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#scrollrenderaheaddistance"}),Object(b.b)("inlineCode",{parentName:"a"},"scrollRenderAheadDistance"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#stickyheaderindices"}),Object(b.b)("inlineCode",{parentName:"a"},"stickyHeaderIndices"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#enableemptysections"}),Object(b.b)("inlineCode",{parentName:"a"},"enableEmptySections"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#renderheader"}),Object(b.b)("inlineCode",{parentName:"a"},"renderHeader"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#onendreached"}),Object(b.b)("inlineCode",{parentName:"a"},"onEndReached"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#stickysectionheadersenabled"}),Object(b.b)("inlineCode",{parentName:"a"},"stickySectionHeadersEnabled"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#rendersectionheader"}),Object(b.b)("inlineCode",{parentName:"a"},"renderSectionHeader"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#renderseparator"}),Object(b.b)("inlineCode",{parentName:"a"},"renderSeparator"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#onchangevisiblerows"}),Object(b.b)("inlineCode",{parentName:"a"},"onChangeVisibleRows"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#removeclippedsubviews"}),Object(b.b)("inlineCode",{parentName:"a"},"removeClippedSubviews"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#renderfooter"}),Object(b.b)("inlineCode",{parentName:"a"},"renderFooter")))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#getmetrics"}),Object(b.b)("inlineCode",{parentName:"a"},"getMetrics"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#scrollto"}),Object(b.b)("inlineCode",{parentName:"a"},"scrollTo"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#scrolltoend"}),Object(b.b)("inlineCode",{parentName:"a"},"scrollToEnd"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.62/listview#flashscrollindicators"}),Object(b.b)("inlineCode",{parentName:"a"},"flashScrollIndicators")))),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props-1"},"Props"),Object(b.b)("h3",{id:"datasource"},Object(b.b)("inlineCode",{parentName:"h3"},"dataSource")),Object(b.b)("p",null,"An instance of ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.62/listviewdatasource"}),"ListView.DataSource")," to use"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ListViewDataSource"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initiallistsize"},Object(b.b)("inlineCode",{parentName:"h3"},"initialListSize")),Object(b.b)("p",null,"How many rows to render on initial component mount. Use this to make it so that the first screen worth of data appears at one time instead of over the course of multiple frames."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onendreachedthreshold"},Object(b.b)("inlineCode",{parentName:"h3"},"onEndReachedThreshold")),Object(b.b)("p",null,"Threshold in pixels (virtual, not physical) for calling onEndReached."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"pagesize"},Object(b.b)("inlineCode",{parentName:"h3"},"pageSize")),Object(b.b)("p",null,"Number of rows to render per event loop. Note: if your 'rows' are actually cells, i.e. they don't span the full width of your view (as in the ListViewGridLayoutExample), you should set the pageSize to be a multiple of the number of cells per row, otherwise you're likely to see gaps at the edge of the ListView as new pages are loaded."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"renderrow"},Object(b.b)("inlineCode",{parentName:"h3"},"renderRow")),Object(b.b)("p",null,"(rowData, sectionID, rowID, highlightRow) => renderable"),Object(b.b)("p",null,"Takes a data entry from the data source and its ids and should return a renderable component to be rendered as the row. By default the data is exactly what was put into the data source, but it's also possible to provide custom extractors. ListView can be notified when a row is being highlighted by calling ",Object(b.b)("inlineCode",{parentName:"p"},"highlightRow(sectionID, rowID)"),". This sets a boolean value of adjacentRowHighlighted in renderSeparator, allowing you to control the separators above and below the highlighted row. The highlighted state of a row can be reset by calling highlightRow(null)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"renderscrollcomponent"},Object(b.b)("inlineCode",{parentName:"h3"},"renderScrollComponent")),Object(b.b)("p",null,"(props) => renderable"),Object(b.b)("p",null,"A function that returns the scrollable component in which the list rows are rendered. Defaults to returning a ScrollView with the given props."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"scrollrenderaheaddistance"},Object(b.b)("inlineCode",{parentName:"h3"},"scrollRenderAheadDistance")),Object(b.b)("p",null,"How early to start rendering rows before they come on screen, in pixels."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"stickyheaderindices"},Object(b.b)("inlineCode",{parentName:"h3"},"stickyHeaderIndices")),Object(b.b)("p",null,"An array of child indices determining which children get docked to the top of the screen when scrolling. For example, passing ",Object(b.b)("inlineCode",{parentName:"p"},"stickyHeaderIndices={[0]}")," will cause the first child to be fixed to the top of the scroll view. This property is not supported in conjunction with ",Object(b.b)("inlineCode",{parentName:"p"},"horizontal={true}"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"array of number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enableemptysections"},Object(b.b)("inlineCode",{parentName:"h3"},"enableEmptySections")),Object(b.b)("p",null,"Flag indicating whether empty section headers should be rendered. In the future release empty section headers will be rendered by default, and the flag will be deprecated. If empty sections are not desired to be rendered their indices should be excluded from sectionID object."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"renderheader"},Object(b.b)("inlineCode",{parentName:"h3"},"renderHeader")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onendreached"},Object(b.b)("inlineCode",{parentName:"h3"},"onEndReached")),Object(b.b)("p",null,"Called when all rows have been rendered and the list has been scrolled to within onEndReachedThreshold of the bottom. The native scroll event is provided."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"stickysectionheadersenabled"},Object(b.b)("inlineCode",{parentName:"h3"},"stickySectionHeadersEnabled")),Object(b.b)("p",null,"Makes the sections headers sticky. The sticky behavior means that it will scroll with the content at the top of the section until it reaches the top of the screen, at which point it will stick to the top until it is pushed off the screen by the next section header. This property is not supported in conjunction with ",Object(b.b)("inlineCode",{parentName:"p"},"horizontal={true}"),". Only enabled by default on iOS because of typical platform standards."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"rendersectionheader"},Object(b.b)("inlineCode",{parentName:"h3"},"renderSectionHeader")),Object(b.b)("p",null,"(sectionData, sectionID) => renderable"),Object(b.b)("p",null,"If provided, a header is rendered for this section."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"renderseparator"},Object(b.b)("inlineCode",{parentName:"h3"},"renderSeparator")),Object(b.b)("p",null,"(sectionID, rowID, adjacentRowHighlighted) => renderable"),Object(b.b)("p",null,"If provided, a renderable component to be rendered as the separator below each row but not the last row if there is a section header below. Take a sectionID and rowID of the row above and whether its adjacent row is highlighted."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onchangevisiblerows"},Object(b.b)("inlineCode",{parentName:"h3"},"onChangeVisibleRows")),Object(b.b)("p",null,"(visibleRows, changedRows) => void"),Object(b.b)("p",null,"Called when the set of visible rows changes. ",Object(b.b)("inlineCode",{parentName:"p"},"visibleRows")," maps { sectionID: { rowID: true }} for all the visible rows, and ",Object(b.b)("inlineCode",{parentName:"p"},"changedRows")," maps { sectionID: { rowID: true | false }} for the rows that have changed their visibility, with true indicating visible, and false indicating the view has moved out of view."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"removeclippedsubviews"},Object(b.b)("inlineCode",{parentName:"h3"},"removeClippedSubviews")),Object(b.b)("p",null,"A performance optimization for improving scroll perf of large lists, used in conjunction with overflow: 'hidden' on the row containers. This is enabled by default."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"renderfooter"},Object(b.b)("inlineCode",{parentName:"h3"},"renderFooter")),Object(b.b)("p",null,"() => renderable"),Object(b.b)("p",null,"The header and footer are always rendered (if these props are provided) on every render pass. If they are expensive to re-render, wrap them in StaticContainer or other mechanism as appropriate. Footer is always at the bottom of the list, and header at the top, on every render pass. In a horizontal ListView, the header is rendered on the left and the footer on the right."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"getmetrics"},Object(b.b)("inlineCode",{parentName:"h3"},"getMetrics()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"getMetrics();\n")),Object(b.b)("p",null,"Exports some data, e.g. for perf investigations or analytics."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"scrollto"},Object(b.b)("inlineCode",{parentName:"h3"},"scrollTo()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"scrollTo(...args: Array)\n")),Object(b.b)("p",null,"Scrolls to a given x, y offset, either immediately or with a smooth animation."),Object(b.b)("p",null,"See ",Object(b.b)("inlineCode",{parentName:"p"},"ScrollView#scrollTo"),"."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"scrolltoend"},Object(b.b)("inlineCode",{parentName:"h3"},"scrollToEnd()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"scrollToEnd(([options]: object));\n")),Object(b.b)("p",null,"If this is a vertical ListView scrolls to the bottom. If this is a horizontal ListView scrolls to the right."),Object(b.b)("p",null,"Use ",Object(b.b)("inlineCode",{parentName:"p"},"scrollToEnd({animated: true})")," for smooth animated scrolling, ",Object(b.b)("inlineCode",{parentName:"p"},"scrollToEnd({animated: false})")," for immediate scrolling. If no options are passed, ",Object(b.b)("inlineCode",{parentName:"p"},"animated")," defaults to true."),Object(b.b)("p",null,"See ",Object(b.b)("inlineCode",{parentName:"p"},"ScrollView#scrollToEnd"),"."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"flashscrollindicators"},Object(b.b)("inlineCode",{parentName:"h3"},"flashScrollIndicators()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"flashScrollIndicators();\n")),Object(b.b)("p",null,"Displays the scroll indicators momentarily."))}d.isMDXComponent=!0}}]);