(this["webpackJsonpstock-app"]=this["webpackJsonpstock-app"]||[]).push([[0],{116:function(t,e){},119:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),o=a(56),r=a.n(o),l=(a(65),a(18)),s=a(15),i=(a(66),a(67),a(5)),u=a(6),m=a(8),k=a(7),d=a(9),h=function(t){function e(){return Object(i.a)(this,e),Object(m.a)(this,Object(k.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},c.a.createElement(l.b,{to:"/",className:"navbar-brand"},"Home"),c.a.createElement("div",{className:"collapse navbar-collapse"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"navbar-item"},c.a.createElement(l.b,{to:"/"},"Stock List")),c.a.createElement("li",{className:"navbar-item"},c.a.createElement(l.b,{to:"/portfolio"},"Portfolio")))))}}]),e}(n.Component),p=a(13),v=a.n(p),b=a(11),E=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(m.a)(this,Object(k.a)(e).call(this,t))).state={isTracked:!1,data:{}},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){""!==this.props.data.userId?this.setState({isTracked:!0}):this.setState({isTracked:!1})}},{key:"untrackStock",value:function(t){var e=this;v.a.post("http://ec2-3-217-82-10.compute-1.amazonaws.com:5000/stocks/update/"+t,{userId:""}).then((function(t){var a=e.state;a.data=t.data.stock,""===a.data.userId&&(a.isTracked=!1),e.setState({stock:a})})).catch((function(t){console.log(t)}))}},{key:"trackStock",value:function(t){var e=this;v.a.post("http://ec2-3-217-82-10.compute-1.amazonaws.com:5000/stocks/update/"+t,{userId:"5e5361bc97ab544798349ccf"}).then((function(t){var a=e.state;a.data=t.data.stock,""!==a.data.userId&&(a.isTracked=!0),e.setState({stock:a})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t,e=this;return t=this.state.isTracked?c.a.createElement(b.d,{onClick:function(){return e.untrackStock(e.props.data._id)}}):c.a.createElement(b.c,{onClick:function(){return e.trackStock(e.props.data._id)}}),c.a.createElement("div",null,t)}}]),e}(n.Component),f=a(0),S=function(t){return c.a.createElement("tr",null,c.a.createElement("td",null,t.stock.name),c.a.createElement("td",null,t.stock.indice),c.a.createElement("td",null,t.stock.value),c.a.createElement("td",null,c.a.createElement(f.b.Provider,{value:{color:"green"}},c.a.createElement(b.b,null)),c.a.createElement(f.b.Provider,{value:{color:"red"}},c.a.createElement(b.a,null))),c.a.createElement("td",null,c.a.createElement(E,{data:t.stock})))},j=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(m.a)(this,Object(k.a)(e).call(this,t))).state={stocks:[]},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;v.a.get("http://ec2-3-217-82-10.compute-1.amazonaws.com:5000/stocks").then((function(e){t.setState({stocks:e.data})})).catch((function(t){console.log(t)}))}},{key:"stocksList",value:function(){return this.state.stocks.map((function(t,e){return c.a.createElement(S,{stock:t,key:e})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"Stock List"),c.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Stock Name"),c.a.createElement("th",null,"Indice"),c.a.createElement("th",null,"Value"),c.a.createElement("th",null),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,this.stocksList())))}}]),e}(n.Component),O=a(22),y=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(m.a)(this,Object(k.a)(e).call(this,t))).state={isTracked:!1,data:{}},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){""!==this.props.data.userId?this.setState({isTracked:!0}):this.setState({isTracked:!1})}},{key:"untrackStock",value:function(t){var e=this;v.a.post("http://ec2-3-217-82-10.compute-1.amazonaws.com:5000/portfolio/update/"+t,{userId:""}).then((function(a){var n=e.state;n.data={},n.isTracked=!1,e.setState({stock:n}),e.props.untrackStock(t)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t,e=this;return this.state.isTracked&&(t=c.a.createElement(b.d,{onClick:function(){return e.untrackStock(e.props.data._id)}})),c.a.createElement("div",null,t)}}]),e}(n.Component),g=a(59),w=a.n(g),T=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(m.a)(this,Object(k.a)(e).call(this,t))).state={stock:{},endpoint:"http://ec2-3-217-82-10.compute-1.amazonaws.com:5000",increase:null},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.setState({stock:this.props.stock});var e=this.state.endpoint;w()(e).on("changeData",(function(e){t.state.stock.indice==e.indice?(console.log(e.value),console.log(t.state.stock.value),console.log(t.state.stock.value<e.value),e.value<t.state.stock.value?t.setState({increase:!1}):t.setState({increase:!0}),t.setState({stock:e})):t.state.stock._id==e._id&&(t.state.stock.value>e.value?t.setState({increase:!1}):t.setState({increase:!0}),t.setState({stock:e}))}))}},{key:"render",value:function(){return c.a.createElement("tr",null,c.a.createElement("td",null,this.state.stock.name),c.a.createElement("td",null,this.state.stock.indice),c.a.createElement("td",null,this.state.stock.value),c.a.createElement("td",null,c.a.createElement(f.b.Provider,{value:{color:this.state.increase&&null!=this.state.increase?"green":"gray"}},c.a.createElement(b.b,null)),c.a.createElement(f.b.Provider,{value:{color:this.state.increase||null==this.state.increase?"gray":"red"}},c.a.createElement(b.a,null))),c.a.createElement("td",null,c.a.createElement(y,{data:this.state.stock,untrackStock:this.props.untrackStock})))}}]),e}(n.Component),I=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(m.a)(this,Object(k.a)(e).call(this,t))).state={stocks:[]},a.untrackStock=a.untrackStock.bind(Object(O.a)(a)),a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"untrackStock",value:function(t){this.setState({stocks:this.state.stocks.filter((function(e){return e._id!==t}))})}},{key:"componentDidMount",value:function(){var t=this;v.a.get("http://ec2-3-217-82-10.compute-1.amazonaws.com:5000/portfolio",{userId:"5e5361bc97ab544798349ccf"}).then((function(e){t.setState({stocks:e.data})})).catch((function(t){console.log(t)}))}},{key:"stocksList",value:function(){var t=this;return this.state.stocks.map((function(e,a){return c.a.createElement(T,{stock:e,key:a,untrackStock:t.untrackStock})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"Your Portfolio"),c.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Stock Name"),c.a.createElement("th",null,"Indice"),c.a.createElement("th",null,"Value"),c.a.createElement("th",null),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,this.stocksList())))}}]),e}(n.Component);var N=function(){return c.a.createElement(l.a,null,c.a.createElement(h,null),c.a.createElement("br",null),c.a.createElement(s.a,{path:"/",exact:!0,component:j}),c.a.createElement(s.a,{path:"/portfolio",component:I}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},60:function(t,e,a){t.exports=a(119)},65:function(t,e,a){},66:function(t,e,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.e65a8134.chunk.js.map