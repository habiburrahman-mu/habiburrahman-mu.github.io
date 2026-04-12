import{a as qa,b as Wa}from"./chunk-OZQS62W2.js";import{a as Ga}from"./chunk-STGLLTNA.js";import{a as ja}from"./chunk-MBFSA2H6.js";import{a as at,b as nt,e as it,f as rt}from"./chunk-DHTNV3E7.js";import{a as Ha}from"./chunk-SUBYVWVJ.js";import{a as B,b as fe,c as Je,d as oa}from"./chunk-V5IQKSMG.js";import{a as Ca,b as xa,c as Ma}from"./chunk-EPU7FDGN.js";import{b as ce,c as le,d as ye}from"./chunk-QIOKYCEW.js";import{a as Ea,c as Ya,d as za}from"./chunk-U4YG42QM.js";import{c as ia}from"./chunk-FIZAQH43.js";import{a as Va,b as Pa,c as Oa,f as Fa,g as Ra,h as Ba,j as Na,m as La}from"./chunk-PAHOP4S3.js";import{h as Ia,j as xt,o as Mt,p as Ta}from"./chunk-7TRDHDJS.js";import{a as Da}from"./chunk-VBST6HQ2.js";import{a as ba,b as ga,c as fa,d as va,f as ka,g as ya}from"./chunk-HOMP45P4.js";import{a as ra}from"./chunk-3FM3HPBP.js";import{D as na,H as Ze,I as ve,c as kt,g as Jt,h as ea,m as ta,o as aa,p as se,s as X}from"./chunk-VGJ6BMAN.js";import{a as Sa}from"./chunk-UKH6OHYN.js";import{a as J,b as ca,c as tt,d as O,f as la,g as ma,l as pa,o as ua,p as Ct,s as ha,u as _a,v as wa,w as Aa}from"./chunk-RR5YSAIE.js";import{a as sa}from"./chunk-QB3KEDEQ.js";import{b as da}from"./chunk-L5B6BLOA.js";import{a as et,b as yt,c as Dt}from"./chunk-PGQCTYQG.js";import{a as De,b as Ce}from"./chunk-EFRUVU7P.js";import{C as de,D as Q,E as Xe,H as Re,I as ke,g as vt,l as $t,m as Qe,q as Qt,r as Xt,w as Zt}from"./chunk-MTQO3MRF.js";import{$a as Ve,Ac as ge,Bb as W,Cb as K,D as zt,Db as p,Eb as d,Fb as o,Fc as V,Gb as g,Hb as Y,Ib as z,Jb as Kt,Jc as f,Kc as Fe,M as je,Nb as H,Ob as U,Rb as u,Sb as Ut,T as G,Ta as c,Tb as b,U as me,Ub as ie,V as pe,Vb as re,Wb as We,X as Z,Xb as R,Y as Ht,Ya as Te,Yb as S,Z as m,Zb as E,a as N,bb as jt,bc as _e,ca as M,cb as Wt,cc as oe,da as w,dc as v,e as ee,ea as te,ec as be,fa as Ie,fc as l,ga as ue,gb as C,gc as I,ha as qt,hb as he,hc as x,ib as ne,ic as $,jc as Ke,ka as h,kc as Ue,l as qe,la as ae,lb as bt,lc as $e,mb as gt,nc as q,pa as _,rc as Pe,ta as j,tc as Oe,ua as Gt,wa as L,wb as A,x as Ge,xb as k,y as Yt,yb as y,yc as ft}from"./chunk-4QLBSWRV.js";import{a as Be}from"./chunk-OCK4WSQV.js";var yn=["mat-calendar-body",""];function Dn(i,r){return this._trackRow(r)}var en=(i,r)=>r.id;function Cn(i,r){if(i&1&&(Y(0,"tr",0)(1,"td",3),l(2),z()()),i&2){let e=b();c(),oe("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),A("colspan",e.numCols),c(),x(" ",e.label," ")}}function xn(i,r){if(i&1&&(Y(0,"td",3),l(1),z()),i&2){let e=b(2);oe("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),A("colspan",e._firstRowOffset),c(),x(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Mn(i,r){if(i&1){let e=H();Y(0,"td",6)(1,"button",7),Ut("click",function(a){let n=M(e).$implicit,s=b(2);return w(s._cellClicked(n,a))})("focus",function(a){let n=M(e).$implicit,s=b(2);return w(s._emitActiveDateChange(n,a))}),Y(2,"span",8),l(3),z(),Kt(4,"span",9),z()()}if(i&2){let e=r.$implicit,t=r.$index,a=b().$index,n=b();oe("width",n._cellWidth)("padding-top",n._cellPadding)("padding-bottom",n._cellPadding),A("data-mat-row",a)("data-mat-col",t),c(),be(e.cssClasses),v("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",n._isActiveCell(a,t))("mat-calendar-body-range-start",n._isRangeStart(e.compareValue))("mat-calendar-body-range-end",n._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",n._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",n._isComparisonBridgeStart(e.compareValue,a,t))("mat-calendar-body-comparison-bridge-end",n._isComparisonBridgeEnd(e.compareValue,a,t))("mat-calendar-body-comparison-start",n._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",n._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",n._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",n._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",n._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",n._isInPreview(e.compareValue)),U("tabIndex",n._isActiveCell(a,t)?0:-1),A("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",n._isSelected(e.compareValue))("aria-current",n.todayValue===e.compareValue?"date":null)("aria-describedby",n._getDescribedby(e.compareValue)),c(),v("mat-calendar-body-selected",n._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",n._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",n.todayValue===e.compareValue),c(),x(" ",e.displayValue," ")}}function wn(i,r){if(i&1&&(Y(0,"tr",1),k(1,xn,2,6,"td",4),W(2,Mn,5,49,"td",5,en),z()),i&2){let e=r.$implicit,t=r.$index,a=b();c(),y(t===0&&a._firstRowOffset?1:-1),c(),K(e)}}function An(i,r){if(i&1&&(d(0,"th",2)(1,"span",6),l(2),o(),d(3,"span",3),l(4),o()()),i&2){let e=r.$implicit;c(2),I(e.long),c(2),I(e.narrow)}}var Sn=["*"];function En(i,r){}function In(i,r){if(i&1){let e=H();d(0,"mat-month-view",4),$e("activeDateChange",function(a){M(e);let n=b();return Ue(n.activeDate,a)||(n.activeDate=a),w(a)}),u("_userSelection",function(a){M(e);let n=b();return w(n._dateSelected(a))})("dragStarted",function(a){M(e);let n=b();return w(n._dragStarted(a))})("dragEnded",function(a){M(e);let n=b();return w(n._dragEnded(a))}),o()}if(i&2){let e=b();Ke("activeDate",e.activeDate),p("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Tn(i,r){if(i&1){let e=H();d(0,"mat-year-view",5),$e("activeDateChange",function(a){M(e);let n=b();return Ue(n.activeDate,a)||(n.activeDate=a),w(a)}),u("monthSelected",function(a){M(e);let n=b();return w(n._monthSelectedInYearView(a))})("selectedChange",function(a){M(e);let n=b();return w(n._goToDateInView(a,"month"))}),o()}if(i&2){let e=b();Ke("activeDate",e.activeDate),p("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Vn(i,r){if(i&1){let e=H();d(0,"mat-multi-year-view",6),$e("activeDateChange",function(a){M(e);let n=b();return Ue(n.activeDate,a)||(n.activeDate=a),w(a)}),u("yearSelected",function(a){M(e);let n=b();return w(n._yearSelectedInMultiYearView(a))})("selectedChange",function(a){M(e);let n=b();return w(n._goToDateInView(a,"year"))}),o()}if(i&2){let e=b();Ke("activeDate",e.activeDate),p("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Pn(i,r){}var On=["button"],Fn=[[["","matDatepickerToggleIcon",""]]],Rn=["[matDatepickerToggleIcon]"];function Bn(i,r){i&1&&(te(),d(0,"svg",2),g(1,"path",3),o())}var Ee=(()=>{class i{changes=new ee;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=me({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Nn=0,Ye=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Nn++;cssClasses;constructor(r,e,t,a,n,s=r,D){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=s,this.rawValue=D,this.cssClasses=n instanceof Set?Array.from(n):n}},Ln={passive:!1,capture:!0},ot={passive:!0,capture:!0},Ka={passive:!0},Ae=(()=>{class i{_elementRef=m(L);_ngZone=m(ae);_platform=m(Zt);_intl=m(Ee);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new h;previewChange=new h;activeDateChange=new h;dragStarted=new h;dragEnded=new h;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=m(ue);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=m(Ve),t=m(X);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),m(Q).load(ve),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,n=[e.listen(a,"touchmove",this._touchmoveHandler,Ln),e.listen(a,"mouseenter",this._enterHandler,ot),e.listen(a,"focus",this._enterHandler,ot),e.listen(a,"mouseleave",this._leaveHandler,ot),e.listen(a,"blur",this._leaveHandler,ot),e.listen(a,"mousedown",this._mousedownHandler,Ka),e.listen(a,"touchstart",this._mousedownHandler,Ka)];this._platform.isBrowser&&n.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:n}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?n-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/n}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){Te(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return St(e,this.startValue,this.endValue)}_isRangeEnd(e){return Et(e,this.startValue,this.endValue)}_isInRange(e){return It(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return St(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let n=this.rows[t][a-1];if(!n){let s=this.rows[t-1];n=s&&s[s.length-1]}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let n=this.rows[t][a+1];if(!n){let s=this.rows[t+1];n=s&&s[0]}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return Et(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return It(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return St(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Et(e,this.previewStart,this.previewEnd)}_isInPreview(e){return It(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Ua(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),At(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=At(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Ua(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=At(e);if(t){let a=t.getAttribute("data-mat-row"),n=t.getAttribute("data-mat-col");if(a&&n)return this.rows[parseInt(a)]?.[parseInt(n)]||null}return null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[j],attrs:yn,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,a){t&1&&(k(0,Cn,3,6,"tr",0),W(1,wn,4,1,"tr",1,Dn,!0),Y(3,"span",2),l(4),z(),Y(5,"span",2),l(6),z(),Y(7,"span",2),l(8),z(),Y(9,"span",2),l(10),z()),t&2&&(y(a._firstRowOffset<a.labelMinRequiredCells?0:-1),c(),K(a.rows),c(2),U("id",a._startDateLabelId),c(),x(" ",a.startDateAccessibleName,`
`),c(),U("id",a._endDateLabelId),c(),x(" ",a.endDateAccessibleName,`
`),c(),U("id",a._comparisonStartDateLabelId),c(),$(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),c(),U("id",a._comparisonEndDateLabelId),c(),$(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function wt(i){return i?.nodeName==="TD"}function At(i){let r;return wt(i)?r=i:wt(i.parentNode)?r=i.parentNode:wt(i.parentNode?.parentNode)&&(r=i.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function St(i,r,e){return e!==null&&r!==e&&i<e&&i===r}function Et(i,r,e){return r!==null&&r!==e&&i>=r&&i===e}function It(i,r,e,t){return t&&r!==null&&e!==null&&r!==e&&i>=r&&i<=e}function Ua(i){let r=i.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var F=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}},ze=(()=>{class i{selection;_adapter;_selectionChanged=new ee;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){jt()};static \u0275prov=me({token:i,factory:i.\u0275fac})}return i})(),Yn=(()=>{class i extends ze{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||i)(Ht(B))};static \u0275prov=me({token:i,factory:i.\u0275fac})}return i})();var tn={provide:ze,useFactory:()=>m(ze,{optional:!0,skipSelf:!0})||new Yn(m(B))};var an=new Z("MAT_DATE_RANGE_SELECTION_STRATEGY");var Tt=7,zn=0,$a=(()=>{class i{_changeDetectorRef=m(V);_dateFormats=m(fe,{optional:!0});_dateAdapter=m(B,{optional:!0});_dir=m(Re,{optional:!0});_rangeStrategy=m(an,{optional:!0});_rerenderSubscription=N.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof F?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new h;_userSelection=new h;dragStarted=new h;dragEnded=new h;activeDateChange=new h;_matCalendarBody;_monthLabel=_("");_weeks=_([]);_firstWeekOffset=_(0);_rangeStart=_(null);_rangeEnd=_(null);_comparisonRangeStart=_(null);_comparisonRangeEnd=_(null);_previewStart=_(null);_previewEnd=_(null);_isRange=_(!1);_todayDate=_(null);_weekdays=_([]);constructor(){m(Q).load(Xe),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(je(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),n,s;this._selected instanceof F?(n=this._getDateInCurrentMonth(this._selected.start),s=this._getDateInCurrentMonth(this._selected.end)):n=s=this._getDateInCurrentMonth(this._selected),(n!==t||s!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!se(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Tt+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Tt),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,n=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&a){let s=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);s&&(this._previewStart.set(this._getCellCompareValue(s.start)),this._previewEnd.set(this._getCellCompareValue(s.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),n=this._dateAdapter.getDayOfWeekNames("long").map((s,D)=>({long:s,narrow:t[D],id:zn++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let n=0,s=this._firstWeekOffset();n<e;n++,s++){s==Tt&&(a.push([]),s=0);let D=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),fn=this._shouldEnableDate(D),vn=this._dateAdapter.format(D,this._dateFormats.display.dateA11yLabel),kn=this.dateClass?this.dateClass(D,"month"):void 0;a[a.length-1].push(new Ye(n+1,t[n],vn,fn,kn,this._getCellCompareValue(D),D))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(t,a,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof F?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-month-view"]],viewQuery:function(t,a){if(t&1&&R(Ae,5),t&2){let n;S(n=E())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[j],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,a){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),W(3,An,5,2,"th",2,en),o(),d(5,"tr",3),g(6,"th",4),o()(),d(7,"tbody",5),u("selectedValueChange",function(s){return a._dateSelected(s)})("activeDateChange",function(s){return a._updateActiveDate(s)})("previewChange",function(s){return a._previewChanged(s)})("dragStarted",function(s){return a.dragStarted.emit(s)})("dragEnded",function(s){return a._dragEnded(s)})("keyup",function(s){return a._handleCalendarBodyKeyup(s)})("keydown",function(s){return a._handleCalendarBodyKeydown(s)}),o()()),t&2&&(c(3),K(a._weekdays()),c(4),p("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName))},dependencies:[Ae],encapsulation:2,changeDetection:0})}return i})(),P=24,Vt=4,Qa=(()=>{class i{_changeDetectorRef=m(V);_dateAdapter=m(B,{optional:!0});_dir=m(Re,{optional:!0});_rerenderSubscription=N.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),nn(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof F?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new h;yearSelected=new h;activeDateChange=new h;_matCalendarBody;_years=_([]);_todayYear=_(0);_selectedYear=_(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(je(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Ne(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let n=0,s=[];n<P;n++)s.push(t+n),s.length==Vt&&(a.push(s.map(D=>this._createCellForYear(D))),s=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),n=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Vt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Vt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ne(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,P-Ne(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-P*10:-P);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?P*10:P);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Ne(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),n=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Ye(e,a,a,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof F){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&R(Ae,5),t&2){let n;S(n=E())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),g(3,"th",2),o()(),d(4,"tbody",3),u("selectedValueChange",function(s){return a._yearSelected(s)})("activeDateChange",function(s){return a._updateActiveDate(s)})("keyup",function(s){return a._handleCalendarBodyKeyup(s)})("keydown",function(s){return a._handleCalendarBodyKeydown(s)}),o()()),t&2&&(c(4),p("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()))},dependencies:[Ae],encapsulation:2,changeDetection:0})}return i})();function nn(i,r,e,t,a){let n=i.getYear(r),s=i.getYear(e),D=rn(i,t,a);return Math.floor((n-D)/P)===Math.floor((s-D)/P)}function Ne(i,r,e,t){let a=i.getYear(r);return Hn(a-rn(i,e,t),P)}function rn(i,r,e){let t=0;return e?t=i.getYear(e)-P+1:r&&(t=i.getYear(r)),t}function Hn(i,r){return(i%r+r)%r}var Xa=(()=>{class i{_changeDetectorRef=m(V);_dateFormats=m(fe,{optional:!0});_dateAdapter=m(B,{optional:!0});_dir=m(Re,{optional:!0});_rerenderSubscription=N.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof F?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new h;monthSelected=new h;activeDateChange=new h;_matCalendarBody;_months=_([]);_yearLabel=_("");_todayMonth=_(null);_selectedMonth=_(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(je(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let n=this._getDateFromMonth(t);this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),s=this.dateClass?this.dateClass(a,"year"):void 0;return new Ye(e,t.toLocaleUpperCase(),n,this._shouldEnableMonth(e),s)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let n=a;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>n}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<n}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof F?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&R(Ae,5),t&2){let n;S(n=E())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),g(3,"th",2),o()(),d(4,"tbody",3),u("selectedValueChange",function(s){return a._monthSelected(s)})("activeDateChange",function(s){return a._updateActiveDate(s)})("keyup",function(s){return a._handleCalendarBodyKeyup(s)})("keydown",function(s){return a._handleCalendarBodyKeydown(s)}),o()()),t&2&&(c(4),p("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)))},dependencies:[Ae],encapsulation:2,changeDetection:0})}return i})(),on=(()=>{class i{_intl=m(Ee);calendar=m(Pt);_dateAdapter=m(B,{optional:!0});_dateFormats=m(fe,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){m(Q).load(Xe);let e=m(V);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-P))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:P))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):nn(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Ne(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+P-1,n=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),s=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return[n,s]}_periodButtonLabelId=m(X).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Sn,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,a){t&1&&(ie(),d(0,"div",0)(1,"div",1)(2,"span",2),l(3),o(),d(4,"button",3),u("click",function(){return a.currentPeriodClicked()}),d(5,"span",4),l(6),o(),te(),d(7,"svg",5),g(8,"polygon",6),o()(),Ie(),g(9,"div",7),re(10),d(11,"button",8),u("click",function(){return a.previousClicked()}),te(),d(12,"svg",9),g(13,"path",10),o()(),Ie(),d(14,"button",11),u("click",function(){return a.nextClicked()}),te(),d(15,"svg",9),g(16,"path",12),o()()()()),t&2&&(c(2),p("id",a._periodButtonLabelId),c(),I(a.periodButtonDescription),c(),A("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),c(2),I(a.periodButtonText),c(),v("mat-calendar-invert",a.calendar.currentView!=="month"),c(4),p("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),A("aria-label",a.prevButtonLabel),c(3),p("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),A("aria-label",a.nextButtonLabel))},dependencies:[le,ce,qa],encapsulation:2,changeDetection:0})}return i})(),Pt=(()=>{class i{_dateAdapter=m(B,{optional:!0});_dateFormats=m(fe,{optional:!0});_changeDetectorRef=m(V);_elementRef=m(L);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof F?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new h;yearSelected=new h;monthSelected=new h;viewChanged=new h(!0);_userSelection=new h;_userDragDrop=new h;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new ee;constructor(){this._intlChanges=m(Ee).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new xt(this.headerComponent||on),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=t||a||e.dateFilter;if(n&&!n.firstChange){let s=this._getCurrentViewComponent();s&&(this._elementRef.nativeElement.contains(kt())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),s._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof F||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-calendar"]],viewQuery:function(t,a){if(t&1&&R($a,5)(Xa,5)(Qa,5),t&2){let n;S(n=E())&&(a.monthView=n.first),S(n=E())&&(a.yearView=n.first),S(n=E())&&(a.multiYearView=n.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[q([tn]),j],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,a){if(t&1&&(gt(0,En,0,0,"ng-template",0),d(1,"div",1),k(2,In,1,11,"mat-month-view",2)(3,Tn,1,6,"mat-year-view",3)(4,Vn,1,6,"mat-multi-year-view",3),o()),t&2){let n;p("cdkPortalOutlet",a._calendarHeaderPortal),c(2),y((n=a.currentView)==="month"?2:n==="year"?3:n==="multi-year"?4:-1)}},dependencies:[Mt,ea,$a,Xa,Qa],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),qn=new Z("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=m(ue);return()=>Pa(i)}}),dn=(()=>{class i{_elementRef=m(L);_animationsDisabled=de();_changeDetectorRef=m(V);_globalModel=m(ze);_dateAdapter=m(B);_ngZone=m(ae);_rangeSelectionStrategy=m(an,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new ee;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(m(Q).load(Xe),this._closeButtonText=m(Ee).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=m(Ve);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,n=t instanceof F;if(n&&this._rangeSelectionStrategy){let s=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(s,this)}else a&&(n||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(t,a){if(t&1&&R(Pt,5),t&2){let n;S(n=E())&&(a._calendar=n.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,a){t&2&&(be(a.color?"mat-"+a.color:""),v("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,a){t&1&&(d(0,"div",0)(1,"mat-calendar",1),u("yearSelected",function(s){return a.datepicker._selectYear(s)})("monthSelected",function(s){return a.datepicker._selectMonth(s)})("viewChanged",function(s){return a.datepicker._viewChanged(s)})("_userSelection",function(s){return a._handleUserSelection(s)})("_userDragDrop",function(s){return a._handleUserDragDrop(s)}),o(),gt(2,Pn,0,0,"ng-template",2),d(3,"button",3),u("focus",function(){return a._closeButtonFocused=!0})("blur",function(){return a._closeButtonFocused=!1})("click",function(){return a.datepicker.close()}),l(4),o()()),t&2&&(v("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),A("aria-modal",!0)("aria-labelledby",a._dialogLabelId??void 0),c(),be(a.datepicker.panelClass),p("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),c(),p("cdkPortalOutlet",a._actionsPortal),c(),v("cdk-visually-hidden",!a._closeButtonFocused),p("color",a.color||"primary"),c(),I(a._closeButtonText))},dependencies:[ta,Pt,Mt,le],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return i})(),Za=(()=>{class i{_injector=m(ue);_viewContainerRef=m(Wt);_dateAdapter=m(B,{optional:!0});_dir=m(Re,{optional:!0});_model=m(ze);_animationsDisabled=de();_scrollStrategy=m(qn);_inputStateChanges=N.EMPTY;_document=m(qt);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new h;monthSelected=new h;viewChanged=new h(!0);dateClass;openedStream=new h;closedStream=new h;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=na(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=m(X).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new ee;_changeDetectorRef=m(V);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof Ra&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=kt(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:n}=this._componentRef;a._animationDone.pipe(zt(1)).subscribe(()=>{let s=this._document.activeElement;e&&(!s||s===this._document.activeElement||n.nativeElement.contains(s))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new xt(dn,this._viewContainerRef),a=this._overlayRef=Na(this._injector,new Oa({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Va(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(n=>{n&&n.preventDefault(),this.close()}),a.keydownEvents().subscribe(n=>{let s=n.keyCode;(s===38||s===40||s===37||s===39||s===33||s===34)&&n.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||Te(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Ba(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Fa(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",n=this.yPosition==="above"?"bottom":"top",s=n==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:s,overlayX:t,overlayY:n},{originX:t,originY:n,overlayX:t,overlayY:s},{originX:a,originY:s,overlayX:a,overlayY:n},{originX:a,originY:n,overlayX:a,overlayY:s}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return Ge(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Yt(a=>a.keyCode===27&&!se(a)||this.datepickerInput&&se(a,"altKey")&&a.keyCode===38&&t.every(n=>!se(a,n)))))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ne({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",f],disabled:[2,"disabled","disabled",f],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",f],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",f]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[j]})}return i})(),sn=(()=>{class i extends Za{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Gt(i)))(a||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[q([tn,{provide:Za,useExisting:i}]),bt],decls:0,vars:0,template:function(t,a){},encapsulation:2,changeDetection:0})}return i})(),xe=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}},Gn=(()=>{class i{_elementRef=m(L);_dateAdapter=m(B,{optional:!0});_dateFormats=m(fe,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new h;dateInput=new h;stateChanges=new ee;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=N.EMPTY;_localeSubscription=N.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new xe(this,this._elementRef.nativeElement)),this.dateChange.emit(new xe(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){jn(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];se(e,"altKey")&&e.keyCode===40&&t.every(n=>!se(e,n))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,n=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(n),n=this._dateAdapter.getValidDateOrNull(n);let s=!this._dateAdapter.sameDate(n,this.value);!n||s?this._cvaOnChange(n):(t&&!this.value&&this._cvaOnChange(n),a!==this._lastValueValid&&this._validatorOnChange()),s&&(this._assignValue(n),this.dateInput.emit(new xe(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new xe(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ne({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",f]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[j]})}return i})();function jn(i,r){let e=Object.keys(i);for(let t of e){let{previousValue:a,currentValue:n}=i[t];if(r.isDateInstance(a)&&r.isDateInstance(n)){if(!r.sameDate(a,n))return!0}else return!0}return!1}var Wn={provide:J,useExisting:G(()=>mt),multi:!0},Kn={provide:tt,useExisting:G(()=>mt),multi:!0},mt=(()=>{class i extends Gn{_formField=m(ka,{optional:!0});_closedSubscription=N.EMPTY;_openedSubscription=N.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=_(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=O.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ne({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&u("input",function(s){return a._onInput(s)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(s){return a._onKeydown(s)}),t&2&&(U("disabled",a.disabled),A("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[q([Wn,Kn,{provide:Ca,useExisting:i}]),bt]})}return i})(),Un=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=ne({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),Rt=(()=>{class i{_intl=m(Ee);_changeDetectorRef=m(V);_stateChanges=N.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=m(new ge("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:qe(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:qe(),a=this.datepicker?Ge(this.datepicker.openedStream,this.datepicker.closedStream):qe();this._stateChanges.unsubscribe(),this._stateChanges=Ge(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,a,n){if(t&1&&We(n,Un,5),t&2){let s;S(s=E())&&(a._customIcon=s.first)}},viewQuery:function(t,a){if(t&1&&R(On,5),t&2){let n;S(n=E())&&(a._button=n.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,a){t&1&&u("click",function(s){return a._open(s)}),t&2&&(A("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),v("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",f],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[j],ngContentSelectors:Rn,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,a){t&1&&(ie(Fn),d(0,"button",1,0),k(2,Bn,2,0,":svg:svg",2),re(3),o()),t&2&&(p("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),A("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),c(2),y(a._customIcon?-1:2))},dependencies:[ce],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=he({type:i});static \u0275inj=pe({providers:[Ee],imports:[ye,La,aa,Ta,dn,Rt,on,ke,Ia]})}return i})();var pt=class i{_http=m(Xt);getBookings(r){let e=new Qt;if(r&&(r.roomId&&(e=e.set("roomId",r.roomId)),r.date&&(e=e.set("date",r.date)),r.startDate&&(e=e.set("startDate",r.startDate)),r.endDate&&(e=e.set("endDate",r.endDate)),r.department&&(e=e.set("department",r.department)),r.myBookingsOnly&&(e=e.set("myBookingsOnly","true")),r.status!==void 0)){let t=r.status==="booked"?0:1;e=e.set("status",t.toString())}return this._http.get(Be.Bookings.GetAll,{params:e})}getBookingById(r){return this._http.get(Be.Bookings.GetById(r))}createBooking(r){return this._http.post(Be.Bookings.Create,r)}cancelBooking(r){return this._http.put(Be.Bookings.Cancel(r),{})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=me({token:i,factory:i.\u0275fac,providedIn:"root"})};var Qn=["input"],Xn=["formField"],Zn=["*"],ut=class{source;value;constructor(r,e){this.source=r,this.value=e}},Jn={provide:J,useExisting:G(()=>Bt),multi:!0},ln=new Z("MatRadioGroup"),ei=new Z("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),Bt=(()=>{class i{_changeDetector=m(V);_value=null;_name=m(X).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new h;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ut(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ne({type:i,selectors:[["mat-radio-group"]],contentQueries:function(t,a,n){if(t&1&&We(n,ht,5),t&2){let s;S(s=E())&&(a._radios=s)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",f],required:[2,"required","required",f],disabledInteractive:[2,"disabledInteractive","disabledInteractive",f]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[q([Jn,{provide:ln,useExisting:i}])]})}return i})(),ht=(()=>{class i{_elementRef=m(L);_changeDetector=m(V);_focusMonitor=m(Jt);_radioDispatcher=m(Ea);_defaultOptions=m(ei,{optional:!0});_ngZone=m(ae);_renderer=m(Ve);_uniqueId=m(X).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new h;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=de();_injector=m(ue);constructor(){m(Q).load(ve);let e=m(ln,{optional:!0}),t=m(new ge("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=Fe(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ut(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let a=this._inputElement?.nativeElement;a&&(a.setAttribute("tabindex",t+""),this._previousTabIndex=t,Te(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===a&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-radio-button"]],viewQuery:function(t,a){if(t&1&&R(Qn,5)(Xn,7,L),t&2){let n;S(n=E())&&(a._inputElement=n.first),S(n=E())&&(a._rippleTrigger=n.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,a){t&1&&u("focus",function(){return a._inputElement.nativeElement.focus()}),t&2&&(A("id",a.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),v("mat-primary",a.color==="primary")("mat-accent",a.color==="accent")("mat-warn",a.color==="warn")("mat-mdc-radio-checked",a.checked)("mat-mdc-radio-disabled",a.disabled)("mat-mdc-radio-disabled-interactive",a.disabledInteractive)("_mat-animation-noopable",a._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",f],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Fe(e)],checked:[2,"checked","checked",f],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",f],required:[2,"required","required",f],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",f]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Zn,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,a){t&1&&(ie(),d(0,"div",2,0)(2,"div",3)(3,"div",4),u("click",function(s){return a._onTouchTargetClick(s)}),o(),d(4,"input",5,1),u("change",function(s){return a._onInputInteraction(s)}),o(),d(6,"div",6),g(7,"div",7)(8,"div",8),o(),d(9,"div",9),g(10,"div",10),o()(),d(11,"label",11),re(12),o()()),t&2&&(p("labelPosition",a.labelPosition),c(2),v("mdc-radio--disabled",a.disabled),c(2),p("id",a.inputId)("checked",a.checked)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),A("name",a.name)("value",a.value)("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),c(5),p("matRippleTrigger",a._rippleTrigger.nativeElement)("matRippleDisabled",a._isRippleDisabled())("matRippleCentered",!0),c(2),p("for",a.inputId))},dependencies:[Ze,Je],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),mn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=he({type:i});static \u0275inj=pe({imports:[ra,ht,ke]})}return i})();var ai=["input"],ni=["label"],ii=["*"],Nt={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},ri=new Z("mat-checkbox-default-options",{providedIn:"root",factory:()=>Nt}),T=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(T||{}),Lt=class{source;checked},oi=(()=>{class i{_elementRef=m(L);_changeDetectorRef=m(V);_ngZone=m(ae);_animationsDisabled=de();_options=m(ri,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Lt;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new h;indeterminateChange=new h;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=T.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){m(Q).load(ve);let e=m(new ge("tabindex"),{optional:!0});this._options=this._options||Nt,this.color=this._options.color||Nt.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=m(X).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(T.Indeterminate):this._transitionCheckState(this.checked?T.Checked:T.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=_(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,a=this._getAnimationTargetElement();if(!(t===e||!a)&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);let n=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(n)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?T.Checked:T.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case T.Init:if(t===T.Checked)return this._animationClasses.uncheckedToChecked;if(t==T.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case T.Unchecked:return t===T.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case T.Checked:return t===T.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case T.Indeterminate:return t===T.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,a){if(t&1&&R(ai,5)(ni,5),t&2){let n;S(n=E())&&(a._inputElement=n.first),S(n=E())&&(a._labelElement=n.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,a){t&2&&(U("id",a.id),A("tabindex",null)("aria-label",null)("aria-labelledby",null),be(a.color?"mat-"+a.color:"mat-accent"),v("_mat-animation-noopable",a._animationsDisabled)("mdc-checkbox--disabled",a.disabled)("mat-mdc-checkbox-disabled",a.disabled)("mat-mdc-checkbox-checked",a.checked)("mat-mdc-checkbox-disabled-interactive",a.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",f],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",f],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",f],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Fe(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",f],checked:[2,"checked","checked",f],disabled:[2,"disabled","disabled",f],indeterminate:[2,"indeterminate","indeterminate",f]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[q([{provide:J,useExisting:G(()=>i),multi:!0},{provide:tt,useExisting:i,multi:!0}]),j],ngContentSelectors:ii,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,a){if(t&1&&(ie(),d(0,"div",3),u("click",function(s){return a._preventBubblingFromLabel(s)}),d(1,"div",4,0)(3,"div",5),u("click",function(){return a._onTouchTargetClick()}),o(),d(4,"input",6,1),u("blur",function(){return a._onBlur()})("click",function(){return a._onInputClick()})("change",function(s){return a._onInteractionEvent(s)}),o(),g(6,"div",7),d(7,"div",8),te(),d(8,"svg",9),g(9,"path",10),o(),Ie(),g(10,"div",11),o(),g(11,"div",12),o(),d(12,"label",13,2),re(14),o()()),t&2){let n=_e(2);p("labelPosition",a.labelPosition),c(4),v("mdc-checkbox--selected",a.checked),p("checked",a.checked)("indeterminate",a.indeterminate)("disabled",a.disabled&&!a.disabledInteractive)("id",a.inputId)("required",a.required)("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex),A("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby)("aria-checked",a.indeterminate?"mixed":null)("aria-controls",a.ariaControls)("aria-disabled",a.disabled&&a.disabledInteractive?!0:null)("aria-expanded",a.ariaExpanded)("aria-owns",a.ariaOwns)("name",a.name)("value",a.value),c(7),p("matRippleTrigger",n)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),c(),p("for",a.inputId)}},dependencies:[Ze,Je],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),pn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=he({type:i});static \u0275inj=pe({imports:[oi,ke]})}return i})();var _t=class i{hour=_(9);minute=_(0);period=_("AM");disabled=_(!1);_onChange=()=>{};_onTouched=()=>{};get displayHour(){let r=this.hour();return(r===0?12:r>12?r-12:r).toString().padStart(2,"0")}get displayMinute(){return this.minute().toString().padStart(2,"0")}writeValue(r){if(r){let[e,t]=r.split(":").map(Number),a=isNaN(e)?9:Math.min(23,Math.max(0,e)),n=isNaN(t)?0:Math.min(59,Math.max(0,t));this.hour.set(a),this.minute.set(n),this.period.set(a<12?"AM":"PM")}}registerOnChange(r){this._onChange=r}registerOnTouched(r){this._onTouched=r}setDisabledState(r){this.disabled.set(r)}incHour(){let r=this.hour(),e=this.period()==="PM",a=(r===0?12:r>12?r-12:r)+1;a>12&&(a=1,this.period.set(e?"AM":"PM")),this.hour.set(this._convert12to24(a,this.period())),this._emit()}decHour(){let r=this.hour(),e=this.period()==="PM",a=(r===0?12:r>12?r-12:r)-1;a<1&&(a=12,this.period.set(e?"AM":"PM")),this.hour.set(this._convert12to24(a,this.period())),this._emit()}togglePeriod(){this.period.set(this.period()==="AM"?"PM":"AM");let r=this.hour()===0?12:this.hour()>12?this.hour()-12:this.hour();this.hour.set(this._convert12to24(r,this.period())),this._emit()}_convert12to24(r,e){return r===12?e==="AM"?0:12:e==="AM"?r:r+12}incMinute(){let r=this.minute()+15;if(r>=60){this.minute.set(0),this.incHour();return}this.minute.set(r),this._emit()}decMinute(){let r=this.minute()-15;if(r<0){this.minute.set(45),this.decHour();return}this.minute.set(r),this._emit()}onSegmentFocus(r){r.target.select()}onHourKey(r){r.key==="ArrowUp"&&(r.preventDefault(),this.incHour()),r.key==="ArrowDown"&&(r.preventDefault(),this.decHour())}onMinuteKey(r){r.key==="ArrowUp"&&(r.preventDefault(),this.incMinuteByOne()),r.key==="ArrowDown"&&(r.preventDefault(),this.decMinuteByOne())}onHourInput(r){}onMinuteInput(r){}onHourBlur(r){let e=parseInt(r.target.value,10),t=isNaN(e)?1:Math.min(12,Math.max(1,e));this.hour.set(this._convert12to24(t,this.period())),this._emit()}onMinuteBlur(r){let e=parseInt(r.target.value,10);this.minute.set(isNaN(e)?0:Math.min(59,Math.max(0,e))),this._emit()}incMinuteByOne(){let r=this.minute()+1;r>=60?(this.minute.set(0),this.hour.set((this.hour()+1)%24)):this.minute.set(r),this._emit()}decMinuteByOne(){let r=this.minute()-1;r<0?(this.minute.set(59),this.hour.set((this.hour()+23)%24)):this.minute.set(r),this._emit()}_emit(){let r=this.hour().toString().padStart(2,"0");this._onChange(`${r}:${this.displayMinute}`),this._onTouched()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["bs-time-picker"]],features:[q([{provide:J,useExisting:G(()=>i),multi:!0}])],decls:22,vars:14,consts:[[1,"time-picker"],[1,"time-segment"],["type","button",1,"arrow-btn",3,"click","disabled"],["type","text","inputmode","numeric","maxlength","2",1,"time-input",3,"focus","blur","keydown","input","value","disabled"],[1,"time-colon"],[1,"time-period-selector"],["type","button",1,"period-btn",3,"click","disabled"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"button",2),u("click",function(){return t.incHour()}),d(3,"mat-icon"),l(4,"keyboard_arrow_up"),o()(),d(5,"input",3),u("focus",function(n){return t.onSegmentFocus(n)})("blur",function(n){return t.onHourBlur(n)})("keydown",function(n){return t.onHourKey(n)})("input",function(n){return t.onHourInput(n)}),o(),d(6,"button",2),u("click",function(){return t.decHour()}),d(7,"mat-icon"),l(8,"keyboard_arrow_down"),o()()(),d(9,"div",4),l(10,":"),o(),d(11,"div",1)(12,"button",2),u("click",function(){return t.incMinute()}),d(13,"mat-icon"),l(14,"keyboard_arrow_up"),o()(),d(15,"input",3),u("focus",function(n){return t.onSegmentFocus(n)})("blur",function(n){return t.onMinuteBlur(n)})("keydown",function(n){return t.onMinuteKey(n)})("input",function(n){return t.onMinuteInput(n)}),o(),d(16,"button",2),u("click",function(){return t.decMinute()}),d(17,"mat-icon"),l(18,"keyboard_arrow_down"),o()()(),d(19,"div",5)(20,"button",6),u("click",function(){return t.togglePeriod()}),l(21),o()()()),e&2&&(v("disabled",t.disabled()),c(2),p("disabled",t.disabled()),c(3),p("value",t.displayHour)("disabled",t.disabled()),c(),p("disabled",t.disabled()),c(6),p("disabled",t.disabled()),c(3),p("value",t.displayMinute)("disabled",t.disabled()),c(),p("disabled",t.disabled()),c(4),v("period-btn--active",t.period()==="AM"),p("disabled",t.disabled()),c(),x(" ",t.period()," "))},dependencies:[Ce,De],styles:["[_nghost-%COMP%]{display:block;width:100%}.time-picker[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:4px;padding:8px 16px;border:1.5px solid #e2e8f0;border-radius:10px;background:#fff;transition:border-color .15s;width:100%;box-sizing:border-box}.time-picker[_ngcontent-%COMP%]:hover{border-color:#a5b4fc}.time-picker.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.time-segment[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;flex:1}.arrow-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:28px;height:24px;border:none;background:transparent;border-radius:6px;color:#94a3b8;cursor:pointer;padding:0;transition:color .15s,background .15s}.arrow-btn[_ngcontent-%COMP%]:hover:not(:disabled){color:#1976d2;background:#eff6ff}.arrow-btn[_ngcontent-%COMP%]:disabled{opacity:.3;cursor:default}.arrow-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.time-input[_ngcontent-%COMP%]{font-size:24px;font-weight:700;line-height:1;color:#1e293b;width:44px;text-align:center;padding:4px 0;border:none;outline:none;background:transparent;font-family:inherit;cursor:text}.time-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .time-input[_ngcontent-%COMP%]::-webkit-outer-spin-button{display:none}.time-input[_ngcontent-%COMP%]:focus{color:#1976d2}.time-colon[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#cbd5e1;padding:0 2px;align-self:center;line-height:1;margin-top:4px}.time-period-selector[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:8px}.period-btn[_ngcontent-%COMP%]{font-size:14px;font-weight:600;padding:6px 12px;border:1.5px solid #e2e8f0;border-radius:6px;background:#f8fafc;color:#64748b;cursor:pointer;transition:all .15s;min-width:48px}.period-btn[_ngcontent-%COMP%]:hover:not(:disabled){border-color:#1976d2;background:#eff6ff;color:#1976d2}.period-btn--active[_ngcontent-%COMP%]{background:#1976d2;border-color:#1976d2;color:#fff;font-weight:700}.period-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:default}"],changeDetection:0})};var _n=(i,r)=>r.id,ci=(i,r)=>r.minutes,li=(i,r)=>r.value;function mi(i,r){if(i&1&&(d(0,"mat-option",17),l(1),o()),i&2){let e=r.$implicit;p("value",e.id),c(),$("",e.name," \u2014 ",e.location)}}function pi(i,r){i&1&&(d(0,"mat-option",18),l(1,"No rooms match"),o())}function ui(i,r){i&1&&(d(0,"mat-error"),l(1,"Please select a room"),o())}function hi(i,r){if(i&1&&(d(0,"mat-option",17),l(1),o()),i&2){let e=r.$implicit;p("value",e.name),c(),I(e.name)}}function _i(i,r){i&1&&(d(0,"mat-option",18),l(1,"No departments match"),o())}function bi(i,r){i&1&&(d(0,"mat-error"),l(1,"Please select a recurrence pattern"),o())}function gi(i,r){if(i&1){let e=H();d(0,"button",51),u("click",function(){let a=M(e).$implicit,n=b(3);return w(n.toggleDay(a.value))}),l(1),o()}if(i&2){let e=r.$implicit,t=b(3);v("day-chip--active",t.isDaySelected(e.value)),c(),x(" ",e.label," ")}}function fi(i,r){i&1&&(d(0,"mat-error",50),l(1,"Please select at least one day"),o())}function vi(i,r){if(i&1&&(d(0,"div",47)(1,"span",33),l(2,"Days of Week"),o(),d(3,"div",48),W(4,gi,2,3,"button",49,li),o(),k(6,fi,2,0,"mat-error",50),o()),i&2){let e=b(2);c(4),K(e.daysOfWeek),c(2),y(e.form.controls.recurrenceDaysOfWeek.hasError("noDay")&&e.form.controls.recurrenceDaysOfWeek.touched?6:-1)}}function ki(i,r){if(i&1&&(d(0,"mat-form-field",12)(1,"mat-label"),l(2,"Recurrence Pattern"),o(),d(3,"mat-select",46)(4,"mat-option",17),l(5,"Daily"),o(),d(6,"mat-option",17),l(7,"Weekly"),o()(),k(8,bi,2,0,"mat-error"),o(),k(9,vi,7,1,"div",47)),i&2){let e=b();c(4),p("value",e.RecurrencePattern.Daily),c(2),p("value",e.RecurrencePattern.Weekly),c(2),y(e.form.controls.recurrencePattern.hasError("required")&&e.form.controls.recurrencePattern.touched?8:-1),c(),y(e.isWeeklyRecurring?9:-1)}}function yi(i,r){if(i&1&&(d(0,"mat-form-field",12)(1,"mat-label"),l(2,"Date"),o(),g(3,"input",52)(4,"mat-datepicker-toggle",53)(5,"mat-datepicker",null,0),o()),i&2){let e=_e(6);c(3),p("matDatepicker",e),c(),p("for",e)}}function Di(i,r){if(i&1&&(d(0,"mat-form-field",21)(1,"mat-label"),l(2,"Start Date"),o(),g(3,"input",52)(4,"mat-datepicker-toggle",53)(5,"mat-datepicker",null,0),o(),d(7,"mat-form-field",21)(8,"mat-label"),l(9,"End Date"),o(),g(10,"input",54)(11,"mat-datepicker-toggle",53)(12,"mat-datepicker",null,1),o()),i&2){let e=_e(6),t=_e(13);c(3),p("matDatepicker",e),c(),p("for",e),c(6),p("matDatepicker",t),c(),p("for",t)}}function Ci(i,r){if(i&1){let e=H();d(0,"button",55),u("click",function(){let a=M(e).$implicit,n=b();return w(n.setDuration(a.minutes))}),l(1),o()}if(i&2){let e=r.$implicit;c(),x(" ",e.label," ")}}function xi(i,r){i&1&&g(0,"mat-spinner",44)}function Mi(i,r){i&1&&(d(0,"div",45)(1,"div")(2,"mat-icon"),l(3,"check"),o()(),d(4,"div"),l(5,"Book Room"),o()())}var bn=class i{_bookingService=m(pt);_roomService=m(Ga);_deptService=m(ja);_orgService=m(Sa);_orgStore=m(sa);_snackBar=m(Ha);_dialogRef=m(at);_fb=m(ha);_data=m(nt,{optional:!0});userStore=m(da);isLoading=_(!1);rooms=_([]);departments=_([]);roomSearch=_("");deptSearch=_("");filteredRooms=ft(()=>{let r=this.roomSearch().toLowerCase();return r?this.rooms().filter(e=>e.name.toLowerCase().includes(r)||e.location.toLowerCase().includes(r)):this.rooms()});filteredDepts=ft(()=>{let r=this.deptSearch().toLowerCase();return r?this.departments().filter(e=>e.name.toLowerCase().includes(r)):this.departments()});BookingType=et;RecurrencePattern=Dt;daysOfWeek=[{value:0,label:"Sun"},{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"}];_today=new Date;_defaultStart=this._roundToNext15(this._today);_defaultEnd=this._addMinutes(this._defaultStart,60);get _pre(){return this._data?.prefill}form=this._fb.group({roomId:[this._pre?.roomId??"",O.required],department:["",O.required],bookedByName:["",O.required],notes:[""],bookingType:["single",O.required],startDate:[this._pre?.startDate??this._today,O.required],endDate:[this._pre?.endDate??this._today,O.required],startTime:[this._pre?.startTime??this._defaultStart,O.required],endTime:[this._pre?.endTime??this._defaultEnd,O.required],recurrencePattern:[null],recurrenceDaysOfWeek:[[]]});durationPresets=[{label:"30 min",minutes:30},{label:"1 hr",minutes:60},{label:"2 hr",minutes:120},{label:"3 hr",minutes:180}];setDuration(r){let e=this.form.value.startTime??this._defaultStart;this.form.patchValue({endTime:this._addMinutes(e,r)})}_roundToNext15(r){let e=new Date(r),t=Math.ceil(e.getMinutes()/15)*15;return e.setMinutes(t%60),t===60&&e.setHours(e.getHours()+1),e.setSeconds(0,0),`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}_addMinutes(r,e){let[t,a]=r.split(":").map(Number),n=t*60+a+e;return`${(Math.floor(n/60)%24).toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`}get isRecurring(){return this.form.value.bookingType==="recurring"}get isWeeklyRecurring(){return this.isRecurring&&this.form.value.recurrencePattern==="weekly"}ngOnInit(){this._roomService.getRooms().subscribe(a=>this.rooms.set(a)),this._deptService.getDepartments().subscribe(a=>{this.departments.set(a);let n=this.userStore.currentUser();n&&this.form.patchValue({bookedByName:n.fullName});let s=this._orgStore.currentOrgId();s&&this._orgService.loadCurrentMember(s).subscribe(D=>{D?.departmentName&&this.form.patchValue({department:D.departmentName})})});let r=this.form.get("endDate"),e=this.form.get("recurrencePattern"),t=this.form.get("recurrenceDaysOfWeek");this.form.value.bookingType==="single"&&(r.setValue(this.form.value.startDate??null),r.disable()),this.form.get("bookingType").valueChanges.subscribe(a=>{a==="single"?(r.setValue(this.form.value.startDate??null),r.disable(),e.clearValidators(),t.clearValidators()):a==="recurring"?(r.enable(),e.setValidators(O.required),this._updateDaysValidator()):(r.enable(),e.clearValidators(),t.clearValidators()),e.updateValueAndValidity(),t.updateValueAndValidity()}),e.valueChanges.subscribe(()=>{this.form.value.bookingType==="recurring"&&this._updateDaysValidator()}),this.form.get("startDate").valueChanges.subscribe(a=>{this.form.value.bookingType==="single"&&r.setValue(a,{emitEvent:!1})}),this.form.get("startTime").valueChanges.subscribe(a=>{let n=this.form.value.endTime;a&&n&&this._timeToMinutes(n)<this._timeToMinutes(a)&&this.form.patchValue({endTime:a},{emitEvent:!1})}),this.form.get("endTime").valueChanges.subscribe(a=>{let n=this.form.value.startTime;n&&a&&this._timeToMinutes(a)<this._timeToMinutes(n)&&this.form.patchValue({endTime:n},{emitEvent:!1})})}_updateDaysValidator(){let r=this.form.get("recurrenceDaysOfWeek");this.form.value.recurrencePattern==="weekly"?r.setValidators(e=>{let t=e.value??[];return!Array.isArray(t)||t.length===0?{noDay:!0}:null}):r.clearValidators(),r.updateValueAndValidity({emitEvent:!1}),this.form.updateValueAndValidity()}toggleDay(r){let e=this.form.value.recurrenceDaysOfWeek??[],t=e.includes(r)?e.filter(a=>a!==r):[...e,r];this.form.patchValue({recurrenceDaysOfWeek:t}),this.form.get("recurrenceDaysOfWeek").updateValueAndValidity()}isDaySelected(r){return(this.form.value.recurrenceDaysOfWeek??[]).includes(r)}formatTime(r){let[e,t]=r.split(":").map(Number),a=e===0?12:e>12?e-12:e,n=e<12?"AM":"PM";return`${a}:${t.toString().padStart(2,"0")} ${n}`}onSubmit(){if(this.form.invalid)return;let r=this.form.getRawValue();if(!(!r.roomId||!r.department||!r.bookedByName||!r.startDate||!r.endDate||!r.startTime||!r.endTime||!r.bookingType)){if(r.bookingType==="recurring"&&r.recurrencePattern==="weekly"&&(!r.recurrenceDaysOfWeek||r.recurrenceDaysOfWeek.length===0)){this._snackBar.open("Please select at least one day for weekly recurrence","Close",{duration:3e3});return}this.isLoading.set(!0),this._bookingService.createBooking({roomId:r.roomId,department:r.department,bookedByName:r.bookedByName,notes:r.notes||void 0,bookingType:r.bookingType,startDate:vt(r.startDate,"yyyy-MM-dd","en-US"),endDate:vt(r.endDate,"yyyy-MM-dd","en-US"),startTime:r.startTime,endTime:r.endTime,recurrencePattern:r.recurrencePattern??void 0,recurrenceDaysOfWeek:r.recurrenceDaysOfWeek?.length?r.recurrenceDaysOfWeek:void 0}).subscribe({next:()=>{this.isLoading.set(!1),this._snackBar.open("Booking created successfully!","Close",{duration:3e3}),this._dialogRef.close(!0)},error:e=>{this.isLoading.set(!1);let t=e?.error?.detail??"Failed to create booking.";this._snackBar.open(t,"Close",{duration:5e3})}})}}onCancel(){this._dialogRef.close(!1)}_timeToMinutes(r){let[e,t]=r.split(":").map(Number);return isNaN(e)||isNaN(t)?0:e*60+t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["bs-booking-form"]],decls:105,vars:14,consts:[["startPicker",""],["endPicker",""],[1,"dialog-header"],[1,"dialog-header__icon"],[1,"dialog-header__title"],[1,"dialog-header__subtitle"],["mat-icon-button","",1,"dialog-header__close",3,"click"],[1,"dialog-body"],[3,"formGroup"],[1,"form-section"],[1,"section-label"],[1,"section-icon"],["appearance","outline",1,"field-full"],["formControlName","roomId",3,"openedChange"],["disabled","",1,"select-search-option"],[1,"select-search-icon"],["placeholder","Search rooms\u2026",1,"select-search-input",3,"click","keydown","input"],[3,"value"],["disabled",""],["matPrefix","",1,"field-prefix-icon"],[1,"field-row"],["appearance","outline",1,"flex-1"],["matInput","","formControlName","bookedByName"],["formControlName","department",3,"openedChange"],["placeholder","Search departments\u2026",1,"select-search-input",3,"click","keydown","input"],["matInput","","formControlName","notes","rows","2","placeholder","Any additional details\u2026"],[1,"booking-type-group"],["formControlName","bookingType",1,"booking-type-radio"],[1,"type-chip"],[1,"hidden-radio",3,"value"],[1,"time-section"],[1,"time-pickers"],[1,"time-picker-group"],[1,"time-picker-label"],["formControlName","startTime"],[1,"time-arrow"],["formControlName","endTime"],[1,"duration-presets"],[1,"duration-label"],[1,"duration-chips"],["type","button",1,"duration-chip"],[1,"dialog-footer"],["mat-stroked-button","",1,"btn-cancel",3,"click"],["mat-flat-button","",1,"btn-submit",3,"click","disabled"],["diameter","16"],[1,"submit-button"],["formControlName","recurrencePattern"],[1,"days-of-week"],[1,"day-chips"],["type","button",1,"day-chip",3,"day-chip--active"],[1,"days-error"],["type","button",1,"day-chip",3,"click"],["matInput","","formControlName","startDate","placeholder","MM/DD/YYYY",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","formControlName","endDate","placeholder","MM/DD/YYYY",3,"matDatepicker"],["type","button",1,"duration-chip",3,"click"]],template:function(e,t){e&1&&(d(0,"div",2)(1,"div",3)(2,"mat-icon"),l(3,"event_available"),o()(),d(4,"div")(5,"h2",4),l(6,"New Booking"),o(),d(7,"p",5),l(8,"Fill in the details to reserve a room"),o()(),d(9,"button",6),u("click",function(){return t.onCancel()}),d(10,"mat-icon"),l(11,"close"),o()()(),d(12,"mat-dialog-content",7)(13,"form",8)(14,"div",9)(15,"div",10)(16,"mat-icon",11),l(17,"meeting_room"),o(),l(18," Room & People "),o(),d(19,"mat-form-field",12)(20,"mat-label"),l(21,"Select Room"),o(),d(22,"mat-select",13),u("openedChange",function(n){return n&&t.roomSearch.set("")}),d(23,"mat-option",14)(24,"mat-icon",15),l(25,"search"),o(),d(26,"input",16),u("click",function(n){return n.stopPropagation()})("keydown",function(n){return n.stopPropagation()})("input",function(n){return t.roomSearch.set(n.target.value)}),o()(),W(27,mi,2,3,"mat-option",17,_n),k(29,pi,2,0,"mat-option",18),o(),d(30,"mat-icon",19),l(31,"meeting_room"),o(),k(32,ui,2,0,"mat-error"),o(),d(33,"div",20)(34,"mat-form-field",21)(35,"mat-label"),l(36,"Booked By"),o(),g(37,"input",22),d(38,"mat-icon",19),l(39,"person"),o()(),d(40,"mat-form-field",21)(41,"mat-label"),l(42,"Department"),o(),d(43,"mat-select",23),u("openedChange",function(n){return n&&t.deptSearch.set("")}),d(44,"mat-option",14)(45,"mat-icon",15),l(46,"search"),o(),d(47,"input",24),u("click",function(n){return n.stopPropagation()})("keydown",function(n){return n.stopPropagation()})("input",function(n){return t.deptSearch.set(n.target.value)}),o()(),W(48,hi,2,2,"mat-option",17,_n),k(50,_i,2,0,"mat-option",18),o(),d(51,"mat-icon",19),l(52,"business"),o()()(),d(53,"mat-form-field",12)(54,"mat-label"),l(55,"Notes (optional)"),o(),g(56,"textarea",25),d(57,"mat-icon",19),l(58,"notes"),o()()(),d(59,"div",9)(60,"div",10)(61,"mat-icon",11),l(62,"schedule"),o(),l(63," Schedule "),o(),d(64,"div",26)(65,"mat-radio-group",27)(66,"label",28),g(67,"mat-radio-button",29),d(68,"mat-icon"),l(69,"today"),o(),l(70," Single Day "),o(),d(71,"label",28),g(72,"mat-radio-button",29),d(73,"mat-icon"),l(74,"repeat"),o(),l(75," Recurring "),o()()(),k(76,ki,10,4),d(77,"div",20),k(78,yi,7,2,"mat-form-field",12)(79,Di,14,4),o(),d(80,"div",30)(81,"div",31)(82,"div",32)(83,"span",33),l(84,"Start Time"),o(),g(85,"bs-time-picker",34),o(),d(86,"div",35)(87,"mat-icon"),l(88,"arrow_forward"),o()(),d(89,"div",32)(90,"span",33),l(91,"End Time"),o(),g(92,"bs-time-picker",36),o()(),d(93,"div",37)(94,"span",38),l(95,"Quick duration"),o(),d(96,"div",39),W(97,Ci,2,1,"button",40,ci),o()()()()()(),d(99,"div",41)(100,"button",42),u("click",function(){return t.onCancel()}),l(101,"Cancel"),o(),d(102,"button",43),u("click",function(){return t.onSubmit()}),k(103,xi,1,0,"mat-spinner",44)(104,Mi,6,0,"div",45),o()()),e&2&&(c(13),p("formGroup",t.form),c(14),K(t.filteredRooms()),c(2),y(t.filteredRooms().length===0?29:-1),c(3),y(t.form.controls.roomId.hasError("required")&&t.form.controls.roomId.touched?32:-1),c(16),K(t.filteredDepts()),c(2),y(t.filteredDepts().length===0?50:-1),c(16),v("type-chip--active",t.form.value.bookingType===t.BookingType.Single),c(),p("value",t.BookingType.Single),c(4),v("type-chip--active",t.form.value.bookingType===t.BookingType.Recurring),c(),p("value",t.BookingType.Recurring),c(4),y(t.form.value.bookingType===t.BookingType.Recurring?76:-1),c(2),y(t.form.value.bookingType===t.BookingType.Single?78:79),c(19),K(t.durationPresets),c(5),p("disabled",t.isLoading()||t.form.invalid),c(),y(t.isLoading()?103:104))},dependencies:[Qe,_a,pa,ca,la,ma,Ct,ua,rt,it,ye,le,ce,Da,ya,ba,ga,fa,va,Ma,xa,Ce,De,za,Ya,ia,mn,Bt,ht,pn,Aa,wa,cn,sn,mt,Rt,oa,_t],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block}  .select-search-option{position:sticky!important;top:0;z-index:1;background:#fff!important;border-bottom:1px solid #e2e8f0;padding:6px 12px!important;cursor:default!important;opacity:1!important;pointer-events:auto!important}  .select-search-option .mat-option-text{display:flex;align-items:center;gap:6px}  .select-search-icon{font-size:16px!important;width:16px!important;height:16px!important;color:#94a3b8;flex-shrink:0}  .select-search-input{flex:1;border:none;outline:none;font-size:13px;color:#1e293b;background:transparent}  .select-search-input::placeholder{color:#94a3b8}.dialog-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;padding:20px 24px 16px;border-bottom:1px solid #f1f5f9}.dialog-header__icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#4f46e5,#6366f1);display:flex;align-items:center;justify-content:center;flex-shrink:0}.dialog-header__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:22px;width:22px;height:22px}.dialog-header__title[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#1e293b;margin:0;line-height:1.2}.dialog-header__subtitle[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;margin:2px 0 0}.dialog-header__close[_ngcontent-%COMP%]{margin-left:auto;color:#94a3b8!important;flex-shrink:0}  .mat-mdc-dialog-container .mdc-dialog__surface{border-radius:20px!important;overflow:hidden}  .mat-mdc-dialog-content{padding:0!important;margin:0!important}.dialog-body[_ngcontent-%COMP%]{padding:0 24px!important;max-height:65vh!important;overflow-y:auto}.dialog-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px}.dialog-body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.dialog-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#e2e8f0;border-radius:4px}.form-section[_ngcontent-%COMP%]{padding:18px 0;display:flex;flex-direction:column;gap:12px}.form-section[_ngcontent-%COMP%] + .form-section[_ngcontent-%COMP%]{border-top:1px solid #f1f5f9}.section-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#94a3b8;margin-bottom:2px}.section-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:#cbd5e1}.field-full[_ngcontent-%COMP%]{width:100%}.field-row[_ngcontent-%COMP%]{display:flex;gap:12px}.field-row[_ngcontent-%COMP%]   .flex-1[_ngcontent-%COMP%]{flex:1;min-width:0}.field-prefix-icon[_ngcontent-%COMP%]{font-size:18px!important;width:18px!important;height:18px!important;color:#94a3b8!important;margin-right:4px}  mat-form-field .mat-mdc-form-field-subscript-wrapper{display:none}.booking-type-radio[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}.type-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:10px;border:1.5px solid #e2e8f0;background:#f8fafc;font-size:13px;font-weight:500;color:#64748b;cursor:pointer;transition:all .15s;-webkit-user-select:none;user-select:none}.type-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.type-chip[_ngcontent-%COMP%]:hover{border-color:#a5b4fc;background:#eef2ff;color:#4f46e5}.type-chip--active[_ngcontent-%COMP%]{border-color:#4f46e5;background:#eef2ff;color:#4f46e5;font-weight:600}.type-chip--active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#4f46e5}.hidden-radio[_ngcontent-%COMP%]     .mdc-radio{display:none!important}.hidden-radio[_ngcontent-%COMP%]     .mdc-form-field{padding:0!important}.time-section[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:14px}.time-pickers[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.time-picker-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;flex:1}.time-picker-label[_ngcontent-%COMP%]{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8}.time-arrow[_ngcontent-%COMP%]{padding-top:20px;color:#cbd5e1}.time-arrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.duration-presets[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding-top:4px;border-top:1px solid #e2e8f0}.duration-label[_ngcontent-%COMP%]{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#cbd5e1}.duration-chips[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap}.duration-chip[_ngcontent-%COMP%]{height:28px;padding:0 12px;border-radius:14px;border:1.5px solid #c7d2fe;background:#fff;font-size:12px;font-weight:600;color:#4f46e5;cursor:pointer;transition:all .15s}.duration-chip[_ngcontent-%COMP%]:hover{background:#eef2ff;border-color:#4f46e5}.days-of-week[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.day-chips[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap}.day-chip[_ngcontent-%COMP%]{width:42px;height:38px;border-radius:8px;border:1.5px solid #e2e8f0;background:#f8fafc;font-size:12px;font-weight:600;color:#64748b;cursor:pointer;transition:all .15s}.day-chip[_ngcontent-%COMP%]:hover{border-color:#a5b4fc;color:#4f46e5;background:#eef2ff}.day-chip--active[_ngcontent-%COMP%]{border-color:#4f46e5;background:#4f46e5;color:#fff}.days-error[_ngcontent-%COMP%]{display:block!important;font-size:12px;color:#d32f2f;font-weight:500;margin-top:2px}.dialog-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;gap:10px;padding:16px 24px 20px;border-top:1px solid #f1f5f9}.btn-cancel[_ngcontent-%COMP%]{height:40px;padding:0 20px;border-radius:10px!important;color:#64748b!important;border-color:#e2e8f0!important;font-weight:500}.btn-submit[_ngcontent-%COMP%]{height:40px;min-width:130px;padding:0 24px;border-radius:10px!important;background:linear-gradient(135deg,#4f46e5,#6366f1)!important;color:#fff!important;font-weight:600;display:flex;align-items:center;justify-content:center;gap:6px}.btn-submit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.btn-submit[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{opacity:.8}.btn-submit[_ngcontent-%COMP%]:disabled{opacity:.5!important;background:#e2e8f0!important;color:#94a3b8!important}.submit-button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px}'],changeDetection:0})};function wi(i,r){if(i&1&&(d(0,"span",17),l(1),Pe(2,"date"),o()),i&2){let e=b();c(),x(" \u2192 ",Oe(2,1,e.booking.endDate,"EEE, MMM d, y"))}}function Ai(i,r){if(i&1&&(d(0,"span",19),l(1),o()),i&2){let e=b();c(),$("",e.recurrenceLabel,"",e.daysLabel?" \xB7 "+e.daysLabel:"")}}function Si(i,r){if(i&1&&(d(0,"div",29)(1,"mat-icon",33),l(2,"manage_accounts"),o(),d(3,"span"),l(4,"Taken by "),d(5,"strong"),l(6),o(),l(7),o()()),i&2){let e=b();c(6),$("",e.booking.userFullName," (@",e.booking.username,")"),c(),x(", ",e.booking.department)}}function Ei(i,r){if(i&1&&(d(0,"div",11)(1,"div",22)(2,"mat-icon"),l(3,"notes"),o(),l(4," Notes "),o(),d(5,"p",34),l(6),o()()),i&2){let e=b();c(6),I(e.booking.notes)}}function Ii(i,r){if(i&1){let e=H();d(0,"button",35),u("click",function(){M(e);let a=b();return w(a.close(!0))}),d(1,"mat-icon"),l(2,"cancel"),o(),l(3," Cancel Booking "),o()}}var gn=class i{_data=m(nt);booking=this._data.booking;canCancel=this._data.canCancel;headerBackground=this._data.headerBackground??"linear-gradient(135deg, #4f46e5, #6366f1)";_dialogRef=m(at);BookingStatus=yt;BookingType=et;get isBooked(){return this.booking.status==="booked"}get isPast(){return this.booking.endDate<new Date().toISOString().split("T")[0]}get isOnBehalf(){return this.booking.bookedByName.trim().toLowerCase()!==this.booking.userFullName.trim().toLowerCase()}get bookingTypeLabel(){switch(this.booking.bookingType){case"single":return"Single Day";case"dateRange":return"Date Range";case"recurring":return"Recurring"}}get recurrenceLabel(){if(!this.booking.recurrencePattern)return null;switch(this.booking.recurrencePattern){case"daily":return"Daily";case"weekly":return"Weekly"}}get daysLabel(){return this.booking.recurrenceDaysOfWeek?.length?this.booking.recurrenceDaysOfWeek.map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(", "):null}get duration(){let[r,e]=this.booking.startTime.split(":").map(Number),[t,a]=this.booking.endTime.split(":").map(Number),n=t*60+a-(r*60+e);if(n<60)return`${n} min`;let s=Math.floor(n/60),D=n%60;return D?`${s}h ${D}m`:`${s}h`}get initials(){return this.booking.bookedByName.split(" ").map(r=>r[0]).slice(0,2).join("").toUpperCase()}formatTime(r){let[e,t]=r.split(":").map(Number),a=e===0?12:e>12?e-12:e,n=e<12?"AM":"PM";return`${a}:${t.toString().padStart(2,"0")} ${n}`}close(r=!1){this._dialogRef.close(r?"cancel":null)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["bs-booking-detail"]],decls:86,vars:35,consts:[[1,"status-banner"],[1,"banner-icon"],[1,"banner-text"],["mat-icon-button","",1,"close-btn",3,"click"],[1,"room-hero"],[1,"room-hero__icon"],[1,"room-hero__info"],[1,"room-hero__name"],[1,"room-hero__location"],[1,"loc-icon"],[1,"detail-body"],[1,"detail-card"],[1,"detail-row"],[1,"detail-item"],[1,"detail-icon","detail-icon--blue"],[1,"detail-label"],[1,"detail-value"],[1,"date-arrow"],[1,"detail-icon","detail-icon--purple"],[1,"detail-sub"],[1,"detail-icon","detail-icon--green"],[1,"detail-icon","detail-icon--orange"],[1,"section-title"],[1,"person-row"],[1,"avatar-lg"],[1,"person-info"],[1,"person-name"],[1,"dept-badge"],[1,"dept-icon"],[1,"on-behalf-row"],[1,"detail-footer"],["mat-stroked-button","",1,"btn-close",3,"click"],["mat-flat-button","",1,"btn-cancel-booking"],[1,"on-behalf-icon"],[1,"notes-text"],["mat-flat-button","",1,"btn-cancel-booking",3,"click"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"mat-icon",1),l(2),o(),d(3,"span",2),l(4),o(),d(5,"button",3),u("click",function(){return t.close()}),d(6,"mat-icon"),l(7,"close"),o()()(),d(8,"div",4)(9,"div",5)(10,"mat-icon"),l(11,"meeting_room"),o()(),d(12,"div",6)(13,"h2",7),l(14),o(),d(15,"span",8)(16,"mat-icon",9),l(17,"place"),o(),l(18),o()()(),d(19,"mat-dialog-content",10)(20,"div",11)(21,"div",12)(22,"div",13)(23,"mat-icon",14),l(24,"calendar_today"),o(),d(25,"div")(26,"span",15),l(27,"Date"),o(),d(28,"span",16),l(29),Pe(30,"date"),k(31,wi,3,4,"span",17),o()()(),d(32,"div",13)(33,"mat-icon",18),l(34,"schedule"),o(),d(35,"div")(36,"span",15),l(37,"Time"),o(),d(38,"span",16),l(39),o(),d(40,"span",19),l(41),o()()()()(),d(42,"div",11)(43,"div",12)(44,"div",13)(45,"mat-icon",20),l(46),o(),d(47,"div")(48,"span",15),l(49,"Booking Type"),o(),d(50,"span",16),l(51),o(),k(52,Ai,2,2,"span",19),o()(),d(53,"div",13)(54,"mat-icon",21),l(55,"history"),o(),d(56,"div")(57,"span",15),l(58,"Created"),o(),d(59,"span",16),l(60),Pe(61,"date"),o(),d(62,"span",19),l(63),Pe(64,"date"),o()()()()(),d(65,"div",11)(66,"div",22)(67,"mat-icon"),l(68,"person"),o(),l(69," Booked For "),o(),d(70,"div",23)(71,"div",24),l(72),o(),d(73,"div",25)(74,"span",26),l(75),o(),d(76,"span",27)(77,"mat-icon",28),l(78,"business"),o(),l(79),o()()(),k(80,Si,8,3,"div",29),o(),k(81,Ei,7,1,"div",11),o(),d(82,"div",30)(83,"button",31),u("click",function(){return t.close()}),l(84,"Close"),o(),k(85,Ii,4,0,"button",32),o()),e&2&&(oe("background",t.isBooked?t.headerBackground:null),v("status-banner--cancelled",!t.isBooked),c(2),x(" ",t.isBooked&&t.isPast?"check_circle":t.isBooked?"event_available":"event_busy"," "),c(2),x(" ",t.isBooked&&t.isPast?"Completed":t.isBooked?"Confirmed Booking":"Cancelled"," "),c(10),I(t.booking.roomName),c(4),x(" ",t.booking.roomLocation," "),c(11),x(" ",Oe(30,26,t.booking.startDate,"EEE, MMM d, y")," "),c(2),y(t.booking.startDate!==t.booking.endDate?31:-1),c(8),$(" ",t.formatTime(t.booking.startTime)," - ",t.formatTime(t.booking.endTime)," "),c(2),I(t.duration),c(5),x(" ",t.booking.bookingType==="single"?"today":t.booking.bookingType==="dateRange"?"date_range":"repeat"," "),c(5),I(t.bookingTypeLabel),c(),y(t.recurrenceLabel?52:-1),c(8),I(Oe(61,29,t.booking.createdAt,"MMM d, y")),c(3),I(Oe(64,32,t.booking.createdAt,"h:mm a")),c(8),oe("background",t.headerBackground),c(),I(t.initials),c(3),I(t.booking.bookedByName),c(4),x(" ",t.booking.department," "),c(),y(t.isOnBehalf?80:-1),c(),y(t.booking.notes?81:-1),c(4),y(t.canCancel?85:-1))},dependencies:[Qe,ye,le,ce,Ce,De,rt,it,Wa,$t],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.status-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 8px 10px 20px;font-size:13px;font-weight:600;color:#fff}.status-banner--cancelled[_ngcontent-%COMP%]{background:linear-gradient(135deg,#dc2626,#ef4444);color:#fff}.status-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;flex-shrink:0}.status-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]{flex:1}.close-btn[_ngcontent-%COMP%]{color:#fffc!important;flex-shrink:0;margin-left:auto}.room-hero[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;padding:20px 20px 16px;border-bottom:1px solid #f1f5f9}.room-hero__icon[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:14px;background:#eef2ff;display:flex;align-items:center;justify-content:center;flex-shrink:0}.room-hero__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px;color:#4f46e5}.room-hero__name[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#1e293b;margin:0 0 4px;line-height:1.2}.room-hero__location[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;font-size:13px;color:#94a3b8}.loc-icon[_ngcontent-%COMP%]{font-size:14px!important;width:14px!important;height:14px!important}.detail-body[_ngcontent-%COMP%]{flex:1;padding:16px 20px!important;margin:0!important;overflow-y:auto;display:flex;flex-direction:column;gap:12px}.detail-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px}.detail-body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.detail-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#e2e8f0;border-radius:4px}.detail-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #f1f5f9;border-radius:14px;padding:16px}.detail-row[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap}.detail-item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;flex:1;min-width:130px}.detail-icon[_ngcontent-%COMP%]{width:36px!important;height:36px!important;font-size:18px!important;border-radius:10px;display:flex!important;align-items:center;justify-content:center;flex-shrink:0;padding:9px;box-sizing:border-box}.detail-icon--blue[_ngcontent-%COMP%]{background:#dbeafe;color:#2563eb}.detail-icon--purple[_ngcontent-%COMP%]{background:#ede9fe;color:#7c3aed}.detail-icon--green[_ngcontent-%COMP%]{background:#dcfce7;color:#16a34a}.detail-icon--orange[_ngcontent-%COMP%]{background:#ffedd5;color:#ea580c}.detail-label[_ngcontent-%COMP%]{display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;margin-bottom:2px}.detail-value[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:600;color:#1e293b}.detail-sub[_ngcontent-%COMP%]{display:block;font-size:12px;color:#94a3b8;margin-top:2px}.date-arrow[_ngcontent-%COMP%]{color:#94a3b8;font-weight:400}.section-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#94a3b8;margin-bottom:12px}.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;color:#cbd5e1}.person-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.avatar-lg[_ngcontent-%COMP%]{width:46px;height:46px;border-radius:14px;background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;font-size:16px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;letter-spacing:.5px}.person-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.person-name[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#1e293b}.person-username[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.dept-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;margin-top:4px;background:#eef2ff;color:#4f46e5;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:600}.dept-icon[_ngcontent-%COMP%]{font-size:12px!important;width:12px!important;height:12px!important}.on-behalf-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;margin-top:12px;padding-top:10px;border-top:1px dashed #e2e8f0;font-size:12px;color:#94a3b8}.on-behalf-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#475569;font-weight:600}.on-behalf-icon[_ngcontent-%COMP%]{font-size:15px!important;width:15px!important;height:15px!important;color:#cbd5e1;flex-shrink:0}.notes-text[_ngcontent-%COMP%]{font-size:14px;color:#475569;line-height:1.6;margin:0;white-space:pre-wrap}.detail-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;gap:10px;padding:14px 20px 18px;border-top:1px solid #f1f5f9}.btn-close[_ngcontent-%COMP%]{height:38px;padding:0 18px;border-radius:10px!important;color:#64748b!important;border-color:#e2e8f0!important;font-weight:500}.btn-cancel-booking[_ngcontent-%COMP%]{height:38px;padding:0 18px;border-radius:10px!important;background:#fef2f2!important;color:#dc2626!important;font-weight:600;display:flex;align-items:center;gap:6px;border:1.5px solid #fecaca}.btn-cancel-booking[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.btn-cancel-booking[_ngcontent-%COMP%]:hover{background:#fee2e2!important}'],changeDetection:0})};export{sn as a,mt as b,Rt as c,cn as d,pt as e,bn as f,gn as g};
