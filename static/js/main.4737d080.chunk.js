(this.webpackJsonpreact_animal_crossing=this.webpackJsonpreact_animal_crossing||[]).push([[0],{17:function(e,a,t){e.exports=t(30)},27:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),i=t.n(c),s=t(5),l=t(1),o=t(16),u=t(15),h=(t(27),t(28),t(3)),d=t(4),m=t(7),g=t(6),E=function(e){var a=e.name,t=e.image_uri,n=e.species;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"vv_img",src:t}),r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement("p",null,n)))},p=function(e){var a=e.data.sort((function(){return.5-Math.random()}));return r.a.createElement("div",null,a.slice(0,18).map((function(e){return r.a.createElement(E,{key:e.id,species:e.species,name:e.name["name-USen"],image_uri:e.image_uri})})))},f=function(e){var a=e.searchChange;e.searchField;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Characters!",onChange:a}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"700px"}},e.children)},b=(t(29),function(e){Object(m.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(d.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops. This is not good."):this.props.children}}]),t}(n.Component)),_=function(e){Object(m.a)(t,e);var a=Object(g.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestAPI()}},{key:"render",value:function(){var e=this.props,a=e.searchField,t=e.onSearchChange,n=e.data,c=e.isPending,i=n.filter((function(e){return e.name["name-USen"].toLowerCase().includes(a.toLowerCase())}));return c?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Animal Crossing Villagers"),r.a.createElement("h2",{className:"f2"},"Loading...")):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Animal Crossing Villagers"),r.a.createElement(f,{searchChange:t,searchField:a}),r.a.createElement(v,null,r.a.createElement(b,null,r.a.createElement(p,{data:i}))))}}]),t}(n.Component),y=Object(s.b)((function(e){return{searchField:e.searchVillagers.searchField,data:e.requestVillagers.data,isPending:e.requestVillagers.isPending,error:e.requestVillagers.error}}),(function(e){return{onSearchChange:function(a){return e({type:"CHANGE_SEARCH_FIELD",payload:a.target.value})},onRequestAPI:function(){return e((function(e){e({type:"REQUEST_API_PENDING"}),fetch("http://acnhapi.com/v1/villagers").then((function(e){return e.json()})).then((function(a){return e({type:"REQUEST_API_SUCCESS",payload:Object.values(a)})})).catch((function(a){return e({type:"REQUEST_API_FAILED",payload:a})}))}))}}}))(_),C={searchField:""},S={isPending:!1,data:[],error:""};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=Object(o.a)(),O=Object(l.c)({searchVillagers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:a.payload});default:return e}},requestVillagers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"REQUEST_API_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_API_SUCCESS":return Object.assign({},e,{data:a.payload,isPending:!1});case"REQUEST_API_FAILED":return Object.assign({},e,{error:a.payload,isPending:!1});default:return e}}}),P=Object(l.d)(O,Object(l.a)(u.a,j));i.a.render(r.a.createElement(s.a,{store:P},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.4737d080.chunk.js.map