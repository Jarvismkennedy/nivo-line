"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@nivo/core"),r=require("@nivo/colors"),i=require("@nivo/axes"),n=require("@nivo/legends"),a=require("@nivo/tooltip"),o=require("d3-shape"),l=require("@nivo/scales"),u=require("prop-types"),s=require("react/jsx-runtime"),d=require("@react-spring/web"),f=require("@nivo/voronoi");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=c(u);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},h.apply(this,arguments)}var y=function(e){var t=e.point;return s.jsx(a.BasicTooltip,{id:s.jsxs("span",{children:["x: ",s.jsx("strong",{children:t.data.xFormatted}),", y:"," ",s.jsx("strong",{children:t.data.yFormatted})]}),enableChip:!0,color:t.serieColor})};y.propTypes={point:p.default.object.isRequired};var b=e.memo(y),m=function(e){var r=e.slice,i=e.axis,n=t.useTheme(),o="x"===i?"y":"x";return s.jsx(a.TableTooltip,{rows:r.points.map((function(e){return[s.jsx(a.Chip,{color:e.serieColor,style:n.tooltip.chip},"chip"),e.serieId,s.jsx("span",{style:n.tooltip.tableCellValue,children:e.data[o+"Formatted"]},"value")]}))})};m.propTypes={slice:p.default.object.isRequired,axis:p.default.oneOf(["x","y"]).isRequired};var x=e.memo(m),g={data:p.default.arrayOf(p.default.shape({id:p.default.oneOfType([p.default.string,p.default.number]).isRequired,data:p.default.arrayOf(p.default.shape({x:p.default.oneOfType([p.default.number,p.default.string,p.default.instanceOf(Date)]),y:p.default.oneOfType([p.default.number,p.default.string,p.default.instanceOf(Date)])})).isRequired})).isRequired,xScale:p.default.object.isRequired,xFormat:p.default.oneOfType([p.default.func,p.default.string]),yScale:p.default.object.isRequired,yFormat:p.default.oneOfType([p.default.func,p.default.string]),layers:p.default.arrayOf(p.default.oneOfType([p.default.oneOf(["grid","markers","axes","areas","crosshair","lines","slices","points","mesh","legends"]),p.default.func])).isRequired,curve:t.lineCurvePropType.isRequired,axisTop:i.axisPropType,axisRight:i.axisPropType,axisBottom:i.axisPropType,axisLeft:i.axisPropType,enableGridX:p.default.bool.isRequired,enableGridY:p.default.bool.isRequired,gridXValues:p.default.oneOfType([p.default.number,p.default.arrayOf(p.default.oneOfType([p.default.number,p.default.string,p.default.instanceOf(Date)]))]),gridYValues:p.default.oneOfType([p.default.number,p.default.arrayOf(p.default.oneOfType([p.default.number,p.default.string,p.default.instanceOf(Date)]))]),enablePoints:p.default.bool.isRequired,pointSymbol:p.default.func,pointSize:p.default.number.isRequired,pointColor:p.default.any.isRequired,pointBorderWidth:p.default.number.isRequired,pointBorderColor:p.default.any.isRequired,enablePointLabel:p.default.bool.isRequired,pointLabel:p.default.oneOfType([p.default.string,p.default.func]).isRequired,markers:p.default.arrayOf(p.default.shape({axis:p.default.oneOf(["x","y"]).isRequired,value:p.default.oneOfType([p.default.number,p.default.string,p.default.instanceOf(Date)]).isRequired,style:p.default.object})),colors:r.ordinalColorsPropType.isRequired,enableArea:p.default.bool.isRequired,areaOpacity:p.default.number.isRequired,areaBlendMode:t.blendModePropType.isRequired,areaBaselineValue:p.default.oneOfType([p.default.number,p.default.string,p.default.instanceOf(Date)]).isRequired,lineWidth:p.default.number.isRequired,legends:p.default.arrayOf(p.default.shape(n.LegendPropShape)).isRequired,isInteractive:p.default.bool.isRequired,debugMesh:p.default.bool.isRequired,tooltip:p.default.oneOfType([p.default.func,p.default.object]).isRequired,enableSlices:p.default.oneOf(["x","y",!1]).isRequired,debugSlices:p.default.bool.isRequired,sliceTooltip:p.default.oneOfType([p.default.func,p.default.object]).isRequired,enableCrosshair:p.default.bool.isRequired,crosshairType:p.default.string.isRequired},v=h({},g,{enablePointLabel:p.default.bool.isRequired,role:p.default.string.isRequired,useMesh:p.default.bool.isRequired},t.motionPropTypes,t.defsPropTypes),C=h({pixelRatio:p.default.number.isRequired},g),R={curve:"linear",xScale:{type:"point"},yScale:{type:"linear",min:0,max:"auto"},layers:["grid","markers","axes","areas","crosshair","lines","points","slices","mesh","legends"],axisBottom:{},axisLeft:{},enableGridX:!0,enableGridY:!0,enablePoints:!0,pointSize:6,pointColor:{from:"color"},pointBorderWidth:0,pointBorderColor:{theme:"background"},enablePointLabel:!1,pointLabel:"yFormatted",colors:{scheme:"nivo"},enableArea:!1,areaBaselineValue:0,areaOpacity:.2,areaBlendMode:"normal",lineWidth:2,legends:[],isInteractive:!0,tooltip:b,enableSlices:!1,debugSlices:!1,sliceTooltip:x,debugMesh:!1,enableCrosshair:!0,crosshairType:"bottom-left"},q=h({},R,{enablePointLabel:!1,useMesh:!1,animate:!0,motionConfig:"gentle",defs:[],fill:[],role:"img"}),S=h({},R,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),T=function(r){var i=r.curve;return e.useMemo((function(){return o.line().defined((function(e){return null!==e.x&&null!==e.y})).x((function(e){return e.x})).y((function(e){return e.y})).curve(t.curveFromProp(i))}),[i])},O=function(r){var i=r.curve,n=r.yScale,a=r.areaBaselineValue;return e.useMemo((function(){return o.area().defined((function(e){return null!==e.x&&null!==e.y})).x((function(e){return e.x})).y1((function(e){return e.y})).y0((function(e){return e.y0})).curve(t.curveFromProp(i))}),[i,n,a])},M=function(t){var r=t.enableSlices,i=t.points,n=t.width,a=t.height;return e.useMemo((function(){if(!1===r)return[];if("x"===r){var e=new Map;return i.forEach((function(t){null!==t.data.x&&null!==t.data.y&&(e.has(t.x)?e.get(t.x).push(t):e.set(t.x,[t]))})),Array.from(e.entries()).sort((function(e,t){return e[0]-t[0]})).map((function(e,t,r){var i,o=e[0],l=e[1],u=r[t-1],s=r[t+1];return{id:o,x0:i=u?o-(o-u[0])/2:o,x:o,y0:0,y:0,width:s?o-i+(s[0]-o)/2:n-i,height:a,points:l.reverse()}}))}if("y"===r){var t=new Map;return i.forEach((function(e){null!==e.data.x&&null!==e.data.y&&(t.has(e.y)?t.get(e.y).push(e):t.set(e.y,[e]))})),Array.from(t.entries()).sort((function(e,t){return e[0]-t[0]})).map((function(e,t,r){var i,o,l=e[0],u=e[1],s=r[t-1],d=r[t+1];return i=s?l-(l-s[0])/2:l,o=d?l-i+(d[0]-l)/2:a-i,{id:l,x0:0,x:0,y0:i,y:l,width:n,height:o,points:u.reverse()}}))}}),[r,i])},j=function(i){var n=i.data,a=i.xScale,o=void 0===a?q.xScale:a,u=i.xFormat,s=i.yScale,d=void 0===s?q.yScale:s,f=i.yFormat,c=i.width,p=i.height,y=i.colors,b=void 0===y?q.colors:y,m=i.curve,x=void 0===m?q.curve:m,g=i.areaBaselineValue,v=void 0===g?q.areaBaselineValue:g,C=i.pointColor,R=void 0===C?q.pointColor:C,S=i.pointBorderColor,j=void 0===S?q.pointBorderColor:S,k=i.enableSlices,w=void 0===k?q.enableSlicesTooltip:k;i.enableAreaBetween;var P=t.useValueFormatter(u),B=t.useValueFormatter(f),L=r.useOrdinalColorScale(b,"id"),W=t.useTheme(),G=r.useInheritedColor(R,W),E=r.useInheritedColor(j,W),F=e.useState([]),V=F[0],D=F[1],I=e.useMemo((function(){return l.computeXYScalesForSeries(n.filter((function(e){return-1===V.indexOf(e.id)})),o,d,c,p)}),[n,V,o,d,c,p]),A=I.xScale,H=I.yScale,Y=I.series,X=e.useMemo((function(){var e=n.map((function(e){return{id:e.id,label:e.id,color:L(e)}})),t=e.map((function(e){return h({},Y.find((function(t){return t.id===e.id})),{color:e.color})})).filter((function(e){return Boolean(e.id)}));return{legendData:e.map((function(e){return h({},e,{hidden:!t.find((function(t){return t.id===e.id}))})})).reverse(),series:t}}),[n,Y,L]),z=X.legendData,_=X.series,J=e.useCallback((function(e){D((function(t){return t.indexOf(e)>-1?t.filter((function(t){return t!==e})):[].concat(t,[e])}))}),[]),K=function(t){var r=t.series,i=t.getPointColor,n=t.getPointBorderColor,a=t.formatX,o=t.formatY;return e.useMemo((function(){return r.reduce((function(e,t){return[].concat(e,t.data.filter((function(e){return null!==e.position.x&&null!==e.position.y})).map((function(r,l){var u={id:t.id+"."+l,index:e.length+l,serieId:t.id,serieColor:t.color,x:r.position.x,y:r.position.y};return u.color=i(t),u.borderColor=n(u),u.data=h({},r.data,{xFormatted:a(r.data.x),yFormatted:o(r.data.y)}),u})))}),[])}),[r,i,n,a,o])}({series:_,getPointColor:G,getPointBorderColor:E,formatX:P,formatY:B}),N=M({enableSlices:w,points:K,width:c,height:p});return{legendData:z,toggleSerie:J,lineGenerator:T({curve:x}),areaGenerator:O({curve:x,yScale:H,areaBaselineValue:v}),getColor:L,series:_,xScale:A,yScale:H,slices:N,points:K}},k=function(e){var r=e.areaBlendMode,i=e.areaOpacity,n=e.color,a=e.fill,o=e.path,l=t.useMotionConfig(),u=l.animate,f=l.config,c=t.useAnimatedPath(o),p=d.useSpring({color:n,config:f,immediate:!u});return s.jsx(d.animated.path,{d:c,fill:a||p.color,fillOpacity:i,strokeWidth:0,style:{mixBlendMode:r}})};k.propTypes={areaBlendMode:t.blendModePropType.isRequired,areaOpacity:p.default.number.isRequired,color:p.default.string,fill:p.default.string,path:p.default.string.isRequired};var w=function(e){var t=e.areaGenerator,r=e.areaOpacity,i=e.areaBlendMode,n=e.lines.slice(0).reverse();return s.jsx("g",{children:n.map((function(e){return s.jsx(k,h({path:t(e.data.map((function(e){return e.position})))},h({areaOpacity:r,areaBlendMode:i},e)),e.id)}))})};w.propTypes={areaGenerator:p.default.func.isRequired,areaOpacity:p.default.number.isRequired,areaBlendMode:t.blendModePropType.isRequired,lines:p.default.arrayOf(p.default.object).isRequired};var P=e.memo(w),B=function(r){var i=r.lineGenerator,n=r.points,a=r.color,o=r.thickness,l=e.useMemo((function(){return i(n)}),[i,n]),u=t.useAnimatedPath(l);return s.jsx(d.animated.path,{d:u,fill:"none",strokeWidth:o,stroke:a})};B.propTypes={points:p.default.arrayOf(p.default.shape({x:p.default.oneOfType([p.default.string,p.default.number]),y:p.default.oneOfType([p.default.string,p.default.number])})),lineGenerator:p.default.func.isRequired,color:p.default.string.isRequired,thickness:p.default.number.isRequired};var L=e.memo(B),W=function(e){var t=e.lines,r=e.lineGenerator,i=e.lineWidth;return t.slice(0).reverse().map((function(e){var t=e.id,n=e.data,a=e.color;return s.jsx(L,{id:t,points:n.map((function(e){return e.position})),lineGenerator:r,color:a,thickness:i},t)}))};W.propTypes={lines:p.default.arrayOf(p.default.shape({id:p.default.oneOfType([p.default.string,p.default.number]).isRequired,color:p.default.string.isRequired,data:p.default.arrayOf(p.default.shape({data:p.default.shape({x:p.default.oneOfType([p.default.string,p.default.number,p.default.instanceOf(Date)]),y:p.default.oneOfType([p.default.string,p.default.number,p.default.instanceOf(Date)])}).isRequired,position:p.default.shape({x:p.default.number,y:p.default.number}).isRequired})).isRequired})).isRequired,lineWidth:p.default.number.isRequired,lineGenerator:p.default.func.isRequired};var G=e.memo(W),E=function(t){var r=t.slice,i=t.axis,n=t.debug,o=t.tooltip,l=t.isCurrent,u=t.currentlyHovered,d=t.setSliceId,f=t.current,c=t.setCurrent,p=t.setCurrentlyHovered,h=t.height,y=t.onClick,b=a.useTooltip(),m=b.showTooltipFromEvent,x=b.showTooltipAt,g=b.hideTooltip,v=e.useCallback((function(){l&&x(e.createElement(o,{slice:r,axis:i}),[r.x,h/2],"top")}),[r,l,u,x,o]);e.useEffect((function(){null===f&&g()}),[f,g]),e.useEffect((function(){v()}),[v]);var C=e.useCallback((function(t){x(e.createElement(o,{slice:r,axis:i}),[r.x,h/2],"top"),p(!0),d&&d(r.id),c(r),onMouseEnter&&onMouseEnter(r,t)}),[m,o,r,onMouseEnter]),R=e.useCallback((function(){g(),d&&d(null),p(!1),c(null)}),[g,d,p]),q=e.useCallback((function(e){y&&y(r,e)}),[y]);return s.jsx("rect",{x:r.x0,y:r.y0,width:r.width,height:r.height,stroke:"red",strokeWidth:n?1:0,strokeOpacity:.75,fill:"red",fillOpacity:l&&n?.35:0,onMouseEnter:C,onMouseLeave:R,onClick:q})};E.propTypes={slice:p.default.object.isRequired,axis:p.default.oneOf(["x","y"]).isRequired,debug:p.default.bool.isRequired,height:p.default.number.isRequired,tooltip:p.default.oneOfType([p.default.func,p.default.object]),isCurrent:p.default.bool.isRequired,setCurrent:p.default.func.isRequired,onMouseEnter:p.default.func,onMouseMove:p.default.func,onMouseLeave:p.default.func,onClick:p.default.func};var F=e.memo(E),V=function(e){var t=e.slices,r=e.axis,i=e.debug,n=e.height,a=e.tooltip,o=e.current,l=e.setCurrent,u=e.setSliceId,d=e.setCurrentlyHovered,f=e.currentlyHovered,c=e.onClick;return t.map((function(e){return s.jsx(F,{slice:e,axis:r,debug:i,height:n,tooltip:a,setCurrent:l,isCurrent:null!==o&&o.id===e.id,setSliceId:u,currentlyHovered:f,setCurrentlyHovered:d,current:o,onClick:c},e.id)}))};V.propTypes={slices:p.default.arrayOf(p.default.shape({id:p.default.oneOfType([p.default.number,p.default.string,p.default.instanceOf(Date)]).isRequired,x:p.default.number.isRequired,y:p.default.number.isRequired,points:p.default.arrayOf(p.default.object).isRequired})).isRequired,axis:p.default.oneOf(["x","y"]).isRequired,debug:p.default.bool.isRequired,height:p.default.number.isRequired,tooltip:p.default.oneOfType([p.default.func,p.default.object]).isRequired,current:p.default.object,setCurrent:p.default.func.isRequired,onMouseEnter:p.default.func,onMouseMove:p.default.func,onMouseLeave:p.default.func,onClick:p.default.func};var D=e.memo(V),I=function(e){var r=e.points,i=e.symbol,n=e.size,a=e.borderWidth,o=e.enableLabel,l=e.label,u=e.labelYOffset,d=t.useTheme(),f=t.getLabelGenerator(l),c=r.slice(0).reverse().map((function(e){return{id:e.id,x:e.x,y:e.y,datum:e.data,fill:e.color,stroke:e.borderColor,label:o?f(e.data):null}}));return s.jsx("g",{children:c.map((function(e){return s.jsx(t.DotsItem,{x:e.x,y:e.y,datum:e.datum,symbol:i,size:n,color:e.fill,borderWidth:a,borderColor:e.stroke,label:e.label,labelYOffset:u,theme:d},e.id)}))})};I.propTypes={points:p.default.arrayOf(p.default.object),symbol:p.default.func,size:p.default.number.isRequired,color:p.default.func.isRequired,borderWidth:p.default.number.isRequired,borderColor:p.default.func.isRequired,enableLabel:p.default.bool.isRequired,label:p.default.oneOfType([p.default.string,p.default.func]).isRequired,labelYOffset:p.default.number};var A=e.memo(I),H=function(t){var r=t.points,i=t.width,n=t.height,o=t.margin,l=t.setCurrent,u=t.onMouseEnter,d=t.onMouseMove,c=t.onMouseLeave,p=t.onClick,h=t.tooltip,y=t.debug,b=a.useTooltip(),m=b.showTooltipAt,x=b.hideTooltip,g=e.useCallback((function(t,r){m(e.createElement(h,{point:t}),[t.x+o.left,t.y+o.top],"top"),l(t),u&&u(t,r)}),[l,m,h,u,o]),v=e.useCallback((function(t,r){m(e.createElement(h,{point:t}),[t.x+o.left,t.y+o.top],"top"),l(t),d&&d(t,r)}),[l,m,h,d]),C=e.useCallback((function(e,t){x(),l(null),c&&c(e,t)}),[x,l,c]),R=e.useCallback((function(e,t){p&&p(e,t)}),[p]);return s.jsx(f.Mesh,{nodes:r,width:i,height:n,onMouseEnter:g,onMouseMove:v,onMouseLeave:C,onClick:R,debug:y})};H.propTypes={points:p.default.arrayOf(p.default.object).isRequired,width:p.default.number.isRequired,height:p.default.number.isRequired,margin:p.default.object.isRequired,setCurrent:p.default.func.isRequired,onMouseEnter:p.default.func,onMouseMove:p.default.func,onMouseLeave:p.default.func,onClick:p.default.func,tooltip:p.default.oneOfType([p.default.func,p.default.object]).isRequired,debug:p.default.bool.isRequired};var Y=e.memo(H),X=function(o){var l=o.data,u=o.xScale,d=o.xFormat,f=o.yScale,c=o.yFormat,p=o.layers,y=o.curve,b=o.areaBaselineValue,m=o.colors,x=o.margin,g=o.width,v=o.height,C=o.axisTop,R=o.axisRight,q=o.axisBottom,S=o.axisLeft,T=o.enableGridX,O=o.enableGridY,M=o.gridXValues,k=o.gridYValues,w=o.lineWidth,B=o.enableArea,L=o.enableAreaBetween,W=o.areaOpacity,E=o.areaBlendMode,F=o.enablePoints,V=o.pointSymbol,I=o.pointSize,H=o.pointColor,X=o.pointBorderWidth,z=o.pointBorderColor,_=o.enablePointLabel,J=o.pointLabel,K=o.pointLabelYOffset,N=o.defs,Q=o.fill,U=o.markers,Z=o.legends,$=o.isInteractive,ee=o.useMesh,te=o.debugMesh,re=o.onMouseEnter,ie=o.onMouseMove,ne=o.onMouseLeave,ae=o.onClick,oe=o.tooltip,le=o.sliceId,ue=o.setSliceId,se=o.enableSlices,de=o.debugSlices,fe=o.sliceTooltip,ce=o.enableCrosshair,pe=o.crosshairType,he=o.role,ye=t.useDimensions(g,v,x),be=ye.margin,me=ye.innerWidth,xe=ye.innerHeight,ge=ye.outerWidth,ve=ye.outerHeight,Ce=j({data:l,xScale:u,xFormat:d,yScale:f,yFormat:c,width:me,height:xe,colors:m,curve:y,areaBaselineValue:b,pointColor:H,pointBorderColor:z,enableSlices:se,enableAreaBetween:L}),Re=Ce.legendData,qe=Ce.toggleSerie,Se=Ce.lineGenerator,Te=Ce.areaGenerator,Oe=Ce.series,Me=Ce.xScale,je=Ce.yScale,ke=Ce.slices,we=Ce.points,Pe=t.useTheme(),Be=r.useInheritedColor(H,Pe),Le=r.useInheritedColor(z,Pe),We=e.useState(null),Ge=We[0],Ee=We[1],Fe=e.useState(null),Ve=Fe[0],De=Fe[1],Ie=e.useState(!1),Ae=Ie[0],He=Ie[1],Ye=e.useState({}),Xe=Ye[0],ze=Ye[1];e.useEffect((function(){if(ke){for(var e={},t=0;t<ke.length;t++)e[ke[t].id]=ke[t];ze(e)}}),[l,ke]),e.useEffect((function(){!Ae&&ue&&De(Xe[le]||null)}),[le,Xe]);var _e={grid:s.jsx(i.Grid,{theme:Pe,width:me,height:xe,xScale:T?Me:null,yScale:O?je:null,xValues:M,yValues:k},"grid"),markers:s.jsx(t.CartesianMarkers,{markers:U,width:me,height:xe,xScale:Me,yScale:je,theme:Pe},"markers"),axes:s.jsx(i.Axes,{xScale:Me,yScale:je,width:me,height:xe,theme:Pe,top:C,right:R,bottom:q,left:S},"axes"),areas:null,lines:s.jsx(G,{lines:Oe,lineGenerator:Se,lineWidth:w},"lines"),slices:null,points:null,crosshair:null,mesh:null,legends:Z.map((function(e,t){return s.jsx(n.BoxLegendSvg,h({},e,{containerWidth:me,containerHeight:xe,data:e.data||Re,theme:Pe,toggleSerie:e.toggleSerie?qe:void 0}),"legend."+t)}))},Je=t.bindDefs(N,Oe,Q);return B&&(_e.areas=s.jsx(P,{areaGenerator:Te,areaOpacity:W,areaBlendMode:E,lines:Oe},"areas")),$&&!1!==se&&(_e.slices=s.jsx(D,{slices:ke,axis:se,debug:de,height:xe,tooltip:fe,current:Ve,setCurrent:De,setCurrentlyHovered:He,setSliceId:ue,currentlyHovered:Ae,onClick:ae},"slices")),F&&(_e.points=s.jsx(A,{points:we,symbol:V,size:I,color:Be,borderWidth:X,borderColor:Le,enableLabel:_,label:J,labelYOffset:K},"points")),$&&ce&&(null!==Ge&&(_e.crosshair=s.jsx(a.Crosshair,{width:me,height:xe,x:Ge.x,y:Ge.y,type:pe},"crosshair")),null!==Ve&&(_e.crosshair=s.jsx(a.Crosshair,{width:me,height:xe,x:Ve.x,y:Ve.y,type:se},"crosshair"))),$&&ee&&!1===se&&(_e.mesh=s.jsx(Y,{points:we,width:me,height:xe,margin:be,current:Ge,setCurrent:Ee,onMouseEnter:re,onMouseMove:ie,onMouseLeave:ne,onClick:ae,tooltip:oe,debug:te},"mesh")),s.jsx(t.SvgWrapper,{defs:Je,width:ge,height:ve,margin:be,role:he,children:p.map((function(t,r){return"function"==typeof t?s.jsx(e.Fragment,{children:t(h({},o,{innerWidth:me,innerHeight:xe,series:Oe,slices:ke,points:we,xScale:Me,yScale:je,lineGenerator:Se,areaGenerator:Te,currentPoint:Ge,setCurrentPoint:Ee,currentSlice:Ve,setCurrentSlice:De}))},r):_e[t]}))})};X.propTypes=v,X.defaultProps=q;var z=t.withContainer(X),_=function(r){var o=r.width,l=r.height,u=r.margin,d=r.pixelRatio,c=r.data,p=r.xScale,y=r.xFormat,b=r.yScale,m=r.yFormat,x=r.curve,g=r.layers,v=r.colors,C=r.lineWidth,R=r.enableArea,q=r.areaBaselineValue,S=r.areaOpacity,T=r.enablePoints,O=r.pointSize,M=r.pointColor,k=r.pointBorderWidth,w=r.pointBorderColor,P=r.enableGridX,B=r.gridXValues,L=r.enableGridY,W=r.gridYValues,G=r.axisTop,E=r.axisRight,F=r.axisBottom,V=r.axisLeft,D=r.legends,I=r.isInteractive,A=r.debugMesh,H=r.onMouseLeave,Y=r.onClick,X=r.tooltip,z=r.canvasRef,_=e.useRef(null),J=t.useDimensions(o,l,u),K=J.margin,N=J.innerWidth,Q=J.innerHeight,U=J.outerWidth,Z=J.outerHeight,$=t.useTheme(),ee=e.useState(null),te=ee[0],re=ee[1],ie=j({data:c,xScale:p,xFormat:y,yScale:b,yFormat:m,width:N,height:Q,colors:v,curve:x,areaBaselineValue:q,pointColor:M,pointBorderColor:w}),ne=ie.lineGenerator,ae=ie.areaGenerator,oe=ie.series,le=ie.xScale,ue=ie.yScale,se=ie.points,de=f.useVoronoiMesh({points:se,width:N,height:Q,debug:A}),fe=de.delaunay,ce=de.voronoi;e.useEffect((function(){z&&(z.current=_.current),_.current.width=U*d,_.current.height=Z*d;var e=_.current.getContext("2d");e.scale(d,d),e.fillStyle=$.background,e.fillRect(0,0,U,Z),e.translate(K.left,K.top),g.forEach((function(t){if("function"==typeof t&&t({ctx:e,innerWidth:N,innerHeight:Q,series:oe,points:se,xScale:le,yScale:ue,lineWidth:C,lineGenerator:ne,areaGenerator:ae,currentPoint:te,setCurrentPoint:re}),"grid"===t&&$.grid.line.strokeWidth>0&&(e.lineWidth=$.grid.line.strokeWidth,e.strokeStyle=$.grid.line.stroke,P&&i.renderGridLinesToCanvas(e,{width:N,height:Q,scale:le,axis:"x",values:B}),L&&i.renderGridLinesToCanvas(e,{width:N,height:Q,scale:ue,axis:"y",values:W})),"axes"===t&&i.renderAxesToCanvas(e,{xScale:le,yScale:ue,width:N,height:Q,top:G,right:E,bottom:F,left:V,theme:$}),"areas"===t&&!0===R&&(e.save(),e.globalAlpha=S,ae.context(e),oe.forEach((function(t){e.fillStyle=t.color,e.beginPath(),ae(t.data.map((function(e){return e.position}))),e.fill()})),e.restore()),"lines"===t&&(ne.context(e),oe.forEach((function(t){e.strokeStyle=t.color,e.lineWidth=C,e.beginPath(),ne(t.data.map((function(e){return e.position}))),e.stroke()}))),"points"===t&&!0===T&&O>0&&se.forEach((function(t){e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,O/2,0,2*Math.PI),e.fill(),k>0&&(e.strokeStyle=t.borderColor,e.lineWidth=k,e.stroke())})),"mesh"===t&&!0===A&&(f.renderVoronoiToCanvas(e,ce),te&&f.renderVoronoiCellToCanvas(e,ce,te.index)),"legends"===t){var r=oe.map((function(e){return{id:e.id,label:e.id,color:e.color}})).reverse();D.forEach((function(t){n.renderLegendToCanvas(e,h({},t,{data:t.data||r,containerWidth:N,containerHeight:Q,theme:$}))}))}}))}),[_,U,Z,g,$,ne,oe,le,ue,P,B,L,W,G,E,F,V,D,se,T,O,te]);var pe=e.useCallback((function(e){var r=t.getRelativeCursor(_.current,e),i=r[0],n=r[1];if(!t.isCursorInRect(K.left,K.top,N,Q,i,n))return null;var a=fe.find(i-K.left,n-K.top);return se[a]}),[_,K,N,Q,fe]),he=a.useTooltip(),ye=he.showTooltipFromEvent,be=he.hideTooltip,me=e.useCallback((function(t){var r=pe(t);re(r),r?ye(e.createElement(X,{point:r}),t):be()}),[pe,re,ye,be,X]),xe=e.useCallback((function(e){be(),re(null),te&&H&&H(te,e)}),[be,re,H]),ge=e.useCallback((function(e){if(Y){var t=pe(e);t&&Y(t,e)}}),[pe,Y]);return s.jsx("canvas",{ref:_,width:U*d,height:Z*d,style:{width:U,height:Z,cursor:I?"auto":"normal"},onMouseEnter:I?me:void 0,onMouseMove:I?me:void 0,onMouseLeave:I?xe:void 0,onClick:I?ge:void 0})};_.propTypes=C,_.defaultProps=S;var J=t.withContainer(_),K=e.forwardRef((function(e,t){return s.jsx(J,h({},e,{canvasRef:t}))})),N=e.forwardRef((function(e,r){return s.jsx(t.ResponsiveWrapper,{children:function(t){var i=t.width,n=t.height;return s.jsx(K,h({width:i,height:n},e,{ref:r}))}})}));exports.Line=z,exports.LineCanvas=K,exports.LineCanvasDefaultProps=S,exports.LineCanvasPropTypes=C,exports.LineDefaultProps=q,exports.LinePropTypes=v,exports.ResponsiveLine=function(e){return s.jsx(t.ResponsiveWrapper,{children:function(t){var r=t.width,i=t.height;return s.jsx(z,h({width:r,height:i},e))}})},exports.ResponsiveLineCanvas=N,exports.useAreaGenerator=O,exports.useLine=j,exports.useLineGenerator=T,exports.useSlices=M;
//# sourceMappingURL=nivo-line.cjs.js.map
