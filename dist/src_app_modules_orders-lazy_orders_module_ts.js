(self["webpackChunke_commerce_mosh"] = self["webpackChunke_commerce_mosh"] || []).push([["src_app_modules_orders-lazy_orders_module_ts"],{

/***/ 26240:
/*!**************************************************************!*\
  !*** ./src/app/modules/orders-lazy/orders-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersRoutingModule": () => (/* binding */ OrdersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth-guard.service */ 78968);
/* harmony import */ var src_app_orders_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/orders/orders.component */ 28686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const routes = [
    { path: '', component: src_app_orders_orders_component__WEBPACK_IMPORTED_MODULE_1__.OrdersComponent, canActivate: [src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
];
class OrdersRoutingModule {
}
OrdersRoutingModule.ɵfac = function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); };
OrdersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3465:
/*!******************************************************!*\
  !*** ./src/app/modules/orders-lazy/orders.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* binding */ OrdersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_Material_Material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Material/Material.module */ 53732);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ 54655);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utility.service */ 67278);
/* harmony import */ var _product_filter_product_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-filter/product-filter.module */ 40613);
/* harmony import */ var src_app_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/orders/orders.component */ 28686);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-routing.module */ 26240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);










class OrdersModule {
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(); };
OrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService, src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService, src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_5__.OrdersService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_6__.OrdersRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            src_app_Material_Material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _product_filter_product_filter_module__WEBPACK_IMPORTED_MODULE_3__.ProductFilterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [src_app_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__.OrdersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _orders_routing_module__WEBPACK_IMPORTED_MODULE_6__.OrdersRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_Material_Material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _product_filter_product_filter_module__WEBPACK_IMPORTED_MODULE_3__.ProductFilterModule] }); })();


/***/ }),

/***/ 28686:
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/stock.service */ 83188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 1562);



















function OrdersComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "PEDIDOS RECIENTES SIN APROBAR: \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matBadge", ctx_r3.ordersNotAproved);
} }
function OrdersComponent_div_0_div_12_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrdersComponent_div_0_div_12_tr_16_Template_a_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const order_r24 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r26.toggleAccordion(order_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 3, order_r24.date, "dd/MM/yyyy HH:mm"), "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", order_r24.fantasyName, "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](order_r24.seller);
} }
function OrdersComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-expansion-panel", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, OrdersComponent_div_0_div_12_tr_16_Template, 9, 6, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.notAprovedOrders);
} }
function OrdersComponent_div_0_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Monto c/IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00BFaprobado?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Desc?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Deudor?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_74_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrdersComponent_div_0_tr_74_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r34.aprove(order_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "aprobar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", order_r28.payload.val().aproved);
} }
function OrdersComponent_div_0_tr_74_table_29_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r39.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r39.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 5, prod_r39.discountPrice, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 8, prod_r39.quantity * prod_r39.discountPrice, "1.1-1"), "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r39.discount ? "%" + prod_r39.discount : "-");
} }
function OrdersComponent_div_0_tr_74_table_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Unid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Importe/unid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Importe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, OrdersComponent_div_0_tr_74_table_29_tr_12_Template, 13, 11, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r31.orderDetail.products);
} }
function OrdersComponent_div_0_tr_74_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrdersComponent_div_0_tr_74_td_30_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r40.exportAsPDF(order_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !order_r28.payload.val().aproved);
} }
function OrdersComponent_div_0_tr_74_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrdersComponent_div_0_tr_74_td_31_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); const order_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r44.remove(order_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, OrdersComponent_div_0_tr_74_button_13_Template, 2, 1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-expansion-panel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("opened", function OrdersComponent_div_0_tr_74_Template_mat_expansion_panel_opened_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const order_r28 = restoredCtx.$implicit; const i_r29 = restoredCtx.index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r47.expandOrderDetail(order_r28, i_r29); })("closed", function OrdersComponent_div_0_tr_74_Template_mat_expansion_panel_closed_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r49.isExpanded = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, OrdersComponent_div_0_tr_74_table_29_Template, 13, 1, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, OrdersComponent_div_0_tr_74_td_30_Template, 4, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, OrdersComponent_div_0_tr_74_td_31_Template, 4, 0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", order_r28.payload.val().fantasyName, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", order_r28.payload.val().seller, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 14, order_r28.payload.val().date, "dd/MM/yyyy HH:mm"), "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 17, order_r28.payload.val().amountWithIva, "1.1-1"), "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", order_r28.payload.val().aproved ? "SI" : "NO", "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.appUser != undefined && ctx_r20.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("%", order_r28.payload.val().iva, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", order_r28.payload.val().fullPaymentDate ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 20, order_r28.payload.val().fullPaymentDate, "dd/MM/yyyy") : "NO", "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", order_r28.payload.val().hasDiscount ? "SI" : "NO", "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", order_r28.payload.val().clientInDebt ? "SI" : "NO", "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx_r20.openAccordion === i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.orderDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.ordersService.clients);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.appUser.isAdmin);
} }
function OrdersComponent_div_0_button_81_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrdersComponent_div_0_button_81_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r50.downloadAll(ctx_r50.currentItemsToShow); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Descargar todos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [10, 20]; };
function OrdersComponent_div_0_mat_paginator_82_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-paginator", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function OrdersComponent_div_0_mat_paginator_82_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r52.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx_r22.filteredOrders.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0));
} }
function OrdersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "PEDIDOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Crear Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, OrdersComponent_div_0_div_11_Template, 5, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, OrdersComponent_div_0_div_12_Template, 17, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrdersComponent_div_0_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r54.clientValue = $event; })("ngModelChange", function OrdersComponent_div_0_Template_input_ngModelChange_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r56.filter(_r5.value); })("keyup", function OrdersComponent_div_0_Template_input_keyup_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r57.filter(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrdersComponent_div_0_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r58.sellerValue = $event; })("keyup", function OrdersComponent_div_0_Template_input_keyup_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r59.filterBySeller(_r6.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrdersComponent_div_0_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r60.dateValue = $event; })("keyup", function OrdersComponent_div_0_Template_input_keyup_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](36); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r61.filterByDate(_r7.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "form", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function OrdersComponent_div_0_Template_form_ngSubmit_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r62.searchDateRange(ctx_r62.range.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Ingrese un rango de fechas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-date-range-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "mat-datepicker-toggle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "mat-date-range-picker", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, OrdersComponent_div_0_mat_error_49_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, OrdersComponent_div_0_mat_error_50_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "buscar por rango");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 28, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrdersComponent_div_0_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r63.clearRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "borrar b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, OrdersComponent_div_0_th_64_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, OrdersComponent_div_0_th_65_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, OrdersComponent_div_0_th_66_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, OrdersComponent_div_0_th_67_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, OrdersComponent_div_0_th_68_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, OrdersComponent_div_0_th_69_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, OrdersComponent_div_0_th_70_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, OrdersComponent_div_0_tr_74_Template, 32, 23, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](80, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, OrdersComponent_div_0_button_81_Template, 4, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, OrdersComponent_div_0_mat_paginator_82_Template, 1, 4, "mat-paginator", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](48);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.ordersNotAproved > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.ordersNotAproved > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.clientValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.sellerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.range)("rangePicker", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.end.hasError("matEndDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.currentItemsToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](80, 21, ctx_r0.getTotal(), "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.currentItemsToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.filteredOrders);
} }
function OrdersComponent_ng_template_1_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r65.debtorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r65.orderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r65.orderDebt);
} }
function OrdersComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Estimado vendedor: los siguientes clientes tienen deuda. Por favor regularice la situaci\u00F3n.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Fecha del pedido en deuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Monto del pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, OrdersComponent_ng_template_1_tr_11_Template, 7, 3, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrdersComponent_ng_template_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r66.debtWarning = !ctx_r66.debtWarning; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.debtors);
} }
class OrdersComponent {
    constructor(ordersService, auth, datepipe, stockService, dateAdapter) {
        this.ordersService = ordersService;
        this.auth = auth;
        this.datepipe = datepipe;
        this.stockService = stockService;
        this.dateAdapter = dateAdapter;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl()
        });
        this.recentUserOrders = [];
        this.userOrders = [];
        this.ordersNotAproved = 0;
        this.notAprovedOrders = [];
        this.query = { client: "", seller: "", date: "", dateRange: { start: new Date(2017, 1, 1), end: new Date(2040, 1, 1) } };
        this.isExpanded = false;
        this.debtWarning = false;
        this.openAccordion = -1;
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }
    ngOnInit() {
        this.orders = this.ordersService.orders;
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            //this.appUser = {name : "Natalia Guevara"}
            this.ordersService.getAllOrders().subscribe((orders) => {
                this.orders = orders;
                this.userClients = this.ordersService.getUserClients(this.appUser.name);
                this.recentUserOrders = [];
                this.userOrders = [];
                this.debtors = [];
                this.dateRangefilteredOrders = [];
                this.currentItemsToShow = [];
                this.notAprovedOrders = [];
                this.ordersNotAproved = 0;
                for (let i = 0; i < this.orders.length; i++) {
                    let isUserOrder = this.orders[i].payload.val().seller == this.appUser.name;
                    let isUserClient = this.isClientInUserClients(this.orders[i].payload.val().fantasyName, this.userClients);
                    let isRecentOrder = Date.now() - this.orders[i].payload.val().date < _constants__WEBPACK_IMPORTED_MODULE_1__.TOLERATED_DAYS * 24 * 60 * 60 * 1000; //dias mora
                    if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager || isUserOrder || isUserClient)) {
                        this.userOrders.push(this.orders[i]);
                        if (this.orders[i].payload.val().aproved == false) {
                            this.notAprovedOrders.push(this.orders[i].payload.val());
                            this.ordersNotAproved += 1;
                        }
                    }
                    if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager || isUserOrder || isUserClient) && isRecentOrder) {
                        this.recentUserOrders.push(this.orders[i]);
                    }
                }
                for (let i = 0; i < this.recentUserOrders.length; i++) {
                    if (this.ordersService.isClientInDebt(this.recentUserOrders[i].payload.val().fantasyName, this.recentUserOrders)) {
                        this.debtors = [];
                        let date = new Date(this.recentUserOrders[i].payload.val().date);
                        this.debtors.push({
                            "debtorName": this.recentUserOrders[i].payload.val().fantasyName,
                            "orderDate": date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
                            "orderDebt": this.recentUserOrders[i].payload.val().amountWithIva
                        });
                        this.debtWarning = true;
                    }
                }
                this.dateRangefilteredOrders = this.datefilteredOrders = this.filteredOrders = this.recentUserOrders; //ver que hace??
                this.currentItemsToShow = this.filteredOrders;
                //genera el string para la fecha de HOY
                let today = new Date().getDate().toString();
                let mon = new Date().getMonth() + 1;
                let year = new Date().getFullYear();
                let month = mon.toString();
                if (mon < 10) {
                    month = "0" + mon.toString();
                }
                //this.filterByDate(today + "/" + month); //se abre con los pedidos de hoy
                this.dateValue = today + "/" + month + "/" + year;
                this.filterByDate(this.dateValue); //se abre con los pedidos de hoy
                this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length });
                if (this.ordersService.fantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
                    this.dateValue = "";
                    this.clientValue = this.ordersService.fantasyName; // idem
                    this.filter(this.ordersService.fantasyName); // idem
                    this.ordersService.fantasyName = ""; // idem
                    this.filterByDate("");
                }
            });
            // //genera el string para la fecha de HOY
            // let today = new Date().getDate().toString();
            // let mon = new Date().getMonth() +1;
            // let year = new Date().getFullYear();
            // let month = mon.toString();
            // if (mon < 10) {
            //   month = "0" + mon.toString();
            // }
            // //this.filterByDate(today + "/" + month); //se abre con los pedidos de hoy
            // this.dateValue = today + "/" + month + "/" + year;
            // this.filterByDate( this.dateValue); //se abre con los pedidos de hoy
            // this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length})
            // if (this.ordersService.fantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
            //   this.dateValue = "";
            //   this.clientValue = this.ordersService.fantasyName; // idem
            //   this.filter(this.ordersService.fantasyName); // idem
            //   this.ordersService.fantasyName = ""; // idem
            //   this.filterByDate("");
            // }
        });
        //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length})
        // this.ordersService.getAllProducts().subscribe(clients => {
        //   this.clients = clients;
        // });
    }
    expandOrderDetail(order, i) {
        this.openAccordion = (this.openAccordion === i) ? -1 : i;
        this.orderDetail = this.ordersService.getOrderDetail(order.payload.val().orderDetailKey).payload.val();
    }
    filter(query) {
        var _a;
        this.query.client = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())
                && this.userOrders[i].payload.val().seller.toLowerCase().includes(this.query.seller.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date)))
                //this.filteredOrders.push(this.orders[i]);
                this.filteredOrders.push(this.userOrders[i]);
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    filterBySeller(query) {
        var _a;
        this.query.seller = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                && this.userOrders[i].payload.val().seller.toLowerCase().includes(query.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date))) {
                this.filteredOrders.push(this.userOrders[i]);
            }
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    filterByDate(query) {
        var _a;
        this.query.date = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                && this.userOrders[i].payload.val().seller.toLowerCase().includes(this.query.seller.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(query)))
                this.filteredOrders.push(this.userOrders[i]);
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    searchDateRange(range) {
        var _a, _b, _c;
        if (range.start) {
            this.filteredOrders = [];
            for (let i = 0; i < this.userOrders.length; i++) {
                if (this.userOrders[i].payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                    && this.userOrders[i].payload.val().seller.toLowerCase().includes(this.query.seller.toLowerCase())
                    && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date)))
                    this.filteredOrders.push(this.userOrders[i]);
            }
            this.filteredOrders = (range) ?
                this.filteredOrders.filter(p => p.payload.val().date > Date.parse(range.start._d) && p.payload.val().date < Date.parse(range.end._d)) :
                this.filteredOrders;
            this.query.dateRange.start = new Date(Date.parse((_b = range.start) === null || _b === void 0 ? void 0 : _b._d));
            this.query.dateRange.end = new Date(Date.parse((_c = range.end) === null || _c === void 0 ? void 0 : _c._d));
        }
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    onPageChange($event) {
        this.currentItemsToShow = this.filteredOrders.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
    }
    getTitle(item) {
        return item.title;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    getTotal() {
        let total = 0;
        if (this.filteredOrders) {
            this.filteredOrders.forEach(order => {
                total += parseFloat(order.payload.val().amountWithIva);
            });
        }
        return total;
    }
    aprove(order) {
        if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
            if (order.payload.val().clientInDebt && !this.appUser.isOwner)
                return;
            this.stockService.aprove(order);
            this.ordersService.aproveOrder(order);
        }
    }
    clearRange() {
        this.range.setValue({
            start: null,
            end: null
        });
        this.sellerValue = "";
        this.clientValue = "";
        this.dateValue = "";
        this.filterByDate(this.dateValue);
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    isOrderInDebt(order) {
        return this.ordersService.isOrderInDebt(order);
    }
    toggleAccordion(order) {
        this.dateValue = "";
        this.query.client = "";
        this.query.date = "";
        let result = this.userOrders.filter((o) => {
            return o.payload.val().date == order.date;
        });
        this.currentItemsToShow = result;
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }
    exportAsPDF(order) {
        let orderProducts = this.ordersService.getOrderDetail(order.payload.val().orderDetailKey).payload.val().products;
        let myDate = new Date(order.payload.val().date);
        var dd = String(myDate.getDate()).padStart(2, '0');
        var mm = String(myDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = myDate.getFullYear();
        let date = dd + '/' + mm + '/' + yyyy;
        const line1 = 30;
        const line2 = line1 + 10;
        const line3 = line2 + 10;
        let address = this.ordersService.getAddress(order.payload.val().fantasyName);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF();
        doc.setFontSize(10);
        doc.text('GENTECH MAR DEL PLATA', 10, 20);
        doc.text('FECHA DEL PEDIDO: ' + date, 70, 20);
        doc.text('FACT Nº: ' + order.payload.val().orderNumber, 140, 20);
        doc.setFontSize(7);
        doc.text('CLIENTE: ' + order.payload.val().fantasyName, 10, line1);
        doc.text('VENDEDOR: ' + order.payload.val().seller, 70, line1);
        doc.text('DIRECCIÓN: ' + address, 140, line1);
        doc.setFontSize(10);
        doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, line1 + 5);
        doc.text('Cantidad', 10, line2);
        doc.text('Producto', 30, line2);
        let posX = 0;
        if (this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Kiosko") {
            doc.text('Importe+iva', 185, line2);
        }
        else {
            posX = 30;
        }
        doc.text('Importe/uni', 125 + posX, line2);
        doc.text('Importe', 155 + posX, line2);
        let cont = 0;
        for (let i = 0; i < orderProducts.length; i++) {
            if (orderProducts[i].quantity != 0) {
                let total = orderProducts[i].discountPrice * orderProducts[i].quantity;
                doc.text(orderProducts[i].quantity.toString(), 10, line3 + 10 * cont);
                doc.text(orderProducts[i].title, 30, line3 + 10 * cont);
                posX = 0;
                if (this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Kiosko") {
                    doc.text("$" + (total * (1 + order.payload.val().iva / 100)).toFixed(1), 185, line3 + 10 * cont);
                }
                else {
                    posX = 30;
                }
                doc.text("$" + orderProducts[i].discountPrice.toFixed(1), 125 + posX, line3 + 10 * cont);
                doc.text("$" + total.toFixed(1), 155 + posX, line3 + 10 * cont);
                cont += 1;
            }
        }
        let footerVertPos = line3 + 10 * cont + 10;
        doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, footerVertPos - 5);
        if (this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Kiosko") {
            doc.text("TOTAL CON IVA " + order.payload.val().iva + "%       $" + (this.ordersService.getTotalAmount(orderProducts) * (1 + order.payload.val().iva / 100)).toFixed(1), 10, footerVertPos);
        }
        else
            doc.text("TOTAL $" + (this.ordersService.getTotalAmount(orderProducts) * (1 + order.payload.val().iva / 100)).toFixed(1), 10, footerVertPos);
        // Save the PDF
        doc.save(`${order.payload.val().fantasyName} ${date}.pdf`);
    }
    remove(order) {
        if (confirm('Está segur@ que quiere eliminar este pedido? Se restará el monto del pedido a la deuda del cliente')) {
            this.ordersService.removeOrder(order);
            // this.filteredOrders = this.filteredOrders.filter(o => o.key != order.key);
            // this.currentItemsToShow = this.currentItemsToShow.filter(o => o.key != order.key);
        }
    }
    isClientInUserClients(fantasyName, userClients) {
        for (let i = 0; i < userClients.length; i++) {
            if (fantasyName.toLowerCase().includes(userClients[i].toLowerCase())) {
                return true;
            }
        }
        return false;
    }
    downloadAll(orders) {
        orders.forEach((order) => {
            this.exportAsPDF(order);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_4__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter)); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["orders"]], viewQuery: function OrdersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 3, vars: 2, consts: [["class", "SCContainer ms-1", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "SCContainer", "ms-1"], [1, "row"], [1, "col-6", "col-md-4", "my-2"], [1, "col-6", "col-md-4", "my-1"], ["mat-icon-button", "", "routerLink", "/orders/order"], ["class", "col my-2", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "input-group"], ["matSuffix", ""], ["type", "text", "placeholder", "   Nombre de Fantas\u00EDa...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["query", ""], ["type", "text", "placeholder", "   Vendedor...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["sellerquery", ""], ["type", "text", "placeholder", "   Fecha...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["Datequery", ""], [1, "row", "m-3"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "fecha inicio"], ["matEndDate", "", "formControlName", "end", "placeholder", "fecha finalizaci\u00F3n"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "table-responsive"], [1, "table", "table-striped", "table-sm", "mat-elevation-z8"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "col", "my-2"], ["matBadgeSize", "large", 3, "matBadge"], ["hideToggle", ""], ["routerLink", "/orders/orders", 3, "click"], [3, "disabled", "click", 4, "ngIf"], ["hideToggle", "", 3, "expanded", "opened", "closed"], ["class", "table table-striped table-sm mat-elevation-z8", 4, "ngIf"], [3, "disabled", "click"], ["mat-icon-button", "", "color", "primary", 3, "disabled", "click"], ["mat-icon-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "SCContainer"], ["mat-raised-button", "", "color", "primary", 2, "margin", "20px", 3, "click"], [1, "text-danger"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, OrdersComponent_div_0_Template, 83, 24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OrdersComponent_ng_template_1_Template, 14, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.appUser && (!ctx.debtWarning || ctx.appUser.isAdmin))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDateRangeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDateRangePicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__.MatBadge, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCwgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDElO1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_orders-lazy_orders_module_ts.js.map