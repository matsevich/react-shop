(this.webpackJsonpshopping=this.webpackJsonpshopping||[]).push([[0],{205:function(e,t,a){e.exports=a(387)},215:function(e,t,a){},387:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setArticle",(function(){return E}));var r={};a.r(r),a.d(r,"addToCart",(function(){return T})),a.d(r,"removeFromCart",(function(){return A}));var c={};a.r(c),a.d(c,"setFilter",(function(){return N})),a.d(c,"setSearchQuery",(function(){return z}));var i=a(0),l=a.n(i),o=a(22),s=a.n(o),u=a(26),m=(a(214),a(215),a(17)),d=a(18),E=function(e){return{type:"SET_ARTICLE",payload:e}},p=a(34),f=a(35),b=a(36),v=a(37),h=a(38),C=a(396),y=a(400),g=a(405),O=a(402),j=a(397),k=a(194),w=a(409),R=a(175),I=a.n(R),T=function(e){return{type:"ADD_TO_CART",payload:e}},A=function(e){return{type:"REMOVE_FROM_CART",payload:e}},S=a(407),_=a(398),L=a(408),P=a(30),x=a(388),F=function(e){var t=e.title,a=e.section,n=e.description,r=e.price,c=e.rating,i=e.image,o=e.image2,s=e.image3,u=e.addToCart,m=e.addedCount;return l.a.createElement(y.a,null,l.a.createElement("div",{className:"card-image"},l.a.createElement(S.a,{animated:"slow rotate"},l.a.createElement(S.a.Content,{visible:!0},l.a.createElement(k.a,{src:i})),l.a.createElement(S.a.Content,{hidden:!0},l.a.createElement(k.a,{src:o}),l.a.createElement(k.a,{src:s,className:"third-card-avatar",bordered:!0,avatar:!0,size:"medium"}),l.a.createElement(k.a,{src:s,className:"third-card-img",size:"large"})))),l.a.createElement(y.a.Content,null,l.a.createElement(y.a.Header,null,t),l.a.createElement(y.a.Meta,null,l.a.createElement("span",{className:"date"},a)),l.a.createElement(y.a.Description,null,n),l.a.createElement("br",null),l.a.createElement(y.a.Description,null,l.a.createElement(_.a,{trigger:l.a.createElement(L.a,{icon:"star",disabled:!0,defaultRating:c,maxRating:5})},l.a.createElement("span",{className:"span-text"}," \u041f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u0443\u0432\u0430\u043b\u043e ",Math.floor(1350*Math.random())+450," \u043b\u044e\u0434\u0435\u0439 \u0437\u0430 \u0446\u0435\u0439 \u0442\u043e\u0432\u0430\u0440 \u043d\u0430 \u0441\u0430\u0439\u0442\u0456 https://www.kikocosmetics.com")))),l.a.createElement(y.a.Content,{extra:!0},l.a.createElement("a",{href:"#logo"},l.a.createElement(P.a,{name:"grn"}),"\u20b4 \xa0 ",r)),l.a.createElement(x.a,{onClick:u.bind(void 0,e),animated:"vertical"},l.a.createElement(x.a.Content,{hidden:!0},"\u041a\u0443\u043f\u0438\u0442\u0438 ",m>0&&"(".concat(m,")")),l.a.createElement(x.a.Content,{visible:!0},l.a.createElement(P.a.Group,{size:"large"},l.a.createElement(P.a,{name:"shop"}),l.a.createElement(P.a,{corner:!0,name:"addedCount"})),m>0&&"(".concat(m,")"))))},M=Object(u.b)((function(e,t){var a=e.cart,n=t.id;return{addedCount:a.items.reduce((function(e,t){return e+(t.id===n?1:0)}),0)}}),(function(e){return Object(m.a)({},Object(d.b)(r,e))}))(F),N=function(e){return{type:"SET_FILTER",payload:e}},z=function(e){return{type:"SET_QUERY",payload:e}},B=a(404),U=a(395),D=function(e){var t=e.setFilter,a=e.filterBy,n=e.searchQuery,r=e.setSearchQuery;return l.a.createElement(B.a,{fixed:"left",secondary:!0},l.a.createElement(B.a.Menu,{position:"left"},l.a.createElement(B.a.Item,null,l.a.createElement(U.a,{icon:"sistrix",onChange:function(e){return r(e.target.value)},value:n,tabIndex:!0,placeholder:"Search..."}))),l.a.createElement(B.a.Item,{active:"all"===a,onClick:t.bind(void 0,"all")},"\u0423\u0441\u0456"),l.a.createElement(B.a.Item,{active:"higherPrice"===a,onClick:t.bind(void 0,"higherPrice")},"\u0412\u0456\u0434 \u0434\u043e\u0440\u043e\u0436\u0447\u0438\u0445"),l.a.createElement(B.a.Item,{active:"lowerPrice"===a,onClick:t.bind(void 0,"lowerPrice")},"\u0412\u0456\u0434 \u0434\u0435\u0448\u0435\u0432\u0448\u0438\u0445"),l.a.createElement(B.a.Item,{active:"Care"===a,onClick:t.bind(void 0,"Care")},"\u0414\u043e\u0433\u043b\u044f\u0434"),l.a.createElement(B.a.Item,{active:"Face"===a,onClick:t.bind(void 0,"Face")},"\u041e\u0431\u043b\u0438\u0447\u0447\u044f"),l.a.createElement(B.a.Item,{active:"Eyes"===a,onClick:t.bind(void 0,"Eyes")},"\u041e\u0447\u0456"),l.a.createElement(B.a.Item,{active:"Eyebrows"===a,onClick:t.bind(void 0,"Eyebrows")},"\u0411\u0440\u043e\u0432\u0438"),l.a.createElement(B.a.Item,{active:"Lips"===a,onClick:t.bind(void 0,"Lips")},"\u0413\u0443\u0431\u0438"),l.a.createElement(B.a.Item,{active:"Accessories"===a,onClick:t.bind(void 0,"Accessories")},"\u0410\u043a\u0441\u0435\u0441\u0443\u0430\u0440\u0438"))},Q=Object(u.b)((function(e){e.article;return{filterBy:e.filter.filterBy}}),(function(e){return Object(m.a)({},Object(d.b)(c,e))}))(D),G=a(399),Y=function(e){var t=e.title,a=e.id,n=e.image,r=e.price,c=e.removeFromCart,i=e.addedCount;return l.a.createElement(G.a,{selection:!0,divided:!0,verticalAlign:"middle"},l.a.createElement(G.a.Item,null,l.a.createElement(G.a.Content,{floated:"right"},l.a.createElement(x.a,{onClick:c.bind(void 0,a),color:"white"},l.a.createElement(x.a.Content,{visible:!0},l.a.createElement(P.a.Group,{size:"medium"},l.a.createElement(P.a,{name:"trash alternate"}),l.a.createElement(P.a,{corner:!0,name:"addedCount"}))))),l.a.createElement(k.a,{circular:!0,src:n,size:"mini"}),l.a.createElement(G.a.Content,null,t),l.a.createElement(G.a.Content,null,l.a.createElement("i",null,"\u20b4 \xa0",r,"\xa0 ","x"+i>0&&"(".concat(i,")")))))},J=function(e){var t=e.totalPrice,a=e.count,n=e.items;return l.a.createElement(B.a,{fixed:"top"},l.a.createElement(B.a.Item,{name:"browse",centred:!0,id:"logo"},"TRUCCO.UA"),l.a.createElement(B.a.Menu,{position:"right"},l.a.createElement(B.a.Item,{name:"signup"},"\u0412\u0441\u044c\u043e\u0433\u043e: \xa0 ",l.a.createElement("b",null,t)," \xa0 \u0433\u0440\u043d."),l.a.createElement(_.a,{trigger:l.a.createElement(B.a.Item,{name:"help"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 (",l.a.createElement("b",null,a),")"),on:"click",pinned:!0,position:"bottom right",wide:"very",className:"popCart"},n.map((function(e){return l.a.createElement(Y,e)})),l.a.createElement("hr",null),l.a.createElement("div",{className:"cart-botom"},l.a.createElement("span",null,"\u0420\u0430\u0437\u043e\u043c: \xa0 ",l.a.createElement("b",null,t)," \xa0 \u0433\u0440\u043d."),l.a.createElement(x.a,{onClick:!0,floated:"right",compact:!0,size:"large",animated:"fade"},l.a.createElement(x.a.Content,{visible:!0},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438"),l.a.createElement(x.a.Content,{className:"check-cart-icon",hidden:!0},"\u20b4 \xa0",l.a.createElement("b",null,t),"\xa0",l.a.createElement(P.a,{name:"chevron circle down"})))))))},V=a(190),W=a.n(V),H=Object(u.b)((function(e,t){var a=e.cart,n=t.id;return{totalPrice:a.items.reduce((function(e,t){return e+t.price}),0),count:a.items.length,items:W()(a.items,(function(e){return e.id})),addedCount:a.items.reduce((function(e,t){return e+(t.id===n?1:0)}),0)}}),(function(e){return Object(m.a)({},Object(d.b)(r,e))}))(J),q=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.setArticle;I.a.get("/article.json").then((function(t){var a=t.data;e(a)}))}},{key:"render",value:function(){var e=this.props,t=e.article,a=e.isReady,n=Math.ceil(this.props.totalUsersCount/this.props.pageSize);return l.a.createElement(C.a,null,l.a.createElement(H,null),l.a.createElement(Q,null),l.a.createElement(y.a.Group,{doubling:!0,centered:!0,stackable:!0,itemsPerRow:4},a?t.map((function(e,t){return l.a.createElement(M,Object.assign({key:t},e))})):l.a.createElement(g.a,null,l.a.createElement(O.a,{active:!0,inverted:!0},l.a.createElement(j.a,{inverted:!0},"Loading")),l.a.createElement(k.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"}))),l.a.createElement(w.a,{boundaryRange:null,defaultActivePage:1,ellipsisItem:"...",firstItem:null,lastItem:null,siblingRange:null,totalPages:n}))}}]),t}(i.Component),K=a(114),X=a.n(K),Z=a(45),$=a.n(Z),ee=function(e,t,a){return function(e,t){switch(t){case"all":return e;case"higherPrice":return X()(e,"price","desc");case"lowerPrice":return X()(e,"price","asc");case"Care":return $()(e,["section","Care"]);case"Face":return $()(e,["section","Face"]);case"Eyes":return $()(e,["section","Eyes"]);case"Eyebrows":return $()(e,["section","Eyebrows"]);case"Lips":return $()(e,["section","Lips"]);case"Accessories":return $()(e,["section","Accessories"]);default:return e}}(function(e,t){return e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>=0||e.section.toLowerCase().indexOf(t.toLowerCase())>=0}))}(e,a),t)},te=Object(u.b)((function(e){var t=e.article,a=e.filter;return{article:t.items&&ee(t.items,a.filterBy,a.searchQuery),isReady:t.isReady,pageSize:t.pageSize,totalUsersCount:t.totalUsersCount}}),(function(e){return Object(m.a)({},Object(d.b)(n,e))}))(q),ae=a(192),ne=a.n(ae),re={isReady:!1,items:[],pageSize:8,totalUsersCount:101,currentPage:1},ce=a(193),ie={items:[]},le={searchQuery:"",filterBy:"all"},oe=Object(d.c)({article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTICLE":return Object(m.a)({},e,{items:t.payload,isReady:!0});case"SET_IS_READY":return Object(m.a)({},e,{isReady:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return Object(m.a)({},e,{items:[].concat(Object(ce.a)(e.items),[t.payload])});case"REMOVE_FROM_CART":return Object(m.a)({},e,{items:e.items.filter((function(e){return e.id!==t.payload}))});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return Object(m.a)({},e,{searchQuery:t.payload});case"SET_FILTER":return Object(m.a)({},e,{filterBy:t.payload});default:return e}}}),se=a(44),ue=document.getElementById("modal-root"),me=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){ue.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){ue.removeChild(this.el)}},{key:"render",value:function(){return s.a.createPortal(this.props.children,this.el)}}]),t}(l.a.Component);function de(e){var t=e.image;return l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"divka"},l.a.createElement("p",null,"Some text"),l.a.createElement("div",{className:"divulka"},l.a.createElement(k.a,{src:t})),l.a.createElement("button",null,"\u0426\u043e\u043a!")))}var Ee=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={clicks:0},a.handleClick=a.handleClick.bind(Object(se.a)(a)),a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"handleClick",value:function(){this.setState((function(e){return{clicks:e.clicks+1}})),ue.style.display="none"}},{key:"render",value:function(){return l.a.createElement("div",{onClick:this.handleClick},l.a.createElement(me,null,l.a.createElement(de,null)))}}]),t}(l.a.Component),pe=Object(d.d)(oe,Object(d.a)(ne.a));s.a.render(l.a.createElement(u.a,{store:pe},l.a.createElement(te,null)),document.getElementById("root")),s.a.render(l.a.createElement(Ee,null),document.getElementById("modal-root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.22eff656.chunk.js.map