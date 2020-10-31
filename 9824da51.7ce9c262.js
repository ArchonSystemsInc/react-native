(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return g}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,g=c["".concat(i,".").concat(u)]||c[u]||b[u]||r;return a?o.a.createElement(g,l(l({ref:t},p),{},{components:a})):o.a.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},648:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(7),r=(a(0),a(1006)),i={id:"signed-apk-android",title:"Publishing to Google Play Store"},l={unversionedId:"signed-apk-android",id:"signed-apk-android",isDocsHomePage:!1,title:"Publishing to Google Play Store",description:"Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via Google Play store it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to App Signing by Google Play functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The Signing Your Applications page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle.",source:"@site/../docs/signed-apk-android.md",slug:"/signed-apk-android",permalink:"/docs/next/signed-apk-android",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/signed-apk-android.md",version:"current",lastUpdatedAt:1603945169,sidebar:"docs",previous:{title:"Headless JS",permalink:"/docs/next/headless-js-android"},next:{title:"Removing Default Permissions",permalink:"/docs/next/removing-default-permissions"}},s=[{value:"Generating an upload key",id:"generating-an-upload-key",children:[]},{value:"Setting up Gradle variables",id:"setting-up-gradle-variables",children:[]},{value:"Adding signing config to your app&#39;s Gradle config",id:"adding-signing-config-to-your-apps-gradle-config",children:[]},{value:"Generating the release AAB",id:"generating-the-release-aab",children:[]},{value:"Testing the release build of your app",id:"testing-the-release-build-of-your-app",children:[]},{value:"Publishing to other stores",id:"publishing-to-other-stores",children:[]},{value:"Enabling Proguard to reduce the size of the APK (optional)",id:"enabling-proguard-to-reduce-the-size-of-the-apk-optional",children:[]},{value:"Migrating old Android React Native apps to use App Signing by Google Play",id:"migrating-old-android-react-native-apps-to-use-app-signing-by-google-play",children:[]}],p={rightToc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://play.google.com/store"}),"Google Play store")," it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/studio/publish/app-signing#app-signing-google-play"}),"App Signing by Google Play")," functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/tools/publishing/app-signing.html"}),"Signing Your Applications")," page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle."),Object(r.b)("h2",{id:"generating-an-upload-key"},"Generating an upload key"),Object(r.b)("p",null,"You can generate a private signing key using ",Object(r.b)("inlineCode",{parentName:"p"},"keytool"),". On Windows ",Object(r.b)("inlineCode",{parentName:"p"},"keytool")," must be run from ",Object(r.b)("inlineCode",{parentName:"p"},"C:\\Program Files\\Java\\jdkx.x.x_x\\bin"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n")),Object(r.b)("p",null,"This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key. It then generates the keystore as a file called ",Object(r.b)("inlineCode",{parentName:"p"},"my-upload-key.keystore"),"."),Object(r.b)("p",null,"The keystore contains a single key, valid for 10000 days. The alias is a name that you will use later when signing your app, so remember to take note of the alias."),Object(r.b)("p",null,"On Mac, if you're not sure where your JDK bin folder is, then perform the following command to find it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"/usr/libexec/java_home\n")),Object(r.b)("p",null,"It will output the directory of the JDK, which will look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home\n")),Object(r.b)("p",null,"Navigate to that directory by using the command ",Object(r.b)("inlineCode",{parentName:"p"},"cd /your/jdk/path")," and use the keytool command with sudo permission as shown below."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Remember to keep the keystore file private. In case you've lost upload key or it's been compromised you should ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.google.com/googleplay/android-developer/answer/7384423#reset"}),"follow these instructions"),".")),Object(r.b)("h2",{id:"setting-up-gradle-variables"},"Setting up Gradle variables"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Place the ",Object(r.b)("inlineCode",{parentName:"li"},"my-upload-key.keystore")," file under the ",Object(r.b)("inlineCode",{parentName:"li"},"android/app")," directory in your project folder."),Object(r.b)("li",{parentName:"ol"},"Edit the file ",Object(r.b)("inlineCode",{parentName:"li"},"~/.gradle/gradle.properties")," or ",Object(r.b)("inlineCode",{parentName:"li"},"android/gradle.properties"),", and add the following (replace ",Object(r.b)("inlineCode",{parentName:"li"},"*****")," with the correct keystore password, alias and key password),")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore\nMYAPP_UPLOAD_KEY_ALIAS=my-key-alias\nMYAPP_UPLOAD_STORE_PASSWORD=*****\nMYAPP_UPLOAD_KEY_PASSWORD=*****\n")),Object(r.b)("p",null,"These are going to be global Gradle variables, which we can later use in our Gradle config to sign our app."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note about security: If you are not keen on storing your passwords in plaintext, and you are running macOS, you can also ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/"}),"store your credentials in the Keychain Access app"),". Then you can skip the two last rows in ",Object(r.b)("inlineCode",{parentName:"p"},"~/.gradle/gradle.properties"),".")),Object(r.b)("h2",{id:"adding-signing-config-to-your-apps-gradle-config"},"Adding signing config to your app's Gradle config"),Object(r.b)("p",null,"The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit the file ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," in your project folder, and add the signing config,"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gradle"}),"...\nandroid {\n    ...\n    defaultConfig { ... }\n    signingConfigs {\n        release {\n            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {\n                storeFile file(MYAPP_UPLOAD_STORE_FILE)\n                storePassword MYAPP_UPLOAD_STORE_PASSWORD\n                keyAlias MYAPP_UPLOAD_KEY_ALIAS\n                keyPassword MYAPP_UPLOAD_KEY_PASSWORD\n            }\n        }\n    }\n    buildTypes {\n        release {\n            ...\n            signingConfig signingConfigs.release\n        }\n    }\n}\n...\n")),Object(r.b)("h2",{id:"generating-the-release-aab"},"Generating the release AAB"),Object(r.b)("p",null,"Run the following in a terminal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cd android\n./gradlew bundleRelease\n")),Object(r.b)("p",null,"Gradle's ",Object(r.b)("inlineCode",{parentName:"p"},"bundleRelease")," will bundle all the JavaScript needed to run your app into the AAB (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/guide/app-bundle"}),"Android App Bundle"),"). If you need to change the way the JavaScript bundle and/or drawable resources are bundled (e.g. if you changed the default file/folder names or the general structure of the project), have a look at ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," to see how you can update it to reflect these changes."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Make sure ",Object(r.b)("inlineCode",{parentName:"p"},"gradle.properties")," does not include ",Object(r.b)("inlineCode",{parentName:"p"},"org.gradle.configureondemand=true")," as that will make the release build skip bundling JS and assets into the app binary.")),Object(r.b)("p",null,"The generated AAB can be found under ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build/outputs/bundle/release/app.aab"),", and is ready to be uploaded to Google Play."),Object(r.b)("p",null,"In order for Google Play to accept AAB format the App Signing by Google Play needs to be configured for your application on the Google Play Console. If you are updating an existing app that doesn't use App Signing by Google Play, please check our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#migrating-old-android-react-native-apps-to-use-app-signing-by-google-play"}),"migration section")," to learn how to perform that configuration change."),Object(r.b)("h2",{id:"testing-the-release-build-of-your-app"},"Testing the release build of your app"),Object(r.b)("p",null,"Before uploading the release build to the Play Store, make sure you test it thoroughly. First uninstall any previous version of the app you already have installed. Install it on the device using the following command in the project root:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx react-native run-android --variant=release\n")),Object(r.b)("p",null,"Note that ",Object(r.b)("inlineCode",{parentName:"p"},"--variant release")," is only available if you've set up signing as described above."),Object(r.b)("p",null,"You can terminate any running bundler instances, since all your framework and JavaScript code is bundled in the APK's assets."),Object(r.b)("h2",{id:"publishing-to-other-stores"},"Publishing to other stores"),Object(r.b)("p",null,"By default, the generated APK has the native code for both x86 and ARMv7a CPU architectures. This makes it easier to share APKs that run on almost all Android devices. However, this has the downside that there will be some unused native code on any device, leading to unnecessarily bigger APKs."),Object(r.b)("p",null,"You can create an APK for each CPU by changing the following line in android/app/build.gradle:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),'- ndk {\n-   abiFilters "armeabi-v7a", "x86"\n- }\n- def enableSeparateBuildPerCPUArchitecture = false\n+ def enableSeparateBuildPerCPUArchitecture = true\n')),Object(r.b)("p",null,"Upload both these files to markets which support device targeting, such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/google/play/publishing/multiple-apks.html"}),"Google Play")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.amazon.com/docs/app-submission/device-filtering-and-compatibility.html"}),"Amazon AppStore"),", and the users will automatically get the appropriate APK. If you want to upload to other markets, such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apkfiles.com/"}),"APKFiles"),", which do not support multiple APKs for a single app, change the following line as well to create the default universal APK with binaries for both CPUs."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"- universalApk false  // If true, also generate a universal APK\n+ universalApk true  // If true, also generate a universal APK\n")),Object(r.b)("h2",{id:"enabling-proguard-to-reduce-the-size-of-the-apk-optional"},"Enabling Proguard to reduce the size of the APK (optional)"),Object(r.b)("p",null,"Proguard is a tool that can slightly reduce the size of the APK. It does this by stripping parts of the React Native Java bytecode (and its dependencies) that your app is not using."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"IMPORTANT"),": Make sure to thoroughly test your app if you've enabled Proguard. Proguard often requires configuration specific to each native library you're using. See ",Object(r.b)("inlineCode",{parentName:"p"},"app/proguard-rules.pro"),".")),Object(r.b)("p",null,"To enable Proguard, edit ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-gradle"}),"/**\n * Run Proguard to shrink the Java bytecode in release builds.\n */\ndef enableProguardInReleaseBuilds = true\n")),Object(r.b)("h2",{id:"migrating-old-android-react-native-apps-to-use-app-signing-by-google-play"},"Migrating old Android React Native apps to use App Signing by Google Play"),Object(r.b)("p",null,"If you are migrating from previous version of React Native chances are your app does not use App Signing by Google Play feature. We recommend you enable that in order to take advantage from things like automatic app splitting. In order to migrate from the old way of signing you need to start by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#generating-an-upload-key"}),"generating new upload key")," and then replacing release signing config in ",Object(r.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," to use the upload key instead of the release one (see section about ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#adding-signing-config-to-your-app-s-gradle-config"}),"adding signing config to gradle"),"). Once that's done you should follow the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.google.com/googleplay/android-developer/answer/7384423"}),"instructions from Google Play Help website")," in order to send your original release key to Google Play."))}d.isMDXComponent=!0}}]);