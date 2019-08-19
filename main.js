(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");





var routes = [
    {
        path: '',
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"]
    },
    {
        path: 'user/:id',
        component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'recruitment-task';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"container\">\n        <div class=\"content\">\n            <h1><a class=\"app-title\" routerLink=\"/\">Baza użytkowników <i class=\"fas fa-user-friends icon\"></i></a></h1>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  height: 70px;\n  background-color: #D2D2D2; }\n  nav .content {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  nav .content .app-title {\n      color: #000000;\n      text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3VzZXJzLWJhc2Uvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FubmEvUHJvamVjdHMvemFkYW5pYSByZWtydXRhY3lqbmUvQ09NLVBBTiAvdXNlcnMtYmFzZS9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQVk7RUFDWix5QkNFb0IsRUFBQTtFREp4QjtJQUtRLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7RUFQM0I7TUFVWSxjQ1BjO01EUWQscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9jb3JlXCI7XG5cbm5hdiB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0R3JheTtcblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmFwcC10aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yVGV4dFByaW1hcnk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9jb2xvcnNcblxuJGNvbG9yUHJpbWFyeTogIzAyQURGRjtcbiRjb2xvclNlY29uZGFyeTogIzE0ODBCMztcbiRjb2xvckJhY2tncm91bmQ6ICNGRkZGRkY7XG4kY29sb3JUZXh0UHJpbWFyeTogIzAwMDAwMDtcbiRjb2xvckxpZ2h0R3JheTogI0QyRDJEMjsiXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <h2 class=\"title\">Szczegóły użytkownika:</h2>\n    <div class=\"user-details\" *ngIf=\"userDetails\">\n        <div class=\"headline\">\n            <img src=\"{{userDetails.image}}\" alt=\"{{userDetails.firstName}}\" class=\"image\">\n            <p>{{userDetails.nameTitle}} {{userDetails.firstName}} {{userDetails.lastName}}</p>\n        </div>\n        <div class=\"details\">\n            <p>Gender: {{userDetails.gender}}</p>\n            <p>Phone: {{userDetails.phone}}</p>\n            <p>Cell: {{userDetails.cell}}</p>\n            <p>Email: {{userDetails.email}}</p>\n            <h3>Location:</h3>\n            <p>Street: {{userDetails.location.street}}</p>\n            <p>City: {{userDetails.location.city}}</p>\n            <p>State: {{userDetails.location.state}}</p>\n            <p>Postcode: {{userDetails.location.postcode}}</p>\n            <p>Timezone: {{userDetails.location.timezone}}</p>\n        </div>\n    </div>\n    <div class=\"button\">\n        <button [routerLink]=\"'/'\" class=\"see-list\">Wróć do listy użytkowników</button>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/user-details/user-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .title {\n  text-align: center; }\n\n:host .user-details {\n  margin: 20px auto 50px;\n  padding: 20px 0;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #D2D2D2;\n  border-radius: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  box-shadow: 0 0 10px 0 #888888; }\n\n@media (min-width: 460px) {\n    :host .user-details {\n      width: 400px; } }\n\n:host .user-details .headline {\n    padding-bottom: 20px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px solid #D2D2D2; }\n\n:host .user-details .headline .image {\n      margin: 10px 20px;\n      border-style: solid;\n      border-width: 4px;\n      border-color: #02ADFF;\n      border-radius: 50%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      width: 100px;\n      height: 100px; }\n\n:host .user-details .details {\n    padding-top: 20px;\n    font-size: 14px; }\n\n@media (min-width: 460px) {\n      :host .user-details .details {\n        font-size: 16px; } }\n\n:host .button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 50px; }\n\n:host .button .see-list {\n    padding: 8px 16px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #02ADFF;\n    border-radius: 6px;\n    background-color: #02ADFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    cursor: pointer;\n    transition: all 250ms ease; }\n\n:host .button .see-list:hover {\n      background-color: rgba(2, 173, 255, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3VzZXJzLWJhc2Uvc3JjL2FwcC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FubmEvUHJvamVjdHMvemFkYW5pYSByZWtydXRhY3lqbmUvQ09NLVBBTiAvdXNlcnMtYmFzZS9zcmMvc3R5bGVzL19taXhpbnMuc2NzcyIsIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3VzZXJzLWJhc2Uvc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFNUSxzQkFBc0I7RUFDdEIsZUFBZTtFQ0xmLG1CRE1xQjtFQ0xyQixpQkRLMEI7RUNKMUIscUJDQWdCO0VEQ2hCLGdCREc4QztFQUM5QyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUdWLDhCQUE2QyxFQUFBOztBQUU3QztJQWxCUjtNQW1CWSxZQUFZLEVBQUEsRUEyQm5COztBQTlDTDtJQXVCWSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDRXhCWSxFQUFBOztBRkp4QjtNQStCZ0IsaUJBQWlCO01DN0J6QixtQkQ4QjZCO01DN0I3QixpQkQ2QmtDO01DNUJsQyxxQkNKYztNREtkLGtCRDJCc0Q7TUFDOUMsb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osYUFBYSxFQUFBOztBQW5DN0I7SUF3Q1ksaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFDZjtNQTFDWjtRQTJDZ0IsZUFBZSxFQUFBLEVBRXRCOztBQTdDVDtFQWlEUSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQW5EM0I7SUFzRFksaUJBQWlCO0lDcERyQixtQkRxRHlCO0lDcER6QixpQkRvRDhCO0lDbkQ5QixxQkNKYztJREtkLGtCRGtEa0Q7SUFDOUMseUJFeERVO0lGeURWLGNFdkRhO0lGd0RiLGVBQWU7SUFDZixlQUFlO0lBQ2YsMEJBQTBCLEVBQUE7O0FBNUR0QztNQStEZ0Isd0NFL0RNLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9jb3JlXCI7XG5cbjpob3N0IHtcbiAgICAudGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlscyB7XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyKHNvbGlkLCAxcHgsICRjb2xvckxpZ2h0R3JheSwgMCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgxMzYsIDEzNiwgMTM2LCAxKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMTM2LCAxMzYsIDEzNiwgMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgxMzYsIDEzNiwgMTM2LCAxKTtcblxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA0NjBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRsaW5lIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvckxpZ2h0R3JheTtcblxuICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBib3JkZXIoc29saWQsIDRweCwgJGNvbG9yUHJpbWFyeSwgNTAlKTtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNDYwcHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgLnNlZS1saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgYm9yZGVyKHNvbGlkLCAxcHgsICRjb2xvclByaW1hcnksIDZweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JQcmltYXJ5O1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvckJhY2tncm91bmQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JQcmltYXJ5LCAwLjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gYm9yZGVyKCRzdHlsZSwgJHdpZHRoLCAkY29sb3IsICRyYWRpdXMpIHtcbiAgICBib3JkZXI6IHtcbiAgICAgICAgc3R5bGU6ICRzdHlsZTtcbiAgICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgICAgcmFkaXVzOiAkcmFkaXVzO1xuICAgIH1cbn1cbiIsIi8vY29sb3JzXG5cbiRjb2xvclByaW1hcnk6ICMwMkFERkY7XG4kY29sb3JTZWNvbmRhcnk6ICMxNDgwQjM7XG4kY29sb3JCYWNrZ3JvdW5kOiAjRkZGRkZGO1xuJGNvbG9yVGV4dFByaW1hcnk6ICMwMDAwMDA7XG4kY29sb3JMaWdodEdyYXk6ICNEMkQyRDI7Il19 */"

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details.service */ "./src/app/user-details/user-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userDetailsService, route) {
        this.userDetailsService = userDetailsService;
        this.route = route;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.params['id'];
        this.getUserDetails();
    };
    UserDetailsComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.userDetailsService.getUserDetails(this.userId)
            .subscribe(function (userDetails) {
            _this.userDetails = userDetails;
        });
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/user-details/user-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_details_service__WEBPACK_IMPORTED_MODULE_2__["UserDetailsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.service.ts":
/*!******************************************************!*\
  !*** ./src/app/user-details/user-details.service.ts ***!
  \******************************************************/
/*! exports provided: UserDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsService", function() { return UserDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserDetailsService = /** @class */ (function () {
    function UserDetailsService(httpClient) {
        this.httpClient = httpClient;
    }
    UserDetailsService.prototype.getUserDetails = function (userId) {
        return this.httpClient.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/user/' + userId);
    };
    UserDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserDetailsService);
    return UserDetailsService;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <h2 class=\"title\">Lista użytkowników:</h2>\n    <div class=\"user-list\">\n        <div class=\"user\" *ngFor=\"let user of userList.data\">\n            <div class=\"col\">\n                <img src=\"{{user.image}}\" alt=\"{{user.name}}\" class=\"image\">\n            </div>\n            <div class=\"col\">\n                <p class=\"name\">{{user.nameTitle}} {{user.firstName}} {{user.lastName}}</p>\n            </div>\n            <div class=\"col\">\n                <button class=\"see-more\" [routerLink]=\"'user/' + user.id\">See details</button>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .title {\n  text-align: center; }\n\n:host .user-list {\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n:host .user {\n  margin: 10px 0;\n  width: 90%;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #D2D2D2;\n  border-radius: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(210, 210, 210, 0.2); }\n\n@media (min-width: 640px) {\n    :host .user {\n      width: 600px; } }\n\n:host .col {\n  flex: 1; }\n\n:host .col:first-child, :host .col:last-child {\n    display: flex;\n    justify-content: center; }\n\n:host .image {\n  margin: 10px;\n  border-style: solid;\n  border-width: 4px;\n  border-color: #02ADFF;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 60px;\n  height: 60px; }\n\n@media (min-width: 640px) {\n    :host .image {\n      margin: 10px 20px;\n      width: 100px;\n      height: 100px; } }\n\n:host .name {\n  font-size: 14px; }\n\n@media (min-width: 640px) {\n    :host .name {\n      font-size: 16px; } }\n\n:host .see-more {\n  padding: 5px 10px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #02ADFF;\n  border-radius: 6px;\n  background-color: #02ADFF;\n  color: #FFFFFF;\n  font-size: 10px;\n  cursor: pointer;\n  transition: all 250ms ease; }\n\n@media (min-width: 380px) {\n    :host .see-more {\n      font-size: 12px; } }\n\n@media (min-width: 640px) {\n    :host .see-more {\n      padding: 8px 16px;\n      font-size: 14px; } }\n\n@media (min-width: 1024px) {\n    :host .see-more:hover {\n      background-color: rgba(2, 173, 255, 0.8); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3VzZXJzLWJhc2Uvc3JjL2FwcC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FubmEvUHJvamVjdHMvemFkYW5pYSByZWtydXRhY3lqbmUvQ09NLVBBTiAvdXNlcnMtYmFzZS9zcmMvc3R5bGVzL19taXhpbnMuc2NzcyIsIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3VzZXJzLWJhc2Uvc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFNUSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBVjNCO0VBY1EsY0FBYztFQUNkLFVBQVU7RUNiVixtQkRjcUI7RUNickIsaUJEYTBCO0VDWjFCLHFCQ0FnQjtFRENoQixnQkRXOEM7RUFDOUMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsMENFaEJnQixFQUFBOztBRmlCaEI7SUFyQlI7TUFzQlksWUFBWSxFQUFBLEVBRW5COztBQXhCTDtFQTJCUSxPQUFPLEVBQUE7O0FBM0JmO0lBOEJZLGFBQWE7SUFDYix1QkFBdUIsRUFBQTs7QUEvQm5DO0VBb0NRLFlBQVk7RUNsQ1osbUJEbUNxQjtFQ2xDckIsaUJEa0MwQjtFQ2pDMUIscUJDSmM7RURLZCxrQkRnQzhDO0VBQzlDLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFDWjtJQXpDUjtNQTBDWSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGFBQWEsRUFBQSxFQUVwQjs7QUE5Q0w7RUFpRFEsZUFBZSxFQUFBOztBQUNmO0lBbERSO01BbURZLGVBQWUsRUFBQSxFQUV0Qjs7QUFyREw7RUF3RFEsaUJBQWlCO0VDdERqQixtQkR1RHFCO0VDdERyQixpQkRzRDBCO0VDckQxQixxQkNKYztFREtkLGtCRG9EOEM7RUFDOUMseUJFMURjO0VGMkRkLGNFekRpQjtFRjBEakIsZUFBZTtFQUNmLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFFMUI7SUFoRVI7TUFpRVksZUFBZSxFQUFBLEVBYXRCOztBQVZHO0lBcEVSO01BcUVZLGlCQUFpQjtNQUNqQixlQUFlLEVBQUEsRUFRdEI7O0FBTEc7SUF6RVI7TUEyRWdCLHdDRTNFTSxFQUFBLEVGNEVUIiwiZmlsZSI6InNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvY29yZVwiO1xuXG46aG9zdCB7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC51c2VyLWxpc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudXNlciB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXIoc29saWQsIDFweCwgJGNvbG9yTGlnaHRHcmF5LCAwKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvckxpZ2h0R3JheSwgMC4yKTtcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb2wge1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQsICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW1hZ2Uge1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlcihzb2xpZCwgNHB4LCAkY29sb3JQcmltYXJ5LCA1MCUpO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlZS1tb3JlIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlcihzb2xpZCwgMXB4LCAkY29sb3JQcmltYXJ5LCA2cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JQcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGNvbG9yQmFja2dyb3VuZDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuXG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDM4MHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yUHJpbWFyeSwgMC44KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIGJvcmRlcigkc3R5bGUsICR3aWR0aCwgJGNvbG9yLCAkcmFkaXVzKSB7XG4gICAgYm9yZGVyOiB7XG4gICAgICAgIHN0eWxlOiAkc3R5bGU7XG4gICAgICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICAgIHJhZGl1czogJHJhZGl1cztcbiAgICB9XG59XG4iLCIvL2NvbG9yc1xuXG4kY29sb3JQcmltYXJ5OiAjMDJBREZGO1xuJGNvbG9yU2Vjb25kYXJ5OiAjMTQ4MEIzO1xuJGNvbG9yQmFja2dyb3VuZDogI0ZGRkZGRjtcbiRjb2xvclRleHRQcmltYXJ5OiAjMDAwMDAwO1xuJGNvbG9yTGlnaHRHcmF5OiAjRDJEMkQyOyJdfQ== */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.service */ "./src/app/user-list/user-list.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(userListService) {
        this.userListService = userListService;
        this.userList = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userListService.getUsers()
            .subscribe(function (users) {
            _this.userList = users;
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.service.ts":
/*!************************************************!*\
  !*** ./src/app/user-list/user-list.service.ts ***!
  \************************************************/
/*! exports provided: UserListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListService", function() { return UserListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserListService = /** @class */ (function () {
    function UserListService(httpClient) {
        this.httpClient = httpClient;
    }
    UserListService.prototype.getUsers = function () {
        return this.httpClient.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/user');
    };
    UserListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserListService);
    return UserListService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: 'https://dummyapi.io/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anna/Projects/zadania rekrutacyjne/COM-PAN /users-base/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map