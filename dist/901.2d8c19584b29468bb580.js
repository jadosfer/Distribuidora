(self.webpackChunke_commerce_mosh=self.webpackChunke_commerce_mosh||[]).push([[901],{83901:(e,t,r)=>{"use strict";r.r(t),r.d(t,{OrderModule:()=>de});var n=r(61116),i=r(29996),o=r(31041),a=r(56238),s=r(79996),d=r(35366),l=r(65031),c=r(90317),u=r(42590),m=r(87119);let p=(()=>{class e{constructor(e,t,r,n){this.auth=e,this.db=t,this.ordersService=r,this.productService=n,this.hasDiscount=!1,this.orderIndex=-1,this.orderNumber=[],console.log("order service constructor"),this.subscription2=this.productService.getAllProducts().subscribe(e=>{this.products=e}),this.appUser=this.ordersService.appUser,this.getOrder().subscribe(e=>{this.order=e;for(let t=0;t<this.order.length;t++)if(this.order&&this.appUser&&this.order[t].payload.val().seller==this.appUser.name){this.orderIndex=t,this.orderId=this.order[t].key;break}}),this.order||this.createOrderEmpty()}isProductStock(e){for(let t=0;t<this.products.length;t++)if(this.products[t].title==e.title&&this.products[t].stock<e.quantity)return!1;return!0}isStock(e){for(let t=0;t<e.payload.val().products.length;t++)if(e.payload.val().products[t].quantity>0&&!this.isProductStock(e.payload.val().products[t]))return!1;return!0}getStock(e){if(this.products)for(let t=0;t<this.products.length;t++)if(this.products[t].payload.val().title==e.product.title)return this.products[t].payload.val().stock;return 0}createOrderEmpty(){if(!this.appUser)return;if(!this.products)return;let e=[];for(let t=0;t<this.products.length;t++)e.push({price:this.products[t].payload.val().discPrice1,discountPrice:this.products[t].payload.val().discPrice1,product:this.products[t].payload.val(),productId:this.products[t].key,quantity:0,discount:0});this.db.list("/order/").push({orderItemsCount:0,products:e,sellerName:this.appUser.name})}createOrderNumber(){this.db.list("/orderNumber/").push({orderNumber:0})}resetOrder(e){this.db.object("/order/"+this.order[e].key).remove()}clearOrder(){if(this.order)for(let e=0;e<this.order.length;e++)this.order[e].payload.val().seller==this.appUser.name&&this.db.object("/order/"+this.order[e].key).remove()}getOrder(){return this.db.list("/order").snapshotChanges()}getOrderNumber(){return this.db.list("/orderNumber").snapshotChanges()}updateOrderItemQuantity(e,t,r,n){for(let i=0;i<this.products.length;i++)if(t.productId==e[n].payload.val().products[i].productId){this.db.object("/order/"+e[n].key+"/products/"+i).update({quantity:e[n].payload.val().products[i].quantity+r});break}}createOrder(e,t,r,n,i,o){let a=[],s=this.ordersService.getClientCategory(t),d=0;for(let p=0;p<n.length;p++)0!=parseInt(n[p].quantity)&&(a.push({title:n[p].product.title,category:n[p].product.prodsCategory,discountPrice:n[p].discountPrice,discount:n[p].discount,quantity:n[p].quantity}),d+=parseInt(n[p].quantity)*parseFloat(n[p].discountPrice)*(1+r/100),0!=parseFloat(n[p].discount)&&(this.hasDiscount=!0));let l=this.db.list("/ordersDetail/").push({products:a}),c=new Date;c.getHours();let u=this.ordersService.isClientInDebt(t,this.ordersService.orders),m=u&&c.getHours()<=20;if(21!=r&&"Gimnasio"!=s&&"Kiosko"!=s&&(m=!1),o=null==o?c.getTime():1e3*o.unix(),d&&(d=Math.round(10*d)/10),l.key){let n={amountWithIva:d,aproved:m,clientInDebt:u,date:o,fantasyName:t,hasDiscount:this.hasDiscount,iva:r,orderDetailKey:l.key,seller:e,orderNumber:this.orderNumber[0].payload.val().orderNumber};this.db.list("/orders/").push(n)}else console.log("la operacion de guardado de la orden fall\xf3");this.incrementOrderNumber(),this.productService.updateStocks(a,this.products,!1)}incrementOrderNumber(){let e=parseInt(this.orderNumber[0].payload.val().orderNumber)+1;return this.db.object("/orderNumber/"+this.orderNumber[0].key).update({orderNumber:e})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275inject"](u.e),d["\u0275\u0275inject"](m.KQ),d["\u0275\u0275inject"](c.N),d["\u0275\u0275inject"](l.M))},e.\u0275prov=d["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=r(66262),f=r(54670),g=r(13070),v=r(9550),y=r(79961),x=r(87064),S=r(69024),b=r(2212),P=r(84369),E=r(7436),C=r(59241);function I(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"h3"),d["\u0275\u0275text"](1,"No se encontr\xf3 la categor\xeda del cliente, intente nuevamente"),d["\u0275\u0275elementEnd"]())}function w(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"mat-option",16),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e.payload.val().fantasyName),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.payload.val().fantasyName," ")}}function k(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"mat-form-field",17),d["\u0275\u0275elementStart"](1,"mat-label"),d["\u0275\u0275text"](2,"Ingrese la fecha"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"input",18),d["\u0275\u0275listener"]("ngModelChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).date=t}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"mat-datepicker-toggle",19),d["\u0275\u0275element"](5,"mat-datepicker",null,20),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275reference"](6),t=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngModel",t.date)("matDatepicker",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("for",e)}}function O(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"mat-radio-button",40),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e,"% ")}}function N(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"mat-radio-group",38),d["\u0275\u0275listener"]("ngModelChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](3).iva=t}),d["\u0275\u0275template"](1,O,2,2,"mat-radio-button",39),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("ngModel",e.iva),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.ivas)}}function q(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span",41),d["\u0275\u0275text"](1,"\xa0\xa0\xa0\xa0*Gimnasios y Kiosko IVA 0%"),d["\u0275\u0275elementEnd"]())}function V(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span",41),d["\u0275\u0275text"](1,"\xa0\xa0\xa0\xa0*Especifique el cliente para operar"),d["\u0275\u0275elementEnd"]())}function M(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span",41),d["\u0275\u0275text"](1,"\xa0\xa0\xa0\xa0*Haga el pedido"),d["\u0275\u0275elementEnd"]())}function A(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span",41),d["\u0275\u0275text"](1,"\xa0\xa0\xa0\xa0*No hay stock suficiente de al menos uno de los productos seleccionados"),d["\u0275\u0275elementEnd"]())}function D(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275element"](1,"product-filter"),d["\u0275\u0275elementStart"](2,"div",21),d["\u0275\u0275elementStart"](3,"div",22),d["\u0275\u0275elementStart"](4,"div",23),d["\u0275\u0275elementStart"](5,"div"),d["\u0275\u0275elementStart"](6,"mat-icon",24),d["\u0275\u0275text"](7,"search"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"div"),d["\u0275\u0275elementStart"](9,"input",25,26),d["\u0275\u0275listener"]("keyup",function(){d["\u0275\u0275restoreView"](e);const t=d["\u0275\u0275reference"](10);return d["\u0275\u0275nextContext"](2).filter(t.value)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"div",27),d["\u0275\u0275elementStart"](12,"div",28),d["\u0275\u0275elementStart"](13,"div",29),d["\u0275\u0275elementStart"](14,"button",30),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).beforeShowOrder()}),d["\u0275\u0275text"](15,"Crear Pedido"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"div",31),d["\u0275\u0275elementStart"](17,"button",32),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).reset()}),d["\u0275\u0275text"](18,"Anular "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"div",33),d["\u0275\u0275elementStart"](20,"div",28),d["\u0275\u0275elementStart"](21,"div",34),d["\u0275\u0275elementStart"](22,"label",35),d["\u0275\u0275elementStart"](23,"b"),d["\u0275\u0275text"](24,"IVA:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](25,"div",31),d["\u0275\u0275template"](26,N,2,2,"mat-radio-group",36),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](27,q,2,0,"span",37),d["\u0275\u0275template"](28,V,2,0,"span",37),d["\u0275\u0275template"](29,M,2,0,"span",37),d["\u0275\u0275template"](30,A,2,0,"span",37),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](26),d["\u0275\u0275property"]("ngIf","Gimnasio"!=e.clientCategory&&"Kiosko"!=e.clientCategory),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf","Gimnasio"==e.clientCategory||"Kiosko"==e.clientCategory),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!e.client),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.orderEmpty),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.noStock)}}function U(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275text"](1,"----------PRIMERO SELECCIONE EL CLIENTE PARA COMENZAR A OPERAR----------"),d["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"button",62),d["\u0275\u0275text"](1,"Aplicar"),d["\u0275\u0275elementEnd"]())}function F(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",63),d["\u0275\u0275listener"]("click",function(t){d["\u0275\u0275restoreView"](e);const r=d["\u0275\u0275nextContext"]().$implicit;return d["\u0275\u0275nextContext"](3).discount(t,r,0)}),d["\u0275\u0275text"](1,"Anular"),d["\u0275\u0275elementEnd"]()}}function T(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("\xa0\xa0Descuento: ",e.discount,"%")}}function L(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275elementStart"](1,"td"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"td"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"td"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"td"),d["\u0275\u0275text"](8),d["\u0275\u0275pipe"](9,"number"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"td"),d["\u0275\u0275text"](11),d["\u0275\u0275pipe"](12,"number"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"td"),d["\u0275\u0275elementStart"](14,"button",56),d["\u0275\u0275listener"]("click",function(){const t=d["\u0275\u0275restoreView"](e),r=t.$implicit,n=t.index;return d["\u0275\u0275nextContext"](3).updateOrderItemQuantity(r,-1,n)}),d["\u0275\u0275text"](15,"-"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"td"),d["\u0275\u0275elementStart"](17,"button",56),d["\u0275\u0275listener"]("click",function(){const t=d["\u0275\u0275restoreView"](e),r=t.$implicit,n=t.index;return d["\u0275\u0275nextContext"](3).updateOrderItemQuantity(r,1,n)}),d["\u0275\u0275text"](18,"+"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"td"),d["\u0275\u0275elementStart"](20,"form",57),d["\u0275\u0275listener"]("submit",function(t){const r=d["\u0275\u0275restoreView"](e).$implicit,n=d["\u0275\u0275reference"](22);return d["\u0275\u0275nextContext"](3).discount(t,r,+n.value)}),d["\u0275\u0275element"](21,"input",58,59),d["\u0275\u0275template"](23,j,2,0,"button",60),d["\u0275\u0275template"](24,F,2,0,"button",61),d["\u0275\u0275template"](25,T,2,1,"span",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,r=d["\u0275\u0275nextContext"](3);d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",e.product.title,"\xa0\xa0\xa0\xa0"),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](e.quantity),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](r.getStock(e)),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("$",d["\u0275\u0275pipeBind2"](9,9,e.discountPrice,"1.1-1"),""),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"]("$",d["\u0275\u0275pipeBind2"](12,12,e.discountPrice*e.quantity,"1.1-1"),""),d["\u0275\u0275advance"](10),d["\u0275\u0275propertyInterpolate"]("value",e.value),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",r.order.length>r.orderIndex&&0==e.discount),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.order.length>r.orderIndex&&0!=e.discount),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.order.length>r.orderIndex&&0!=e.discount)}}function $(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"table",42),d["\u0275\u0275listener"]("matSortChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).sortData(t)}),d["\u0275\u0275elementStart"](1,"tr"),d["\u0275\u0275elementStart"](2,"th",43),d["\u0275\u0275text"](3,"Producto"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"th",44),d["\u0275\u0275text"](5,"Cantidad"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"th",45),d["\u0275\u0275text"](7,"Stock"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"th",46),d["\u0275\u0275text"](9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"th",47),d["\u0275\u0275text"](11,"Subtotal"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"th",48),d["\u0275\u0275text"](13,"\xa0\xa0\xa0Quitar"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"th",49),d["\u0275\u0275text"](15,"\xa0Agregar"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"th",50),d["\u0275\u0275text"](17,"\xa0Descuento(%)"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](18,L,26,15,"tr",51),d["\u0275\u0275elementStart"](19,"tr"),d["\u0275\u0275elementStart"](20,"th",52),d["\u0275\u0275text"](21,"UNIDADES TOTALES"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"th",53),d["\u0275\u0275text"](23),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"th",54),d["\u0275\u0275text"](25,"IMPORTE TOTAL(incluye el IVA)"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"th",55),d["\u0275\u0275text"](27),d["\u0275\u0275pipe"](28,"number"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](9),d["\u0275\u0275textInterpolate1"]("Precio unitario ",e.clientCategory,"\xa0s/iva"),d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("ngForOf",e.currentItemsToShow),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate1"]("",e.quantity,"\xa0 Unidades"),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"]("$",d["\u0275\u0275pipeBind2"](28,4,e.ordersService.getTotalAmount(e.orderProducts)*(1+e.iva/100),"1.1-1"),"")}}function Q(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275text"](1,"\xa0\xa0\xa0\xa0*Especifique el cliente"),d["\u0275\u0275elementEnd"]())}function R(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275text"](1,"\xa0\xa0\xa0\xa0*Haga el pedido"),d["\u0275\u0275elementEnd"]())}function B(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275text"](1,"\xa0\xa0\xa0\xa0*No hay stock suficiente de al menos uno de los productos seleccionados"),d["\u0275\u0275elementEnd"]())}function K(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"span"),d["\u0275\u0275text"](1,"\xa0\xa0\xa0\xa0*Gimnasios y Kioskos 0% IVA"),d["\u0275\u0275elementEnd"]())}function G(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"li",75),d["\u0275\u0275elementStart"](1,"a",73),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](3).prevPage()}),d["\u0275\u0275text"](2,"<< Anterior"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}}function H(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"li",75),d["\u0275\u0275elementStart"](1,"a",73),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](3).nextPage()}),d["\u0275\u0275text"](2,"Pr\xf3xima >>"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}}const _=function(e){return{disabled:e}};function z(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div",64),d["\u0275\u0275elementStart"](1,"button",56),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).beforeShowOrder()}),d["\u0275\u0275text"](2,"Crear Pedido"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"button",65),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).reset()}),d["\u0275\u0275text"](4,"Anular "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](5,Q,2,0,"span",1),d["\u0275\u0275template"](6,R,2,0,"span",1),d["\u0275\u0275template"](7,B,2,0,"span",1),d["\u0275\u0275template"](8,K,2,0,"span",1),d["\u0275\u0275elementStart"](9,"nav",66),d["\u0275\u0275elementStart"](10,"ul",67),d["\u0275\u0275elementStart"](11,"li",68),d["\u0275\u0275elementStart"](12,"a",69),d["\u0275\u0275text"](13,"P\xe1gina actual "),d["\u0275\u0275elementStart"](14,"strong"),d["\u0275\u0275text"](15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"li",70),d["\u0275\u0275elementStart"](17,"a",69),d["\u0275\u0275text"](18,"Total "),d["\u0275\u0275elementStart"](19,"strong"),d["\u0275\u0275text"](20),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](21,G,3,0,"li",71),d["\u0275\u0275template"](22,H,3,0,"li",71),d["\u0275\u0275elementStart"](23,"li",72),d["\u0275\u0275elementStart"](24,"a",73),d["\u0275\u0275listener"]("click",function(){d["\u0275\u0275restoreView"](e);const t=d["\u0275\u0275nextContext"](2);return t.itemsPerPage=10,t.actualPage=0,t.refreshPages()}),d["\u0275\u0275text"](25,"10 por p\xe1gina"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"li",74),d["\u0275\u0275elementStart"](27,"a",73),d["\u0275\u0275listener"]("click",function(){d["\u0275\u0275restoreView"](e);const t=d["\u0275\u0275nextContext"](2);return t.itemsPerPage=20,t.actualPage=0,t.refreshPages()}),d["\u0275\u0275text"](28,"20 por p\xe1gina"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngIf",!e.client),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.orderEmpty),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.noStock),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf","Gimnasio"==e.clientCategory||"Kiosko"==e.clientCategory),d["\u0275\u0275advance"](7),d["\u0275\u0275textInterpolate"](e.actualPage+1),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](e.totalPages),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.actualPage>0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.actualPage<e.totalPages-1),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](10,_,10==e.itemsPerPage)),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](12,_,20==e.itemsPerPage))}}function W(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",56),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](3).createOrder()}),d["\u0275\u0275text"](1,"Crear Pedido"),d["\u0275\u0275elementEnd"]()}}function J(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("",e.product.title,"\xa0\xa0\xa0\xa0\xa0\xa0")}}function X(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](e.quantity)}}function Z(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tr"),d["\u0275\u0275template"](1,J,2,1,"td",1),d["\u0275\u0275template"](2,X,2,1,"td",1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",0!=e.quantity),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",0!=e.quantity)}}function Y(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",56),d["\u0275\u0275listener"]("click",function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](3).createOrder()}),d["\u0275\u0275text"](1,"Crear Pedido"),d["\u0275\u0275elementEnd"]()}}function ee(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",65),d["\u0275\u0275listener"]("click",function(){d["\u0275\u0275restoreView"](e);const t=d["\u0275\u0275nextContext"](3);return t.showOrder=!t.showOrder}),d["\u0275\u0275text"](1,"Volver "),d["\u0275\u0275elementEnd"]()}}function te(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div",76),d["\u0275\u0275elementStart"](1,"div"),d["\u0275\u0275template"](2,W,2,0,"button",77),d["\u0275\u0275elementStart"](3,"button",65),d["\u0275\u0275listener"]("click",function(){d["\u0275\u0275restoreView"](e);const t=d["\u0275\u0275nextContext"](2);return t.showOrder=!t.showOrder}),d["\u0275\u0275text"](4,"Volver "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"br"),d["\u0275\u0275element"](6,"br"),d["\u0275\u0275elementStart"](7,"tr"),d["\u0275\u0275elementStart"](8,"th"),d["\u0275\u0275text"](9,"Producto"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"th"),d["\u0275\u0275text"](11,"Cantidad"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](12,Z,3,2,"tr",51),d["\u0275\u0275element"](13,"br"),d["\u0275\u0275element"](14,"br"),d["\u0275\u0275template"](15,Y,2,0,"button",77),d["\u0275\u0275template"](16,ee,2,0,"button",78),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",e.ordersService.clients),d["\u0275\u0275advance"](10),d["\u0275\u0275property"]("ngForOf",e.orderProducts),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf",e.orderProductsLength()>10&&e.ordersService.clients),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.orderProductsLength()>10)}}function re(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275elementStart"](1,"div",2),d["\u0275\u0275elementStart"](2,"div",3),d["\u0275\u0275elementStart"](3,"h1"),d["\u0275\u0275text"](4,"PEDIDO"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"div",4),d["\u0275\u0275elementStart"](6,"mat-icon",5),d["\u0275\u0275text"](7,"shopping_cart"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](8,"hr"),d["\u0275\u0275elementStart"](9,"div",6),d["\u0275\u0275elementStart"](10,"form"),d["\u0275\u0275elementStart"](11,"mat-form-field",7),d["\u0275\u0275elementStart"](12,"mat-label"),d["\u0275\u0275text"](13,"Cliente"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"input",8),d["\u0275\u0275listener"]("ngModelChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().fantasyName=t}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"mat-autocomplete",null,9),d["\u0275\u0275template"](17,w,2,2,"mat-option",10),d["\u0275\u0275pipe"](18,"async"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](19,k,7,3,"mat-form-field",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](20,D,31,5,"div",1),d["\u0275\u0275elementStart"](21,"div",12),d["\u0275\u0275template"](22,U,2,0,"span",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](23,"hr"),d["\u0275\u0275template"](24,$,29,7,"table",13),d["\u0275\u0275template"](25,z,29,14,"div",14),d["\u0275\u0275element"](26,"br"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](27,te,17,4,"div",15),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275reference"](16),t=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("hidden",t.showOrder),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("formControl",t.myControl)("matAutocomplete",e)("ngModel",t.fantasyName),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngForOf",d["\u0275\u0275pipeBind1"](18,11,t.filteredOptions)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",null==t.appUser?null:t.appUser.isAdmin),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.clientCategory),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",!t.clientCategory),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",t.clientCategory),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.clientCategory),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",t.showOrder)}}const ne=[{path:"",component:(()=>{class e{constructor(e,t,r,n,i,a,s){this.productService=e,this.route=t,this.ordersService=r,this.orderService=n,this.auth=i,this.router=a,this.utilityService=s,this.actualPage=0,this.totalPages=1,this.itemsPerPage=10,this.currentItemsToShow=[],this.myControl=new o.FormControl,this.disableSelect=new o.FormControl(!1),this.fantasyName="",this.clients=[],this.orderProducts=[],this.disc=0,this.iva=21,this.ivas=[0,10.5,21],this.quantity=0,this.client=!0,this.orderEmpty=!1,this.aproved=!0,this.negative=!1,this.noStock=!1,this.showOrder=!1,this.catNull=!1,this.query={client:"",seller:"",date:"",dateRange:{start:new Date(2017,1,1),end:new Date(2040,1,1)}}}ngOnInit(){this.subscription=this.orderService.getOrderNumber().subscribe(e=>{e||this.orderService.createOrderNumber(),this.orderService.orderNumber=e}),this.subscription2=this.auth.appUser$.subscribe(e=>{this.appUser=e,this.orderIndex=this.orderService.orderIndex,this.subscription3=this.orderService.getOrder().subscribe(e=>{this.orderService.clearOrder(),this.order=e,0==this.order.length&&this.orderService.createOrderEmpty(),this.orderIndex=-1;for(let t=0;t<this.order.length;t++)if(this.appUser&&this.order[t].payload.val().sellerName==this.appUser.name){this.orderIndex=t,this.orderProducts=this.order[this.orderIndex].payload.val().products;break}this.appUser&&-1==this.orderIndex&&this.orderService.createOrderEmpty(),this.subscription4=this.ordersService.getAllClients().subscribe(e=>{var t;this.filteredClients=e,this.clients=[];for(let r=0;r<this.filteredClients.length;r++)this.filteredClients[r].payload.val().designatedSeller!=this.appUser.name&&1!=(null===(t=this.appUser)||void 0===t?void 0:t.isAdmin)||this.clients.push(this.filteredClients[r]);this.filteredOptions=this.myControl.valueChanges.pipe((0,a.O)(""),(0,s.U)(e=>this._filter(e||"")))}),this.subscription5=this.route.queryParamMap.subscribe(e=>{if(this.prodsCategory=e.get("prodsCategory"),this.filteredOrder=[],this.orderIndex>=0&&this.order[0]){for(let e=0;e<this.order[this.orderIndex].payload.val().products.length;e++)this.order[this.orderIndex].payload.val().products[e].product.prodsCategory==this.prodsCategory&&(this.order[this.orderIndex].payload.val().products[e].quantity=this.orderProducts[e].quantity,this.filteredOrder.push(this.orderProducts[e]));if(0==this.filteredOrder.length)for(let e=0;e<this.order[this.orderIndex].payload.val().products.length;e++)this.filteredOrder.push(this.order[this.orderIndex].payload.val().products[e])}this.showedProducts=this.filteredOrder,this.prodsCategory||(this.showedProducts=this.orderProducts),this.actualPage=0,this.refreshPages()})})})}pickClient(e){if(this.orderProducts){for(let t=0;t<this.orderProducts.length;t++)switch(e){case null:throw Error("Error en el canal de venta");case"Distribuidor":this.orderProducts[t].price=this.orderProducts[t].product.discPrice1,this.orderProducts[t].discountPrice=this.orderProducts[t].product.discPrice1*(1-this.orderProducts[t].discount/100);break;case"Comercio":this.orderProducts[t].price=this.orderProducts[t].product.discPrice2,this.orderProducts[t].discountPrice=this.orderProducts[t].product.discPrice2*(1-this.orderProducts[t].discount/100);break;case"Kiosko":this.orderProducts[t].price=this.orderProducts[t].product.discPrice3,this.orderProducts[t].discountPrice=this.orderProducts[t].product.discPrice3*(1-this.orderProducts[t].discount/100),this.iva=0;break;case"Gimnasio":this.orderProducts[t].price=this.orderProducts[t].product.discPrice4,this.orderProducts[t].discountPrice=this.orderProducts[t].product.discPrice4*(1-this.orderProducts[t].discount/100),this.iva=0}this.showedProducts=this.orderProducts,this.fantasyName&&this.router.navigateByUrl("/orders/order")}}sortData(e){const t=this.showedProducts;this.sortedData=e.active&&""!==e.direction?t.sort((t,r)=>{const n="asc"===e.direction;switch(e.active){case"title":return this.compare(t.product.title,r.product.title,n);case"quantity":return this.compare(t.quantity,r.quantity,n);case"unitPrice":return this.compare(t.discountPrice,r.discountPrice,n);case"totalPriceProduct":return this.compare(t.discountPrice*t.quantity,r.discountPrice*r.quantity,n);default:return 0}}):t}getTitle(e){return e.title}getQuantity(e){if(!this.order)return 0;for(let t=0;t<this.order[this.orderIndex].payload.val().products.length;t++)if(this.order[this.orderIndex].payload.val().products[t].product.title==e.title)return this.order[this.orderIndex].payload.val().products[t].quantity;return 0}compare(e,t,r){return(e<t?-1:1)*(r?1:-1)}_filter(e){this.clientCategory=null;const t=e.toLowerCase();if(!this.clients)return;let r=this.clients.filter(e=>e.payload.val().fantasyName.toLowerCase().includes(t));return r.length>0&&(this.clientCategory=r[0].payload.val().clientCategory,this.pickClient(this.clientCategory)),r}filter(e){this.prodQuery=e,""!=e?(this.showedProducts=e?this.showedProducts.filter(t=>t.product.title.toLowerCase().includes(e.toLowerCase())):this.showedProducts,this.actualPage=0,this.refreshPages()):this.showedProducts=this.orderProducts}updateOrderItemQuantity(e,t,r){for(let n=0;n<this.orderProducts.length;n++)if(e.product.title==this.orderProducts[n].product.title){if(this.orderProducts[n].quantity+t<0)return;if(this.orderProducts[n].quantity+t>this.orderService.getStock(e))return this.noStock=!0,void setTimeout(()=>{this.noStock=!1},2e3);this.orderProducts[n].quantity+=t;break}this.quantity+=t}orderProductsLength(){let e=0;for(let t=0;t<this.orderProducts.length;t++)this.orderProducts[t].quantity>0&&e++;return e}beforeShowOrder(){if(!this.orderService.isStock(this.order[this.orderIndex]))return this.noStock=!0,void setTimeout(()=>{this.noStock=!1},2e3);this.orderEmpty=!0;for(let e=0;e<this.orderProducts.length;e++)0!=this.orderProducts[e].quantity&&(this.orderEmpty=!1);if(this.orderEmpty)setTimeout(()=>{this.orderEmpty=!1},2e3);else if(!this.orderEmpty)return""==this.fantasyName?(this.client=!1,void setTimeout(()=>{this.client=!0},2e3)):void(this.showOrder=!this.showOrder)}createOrder(){let e=!1;for(let t=0;t<this.clients.length;t++)this.fantasyName.toLowerCase().includes(this.clients[t].payload.val().fantasyName.toLowerCase())&&(e=!0);e?confirm("Est\xe1 segur@ que quiere crear el pedido? No podr\xe1 modificarlo")&&(this.orderService.createOrder(this.order[this.orderIndex].payload.val().sellerName,this.fantasyName,this.iva,this.orderProducts,this.quantity,this.date),this.fantasyName="",this.router.navigateByUrl("/orders/orders"),this.orderService.resetOrder(this.orderIndex)):confirm("El cliente es incorrecto")}reset(){if(confirm("Est\xe1 segur@ que quiere anular el pedido que no ha creado?")){this.quantity=0;for(let e=0;e<this.orderProducts.length;e++)this.orderProducts[e].quantity=0;this.showOrder=!1,this.orderService.resetOrder(this.orderIndex),this.fantasyName=""}}discount(e,t,r){for(let n=0;n<this.orderProducts.length;n++)if(t.product.title==this.orderProducts[n].product.title){this.orderProducts[n].discount=r,this.orderProducts[n].discountPrice=this.orderProducts[n].price*(1-r/100),this.disc=0;break}}updatePrices(){}getStock(e){return this.orderService.getStock(e)}unloadHandler(e){this.orderService.clearOrder()}prevPage(){0!=this.actualPage&&(this.actualPage-=1,this.refreshPages())}nextPage(){this.actualPage!=this.totalPages&&(this.actualPage+=1,this.refreshPages())}refreshPages(){this.totalPages=Math.ceil(this.showedProducts.length/this.itemsPerPage),this.currentItemsToShow=[];for(let e=this.actualPage*this.itemsPerPage;e<this.actualPage*this.itemsPerPage+this.itemsPerPage;e++){if(e==this.showedProducts.length)return;this.currentItemsToShow.push(this.showedProducts[e])}}ngOnDestroy(){this.orderService.clearOrder(),this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),this.subscription4.unsubscribe(),this.subscription5.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](l.M),d["\u0275\u0275directiveInject"](i.gz),d["\u0275\u0275directiveInject"](c.N),d["\u0275\u0275directiveInject"](p),d["\u0275\u0275directiveInject"](u.e),d["\u0275\u0275directiveInject"](i.F0),d["\u0275\u0275directiveInject"](h.t))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["order"]],hostBindings:function(e,t){1&e&&d["\u0275\u0275listener"]("beforeunload",function(e){return t.unloadHandler(e)},!1,d["\u0275\u0275resolveWindow"])},decls:3,vars:2,consts:[[1,"SCContainer"],[4,"ngIf"],[1,"row"],[1,"col-3","ms-3"],[1,"col","ms-1","d-lg-none"],[1,"cart"],["id","productsList",3,"hidden"],["appearance","fill",1,"example-full-width","me-1"],["type","text","placeholder","Elija uno","aria-label","Number","matInput","",3,"formControl","matAutocomplete","ngModel","ngModelChange"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill","class","example-full-width ",4,"ngIf"],[1,"my-3"],["matSort","",3,"matSortChange",4,"ngIf"],["class","ms-3",4,"ngIf"],["id","productsList","class","row",4,"ngIf"],[3,"value"],["appearance","fill",1,"example-full-width"],["matInput","","name","date","required","",3,"ngModel","matDatepicker","ngModelChange"],["matSuffix","",3,"for"],["picker",""],["id","start",1,"row","mt-5","mt-sm-3"],[1,"col-4","col-sm-3","mt-3","col-lg-3"],[1,"input-group"],["matSuffix",""],["matInput","","type","text","placeholder","   Buscar producto...",1,"border-end-0","border","rounded-pill",3,"keyup"],["prodQuery",""],[1,"col-8","col-sm-4","col-lg-3"],[1,"row","mt-2"],[1,"col","col-sm-6","col-lg-5"],["mat-raised-button","","color","basic",1,"left-btn","ms-2",3,"click"],[1,"col"],["mat-raised-button","","color","warn",1,"left-btn","ms-lg-4",3,"click"],[1,"col","mt-3","mt-sm-0"],[1,"mt-1","col-2","col-sm-2","col-lg-1"],["id","example-radio-group-label"],["aria-labelledby","example-radio-group-label","class","example-radio-group",3,"ngModel","ngModelChange",4,"ngIf"],["class","text-danger border border-danger p-2 pe-4 rounded",4,"ngIf"],["aria-labelledby","example-radio-group-label",1,"example-radio-group",3,"ngModel","ngModelChange"],["style","margin:5px","class","example-radio-button",3,"value",4,"ngFor","ngForOf"],[1,"example-radio-button",2,"margin","5px",3,"value"],[1,"text-danger","border","border-danger","p-2","pe-4","rounded"],["matSort","",3,"matSortChange"],["mat-sort-header","title"],["id","quantity","mat-sort-header","quantity"],["mat-sort-header","stock"],["mat-sort-header","unitPrice"],["mat-sort-header","totalPriceProduct"],["mat-sort-header","quit"],["mat-sort-header","add"],["mat-sort-header","discount"],[4,"ngFor","ngForOf"],["mat-sort-header","total"],["mat-sort-header","showTotalQuantity"],["mat-sort-header","totalPrice"],["mat-sort-header","showTotal"],["mat-raised-button","","color","basic",1,"left-btn",3,"click"],["id","form",3,"submit"],["type","number",3,"value"],["disc",""],["type","submit",4,"ngIf"],[3,"click",4,"ngIf"],["type","submit"],[3,"click"],[1,"ms-3"],["mat-raised-button","","color","warn",1,"left-btn",3,"click"],["aria-label","Page navigation example",1,"mb-3","mt-3"],[1,"pagination"],[1,"page-item","disabled"],[1,"page-link"],[1,"page-item","disabled","me-1"],["class","page-item",4,"ngIf"],[1,"page-item","ms-3",3,"ngClass"],[1,"page-link",3,"click"],[1,"page-item",3,"ngClass"],[1,"page-item"],["id","productsList",1,"row"],["class","left-btn","mat-raised-button","","color","basic",3,"click",4,"ngIf"],["class","left-btn","mat-raised-button","","color","warn",3,"click",4,"ngIf"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275template"](1,I,2,0,"h3",1),d["\u0275\u0275template"](2,re,28,13,"div",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.catNull),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!t.catNull))},directives:[n.O5,f.Hw,o["\u0275NgNoValidate"],o.NgControlStatusGroup,o.NgForm,g.KE,g.hX,v.Nt,o.DefaultValueAccessor,y.ZL,o.NgControlStatus,o.FormControlDirective,y.XC,n.sg,x.ey,S.hl,o.RequiredValidator,o.NgModel,S.nW,g.R9,S.Mq,b.N,P.lW,E.VQ,E.U0,C.YE,C.nU,n.mk],pipes:[n.Ov,n.JJ],styles:[".cart[_ngcontent-%COMP%]{font-size:28px}"]}),e})(),canActivate:[r(20868).a]}];let ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[i.Bz.forChild(ne)],i.Bz]}),e})();var oe=r(87660),ae=r(81830),se=r(99484);let de=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({providers:[ae.H,h.t,p],imports:[[n.ez,ie,o.FormsModule,oe.q,o.ReactiveFormsModule,se.t]]}),e})()}}]);