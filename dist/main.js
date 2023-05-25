(self["webpackChunke_commerce_mosh"] = self["webpackChunke_commerce_mosh"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 53732:
/*!*********************************************!*\
  !*** ./src/app/Material/Material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 58341);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material-moment-adapter */ 36063);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 37716);
























const MaterialsComponents = [
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__.MatToolbarModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
    _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__.MatMomentDateModule,
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ imports: [[
            MaterialsComponents
        ], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__.MatMomentDateModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__.MatMomentDateModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__.MatMomentDateModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule] }); })();


/***/ }),

/***/ 72790:
/*!******************************************************!*\
  !*** ./src/app/admin-prods/admin-prods.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProdsComponent": () => (/* binding */ AdminProdsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ 46351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 66082);
/* harmony import */ var _services_commissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/commissions.service */ 63207);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category.service */ 54655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-validation */ 51665);


















function AdminProdsComponent_div_0_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", c_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", c_r13.name, " ");
} }
function AdminProdsComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "La categor\u00EDa es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El nombre es obligatorio. M\u00E1ximo 30 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_p_71_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_p_71_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_p_71_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_p_71_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_p_71_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_p_71_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r22.rechargeDelForm.dist = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminProdsComponent_div_0_p_71_div_4_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_p_71_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r24.rechargeDelForm.com = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminProdsComponent_div_0_p_71_div_8_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_p_71_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r25.rechargeDelForm.kios = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AdminProdsComponent_div_0_p_71_div_12_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_p_71_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.rechargeDelForm.gym = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AdminProdsComponent_div_0_p_71_div_16_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Aplicar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](70);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "distribuidor: ", ctx_r10.recharges[0].payload.val().distRecharge, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.rechargeDelForm.dist);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r14.touched && _r14.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "comercio: ", ctx_r10.recharges[0].payload.val().comRecharge, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.rechargeDelForm.com);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r16.touched && _r16.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "kios: ", ctx_r10.recharges[0].payload.val().kiosRecharge, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.rechargeDelForm.kios);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r16.touched && _r16.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "gimnasio: ", ctx_r10.recharges[0].payload.val().gymRecharge, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.rechargeDelForm.gym);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r20.touched && _r20.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r9.valid);
} }
function AdminProdsComponent_div_0_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0Aplicando");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Precio inv\u00E1lido. Dede usar punto en vez de coma.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminProdsComponent_div_0_div_79_div_12_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminProdsComponent_div_0_div_79_div_12_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r32.errors == null ? null : _r32.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r32.errors == null ? null : _r32.errors.min);
} }
function AdminProdsComponent_div_0_div_79_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminProdsComponent_div_0_div_79_div_23_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r34.errors == null ? null : _r34.errors.required);
} }
function AdminProdsComponent_div_0_div_79_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminProdsComponent_div_0_div_79_div_34_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r36.errors == null ? null : _r36.errors.required);
} }
function AdminProdsComponent_div_0_div_79_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminProdsComponent_div_0_div_79_div_45_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r38.errors == null ? null : _r38.errors.required);
} }
function AdminProdsComponent_div_0_div_79_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminProdsComponent_div_0_div_79_div_56_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r40.errors == null ? null : _r40.errors.required);
} }
function AdminProdsComponent_div_0_div_79_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminProdsComponent_div_0_div_79_div_62_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r42.errors == null ? null : _r42.errors.required);
} }
function AdminProdsComponent_div_0_div_79_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", c_r55.payload.val().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", c_r55.payload.val().name, " ");
} }
function AdminProdsComponent_div_0_div_79_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0ERROR: hay datos inv\u00E1lidos! recuerde usar punto en vez de coma para los decimales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_0_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminProdsComponent_div_0_div_79_Template_form_ngSubmit_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const product_r27 = restoredCtx.$implicit; const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r56.saveProd(_r29.value, product_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 53, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_div_79_Template_input_ngModelChange_4_listener($event) { const product_r27 = ctx.$implicit; return product_r27.payload.val().title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminProdsComponent_div_0_div_79_div_8_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_div_79_Template_input_ngModelChange_10_listener($event) { const product_r27 = ctx.$implicit; return product_r27.payload.val().buyPrice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AdminProdsComponent_div_0_div_79_div_12_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Precio de compra($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Precio distribuidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-form-field", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_div_79_Template_input_ngModelChange_21_listener($event) { const product_r27 = ctx.$implicit; return product_r27.payload.val().disc1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AdminProdsComponent_div_0_div_79_div_23_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Desc.(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-form-field", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Precio comercio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "input", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_div_79_Template_input_ngModelChange_32_listener($event) { const product_r27 = ctx.$implicit; return product_r27.payload.val().disc2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AdminProdsComponent_div_0_div_79_div_34_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Desc.(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-form-field", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Precio kiosko");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "input", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_div_79_Template_input_ngModelChange_43_listener($event) { const product_r27 = ctx.$implicit; return product_r27.payload.val().disc3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, AdminProdsComponent_div_0_div_79_div_45_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Desc.(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-form-field", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Precio gimnasio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_div_79_Template_input_ngModelChange_54_listener($event) { const product_r27 = ctx.$implicit; return product_r27.payload.val().disc4 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, AdminProdsComponent_div_0_div_79_div_56_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Desc.(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_div_79_Template_input_ngModelChange_60_listener($event) { const product_r27 = ctx.$implicit; return product_r27.payload.val().stock = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, AdminProdsComponent_div_0_div_79_div_62_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "mat-form-field", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Categorias");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-select", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_div_79_Template_mat_select_ngModelChange_68_listener($event) { const product_r27 = ctx.$implicit; return product_r27.payload.val().prodsCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, AdminProdsComponent_div_0_div_79_mat_option_70_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, AdminProdsComponent_div_0_div_79_div_71_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminProdsComponent_div_0_div_79_Template_button_click_74_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const product_r27 = restoredCtx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r66.delete(product_r27.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, AdminProdsComponent_div_0_div_79_span_78_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r27 = ctx.$implicit;
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](55);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](61);
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](69);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", product_r27.payload.val().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r30.touched && _r30.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", product_r27.payload.val().buyPrice)("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r32.touched && _r32.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](17, 26, product_r27.payload.val().discPrice1, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", product_r27.payload.val().disc1)("min", -100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r34.touched && _r34.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](28, 29, product_r27.payload.val().discPrice2, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", product_r27.payload.val().disc2)("min", -100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r36.touched && _r36.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](39, 32, product_r27.payload.val().discPrice3, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", product_r27.payload.val().disc3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r38.touched && _r38.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](50, 35, product_r27.payload.val().discPrice4, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", product_r27.payload.val().disc4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r40.touched && _r40.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", product_r27.payload.val().stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r42.touched && _r42.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", product_r27.payload.val().prodsCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r44.touched && _r44.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r29.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_r29.valid);
} }
const _c0 = function () { return [20, 30]; };
function AdminProdsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "ADMINISTRAR PRODUCTOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminProdsComponent_div_0_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r67.exportPDF(_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "IMPRIMIR LISTADO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Categor\u00EDa de cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-select", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_Template_mat_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r69.prod.categoryPDF = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AdminProdsComponent_div_0_mat_option_18_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AdminProdsComponent_div_0_div_19_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Descargar PDF\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminProdsComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r70.exportExcel(_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Descargar Excel\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "grid_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "form", 3, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminProdsComponent_div_0_Template_form_ngSubmit_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](32); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r71.addProdCategory(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "CREAR CATEGOR\u00CDA:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Nueva Categor\u00EDa de Prod");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_0_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r72.prodCategory.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, AdminProdsComponent_div_0_div_43_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AdminProdsComponent_div_0_Template_input_keyup_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](56); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r73.filter(_r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Nuevo Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Remarcaci\u00F3n de precios:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "\u00A0\u00A0(para modificar debe completar los 4 campos)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "form", 3, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AdminProdsComponent_div_0_Template_form_ngSubmit_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](70); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r74.saveRecharges(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, AdminProdsComponent_div_0_p_71_Template, 19, 13, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Editar Precios");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, AdminProdsComponent_div_0_span_78_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, AdminProdsComponent_div_0_div_79_Template, 79, 38, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "mat-paginator", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function AdminProdsComponent_div_0_Template_mat_paginator_page_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r75.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](32);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.prod.categoryPDF);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.clientCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r2.touched && _r2.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.prodCategory.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r6.touched && _r6.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r5.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.recharges);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.recharged);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.currentItemsToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx_r0.filteredProducts.length)("pageSize", 20)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c0));
} }
class AdminProdsComponent {
    constructor(productService, commissionsService, router, categoryService) {
        this.productService = productService;
        this.commissionsService = commissionsService;
        this.router = router;
        this.categoryService = categoryService;
        this.toSave = [];
        this.pageSize = 20;
        this.pageIndex = 0;
        this.prodCategory = {};
        this.rechargeDelForm = {};
        this.prod = {};
        this.filteredProducts = [];
        this.mobile = false;
        this.prodAdded = false;
        this.saving = false;
        this.subscription = this.categoryService.getAllClientsCategories().subscribe(clientCategories => {
            this.clientCategories = clientCategories;
        });
        categoryService.getAllProdsCategories().subscribe((prodsCategories) => {
            this.prodsCategories = prodsCategories;
        });
        this.subscription2 = this.productService.getAllProducts().subscribe(products => {
            this.filteredProducts = this.products = products;
            this.filteredProducts.sort(this.compareTitle);
            this.filteredProducts.sort(this.compareCategory);
            this.onPageChange({ previousPageIndex: 0, pageIndex: this.pageIndex, pageSize: this.pageSize, length: this.filteredProducts.length });
            //this.createStockValue(this.products);
            this.subscription3 = this.productService.getAllRecharges().subscribe(recharges => {
                this.recharges = recharges;
                if (!recharges) {
                    this.productService.createRecharge();
                }
                this.productService.recharge(this.products, this.recharges[0].payload.val());
                //this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().kiosRecharge, this.recharges[0].payload.val().gymRecharge);
            });
        });
        // if (this.recharges) this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().kiosRecharge, this.recharges[0].payload.val().gymRecharge);
    }
    ngOnInit() {
    }
    // filter(query: string) {
    //   this.filteredProducts = (query) ?
    //     this.products.filter((p: { payload: { val: () => { (): any; new(): any; title: string; }; }; }) => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
    //     this.products;
    // }
    filter(query) {
        if (query != "") {
            this.filteredProducts = (query) ?
                this.products.filter((p) => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
                [];
        }
        else
            this.filteredProducts = this.products;
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredProducts.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    saveProd(productForm, product) {
        // if (confirm('Está segur@ que quiere guardar estos valores?')) {
        this.recharged = true;
        let recharges = this.recharges[0].payload.val();
        let prod = {
            "disc1": productForm.disc1,
            "disc2": productForm.disc2,
            "disc3": productForm.disc3,
            "disc4": productForm.disc4,
            "buyPrice": productForm.buyPrice,
            // "price1": product.payload.val().price1,
            // "price2": product.payload.val().price2,
            // "price3": product.payload.val().price3,
            // "price4": product.payload.val().price4,
            "price1": product.payload.val().buyPrice * (1 + recharges.distRecharge / 100),
            "price2": product.payload.val().buyPrice * (1 + recharges.comRecharge / 100),
            "price3": product.payload.val().buyPrice * (1 + recharges.kiosRecharge / 100),
            "price4": product.payload.val().buyPrice * (1 + recharges.gymRecharge / 100),
            "discPrice1": 0,
            "discPrice2": 0,
            "discPrice3": 0,
            "discPrice4": 0,
            "stock": productForm.stock,
            "prodsCategory": productForm.prodsCategory,
            "title": productForm.title
        };
        prod.discPrice1 = prod.price1 * (1 - prod.disc1 / 100);
        prod.discPrice2 = prod.price2 * (1 - prod.disc2 / 100);
        prod.discPrice3 = prod.price3 * (1 - prod.disc3 / 100);
        prod.discPrice4 = prod.price4 * (1 - prod.disc4 / 100);
        this.productService.update(product.key, prod).then(() => { this.recharged = false; });
        //this.productService.recharge(this.products, this.recharges[0].payload.val())
        //this.toSave.push({"key": product.key, "prod": prod})
        //location.reload();
        //this.router.navigate(['/admin/prods']);
        // }
    }
    delete(id) {
        if (confirm('Está segur@ que quiere eliminar este producto?')) {
            this.productService.delete(id);
        }
    }
    saveRecharges(recharge) {
        if (confirm('Está segur@ que quiere cambiar la remarcación?')) {
            let recharges = {
                "distRecharge": recharge.dist,
                "comRecharge": recharge.com,
                "kiosRecharge": recharge.kios,
                "gymRecharge": recharge.gym
            };
            this.productService.saveRecharges(recharges);
            this.productService.recharge(this.products, recharges);
            location.reload();
        }
    }
    // recharge(distRecharge: number, comRecharge: number, kiosRecharge: number, gymRecharge: number) {
    //   if (this.recharges) {
    //     this.recharged=true;
    //     setTimeout(()=> {
    //       this.recharged = false;
    //      }, 1000);
    //     this.productService.recharge(this.products, distRecharge, comRecharge, kiosRecharge, gymRecharge);
    //     return
    //   }
    //   this.productService.createRecharge();
    // }
    applyDiscount(p, priceNumber, disc) {
        this.productService.applyDiscount(p, priceNumber, disc);
    }
    onPageChange($event) {
        this.pageIndex = $event.pageIndex;
        this.pageSize = $event.pageSize;
        this.currentItemsToShow = this.filteredProducts.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
    }
    compareCategory(a, b) {
        if (a.payload.val().prodsCategory.toLowerCase() < b.payload.val().prodsCategory.toLowerCase()) {
            return -1;
        }
        if (a.payload.val().prodsCategory.toLowerCase() > b.payload.val().prodsCategory.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    compareTitle(a, b) {
        if (a.payload.val().title.toLowerCase() < b.payload.val().title.toLowerCase()) {
            return -1;
        }
        if (a.payload.val().title.toLowerCase() > b.payload.val().title.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    exportExcel(prod) {
        this.products.sort(this.compareTitle);
        this.products.sort(this.compareCategory);
        if (confirm('Descargar Excel')) {
            let data = [];
            data.push(["PRODUCTO", "DISTRIBUIDOR", "COMERCIO", "KIOSKO", "GIMNASIO", "CATEGORIA"]);
            this.filteredProducts.forEach((prod) => {
                data.push([prod.payload.val().title, prod.payload.val().discPrice1.toFixed(1),
                    prod.payload.val().discPrice2.toFixed(1), prod.payload.val().discPrice3.toFixed(1),
                    prod.payload.val().discPrice4.toFixed(1), prod.payload.val().prodsCategory]);
            });
            // (C2) CREATE NEW EXCEL "FILE"
            var workbook = xlsx__WEBPACK_IMPORTED_MODULE_6__.utils.book_new(), worksheet = xlsx__WEBPACK_IMPORTED_MODULE_6__.utils.aoa_to_sheet(data);
            workbook.SheetNames.push("Precios");
            workbook.Sheets["Precios"] = worksheet;
            var wscols = [
                { wch: 40 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 },
                { wch: 15 }
            ];
            worksheet['!cols'] = wscols;
            // (C3) "FORCE DOWNLOAD" XLSX FILE
            xlsx__WEBPACK_IMPORTED_MODULE_6__.writeFile(workbook, "precios.xlsx");
        }
    }
    exportPDF(prod) {
        if (confirm('Descargar PDF')) {
            this.products.sort(this.compareTitle);
            this.products.sort(this.compareCategory);
            const line1 = 20;
            const line2 = line1 + 10;
            const line3 = line2 + 10;
            const col1 = 20;
            const col2 = 120;
            const col3 = 160;
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF();
            let pageHeight = 0;
            doc.setFontSize(9);
            doc.text('GENTECH MAR DEL PLATA', col1, line1);
            doc.text('CATEGORÍA: ' + prod.categoryPDF, 120, line1);
            doc.text('PRODUCTO', col1, line2);
            if (prod.categoryPDF == "Kiosko" || prod.categoryPDF == "Gimnasio") {
                doc.text('Importe', 120, line2);
            }
            else {
                doc.text('Importe s/IVA', 120, line2);
                doc.text('Importe c/IVA', 160, line2);
            }
            doc.setFontSize(8);
            let cont = 0;
            let price = 0;
            let yLimit = 400; // Height position of new content
            let j = 0;
            let y = 0;
            for (let i = 0; i < this.products.length; i++) {
                pageHeight = doc.internal.pageSize.height;
                if (y >= pageHeight - 70) {
                    doc.addPage();
                    j = i;
                    cont = line1;
                }
                y = 7 * (i + 1 - j) - cont;
                doc.text(this.products[i].payload.val().title, col1, line3 + y);
                switch (prod.categoryPDF) {
                    case "Distribuidor":
                        doc.text(this.products[i].payload.val().discPrice1.toFixed(1).toString(), col2, line3 + y);
                        doc.text((1.21 * this.products[i].payload.val().discPrice1).toFixed(1).toString(), col3, line3 + y);
                        break;
                    case "Comercio":
                        doc.text(this.products[i].payload.val().discPrice2.toFixed(1).toString(), col2, line3 + y);
                        doc.text((1.21 * this.products[i].payload.val().discPrice2).toFixed(1).toString(), col3, line3 + y);
                        break;
                    case "Kiosko":
                        doc.text(this.products[i].payload.val().discPrice3.toFixed(1).toString(), col2, line3 + y);
                        break;
                    case "Gimnasio":
                        doc.text(this.products[i].payload.val().discPrice4.toFixed(1).toString(), col2, line3 + y);
                        break;
                }
            }
            doc.setFontSize(8);
            // Save the PDF
            doc.save('ListaDePreciosGentech-' + prod.categoryPDF + '.pdf');
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    }
    addProdCategory(prodCategory) {
        this.categoryService.addProdCategory(prodCategory.title);
        location.reload();
        //this.commissionsService.addProdCategory(prodCategory.title);
    }
}
AdminProdsComponent.ɵfac = function AdminProdsComponent_Factory(t) { return new (t || AdminProdsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_commissions_service__WEBPACK_IMPORTED_MODULE_2__.CommissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService)); };
AdminProdsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdminProdsComponent, selectors: [["app-admin-prods"]], viewQuery: function AdminProdsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "SCContainer ms-1", 4, "ngIf"], [1, "SCContainer", "ms-1"], [2, "display", "inline", "margin", "10px"], [3, "ngSubmit"], ["f2", "ngForm"], [1, "row"], [1, "col-md-2", "ms-2", "mt-3"], [1, "col-md-3", "mt-1", "ms-2"], ["appearance", "fill"], ["name", "categoryPDF", "required", "", 3, "ngModel", "ngModelChange"], ["categoryPDF", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-md-2", "ms-2", "mt-2"], ["mat-icon-button", "", "type", "submit", "color", "primary", 3, "disabled"], [1, "col-md-2"], ["mat-icon-button", "", "type", "button", "color", "accent", 1, "m-2", 3, "disabled", "click"], ["f3", "ngForm"], [1, "col-6", "col-md-3", "mt-1", "ms-2"], ["appearance", "legacy"], ["matInput", "", "name", "title", "placeholder", "", "maxlength", "40", "required", "", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], [1, "col", "col-3", "mt-2"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "ms-2", 3, "disabled"], [1, "col", "col-md-5", "ms-2", "mt-3"], [1, "input-group"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "   Buscar producto...", 1, "border-end-0", "border", "rounded-pill", 3, "keyup"], ["query", ""], [1, "col", "col-md-3", "mt-1", "ms-sm-2"], ["mat-raised-button", "", "color", "accent", "routerLink", "/admin/prods/new", 1, "ms-2"], [1, "admin-prod-recharge", "ms-1"], ["f", "ngForm"], [4, "ngIf"], [1, "col-1", "ms-2"], ["mat-raised-button", "", "type", "button", "routerLink", "/editProductPrices", "color", "primary"], ["class", "text-danger border border-danger p-2 my-5 rounded", 4, "ngIf"], ["class", "admin-prods-form", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], [3, "value"], [1, "alert", "alert-danger"], ["matInput", "", "name", "dist", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["dist", "ngModel"], ["matInput", "", "name", "com", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["com", "ngModel"], ["matInput", "", "name", "kios", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["kios", "ngModel"], ["matInput", "", "name", "gym", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["gym", "ngModel"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], [1, "text-danger", "border", "border-danger", "p-2", "my-5", "rounded"], [1, "admin-prods-form"], ["appearance", "legacy", 2, "width", "25vw", "min-width", "320px", "margin-right", "10px"], ["matInput", "", "name", "title", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["appearance", "legacy", 2, "width", "5vw", "min-width", "63px"], ["matInput", "", "name", "buyPrice", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["buyPrice", "ngModel"], ["appearance", "legacy", 2, "width", "5vw", "min-width", "63px", "background-color", "rgb(240, 240, 240)"], ["matInput", "", "readonly", "", 3, "placeholder"], ["appearance", "legacy", 2, "width", "2vw", "min-width", "25px"], ["matInput", "", "name", "disc1", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["disc1", "ngModel"], ["appearance", "legacy", 2, "width", "2vw", "min-width", "28px"], ["matInput", "", "name", "disc2", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["disc2", "ngModel"], ["matInput", "", "name", "disc3", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["disc3", "ngModel"], ["matInput", "", "name", "disc4", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["disc4", "ngModel"], ["appearance", "legacy", 2, "width", "2vw", "min-width", "28px", "margin", "3px"], ["matInput", "", "name", "stock", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["stock", "ngModel"], ["appearance", "legacy", 2, "width", "5vw", "min-width", "80px"], ["name", "prodsCategory", "required", "", 3, "ngModel", "ngModelChange"], ["prodsCategory", "ngModel"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"]], template: function AdminProdsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AdminProdsComponent_div_0_Template, 81, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, ng2_validation__WEBPACK_IMPORTED_MODULE_4__.MinValidator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9kcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 63752:
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-clients/admin-clients.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminClientsComponent": () => (/* binding */ AdminClientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/print.service */ 39534);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utility.service */ 67278);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
















function AdminClientsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.hideTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Mostrar/Ocultar clientes en mora");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 36);
} }
function AdminClientsComponent_div_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 41);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matBadge", ctx_r9.clientsInDebt.length);
} }
function AdminClientsComponent_div_13_tr_20_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r11.payload.val().fantasyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r11.payload.val().designatedSeller);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 5, ctx_r10.ordersService.getDebt(client_r11.payload.val().fantasyName), "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 8, ctx_r10.ordersService.calcDebt(client_r11.payload.val().fantasyName), "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 11, client_r11.paymentDate, "dd/MM/yyyy"));
} }
function AdminClientsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "CLIENTES EN MORA: \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AdminClientsComponent_div_13_span_3_Template, 1, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Saldo hoy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\u00DAltimo Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AdminClientsComponent_div_13_tr_20_Template, 14, 14, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "TOTAL:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.clientsInDebt);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Deuda a ", ctx_r2.TOLERATED_DAYS, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.clientsInDebt);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 4, ctx_r2.totalDebt, "1.1-1"), "");
} }
function AdminClientsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminClientsComponent_div_28_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.clientValue = $event; })("ngModelChange", function AdminClientsComponent_div_28_Template_input_ngModelChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.filter(_r13.value); })("keyup", function AdminClientsComponent_div_28_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.filter(_r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminClientsComponent_div_28_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.sellerValue = $event; })("keyup", function AdminClientsComponent_div_28_Template_input_keyup_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.filterBySeller(_r14.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.clientValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.sellerValue);
} }
const _c0 = function (a1) { return ["/admin/clients", a1]; };
function AdminClientsComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_tr_53_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const client_r21 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.printService.exportResume(client_r21.payload.val()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_tr_53_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.savePagination(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_tr_53_Template_a_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const client_r21 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.searchPayments(client_r21.payload.val().fantasyName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Ver cobros al cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_tr_53_Template_a_click_33_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const client_r21 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27.searchOrders(client_r21.payload.val().fantasyName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Ver pedidos del cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r21 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r21.payload.val().businessName, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r21.payload.val().fantasyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r21.payload.val().designatedSeller);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r21.payload.val().cuit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r21.payload.val().address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r21.payload.val().phone, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 9, ctx_r4.ordersService.getDebt(client_r21.payload.val().fantasyName), "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 12, ctx_r4.ordersService.calcDebt(client_r21.payload.val().fantasyName), "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, client_r21.key));
} }
function AdminClientsComponent_li_66_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_li_66_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "<< Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_li_67_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_li_67_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r30.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Pr\u00F3xima >>");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
class AdminClientsComponent {
    constructor(ordersService, auth, printService, utilityService) {
        this.ordersService = ordersService;
        this.auth = auth;
        this.printService = printService;
        this.utilityService = utilityService;
        //paginator
        this.actualPage = 0;
        this.totalPages = 1;
        this.itemsPerPage = 10;
        this.TOLERATED_DAYS = src_app_constants__WEBPACK_IMPORTED_MODULE_0__.TOLERATED_DAYS;
        this.query = { client: "", seller: "" };
        this.totalDebt = 0;
        this.loading = true;
        this.fromEditing = false;
        this.currentItemsToShow = [];
        this.includedClients = [];
    }
    ngOnInit() {
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.ordersService.clients;
            this.subscription2 = this.ordersService.getAllClients().subscribe(clients => {
                this.clients = clients;
                this.includedClients = [];
                this.filteredClients = [];
                this.clients.forEach((client) => {
                    if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager)) {
                        this.includedClients.push(client);
                    }
                });
                this.filteredClients = this.includedClients;
                // this.ordersService.setFilteredClients(this.filteredClients)
                if (this.ordersService.getFromEditing()) {
                    this.actualPage = this.ordersService.getClientsActualPage();
                    this.totalPages = this.ordersService.getClientsTotalPages();
                    this.itemsPerPage = this.ordersService.getClientItemsPerPage();
                    this.query = this.ordersService.getQuery();
                    this.filter(this.query.client);
                    this.filterBySeller(this.query.seller);
                    this.clientValue = this.query.client;
                    this.sellerValue = this.query.seller;
                }
                //this.filteredClients.forEach((client)=>{console.log('subscription2', client.payload.val().fantasyName);})
                this.refreshPages();
                this.subscription3 = this.ordersService.getAllPayments().subscribe(payments => {
                    this.payments = payments;
                    this.subscription4 = this.ordersService.getAllOrders().subscribe(orders => {
                        this.orders = orders;
                        this.clientsInDebt = this.ordersService.getClientsInDebt(this.clients, this.orders);
                        this.clientsInDebt.forEach((client) => {
                            client.paymentDate = this.getClientLastPayment(client.payload.val().fantasyName).payload.val().date;
                            this.totalDebt += this.ordersService.getDebt(client.payload.val().fantasyName);
                        });
                        this.loading = false;
                    });
                });
            });
        });
    }
    ngAfterViewInit() {
    }
    filter(query) {
        if (query == "") {
            this.filteredClients = this.includedClients;
        }
        else {
            this.query.client = query;
            this.filteredClients = [];
            this.includedClients.forEach((client) => {
                if (client.payload.val().fantasyName.toLowerCase().includes(query.toLowerCase().trim())
                    && client.payload.val().designatedSeller.toLowerCase().includes(this.query.seller.toLowerCase().trim()))
                    this.filteredClients.push(client);
            });
        }
        this.actualPage = 0;
        this.refreshPages();
    }
    filterBySeller(query) {
        this.query.seller = query;
        this.filteredClients = [];
        this.includedClients.forEach((client) => {
            if (client.payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                && client.payload.val().designatedSeller.toLowerCase().includes(query.toLowerCase())) {
                this.filteredClients.push(client);
            }
        });
        this.actualPage = 0;
        this.refreshPages();
    }
    sortData(sort) {
        const data = this.filteredClients;
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'cliente': return this.compare(a.payload.val().fantasyName, b.payload.val().fantasyName, isAsc);
                default: return 0;
            }
        });
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    searchPayments(fantasyName) {
        this.ordersService.fantasyName = fantasyName;
    }
    searchOrders(fantasyName) {
        this.ordersService.fantasyName = fantasyName;
    }
    getClientLastPayment(fantasyName) {
        let payment = this.ordersService.getClientLastPayment(fantasyName, this.payments);
        return payment;
    }
    hideTable() {
        this.showClientsInDebt = !this.showClientsInDebt;
    }
    savePagination() {
        this.ordersService.setClientsActualPage(this.actualPage);
        this.ordersService.setClientsTotalPages(this.totalPages);
        this.ordersService.setClientItemsPerPage(this.itemsPerPage);
        this.ordersService.setFromEditing(false);
        this.ordersService.setQuery(this.query);
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
        this.totalPages = Math.ceil(this.filteredClients.length / this.itemsPerPage);
        this.currentItemsToShow = [];
        for (let i = this.actualPage * this.itemsPerPage; i < this.actualPage * this.itemsPerPage + this.itemsPerPage; i++) {
            if (i == this.filteredClients.length)
                return;
            this.currentItemsToShow.push(this.filteredClients[i]);
        }
    }
    //funciones paginator bootstrap
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.subscription2) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.subscription3) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.subscription4) === null || _d === void 0 ? void 0 : _d.unsubscribe();
    }
}
AdminClientsComponent.ɵfac = function AdminClientsComponent_Factory(t) { return new (t || AdminClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_3__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService)); };
AdminClientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdminClientsComponent, selectors: [["admin-clients"]], viewQuery: function AdminClientsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 74, vars: 16, consts: [[1, "SCContainer", "ms-1"], [1, "col", "row-ms"], [1, "col-12", "col-ms-5", "row"], [1, "col-12"], ["mat-raised-button", "", "color", "accent", "routerLink", "/admin/clients/new"], ["class", "m-1", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "spinner-border ms-3 text-primary spinner-border-sm", "role", "status", 4, "ngIf"], ["class", "row my-3", 4, "ngIf"], [1, "row"], [1, "col", "col-md-3", "ms-2", "mt-3"], [2, "display", "inline", "margin", "10px"], [1, "col", "col-md-3", "mt-2", "ms-sm-2"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["class", "row", 4, "ngIf"], ["matSort", "", 1, "table", "table-striped", "table-sm", "mat-elevation-z8", 3, "matSortChange"], ["mat-sort-header", "businessName"], ["mat-sort-header", "fantasyName"], ["mat-sort-header", "seller"], ["mat-sort-header", "cuit"], ["mat-sort-header", "address"], ["mat-sort-header", "phone"], ["mat-sort-header", "debt"], ["mat-sort-header", "debt_today"], ["mat-sort-header", "resume"], ["mat-sort-header", "edit"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item", "disabled"], [1, "page-link"], [1, "page-item", "disabled", "me-1"], ["class", "page-item", 4, "ngIf"], [1, "page-item", "ms-3", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", 3, "ngClass"], ["mat-raised-button", "", "color", "primary", 1, "m-1", 3, "click"], ["role", "status", 1, "spinner-border", "ms-3", "text-primary", "spinner-border-sm"], [1, "row", "my-3"], ["matBadgeSize", "large", 3, "matBadge", 4, "ngIf"], [1, "col-8"], [1, "table", "table-striped", "table-sm", "mat-elevation-z8"], ["matBadgeSize", "large", 3, "matBadge"], [1, "col", "col-md-3", "ms-2", "my-2"], [1, "input-group"], ["matSuffix", ""], ["type", "text", "placeholder", "   Nombre de Fantas\u00EDa...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["query", ""], ["type", "text", "placeholder", "   Vendedor...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["sellerquery", ""], [3, "routerLink", "click"], ["mat-icon-button", "", "routerLink", "/payments/payments", 2, "margin-left", "10px", 3, "click"], ["mat-icon-button", "", "routerLink", "/orders/orders", 2, "margin-left", "10px", 3, "click"], [2, "margin-right", "10px"], [1, "page-item"]], template: function AdminClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "ADMINISTRAR CLIENTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Nuevo Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AdminClientsComponent_button_10_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AdminClientsComponent_div_11_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AdminClientsComponent_div_13_Template, 27, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "CLIENTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_Template_button_click_19_listener() { return ctx.printService.exportClients(ctx.clients); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Descargar Listado\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "picture_as_pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "*IMPORTANTE: si la deuda es negativa el cliente tiene saldo a favor");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AdminClientsComponent_div_28_Template, 17, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function AdminClientsComponent_Template_table_matSortChange_29_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Raz\u00F3n social");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Nombre de Fantas\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Vendedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "CUIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Deuda hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Estado de cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, AdminClientsComponent_tr_53_Template, 38, 17, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "nav", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "P\u00E1gina actual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, AdminClientsComponent_li_66_Template, 3, 0, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, AdminClientsComponent_li_67_Template, 3, 0, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_Template_a_click_69_listener() { ctx.itemsPerPage = 10; ctx.actualPage = 0; return ctx.refreshPages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "10 por p\u00E1gina");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminClientsComponent_Template_a_click_72_listener() { ctx.itemsPerPage = 20; ctx.actualPage = 0; return ctx.refreshPages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "20 por p\u00E1gina");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.clientsInDebt && ctx.clientsInDebt.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.clientsInDebt);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showClientsInDebt);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.appUser && (ctx.appUser.isAdmin || ctx.appUser.isSalesManager));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Deuda a ", ctx.TOLERATED_DAYS, "d*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.currentItemsToShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.actualPage + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.actualPage > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.actualPage < ctx.totalPages - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c1, ctx.itemsPerPage == 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c1, ctx.itemsPerPage == 20));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadge, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jbGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 24146:
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-sellers/admin-sellers.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSellersComponent": () => (/* binding */ AdminSellersComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 11494);












function AdminSellersComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nombre Completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSellersComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r9.payload.val().name, " \u00A0\u00A0");
} }
function AdminSellersComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tel\u00E9fono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSellersComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r10.payload.val().phone, " \u00A0\u00A0");
} }
function AdminSellersComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 20);
} }
const _c0 = function (a1) { return ["/admin/sellers", a1]; };
function AdminSellersComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, s_r11.key));
} }
function AdminSellersComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
} }
function AdminSellersComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
} }
const _c1 = function () { return [10, 20]; };
class AdminSellersComponent {
    constructor(ordersService) {
        this.ordersService = ordersService;
        this.displayedColumns = ['name', 'phone', 'edit'];
    }
    ngOnInit() {
        this.subscription = this.ordersService.getAllSellers().subscribe(sellers => {
            this.filteredSellers = this.sellers = sellers;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.filteredSellers);
            this.dataSource.paginator = this.paginator;
        });
    }
    filter(query) {
        this.filteredSellers = (query) ?
            this.sellers.filter(c => c.payload.val().name.toLowerCase().includes(query.toLowerCase())) :
            this.sellers;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.filteredSellers);
        this.dataSource.paginator = this.paginator;
    }
    sortData(sort) {
        const data = this.filteredSellers.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.payload.val().name, b.payload.val().name, isAsc);
                case 'phone': return compare(a.payload.val().phone, b.payload.val().phone, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(this.sortedData);
        this.dataSource.paginator = this.paginator;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AdminSellersComponent.ɵfac = function AdminSellersComponent_Factory(t) { return new (t || AdminSellersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService)); };
AdminSellersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminSellersComponent, selectors: [["admin-sellers"]], viewQuery: function AdminSellersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 30, vars: 5, consts: [[1, "SCContainer"], [2, "display", "inline", "margin", "10px"], ["mat-raised-button", "", "color", "accent", "routerLink", "/admin/sellers/new"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "   Buscar por Nombre...", 3, "keyup"], ["query", ""], ["mat-table", "", "mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "name", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "phone"], ["mat-header-cell", "", "mat-sort-header", "phone", 4, "matHeaderCellDef"], ["matColumnDef", "edit"], ["mat-header-cell", "", "mat-sort-header", "edit", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "name"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "phone"], ["mat-header-cell", "", "mat-sort-header", "edit"], [3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function AdminSellersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ADMINISTRAR VENDEDORES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nuevo Vendedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminSellersComponent_Template_input_keyup_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16); return ctx.filter(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function AdminSellersComponent_Template_table_matSortChange_17_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AdminSellersComponent_th_19_Template, 3, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AdminSellersComponent_td_20_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AdminSellersComponent_th_22_Template, 3, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminSellersComponent_td_23_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AdminSellersComponent_th_25_Template, 1, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AdminSellersComponent_td_26_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AdminSellersComponent_tr_27_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AdminSellersComponent_tr_28_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1zZWxsZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _replaces_replaces_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replaces/replaces.component */ 42536);
/* harmony import */ var _log_check_log_check_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-check/log-check.component */ 31390);
/* harmony import */ var _admin_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin-clients/admin-clients.component */ 63752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ 78968);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients/clients.component */ 57045);
/* harmony import */ var _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/clients-form/clients-form.component */ 27745);
/* harmony import */ var _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/product-form/product-form.component */ 62830);
/* harmony import */ var _admin_admin_sellers_admin_sellers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-sellers/admin-sellers.component */ 24146);
/* harmony import */ var _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/sellers-form/sellers-form.component */ 57954);
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stock/stock.component */ 5758);
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ 80483);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 77528);
/* harmony import */ var _buys_buys_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buys/buys.component */ 88124);
/* harmony import */ var _admin_prods_admin_prods_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-prods/admin-prods.component */ 72790);
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payments/payments.component */ 82068);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./payment/payment.component */ 79082);
/* harmony import */ var _credit_note_credit_note_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./credit-note/credit-note.component */ 53274);
/* harmony import */ var _commissions_commissionsDash_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./commissions/commissionsDash.component */ 89616);
/* harmony import */ var _commissions_commissions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./commissions/commissions.component */ 49974);
/* harmony import */ var _pruebas_prueba_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pruebas/prueba.component */ 40415);
/* harmony import */ var _edit_product_prices_edit_product_prices_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-product-prices/edit-product-prices.component */ 79057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
























const routes = [
    //{ path: "", redirectTo: "home", pathMatch: "full" },
    { path: "", component: _log_check_log_check_component__WEBPACK_IMPORTED_MODULE_1__.LogCheckComponent },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__.DashboardComponent },
    { path: "payments/creditNote", component: _credit_note_credit_note_component__WEBPACK_IMPORTED_MODULE_16__.CreditNoteComponent },
    { path: "payments/payment", component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_15__.PaymentComponent },
    { path: "payments/payments/:id", component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_15__.PaymentComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "payments/payments", component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_14__.PaymentsComponent },
    { path: "client/client", component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_4__.ClientsComponent },
    { path: "pruebas/prueba", component: _pruebas_prueba_component__WEBPACK_IMPORTED_MODULE_19__.PruebaComponent },
    { path: "stock/stock", component: _stock_stock_component__WEBPACK_IMPORTED_MODULE_9__.StockComponent },
    { path: "buys", component: _buys_buys_component__WEBPACK_IMPORTED_MODULE_12__.BuysComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "editProductPrices", component: _edit_product_prices_edit_product_prices_component__WEBPACK_IMPORTED_MODULE_20__.EditProductPricesComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "admin/clients/new", component: _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_5__.ClientsFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "admin/clients/:id", component: _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_5__.ClientsFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "admin/clients", component: _admin_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_2__.AdminClientsComponent },
    { path: "admin/prods/new", component: _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__.ProductFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "admin/prods/:id", component: _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__.ProductFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "admin/prods", component: _admin_prods_admin_prods_component__WEBPACK_IMPORTED_MODULE_13__.AdminProdsComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "admin/sellers/new", component: _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_8__.SellersFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "admin/sellers/:id", component: _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_8__.SellersFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "admin/sellers", component: _admin_admin_sellers_admin_sellers_component__WEBPACK_IMPORTED_MODULE_7__.AdminSellersComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "replaces/replaces", component: _replaces_replaces_component__WEBPACK_IMPORTED_MODULE_0__.ReplacesComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AdminAuthGuard] },
    { path: "commissions/commissionsDash", component: _commissions_commissionsDash_component__WEBPACK_IMPORTED_MODULE_17__.CommissionsDashComponent },
    { path: "commissions/commissions", component: _commissions_commissions_component__WEBPACK_IMPORTED_MODULE_18__.CommissionsComponent },
    { path: 'orders/order', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_order-lazy_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/order-lazy/order.module */ 853)).then(m => m.OrderModule) },
    { path: 'orders/orders', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_orders-lazy_orders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/orders-lazy/orders.module */ 3465)).then(m => m.OrdersModule) },
    { path: 'client/clients', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_clients-lazy_clients-lazy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/clients-lazy/clients-lazy.module */ 92632)).then(m => m.ClientsLazyModule) },
    { path: 'stock/buy', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_buy-lazy_buy-lazy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/buy-lazy/buy-lazy.module */ 94222)).then(m => m.BuyLazyModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ 37503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ 73071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat-navbar/mat-navbar.component */ 7181);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ 51105);








function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_mat_navbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-navbar", 6);
} }
function AppComponent_app_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-menu");
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class AppComponent {
    //MOBILE_SIZE: number = 1000;
    constructor(auth, userService, router) {
        this.auth = auth;
        this.userService = userService;
        this.router = router;
        this.itemValue = '';
        this.loading = true;
        this.isMobile = _globals__WEBPACK_IMPORTED_MODULE_0__.isMobile;
        //this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
        this.subscription = auth.user$.subscribe(user => {
            if (!user)
                return;
            this.user = user;
            this.userService.save(user);
            let returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
        this.loading = false;
    }
    ngOnInit() {
    }
    // @HostListener('window:resize', ['$event'])
    // onResize(event: any) {
    //   this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
    // }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [["class", "SCContainer mt-5 ms-5 spinner-border text-primary", "role", "status", 4, "ngIf"], ["id", "over-router", 4, "ngIf"], [4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], ["role", "status", 1, "SCContainer", "mt-5", "ms-5", "spinner-border", "text-primary"], [1, "visually-hidden"], ["id", "over-router"], [1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_mat_navbar_1_Template, 1, 0, "mat-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_app_menu_2_Template, 1, 0, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_3__.MatNavbarComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], styles: ["mat-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  \n  top: 0;\n  \n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQWUsK0RBQUE7RUFDZixNQUFBO0VBQVEseUNBQUE7RUFDUixXQUFBO0FBR0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LW5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxuICB0b3A6IDA7IC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat-navbar/mat-navbar.component */ 7181);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _Material_Material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Material/Material.module */ 53732);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _admin_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin-clients/admin-clients.component */ 63752);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard.service */ 78968);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ 73071);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/product.service */ 66082);
/* harmony import */ var _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/clients-form/clients-form.component */ 27745);
/* harmony import */ var _admin_admin_sellers_admin_sellers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-sellers/admin-sellers.component */ 24146);
/* harmony import */ var _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/sellers-form/sellers-form.component */ 57954);
/* harmony import */ var _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forms/product-form/product-form.component */ 62830);
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stock/stock.component */ 5758);
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ 80483);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 77528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _buys_buys_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./buys/buys.component */ 88124);
/* harmony import */ var _pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pieChart/pieChart.component */ 31583);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _admin_prods_admin_prods_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-prods/admin-prods.component */ 72790);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _log_check_log_check_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./log-check/log-check.component */ 31390);
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./payments/payments.component */ 82068);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment/payment.component */ 79082);
/* harmony import */ var _credit_note_credit_note_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./credit-note/credit-note.component */ 53274);
/* harmony import */ var _commissions_commissionsDash_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./commissions/commissionsDash.component */ 89616);
/* harmony import */ var _commissions_commissions_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./commissions/commissions.component */ 49974);
/* harmony import */ var _replaces_replaces_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./replaces/replaces.component */ 42536);
/* harmony import */ var _pruebas_prueba_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pruebas/prueba.component */ 40415);
/* harmony import */ var _edit_product_prices_edit_product_prices_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./edit-product-prices/edit-product-prices.component */ 79057);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/utility.service */ 67278);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./menu/menu.component */ 51105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 37716);








// import { environment } from '../environments/environment.test';





































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__.AdminAuthGuard, _services_product_service__WEBPACK_IMPORTED_MODULE_10__.ProductService, _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService, _services_utility_service__WEBPACK_IMPORTED_MODULE_30__.UtilityService,
        _services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService, _angular_common__WEBPACK_IMPORTED_MODULE_33__.DatePipe, _pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_19__.PieChartComponent, {
            provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__.MAT_RADIO_DEFAULT_OPTIONS,
            useValue: { color: 'primary' },
        }], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
            ng2_validation__WEBPACK_IMPORTED_MODULE_6__.CustomFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _Material_Material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_38__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_39__.AngularFireAuthModule,
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_40__.AngularFireDatabaseModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_41__.FlexLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_42__.ChartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MatNavbarComponent,
        _admin_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_4__.AdminClientsComponent,
        _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_14__.ProductFormComponent,
        _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_11__.ClientsFormComponent,
        _admin_admin_sellers_admin_sellers_component__WEBPACK_IMPORTED_MODULE_12__.AdminSellersComponent,
        _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_13__.SellersFormComponent,
        _stock_stock_component__WEBPACK_IMPORTED_MODULE_15__.StockComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__.DashboardComponent,
        _buys_buys_component__WEBPACK_IMPORTED_MODULE_18__.BuysComponent,
        _pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_19__.PieChartComponent,
        _admin_prods_admin_prods_component__WEBPACK_IMPORTED_MODULE_20__.AdminProdsComponent,
        _log_check_log_check_component__WEBPACK_IMPORTED_MODULE_21__.LogCheckComponent,
        _payments_payments_component__WEBPACK_IMPORTED_MODULE_22__.PaymentsComponent,
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_23__.PaymentComponent,
        _credit_note_credit_note_component__WEBPACK_IMPORTED_MODULE_24__.CreditNoteComponent,
        _commissions_commissionsDash_component__WEBPACK_IMPORTED_MODULE_25__.CommissionsDashComponent,
        _commissions_commissions_component__WEBPACK_IMPORTED_MODULE_26__.CommissionsComponent,
        _replaces_replaces_component__WEBPACK_IMPORTED_MODULE_27__.ReplacesComponent,
        _pruebas_prueba_component__WEBPACK_IMPORTED_MODULE_28__.PruebaComponent,
        _edit_product_prices_edit_product_prices_component__WEBPACK_IMPORTED_MODULE_29__.EditProductPricesComponent,
        _payments_payments_component__WEBPACK_IMPORTED_MODULE_22__.PaymentsComponent,
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_31__.MenuComponent], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
        ng2_validation__WEBPACK_IMPORTED_MODULE_6__.CustomFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _Material_Material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_fire__WEBPACK_IMPORTED_MODULE_38__.AngularFireModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_39__.AngularFireAuthModule,
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_40__.AngularFireDatabaseModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_41__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_42__.ChartsModule] }); })();


/***/ }),

/***/ 88124:
/*!****************************************!*\
  !*** ./src/app/buys/buys.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuysComponent": () => (/* binding */ BuysComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stock.service */ 83188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 1562);

















function BuysComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BuysComponent_div_1_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BuysComponent_div_1_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BuysComponent_div_1_tr_44_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, b_r9.payload.val().date, "dd/MM/yyyy HH:mm"), "\u00A0\u00A0\u00A0\u00A0");
} }
function BuysComponent_div_1_tr_44_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r12.stockService.getTotalCost(b_r9), "1.1-1"), "");
} }
function BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r18.quantity, "\u00A0\u00A0");
} }
function BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r18.title, "\u00A0\u00A0\u00A0\u00A0");
} }
function BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, item_r18.price, "1.1-1"), "");
} }
function BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, item_r18.price * item_r18.quantity, "1.1-1"), "");
} }
function BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_td_1_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_td_2_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_td_3_Template, 3, 4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_td_4_Template, 3, 4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r18.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r18.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r18.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r18.quantity != 0);
} }
function BuysComponent_div_1_tr_44_mat_accordion_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-expansion-panel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Precio unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, BuysComponent_div_1_tr_44_mat_accordion_3_tr_14_Template, 5, 4, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const i_r10 = ctx_r28.index;
    const b_r9 = ctx_r28.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("mat-sort-header", "prodQuantity;", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("mat-sort-header", "prodTitle;", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("mat-sort-header", "itemPrice;", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("mat-sort-header", "subTotalPrice;", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", b_r9.payload.val().buy);
} }
function BuysComponent_div_1_tr_44_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuysComponent_div_1_tr_44_td_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const b_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r29.removeBuy(b_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BuysComponent_div_1_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BuysComponent_div_1_tr_44_td_1_Template, 3, 4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BuysComponent_div_1_tr_44_td_2_Template, 3, 4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BuysComponent_div_1_tr_44_mat_accordion_3_Template, 15, 5, "mat-accordion", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BuysComponent_div_1_tr_44_td_4_Template, 4, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", b_r9.payload.val().buyItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", b_r9.payload.val().buyItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", b_r9.payload.val().buyItemCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.appUser.isAdmin);
} }
function BuysComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nueva Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Compras\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BuysComponent_div_1_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.dateValue = $event; })("keyup", function BuysComponent_div_1_Template_input_keyup_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.filterByDate(_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "form", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function BuysComponent_div_1_Template_form_ngSubmit_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r35.searchDateRange(ctx_r35.range.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Ingrese un rango de fechas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-date-range-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "mat-datepicker-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "mat-date-range-picker", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, BuysComponent_div_1_mat_error_27_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, BuysComponent_div_1_mat_error_28_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "buscar por rango");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuysComponent_div_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r36.clearRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "borrar b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function BuysComponent_div_1_Template_table_matSortChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r37.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Importe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, BuysComponent_div_1_tr_44_Template, 5, 4, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.range)("rangePicker", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.range.controls.end.hasError("matEndDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.filteredBuys);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", ctx_r1.getTotal(), "");
} }
class BuysComponent {
    constructor(productService, route, auth, datepipe, stockService, dateAdapter) {
        this.productService = productService;
        this.route = route;
        this.auth = auth;
        this.datepipe = datepipe;
        this.stockService = stockService;
        this.dateAdapter = dateAdapter;
        this.loading = true;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
        });
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }
    ngOnInit() {
        this.loading = true;
        //this.filter("");
        this.subscription = this.stockService.getBuys().subscribe(buys => {
            this.subscription2 = this.auth.appUser$.subscribe(appUser => {
                this.appUser = appUser;
                //this.buys =  buys;
                this.buys = this.dateRangefilteredBuys = this.datefilteredBuys = this.filteredBuys = buys;
                this.loading = false;
            });
        });
    }
    filterByDate(query) {
        if (query != "") {
            this.filteredBuys = (query) ?
                this.filteredBuys.filter((b) => { var _a; return (_a = this.datepipe.transform(b.payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(query); }) :
                this.filteredBuys;
        }
        else
            this.filteredBuys = this.buys;
    }
    sortData(sort) {
        const data = this.filteredBuys;
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                //case 'nroOrder': return this.compare(a.i, b.i, isAsc);
                case 'cliente': return this.compare(a.payload.val().clientFantasyName, b.payload.val().clientFantasyName, isAsc);
                case 'vendedor': return this.compare(a.payload.val().sellerName, b.payload.val().sellerName, isAsc);
                case 'date': return this.compare(a.payload.val().date, b.payload.val().date, isAsc);
                default: return 0;
            }
        });
    }
    removeBuy(buy) {
        this.stockService.removeBuy(buy);
    }
    getTitle(item) {
        return item.title;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    getTotal() {
        let total = 0;
        if (this.filteredBuys) {
            this.filteredBuys.forEach((buy) => {
                total += this.stockService.getTotalCost(buy);
            });
        }
        return Math.round(total * 10) / 10;
        ;
    }
    searchDateRange(range) {
        if (range.start) {
            this.filteredBuys = (range) ?
                this.filteredBuys.filter((b) => b.payload.val().date > Date.parse(range.start._d) && b.payload.val().date < Date.parse(range.end._d)) :
                this.filteredBuys;
        }
        else
            this.filteredBuys = this.buys;
    }
    clearRange() {
        this.range.setValue({
            start: null,
            end: null
        });
        this.dateValue = "";
        this.filteredBuys = this.buys;
    }
    exportAsPDF(buy) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.default();
        doc.text('Cantidad', 10, 20);
        doc.text('Producto', 40, 20);
        doc.text('Importe/uni', 140, 20);
        doc.text('Importe', 180, 20);
        let cont = 0;
        for (let i = 0; i < buy.payload.val().buy.products.length; i++) {
            if (buy.payload.val().buy.products[i].quantity != 0) {
                let total = buy.payload.val().buy.products[i].price * buy.payload.val().product[i].quantity;
                doc.text(buy.payload.val().product[i].quantity.toString(), 10, 30 + 10 * cont);
                doc.text(buy.payload.val().product[i].product.title, 40, 30 + 10 * cont);
                doc.text(buy.payload.val().product[i].price.toString(), 140, 30 + 10 * cont);
                doc.text(total.toString(), 180, 30 + 10 * cont);
                cont += 1;
            }
        }
        // Save the PDF
        doc.save('buy.pdf');
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
BuysComponent.ɵfac = function BuysComponent_Factory(t) { return new (t || BuysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_3__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter)); };
BuysComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BuysComponent, selectors: [["app-buys"]], decls: 2, vars: 2, consts: [["class", "SCContainer ml-5 ms-5 spinner-border text-primary", "role", "status", 4, "ngIf"], ["class", "BsContainer", 4, "ngIf"], ["role", "status", 1, "SCContainer", "ml-5", "ms-5", "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "BsContainer"], ["mat-raised-button", "", "color", "accent", "routerLink", "/stock/buy"], [2, "display", "inline"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "   fecha...", 3, "ngModel", "ngModelChange", "keyup"], ["Datequery", ""], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "fecha inicio"], ["matEndDate", "", "formControlName", "end", "placeholder", "fecha finalizaci\u00F3n"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 2, "margin", "5px"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["query", ""], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "date"], ["mat-sort-header", "import"], ["mat-sort-header", "detail"], ["mat-sort-header", "delete"], [4, "ngFor", "ngForOf"], ["mat-sort-header", "total"], ["mat-sort-header", "showTotal"], ["hideToggle", ""], [3, "mat-sort-header"], ["mat-icon-button", "", "color", "accent", 3, "click"]], template: function BuysComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BuysComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BuysComponent_div_1_Template, 50, 8, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangePicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanelTitle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXlzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 57045:
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsComponent": () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/print.service */ 39534);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utility.service */ 67278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);















function ClientsComponent_div_0_tr_52_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientsComponent_div_0_tr_52_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const client_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.printService.exportResume(client_r4.payload.val()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientsComponent_div_0_tr_52_Template_a_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const client_r4 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.searchPayments(client_r4.payload.val().fantasyName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Ver cobros al cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientsComponent_div_0_tr_52_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const client_r4 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.searchOrders(client_r4.payload.val().fantasyName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Ver pedidos del cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r4.payload.val().businessName, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r4.payload.val().fantasyName, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r4.payload.val().clientCategory, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](client_r4.payload.val().designatedSeller);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r4.payload.val().address, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r4.payload.val().phone, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 8, ctx_r3.ordersService.getDebt(client_r4.payload.val().fantasyName), "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 11, ctx_r3.ordersService.calcDebt(client_r4.payload.val().fantasyName), "1.1-1"), "");
} }
const _c0 = function () { return [10, 20, 30]; };
function ClientsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "CLIENTES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientsComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.printService.exportClients(ctx_r10.clients); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Descargar Listado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ClientsComponent_div_0_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.clientValue = $event; })("ngModelChange", function ClientsComponent_div_0_Template_input_ngModelChange_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.filter(_r1.value); })("keyup", function ClientsComponent_div_0_Template_input_keyup_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.filter(_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ClientsComponent_div_0_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.sellerValue = $event; })("ngModelChange", function ClientsComponent_div_0_Template_input_ngModelChange_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.filterBySeller(_r2.value); })("keyup", function ClientsComponent_div_0_Template_input_keyup_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.filterBySeller(_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function ClientsComponent_div_0_Template_table_matSortChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Raz\u00F3n social");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Nombre de Fantas\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Saldo hoy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Estado de cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, ClientsComponent_div_0_tr_52_Template, 35, 14, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-paginator", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function ClientsComponent_div_0_Template_mat_paginator_page_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("*IMPORTANTE VENDEDORES: La deuda que figura es el remanente del monto de lo/s pedido/s con mas de ", ctx_r0.TOLERATED_DAYS, " d\u00EDas y que no quedaron pagos en su totalidad. Por ejemplo si el pedido era de 1000 y se cobr\u00F3 300, la deuda va a ser de 700.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.clientValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.sellerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Deuda ", ctx_r0.TOLERATED_DAYS, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.currentItemsToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx_r0.filteredClients.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c0));
} }
class ClientsComponent {
    constructor(auth, printService, ordersService, utilityService) {
        this.auth = auth;
        this.printService = printService;
        this.ordersService = ordersService;
        this.utilityService = utilityService;
        this.TOLERATED_DAYS = _constants__WEBPACK_IMPORTED_MODULE_0__.TOLERATED_DAYS;
        this.includedClients = [];
        this.query = { client: "", seller: "" };
    }
    ngOnInit() {
        this.filter("");
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.subscription2 = this.ordersService.getAllClients().subscribe(clients => {
                this.clients = clients;
                this.includedClients = [];
                this.currentItemsToShow = [];
                this.clients.forEach((client) => {
                    var _a;
                    let isUserClient = client.payload.val().designatedSeller == ((_a = this.appUser) === null || _a === void 0 ? void 0 : _a.name);
                    if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager || isUserClient)) {
                        this.includedClients.push(client);
                    }
                });
                this.filteredClients = this.includedClients;
                this.currentItemsToShow = this.filteredClients;
                this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredClients.length });
                if (this.paginator)
                    this.paginator.pageIndex = 0;
            });
        });
    }
    filter(query) {
        this.query.client = query;
        this.filteredClients = [];
        this.includedClients.forEach((client) => {
            if (client.payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())
                && client.payload.val().designatedSeller.toLowerCase().includes(this.query.seller.toLowerCase()))
                this.filteredClients.push(client);
        });
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredClients.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    filterBySeller(query) {
        this.query.seller = query;
        this.filteredClients = [];
        this.includedClients.forEach((client) => {
            if (client.payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                && client.payload.val().designatedSeller.toLowerCase().includes(query.toLowerCase())) {
                this.filteredClients.push(client);
            }
        });
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredClients.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    sortData(sort) {
        const data = this.filteredClients;
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'cliente': return this.compare(a.payload.val().fantasyName, b.payload.val().fantasyName, isAsc);
                default: return 0;
            }
        });
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    searchPayments(fantasyName) {
        this.ordersService.fantasyName = fantasyName;
    }
    searchOrders(fantasyName) {
        this.ordersService.fantasyName = fantasyName;
    }
    onPageChange($event) {
        this.currentItemsToShow = this.filteredClients.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_2__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService)); };
ClientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["clients"]], viewQuery: function ClientsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "SCContainer ms-1", 4, "ngIf"], [1, "SCContainer", "ms-1"], [1, "row"], [1, "col", "col-md-3", "ms-2", "my-2"], ["mat-icon-button", "", "color", "primary", 3, "click"], [1, "input-group"], ["matSuffix", ""], ["type", "text", "placeholder", "   Nombre de Fantas\u00EDa...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["query", ""], ["type", "text", "placeholder", "   Vendedor...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["sellerquery", ""], ["matSort", "", 1, "table", "table-striped", "table-sm", "mat-elevation-z8", 3, "matSortChange"], ["mat-sort-header", "businessName"], ["mat-sort-header", "fantasyName"], ["mat-sort-header", "clientCategory"], ["mat-sort-header", "seller"], ["mat-sort-header", "address"], ["mat-sort-header", "phone"], ["mat-sort-header", "debt"], ["mat-sort-header", "presentDebt"], ["mat-sort-header", "resume"], [4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["mat-icon-button", "", "routerLink", "/payments/payments", 2, "margin-left", "10px", 3, "click"], ["mat-icon-button", "", "routerLink", "/orders/orders", 2, "margin-left", "10px", 3, "click"], [2, "margin-right", "10px"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ClientsComponent_div_0_Template, 54, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 49974:
/*!******************************************************!*\
  !*** ./src/app/commissions/commissions.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommissionsComponent": () => (/* binding */ CommissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_commissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/commissions.service */ 63207);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);










function CommissionsComponent_div_0_table_10_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "M\u00EDn. Fact Minorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Com. Min.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Com. May.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tasa Mensual");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_tr_10_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commissionByMonth_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](commissionByMonth_r7.payload.val().minRetailTotalSales);
} }
function CommissionsComponent_div_0_table_10_tr_10_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commissionByMonth_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](commissionByMonth_r7.payload.val().retailPercent);
} }
function CommissionsComponent_div_0_table_10_tr_10_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commissionByMonth_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](commissionByMonth_r7.payload.val().wholesalerPercent);
} }
function CommissionsComponent_div_0_table_10_tr_10_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commissionByMonth_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](commissionByMonth_r7.payload.val().monthlyRate);
} }
function CommissionsComponent_div_0_table_10_tr_10_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CommissionsComponent_div_0_table_10_tr_10_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r27.prodCatDetails = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_tr_10_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CommissionsComponent_div_0_table_10_tr_10_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r29.prodCatDetails = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_tr_10_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Fact. Min.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_tr_10_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commissionByMonth_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Com. Min. (", commissionByMonth_r7.payload.val().retailPercent * 100, "%)");
} }
function CommissionsComponent_div_0_table_10_tr_10_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Fact. May.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_tr_10_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commissionByMonth_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Com. May. (", commissionByMonth_r7.payload.val().wholesalerPercent * 100, "%)");
} }
function CommissionsComponent_div_0_table_10_tr_10_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Total de Premios");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_tr_10_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cobranza");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_tr_10_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Comisi\u00F3n final");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_tr_10_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Deuda en mora");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sellersCommissionInfo_r33.retailSalesPMonth);
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sellersCommissionInfo_r33.retailCommission);
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sellersCommissionInfo_r33.wholesalerSalesPMonth);
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sellersCommissionInfo_r33.wholesalerCommission);
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sellersCommissionInfo_r33.TotalRewards);
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sellersCommissionInfo_r33.sellerPenalty);
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, sellersCommissionInfo_r33.totalIncome, "1.1-1"));
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sellersCommissionInfo_r33.totalSellerDebtDelayed);
} }
const _c0 = function (a0, a1) { return { "text-primary": a0, "font-weight-bold": a1 }; };
function CommissionsComponent_div_0_table_10_tr_10_tr_28_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Objetivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Ventas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Premio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodCategoryReward_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prodCategoryReward_r52.prodCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prodCategoryReward_r52.categoryAim);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prodCategoryReward_r52.prodCategorySales);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c0, prodCategoryReward_r52.prodCategorySales >= prodCategoryReward_r52.categoryAim, prodCategoryReward_r52.prodCategorySales >= prodCategoryReward_r52.categoryAim));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prodCategoryReward_r52.categoryReward);
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CommissionsComponent_div_0_table_10_tr_10_tr_28_div_11_div_1_Template, 20, 8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", sellersCommissionInfo_r33.prodCategoryRewards);
} }
function CommissionsComponent_div_0_table_10_tr_10_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CommissionsComponent_div_0_table_10_tr_10_tr_28_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CommissionsComponent_div_0_table_10_tr_10_tr_28_td_4_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CommissionsComponent_div_0_table_10_tr_10_tr_28_td_5_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CommissionsComponent_div_0_table_10_tr_10_tr_28_td_6_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CommissionsComponent_div_0_table_10_tr_10_tr_28_td_7_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CommissionsComponent_div_0_table_10_tr_10_tr_28_td_8_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CommissionsComponent_div_0_table_10_tr_10_tr_28_td_9_Template, 3, 4, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CommissionsComponent_div_0_table_10_tr_10_tr_28_td_10_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CommissionsComponent_div_0_table_10_tr_10_tr_28_div_11_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sellersCommissionInfo_r33 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sellersCommissionInfo_r33.sellerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r22.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r22.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r22.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r22.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r22.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r22.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r22.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r22.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.prodCatDetails);
} }
function CommissionsComponent_div_0_table_10_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CommissionsComponent_div_0_table_10_tr_10_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CommissionsComponent_div_0_table_10_tr_10_td_4_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CommissionsComponent_div_0_table_10_tr_10_td_5_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CommissionsComponent_div_0_table_10_tr_10_td_6_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("opened", function CommissionsComponent_div_0_table_10_tr_10_Template_mat_expansion_panel_opened_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r54.isExpanded = true; })("closed", function CommissionsComponent_div_0_table_10_tr_10_Template_mat_expansion_panel_closed_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r56.isExpanded = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Informaci\u00F3n vendedores");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CommissionsComponent_div_0_table_10_tr_10_button_14_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CommissionsComponent_div_0_table_10_tr_10_button_15_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CommissionsComponent_div_0_table_10_tr_10_th_20_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CommissionsComponent_div_0_table_10_tr_10_th_21_Template, 2, 1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CommissionsComponent_div_0_table_10_tr_10_th_22_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CommissionsComponent_div_0_table_10_tr_10_th_23_Template, 2, 1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CommissionsComponent_div_0_table_10_tr_10_th_24_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, CommissionsComponent_div_0_table_10_tr_10_th_25_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, CommissionsComponent_div_0_table_10_tr_10_th_26_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, CommissionsComponent_div_0_table_10_tr_10_th_27_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CommissionsComponent_div_0_table_10_tr_10_tr_28_Template, 12, 10, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commissionByMonth_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", commissionByMonth_r7.payload.val().month, "/", commissionByMonth_r7.payload.val().year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", commissionByMonth_r7.payload.val().sellersCommissionsInfo);
} }
function CommissionsComponent_div_0_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CommissionsComponent_div_0_table_10_th_5_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CommissionsComponent_div_0_table_10_th_6_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CommissionsComponent_div_0_table_10_th_7_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CommissionsComponent_div_0_table_10_th_8_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CommissionsComponent_div_0_table_10_tr_10_Template, 29, 17, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.prodCatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.commissionsByMonth);
} }
function CommissionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "COMISIONES HIST\u00D3RICO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Volver a comisiones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CommissionsComponent_div_0_table_10_Template, 11, 5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.commissionsByMonth);
} }
class CommissionsComponent {
    constructor(ordersService, auth, commissionsService, db) {
        this.ordersService = ordersService;
        this.auth = auth;
        this.commissionsService = commissionsService;
        this.db = db;
        this.isExpanded = false;
        this.prodCatDetails = false;
    }
    ngOnInit() {
        this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.subscription = this.commissionsService.getCommissionsByMonth().subscribe(commissionsByMonth => {
                this.commissionsByMonth = commissionsByMonth;
                this.clearCommissionsByMonth(this.commissionsByMonth);
                this.subscription = this.commissionsService.getCommissionsByMonth().subscribe(commissionsByMonth => {
                    this.commissionsByMonth = commissionsByMonth;
                });
            });
        });
    }
    clearCommissionsByMonth(commissionsByMonth) {
        let lastMonth = commissionsByMonth[0].payload.val().month;
        let lastYear = commissionsByMonth[0].payload.val().year;
        for (let i = 1; i < commissionsByMonth.length; i++) {
            if (commissionsByMonth[i].payload.val().month == lastMonth
                && commissionsByMonth[i].payload.val().year == lastYear) {
                console.log('cleaning 1 repited');
                this.db.object('/commissionsByMonth/' + commissionsByMonth[i].key).remove();
            }
            else {
                lastMonth = commissionsByMonth[i].payload.val().month;
                lastYear = commissionsByMonth[i].payload.val().year;
            }
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
CommissionsComponent.ɵfac = function CommissionsComponent_Factory(t) { return new (t || CommissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_commissions_service__WEBPACK_IMPORTED_MODULE_2__.CommissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.AngularFireDatabase)); };
CommissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CommissionsComponent, selectors: [["app-commissions"]], decls: 1, vars: 1, consts: [["class", "SCContainer ml-3", 4, "ngIf"], [1, "SCContainer", "ml-3"], [1, "row"], [1, "col"], [2, "display", "inline", "margin", "10px"], ["mat-raised-button", "", "routerLink", "/commissions/commissionsDash", "color", "accent"], ["class", "table table-sm mat-elevation-z8", 4, "ngIf"], [1, "table", "table-sm", "mat-elevation-z8"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["hideToggle", "", 3, "opened", "closed"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "secondary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "secondary", 3, "click"], ["class", "row", 4, "ngIf"], ["class", "col", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function CommissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CommissionsComponent_div_0_Template, 11, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser && (ctx.appUser.isAdmin || ctx.appUser.isSalesManager));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21taXNzaW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 89616:
/*!**********************************************************!*\
  !*** ./src/app/commissions/commissionsDash.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommissionsDashComponent": () => (/* binding */ CommissionsDashComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_commissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/commissions.service */ 63207);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category.service */ 54655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);










function CommissionsDashComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CommissionsDashComponent_div_1_div_4_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Meta en ", ctx_r5.prodsCategories[i_r8].payload.val().name, "");
} }
function CommissionsDashComponent_div_1_div_4_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Premio en ", ctx_r6.prodsCategories[i_r10].payload.val().name, "");
} }
function CommissionsDashComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CommissionsDashComponent_div_1_div_4_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.save(ctx_r11.myGroup.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "% Minorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "% Mayorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Tasa Mensual");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "M\u00EDnima Facturaci\u00F3n Total Minorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CommissionsDashComponent_div_1_div_4_div_19_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CommissionsDashComponent_div_1_div_4_div_21_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Guardar Premios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommissionsDashComponent_div_1_div_4_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r13.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.myGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "retailPercent");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "wholesalerPercent");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "monthlyRate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "minRetailTotalSales");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.rewardsGoalsArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.rewardsArray.controls);
} }
function CommissionsDashComponent_div_1_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommissionsDashComponent_div_1_div_5_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r20.edit = !ctx_r20.edit; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Editar comisiones y l\u00EDmites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CommissionsDashComponent_div_1_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommissionsDashComponent_div_1_div_5_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r22.router.navigate(["/commissions/commissions"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Ver hist\u00F3rico comisiones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CommissionsDashComponent_div_1_div_5_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Comisiones del mes en curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CommissionsDashComponent_div_1_div_5_table_5_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seller_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](seller_r25.payload.val().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.retailSalesPMonth(seller_r25.payload.val().name, ctx_r24.monthOrders));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.retailCommission(ctx_r24.commissions[0].payload.val().retailPercent, ctx_r24.retailSalesPMonth(seller_r25.payload.val().name, ctx_r24.monthOrders)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.wholesalerSalesPMonth(seller_r25.payload.val().name, ctx_r24.monthOrders));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.wholesalerCommission(ctx_r24.commissions[0].payload.val().wholesalerPercent, ctx_r24.wholesalerSalesPMonth(seller_r25.payload.val().name, ctx_r24.monthOrders), ctx_r24.retailSalesPMonth(seller_r25.payload.val().name, ctx_r24.monthOrders)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.getProdCategoryRewards(seller_r25.payload.val().name).totalRewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.commissionsService.getSellerPenalty(ctx_r24.commissions[0].payload.val().monthlyRate, seller_r25.payload.val().name, ctx_r24.ordersService.orders));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 9, ctx_r24.retailCommission(ctx_r24.commissions[0].payload.val().retailPercent, ctx_r24.retailSalesPMonth(seller_r25.payload.val().name, ctx_r24.monthOrders)) + ctx_r24.wholesalerCommission(ctx_r24.commissions[0].payload.val().wholesalerPercent, ctx_r24.wholesalerSalesPMonth(seller_r25.payload.val().name, ctx_r24.monthOrders), ctx_r24.retailSalesPMonth(seller_r25.payload.val().name, ctx_r24.monthOrders)) + ctx_r24.getProdCategoryRewards(seller_r25.payload.val().name).totalRewards - ctx_r24.commissionsService.getSellerPenalty(ctx_r24.commissions[0].payload.val().monthlyRate, seller_r25.payload.val().name, ctx_r24.ordersService.orders), "1.1-1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r24.commissionsService.getTotalSellerDebtDelayed(seller_r25.payload.val().name, ctx_r24.orders));
} }
function CommissionsDashComponent_div_1_div_5_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Fact. Min.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fact. May.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Premios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Cobranza");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Comisi\u00F3n final");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Deuda en mora");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CommissionsDashComponent_div_1_div_5_table_5_tr_22_Template, 20, 12, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Com. Min. (", ctx_r17.commissions[0].payload.val().retailPercent * 100, "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Com. May. (", ctx_r17.commissions[0].payload.val().wholesalerPercent * 100, "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r17.sellers);
} }
function CommissionsDashComponent_div_1_div_5_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Premios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CommissionsDashComponent_div_1_div_5_table_7_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Fact ", reward_r29.payload.val().name, "");
} }
function CommissionsDashComponent_div_1_div_5_table_7_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Premio ", reward_r31.payload.val().name, "");
} }
function CommissionsDashComponent_div_1_div_5_table_7_tr_8_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r36 = ctx.$implicit;
    const seller_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r34.prodCategorySales(ctx_r34.monthOrders, reward_r36.payload.val().name, seller_r33.payload.val().name));
} }
function CommissionsDashComponent_div_1_div_5_table_7_tr_8_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    const seller_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r35.rewardCalc(i_r40, reward_r39.payload.val().name, seller_r33.payload.val().name, ctx_r35.monthOrders));
} }
function CommissionsDashComponent_div_1_div_5_table_7_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CommissionsDashComponent_div_1_div_5_table_7_tr_8_td_3_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CommissionsDashComponent_div_1_div_5_table_7_tr_8_td_4_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seller_r33 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](seller_r33.payload.val().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r28.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r28.prodsCategories);
} }
function CommissionsDashComponent_div_1_div_5_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CommissionsDashComponent_div_1_div_5_table_7_th_5_Template, 2, 1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CommissionsDashComponent_div_1_div_5_table_7_th_6_Template, 2, 1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CommissionsDashComponent_div_1_div_5_table_7_tr_8_Template, 5, 3, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r19.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r19.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r19.sellers);
} }
function CommissionsDashComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CommissionsDashComponent_div_1_div_5_div_2_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CommissionsDashComponent_div_1_div_5_div_3_Template, 3, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CommissionsDashComponent_div_1_div_5_h1_4_Template, 2, 0, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CommissionsDashComponent_div_1_div_5_table_5_Template, 23, 3, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CommissionsDashComponent_div_1_div_5_h1_6_Template, 2, 0, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CommissionsDashComponent_div_1_div_5_table_7_Template, 9, 3, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.loading && ctx_r4.appUser && ctx_r4.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.loading && ctx_r4.appUser && (ctx_r4.appUser.isAdmin || ctx_r4.appUser.isSalesManager));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.ordersService.orders && ctx_r4.commissions && ctx_r4.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.ordersService.orders && ctx_r4.commissions && ctx_r4.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.ordersService.orders && ctx_r4.commissions && ctx_r4.appUser.isAdmin);
} }
function CommissionsDashComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "COMISIONES");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CommissionsDashComponent_div_1_div_4_Template, 26, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CommissionsDashComponent_div_1_div_5_Template, 8, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.edit && ctx_r1.commissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.edit);
} }
function CommissionsDashComponent_div_2_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Objetivo Minorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Fact. Minorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fact. Mayorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Premios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Cobranza");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Comisi\u00F3n final");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Deuda en mora");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Com. Minorista (", ctx_r42.commissions[0].payload.val().retailPercent * 100, "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Com. Mayorista (", ctx_r42.commissions[0].payload.val().wholesalerPercent * 100, "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r42.commissions[0].payload.val().minRetailTotalSales);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r42.retailSalesPMonth(ctx_r42.appUser.name, ctx_r42.monthOrders));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r42.retailCommission(ctx_r42.commissions[0].payload.val().retailPercent, ctx_r42.retailSalesPMonth(ctx_r42.appUser.name, ctx_r42.monthOrders)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r42.wholesalerSalesPMonth(ctx_r42.appUser.name, ctx_r42.monthOrders));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r42.wholesalerCommission(ctx_r42.commissions[0].payload.val().wholesalerPercent, ctx_r42.wholesalerSalesPMonth(ctx_r42.appUser.name, ctx_r42.monthOrders), ctx_r42.retailSalesPMonth(ctx_r42.appUser.name, ctx_r42.monthOrders)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r42.getProdCategoryRewards(ctx_r42.appUser.name).totalRewards);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r42.commissionsService.getSellerPenalty(ctx_r42.commissions[0].payload.val().monthlyRate, ctx_r42.appUser.name, ctx_r42.ordersService.orders));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](39, 11, ctx_r42.retailCommission(ctx_r42.commissions[0].payload.val().retailPercent, ctx_r42.retailSalesPMonth(ctx_r42.appUser.name, ctx_r42.monthOrders)) + ctx_r42.wholesalerCommission(ctx_r42.commissions[0].payload.val().wholesalerPercent, ctx_r42.wholesalerSalesPMonth(ctx_r42.appUser.name, ctx_r42.monthOrders), ctx_r42.retailSalesPMonth(ctx_r42.appUser.name, ctx_r42.monthOrders)) + ctx_r42.getProdCategoryRewards(ctx_r42.appUser.name).totalRewards - ctx_r42.commissionsService.getSellerPenalty(ctx_r42.commissions[0].payload.val().monthlyRate, ctx_r42.appUser.name, ctx_r42.ordersService.orders), "1.1-1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r42.commissionsService.getTotalSellerDebtDelayed(ctx_r42.appUser.name, ctx_r42.orders));
} }
function CommissionsDashComponent_div_2_table_6_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Objetivo ", reward_r52.payload.val().name, "");
} }
function CommissionsDashComponent_div_2_table_6_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Premio ", reward_r53.payload.val().name, "");
} }
function CommissionsDashComponent_div_2_table_6_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r55 = ctx.index;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r46.commissions[0].payload.val().rewardsGoals[i_r55]);
} }
function CommissionsDashComponent_div_2_table_6_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r57 = ctx.index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r47.commissions[0].payload.val().rewards[i_r57]);
} }
function CommissionsDashComponent_div_2_table_6_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Fact ", reward_r58.payload.val().name, "");
} }
function CommissionsDashComponent_div_2_table_6_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Monto Obtenido ", reward_r59.payload.val().name, "");
} }
function CommissionsDashComponent_div_2_table_6_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r60 = ctx.$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r50.prodCategorySales(ctx_r50.monthOrders, reward_r60, ctx_r50.appUser.name));
} }
function CommissionsDashComponent_div_2_table_6_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reward_r62 = ctx.$implicit;
    const i_r63 = ctx.index;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r51.rewardCalc(i_r63, reward_r62, ctx_r51.appUser.name, ctx_r51.monthOrders));
} }
function CommissionsDashComponent_div_2_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CommissionsDashComponent_div_2_table_6_th_3_Template, 2, 1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CommissionsDashComponent_div_2_table_6_th_4_Template, 2, 1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CommissionsDashComponent_div_2_table_6_td_7_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CommissionsDashComponent_div_2_table_6_td_8_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CommissionsDashComponent_div_2_table_6_th_11_Template, 2, 1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CommissionsDashComponent_div_2_table_6_th_12_Template, 2, 1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CommissionsDashComponent_div_2_table_6_td_15_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CommissionsDashComponent_div_2_table_6_td_16_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r43.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r43.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r43.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r43.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r43.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r43.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r43.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r43.prodsCategories);
} }
function CommissionsDashComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Mis N\u00FAmeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CommissionsDashComponent_div_2_table_3_Template, 42, 14, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Mis Premios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CommissionsDashComponent_div_2_table_6_Template, 17, 8, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.ordersService.orders && ctx_r2.commissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.ordersService.orders && ctx_r2.commissions);
} }
class CommissionsDashComponent {
    constructor(ordersService, auth, router, commissionsService, catService, formBuilder) {
        this.ordersService = ordersService;
        this.auth = auth;
        this.router = router;
        this.commissionsService = commissionsService;
        this.catService = catService;
        this.formBuilder = formBuilder;
        this.rewards = [1500, 1000, 500];
        this.monthOrders = [];
        this.edit = false;
        this.loading = true;
    }
    ngOnInit() {
        let today = new Date();
        this.subscription = this.catService.getAllProdsCategories().subscribe(prodsCategories => {
            this.prodsCategories = prodsCategories;
            this.subscription2 = this.commissionsService.getCommissions().subscribe(commissions => {
                this.commissions = commissions;
                if (this.commissions.length == 0) {
                    this.commissionsService.createCommissions();
                }
                // Forms groups  --------------------
                let rewardsGoalsArray = [];
                let rewardsArray = [];
                for (let i = 0; i < this.prodsCategories.length; i++) {
                    rewardsGoalsArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.commissions[0].payload.val().rewardsGoals[i])); //valor de inicializacion
                    rewardsArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.commissions[0].payload.val().rewards[i])); //valor de inicializacion
                }
                this.rewardsGoalsArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray(rewardsGoalsArray);
                this.rewardsArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray(rewardsArray);
                this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                    retailPercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.commissions[0].payload.val().retailPercent),
                    wholesalerPercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.commissions[0].payload.val().wholesalerPercent),
                    monthlyRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.commissions[0].payload.val().monthlyRate),
                    minRetailTotalSales: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.commissions[0].payload.val().minRetailTotalSales),
                    rewardsGoals: this.rewardsGoalsArray,
                    rewards: this.rewardsArray
                });
                this.subscription3 = this.ordersService.getAllOrders().subscribe(orders => {
                    this.orders = this.ordersService.orders = orders;
                    //Me permite calcular y setear fecha de pago completo de pedidos de un vendedor!!!-------------------------
                    //this.calculateFullPaymentDates();
                    this.monthOrders = this.getThisMonthOrders();
                    // IMPORTANTE!!!! .month es el mes salvado, si guardé febrero vale 2
                    this.subscription4 = this.auth.appUser$.subscribe(appUser => {
                        this.appUser = appUser;
                        //manipulo USER
                        // appUser.name = 'Enrique Oyhamburu'
                        // appUser.isAdmin = false;
                        this.ordersService.getAllSellers().subscribe(sellers => {
                            this.sellers = sellers;
                            if (this.month != today.getMonth() ||
                                this.year != today.getFullYear()) {
                                if (this.commissions[0].payload.val().monthCommissionsSavedDate.month != (today.getMonth())) 
                                //|| this.commissions[0].payload.val().monthCommissionsSavedDate.year != today.getFullYear()
                                {
                                    this.month = today.getMonth();
                                    this.year = today.getFullYear();
                                    this.lastFullMonthOrders = this.getLastFullMonthOrders();
                                    this.saveCommissionsByMonth();
                                    setTimeout(() => { console.log('salvando comisiones'); }, 1000);
                                }
                            }
                            this.getActiveSellers();
                            this.loading = false;
                        });
                    });
                });
            });
        });
    }
    getThisMonthOrders() {
        let today = new Date();
        let filteredMonthOrders = this.ordersService.orders.filter(order => {
            let date = new Date(order.payload.val().fullPaymentDate);
            if (date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()) {
                return order;
            }
        });
        return filteredMonthOrders;
    }
    getActiveSellers() {
        let activeSellers = this.ordersService.sellers.filter(seller => this.isSellerActive(seller.payload.val().name));
        this.sellers = activeSellers;
    }
    isSellerActive(name) {
        for (let i = this.ordersService.orders.length - 1; i > 0; i--) {
            let fullPaymentDate = this.ordersService.orders[i].payload.val().fullPaymentDate;
            let timeAfterOrderPayment = (Date.now() - fullPaymentDate) / (1000 * 3600 * 24);
            const d = new Date(Date.now());
            let day = d.getDate();
            if (this.ordersService.orders[i].payload.val().seller == name && timeAfterOrderPayment <= day + 1) {
                return true;
            }
        }
        return false;
    }
    retailSalesPMonth(seller, orders) {
        let amount = 0;
        if (orders) {
            for (let i = 0; i < orders.length; i++) {
                if (orders[i].payload.val().seller == seller
                    && this.ordersService.getClientCategory(orders[i].payload.val().fantasyName) != "Distribuidor") {
                    amount += parseFloat(orders[i].payload.val().amountWithIva) / (1 + (parseFloat(orders[i].payload.val().iva) / 100));
                }
            }
        }
        if (amount)
            amount = Math.round(amount * 10) / 10;
        return amount;
    }
    wholesalerSalesPMonth(seller, orders) {
        let amount = 0;
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].payload.val().seller == seller
                && this.ordersService.getClientCategory(orders[i].payload.val().fantasyName) == "Distribuidor") {
                amount += parseFloat(orders[i].payload.val().amountWithIva) / (1 + (parseFloat(orders[i].payload.val().iva) / 100));
            }
        }
        if (amount)
            amount = Math.round(amount * 10) / 10;
        return amount;
    }
    prodCategorySales(orders, category, seller) {
        let sales = 0;
        if (orders) {
            for (let i = 0; i < orders.length; i++) {
                orders.forEach((order) => {
                    if (order.payload.val().seller == seller) {
                        let products = this.ordersService.getOrderDetail(order.payload.val().orderDetailKey).payload.val().products;
                        for (let j = 0; j < products.length; j++) {
                            if (products[j].category == category)
                                sales += parseFloat(products[j].discountPrice) * products[j].quantity;
                        }
                    }
                });
            }
        }
        if (sales)
            sales = Math.round(sales * 10) / 10;
        return sales;
    }
    retailCommission(retailPercent, retailSalesPMonth) {
        if (retailSalesPMonth >= this.commissions[0].payload.val().minRetailTotalSales)
            return Math.round((retailSalesPMonth - this.commissions[0].payload.val().minRetailTotalSales) * retailPercent * 10) / 10;
        return 0;
    }
    wholesalerCommission(wholesalerPercent, wholesalerSalesPMonth, retailSalesPMonth) {
        if (retailSalesPMonth >= this.commissions[0].payload.val().minRetailTotalSales)
            return Math.round(wholesalerSalesPMonth * wholesalerPercent * 10) / 10;
        return 0;
    }
    save(commissions) {
        if (confirm('Está segur@ que quiere guardar/crear estos valores de comisiones?')) {
            if (commissions) {
                this.commissionsService.update(this.commissions, commissions);
            }
        }
        this.edit = false;
        //document.location.reload();
    }
    back() {
        this.edit = false;
    }
    rewardCalc(indexx, prodCategory, seller, orders) {
        let prodCategorySales = this.prodCategorySales(orders, prodCategory, seller);
        if (prodCategorySales >= this.commissions[0].payload.val().rewardsGoals[indexx]
            && this.retailSalesPMonth(seller, orders) >= this.commissions[0].payload.val().minRetailTotalSales)
            return this.commissions[0].payload.val().rewards[indexx];
        return 0;
    }
    saveCommissionsByMonth() {
        let sellersCommissionsInfo = this.getSellersCommissionsInfo();
        let date = new Date();
        //let date = new Date('2023-01-01T03:24:00');
        let month = date.getMonth();
        let year = date.getFullYear();
        if (month == 0) {
            month = 12;
            year -= 1;
        }
        let monthCommissions = {
            'month': month,
            'year': year,
            "minRetailTotalSales": this.commissions[0].payload.val().minRetailTotalSales,
            "retailPercent": this.commissions[0].payload.val().retailPercent,
            "wholesalerPercent": this.commissions[0].payload.val().wholesalerPercent,
            "monthlyRate": this.commissions[0].payload.val().monthlyRate,
            //"productsCategories" : this.commissions[0].payload.val().productsCategories,
            "rewards": this.commissions[0].payload.val().rewards,
            "rewardsGoals": this.commissions[0].payload.val().rewardsGoals,
            'sellersCommissionsInfo': sellersCommissionsInfo
        };
        this.commissionsService.saveCommissionsByMonth(monthCommissions, this.commissions);
    }
    getSellersCommissionsInfo() {
        let sellersCommissionsInfo = [];
        for (let i = 0; i < this.ordersService.sellers.length; i++) {
            let retailSalesPMonth = this.retailSalesPMonth(this.ordersService.sellers[i].payload.val().name, this.lastFullMonthOrders);
            let retailCommission = this.retailCommission(this.commissions[0].payload.val().retailPercent, retailSalesPMonth);
            let wholesalerSalesPMonth = this.wholesalerSalesPMonth(this.ordersService.sellers[i].payload.val().name, this.lastFullMonthOrders);
            let wholesalerCommission = this.wholesalerCommission(this.commissions[0].payload.val().wholesalerPercent, wholesalerSalesPMonth, retailSalesPMonth);
            let sellerPenalty = this.commissionsService.getSellerPenalty(this.commissions[0].payload.val().monthlyRate, this.sellers[i].payload.val().name, this.ordersService.orders);
            let rewardsObject = this.getProdCategoryRewards(this.ordersService.sellers[i].payload.val().name);
            let prodCategoryRewards = rewardsObject.prodCategoryRewards;
            let totalRewards = rewardsObject.totalRewards;
            let totalIncome = retailCommission + wholesalerCommission + totalRewards - sellerPenalty;
            if (this.hasSellerSalesInLastMonth(this.ordersService.sellers[i].payload.val().name)) {
                sellersCommissionsInfo.push({
                    "sellerName": this.ordersService.sellers[i].payload.val().name,
                    "retailSalesPMonth": retailSalesPMonth,
                    "retailCommission": retailCommission,
                    "wholesalerSalesPMonth": wholesalerSalesPMonth,
                    "wholesalerCommission": wholesalerCommission,
                    "prodCategoryRewards": prodCategoryRewards,
                    "TotalRewards": totalRewards,
                    "sellerPenalty": sellerPenalty,
                    "totalIncome": totalIncome,
                    "totalSellerDebtDelayed": this.commissionsService.totalSellerDebtDelayed
                });
            }
        }
        return sellersCommissionsInfo;
    }
    getLastFullMonthOrders() {
        let lastFullMonthOrders = [];
        let today = new Date();
        let lastMonth = today.getMonth() - 1;
        let lastMonthYear = today.getFullYear();
        if (today.getMonth() == 0) {
            lastMonth = 11;
            lastMonthYear -= 1;
        }
        for (let i = 0; i < this.ordersService.orders.length; i++) {
            // var date = new Date(this.ordersService.orders[i].payload.val().date); cambio por ordenes completadas el mes anterior
            var date = new Date(this.ordersService.orders[i].payload.val().fullPaymentDate);
            //miro el mes anterior, today.getMonth() me da el mes anterior porque me da el mes -1
            // if (date.getMonth() == today.getMonth() -1 && date.getFullYear() == today.getFullYear()
            // && parseFloat(this.ordersService.orders[i].payload.val().debt) < 10 ){ no hace flata chequear la deuda por lo anterior
            if (date.getMonth() == lastMonth && date.getFullYear() == lastMonthYear) {
                lastFullMonthOrders.push(this.ordersService.orders[i]);
            }
        }
        return lastFullMonthOrders;
    }
    hasSellerSalesInLastMonth(seller) {
        let orders = this.lastFullMonthOrders;
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].payload.val().seller == seller)
                return true;
        }
        return false;
    }
    getProdCategoryRewards(seller) {
        let prodCategoryRewards = [];
        let totalRewards = 0;
        for (let j = 0; j < this.prodsCategories.length; j++) {
            totalRewards += parseFloat(this.rewardCalc(j, this.prodsCategories[j].payload.val().name, seller, this.lastFullMonthOrders));
            let categoryReward = 0;
            if (this.retailSalesPMonth(seller, this.lastFullMonthOrders) > this.commissions[0].payload.val().minRetailTotalSales
                && this.commissions[0].payload.val().rewards[j]) {
                categoryReward = this.commissions[0].payload.val().rewards[j];
            }
            ;
            let categoryAim = "0";
            this.commissions[0].payload.val().rewardsGoals[j] ? categoryAim = this.commissions[0].payload.val().rewardsGoals[j] : "0";
            prodCategoryRewards.push({
                'prodCategory': this.prodsCategories[j].payload.val().name,
                'prodCategorySales': this.prodCategorySales(this.lastFullMonthOrders, this.prodsCategories[j].payload.val().name, seller),
                'categoryAim': parseFloat(categoryAim),
                'categoryReward': categoryReward
            });
        }
        let result = {
            'prodCategoryRewards': prodCategoryRewards,
            'totalRewards': totalRewards
        };
        return result;
    }
    //solo para setear fechas de pedidos con pago completo para un vendedor
    calculateFullPaymentDates() {
        this.ordersService.calculateFullPaymentDates("Enrique Oyhamburu");
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
        this.subscription4.unsubscribe();
    }
}
CommissionsDashComponent.ɵfac = function CommissionsDashComponent_Factory(t) { return new (t || CommissionsDashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_commissions_service__WEBPACK_IMPORTED_MODULE_2__.CommissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
CommissionsDashComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CommissionsDashComponent, selectors: [["app-commissions"]], decls: 3, vars: 3, consts: [["class", "SCContainer ml-5 ms-5 spinner-border text-primary", "role", "status", 4, "ngIf"], ["class", "SCContainer ml-3", 4, "ngIf"], ["class", "ml-3", 4, "ngIf"], ["role", "status", 1, "SCContainer", "ml-5", "ms-5", "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "SCContainer", "ml-3"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], ["required", "", 3, "formControlName"], [1, "m-1"], ["formArrayName", "rewardsGoals"], [4, "ngFor", "ngForOf"], ["formArrayName", "rewards"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "m-1"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], ["for", "", 1, "m-1"], [1, "row"], ["class", "col col-sm-4 col-lg-2", 4, "ngIf"], ["class", "col", 4, "ngIf"], ["class", "table table-striped table-sm mat-elevation-z8", 4, "ngIf"], [1, "col", "col-sm-4", "col-lg-2"], ["mat-raised-button", "", "color", "primary", 1, "left-btn", "mb-3", 3, "click"], [1, "col"], ["mat-raised-button", "", "color", "accent", 1, "left-btn", "mb-3", 3, "click"], [1, "table", "table-striped", "table-sm", "mat-elevation-z8"], [1, "ml-3"]], template: function CommissionsDashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CommissionsDashComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CommissionsDashComponent_div_1_Template, 6, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CommissionsDashComponent_div_2_Template, 7, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading || !ctx.ordersService.clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.commissions && ctx.ordersService.clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.appUser && !ctx.appUser.isAdmin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21taXNzaW9uc0Rhc2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4854:
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOLERATED_DAYS": () => (/* binding */ TOLERATED_DAYS),
/* harmony export */   "TOLERATED_DEBT": () => (/* binding */ TOLERATED_DEBT)
/* harmony export */ });
const TOLERATED_DAYS = 14;
const TOLERATED_DEBT = 300;


/***/ }),

/***/ 53274:
/*!******************************************************!*\
  !*** ./src/app/credit-note/credit-note.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditNoteComponent": () => (/* binding */ CreditNoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5015);














function CreditNoteComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", client_r8.payload.val().fantasyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", client_r8.payload.val().fantasyName, " ");
} }
function CreditNoteComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Debe ingresar un valor!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CreditNoteComponent {
    constructor(ordersService, auth, router) {
        this.ordersService = ordersService;
        this.auth = auth;
        this.router = router;
        this.note = {};
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.clientFantasyName = "";
        this.creditAmount = 0;
        this.clients = [];
        this.client = true;
        this.noteEmpty = true;
    }
    ngOnInit() {
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.subscription2 = this.ordersService.getAllClients().subscribe(clients => {
                this.clients = clients;
                this.filteredClients = [];
                for (let i = 0; i < this.clients.length; i++) {
                    if (this.clients[i].payload.val().designatedSeller == this.appUser.name || this.appUser.isAdmin == true) {
                        this.filteredClients.push(this.clients[i]);
                    }
                }
                this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(value => value ? this._filter(value) : this._filter("")));
            });
        });
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        if (!this.filteredClients)
            return;
        let listFiltrada = this.filteredClients.filter(client => client.payload.val().fantasyName.toLowerCase().includes(filterValue));
        return listFiltrada;
    }
    sendNote(note) {
        if (!note.amount || note.amount == 0) {
            this.noteEmpty = false;
            setTimeout(() => {
                this.noteEmpty = true;
            }, 900);
            return;
        }
        if (confirm('Está segur@ que quiere crear la nota de crédito?')) {
            this.ordersService.createPayment({
                "amount": note.amount,
                "aproved": true,
                "client": this.clientFantasyName,
                "payWay": "Nota de Crédito",
                "date": note.date,
                "sellerName": this.appUser.name,
                "orderNumber": note.orderNumber
            }, this.clients);
            this.router.navigateByUrl('/payments/payments');
        }
        return;
    }
    cancel() {
        this.router.navigate(['/payments/payments']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
CreditNoteComponent.ɵfac = function CreditNoteComponent_Factory(t) { return new (t || CreditNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
CreditNoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreditNoteComponent, selectors: [["app-credit-note"]], decls: 41, vars: 12, consts: [["id", "productsList"], [1, "example-form", 3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill", 1, "me-1", "example-full-width"], ["name", "clientFantasyName", "type", "text", "placeholder", "Elija uno", "aria-label", "Number", "matInput", "", "required", "", 3, "formControl", "matAutocomplete", "ngModel", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "amount", "type", "number", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["amount", "ngModel"], ["name", "orderNumber", "type", "number", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["orderNumber", "ngModel"], ["appearance", "fill", 1, ""], ["matInput", "", "name", "date", "required", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["date", "ngModel"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "row"], [1, "col-3", "col-sm-2", "col-lg-1"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "left-btn"], [1, "col"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], [4, "ngIf"], [3, "value"]], template: function CreditNoteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "NOTA DE CR\u00C9DITO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreditNoteComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return ctx.sendNote(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreditNoteComponent_Template_input_ngModelChange_9_listener($event) { return ctx.clientFantasyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CreditNoteComponent_mat_option_12_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Ingrese el monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreditNoteComponent_Template_input_ngModelChange_17_listener($event) { return ctx.note.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Ingrese el n\u00FAm. de factura asociado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreditNoteComponent_Template_input_ngModelChange_22_listener($event) { return ctx.note.orderNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Ingrese la fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreditNoteComponent_Template_input_ngModelChange_27_listener($event) { return ctx.note.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreditNoteComponent_Template_button_click_37_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Descartar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, CreditNoteComponent_span_40_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r1)("ngModel", ctx.clientFantasyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 10, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.note.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.note.orderNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r6)("ngModel", ctx.note.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.noteEmpty);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVkaXQtbm90ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 77528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/stock.service */ 83188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ 86178);


















function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_div_1_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](label_r23);
} }
function DashboardComponent_div_1_div_1_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r24 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, data_r24, "1.1-1"), "\u00A0(", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 5, ctx_r22.getPercentage(data_r24), "1.1-1"), "%)\u00A0");
} }
function DashboardComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DashboardComponent_div_1_div_1_th_3_Template, 2, 1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DashboardComponent_div_1_div_1_td_7_Template, 4, 8, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.pieChartLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.pieChartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 3, ctx_r2.getTotalCategs(), "1.1-1"));
} }
function DashboardComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "canvas", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r3.pieChartData)("labels", ctx_r3.pieChartLabels)("chartType", ctx_r3.pieChartType)("options", ctx_r3.pieChartOptions)("colors", ctx_r3.pieChartColors)("legend", ctx_r3.pieChartLegend);
} }
function DashboardComponent_div_1_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", c_r25.client, " ");
} }
function DashboardComponent_div_1_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", c_r26.seller, " ");
} }
function DashboardComponent_div_1_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Importe*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, c_r27.amountWithIva, "1.1-1"));
} }
function DashboardComponent_div_1_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 56);
} }
function DashboardComponent_div_1_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 57);
} }
const _c0 = function () { return [10, 20]; };
function DashboardComponent_div_1_mat_paginator_71_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-paginator", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function DashboardComponent_div_1_mat_paginator_71_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r29.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx_r20.filteredOrders.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
} }
function DashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_1_div_1_Template, 11, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DashboardComponent_div_1_div_2_Template, 2, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "GR\u00C1FICOS\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.graphic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Graficar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.showGraph = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Ocultar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_1_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.clientValue = $event; })("ngModelChange", function DashboardComponent_div_1_Template_input_ngModelChange_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.filter(_r4.value); })("keyup", function DashboardComponent_div_1_Template_input_keyup_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r36.filter(_r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_1_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r37.sellerValue = $event; })("keyup", function DashboardComponent_div_1_Template_input_keyup_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](28); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r38.filterBySeller(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_1_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r39.dateValue = $event; })("keyup", function DashboardComponent_div_1_Template_input_keyup_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r40.filterByDate(_r6.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "form", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function DashboardComponent_div_1_Template_form_ngSubmit_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r41.searchDateRange(ctx_r41.range.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Ingrese un rango de fechas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-date-range-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "mat-datepicker-toggle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "mat-date-range-picker", null, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, DashboardComponent_div_1_mat_error_49_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, DashboardComponent_div_1_mat_error_50_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "buscar por rango");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "button", 35, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.clearRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "borrar b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("matSortChange", function DashboardComponent_div_1_Template_table_matSortChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r43.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](60, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, DashboardComponent_div_1_th_61_Template, 3, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, DashboardComponent_div_1_td_62_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](63, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, DashboardComponent_div_1_th_64_Template, 3, 0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, DashboardComponent_div_1_td_65_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](66, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, DashboardComponent_div_1_th_67_Template, 3, 0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, DashboardComponent_div_1_td_68_Template, 3, 4, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, DashboardComponent_div_1_tr_69_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, DashboardComponent_div_1_tr_70_Template, 1, 0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, DashboardComponent_div_1_mat_paginator_71_Template, 1, 4, "mat-paginator", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](48);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showGraph);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showGraph);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.clientValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.sellerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.range)("rangePicker", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.range.controls.end.hasError("matEndDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.filteredOrders);
} }
class DashboardComponent {
    constructor(ordersService, auth, datepipe, stockService, dateAdapter) {
        this.ordersService = ordersService;
        this.auth = auth;
        this.datepipe = datepipe;
        this.stockService = stockService;
        this.dateAdapter = dateAdapter;
        this.displayedColumns = ['client', 'seller', 'amountWithIva'];
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl()
        });
        this.userOrders = [];
        this.query = { client: "", seller: "", date: "", dateRange: { start: new Date(2017, 1, 1), end: new Date(2040, 1, 1) } };
        this.showGraph = false;
        this.loading = true;
        this.dashData = {};
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartColors = [
            {
                backgroundColor: ['rgba(164,38,98)'],
            }
        ];
        this.aproveFirst = false;
        this.color = ['rgba(255,64,129)', 'rgba(63,81,181)', 'rgba(101,115,193)', 'rgba(244,146,199)', 'rgba(196,202,233)'];
        // Pie
        this.pieChartOptions = {
            responsive: true,
            legend: {
                position: 'top',
            },
            plugins: {
                datalabels: {
                    formatter: (_value, ctx) => {
                        const label = ctx.chart.data.labels[ctx.dataIndex];
                        return label;
                    },
                },
            }
        };
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }
    ngOnInit() {
        this.subscription = this.ordersService.getAllOrders().subscribe(orders => {
            this.subscription2 = this.auth.appUser$.subscribe(appUser => {
                var _a, _b;
                this.appUser = appUser;
                this.ordersService.orders = orders;
                this.userOrders = [];
                for (let i = 0; i < this.ordersService.orders.length; i++) {
                    if (((_a = this.appUser) === null || _a === void 0 ? void 0 : _a.isAdmin) || this.ordersService.orders[i].payload.val().seller == ((_b = this.appUser) === null || _b === void 0 ? void 0 : _b.name)) {
                        this.userOrders.push(this.ordersService.orders[i]);
                    }
                }
                //this.produceDashData(this.userOrders);
                this.filteredOrders = this.userOrders;
                this.produceDashData(this.filteredOrders);
                // this.dataSource = new MatTableDataSource<any>(this.dashData);
                this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.currentItemsToShow);
                this.loading = false;
            });
        });
    }
    filter(query) {
        var _a;
        this.query.client = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())
                && this.userOrders[i].payload.val().seller.toLowerCase().includes(this.query.seller.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date)))
                this.filteredOrders.push(this.userOrders[i]);
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
        this.produceDashData(this.filteredOrders);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dashData);
        this.dataSource.paginator = this.paginator;
        if (this.showGraph)
            this.graphic();
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
        this.produceDashData(this.filteredOrders);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dashData);
        this.dataSource.paginator = this.paginator;
        if (this.showGraph)
            this.graphic();
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
        this.produceDashData(this.filteredOrders);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dashData);
        this.dataSource.paginator = this.paginator;
        if (this.showGraph)
            this.graphic();
    }
    searchDateRange(range) {
        var _a;
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
            this.produceDashData(this.filteredOrders);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dashData);
            this.dataSource.paginator = this.paginator;
        }
        this.query.dateRange.start = new Date(Date.parse(range.start._d));
        this.query.dateRange.end = new Date(Date.parse(range.end._d));
        if (this.showGraph)
            this.graphic();
    }
    sortData(sort) {
        const data = this.dashData.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'client': return this.compare(a.client, b.client, isAsc);
                case 'seller': return this.compare(a.seller, b.seller, isAsc);
                case 'amountWithIva': return this.compare(a.amountWithIva, b.amountWithIva, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.sortedData);
        this.dataSource.paginator = this.paginator;
    }
    getTitle(item) {
        return item.title;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    clearRange() {
        this.range.setValue({
            start: null,
            end: null
        });
        this.sellerValue = "";
        this.clientValue = "";
        this.dateValue = "";
        this.filteredOrders = this.userOrders;
        this.produceDashData(this.filteredOrders);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dashData);
        this.dataSource.paginator = this.paginator;
    }
    // events
    chartClicked({ event, active }) {
        console.log(event, active);
    }
    chartHovered({ event, active }) {
        console.log(event, active);
    }
    graphic() {
        this.pieChartLabels = [];
        this.pieChartData = [];
        let categories = this.getCategories(this.filteredOrders);
        this.pieChartLabels = categories;
        let amounts = this.getAmounts(this.filteredOrders, categories);
        this.pieChartData = amounts;
        this.showGraph = true;
    }
    getCategories(orders) {
        let categories = [];
        let colors = [];
        for (let i = 0; i < orders.length; i++) {
            let products = this.ordersService.getOrderDetail(orders[i].payload.val().orderDetailKey).payload.val().products;
            for (let j = 0; j < products.length; j++) {
                if (!this.isCategoryIncluded(categories, products[j].category)) {
                    categories.push(products[j].category);
                    let col = this.color.pop();
                    if (col) {
                        this.pieChartColors[0].backgroundColor.push(col);
                    }
                }
            }
        }
        return categories;
    }
    isCategoryIncluded(categories, category) {
        for (let i = 0; i < categories.length; i++) {
            if (categories[i] == category)
                return true;
        }
        return false;
    }
    getAmounts(orders, categories) {
        let amounts = [];
        for (let i = 0; i < categories.length; i++) {
            let amountWithIva = 0;
            for (let j = 0; j < orders.length; j++) {
                let products = this.ordersService.getOrderDetail(orders[j].payload.val().orderDetailKey).payload.val().products;
                products.forEach((p) => {
                    if (p.category == categories[i]) {
                        amountWithIva += parseFloat(p.discountPrice) * p.quantity * (1 + orders[j].payload.val().iva / 100);
                    }
                });
                // reemplazado por lo de arriba
                // for (let k=0;k<orders[j].payload.val().order.products.length; k++) {
                //   if (orders[j].payload.val().order.products[k].product.prodsCategory == categories[i]) {
                //     amountWithIva += parseFloat(orders[j].payload.val().order.products[k].discountPrice)*parseInt(orders[j].payload.val().order.products[k].quantity)*(1+orders[j].payload.val().iva/100)
                //   }
                // }
            }
            amounts.push(amountWithIva);
        }
        return amounts;
    }
    getPercentage(data) {
        let sum = 0;
        for (let i = 0; i < this.pieChartData.length; i++) {
            sum += this.pieChartData[i];
        }
        return 100 * data / sum;
    }
    getTotalCategs() {
        let sum = 0;
        for (let i = 0; i < this.pieChartData.length; i++) {
            sum += this.pieChartData[i];
        }
        return sum;
    }
    //llena en dashData la lista de clientes con el monto total
    produceDashData(dataArray) {
        this.dashData = [];
        for (let i = 0; i < dataArray.length; i++) {
            if (!this.isClientInDashData(dataArray[i].payload.val().fantasyName)) {
                this.dashData.push({
                    "client": dataArray[i].payload.val().fantasyName, "seller": dataArray[i].payload.val().seller, "amountWithIva": dataArray[i].payload.val().amountWithIva
                });
            }
            else {
                this.adAmount(dataArray[i].payload.val().fantasyName, dataArray[i].payload.val().amountWithIva);
            }
        }
    }
    adAmount(client, amountWithIva) {
        for (let i = 0; i < this.dashData.length; i++) {
            if (this.dashData[i].client.toLowerCase().includes(client.toLowerCase())) {
                this.dashData[i].amountWithIva += amountWithIva;
            }
        }
    }
    isClientInDashData(client) {
        for (let i = 0; i < this.dashData.length; i++) {
            if (this.dashData[i].client.toLowerCase().includes(client.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
    onPageChange($event) {
        this.currentItemsToShow = this.dashData.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dashData);
        this.dataSource.paginator = this.paginator;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_2__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__.DateAdapter)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "SCContainer ml-5 ms-5 spinner-border text-primary", "role", "status", 4, "ngIf"], ["class", "SCContainer ms-1", 4, "ngIf"], ["role", "status", 1, "SCContainer", "ml-5", "ms-5", "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "SCContainer", "ms-1"], [4, "ngIf"], ["class", "chart", "style", "float:left; margin-right:15px", 4, "ngIf"], [1, "row", "ms-1"], [1, "col-12", "mx-2", "mt-1", "mt-sm-2", "col-sm-2", "me-sm-2", "col-lg-2"], [1, "col-12", "m-2", "col-sm-2", "col-lg-1"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "col", "m-2"], ["mat-raised-button", "", "color", "basic", 3, "click"], [1, "row"], [1, "col-12", "col-md-4", "my-1"], [1, "input-group"], ["matSuffix", ""], ["type", "text", "placeholder", "   Nombre de Fantas\u00EDa...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["query", ""], ["type", "text", "placeholder", "   Vendedor...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["sellerquery", ""], [1, "col-6", "col-md-4", "my-1"], ["type", "text", "placeholder", "   Fecha...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["Datequery", ""], [3, "ngSubmit"], ["f", "ngForm"], [1, "col-12", "ms-t", "col-md-4", "my-1"], ["appearance", "fill", 1, "m-1"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "fecha inicio"], ["matEndDate", "", "formControlName", "end", "placeholder", "fecha finalizaci\u00F3n"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "m-1"], [1, "col", "my-1"], ["mat-raised-button", "", "color", "accent", 1, "m-1", 3, "click"], [1, "table-wrapper"], ["mat-table", "", "matSort", "", 1, "mt-2", "table", "table-striped", "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "client"], ["mat-header-cell", "", "mat-sort-header", "client", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "seller"], ["mat-header-cell", "", "mat-sort-header", "seller", 4, "matHeaderCellDef"], ["matColumnDef", "amountWithIva"], ["mat-header-cell", "", "mat-sort-header", "amountWithIva", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "mat-elevation-z8"], [4, "ngFor", "ngForOf"], [1, "chart", 2, "float", "left", "margin-right", "15px"], ["baseChart", "", "height", "400", 3, "data", "labels", "chartType", "options", "colors", "legend"], ["mat-header-cell", "", "mat-sort-header", "client"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "seller"], ["mat-header-cell", "", "mat-sort-header", "amountWithIva"], ["mat-header-row", ""], ["mat-row", ""], [3, "length", "pageSize", "pageSizeOptions", "page"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 72, 14, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDateRangeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDateRangePicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng2_charts__WEBPACK_IMPORTED_MODULE_14__.BaseChartDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: ["@charset \"UTF-8\";\n.table-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  \n}\n.mat-cell[_ngcontent-%COMP%] {\n  padding-left: -300px;\n  \n  align-items: left;\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  padding-left: 200px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxnQkFBQTtFQUFtQixxREFBQTtBQUdyQjtBQUFBO0VBQ0Usb0JBQUE7RUFBc0Isc0RBQUE7RUFDdEIsaUJBQUE7QUFJRjtBQUZBO0VBQ0UsbUJBQUE7RUFBcUIsc0RBQUE7QUFNdkIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRhYmxlLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICAvKiBBanVzdGEgZWwgbWFyZ2VuIGl6cXVpZXJkbyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXG59XG5cbi5tYXQtY2VsbCB7XG4gIHBhZGRpbmctbGVmdDogLTMwMHB4O1xuICAvKiBBanVzdGEgZWwgcGFkZGluZyBpenF1aWVyZG8gc2Vnw7puIHR1cyBuZWNlc2lkYWRlcyAqL1xuICBhbGlnbi1pdGVtczogbGVmdDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XG4gIC8qIEFqdXN0YSBlbCBwYWRkaW5nIGl6cXVpZXJkbyBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXG59Il19 */"] });


/***/ }),

/***/ 79057:
/*!**********************************************************************!*\
  !*** ./src/app/edit-product-prices/edit-product-prices.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductPricesComponent": () => (/* binding */ EditProductPricesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category.service */ 54655);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 5015);












function EditProductPricesComponent_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditProductPricesComponent_div_10_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditProductPricesComponent_div_10_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Precio inv\u00E1lido. Dede usar punto en vez de coma.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditProductPricesComponent_div_10_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditProductPricesComponent_div_10_div_12_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditProductPricesComponent_div_10_div_12_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.min);
} }
function EditProductPricesComponent_div_10_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", c_r14.payload.val().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", c_r14.payload.val().name, " ");
} }
function EditProductPricesComponent_div_10_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditProductPricesComponent_div_10_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0\u00A0ERROR: hay datos inv\u00E1lidos! recuerde usar punto en vez de coma para los decimales");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditProductPricesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditProductPricesComponent_div_10_Template_form_ngSubmit_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const product_r1 = restoredCtx.$implicit; const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.saveProd(_r3.value, product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditProductPricesComponent_div_10_Template_input_ngModelChange_4_listener($event) { const product_r1 = ctx.$implicit; return product_r1.payload.val().title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, EditProductPricesComponent_div_10_div_8_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditProductPricesComponent_div_10_Template_input_ngModelChange_10_listener($event) { const product_r1 = ctx.$implicit; return product_r1.payload.val().buyPrice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EditProductPricesComponent_div_10_div_12_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Precio de compra($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Categorias");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-select", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EditProductPricesComponent_div_10_Template_mat_select_ngModelChange_18_listener($event) { const product_r1 = ctx.$implicit; return product_r1.payload.val().prodsCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, EditProductPricesComponent_div_10_mat_option_20_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, EditProductPricesComponent_div_10_div_21_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditProductPricesComponent_div_10_Template_button_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const product_r1 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.delete(product_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, EditProductPricesComponent_div_10_span_26_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r1.payload.val().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.touched && _r4.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r1.payload.val().buyPrice)("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r6.touched && _r6.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r1.payload.val().prodsCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.prodsCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r8.touched && _r8.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r3.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r3.valid);
} }
class EditProductPricesComponent {
    constructor(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.filteredProducts = [];
        this.subscription = this.productService.getAllProducts().subscribe(products => {
            this.filteredProducts = this.products = products;
            this.filteredProducts.sort(this.compareTitle);
            this.filteredProducts.sort(this.compareCategory);
        });
        categoryService.getAllProdsCategories().subscribe((prodsCategories) => {
            this.prodsCategories = prodsCategories;
        });
    }
    ngOnInit() {
    }
    saveProd(formproduct, product) {
        // if (confirm('Está segur@ que quiere guardar estos valores?')) {
        let prod = {
            "disc1": product.payload.val().disc1,
            "disc2": product.payload.val().disc2,
            "disc3": product.payload.val().disc3,
            "disc4": product.payload.val().disc4,
            "buyPrice": formproduct.buyPrice,
            "price1": product.payload.val().price1,
            "price2": product.payload.val().price2,
            "price3": product.payload.val().price3,
            "price4": product.payload.val().price4,
            "discPrice1": product.payload.val().discPrice1,
            "discPrice2": product.payload.val().discPrice2,
            "discPrice3": product.payload.val().discPrice3,
            "discPrice4": product.payload.val().discPrice4,
            "stock": product.payload.val().stock,
            "prodsCategory": formproduct.prodsCategory,
            "title": product.payload.val().title
        };
        this.productService.update(product.key, prod);
    }
    delete(id) {
        if (confirm('Está segur@ que quiere eliminar este producto?')) {
            this.productService.delete(id);
        }
    }
    compareCategory(a, b) {
        if (a.payload.val().prodsCategory.toLowerCase() < b.payload.val().prodsCategory.toLowerCase()) {
            return -1;
        }
        if (a.payload.val().prodsCategory.toLowerCase() > b.payload.val().prodsCategory.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    compareTitle(a, b) {
        if (a.payload.val().title.toLowerCase() < b.payload.val().title.toLowerCase()) {
            return -1;
        }
        if (a.payload.val().title.toLowerCase() > b.payload.val().title.toLowerCase()) {
            return 1;
        }
        return 0;
    }
}
EditProductPricesComponent.ɵfac = function EditProductPricesComponent_Factory(t) { return new (t || EditProductPricesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService)); };
EditProductPricesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditProductPricesComponent, selectors: [["app-edit-product-prices"]], decls: 11, vars: 1, consts: [[1, "SCContainer"], [2, "display", "inline", "margin", "10px"], [1, "ms-2"], [1, "col"], ["mat-raised-button", "", "type", "button", "routerLink", "/admin/prods", "color", "accent"], ["class", "admin-prods-form", 4, "ngFor", "ngForOf"], [1, "admin-prods-form"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "legacy", 2, "width", "25vw", "min-width", "320px", "margin-right", "10px"], ["matInput", "", "name", "title", "placeholder", "", "readonly", "", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["appearance", "legacy", 2, "width", "5vw", "min-width", "63px"], ["matInput", "", "name", "buyPrice", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["buyPrice", "ngModel"], ["appearance", "legacy", 2, "width", "5vw", "min-width", "80px"], ["name", "prodsCategory", "required", "", 3, "ngModel", "ngModelChange"], ["prodsCategory", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], [4, "ngIf"], [1, "alert", "alert-danger"], [3, "value"]], template: function EditProductPricesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "EDITAR PRECIOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "SOLO PUEDE EDITAR PRECIO Y CATEGOR\u00CDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EditProductPricesComponent_div_10_Template, 27, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredProducts);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, ng2_validation__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2R1Y3QtcHJpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 27745:
/*!**************************************************************!*\
  !*** ./src/app/forms/clients-form/clients-form.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsFormComponent": () => (/* binding */ ClientsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/category.service */ 54655);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 5015);













function ClientsFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La Razon Social es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El Nombre de Fantasia es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", c_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", c_r25.name, " ");
} }
function ClientsFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El canal de venta es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sc_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", sc_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sc_r26, " ");
} }
function ClientsFormComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La condici\u00F3n de venta es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ds_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ds_r27.payload.val().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ds_r27.payload.val().name, " ");
} }
function ClientsFormComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La condici\u00F3n de venta es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_mat_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const IVACond_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", IVACond_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", IVACond_r28, " ");
} }
function ClientsFormComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La condici\u00F3n de IVA es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El CUIT es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_56_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El CUIT debe ser mayor a 0 y sin guiones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClientsFormComponent_div_56_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ClientsFormComponent_div_56_div_2_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.min);
} }
function ClientsFormComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La direcci\u00F3n es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El nombre de contacto es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El tel\u00E9fono es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ClientsFormComponent {
    constructor(router, route, categoryService, ordersService) {
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.ordersService = ordersService;
        this.redirect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.fromEditing = true;
        this.sellConditions = ["Contado", "Cuenta Corriente"];
        this.IVAConditions = ["Inscripto", "Monotributista", "Consumidor Final"];
        this.client = {};
        this.clientsCategories = categoryService.getAllClientsCategories();
        this.sellers$ = ordersService.getAllSellers();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.subscription = this.ordersService.getClient(this.id).take(1).subscribe(p => {
                this.client = p.payload.val();
            });
    }
    save(client) {
        if (confirm('Está segur@ que quiere guardar/crear este cliente?')) {
            this.ordersService.setFromEditing(true);
            if (this.id) {
                this.ordersService.update(this.id, client);
            }
            else {
                this.ordersService.createClient(client);
            }
            this.router.navigate(['/admin/clients']);
        }
    }
    delete() {
        if (confirm('Está segur@ que quiere borrar este cliente? No podrá recuperarlo')) {
            this.ordersService.delete(this.id);
            this.router.navigate(['/admin/clients']);
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ClientsFormComponent.ɵfac = function ClientsFormComponent_Factory(t) { return new (t || ClientsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService)); };
ClientsFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ClientsFormComponent, selectors: [["clients-form"]], outputs: { redirect: "redirect" }, decls: 88, vars: 29, consts: [[1, "container-form"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "legacy"], ["matInput", "", "name", "businessName", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["businessName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "name", "fantasyName", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["fantasyName", "ngModel"], ["appearance", "fill"], ["name", "clientCategory", "required", "", 3, "ngModel", "ngModelChange"], ["clientCategory", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "sellCondition", "required", "", 3, "ngModel", "ngModelChange"], ["sellCondition", "ngModel"], ["name", "designatedSeller", "required", "", 3, "ngModel", "ngModelChange"], ["designatedSeller", "ngModel"], ["name", "IVACondition", "required", "", 3, "ngModel", "ngModelChange"], ["IVACondition", "ngModel"], ["matInput", "", "name", "cuit", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["cuit", "ngModel"], ["matInput", "", "name", "address", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["matInput", "", "name", "contactName", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["contactName", "ngModel"], ["matInput", "", "name", "phone", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "me-2"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], [1, "alert", "alert-danger"], [3, "value"], [4, "ngIf"]], template: function ClientsFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ClientsFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Razon Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.client.businessName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ClientsFormComponent_div_11_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Nombre de Fantas\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.client.fantasyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ClientsFormComponent_div_19_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Canal de venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_mat_select_ngModelChange_23_listener($event) { return ctx.client.clientCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ClientsFormComponent_mat_option_25_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ClientsFormComponent_div_27_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Condici\u00F3n de venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_mat_select_ngModelChange_31_listener($event) { return ctx.client.sellCondition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ClientsFormComponent_mat_option_33_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ClientsFormComponent_div_34_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Vendedor asignado");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-select", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_mat_select_ngModelChange_38_listener($event) { return ctx.client.designatedSeller = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ClientsFormComponent_mat_option_40_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, ClientsFormComponent_div_42_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Condici\u00F3n IVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_mat_select_ngModelChange_46_listener($event) { return ctx.client.IVACondition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ClientsFormComponent_mat_option_48_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ClientsFormComponent_div_49_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "CUIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_54_listener($event) { return ctx.client.cuit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ClientsFormComponent_div_56_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_62_listener($event) { return ctx.client.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, ClientsFormComponent_div_66_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Nombre de contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_71_listener($event) { return ctx.client.contactName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ClientsFormComponent_div_75_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_79_listener($event) { return ctx.client.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, ClientsFormComponent_div_83_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientsFormComponent_Template_button_click_86_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](47);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](55);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](63);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](72);
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.businessName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.fantasyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.clientCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 25, ctx.clientsCategories));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.sellCondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sellConditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r8.touched && _r8.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.designatedSeller);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 27, ctx.sellers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r11.touched && _r11.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.IVACondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.IVAConditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r14.touched && _r14.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.cuit)("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r17.touched && _r17.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r19.touched && _r19.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.contactName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r21.touched && _r21.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.client.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r23.touched && _r23.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ng2_validation__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJjbGllbnRzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOjVweFxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 62830:
/*!**************************************************************!*\
  !*** ./src/app/forms/product-form/product-form.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFormComponent": () => (/* binding */ ProductFormComponent)
/* harmony export */ });
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/take */ 82490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ 54655);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ 66082);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/stock.service */ 83188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5015);















function ProductFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El nombre es obligatorio. M\u00E1ximo 30 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductFormComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductFormComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Precio inv\u00E1lido. Dede usar punto en vez de coma.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProductFormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductFormComponent_div_18_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProductFormComponent_div_18_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.min);
} }
function ProductFormComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", c_r10.payload.val().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", c_r10.payload.val().name, " ");
} }
function ProductFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ProductFormComponent {
    constructor(router, route, categoryService, productService, stockService) {
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.stockService = stockService;
        this.product = {};
        this.categoryService.getAllProdsCategories().subscribe(prodsCategories => {
            this.prodsCategories = prodsCategories;
        });
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.productService.get(this.id).take(1).subscribe(p => {
                this.product = p.payload.val();
            });
    }
    save(product) {
        if (confirm('Está segur@ que quiere guardar/crear este producto?')) {
            if (this.id) {
                this.productService.update(this.id, product);
            }
            else {
                this.productService.create(product);
                this.productService.getAllProducts().subscribe(products => {
                    this.products = products;
                    this.stockService.updateBuy(this.products);
                });
            }
            this.router.navigate(['/admin/prods']);
        }
    }
    delete() {
        if (confirm('Está segur@ que quiere borrar este producto? No podrá recuperarlo')) {
            this.productService.delete(this.id);
            this.router.navigate(['/admin/prods']);
        }
    }
    ngOnInit() {
    }
}
ProductFormComponent.ɵfac = function ProductFormComponent_Factory(t) { return new (t || ProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_3__.StockService)); };
ProductFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProductFormComponent, selectors: [["app-product-form"]], decls: 44, vars: 16, consts: [[1, "container-form"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "legacy"], ["matInput", "", "name", "title", "placeholder", "", "maxlength", "40", "required", "", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "name", "buyPrice", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["buyPrice", "ngModel"], ["appearance", "fill"], ["name", "prodsCategory", "required", "", 3, "ngModel", "ngModelChange"], ["prodsCategory", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], [1, "example-card"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"]], template: function ProductFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProductFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.product.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Nombre del producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ProductFormComponent_div_11_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.product.buyPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ProductFormComponent_div_18_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Precio de Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_mat_select_ngModelChange_24_listener($event) { return ctx.product.prodsCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ProductFormComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ProductFormComponent_div_27_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductFormComponent_Template_button_click_30_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.product.buyPrice)("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.product.prodsCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.prodsCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](39, 12, ctx.product.buyPrice, "$AR ", true));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.product.prodsCategory);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng2_validation__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 57954:
/*!**************************************************************!*\
  !*** ./src/app/forms/sellers-form/sellers-form.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellersFormComponent": () => (/* binding */ SellersFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);









function SellersFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SellersFormComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El CUIL es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SellersFormComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El CUIL debe ser mayor a 0 y sin guiones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SellersFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SellersFormComponent_div_17_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SellersFormComponent_div_17_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.min);
} }
function SellersFormComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La direcci\u00F3n es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SellersFormComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El tel\u00E9fono es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SellersFormComponent {
    constructor(router, route, ordersService) {
        this.router = router;
        this.route = route;
        this.ordersService = ordersService;
        this.sellConditions = ["Contado", "Cuenta Corriente"];
        this.seller = {};
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.subscription = this.ordersService.getSeller(this.id).take(1).subscribe(p => {
                this.seller = p.payload.val();
            });
    }
    save(seller) {
        if (confirm('Está segur@ que quiere guardar/crear este vendedor?')) {
            if (this.id) {
                this.ordersService.updateSeller(this.id, seller);
            }
            else {
                this.ordersService.createSeller(seller);
            }
            this.router.navigate(['/admin/sellers']);
        }
    }
    delete() {
        if (confirm('Está segur@ que quiere borrar este vendedor? No podrá recuperarlo')) {
            this.ordersService.deleteSeller(this.id);
            this.router.navigate(['/admin/sellers']);
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SellersFormComponent.ɵfac = function SellersFormComponent_Factory(t) { return new (t || SellersFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService)); };
SellersFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SellersFormComponent, selectors: [["app-sellers-form"]], decls: 41, vars: 9, consts: [[1, "container-form"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "legacy", 1, "m-1"], ["matInput", "", "name", "name", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "name", "cuil", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["cuil", "ngModel"], ["matInput", "", "name", "address", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["matInput", "", "name", "phone", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function SellersFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SellersFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nombre Completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SellersFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.seller.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SellersFormComponent_div_11_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "CUIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SellersFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.seller.cuil = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SellersFormComponent_div_17_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SellersFormComponent_Template_input_ngModelChange_24_listener($event) { return ctx.seller.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, SellersFormComponent_div_28_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SellersFormComponent_Template_input_ngModelChange_32_listener($event) { return ctx.seller.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, SellersFormComponent_div_36_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SellersFormComponent_Template_button_click_39_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.seller.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.seller.cuil)("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.seller.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.seller.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.touched && _r7.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng2_validation__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXJzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 37503:
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMobile": () => (/* binding */ isMobile)
/* harmony export */ });
const isMobile = checkIsMobile();
function checkIsMobile() {
    return window.innerWidth <= 1000;
}


/***/ }),

/***/ 31390:
/*!**************************************************!*\
  !*** ./src/app/log-check/log-check.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogCheckComponent": () => (/* binding */ LogCheckComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utility.service */ 67278);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);






function LogCheckComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LogCheckComponent_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.auth.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login with google");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "move-animation": true }; };
function LogCheckComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.isMobile ? "../../assets/intro-mob.png" : "../../assets/intro.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
} }
function LogCheckComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.isMobile ? "../../assets/intro2-mob.png" : "../../assets/intro2.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function LogCheckComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.isMobile ? "../../assets/loguear-mob.png" : "../../assets/loguear.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function LogCheckComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.isMobile ? "../../assets/otra-mob.png" : "../../assets/otra.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class LogCheckComponent {
    constructor(utilityService, auth) {
        this.utilityService = utilityService;
        this.auth = auth;
        this.MOBILE_SIZE = 1000;
        this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
    }
    ngOnInit() {
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
        });
    }
    onResize(event) {
        this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
LogCheckComponent.ɵfac = function LogCheckComponent_Factory(t) { return new (t || LogCheckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_0__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
LogCheckComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LogCheckComponent, selectors: [["app-log-check"]], hostBindings: function LogCheckComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function LogCheckComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 9, vars: 5, consts: [["class", "login-btn ms-4", 4, "ngIf"], [1, "container", "mt-5"], ["class", "img-fluid", 3, "src", "ngClass", 4, "ngIf"], ["class", "img-fluid", 3, "src", 4, "ngIf"], [1, "login-btn", "ms-4"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "img-fluid", 3, "src", "ngClass"], [1, "img-fluid", 3, "src"]], template: function LogCheckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LogCheckComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LogCheckComponent_img_5_Template, 1, 3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LogCheckComponent_img_6_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LogCheckComponent_img_7_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LogCheckComponent_img_8_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.appUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.utilityService.navBarLoading && ctx.appUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.utilityService.navBarLoading && !ctx.appUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.utilityService.navBarLoading && !ctx.appUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.utilityService.navBarLoading && ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective], styles: ["@charset \"UTF-8\";\n.move-animation[_ngcontent-%COMP%] {\n  animation-name: move;\n  animation-duration: 5s;\n  \n  animation-timing-function: linear;\n  \n  animation-iteration-count: infinite;\n  \n}\n@keyframes move {\n  0% {\n    transform: translateX(-80px);\n  }\n  \n  50% {\n    transform: translateX(80px);\n  }\n  \n  100% {\n    transform: translateX(-80px);\n  }\n  \n}\n.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  \n  align-items: center;\n  \n  height: 100vh;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy1jaGVjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQXdCLHlDQUFBO0VBQ3hCLGlDQUFBO0VBQW1DLDZDQUFBO0VBQ25DLG1DQUFBO0VBQXFDLHVDQUFBO0FBS3ZDO0FBRkE7RUFDRTtJQUFLLDRCQUFBO0VBTUw7RUFOcUMscUJBQUE7RUFDckM7SUFBTSwyQkFBQTtFQVNOO0VBVHFDLHdCQUFBO0VBQ3JDO0lBQU8sNEJBQUE7RUFZUDtFQVp1QyxpREFBQTtBQWN6QztBQVhBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQXlCLHdCQUFBO0VBQ3pCLG1CQUFBO0VBQXFCLHNCQUFBO0VBQ3JCLGFBQUE7RUFBZSwwREFBQTtBQWdCakIiLCJmaWxlIjoibG9nLWNoZWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1vdmUtYW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIC8qIER1cmFjacOzbiBkZSBsYSBhbmltYWNpw7NuIGVuIHNlZ3VuZG9zICovXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLyogRnVuY2nDs24gZGUgdGVtcG9yaXphY2nDs24gZGUgbGEgYW5pbWFjacOzbiAqL1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLyogUmVwZXRpciBsYSBhbmltYWNpw7NuIGluZmluaXRhbWVudGUgKi9cbn1cblxuQGtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODBweCk7XG4gIH1cbiAgLyogUG9zaWNpw7NuIGluaWNpYWwgKi9cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCk7XG4gIH1cbiAgLyogUG9zaWNpw7NuIGludGVybWVkaWEgKi9cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHB4KTtcbiAgfVxuICAvKiBQb3NpY2nDs24gZmluYWwsIHZ1ZWx2ZSBhIGxhIHBvc2ljacOzbiBpbmljaWFsICovXG59XG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIENlbnRyYWRvIGhvcml6b250YWwgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogQ2VudHJhZG8gdmVydGljYWwgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLyogQWp1c3RhIGxhIGFsdHVyYSBkZWwgY29udGVuZWRvciBzZWfDum4gdHVzIG5lY2VzaWRhZGVzICovXG59Il19 */"] });


/***/ }),

/***/ 7181:
/*!****************************************************!*\
  !*** ./src/app/mat-navbar/mat-navbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatNavbarComponent": () => (/* binding */ MatNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utility.service */ 67278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);










function MatNavbarComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "-----SITIO EN MANTENIMIENTO DISCULPE LAS MOLESTIAS - REINTENTE MA\u00D1ANA S\u00C1BADO POR LA TARDE----");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Gr\u00E1ficos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pedidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cobros");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Clientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.appUser.name);
} }
function MatNavbarComponent_mat_toolbar_1_ng_container_14_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Administrar Clientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_ng_container_14_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Administrar Productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_ng_container_14_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Administrar Vendedores");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatNavbarComponent_mat_toolbar_1_ng_container_14_a_1_Template, 2, 0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatNavbarComponent_mat_toolbar_1_ng_container_14_a_2_Template, 2, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatNavbarComponent_mat_toolbar_1_ng_container_14_a_3_Template, 2, 0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.appUser != undefined && ctx_r14.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.appUser != undefined && ctx_r14.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.appUser != undefined && ctx_r14.appUser.isAdmin);
} }
function MatNavbarComponent_mat_toolbar_1_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reemplazos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_h2_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "GENTECH - MAR DEL PLATA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatNavbarComponent_mat_toolbar_1_a_1_Template, 2, 0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatNavbarComponent_mat_toolbar_1_ng_template_3_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatNavbarComponent_mat_toolbar_1_a_5_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MatNavbarComponent_mat_toolbar_1_a_6_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MatNavbarComponent_mat_toolbar_1_a_7_Template, 2, 0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MatNavbarComponent_mat_toolbar_1_a_8_Template, 2, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MatNavbarComponent_mat_toolbar_1_a_9_Template, 2, 0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MatNavbarComponent_mat_toolbar_1_button_11_Template, 4, 2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-menu", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, MatNavbarComponent_mat_toolbar_1_ng_container_14_Template, 4, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, MatNavbarComponent_mat_toolbar_1_a_15_Template, 2, 0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Comisiones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatNavbarComponent_mat_toolbar_1_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, MatNavbarComponent_mat_toolbar_1_h2_21_Template, 2, 0, "h2", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser != undefined && (ctx_r1.appUser == null ? null : ctx_r1.appUser.isAdmin));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser == null ? null : ctx_r1.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser && ctx_r1.appUser.name == "Tecnolog\u00EDa & Programaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser != undefined && (ctx_r1.appUser.isAdmin || ctx_r1.appUser.isSalesManager));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser != undefined && ctx_r1.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser);
} }
function MatNavbarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.VERSION);
} }
class MatNavbarComponent {
    constructor(auth, ordersService, router, utilityService) {
        this.auth = auth;
        this.ordersService = ordersService;
        this.router = router;
        this.utilityService = utilityService;
        this.VERSION = "V120021";
        this.MOBILE_SIZE = 1000;
        this.production = true;
        this.loading = true;
        this.isMobile = false;
        this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
    }
    logout() {
        this.auth.logout();
    }
    getTotalItems() {
        // let order = this.ordersService.getOrder();
        // return 0;
    }
    ngOnInit() {
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            if (appUser) {
                this.ordersService.appUser = this.appUser;
                this.subscription2 = this.ordersService.getAllSellers().subscribe(sellers => {
                    this.sellers = sellers;
                    let create = true;
                    for (let i = 0; i < this.sellers.length; i++) {
                        if (this.sellers[i].payload.val().name == this.appUser.name)
                            create = false;
                    }
                    if (create) {
                        this.ordersService.createSeller({
                            "address": "",
                            "cuil": "",
                            "name": appUser.name,
                            "phone": ""
                        });
                    }
                    this.loading = false;
                    this.utilityService.navBarLoading = false;
                });
            }
        });
    }
    onResize(event) {
        this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
MatNavbarComponent.ɵfac = function MatNavbarComponent_Factory(t) { return new (t || MatNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService)); };
MatNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatNavbarComponent, selectors: [["mat-navbar"]], hostBindings: function MatNavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function MatNavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 4, vars: 4, consts: [[4, "ngIf"], ["color", "primary", 4, "ngIf"], ["class", "SCContainer mt-5 ms-5 spinner-border text-primary", "role", "status", 4, "ngIf"], ["class", "version", 4, "ngIf"], ["color", "primary"], ["mat-button", "", "class", "foc", "routerLink", "/dashboard", 4, "ngIf"], [1, "spacer"], ["anonymousUser", ""], ["mat-button", "", "class", "foc", "routerLink", "orders/orders", 4, "ngIf"], ["mat-button", "", "class", "foc", "routerLink", "payments/payments", 4, "ngIf"], ["mat-button", "", "class", "foc", "routerLink", "client/client", 4, "ngIf"], ["mat-button", "", "class", "foc", "routerLink", "stock/stock", 4, "ngIf"], ["mat-button", "", "class", "foc", "routerLink", "pruebas/prueba", 4, "ngIf"], ["mat-menu-item", ""], ["class", "me-5", "mat-button", "", "class", "foc", 3, "matMenuTriggerFor", 4, "ngIf", "ngIfElse"], ["appMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "replaces/replaces", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "commissions/commissionsDash"], ["mat-menu-item", "", 3, "click"], [1, "ms-5", "d-none", "d-lg-block"], ["mat-button", "", "routerLink", "/dashboard", 1, "foc"], ["mat-button", "", "routerLink", "/", 1, "foc"], ["mat-button", "", "routerLink", "orders/orders", 1, "foc"], ["mat-button", "", "routerLink", "payments/payments", 1, "foc"], ["mat-button", "", "routerLink", "client/client", 1, "foc"], ["mat-button", "", "routerLink", "stock/stock", 1, "foc"], ["mat-button", "", "routerLink", "pruebas/prueba", 1, "foc"], ["mat-button", "", 1, "foc", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "routerLink", "/admin/clients", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/admin/prods", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/admin/sellers", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/admin/clients"], ["mat-menu-item", "", "routerLink", "/admin/prods"], ["mat-menu-item", "", "routerLink", "/admin/sellers"], ["mat-menu-item", "", "routerLink", "replaces/replaces"], ["role", "status", 1, "SCContainer", "mt-5", "ms-5", "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "version"], [2, "color", "white", "background-color", "rgb(63, 82, 180)", "border", "0px"]], template: function MatNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatNavbarComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatNavbarComponent_mat_toolbar_1_Template, 22, 11, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatNavbarComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatNavbarComponent_div_3_Template, 3, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.production);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.production && !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading && ctx.appUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.production && !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon], styles: ["a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n\n.foc[_ngcontent-%COMP%]:focus {\n  color: #ff4081;\n  outline: none;\n}\n\n@media (max-width: 600px) {\n  .version[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin-left: -2px;\n    margin-top: -60px;\n    font-size: 7px;\n  }\n}\n\n@media (min-width: 600px) {\n  .version[_ngcontent-%COMP%] {\n    margin-left: -2px;\n    margin-top: -68px;\n    font-size: 7px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdC1uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFFRjs7QUFFQTtFQUNFO0lBQ0UsWUFBQTtJQUFjLGlCQUFBO0lBQW1CLGlCQUFBO0lBQW1CLGNBQUE7RUFJdEQ7QUFDRjs7QUFGQTtFQUNFO0lBQ0UsaUJBQUE7SUFBbUIsaUJBQUE7SUFBbUIsY0FBQTtFQU14QztBQUNGIiwiZmlsZSI6Im1hdC1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLmZvYzpmb2N1cyB7XHJcbiAgY29sb3I6cmdiKDI1NSwgNjQsIDEyOSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAvL2ZvbnQtc2l6ZTogMTAyJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAudmVyc2lvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7IG1hcmdpbi1sZWZ0OiAtMnB4OyBtYXJnaW4tdG9wOiAtNjBweDsgZm9udC1zaXplOiA3cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjYwMHB4KSB7XHJcbiAgLnZlcnNpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7IG1hcmdpbi10b3A6IC02OHB4OyBmb250LXNpemU6IDdweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 51105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utility.service */ 67278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 77746);











function MenuComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.appUser.name);
} }
function MenuComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MenuComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pedidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MenuComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cobros");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MenuComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Clientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MenuComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MenuComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Clientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MenuComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MenuComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Vendedores");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MenuComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Gr\u00E1ficos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MenuComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r30.logout(); return ctx_r30.isMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class MenuComponent {
    constructor(auth, ordersService, utilityService, router) {
        this.auth = auth;
        this.ordersService = ordersService;
        this.utilityService = utilityService;
        this.router = router;
        this.isMenuOpen = false;
        this.MOBILE_SIZE = 1000;
        this.production = true;
        this.loading = true;
    }
    ngOnInit() {
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            if (appUser) {
                this.ordersService.appUser = this.appUser;
                this.subscription2 = this.ordersService.getAllSellers().subscribe(sellers => {
                    this.sellers = sellers;
                    let create = true;
                    for (let i = 0; i < this.sellers.length; i++) {
                        if (this.sellers[i].payload.val().name == this.appUser.name)
                            create = false;
                    }
                    if (create) {
                        this.ordersService.createSeller({
                            "address": "",
                            "cuil": "",
                            "name": appUser.name,
                            "phone": ""
                        });
                    }
                    this.loading = false;
                    this.utilityService.navBarLoading = false;
                });
            }
        });
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    logout() {
        this.auth.logout();
        this.appUser = {
            name: ""
        };
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 21, vars: 13, consts: [["color", "primary", 1, "mat-elevation-z6"], ["mat-icon-button", "", 3, "click"], ["class", "menu-title", 4, "ngIf"], [1, "menu-container"], [1, "menu-sidenav", 3, "mode", "opened"], ["sidenav", ""], ["mat-list-item", "", "routerLink", "/", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "orders/orders", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "payments/payments", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "client/client", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "stock/stock", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "admin/clients", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "admin/prods", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "admin/sellers", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "dashboard", 3, "click", 4, "ngIf"], ["mat-list-item", "", 3, "click", 4, "ngIf"], [1, "custom-sidenav-content"], [1, "menu-title"], ["mat-list-item", "", "routerLink", "/", 3, "click"], ["mat-list-item", "", "routerLink", "orders/orders", 3, "click"], ["mat-list-item", "", "routerLink", "payments/payments", 3, "click"], ["mat-list-item", "", "routerLink", "client/client", 3, "click"], ["mat-list-item", "", "routerLink", "stock/stock", 3, "click"], ["mat-list-item", "", "routerLink", "admin/clients", 3, "click"], ["mat-list-item", "", "routerLink", "admin/prods", 3, "click"], ["mat-list-item", "", "routerLink", "admin/sellers", 3, "click"], ["mat-list-item", "", "routerLink", "dashboard", 3, "click"], ["mat-list-item", "", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_1_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MenuComponent_span_4_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-sidenav-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MenuComponent_a_9_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MenuComponent_a_10_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MenuComponent_a_11_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, MenuComponent_a_12_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, MenuComponent_a_13_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, MenuComponent_a_14_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, MenuComponent_a_15_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, MenuComponent_a_16_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, MenuComponent_a_17_Template, 2, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, MenuComponent_a_18_Template, 2, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-sidenav-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", "over")("opened", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.appUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser && !(ctx.appUser == null ? null : ctx.appUser.isAdmin));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser == null ? null : ctx.appUser.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser == null ? null : ctx.appUser.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser == null ? null : ctx.appUser.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser == null ? null : ctx.appUser.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser == null ? null : ctx.appUser.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatNavList, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".custom-sidenav-content[_ngcontent-%COMP%] {\n  margin-top: -60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXNpZGVuYXYtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 79082:
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/take */ 82490);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ 54655);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5015);


















function PaymentComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", client_r8.payload.val().fantasyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", client_r8.payload.val().fantasyName, " ");
} }
function PaymentComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", order_r9.payload.val().orderNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", order_r9.payload.val().orderNumber, " ");
} }
function PaymentComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", p_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", p_r10.name, " ");
} }
class PaymentComponent {
    constructor(router, route, auth, categoryService, ordersService) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.categoryService = categoryService;
        this.ordersService = ordersService;
        this.payment = {};
        this.filteredClients = [];
        this.orders = [];
        this.filteredOrders = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.clientFantasyName = "";
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.subscription2 = ordersService.getAllOrders().subscribe(orders => {
                this.ordersService.orders = this.filteredOrders = orders;
            });
            this.subscription3 = ordersService.getAllClients().subscribe(clients => {
                this.clients = clients;
                this.filteredClients = [];
                for (let i = 0; i < this.clients.length; i++) {
                    if (appUser.isAdmin || this.clients[i].payload.val().designatedSeller == this.appUser.name) {
                        this.filteredClients.push(this.clients[i]);
                    }
                }
            });
            this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(value => value ? this._filter(value) : this._filter("")));
            this.subscription4 = categoryService.getAllPaysCategories().subscribe(payWays => {
                this.payWays = payWays;
            });
        });
    }
    save(payment) {
        if (confirm('Está segur@ que quiere guardar este cobro?')) {
            payment.sellerName = this.appUser.name;
            payment.client = this.clientFantasyName;
            this.ordersService.createPayment(payment, this.clients);
            // IMPORTANTE LO DE ABAJO!!!!!!!!!!!!!!!!!!!!!!!!!
            this.ordersService.setPaymentsToAll(); // aca aseguro que los pedidos pagos queden con fecha de pago.
            this.router.navigate(['/payments/payments']);
        }
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        if (!this.filteredClients)
            return;
        let listFiltrada = this.filteredClients.filter(client => client.payload.val().fantasyName.toLowerCase().includes(filterValue));
        return listFiltrada;
    }
    cancel() {
        this.router.navigate(['/payments/payments']);
    }
    ngOnInit() {
    }
    onChooseClient() {
        this.filteredOrders = [];
        for (let i = 0; i < this.ordersService.orders.length; i++) {
            if (this.ordersService.orders[i].payload.val().clientFantasyName.toLowerCase().includes(this.payment.client.toLowerCase()))
                this.filteredOrders.push(this.ordersService.orders[i]);
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
        this.subscription4.unsubscribe();
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService)); };
PaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 53, vars: 16, consts: [["id", "productsList"], [1, "example-form", 3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill", 1, "example-full-width"], ["name", "client", "type", "text", "placeholder", "Elija uno", "matInput", "", "required", "", 3, "formControl", "matAutocomplete", "ngModel", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "example-full-width", "m-sm-1"], ["matInput", "", "name", "amount", "placeholder", "Monto", "required", "", 3, "ngModel", "min", "ngModelChange"], ["name", "orderNumber", 3, "ngModel", "ngModelChange"], ["orderNumber", "ngModel"], ["appearance", "fill", 1, "example-full-width", "ms-lg-1"], ["name", "payWay", "required", "", 3, "ngModel", "ngModelChange"], ["payWay", "ngModel"], ["matInput", "", "name", "date", "required", "", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "row"], [1, "col-3", "col-lg-1"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], [1, "col"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], [3, "value"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "COBRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "*IMPORTANTE VENDEDORES: Si el cobro fue menor al valor exacto del pedido, porque por ejemplo se redondeo\u00F3 para abajo, igual deben cargar un monto total que llegu\u00E9 a cubrir la totalidad del pedido, sino se arrastrar\u00E1 una deuda que va a generar inconvenientes para calcular las deudas del cliente. Por ejemplo, si el pedido era de $126.200 y uds le cobraron 126.000, a la hora de cargar el cobro deber\u00E1n cargar los $126.200 y avisar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function PaymentComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_12_listener($event) { return ctx.clientFantasyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PaymentComponent_mat_option_15_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Seleccione el cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_22_listener($event) { return ctx.payment.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "N\u00BA de factura asociado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_mat_select_ngModelChange_26_listener($event) { return ctx.payment.orderNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, PaymentComponent_mat_option_28_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Dato Opcional");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Modo de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_mat_select_ngModelChange_34_listener($event) { return ctx.payment.payWay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, PaymentComponent_mat_option_36_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Seleccione el modo de pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Ingrese la fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_42_listener($event) { return ctx.payment.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "mat-datepicker-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_51_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Descartar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r1)("ngModel", ctx.clientFantasyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 14, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.payment.amount)("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.payment.orderNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.payment.payWay);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.payWays);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.payment.date)("matDatepicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng2_validation__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 82068:
/*!************************************************!*\
  !*** ./src/app/payments/payments.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsComponent": () => (/* binding */ PaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stock.service */ 83188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 11494);

















function PaymentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Nota de Cr\u00E9dito");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_1_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_1_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_1_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_1_tr_73_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PaymentsComponent_div_1_tr_73_td_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const pay_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.remove(pay_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_1_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, PaymentsComponent_div_1_tr_73_td_14_Template, 4, 0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pay_r14 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", pay_r14.payload.val().client, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", pay_r14.payload.val().amount, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", pay_r14.payload.val().payWay, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", pay_r14.payload.val().sellerName, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 7, pay_r14.payload.val().date, "dd/MM/yyyy HH:mm"), "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", pay_r14.payload.val().orderNumber, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.appUser.isAdmin);
} }
function PaymentsComponent_div_1_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 1, ctx_r13.getTotal(), "1.1-1"), "");
} }
const _c0 = function () { return [10, 20, 30]; };
function PaymentsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "COBROS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Cargar Cobro");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, PaymentsComponent_div_1_div_11_Template, 6, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_1_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.clientValue = $event; })("ngModelChange", function PaymentsComponent_div_1_Template_input_ngModelChange_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.filter(_r3.value); })("keyup", function PaymentsComponent_div_1_Template_input_keyup_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.filter(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_1_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.sellerValue = $event; })("keyup", function PaymentsComponent_div_1_Template_input_keyup_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.filterBySeller(_r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_1_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.dateValue = $event; })("keyup", function PaymentsComponent_div_1_Template_input_keyup_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](35); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.filterByDate(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "form", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PaymentsComponent_div_1_Template_form_ngSubmit_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r28.searchDateRange(ctx_r28.range.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Ingrese un rango de fechas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-date-range-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "mat-datepicker-toggle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "mat-date-range-picker", null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, PaymentsComponent_div_1_mat_error_48_Template, 2, 0, "mat-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, PaymentsComponent_div_1_mat_error_49_Template, 2, 0, "mat-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "buscar por rango");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 30, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PaymentsComponent_div_1_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.clearRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "borrar b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function PaymentsComponent_div_1_Template_table_matSortChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Forma de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Nro. Fact");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, PaymentsComponent_div_1_th_71_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, PaymentsComponent_div_1_tr_73_Template, 15, 10, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, PaymentsComponent_div_1_tr_74_Template, 6, 4, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-paginator", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function PaymentsComponent_div_1_Template_mat_paginator_page_75_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.clientValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.sellerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.range)("rangePicker", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.range.controls.end.hasError("matEndDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.currentItemsToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredPayments != ctx_r1.userPayments);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r1.filteredPayments.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0));
} }
class PaymentsComponent {
    constructor(productService, route, auth, datepipe, stockService, dateAdapter, ordersService) {
        this.productService = productService;
        this.route = route;
        this.auth = auth;
        this.datepipe = datepipe;
        this.stockService = stockService;
        this.dateAdapter = dateAdapter;
        this.ordersService = ordersService;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
        });
        this.userPayments = [];
        this.titles = [];
        this.query = { client: "", seller: "", date: "", dateRange: { start: new Date(2017, 1, 1), end: new Date(2040, 1, 1) } };
        this.aproved = ["NO", "SI"];
        this.selected = "NO";
        this.aproveFirst = false;
        this.loading = true;
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }
    ngOnInit() {
        this.filter("");
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.subscription2 = this.ordersService.getAllPayments().subscribe(payments => {
                this.appUser = appUser;
                this.subscription3 = this.ordersService.getAllClients().subscribe(clients => {
                    var _a;
                    this.clients = clients;
                    this.userClients = this.ordersService.getUserClients(appUser === null || appUser === void 0 ? void 0 : appUser.name);
                    this.payments = payments;
                    this.userPayments = [];
                    this.dateRangefilteredPayments = [];
                    this.currentItemsToShow = [];
                    for (let i = 0; i < this.payments.length; i++) {
                        let isUserPayment = this.payments[i].payload.val().sellerName == ((_a = this.appUser) === null || _a === void 0 ? void 0 : _a.name);
                        let isUserClient = this.isClientInUserClients(this.payments[i].payload.val().client, this.userClients);
                        if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager || isUserPayment || isUserClient)) {
                            this.userPayments.push(this.payments[i]);
                        }
                    }
                    this.dateRangefilteredPayments = this.datefilteredPayments = this.filteredPayments = this.userPayments; //ver que hace??
                    if (this.ordersService.fantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
                        this.filter(this.ordersService.fantasyName); // idem
                        this.clientValue = this.ordersService.fantasyName; // idem
                        this.ordersService.fantasyName = ""; // idem
                    }
                    //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length})
                    if (this.ordersService.fantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
                        // this.dateValue = "";
                        this.clientValue = this.ordersService.fantasyName; // idem
                        this.filter(this.ordersService.fantasyName); // idem
                        this.ordersService.fantasyName = ""; // idem
                        this.filterByDate("");
                    }
                    this.currentItemsToShow = this.filteredPayments;
                    this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length });
                    if (this.paginator)
                        this.paginator.pageIndex = 0;
                    this.loading = false;
                    //this.clearRange();
                });
            });
        });
    }
    filter(query) {
        var _a;
        this.query.client = query;
        this.filteredPayments = [];
        for (let i = 0; i < this.userPayments.length; i++) {
            if (this.userPayments[i].payload.val().client.toLowerCase().includes(query.toLowerCase())
                && this.userPayments[i].payload.val().sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
                && ((_a = this.datepipe.transform(this.userPayments[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date)))
                this.filteredPayments.push(this.userPayments[i]);
        }
        this.filteredPayments.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    filterBySeller(query) {
        var _a;
        this.query.seller = query;
        this.filteredPayments = [];
        for (let i = 0; i < this.userPayments.length; i++) {
            if (this.userPayments[i].payload.val().client.toLowerCase().includes(this.query.client.toLowerCase())
                && this.userPayments[i].payload.val().sellerName.toLowerCase().includes(query.toLowerCase())
                && ((_a = this.datepipe.transform(this.userPayments[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date))) {
                this.filteredPayments.push(this.userPayments[i]);
            }
        }
        this.filteredPayments.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    filterByDate(query) {
        var _a;
        this.query.date = query;
        this.filteredPayments = [];
        for (let i = 0; i < this.userPayments.length; i++) {
            if (this.userPayments[i].payload.val().client.toLowerCase().includes(this.query.client.toLowerCase())
                && this.userPayments[i].payload.val().sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
                && ((_a = this.datepipe.transform(this.userPayments[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(query)))
                this.filteredPayments.push(this.userPayments[i]);
        }
        this.filteredPayments.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    searchDateRange(range) {
        var _a, _b, _c;
        if (range.start) {
            this.filteredPayments = [];
            for (let i = 0; i < this.userPayments.length; i++) {
                if (this.userPayments[i].payload.val().client.toLowerCase().includes(this.query.client.toLowerCase())
                    && this.userPayments[i].payload.val().sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
                    && ((_a = this.datepipe.transform(this.userPayments[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date)))
                    this.filteredPayments.push(this.userPayments[i]);
            }
            this.filteredPayments = (range) ?
                this.filteredPayments.filter(p => p.payload.val().date >= Date.parse(range.start._d) && p.payload.val().date <= Date.parse(range.end._d)) :
                this.filteredPayments;
            this.query.dateRange.start = new Date(Date.parse((_b = range.start) === null || _b === void 0 ? void 0 : _b._d));
            this.query.dateRange.end = new Date(Date.parse((_c = range.end) === null || _c === void 0 ? void 0 : _c._d));
        }
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    isClientInUserClients(fantasyName, userClients) {
        for (let i = 0; i < userClients.length; i++) {
            if (fantasyName.toLowerCase().includes(userClients[i].toLowerCase().trim())) {
                return true;
            }
        }
        return false;
    }
    sortData(sort) {
        const data = this.filteredPayments;
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'cliente': return this.compare(a.payload.val().client, b.payload.val().client, isAsc);
                case 'amount': return this.compare(a.payload.val().amount, b.payload.val().amount, isAsc);
                case 'payWay': return this.compare(a.payload.val().payWay, b.payload.val().payWay, isAsc);
                case 'seller': return this.compare(a.payload.val().sellerName, b.payload.val().sellerName, isAsc);
                case 'date': return this.compare(a.payload.val().date, b.payload.val().date, isAsc);
                default: return 0;
            }
        });
    }
    onPageChange($event) {
        this.currentItemsToShow = this.filteredPayments.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
    }
    getTitle(item) {
        return item.title;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    getTotal() {
        let total = 0;
        if (this.filteredPayments) {
            this.filteredPayments.forEach(payment => {
                total += parseFloat(payment.payload.val().amount);
            });
        }
        return total;
    }
    removePayment(paymentId) {
        this.ordersService.removePayment(paymentId);
    }
    aprove(payment) {
        if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
            this.stockService.aprove(payment);
            this.ordersService.aprovePayment(payment);
        }
    }
    clearRange() {
        this.range.setValue({
            start: null,
            end: null
        });
        this.sellerValue = "";
        this.clientValue = "";
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    remove(pay) {
        if (confirm('Está segur@ que quiere eliminar este cobro?')) {
            //if (pay.payload.val().orderNumber > 0) this.ordersService.restoreOrderAmount(pay);
            this.ordersService.removePayment(pay.key);
            //this.ordersService.addPaymentAmount(pay.payload.val().client, -1*pay.payload.val().amount, this.clients)
        }
    }
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.subscription2) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.subscription3) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    }
}
PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) { return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_2__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService)); };
PaymentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PaymentsComponent, selectors: [["app-payments"]], viewQuery: function PaymentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "SCContainer ml-5 ms-5 spinner-border text-primary", "role", "status", 4, "ngIf"], ["class", "SCContainer ms-1", 4, "ngIf"], ["role", "status", 1, "SCContainer", "ml-5", "ms-5", "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "SCContainer", "ms-1"], [1, "row"], [1, "col-6", "col-md-4", "ms-2", "mt-1"], [1, "col-6", "col-md-4"], ["mat-icon-button", "", "routerLink", "/payments/payment"], ["class", "col", 4, "ngIf"], [1, "col-6", "col-md-4", "my-1"], [1, "input-group"], ["matSuffix", ""], ["type", "text", "placeholder", "   Nombre de Fantas\u00EDa...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["query", ""], ["type", "text", "placeholder", "   Vendedor...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["sellerquery", ""], ["type", "text", "placeholder", "   Fecha...", 1, "border-end-0", "border", "rounded-pill", 3, "ngModel", "ngModelChange", "keyup"], ["Datequery", ""], [1, "row", "row", "m-3"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill", 1, "m-1"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "fecha inicio"], ["matEndDate", "", "formControlName", "end", "placeholder", "fecha finalizaci\u00F3n"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "m-1"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["matSort", "", 1, "table", "table-striped", "table-sm", "mat-elevation-z8", 3, "matSortChange"], ["mat-sort-header", "client"], ["mat-sort-header", "amount"], ["mat-sort-header", "payWay"], ["mat-sort-header", "seller"], ["mat-sort-header", "date"], ["mat-sort-header", "orderNumber"], ["mat-sort-header", "delete", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "col"], ["mat-icon-button", "", "routerLink", "/payments/creditNote"], ["mat-sort-header", "delete"], ["mat-icon-button", "", "color", "accent", 3, "click"], ["ms-3", ""]], template: function PaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PaymentsComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PaymentsComponent_div_1_Template, 76, 16, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangePicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 31583:
/*!************************************************!*\
  !*** ./src/app/pieChart/pieChart.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieChartComponent": () => (/* binding */ PieChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 86178);



class PieChartComponent {
    // public pieChartColors = [
    //   {
    //     backgroundColor: ['rgba(255,0,0)', 'rgba(0,255,0)', 'rgba(0,0,255)', 'rgba(0,255,255)', 'rgba(255,255,0)'],
    //   },
    // ];
    constructor(ordersService) {
        this.ordersService = ordersService;
        // Pie
        this.pieChartOptions = {
            responsive: true,
            legend: {
                position: 'top',
            },
            plugins: {
                datalabels: {
                    formatter: (_value, ctx) => {
                        const label = ctx.chart.data.labels[ctx.dataIndex];
                        return label;
                    },
                },
            }
        };
        this.pieChartLabels = []; //= ['Barras', 'Proteinas', 'Quemadores', 'Recuperadores', 'Otros'];
        this.pieChartData = []; //= [10, 20, 12, 6, 21];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
    }
    ngOnInit() {
        this.pieChartLabels = [];
        this.pieChartData = [];
        let categories = this.getCategories(this.orders);
        this.pieChartLabels = categories;
        let amounts = this.getAmounts(this.orders, categories);
        this.pieChartData = amounts;
    }
    // events
    chartClicked({ event, active }) {
        console.log(event, active);
    }
    chartHovered({ event, active }) {
        console.log(event, active);
    }
    graphic(orders) {
        this.pieChartLabels = [];
        this.pieChartData = [];
        let categories = this.getCategories(orders);
        this.pieChartLabels = categories;
        let amounts = this.getAmounts(orders, categories);
        this.pieChartData = amounts;
    }
    getCategories(orders) {
        let categories = [];
        for (let i = 0; i < orders.length; i++) {
            let products = this.ordersService.getOrderDetail(orders[i].key).payload.val().products;
            for (let j = 0; j < products.length; j++) {
                if (!this.isCategoryIncluded(categories, products[j].category)) {
                    categories.push(products[j].category);
                }
            }
        }
        return categories;
    }
    isCategoryIncluded(categories, category) {
        for (let i = 0; i < categories.length; i++) {
            if (categories[i] == category)
                return true;
        }
        return false;
    }
    getAmounts(orders, categories) {
        let amounts = [];
        for (let i = 0; i < categories.length; i++) {
            let amount = 0;
            for (let j = 0; j < orders.length; j++) {
                let products = this.ordersService.getOrderDetail(orders[j].key).payload.val().products;
                for (let k = 0; k < products.length; k++) {
                    if (products[k].category == categories[i]) {
                        amount += parseFloat(products[k].discountPrice);
                    }
                }
            }
            amounts.push(amount);
        }
        return amounts;
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService)); };
PieChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-chart"]], inputs: { orders: "orders" }, decls: 4, vars: 5, consts: [[1, "chart"], ["baseChart", "", 3, "data", "labels", "chartType", "options", "legend"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("options", ctx.pieChartOptions)("legend", ctx.pieChartLegend);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWVDaGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 40415:
/*!*********************************************!*\
  !*** ./src/app/pruebas/prueba.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PruebaComponent": () => (/* binding */ PruebaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class PruebaComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PruebaComponent.ɵfac = function PruebaComponent_Factory(t) { return new (t || PruebaComponent)(); };
PruebaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PruebaComponent, selectors: [["app-prueba"]], decls: 0, vars: 0, template: function PruebaComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcnVlYmEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 42536:
/*!************************************************!*\
  !*** ./src/app/replaces/replaces.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplacesComponent": () => (/* binding */ ReplacesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);








function ReplacesComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "***Reemplazo terminado***");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ReplacesComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "***No hubo coincidencias***");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ReplacesComponent {
    constructor(ordersService, auth) {
        this.ordersService = ordersService;
        this.auth = auth;
        this.finishShow = false;
        this.noMatch = false;
        this.form = {};
    }
    ngOnInit() {
        this.subscription = this.ordersService.getAllClients().subscribe(clients => {
            this.subscription2 = this.auth.appUser$.subscribe(appUser => {
                this.appUser = appUser;
                this.clients = clients;
            });
        });
    }
    replaceSeller(form) {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].payload.val().designatedSeller == form.oldSeller.toString()) {
                this.ordersService.update(this.clients[i].key, { "designatedSeller": form.newSeller.toString() });
                this.finishShow = true;
            }
        }
        if (this.finishShow == false)
            this.noMatch = true;
        setTimeout(() => {
            this.finishShow = false;
            this.noMatch = false;
        }, 800);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
ReplacesComponent.ɵfac = function ReplacesComponent_Factory(t) { return new (t || ReplacesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
ReplacesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReplacesComponent, selectors: [["app-replaces"]], decls: 22, vars: 4, consts: [[1, "container-form"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "legacy"], ["matInput", "", "name", "oldSeller", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["oldSeller", "ngModel"], ["matInput", "", "name", "newSeller", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["newSeller", "ngModel"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["class", "ms-3", 4, "ngIf"], [1, "ms-3"]], template: function ReplacesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ReplacesComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx.replaceSeller(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Vendedor Actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReplacesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.form.oldSeller = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Nuevo Vendedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReplacesComponent_Template_input_ngModelChange_14_listener($event) { return ctx.form.newSeller = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Reemplazar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ReplacesComponent_span_20_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ReplacesComponent_span_21_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.oldSeller);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.newSeller);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.finishShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noMatch);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBsYWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 80483:
/*!******************************************************!*\
  !*** ./src/app/services/admin-auth-guard.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAuthGuard": () => (/* binding */ AdminAuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 16137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 73071);




class AdminAuthGuard {
    constructor(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    canActivate() {
        return this.auth.appUser$
            .map((appUser) => appUser.isAdmin);
    }
}
AdminAuthGuard.ɵfac = function AdminAuthGuard_Factory(t) { return new (t || AdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService)); };
AdminAuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AdminAuthGuard, factory: AdminAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 78968:
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 16137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        return this.auth.user$.map(user => {
            if (user)
                return true;
            this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 42329);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ 28383);
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/of */ 79623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ 73071);








class AuthService {
    constructor(afAuth, route, router, userService) {
        // if (!environment.production) {
        //       this.afAuth.useEmulator('http://localhost:9099/');
        // }
        this.afAuth = afAuth;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user$ = afAuth.authState;
        //borrar desde aca
        // const ordersRef = firebase.database().ref('orders');
        // ordersRef.once('value')
        // .then((snapshot) => {
        //   const numChildren = snapshot.numChildren();
        //   console.log('numero de orders:', numChildren);
        // })
        // const ordersDetail = firebase.database().ref('ordersDetail');
        // ordersDetail.once('value')
        // .then((snapshot) => {
        //   const numChildren = snapshot.numChildren();
        //   console.log('numero de ordersDetail:', numChildren);
        // })
        //borrar hasta aca
    }
    login() {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';
        localStorage.setItem('returnUrl', returnUrl);
        return this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider()).then(() => {
            let returnUrl = localStorage.getItem('returnUrl');
            if (returnUrl) {
                this.router.navigateByUrl(returnUrl);
            }
        });
    }
    logout() {
        this.afAuth.signOut();
        //location.reload();
        this.router.navigateByUrl('/');
    }
    get appUser$() {
        return this.user$
            .switchMap(user => {
            if (user)
                return this.userService.get(user.uid);
            return rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable.of(null);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 54655:
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 84134);


class CategoryService {
    constructor(db) {
        this.db = db;
    }
    getAllClientsCategories() {
        return this.db.list('clientsCategories').valueChanges();
    }
    // getAllProdsCategories() {
    //   return this.db.list('categories').valueChanges();
    // }
    getAllProdsCategories() {
        return this.db.list('/productsCategories').snapshotChanges();
    }
    getAllPaysCategories() {
        return this.db.list('payWay').valueChanges();
    }
    // setNewProdCategory(category: String) {
    //   return this.db.list('/productsCategories').push({name: category});
    // }
    addProdCategory(category) {
        return this.db.list('/productsCategories').push({ name: category });
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
CategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63207:
/*!*************************************************!*\
  !*** ./src/app/services/commissions.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommissionsService": () => (/* binding */ CommissionsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/category.service */ 54655);



class CommissionsService {
    constructor(db, prodsCatService) {
        this.db = db;
        this.prodsCatService = prodsCatService;
        console.log('commissions service constructor');
        this.prodsCatService.getAllProdsCategories().subscribe((prodsCategories) => {
            this.prodsCategories = prodsCategories;
            this.getCommissions().subscribe((commissions) => {
                this.commissions = commissions;
            });
        });
    }
    createCommissions() {
        let rewardsArray = [];
        let prodsCat = [];
        for (let i = 0; i < this.prodsCategories.length; i++) {
            rewardsArray.push("0");
            prodsCat.push(this.prodsCategories[i].payload.val().name);
        }
        let today = new Date();
        //SavedMonth is
        let result = this.db.list('/commissions/').push({
            "minRetailTotalSales": 700000,
            "retailPercent": 0.05,
            "wholesalerPercent": 0.01,
            "monthlyRate": 0.07,
            "productsCategories": prodsCat,
            "rewardsGoals": rewardsArray,
            "rewards": rewardsArray,
            "monthCommissionsSavedDate": {
                'month': today.getMonth() + 1,
                'year': today.getFullYear()
            }
        });
    }
    getCommissions() {
        let result = this.db.list('/commissions').snapshotChanges();
        return result;
    }
    getCommissionsByMonth() {
        let result = this.db.list('/commissionsByMonth').snapshotChanges();
        return result;
    }
    update(commissions, commissionsForm) {
        return this.db.object('/commissions/' + commissions[0].key).update({
            "minRetailTotalSales": commissionsForm.minRetailTotalSales,
            "retailPercent": commissionsForm.retailPercent,
            "wholesalerPercent": commissionsForm.wholesalerPercent,
            "monthlyRate": commissionsForm.monthlyRate,
            "rewards": commissionsForm.rewards,
            "rewardsGoals": commissionsForm.rewardsGoals,
            //"productsCategories" : commissions[0].payload.val().productsCategories,
            "monthCommissionsSavedDate": {
                'month': commissions[0].payload.val().monthCommissionsSavedDate.month,
                'year': commissions[0].payload.val().monthCommissionsSavedDate.year
            }
        });
    }
    // este metodo no se usa
    // addProdCategory(productsCategories: any) {
    //   return this.db.object('/commissions/' + this.commissions[0].key).update({
    //     "minRetailTotalSales": this.commissions[0].payload.val().minRetailTotalSales,
    //     "retailPercent": this.commissions[0].payload.val().retailPercent,
    //     "wholesalerPercent": this.commissions[0].payload.val().wholesalerPercent,
    //     "monthlyRate": this.commissions[0].payload.val().monthlyRate,
    //     "rewards" : this.commissions[0].payload.val().rewards,
    //     "rewardsGoals" : this.commissions[0].payload.val().rewardsGoals,
    //     "productsCategories" : productsCategories,
    //     "monthCommissionsSavedDate" : {
    //       'month' : this.commissions[0].payload.val().monthCommissionsSavedDate.month,
    //       'year' : this.commissions[0].payload.val().monthCommissionsSavedDate.year
    //     }
    //   });
    // }
    saveCommissionsByMonth(monthCommissions, commissions) {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        if (month == 0) {
            month = 12;
            year -= 1;
        }
        let result = this.db.object('/commissions/' + commissions[0].key).update({
            "minRetailTotalSales": commissions[0].payload.val().minRetailTotalSales,
            "retailPercent": commissions[0].payload.val().retailPercent,
            "wholesalerPercent": commissions[0].payload.val().wholesalerPercent,
            "monthlyRate": commissions[0].payload.val().monthlyRate,
            //"productsCategories": commissions[0].payload.val().productsCategories,
            "rewardsGoals": commissions[0].payload.val().rewardsGoals,
            "rewards": commissions[0].payload.val().rewards,
            "monthCommissionsSavedDate": {
                'month': month,
                'year': year
            }
        });
        this.db.list('/commissionsByMonth/').push(monthCommissions);
    }
    getSellerPenalty(monthlyRate, seller, orders) {
        let today = new Date();
        let monthPenalty = 0;
        this.totalSellerDebtDelayed = 0;
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].payload.val().fantasyName.toLowerCase().includes("red line constituci"))
                continue;
            else
                ;
            if (orders[i].payload.val().seller == seller && !orders[i].payload.val().fullPaymentDate) {
                let delay = (today.getTime() - orders[i].payload.val().date) / (1000 * 60 * 60 * 24);
                if (delay > 366)
                    continue;
                else
                    ;
                if (delay > 30 && delay < 60) {
                    monthPenalty += ((delay - 30) / 30) * monthlyRate * parseFloat(orders[i].payload.val().amountWithIva) / (1 + (parseFloat(orders[i].payload.val().iva) / 100));
                    this.totalSellerDebtDelayed += parseFloat(orders[i].payload.val().amountWithIva);
                }
                else if (delay >= 60) {
                    monthPenalty += monthlyRate * parseFloat(orders[i].payload.val().amountWithIva);
                    //if (isNaN(monthPenalty)) console.log('es else', " i ", i);
                    this.totalSellerDebtDelayed += parseFloat(orders[i].payload.val().amountWithIva);
                }
                else
                    ;
            }
            else
                ;
            //if (orders[i].payload.val().seller == "Enrique Oyhamburu") console.log('totalSellerDebtDelayed ', this.totalSellerDebtDelayed);
        }
        this.totalSellerDebtDelayed = Math.round(this.totalSellerDebtDelayed * 100) / 100;
        monthPenalty = Math.round(monthPenalty * 10) / 10;
        return monthPenalty;
    }
    getTotalSellerDebtDelayed(seller, orders) {
        let today = new Date();
        let totalSellerDebtDelayed = 0;
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].payload.val().seller == seller && !orders[i].payload.val().fullPaymentDate) {
                let delay = (today.getTime() - orders[i].payload.val().date) / (1000 * 60 * 60 * 24);
                if (delay > 366)
                    continue;
                else
                    ;
                if (delay > 30) {
                    totalSellerDebtDelayed += parseFloat(orders[i].payload.val().amountWithIva);
                }
                else
                    ;
            }
            else
                ;
        }
        totalSellerDebtDelayed = Math.round(totalSellerDebtDelayed * 100) / 100;
        return totalSellerDebtDelayed;
    }
}
CommissionsService.ɵfac = function CommissionsService_Factory(t) { return new (t || CommissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService)); };
CommissionsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommissionsService, factory: CommissionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12331:
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersService": () => (/* binding */ OrdersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/take */ 82490);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ 66082);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);








//...........concentra operaciones de pedidos, pagos, clientes y vendedors..............
class OrdersService {
    constructor(db, productService, auth, route) {
        this.db = db;
        this.productService = productService;
        this.auth = auth;
        this.route = route;
        this.clients = [];
        this.clientsPaginator = { "pageIndex": 0, "pageSize": 10, "length": 0 };
        this.sellers = [];
        this.subscriptions = [];
        console.log('orders service constructor');
        const sub = this.getAllSellers().subscribe(sellers => {
            this.sellers = sellers;
        });
        this.subscriptions.push(sub);
        const sub2 = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            //this.appUser = {name : "Natalia Guevara"}
            this.filteredProducts = [];
            const sub3 = this.productService.getAllProducts().subscribe(products => {
                this.filteredProducts = this.products = products;
                const sub4 = this.route.queryParamMap.subscribe(params => {
                    this.prodsCategory = params.get('prodsCategory');
                    if (this.products) {
                        this.filteredProducts = (this.prodsCategory) ?
                            this.products.filter((p) => p.payload.val().prodsCategory == this.prodsCategory) :
                            this.products;
                    }
                });
                this.subscriptions.push(sub4);
            });
            this.subscriptions.push(sub3);
        });
        this.subscriptions.push(sub2);
        const sub6 = this.getAllClients().subscribe(clients => {
            this.clients = clients;
        });
        this.subscriptions.push(sub6);
        const sub7 = this.getAllOrders().subscribe(orders => {
            this.orders = orders;
            //NO BORRAR********************************************************
            //---------------------------------------------------------
            // if (this.orders[0].payload.val().order) { //borrar luego
            //this.createOrdersdetails(this.orders)
            // }
            //---------------------------------------------------------
        });
        this.subscriptions.push(sub7);
        const sub8 = this.getAllPayments().subscribe(payments => {
            this.payments = payments;
        });
        this.subscriptions.push(sub8);
        const sub9 = this.getAllOrdersDetail().subscribe(ordersDetail => {
            this.ordersDetail = ordersDetail;
        });
        this.subscriptions.push(sub9);
    }
    //---------------------------------------------------------
    //NO BORRAR********************************************************
    // createOrdersdetails(orders: any[]): void { //borrar luego metodo redisenio
    //   console.log('crea ordersDetail solo para migrar');
    //   orders.forEach((order)=>{
    //     if (!order.payload.val().fantasyName) {
    //       let products: Product[]= []
    //       order.payload.val().order.products.forEach((p: any) => {
    //         let product: Product = {
    //           title: p.product.title,
    //           category: p.product.prodsCategory,
    //           discountPrice: p.discountPrice,
    //           quantity: p.quantity
    //         }
    //         p.discount ? product.discount = p.discount: 0;
    //         products.push(product)
    //       });
    //         //console.log('orders[0].payload.val() ', order.payload.val());
    //       let orderDetail: OrderDetail = {
    //         products: products
    //       }
    //       let result = this.db.list('/ordersDetail/').push(orderDetail);
    //       if (result.key) {
    //         let ord: Order = {
    //           amountWithIva: order.payload.val().amount,
    //           aproved: order.payload.val().aproved,
    //           date: order.payload.val().date,
    //           fantasyName: order.payload.val().clientFantasyName,
    //           iva: order.payload.val().iva,
    //           orderDetailKey: result.key,
    //           seller: order.payload.val().order.sellerName
    //         }
    //         order.payload.val().fullPaymentDate ? ord.fullPaymentDate = order.payload.val().fullPaymentDate: undefined;
    //         order.payload.val().hasDiscount ? ord.hasDiscount = order.payload.val().hasDiscount: undefined;
    //         order.payload.val().clientInDebt ? ord.clientInDebt = order.payload.val().clientInDebt: undefined;
    //         this.db.object('/orders/' + order.key).remove();
    //         this.db.object('/orders/' + order.key).update(ord);
    //       }
    //       else console.log('la operacion fallo');
    //     }
    //     else console.log('');
    //   })
    // }
    // //NO BORRAR********************************************************
    // ................................................orders methods................................................
    getOrderDetail(key) {
        return this.ordersDetail.find(od => od.key === key);
    }
    removeOrder(order) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let orderProducts = this.getOrderDetail(order.payload.val().orderDetailKey).payload.val().products;
            yield this.productService.restoreStock(order, this.products, orderProducts);
            yield this.db.object('/ordersDetail/' + order.payload.val().orderDetailKey).remove();
            yield this.db.object('/orders/' + order.key).remove();
            //this.addPaymentAmount(order.payload.val().fantasyName, order.payload.val().debt, this.clients);
        });
    }
    getAllOrders() {
        return this.db.list('/orders').snapshotChanges();
    }
    getAllOrdersDetail() {
        return this.db.list('/ordersDetail').snapshotChanges();
    }
    // discount(order:any, product:any, discount: number, orderIndex: number) {
    //   let products = []
    //     for (let i=0;i<order[this.orderIndex].payload.val().products.length;i++) {
    //       if (product.productId == order[this.orderIndex].payload.val().products[i].productId) {
    //         this.db.object('/order/' + order[orderIndex].key +'/products/' + i).update({
    //           "discountPrice": order[this.orderIndex].payload.val().products[i].price * (1 - discount/100),
    //           "discount": discount
    //         });
    //         break;
    //       }
    //     }
    // }
    getTotalAmount(products) {
        let totalAmount = 0;
        if (products) {
            for (let i = 0; i < products.length; i++) {
                totalAmount += products[i].discountPrice * products[i].quantity;
            }
        }
        return totalAmount;
    }
    aproveOrder(order) {
        this.updateOrder(order.key, { "aproved": true });
    }
    updateOrder(key, order) {
        return this.db.object('/orders/' + key).update(order);
    }
    isClientInDebt(fantasyName, orders) {
        var _a;
        let ordersInDebt = false;
        for (let i = 0; i < orders.length; i++) {
            if (((_a = orders[i].payload.val().fantasyName) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(fantasyName === null || fantasyName === void 0 ? void 0 : fantasyName.toLowerCase())) &&
                this.isOrderInDebt(orders[i]))
                ordersInDebt = true;
        }
        if (ordersInDebt && this.getDebt(fantasyName) > _constants__WEBPACK_IMPORTED_MODULE_1__.TOLERATED_DEBT)
            return true;
        return false;
    }
    //inDebt true es para que me calcule la deuda de los pedidos de fecha mayor a dias tolerados, sino trae el monto total de pedidos
    getClientOrdersAmount(fantasyName, inDebt) {
        let amount = 0;
        if (this.orders) {
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase()) && (!inDebt || this.isOrderInDebt(this.orders[i]))) {
                    amount += parseFloat(this.orders[i].payload.val().amountWithIva);
                }
            }
        }
        return amount;
    }
    // ................................................clients methods................................................
    createClient(client) {
        client.debt = 0;
        return this.db.list('/clients').push(client);
    }
    getAllClients() {
        return this.db.list('/clients').snapshotChanges();
    }
    getUserClients(seller) {
        let userClients = [];
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].payload.val().designatedSeller == seller)
                userClients.push(this.clients[i].payload.val().fantasyName);
        }
        return userClients;
    }
    getClient(clientId) {
        return this.db.object('/clients/' + clientId).snapshotChanges();
    }
    update(clientId, client) {
        return this.db.object('/clients/' + clientId).update(client);
    }
    updateFilteredClients(clientId, client) {
        for (let i = 0; i < this.filteredClients.length; i++) {
            if (this.filteredClients[i].key == clientId) {
            }
        }
    }
    delete(clientId) {
        return this.db.object('/clients/' + clientId).remove();
    }
    // addPaymentAmount(fantasyName: string, amount: number, clients: any) {
    //   for (let i=0;i<clients.length;i++) {
    //     if (clients[i].payload.val().fantasyName == fantasyName) {
    //       let debt = 0;
    //       if (clients[i].payload.val().debt) debt = parseFloat(clients[i].payload.val().debt) - amount;
    //       else debt = -amount
    //       let client = {"debt": debt}
    //       this.update(clients[i].key, client)
    //       break
    //     }
    //   }
    // }
    getClientsInDebt(clients, orders) {
        let result = [];
        for (let i = 0; i < clients.length; i++) {
            if (this.isClientInDebt(clients[i].payload.val().fantasyName, orders))
                result.push(clients[i]);
        }
        return result;
    }
    isOrderInDebt(order) {
        let today = new Date();
        if ((Date.parse(today.toString()) - order.payload.val().date > _constants__WEBPACK_IMPORTED_MODULE_1__.TOLERATED_DAYS * 24 * 60 * 60 * 1000) && !order.payload.val().fullPaymentDate) { //que pasen los dias tolerados
            return true;
        }
        return false;
    }
    getClientLastPayment(fantasyName, payments) {
        let payment = payments[0];
        payment.payload.val().date = 1;
        for (let i = 0; i < payments.length; i++) {
            if (payments[i].payload.val().client.toLowerCase().includes(fantasyName.toLowerCase()) && payments[i].payload.val().date > payment.payload.val().date)
                payment = payments[i];
        }
        return payment;
    }
    getAddress(fantasyName) {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
                return this.clients[i].payload.val().address;
            }
        }
        return null;
    }
    getClientCategory(fantasyName) {
        let clientCategory = "";
        if (this.clients) {
            for (let i = 0; i < this.clients.length; i++) {
                if (this.clients[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
                    clientCategory = this.clients[i].payload.val().clientCategory;
                    return clientCategory;
                }
            }
        }
        return null;
    }
    calcDebt(fantasyName) {
        let result = 0;
        let ordersAmount = this.getClientOrdersAmount(fantasyName, false);
        let paymentsAmount = this.getClientPaymentsAmount(fantasyName);
        result = ordersAmount - paymentsAmount;
        return result;
    }
    // calcDebtGreatherThanToleratedDays(fantasyName: any) {
    //   let ordersAmount = this.getClientOrdersAmount(fantasyName, true);
    //   return ordersAmount
    // }
    // ................................................payments methods................................................
    // createPayment(payment: any, clients: any) {
    //   payment.aproved = false;
    //   //this.addPaymentAmount(payment.client, payment.amount, clients)
    //   //antes le ponia la fecha del dia, ahora puede elegirla, por eso comento lo de abajo
    //   payment.date = payment.date.unix()*1000;
    //   //el cobro no es para una factura en particular
    //   if (!payment.orderNumber) {
    //     payment.orderNumber = 0;
    //     this.clearDebts(payment.client, payment.amount, payment.date)
    //   }
    //   //el cobro es para una factura en particular
    //   else if (payment.orderNumber >= 0) {
    //     this.clearOrderDebt(payment)
    //   }
    //   return this.db.list('/payments').push(payment);
    // }
    createPayment(payment, clients) {
        payment.date = payment.date.unix() * 1000;
        this.setOrdersPaymentDate(payment);
        //el cobro no es para una factura en particular
        if (!payment.orderNumber) {
            payment.orderNumber = 0;
        }
        return this.db.list('/payments').push(payment);
    }
    setOrdersPaymentDate(payment) {
        let totalPayments = this.getTotalPayments(payment);
        let amounts = 0;
        this.orders.forEach((order) => {
            if (order.payload.val().fantasyName.toLowerCase().includes(payment.client.toLowerCase())
                && order.payload.val().aproved) {
                amounts += parseFloat(order.payload.val().amount);
                if (!order.payload.val().fullPaymentDate && totalPayments > amounts - _constants__WEBPACK_IMPORTED_MODULE_1__.TOLERATED_DEBT) {
                    this.updateOrder(order.key, {
                        "fantasyName": order.payload.val().fantasyName,
                        "seller": order.payload.val().seller,
                        "date": order.payload.val().date,
                        "aproved": order.payload.val().aproved,
                        "amount": order.payload.val().amount,
                        "clientInDebt": order.payload.val().clientInDebt,
                        "hasDiscount": order.payload.val().hasDiscount,
                        "iva": order.payload.val().iva,
                        "order": order.payload.val().order,
                        "orderNumber": order.payload.val().orderNumber,
                        "fullPaymentDate": Date.now()
                    });
                }
            }
        });
    }
    getTotalPayments(payment) {
        let totalPayments = 0;
        this.payments.forEach((pay) => {
            if (pay.payload.val().client.toLowerCase().includes(payment.client.toLowerCase())) {
                totalPayments += parseFloat(pay.payload.val().amount);
            }
        });
        if (payment.amount) {
            totalPayments += payment.amount;
        }
        return totalPayments;
    }
    setPaymentsToAll() {
        const today = new Date().getTime();
        this.clients.forEach((client) => {
            let payment = {
                client: client.payload.val().fantasyName,
                amount: 0,
                payWay: "Efectivo",
                date: today
            };
            this.setOrdersPaymentDate(payment);
        });
    }
    updatePayment(key, payment) {
        return this.db.object('/payments/' + key).update(payment);
    }
    removePayment(paymentId) {
        this.db.object('/payments/' + paymentId).remove();
    }
    resetPayment(paymentIndex) {
        this.db.object('/payment/' + this.payment[paymentIndex].key).remove();
    }
    clearPayment() {
        if (!this.payment)
            return;
        for (let i = 0; i < this.payment.length; i++) {
            if (this.payment[i].payload.val().sellerName == this.appUser.name)
                this.db.object('/payment/' + this.payment[i].key).remove();
        }
    }
    getPayment() {
        let result = this.db.list('/payment').snapshotChanges();
        return result;
    }
    getAllPayments() {
        return this.db.list('/payments').snapshotChanges();
    }
    aprovePayment(payment) {
        this.updatePayment(payment.key, { "aproved": true });
    }
    getClientPaymentsAmount(fantasyName) {
        let amount = 0;
        if (this.payments) {
            for (let i = 0; i < this.payments.length; i++) {
                if (this.payments[i].payload.val().client.toLowerCase().includes(fantasyName.toLowerCase())) {
                    amount += parseFloat(this.payments[i].payload.val().amount);
                }
            }
        }
        return amount;
    }
    // ................................................seller methods................................................
    createSeller(seller) {
        seller.retailSalesAdded = 0;
        seller.wholesalerSalesAdded = 0;
        return this.db.list('/sellers').push(seller);
    }
    getAllSellers() {
        return this.db.list('/sellers').snapshotChanges();
    }
    getSeller(sellerId) {
        return this.db.object('/sellers/' + sellerId).snapshotChanges();
    }
    updateSeller(sellerId, seller) {
        return this.db.object('/sellers/' + sellerId).update(seller);
    }
    deleteSeller(sellerId) {
        return this.db.object('/sellers/' + sellerId).remove();
    }
    getSellerByName(seller) {
        if (this.sellers) {
            for (let i = 0; i < this.sellers.length; i++) {
                if (this.sellers[i].payload.val().name == seller)
                    return this.sellers[i];
            }
        }
        return null;
    }
    addSaleToSeller(order, amount, fantasyName) {
        if (!this.isDateInThisMonth(parseInt(order.payload.val().date))) {
            let sellerN = order.payload.val().seller;
            amount = Math.round(parseFloat(amount) * 10) / 10;
            let seller = this.getSellerByName(sellerN);
            let category = this.getClientCategory(fantasyName);
            if (category == "Distribuidor") {
                let updatedWholesalerSalesAdded = parseFloat(seller.payload.val().wholesalerSalesAdded)
                    + parseFloat(amount);
                this.updateSeller(seller.key, { "wholesalerSalesAdded": updatedWholesalerSalesAdded });
            }
            else {
                let updatedRetailSalesAdded = parseFloat(seller.payload.val().retailSalesAdded)
                    + parseFloat(amount);
                this.updateSeller(seller.key, { "retailSalesAdded": updatedRetailSalesAdded });
            }
        }
    }
    isDateInThisMonth(date) {
        let daysFromOrderCreation = (Date.now() - date) / (1000 * 3600 * 24);
        let today = new Date(Date.now());
        return daysFromOrderCreation < today.getDate();
    }
    //mas vieja al principio
    sortArrayPayloadByDate(array) {
        if (!array)
            return [];
        array.sort((a, b) => {
            if (b.payload.val().date < a.payload.val().date)
                return 1;
            if (b.payload.val().date > a.payload.val().date)
                return -1;
            return 0;
        });
        return array;
    }
    //usado manualmente para corregir la falta de fecha de pago completado
    calculateFullPaymentDates(seller) {
        for (let k = 0; k < this.clients.length; k++) {
            while (this.clients[k].payload.val().fantasyName != "Carlos Fox")
                k++;
            let payments = this.sortArrayPayloadByDate(this.getClientPayments(this.clients[k].payload.val().fantasyName));
            let orders = this.sortArrayPayloadByDate(this.getClientOrders(this.clients[k].payload.val().fantasyName));
            let i = 0;
            let j = 0;
            let ordersAmount = 0;
            let paymentsAmount = 0;
            while (i < payments.length && j < orders.length) {
                paymentsAmount += parseFloat(payments[i].payload.val().amount);
                while (j < orders.length) {
                    ordersAmount += parseFloat(orders[j].payload.val().amount);
                    if (paymentsAmount > ordersAmount - 200) {
                        this.updateOrder(orders[j].key, {
                            "amount": orders[j].payload.val().amount,
                            "aproved": orders[j].payload.val().aproved,
                            "fantasyName": orders[j].payload.val().fantasyName,
                            "clientInDebt": orders[j].payload.val().clientInDebt,
                            "date": orders[j].payload.val().date,
                            "hasDiscount": orders[j].payload.val().hasDiscount,
                            "iva": orders[j].payload.val().iva,
                            "order": orders[j].payload.val().order,
                            "orderNumber": orders[j].payload.val().orderNumber,
                            "fullPaymentDate": payments[i].payload.val().date
                        });
                        j++;
                        if (j == orders.length)
                            i = payments.length; //esta linea corta el bucle de los payments cuando ya se pagaron todos los pedidos
                    }
                    else {
                        i++;
                        ordersAmount -= parseFloat(orders[j].payload.val().amount);
                        break;
                    }
                }
            }
        }
    }
    getClientOrders(fantasyName) {
        let result = [];
        if (this.orders) {
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
                    result.push(this.orders[i]);
                }
            }
        }
        else
            console.log('Problemas en orders Service metodo getClientOrders');
        return result;
    }
    getClientPayments(fantasyName) {
        let result = [];
        if (this.payments) {
            for (let i = 0; i < this.payments.length; i++) {
                if (this.payments[i].payload.val().client.toLowerCase().includes(fantasyName.toLowerCase())) {
                    result.push(this.payments[i]);
                }
            }
        }
        else
            console.log('Problemas en orders Service metodo getClientPayments');
        return result;
    }
    getSellerClients(seller) {
        let clientsSellerNames = [];
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].payload.val().designatedSeller == seller)
                clientsSellerNames.push(this.clients[i].payload.val().fantasyName);
        }
        return clientsSellerNames;
    }
    getSellerOrders(seller, fantasyName) {
        let sellerOrders = [];
        if (this.orders) {
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i].payload.val().seller == seller
                    && this.orders[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase()))
                    sellerOrders.push(this.orders[i]);
            }
        }
        else
            console.log('falla en OrdersService, metodo getSellerOrders');
        return sellerOrders;
    }
    getSellerPayments(seller, fantasyName) {
        let sellerPayments = [];
        if (this.payments[0]) {
            for (let i = 0; i < this.payments.length; i++) {
                if (this.payments[i].payload.val().sellerName == seller
                    && this.payments[i].payload.val().client.toLowerCase().includes(fantasyName.toLowerCase()))
                    sellerPayments.push(this.payments[i]);
            }
        }
        else
            console.log('falla en OrdersService, metodo getSellerPayments');
        return sellerPayments;
    }
    setClientsCurrentItemsToShow(clientsCurrentItemsToShow) {
        this.clientsCurrentItemsToShow = clientsCurrentItemsToShow;
    }
    getClientsCurrentItemsToShow() {
        return this.clientsCurrentItemsToShow;
    }
    setFromEditing(fromEditing) {
        this.fromEditing = fromEditing;
    }
    getFromEditing() {
        return this.fromEditing;
    }
    setQuery(query) {
        this.query = query;
    }
    getQuery() {
        return this.query;
    }
    setClientsActualPage(clientPageIndex) {
        this.clientPageIndex = clientPageIndex;
    }
    getClientsActualPage() {
        return this.clientPageIndex;
    }
    setClientsTotalPages(clientPageSize) {
        this.clientPageSize = clientPageSize;
    }
    getClientsTotalPages() {
        return this.clientPageSize;
    }
    setClientItemsPerPage(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
    }
    getClientItemsPerPage() {
        return this.itemsPerPage;
    }
    // ................................................common methods................................................
    // deuda mayor a los dias tolerados
    getDebt(fantasyName) {
        let today = new Date().getTime();
        let totalPayments = this.getTotalPayments({ "client": fantasyName });
        let amounts = 0;
        let result = 0;
        let keepAdding = false;
        this.orders.forEach((order) => {
            if (order.payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
                amounts += parseFloat(order.payload.val().amountWithIva);
                if (keepAdding && (today - order.payload.val().date > _constants__WEBPACK_IMPORTED_MODULE_1__.TOLERATED_DAYS * 24 * 60 * 60 * 1000) && !order.payload.val().fullPaymentDate)
                    result += parseFloat(order.payload.val().amountWithIva);
                else
                    ;
                if (totalPayments < amounts - _constants__WEBPACK_IMPORTED_MODULE_1__.TOLERATED_DEBT && !order.payload.val().fullPaymentDate && result == 0
                    && (today - order.payload.val().date > _constants__WEBPACK_IMPORTED_MODULE_1__.TOLERATED_DAYS * 24 * 60 * 60 * 1000)) {
                    result = amounts - totalPayments;
                    keepAdding = true;
                }
                else
                    ;
            }
            else
                ;
        });
        return result;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
OrdersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 39534:
/*!*******************************************!*\
  !*** ./src/app/services/print.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintService": () => (/* binding */ PrintService)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.service */ 12331);



class PrintService {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    ngOnInit() {
        this.subscription = this.ordersService.getAllClients().subscribe(clients => {
            this.filteredClients = this.clients = clients;
            // this.dataSource = new MatTableDataSource<any>(this.filteredClients);
            // this.dataSource.paginator = this.paginator;
            // if (this.ordersService.clientsPaginator.pageIndex > 0 || this.ordersService.clientsPaginator.pageSize != 10) {
            // this.paginator.pageIndex = this.ordersService.clientsPaginator.pageIndex;
            // this.paginator.pageSize = this.ordersService.clientsPaginator.pageSize;
            // this.dataSource.paginator = this.paginator
            // }
        });
        this.subscription2 = this.ordersService.getAllOrders().subscribe(orders => {
            this.ordersService.orders = orders;
        });
        this.subscription3 = this.ordersService.getAllPayments().subscribe(payments => {
            this.payments = payments;
        });
    }
    exportResume(client) {
        if (confirm('Descargar PDF')) {
            const line1 = 20;
            const line2 = line1 + 10;
            const line3 = line2 + 20;
            const col1 = 10;
            const col2 = 45;
            const col3 = 80;
            const col4 = 115;
            const col5 = 150;
            const col6 = 175;
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.default();
            let pageHeight = 0;
            doc.setFontSize(9);
            doc.text('GENTECH - MAR DEL PLATA', 10, 10);
            doc.text('RESUMEN DE CUENTA', 10, line1);
            doc.text('CLIENTE: ' + client.fantasyName, 60, line1);
            doc.text('DIRECCIÓN: ' + client.address, 112, line1);
            doc.text('TELÉFONO: ' + client.phone, 164, line1);
            doc.text('FECHA', col1, line2);
            doc.text('TIPO', col2, line2);
            doc.text('NÚMERO', col3 - 1, line2);
            doc.text('HABER', col4, line2);
            doc.text('DEBE', col5, line2);
            doc.text('SALDO', col6, line2);
            doc.setFontSize(7);
            this.subscription4 = this.ordersService.getAllOrders().subscribe(ordrs => {
                this.ordersService.orders = ordrs;
                this.subscription5 = this.ordersService.getAllPayments().subscribe(paymnts => {
                    this.payments = paymnts;
                    let orders = [];
                    let payments = [];
                    let stringDate = "";
                    for (let i = 0; i < this.ordersService.orders.length; i++) {
                        if (this.ordersService.orders[i].payload.val().fantasyName == client.fantasyName) {
                            orders.push(this.ordersService.orders[i].payload.val());
                        }
                    }
                    for (let i = 0; i < this.payments.length; i++) {
                        if (this.payments[i].payload.val().client.toLowerCase().includes(client.fantasyName.toLowerCase()))
                            payments.push(this.payments[i].payload.val());
                    }
                    orders = this.sortArrayByDate(orders);
                    payments = this.sortArrayByDate(payments);
                    let y = 0;
                    let k = 0;
                    //let balance = 0;
                    let loopSize = orders.length + payments.length;
                    let balance = this.getBalance(orders, payments);
                    for (let i = 0; i < loopSize; i++) {
                        pageHeight = doc.internal.pageSize.height;
                        if (y >= pageHeight - 70) {
                            doc.addPage();
                            k = i;
                        }
                        y = 7 * (i + 1 - k) - line1;
                        let pos1 = 0;
                        let pos2 = 0;
                        if (orders.length > 0 && payments.length > 0) {
                            // pos1 = this.getMinPos(orders);
                            // pos2 = this.getMinPos(payments);
                            pos1 = this.getMaxPos(orders);
                            pos2 = this.getMaxPos(payments);
                            this.orderOrPayment = orders[pos1].date >= payments[pos2].date;
                        }
                        else if (orders.length > 0) {
                            this.orderOrPayment = true;
                            // pos1 = this.getMinPos(orders);
                            pos1 = this.getMaxPos(orders);
                        }
                        else {
                            this.orderOrPayment = false;
                            // pos2 = this.getMinPos(payments);
                            pos2 = this.getMaxPos(payments);
                        }
                        if (this.orderOrPayment && orders.length > 0) {
                            if (orders[pos1].date) {
                                let humanDateFormat = new Date(orders[pos1].date);
                                let dd = humanDateFormat.getDate();
                                let mm = humanDateFormat.getMonth() + 1;
                                let day;
                                let month;
                                let yyyy = humanDateFormat.getFullYear().toString();
                                if (dd < 10) {
                                    day = '0' + dd.toString();
                                }
                                else
                                    day = dd.toString();
                                if (mm < 10) {
                                    month = '0' + mm.toString();
                                }
                                else
                                    month = mm.toString();
                                stringDate = day + '/' + month + '/' + yyyy;
                                doc.text(stringDate, col1, line3 + y);
                                doc.text("FACTURA", col2, line3 + y);
                                let orderNum = orders[pos1].orderNumber && parseInt(orders[pos1].orderNumber) != 0 ? parseInt(orders[pos1].orderNumber).toString() : "-";
                                doc.text(orderNum, col3, line3 + y);
                                doc.text(parseFloat(orders[pos1].amountWithIva).toFixed(2).toString(), col5, line3 + y);
                                // doc.text(balance.toFixed(2).toString(), col6, line3 + y);
                                doc.text(balance[i].toFixed(2).toString(), col6, line3 + y);
                            }
                            else
                                stringDate = "Sin datos"; //esto nunca se imprime
                            orders = this.splice2(orders, pos1);
                            doc.text('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -', 10, line3 + y + 3);
                        }
                        else if (!this.orderOrPayment && payments.length > 0) {
                            if (payments[pos2].date) {
                                let humanDateFormat = new Date(payments[pos2].date);
                                let dd = humanDateFormat.getDate();
                                let mm = humanDateFormat.getMonth() + 1;
                                let day;
                                let month;
                                let yyyy = humanDateFormat.getFullYear().toString();
                                if (dd < 10) {
                                    day = '0' + dd.toString();
                                }
                                else
                                    day = dd.toString();
                                if (mm < 10) {
                                    month = '0' + mm.toString();
                                }
                                else
                                    month = mm.toString();
                                stringDate = day + '/' + month + '/' + yyyy;
                                doc.text(stringDate, col1, line3 + y);
                                let orderNum = payments[pos2].orderNumber && parseInt(payments[pos2].orderNumber) != 0 ? parseInt(payments[pos2].orderNumber).toString() : "-";
                                doc.text(orderNum, col3, line3 + y);
                                doc.text(parseFloat(payments[pos2].amount).toFixed(2).toString(), col4, line3 + y);
                                doc.text(balance[i].toFixed(2).toString(), col6, line3 + y);
                                doc.text('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -', 10, line3 + y + 3);
                                if (payments[pos2].payWay == "Nota de Crédito")
                                    doc.text("NOTA CRED.", col2, line3 + y);
                                else
                                    doc.text("RECIBO", col2, line3 + y);
                            }
                            else
                                stringDate = "Sin datos"; //esto nunca se imprime
                            payments = this.splice2(payments, pos2);
                        }
                    }
                    doc.setFontSize(8);
                    let documentName = "Estado_de_Cuenta_" + client.fantasyName + ".pdf";
                    // Save the PDF
                    doc.save(documentName);
                });
            });
        }
    }
    getBalance(ord, pay) {
        let orders = ord;
        let payments = pay;
        let pos1 = 0;
        let pos2 = 0;
        let loopSize = orders.length + payments.length;
        let balance = [];
        for (let i = 0; i < loopSize; i++) {
            if (orders.length > 0 && payments.length > 0) {
                pos1 = this.getMinPos(orders);
                pos2 = this.getMinPos(payments);
                this.orderOrPayment = orders[pos1].date <= payments[pos2].date;
            }
            else if (orders.length > 0) {
                this.orderOrPayment = true;
                pos1 = this.getMinPos(orders);
            }
            else {
                this.orderOrPayment = false;
                pos2 = this.getMinPos(payments);
            }
            if (this.orderOrPayment && orders.length > 0) {
                if (i == 0)
                    balance[0] = parseFloat(orders[pos1].amountWithIva);
                else {
                    balance[i] = balance[i - 1] + parseFloat(orders[pos1].amountWithIva);
                }
                orders = this.splice2(orders, pos1);
            }
            else if (!this.orderOrPayment && payments.length > 0) {
                if (i == 0)
                    balance[0] = -parseFloat(payments[pos2].amount);
                else {
                    balance[i] = balance[i - 1] - parseFloat(payments[pos2].amount);
                }
                payments = this.splice2(payments, pos2);
            }
        }
        let result = [];
        for (let i = balance.length - 1; i >= 0; i--) {
            result.push(balance[i]);
        }
        return result;
    }
    getMinPos(arr) {
        let pos = arr.length;
        let result = pos - 1;
        let min = parseInt(arr[pos - 1].date);
        while (pos--) {
            if (parseInt(arr[pos].date) < min) {
                min = arr[pos].date;
                result = pos;
            }
        }
        return result;
    }
    getMaxPos(arr) {
        let pos = 0;
        let result = 0;
        let max = parseInt(arr[0].date);
        while (++pos < arr.length) {
            if (parseInt(arr[pos].date) > max) {
                max = arr[pos].date;
                result = pos;
            }
        }
        return result;
    }
    splice2(arr, pos) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (i != pos)
                result.push(arr[i]);
        }
        return result;
    }
    exportClients(clients) {
        if (confirm('Descargar PDF')) {
            const line1 = 20;
            const line2 = line1 + 10;
            const line3 = line2 + 10;
            const col1 = 10;
            const col2 = 60;
            const col3 = 112;
            const col4 = 164;
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.default();
            let pageHeight = 0;
            doc.setFontSize(9);
            doc.text('CLIENTES - GENTECH MAR DEL PLATA', col1, line1);
            doc.text('RAZÓN SOCIAL', col1, line2);
            doc.text('N. FANTASIA', col2, line2);
            doc.text('DIRECCIÓN', col3, line2);
            doc.text('TELÉFONO', col4, line2);
            doc.setFontSize(8);
            let cont = 0;
            let price = 0;
            let yLimit = 400; // Height position of new content
            let j = 0;
            let y = 0;
            for (let i = 0; i < clients.length; i++) {
                pageHeight = doc.internal.pageSize.height;
                if (y >= pageHeight - 70) {
                    doc.addPage();
                    j = i;
                    cont = line1;
                }
                y = 7 * (i + 1 - j) - cont;
                doc.text(clients[i].payload.val().businessName, col1, line3 + y);
                doc.text(clients[i].payload.val().fantasyName, col2, line3 + y);
                doc.text(clients[i].payload.val().address, col3, line3 + y);
                doc.text(clients[i].payload.val().phone, col4, line3 + y);
            }
            doc.setFontSize(8);
            // Save the PDF
            doc.save('ClientesGentech.pdf');
        }
    }
    sortArrayByDate(array) {
        array.sort((a, b) => {
            if (b.date > a.date)
                return 1;
            if (b.date < a.date)
                return -1;
            return 0;
        });
        return array;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
        this.subscription4.unsubscribe();
        this.subscription5.unsubscribe();
    }
}
PrintService.ɵfac = function PrintService_Factory(t) { return new (t || PrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService)); };
PrintService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PrintService, factory: PrintService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ 84134);



class ProductService {
    constructor(db) {
        this.db = db;
        this.subscription = this.getAllProducts().subscribe(products => {
            this.products = products;
        });
        this.subscription2 = this.getAllRecharges().subscribe(recharges => {
            this.recharges = recharges;
        });
    }
    ngOnInit() {
    }
    create(product) {
        this.subscription4 = this.getAllRecharges().subscribe(recharges => {
            this.recharges = recharges;
            product.disc1 = 0;
            product.disc2 = 0;
            product.disc3 = 0;
            product.disc4 = 0;
            product.price1 = product.buyPrice * (1 + (this.recharges[0].payload.val().distRecharge / 100));
            product.price2 = product.buyPrice * (1 + (this.recharges[0].payload.val().comRecharge / 100));
            product.price3 = product.buyPrice * (1 + (this.recharges[0].payload.val().kiosRecharge / 100));
            product.price4 = product.buyPrice * (1 + (this.recharges[0].payload.val().gymRecharge / 100));
            product.discPrice1 = product.price1;
            product.discPrice2 = product.price2;
            product.discPrice3 = product.price3;
            product.discPrice4 = product.price4;
            product.stock = 0;
            return this.db.list('/products').push(product);
        });
    }
    createRecharge() {
        this.recharges = {
            distRecharge: 15,
            comRecharge: 30,
            kiosRecharge: 60,
            gymRecharge: 44
        };
        let result = this.db.list('/recharges').push(this.recharges);
        if (result.key)
            this.rechargeKey = result.key;
        return result;
    }
    getAllProducts() {
        return this.db.list('/products').snapshotChanges();
    }
    get(productId) {
        return this.db.object('/products/' + productId).snapshotChanges();
    }
    getAllRecharges() {
        let result = this.db.list('/recharges').snapshotChanges();
        if (!result) {
            let result = this.createRecharge();
        }
        return result;
    }
    update(productId, product) {
        return this.db.object('/products/' + productId).update(product);
    }
    delete(productId) {
        return this.db.object('/products/' + productId).remove();
    }
    recharge(products, recharges) {
        let result = new Promise(() => { });
        for (let i = 0; i < products.length; i++) {
            let prod = {
                "disc1": products[i].payload.val().disc1,
                "disc2": products[i].payload.val().disc2,
                "disc3": products[i].payload.val().disc3,
                "disc4": products[i].payload.val().disc4,
                "buyPrice": products[i].payload.val().buyPrice,
                "price1": products[i].payload.val().buyPrice * (1 + recharges.distRecharge / 100),
                "price2": products[i].payload.val().buyPrice * (1 + recharges.comRecharge / 100),
                "price3": products[i].payload.val().buyPrice * (1 + recharges.kiosRecharge / 100),
                "price4": products[i].payload.val().buyPrice * (1 + recharges.gymRecharge / 100),
                "discPrice1": 0,
                "discPrice2": 0,
                "discPrice3": 0,
                "discPrice4": 0,
                "prodsCategory": products[i].payload.val().prodsCategory,
                "title": products[i].payload.val().title
            };
            prod.discPrice1 = prod.price1 * (1 - prod.disc1 / 100);
            prod.discPrice2 = prod.price2 * (1 - prod.disc2 / 100);
            prod.discPrice3 = prod.price3 * (1 - prod.disc3 / 100);
            prod.discPrice4 = prod.price4 * (1 - prod.disc4 / 100);
            result = this.db.object('/products/' + products[i].key).update(prod);
        }
        return result;
        // this.recharges = {
        //   "distRecharge": distRecharge,
        //   "comRecharge": comRecharge,
        //   "kiosRecharge": kiosRecharge,
        //   "gymRecharge": gymRecharge
        // }
        // let result = this.getAllRecharges().subscribe(result => {
        //   this.db.object('/recharges/' + result[0].key).update(this.recharges);
        // });
    }
    saveRecharges(recharges) {
        this.getAllRecharges().subscribe(result => {
            this.db.object('/recharges/' + result[0].key).update(recharges);
        });
    }
    applyDiscount(p, priceNumber, disc) {
        let product = {
            "disc1": p.payload.val().disc1,
            "disc2": p.payload.val().disc2,
            "disc3": p.payload.val().disc3,
            "disc4": p.payload.val().disc4,
            "buyPrice": p.payload.val().buyPrice,
            "prodsCategory": p.payload.val().prodsCategory,
            "title": p.payload.val().title,
            "price1": p.payload.val().price1,
            "price2": p.payload.val().price2,
            "price3": p.payload.val().price3,
            "price4": p.payload.val().price4,
            "discPrice1": p.payload.val().discPrice1,
            "discPrice2": p.payload.val().discPrice2,
            "discPrice3": p.payload.val().discPrice3,
            "discPrice4": p.payload.val().discPrice4
        };
        if (priceNumber == "price1") {
            product.discPrice1 = p.payload.val().price1 * (1 - disc / 100);
            product.disc1 = disc;
        }
        else if (priceNumber == "price2") {
            product.discPrice2 = p.payload.val().price2 * (1 - disc / 100);
            product.disc2 = disc;
        }
        else if (priceNumber == "price3") {
            product.discPrice3 = p.payload.val().price3 * (1 - disc / 100);
            product.disc3 = disc;
        }
        else if (priceNumber == "price4") {
            product.discPrice4 = p.payload.val().price4 * (1 - disc / 100);
            product.disc4 = disc;
        }
        this.db.object('/products/' + p.key).update(product);
    }
    applyDiscountToAll() {
        this.subscription3 = this.getAllProducts().subscribe(products => {
            this.products = products;
            for (let i = 0; i < this.products.length; i++) {
                let product = this.products[i].payload.val();
                product.discPrice1 = product.price1 * (1 - product.disc1 / 100);
                product.discPrice2 = product.price1 * (1 - product.disc2 / 100);
                product.discPrice3 = product.price1 * (1 - product.disc3 / 100);
                product.discPrice4 = product.price1 * (1 - product.disc4 / 100);
                this.db.object('/products/' + this.products[i].key).update(product);
            }
        });
    }
    updateStocks(cartProducts, thisProducts, adding) {
        for (let i = 0; i < cartProducts.length; i++) {
            for (let j = 0; j < thisProducts.length; j++) {
                if (cartProducts[i].productId == thisProducts[j].key) {
                    let quantity;
                    if (adding)
                        quantity = parseInt(thisProducts[j].payload.val().stock) + parseInt(cartProducts[i].quantity);
                    else
                        quantity = parseInt(thisProducts[j].payload.val().stock) - parseInt(cartProducts[i].quantity);
                    this.db.object('/products/' + thisProducts[j].key).update({
                        "stock": quantity
                    });
                }
            }
        }
    }
    restoreStock(order, products, orderProducts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let prods = [];
            for (let i = 0; i < orderProducts.length; i++) {
                for (let j = 0; j < products.length; j++) {
                    if (orderProducts[i].title == products[j].payload.val().title)
                        yield this.db.object('/products/' + products[j].key).update({
                            "stock": parseInt(products[j].payload.val().stock) + orderProducts[i].quantity
                        });
                }
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
        this.subscription4.unsubscribe();
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__.AngularFireDatabase)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83188:
/*!*******************************************!*\
  !*** ./src/app/services/stock.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockService": () => (/* binding */ StockService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.service */ 66082);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);





class StockService {
    constructor(db, productService, auth, route, router) {
        this.db = db;
        this.productService = productService;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
        });
        this.filteredProducts = [];
        this.subscription2 = this.productService.getAllProducts().subscribe(products => {
            this.filteredProducts = this.products = products;
            this.subscription3 = this.route.queryParamMap.subscribe(params => {
                this.prodsCategory = params.get('prodsCategory');
                if (this.products) {
                    this.filteredProducts = (this.prodsCategory) ?
                        this.products.filter((p) => p.payload.val().prodsCategory == this.prodsCategory) :
                        this.products;
                }
                this.subscription4 = this.getBuy().subscribe(buy => {
                    this.buy = buy;
                    if (this.buy.length == 0) {
                        this.createBuy(this.products);
                    }
                });
                // this.getStock().subscribe(stock => {
                //   this.stock = stock;
                //   if (this.stock.length == 0) {
                //     this.create();
                //   }
                // });
            });
        });
    }
    // public create() {
    //   for (let i=0;i<this.products.length;i++) {
    //     this.db.list('/stock').push({
    //       product: this.products[i].payload.val(),
    //       "quantity": 0
    //     });
    //   }
    //   let result = this.db.list('/stock').snapshotChanges();
    //   return result;
    // }
    createBuy(products) {
        let productBuy = [];
        for (let i = 0; i < products.length; i++) {
            productBuy.push({
                "price": products[i].payload.val().buyPrice,
                "product": products[i].payload.val(),
                "productId": products[i].key,
                "quantity": 0
            });
        }
        let result = this.db.list('/buy/').push({
            "buyItemsCount": 0,
            "products": productBuy
        });
        this.buyId = result.key;
    }
    // public getStock() {
    //   let result = this.db.list('/stock').snapshotChanges();
    //   return result;
    // }
    getBuy() {
        let result = this.db.list('/buy').snapshotChanges();
        return result;
    }
    updateBuy(products) {
        if (this.buy) {
            let productsBuy = [];
            for (let i = 0; i < products.length; i++) {
                productsBuy.push({
                    "price": products[i].payload.val().buyPrice,
                    "product": products[i].payload.val(),
                    "productId": products[i].key,
                    "quantity": 0,
                });
            }
            return this.db.object('/buy/' + this.buy[0].key).update({
                "buyItemsCount": 0,
                "products": productsBuy
            });
        }
        return null;
    }
    getBuys() {
        return this.db.list('/buys').snapshotChanges();
    }
    sendBuy(orderProducts) {
        let prods = [];
        orderProducts.products.forEach((p) => {
            if (p.quantity != 0) {
                prods.push({ "title": p.product.title, "quantity": p.quantity, "price": p.product.buyPrice });
            }
        });
        let time = new Date().getTime();
        let result = this.db.list('/buys/').push({
            "buyItemsCount": orderProducts.buyItemsCount,
            "buy": prods,
            "date": time
        });
        this.db.object('/buy/').remove();
    }
    reset() {
        this.db.object('/buy/').remove();
    }
    removeBuy(buy) {
        this.db.object('/buys/' + buy.key).remove();
    }
    getQuantityOfP(pBuy) {
        if (this.products) {
            for (let i = 0; i < this.products.length; i++) {
                if (pBuy.product.title == this.products[i].payload.val().title) {
                    return this.products[i].payload.val().stock;
                }
            }
        }
        return 0;
    }
    aprove(order) {
        // for (let i=0;i<order.payload.val().order.products.length;i++) {
        //   for (let j=0;j<this.stock.length;j++) {
        //     if (this.stock[j].payload.val().product.title == order.payload.val().order.products[i].product.title) {
        //         let quantity = this.stock[j].payload.val().quantity - order.payload.val().order.products[i].quantity;
        //         this.updateItemQuantity(this.stock[j].payload.val().product, quantity, this.stock[j].key)
        //     }
        //   }
        // }
    }
    getTotalCost(buy) {
        let totalCost = 0;
        if (buy && buy.payload.val().buy) {
            for (let i = 0; i < buy.payload.val().buy.length; i++) {
                totalCost += parseInt(buy.payload.val().buy[i].quantity) * parseFloat(buy.payload.val().buy[i].price);
            }
        }
        return Math.round(totalCost * 10) / 10;
        ;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
        this.subscription4.unsubscribe();
    }
}
StockService.ɵfac = function StockService_Factory(t) { return new (t || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
StockService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StockService, factory: StockService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 84134);


class UserService {
    constructor(db) {
        this.db = db;
    }
    save(user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    }
    get(uid) {
        return this.db.object('/users/' + uid).valueChanges();
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });


/***/ }),

/***/ 67278:
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityService": () => (/* binding */ UtilityService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class UtilityService {
    constructor() {
        this.navBarLoading = true;
    }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(); };
UtilityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac });


/***/ }),

/***/ 5758:
/*!******************************************!*\
  !*** ./src/app/stock/stock.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockComponent": () => (/* binding */ StockComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/stock.service */ 83188);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 1562);













function StockComponent_div_0_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nueva compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StockComponent_div_0_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ver compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StockComponent_div_0_mat_accordion_17_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Comprar: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", p_r7.title, ",\u00A0quedan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", p_r7.stock, " unidades");
} }
function StockComponent_div_0_mat_accordion_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Faltantes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, StockComponent_div_0_mat_accordion_17_tr_7_Template, 8, 2, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.alertProducts);
} }
function StockComponent_div_0_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", p_r8.payload.val().title, "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r8.payload.val().stock);
} }
const _c0 = function () { return [10, 20, 30]; };
function StockComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "STOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, StockComponent_div_0_a_7_Template, 2, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, StockComponent_div_0_a_8_Template, 2, 0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function StockComponent_div_0_Template_input_keyup_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.filter(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, StockComponent_div_0_mat_accordion_17_Template, 8, 1, "mat-accordion", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Existencias:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("matSortChange", function StockComponent_div_0_Template_table_matSortChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, StockComponent_div_0_tr_31_Template, 5, 2, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-paginator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function StockComponent_div_0_Template_mat_paginator_page_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.alertProducts.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.currentItemsToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx_r0.products == null ? null : ctx_r0.products.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
} }
class StockComponent {
    constructor(stockService, productService, route, auth) {
        this.stockService = stockService;
        this.productService = productService;
        this.route = route;
        this.auth = auth;
        this.alertProducts = [];
    }
    ngOnInit() {
        this.subscription = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.subscription2 = this.productService.getAllProducts().subscribe(products => {
                this.products = this.filteredProducts = products;
                this.currentItemsToShow = this.filteredProducts;
                this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.products.length });
                let alertProducts = [];
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].payload.val().stock < 5) {
                        alertProducts.push(this.products[i].payload.val());
                    }
                }
                this.alertProducts = alertProducts;
            });
            // this.stockService.getStock().subscribe(stock => {
            //   this.stock = this.filteredStock = stock;
            //   let alertProducts = []
            //   for (let i=0;i<this.stock.length;i++) {
            //     if (this.stock[i].payload.val().quantity < 5) {
            //       alertProducts.push(this.stock[i]);
            //     }
            //   }
            //   this.alertProducts = alertProducts;
            //  });
        });
    }
    filter(query) {
        // this.filteredStock = (query) ?
        //   this.stock.filter( (p: { payload: { val: () => { (): any; new(): any; product: { (): any; new(): any; title: string; }; }; }; }) => p.payload.val().product.title.toLowerCase().includes(query.toLowerCase())) :
        //   this.stock;
        this.filteredProducts = (query) ?
            this.products.filter((p) => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
            this.products;
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredProducts.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    sortData(sort) {
        // const data = this.stock;
        // if (!sort.active || sort.direction === '') {
        //   this.sortedData = data;
        //   return;
        // }
        // this.sortedData = data.sort((a: any, b: any) => {
        //   const isAsc = sort.direction === 'asc';
        //   switch (sort.active) {
        //     case 'title': return this.compare(a.payload.val().product.title, b.payload.val().product.title, isAsc);
        //     case 'quantity': return this.compare(a.payload.val().quantity, b.payload.val().quantity, isAsc);
        //     default: return 0;
        //   }
        // });
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    onPageChange($event) {
        this.currentItemsToShow = this.filteredProducts.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
StockComponent.ɵfac = function StockComponent_Factory(t) { return new (t || StockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
StockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StockComponent, selectors: [["stock"]], viewQuery: function StockComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "SCContainer", 4, "ngIf"], [1, "SCContainer"], [1, "ms-3"], ["mat-raised-button", "", "color", "primary", "routerLink", "/stock/buy", 4, "ngIf"], ["class", "ms-2", "mat-raised-button", "", "color", "accent", "routerLink", "/buys", 4, "ngIf"], [1, "input-group", "ms-3", "my-4"], ["matSuffix", ""], ["type", "text", "placeholder", "   Buscar producto...", 1, "border-end-0", "border", "rounded-pill", 3, "keyup"], ["query", ""], [4, "ngIf"], ["matSort", "", 1, "table", "table-striped", "table-sm", "mat-elevation-z8", 3, "matSortChange"], ["mat-sort-header", "title"], ["mat-sort-header", "quantity"], [4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["mat-raised-button", "", "color", "primary", "routerLink", "/stock/buy"], ["mat-raised-button", "", "color", "accent", "routerLink", "/buys", 1, "ms-2"], [1, "table", "table-striped", "table-sm", "mat-elevation-z8"]], template: function StockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, StockComponent_div_0_Template, 33, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDQFsWCl9FGxEr0BB6f-Bhp9h3eRQsCbHY",
        authDomain: "distribuidora-nb.firebaseapp.com",
        //authDomain: "http://localhost:9099",
        databaseURL: 'http://localhost:9000',
        projectId: "distribuidora-nb",
        storageBucket: "distribuidora-nb.appspot.com",
        messagingSenderId: "763137673585",
        appId: "1:763137673585:web:f9194415b214fddd014ed0"
    }
};
// debo cambiar de proyecto en firebase haciendo firebase use --add distribuidora-nb
// para que despliegue en la url correcta
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 75615,
	"./es-mx.js": 75615,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map