(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"quickstarts":[{"name":"APM + Infrastructure","authors":["Ryan Jussel"],"sources":["Transaction","ProcessSample"],"alerts":[],"dashboards":[{"name":"APM and Infrastructure","filename":"dashboard.json","sources":["Transaction","ProcessSample"],"screenshots":["dashboard.png"]}],"id":"apm-infrastructure"},{"name":"Cassandra","authors":[],"sources":["Transaction"],"alerts":[],"dashboards":[{"name":"Cassandra Client Metrics","filename":"dashboard.json","sources":["Transaction"],"screenshots":["dashboard.png"]}],"id":"cassandra"},{"name":"Cloud adoption","authors":["New Relic"],"sources":["Transaction","SyntheticCheck","Transaction","SyntheticCheck","ComputeSample"],"alerts":[],"dashboards":[{"name":"Cloud Adoption - Migrate - New Relic One","filename":"migrate.json","sources":["Transaction","SyntheticCheck"],"screenshots":["migrate.png"]},{"name":"Cloud Adoption - Plan - New Relic One","filename":"plan.json","sources":["Transaction","SyntheticCheck"],"screenshots":["plan.png"]},{"name":"Cloud Adoption - Run - New Relic One","filename":"run.json","sources":["ComputeSample"],"screenshots":["run.png"]}],"id":"cloud-adoption"},{"name":"CoreDNS","authors":["Stijn Polfliet"],"sources":["Kubernetes","Prometheus",{"name":"CoreDNS","url":"https://github.com/coredns/coredns/tree/master/plugin/metrics"},"Metric"],"alerts":[],"dashboards":[{"name":"CoreDNS - Prometheus","filename":"coredns-overview.json","sources":["Metric"],"screenshots":["coredns-overview.png"]}],"id":"k8s-coredns"}]}')},25:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),c=a.n(s),o=a(3),l=a(4),i=a(5),u=a(6),m=a(10),d=a(2),h=a(9),b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r="";switch(e.source){case"Transaction":r="APM";break;case"SystemSample":r="Infrastructure";break;case"ProcessSample":r="Infrastructure - Processes";break;default:r="object"===typeof e.source&&null!==e.source?e.source.name:e.source}return n.state={name:r},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("span",{className:"badge badge-dark"},this.state.name)}}]),a}(r.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sources"},this.props.sources.map((function(e,t){return r.a.createElement(b,{key:e,source:e})})))}}]),a}(r.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={screenshot:n.props.quickstart.dashboards[Math.floor(Math.random()*n.props.quickstart.dashboards.length)].screenshots[0]},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-4 col-lg-3 col-sm-4"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("img",{src:"./data/"+this.props.quickstart.id+"/dashboards/"+this.state.screenshot,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement(m.b,{className:"",to:"/view/"+this.props.quickstart.id},this.props.quickstart.name,this.props.quickstart.authors.length>0&&r.a.createElement("span",null,r.a.createElement("small",{className:"text-muted text-small"}," created by ",this.props.quickstart.authors.join(", "))))),r.a.createElement(p,{sources:this.props.quickstart.sources}),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center pt-3"}))))}}]),a}(r.a.Component),g=a(13),v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={search:""},n.setSearch=n.setSearch.bind(Object(h.a)(n)),n.search=n.search.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"setSearch",value:function(e,t){this.setState({search:e.target.value})}},{key:"search",value:function(e){var t=this.state.search.toLowerCase();return!!e.name.toLowerCase().includes(t)||!!e.sources.toString().toLowerCase().includes(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"New Relic - Quick start library"),r.a.createElement("p",{className:"lead text-muted"},"Library of curated dashboards & alerts with their dependencies."))),r.a.createElement("div",{className:"album bg-light"},r.a.createElement("div",{className:"container",id:"root"},r.a.createElement("div",{className:"row py-5"},r.a.createElement("input",{type:"text",className:"form-control",id:"search","aria-describedby":"search",placeholder:"Search for specific datasource or technology",value:this.state.search,onChange:this.setSearch}))),r.a.createElement("div",{className:"container-fluid",id:"root"},r.a.createElement("div",{className:"row py-3"},g.quickstarts.filter(this.search).map((function(e,t){return r.a.createElement(f,{key:e.name,quickstart:e})}))))))}}]),a}(r.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;Object(o.a)(this,a);var r=(n=t.call(this,e)).props.sources.sort().map((function(e,t){if("object"===typeof e&&null!==e)return e;switch(e){case"ComputeSample":return{name:"New Relic Amazon EC2 monitoring integration",url:"https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-ec2-monitoring-integration"};case"SystemSample":case"ProcessSample":return{name:"New Relic Infrastructure",url:"https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure"};case"PageView":return{name:"New Relic Browser",url:"https://docs.newrelic.com/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent"};case"SyntheticCheck":return{name:"New Relic Synthetics",url:"https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics"};case"Transaction":return{name:"New Relic APM",url:"https://docs.newrelic.com/docs/apm"};case"Kubernetes":return{name:"New Relic Kubernetes",url:"https://docs.newrelic.com/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration"};case"Prometheus":return{name:"New Relic Prometheus Integration",url:"https://docs.newrelic.com/docs/integrations/prometheus-integrations/install-configure/install-update-or-uninstall-your-prometheus-openmetrics-integration"};case"Log":return{name:"New Relic Logs",url:"https://docs.newrelic.com/docs/logs"};case"Metric":return{};default:return{name:"Unknown source: "+e}}})).sort().filter((function(e,t,a){return!!e.name&&(!t||e.name!==a[t-1].name)}));return n.state={requirements:r},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",null,this.state.requirements.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e,t){return e.url?r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_BLANK",rel:"noopener noreferrer"},e.name)):r.a.createElement("li",{key:e.name},e.name)})))}}]),a}(r.a.Component),y=a(11),N=a(14),k=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).modalCallback=void 0,n.state={quickstart:g.quickstarts.find((function(t){return t.id===e.match.params.handle})),visible:0,modalVisible:!1,accountId:""},n.copy=n.copy.bind(Object(h.a)(n)),n.setAccountId=n.setAccountId.bind(Object(h.a)(n)),n.submitModal=n.submitModal.bind(Object(h.a)(n)),n.closeModal=n.closeModal.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"getAccountId",value:function(e){this.modalCallback=e,this.setState({modalVisible:!0})}},{key:"submitModal",value:function(){this.setState({modalVisible:!1}),this.modalCallback&&this.modalCallback()}},{key:"closeModal",value:function(){this.setState({modalVisible:!1})}},{key:"setAccountId",value:function(e){this.setState({accountId:e.target.value})}},{key:"getDashboard",value:function(e,t){var a=this;console.log(e),this.getAccountId((function(){fetch("./data/"+e).then((function(e){return e.json()})).then((function(e){e.dashboard_account_id=+a.state.accountId,t(JSON.stringify(e))}))}))}},{key:"copy",value:function(e){this.getDashboard(e,(function(e){navigator.permissions.query({name:"clipboard-write"}).then((function(t){"granted"!==t.state&&"prompt"!==t.state||navigator.clipboard.writeText(e).then((function(){alert("Dashboard copied to clipboard")}),(function(e){console.log("error",e),alert("Failed to copy dashboard to clipboard")}))}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"album py-2"},r.a.createElement("div",{className:"container",id:"root"},r.a.createElement("div",{className:"row py-4"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",null,this.state.quickstart.name)),r.a.createElement("div",{className:"col-4 text-right"},r.a.createElement(m.b,{className:"btn btn-default",to:"/"},r.a.createElement(y.a,{icon:N.c})," Back to homepage"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("p",null,r.a.createElement("b",null,"Created by:")," ",this.state.quickstart.authors.join(", ")),r.a.createElement(p,{sources:this.state.quickstart.sources}),r.a.createElement("h5",{className:"pt-4"},"Installation instructions"),r.a.createElement("p",null,"This dashboard requires the following New Relic products:"),r.a.createElement(E,{sources:this.state.quickstart.sources})),r.a.createElement("div",{className:"col-4 text-right"},r.a.createElement("a",{className:"btn btn-danger",href:"https://github.com/newrelic-experimental/quickstarts/issues/new?labels=bug&title=Problem%20with%20"+this.state.quickstart.id},r.a.createElement(y.a,{icon:N.a})," Report a problem"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Dashboards"),this.state.quickstart.dashboards.map((function(t){return r.a.createElement("div",{key:t.filename,className:"row px-4 py-2"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h3",null,t.name)),r.a.createElement("div",{className:"col-4 py-3 text-right"},r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.a.createElement("button",{className:"btn btn-outline-info",onClick:function(a){e.copy("./"+e.state.quickstart.id+"/dashboards/"+t.filename)}},r.a.createElement(y.a,{icon:N.b})," Copy dashboard JSON to clipboard"))),r.a.createElement("div",{className:"col-12"},t.screenshots.map((function(t){return r.a.createElement("img",{key:t,src:"data/"+e.state.quickstart.id+"/dashboards/"+t,className:"card-img-top",alt:"..."})}))))}))))),this.state.modalVisible&&r.a.createElement("div",{className:"modal fade show",tabIndex:"-1",role:"dialog",style:{display:"block",backgroundColor:"rgba(150, 150, 150, 0.50)"}},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Choose your New Relic account ID"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:this.closeModal},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",null,"You can find your account ID in New Relic UI:"),r.a.createElement("input",{type:"text",className:"form-control",id:"accountId","aria-describedby":"Account Id",placeholder:"",value:this.state.accountId,onChange:this.setAccountId})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.submitModal},"Set"),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:this.closeModal},"Cancel"))))))}}]),a}(r.a.Component),w=a(24),j=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("header",null,r.a.createElement("div",{className:"navbar navbar-dark bg-dark shadow-sm"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement(m.b,{className:"navbar-brand d-flex align-items-center",to:"/"},r.a.createElement("strong",null,"New Relic Quickstarts")),r.a.createElement("a",{href:"https://github.com/newrelic-experimental/quickstarts",target:"_BLANK",rel:"noopener noreferrer",className:"btn btn-light"},r.a.createElement(y.a,{icon:w.a})," Go to Github repository")))),r.a.createElement("main",{role:"main"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/view/:handle",component:k}),r.a.createElement(d.a,{path:"/",component:v}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.3ef54bca.chunk.js.map