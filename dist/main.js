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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37716);























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
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [[
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
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__.MatToolbarModule,
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
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__.MatToolbarModule,
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
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule] }); })();


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
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 66082);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ 54655);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ 51665);


















function AdminProdsComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", c_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", c_r8.name, " ");
} }
function AdminProdsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "La categor\u00EDa es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_p_35_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_p_35_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_p_35_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_p_35_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_p_35_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0\u00A0Aplicando");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_p_35_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.rechargeDelForm.dist = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AdminProdsComponent_p_35_div_4_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_p_35_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.rechargeDelForm.com = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AdminProdsComponent_p_35_div_8_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_p_35_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.rechargeDelForm.pvp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AdminProdsComponent_p_35_div_12_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_p_35_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.rechargeDelForm.gym = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AdminProdsComponent_p_35_div_16_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Aplicar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AdminProdsComponent_p_35_span_19_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "distribuidor: ", ctx_r6.recharges[0].payload.val().distRecharge, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.rechargeDelForm.dist);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r9.touched && _r9.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "comercio: ", ctx_r6.recharges[0].payload.val().comRecharge, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.rechargeDelForm.com);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r11.touched && _r11.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "pvp: ", ctx_r6.recharges[0].payload.val().pvpRecharge, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.rechargeDelForm.pvp);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r11.touched && _r11.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "gimnasio: ", ctx_r6.recharges[0].payload.val().gymRecharge, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.rechargeDelForm.gym);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r15.touched && _r15.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r5.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.recharged);
} }
function AdminProdsComponent_div_37_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Precio inv\u00E1lido. Dede usar punto en vez de coma.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminProdsComponent_div_37_div_12_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AdminProdsComponent_div_37_div_12_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r28.errors == null ? null : _r28.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r28.errors == null ? null : _r28.errors.min);
} }
function AdminProdsComponent_div_37_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminProdsComponent_div_37_div_23_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r30.errors == null ? null : _r30.errors.required);
} }
function AdminProdsComponent_div_37_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminProdsComponent_div_37_div_34_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r32.errors == null ? null : _r32.errors.required);
} }
function AdminProdsComponent_div_37_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminProdsComponent_div_37_div_45_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r34.errors == null ? null : _r34.errors.required);
} }
function AdminProdsComponent_div_37_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminProdsComponent_div_37_div_56_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r36.errors == null ? null : _r36.errors.required);
} }
function AdminProdsComponent_div_37_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminProdsComponent_div_37_div_62_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r38.errors == null ? null : _r38.errors.required);
} }
function AdminProdsComponent_div_37_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", c_r51.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", c_r51.name, " ");
} }
function AdminProdsComponent_div_37_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0\u00A0ERROR: hay datos inv\u00E1lidos! recuerde usar punto en vez de coma para los decimales");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminProdsComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 8, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AdminProdsComponent_div_37_Template_form_ngSubmit_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53); const product_r23 = restoredCtx.$implicit; const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r52.saveProd(_r25.value, product_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_37_Template_input_ngModelChange_4_listener($event) { const product_r23 = ctx.$implicit; return product_r23.payload.val().title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AdminProdsComponent_div_37_div_8_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_37_Template_input_ngModelChange_10_listener($event) { const product_r23 = ctx.$implicit; return product_r23.payload.val().buyPrice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AdminProdsComponent_div_37_div_12_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Precio de compra($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Precio distribuidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_37_Template_input_ngModelChange_21_listener($event) { const product_r23 = ctx.$implicit; return product_r23.payload.val().disc1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, AdminProdsComponent_div_37_div_23_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Desc.(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Precio comercio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_37_Template_input_ngModelChange_32_listener($event) { const product_r23 = ctx.$implicit; return product_r23.payload.val().disc2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, AdminProdsComponent_div_37_div_34_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Desc.(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Precio VP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_37_Template_input_ngModelChange_43_listener($event) { const product_r23 = ctx.$implicit; return product_r23.payload.val().disc3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, AdminProdsComponent_div_37_div_45_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Desc.(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Precio gimnasio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_37_Template_input_ngModelChange_54_listener($event) { const product_r23 = ctx.$implicit; return product_r23.payload.val().disc4 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, AdminProdsComponent_div_37_div_56_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Desc.(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "mat-form-field", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_37_Template_input_ngModelChange_60_listener($event) { const product_r23 = ctx.$implicit; return product_r23.payload.val().stock = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, AdminProdsComponent_div_37_div_62_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-form-field", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Categorias");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "mat-select", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_div_37_Template_mat_select_ngModelChange_68_listener($event) { const product_r23 = ctx.$implicit; return product_r23.payload.val().prodsCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, AdminProdsComponent_div_37_mat_option_70_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, AdminProdsComponent_div_37_div_72_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminProdsComponent_div_37_Template_button_click_75_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53); const product_r23 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r62.delete(product_r23.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, AdminProdsComponent_div_37_span_77_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r23 = ctx.$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44);
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](55);
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](61);
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](69);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", product_r23.payload.val().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r26.touched && _r26.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", product_r23.payload.val().buyPrice)("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r28.touched && _r28.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 26, product_r23.payload.val().discPrice1, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", product_r23.payload.val().disc1)("min", -100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r30.touched && _r30.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](28, 29, product_r23.payload.val().discPrice2, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", product_r23.payload.val().disc2)("min", -100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r32.touched && _r32.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](39, 32, product_r23.payload.val().discPrice3, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", product_r23.payload.val().disc3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r34.touched && _r34.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](50, 35, product_r23.payload.val().discPrice4, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", product_r23.payload.val().disc4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r36.touched && _r36.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", product_r23.payload.val().stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r38.touched && _r38.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", product_r23.payload.val().prodsCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 38, ctx_r7.prodsCategories$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r40.touched && _r40.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r25.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_r25.valid);
} }
const _c0 = function () { return [10, 20, 30]; };
class AdminProdsComponent {
    constructor(productService, db, router, categoryService) {
        this.productService = productService;
        this.db = db;
        this.router = router;
        this.categoryService = categoryService;
        this.pageSize = 20;
        this.pageIndex = 0;
        this.rechargeDelForm = {};
        this.prod = {};
        this.filteredProducts = [];
        this.mobile = false;
        this.prodsCategories$ = categoryService.getAllProdsCategories();
    }
    ngOnInit() {
        this.categoryService.getAllClientsCategories().subscribe(clientCategories => {
            this.clientCategories = clientCategories;
        });
        this.productService.getAll().subscribe(products => {
            this.filteredProducts = this.products = products;
            this.onPageChange({ previousPageIndex: 0, pageIndex: this.pageIndex, pageSize: this.pageSize, length: this.filteredProducts.length });
            //this.createStockValue(this.products);
        });
        this.productService.getAllRecharges().subscribe(recharges => {
            this.recharges = recharges;
            if (!recharges) {
                this.productService.createRecharge();
            }
            this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().pvpRecharge, this.recharges[0].payload.val().gymRecharge);
        });
        if (this.recharges)
            this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().pvpRecharge, this.recharges[0].payload.val().gymRecharge);
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
    saveProd(product, formproduct) {
        if (confirm('Está segur@ que quiere guardar estos valores?')) {
            let prod = {
                "disc1": product.disc1,
                "disc2": product.disc2,
                "disc3": product.disc3,
                "disc4": product.disc4,
                "buyPrice": product.buyPrice,
                "price1": formproduct.payload.val().price1,
                "price2": formproduct.payload.val().price2,
                "price3": formproduct.payload.val().price3,
                "price4": formproduct.payload.val().price4,
                "discPrice1": formproduct.payload.val().discPrice1,
                "discPrice2": formproduct.payload.val().discPrice2,
                "discPrice3": formproduct.payload.val().discPrice3,
                "discPrice4": formproduct.payload.val().discPrice4,
                "stock": product.stock,
                "prodsCategory": product.prodsCategory,
                "title": product.title
            };
            this.productService.update(formproduct.key, prod);
            //location.reload();
            //this.router.navigate(['/admin/prods']);
        }
    }
    delete(id) {
        if (confirm('Está segur@ que quiere eliminar este producto?')) {
            this.productService.delete(id);
        }
    }
    save(recharge) {
        if (confirm('Está segur@ que quiere cambiar la remarcación?')) {
            this.recharge(Number(recharge.dist), Number(recharge.com), Number(recharge.pvp), Number(recharge.gym));
        }
    }
    recharge(distRecharge, comRecharge, pvpRecharge, gymRecharge) {
        if (this.recharges) {
            this.recharged = true;
            setTimeout(() => {
                this.recharged = false;
            }, 800);
            this.productService.recharge(this.products, distRecharge, comRecharge, pvpRecharge, gymRecharge);
            return;
        }
        this.productService.createRecharge();
    }
    applyDiscount(p, priceNumber, disc) {
        this.productService.applyDiscount(p, priceNumber, disc);
    }
    onPageChange($event) {
        this.pageIndex = $event.pageIndex;
        this.pageSize = $event.pageSize;
        this.currentItemsToShow = this.filteredProducts.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
    }
    exportPDF(prod) {
        if (confirm('Descargar PDF')) {
            const line1 = 20;
            const line2 = line1 + 10;
            const line3 = line2 + 10;
            const col1 = 30;
            const col2 = 140;
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF();
            let pageHeight = 0;
            doc.setFontSize(9);
            doc.text('GENTECH MAR DEL PLATA', col1, line1);
            doc.text('PRODUCTO', col1, line2);
            if (prod.categoryPDF == "Pvp" || prod.categoryPDF == "Gimnasio") {
                doc.text('Importe', 140, line2);
            }
            else {
                doc.text('Importe s/IVA', 140, line2);
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
                        break;
                    case "Comercio":
                        doc.text(this.products[i].payload.val().discPrice2.toFixed(1).toString(), col2, line3 + y);
                        break;
                    case "Pvp":
                        doc.text(this.products[i].payload.val().discPrice3.toFixed(1).toString(), col2, line3 + y);
                        break;
                    case "Gimnasio":
                        doc.text(this.products[i].payload.val().discPrice4.toFixed(1).toString(), col2, line3 + y);
                        break;
                }
            }
            doc.setFontSize(8);
            // Save the PDF
            doc.save('ListaDePreciosGentech.pdf');
        }
    }
}
AdminProdsComponent.ɵfac = function AdminProdsComponent_Factory(t) { return new (t || AdminProdsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService)); };
AdminProdsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminProdsComponent, selectors: [["app-admin-prods"]], viewQuery: function AdminProdsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 39, vars: 10, consts: [["fxLayout", "column", "fxLayoutAlign", "space-between", 1, "container-edit"], ["fxLayout", "row", "fxFlex", "20", "fxLayoutAlign", "start center"], ["fxLayout", "row"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "Buscar producto...", 3, "keyup"], ["query", ""], ["fxFlex", "27"], ["mat-raised-button", "", "color", "accent", "routerLink", "/admin/prods/new"], [3, "ngSubmit"], ["f2", "ngForm"], ["appearance", "fill"], ["name", "categoryPDF", "required", "", 3, "ngModel", "ngModelChange"], ["categoryPDF", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], ["fxLayout", "column", 1, "admin-prod-recharge"], ["f", "ngForm"], [4, "ngIf"], ["class", "admin-prods-form", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], [3, "value"], [1, "alert", "alert-danger"], ["appearance", "legacy"], ["matInput", "", "name", "dist", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["dist", "ngModel"], ["matInput", "", "name", "com", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["com", "ngModel"], ["matInput", "", "name", "pvp", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["pvp", "ngModel"], ["matInput", "", "name", "gym", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["gym", "ngModel"], [1, "admin-prods-form"], ["appearance", "legacy", 2, "width", "25vw", "min-width", "320px", "margin-right", "10px"], ["matInput", "", "name", "title", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["appearance", "legacy", 2, "width", "5vw", "min-width", "63px"], ["matInput", "", "name", "buyPrice", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["buyPrice", "ngModel"], ["appearance", "legacy", 2, "width", "5vw", "min-width", "63px", "background-color", "rgb(240, 240, 240)"], ["matInput", "", "readonly", "", 3, "placeholder"], ["appearance", "legacy", 2, "width", "2vw", "min-width", "25px"], ["matInput", "", "name", "disc1", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["disc1", "ngModel"], ["appearance", "legacy", 2, "width", "2vw", "min-width", "28px"], ["matInput", "", "name", "disc2", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["disc2", "ngModel"], ["matInput", "", "name", "disc3", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["disc3", "ngModel"], ["matInput", "", "name", "disc4", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["disc4", "ngModel"], ["appearance", "legacy", 2, "width", "2vw", "min-width", "28px", "margin", "3px"], ["matInput", "", "name", "stock", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["stock", "ngModel"], ["appearance", "legacy", 2, "width", "5vw", "min-width", "80px"], ["name", "prodsCategory", "required", "", 3, "ngModel", "ngModelChange"], ["prodsCategory", "ngModel"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"]], template: function AdminProdsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function AdminProdsComponent_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r63); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8); return ctx.filter(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Nuevo Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AdminProdsComponent_Template_form_ngSubmit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r63); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15); return ctx.exportPDF(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Categor\u00EDa de cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminProdsComponent_Template_mat_select_ngModelChange_19_listener($event) { return ctx.prod.categoryPDF = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AdminProdsComponent_mat_option_21_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AdminProdsComponent_div_22_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Descargar PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Remarcaci\u00F3n de precios:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u00A0\u00A0(para modificar debe completar los 4 campos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "form", 8, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AdminProdsComponent_Template_form_ngSubmit_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r63); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34); return ctx.save(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AdminProdsComponent_p_35_Template, 20, 14, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, AdminProdsComponent_div_37_Template, 78, 40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-paginator", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function AdminProdsComponent_Template_mat_paginator_page_38_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.prod.categoryPDF);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.clientCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.touched && _r2.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.recharges);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.currentItemsToShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.filteredProducts.length)("pageSize", 20)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, ng2_validation__WEBPACK_IMPORTED_MODULE_3__.MinValidator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9kcy5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_clients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/clients.service */ 79012);
/* harmony import */ var src_app_services_payments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/payments.service */ 31386);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/print.service */ 39534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
















function AdminClientsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Razon Social ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", c_r21.payload.val().businessName, " \u00A0\u00A0");
} }
function AdminClientsComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Nombre de Fantas\u00EDa\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", c_r22.payload.val().fantasyName, " \u00A0\u00A0");
} }
function AdminClientsComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Deuda sum-rest* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r23 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r6.calcDebt(c_r23), "1.1-1"));
} }
function AdminClientsComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", c_r24.payload.val().designatedSeller, "\u00A0");
} }
function AdminClientsComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Condici\u00F3n IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", c_r25.payload.val().IVACondition, "\u00A0");
} }
function AdminClientsComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Resumen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminClientsComponent_td_35_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const c_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.printService.exportResume(c_r26.payload.val()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th", 37);
} }
const _c0 = function (a1) { return ["/admin/clients", a1]; };
function AdminClientsComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminClientsComponent_td_38_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.getPagination(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, c_r29.key));
} }
function AdminClientsComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th", 39);
} }
function AdminClientsComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminClientsComponent_td_41_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const c_r32 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.searchPayments(c_r32.payload.val().fantasyName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Ver cobros al cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th", 41);
} }
function AdminClientsComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminClientsComponent_td_44_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const c_r35 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r36.searchOrders(c_r35.payload.val().fantasyName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Ver pedidos del cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminClientsComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 43);
} }
function AdminClientsComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 44);
} }
const _c1 = function () { return [10, 20]; };
class AdminClientsComponent {
    constructor(clientsService, paymentsService, ordersService, printService) {
        this.clientsService = clientsService;
        this.paymentsService = paymentsService;
        this.ordersService = ordersService;
        this.printService = printService;
        this.displayedColumns = ['businessName', 'fantasyName', 'debt2', 'seller', 'IVACond', 'resume', 'edit', 'payments', 'orders'];
    }
    ngOnInit() {
        this.subscription = this.clientsService.getAll().subscribe(clients => {
            this.filteredClients = this.clients = clients;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.filteredClients);
            this.dataSource.paginator = this.paginator;
            if (this.clientsService.clientsPaginator.pageIndex > 0 || this.clientsService.clientsPaginator.pageSize != 10) {
                this.paginator.pageIndex = this.clientsService.clientsPaginator.pageIndex;
                this.paginator.pageSize = this.clientsService.clientsPaginator.pageSize;
                this.dataSource.paginator = this.paginator;
            }
        });
        this.ordersService.getAll().subscribe(orders => {
            this.orders = orders;
        });
        this.paymentsService.getAll().subscribe(payments => {
            this.payments = payments;
        });
    }
    filter(query) {
        this.filteredClients = (query) ?
            this.clients.filter(c => c.payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())) :
            this.clients;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.filteredClients);
        this.dataSource.paginator = this.paginator;
    }
    sortData(sort) {
        const data = this.filteredClients.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'fantasyName': return this.compare(a.payload.val().fantasyName, b.payload.val().fantasyName, isAsc);
                case 'businessName': return this.compare(a.payload.val().businessName, b.payload.val().businessName, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.sortedData);
        this.dataSource.paginator = this.paginator;
    }
    getPagination() {
        this.clientsService.clientsPaginator.pageIndex = this.paginator.pageIndex;
        this.clientsService.clientsPaginator.pageSize = this.paginator.pageSize;
    }
    searchPayments(clientFantasyName) {
        this.paymentsService.clientFantasyName = clientFantasyName;
    }
    searchOrders(clientFantasyName) {
        this.ordersService.clientFantasyName = clientFantasyName;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    calcDebt(client) {
        let ordersAmount = this.ordersService.getClientOrdersAmount(client.payload.val().fantasyName);
        let paymentsAmount = this.paymentsService.getClientPaymentsAmount(client.payload.val().fantasyName);
        return ordersAmount - paymentsAmount;
    }
    ngOnDestroy() {
        //   this.subscription.unsubscribe();
    }
}
AdminClientsComponent.ɵfac = function AdminClientsComponent_Factory(t) { return new (t || AdminClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_clients_service__WEBPACK_IMPORTED_MODULE_0__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_payments_service__WEBPACK_IMPORTED_MODULE_1__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_3__.PrintService)); };
AdminClientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminClientsComponent, selectors: [["admin-clients"]], viewQuery: function AdminClientsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 48, vars: 5, consts: [[1, "container-edit"], ["mat-raised-button", "", "color", "accent", "routerLink", "/admin/clients/new"], ["mat-raised-button", "", "type", "submit", "color", "primary", 2, "margin-left", "5px", 3, "click"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "Nombre de Fantas\u00EDa...", 3, "keyup"], ["query", ""], ["mat-table", "", "matSort", "", 1, "table-striped", "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "businessName"], ["mat-header-cell", "", "mat-sort-header", "businessName", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fantasyName"], ["mat-header-cell", "", "mat-sort-header", "fantasyName", 4, "matHeaderCellDef"], ["matColumnDef", "debt2"], ["mat-header-cell", "", "mat-sort-header", "debt2", 4, "matHeaderCellDef"], ["matColumnDef", "seller"], ["mat-header-cell", "", "mat-sort-header", "seller", 4, "matHeaderCellDef"], ["matColumnDef", "IVACond"], ["mat-header-cell", "", "mat-sort-header", "IVACond", 4, "matHeaderCellDef"], ["matColumnDef", "resume"], ["mat-header-cell", "", "mat-sort-header", "resume", 4, "matHeaderCellDef"], ["matColumnDef", "edit"], ["mat-header-cell", "", "mat-sort-header", "edit", 4, "matHeaderCellDef"], ["matColumnDef", "payments"], ["mat-header-cell", "", "mat-sort-header", "payments", 4, "matHeaderCellDef"], ["matColumnDef", "orders"], ["mat-header-cell", "", "mat-sort-header", "orders", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "businessName"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "fantasyName"], ["mat-header-cell", "", "mat-sort-header", "debt2"], ["mat-header-cell", "", "mat-sort-header", "seller"], ["mat-header-cell", "", "mat-sort-header", "IVACond"], ["mat-header-cell", "", "mat-sort-header", "resume"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "edit"], [3, "routerLink", "click"], ["mat-header-cell", "", "mat-sort-header", "payments"], ["mat-icon-button", "", "routerLink", "/payments/payments", 2, "margin-left", "50px", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "orders"], ["mat-icon-button", "", "routerLink", "/orders/orders", 2, "margin-left", "50px", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function AdminClientsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nuevo Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminClientsComponent_Template_button_click_4_listener() { return ctx.printService.exportClients(ctx.clients); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Descargar PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "*IMPORTANTE: si la deuda es negativa el cliente tiene saldo a favor");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function AdminClientsComponent_Template_input_keyup_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16); return ctx.filter(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function AdminClientsComponent_Template_table_matSortChange_17_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](18, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AdminClientsComponent_th_19_Template, 3, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AdminClientsComponent_td_20_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AdminClientsComponent_th_22_Template, 3, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, AdminClientsComponent_td_23_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AdminClientsComponent_th_25_Template, 3, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AdminClientsComponent_td_26_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](27, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, AdminClientsComponent_th_28_Template, 3, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AdminClientsComponent_td_29_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](30, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AdminClientsComponent_th_31_Template, 3, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, AdminClientsComponent_td_32_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](33, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, AdminClientsComponent_th_34_Template, 3, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AdminClientsComponent_td_35_Template, 4, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](36, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, AdminClientsComponent_th_37_Template, 1, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, AdminClientsComponent_td_38_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](39, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, AdminClientsComponent_th_40_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, AdminClientsComponent_td_41_Template, 6, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](42, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, AdminClientsComponent_th_43_Template, 1, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, AdminClientsComponent_td_44_Template, 6, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, AdminClientsComponent_tr_45_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, AdminClientsComponent_tr_46_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "mat-paginator", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jbGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var src_app_services_sellers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/sellers.service */ 52514);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 11494);












function AdminSellersComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nombre Completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSellersComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r9.payload.val().name, " \u00A0\u00A0");
} }
function AdminSellersComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tel\u00E9fono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminSellersComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r10.payload.val().phone, " \u00A0\u00A0");
} }
function AdminSellersComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 19);
} }
const _c0 = function (a1) { return ["/admin/sellers", a1]; };
function AdminSellersComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, s_r11.key));
} }
function AdminSellersComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
function AdminSellersComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
} }
const _c1 = function () { return [10, 20]; };
class AdminSellersComponent {
    constructor(sellersService) {
        this.sellersService = sellersService;
        this.displayedColumns = ['name', 'phone', 'edit'];
    }
    ngOnInit() {
        this.subscription = this.sellersService.getAll().subscribe(sellers => {
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
        //   this.subscription.unsubscribe();
    }
}
AdminSellersComponent.ɵfac = function AdminSellersComponent_Factory(t) { return new (t || AdminSellersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_sellers_service__WEBPACK_IMPORTED_MODULE_0__.SellersService)); };
AdminSellersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminSellersComponent, selectors: [["admin-sellers"]], viewQuery: function AdminSellersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 26, vars: 5, consts: [[1, "container-edit"], ["mat-raised-button", "", "color", "accent", "routerLink", "/admin/sellers/new"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "Buscar por Nombre...", 3, "keyup"], ["query", ""], ["mat-table", "", "mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "name", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "phone"], ["mat-header-cell", "", "mat-sort-header", "phone", 4, "matHeaderCellDef"], ["matColumnDef", "edit"], ["mat-header-cell", "", "mat-sort-header", "edit", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "name"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "phone"], ["mat-header-cell", "", "mat-sort-header", "edit"], [3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function AdminSellersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nuevo Vendedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminSellersComponent_Template_input_keyup_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return ctx.filter(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function AdminSellersComponent_Template_table_matSortChange_13_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AdminSellersComponent_th_15_Template, 3, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AdminSellersComponent_td_16_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminSellersComponent_th_18_Template, 3, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AdminSellersComponent_td_19_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AdminSellersComponent_th_21_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AdminSellersComponent_td_22_Template, 3, 3, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminSellersComponent_tr_23_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AdminSellersComponent_tr_24_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "mat-paginator", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
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
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-out/check-out.component */ 51084);
/* harmony import */ var _admin_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin-clients/admin-clients.component */ 63752);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/orders.component */ 28686);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/order.component */ 98606);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ 78968);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients/clients.component */ 57045);
/* harmony import */ var _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/clients-form/clients-form.component */ 27745);
/* harmony import */ var _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/product-form/product-form.component */ 62830);
/* harmony import */ var _admin_admin_sellers_admin_sellers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin-sellers/admin-sellers.component */ 24146);
/* harmony import */ var _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/sellers-form/sellers-form.component */ 57954);
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock/stock.component */ 5758);
/* harmony import */ var _buy_buy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buy/buy.component */ 72662);
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ 80483);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 77528);
/* harmony import */ var _buys_buys_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buys/buys.component */ 88124);
/* harmony import */ var _admin_prods_admin_prods_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-prods/admin-prods.component */ 72790);
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payments/payments.component */ 82068);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payment/payment.component */ 79082);
/* harmony import */ var _credit_note_credit_note_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./credit-note/credit-note.component */ 53274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);























const routes = [
    //{ path: "", redirectTo: "home", pathMatch: "full" },
    { path: "", component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_0__.CheckOutComponent },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__.DashboardComponent },
    { path: "orders/order", component: _orders_order_component__WEBPACK_IMPORTED_MODULE_3__.OrderComponent },
    { path: "payments/creditNote", component: _credit_note_credit_note_component__WEBPACK_IMPORTED_MODULE_19__.CreditNoteComponent },
    { path: "payments/payment", component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_18__.PaymentComponent },
    { path: "payments/payments", component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_17__.PaymentsComponent },
    { path: "client/client", component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_6__.ClientsComponent },
    { path: "orders/orders", component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__.OrdersComponent },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent },
    { path: "checkout", component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_0__.CheckOutComponent },
    { path: "stock/stock", component: _stock_stock_component__WEBPACK_IMPORTED_MODULE_11__.StockComponent },
    { path: "stock/buy", component: _buy_buy_component__WEBPACK_IMPORTED_MODULE_12__.BuyComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "buys", component: _buys_buys_component__WEBPACK_IMPORTED_MODULE_15__.BuysComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "admin/clients/new", component: _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_7__.ClientsFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "admin/clients/:id", component: _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_7__.ClientsFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "admin/clients", component: _admin_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_1__.AdminClientsComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "admin/prods/new", component: _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_8__.ProductFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "admin/prods/:id", component: _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_8__.ProductFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "admin/prods", component: _admin_prods_admin_prods_component__WEBPACK_IMPORTED_MODULE_16__.AdminProdsComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "admin/sellers/new", component: _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_10__.SellersFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "admin/sellers/:id", component: _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_10__.SellersFormComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
    { path: "admin/sellers", component: _admin_admin_sellers_admin_sellers_component__WEBPACK_IMPORTED_MODULE_9__.AdminSellersComponent, canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__.AdminAuthGuard] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ 73071);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 7736);
/* harmony import */ var _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat-navbar/mat-navbar.component */ 7181);







class AppComponent {
    constructor(auth, userService, db, router, mediaObserver) {
        this.auth = auth;
        this.userService = userService;
        this.db = db;
        this.router = router;
        this.mediaObserver = mediaObserver;
        this.itemValue = '';
        auth.user$.subscribe(user => {
            if (!user)
                return;
            this.userService.save(user);
            let returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.MediaObserver)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "over-router"], [1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_2__.MatNavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["mat-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  \n  top: 0;\n  \n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQWUsK0RBQUE7RUFDZixNQUFBO0VBQVEseUNBQUE7RUFDUixXQUFBO0FBR0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LW5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xuICB0b3A6IDA7IC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuIl19 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _Material_Material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Material/Material.module */ 53732);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/order.component */ 98606);
/* harmony import */ var _admin_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin-clients/admin-clients.component */ 63752);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-guard.service */ 78968);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ 73071);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/product.service */ 66082);
/* harmony import */ var _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/product-filter/product-filter.component */ 69931);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/orders.service */ 12331);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clients/clients.component */ 57045);
/* harmony import */ var _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms/clients-form/clients-form.component */ 27745);
/* harmony import */ var _admin_admin_sellers_admin_sellers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin-sellers/admin-sellers.component */ 24146);
/* harmony import */ var _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forms/sellers-form/sellers-form.component */ 57954);
/* harmony import */ var _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forms/product-form/product-form.component */ 62830);
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./stock/stock.component */ 5758);
/* harmony import */ var _buy_buy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./buy/buy.component */ 72662);
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ 80483);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 77528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _buys_buys_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./buys/buys.component */ 88124);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/category.service */ 54655);
/* harmony import */ var _pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pieChart/pieChart.component */ 31583);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _admin_prods_admin_prods_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-prods/admin-prods.component */ 72790);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./check-out/check-out.component */ 51084);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./orders/orders.component */ 28686);
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./payments/payments.component */ 82068);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./payment/payment.component */ 79082);
/* harmony import */ var _credit_note_credit_note_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./credit-note/credit-note.component */ 53274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 37716);














































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuard, _services_user_service__WEBPACK_IMPORTED_MODULE_11__.UserService, _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_22__.AdminAuthGuard, _services_category_service__WEBPACK_IMPORTED_MODULE_25__.CategoryService,
        _services_product_service__WEBPACK_IMPORTED_MODULE_12__.ProductService, _services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService, _services_orders_service__WEBPACK_IMPORTED_MODULE_14__.OrdersService, _angular_common__WEBPACK_IMPORTED_MODULE_34__.DatePipe, _pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_26__.PieChartComponent, _payments_payments_component__WEBPACK_IMPORTED_MODULE_30__.PaymentsComponent, {
            provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__.MAT_RADIO_DEFAULT_OPTIONS,
            useValue: { color: 'primary' },
        }], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule,
            ng2_validation__WEBPACK_IMPORTED_MODULE_8__.CustomFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _Material_Material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_39__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_40__.AngularFireAuthModule,
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_41__.AngularFireDatabaseModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__.FlexLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_43__.ChartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_29__.OrdersComponent,
        _mat_navbar_mat_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MatNavbarComponent,
        _orders_order_component__WEBPACK_IMPORTED_MODULE_4__.OrderComponent,
        _admin_admin_clients_admin_clients_component__WEBPACK_IMPORTED_MODULE_5__.AdminClientsComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent,
        _forms_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_19__.ProductFormComponent,
        _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_13__.ProductFilterComponent,
        _clients_clients_component__WEBPACK_IMPORTED_MODULE_15__.ClientsComponent,
        _forms_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_16__.ClientsFormComponent,
        _admin_admin_sellers_admin_sellers_component__WEBPACK_IMPORTED_MODULE_17__.AdminSellersComponent,
        _forms_sellers_form_sellers_form_component__WEBPACK_IMPORTED_MODULE_18__.SellersFormComponent,
        _stock_stock_component__WEBPACK_IMPORTED_MODULE_20__.StockComponent,
        _buy_buy_component__WEBPACK_IMPORTED_MODULE_21__.BuyComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__.DashboardComponent,
        _buys_buys_component__WEBPACK_IMPORTED_MODULE_24__.BuysComponent,
        _pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_26__.PieChartComponent,
        _admin_prods_admin_prods_component__WEBPACK_IMPORTED_MODULE_27__.AdminProdsComponent,
        _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_28__.CheckOutComponent,
        _payments_payments_component__WEBPACK_IMPORTED_MODULE_30__.PaymentsComponent,
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_31__.PaymentComponent,
        _credit_note_credit_note_component__WEBPACK_IMPORTED_MODULE_32__.CreditNoteComponent], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule,
        ng2_validation__WEBPACK_IMPORTED_MODULE_8__.CustomFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _Material_Material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_fire__WEBPACK_IMPORTED_MODULE_39__.AngularFireModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_40__.AngularFireAuthModule,
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_41__.AngularFireDatabaseModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_43__.ChartsModule] }); })();


/***/ }),

/***/ 72662:
/*!**************************************!*\
  !*** ./src/app/buy/buy.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyComponent": () => (/* binding */ BuyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/stock.service */ 83188);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/product-filter/product-filter.component */ 69931);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);











function BuyComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BuyComponent_tr_20_Template_input_ngModelChange_4_listener($event) { const p_r1 = ctx.$implicit; return p_r1.quantity = $event; })("blur", function BuyComponent_tr_20_Template_input_blur_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const p_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.setBuyItemQuantity(ctx_r4.buy, p_r1, p_r1.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuyComponent_tr_20_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const p_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.updateBuyItemQuantity(ctx_r6.buy, p_r1, -1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuyComponent_tr_20_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const p_r1 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.updateBuyItemQuantity(ctx_r7.buy, p_r1, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", p_r1.product.title, "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", p_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", p_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getQuantityOfP(p_r1));
} }
class BuyComponent {
    constructor(stockService, productService, route, auth) {
        this.stockService = stockService;
        this.productService = productService;
        this.route = route;
        this.auth = auth;
        this.buyEmpty = false;
    }
    ngOnInit() {
        //this.filter("");
        this.stockService.getBuy().subscribe(buy => {
            this.auth.appUser$.subscribe(appUser => {
                this.appUser = appUser;
                this.productService.getAll().subscribe(products => {
                    this.products = products;
                    this.buy = buy;
                    this.route.queryParamMap.subscribe(params => {
                        this.prodsCategory = params.get('prodsCategory');
                        this.filteredBuy = [];
                        if (this.buy[0]) {
                            for (let i = 0; i < this.buy[0].payload.val().products.length; i++) {
                                if (this.buy[0].payload.val().products[i].product.prodsCategory == this.prodsCategory) {
                                    this.filteredBuy.push(this.buy[0].payload.val().products[i]);
                                }
                            }
                            if (this.filteredBuy.length == 0) {
                                for (let i = 0; i < this.buy[0].payload.val().products.length; i++)
                                    this.filteredBuy.push(this.buy[0].payload.val().products[i]);
                            }
                        }
                    });
                });
            });
        });
    }
    updateBuyItemQuantity(buy, product, change) {
        this.stockService.updateBuyItemQuantity(buy, product, change);
    }
    setBuyItemQuantity(buy, product, quantity) {
        let quan = parseInt(quantity);
        this.stockService.setBuyItemQuantity(buy, product, quan);
    }
    sortData(sort) {
        const data = this.filteredBuy;
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'title': return this.compare(a.payload.val().product.title, b.payload.val().product.title, isAsc);
                case 'quantity': return this.compare(a.payload.val().quantity, b.payload.val().quantity, isAsc);
                case 'stock': return this.compare(this.getQuantityOfP(a), this.getQuantityOfP(b), isAsc);
                default: return 0;
            }
        });
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    sendBuy() {
        if (parseInt(this.buy[0].payload.val().buyItemsCount) == 0) {
            this.buyEmpty = true;
            return;
        }
        if (confirm('Está segur@ que quiere cargar la compra? No podrá modificarla')) {
            this.stockService.sendBuy(this.buy);
            this.productService.updateStocks(this.buy[0].payload.val().products, this.products, true);
        }
    }
    reset() {
        if (confirm('Está segur@ que quiere anular la compra? aun no fue cargada')) {
            this.stockService.reset();
        }
    }
    getQuantityOfP(pBuy) {
        return this.stockService.getQuantityOfP(pBuy);
    }
}
BuyComponent.ɵfac = function BuyComponent_Factory(t) { return new (t || BuyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
BuyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BuyComponent, selectors: [["app-buy"]], decls: 26, vars: 1, consts: [[1, "container-grid"], [2, "margin-left", "10px", "margin-bottom", "30px", "margin-top", "-20px"], [2, "margin", "20px"], [2, "margin-left", "10px"], ["mat-raised-button", "", "color", "basic", "routerLink", "/stock/stock", 1, "left-btn", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "left-btn", 3, "click"], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "title"], ["mat-sort-header", "quantity"], ["mat-sort-header", "stock"], [4, "ngFor", "ngForOf"], [2, "max-width", "280px"], ["matInput", "", "name", "amount", 3, "ngModel", "placeholder", "ngModelChange", "blur"], ["amount", "ngModel"], ["mat-raised-button", "", "color", "basic", 1, "left-btn", 3, "click"]], template: function BuyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nueva Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "product-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuyComponent_Template_button_click_7_listener() { return ctx.sendBuy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Cargar compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuyComponent_Template_button_click_9_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Anular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function BuyComponent_Template_table_matSortChange_12_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Stock actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, BuyComponent_tr_20_Template, 12, 4, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuyComponent_Template_button_click_22_listener() { return ctx.sendBuy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Cargar compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuyComponent_Template_button_click_24_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Anular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredBuy);
    } }, directives: [_products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_3__.ProductFilterComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXkuY29tcG9uZW50LnNjc3MifQ== */"] });


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

















function BuysComponent_div_0_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BuysComponent_div_0_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BuysComponent_div_0_tr_40_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, b_r8.payload.val().date, "dd/MM/yyyy HH:mm"), "\u00A0\u00A0\u00A0\u00A0");
} }
function BuysComponent_div_0_tr_40_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r11.stockService.getTotalCost(b_r8), "1.1-1"), "");
} }
function BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r16.quantity, "\u00A0\u00A0");
} }
function BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r16.title, "\u00A0\u00A0\u00A0\u00A0");
} }
function BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, item_r16.price, "1.1-1"), "");
} }
function BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, item_r16.price * item_r16.quantity, "1.1-1"), "");
} }
function BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_td_1_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_td_2_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_td_3_Template, 3, 4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_td_4_Template, 3, 4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r16.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r16.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r16.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r16.quantity != 0);
} }
function BuysComponent_div_0_tr_40_mat_accordion_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-expansion-panel", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Precio unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, BuysComponent_div_0_tr_40_mat_accordion_3_tr_14_Template, 5, 4, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const i_r9 = ctx_r26.index;
    const b_r8 = ctx_r26.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("mat-sort-header", "prodQuantity;", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("mat-sort-header", "prodTitle;", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("mat-sort-header", "itemPrice;", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("mat-sort-header", "subTotalPrice;", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", b_r8.payload.val().buy);
} }
function BuysComponent_div_0_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BuysComponent_div_0_tr_40_td_1_Template, 3, 4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BuysComponent_div_0_tr_40_td_2_Template, 3, 4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BuysComponent_div_0_tr_40_mat_accordion_3_Template, 15, 5, "mat-accordion", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", b_r8.payload.val().buyItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", b_r8.payload.val().buyItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", b_r8.payload.val().buyItemCount != 0);
} }
function BuysComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nueva Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Mis compras\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BuysComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.dateValue = $event; })("keyup", function BuysComponent_div_0_Template_input_keyup_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.filterByDate(_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function BuysComponent_div_0_Template_form_ngSubmit_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.searchDateRange(ctx_r30.range.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Ingrese un rango de fechas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-date-range-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "mat-datepicker-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "mat-date-range-picker", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, BuysComponent_div_0_mat_error_27_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, BuysComponent_div_0_mat_error_28_Template, 2, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "buscar por rango");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuysComponent_div_0_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.clearRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "borrar b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function BuysComponent_div_0_Template_table_matSortChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Importe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, BuysComponent_div_0_tr_40_Template, 4, 3, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.range)("rangePicker", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.end.hasError("matEndDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.filteredBuys);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$", ctx_r0.getTotal(), "");
} }
class BuysComponent {
    constructor(productService, route, auth, datepipe, stockService, dateAdapter) {
        this.productService = productService;
        this.route = route;
        this.auth = auth;
        this.datepipe = datepipe;
        this.stockService = stockService;
        this.dateAdapter = dateAdapter;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
        });
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }
    ngOnInit() {
        //this.filter("");
        this.subscription = this.stockService.getBuys().subscribe(buys => {
            this.auth.appUser$.subscribe(appUser => {
                this.appUser = appUser;
                //this.buys =  buys;
                this.buys = this.dateRangefilteredBuys = this.datefilteredBuys = this.filteredBuys = buys;
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
        return total;
    }
    removeBuy(buyId) {
        //this.stockService.removeBuy(buyId);
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
}
BuysComponent.ɵfac = function BuysComponent_Factory(t) { return new (t || BuysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_3__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter)); };
BuysComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BuysComponent, selectors: [["app-buys"]], decls: 1, vars: 1, consts: [["class", "BsContainer", 4, "ngIf"], [1, "BsContainer"], ["mat-raised-button", "", "color", "accent", "routerLink", "/stock/buy"], [2, "display", "inline"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "por fecha...", 3, "ngModel", "ngModelChange", "keyup"], ["Datequery", ""], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "fecha inicio"], ["matEndDate", "", "formControlName", "end", "placeholder", "fecha finalizaci\u00F3n"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 2, "margin", "5px"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["query", ""], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "date"], ["mat-sort-header", "import"], [4, "ngFor", "ngForOf"], ["mat-sort-header", "total"], ["mat-sort-header", "showTotal"], ["hideToggle", ""], [3, "mat-sort-header"]], template: function BuysComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BuysComponent_div_0_Template, 46, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangePicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionPanelTitle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXlzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 51084:
/*!**************************************************!*\
  !*** ./src/app/check-out/check-out.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckOutComponent": () => (/* binding */ CheckOutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class CheckOutComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckOutComponent.ɵfac = function CheckOutComponent_Factory(t) { return new (t || CheckOutComponent)(); };
CheckOutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckOutComponent, selectors: [["app-check-out"]], decls: 5, vars: 0, consts: [["src", "../../assets/intro.png"], [2, "margin-left", "300px", "margin-top", "-40px"], ["href", "https://github.com/jadosfer/Distribuidora", 2, "color", "black"]], template: function CheckOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Repositorio Git Hub Tecnolog\u00EDa y Programaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1vdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/clients.service */ 79012);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/print.service */ 39534);
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/payments.service */ 31386);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);













function ClientsComponent_div_0_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientsComponent_div_0_tr_31_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const client_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.printService.exportResume(client_r3.payload.val()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientsComponent_div_0_tr_31_Template_a_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const client_r3 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.searchPayments(client_r3.payload.val().fantasyName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Ver cobros al cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientsComponent_div_0_tr_31_Template_a_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const client_r3 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.searchOrders(client_r3.payload.val().fantasyName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Ver pedidos del cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r3.payload.val().businessName, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r3.payload.val().fantasyName, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r3.payload.val().address, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", client_r3.payload.val().phone, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 5, client_r3.payload.val().debt, "1.1-1"));
} }
function ClientsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "MIS CLIENTES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "*IMPORTANTE: si la deuda es negativa el cliente tiene saldo a favor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ClientsComponent_div_0_Template_input_keyup_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.filter(_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function ClientsComponent_div_0_Template_table_matSortChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Raz\u00F3n social");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Nombre de Fantas\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Deuda*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Estado de cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ClientsComponent_div_0_tr_31_Template, 28, 8, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.filteredClients);
} }
class ClientsComponent {
    constructor(clientsService, auth, printService, paymentsService, ordersService) {
        this.clientsService = clientsService;
        this.auth = auth;
        this.printService = printService;
        this.paymentsService = paymentsService;
        this.ordersService = ordersService;
        this.userClients = [];
    }
    ngOnInit() {
        this.filter("");
        this.subscription = this.clientsService.getAll().subscribe(clients => {
            this.auth.appUser$.subscribe(appUser => {
                this.appUser = appUser;
                this.clients = clients;
                for (let i = 0; i < this.clients.length; i++) {
                    if (this.clients[i].payload.val().designatedSeller == this.appUser.name)
                        this.userClients.push(this.clients[i]);
                }
            });
        });
    }
    filter(query) {
        this.filteredClients = (query) ?
            this.userClients.filter((c) => c.payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())) :
            this.userClients;
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
    searchPayments(clientFantasyName) {
        this.paymentsService.clientFantasyName = clientFantasyName;
    }
    searchOrders(clientFantasyName) {
        this.ordersService.clientFantasyName = clientFantasyName;
    }
}
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_0__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_2__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_payments_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_4__.OrdersService)); };
ClientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["clients"]], decls: 1, vars: 1, consts: [["class", "SCContainer", "style", "margin-left: 15px;", 4, "ngIf"], [1, "SCContainer", 2, "margin-left", "15px"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "buscar por cliente...", 3, "keyup"], ["query", ""], ["matSort", "", 1, "table", "table-striped", "table-sm", "mat-elevation-z8", 3, "matSortChange"], ["mat-sort-header", "businessName"], ["mat-sort-header", "fantasyName"], ["mat-sort-header", "address"], ["mat-sort-header", "phone"], ["mat-sort-header", "debt"], ["mat-sort-header", "resume"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "routerLink", "/payments/payments", 2, "margin-left", "10px", 3, "click"], ["mat-icon-button", "", "routerLink", "/orders/orders", 2, "margin-left", "10px", 3, "click"], [2, "margin-right", "10px"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ClientsComponent_div_0_Template, 32, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/clients.service */ 79012);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/payments.service */ 31386);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 5015);
















function CreditNoteComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", client_r6.payload.val().fantasyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", client_r6.payload.val().fantasyName, " ");
} }
function CreditNoteComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Debe ingresar un valor!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CreditNoteComponent {
    constructor(route, ordersService, clientsService, auth, router, paymentsService) {
        this.route = route;
        this.ordersService = ordersService;
        this.clientsService = clientsService;
        this.auth = auth;
        this.router = router;
        this.paymentsService = paymentsService;
        this.note = {};
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.clientFantasyName = "";
        this.creditAmount = 0;
        this.clients = [];
        this.client = true;
        this.noteEmpty = true;
    }
    ngOnInit() {
        this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.clientsService.getAll().subscribe(clients => {
                this.clients = clients;
                this.filteredClients = [];
                for (let i = 0; i < this.clients.length; i++) {
                    if (this.clients[i].payload.val().designatedSeller == this.appUser.name || this.appUser.isAdmin == true) {
                        this.filteredClients.push(this.clients[i]);
                    }
                }
                this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => value ? this._filter(value) : this._filter("")));
            });
        });
    }
    getClientCategory() {
        return this.ordersService.getClientCategory(this.clientFantasyName);
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
            let time = new Date().getTime();
            this.paymentsService.create({
                "amount": note.amount,
                "aproved": true,
                "client": this.clientFantasyName,
                "payWay": "Nota de Crédito",
                "date": time,
                "sellerName": this.appUser.name,
                "orderNumber": note.orderNumber
            });
            this.router.navigateByUrl('/payments/payments');
        }
        return;
    }
    ngOnDestroy() {
    }
}
CreditNoteComponent.ɵfac = function CreditNoteComponent_Factory(t) { return new (t || CreditNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_1__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_payments_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsService)); };
CreditNoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreditNoteComponent, selectors: [["app-credit-note"]], decls: 29, vars: 9, consts: [["fxLayout.xs-sm", "column"], ["id", "productsList"], [1, "example-form", 2, "margin-top", "20px", "margin-left", "0px", 3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill", 1, "example-full-width"], ["name", "clientFantasyName", "type", "text", "placeholder", "Elija uno", "aria-label", "Number", "matInput", "", "required", "", 3, "formControl", "matAutocomplete", "ngModel", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "example-full-width", 2, "margin", "10px"], ["name", "amount", "type", "number", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["amount", "ngModel"], ["name", "orderNumber", "type", "number", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["orderNumber", "ngModel"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "left-btn"], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-bottom", "20px", "margin-top", "20px"], [4, "ngIf"], [3, "value"]], template: function CreditNoteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nota de Cr\u00E9dito");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CreditNoteComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); return ctx.sendNote(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreditNoteComponent_Template_input_ngModelChange_9_listener($event) { return ctx.clientFantasyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-autocomplete", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CreditNoteComponent_mat_option_12_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Ingrese el monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreditNoteComponent_Template_input_ngModelChange_17_listener($event) { return ctx.note.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Ingrese el n\u00FAm. de factura asociado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreditNoteComponent_Template_input_ngModelChange_22_listener($event) { return ctx.note.orderNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Crear Nota");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, CreditNoteComponent_span_28_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r1)("ngModel", ctx.clientFantasyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 7, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.note.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.note.orderNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.noteEmpty);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVkaXQtbm90ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pieChart/pieChart.component */ 31583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/stock.service */ 83188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-charts */ 86178);























function DashboardComponent_div_0_div_1_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](label_r21);
} }
function DashboardComponent_div_0_div_1_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r22 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, data_r22, "1.1-1"), "\u00A0(", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 5, ctx_r20.getPercentage(data_r22), "1.1-1"), "%)\u00A0");
} }
function DashboardComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardComponent_div_0_div_1_th_3_Template, 2, 1, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DashboardComponent_div_0_div_1_td_7_Template, 4, 8, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.pieChartLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.pieChartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 3, ctx_r1.getTotalCategs(), "1.1-1"));
} }
function DashboardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "canvas", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r2.pieChartData)("labels", ctx_r2.pieChartLabels)("chartType", ctx_r2.pieChartType)("options", ctx_r2.pieChartOptions)("colors", ctx_r2.pieChartColors)("legend", ctx_r2.pieChartLegend);
} }
function DashboardComponent_div_0_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", c_r23.client, " \u00A0\u00A0");
} }
function DashboardComponent_div_0_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Vendedor\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", c_r24.seller, " \u00A0\u00A0");
} }
function DashboardComponent_div_0_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Importe*\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_0_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, c_r25.amount, "1.1-1"));
} }
function DashboardComponent_div_0_tr_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 52);
} }
function DashboardComponent_div_0_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 53);
} }
const _c0 = function () { return [10, 20, 30]; };
function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DashboardComponent_div_0_div_1_Template, 11, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DashboardComponent_div_0_div_2_Template, 2, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "GR\u00C1FICOS\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27.graphic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Graficar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.showGraph = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Ocultar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_0_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r30.clientValue = $event; })("keyup", function DashboardComponent_div_0_Template_input_keyup_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.filter(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_0_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r32.sellerValue = $event; })("keyup", function DashboardComponent_div_0_Template_input_keyup_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.filterBySeller(_r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_0_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.dateValue = $event; })("keyup", function DashboardComponent_div_0_Template_input_keyup_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.filterByDate(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "form", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function DashboardComponent_div_0_Template_form_ngSubmit_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r36.searchDateRange(ctx_r36.range.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Ingrese un rango de fechas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-date-range-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "mat-datepicker-toggle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "mat-date-range-picker", null, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, DashboardComponent_div_0_mat_error_49_Template, 2, 0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, DashboardComponent_div_0_mat_error_50_Template, 2, 0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "buscar por rango");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 31, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_div_0_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r37.clearRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "borrar b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function DashboardComponent_div_0_Template_table_matSortChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](57, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, DashboardComponent_div_0_th_58_Template, 3, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, DashboardComponent_div_0_td_59_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](60, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, DashboardComponent_div_0_th_61_Template, 3, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, DashboardComponent_div_0_td_62_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](63, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, DashboardComponent_div_0_th_64_Template, 3, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, DashboardComponent_div_0_td_65_Template, 3, 4, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, DashboardComponent_div_0_tr_66_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, DashboardComponent_div_0_tr_67_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "mat-paginator", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](48);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showGraph);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showGraph);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.clientValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.sellerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.range)("rangePicker", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.end.hasError("matEndDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c0));
} }
class DashboardComponent {
    constructor(ordersService, productService, pieChartComponent, route, auth, datepipe, stockService, dateAdapter) {
        this.ordersService = ordersService;
        this.productService = productService;
        this.pieChartComponent = pieChartComponent;
        this.route = route;
        this.auth = auth;
        this.datepipe = datepipe;
        this.stockService = stockService;
        this.dateAdapter = dateAdapter;
        this.displayedColumns = ['client', 'seller', 'amount'];
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl()
        });
        this.userOrders = [];
        this.titles = [];
        this.aproved = ["NO", "SI"];
        this.debt = ["NO", "SI"];
        this.selected = "NO";
        this.query = { client: "", seller: "", date: "", dateRange: { start: new Date(2017, 1, 1), end: new Date(2040, 1, 1) } };
        this.showGraph = false;
        this.dashData = {};
        this.dashElement = { "seller": null, "amount": 0 };
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
        this.subscription = this.ordersService.getAll().subscribe(orders => {
            this.auth.appUser$.subscribe(appUser => {
                this.appUser = appUser;
                this.orders = orders;
                this.userOrders = [];
                for (let i = 0; i < this.orders.length; i++) {
                    if (this.appUser.isAdmin || this.orders[i].payload.val().order.sellerName == this.appUser.name) {
                        this.userOrders.push(this.orders[i]);
                    }
                }
                this.produceDashData(this.userOrders);
                this.filteredOrders = this.userOrders;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.dashData);
                this.dataSource.paginator = this.paginator;
            });
        });
    }
    filter(query) {
        var _a;
        this.query.client = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())
                && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date)))
                this.filteredOrders.push(this.userOrders[i]);
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.produceDashData(this.filteredOrders);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.dashData);
        this.dataSource.paginator = this.paginator;
        if (this.showGraph)
            this.graphic();
    }
    filterBySeller(query) {
        var _a;
        this.query.seller = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(query.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date))) {
                this.filteredOrders.push(this.userOrders[i]);
            }
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.produceDashData(this.filteredOrders);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.dashData);
        this.dataSource.paginator = this.paginator;
        if (this.showGraph)
            this.graphic();
    }
    filterByDate(query) {
        var _a;
        this.query.date = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(query)))
                this.filteredOrders.push(this.userOrders[i]);
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.produceDashData(this.filteredOrders);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.dashData);
        this.dataSource.paginator = this.paginator;
        if (this.showGraph)
            this.graphic();
    }
    searchDateRange(range) {
        var _a;
        if (range.start) {
            this.filteredOrders = [];
            for (let i = 0; i < this.userOrders.length; i++) {
                if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                    && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
                    && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date)))
                    this.filteredOrders.push(this.userOrders[i]);
            }
            this.filteredOrders = (range) ?
                this.filteredOrders.filter(p => p.payload.val().date > Date.parse(range.start._d) && p.payload.val().date < Date.parse(range.end._d)) :
                this.filteredOrders;
            this.produceDashData(this.filteredOrders);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.dashData);
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
                case 'amount': return this.compare(a.amount, b.amount, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.sortedData);
        this.dataSource.paginator = this.paginator;
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
                total += order.payload.val().amount;
            });
        }
        return total;
    }
    removeOrder(orderId) {
        this.ordersService.removeOrder(orderId);
    }
    aprove(order) {
        if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
            this.stockService.aprove(order);
            this.ordersService.aprove(order);
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
        this.filteredOrders = this.userOrders;
        this.produceDashData(this.filteredOrders);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.dashData);
        this.dataSource.paginator = this.paginator;
    }
    isOrderInDebt(order) {
        return this.ordersService.isOrderInDebt(order);
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
            for (let j = 0; j < orders[i].payload.val().order.products.length; j++) {
                if (!this.isCategoryIncluded(categories, orders[i].payload.val().order.products[j].product.prodsCategory)) {
                    categories.push(orders[i].payload.val().order.products[j].product.prodsCategory);
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
            let amount = 0;
            for (let j = 0; j < orders.length; j++) {
                for (let k = 0; k < orders[j].payload.val().order.products.length; k++) {
                    if (orders[j].payload.val().order.products[k].product.prodsCategory == categories[i]) {
                        amount += parseFloat(orders[j].payload.val().order.products[k].discountPrice) * parseInt(orders[j].payload.val().order.products[k].quantity) * (1 + orders[j].payload.val().iva / 100);
                    }
                }
            }
            amounts.push(amount);
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
            if (!this.isClientInDashData(dataArray[i].payload.val().clientFantasyName)) {
                this.dashData.push({
                    "client": dataArray[i].payload.val().clientFantasyName, "seller": dataArray[i].payload.val().order.sellerName, "amount": dataArray[i].payload.val().amount
                });
            }
            else {
                this.adAmount(dataArray[i].payload.val().clientFantasyName, dataArray[i].payload.val().amount);
            }
        }
        this.dashLength = Object.keys(this.dashData).length;
    }
    adAmount(client, amount) {
        for (let i = 0; i < this.dashData.length; i++) {
            if (this.dashData[i].client == client) {
                this.dashData[i].amount += amount;
            }
        }
    }
    isClientInDashData(client) {
        for (let i = 0; i < this.dashData.length; i++) {
            if (this.dashData[i].client == client) {
                return true;
            }
        }
        return false;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_pieChart_pieChart_component__WEBPACK_IMPORTED_MODULE_2__.PieChartComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_4__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.DateAdapter)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "SCContainer", 4, "ngIf"], [1, "SCContainer"], ["style", "margin:30px", 4, "ngIf"], ["class", "chart", "style", "float:left; margin-right:15px", 4, "ngIf"], ["fxLayout", "row", 2, "margin", "10px"], [2, "display", "inline", "margin", "10px"], ["mat-raised-button", "", "color", "accent", 2, "display", "inline", "margin-right", "10px", 3, "click"], ["mat-raised-button", "", "color", "basic", 3, "click"], ["fxLayout.gt-sm", "row", "fxLayout.xs-sm", "column", "fxLayoutAlign.gt-sm", "start center", 2, "margin", "15px"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxLayout", "row", 2, "margin", "20px"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "por cliente...", 3, "ngModel", "ngModelChange", "keyup"], ["query", ""], ["fxLayout", "row", 2, "min-width", "130px"], ["matInput", "", "type", "text", "placeholder", "por vendedor...", 3, "ngModel", "ngModelChange", "keyup"], ["sellerquery", ""], ["fxLayout", "row"], ["matInput", "", "type", "text", "placeholder", "por fecha...", 3, "ngModel", "ngModelChange", "keyup"], ["Datequery", ""], ["fxLayout", "row", "fxLayoutAlign", "space-evenly center"], [2, "margin-right", "0px", 3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "fecha inicio"], ["matEndDate", "", "formControlName", "end", "placeholder", "fecha finalizaci\u00F3n"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 2, "margin", "10px"], ["mat-raised-button", "", "color", "accent", 2, "margin", "0px", 3, "click"], ["mat-table", "", "matSort", "", 1, "table-striped", "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "client"], ["mat-header-cell", "", "mat-sort-header", "client", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "seller"], ["mat-header-cell", "", "mat-sort-header", "seller", 4, "matHeaderCellDef"], ["matColumnDef", "amount"], ["mat-header-cell", "", "mat-sort-header", "amount", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [2, "margin", "30px"], [1, "mat-elevation-z8"], [4, "ngFor", "ngForOf"], [1, "chart", 2, "float", "left", "margin-right", "15px"], ["baseChart", "", "height", "400", 3, "data", "labels", "chartType", "options", "colors", "legend"], ["mat-header-cell", "", "mat-sort-header", "client"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "seller"], ["mat-header-cell", "", "mat-sort-header", "amount"], ["mat-header-row", ""], ["mat-row", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 69, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangePicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ng2_charts__WEBPACK_IMPORTED_MODULE_19__.BaseChartDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/category.service */ 54655);
/* harmony import */ var src_app_services_clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/clients.service */ 79012);
/* harmony import */ var src_app_services_sellers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sellers.service */ 52514);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5015);














function ClientsFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "La Razon Social es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El Nombre de Fantasia es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", c_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", c_r25.name, " ");
} }
function ClientsFormComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El canal de venta es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sc_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", sc_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", sc_r26, " ");
} }
function ClientsFormComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "La condici\u00F3n de venta es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ds_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ds_r27.payload.val().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ds_r27.payload.val().name, " ");
} }
function ClientsFormComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "La condici\u00F3n de venta es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const IVACond_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", IVACond_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", IVACond_r28, " ");
} }
function ClientsFormComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "La condici\u00F3n de IVA es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El CUIT es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_57_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El CUIT debe ser mayor a 0 y sin guiones");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClientsFormComponent_div_57_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ClientsFormComponent_div_57_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.min);
} }
function ClientsFormComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "La direcci\u00F3n es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El nombre de contacto es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientsFormComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El tel\u00E9fono es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ClientsFormComponent {
    constructor(router, route, categoryService, clientsService, sellersService) {
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.clientsService = clientsService;
        this.sellersService = sellersService;
        this.sellConditions = ["Contado", "Cuenta Corriente"];
        this.IVAConditions = ["Inscripto", "Monotributista", "Consumidor Final"];
        this.client = {};
        this.clientsCategories = categoryService.getAllClientsCategories();
        this.sellers$ = sellersService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.clientsService.get(this.id).take(1).subscribe(p => {
                this.client = p.payload.val();
            });
    }
    save(client) {
        if (confirm('Está segur@ que quiere guardar/crear este cliente?')) {
            if (this.id) {
                this.clientsService.update(this.id, client);
            }
            else {
                this.clientsService.create(client);
            }
            this.router.navigate(['/admin/clients']);
        }
    }
    delete() {
        if (confirm('Está segur@ que quiere borrar este cliente? No podrá recuperarlo')) {
            this.clientsService.delete(this.id);
            this.router.navigate(['/admin/clients']);
        }
    }
    ngOnInit() {
    }
}
ClientsFormComponent.ɵfac = function ClientsFormComponent_Factory(t) { return new (t || ClientsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_clients_service__WEBPACK_IMPORTED_MODULE_1__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_sellers_service__WEBPACK_IMPORTED_MODULE_2__.SellersService)); };
ClientsFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ClientsFormComponent, selectors: [["clients-form"]], decls: 89, vars: 29, consts: [["fxLayout", "row", "fxLayout.xs", "column"], ["fxFlex", "40%;", "fxFlex.xs", "80%", 1, "container-form"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "legacy"], ["matInput", "", "name", "businessName", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["businessName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "name", "fantasyName", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["fantasyName", "ngModel"], ["appearance", "fill"], ["name", "clientCategory", "required", "", 3, "ngModel", "ngModelChange"], ["clientCategory", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "sellCondition", "required", "", 3, "ngModel", "ngModelChange"], ["sellCondition", "ngModel"], ["name", "designatedSeller", "required", "", 3, "ngModel", "ngModelChange"], ["designatedSeller", "ngModel"], ["name", "IVACondition", 3, "ngModel", "ngModelChange"], ["IVACondition", "ngModel"], ["matInput", "", "name", "cuit", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["cuit", "ngModel"], ["matInput", "", "name", "address", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["matInput", "", "name", "contactName", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["contactName", "ngModel"], ["matInput", "", "name", "phone", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], [1, "alert", "alert-danger"], [3, "value"], [4, "ngIf"]], template: function ClientsFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ClientsFormComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Razon Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.client.businessName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ClientsFormComponent_div_12_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Nombre de Fantas\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.client.fantasyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ClientsFormComponent_div_20_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Canal de venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_mat_select_ngModelChange_24_listener($event) { return ctx.client.clientCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ClientsFormComponent_mat_option_26_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ClientsFormComponent_div_28_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Condici\u00F3n de venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-select", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_mat_select_ngModelChange_32_listener($event) { return ctx.client.sellCondition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ClientsFormComponent_mat_option_34_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ClientsFormComponent_div_35_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Vendedor asignado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-select", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_mat_select_ngModelChange_39_listener($event) { return ctx.client.designatedSeller = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ClientsFormComponent_mat_option_41_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ClientsFormComponent_div_43_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Condici\u00F3n IVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_mat_select_ngModelChange_47_listener($event) { return ctx.client.IVACondition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, ClientsFormComponent_mat_option_49_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, ClientsFormComponent_div_50_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "CUIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_55_listener($event) { return ctx.client.cuit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, ClientsFormComponent_div_57_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_63_listener($event) { return ctx.client.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, ClientsFormComponent_div_67_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Nombre de contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_72_listener($event) { return ctx.client.contactName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, ClientsFormComponent_div_76_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientsFormComponent_Template_input_ngModelChange_80_listener($event) { return ctx.client.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, ClientsFormComponent_div_84_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientsFormComponent_Template_button_click_87_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](33);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](40);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](48);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](56);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](64);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](73);
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.businessName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.fantasyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.clientCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 25, ctx.clientsCategories));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.sellCondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sellConditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r8.touched && _r8.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.designatedSeller);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 27, ctx.sellers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r11.touched && _r11.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.IVACondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.IVAConditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r14.touched && _r14.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.cuit)("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r17.touched && _r17.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r19.touched && _r19.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.contactName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r21.touched && _r21.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.client.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r23.touched && _r23.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng2_validation__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJjbGllbnRzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOjVweFxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ 54655);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ 66082);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5015);















function ProductFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El nombre es obligatorio. M\u00E1ximo 30 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductFormComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductFormComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Precio inv\u00E1lido. Dede usar punto en vez de coma.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductFormComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductFormComponent_div_19_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductFormComponent_div_19_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.min);
} }
function ProductFormComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", c_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", c_r10.name, " ");
} }
function ProductFormComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ProductFormComponent {
    constructor(router, route, categoryService, productService) {
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.prodsCategories = categoryService.getAllProdsCategories();
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
ProductFormComponent.ɵfac = function ProductFormComponent_Factory(t) { return new (t || ProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService)); };
ProductFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductFormComponent, selectors: [["app-product-form"]], decls: 46, vars: 18, consts: [["fxLayout", "row", "fxLayout.xs", "column"], ["fxFlex", "40%;", "fxFlex.xs", "80%", 1, "container-form"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "legacy"], ["matInput", "", "name", "title", "placeholder", "", "maxlength", "40", "required", "", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "name", "buyPrice", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["buyPrice", "ngModel"], ["appearance", "fill"], ["name", "prodsCategory", "required", "", 3, "ngModel", "ngModelChange"], ["prodsCategory", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], ["fxFlex", "40%;", "fxFlex.xs", "80%", 1, "example-card"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"]], template: function ProductFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ProductFormComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.product.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Nombre del producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProductFormComponent_div_12_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_input_ngModelChange_17_listener($event) { return ctx.product.buyPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ProductFormComponent_div_19_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Precio de Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductFormComponent_Template_mat_select_ngModelChange_25_listener($event) { return ctx.product.prodsCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ProductFormComponent_mat_option_27_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ProductFormComponent_div_29_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductFormComponent_Template_button_click_32_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.product.buyPrice)("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.product.prodsCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 12, ctx.prodsCategories));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](41, 14, ctx.product.buyPrice, "$AR ", true));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.product.prodsCategory);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng2_validation__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe], encapsulation: 2 });


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
/* harmony import */ var src_app_services_sellers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/sellers.service */ 52514);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);










function SellersFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SellersFormComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El CUIL es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SellersFormComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El CUIL debe ser mayor a 0 y sin guiones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SellersFormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SellersFormComponent_div_18_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SellersFormComponent_div_18_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.min);
} }
function SellersFormComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La direcci\u00F3n es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SellersFormComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El tel\u00E9fono es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SellersFormComponent {
    constructor(router, route, sellersService) {
        this.router = router;
        this.route = route;
        this.sellersService = sellersService;
        this.sellConditions = ["Contado", "Cuenta Corriente"];
        this.seller = {};
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.sellersService.get(this.id).take(1).subscribe(p => {
                this.seller = p.payload.val();
            });
    }
    save(seller) {
        if (confirm('Está segur@ que quiere guardar/crear este vendedor?')) {
            if (this.id) {
                this.sellersService.update(this.id, seller);
            }
            else {
                this.sellersService.create(seller);
            }
            this.router.navigate(['/admin/sellers']);
        }
    }
    delete() {
        if (confirm('Está segur@ que quiere borrar este vendedor? No podrá recuperarlo')) {
            this.sellersService.delete(this.id);
            this.router.navigate(['/admin/sellers']);
        }
    }
    ngOnInit() {
    }
}
SellersFormComponent.ɵfac = function SellersFormComponent_Factory(t) { return new (t || SellersFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_sellers_service__WEBPACK_IMPORTED_MODULE_0__.SellersService)); };
SellersFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SellersFormComponent, selectors: [["app-sellers-form"]], decls: 42, vars: 9, consts: [["fxLayout", "row", "fxLayout.xs", "column"], ["fxFlex", "40%;", "fxFlex.xs", "80%", 1, "container-form"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "legacy"], ["matInput", "", "name", "name", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "name", "cuil", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["cuil", "ngModel"], ["matInput", "", "name", "address", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["matInput", "", "name", "phone", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function SellersFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SellersFormComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Nombre Completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SellersFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.seller.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SellersFormComponent_div_12_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "CUIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SellersFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.seller.cuil = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SellersFormComponent_div_18_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SellersFormComponent_Template_input_ngModelChange_25_listener($event) { return ctx.seller.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SellersFormComponent_div_29_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SellersFormComponent_Template_input_ngModelChange_33_listener($event) { return ctx.seller.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SellersFormComponent_div_37_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SellersFormComponent_Template_button_click_40_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng2_validation__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXJzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 51095);



class LoginComponent {
    constructor(auth) {
        this.auth = auth;
    }
    login() {
        this.auth.login();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 0, consts: [[1, "login-btn"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_1_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login with google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], encapsulation: 2 });


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
/* harmony import */ var _services_sellers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/sellers.service */ 52514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);











function MatNavbarComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "-----SITIO EN MANTENIMIENTO DISCULPE LAS MOLESTIAS - REINTENTE MA\u00D1ANA S\u00C1BADO POR LA TARDE----");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Gr\u00E1ficos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mis Pedidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mis Cobros");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mis Clientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.appUser.name);
} }
function MatNavbarComponent_mat_toolbar_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Administrar Clientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Administrar Productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Administrar Vendedores");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_h2_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "GENTECH - MAR DEL PLATA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MatNavbarComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatNavbarComponent_mat_toolbar_1_a_1_Template, 2, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatNavbarComponent_mat_toolbar_1_ng_template_3_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatNavbarComponent_mat_toolbar_1_a_5_Template, 2, 0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MatNavbarComponent_mat_toolbar_1_a_6_Template, 2, 0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MatNavbarComponent_mat_toolbar_1_a_7_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MatNavbarComponent_mat_toolbar_1_a_8_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MatNavbarComponent_mat_toolbar_1_button_10_Template, 4, 2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-menu", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, MatNavbarComponent_mat_toolbar_1_ng_container_13_Template, 7, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatNavbarComponent_mat_toolbar_1_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, MatNavbarComponent_mat_toolbar_1_h2_17_Template, 2, 0, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser != undefined && ctx_r1.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser != undefined && ctx_r1.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.appUser);
} }
class MatNavbarComponent {
    constructor(auth, ordersService, router, sellersService) {
        this.auth = auth;
        this.ordersService = ordersService;
        this.router = router;
        this.sellersService = sellersService;
        this.production = true;
    }
    logout() {
        //this.router.navigateByUrl('/checkout');
        this.ordersService.clearOrder();
        this.auth.logout();
        this.router.navigate(['/checkout/']);
    }
    getTotalItems() {
        // let order = this.ordersService.getOrder();
        // return 0;
    }
    ngOnInit() {
        this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            if (appUser) {
                this.ordersService.appUser = this.appUser;
                this.sellersService.getAll().subscribe(sellers => {
                    this.sellers = sellers;
                    let create = true;
                    for (let i = 0; i < this.sellers.length; i++) {
                        if (this.sellers[i].payload.val().name == this.appUser.name)
                            create = false;
                    }
                    if (create) {
                        this.sellersService.create({
                            "address": "",
                            "cuil": "",
                            "name": appUser.name,
                            "phone": ""
                        });
                    }
                });
            }
        });
    }
}
MatNavbarComponent.ɵfac = function MatNavbarComponent_Factory(t) { return new (t || MatNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sellers_service__WEBPACK_IMPORTED_MODULE_2__.SellersService)); };
MatNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatNavbarComponent, selectors: [["mat-navbar"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["color", "primary", 4, "ngIf"], ["color", "primary"], ["mat-button", "", "routerLink", "/dashboard", 4, "ngIf"], [1, "spacer"], ["anonymousUser", ""], ["mat-button", "", "routerLink", "orders/orders", 4, "ngIf"], ["mat-button", "", "routerLink", "payments/payments", 4, "ngIf"], ["mat-button", "", "routerLink", "client/client", 4, "ngIf"], ["mat-button", "", "routerLink", "stock/stock", 4, "ngIf"], ["mat-menu-item", ""], ["mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf", "ngIfElse"], ["appMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["fxHide.lt-md", ""], ["style", "margin-left: 300px;", 4, "ngIf"], ["mat-button", "", "routerLink", "/dashboard"], ["mat-button", "", "routerLink", "/login"], ["mat-button", "", "routerLink", "orders/orders"], ["mat-button", "", "routerLink", "payments/payments"], ["mat-button", "", "routerLink", "client/client"], ["mat-button", "", "routerLink", "stock/stock"], ["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "routerLink", "/admin/clients"], ["mat-menu-item", "", "routerLink", "/admin/prods"], ["mat-menu-item", "", "routerLink", "/admin/sellers"], [2, "margin-left", "300px"]], template: function MatNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatNavbarComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatNavbarComponent_mat_toolbar_1_Template, 18, 9, "mat-toolbar", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.production);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.production);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon], encapsulation: 2 });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/clients.service */ 79012);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products/product-filter/product-filter.component */ 69931);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 11494);




















function OrderComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", client_r14.payload.val().fantasyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", client_r14.payload.val().fantasyName, " ");
} }
function OrderComponent_mat_radio_group_34_mat_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const iva_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", iva_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", iva_r16, "% ");
} }
function OrderComponent_mat_radio_group_34_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-radio-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrderComponent_mat_radio_group_34_Template_mat_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.iva = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, OrderComponent_mat_radio_group_34_mat_radio_button_1_Template, 2, 2, "mat-radio-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.iva);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.ivas);
} }
function OrderComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Gimnasios y VP 0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Especifique el cliente para operar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Haga el pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*No hay stock suficiente de al menos uno de los productos seleccionados");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "----------PRIMERO SELECCIONE EL CLIENTE PARA COMENZAR A OPERAR----------");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_table_40_tr_18_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Aplicar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_table_40_tr_18_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderComponent_table_40_tr_18_button_24_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const p_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.discount($event, p_r20, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Anular");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_table_40_tr_18_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0\u00A0Descuento: ", p_r20.discount, "%");
} }
function OrderComponent_table_40_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderComponent_table_40_tr_18_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const p_r20 = restoredCtx.$implicit; const i_r21 = restoredCtx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r30.updateOrderItemQuantity(p_r20, -1, i_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderComponent_table_40_tr_18_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const p_r20 = restoredCtx.$implicit; const i_r21 = restoredCtx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r32.updateOrderItemQuantity(p_r20, 1, i_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "form", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function OrderComponent_table_40_tr_18_Template_form_submit_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const p_r20 = restoredCtx.$implicit; const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r33.discount($event, p_r20, +_r22.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, OrderComponent_table_40_tr_18_button_23_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, OrderComponent_table_40_tr_18_button_24_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, OrderComponent_table_40_tr_18_span_25_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", p_r20.product.title, "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](p_r20.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r19.getStock(p_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 9, p_r20.discountPrice, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 12, p_r20.discountPrice * p_r20.quantity, "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", p_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.order.length > ctx_r19.orderIndex && p_r20.discount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.order.length > ctx_r19.orderIndex && p_r20.discount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.order.length > ctx_r19.orderIndex && p_r20.discount != 0);
} }
function OrderComponent_table_40_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function OrderComponent_table_40_Template_table_matSortChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u00A0\u00A0\u00A0Quitar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u00A0Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u00A0Descuento(%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, OrderComponent_table_40_tr_18_Template, 26, 15, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "UNIDADES TOTALES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "IMPORTE TOTAL(incluye el IVA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Precio unitario ", ctx_r9.getClientCategory(), "\u00A0s/iva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.showedProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r9.quantity, "\u00A0 Unidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](28, 4, ctx_r9.ordersService.getTotalAmount(ctx_r9.orderProducts) * (1 + ctx_r9.iva / 100), "1.1-1"), "");
} }
function OrderComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Especifique el cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Haga el pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*No hay stock suficiente de al menos uno de los productos seleccionados");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0*Gimnasios y Pvp 0% IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class OrderComponent {
    constructor(productService, route, ordersService, clientsService, auth, router) {
        this.productService = productService;
        this.route = route;
        this.ordersService = ordersService;
        this.clientsService = clientsService;
        this.auth = auth;
        this.router = router;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false);
        this.clientFantasyName = "";
        this.clients = [];
        this.orderProducts = [];
        this.order = [];
        this.disc = 0;
        this.iva = 21;
        this.ivas = [0, 10.5, 21];
        this.quantity = 0;
        this.client = true;
        this.orderEmpty = false;
        this.aproved = true;
        this.negative = false;
        this.noStock = false;
        this.query = { client: "", seller: "", date: "", dateRange: { start: new Date(2017, 1, 1), end: new Date(2040, 1, 1) } };
        //this.order = this.ordersService.getOrder();
    }
    ngOnInit() {
        this.ordersService.getOrderNumber().subscribe(orderNumber => {
            if (!orderNumber)
                this.ordersService.createOrderNumber();
            this.ordersService.orderNumber = orderNumber;
        });
        this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.orderIndex = 0;
            this.ordersService.getOrder().subscribe(order => {
                this.order = order;
                if (this.order.length == 0)
                    this.ordersService.createOrderEmpty();
                this.orderIndex = -1;
                for (let i = 0; i < this.order.length; i++) {
                    if (this.appUser && this.order[i].payload.val().sellerName == this.appUser.name) {
                        this.orderIndex = i;
                        this.orderProducts = this.order[this.orderIndex].payload.val().products;
                        break;
                    }
                }
                if (this.appUser && this.orderIndex == -1) {
                    this.ordersService.createOrderEmpty();
                }
                this.clientsService.getAll().subscribe(clients => {
                    this.filteredClients = clients;
                    this.clients = [];
                    for (let i = 0; i < this.filteredClients.length; i++) {
                        if (this.filteredClients[i].payload.val().designatedSeller == this.appUser.name || this.appUser.isAdmin == true) {
                            this.clients.push(this.filteredClients[i]);
                        }
                    }
                    this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(value => value ? this._filter(value) : this._filter("")));
                });
                this.route.queryParamMap.subscribe(params => {
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
                    this.filter(this.prodQuery);
                    if (!this.prodsCategory)
                        this.showedProducts = this.orderProducts;
                });
            });
        });
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
    getClientCategory() {
        return this.ordersService.getClientCategory(this.clientFantasyName);
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
        return 0;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        if (!this.clients)
            return;
        let listFiltrada = this.clients.filter(client => client.payload.val().fantasyName.toLowerCase().includes(filterValue));
        return listFiltrada;
    }
    filter(prodQuery) {
        this.prodQuery = prodQuery;
        if (prodQuery == '') {
            this.showedProducts = this.filteredOrder;
            return;
        }
        this.showedProducts = (prodQuery) ?
            this.showedProducts.filter((p) => p.product.title.toLowerCase().includes(prodQuery.toLowerCase())) :
            this.showedProducts;
    }
    updateOrderItemQuantity(product, change, index) {
        for (let i = 0; i < this.orderProducts.length; i++) {
            if (product.product.title == this.orderProducts[i].product.title) {
                if (this.orderProducts[i].quantity + change < 0)
                    return;
                if (this.orderProducts[i].quantity + change > this.ordersService.getStock(product)) {
                    this.noStock = true;
                    setTimeout(() => {
                        this.noStock = false;
                    }, 1600);
                    return;
                }
                this.orderProducts[i].quantity += change;
                break;
            }
        }
        this.quantity += change;
    }
    createOrder() {
        if (!this.ordersService.isStock(this.order[this.orderIndex], this.orderProducts)) {
            this.noStock = true;
            setTimeout(() => {
                this.noStock = false;
            }, 1600);
            return;
        }
        this.orderEmpty = true;
        for (let i = 0; i < this.orderProducts.length; i++) {
            if (this.orderProducts[i].quantity != 0) {
                this.orderEmpty = false;
            }
        }
        if (this.orderEmpty)
            return;
        if (this.clientFantasyName == "") {
            this.client = false;
            setTimeout(() => {
                this.client = true;
            }, 900);
            return;
        }
        let clientOk = false;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clientFantasyName == this.clients[i].payload.val().fantasyName)
                clientOk = true;
        }
        if (clientOk) {
            if (confirm('Está segur@ que quiere crear el pedido? No podrá modificarlo')) {
                this.ordersService.createOrder(this.order[this.orderIndex].payload.val().sellerName, this.clientFantasyName, this.iva, this.orderProducts, this.quantity);
                this.clientFantasyName = "";
                this.router.navigateByUrl('/orders/orders');
                this.ordersService.resetOrder(this.orderIndex);
            }
            return;
        }
        confirm('El cliente es incorrecto');
    }
    reset() {
        if (confirm('Está segur@ que quiere anular el pedido que no ha creado?')) {
            for (let i = 0; i < this.orderProducts.length; i++) {
                this.orderProducts[i].quantity = 0;
            }
            this.ordersService.resetOrder(this.orderIndex);
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
        let clientCategory = this.getClientCategory();
        let price;
        let products = [];
        if (!this.orderProducts)
            return;
        for (let i = 0; i < this.orderProducts.length; i++) {
            switch (clientCategory) {
                case "":
                    this.orderProducts[i].price = this.orderProducts[i].product.discPrice1;
                    this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice1 * (1 - this.orderProducts[i].discount / 100);
                    break;
                case "Distribuidor":
                    this.orderProducts[i].price = this.orderProducts[i].product.discPrice1;
                    this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice1 * (1 - this.orderProducts[i].discount / 100);
                    break;
                case "Comercio":
                    this.orderProducts[i].price = this.orderProducts[i].product.discPrice2;
                    this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice2 * (1 - this.orderProducts[i].discount / 100);
                    break;
                case "Pvp":
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
        if (this.clientFantasyName != "")
            this.router.navigateByUrl('/orders/order');
    }
    ngOnDestroy() {
        this.ordersService.clearOrder();
    }
    getStock(product) {
        return this.ordersService.getStock(product);
    }
    unloadHandler(event) {
        this.ordersService.clearOrder();
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
OrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["order"]], hostBindings: function OrderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("beforeunload", function OrderComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, decls: 50, vars: 17, consts: [["fxLayout.xs-sm", "column"], ["id", "productsList"], [1, "example-form", 2, "margin-bottom", "20px", "margin-top", "20px", "margin-left", "-10px"], ["appearance", "fill", 1, "example-full-width"], ["type", "text", "placeholder", "Elija uno", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete", "ngModel", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "margin-bottom", "20px", "margin-top", "20px"], ["fxLayout", "row"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "Buscar producto...", 3, "keyup"], ["prodQuery", ""], ["mat-raised-button", "", "color", "basic", 1, "left-btn", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "left-btn", 3, "click"], ["id", "example-radio-group-label", 2, "margin", "5px"], ["aria-labelledby", "example-radio-group-label", "class", "example-radio-group", 3, "ngModel", "ngModelChange", 4, "ngIf"], [4, "ngIf"], ["matSort", "", 3, "matSortChange", 4, "ngIf"], [2, "margin-bottom", "20px", "margin-top", "20px"], [3, "value"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["style", "margin:5px", "class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 2, "margin", "5px", 3, "value"], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "title"], ["id", "quantity", "mat-sort-header", "quantity"], ["mat-sort-header", "stock"], ["mat-sort-header", "unitPrice"], ["mat-sort-header", "totalPriceProduct"], ["mat-sort-header", "quit"], ["mat-sort-header", "add"], ["mat-sort-header", "discount"], [4, "ngFor", "ngForOf"], ["mat-sort-header", "total"], ["mat-sort-header", "showTotalQuantity"], ["mat-sort-header", "totalPrice"], ["mat-sort-header", "showTotal"], ["id", "form", 3, "submit"], ["type", "number", 3, "value"], ["disc", ""], ["type", "submit", 4, "ngIf"], [3, "click", 4, "ngIf"], ["type", "submit"], [3, "click"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "PEDIDO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "IMPORTANTE: siempre antes de usar la app asegurate de actualizar la p\u00E1gina, con F5 en la PC o presionando y deslizando el dedo hacia abajo en el celu. Gracias!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_input_ngModelChange_10_listener($event) { return ctx.clientFantasyName = $event; })("ngModelChange", function OrderComponent_Template_input_ngModelChange_10_listener() { return ctx.updatePrices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, OrderComponent_mat_option_13_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "product-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function OrderComponent_Template_input_keyup_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24); return ctx.filter(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_26_listener() { return ctx.createOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Crear Pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_28_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Anular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "IVA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, OrderComponent_mat_radio_group_34_Template, 2, 2, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, OrderComponent_span_35_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, OrderComponent_span_36_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, OrderComponent_span_37_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, OrderComponent_span_38_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, OrderComponent_span_39_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, OrderComponent_table_40_Template, 29, 7, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_42_listener() { return ctx.createOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Crear Pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_44_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Anular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, OrderComponent_span_46_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, OrderComponent_span_47_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, OrderComponent_span_48_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, OrderComponent_span_49_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0)("ngModel", ctx.clientFantasyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 15, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getClientCategory() != "Gimnasio" && ctx.getClientCategory() != "Pvp");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getClientCategory() == "Gimnasio" || ctx.getClientCategory() == "Pvp");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.orderEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.noStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getClientCategory() == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getClientCategory() != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.orderEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.noStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getClientCategory() == "Gimnasio" && ctx.getClientCategory() == "Gimnasio");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_4__.ProductFilterComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/clients.service */ 79012);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/stock.service */ 83188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);























function OrdersComponent_div_0_div_11_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 3, order_r20.date, "dd/MM/yyyy HH:mm"), "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", order_r20.clientFantasyName, "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r20.order.sellerName);
} }
function OrdersComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "PEDIDOS SIN APROBAR: \u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-expansion-panel", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, OrdersComponent_div_0_div_11_tr_19_Template, 8, 6, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matBadge", ctx_r1.ordersNotAproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.notAprovedOrders);
} }
function OrdersComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrdersComponent_div_0_div_22_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r23.sellerValue = $event; })("keyup", function OrdersComponent_div_0_div_22_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r25.filterBySeller(_r22.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.sellerValue);
} }
function OrdersComponent_div_0_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00BFaprobado?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00BFenv?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Debe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Desc?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Deudor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nro. Fact");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_75_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", order_r26.payload.val().clientFantasyName, "\u00A0\u00A0");
} }
function OrdersComponent_div_0_tr_75_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", order_r26.payload.val().order.sellerName, "\u00A0\u00A0");
} }
function OrdersComponent_div_0_tr_75_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, order_r26.payload.val().date, "dd/MM/yyyy HH:mm"), "\u00A0\u00A0\u00A0\u00A0");
} }
function OrdersComponent_div_0_tr_75_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, order_r26.payload.val().amount, "1.1-1"), "");
} }
function OrdersComponent_div_0_tr_75_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", order_r26.payload.val().iva, "%");
} }
function OrdersComponent_div_0_tr_75_td_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "SI");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_75_td_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_75_td_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersComponent_div_0_tr_75_td_6_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52); const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r50.aprove(order_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "aprobar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", order_r26.payload.val().aproved);
} }
function OrdersComponent_div_0_tr_75_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrdersComponent_div_0_tr_75_td_6_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrdersComponent_div_0_tr_75_td_6_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, OrdersComponent_div_0_tr_75_td_6_button_4_Template, 2, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r26.payload.val().aproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !order_r26.payload.val().aproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r33.appUser != undefined && ctx_r33.appUser.isAdmin);
} }
function OrdersComponent_div_0_tr_75_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-checkbox", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrdersComponent_div_0_tr_75_td_7_Template_mat_checkbox_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57); const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return order_r26.payload.val().sended = $event; })("ngModelChange", function OrdersComponent_div_0_tr_75_td_7_Template_mat_checkbox_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57); const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r58.updateSendedStatus(order_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", order_r26.payload.val().sended)("disabled", false);
} }
function OrdersComponent_div_0_tr_75_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, order_r26.payload.val().debt, "1.1-1"), "\u00A0\u00A0");
} }
function OrdersComponent_div_0_tr_75_td_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_75_td_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "SI");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_75_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrdersComponent_div_0_tr_75_td_9_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrdersComponent_div_0_tr_75_td_9_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !order_r26.payload.val().hasDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r26.payload.val().hasDiscount);
} }
function OrdersComponent_div_0_tr_75_td_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_75_td_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "SI");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_75_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrdersComponent_div_0_tr_75_td_10_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrdersComponent_div_0_tr_75_td_10_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !order_r26.payload.val().clientInDebt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r26.payload.val().clientInDebt);
} }
function OrdersComponent_div_0_tr_75_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", order_r26.payload.val().orderNumber, "\u00A0");
} }
function OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r70.quantity, "\u00A0\u00A0");
} }
function OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r70.product.title, "\u00A0\u00A0\u00A0\u00A0");
} }
function OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, item_r70.discountPrice, "1.1-1"), "");
} }
function OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, item_r70.discountPrice * item_r70.quantity, "1.1-1"), "");
} }
function OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_td_1_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_td_2_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_td_3_Template, 3, 4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_td_4_Template, 3, 4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r70.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r70.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r70.quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r70.quantity != 0);
} }
function OrdersComponent_div_0_tr_75_mat_accordion_13_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-expansion-panel", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("opened", function OrdersComponent_div_0_tr_75_mat_accordion_13_Template_mat_expansion_panel_opened_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r80.isExpanded = true; })("closed", function OrdersComponent_div_0_tr_75_mat_accordion_13_Template_mat_expansion_panel_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r82.isExpanded = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Importe/unid s/iva");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Importe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, OrdersComponent_div_0_tr_75_mat_accordion_13_tr_15_Template, 5, 4, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Total s/iva:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", order_r26.payload.val().order.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](21, 2, ctx_r39.ordersService.getTotalAmount(order_r26.payload.val().order.products), "1.1-1"), "");
} }
function OrdersComponent_div_0_tr_75_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersComponent_div_0_tr_75_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86); const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r84.remove(order_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_75_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersComponent_div_0_tr_75_td_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r89); const order_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r87.cleanDebt(order_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_0_tr_75_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrdersComponent_div_0_tr_75_td_1_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrdersComponent_div_0_tr_75_td_2_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OrdersComponent_div_0_tr_75_td_3_Template, 3, 4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, OrdersComponent_div_0_tr_75_td_4_Template, 3, 4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, OrdersComponent_div_0_tr_75_td_5_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, OrdersComponent_div_0_tr_75_td_6_Template, 5, 3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, OrdersComponent_div_0_tr_75_td_7_Template, 3, 2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, OrdersComponent_div_0_tr_75_td_8_Template, 3, 4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, OrdersComponent_div_0_tr_75_td_9_Template, 4, 2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, OrdersComponent_div_0_tr_75_td_10_Template, 4, 2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, OrdersComponent_div_0_tr_75_td_11_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, OrdersComponent_div_0_tr_75_mat_accordion_13_Template, 22, 5, "mat-accordion", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersComponent_div_0_tr_75_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r91); const order_r26 = restoredCtx.$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r90.exportAsPDF(order_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, OrdersComponent_div_0_tr_75_td_18_Template, 4, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, OrdersComponent_div_0_tr_75_td_19_Template, 4, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r26 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.isExpanded && order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.isExpanded && order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.isExpanded && order_r26.payload.val().order.orderItemsCount != 0 && ctx_r18.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.isExpanded && order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.isExpanded && order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.isExpanded && order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.isExpanded && order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", order_r26.payload.val().order.orderItemsCount != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.appUser.isAdmin && order_r26.payload.val().debt != 0);
} }
const _c0 = function () { return [10, 20, 30]; };
function OrdersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "MIS PEDIDOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Crear Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, OrdersComponent_div_0_div_11_Template, 20, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrdersComponent_div_0_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r92.clientValue = $event; })("ngModelChange", function OrdersComponent_div_0_Template_input_ngModelChange_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r93); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r94.filter(_r2.value); })("keyup", function OrdersComponent_div_0_Template_input_keyup_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r93); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r95.filter(_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, OrdersComponent_div_0_div_22_Template, 7, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrdersComponent_div_0_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r93); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r96.dateValue = $event; })("keyup", function OrdersComponent_div_0_Template_input_keyup_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r93); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r97.filterByDate(_r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "form", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function OrdersComponent_div_0_Template_form_ngSubmit_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r93); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r98.searchDateRange(ctx_r98.range.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Ingrese un rango de fechas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-date-range-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "mat-datepicker-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "mat-date-range-picker", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, OrdersComponent_div_0_mat_error_42_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, OrdersComponent_div_0_mat_error_43_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "buscar por rango");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "button", 25, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersComponent_div_0_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r93); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r99.clearRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "borrar b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, OrdersComponent_div_0_th_56_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " Importe c/iva");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, OrdersComponent_div_0_th_61_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, OrdersComponent_div_0_th_62_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, OrdersComponent_div_0_th_63_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, OrdersComponent_div_0_th_64_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, OrdersComponent_div_0_th_65_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, OrdersComponent_div_0_th_66_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, OrdersComponent_div_0_th_71_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Limpiar Deuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, OrdersComponent_div_0_tr_75_Template, 20, 14, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](81, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "mat-paginator", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function OrdersComponent_div_0_Template_mat_paginator_page_82_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r93); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r100.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.ordersNotAproved > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.clientValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.range)("rangePicker", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.end.hasError("matEndDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded && ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.currentItemsToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](81, 22, ctx_r0.getTotal(), "1.1-1"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx_r0.filteredOrders.length)("pageSize", 20)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](25, _c0));
} }
class OrdersComponent {
    constructor(ordersService, productService, route, clientsService, auth, datepipe, stockService, dateAdapter) {
        this.ordersService = ordersService;
        this.productService = productService;
        this.route = route;
        this.clientsService = clientsService;
        this.auth = auth;
        this.datepipe = datepipe;
        this.stockService = stockService;
        this.dateAdapter = dateAdapter;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        });
        this.userOrders = [];
        this.titles = [];
        this.ordersNotAproved = 0;
        this.notAprovedOrders = [];
        this.aproved = ["NO", "SI"];
        this.selected = "NO";
        this.query = { client: "", seller: "", date: "", dateRange: { start: new Date(2017, 1, 1), end: new Date(2040, 1, 1) } };
        this.aproveFirst = false;
        this.isExpanded = false;
        this.changeCheckbox = false;
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }
    ngOnInit() {
        this.filter("");
        this.subscription = this.ordersService.getAll().subscribe(orders => {
            this.auth.appUser$.subscribe(appUser => {
                this.appUser = appUser;
                this.orders = orders;
                this.userOrders = [];
                for (let i = 0; i < this.orders.length; i++) {
                    if (this.appUser && (this.appUser.isAdmin || this.orders[i].payload.val().order.sellerName == this.appUser.name)) {
                        this.userOrders.push(this.orders[i]);
                        if (this.orders[i].payload.val().aproved == false) {
                            this.notAprovedOrders.push(this.orders[i].payload.val());
                            this.ordersNotAproved += 1;
                        }
                    }
                }
                this.dateRangefilteredOrders = this.datefilteredOrders = this.filteredOrders = this.userOrders;
                //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length})
                //genera el string para la fecha de HOY
                let today = new Date().getDate().toString();
                let mon = new Date().getMonth() + 1;
                let year = new Date().getFullYear();
                let month = mon.toString();
                if (mon < 10) {
                    month = "0" + mon.toString();
                }
                // this.filterByDate(today + "/" + month); //se abre con los pedidos de hoy
                this.dateValue = today + "/" + month + "/" + year;
                this.filterByDate(this.dateValue); //se abre con los pedidos de hoy
                //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length})
                if (this.ordersService.clientFantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
                    this.dateValue = "";
                    this.clientValue = this.ordersService.clientFantasyName; // idem
                    this.filter(this.ordersService.clientFantasyName); // idem
                    this.ordersService.clientFantasyName = ""; // idem
                    this.filterByDate("");
                }
            });
        });
        //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length})
        this.clientsService.getAll().subscribe(clients => {
            this.clients = clients;
        });
    }
    filter(query) {
        var _a;
        this.query.client = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())
                && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date)))
                this.filteredOrders.push(this.orders[i]);
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    filterBySeller(query) {
        var _a;
        this.query.seller = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(query.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date))) {
                this.filteredOrders.push(this.userOrders[i]);
            }
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    filterByDate(query) {
        var _a;
        this.query.date = query;
        this.filteredOrders = [];
        for (let i = 0; i < this.userOrders.length; i++) {
            if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
                && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(query)))
                this.filteredOrders.push(this.userOrders[i]);
        }
        this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    searchDateRange(range) {
        var _a;
        if (range.start) {
            this.filteredOrders = [];
            for (let i = 0; i < this.userOrders.length; i++) {
                if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(this.query.client.toLowerCase())
                    && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
                    && ((_a = this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(this.query.date)))
                    this.filteredOrders.push(this.userOrders[i]);
            }
            this.filteredOrders = (range) ?
                this.filteredOrders.filter(p => p.payload.val().date > Date.parse(range.start._d) && p.payload.val().date < Date.parse(range.end._d)) :
                this.filteredOrders;
        }
        this.query.dateRange.start = new Date(Date.parse(range.start._d));
        this.query.dateRange.end = new Date(Date.parse(range.end._d));
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length });
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
                total += this.ordersService.getTotalAmount(order.payload.val().order.products);
            });
        }
        return total;
    }
    // removeOrder(orderId: any) {
    //   this.ordersService.removeOrder(orderId);
    // }
    aprove(order) {
        if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
            this.stockService.aprove(order);
            this.ordersService.aprove(order);
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
        this.filteredOrders = this.userOrders;
        this.onPageChange({ previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length });
        if (this.paginator)
            this.paginator.pageIndex = 0;
    }
    isOrderInDebt(order) {
        return this.ordersService.isOrderInDebt(order);
    }
    exportAsPDF(order) {
        if (confirm('Descargar PDF')) {
            let myDate = new Date(order.payload.val().date);
            var dd = String(myDate.getDate()).padStart(2, '0');
            var mm = String(myDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = myDate.getFullYear();
            let date = dd + '/' + mm + '/' + yyyy;
            const line1 = 30;
            const line2 = line1 + 10;
            const line3 = line2 + 10;
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF();
            doc.setFontSize(10);
            doc.text('GENTECH MAR DEL PLATA', 10, 20);
            doc.text('FECHA DEL PEDIDO: ' + date, 80, 20);
            doc.text('FACT Nº: ' + order.payload.val().orderNumber, 170, 20);
            doc.text('CLIENTE: ' + order.payload.val().clientFantasyName, 10, line1);
            doc.text('VENDEDOR: ' + order.payload.val().order.sellerName, 80, line1);
            doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, line1 + 5);
            doc.text('Cantidad', 10, line2);
            doc.text('Producto', 30, line2);
            let posX = 0;
            if (this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "PVP") {
                doc.text('Importe+iva', 185, line2);
            }
            else {
                posX = 30;
            }
            doc.text('Importe/uni', 125 + posX, line2);
            doc.text('Importe', 155 + posX, line2);
            let cont = 0;
            for (let i = 0; i < order.payload.val().order.products.length; i++) {
                if (order.payload.val().order.products[i].quantity != 0) {
                    let total = order.payload.val().order.products[i].discountPrice * order.payload.val().order.products[i].quantity;
                    doc.text(order.payload.val().order.products[i].quantity.toString(), 10, line3 + 10 * cont);
                    doc.text(order.payload.val().order.products[i].product.title, 30, line3 + 10 * cont);
                    posX = 0;
                    if (this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "PVP") {
                        doc.text("$" + (total * (1 + order.payload.val().iva / 100)).toFixed(1), 185, line3 + 10 * cont);
                    }
                    else {
                        posX = 30;
                    }
                    doc.text("$" + order.payload.val().order.products[i].discountPrice.toFixed(1), 125 + posX, line3 + 10 * cont);
                    doc.text("$" + total.toFixed(1), 155 + posX, line3 + 10 * cont);
                    cont += 1;
                }
            }
            let footerVertPos = line3 + 10 * cont + 10;
            doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, footerVertPos - 5);
            if (this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "PVP") {
                doc.text("TOTAL CON IVA " + order.payload.val().iva + "%       $" + (this.ordersService.getTotalAmount(order.payload.val().order.products) * (1 + order.payload.val().iva / 100)).toFixed(1), 10, footerVertPos);
            }
            else
                doc.text("TOTAL $" + (this.ordersService.getTotalAmount(order.payload.val().order.products) * (1 + order.payload.val().iva / 100)).toFixed(1), 10, footerVertPos);
            // Save the PDF
            doc.save('order.pdf');
        }
    }
    updateSendedStatus(order) {
        this.ordersService.updateSendedStatus(order);
    }
    remove(order) {
        if (confirm('Está segur@ que quiere eliminar este pedido? Se restará el monto del pedido a la deuda del cliente')) {
            //this.clientsService.addPaymentAmount(order.payload.val().clientFantasyName, order.payload.val().debt)
            this.ordersService.removeOrder(order);
        }
    }
    cleanDebt(order) {
        if (confirm('Está segur@ que quiere eliminar la DEUDA de este pedido? no modificará la deuda del cliente')) {
            this.ordersService.cleanDebt(order);
        }
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_3__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_5__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.DateAdapter)); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["orders"]], viewQuery: function OrdersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "SCContainer", 4, "ngIf"], [1, "SCContainer"], ["fxLayoutAlign", "start center", "fxLayout", "row", "fxLayout.lt-md", "column"], [2, "margin-top", "15px", "margin-left", "40px", "margin-right", "40px"], ["mat-icon-button", "", "routerLink", "/orders/order"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-around center", "style", "margin-left:40px;", 4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "center", 2, "margin", "15px"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxLayout", "row"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "por cliente...", 3, "ngModel", "ngModelChange", "keyup"], ["query", ""], ["fxLayout", "row", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "por fecha...", 3, "ngModel", "ngModelChange", "keyup"], ["Datequery", ""], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "fecha inicio"], ["matEndDate", "", "formControlName", "end", "placeholder", "fecha finalizaci\u00F3n"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 2, "margin", "20px"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "table", "table-striped", "table-sm", "mat-elevation-z8"], [4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-around center", 2, "margin-left", "40px"], [2, "display", "inline", "margin", "10px"], ["matBadgeSize", "large", 3, "matBadge"], [2, "margin-right", "50px"], ["hideToggle", ""], ["matInput", "", "type", "text", "placeholder", "por vendedor...", 3, "ngModel", "ngModelChange", "keyup"], ["sellerquery", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], [3, "disabled", "click", 4, "ngIf"], [3, "disabled", "click"], [1, "example-section"], [3, "ngModel", "disabled", "ngModelChange"], ["hideToggle", "", 3, "opened", "closed"], ["mat-icon-button", "", "color", "accent", 3, "click"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, OrdersComponent_div_0_Template, 83, 26, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangePicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadge, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCwgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDElO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/payments.service */ 31386);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category.service */ 54655);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/clients.service */ 79012);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/orders.service */ 12331);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-validation */ 51665);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 5015);

















function PaymentComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "El monto es obligatorio, use punto en vez de coma");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PaymentComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", c_r11.payload.val().fantasyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", c_r11.payload.val().fantasyName, " ");
} }
function PaymentComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "El cliente es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PaymentComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", order_r12.payload.val().orderNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", order_r12.payload.val().orderNumber, " ");
} }
function PaymentComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", p_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", p_r13.name, " ");
} }
function PaymentComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "El Modo de pago es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class PaymentComponent {
    constructor(router, route, auth, paymentsService, categoryService, clientsService, ordersService) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.paymentsService = paymentsService;
        this.categoryService = categoryService;
        this.clientsService = clientsService;
        this.ordersService = ordersService;
        this.payment = {};
        this.filteredClients = [];
        this.orders = [];
        this.filteredOrders = [];
        this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            ordersService.getAll().subscribe(orders => {
                this.orders = this.filteredOrders = orders;
            });
            clientsService.getAll().subscribe(clients => {
                this.clients = clients;
                for (let i = 0; i < this.clients.length; i++) {
                    if (appUser.isAdmin || this.clients[i].payload.val().designatedSeller == appUser.name) {
                        this.filteredClients.push(this.clients[i]);
                    }
                }
            });
            categoryService.getAllPaysCategories().subscribe(payWays => {
                this.payWays = payWays;
            });
        });
    }
    save(payment) {
        if (confirm('Está segur@ que quiere guardar este cobro?')) {
            payment.sellerName = this.appUser.name;
            this.paymentsService.create(payment);
            this.router.navigate(['/payments/payments']);
        }
    }
    cancel() {
        this.router.navigate(['/payments/payments']);
    }
    ngOnInit() {
    }
    onChooseClient() {
        this.filteredOrders = [];
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].payload.val().clientFantasyName == this.payment.client)
                this.filteredOrders.push(this.orders[i]);
        }
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_payments_service__WEBPACK_IMPORTED_MODULE_2__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_4__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_5__.OrdersService)); };
PaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 46, vars: 12, consts: [["fxLayout", "row", "fxLayout.xs", "column"], ["fxFlex", "40%;", "fxFlex.xs", "80%", 1, "container-form"], [3, "ngSubmit"], ["f", "ngForm"], ["appearance", "legacy", 2, "margin-right", "5px"], ["matInput", "", "name", "amount", "placeholder", "", "required", "", 3, "ngModel", "min", "ngModelChange"], ["amount", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["appearance", "fill"], ["name", "client", "required", "", 3, "ngModel", "ngModelChange"], ["client", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 2, "margin-right", "5px"], ["name", "orderNumber", 3, "ngModel", "ngModelChange"], ["orderNumber", "ngModel"], ["name", "payWay", "required", "", 3, "ngModel", "ngModelChange"], ["payWay", "ngModel"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], [1, "alert", "alert-danger"], [3, "value"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Nuevo Cobro (El N\u00BA de factura asociado es opcional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function PaymentComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_10_listener($event) { return ctx.payment.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, PaymentComponent_div_14_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.payment.client = $event; })("ngModelChange", function PaymentComponent_Template_mat_select_ngModelChange_18_listener() { return ctx.onChooseClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, PaymentComponent_mat_option_20_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Seleccione el cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, PaymentComponent_div_23_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "N\u00BA de factura asociado");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_mat_select_ngModelChange_28_listener($event) { return ctx.payment.orderNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, PaymentComponent_mat_option_30_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Dato Opcional");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Modo de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-select", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_mat_select_ngModelChange_36_listener($event) { return ctx.payment.payWay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, PaymentComponent_mat_option_38_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Seleccione el modo de pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, PaymentComponent_div_41_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_44_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Descartar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.payment.amount)("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.payment.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredClients);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.payment.orderNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.payment.payWay);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.payWays);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ng2_validation__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/payments.service */ 31386);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stock.service */ 83188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/clients.service */ 79012);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 11494);



















function PaymentsComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Nota de Cr\u00E9dito");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_0_div_22_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r13.sellerValue = $event; })("keyup", function PaymentsComponent_div_0_div_22_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r15.filterBySeller(_r12.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.sellerValue);
} }
function PaymentsComponent_div_0_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_0_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_0_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_0_tr_67_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentsComponent_div_0_tr_67_td_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const pay_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r19.remove(pay_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PaymentsComponent_div_0_tr_67_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, PaymentsComponent_div_0_tr_67_td_14_Template, 4, 0, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pay_r16 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", pay_r16.payload.val().client, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", pay_r16.payload.val().amount, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", pay_r16.payload.val().payWay, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", pay_r16.payload.val().sellerName, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 7, pay_r16.payload.val().date, "dd/MM/yyyy HH:mm"), "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", pay_r16.payload.val().orderNumber, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.appUser.isAdmin);
} }
function PaymentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "MIS COBROS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Cargar Cobro");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PaymentsComponent_div_0_div_11_Template, 6, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_0_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.clientValue = $event; })("keyup", function PaymentsComponent_div_0_Template_input_keyup_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.filter(_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, PaymentsComponent_div_0_div_22_Template, 7, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_div_0_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.dateValue = $event; })("keyup", function PaymentsComponent_div_0_Template_input_keyup_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.filterByDate(_r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "form", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function PaymentsComponent_div_0_Template_form_ngSubmit_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.searchDateRange(ctx_r27.range.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Ingrese un rango de fechas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-date-range-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "mat-datepicker-toggle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "mat-date-range-picker", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, PaymentsComponent_div_0_mat_error_42_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, PaymentsComponent_div_0_mat_error_43_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "buscar por rango");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "button", 26, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentsComponent_div_0_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r28.clearRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "borrar b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function PaymentsComponent_div_0_Template_table_matSortChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Forma de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Nro. Fact");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, PaymentsComponent_div_0_th_65_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, PaymentsComponent_div_0_tr_67_Template, 15, 10, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.clientValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.dateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.range)("rangePicker", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.end.hasError("matEndDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.filteredPayments);
} }
class PaymentsComponent {
    constructor(paymentsService, productService, route, auth, datepipe, stockService, dateAdapter, clientsService, ordersService) {
        this.paymentsService = paymentsService;
        this.productService = productService;
        this.route = route;
        this.auth = auth;
        this.datepipe = datepipe;
        this.stockService = stockService;
        this.dateAdapter = dateAdapter;
        this.clientsService = clientsService;
        this.ordersService = ordersService;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        });
        this.userPayments = [];
        this.titles = [];
        this.aproved = ["NO", "SI"];
        this.selected = "NO";
        this.aproveFirst = false;
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }
    ngOnInit() {
        this.filter("");
        this.auth.appUser$.subscribe(appUser => {
            this.subscription = this.paymentsService.getAll().subscribe(payments => {
                this.appUser = appUser;
                this.payments = payments;
                this.userPayments = [];
                for (let i = 0; i < this.payments.length; i++) {
                    if (this.appUser && (this.appUser.isAdmin || this.payments[i].payload.val().sellerName == this.appUser.name)) {
                        this.userPayments.push(this.payments[i]);
                    }
                }
                this.dateRangefilteredPayments = this.datefilteredPayments = this.filteredPayments = this.userPayments;
                if (this.paymentsService.clientFantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
                    this.filter(this.paymentsService.clientFantasyName); // idem
                    this.clientValue = this.paymentsService.clientFantasyName; // idem
                    this.paymentsService.clientFantasyName = ""; // idem
                }
            });
        });
    }
    filter(query) {
        if (query && query != "") {
            this.filteredPayments = (query) ?
                this.userPayments.filter(p => p.payload.val().client.toLowerCase().includes(query.toLowerCase())) :
                [];
        }
        else
            this.filteredPayments = this.userPayments;
    }
    filterBySeller(query) {
        if (query != "") {
            this.filteredPayments = (query) ?
                this.userPayments.filter(p => p.payload.val().sellerName.toLowerCase().includes(query.toLowerCase())) :
                [];
        }
        else
            this.filteredPayments = this.userPayments;
    }
    filterByDate(query) {
        if (query != "") {
            this.filteredPayments = (query) ?
                this.userPayments.filter(p => { var _a; return (_a = this.datepipe.transform(p.payload.val().date, 'dd/MM/yyyy HH:mm')) === null || _a === void 0 ? void 0 : _a.includes(query); }) :
                [];
        }
        else
            this.filteredPayments = this.userPayments;
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
    getTitle(item) {
        return item.title;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    // getTotal() {
    //   let total = 0;
    //   if (this.filteredPayments) {
    //     this.filteredPayments.forEach(payment => {
    //       total += this.paymentsService.getTotalCost(payment);
    //     });
    //   }
    //   return total;
    // }
    removePayment(paymentId) {
        this.paymentsService.removePayment(paymentId);
    }
    aprove(payment) {
        if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
            this.stockService.aprove(payment);
            this.paymentsService.aprove(payment);
        }
    }
    searchDateRange(range) {
        if (range.start) {
            this.filteredPayments = (range) ?
                this.filteredPayments.filter(p => p.payload.val().date > Date.parse(range.start._d) && p.payload.val().date < Date.parse(range.end._d)) :
                this.filteredPayments;
        }
        else
            this.filteredPayments = this.userPayments;
    }
    clearRange() {
        this.range.setValue({
            start: null,
            end: null
        });
        this.clientValue = "";
        this.dateValue = "";
        this.filteredPayments = this.userPayments;
    }
    remove(pay) {
        if (confirm('Está segur@ que quiere eliminar este cobro?')) {
            if (pay.payload.val().orderNumber > 0)
                this.ordersService.restoreOrderAmount(pay);
            this.paymentsService.removePayment(pay.key);
            this.clientsService.addPaymentAmount(pay.payload.val().client, -1 * pay.payload.val().amount);
        }
    }
}
PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) { return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_payments_service__WEBPACK_IMPORTED_MODULE_0__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_3__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_4__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_5__.OrdersService)); };
PaymentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PaymentsComponent, selectors: [["app-payments"]], decls: 1, vars: 1, consts: [["class", "SCContainer", 4, "ngIf"], [1, "SCContainer"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "start center", 2, "margin", "10px"], [2, "display", "inline", "margin", "10px"], ["mat-icon-button", "", "routerLink", "/payments/payment", 2, "margin-left", "0px"], [4, "ngIf"], ["fxLayout.gt-sm", "row", "fxLayout.xs-sm", "column", "fxLayoutAlign.gt-sm", "start center"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxLayout", "row", 2, "margin", "20px"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "por cliente...", 3, "ngModel", "ngModelChange", "keyup"], ["query", ""], ["fxLayout", "row", "style", "min-width:130px;", 4, "ngIf"], ["fxLayout", "row"], ["matInput", "", "type", "text", "placeholder", "por fecha...", 3, "ngModel", "ngModelChange", "keyup"], ["Datequery", ""], ["fxLayout", "row", "fxLayoutAlign", "space-evenly center"], [2, "margin-left", "20px", 3, "ngSubmit"], ["f", "ngForm"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "fecha inicio"], ["matEndDate", "", "formControlName", "end", "placeholder", "fecha finalizaci\u00F3n"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-raised-button", "", "type", "submit", "color", "primary", 2, "margin", "20px"], ["mat-raised-button", "", "color", "accent", 2, "margin", "0px", 3, "click"], ["matSort", "", 1, "table", "table-striped", "table-sm", "mat-elevation-z8", 3, "matSortChange"], ["mat-sort-header", "client"], ["mat-sort-header", "amount"], ["mat-sort-header", "payWay"], ["mat-sort-header", "seller"], ["mat-sort-header", "date"], ["mat-sort-header", "orderNumber"], ["mat-sort-header", "delete", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", "routerLink", "/payments/creditNote", 2, "margin-left", "0px"], ["fxLayout", "row", 2, "min-width", "130px"], ["matInput", "", "type", "text", "placeholder", "por vendedor...", 3, "ngModel", "ngModelChange", "keyup"], ["sellerquery", ""], ["mat-sort-header", "delete"], ["mat-icon-button", "", "color", "accent", 3, "click"]], template: function PaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PaymentsComponent_div_0_Template, 68, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDateRangeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDateRangePicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ 86178);


class PieChartComponent {
    // public pieChartColors = [
    //   {
    //     backgroundColor: ['rgba(255,0,0)', 'rgba(0,255,0)', 'rgba(0,0,255)', 'rgba(0,255,255)', 'rgba(255,255,0)'],
    //   },
    // ];
    constructor() {
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
            for (let j = 0; j < orders[i].payload.val().order.products.length; j++) {
                if (!this.isCategoryIncluded(categories, orders[i].payload.val().order.products[j].product.prodsCategory)) {
                    categories.push(orders[i].payload.val().order.products[j].product.prodsCategory);
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
                for (let k = 0; k < orders[j].payload.val().order.products.length; k++) {
                    if (orders[j].payload.val().order.products[k].product.prodsCategory == categories[i]) {
                        amount += parseFloat(orders[j].payload.val().order.products[k].discountPrice);
                    }
                }
            }
            amounts.push(amount);
        }
        return amounts;
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(); };
PieChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-chart"]], inputs: { orders: "orders" }, decls: 4, vars: 5, consts: [[1, "chart"], ["baseChart", "", 3, "data", "labels", "chartType", "options", "legend"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("options", ctx.pieChartOptions)("legend", ctx.pieChartLegend);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWVDaGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 69931:
/*!*********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFilterComponent": () => (/* binding */ ProductFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/category.service */ 54655);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);






const _c0 = function (a0) { return { prodsCategory: a0 }; };
function ProductFilterComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, c_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r1.name);
} }
class ProductFilterComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.prodsCategories = categoryService.getAllProdsCategories();
    }
    ngOnInit() {
    }
}
ProductFilterComponent.ɵfac = function ProductFilterComponent_Factory(t) { return new (t || ProductFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService)); };
ProductFilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductFilterComponent, selectors: [["product-filter"]], decls: 6, vars: 3, consts: [[2, "margin", "5px", "margin-top", "-20px", "margin-left", "-20px"], ["fxLayout", "row", 2, "margin", "5px", "margin-left", "10px"], ["mat-raised-button", "", "routerLink", "./", "routerLinkActive", "mat-primary", 2, "max-width", "170px"], ["style", "max-width:120px", "mat-raised-button", "", "routerLink", "./", "color", "basic", "routerLinkActive", "mat-accent", 3, "queryParams", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "routerLink", "./", "color", "basic", "routerLinkActive", "mat-accent", 2, "max-width", "120px", 3, "queryParams"]], template: function ProductFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Todas las categorias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductFilterComponent_a_4_Template, 2, 4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.prodsCategories));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


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
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
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
        this.afAuth = afAuth;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user$ = afAuth.authState;
    }
    login() {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/checkout';
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
        location.reload();
        this.router.navigateByUrl('/checkout');
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
    getAllProdsCategories() {
        return this.db.list('categories').valueChanges();
    }
    getAllPaysCategories() {
        return this.db.list('payWay').valueChanges();
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
CategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 79012:
/*!*********************************************!*\
  !*** ./src/app/services/clients.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsService": () => (/* binding */ ClientsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 84134);


class ClientsService {
    constructor(db) {
        this.db = db;
        this.clientsPaginator = { "pageIndex": 0, "pageSize": 10 };
        this.getAll().subscribe(clients => { this.clients = clients; });
    }
    create(client) {
        client.debt = 0;
        return this.db.list('/clients').push(client);
    }
    getAll() {
        return this.db.list('/clients').snapshotChanges();
    }
    get(clientId) {
        return this.db.object('/clients/' + clientId).snapshotChanges();
    }
    update(clientId, client) {
        return this.db.object('/clients/' + clientId).update(client);
    }
    delete(clientId) {
        return this.db.object('/clients/' + clientId).remove();
    }
    addPaymentAmount(clientFantasyName, amount) {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].payload.val().fantasyName == clientFantasyName) {
                let debt = 0;
                if (this.clients[i].payload.val().debt)
                    debt = parseFloat(this.clients[i].payload.val().debt) - amount;
                else
                    debt = -amount;
                let client = { "debt": debt };
                this.update(this.clients[i].key, client);
                break;
            }
        }
    }
}
ClientsService.ɵfac = function ClientsService_Factory(t) { return new (t || ClientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
ClientsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientsService, factory: ClientsService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/take */ 82490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ 66082);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients.service */ 79012);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock.service */ 83188);








class OrdersService {
    constructor(db, productService, clientsService, auth, route, router, stockService) {
        this.db = db;
        this.productService = productService;
        this.clientsService = clientsService;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.stockService = stockService;
        this.hasDiscount = false;
        this.orderNumber = [];
        this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.filteredProducts = [];
            this.productService.getAll().subscribe(products => {
                this.filteredProducts = this.products = products;
                this.route.queryParamMap.subscribe(params => {
                    this.prodsCategory = params.get('prodsCategory');
                    if (this.products) {
                        this.filteredProducts = (this.prodsCategory) ?
                            this.products.filter((p) => p.payload.val().prodsCategory == this.prodsCategory) :
                            this.products;
                    }
                });
                this.getOrder().subscribe(order => {
                    if (!order)
                        this.createOrderEmpty(); // pruebo esto
                    this.order = order;
                    this.orderIndex = -1;
                    for (let i = 0; i < this.order.length; i++) {
                        if (this.order && this.appUser && this.order[i].payload.val().sellerName == this.appUser.name) {
                            this.orderIndex = i;
                            this.orderId = this.order[i].key;
                            break;
                        }
                    }
                });
            });
            this.clientsService.getAll().subscribe(clients => {
                this.clients = clients;
            });
            this.getAll().subscribe(orders => {
                this.orders = orders;
            });
        });
    }
    ngOnDestroy() {
        //this.resetOrder()
    }
    create() {
        let time = new Date().getTime();
        let result = this.db.list('/orders').push({
            "date": time,
            "aproved": "NO"
        });
        //this.orderId = result.key;
        return result;
    }
    isStock(order, products) {
        for (let i = 0; i < order.payload.val().products.length; i++) {
            if (products[i].quantity > 0 && !this.isProductStock(products[i])) {
                return false;
            }
        }
        return true;
    }
    isProductStock(product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].payload.val().title == product.product.title && this.products[i].payload.val().stock < product.quantity)
                return false;
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
            "sellerName": this.appUser.name,
            "products": products
        });
    }
    createOrderNumber() {
        let result = this.db.list('/orderNumber/').push({
            "orderNumber": 0
        });
    }
    updateOrder(key, order) {
        return this.db.object('/orders/' + key).update(order);
    }
    removeOrder(order) {
        this.db.object('/orders/' + order.key).remove();
        this.productService.restoreStock(order, this.products);
        this.clientsService.addPaymentAmount(order.payload.val().clientFantasyName, order.payload.val().debt);
    }
    resetOrder(orderIndex) {
        this.db.object('/order/' + this.order[orderIndex].key).remove();
    }
    clearOrder() {
        //this.db.object('/order/').remove(); elimina todo "order" de la base
        if (!this.order)
            return;
        for (let i = 0; i < this.order.length; i++) {
            if (this.order[i].payload.val().sellerName == this.appUser.name)
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
    getAll() {
        return this.db.list('/orders').snapshotChanges();
    }
    updateOrderItemQuantity(order, product, change, orderIndex) {
        if (order[orderIndex]) {
            this.db.object('/order/' + order[orderIndex].key).update({
                "orderItemsCount": order[orderIndex].payload.val().orderItemsCount + change
            });
        }
        for (let i = 0; i < this.products.length; i++) {
            if (product.productId == order[orderIndex].payload.val().products[i].productId) {
                this.db.object('/order/' + order[orderIndex].key + '/products/' + i).update({
                    "quantity": order[orderIndex].payload.val().products[i].quantity + change
                });
                break;
            }
        }
    }
    discount(order, product, discount, orderIndex) {
        let products = [];
        for (let i = 0; i < order[this.orderIndex].payload.val().products.length; i++) {
            if (product.productId == order[this.orderIndex].payload.val().products[i].productId) {
                this.db.object('/order/' + order[orderIndex].key + '/products/' + i).update({
                    "discountPrice": order[this.orderIndex].payload.val().products[i].price * (1 - discount / 100),
                    "discount": discount
                });
                break;
            }
        }
    }
    createOrder(sellerName, clientFantasyName, iva, products, quantity) {
        let prods = [];
        let clientCategory = this.getClientCategory(clientFantasyName);
        let amount = 0;
        for (let i = 0; i < products.length; i++) {
            if (products[i].discount != 0)
                this.hasDiscount = true;
            if (products[i].quantity != 0) { //solo guardo los prod con quant > 0
                prods.push({ "discountPrice": products[i].discountPrice, "quantity": products[i].quantity,
                    "product": { "title": products[i].product.title, "prodsCategory": products[i].product.prodsCategory } });
                amount += products[i].quantity * products[i].discountPrice * (1 + iva / 100);
            }
        }
        let time = new Date();
        time.getHours();
        //time.getMinutes();
        let debt = false;
        if (this.isClientInDebt(clientFantasyName)) {
            debt = true;
        }
        let isAproved = !debt && time.getHours() <= 20; //si los hacen despues de las 21 salen sin aprobacion
        let updatedDebt = amount;
        if (this.getClientDebt(clientFantasyName) < 0) {
            if (amount + this.getClientDebt(clientFantasyName) <= 0) {
                updatedDebt = 0;
            }
            else
                updatedDebt = amount + this.getClientDebt(clientFantasyName);
        }
        if (iva != 21)
            isAproved = false;
        let result = this.db.list('/orders/').push({
            "order": {
                "orderItemsCount": quantity,
                "products": prods,
                "sellerName": sellerName,
            },
            "date": time.getTime(),
            "iva": iva,
            "clientFantasyName": clientFantasyName,
            "aproved": isAproved,
            "amount": amount,
            "debt": updatedDebt,
            "hasDiscount": this.hasDiscount,
            "clientInDebt": debt,
            "orderNumber": this.orderNumber[0].payload.val().orderNumber,
            "sended": false
        });
        this.incrementOrderNumber();
        this.clientsService.addPaymentAmount(clientFantasyName, -amount);
        this.productService.updateStocks(prods, this.products, false);
    }
    restoreOrderAmount(payment) {
        let rest = 0;
        if (payment.payload)
            rest = payment.payload.val().amount;
        else
            rest = payment.amount;
        for (let i = 0; i < this.orders.length; i++) {
            if (payment.payload && payment.payload.val().orderNumber > 0 && this.orders[i].payload.val().orderNumber == payment.payload.val().orderNumber) {
                console.log("aca1");
                console.log("resta", parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt), "pay amount", payment.payload.val().amount);
                if (parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt) <= payment.payload.val().amount) {
                    console.log("aca2");
                    rest = rest - (parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt));
                    this.updateOrder(this.orders[i].key, { "debt": this.orders[i].payload.val().amount });
                    console.log("debt a guardar", this.orders[i].payload.val().amount);
                    if (rest > 10)
                        this.restoreOrderAmount({ "orderNumber": 0, "amount": rest, "client": payment.payload.val().client });
                    break;
                }
                else if (parseFloat(this.orders[i].payload.val().debt)) {
                    let debt = parseFloat(this.orders[i].payload.val().debt) + rest;
                    this.updateOrder(this.orders[i].key, { "debt": debt });
                    break;
                }
            }
        }
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].payload.val().clientFantasyName == payment.client) {
                if (parseFloat(this.orders[i].payload.val().amount) && parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt) <= payment.amount) {
                    rest = rest - (parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt));
                    console.log("rest segundo for", rest);
                    console.log("debt", this.orders[i].payload.val().debt);
                    console.log("amount", this.orders[i].payload.val().amount);
                    this.updateOrder(this.orders[i].key, { "debt": this.orders[i].payload.val().amount });
                    if (rest > 10)
                        this.restoreOrderAmount({ "orderNumber": 0, "amount": rest, "client": payment.client });
                    break;
                }
                else if (parseFloat(this.orders[i].payload.val().debt)) {
                    let debt = parseFloat(this.orders[i].payload.val().debt) + rest;
                    this.updateOrder(this.orders[i].key, { "debt": debt });
                    break;
                }
            }
        }
    }
    getClientDebt(clientFantasyName) {
        let debt = 0;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].payload.val().fantasyName == clientFantasyName)
                debt = parseFloat(this.clients[i].payload.val().debt);
        }
        return debt;
    }
    sendNote(amount, clientFantasyName) {
        let result = this.db.list('/creditNotes/').push({
            "amount": amount,
            "clienteFantasyName": clientFantasyName,
            "date": new Date().getTime()
        });
        this.clientsService.addPaymentAmount(clientFantasyName, -amount);
    }
    cleanDebt(order) {
        this.updateOrder(order.key, { "debt": 0 });
    }
    getClientCategory(clientFantasyName) {
        let clientCategory = "";
        if (this.clients) {
            for (let i = 0; i < this.clients.length; i++) {
                if (this.clients[i].payload.val().fantasyName == clientFantasyName) {
                    clientCategory = this.clients[i].payload.val().clientCategory;
                    return clientCategory;
                }
            }
        }
        return clientCategory;
    }
    getTotalAmount(products) {
        let totalAmount = 0;
        if (products) {
            for (let i = 0; i < products.length; i++) {
                totalAmount += products[i].discountPrice * products[i].quantity;
            }
        }
        return totalAmount;
    }
    getTotalCost(order) {
        let totalCost = 0;
        if (order.payload.val().order.products) {
            for (let i = 0; i < order.payload.val().order.products.length; i++) {
                totalCost += order.payload.val().order.products[i].discountPrice * order.payload.val().order.products[i].quantity;
            }
        }
        return totalCost;
    }
    aprove(order) {
        this.updateOrder(order.key, { "aproved": true });
    }
    isOrderInDebt(order) {
        let today = new Date();
        if ((Date.parse(today.toString()) - order.payload.val().date > 30 * 24 * 60 * 60 * 1000) && order.payload.val().debt != 0) { //que pasen 30 dias
            console.log("deudor creation:", order.payload.val().date, "orderPaid:", order.payload.val().paid);
            return true;
        }
        console.log("NO deudor");
        return false;
    }
    isClientInDebt(fantasyName) {
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].payload.val().clientFantasyName == fantasyName &&
                this.isOrderInDebt(this.orders[i]))
                return true;
        }
        return false;
    }
    getClientOrdersAmount(fantasyName) {
        let amount = 0;
        if (this.orders) {
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i].payload.val().clientFantasyName == fantasyName) {
                    amount += parseFloat(this.orders[i].payload.val().amount);
                }
            }
        }
        return amount;
    }
    incrementOrderNumber() {
        let orderNumb = parseInt(this.orderNumber[0].payload.val().orderNumber) + 1;
        return this.db.object('/orderNumber/' + this.orderNumber[0].key).update({ "orderNumber": orderNumb });
    }
    updateSendedStatus(order) {
        return this.db.object('/orders/' + order.key).update({ "sended": !order.payload.val().sended });
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_stock_service__WEBPACK_IMPORTED_MODULE_4__.StockService)); };
OrdersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31386:
/*!**********************************************!*\
  !*** ./src/app/services/payments.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsService": () => (/* binding */ PaymentsService)
/* harmony export */ });
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/take */ 82490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ 66082);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients.service */ 79012);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders.service */ 12331);








class PaymentsService {
    constructor(db, productService, clientsService, auth, route, router, ordersService) {
        this.db = db;
        this.productService = productService;
        this.clientsService = clientsService;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.ordersService = ordersService;
        this.auth.appUser$.subscribe(appUser => {
            this.ordersService.getAll().subscribe(orders => { this.orders = orders; });
            this.appUser = appUser;
            this.filteredProducts = [];
            this.productService.getAll().subscribe(products => {
                this.filteredProducts = this.products = products;
                this.route.queryParamMap.subscribe(params => {
                    this.prodsCategory = params.get('prodsCategory');
                    if (this.products) {
                        this.filteredProducts = (this.prodsCategory) ?
                            this.products.filter((p) => p.payload.val().prodsCategory == this.prodsCategory) :
                            this.products;
                    }
                });
            });
            this.clientsService.getAll().subscribe(clients => {
                this.clients = clients;
            });
            this.getAll().subscribe(payments => {
                this.payments = payments;
            });
        });
    }
    ngOnDestroy() {
    }
    create(payment) {
        let time = new Date().getTime();
        payment.date = time;
        payment.aproved = false;
        this.clientsService.addPaymentAmount(payment.client, payment.amount);
        //el cobro es para una factura en particular
        if (!payment.orderNumber) { //el cobro no es para una factura en particular
            payment.orderNumber = 0;
            this.clearDebts(payment.client, payment.amount);
        }
        else if (payment.orderNumber >= 0) {
            this.clearOrderDebt(payment);
        }
        return this.db.list('/payments').push(payment);
    }
    clearDebts(clientFantasyName, amount) {
        let rest = amount;
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].payload.val().clientFantasyName == clientFantasyName) {
                if (parseFloat(this.orders[i].payload.val().debt) && parseFloat(this.orders[i].payload.val().debt) <= rest) {
                    rest = rest - parseFloat(this.orders[i].payload.val().debt); //cambie orden de este
                    this.ordersService.updateOrder(this.orders[i].key, { "debt": 0 }); //con este
                    if (rest < 10)
                        break;
                }
                else if (this.orders[i].payload.val().debt) {
                    this.ordersService.updateOrder(this.orders[i].key, { "debt": parseFloat(this.orders[i].payload.val().debt) - rest });
                    break;
                }
            }
        }
    }
    clearOrderDebt(payment) {
        let rest = payment.amount;
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].payload.val().orderNumber == payment.orderNumber) {
                if (parseFloat(this.orders[i].payload.val().debt) && parseFloat(this.orders[i].payload.val().debt) <= payment.amount) {
                    rest = rest - parseFloat(this.orders[i].payload.val().debt);
                    this.ordersService.updateOrder(this.orders[i].key, { "debt": 0 });
                    this.clearDebts(payment.client, rest);
                    break;
                }
                else if (this.orders[i].payload.val().debt) {
                    this.ordersService.updateOrder(this.orders[i].key, { "debt": parseFloat(this.orders[i].payload.val().debt) - rest });
                    break;
                }
            }
        }
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
    getAll() {
        return this.db.list('/payments').snapshotChanges();
    }
    getClientCategory(clientFantasyName) {
        let clientCategory = "";
        if (this.clients) {
            for (let i = 0; i < this.clients.length; i++) {
                if (this.clients[i].payload.val().fantasyName == clientFantasyName) {
                    clientCategory = this.clients[i].payload.val().clientCategory;
                    return clientCategory;
                }
            }
        }
        return clientCategory;
    }
    // getTotalCost(p: any) {
    //   let totalCost = 0;
    //   if (p.payload.val().amount) {
    //     for (let i = 0;i < p.payload.val().payment.products.length;i++) {
    //       totalCost += p.payload.val().payment.products[i].discountPrice * p.payload.val().payment.products[i].quantity
    //     }
    //   }
    //   return totalCost;
    // }
    aprove(payment) {
        this.updatePayment(payment.key, { "aproved": true });
    }
    getClientPaymentsAmount(fantasyName) {
        let amount = 0;
        if (this.payments) {
            for (let i = 0; i < this.payments.length; i++) {
                if (this.payments[i].payload.val().client == fantasyName) {
                    amount += parseFloat(this.payments[i].payload.val().amount);
                }
            }
        }
        return amount;
    }
}
PaymentsService.ɵfac = function PaymentsService_Factory(t) { return new (t || PaymentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_clients_service__WEBPACK_IMPORTED_MODULE_2__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_orders_service__WEBPACK_IMPORTED_MODULE_4__.OrdersService)); };
PaymentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PaymentsService, factory: PaymentsService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.service */ 79012);
/* harmony import */ var _payments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments.service */ 31386);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.service */ 12331);





class PrintService {
    constructor(clientsService, paymentsService, ordersService) {
        this.clientsService = clientsService;
        this.paymentsService = paymentsService;
        this.ordersService = ordersService;
    }
    ngOnInit() {
        this.clientsService.getAll().subscribe(clients => {
            this.filteredClients = this.clients = clients;
            // this.dataSource = new MatTableDataSource<any>(this.filteredClients);
            // this.dataSource.paginator = this.paginator;
            // if (this.clientsService.clientsPaginator.pageIndex > 0 || this.clientsService.clientsPaginator.pageSize != 10) {
            // this.paginator.pageIndex = this.clientsService.clientsPaginator.pageIndex;
            // this.paginator.pageSize = this.clientsService.clientsPaginator.pageSize;
            // this.dataSource.paginator = this.paginator
            // }
        });
        this.ordersService.getAll().subscribe(orders => {
            this.orders = orders;
        });
        this.paymentsService.getAll().subscribe(payments => {
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
            this.ordersService.getAll().subscribe(orders => {
                this.orders = orders;
                this.paymentsService.getAll().subscribe(paymnts => {
                    this.payments = paymnts;
                    let orders = [];
                    let payments = [];
                    for (let i = 0; i < this.orders.length; i++) {
                        if (this.orders[i].payload.val().clientFantasyName == client.fantasyName)
                            orders.push(this.orders[i].payload.val());
                    }
                    for (let i = 0; i < this.payments.length; i++) {
                        if (this.payments[i].payload.val().client == client.fantasyName)
                            payments.push(this.payments[i].payload.val());
                    }
                    let y = 0;
                    let k = 0;
                    let balance = 0;
                    let loopSize = orders.length + payments.length;
                    for (let i = 0; i < loopSize; i++) {
                        pageHeight = doc.internal.pageSize.height;
                        if (y >= pageHeight - 50) {
                            doc.addPage();
                            k = i;
                        }
                        y = 7 * (i + 1 - k) - line1;
                        let pos1 = 0;
                        let pos2 = 0;
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
                            balance += parseFloat(orders[pos1].amount);
                            let dateObject = new Date(orders[pos1].date);
                            let humanDateFormat = dateObject.toLocaleString();
                            doc.text(humanDateFormat, col1, line3 + y);
                            doc.text("FACTURA", col2, line3 + y);
                            doc.text(parseInt(orders[pos1].orderNumber).toString(), col3, line3 + y);
                            doc.text(parseFloat(orders[pos1].amount).toFixed(2).toString(), col5, line3 + y);
                            doc.text(balance.toFixed(2).toString(), col6, line3 + y);
                            orders = this.splice2(orders, pos1);
                            doc.text('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -', 10, line3 + y + 3);
                        }
                        else if (!this.orderOrPayment && payments.length > 0) {
                            balance -= parseFloat(payments[pos2].amount);
                            let dateObject = new Date(payments[pos2].date);
                            let humanDateFormat = dateObject.toLocaleString();
                            doc.text(humanDateFormat, col1, line3 + y);
                            doc.text(parseInt(payments[pos2].orderNumber).toString(), col3, line3 + y);
                            doc.text(parseFloat(payments[pos2].amount).toFixed(2).toString(), col4, line3 + y);
                            doc.text(balance.toFixed(2).toString(), col6, line3 + y);
                            doc.text('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -', 10, line3 + y + 3);
                            if (payments[pos2].payWay == "Nota de Crédito")
                                doc.text("NOTA CRED.", col2, line3 + y);
                            else
                                doc.text("RECIBO", col2, line3 + y);
                            payments = this.splice2(payments, pos2);
                        }
                    }
                    doc.setFontSize(8);
                    // Save the PDF
                    doc.save('Resumen.pdf');
                });
            });
            // while (!this.orders && !this.payments) {
            // }
        }
    }
    getMinPos(arr) {
        let pos = arr.length;
        let result = 0;
        let min = parseInt(arr[pos - 1].date);
        while (pos--) {
            if (parseInt(arr[pos].date) < min) {
                min = arr[pos].date;
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
            for (let i = 0; i < this.clients.length; i++) {
                pageHeight = doc.internal.pageSize.height;
                if (y >= pageHeight - 70) {
                    doc.addPage();
                    j = i;
                    cont = line1;
                }
                y = 7 * (i + 1 - j) - cont;
                doc.text(this.clients[i].payload.val().businessName, col1, line3 + y);
                doc.text(this.clients[i].payload.val().fantasyName, col2, line3 + y);
                doc.text(this.clients[i].payload.val().address, col3, line3 + y);
                doc.text(this.clients[i].payload.val().phone, col4, line3 + y);
            }
            doc.setFontSize(8);
            // Save the PDF
            doc.save('ClientesGentech.pdf');
        }
    }
}
PrintService.ɵfac = function PrintService_Factory(t) { return new (t || PrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_clients_service__WEBPACK_IMPORTED_MODULE_1__.ClientsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_payments_service__WEBPACK_IMPORTED_MODULE_2__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService)); };
PrintService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PrintService, factory: PrintService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 84134);


class ProductService {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        this.getAll().subscribe(products => {
            this.products = products;
        });
        this.getAllRecharges().subscribe(recharges => {
            this.recharges = recharges;
        });
    }
    create(product) {
        product.disc1 = 0;
        product.disc2 = 0;
        product.disc3 = 0;
        product.disc4 = 0;
        product.price1 = product.buyPrice * 1.1; //harcoded recharges
        product.price2 = product.buyPrice * 1.2; //harcoded recharges
        product.price3 = product.buyPrice * 1.3; //harcoded recharges
        product.price4 = product.buyPrice * 1.3; //harcoded recharges
        product.discPrice1 = product.price1;
        product.discPrice2 = product.price2;
        product.discPrice3 = product.price3;
        product.discPrice4 = product.price4;
        return this.db.list('/products').push(product);
    }
    createRecharge() {
        this.recharges = {
            distRecharge: 10,
            comRecharge: 20,
            gymRecharge: 30
        };
        let result = this.db.list('/recharges').push(this.recharges);
        if (result.key)
            this.rechargeKey = result.key;
        return result;
    }
    getAll() {
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
    recharge(products, distRecharge, comRecharge, pvpRecharge, gymRecharge) {
        for (let i = 0; i < products.length; i++) {
            let prod = {
                "disc1": products[i].payload.val().disc1,
                "disc2": products[i].payload.val().disc2,
                "disc3": products[i].payload.val().disc3,
                "disc4": products[i].payload.val().disc4,
                "buyPrice": products[i].payload.val().buyPrice,
                "price1": products[i].payload.val().buyPrice * (1 + distRecharge / 100),
                "price2": products[i].payload.val().buyPrice * (1 + comRecharge / 100),
                "price3": products[i].payload.val().buyPrice * (1 + pvpRecharge / 100),
                "price4": products[i].payload.val().buyPrice * (1 + gymRecharge / 100),
                "discPrice1": products[i].payload.val().discPrice1,
                "discPrice2": products[i].payload.val().discPrice2,
                "discPrice3": products[i].payload.val().discPrice3,
                "discPrice4": products[i].payload.val().discPrice4,
                "prodsCategory": products[i].payload.val().prodsCategory,
                "title": products[i].payload.val().title
            };
            this.db.object('/products/' + products[i].key).update(prod);
            let product = prod;
            product.discPrice1 = prod.price1 * (1 - product.disc1 / 100);
            product.discPrice2 = prod.price2 * (1 - product.disc2 / 100);
            product.discPrice3 = prod.price3 * (1 - product.disc3 / 100);
            product.discPrice4 = prod.price4 * (1 - product.disc4 / 100);
            this.db.object('/products/' + products[i].key).update(product);
        }
        this.recharges = {
            "distRecharge": distRecharge,
            "comRecharge": comRecharge,
            "pvpRecharge": pvpRecharge,
            "gymRecharge": gymRecharge
        };
        let result = this.getAllRecharges().subscribe(result => {
            this.db.object('/recharges/' + result[0].key).update(this.recharges);
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
        this.getAll().subscribe(products => {
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
    updateStocks(prods, thisProds, add) {
        for (let i = 0; i < prods.length; i++) {
            for (let j = 0; j < thisProds.length; j++) {
                if (prods[i].product.title == thisProds[j].payload.val().title) {
                    let quantity;
                    if (add)
                        quantity = parseInt(thisProds[j].payload.val().stock) + parseInt(prods[i].quantity);
                    else
                        quantity = parseInt(thisProds[j].payload.val().stock) - parseInt(prods[i].quantity);
                    this.db.object('/products/' + thisProds[j].key).update({
                        "stock": quantity
                    });
                }
            }
        }
    }
    restoreStock(order, products) {
        let prods = [];
        for (let i = 0; i < order.payload.val().order.products.length; i++) {
            for (let j = 0; j < products.length; j++) {
                if (order.payload.val().order.products[i].product.title == products[j].payload.val().title)
                    this.db.object('/products/' + products[j].key).update({
                        "stock": parseInt(products[j].payload.val().stock) + parseInt(order.payload.val().order.products[i].quantity)
                    });
            }
        }
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52514:
/*!*********************************************!*\
  !*** ./src/app/services/sellers.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellersService": () => (/* binding */ SellersService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 84134);


class SellersService {
    constructor(db) {
        this.db = db;
    }
    create(seller) {
        return this.db.list('/sellers').push(seller);
    }
    getAll() {
        return this.db.list('/sellers').snapshotChanges();
    }
    get(sellerId) {
        return this.db.object('/sellers/' + sellerId).snapshotChanges();
    }
    update(sellerId, seller) {
        return this.db.object('/sellers/' + sellerId).update(seller);
    }
    delete(sellerId) {
        return this.db.object('/sellers/' + sellerId).remove();
    }
}
SellersService.ɵfac = function SellersService_Factory(t) { return new (t || SellersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
SellersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SellersService, factory: SellersService.ɵfac, providedIn: 'root' });


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
        this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
        });
        this.filteredProducts = [];
        this.productService.getAll().subscribe(products => {
            this.filteredProducts = this.products = products;
            this.route.queryParamMap.subscribe(params => {
                this.prodsCategory = params.get('prodsCategory');
                if (this.products) {
                    this.filteredProducts = (this.prodsCategory) ?
                        this.products.filter((p) => p.payload.val().prodsCategory == this.prodsCategory) :
                        this.products;
                }
                // this.getStock().subscribe(stock => {
                //   this.stock = stock;
                //   if (this.stock.length == 0) {
                //     this.create();
                //   }
                // });
            });
        });
        this.getBuy().subscribe(buy => {
            this.buy = buy;
            if (this.buy.length == 0) {
                this.createBuy();
            }
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
    createBuy() {
        let products = [];
        for (let i = 0; i < this.products.length; i++) {
            products.push({
                "price": this.products[i].payload.val().buyPrice,
                "product": this.products[i].payload.val(),
                "productId": this.products[i].key,
                "quantity": 0
            });
        }
        let result = this.db.list('/buy/').push({
            "buyItemsCount": 0,
            "products": products
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
    getBuys() {
        return this.db.list('/buys').snapshotChanges();
    }
    // updateItemQuantity(p:any, quantity: number, stockKey: number){
    //   this.db.object('/stock/' + stockKey).update({
    //     product: p,
    //     "quantity": quantity
    //   })
    // }
    updateBuyItemQuantity(buy, product, change) {
        let buyItemsCount = parseInt(buy[0].payload.val().buyItemsCount) + change;
        let products = [];
        for (let i = 0; i < buy[0].payload.val().products.length; i++) {
            let plus = 0;
            if (product.productId == buy[0].payload.val().products[i].productId)
                plus = change;
            products.push({
                "price": buy[0].payload.val().products[i].price,
                "product": buy[0].payload.val().products[i].product,
                "productId": buy[0].payload.val().products[i].productId,
                "quantity": parseInt(buy[0].payload.val().products[i].quantity) + plus,
            });
            plus = 0;
        }
        this.db.object('/buy/' + buy[0].key).update({
            "buyItemsCount": buyItemsCount,
            "products": products
        });
    }
    setBuyItemQuantity(buy, product, quantity) {
        let buyItemsCount = 0;
        let products = [];
        for (let i = 0; i < buy[0].payload.val().products.length; i++) {
            if (product.productId == buy[0].payload.val().products[i].productId) {
                products.push({
                    "price": buy[0].payload.val().products[i].price,
                    "product": buy[0].payload.val().products[i].product,
                    "productId": buy[0].payload.val().products[i].productId,
                    "quantity": quantity
                });
                buyItemsCount += quantity;
            }
            else {
                products.push({
                    "price": buy[0].payload.val().products[i].price,
                    "product": buy[0].payload.val().products[i].product,
                    "productId": buy[0].payload.val().products[i].productId,
                    "quantity": buy[0].payload.val().products[i].quantity,
                });
                buyItemsCount += parseInt(buy[0].payload.val().products[i].quantity);
            }
        }
        this.db.object('/buy/' + buy[0].key).update({
            "buyItemsCount": buyItemsCount,
            "products": products
        });
    }
    sendBuy(buy) {
        // for (let i=0;i<this.buy[0].payload.val().products.length;i++) {
        //   if  (this.buy[0].payload.val().products[i].quantity != 0) {
        //     let quantity = this.products[i].payload.val().stock + this.buy[0].payload.val().products[i].quantity;
        // this.db.object('/stock/' + this.products[i].key).update({
        //   //product: this.stock[i].payload.val().product,
        //   "stock": quantity
        // });
        //   }
        // }
        let prods = [];
        for (let i = 0; i < buy[0].payload.val().products.length; i++) {
            if (this.buy[0].payload.val().products[i].quantity != 0) {
                prods.push({ "title": buy[0].payload.val().products[i].product.title, "quantity": buy[0].payload.val().products[i].quantity, "price": buy[0].payload.val().products[i].product.discPrice1 });
            }
        }
        let time = new Date().getTime();
        let result = this.db.list('/buys/').push({
            "buyItemsCount": buy[0].payload.val().buyItemsCount,
            "buy": prods,
            "date": time
        });
        this.db.object('/buy/').remove();
    }
    gentechProductPrice(prod) {
    }
    // updateStocks(prods: any) {
    //   for (let i=0;i<prods.length;i++) {
    //     for (let j=0;j<this.stock.length;j++) {
    //       if (prods[i].product.title == this.stock[j].payload.val().product.title) {
    //         let quantity = this.stock[j].payload.val().quantity - prods[i].quantity;
    //         this.db.object('/stock/' + this.stock[j].key).update({
    //           product: this.stock[i].payload.val().product,
    //           "quantity": quantity
    //         });
    //       }
    //     }
    //   }
    // }
    reset() {
        this.db.object('/buy/').remove();
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
        for (let i = 0; i < buy.payload.val().buy.length; i++) {
            totalCost += buy.payload.val().buy[i].quantity * buy.payload.val().buy[i].price;
        }
        return totalCost;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/stock.service */ 83188);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 1562);













function StockComponent_div_0_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nueva compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StockComponent_div_0_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ver compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StockComponent_div_0_mat_accordion_13_tr_7_Template(rf, ctx) { if (rf & 1) {
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
function StockComponent_div_0_mat_accordion_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Faltantes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, StockComponent_div_0_mat_accordion_13_tr_7_Template, 8, 2, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.alertProducts);
} }
function StockComponent_div_0_tr_27_Template(rf, ctx) { if (rf & 1) {
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
function StockComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, StockComponent_div_0_a_3_Template, 2, 0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, StockComponent_div_0_a_4_Template, 2, 0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function StockComponent_div_0_Template_input_keyup_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.filter(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, StockComponent_div_0_mat_accordion_13_Template, 8, 1, "mat-accordion", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "STOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("matSortChange", function StockComponent_div_0_Template_table_matSortChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, StockComponent_div_0_tr_27_Template, 5, 2, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.appUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.alertProducts.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.filteredProducts);
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
        this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.productService.getAll().subscribe(products => {
                this.products = this.filteredProducts = products;
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
}
StockComponent.ɵfac = function StockComponent_Factory(t) { return new (t || StockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_0__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
StockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StockComponent, selectors: [["stock"]], decls: 1, vars: 1, consts: [["class", "SCContainer", 4, "ngIf"], [1, "SCContainer"], ["fxLayout", "row", 2, "margin-bottom", "20px", "margin-top", "20px", "margin-left", "30px"], ["mat-raised-button", "", "color", "accent", "routerLink", "/stock/buy", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "routerLink", "/buys", 4, "ngIf"], ["fxLayout", "row", 2, "margin-top", "10px", "margin-left", "30px"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "Buscar producto...", 3, "keyup"], ["query", ""], [2, "margin-left", "30px"], [4, "ngIf"], [2, "margin-top", "10px", "margin-left", "30px"], ["matSort", "", 1, "table", "table-striped", "table-sm", "mat-elevation-z8", 3, "matSortChange"], ["mat-sort-header", "title"], ["mat-sort-header", "quantity"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", "routerLink", "/stock/buy"], ["mat-raised-button", "", "color", "accent", "routerLink", "/buys"], [1, "table", "table-striped", "table-sm", "mat-elevation-z8"]], template: function StockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, StockComponent_div_0_Template, 28, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay5jb21wb25lbnQuc2NzcyJ9 */"] });


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBzHzW1kMlgLbPUM3cYy1B9UZRHbV98IIE",
        authDomain: "distrib-42bdb.firebaseapp.com",
        databaseURL: "https://distrib-42bdb-default-rtdb.firebaseio.com",
        projectId: "distrib-42bdb",
        storageBucket: "distrib-42bdb.appspot.com",
        messagingSenderId: "1032461943463",
        appId: "1:1032461943463:web:ea663acb33dfc7be1f9182"
    }
};
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