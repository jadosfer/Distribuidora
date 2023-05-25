(self["webpackChunke_commerce_mosh"] = self["webpackChunke_commerce_mosh"] || []).push([["src_app_modules_order-lazy_order_module_ts"],{

/***/ 15393:
/*!************************************************************!*\
  !*** ./src/app/modules/order-lazy/order-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderRoutingModule": () => (/* binding */ OrderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../orders/order.component */ 98606);
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-guard.service */ 78968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    { path: '', component: _orders_order_component__WEBPACK_IMPORTED_MODULE_0__.OrderComponent, canActivate: [src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] },
];
class OrderRoutingModule {
}
OrderRoutingModule.ɵfac = function OrderRoutingModule_Factory(t) { return new (t || OrderRoutingModule)(); };
OrderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OrderRoutingModule });
OrderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 853:
/*!****************************************************!*\
  !*** ./src/app/modules/order-lazy/order.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderModule": () => (/* binding */ OrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-routing.module */ 15393);
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../orders/order.component */ 98606);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_Material_Material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Material/Material.module */ 53732);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ 54655);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utility.service */ 67278);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/order.service */ 68132);
/* harmony import */ var _product_filter_product_filter_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-filter/product-filter.module */ 40613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);










class OrderModule {
}
OrderModule.ɵfac = function OrderModule_Factory(t) { return new (t || OrderModule)(); };
OrderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService, src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService, src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__.OrderService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            src_app_Material_Material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _product_filter_product_filter_module__WEBPACK_IMPORTED_MODULE_6__.ProductFilterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_orders_order_component__WEBPACK_IMPORTED_MODULE_1__.OrderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_Material_Material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _product_filter_product_filter_module__WEBPACK_IMPORTED_MODULE_6__.ProductFilterModule] }); })();


/***/ }),

/***/ 98606:
/*!*******************************************!*\
  !*** ./src/app/orders/order.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderComponent": () => (/* binding */ OrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ 68132);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utility.service */ 67278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var src_app_products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/products/product-filter/product-filter.component */ 69931);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 11494);





















function OrderComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No se encontr\u00F3 la categor\u00EDa del cliente, intente nuevamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", client_r10.payload.val().fantasyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", client_r10.payload.val().fantasyName, " ");
} }
function OrderComponent_div_2_mat_form_field_19_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Ingrese la fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrderComponent_div_2_mat_form_field_19_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r12.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "mat-datepicker-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "mat-datepicker", null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.date)("matDatepicker", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r11);
} }
function OrderComponent_div_2_div_20_mat_radio_group_26_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-radio-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const iva_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", iva_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", iva_r21, "% ");
} }
function OrderComponent_div_2_div_20_mat_radio_group_26_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-radio-group", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrderComponent_div_2_div_20_mat_radio_group_26_Template_mat_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r22.iva = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderComponent_div_2_div_20_mat_radio_group_26_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r15.iva);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r15.ivas);
} }
function OrderComponent_div_2_div_20_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Gimnasios y Kiosko IVA 0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_20_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Especifique el cliente para operar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_20_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Haga el pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_20_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*No hay stock suficiente de al menos uno de los productos seleccionados");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "product-filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function OrderComponent_div_2_div_20_Template_input_keyup_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r24.filter(_r14.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_20_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r26.beforeShowOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Crear Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_20_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r27.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Anular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "IVA:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, OrderComponent_div_2_div_20_mat_radio_group_26_Template, 2, 2, "mat-radio-group", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, OrderComponent_div_2_div_20_span_27_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, OrderComponent_div_2_div_20_span_28_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, OrderComponent_div_2_div_20_span_29_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, OrderComponent_div_2_div_20_span_30_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.clientCategory != "Gimnasio" && ctx_r5.clientCategory != "Kiosko");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.clientCategory == "Gimnasio" || ctx_r5.clientCategory == "Kiosko");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.orderEmpty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.noStock);
} }
function OrderComponent_div_2_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "----------PRIMERO SELECCIONE EL CLIENTE PARA COMENZAR A OPERAR----------");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_table_24_tr_18_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Aplicar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_table_24_tr_18_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_table_24_tr_18_button_24_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const p_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r35.discount($event, p_r29, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Anular");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_table_24_tr_18_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0\u00A0Descuento: ", p_r29.discount, "%");
} }
function OrderComponent_div_2_table_24_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_table_24_tr_18_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const p_r29 = restoredCtx.$implicit; const i_r30 = restoredCtx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r39.updateOrderItemQuantity(p_r29, -1, i_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_table_24_tr_18_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const p_r29 = restoredCtx.$implicit; const i_r30 = restoredCtx.index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r41.updateOrderItemQuantity(p_r29, 1, i_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "form", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function OrderComponent_div_2_table_24_tr_18_Template_form_submit_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const p_r29 = restoredCtx.$implicit; const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](22); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r42.discount($event, p_r29, +_r31.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, OrderComponent_div_2_table_24_tr_18_button_23_Template, 2, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, OrderComponent_div_2_table_24_tr_18_button_24_Template, 2, 0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, OrderComponent_div_2_table_24_tr_18_span_25_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", p_r29.product.title, "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](p_r29.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r28.getStock(p_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 9, p_r29.discountPrice, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 12, p_r29.discountPrice * p_r29.quantity, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", p_r29.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.order.length > ctx_r28.orderIndex && p_r29.discount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.order.length > ctx_r28.orderIndex && p_r29.discount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.order.length > ctx_r28.orderIndex && p_r29.discount != 0);
} }
function OrderComponent_div_2_table_24_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function OrderComponent_div_2_table_24_Template_table_matSortChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r43.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u00A0\u00A0\u00A0Quitar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\u00A0Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u00A0Descuento(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, OrderComponent_div_2_table_24_tr_18_Template, 26, 15, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "UNIDADES TOTALES");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "IMPORTE TOTAL(incluye el IVA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Precio unitario ", ctx_r7.clientCategory, "\u00A0s/iva");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.currentItemsToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r7.quantity, "\u00A0 Unidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](28, 4, ctx_r7.ordersService.getTotalAmount(ctx_r7.orderProducts) * (1 + ctx_r7.iva / 100), "1.1-1"), "");
} }
function OrderComponent_div_2_div_25_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Especifique el cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_25_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Haga el pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_25_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*No hay stock suficiente de al menos uno de los productos seleccionados");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_25_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Gimnasios y Kioskos 0% IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_25_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_25_li_21_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r51.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "<< Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_25_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_25_li_22_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r53.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Pr\u00F3xima >>");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function OrderComponent_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r55.beforeShowOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Crear Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_25_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r57.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Anular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, OrderComponent_div_2_div_25_span_5_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, OrderComponent_div_2_div_25_span_6_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, OrderComponent_div_2_div_25_span_7_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, OrderComponent_div_2_div_25_span_8_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nav", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ul", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "P\u00E1gina actual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, OrderComponent_div_2_div_25_li_21_Template, 3, 0, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, OrderComponent_div_2_div_25_li_22_Template, 3, 0, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_25_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); ctx_r58.itemsPerPage = 10; ctx_r58.actualPage = 0; return ctx_r58.refreshPages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "10 por p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_25_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); ctx_r59.itemsPerPage = 20; ctx_r59.actualPage = 0; return ctx_r59.refreshPages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "20 por p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.orderEmpty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.noStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.clientCategory == "Gimnasio" || ctx_r8.clientCategory == "Kiosko");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.actualPage + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.actualPage > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.actualPage < ctx_r8.totalPages - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c0, ctx_r8.itemsPerPage == 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c0, ctx_r8.itemsPerPage == 20));
} }
function OrderComponent_div_2_div_27_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_27_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r64.createOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Crear Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_27_tr_12_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", p_r66.product.title, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
} }
function OrderComponent_div_2_div_27_tr_12_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](p_r66.quantity);
} }
function OrderComponent_div_2_div_27_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderComponent_div_2_div_27_tr_12_td_1_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrderComponent_div_2_div_27_tr_12_td_2_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", p_r66.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", p_r66.quantity != 0);
} }
function OrderComponent_div_2_div_27_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_27_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r72.createOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Crear Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_27_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_27_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r74.showOrder = !ctx_r74.showOrder; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrderComponent_div_2_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrderComponent_div_2_div_27_button_2_Template, 2, 0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderComponent_div_2_div_27_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r76.showOrder = !ctx_r76.showOrder; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, OrderComponent_div_2_div_27_tr_12_Template, 3, 2, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, OrderComponent_div_2_div_27_button_15_Template, 2, 0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, OrderComponent_div_2_div_27_button_16_Template, 2, 0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.ordersService.clients);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.orderProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.orderProductsLength() > 10 && ctx_r9.ordersService.clients);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.orderProductsLength() > 10);
} }
function OrderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "PEDIDO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrderComponent_div_2_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r78.fantasyName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-autocomplete", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, OrderComponent_div_2_mat_option_17_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, OrderComponent_div_2_mat_form_field_19_Template, 7, 3, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, OrderComponent_div_2_div_20_Template, 31, 5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, OrderComponent_div_2_span_22_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, OrderComponent_div_2_table_24_Template, 29, 7, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, OrderComponent_div_2_div_25_Template, 29, 14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, OrderComponent_div_2_div_27_Template, 17, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](16);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r1.showOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r1.myControl)("matAutocomplete", _r2)("ngModel", ctx_r1.fantasyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 11, ctx_r1.filteredOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.appUser == null ? null : ctx_r1.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.clientCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.clientCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.clientCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.clientCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showOrder);
} }
class OrderComponent {
    constructor(productService, route, ordersService, orderService, auth, router, utilityService) {
        this.productService = productService;
        this.route = route;
        this.ordersService = ordersService;
        this.orderService = orderService;
        this.auth = auth;
        this.router = router;
        this.utilityService = utilityService;
        //paginator
        this.actualPage = 0;
        this.totalPages = 1;
        this.itemsPerPage = 10;
        //paginator bootstrap
        this.currentItemsToShow = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false);
        this.fantasyName = "";
        this.clients = [];
        this.orderProducts = [];
        this.disc = 0;
        this.iva = 21;
        this.ivas = [0, 10.5, 21];
        this.quantity = 0;
        this.client = true;
        this.orderEmpty = false;
        this.aproved = true;
        this.negative = false;
        this.noStock = false;
        this.showOrder = false;
        this.catNull = false;
        this.query = { client: "", seller: "", date: "", dateRange: { start: new Date(2017, 1, 1), end: new Date(2040, 1, 1) } };
        // this.order = this.ordersService.getOrder();
    }
    ngOnInit() {
        this.subscription = this.orderService.getOrderNumber().subscribe(orderNumber => {
            if (!orderNumber)
                this.orderService.createOrderNumber();
            this.orderService.orderNumber = orderNumber;
        });
        this.subscription2 = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.orderIndex = this.orderService.orderIndex;
            this.subscription3 = this.orderService.getOrder().subscribe(order => {
                this.orderService.clearOrder();
                this.order = order;
                if (this.order.length == 0)
                    this.orderService.createOrderEmpty();
                this.orderIndex = -1;
                for (let i = 0; i < this.order.length; i++) {
                    if (this.appUser && this.order[i].payload.val().sellerName == this.appUser.name) {
                        this.orderIndex = i;
                        this.orderProducts = this.order[this.orderIndex].payload.val().products;
                        break;
                    }
                }
                if (this.appUser && this.orderIndex == -1) {
                    this.orderService.createOrderEmpty();
                }
                this.subscription4 = this.ordersService.getAllClients().subscribe(clients => {
                    var _a;
                    this.filteredClients = clients;
                    this.clients = [];
                    for (let i = 0; i < this.filteredClients.length; i++) {
                        if (this.filteredClients[i].payload.val().designatedSeller == this.appUser.name || ((_a = this.appUser) === null || _a === void 0 ? void 0 : _a.isAdmin) == true) {
                            this.clients.push(this.filteredClients[i]);
                        }
                    }
                    this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(value => value ? this._filter(value) : this._filter("")));
                });
                this.subscription5 = this.route.queryParamMap.subscribe(params => {
                    this.prodsCategory = params.get('prodsCategory');
                    this.filteredOrder = [];
                    if (this.orderIndex >= 0 && this.order[0]) {
                        for (let i = 0; i < this.order[this.orderIndex].payload.val().products.length; i++) {
                            if (this.order[this.orderIndex].payload.val().products[i].product.prodsCategory == this.prodsCategory) {
                                this.order[this.orderIndex].payload.val().products[i].quantity = this.orderProducts[i].quantity;
                                this.filteredOrder.push(this.orderProducts[i]);
                            }
                        }
                        if (this.filteredOrder.length == 0) {
                            for (let i = 0; i < this.order[this.orderIndex].payload.val().products.length; i++) {
                                this.filteredOrder.push(this.order[this.orderIndex].payload.val().products[i]);
                            }
                        }
                    }
                    this.showedProducts = this.filteredOrder;
                    if (!this.prodsCategory)
                        this.showedProducts = this.orderProducts;
                    this.actualPage = 0;
                    this.refreshPages();
                });
            });
        });
    }
    pickClient(clientCategory) {
        // if(!this.clientCategory) {
        //   this.catNull = true;
        //   setTimeout(()=>{
        //     this.catNull = false;
        //   }, 2000)
        // }
        let price;
        let products = [];
        if (!this.orderProducts)
            return;
        for (let i = 0; i < this.orderProducts.length; i++) {
            // switch (this.clientCategory) {
            switch (clientCategory) {
                case null:
                    // this.orderProducts[i].price = this.orderProducts[i].product.discPrice1;
                    // this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice1*(1-this.orderProducts[i].discount/100) ;
                    throw Error("Error en el canal de venta");
                    break;
                case "Distribuidor":
                    this.orderProducts[i].price = this.orderProducts[i].product.discPrice1;
                    this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice1 * (1 - this.orderProducts[i].discount / 100);
                    break;
                case "Comercio":
                    this.orderProducts[i].price = this.orderProducts[i].product.discPrice2;
                    this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice2 * (1 - this.orderProducts[i].discount / 100);
                    break;
                case "Kiosko":
                    this.orderProducts[i].price = this.orderProducts[i].product.discPrice3;
                    this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice3 * (1 - this.orderProducts[i].discount / 100);
                    this.iva = 0;
                    break;
                case "Gimnasio":
                    this.orderProducts[i].price = this.orderProducts[i].product.discPrice4;
                    this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice4 * (1 - this.orderProducts[i].discount / 100);
                    this.iva = 0;
                    break;
            }
        }
        this.showedProducts = this.orderProducts;
        if (this.fantasyName)
            this.router.navigateByUrl('/orders/order');
    }
    sortData(sort) {
        const data = this.showedProducts;
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'title': return this.compare(a.product.title, b.product.title, isAsc);
                case 'quantity': return this.compare(a.quantity, b.quantity, isAsc);
                case 'unitPrice': return this.compare(a.discountPrice, b.discountPrice, isAsc);
                case 'totalPriceProduct': return this.compare(a.discountPrice * a.quantity, b.discountPrice * b.quantity, isAsc);
                default: return 0;
            }
        });
    }
    getTitle(item) {
        return item.title;
    }
    getQuantity(item) {
        if (!this.order)
            return 0;
        for (let i = 0; i < this.order[this.orderIndex].payload.val().products.length; i++) {
            if (this.order[this.orderIndex].payload.val().products[i].product.title == item.title)
                return this.order[this.orderIndex].payload.val().products[i].quantity;
        }
        this.clients;
        return 0;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    _filter(value) {
        this.clientCategory = null;
        const filterValue = value.toLowerCase();
        if (!this.clients)
            return;
        let listFiltrada = this.clients.filter(client => client.payload.val().fantasyName.toLowerCase().includes(filterValue));
        if (listFiltrada.length > 0) {
            this.clientCategory = listFiltrada[0].payload.val().clientCategory;
            this.pickClient(this.clientCategory);
        }
        return listFiltrada;
    }
    filter(prodQuery) {
        this.prodQuery = prodQuery;
        if (prodQuery == '') {
            // this.showedProducts = this.filteredOrder;
            this.showedProducts = this.orderProducts;
            return;
        }
        this.showedProducts = (prodQuery) ?
            this.showedProducts.filter((p) => p.product.title.toLowerCase().includes(prodQuery.toLowerCase())) :
            this.showedProducts;
        this.actualPage = 0;
        this.refreshPages();
    }
    updateOrderItemQuantity(product, quantityChange, index) {
        for (let i = 0; i < this.orderProducts.length; i++) {
            if (product.product.title == this.orderProducts[i].product.title) {
                if (this.orderProducts[i].quantity + quantityChange < 0)
                    return;
                if (this.orderProducts[i].quantity + quantityChange > this.orderService.getStock(product)) {
                    this.noStock = true;
                    setTimeout(() => {
                        this.noStock = false;
                    }, 2000);
                    return;
                }
                //cartProducts[i].quantity += quantityChange;
                this.orderProducts[i].quantity += quantityChange;
                break;
            }
        }
        this.quantity += quantityChange;
    }
    orderProductsLength() {
        let result = 0;
        for (let i = 0; i < this.orderProducts.length; i++) {
            if (this.orderProducts[i].quantity > 0) {
                result++;
            }
        }
        return result;
    }
    // buscarUsuario(criterio: string) {
    //   for (const usuario of this.tuServicio.usuarios) {
    //     if (usuario.algunAtributo === criterio) {
    //       const mensajeId = usuario.mensajeId;
    //       const mensaje = this.tuServicio.getMensajes().find(m => m.id === mensajeId);
    //       return mensaje;
    //     }
    //   }
    //   return null; // si no se encuentra el usuario o el mensaje, devuelve null
    // }
    beforeShowOrder() {
        if (!this.orderService.isStock(this.order[this.orderIndex])) {
            this.noStock = true;
            setTimeout(() => {
                this.noStock = false;
            }, 2000);
            return;
        }
        this.orderEmpty = true;
        for (let i = 0; i < this.orderProducts.length; i++) {
            if (this.orderProducts[i].quantity != 0) {
                this.orderEmpty = false;
            }
        }
        if (this.orderEmpty) {
            setTimeout(() => {
                this.orderEmpty = false;
            }, 2000);
            return;
        }
        if (this.orderEmpty)
            return;
        if (this.fantasyName == "") {
            this.client = false;
            setTimeout(() => {
                this.client = true;
            }, 2000);
            return;
        }
        this.showOrder = !this.showOrder;
    }
    createOrder() {
        let clientOk = false;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.fantasyName.toLowerCase().includes(this.clients[i].payload.val().fantasyName.toLowerCase()))
                clientOk = true;
        }
        if (clientOk) {
            if (confirm('Está segur@ que quiere crear el pedido? No podrá modificarlo')) {
                this.orderService.createOrder(this.order[this.orderIndex].payload.val().sellerName, this.fantasyName, this.iva, this.orderProducts, this.quantity, this.date);
                this.fantasyName = "";
                this.router.navigateByUrl('/orders/orders');
                this.orderService.resetOrder(this.orderIndex);
            }
            return;
        }
        confirm('El cliente es incorrecto');
    }
    reset() {
        if (confirm('Está segur@ que quiere anular el pedido que no ha creado?')) {
            this.quantity = 0;
            for (let i = 0; i < this.orderProducts.length; i++) {
                this.orderProducts[i].quantity = 0;
            }
            this.showOrder = false;
            this.orderService.resetOrder(this.orderIndex);
            this.fantasyName = "";
        }
    }
    discount(e, p, disc) {
        for (let i = 0; i < this.orderProducts.length; i++) {
            if (p.product.title == this.orderProducts[i].product.title) {
                this.orderProducts[i].discount = disc;
                this.orderProducts[i].discountPrice = this.orderProducts[i].price * (1 - disc / 100);
                this.disc = 0;
                break;
            }
        }
    }
    updatePrices() {
        // this.clientCategory = null;
    }
    getStock(product) {
        return this.orderService.getStock(product);
    }
    unloadHandler(event) {
        this.orderService.clearOrder();
    }
    //funciones paginator bootstrap
    prevPage() {
        if (this.actualPage == 0)
            return;
        this.actualPage -= 1;
        this.refreshPages();
    }
    nextPage() {
        if (this.actualPage == this.totalPages)
            return;
        this.actualPage += 1;
        this.refreshPages();
    }
    refreshPages() {
        this.totalPages = Math.ceil(this.showedProducts.length / this.itemsPerPage);
        this.currentItemsToShow = [];
        for (let i = this.actualPage * this.itemsPerPage; i < this.actualPage * this.itemsPerPage + this.itemsPerPage; i++) {
            if (i == this.showedProducts.length)
                return;
            this.currentItemsToShow.push(this.showedProducts[i]);
        }
    }
    //funciones paginator bootstrap
    ngOnDestroy() {
        this.orderService.clearOrder();
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
        this.subscription4.unsubscribe();
        this.subscription5.unsubscribe();
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService)); };
OrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["order"]], hostBindings: function OrderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("beforeunload", function OrderComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 2, consts: [[1, "SCContainer"], [4, "ngIf"], [1, "row"], [1, "col-3", "ms-3"], [1, "col", "ms-1", "d-lg-none"], [1, "cart"], ["id", "productsList", 3, "hidden"], ["appearance", "fill", 1, "example-full-width", "me-1"], ["type", "text", "placeholder", "Elija uno", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete", "ngModel", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", "class", "example-full-width ", 4, "ngIf"], [1, "my-3"], ["matSort", "", 3, "matSortChange", 4, "ngIf"], ["class", "ms-3", 4, "ngIf"], ["id", "productsList", "class", "row", 4, "ngIf"], [3, "value"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "name", "date", "required", "", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["id", "start", 1, "row", "mt-5", "mt-sm-3"], [1, "col-4", "col-sm-3", "mt-3", "col-lg-3"], [1, "input-group"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "   Buscar producto...", 1, "border-end-0", "border", "rounded-pill", 3, "keyup"], ["prodQuery", ""], [1, "col-8", "col-sm-4", "col-lg-3"], [1, "row", "mt-2"], [1, "col", "col-sm-6", "col-lg-5"], ["mat-raised-button", "", "color", "basic", 1, "left-btn", "ms-2", 3, "click"], [1, "col"], ["mat-raised-button", "", "color", "warn", 1, "left-btn", "ms-lg-4", 3, "click"], [1, "col", "mt-3", "mt-sm-0"], [1, "mt-1", "col-2", "col-sm-2", "col-lg-1"], ["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "text-danger border border-danger p-2 pe-4 rounded", 4, "ngIf"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["style", "margin:5px", "class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "margin", "5px", 3, "value"], [1, "text-danger", "border", "border-danger", "p-2", "pe-4", "rounded"], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "title"], ["id", "quantity", "mat-sort-header", "quantity"], ["mat-sort-header", "stock"], ["mat-sort-header", "unitPrice"], ["mat-sort-header", "totalPriceProduct"], ["mat-sort-header", "quit"], ["mat-sort-header", "add"], ["mat-sort-header", "discount"], [4, "ngFor", "ngForOf"], ["mat-sort-header", "total"], ["mat-sort-header", "showTotalQuantity"], ["mat-sort-header", "totalPrice"], ["mat-sort-header", "showTotal"], ["mat-raised-button", "", "color", "basic", 1, "left-btn", 3, "click"], ["id", "form", 3, "submit"], ["type", "number", 3, "value"], ["disc", ""], ["type", "submit", 4, "ngIf"], [3, "click", 4, "ngIf"], ["type", "submit"], [3, "click"], [1, "ms-3"], ["mat-raised-button", "", "color", "warn", 1, "left-btn", 3, "click"], ["aria-label", "Page navigation example", 1, "mb-3", "mt-3"], [1, "pagination"], [1, "page-item", "disabled"], [1, "page-link"], [1, "page-item", "disabled", "me-1"], ["class", "page-item", 4, "ngIf"], [1, "page-item", "ms-3", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", 3, "ngClass"], [1, "page-item"], ["id", "productsList", 1, "row"], ["class", "left-btn", "mat-raised-button", "", "color", "basic", 3, "click", 4, "ngIf"], ["class", "left-btn", "mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderComponent_h3_1_Template, 2, 0, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrderComponent_div_2_Template, 28, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.catNull);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.catNull);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, src_app_products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_5__.ProductFilterComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe], styles: [".cart[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6Im9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 68132:
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.service */ 12331);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ 66082);





class OrderService {
    constructor(auth, db, ordersService, productService) {
        this.auth = auth;
        this.db = db;
        this.ordersService = ordersService;
        this.productService = productService;
        this.hasDiscount = false;
        this.orderIndex = -1;
        this.orderNumber = [];
        console.log('order service constructor');
        this.subscription2 = this.productService.getAllProducts().subscribe((products) => {
            this.products = products;
        });
        this.appUser = this.ordersService.appUser;
        const subscription = this.getOrder().subscribe((order) => {
            this.order = order;
            for (let i = 0; i < this.order.length; i++) {
                if (this.order && this.appUser && this.order[i].payload.val().seller == this.appUser.name) {
                    this.orderIndex = i;
                    this.orderId = this.order[i].key;
                    break;
                }
            }
        });
        if (!this.order)
            this.createOrderEmpty(); // pruebo esto
    }
    // ................................................order methods................................................
    isProductStock(cartProduct) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].title == cartProduct.title && this.products[i].stock < cartProduct.quantity)
                return false;
        }
        return true;
    }
    isStock(cartOrder) {
        for (let i = 0; i < cartOrder.payload.val().products.length; i++) {
            if (cartOrder.payload.val().products[i].quantity > 0 && !this.isProductStock(cartOrder.payload.val().products[i])) {
                return false;
            }
        }
        return true;
    }
    getStock(product) {
        if (this.products) {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].payload.val().title == product.product.title)
                    return this.products[i].payload.val().stock;
            }
        }
        return 0;
    }
    createOrderEmpty() {
        if (!this.appUser)
            return;
        if (!this.products)
            return;
        let products = [];
        for (let i = 0; i < this.products.length; i++) {
            products.push({
                "price": this.products[i].payload.val().discPrice1,
                "discountPrice": this.products[i].payload.val().discPrice1,
                "product": this.products[i].payload.val(),
                "productId": this.products[i].key,
                "quantity": 0,
                "discount": 0
            });
        }
        let result = this.db.list('/order/').push({
            "orderItemsCount": 0,
            "products": products,
            "sellerName": this.appUser.name,
        });
    }
    createOrderNumber() {
        let result = this.db.list('/orderNumber/').push({
            "orderNumber": 0
        });
    }
    resetOrder(orderIndex) {
        this.db.object('/order/' + this.order[orderIndex].key).remove();
    }
    clearOrder() {
        var _a;
        //this.db.object('/order/').remove(); elimina todo "order" de la base
        if (!this.order)
            return;
        for (let i = 0; i < this.order.length; i++) {
            if (this.order[i].payload.val().seller == ((_a = this.appUser) === null || _a === void 0 ? void 0 : _a.name))
                this.db.object('/order/' + this.order[i].key).remove();
        }
    }
    getOrder() {
        let result = this.db.list('/order').snapshotChanges();
        return result;
    }
    getOrderNumber() {
        let result = this.db.list('/orderNumber').snapshotChanges();
        return result;
    }
    updateOrderItemQuantity(order, product, change, orderIndex) {
        for (let i = 0; i < this.products.length; i++) {
            if (product.productId == order[orderIndex].payload.val().products[i].productId) {
                this.db.object('/order/' + order[orderIndex].key + '/products/' + i).update({
                    "quantity": order[orderIndex].payload.val().products[i].quantity + change
                });
                break;
            }
        }
    }
    createOrder(seller, fantasyName, iva, cartOrder, quantity, date) {
        let prods = [];
        let clientCategory = this.ordersService.getClientCategory(fantasyName);
        let amount = 0;
        for (let i = 0; i < cartOrder.length; i++) {
            if (parseInt(cartOrder[i].quantity) != 0) { //solo guardo los prod con quant > 0
                prods.push({
                    "title": cartOrder[i].product.title,
                    "category": cartOrder[i].product.prodsCategory,
                    "discountPrice": cartOrder[i].discountPrice,
                    "discount": cartOrder[i].discount,
                    "quantity": cartOrder[i].quantity,
                    "productId": cartOrder[i].productId
                });
                amount += parseInt(cartOrder[i].quantity) * parseFloat(cartOrder[i].discountPrice) * (1 + iva / 100);
                if (parseFloat(cartOrder[i].discount) != 0)
                    this.hasDiscount = true;
            }
            // else if (cartOrder[i].quantity != 0) {
            //   prods.push({
            //     "title": cartOrder[i].product.title,
            //     "category": cartOrder[i].product.prodsCategory,
            //     "discountPrice": cartOrder[i].discountPrice,
            //     "discount" : cartOrder[i].discount,
            //     "quantity": cartOrder[i].quantity
            //   });
            // }
        }
        let result = this.db.list('/ordersDetail/').push({
            "products": prods
        });
        let time = new Date();
        time.getHours();
        //time.getMinutes();
        let inDebt = this.ordersService.isClientInDebt(fantasyName, this.ordersService.orders);
        let isAproved = inDebt && time.getHours() <= 20; //si los hacen despues de las 21 salen sin aprobacion
        if (iva != 21 && clientCategory != "Gimnasio" && clientCategory != "Kiosko")
            isAproved = false;
        if (date == null) {
            date = time.getTime();
        }
        else
            date = date.unix() * 1000;
        if (amount)
            amount = Math.round(amount * 10) / 10;
        if (result.key) {
            let order = {
                "amountWithIva": amount,
                "aproved": isAproved,
                "clientInDebt": inDebt,
                "date": date,
                "fantasyName": fantasyName,
                "hasDiscount": this.hasDiscount,
                "iva": iva,
                "orderDetailKey": result.key,
                "seller": seller,
                "orderNumber": this.orderNumber[0].payload.val().orderNumber
            };
            this.db.list('/orders/').push(order);
        }
        else
            console.log('la operacion de guardado de la orden falló');
        this.incrementOrderNumber();
        this.productService.updateStocks(prods, this.products, false);
    }
    incrementOrderNumber() {
        let orderNumb = parseInt(this.orderNumber[0].payload.val().orderNumber) + 1;
        return this.db.object('/orderNumber/' + this.orderNumber[0].key).update({ "orderNumber": orderNumb });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_order-lazy_order_module_ts.js.map