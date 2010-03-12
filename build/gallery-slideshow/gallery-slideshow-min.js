YUI.add("gallery-slideshow",function(B){var A=function(){A.superclass.constructor.apply(this,arguments);};A.NAME="SlideShow";A.NS="SlideShow";A.ATTRS={delay:{value:5000,validator:B.Lang.isNumber},images:{validator:B.Lang.isArray},animation:{validator:function(C){return B.Lang.isObject(B.Anim)&&C instanceof B.Anim;},setter:function(C){C.on("end",function(){this.endTransition();},this);}}};B.extend(A,B.Widget,{createImage:function(D,E){var C=this.get("contentBox"),G=B.Node.create("<div class='yui-slideshow-img'><img /></div>"),F=G.one("img");F.set("src",D.src);G.setStyle("zIndex",E);C.insert(G);B.later(1000,this,function(I,H){I.setXY(H.getXY());},[G,C]);return G;},renderUI:function(){var C=this.get("images"),D=C.length;this.get("contentBox").all(".yui-slideshow-img").remove();B.Array.each(C,function(G,H,F){var E=this.createImage(G,D-H);if(H==0){this.currentImage=E;}},this);},bindUI:function(){B.later(this.get("delay"),this,"beginTransition");},setImage:function(G,D){var E=G.one("img"),H=this.get("boundingBox"),F=this.get("width")||"auto",C=this.get("height")||"auto";E.set("src",D.src);},beginTransition:function(){var D=this.get("animation"),C=this.get("contentBox").get(".yui-slideshow-img");if(D){D.set("node",this.currentImage);D.run();}else{this.endTransition();}},endTransition:function(){var C=this.get("contentBox").all(".yui-slideshow-img"),D=this.get("animation");C.each(function(E,F,H){var G=+E.getStyle("zIndex");if(G===H.size()-1){this.currentImage=E;}E.setStyle("zIndex",G===H.size()?1:G+1);},this);C.setStyles(D.get("from"));B.later(this.get("delay"),this,"beginTransition");}});B.SlideShow=A;},"gallery-2010.03.02-18",{requires:["widget","imageloader"],optional:["anim"]});