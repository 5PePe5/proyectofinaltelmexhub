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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proyectos/proyectos.component */ "./src/app/proyectos/proyectos.component.ts");
/* harmony import */ var _quienessomos_quienessomos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quienessomos/quienessomos.component */ "./src/app/quienessomos/quienessomos.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _creaunacolecta_creaunacolecta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creaunacolecta/creaunacolecta.component */ "./src/app/creaunacolecta/creaunacolecta.component.ts");
/* harmony import */ var _comodonar_comodonar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comodonar/comodonar.component */ "./src/app/comodonar/comodonar.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'inicio',
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"]
    },
    {
        path: 'proyectos',
        component: _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_2__["ProyectosComponent"]
    },
    {
        path: 'quienessomos',
        component: _quienessomos_quienessomos_component__WEBPACK_IMPORTED_MODULE_3__["QuienessomosComponent"]
    },
    {
        path: 'comodonar',
        component: _comodonar_comodonar_component__WEBPACK_IMPORTED_MODULE_6__["ComodonarComponent"]
    },
    {
        path: 'registro',
        component: _registro_registro_component__WEBPACK_IMPORTED_MODULE_9__["RegistroComponent"]
    },
    {
        path: 'creaunacolecta',
        component: _creaunacolecta_creaunacolecta_component__WEBPACK_IMPORTED_MODULE_5__["CreaunacolectaComponent"]
    },
    {
        path: 'contacto',
        component: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__["ContactoComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    },
    {
        path: 'employee',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeComponent"]
    },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#divpadre{\n    width: 600px;\n    margin: auto;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns:  1fr 1fr;\n        grid-template-columns:  1fr 1fr;\n\n/*border: 3px solid rgb(173, 12, 47); */\nbackground-color: rgb(255, 255, 255);\ngap: 10px;\n\n}\n\n#divhijos{\n    padding: 3px 10px;\n    border: rgb(189, 230, 176) 5px solid;\n    border-top-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n  \n    \n\n\n}\n\nimg{\nwidth: 100px;\nheight: 50px;\nborder-radius: 30px;\n\n}\n\n@media screen and (max-width: 700px) {\n\n    #divpadrecarousel{\n        width: 350px;\n        margin: auto;\n        \n        }\n\n    #divpadre{\n        margin: auto;\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 1fr;\n            grid-template-columns: 1fr;\n        width: 100%;\n        height: 100%;\n    background-color: rgb(255, 255, 255);\n    }\n    \n    }\n\n@media screen and (max-width: 500px){\n\n        \n    }\n    "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n<app-header> </app-header>\n\n<!--<app-barraflotante></app-barraflotante>-->\n\n<div style=\"min-height: 70vh\" class=\"body\">    <!-- para posicionar el footer siempre abajo <div style=\"min-height: 70vh  del viewport>-->\n<router-outlet></router-outlet>\n</div>\n<!--\n<div id=\"divpadre\">\n        <div  *ngFor=\"let post of posts\" id=\"divhijos\">\n            <a href=\"\"><img src=\"/assets/img/crowdfunding-620x350.jpg\" alt=\"\"></a>\n            <h5>{{post.title}}</h5>\n            <p>{{post.body}}</p>\n            </div>  \n        </div> -->\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataservice) {
        var _this = this;
        this.dataservice = dataservice;
        this.posts = [];
        this.title = 'app';
        this.dataservice.getData().subscribe(function (data) {
            _this.posts = data;
            console.log(data);
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _quienessomos_quienessomos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quienessomos/quienessomos.component */ "./src/app/quienessomos/quienessomos.component.ts");
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proyectos/proyectos.component */ "./src/app/proyectos/proyectos.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
/* harmony import */ var _comodonar_comodonar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comodonar/comodonar.component */ "./src/app/comodonar/comodonar.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _creaunacolecta_creaunacolecta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./creaunacolecta/creaunacolecta.component */ "./src/app/creaunacolecta/creaunacolecta.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _barraflotante_barraflotante_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./barraflotante/barraflotante.component */ "./src/app/barraflotante/barraflotante.component.ts");
/* harmony import */ var angular_popper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-popper */ "./node_modules/angular-popper/fesm5/angular-popper.js");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");
/* harmony import */ var _proyec_proyec_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./proyec/proyec.component */ "./src/app/proyec/proyec.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- ngModel lives here 



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _quienessomos_quienessomos_component__WEBPACK_IMPORTED_MODULE_7__["QuienessomosComponent"],
                _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_8__["ProyectosComponent"],
                _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_9__["ContactoComponent"],
                _comodonar_comodonar_component__WEBPACK_IMPORTED_MODULE_10__["ComodonarComponent"],
                _registro_registro_component__WEBPACK_IMPORTED_MODULE_11__["RegistroComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__["InicioComponent"],
                _creaunacolecta_creaunacolecta_component__WEBPACK_IMPORTED_MODULE_13__["CreaunacolectaComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _barraflotante_barraflotante_component__WEBPACK_IMPORTED_MODULE_15__["BarraflotanteComponent"],
                _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__["FormularioComponent"],
                _proyec_proyec_component__WEBPACK_IMPORTED_MODULE_18__["ProyecComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_popper__WEBPACK_IMPORTED_MODULE_16__["NgxPopper"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_19__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/barraflotante/barraflotante.component.css":
/*!***********************************************************!*\
  !*** ./src/app/barraflotante/barraflotante.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social {\n\tposition: fixed; /* Hacemos que la posición en pantalla sea fija para que siempre se muestre en pantalla*/\n\tleft: -40px; /* Establecemos la barra en la izquierda */\n\ttop: 200px; /* Bajamos la barra 200px de arriba a abajo */\n\tz-index: 2000; /* Utilizamos la propiedad z-index para que no se superponga algún otro elemento como sliders, galerías, etc */\n}\n \n\t.social ul {\n\t\tlist-style: none;\n\t}\n \n\t.social ul li a {\n\t\tdisplay: inline-block;\n\t\tcolor:#fff;\n\t\tbackground: #000;\n\t\tpadding: 10px 15px;\n\t\ttext-decoration: none;\n\t\ttransition:all 500ms ease; /* Establecemos una transición a todas las propiedades */\n\t}\n \n\t.social ul li .icon-facebook2 {background:#3b5998;}\n \n\t/* Establecemos los colores de cada red social, aprovechando su class */\n \n\t.social ul li .icon-twitter {background: #00abf0;}\n \n\t.social ul li .icon-googleplus {background: #d95232;}\n \n\t.social ul li .icon-whatsapp {background: #20fa03;}\n \n\t.social ul li .icon-mail {background: #666666;}\n \n\t.social ul li a:hover {\n\t\tbackground: #000; /* Cambiamos el fondo cuando el usuario pase el mouse */\n\t\tpadding: 10px 30px; /* Hacemos mas grande el espacio cuando el usuario pase el mouse */\n\t}\n \n\t.slides {\n\twidth:50%;\n\theight: 50%;\n\tposition: relative;\n\tleft: 5%;\n    margin-left: -100px;\n}\n \n\t@media screen and (max-width: 300px) {\n\tbody {\n\t\tpadding-top:80px;\n\t}\n\n\t.menu_bar {\n        \n\t\tdisplay:block;\n\t\twidth:100%;\n\t\tposition: fixed;\n\t\ttop:0;\n\t\tbackground:#0f0f0fd8;\n\t}\n\n\t.menu_bar .bt-menu {\n\t\tdisplay: block;\n\t\tpadding: 20px;\n\t\tcolor: #fff;\n\t\toverflow: hidden;\n\t\tfont-size: 25px;\n\t\tfont-weight: bold;\n\t\ttext-decoration: none;\n\t}\n\n\t.menu_bar span {\n\t\tfloat: right;\n\t\tfont-size: 40px;\n\t}\n\n\theader nav {\n\t\twidth: 80%;\n\t\theight: calc(100% - 80px);\n\t\tposition: fixed;\n\t\tright:100%;\n\t\tmargin: 0;\n\t\t\n\t}\n\n\theader nav ul li {\n\t\tdisplay: block;\n\t\tborder-bottom:1px solid rgba(255,255,255,.5);\n\t}\n\n\theader nav ul li a {\n\t\tdisplay: block;\n\t}\n\n\theader nav ul li:hover .children {\n\t\tdisplay: none;\n\t}\n\n\theader nav ul li .children {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t}\n\n\theader nav ul li .children li a {\n\t\tmargin-left:20px;\n\t}\n\n\theader nav ul li .caret {\n\t\tfloat: right;\n    }\n\t.social{\n        display: none;\n    }\n\t\n\n}\n \n\t@media screen and (max-width: 650px) {\n\t\n\tbody {\n\t\tpadding-top:80px;\n\t}\n\n\t.menu_bar {\n\t\tdisplay:block;\n\t\twidth:100%;\n\t\tposition: fixed;\n\t\ttop:0;\n\t\tbackground:#0f0f0fd8;\n\t}\n\n\t.menu_bar .bt-menu {\n\t\tdisplay: block;\n\t\tpadding: 20px;\n\t\tcolor: #fff;\n\t\toverflow: hidden;\n\t\tfont-size: 25px;\n\t\tfont-weight: bold;\n\t\ttext-decoration: none;\n\t}\n\n\t.menu_bar span {\n\t\tfloat: right;\n\t\tfont-size: 40px;\n\t}\n\n\theader nav {\n\t\twidth: 80%;\n\t\theight: calc(100% - 80px);\n\t\tposition: fixed;\n\t\tright:100%;\n\t\tmargin: 0;\n\t\t\n\t}\n\n\theader nav ul li {\n\t\tdisplay: block;\n\t\tborder-bottom:1px solid rgba(255,255,255,.5);\n\t}\n\n\theader nav ul li a {\n\t\tdisplay: block;\n\t}\n\n\theader nav ul li:hover .children {\n\t\tdisplay: none;\n\t}\n\n\theader nav ul li .children {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t}\n\n\theader nav ul li .children li a {\n\t\tmargin-left:20px;\n\t}\n\n\theader nav ul li .caret {\n\t\tfloat: right;\n\t}\n    .social{\n        display: none;\n    }\n\t\n}"

/***/ }),

/***/ "./src/app/barraflotante/barraflotante.component.html":
/*!************************************************************!*\
  !*** ./src/app/barraflotante/barraflotante.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social\">\n  <ul>\n    <li><a href=\"#\" class=\"icon-facebook2\"></a></li>\n    <li><a href=\"#\" class=\"icon-facebook2\"></a></li>\n    <li><a href=\"\"  class=\"icon-facebook2\"></a></li>\n    <li><a href=\"\"  class=\"icon-facebook2\"></a></li>\n    <li><a href=\"\" class=\"icon-facebook2\"></a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/barraflotante/barraflotante.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/barraflotante/barraflotante.component.ts ***!
  \**********************************************************/
/*! exports provided: BarraflotanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarraflotanteComponent", function() { return BarraflotanteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarraflotanteComponent = /** @class */ (function () {
    function BarraflotanteComponent() {
    }
    BarraflotanteComponent.prototype.ngOnInit = function () {
    };
    BarraflotanteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barraflotante',
            template: __webpack_require__(/*! ./barraflotante.component.html */ "./src/app/barraflotante/barraflotante.component.html"),
            styles: [__webpack_require__(/*! ./barraflotante.component.css */ "./src/app/barraflotante/barraflotante.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarraflotanteComponent);
    return BarraflotanteComponent;
}());



/***/ }),

/***/ "./src/app/comodonar/comodonar.component.css":
/*!***************************************************!*\
  !*** ./src/app/comodonar/comodonar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comodonar/comodonar.component.html":
/*!****************************************************!*\
  !*** ./src/app/comodonar/comodonar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h2>Como donar</h2>\n<p>\n  comodonar works!\n</p>\n\n<div>\n   <h4>DONATIVOS EN ESPECIE</h4> \n    fomenta alianzas con compañias que, mediante donativos en especie, permiten beneficiar a instituciones aliadas o programas de impacto comunitario con enfoque en nuestros pilares de acción: educación, salud y generación de ingresos. \n    \n    Entre los donativos se encuentran artículos de primera necesidad e higiene personal, artículos de papelería, utensilios de limpieza, equipo médico como material de curación, estetoscopios, productos de higiene y salud, equipo de cómputo y tabletas, juguetes para ludotecas y equipamiento escolar.\n     \n    En 2016, gracias a estas aportaciones, logramos apoyar a 68,757 personas. \n\n</div>\n\n<div>\n    <h4>DONATIVOS EN EFECTIVO</h4> \n\n    Los principales bancos del país abrieron cuentas para que los mexicanos donen en efectivo para ayudar a los damnificados del sismo de la semana pasada.\n\n    A través de Banco Inbursa con la Cuenta: 11111111111 y la Cuenta CLABE: 036180111111111111 a nombre de la Fundación Carlos Slim se pueden realizar donativos en efectivo.\n</div>\n\n"

/***/ }),

/***/ "./src/app/comodonar/comodonar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comodonar/comodonar.component.ts ***!
  \**************************************************/
/*! exports provided: ComodonarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComodonarComponent", function() { return ComodonarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComodonarComponent = /** @class */ (function () {
    function ComodonarComponent() {
    }
    ComodonarComponent.prototype.ngOnInit = function () {
    };
    ComodonarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comodonar',
            template: __webpack_require__(/*! ./comodonar.component.html */ "./src/app/comodonar/comodonar.component.html"),
            styles: [__webpack_require__(/*! ./comodonar.component.css */ "./src/app/comodonar/comodonar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComodonarComponent);
    return ComodonarComponent;
}());



/***/ }),

/***/ "./src/app/contacto/contacto.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacto/contacto.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacto/contacto.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacto/contacto.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contacto works!\n</p>\n\n\n"

/***/ }),

/***/ "./src/app/contacto/contacto.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacto/contacto.component.ts ***!
  \************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/contacto/contacto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/creaunacolecta/creaunacolecta.component.css":
/*!*************************************************************!*\
  !*** ./src/app/creaunacolecta/creaunacolecta.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/creaunacolecta/creaunacolecta.component.html":
/*!**************************************************************!*\
  !*** ./src/app/creaunacolecta/creaunacolecta.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Crea una colecta</h1>\n\n<p>\n  creaunacolecta works!\n</p>\n\n\n"

/***/ }),

/***/ "./src/app/creaunacolecta/creaunacolecta.component.ts":
/*!************************************************************!*\
  !*** ./src/app/creaunacolecta/creaunacolecta.component.ts ***!
  \************************************************************/
/*! exports provided: CreaunacolectaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreaunacolectaComponent", function() { return CreaunacolectaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreaunacolectaComponent = /** @class */ (function () {
    function CreaunacolectaComponent() {
    }
    CreaunacolectaComponent.prototype.ngOnInit = function () {
    };
    CreaunacolectaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creaunacolecta',
            template: __webpack_require__(/*! ./creaunacolecta.component.html */ "./src/app/creaunacolecta/creaunacolecta.component.html"),
            styles: [__webpack_require__(/*! ./creaunacolecta.component.css */ "./src/app/creaunacolecta/creaunacolecta.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreaunacolectaComponent);
    return CreaunacolectaComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3>Alta de proyectos</h3>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s5\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <form #employeeForm=\"ngForm\" (ngSubmit)=\"addEmployee(employeeForm)\">\n            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee._id\">\n            <div class=\"row\">\n              <div class=\"input-field col-s12\">\n                <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.name\" placeholder=\"Ingresa Nombre\">\n              </div>\n              <div class=\"input-field col-s12\">\n                <input type=\"text\" name=\"position\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.position\" placeholder=\"Ingresa proyecto\">\n              </div>\n              <div class=\"input-field col-s12\">\n                <input type=\"text\" name=\"office\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.office\" placeholder=\"Ingresa Region\">\n              </div>\n              <div class=\"input-field col-s12\">\n                <input type=\"text\" name=\"salary\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.salary\" value=\"\" placeholder=\"Ingresa Monto a recaudar\">\n              </div>\n             \n              <div class=\"card-action\">\n                <div class=\"input-field col-s12\">\n                  <button class=\"btn right\" style=\"margin-left: 2px;\" (click)=\"resetForm(employeeForm)\">Limpiar</button>\n                  <button class=\"btn right\">Guardar</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col s7\">\n      <table class=\"striped highlight black-text\">\n        <thead>\n          <th>Nombre</th>\n          <th>Posicion</th>\n          <th>Region</th>\n          <th>Monto</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let employee of employeeService.employees\">\n            <td>{{ employee.name }}</td>\n            <td>{{ employee.position }}</td>\n            <td>{{ employee.office }}</td>\n            <td>{{ employee.salary}}</td>\n            <td>\n              <a (click)=\"editEmployee(employee)\">\n                <i class=\"material-icons\">Editar</i>\n              </a>\n              <a (click)=\"deleteEmployee(employee._id, employeeForm)\">\n                <i class=\"material-icons\">Eliminar</i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/employee */ "./src/app/models/employee.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeeComponent.prototype.addEmployee = function (form) {
        var _this = this;
        console.log(form.value);
        if (form.value._id) {
            this.employeeService.putEmployee(form.value)
                .subscribe(function (res) {
                _this.resetForm(form);
                _this.getEmployees();
                M.toast({ html: 'Updated Successfully' });
            });
        }
        else {
            this.employeeService.postEmployee(form.value)
                .subscribe(function (res) {
                _this.getEmployees();
                _this.resetForm(form);
                M.toast({ html: 'Save successfully' });
            });
        }
    };
    EmployeeComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (res) {
            _this.employeeService.employees = res;
        });
    };
    EmployeeComponent.prototype.editEmployee = function (employee) {
        this.employeeService.selectedEmployee = employee;
    };
    EmployeeComponent.prototype.deleteEmployee = function (_id, form) {
        var _this = this;
        if (confirm('Are you sure you want to delete it?')) {
            this.employeeService.deleteEmployee(_id)
                .subscribe(function (res) {
                _this.getEmployees();
                _this.resetForm(form);
                M.toast({ html: 'Deleted Succesfully' });
            });
        }
    };
    EmployeeComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
            this.employeeService.selectedEmployee = new _models_employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
        }
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")],
            providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: sans-serif;\n}\nfooter{\n    width: 100%;\n    background: #202020;\n    color: white;   \n    bottom: 0%;\n\n}\n.container-footer-all{\n    width: 100%;\n    max-width: 1200px;\n    margin: auto;\n    padding: 40px;\n    bottom: 0%;\n}\n.container-body{\n    display: flex;\n    justify-content: space-between;\n}\n.colum1{\n    max-width: 400px;\n}\n.colum1 h1{\n    font-size: 22px;\n}\n.colum1 p{\n    font-size: 14px;\n    color: #C7C7C7;\n    margin-top: 20px;\n}\n.colum2{\n    max-width: 400px;\n    \n}\n.colum2 h1{\n    font-size: 22px;\n}\n.row{\n    margin-top: 20px;\n    display: flex;\n}\n.row img{\n    width: 36px;\n    height: 36px;\n}\n.row label{\n    margin-top: 10px;\n    margin-left: 20px;\n    color: #C7C7C7;\n}\n.colum3{\n    max-width: 400px;\n}\n.colum3 h1{\n    font-size: 22px;\n}\n.row2{\n    margin-top: 20px;\n    display: flex;\n}\n.row2 img{\n    width: 36px;\n    height: 36px;\n}\n.row2 label{\n    margin-top: 10px;\n    margin-left: 20px;\n    max-width: 140px;\n}\n.container-footer{\n    width: 100%;  \n    background: #00af09;\n}\n.footer{\n    max-width: 1200px;\n    margin: auto;\n    display: flex;\n    justify-content: space-between;  \n    padding: 20px;\n}\n.copyright{\n    color: white;\n}\n.copyright a{\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n}\n.information a{\n    text-decoration: none;\n    color:white;\n}\n@media screen and (max-width: 600px){\n    \n    .container-body{\n        flex-wrap: wrap;\n    }\n    \n    .colum1{\n        max-width: 100%;\n    }\n    \n    .colum2,\n    .colum3{\n        margin-top: 40px;\n    }\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n       \n  <div class=\"container-footer-all\">\n   \n       <div class=\"container-body\">\n\n           <div class=\"colum1\">\n               <h1>Mas informacion</h1>\n\n               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non incidunt voluptate exercitationem libero excepturi animi at ipsum, ipsam reprehenderit. Eligendi ab assumenda dignissimos tempora vel alias? Optio voluptatibus obcaecati temporibus.</p>\n                  </div>\n\n           <div class=\"colum2\">\n\n               <h1>Redes Sociales</h1>\n\n               <div class=\"row\">\n                   <img src=\"/assets/img/icon/facebook.png\">\n                   <label>Siguenos en Facebook</label>\n               </div>\n               <div class=\"row\">\n                   <img src=\"/assets/img/icon/twitter.png\">\n                   <label>Siguenos en Twitter</label>\n               </div>\n               <div class=\"row\">\n                   <img src=\"/assets/img/icon/instagram.png\">\n                   <label>Siguenos en Instagram</label>\n               </div>\n               <div class=\"row\">\n                   <img src=\"/assets/img/icon//google-plus.png\">\n                   <label>Siguenos en Google Plus</label>\n               </div>\n               <div class=\"row\">\n                   <img src=\"/assets/img/icon//pinterest.png\">\n                   <label>Siguenos en Pinteres</label>\n               </div>\n\n\n           </div>\n\n           <div class=\"colum3\">\n\n               <h1>Informacion Contactos</h1>\n\n               <div class=\"row2\">\n                   <img src=\"/assets/img/icon/house.png\"><label>Telmexhub, Isabel la catolica sin # </label>\n                  </div>\n\n               <div class=\"row2\">\n                   <img src=\"/assets/img/icon//smartphone.png\"><label>56-56 -11-11</label>\n                  </div>\n\n               <div class=\"row2\">\n                   <img src=\"/assets/img/icon/contact.png\"><label>compuaztec75@gmail.com</label>\n                  </div>\n\n           </div>\n\n       </div>\n   \n   </div>\n   \n   <div class=\"container-footer\">\n          <div class=\"footer\">\n               <div class=\"copyright\"> © 2018 Todos los Derechos Reservados | <a href=\"\">PePe</a></div>\n               <div class=\"information\"><a href=\"\">Informacion del equipo</a> | <a href=\"\">Aviso de Privacidad y Politicas</a> | <a href=\"\">Terminos y Condiciones</a></div></div>\n          </div>\n   \n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.netImage = "/src/assets/img/icon/facebook.png";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/formulario/formulario.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formulario/formulario.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/formulario/formulario.component.html":
/*!******************************************************!*\
  !*** ./src/app/formulario/formulario.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  formulario works!\n</p>\n"

/***/ }),

/***/ "./src/app/formulario/formulario.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formulario/formulario.component.ts ***!
  \****************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormularioComponent = /** @class */ (function () {
    function FormularioComponent() {
    }
    FormularioComponent.prototype.ngOnInit = function () {
    };
    FormularioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formulario',
            template: __webpack_require__(/*! ./formulario.component.html */ "./src/app/formulario/formulario.component.html"),
            styles: [__webpack_require__(/*! ./formulario.component.css */ "./src/app/formulario/formulario.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormularioComponent);
    return FormularioComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n\tpadding:0;\n\t/*margin:0;*/\n\tbox-sizing: border-box;\n}\n\nbody {background:#FEFEFE;}\n\n.menu_bar {\n    display:none; \n}\n\nheader {\n    width: 100%;\n    background-color:#000000;\n\tmargin-top: 0%;\n\tposition: fixed;\n\ttop:0px;\n\tz-index:1000;\n\t\n\t\n\t\n}\n\nheader nav {\n\tbackground:#0f0f0fd8;\n\tz-index:1000;\n\t/* max-width: 1000px; */\n\twidth:100%;\n\tmargin:0px;\n\tmargin-top: 0px;\n\tposition: fixed;\n\theight: 60px;\n\tborder: 1px solid #888;\n    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.226);\n}\n\nheader nav ul {\n\tlist-style:none;\n}\n\nheader nav ul li {\n\tdisplay:inline-block;\n\tposition: relative;\n}\n\nheader nav ul li:hover {\n\tbackground-color: rgba(44, 184, 1, 0.979);\n\tborder-radius: 7px;\n\t\n}\n\nheader nav ul li a {\n\tcolor:#fff;\n\tdisplay:block;\n\ttext-decoration:none;\n\tpadding: 20px 10px;\n}\n\nheader nav ul li a span {\n\tmargin-right:10px;\n}\n\nheader nav ul li:hover .children {\n\tdisplay:block;\n}\n\nheader nav ul li .children {\n\tdisplay: none;\n\tbackground:#1213127e;\n\tposition: absolute;\n\twidth: 150%;\n\t\n}\n\nheader nav ul li .children li {\n\tdisplay:block;\n\toverflow: hidden;\n\tborder-bottom: 1px solid rgba(7, 7, 7, 0.486);\n}\n\nheader nav ul li .children li a {\n\tdisplay: block;\n}\n\nheader nav ul li .children li a span {\n\tfloat: right;\n\tposition: relative;\n\ttop:3px;\n\tmargin-right:100px;\n\tmargin-left:100px;\n}\n\nheader nav ul li .caret {\n\tposition: relative;\n\ttop:3px;\n\tmargin-left:10px;\n\tmargin-right:0px;\n}\n\n@media screen and (max-width: 300px) {\n\n\n\t.menu_bar {\n        \n\t\tdisplay:block;\n\t\twidth:90%;\n\t\tposition: fixed;\n\t\ttop:0px;\n\t\tbackground:#0f0f0fd8;\n\t}\n\n\t.menu_bar .bt-menu {\n\t\tdisplay: block;\n\t\tpadding: 5px;\n\t\tcolor: #fff;\n\t\toverflow: hidden;\n\t\tfont-size: 5px;\n\t\tfont-weight: bold;\n\t\ttext-decoration: none;\n\t}\n\n\t.menu_bar span {\n\t\tfloat: left;\n\t\tfont-size: 50px;\n\t}\n\n\theader nav {\n\n\tbackground:#0f0f0fd8;\n\tz-index:1000;\n\t/* max-width: 1000px; */\n\twidth:100%;\n\tmargin:0px;\n\tmargin-top: 50px;\n\tposition: fixed;\n\theight: 100px;\n\tborder: 4px solid #888;\n    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.226);\n\t\t\n\t\t\n\t}\n\n\theader nav ul li {\n\t\tdisplay: block;\n\t\tborder-bottom:1px solid rgba(255,255,255,.5);\n\t}\n\n\theader nav ul li a {\n\t\tdisplay: block;\n\t\tpadding: 5px;\n\t}\n\n\theader nav ul li:hover .children {\n\t\t\n\t\t\n\t}\n\n\theader nav ul li .children {\n\t\twidth: 90%;\n\t\tposition: relative;\n\t}\n\n\theader nav ul li .children li a {\n\t\tmargin-left:20px;\n\t}\n\n\theader nav ul li .caret {\n\t\tfloat: right;\n    }\n    .social{\n        display: none;\n    }\n\n}\n\n@media screen and (max-width: 900px) {\n\n\t.menu_bar {\n\t\tdisplay:block;\n\t\twidth:100%;\n\t\tposition: fixed;\n\t\ttop:0px;\n\t\tbackground:#3a3a3af1;\n\t}\n\n\t.menu_bar .bt-menu {\n\t\tdisplay: block;\n\t\tpadding: 10px;\n\t\tcolor: #fff;\n\t\toverflow: hidden;\n\t\tfont-size: 20px;\n\t\tfont-weight: bold;\n\t\ttext-decoration: none;\n\t}\n\n\t.menu_bar span {\n\t\tfloat: right;\n\t\tfont-size: 10px;\n\t}\n\n\theader nav {\n\t\t\n\t\tbackground:#0f0f0fd8;\n\t\twidth: 70%;\n\t\theight: calc(100% -10px);\n\t\tposition: fixed;\n\t\tright:100%;\n\t\tmargin: 1px;\n\t\ttop: 45px;\n\t\theight: 600px;\n\t\tborder: 4px solid #888;\n        box-shadow: 0 5px 40px 0 rgba(0, 0, 0, 0.226);\n\n\t}\n\n\theader nav ul li {\n\t\tpadding: 1px;\n\t\tdisplay: block ;\n\t\tborder-bottom:1px solid rgba(255,255,255,.5);\n\t}\n\n\theader nav ul li a {\n\t\tdisplay: block;\n\n\t}\n\n\theader nav ul li:hover .children {\n\t\tbackground-color: rgba(0, 0, 0, 0.548);\n\t}\n\n\theader nav ul li .children {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t}\n\n\theader nav ul li .children li a {\n\t\tmargin-left:20px;\n\t}\n\n\theader nav ul li .caret {\n\t\tfloat: right;\n\t}\n    .social{\n        display: none;\n    }\n\t\n}\n\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <div class=\"menu_bar\">\n      <a class=\"bt-menu\"><span><img src=\"/assets/img/icon/menu.svg\" alt=\"\"></span>Menú</a>\n      </div>\n\n      <nav>\n<ul>\n  <li><a routerLink=\"inicio\"><span><img src=\"/assets/img/icon/home.svg\" alt=\"\"></span>Inicio</a></li>\n  <li class=\"submenu\">\n  <a routerLink=\"proyectos\"><span class=\"\"><img src=\"/assets/img/icon/make.svg\" alt=\"\"></span>Proyectos</a>\n  <ul class=\"children\">\n      <li><a routerLink=\"#\">Proyecto #1<span class=\"icon-dot\"></span></a></li>\n      <li><a routerLink=\"#\">Proyecto #2<span class=\"icon-dot\"></span></a></li>\n      <li><a routerLink=\"#\">Proyecto #3<span class=\"icon-dot\"></span></a></li>\n    </ul>\n  </li>\n  <li><a routerLink=\"creaunacolecta\"><span class=\"icon-rocket\"><img src=\"/assets/img/icon/coin-dollar.svg\" alt=\"\"></span>Crea una colecta</a></li>\n  <li><a routerLink=\"comodonar\"><span class=\"icon-dot\"><img src=\"/assets/img/icon/credit-card.svg\" alt=\"\"></span>Como donar</a></li>\n    <li><a routerLink=\"quienessomos\"><span class=\"icon-dot\"><img src=\"/assets/img/icon/man-woman.svg\" alt=\"\"></span>Quienes somos</a></li>\n     <!-- <li><a routerLink=\"contacto\"><span class=\"icon-mail\"><img src=\"/assets/img/icon/mail.svg\" alt=\"\"></span>Contacto</a></li>-->\n      <li><a routerLink=\"registro\"><span class=\"icon-mail\"><img src=\"/assets/img/icon/key.svg\" alt=\"\"></span>Registro</a></li>\n      <li><a routerLink=\"login\"><span class=\"icon-mail\"><img src=\"/assets/img/icon/enter.svg\" alt=\"\"></span>Login</a></li>\n      <li><a routerLink=\"employee\"><span class=\"icon-mail\"><img src=\"/assets/img/icon/enter.svg\" alt=\"\"></span>altas</a></li> \n</ul>\n\n\n</nav>\n\n\n</header>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(main);
        var contador = 1;
        function main() {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.menu_bar').click(function () {
                if (contador == 1) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('nav').animate({
                        left: '0%'
                    });
                    contador = 0;
                }
                else {
                    contador = 1;
                    jquery__WEBPACK_IMPORTED_MODULE_1__('nav').animate({
                        left: '-100%'
                    });
                }
            });
        }
        ;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#divpadrecarousel{\nwidth: 50%;\nmargin: auto;\nheight: 400px;\n\n}\n#divpadre{\n    width: 600px;\n    margin: auto;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns:  1fr 1fr;\n        grid-template-columns:  1fr 1fr;\n\n/*border: 3px solid rgb(173, 12, 47); */\nbackground-color: rgb(255, 255, 255);\ngap: 10px;\n\n}\n#hijos{\n    padding: 3px 10px;\n    border: rgb(189, 230, 176) 5px solid;\n    border-top-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n  \n    \n\n\n}\n@media screen and (max-width: 700px) {\n\n    #divpadrecarousel{\n        width: 350px;\n        margin: auto;\n        \n        }\n\n    #divpadre{\n        margin: auto;\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 1fr;\n            grid-template-columns: 1fr;\n        width: 100%;\n        height: 100%;\n    background-color: rgb(255, 255, 255);\n    }\n    \n    }\n    "

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"divpadrecarousel\">\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"/assets/img/desa.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"/assets/img/susten.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"/assets/img/susten.jpg\" alt=\"Third slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n\n\n<!--\n\n  <br>\n  <br>\n  <div id=\"divpadre\">\n    \n    <div id=\"hijos\">\n        <img src=\"/assets/img/icon/facebook.png\" alt=\"\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla dolor quo id rerum nesciunt eum animi, sed earum nihil officiis, reiciendis fuga inventore quisquam similique ad rem ea hic\n  </div>\n\n    <div id=\"hijos\"><img src=\"/assets/img/icon/facebook.png\" alt=\"\">\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum assumenda aperiam aliquid amet similique, porro illo aliquam beatae ipsa explicabo itaque ipsum ex consectetur vitae doloribus ratione, deserunt officiis.\n    </div>\n    <div id=\"hijos\">\n        <img src=\"/assets/img/icon/facebook.png\" alt=\"\">\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, recusandae exercitationem. Dolor, harum! Nostrum perferendis, facilis fuga laudantium maxime necessitatibus adipisci nam tempore, laboriosam modi nesciunt dolores. Quaerat, harum architecto.\n    </div>\n    <div id=\"hijos\">\n        <img src=\"/assets/img/icon/facebook.png\" alt=\"\">\n        \n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, recusandae exercitationem. Dolor, harum! Nostrum perferendis, facilis fuga laudantium maxime necessitatibus adipisci nam tempore, laboriosam modi nesciunt dolores. Quaerat, harum architecto.\n    </div>\n    <div id=\"hijos\">\n        <img src=\"/assets/img/icon/facebook.png\" alt=\"\">\n        \n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, recusandae exercitationem. Dolor, harum! Nostrum perferendis, facilis fuga laudantium maxime necessitatibus adipisci nam tempore, laboriosam modi nesciunt dolores. Quaerat, harum architecto.\n    </div>\n    <div id=\"hijos\">\n        <img src=\"/assets/img/icon/facebook.png\" alt=\"\">\n        \n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, recusandae exercitationem. Dolor, harum! Nostrum perferendis, facilis fuga laudantium maxime necessitatibus adipisci nam tempore, laboriosam modi nesciunt dolores. Quaerat, harum architecto.\n    </div>\n    </div>\n<br>\n   \n-->"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InicioComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InicioComponent.prototype, "body", void 0);
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#modal{\n    z-index: 9000;\n    background:#010a0c8f;\n    width:100%;\n    height: 100%;\n\tmargin:0px;\n    position: fixed;\n}\n\n.modal-header {\n    padding: 2px 16px;\n    background-color: #0faa0fc9;\n    color: white;\n    border-radius: 20px;\n\n}\n\n/* Modal Body */\n\n.modal-body {\n    padding: 2px 16px;\n   \n}\n\n/* Modal Footer */\n\n.modal-footer {\n    padding: 2px 16px;\n    background-color: #5cb85c;\n    color: white;\n}\n\n/* Modal Content */\n\n.modal-content {\n    width: 330px;\n    top: 100px;\n    position: relative;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    -webkit-animation-name: animatetop;\n            animation-name: animatetop;\n    -webkit-animation-duration: 0.30s;\n            animation-duration: 0.30s;\n    border-radius: 20px;\n\n}\n\n.imagenavatar{\n    text-align: center;\n    margin: 12px 0 12px 0;\n    \n\n}\n\n.avatarimagen{\n  width: 70px;\n    border-radius: 50%;\n\n}\n\n.ingresoform{\n    text-align: center;\n}\n\n.inputs{\nborder: none;\nborder-bottom: rgb(0, 255, 13) 2px solid\n    }\n\n.botoningresar {\n\n    background: rgba(0, 180, 15, 0.74);\n    border-radius: 15px;\n    border: 2px solid #f2f2f2;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: \"Roboto\";\n    font-size: 16px;\n    padding: 15px;\n    width: 100%;\n    transition: all 0.3s ease; \n}\n\n.botoningresar:hover {\n    background: #1976D2; \n}\n\n/* Animacion  cuando abre modal*/\n\n@-webkit-keyframes animatetop {\n    from {top: -500px; opacity: 0}\n    to {top: 0; opacity: 0}\n}\n\n@keyframes animatetop {\n    from {top: -500px; opacity: 0}\n    to {top: 0; opacity: 0}\n}\n\n@media screen and (max-width: 600px) {\n\n   \n  \n    .modal-content {\n        width: 330px;\n        top: 20px;\n        position: relative;\n        margin: auto;\n        padding: 0;\n        border: 1px solid #888;\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n        -webkit-animation-name: animatetop;\n                animation-name: animatetop;\n        -webkit-animation-duration: 0.30s;\n                animation-duration: 0.30s;\n        border-radius: 20px;\n    \n    }\n\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"modal\">\n\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5>Ingresar</h5> \n     <a href=\"\"> <span class=\"close\">&times;</span></a>\n    </div>\n    <div class=\"imagenavatar\">\n      <img src=\"/assets/img/img_avatar2.png\" alt=\"\" class=\"avatarimagen\">\n    </div>\n    <div class=\"modal-body\">\n      <div>\n        <form action=\"\" class=\"ingresoform\">\n         \n          <br>\n         <input class=\"inputs\" type=\"email\" required placeholder=\"Ingresa usuario*\">\n          <br>\n          <br>\n          <br>\n          <input class=\"inputs\" type=\"password\" placeholder=\"Ingresa contraseña*\" required>\n          <div class=\"botones\">\n            <br>\n            <br>\n            <button type=\"submit\" class=\"botoningresar\">Ingresar</button>\n            <p>si no tienes cuenta has click <a href=\"registro\">aqui</a></p>\n\n          </div>\n        </form>\n      </div>\n    </div>\n      <br>\n  </div>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--   \n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\n  Launch demo modal\n</button>\n\n Modal\n<div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n          <form action=\"action_page.php\">\n              <div class=\"imgcontainer\">\n                <img src=\"/assets/img/img_avatar2.png\" alt=\"Avatar\" class=\"avatar\">\n              </div>\n            \n              <div class=\"container\">\n                <label for=\"uname\"><b>Usuario</b></label>\n                <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\n            \n                <label for=\"psw\"><b>Password</b></label>\n                <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n            \n                <button type=\"submit\">Login</button>\n                <label>\n                  <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Recordar cuenta\n                </label>\n              </div>\n            \n              <div class=\"container\" style=\"background-color:#f1f1f1\">\n                <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n                <span class=\"psw\">Olvide mi <a href=\"inicio\">password?</a></span>\n              </div>\n            </form>\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/employee.ts":
/*!************************************!*\
  !*** ./src/app/models/employee.ts ***!
  \************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(_id, name, position, office, salary) {
        if (_id === void 0) { _id = ''; }
        if (name === void 0) { name = ''; }
        if (position === void 0) { position = ''; }
        if (office === void 0) { office = ''; }
        if (salary === void 0) { salary = 0; }
        this._id = _id;
        this.name = name;
        this.position = position;
        this.office = office;
        this.salary = salary;
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/proyec/proyec.component.css":
/*!*********************************************!*\
  !*** ./src/app/proyec/proyec.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/proyec/proyec.component.html":
/*!**********************************************!*\
  !*** ./src/app/proyec/proyec.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  proyec works!\n</p>\n"

/***/ }),

/***/ "./src/app/proyec/proyec.component.ts":
/*!********************************************!*\
  !*** ./src/app/proyec/proyec.component.ts ***!
  \********************************************/
/*! exports provided: ProyecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyecComponent", function() { return ProyecComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProyecComponent = /** @class */ (function () {
    function ProyecComponent() {
    }
    ProyecComponent.prototype.ngOnInit = function () {
    };
    ProyecComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proyec',
            template: __webpack_require__(/*! ./proyec.component.html */ "./src/app/proyec/proyec.component.html"),
            styles: [__webpack_require__(/*! ./proyec.component.css */ "./src/app/proyec/proyec.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProyecComponent);
    return ProyecComponent;
}());



/***/ }),

/***/ "./src/app/proyectos/proyectos.component.css":
/*!***************************************************!*\
  !*** ./src/app/proyectos/proyectos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#divpadre{\n    width: 800px;\n    margin: auto;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns:  1fr 1fr;\n        grid-template-columns:  1fr 1fr;\n\n/*border: 3px solid rgb(173, 12, 47); */\nbackground-color: rgb(255, 255, 255);\ngap: 10px;\n\n}\n\n#divhijos{\n    grid-column-gap: 100px;\n    grid-row-gap: 1000Px;\n    padding: 40px 40px;\n    border: rgb(189, 230, 176) 5px solid;\n    border-top-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    box-shadow: 4px 7px #03a9eb7a;\n\n}\n\nimg{\nwidth: 300px;\nheight: 100px;\n\n\n}\n\n@media screen and (max-width: 700px) {\n\n    #divpadrecarousel{\n        width: 350px;\n        margin: auto;\n        \n        }\n\n    #divpadre{\n        margin: auto;\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 1fr;\n            grid-template-columns: 1fr;\n        width: 100%;\n        height: 100%;\n    background-color: rgb(255, 255, 255);\n    }\n    imgp{\n        width: 300px;\n        height: 100px;\n    }\n    }\n    "

/***/ }),

/***/ "./src/app/proyectos/proyectos.component.html":
/*!****************************************************!*\
  !*** ./src/app/proyectos/proyectos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  proyectos works!nnnnnnnnnnnnnnnnnnnnnnnnnnnn\n</p>\n\n<div id=\"divpadre\">\n    <div  *ngFor=\"let post of posts\" id=\"divhijos\">\n            <h5>{{post.name}}</h5>\n        <a href=\"\"><img src=\"https://picsum.photos/200\" alt=\"\"></a>\n        \n       <a href=\"\">Monto Recaudado<p>$ {{post.salary}}</p></a>\n        <a href=\"\">{{post.poyectoid}} Quiero donar</a>\n        </div>  \n    </div>\n  "

/***/ }),

/***/ "./src/app/proyectos/proyectos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/proyectos/proyectos.component.ts ***!
  \**************************************************/
/*! exports provided: ProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function() { return ProyectosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProyectosComponent = /** @class */ (function () {
    function ProyectosComponent(dataservice) {
        var _this = this;
        this.dataservice = dataservice;
        this.posts = [];
        this.dataservice.getData().subscribe(function (data) {
            _this.posts = data;
            console.log(data);
        });
    }
    ProyectosComponent.prototype.ngOnInit = function () {
    };
    ProyectosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proyectos',
            template: __webpack_require__(/*! ./proyectos.component.html */ "./src/app/proyectos/proyectos.component.html"),
            styles: [__webpack_require__(/*! ./proyectos.component.css */ "./src/app/proyectos/proyectos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProyectosComponent);
    return ProyectosComponent;
}());



/***/ }),

/***/ "./src/app/quienessomos/quienessomos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/quienessomos/quienessomos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#divhijo{\nwidth: 800px;\nbox-shadow: 7px 12px rgba(255, 81, 0, 0.349);\nheight: auto; \nmargin: auto;\ntext-align: justify;\n}\n\n#displayiconos{\n  \n    position: fixed;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr ;\n        grid-template-columns: 1fr ;\n    -ms-grid-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-gap: 2px;\n    z-index: 6000;\n    left: 10px;\n    margin-top: 30px;\n    \n    \n\n\n}\n\n#displayiconos img{\n    border: 2px solid  rgba(0, 0, 0, 0.377);\n    align-content: center;\nborder-radius: 50px;\nbackground-color: rgb(60, 255, 0);\n\n\n}\n\n#divicono{\n\n    width:40px;\nalign-content: center;\nborder-radius: 40px;\n\n}\n\n#imgquienes{\n    box-shadow: 4px 5px rgba(0, 0, 0, 0.267);\nwidth: 100%;\nheight: 300px;\n}\n\n#divlinea{\n    width: 2px;\n    border: 1px solid black;\n    margin-left: 17px;\n}\n\n@media screen and (max-width: 350px) {\n    img{\n        box-shadow: 4px 5px rgba(0, 0, 0, 0.267);\n        width: 350px;\n\n}\n\n#divhijo{\n    width: 330px;\n    box-shadow: 7px 12px rgba(255, 81, 0, 0.349);\n    height: auto;\n    margin: auto;\n    text-align: justify;\n\n}\n#displayiconos{\n    display: none;\n}\n}\n\n@media screen and (max-width: 700px) {\n    img{\n        box-shadow: 4px 5px rgba(0, 0, 0, 0.267);\n        width: 350px;\n\n}\n\n#divhijo{\n    width: 330px;\n    box-shadow: 7px 12px rgba(255, 81, 0, 0.349);\n    height: auto;\n    margin: auto;\n    text-align: justify;\n\n}\n#displayiconos{\n    display: none;\n}\n}"

/***/ }),

/***/ "./src/app/quienessomos/quienessomos.component.html":
/*!**********************************************************!*\
  !*** ./src/app/quienessomos/quienessomos.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <img id=\"imgquienes\"src=\"/assets/img/quees.png\" alt=\"\" >\n</div>\n<div id=\"displayiconos\">\n<a href=\"\"> <div id=\"divicono\"> <img id=\"imgiconos\" src=\"/assets/img/iconos30px/accessibility.svg\" alt=\"\"></div></a>\n    <div id=\"divlinea\"></div>\n <div id=\"divicono\">\n    <a href=\"#enviaproyecto\"><img id=\"imgiconos\"src=\"/assets/img/iconos30px/folder-upload.svg\" alt=\"\"></a></div>\n    <div id=\"divlinea\"></div>\n    <a href=\"\"> <div id=\"divicono\"><img id=\"imgiconos\" src=\"/assets/img/iconos30px/share.svg\" alt=\"\"></div></a>\n    <div id=\"divlinea\"></div>\n<a href=\"\"> <div id=\"divicono\"><img  id=\"imgiconos\" src=\"/assets/img/iconos30px/share.svg\" alt=\"\"></div></a>\n</div>\n\n<br>\n<br>\n<br>\n<br>\n<div id=\"divhijo\">\n    <h5>¿Qué es el crowdfunding?</h5>\n\n<p>\nUna nueva forma de financiar proyectos con ayuda de los mecenas\n\nHasta hace muy poco tiempo, si alguien quería sacar un proyecto adelante y necesitaba financiación tenía una serie de opciones genéricas. Pedir un préstamo, una subvención o engañar a familiares o amigos. Hoy en día, cada vez existen más plataformas de crowdfunding, pero ¿qué es el crowdfunding, la financiación colectiva o el micromecenazgo?\n\n</p>\n<section id=\"enviaproyecto\">\n<div >\n<h5 >Envíanos tu Proyecto</h5> \n\n<h6> Definiciones</h6>\nCrowdfunding: “Cooperación colectiva, llevada a cabo por personas que realizan una red para conseguir dinero u otros recursos, se suele utilizar Internet para financiar esfuerzos e iniciativas de otras personas u organizaciones”. Fuente: Wikipedia.\n<p>\nCrowdsourcing, “del inglés crowd (masa) y sourcing (externalización), también conocido como “tercerización masiva” o “subcontratación voluntaria”, consiste en externalizar tareas que, tradicionalmente, realizaba un empleado o contratista, a un grupo numeroso de personas o una comunidad (masa), a través de una convocatoria abierta.” Fuente: Wikipedia.\n\nEl crowdfunding nace de los primeros proyectos de Open Source donde los desarrolladores inicialmente ofrecían su trabajo de forma desinteresada. Posteriormente, frente al éxito de sus creaciones y también al trabajo que eso conllevaba, empezaron a pedir donaciones y la respuesta fue de nuevo mayor de la esperada. En ese momento, entre los creadores (que requerían de financiación) y los usuarios (que demandaban proyectos creativos y pagaban por ellos) nacia el Crowdfunding, la financiación colectiva, como una nueva opción para financiar, en un primer momento, proyecto creativos. Fuente: Wikipedia.\n\n“Nadie es dueño de la multitud aunque crea tenerla dominada – Eugene Ionesco, Dramaturgo francés”\nHoy en día, cada vez existen más webs de crowdfunding y más proyectos financiados por ésta vía, algo que supone una nueva revolución en todos los sectores en los que nos movamos.\n\nLos tipos de proyectos que se financian mediante el Crowdfunding no dejan de crecer, desde proyectos creativos hasta solidarios, pasando por empresariales. La especialización es cada vez mayor, y se espera que el crecimiento sea superior al 100% en los próximos años.\n</p>\n</div>\n</section>\n<h4>¿Cómo funciona el crowdfunding en general?</h4>\n<p>\n\nEl emprendedor (creativo…) envía el proyecto a la plataforma de Crowdfunding. Indicando descripción, cantidad necesaria, tiempo de recaudación, recompensas…\nAlgunos se valoran de forma comunitaria, otros los valora la plataforma de Crowdfunding…\nSe publica el proyecto por un tiempo determinado, 30, 60, 90, 120 días.\nSe promociona lo máximo posible.\nFin del plazo. Financiado o no.\nEste esquema puede verse alterado en gran medida en función del tipo de crowdfunding del que estemos hablado: recompensas, donaciones, inversión o préstamos.\n\nLa comunidad como esencia del crowdfunding\n¿Qué es una comunidad?\nRAE “Conjunto de personas y/u organizaciones interesadas en que un proyecto salga adelante”. “Un grupo de personas con diversas características que se encuentran asociadas por vínculos sociales, comparten perspectivas comunes y participan en acción conjunta en localidades o entornos geográficos (o virtuales).”\n\nLa comunidad como esencia del crowdfunding\nEl éxito o el fracaso de todos los proyectos que lanzan campañas de crowdfunding se basa en la captación de interesados, miembros de una comunidad, o activación de los componentes de una comunidad. El papel de las plataformas suele ser secundario, y es el promotor, el que ha de realizar el trabajo principal de movilización de su comunidad, que a su vez están compuestas por microcomunidades.\n</p>\n\n<h5>¿Somos una comunidad?</h5>\n<p>\nVisión común, valores.\nToda comunidad tiene una visión compartida y basada en unas ideas y valores similares.\nObjetivos comunes.\nLos miembros de una comunidad comparten objetivos finales, sus metas son las mismas.\nEl camino y las acciones a ejecutar son similares.\nLas acciones para alcanzar esos objetivos son coordinadas y complementarias entre los miembros de la comunidad.\nLa motivación y energía parecida.\nLas personas que conforman una comunidad están muy motivadas y son proactivas para alcanzar objetivos comunes y propios.\n“El valor singular del Crowdfunding no radica en el dinero sino en la comunidad que se empodera”\n\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/quienessomos/quienessomos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quienessomos/quienessomos.component.ts ***!
  \********************************************************/
/*! exports provided: QuienessomosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienessomosComponent", function() { return QuienessomosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienessomosComponent = /** @class */ (function () {
    function QuienessomosComponent() {
    }
    QuienessomosComponent.prototype.ngOnInit = function () {
    };
    QuienessomosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quienessomos',
            template: __webpack_require__(/*! ./quienessomos.component.html */ "./src/app/quienessomos/quienessomos.component.html"),
            styles: [__webpack_require__(/*! ./quienessomos.component.css */ "./src/app/quienessomos/quienessomos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuienessomosComponent);
    return QuienessomosComponent;
}());



/***/ }),

/***/ "./src/app/registro/registro.component.css":
/*!*************************************************!*\
  !*** ./src/app/registro/registro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  #modalregistro{\n    background:#000000ab;\n    width:100%;\n    height: 100%;\n\tmargin:0px;\n    position: fixed;\n    z-index: 7000;\n;\n  }\n    #maestro{\n        border-radius: 4%;\n        top: 38px;\n        box-shadow: 5px 5px #26e40d80;\n        margin: auto;\n        position: relative;\n        background:#ffffff;\n        width:450px;\n        height: 550px;\n        -webkit-animation-name: animatetop;\n                animation-name: animatetop;\n    }\n    .wrap {\n    width: 90%;\n    max-width: 500px;\n    padding: 10px;\n    margin: auto;\n    background: rgb(255, 255, 255);\n    \n}\n    .contenedor-formulario {\n    width: 100%;\n    height: 200px;\n    color: #2411d3;\n    padding: 0px; \n   \n}\n    .contenedor-formulario .formulario {\n      width: 100%;\n      margin: auto; \n      height: 20px;\n    \n      \n    }\n    .contenedor-formulario .formulario .input-group {\n        position: relative;\n        margin-bottom: 32px; \n        background: rgb(255, 255, 255);\n\n    }\n    .contenedor-formulario .formulario .input-group input[type=\"text\"],\n        .contenedor-formulario .formulario .input-group input[type=\"email\"],\n        .contenedor-formulario .formulario .input-group input[type=\"password\"] {\n          font-family: \"Roboto\";\n          font-size: 16px;\n          color: #303F9F;\n          width: 100%;\n          outline: none;\n          padding: 2px;\n          background: none;\n          border: none;\n          border-bottom: 2px solid #BBDEFB;\n         }\n    .contenedor-formulario .formulario .input-group input[type=\"text\"]:focus, .contenedor-formulario .formulario .input-group input[type=\"text\"]:active,\n          .contenedor-formulario .formulario .input-group input[type=\"email\"]:focus,\n          .contenedor-formulario .formulario .input-group input[type=\"email\"]:active,\n          .contenedor-formulario .formulario .input-group input[type=\"password\"]:focus,\n          .contenedor-formulario .formulario .input-group input[type=\"password\"]:active \n          {\n            outline: none;\n            border-bottom: 2px solid rgba(0, 238, 20, 0.733);\n         }\n    .contenedor-formulario .formulario .input-group input[type=\"text\"].error,\n          .contenedor-formulario .formulario .input-group input[type=\"email\"].error,\n          .contenedor-formulario .formulario .input-group input[type=\"password\"].error\n           {\n            border-bottom: 2px solid #D32F2F; \n        }\n    .contenedor-formulario .formulario .input-group input[type=\"text\"].error + label,\n            .contenedor-formulario .formulario .input-group input[type=\"email\"].error + label,\n            .contenedor-formulario .formulario .input-group input[type=\"password\"].error + label \n            {\n              color: #D32F2F;\n             }\n    .contenedor-formulario .formulario .input-group label {\n          color: rgb(0, 0, 0);\n         }\n    .contenedor-formulario .formulario .input-group label.label {\n            transition: all 0.3s ease;\n            margin-left: 15px;\n            font-size: 16px;\n            line-height: 16px;\n            position: absolute;\n            top: 16px;\n            left: 0; \n        }\n    .contenedor-formulario .formulario .input-group label.label.active {\n              top: -12px;\n              font-size: 12px;\n              line-height: 12px;\n              color: #B6B6B6; \n            }\n    .contenedor-formulario .formulario .input-group.checkbox label, .contenedor-formulario .formulario .input-group.radio label {\n          display: inline-block;\n          background: rgb(255, 255, 255);\n          cursor: pointer;\n          color: rgba(0, 0, 0, 0.733);;\n          position: relative;\n          padding: 5px 15px 5px 51px;\n          font-size: 1em;\n          border-radius: 3px;\n          transition: all 0.3s ease; }\n    .contenedor-formulario .formulario .input-group.checkbox label:hover, .contenedor-formulario .formulario .input-group.radio label:hover {\n            background: #bbdefb; }\n    .contenedor-formulario .formulario .input-group.checkbox label:before, .contenedor-formulario .formulario .input-group.radio label:before {\n            content: \"\";\n            display: inline-block;\n            width: 17px;\n            height: 17px;\n            position: absolute;\n            left: 15px;\n            border-radius: 50%;\n            background: none;\n            border: 2px solid rgba(0, 238, 20, 0.733);; }\n    .contenedor-formulario .formulario .input-group.error label {\n          color: #D32F2F; }\n    .contenedor-formulario .formulario .input-group.error label:hover {\n            background: rgba(211, 47, 47, 0.2); }\n    .contenedor-formulario .formulario .input-group.error label:before {\n            border: 2px solid #D32F2F; }\n    .contenedor-formulario .formulario .input-group.radio input[type=\"radio\"] {\n          display: none; }\n    .contenedor-formulario .formulario .input-group.radio input[type=\"radio\"]:checked + label:before {\n            display: none; }\n    .contenedor-formulario .formulario .input-group.radio input[type=\"radio\"]:checked + label {\n            padding: 5px 15px;\n            background: rgba(0, 238, 20, 0.733);;\n            border-radius: 2px;\n            color: #f2f2f2; }\n    .contenedor-formulario .formulario .input-group.checkbox label:before {\n          border-radius: 3px; }\n    .contenedor-formulario .formulario .input-group.checkbox input[type=\"checkbox\"] {\n          display: none; }\n    .contenedor-formulario .formulario .input-group.checkbox input[type=\"checkbox\"]:checked + label:before {\n            display: none; }\n    .contenedor-formulario .formulario .input-group.checkbox input[type=\"checkbox\"]:checked + label {\n            background: rgba(0, 238, 20, 0.733);;\n            color: #f2f2f2;\n            padding: 5px 15px; }\n    .contenedor-formulario .formulario input[type=\"submit\"] {\n        background: rgba(0, 238, 20, 0.733);\n        border-radius: 15px;\n        border: 2px solid #f2f2f2;\n        color: #fff;\n        cursor: pointer;\n        display: inline-block;\n        font-family: \"Roboto\";\n        font-size: 16px;\n        padding: 5px;\n        width: 100%;\n        transition: all 0.3s ease; }\n    .contenedor-formulario .formulario input[type=\"submit\"]:hover {\n          background: #1976D2; }\n    /*# sourceMappingURL=estilos.css.map */\n    @-webkit-keyframes animatetop {\n    from {top: -6000px; opacity: 0}\n    to {top: 0; opacity: 1}\n}\n    @keyframes animatetop {\n    from {top: -6000px; opacity: 0}\n    to {top: 0; opacity: 1}\n}\n    @media screen and (max-width: 600px) {\n    #maestro{\n        border-radius: 5%;\n        top: 10px;\n        box-shadow: 5px 5px #26e40d80;\n        margin: auto;\n        position: relative;\n        background:#ffffff;\n        width:350px;\n        height: 450px;\n        \n    }\n    .wrap {\n      width: 90%;\n      max-width: 350px;\n      padding:0px;\n      margin: auto;\n      background: rgb(255, 255, 255);\n      \n  }\n}"

/***/ }),

/***/ "./src/app/registro/registro.component.html":
/*!**************************************************!*\
  !*** ./src/app/registro/registro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>\n      \n\n<div id=\"modalregistro\">\n          <div id=\"maestro\">\n          <div class=\"contenedor-formulario\">\n                \n              <div class=\"wrap\">\n                   \n                  <form action=\"\" class=\"formulario\" name=\"formulario_registro\" method=\"get\">\n                      <div>\n                            <a href=\"\"> <span class=\"close\">&times;</span></a>\n                            \n                            \n                          <div class=\"input-group\">\n                              <input type=\"text\" id=\"nombre\" name=\"nombre\" placeholder=\"Ingresa Nombre*\" required>\n                             \n                          </div>\n                          <div class=\"input-group\">\n                              <input type=\"email\" id=\"correo\" name=\"correo\" placeholder=\"Ingresa correo*\" required>\n                              \n                          </div>\n                          <div class=\"input-group\">\n                              <input type=\"password\" id=\"pass\" name=\"pass\" placeholder=\"Ingresa contraseña*\" required>\n                              \n                          </div>\n                          <div class=\"input-group\">\n                              <input type=\"password\" id=\"pass2\" name=\"pass2\" placeholder=\"Confirma contraseña*\" required>\n                          </div>\n                          <div class=\"input-group radio\">\n                              <input type=\"radio\" name=\"sexo\" id=\"hombre\" value=\"Hombre\">\n                              <label for=\"hombre\">Hombre</label>\n                              <input type=\"radio\" name=\"sexo\" id=\"mujer\" value=\"Mujer\">\n                              <label for=\"mujer\">Mujer</label>\n                          </div>\n                          <div class=\"input-group checkbox\">\n                              <input type=\"checkbox\" name=\"terminos\" id=\"terminos\" value=\"true\" required>\n                              <label for=\"terminos\">Acepto los Terminos y Condiciones</label>\n                          </div>\n                              \n                          <input type=\"submit\" id=\"btn-submit\" value=\"Registrar\">\n                      </div>\n                  </form>\n              </div>\n          </div>\n      \n         \n        </div>\n        </div>"

/***/ }),

/***/ "./src/app/registro/registro.component.ts":
/*!************************************************!*\
  !*** ./src/app/registro/registro.component.ts ***!
  \************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistroComponent = /** @class */ (function () {
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(httpclient) {
        this.httpclient = httpclient;
        console.log("console funcionando");
    }
    DataService.prototype.getData = function () {
        return this.httpclient.get('http://pepe.sytes.net:3000/proyectos');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/employee */ "./src/app/models/employee.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.URL_API = 'http://pepe.sytes.net:3000/proyectos';
        this.selectedEmployee = new _models_employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
    }
    EmployeeService.prototype.postEmployee = function (employee) {
        return this.http.post(this.URL_API, employee);
    };
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.URL_API);
    };
    EmployeeService.prototype.putEmployee = function (employee) {
        return this.http.put(this.URL_API + ("/" + employee._id), employee);
    };
    EmployeeService.prototype.deleteEmployee = function (_id) {
        return this.http.delete(this.URL_API + ("/" + _id));
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/compuaztec/proyectofinaltelmexhub/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map