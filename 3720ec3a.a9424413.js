(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,b=u["".concat(r,".").concat(m)]||u[m]||d[m]||o;return a?i.a.createElement(b,c(c({ref:t},l),{},{components:a})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},307:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(7),o=(a(0),a(1006)),r={id:"native-modules-android",title:"Native Modules"},c={unversionedId:"native-modules-android",id:"version-0.60/native-modules-android",isDocsHomePage:!1,title:"Native Modules",description:"Sometimes an app needs access to a platform API that React Native doesn't have a corresponding module for yet. Maybe you want to reuse some existing Java code without having to reimplement it in JavaScript, or write some high performance, multi-threaded code such as for image processing, a database, or any number of advanced extensions.",source:"@site/versioned_docs/version-0.60/native-modules-android.md",slug:"/native-modules-android",permalink:"/docs/0.60/native-modules-android",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/native-modules-android.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/docs",previous:{title:"App Extensions",permalink:"/docs/0.60/app-extensions"},next:{title:"Native UI Components",permalink:"/docs/0.60/native-components-android"}},s=[{value:"Native Module Setup",id:"native-module-setup",children:[{value:"Enable Gradle",id:"enable-gradle",children:[]}]},{value:"The Toast Module",id:"the-toast-module",children:[{value:"Argument Types",id:"argument-types",children:[]},{value:"Register the Module",id:"register-the-module",children:[]}]},{value:"Beyond Toasts",id:"beyond-toasts",children:[{value:"Callbacks",id:"callbacks",children:[]},{value:"Promises",id:"promises",children:[]},{value:"Threading",id:"threading",children:[]},{value:"Sending Events to JavaScript",id:"sending-events-to-javascript",children:[]},{value:"Getting activity result from <code>startActivityForResult</code>",id:"getting-activity-result-from-startactivityforresult",children:[]},{value:"Listening to LifeCycle events",id:"listening-to-lifecycle-events",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes an app needs access to a platform API that React Native doesn't have a corresponding module for yet. Maybe you want to reuse some existing Java code without having to reimplement it in JavaScript, or write some high performance, multi-threaded code such as for image processing, a database, or any number of advanced extensions."),Object(o.b)("p",null,"We designed React Native such that it is possible for you to write real native code and have access to the full power of the platform. This is a more advanced feature and we don't expect it to be part of the usual development process, however it is essential that it exists. If React Native doesn't support a native feature that you need, you should be able to build it yourself."),Object(o.b)("h2",{id:"native-module-setup"},"Native Module Setup"),Object(o.b)("p",null,"Native modules are usually distributed as npm packages, apart from the typical javascript files and resources they will contain an Android library project. This project is, from NPM's perspective similar to any other media asset, meaning there isn't anything unique about it from this point of view. To get the basic scaffolding make sure to read ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"native-modules-setup"}),"Native Modules Setup")," guide first."),Object(o.b)("h3",{id:"enable-gradle"},"Enable Gradle"),Object(o.b)("p",null,"If you plan to make changes in Java code, we recommend enabling ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.gradle.org/2.9/userguide/gradle_daemon.html"}),"Gradle Daemon")," to speed up builds."),Object(o.b)("h2",{id:"the-toast-module"},"The Toast Module"),Object(o.b)("p",null,"This guide will use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://developer.android.com/reference/android/widget/Toast.html"}),"Toast")," example. Let's say we would like to be able to create a toast message from JavaScript."),Object(o.b)("p",null,"We start by creating a native module. A native module is a Java class that usually extends the ",Object(o.b)("inlineCode",{parentName:"p"},"ReactContextBaseJavaModule")," class and implements the functionality required by the JavaScript. Our goal here is to be able to write ",Object(o.b)("inlineCode",{parentName:"p"},"ToastExample.show('Awesome', ToastExample.SHORT);")," from JavaScript to display a short toast on the screen."),Object(o.b)("p",null,"Create a new Java Class named ",Object(o.b)("inlineCode",{parentName:"p"},"ToastModule.java")," inside ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/com/your-app-name/")," folder with the content below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// ToastModule.java\n\npackage com.your-app-name;\n\nimport android.widget.Toast;\n\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReactContext;\nimport com.facebook.react.bridge.ReactContextBaseJavaModule;\nimport com.facebook.react.bridge.ReactMethod;\n\nimport java.util.Map;\nimport java.util.HashMap;\n\npublic class ToastModule extends ReactContextBaseJavaModule {\n  private static ReactApplicationContext reactContext;\n\n  private static final String DURATION_SHORT_KEY = "SHORT";\n  private static final String DURATION_LONG_KEY = "LONG";\n\n  ToastModule(ReactApplicationContext context) {\n    super(context);\n    reactContext = context;\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ReactContextBaseJavaModule")," requires that a method called ",Object(o.b)("inlineCode",{parentName:"p"},"getName")," is implemented. The purpose of this method is to return the string name of the ",Object(o.b)("inlineCode",{parentName:"p"},"NativeModule")," which represents this class in JavaScript. So here we will call this ",Object(o.b)("inlineCode",{parentName:"p"},"ToastExample")," so that we can access it through ",Object(o.b)("inlineCode",{parentName:"p"},"React.NativeModules.ToastExample")," in JavaScript."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'  @Override\n  public String getName() {\n    return "ToastExample";\n  }\n')),Object(o.b)("p",null,"An optional method called ",Object(o.b)("inlineCode",{parentName:"p"},"getConstants")," returns the constant values exposed to JavaScript. Its implementation is not required but is very useful to key pre-defined values that need to be communicated from JavaScript to Java in sync."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @Override\n  public Map<String, Object> getConstants() {\n    final Map<String, Object> constants = new HashMap<>();\n    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);\n    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);\n    return constants;\n  }\n")),Object(o.b)("p",null,"To expose a method to JavaScript a Java method must be annotated using ",Object(o.b)("inlineCode",{parentName:"p"},"@ReactMethod"),". The return type of bridge methods is always ",Object(o.b)("inlineCode",{parentName:"p"},"void"),". React Native bridge is asynchronous, so the only way to pass a result to JavaScript is by using callbacks or emitting events (see below)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  @ReactMethod\n  public void show(String message, int duration) {\n    Toast.makeText(getReactApplicationContext(), message, duration).show();\n  }\n")),Object(o.b)("h3",{id:"argument-types"},"Argument Types"),Object(o.b)("p",null,"The following argument types are supported for methods annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"@ReactMethod")," and they directly map to their JavaScript equivalents"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Boolean -> Bool\nInteger -> Number\nDouble -> Number\nFloat -> Number\nString -> String\nCallback -> function\nReadableMap -> Object\nReadableArray -> Array\n")),Object(o.b)("p",null,"Read more about ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/bridge/ReadableMap.java"}),"ReadableMap")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/bridge/ReadableArray.java"}),"ReadableArray")),Object(o.b)("h3",{id:"register-the-module"},"Register the Module"),Object(o.b)("p",null,"The last step within Java is to register the Module; this happens in the ",Object(o.b)("inlineCode",{parentName:"p"},"createNativeModules")," of your apps package. If a module is not registered it will not be available from JavaScript."),Object(o.b)("p",null,"create a new Java Class named ",Object(o.b)("inlineCode",{parentName:"p"},"CustomToastPackage.java")," inside ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/com/your-app-name/")," folder with the content below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// CustomToastPackage.java\n\npackage com.your-app-name;\n\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.uimanager.ViewManager;\n\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\npublic class CustomToastPackage implements ReactPackage {\n\n  @Override\n  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n    return Collections.emptyList();\n  }\n\n  @Override\n  public List<NativeModule> createNativeModules(\n                              ReactApplicationContext reactContext) {\n    List<NativeModule> modules = new ArrayList<>();\n\n    modules.add(new ToastModule(reactContext));\n\n    return modules;\n  }\n\n}\n")),Object(o.b)("p",null,"The package needs to be provided in the ",Object(o.b)("inlineCode",{parentName:"p"},"getPackages")," method of the ",Object(o.b)("inlineCode",{parentName:"p"},"MainApplication.java")," file. This file exists under the android folder in your react-native application directory. The path to this file is: ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/com/your-app-name/MainApplication.java"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// MainApplication.java\n\n...\nimport com.your-app-name.CustomToastPackage; // <-- Add this line with your package name.\n...\n\nprotected List<ReactPackage> getPackages() {\n  @SuppressWarnings("UnnecessaryLocalVariable")\n  List<ReactPackage> packages = new PackageList(this).getPackages();\n  // Packages that cannot be autolinked yet can be added manually here, for example:\n  // packages.add(new MyReactNativePackage());\n  packages.add(new CustomToastPackage()); // <-- Add this line with your package name.\n  return packages;\n}\n')),Object(o.b)("p",null,"To access your new functionality from JavaScript, it is common to wrap the native module in a JavaScript module. This is not necessary but saves the consumers of your library the need to pull it off of ",Object(o.b)("inlineCode",{parentName:"p"},"NativeModules")," each time. This JavaScript file also becomes a good location for you to add any JavaScript side functionality."),Object(o.b)("p",null,"Create a new JavaScript file named ",Object(o.b)("inlineCode",{parentName:"p"},"ToastExample.js")," with the content below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"/**\n * This exposes the native ToastExample module as a JS module. This has a\n * function 'show' which takes the following parameters:\n *\n * 1. String message: A string with the text to toast\n * 2. int duration: The duration of the toast. May be ToastExample.SHORT or\n *    ToastExample.LONG\n */\nimport { NativeModules } from 'react-native';\nmodule.exports = NativeModules.ToastExample;\n")),Object(o.b)("p",null,"Now, from your other JavaScript file you can call the method like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import ToastExample from './ToastExample';\n\nToastExample.show('Awesome', ToastExample.SHORT);\n")),Object(o.b)("p",null,"Please make sure this JavaScript is in the same hierarchy as ",Object(o.b)("inlineCode",{parentName:"p"},"ToastExample.js"),"."),Object(o.b)("h2",{id:"beyond-toasts"},"Beyond Toasts"),Object(o.b)("h3",{id:"callbacks"},"Callbacks"),Object(o.b)("p",null,"Native modules also support a unique kind of argument - a callback. In most cases it is used to provide the function call result to JavaScript."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.react.bridge.Callback;\n\npublic class UIManagerModule extends ReactContextBaseJavaModule {\n\n...\n\n  @ReactMethod\n  public void measureLayout(\n      int tag,\n      int ancestorTag,\n      Callback errorCallback,\n      Callback successCallback) {\n    try {\n      measureLayout(tag, ancestorTag, mMeasureBuffer);\n      float relativeX = PixelUtil.toDIPFromPixel(mMeasureBuffer[0]);\n      float relativeY = PixelUtil.toDIPFromPixel(mMeasureBuffer[1]);\n      float width = PixelUtil.toDIPFromPixel(mMeasureBuffer[2]);\n      float height = PixelUtil.toDIPFromPixel(mMeasureBuffer[3]);\n      successCallback.invoke(relativeX, relativeY, width, height);\n    } catch (IllegalViewOperationException e) {\n      errorCallback.invoke(e.getMessage());\n    }\n  }\n\n...\n")),Object(o.b)("p",null,"This method would be accessed in JavaScript using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"UIManager.measureLayout(\n  100,\n  100,\n  (msg) => {\n    console.log(msg);\n  },\n  (x, y, width, height) => {\n    console.log(x + ':' + y + ':' + width + ':' + height);\n  }\n);\n")),Object(o.b)("p",null,"A native module is supposed to invoke its callback only once. It can, however, store the callback and invoke it later."),Object(o.b)("p",null,"It is very important to highlight that the callback is not invoked immediately after the native function completes - remember that bridge communication is asynchronous, and this too is tied to the run loop."),Object(o.b)("h3",{id:"promises"},"Promises"),Object(o.b)("p",null,"Native modules can also fulfill a promise, which can simplify your JavaScript, especially when using ES2016's ",Object(o.b)("inlineCode",{parentName:"p"},"async/await")," syntax. When the last parameter of a bridged native method is a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),", its corresponding JS method will return a JS Promise object."),Object(o.b)("p",null,"Refactoring the above code to use a promise instead of callbacks looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import com.facebook.react.bridge.Promise;\n\npublic class UIManagerModule extends ReactContextBaseJavaModule {\n\n...\n  private static final String E_LAYOUT_ERROR = "E_LAYOUT_ERROR";\n  @ReactMethod\n  public void measureLayout(\n      int tag,\n      int ancestorTag,\n      Promise promise) {\n    try {\n      measureLayout(tag, ancestorTag, mMeasureBuffer);\n\n      WritableMap map = Arguments.createMap();\n\n      map.putDouble("relativeX", PixelUtil.toDIPFromPixel(mMeasureBuffer[0]));\n      map.putDouble("relativeY", PixelUtil.toDIPFromPixel(mMeasureBuffer[1]));\n      map.putDouble("width", PixelUtil.toDIPFromPixel(mMeasureBuffer[2]));\n      map.putDouble("height", PixelUtil.toDIPFromPixel(mMeasureBuffer[3]));\n\n      promise.resolve(map);\n    } catch (IllegalViewOperationException e) {\n      promise.reject(E_LAYOUT_ERROR, e);\n    }\n  }\n\n...\n')),Object(o.b)("p",null,"The JavaScript counterpart of this method returns a Promise. This means you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"await")," keyword within an async function to call it and wait for its result:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"async function measureLayout() {\n  try {\n    var {\n      relativeX,\n      relativeY,\n      width,\n      height\n    } = await UIManager.measureLayout(100, 100);\n\n    console.log(\n      relativeX + ':' + relativeY + ':' + width + ':' + height\n    );\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nmeasureLayout();\n")),Object(o.b)("h3",{id:"threading"},"Threading"),Object(o.b)("p",null,"Native modules should not have any assumptions about what thread they are being called on, as the current assignment is subject to change in the future. If a blocking call is required, the heavy work should be dispatched to an internally managed worker thread, and any callbacks distributed from there."),Object(o.b)("h3",{id:"sending-events-to-javascript"},"Sending Events to JavaScript"),Object(o.b)("p",null,"Native modules can signal events to JavaScript without being invoked directly. The easiest way to do this is to use the ",Object(o.b)("inlineCode",{parentName:"p"},"RCTDeviceEventEmitter")," which can be obtained from the ",Object(o.b)("inlineCode",{parentName:"p"},"ReactContext")," as in the code snippet below."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'...\nimport com.facebook.react.modules.core.DeviceEventManagerModule;\nimport com.facebook.react.bridge.WritableMap;\nimport com.facebook.react.bridge.Arguments;\n...\nprivate void sendEvent(ReactContext reactContext,\n                       String eventName,\n                       @Nullable WritableMap params) {\n  reactContext\n      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)\n      .emit(eventName, params);\n}\n...\nWritableMap params = Arguments.createMap();\nparams.putString("eventProperty", "someValue");\n...\nsendEvent(reactContext, "EventReminder", params);\n')),Object(o.b)("p",null,"JavaScript modules can then register to receive events by ",Object(o.b)("inlineCode",{parentName:"p"},"addListener")," on the NativeEventEmitter class."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { NativeEventEmitter, NativeModules } from 'react-native';\n...\n\n  componentDidMount() {\n    ...\n    const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);\n    eventEmitter.addListener('EventReminder', (event) => {\n       console.log(event.eventProperty) // \"someValue\"\n    }\n    ...\n  }\n")),Object(o.b)("h3",{id:"getting-activity-result-from-startactivityforresult"},"Getting activity result from ",Object(o.b)("inlineCode",{parentName:"h3"},"startActivityForResult")),Object(o.b)("p",null,"You'll need to listen to ",Object(o.b)("inlineCode",{parentName:"p"},"onActivityResult")," if you want to get results from an activity you started with ",Object(o.b)("inlineCode",{parentName:"p"},"startActivityForResult"),". To do this, you must extend ",Object(o.b)("inlineCode",{parentName:"p"},"BaseActivityEventListener")," or implement ",Object(o.b)("inlineCode",{parentName:"p"},"ActivityEventListener"),". The former is preferred as it is more resilient to API changes. Then, you need to register the listener in the module's constructor,"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"reactContext.addActivityEventListener(mActivityResultListener);\n")),Object(o.b)("p",null,"Now you can listen to ",Object(o.b)("inlineCode",{parentName:"p"},"onActivityResult")," by implementing the following method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"@Override\npublic void onActivityResult(\n  final Activity activity,\n  final int requestCode,\n  final int resultCode,\n  final Intent intent) {\n  // Your logic here\n}\n")),Object(o.b)("p",null,"We will implement a basic image picker to demonstrate this. The image picker will expose the method ",Object(o.b)("inlineCode",{parentName:"p"},"pickImage")," to JavaScript, which will return the path of the image when called."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class ImagePickerModule extends ReactContextBaseJavaModule {\n\n  private static final int IMAGE_PICKER_REQUEST = 467081;\n  private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";\n  private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";\n  private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";\n  private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";\n\n  private Promise mPickerPromise;\n\n  private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {\n\n    @Override\n    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {\n      if (requestCode == IMAGE_PICKER_REQUEST) {\n        if (mPickerPromise != null) {\n          if (resultCode == Activity.RESULT_CANCELED) {\n            mPickerPromise.reject(E_PICKER_CANCELLED, "Image picker was cancelled");\n          } else if (resultCode == Activity.RESULT_OK) {\n            Uri uri = intent.getData();\n\n            if (uri == null) {\n              mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found");\n            } else {\n              mPickerPromise.resolve(uri.toString());\n            }\n          }\n\n          mPickerPromise = null;\n        }\n      }\n    }\n  };\n\n  ImagePickerModule(ReactApplicationContext reactContext) {\n    super(reactContext);\n\n    // Add the listener for `onActivityResult`\n    reactContext.addActivityEventListener(mActivityEventListener);\n  }\n\n  @Override\n  public String getName() {\n    return "ImagePickerModule";\n  }\n\n  @ReactMethod\n  public void pickImage(final Promise promise) {\n    Activity currentActivity = getCurrentActivity();\n\n    if (currentActivity == null) {\n      promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn\'t exist");\n      return;\n    }\n\n    // Store the promise to resolve/reject when picker returns data\n    mPickerPromise = promise;\n\n    try {\n      final Intent galleryIntent = new Intent(Intent.ACTION_PICK);\n\n      galleryIntent.setType("image/*");\n\n      final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");\n\n      currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);\n    } catch (Exception e) {\n      mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);\n      mPickerPromise = null;\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"listening-to-lifecycle-events"},"Listening to LifeCycle events"),Object(o.b)("p",null,"Listening to the activity's LifeCycle events such as ",Object(o.b)("inlineCode",{parentName:"p"},"onResume"),", ",Object(o.b)("inlineCode",{parentName:"p"},"onPause")," etc. is very similar to how we implemented ",Object(o.b)("inlineCode",{parentName:"p"},"ActivityEventListener"),". The module must implement ",Object(o.b)("inlineCode",{parentName:"p"},"LifecycleEventListener"),". Then, you need to register a listener in the module's constructor,"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"reactContext.addLifecycleEventListener(this);\n")),Object(o.b)("p",null,"Now you can listen to the activity's LifeCycle events by implementing the following methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"@Override\npublic void onHostResume() {\n    // Activity `onResume`\n}\n\n@Override\npublic void onHostPause() {\n    // Activity `onPause`\n}\n\n@Override\npublic void onHostDestroy() {\n    // Activity `onDestroy`\n}\n")))}p.isMDXComponent=!0}}]);