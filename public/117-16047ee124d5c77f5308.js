(self.webpackChunkliveby_life_technologies=self.webpackChunkliveby_life_technologies||[]).push([[117],{7117:function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),i=t(7294),a=l(i),r=l(t(5697));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function u(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}var d=function(e){function o(){var e,t,n;s(this,o);for(var i=arguments.length,a=Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=n=u(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),n.state={fbLoaded:!1,shouldShowDialog:void 0},u(n,t)}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,e),n(o,[{key:"componentDidMount",value:function(){this.setFbAsyncInit(),this.reloadSDKAsynchronously()}},{key:"componentDidUpdate",value:function(e){e.pageId===this.props.pageId&&e.appId===this.props.appId&&e.shouldShowDialog===this.props.shouldShowDialog&&e.htmlRef===this.props.htmlRef&&e.minimized===this.props.minimized&&e.themeColor===this.props.themeColor&&e.loggedInGreeting===this.props.loggedInGreeting&&e.loggedOutGreeting===this.props.loggedOutGreeting&&e.greetingDialogDisplay===this.props.greetingDialogDisplay&&e.greetingDialogDelay===this.props.greetingDialogDelay&&e.autoLogAppEvents===this.props.autoLogAppEvents&&e.xfbml===this.props.xfbml&&e.version===this.props.version&&e.language===this.props.language||(this.setFbAsyncInit(),this.reloadSDKAsynchronously())}},{key:"componentWillUnmount",value:function(){void 0!==window.FB&&window.FB.CustomerChat.hide()}},{key:"setFbAsyncInit",value:function(){var e=this,o=this.props,t=o.appId,n=o.autoLogAppEvents,i=o.xfbml,a=o.version;window.fbAsyncInit=function(){window.FB.init({appId:t,autoLogAppEvents:n,xfbml:i,version:"v"+a}),e.setState({fbLoaded:!0})}}},{key:"loadSDKAsynchronously",value:function(){var e,o,t,n,i;this.props.language;e=document,o="script",t="facebook-jssdk",i=e.getElementsByTagName(o)[0],e.getElementById(t)||((n=e.createElement(o)).id=t,n.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",i.parentNode.insertBefore(n,i))}},{key:"removeFacebookSDK",value:function(){["facebook-jssdk","fb-root"].forEach((function(e){var o=document.getElementById(e);o&&o.parentNode&&o.parentNode.removeChild(o)})),delete window.FB}},{key:"reloadSDKAsynchronously",value:function(){this.removeFacebookSDK(),this.loadSDKAsynchronously()}},{key:"controlPlugin",value:function(){this.props.shouldShowDialog?window.FB.CustomerChat.showDialog():window.FB.CustomerChat.hideDialog()}},{key:"subscribeEvents",value:function(){var e=this.props,o=e.onCustomerChatDialogShow,t=e.onCustomerChatDialogHide;o&&window.FB.Event.subscribe("customerchat.dialogShow",o),t&&window.FB.Event.subscribe("customerchat.dialogHide",t)}},{key:"createMarkup",value:function(){var e=this.props,o=e.pageId,t=e.htmlRef,n=e.minimized,i=e.themeColor,a=e.loggedInGreeting,r=e.loggedOutGreeting,l=e.greetingDialogDisplay,s=e.greetingDialogDelay;return{__html:'<div\n        class="fb-customerchat"\n        page_id="'+o+'"\n        '+(void 0!==t?'ref="'+t+'"':"")+"\n        "+(void 0!==n?'minimized="'+n+'"':"")+"\n        "+(void 0!==i?'theme_color="'+i+'"':"")+"\n        "+(void 0!==a?'logged_in_greeting="'+a+'"':"")+"\n        "+(void 0!==r?'logged_out_greeting="'+r+'"':"")+"\n        "+(void 0!==l?'greeting_dialog_display="'+l+'"':"")+"\n        "+(void 0!==s?'greeting_dialog_delay="'+s+'"':"")+"\n      ></div>"}}},{key:"render",value:function(){var e=this,o=this.state,t=o.fbLoaded,n=o.shouldShowDialog;return t&&n!==this.props.shouldShowDialog&&(document.addEventListener("DOMNodeInserted",(function(o){var t=o.target;t.className&&"string"==typeof t.className&&t.className.includes("fb_dialog")&&e.controlPlugin()}),!1),this.subscribeEvents()),a.default.createElement("div",{key:Date(),dangerouslySetInnerHTML:this.createMarkup()})}}]),o}(i.Component);d.propTypes={pageId:r.default.string.isRequired,appId:r.default.string.isRequired,shouldShowDialog:r.default.bool,htmlRef:r.default.string,minimized:r.default.bool,themeColor:r.default.string,loggedInGreeting:r.default.string,loggedOutGreeting:r.default.string,greetingDialogDisplay:r.default.oneOf(["show","hide","fade"]),greetingDialogDelay:r.default.number,autoLogAppEvents:r.default.bool,xfbml:r.default.bool,version:r.default.string,language:r.default.string,onCustomerChatDialogShow:r.default.func,onCustomerChatDialogHide:r.default.func},d.defaultProps={shouldShowDialog:!1,htmlRef:void 0,minimized:void 0,themeColor:void 0,loggedInGreeting:void 0,loggedOutGreeting:void 0,greetingDialogDisplay:void 0,greetingDialogDelay:void 0,autoLogAppEvents:!0,xfbml:!0,version:"2.11",language:"en_US",onCustomerChatDialogShow:void 0,onCustomerChatDialogHide:void 0},o.default=d}}]);
//# sourceMappingURL=117-16047ee124d5c77f5308.js.map