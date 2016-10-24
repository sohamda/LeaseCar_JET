/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var q;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(c,d,e,f,h,k,l){b.C.Init.call(this,c.u(),"none"==d?null:d,a.j.pf,e,f,h,k,null,!0,l);this.gj=c}function c(a){this.Init(a)}function d(a,b){this.Init(a,b)}function e(a,b,c,d,f,h,k,l,u,D){e.C.Init.call(this,a.u(),b,c,d,f,null,h,k,l,u,D);this.gj=a}function f(){this.Init({alta:f.lh})}function h(a){this.Init(a.u(),a.dispatchEvent,a);this.gj=a}function k(a){this.gj=a}a.Fi=function(a,b,c){this.Init(a,b,c)};a.v.F(a.Fi,a.Je);a.Fi.newInstance=function(b,c,d){return new a.Fi(b,c,d)};a.Fi.prototype.Init=
function(b,d,e){a.Fi.C.Init.call(this,b,d,e);this.I=new h(this);this.I.Qf(this);a.B.Va()||this.I.bs(new c(this.I));this.Xg=new f;this.dc=[]};a.Fi.prototype.dH=function(b,c){if(!b||!c){var d=l.tp(this,b,c);this.Uoa=d;b||(b=d.items?d.qRa*d.fda:0);c||(c=d.items?d.BWa*d.Dfa:0)}return new a.vj(b,c)};a.Fi.prototype.ta=function(b,c,d){this.Ej=this.Ea;var e=this.ou,f=this.xb?this.xb:0,h=this.Kb?this.Kb:0;this.I.qe();this.dc=[];this.ou=[];this.Uoa=null;this.Wm&&(this.Ea.removeChild(this.Wm),this.Wm=null);
this.jr();this.xf(b);var k=this.u();if(c||d)this.xb=c,this.Kb=d;else if(k.Ob.style.display="block",c=this.dH(),a.L.s5(k,c.a,c.b),d=a.L.Pua(k),c.a==d.a&&c.b!=d.b?(this.Kb=d.b,c=this.dH(null,this.Kb),a.L.s5(k,c.a,this.Kb),this.xb=a.L.Pua(k).a):c.a!=d.a&&c.b==d.b?(this.xb=d.a,c=this.dH(this.xb,null),a.L.s5(k,this.xb,c.b),this.Kb=a.L.Pua(k).b):(this.xb=d.a,this.Kb=d.b),this.xb!=c.a||this.Kb!=c.b)this.Uoa=null;this.Ea=new a.ma(k);this.A(this.Ea);l.ta(this,this.Ea,new a.Z(0,0,this.xb,this.Kb),this.Uoa);
this.Ej?"none"!=this.W.animationOnDataChange&&b&&(b=new a.wq(k,null),b.Io(e,this.ou),this.lc=b.vw()):this.lc=this.W$a();this.lc?(a.L.s5(k,Math.max(f,this.xb),Math.max(h,this.Kb)),this.I.il(this),this.Wm&&this.Ea.removeChild(this.Wm),this.lc.lg(this.lba,this),this.lc.play()):this.lba()};a.Fi.prototype.xf=function(b){b?this.W=this.Xg.fn(b):this.W||(this.W=this.NF());a.B.uj()||(this.W.animationOnDisplay="none",this.W.animationOnDataChange="none");b=this.W.selectionMode;this.Zc="single"==b?new a.Rc(a.Rc.Vy):
"multiple"==b?new a.Rc(a.Rc.Uy):null;this.I.BA(this.Zc)};a.Fi.prototype.lba=function(){this.Ej&&(this.removeChild(this.Ej),this.Ej.ya(),this.Ej=null);this.lc&&(this.I.Qf(this),this.Wm&&this.Ea.A(this.Wm));a.L.s5(this.u(),this.xb,this.Kb);for(var b,c=0;c<this.dc.length&&(b=this.dc[c],"none"==b.Nc());c++);this.I.Zu(b);this.Zc&&this.Zc.zt(this.W.selection,this.dc);a.uh.Xe(this.W.highlightedCategories,this.dc,"any"==this.W.highlightMatch);this.lr();this.wn||this.ys();this.lc=null;this.wn=!1};a.Fi.prototype.rxa=
function(a){this.dc=a};a.Fi.prototype.dl=function(){return this.dc};a.Fi.prototype.Dqb=function(a){this.ou.push(a)};a.Fi.prototype.Cqb=function(a){this.Wm=a};a.Fi.prototype.Enb=function(){for(var a=0,b=0;b<this.dc.length;b++)a+=this.dc[b].getCount();return a};a.Fi.prototype.ob=function(){return a.Ta.Ur(this.W.animationDuration)/1E3};a.Fi.prototype.W$a=function(){var b=this.W.animationOnDisplay,c=this.ob(),d=this.u(),e=new a.Z(0,0,this.xb,this.Kb);if(a.pc.isSupported(b))return a.pc.UE(d,b,this.Ea,
e,c);var f=[];if("popIn"==b)for(b=0;b<this.ou.length;b++){var h=this.ou[b];f.push(new a.Kt(d,h,!0,c))}else if("none"!=b){for(b=0;b<this.ou.length;b++){var h=this.ou[b],k=new a.gd(d,h,c),z,u;l.Sb(this)?(z=l.uwa(this)?this.xb:0,u=h.dk(),h.Bt(z),k.ka.N(a.G.V,h,h.dk,h.Bt,u)):(z=l.twa(this)?this.Kb:0,u=h.ek(),h.Ct(z),k.ka.N(a.G.V,h,h.ek,h.Ct,u));f.push(k)}f.push(a.pc.UE(d,a.pc.TC,this.Ea,e,c))}return 0<f.length?new a.jh(d,f):null};a.Fi.prototype.Xe=function(b){var c=this.D();c.highlightedCategories=a.ac.clone(b);
a.uh.Xe(b,this.dl(),"any"==c.highlightMatch)};a.Fi.prototype.select=function(b){this.D().selection=a.ac.clone(b);this.Zc&&this.Zc.zt(b,this.dl())};a.Fi.prototype.em=function(){return a.H.Cf(this.D(),"componentName",a.H.Ia,"PICTOCHART")};a.Fi.prototype.oh=function(){this.RGa||(this.RGa=new k(this));return this.RGa};a.v.F(k,a.Rd);k.prototype.zn=function(a){return(a=this.gj.ab().lb(a))&&a instanceof d?"item["+this.gj.dl().indexOf(a)+"]":null};k.prototype.ph=function(b){if(b==a.Rd.qD)return this.RF(this.gj);
var c=b.indexOf("[");return 0<c&&"item"===b.substring(0,c)&&(b=parseInt(b.substring(c+1,b.length-1)),b=this.gj.dl()[b])?b.Wa():null};k.prototype.getItem=function(a){if(a=this.gj.dl()[a]){var b={};b.color=a.Ul();b.tooltip=a.me();b.id=a.getId();b.name=a.getName();b.count=a.getCount();b.selected=a.wb();return b}return null};k.prototype.nM=function(){return this.gj.dl().length};a.v.F(h,a.I);h.prototype.yq=function(b,c,d){b=this.gj.D();"none"!=b.hoverBehavior&&(c=c.Yd?c.Yd():[],b.highlightedCategories=
d?c.slice():null,d=a.Za.HI(b.highlightedCategories,d),c=a.Ta.Ur(b.hoverBehaviorDelay),this.LJ.ag(d,this.gj.dl(),c,"any"==b.highlightMatch))};h.prototype.eT=function(a){(a=this.lb(a.target))&&(a.tb&&a.tb()||this.oy(a))};h.prototype.aG=function(a){(a=this.lb(a.target))&&a.tb&&a.tb()&&this.oy(a)};h.prototype.jZ=function(a){(a=this.lb(a.target))&&(a.tb&&a.tb()||this.oy(a))};h.prototype.Xw=function(a){(a=this.lb(a.target))&&(a.tb&&a.tb()||this.oy(a))};h.prototype.xJ=function(a){var b=this.lb(a.target);
b&&b.tb&&b.tb()&&(a.preventDefault(),a.stopPropagation(),this.oy(b))};h.prototype.oy=function(b){b instanceof d&&b.gk()&&this.kl(a.Za.jfa(b.getId()))};a.v.F(f,a.eb);f.lh={animationOnDisplay:"none",animationOnDataChange:"none",animationDuration:750,drilling:"off",hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,layout:"horizontal",layoutOrigin:"topStart",selection:[],selectionMode:"none",_defaultColor:"#a6acb1",_noneShapeColor:"rgba(255,255,255,0)",
_defaultSize:32,_defaultShape:"rectangle",_gapRatio:.25,_textStyle:new a.j(a.eb.u6+"color: #252525;"),_statusMessageStyle:new a.j(a.eb.u6+"color: #252525;"),_tooltipStyle:new a.j("border-collapse: separate; border-spacing: 1px"),_tooltipLabelStyle:new a.j("color: #666666; padding: 0px 2px"),_tooltipValueStyle:new a.j("color: #333333; padding: 0px 2px")};a.v.F(e,a.Ff);e.prototype.sg=function(b,c){var d=new a.gd(this.u(),this,.75*this.gj.ob()),e=d.ka,f=this.Vk();this.Cm(c.Vk());e.N(a.G.yf,this,this.Vk,
this.Cm,f);c.T(0);b.add(d,1)};e.prototype.Jj=function(b){b.add(new a.Vi(this.u(),this,.5*this.gj.ob()),0)};e.prototype.Oi=function(b){this.T(0);b.add(new a.hh(this.u(),this,.5*this.gj.ob()),2)};e.prototype.Vk=function(){return[this.dk(),this.ek(),this.getWidth(),this.getHeight()]};e.prototype.Cm=function(a){this.Bt(a[0]);this.Ct(a[1]);this.Xa(a[2]);this.qb(a[3])};a.v.F(d,a.ma);d.qB=0;d.prototype.Init=function(b,c){d.C.Init.call(this,b.u(),null,c.id);this.gj=b;this.Pn=c;this.xc=null!=c.id?c.id:null!=
c.name?c.name:"_defaultId"+d.qB;d.qB++;this.pP="none"==c.shape;this.dd=this.Nl=!1;this.gV=new a.R(0,0);(this.tb()||this.gk())&&this.setCursor("pointer");b.ab().mb(this,this)};d.prototype.ISa=function(){var a=this.Pn.columnSpan;return null!=a&&0<=a?a:1};d.prototype.hUa=function(){var a=this.Pn.rowSpan;return null!=a&&0<=a?a:1};d.prototype.getCount=function(){var a=this.Pn.count;return null!=a?Math.max(a,0):1};d.prototype.Nc=function(){return this.Pn.shape||this.gj.D()._defaultShape};d.prototype.fc=
function(){return this.pP?this.gj.D()._noneShapeColor:this.Pn.color||this.gj.D()._defaultColor};d.prototype.Xn=function(){return this.Pn.borderColor};d.prototype.Pg=function(){return this.Pn.borderWidth};d.prototype.Ju=function(){return this.Pn.className};d.prototype.M=function(){return this.Pn.style};d.prototype.f4=function(){return this.Pn.source};d.prototype.jva=function(){return this.Pn.sourceSelected};d.prototype.hva=function(){return this.Pn.sourceHover};d.prototype.iva=function(){return this.Pn.sourceHoverSelected};
d.prototype.getName=function(){return this.Pn.name};d.prototype.getId=function(){return this.xc};d.prototype.me=function(){return this.Pn.shortDesc};d.prototype.gk=function(){if(this.pP)return!1;var a=this.Pn.drilling;return a&&"inherit"!=a?"on"==a:"on"==this.gj.D().drilling};d.prototype.hl=function(){return this.tb()&&this.gk()&&!this.pP};d.prototype.Btb=function(){this.bg("img");this.Mr()};d.prototype.Qg=function(){if(this.pP)return"";var b=this.gj.D(),c=this.gj.D().tooltip;if(c=c?c.renderer:null){var b=
this.gj.u().Bf(),d={id:this.getId(),name:this.getName(),count:this.getCount(),color:this.fc()};return b.by(c,d)}if(null!=this.me())return this.me();c="";(d=this.getName())&&(c=a.Me.JW("td",b._tooltipLabelStyle)+d+"\x3c/td\x3e");d=a.B.da(this.gj.u());b._tooltipLabelStyle.ea(a.j.iG,d?"left":"right");b._tooltipValueStyle.ea(a.j.iG,d?"right":"left");return a.Me.JW("table",b._tooltipStyle)+"\x3ctr\x3e"+c+a.Me.JW("td",b._tooltipValueStyle)+this.Wna()+"\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e"};d.prototype.Ul=
function(){return this.fc()};d.prototype.Wna=function(){return a.H.Cf(this.gj.D(),"labelCountWithTotal",a.H.Ia,"COUNT_WITH_TOTAL",[this.getCount(),this.gj.Enb()])};d.prototype.tb=function(){return"none"!=this.gj.D().selectionMode&&!this.pP};d.prototype.wb=function(){return this.Nl};d.prototype.kc=function(a){this.Nl=a;this.Mr();for(var c=0;c<this.Pb();c++){var d=this.hb(c);(d instanceof b||d instanceof e)&&d.kc(a)}};d.prototype.od=function(){for(var a=0;a<this.Pb();a++){var c=this.hb(a);(c instanceof
b||c instanceof e)&&c.od()}};d.prototype.Jc=function(){for(var a=0;a<this.Pb();a++){var c=this.hb(a);(c instanceof b||c instanceof e)&&c.Jc()}};d.prototype.Re=function(){return[this]};d.prototype.Ed=function(){var b=[],c=this.gj.D();this.tb()&&b.push(a.H.Cf(c,this.wb()?"stateSelected":"stateUnselected",a.H.Ia,this.wb()?"STATE_SELECTED":"STATE_UNSELECTED"));this.gk()&&b.push(a.H.Cf(c,"stateDrillable",a.H.Ia,"STATE_DRILLABLE"));c=this.getName();c=null!=this.me()?this.me():null==c?this.Wna():a.H.va(a.H.Ia,
"COLON_SEP_LIST",[c,this.Wna()]);return a.oa.Fk(c,b)};d.prototype.Mr=function(){a.B.hj()||this.Gd("label",this.Ed())};d.prototype.Yd=function(){return this.Pn.categories||[this.getId()]};d.prototype.Fd=function(b){var d=this.gj.ab().Cb;return b.type==a.MouseEvent.Be||d.Uu(b)?this:d.Si(b)?c.Fd(this.gj,this,b):null};d.prototype.tf=function(a){return this.aa(a)};d.prototype.Jm=function(){return this.Wa()};d.prototype.Sf=function(){this.pP||(this.dd=!0,this.od())};d.prototype.Qd=function(){this.pP||(this.dd=
!1,this.Jc())};d.prototype.Kd=function(){return this.dd};d.prototype.Ufa=function(a){this.gV=a};d.prototype.Vda=function(){return this.gV};a.v.F(c,a.Cb);c.prototype.lF=function(a){return this.Si(a)&&!a.ctrlKey};c.prototype.Uu=function(b){return b.keyCode==a.KeyboardEvent.ji&&b.ctrlKey};c.Fd=function(b,d,e,f){var h=b.dl();f||(f=d);if("none"==d.Nc()&&d!=f){var k=a.na.kb(h,d);if(0==k||k==h.length-1)return f}var v=l.uwa(b),z=l.twa(b),u=l.Sb(b),k=d,v=e.keyCode==a.KeyboardEvent.Kf&&v||e.keyCode==a.KeyboardEvent.wf&&
!v||e.keyCode==a.KeyboardEvent.kh&&z||e.keyCode==a.KeyboardEvent.Tf&&!z,u=e.keyCode==a.KeyboardEvent.Kf&&u||e.keyCode==a.KeyboardEvent.wf&&u||e.keyCode==a.KeyboardEvent.kh&&!u||e.keyCode==a.KeyboardEvent.Tf&&!u,v=a.na.kb(h,d)+(v?1:-1);u?k=a.Cb.Fd(d,e,h):v<h.length&&0<=v&&(k=h[v]);"none"==k.Nc()&&(k=k!=d?c.Fd(b,k,e,f):f);return k};c.prototype.ik=function(b){var d=this.yb.lf();return d&&b.keyCode==a.KeyboardEvent.Xi?(this.yb.oy(d),a.I.sc(b),d):c.C.ik.call(this,b)};a.v.F(b,a.za);b.prototype.sg=function(b,
c){var d=new a.gd(this.u(),this,.75*this.gj.ob()),e=d.ka,f=this.fd();this.qa(c.fd().clone());e.N(a.G.oo,this,this.fd,this.qa,f);f=this.Vk();this.Cm(c.Vk());e.N(a.G.yf,this,this.Vk,this.Cm,f);c.T(0);b.add(d,1)};b.prototype.Jj=function(b){b.add(new a.Vi(this.u(),this,.5*this.gj.ob()),0)};b.prototype.Oi=function(b){this.T(0);b.add(new a.hh(this.u(),this,.5*this.gj.ob()),2)};b.prototype.Vk=function(){return[this.dk(),this.ek(),this.getWidth(),this.getHeight()]};b.prototype.Cm=function(a){this.Bt(a[0]);
this.Ct(a[1]);this.Xa(a[2]);this.qb(a[3])};var l={};a.v.F(l,a.v);l.ta=function(c,d,f,h){var k=c.u(),x=new a.Rect(k,f.x,f.y,f.a,f.b);x.Wb();d.A(x);h||(h=l.tp(c,f.a,f.b));if(h.items){c.rxa(h.items);for(var x=c.D()._gapRatio,v=l.Sb(c),z=l.twa(c),u=l.uwa(c),D=new a.MN,C=0,B=0,A=0,F=0;F<h.items.length;F++){for(var y=h.items[F],E=y.ISa(),M=y.hUa(),S=E*h.fda,O=M*h.Dfa,fa=y.getCount(),ga=0,aa=!0,ea;0<fa;){if(E!=C||M!=B)A=0;0==A&&(ea=l.nJa(D,E,M,h.qRa,h.BWa,v));if(null==ea)break;var ia=ea.bta*h.fda+S/2,T=
ea.zxa*h.Dfa+O/2,ia=f.x+(u?f.a-ia:ia),T=f.y+(z?f.b-T:T),Z=Math.min(1-A,fa),W,R,X,U;v?(W=ia-S/2,R=z?T+O*(.5-Z-A):T+O*(A-.5),X=S,U=O*Z):(W=u?ia+S*(.5-Z-A):ia+S*(A-.5),R=T-O/2,X=S*Z,U=O);var L;1==Z?(L=y.getId()+"_"+ga,ga++):L=Math.random();if(y.f4())L=new e(c,ia,T,S,O,y.f4(),y.jva(),y.hva(),y.iva(),L+"_I");else{var oa=new a.Rect(k,W,R,X,U);oa.Wb();y.A(oa);L=new b(c,y.Nc(),ia,T,S-h.fda*x,O-h.Dfa*x,L+"_S");L.fb(y.fc());L.Tb(y.Xn(),null,y.Pg());L.WX(y.fc());L.He(y.Ju());L.ea(y.M())}1>Z&&(oa=new a.Cd,oa.Qe(W,
R,X,U),L.te(oa));aa&&(y.Ufa(new a.R(ia,T)),aa=!1);y.A(L);c.Dqb(L);fa-=Z;A=(A+Z)%1}d.A(y);y.Btb();C=E;B=M}}else l.yp(c,d,f)};l.tp=function(b,c,e){var f=b.D(),h=f.items;if(!h)return{};for(var k=a.na.QQ(f.hiddenCategories),v=[],z=0,u=1,D=1,C=0;C<h.length;C++)if(null!=h[C]){var B=new d(b,h[C]);if(!k||!a.na.tX(k,B.Yd())){var A=B.ISa(),F=B.hUa();A>u&&(u=A);F>D&&(D=F);z+=A*F*B.getCount();v.push(B)}}if(0==z)return{};h=f.columnWidth;k=f.rowHeight;c&&e||(h||(h=k?k:f._defaultSize),k||(k=h));b=l.Sb(b);C=f.columnCount;
f=f.rowCount;C||f||(c&&e?b?f=l.iU(Math.sqrt(z*e/c),D):C=l.iU(Math.sqrt(z*c/e),u):c?C=Math.max(Math.floor(c/h),1):e?f=Math.max(Math.floor(e/k),1):b?f=l.iU(Math.sqrt(z),D):C=l.iU(Math.sqrt(z),u));C?f||(f=l.iU(z/C,D)):C=l.iU(z/f,u);c&&e&&(h||(h=k?k:Math.min(c/C,e/f)),k||(k=h));return 0>=C||0>=f||0>=h||0>=k?{}:{items:v,qRa:C,BWa:f,fda:h,Dfa:k}};l.iU=function(a,b){return Math.ceil(a/b)*b};l.nJa=function(a,b,c,d,e,f){if(f)return(a=l.nJa(a,c,b,e,d,!1))?{bta:a.zxa,zxa:a.bta}:null;for(f=0;f<e-c+1;f++)for(var h=
0;h<d-b+1;h++)if(l.U7a(a,h,f,b,c))return l.qdb(a,h,f,b,c),{bta:h,zxa:f};return null};l.U7a=function(a,b,c,d,e){for(var f=0;f<e;f++)for(var h=0;h<d;h++)if(a.get(b+h,c+f))return!1;return!0};l.qdb=function(a,b,c,d,e){for(var f=0;f<e;f++)for(var h=0;h<d;h++)a.put(b+h,c+f,!0)};l.yp=function(b,c,d){var e=b.D(),f=a.H.Cf(e,"labelNoData",a.H.Ia,"NO_DATA");c=a.Ca.yp(c,f,d.clone(),b.ab(),e._statusMessageStyle);b.Cqb(c)};l.Sb=function(a){return"vertical"==a.D().layout};l.twa=function(a){a=a.D().layoutOrigin;
return"bottomStart"==a||"bottomEnd"==a};l.uwa=function(b){var c=b.D().layoutOrigin,c="topEnd"==c||"bottomEnd"==c;return a.B.da(b.u())?!c:c};a.Ha(a,"PictoChart",a.Fi);a.Ha(a.Fi,"newInstance",a.Fi.newInstance);a.Ha(a.Fi.prototype,"destroy",a.Fi.prototype.ya);a.Ha(a.Fi.prototype,"getAutomation",a.Fi.prototype.oh);a.Ha(a.Fi.prototype,"highlight",a.Fi.prototype.Xe);a.Ha(a.Fi.prototype,"render",a.Fi.prototype.ta);a.Ha(a.Fi.prototype,"select",a.Fi.prototype.select);a.Ha(k.prototype,"getDomElementForSubId",
k.prototype.ph);a.Ha(k.prototype,"getItem",k.prototype.getItem);a.Ha(k.prototype,"getItemCount",k.prototype.nM)})(dvt);
  return dvt;
});
