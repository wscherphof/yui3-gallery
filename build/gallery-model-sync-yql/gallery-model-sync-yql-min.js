YUI.add("gallery-model-sync-yql",function(g){var d=g.Lang,b=d.sub,f=d.isValue,e=d.isFunction,c=function(){};function a(){}a._NON_ATTRS_CFG=["query"];a.prototype={query:"",initializer:function(h){h||(h={});f(h.query)&&(this.query=h.query);},buildQuery:function(h){h||(h={});return b(this.query,g.merge(h,(this instanceof g.Model)&&{id:this.get("id")}));},sync:function(l,i,m){e(m)||(m=c);if(l!=="read"){return m(null);}var k=this.buildQuery(i),h=this.cache,j=h&&h.retrieve(k);if(j){return m(null,j.response);}g.YQL(k,function(n){if(n.error){m(n.error,n);}else{j=n.query.results;if(h&&j){h.add(k,j);}m(null,j);}});}};g.namespace("ModelSync").YQL=a;},"@VERSION@",{requires:["model","yql"],skinnable:false,optional:["cache","cache-offline"]});