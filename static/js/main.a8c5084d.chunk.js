(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"quickstarts":[{"name":"APM + Infrastructure","authors":["Ryan Jussel"],"sources":["Transaction","ProcessSample"],"alerts":[],"dashboards":[{"name":"APM and Infrastructure","filename":"dashboard.json","sources":["Transaction","ProcessSample"],"screenshots":["dashboard.png"]}],"id":"apm-infrastructure"},{"name":"CoreDNS","authors":["Stijn Polfliet"],"sources":["Kubernetes","Prometheus",{"name":"CoreDNS","url":"https://github.com/coredns/coredns/tree/master/plugin/metrics"},"Metric"],"alerts":[],"dashboards":[{"name":"CoreDNS - Prometheus","filename":"coredns-overview.json","sources":["Metric"],"screenshots":["coredns-overview.png"]}],"id":"k8s-coredns"}]}')},20:function(e,t,a){e.exports=a(31)},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(18),c=a.n(s),o=a(2),l=a(3),i=a(4),u=a(5),m=a(9),d=a(1),h=a(8),b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;Object(o.a)(this,a),r=t.call(this,e);var n="";switch(e.source){case"Transaction":n="APM";break;case"SystemSample":n="Infrastructure";break;case"ProcessSample":n="Infrastructure - Processes";break;default:n="object"===typeof e.source&&null!==e.source?e.source.name:e.source}return r.state={name:n},r}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("span",{className:"badge badge-dark"},this.state.name)}}]),a}(n.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"sources"},this.props.sources.map((function(e,t){return n.a.createElement(b,{key:e,source:e})})))}}]),a}(n.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={screenshot:r.props.quickstart.dashboards[Math.floor(Math.random()*r.props.quickstart.dashboards.length)].screenshots[0]},r}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-md-4 col-lg-3 col-sm-4"},n.a.createElement("div",{className:"card mb-4 shadow-sm"},n.a.createElement("img",{src:"./data/"+this.props.quickstart.id+"/dashboards/"+this.state.screenshot,className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},n.a.createElement(m.b,{className:"",to:"/view/"+this.props.quickstart.id},this.props.quickstart.name," ",n.a.createElement("small",{className:"text-muted text-small"},"created by ",this.props.quickstart.authors.join(", ")))),n.a.createElement(p,{sources:this.props.quickstart.sources}),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center pt-3"}))))}}]),a}(n.a.Component),v=a(11),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={search:""},r.setSearch=r.setSearch.bind(Object(h.a)(r)),r.search=r.search.bind(Object(h.a)(r)),r}return Object(l.a)(a,[{key:"setSearch",value:function(e,t){this.setState({search:e.target.value})}},{key:"search",value:function(e){var t=this.state.search.toLowerCase();return!!e.name.toLowerCase().includes(t)||!!e.sources.toString().toLowerCase().includes(t)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("section",{className:"jumbotron text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"New Relic - Quick start library"),n.a.createElement("p",{className:"lead text-muted"},"Library of curated dashboards & alerts with their dependencies."))),n.a.createElement("div",{className:"album bg-light"},n.a.createElement("div",{className:"container",id:"root"},n.a.createElement("div",{className:"row py-5"},n.a.createElement("input",{type:"text",className:"form-control",id:"search","aria-describedby":"search",placeholder:"Search for specific datasource or technology",value:this.state.search,onChange:this.setSearch}))),n.a.createElement("div",{className:"container-fluid",id:"root"},n.a.createElement("div",{className:"row py-3"},v.quickstarts.filter(this.search).map((function(e,t){return n.a.createElement(f,{key:e.name,quickstart:e})}))))))}}]),a}(n.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;Object(o.a)(this,a);var n=(r=t.call(this,e)).props.sources.sort().map((function(e,t){if("object"===typeof e&&null!==e)return e;switch(e){case"ComputeSample":return{name:"New Relic Amazon EC2 monitoring integration",url:"https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-ec2-monitoring-integration"};case"SystemSample":case"ProcessSample":return{name:"New Relic Infrastructure",url:"https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure"};case"PageView":return{name:"New Relic Browser",url:"https://docs.newrelic.com/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent"};case"SyntheticCheck":return{name:"New Relic Synthetics",url:"https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics"};case"Transaction":return{name:"New Relic APM",url:"https://docs.newrelic.com/docs/apm"};case"Kubernetes":return{name:"New Relic Kubernetes",url:"https://docs.newrelic.com/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration"};case"Prometheus":return{name:"New Relic Prometheus Integration",url:"https://docs.newrelic.com/docs/integrations/prometheus-integrations/install-configure/install-update-or-uninstall-your-prometheus-openmetrics-integration"};case"Log":return{name:"New Relic Logs",url:"https://docs.newrelic.com/docs/logs"};case"Metric":return{};default:return{name:"Unknown source: "+e}}})).sort().filter((function(e,t,a){return!!e.name&&(!t||e.name!==a[t-1].name)}));return r.state={requirements:n},r}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("ul",null,this.state.requirements.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e,t){return e.url?n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_BLANK",rel:"noopener noreferrer"},e.name)):n.a.createElement("li",{key:e.name},e.name)})))}}]),a}(n.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).modalCallback=void 0,r.state={quickstart:v.quickstarts.find((function(t){return t.id===e.match.params.handle})),visible:0,modalVisible:!1,accountId:""},r.copy=r.copy.bind(Object(h.a)(r)),r.setAccountId=r.setAccountId.bind(Object(h.a)(r)),r.submitModal=r.submitModal.bind(Object(h.a)(r)),r.closeModal=r.closeModal.bind(Object(h.a)(r)),r}return Object(l.a)(a,[{key:"getAccountId",value:function(e){this.modalCallback=e,this.setState({modalVisible:!0})}},{key:"submitModal",value:function(){this.setState({modalVisible:!1}),this.modalCallback&&this.modalCallback()}},{key:"closeModal",value:function(){this.setState({modalVisible:!1})}},{key:"setAccountId",value:function(e){this.setState({accountId:e.target.value})}},{key:"getDashboard",value:function(e,t){var a=this;console.log(e),this.getAccountId((function(){fetch("./data/"+e).then((function(e){return e.json()})).then((function(e){e.dashboard_account_id=+a.state.accountId,t(JSON.stringify(e))}))}))}},{key:"copy",value:function(e){this.getDashboard(e,(function(e){navigator.permissions.query({name:"clipboard-write"}).then((function(t){"granted"!==t.state&&"prompt"!==t.state||navigator.clipboard.writeText(e).then((function(){alert("Dashboard copied to clipboard")}),(function(e){console.log("error",e),alert("Failed to copy dashboard to clipboard")}))}))}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"album py-2"},n.a.createElement("div",{className:"container",id:"root"},n.a.createElement("div",{className:"row py-4"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h2",null,this.state.quickstart.name)),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement(m.b,{className:"btn btn-default",to:"/"},"Back to homepage"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-8"},n.a.createElement("p",null,n.a.createElement("b",null,"Created by:")," ",this.state.quickstart.authors.join(", ")),n.a.createElement(p,{sources:this.state.quickstart.sources}),n.a.createElement("h5",{className:"pt-4"},"Installation instructions"),n.a.createElement("p",null,"This dashboard requires the following New Relic products:"),n.a.createElement(g,{sources:this.state.quickstart.sources})),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement("a",{className:"btn btn-danger",href:"https://github.com/newrelic-experimental/quickstarts/issues/new?labels=bug&title=Problem%20with%20"+this.state.quickstart.id},"Report a problem"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,"Dashboards"),this.state.quickstart.dashboards.map((function(t){return n.a.createElement("div",{key:t.filename,className:"row px-4 py-2"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h3",null,t.name)),n.a.createElement("div",{className:"col-4 py-3 text-right"},n.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},n.a.createElement("button",{className:"btn btn-info",onClick:function(a){e.copy("./"+e.state.quickstart.id+"/dashboards/"+t.filename)}},"Copy to clipboard"))),n.a.createElement("div",{className:"col-12"},t.screenshots.map((function(t){return n.a.createElement("img",{key:t,src:"data/"+e.state.quickstart.id+"/dashboards/"+t,className:"card-img-top",alt:"..."})}))))}))))),this.state.modalVisible&&n.a.createElement("div",{className:"modal fade show",tabIndex:"-1",role:"dialog",style:{display:"block",backgroundColor:"rgba(150, 150, 150, 0.50)"}},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title"},"Choose your New Relic account ID"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:this.closeModal},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("p",null,"You can find your account ID in New Relic UI:"),n.a.createElement("input",{type:"text",className:"form-control",id:"accountId","aria-describedby":"Account Id",placeholder:"",value:this.state.accountId,onChange:this.setAccountId})),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.submitModal},"Set"),n.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:this.closeModal},"Cancel"))))))}}]),a}(n.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/view/:handle",component:y}),n.a.createElement(d.a,{path:"/",component:E})))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a8c5084d.chunk.js.map