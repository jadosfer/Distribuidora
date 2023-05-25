(self["webpackChunke_commerce_mosh"] = self["webpackChunke_commerce_mosh"] || []).push([["src_app_modules_clients-lazy_clients-lazy_module_ts"],{

/***/ 28561:
/*!*********************************************************************!*\
  !*** ./src/app/modules/clients-lazy/clients-lazy-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsLazyRoutingModule": () => (/* binding */ ClientsLazyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_clients_clients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/clients/clients.component */ 57045);
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-guard.service */ 78968);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var src_app_services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/print.service */ 39534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);








const routes = [{ path: '', component: src_app_clients_clients_component__WEBPACK_IMPORTED_MODULE_0__.ClientsComponent, canActivate: [src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuard] }];
class ClientsLazyRoutingModule {
}
ClientsLazyRoutingModule.ɵfac = function ClientsLazyRoutingModule_Factory(t) { return new (t || ClientsLazyRoutingModule)(); };
ClientsLazyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ClientsLazyRoutingModule });
ClientsLazyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService, src_app_services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ClientsLazyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 92632:
/*!*************************************************************!*\
  !*** ./src/app/modules/clients-lazy/clients-lazy.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsLazyModule": () => (/* binding */ ClientsLazyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _clients_lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-lazy-routing.module */ 28561);
/* harmony import */ var src_app_clients_clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/clients/clients.component */ 57045);
/* harmony import */ var src_app_Material_Material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Material/Material.module */ 53732);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utility.service */ 67278);
/* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/orders.service */ 12331);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_print_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/print.service */ 39534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);










class ClientsLazyModule {
}
ClientsLazyModule.ɵfac = function ClientsLazyModule_Factory(t) { return new (t || ClientsLazyModule)(); };
ClientsLazyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ClientsLazyModule });
ClientsLazyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService, src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService, src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_4__.OrdersService, src_app_services_print_service__WEBPACK_IMPORTED_MODULE_6__.PrintService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _clients_lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientsLazyRoutingModule,
            src_app_Material_Material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            //ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ClientsLazyModule, { declarations: [src_app_clients_clients_component__WEBPACK_IMPORTED_MODULE_1__.ClientsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _clients_lazy_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientsLazyRoutingModule,
        src_app_Material_Material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        //ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_clients-lazy_clients-lazy_module_ts.js.map