(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e892481a"],{"0c22":function(t,e,n){"use strict";var s=n("f708");n.n(s).a},"3c88":function(t,e,n){},b809:function(t,e,n){"use strict";n.r(e);n("c5f6");var s={name:"countDown",props:{endTime:{type:[String,Number],default:""},title:{type:String,default:"获德秒杀"},isCenter:{type:Boolean,default:!1},isProductDetail:{type:Boolean,default:!1},color:{type:String,default:"#333"}},data:function(){return{deadLine:0}},methods:{subOne:function(){var e=this,n=setTimeout(function(){clearTimeout(n);var t=e.endTime-(new Date).getTime();0<t&&(e.deadLine=t,e.subOne())},1e3)}},mounted:function(){},computed:{count:function(){var t=parseInt(this.deadLine/1e3),e=Math.floor(t/3600/24),n=Math.floor(t/3600%24),s=Math.floor(t%3600/60),o=t%60;return{day0:Math.floor(e/10),day1:Math.floor(e%10),hour0:Math.floor(n/100),hour1:Math.floor(n%100/10),hour2:Math.floor(n%10),minute0:Math.floor(s/10),minute1:Math.floor(s%10),second0:Math.floor(o/10),second1:Math.floor(o%10)}}},watch:{},components:{},created:function(){this.deadLine=Math.max(0,this.endTime-(new Date).getTime()),this.subOne()}},o=(n("dcba"),n("2877")),a={props:["info","type"],data:function(){return{}},computed:{title:function(){return{GROUPON:"火拼团购",BARGAIN:"疯狂砍价",FLASHSALE:"限时秒杀",LIMITBUY:"限量抢购",PRESELL:"定金预售"}[this.type]||""},list:function(){var t=this.type;return this.info[{GROUPON:"grouponVO",BARGAIN:"bargainVO",FLASHSALE:"flashsaleVO",LIMITBUY:"limitBuyVO",PRESELL:"presellVO"}[t]]},colorClass:function(){return{GROUPON:"groupon",BARGAIN:"bargain",FLASHSALE:"flashsale",LIMITBUY:"limitBuy",PRESELL:"presell"}[this.type]||""}},mounted:function(){},components:{countDown:Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rtb-count row ",style:{justifyContent:t.isCenter?"center":"flex-start"}},[t.isProductDetail?t._e():n("span",{staticClass:"count-title",style:t.color},[t._v(t._s(t.title))]),t.count.day1||t.count.day0?n("div",{staticClass:"count-item count-number row row-center"},[t._v(t._s(t.count.day0)+t._s(t.count.day1))]):t._e(),t.count.day1||t.count.day0?n("span",{staticClass:"count-unit-text count-item "},[t._v("天")]):t._e(),n("div",{staticClass:"count-item count-number row row-center",class:[t.count.hour0?".count-number-long":""]},[t._v(t._s(t.count.hour0||"")+t._s(t.count.hour1)+t._s(t.count.hour2))]),n("span",{staticClass:"count-item count-unit-text"},[t._v(":")]),n("div",{staticClass:"count-item count-number row row-center"},[t._v(t._s(t.count.minute0)+t._s(t.count.minute1))]),n("span",{staticClass:"count-item count-unit-text"},[t._v(":")]),n("div",{staticClass:"count-item count-number row row-center"},[t._v(t._s(t.count.second0)+t._s(t.count.second1))]),n("span",{staticClass:"count-unit-text count-item "})])},[],!1,null,"68f8c7eb",null).exports},created:function(){}},i=(n("0c22"),Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hd row row-center",class:t.colorClass},[n("div",{staticClass:"hd-item-lt col col-center"},[n("div",{staticClass:"hd-lt-item"},[n("p",{staticClass:"hd-txt text-center"},[t._v(t._s(t.title))])]),n("div",{staticClass:"hd-lt-item row row-start"},[n("span",{staticClass:"price-tag"},[t._v("¥")]),n("span",{staticClass:"price-int"},[t._v(t._s(t._f("moneyInt")(t.info.marketPrice))+".")]),n("span",{staticClass:"price-float"},[t._v(t._s(t._f("moneyFloat")(t.info.marketPrice)))]),n("div",{staticClass:"price-des col col-center"},[n("p",{staticClass:"price-discount",class:t.colorClass},[t._v("省99元")]),n("p",{staticClass:"price-old"},[t._v("¥120.0")])]),n("span",{staticClass:"pv"},[t._v("PV:100")])])]),n("div",{staticClass:"hd-item-rt row row-center"},["LIMITBUY"==t.type?n("span",{staticClass:"tag tag-limit"},[t._v("限购"+t._s(t.list.amount)+"件")]):"GROUPON"==t.type?n("span",{staticClass:"tag tag-limit"},[t._v("2人拼")]):"FLASHSALE"==t.type||"BARGAIN"==t.type?n("div",[n("p",{staticClass:"hd-rt-des"},[t._v("距结束还剩")]),n("count-down",{attrs:{isProductDetail:!0,endTime:t.list.validTo}})],1):"PRESELL"==t.type?n("count-down",{attrs:{isProductDetail:!0,endTime:t.list.presellEndAt}}):t._e()],1)])},[],!1,null,"e5f66cd2",null));e.default=i.exports},dcba:function(t,e,n){"use strict";var s=n("3c88");n.n(s).a},f708:function(t,e,n){}}]);