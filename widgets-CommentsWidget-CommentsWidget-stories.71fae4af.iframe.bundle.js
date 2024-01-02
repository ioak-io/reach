/*! For license information please see widgets-CommentsWidget-CommentsWidget-stories.71fae4af.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreach=self.webpackChunkreach||[]).push([[640],{"./src/widgets/CommentsWidget/CommentsWidget.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CommentsWidget_stories});var react=__webpack_require__("./node_modules/react/index.js"),UserType=__webpack_require__("./src/types/UserType.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CommentView=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/widgets/CommentsWidget/CommentView.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CommentView.Z,options);CommentView.Z&&CommentView.Z.locals&&CommentView.Z.locals;var Avatar=__webpack_require__("./src/components/Avatar/index.tsx"),MetadataView=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/widgets/CommentsWidget/MetadataView.css"),MetadataView_options={};MetadataView_options.styleTagTransform=styleTagTransform_default(),MetadataView_options.setAttributes=setAttributesWithoutAttributes_default(),MetadataView_options.insert=insertBySelector_default().bind(null,"head"),MetadataView_options.domAPI=styleDomAPI_default(),MetadataView_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(MetadataView.Z,MetadataView_options);MetadataView.Z&&MetadataView.Z.locals&&MetadataView.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MetadataView_MetadataView=props=>{const[user,setUser]=(0,react.useState)();return(0,react.useEffect)((()=>{setUser((0,UserType.PR)(props.comment?.createdBy,props.userMap))}),[props.userMap,props.comment]),(0,jsx_runtime.jsxs)("div",{className:"reach-comments-widget-metadata",children:[(0,jsx_runtime.jsx)("div",{className:"reach-comments-widget-metadata__left",children:(0,jsx_runtime.jsx)(Avatar.Z,{user})}),(0,jsx_runtime.jsxs)("div",{className:"reach-comments-widget-metadata__right small",children:[(0,jsx_runtime.jsxs)("div",{className:"reach-comments-widget-metadata__right__top",children:[user?.firstName," ",user?.lastName]}),(0,jsx_runtime.jsx)("div",{className:"reach-comments-widget-metadata__right__bottom",children:(0,jsx_runtime.jsx)("div",{className:"reach-comments-widget-metadata__right__bottom__created-on",children:"Nov 29, 2022"})})]})]})};MetadataView_MetadataView.displayName="MetadataView";const widgets_CommentsWidget_MetadataView=MetadataView_MetadataView;try{MetadataView_MetadataView.displayName="MetadataView",MetadataView_MetadataView.__docgenInfo={description:"",displayName:"MetadataView",props:{comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"Comment"}},userMap:{defaultValue:null,description:"",name:"userMap",required:!0,type:{name:"UserMap"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/CommentsWidget/MetadataView.tsx#MetadataView"]={docgenInfo:MetadataView_MetadataView.__docgenInfo,name:"MetadataView",path:"src/widgets/CommentsWidget/MetadataView.tsx#MetadataView"})}catch(__react_docgen_typescript_loader_error){}const CommentView_CommentView=props=>(0,jsx_runtime.jsxs)("div",{className:"reach-comments-widget-view",children:[(0,jsx_runtime.jsx)(widgets_CommentsWidget_MetadataView,{comment:props.comment,userMap:props.userMap}),(0,jsx_runtime.jsx)("div",{className:"reach-comments-widget-view__description",dangerouslySetInnerHTML:{__html:props.comment.description}})]});CommentView_CommentView.displayName="CommentView";const widgets_CommentsWidget_CommentView=CommentView_CommentView;try{CommentView_CommentView.displayName="CommentView",CommentView_CommentView.__docgenInfo={description:"",displayName:"CommentView",props:{comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"Comment"}},userMap:{defaultValue:null,description:"",name:"userMap",required:!0,type:{name:"UserMap"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/CommentsWidget/CommentView.tsx#CommentView"]={docgenInfo:CommentView_CommentView.__docgenInfo,name:"CommentView",path:"src/widgets/CommentsWidget/CommentView.tsx#CommentView"})}catch(__react_docgen_typescript_loader_error){}var style=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/widgets/CommentsWidget/style.css"),style_options={};style_options.styleTagTransform=styleTagTransform_default(),style_options.setAttributes=setAttributesWithoutAttributes_default(),style_options.insert=insertBySelector_default().bind(null,"head"),style_options.domAPI=styleDomAPI_default(),style_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style.Z,style_options);style.Z&&style.Z.locals&&style.Z.locals;const CommentsWidget=props=>{const[userMap,setUserMap]=(0,react.useState)({});return(0,react.useEffect)((()=>{setUserMap((0,UserType.wY)(props.users))}),[props.users]),(0,jsx_runtime.jsx)("div",{className:"reach-comments-widget "+(props.outline?"reach-comments-widget--outline":""),children:(0,jsx_runtime.jsx)("div",{className:"reach-comments-widget__main",children:props.comments.map((comment=>(0,jsx_runtime.jsx)(widgets_CommentsWidget_CommentView,{comment,userMap},comment.id)))})})};CommentsWidget.displayName="CommentsWidget";const widgets_CommentsWidget=CommentsWidget;try{CommentsWidget.displayName="CommentsWidget",CommentsWidget.__docgenInfo={description:"",displayName:"CommentsWidget",props:{comments:{defaultValue:null,description:"",name:"comments",required:!0,type:{name:"Comment[]"}},users:{defaultValue:null,description:"",name:"users",required:!0,type:{name:"User[]"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/CommentsWidget/index.tsx#CommentsWidget"]={docgenInfo:CommentsWidget.__docgenInfo,name:"CommentsWidget",path:"src/widgets/CommentsWidget/index.tsx#CommentsWidget"})}catch(__react_docgen_typescript_loader_error){}var UserData=__webpack_require__("./src/components/Blog/UserData.ts");const CommentsWidget_stories={title:"Components/widgets/CommentsWidget",component:widgets_CommentsWidget,argTypes:{comments:[]}},Template=args=>(0,jsx_runtime.jsx)(widgets_CommentsWidget,{...args});Template.displayName="Template";const Demo=Template.bind({});Demo.args={comments:[{id:"1",helpful:1,notHelpful:0,description:"cubilia gravida duis pulvinar facilisis taciti vestibulum nostra posuere erat phasellus nec vestibulum",createdBy:"1",updatedBy:"1"},{id:"2",helpful:1,notHelpful:0,description:"pharetra nascetur vivamus proin aenean erat laoreet venenatis conubia urna quam ultricies praesent",createdBy:"2",updatedBy:"2"},{id:"3",helpful:1,notHelpful:0,description:"neque nulla nascetur quisque magna egestas purus pretium aenean faucibus hac montes penatibus. purus porttitor auctor vestibulum cursus vitae elitsuspendisse nam semper. laoreet orci nascetur aptent musvestibulum tempus cubilia quisque pharetra vivamus interdum",createdBy:"3",updatedBy:"3"},{id:"4",helpful:1,notHelpful:0,description:"ridiculus imperdiet turpis malesuada egestas aptent nostra sodales quis scelerisque. eget maximus primis feugiat nec curae ac. vestibulum consectetur donec nisi molestie convallis odio dictumst. curae purus massa ullamcorper ut accumsan varius ornare quam lacinia sociosqu molestie montes tincidunt. malesuada quisque donec dignissim parturient lacus aptent nascetur cras dui curae eleifend. maecenas praesent interdum neque tortor sagittis ultrices tincidunt praesent fermentum viverra diam risus. adipiscing nulla taciti eu sociosqu per dictum inceptos taciti eget. ante metus dis scelerisque egestas nascetur ipsum justo sodales metus rutrum justo. placerat erat pretium erat tellus habitasse nulla inceptos etiam ridiculus pharetra",createdBy:"4",updatedBy:"1"},{id:"4",helpful:1,notHelpful:0,description:"montes viverra lacinia ac ipsum musvestibulum rutrum. a posuere est nam lorem integer maximus in. dolor ultrices etiam nunc mi magna molestie nunc class eu sollicitudin vitae phasellus. erat pretium rutrum curae fusce ultricies magnis",createdBy:"1",updatedBy:"1"}],users:UserData.r},Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"(args: CommentsWidgetProps) => <CommentsWidget {...args} />",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]},"./src/components/Avatar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Avatar});var react=__webpack_require__("./node_modules/react/index.js"),UserType=__webpack_require__("./src/types/UserType.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),style=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Avatar/style.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style.Z,options);style.Z&&style.Z.locals&&style.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar=props=>{const[avatarUrl,setAvatarUrl]=(0,react.useState)("");return(0,react.useEffect)((()=>{setAvatarUrl((0,UserType.E$)(props.user))}),[props.user]),(0,jsx_runtime.jsx)("div",{className:`reach-avatar reach-avatar--size-${props.size||"regular"}`,children:(0,jsx_runtime.jsx)("img",{src:avatarUrl})})};Avatar.displayName="Avatar";const components_Avatar=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'},{value:'"xlarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/index.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Blog/UserData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>users});const users=[{id:"1",firstName:"Gene",lastName:"Tierney",avatarUrl:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",aboutDetail:"vel curae cursus eleifend urna dignissim justo dapibus. facilisis venenatis ultrices amet porttitor augue maecenas integer cursus. nunc hendrerit euismod pulvinar quisque orci cursus augue orci class id curae"},{id:"2",firstName:"Billy",lastName:"Wilder",avatarUrl:"https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},{id:"3",firstName:"Katherina",lastName:"Hepburn",avatarUrl:"https://images.unsplash.com/photo-1583590147132-a02c754a8eb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80"},{id:"4",firstName:"Audrey",lastName:"Hepburn",avatarUrl:"https://images.unsplash.com/photo-1648062448005-01808be4b581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}]},"./src/types/UserType.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E$:()=>getAvatarUrl,PR:()=>getUser,hC:()=>getAboutHeading,wY:()=>toUserMap,xD:()=>getAboutDetail});const toUserMap=users=>{const _userMap={};return users?.forEach((item=>{_userMap[item.id]=item})),_userMap},anonymousAvatarUrl="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",anonymousUser={id:"anonymous",firstName:"Anonymous",lastName:"",avatarUrl:anonymousAvatarUrl},getAvatarUrl=(user,userMap)=>!user?.avatarUrl&&userMap&&userMap.anonymous?userMap.anonymous.avatarUrl||anonymousAvatarUrl:user?.avatarUrl?user.avatarUrl:anonymousAvatarUrl,getAboutHeading=user=>user?user.aboutHeading||`${user.firstName} ${user.lastName}`:anonymousUser.firstName,getAboutDetail=user=>user?user.aboutDetail:"",getUser=(id,userMap)=>id&&userMap&&userMap[id]?userMap[id]:anonymousUser},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Avatar/style.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".reach-avatar img {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    object-fit: cover;\n    display: flex;\n    align-items: center;\n}\n\n.reach-avatar--size-large img {\n    width: 50px;\n    height: 50px;\n}\n\n.reach-avatar--size-xlarge img {\n    width: 150px;\n    height: 150px;\n}\n","",{version:3,sources:["webpack://./src/components/Avatar/style.css"],names:[],mappings:"AAAA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB",sourcesContent:[".reach-avatar img {\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.reach-avatar--size-large img {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.reach-avatar--size-xlarge img {\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/widgets/CommentsWidget/CommentView.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".reach-comments-widget-view__meta {\n    display: flex;\n    flex-direction: row;\n    /* flex-wrap: wrap; */\n}\n\n.reach-comments-widget-view__meta__left {\n    height: 36px;\n    width: 36px;\n    border-radius: 36px;\n    margin-right: 12px;\n}\n\n.reach-comments-widget-view__meta__right__bottom {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.reach-comments-widget-view__description {\n    padding-left: 48px;\n    margin-top: 8px;\n}","",{version:3,sources:["webpack://./src/widgets/CommentsWidget/CommentView.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB",sourcesContent:[".reach-comments-widget-view__meta {\r\n    display: flex;\r\n    flex-direction: row;\r\n    /* flex-wrap: wrap; */\r\n}\r\n\r\n.reach-comments-widget-view__meta__left {\r\n    height: 36px;\r\n    width: 36px;\r\n    border-radius: 36px;\r\n    margin-right: 12px;\r\n}\r\n\r\n.reach-comments-widget-view__meta__right__bottom {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n}\r\n\r\n.reach-comments-widget-view__description {\r\n    padding-left: 48px;\r\n    margin-top: 8px;\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/widgets/CommentsWidget/MetadataView.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".reach-comments-widget-metadata {\n    display: flex;\n    flex-direction: row;\n    /* flex-wrap: wrap; */\n}\n\n.reach-comments-widget-metadata__left {\n    margin-right: 12px;\n}\n\n.reach-comments-widget-metadata__right__bottom {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.reach-article-view-widget-comment-view__description {\n    padding-left: 48px;\n    /* padding-top: 40px; */\n}","",{version:3,sources:["webpack://./src/widgets/CommentsWidget/MetadataView.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;AAC3B",sourcesContent:[".reach-comments-widget-metadata {\r\n    display: flex;\r\n    flex-direction: row;\r\n    /* flex-wrap: wrap; */\r\n}\r\n\r\n.reach-comments-widget-metadata__left {\r\n    margin-right: 12px;\r\n}\r\n\r\n.reach-comments-widget-metadata__right__bottom {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n}\r\n\r\n.reach-article-view-widget-comment-view__description {\r\n    padding-left: 48px;\r\n    /* padding-top: 40px; */\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/widgets/CommentsWidget/style.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".reach-comments-widget__main {\n    display: grid;\n    row-gap: 24px;\n}","",{version:3,sources:["webpack://./src/widgets/CommentsWidget/style.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,aAAa;AACjB",sourcesContent:[".reach-comments-widget__main {\r\n    display: grid;\r\n    row-gap: 24px;\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);