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
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");





var routes = [
    {
        path: '',
        component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"]
    },
    {
        path: 'user/:id',
        component: _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"]
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
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"],
                _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"]
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

/***/ "./src/app/components/user-details/user-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <h2 class=\"title\">Szczegóły użytkownika:</h2>\n    <div class=\"user-details\" *ngIf=\"userDetails\">\n        <div class=\"headline\">\n            <img src=\"{{userDetails.image}}\" alt=\"{{userDetails.firstName}}\" class=\"image\">\n            <p>{{userDetails.nameTitle}} {{userDetails.firstName}} {{userDetails.lastName}}</p>\n        </div>\n        <div class=\"details\">\n            <p>Gender: {{userDetails.gender}}</p>\n            <p>Phone: {{userDetails.phone}}</p>\n            <p>Cell: {{userDetails.cell}}</p>\n            <p>Email: {{userDetails.email}}</p>\n            <h3>Location:</h3>\n            <p>Street: {{userDetails.location.street}}</p>\n            <p>City: {{userDetails.location.city}}</p>\n            <p>State: {{userDetails.location.state}}</p>\n            <p>Postcode: {{userDetails.location.postcode}}</p>\n            <p>Timezone: {{userDetails.location.timezone}}</p>\n        </div>\n    </div>\n    <div class=\"button\">\n        <button [routerLink]=\"'/'\" class=\"see-list\">Zobacz listę użytkowników</button>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .title {\n  text-align: center; }\n\n:host .user-details {\n  margin: 20px auto 50px;\n  padding: 20px 0;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #D2D2D2;\n  border-radius: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  box-shadow: 0 0 10px 0 #888888; }\n\n@media (min-width: 460px) {\n    :host .user-details {\n      width: 400px; } }\n\n:host .user-details .headline {\n    padding-bottom: 20px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px solid #D2D2D2; }\n\n:host .user-details .headline .image {\n      margin: 10px 20px;\n      border-style: solid;\n      border-width: 4px;\n      border-color: #02ADFF;\n      border-radius: 50%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      width: 100px;\n      height: 100px; }\n\n:host .user-details .details {\n    padding-top: 20px;\n    font-size: 14px; }\n\n@media (min-width: 460px) {\n      :host .user-details .details {\n        font-size: 16px; } }\n\n:host .button {\n  display: flex;\n  justify-content: center; }\n\n:host .button .see-list {\n    padding: 8px 16px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #02ADFF;\n    border-radius: 6px;\n    background-color: #02ADFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    cursor: pointer;\n    transition: all 250ms ease; }\n\n:host .button .see-list:hover {\n      background-color: rgba(2, 173, 255, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3VzZXJzLWJhc2Uvc3JjL2FwcC9jb21wb25lbnRzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5uYS9Qcm9qZWN0cy96YWRhbmlhIHJla3J1dGFjeWpuZS9DT00tUEFOIC91c2Vycy1iYXNlL3NyYy9zdHlsZXMvX21peGlucy5zY3NzIiwiL1VzZXJzL2FubmEvUHJvamVjdHMvemFkYW5pYSByZWtydXRhY3lqbmUvQ09NLVBBTiAvdXNlcnMtYmFzZS9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQU1RLHNCQUFzQjtFQUN0QixlQUFlO0VDTGYsbUJETXFCO0VDTHJCLGlCREswQjtFQ0oxQixxQkNBZ0I7RURDaEIsZ0JERzhDO0VBQzlDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBR1YsOEJBQTZDLEVBQUE7O0FBRTdDO0lBbEJSO01BbUJZLFlBQVksRUFBQSxFQTJCbkI7O0FBOUNMO0lBdUJZLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0NFeEJZLEVBQUE7O0FGSnhCO01BK0JnQixpQkFBaUI7TUM3QnpCLG1CRDhCNkI7TUM3QjdCLGlCRDZCa0M7TUM1QmxDLHFCQ0pjO01ES2Qsa0JEMkJzRDtNQUM5QyxvQkFBaUI7U0FBakIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixhQUFhLEVBQUE7O0FBbkM3QjtJQXdDWSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQUNmO01BMUNaO1FBMkNnQixlQUFlLEVBQUEsRUFFdEI7O0FBN0NUO0VBaURRLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFsRC9CO0lBcURZLGlCQUFpQjtJQ25EckIsbUJEb0R5QjtJQ25EekIsaUJEbUQ4QjtJQ2xEOUIscUJDSmM7SURLZCxrQkRpRGtEO0lBQzlDLHlCRXZEVTtJRndEVixjRXREYTtJRnVEYixlQUFlO0lBQ2YsZUFBZTtJQU1mLDBCQUEwQixFQUFBOztBQWhFdEM7TUE2RGdCLHdDRTdETSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb3JlXCI7XG5cbjpob3N0IHtcbiAgICAudGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlscyB7XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyKHNvbGlkLCAxcHgsICRjb2xvckxpZ2h0R3JheSwgMCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgxMzYsIDEzNiwgMTM2LCAxKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMTM2LCAxMzYsIDEzNiwgMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgxMzYsIDEzNiwgMTM2LCAxKTtcblxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA0NjBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRsaW5lIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvckxpZ2h0R3JheTtcblxuICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBib3JkZXIoc29saWQsIDRweCwgJGNvbG9yUHJpbWFyeSwgNTAlKTtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNDYwcHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLnNlZS1saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgYm9yZGVyKHNvbGlkLCAxcHgsICRjb2xvclByaW1hcnksIDZweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JQcmltYXJ5O1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvckJhY2tncm91bmQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yUHJpbWFyeSwgMC44KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxufSIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIGJvcmRlcigkc3R5bGUsICR3aWR0aCwgJGNvbG9yLCAkcmFkaXVzKSB7XG4gICAgYm9yZGVyOiB7XG4gICAgICAgIHN0eWxlOiAkc3R5bGU7XG4gICAgICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICAgIHJhZGl1czogJHJhZGl1cztcbiAgICB9XG59XG4iLCIvL2NvbG9yc1xuXG4kY29sb3JQcmltYXJ5OiAjMDJBREZGO1xuJGNvbG9yU2Vjb25kYXJ5OiAjMTQ4MEIzO1xuJGNvbG9yQmFja2dyb3VuZDogI0ZGRkZGRjtcbiRjb2xvclRleHRQcmltYXJ5OiAjMDAwMDAwO1xuJGNvbG9yTGlnaHRHcmF5OiAjRDJEMkQyOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details.service */ "./src/app/components/user-details/user-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userDetailsService, route) {
        this.userDetailsService = userDetailsService;
        this.route = route;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getUserDetails();
        this.userId = this.route.snapshot.params['id'];
        console.log(this.userId);
    };
    UserDetailsComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.userDetailsService.getUserDetails(1)
            .subscribe(function (userDetails) {
            _this.userDetails = userDetails;
            console.log(_this.userDetails);
        });
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/components/user-details/user-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_details_service__WEBPACK_IMPORTED_MODULE_2__["UserDetailsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/user-details/user-details.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-details/user-details.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsService", function() { return UserDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserDetailsService = /** @class */ (function () {
    function UserDetailsService(httpClient) {
        this.httpClient = httpClient;
    }
    UserDetailsService.prototype.getUserDetails = function (userId) {
        return this.httpClient.get('https://dummyapi.io/api/user/' + userId);
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

/***/ "./src/app/components/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <h2 class=\"title\">Lista użytkowników:</h2>\n    <div class=\"user-list\">\n        <div class=\"user\" *ngFor=\"let user of userList.data\">\n            <div class=\"col\">\n                <img src=\"{{user.image}}\" alt=\"{{user.name}}\" class=\"image\">\n            </div>\n            <div class=\"col\">\n                <p class=\"name\">{{user.nameTitle}} {{user.firstName}} {{user.lastName}}</p>\n            </div>\n            <div class=\"col\">\n                <button class=\"see-more\" [routerLink]=\"'user/' + user.id\">See details</button>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .title {\n  text-align: center; }\n\n:host .user-list {\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n:host .user {\n  margin: 10px 0;\n  width: 90%;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #D2D2D2;\n  border-radius: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(210, 210, 210, 0.2); }\n\n@media (min-width: 640px) {\n    :host .user {\n      width: 600px; } }\n\n:host .col {\n  flex: 1; }\n\n:host .col:first-child, :host .col:last-child {\n    display: flex;\n    justify-content: center; }\n\n:host .image {\n  margin: 10px;\n  border-style: solid;\n  border-width: 4px;\n  border-color: #02ADFF;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 60px;\n  height: 60px; }\n\n@media (min-width: 640px) {\n    :host .image {\n      margin: 10px 20px;\n      width: 100px;\n      height: 100px; } }\n\n:host .name {\n  font-size: 14px; }\n\n@media (min-width: 640px) {\n    :host .name {\n      font-size: 16px; } }\n\n:host .see-more {\n  padding: 5px 10px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #02ADFF;\n  border-radius: 6px;\n  background-color: #02ADFF;\n  color: #FFFFFF;\n  font-size: 10px;\n  cursor: pointer;\n  transition: all 250ms ease; }\n\n@media (min-width: 380px) {\n    :host .see-more {\n      font-size: 12px; } }\n\n@media (min-width: 640px) {\n    :host .see-more {\n      padding: 8px 16px;\n      font-size: 14px; } }\n\n@media (min-width: 1024px) {\n    :host .see-more:hover {\n      background-color: rgba(2, 173, 255, 0.8); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3VzZXJzLWJhc2Uvc3JjL2FwcC9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5uYS9Qcm9qZWN0cy96YWRhbmlhIHJla3J1dGFjeWpuZS9DT00tUEFOIC91c2Vycy1iYXNlL3NyYy9zdHlsZXMvX21peGlucy5zY3NzIiwiL1VzZXJzL2FubmEvUHJvamVjdHMvemFkYW5pYSByZWtydXRhY3lqbmUvQ09NLVBBTiAvdXNlcnMtYmFzZS9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQU1RLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFWM0I7RUFjUSxjQUFjO0VBQ2QsVUFBVTtFQ2JWLG1CRGNxQjtFQ2JyQixpQkRhMEI7RUNaMUIscUJDQWdCO0VEQ2hCLGdCRFc4QztFQUM5QyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwwQ0VoQmdCLEVBQUE7O0FGaUJoQjtJQXJCUjtNQXNCWSxZQUFZLEVBQUEsRUFFbkI7O0FBeEJMO0VBMkJRLE9BQU8sRUFBQTs7QUEzQmY7SUE4QlksYUFBYTtJQUNiLHVCQUF1QixFQUFBOztBQS9CbkM7RUFvQ1EsWUFBWTtFQ2xDWixtQkRtQ3FCO0VDbENyQixpQkRrQzBCO0VDakMxQixxQkNKYztFREtkLGtCRGdDOEM7RUFDOUMsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUNaO0lBekNSO01BMENZLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osYUFBYSxFQUFBLEVBRXBCOztBQTlDTDtFQWlEUSxlQUFlLEVBQUE7O0FBQ2Y7SUFsRFI7TUFtRFksZUFBZSxFQUFBLEVBRXRCOztBQXJETDtFQXdEUSxpQkFBaUI7RUN0RGpCLG1CRHVEcUI7RUN0RHJCLGlCRHNEMEI7RUNyRDFCLHFCQ0pjO0VES2Qsa0JEb0Q4QztFQUM5Qyx5QkUxRGM7RUYyRGQsY0V6RGlCO0VGMERqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLDBCQUEwQixFQUFBOztBQUUxQjtJQWhFUjtNQWlFWSxlQUFlLEVBQUEsRUFhdEI7O0FBVkc7SUFwRVI7TUFxRVksaUJBQWlCO01BQ2pCLGVBQWUsRUFBQSxFQVF0Qjs7QUFMRztJQXpFUjtNQTJFZ0Isd0NFM0VNLEVBQUEsRUY0RVQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvcmVcIjtcblxuOmhvc3Qge1xuICAgIC50aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudXNlci1saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnVzZXIge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyKHNvbGlkLCAxcHgsICRjb2xvckxpZ2h0R3JheSwgMCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JMaWdodEdyYXksIDAuMik7XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29sIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkLCAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmltYWdlIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBAaW5jbHVkZSBib3JkZXIoc29saWQsIDRweCwgJGNvbG9yUHJpbWFyeSwgNTAlKTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWUtbW9yZSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBAaW5jbHVkZSBib3JkZXIoc29saWQsIDFweCwgJGNvbG9yUHJpbWFyeSwgNnB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yUHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRjb2xvckJhY2tncm91bmQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcblxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiAzODBweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvclByaW1hcnksIDAuOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBib3JkZXIoJHN0eWxlLCAkd2lkdGgsICRjb2xvciwgJHJhZGl1cykge1xuICAgIGJvcmRlcjoge1xuICAgICAgICBzdHlsZTogJHN0eWxlO1xuICAgICAgICB3aWR0aDogJHdpZHRoO1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICByYWRpdXM6ICRyYWRpdXM7XG4gICAgfVxufVxuIiwiLy9jb2xvcnNcblxuJGNvbG9yUHJpbWFyeTogIzAyQURGRjtcbiRjb2xvclNlY29uZGFyeTogIzE0ODBCMztcbiRjb2xvckJhY2tncm91bmQ6ICNGRkZGRkY7XG4kY29sb3JUZXh0UHJpbWFyeTogIzAwMDAwMDtcbiRjb2xvckxpZ2h0R3JheTogI0QyRDJEMjsiXX0= */"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.service */ "./src/app/components/user-list/user-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserListComponent = /** @class */ (function () {
    function UserListComponent(userListService, router) {
        this.userListService = userListService;
        this.router = router;
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
            console.log(_this.userList);
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/components/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/user-list/user-list.service.ts ***!
  \***********************************************************/
/*! exports provided: UserListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListService", function() { return UserListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserListService = /** @class */ (function () {
    function UserListService(httpClient) {
        this.httpClient = httpClient;
    }
    UserListService.prototype.getUsers = function () {
        return this.httpClient.get('https://dummyapi.io/api/user');
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
    production: false
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