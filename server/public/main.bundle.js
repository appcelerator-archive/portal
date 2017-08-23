webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/amp/amp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amp/amp.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"page-wrapper\" class=\"open\" [style.padding-left.px]=\"menuService.paddingLeftMenu\">\n  <app-sidebar></app-sidebar>\n  <div id=\"content-wrapper\">\n    <div class=\"page-content\" style=\"background-color:#f0f0f0\">\n      <app-pageheader></app-pageheader>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/amp/amp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AmpComponent = (function () {
    function AmpComponent(menuService) {
        this.menuService = menuService;
    }
    AmpComponent.prototype.ngOnInit = function () {
    };
    return AmpComponent;
}());
AmpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-amp',
        template: __webpack_require__("../../../../../src/app/amp/amp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amp/amp.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], AmpComponent);

var _a;
//# sourceMappingURL=amp.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amp_amp_component__ = __webpack_require__("../../../../../src/app/amp/amp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_verify_verify_component__ = __webpack_require__("../../../../../src/app/auth/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nodes_nodes_component__ = __webpack_require__("../../../../../src/app/nodes/nodes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__docker_stacks_docker_stacks_component__ = __webpack_require__("../../../../../src/app/docker-stacks/docker-stacks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__password_password_component__ = __webpack_require__("../../../../../src/app/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__swarms_swarms_component__ = __webpack_require__("../../../../../src/app/swarms/swarms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__logs_logs_component__ = __webpack_require__("../../../../../src/app/logs/logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__metrics_metrics_component__ = __webpack_require__("../../../../../src/app/metrics/metrics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__organizations_organizations_component__ = __webpack_require__("../../../../../src/app/organizations/organizations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__organizations_organization_create_organization_create_component__ = __webpack_require__("../../../../../src/app/organizations/organization-create/organization-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__organizations_organization_team_team_component__ = __webpack_require__("../../../../../src/app/organizations/organization/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__organizations_organization_team_team_create_team_create_component__ = __webpack_require__("../../../../../src/app/organizations/organization/team/team-create/team-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__organizations_organization_organization_component__ = __webpack_require__("../../../../../src/app/organizations/organization/organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__docker_stacks_docker_stack_deploy_docker_stack_deploy_component__ = __webpack_require__("../../../../../src/app/docker-stacks/docker-stack-deploy/docker-stack-deploy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__docker_stacks_docker_services_docker_services_component__ = __webpack_require__("../../../../../src/app/docker-stacks/docker-services/docker-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__docker_stacks_docker_containers_docker_containers_component__ = __webpack_require__("../../../../../src/app/docker-stacks/docker-containers/docker-containers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























//Services

var appRoutes = [
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
    { path: 'amp', component: __WEBPACK_IMPORTED_MODULE_2__amp_amp_component__["a" /* AmpComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]], children: [
            { path: 'organizations', component: __WEBPACK_IMPORTED_MODULE_16__organizations_organizations_component__["a" /* OrganizationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'organizations/create', component: __WEBPACK_IMPORTED_MODULE_17__organizations_organization_create_organization_create_component__["a" /* OrganizationCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'organizations/:orgName', component: __WEBPACK_IMPORTED_MODULE_20__organizations_organization_organization_component__["a" /* OrganizationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'organizations/:orgName/team/create', component: __WEBPACK_IMPORTED_MODULE_19__organizations_organization_team_team_create_team_create_component__["a" /* TeamCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'organizations/:orgName/team/:teamName', component: __WEBPACK_IMPORTED_MODULE_18__organizations_organization_team_team_component__["a" /* TeamComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'stacks', component: __WEBPACK_IMPORTED_MODULE_10__docker_stacks_docker_stacks_component__["a" /* DockerStacksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'stacks/:stackName/services', component: __WEBPACK_IMPORTED_MODULE_22__docker_stacks_docker_services_docker_services_component__["a" /* DockerServicesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'stacks/:stackName/services/:serviceId/containers', component: __WEBPACK_IMPORTED_MODULE_23__docker_stacks_docker_containers_docker_containers_component__["a" /* DockerContainersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'stacks/:stackName/update', component: __WEBPACK_IMPORTED_MODULE_21__docker_stacks_docker_stack_deploy_docker_stack_deploy_component__["a" /* DockerStackDeployComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'stacks/deploy', component: __WEBPACK_IMPORTED_MODULE_21__docker_stacks_docker_stack_deploy_docker_stack_deploy_component__["a" /* DockerStackDeployComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'logs/:object/:ref', component: __WEBPACK_IMPORTED_MODULE_14__logs_logs_component__["a" /* LogsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'logs', component: __WEBPACK_IMPORTED_MODULE_14__logs_logs_component__["a" /* LogsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'metrics/:object/:type/:ref', component: __WEBPACK_IMPORTED_MODULE_15__metrics_metrics_component__["a" /* MetricsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'metrics', component: __WEBPACK_IMPORTED_MODULE_15__metrics_metrics_component__["a" /* MetricsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'nodes', component: __WEBPACK_IMPORTED_MODULE_9__nodes_nodes_component__["a" /* NodesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'swarms', component: __WEBPACK_IMPORTED_MODULE_13__swarms_swarms_component__["a" /* SwarmsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'password', component: __WEBPACK_IMPORTED_MODULE_11__password_password_component__["a" /* PasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'users/:orgName', component: __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'signup/:id', component: __WEBPACK_IMPORTED_MODULE_3__auth_signup_signup_component__["a" /* SignupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__services_auth_guard_service__["a" /* AuthGuard */]] },
        ] },
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_7__auth_auth_auth_component__["a" /* AuthComponent */], children: [
            { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_4__auth_signin_signin_component__["a" /* SigninComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__auth_signup_signup_component__["a" /* SignupComponent */] },
            { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_5__auth_forgot_forgot_component__["a" /* ForgotComponent */] },
            { path: 'verify/:token', component: __WEBPACK_IMPORTED_MODULE_6__auth_verify_verify_component__["a" /* VerifyComponent */] }
        ] }
    //{ path: '**', redirectTo: '/auth/signin' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.waiting {\n  cursor:wait;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div [class]=\"menuService.getCursorClass()\" style=\"overflow:hidden\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(menuService, renderer, router) {
        this.menuService = menuService;
        this.renderer = renderer;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.waitingCursor(false);
        var that = this;
        this.renderer.listen('window', 'resize', function (evt) {
            _this.menuService.resize(evt);
        });
        this.router.events
            .subscribe(function (e) {
            _this.menuService.pushPath(e.urlAfterRedirects);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__docker_stacks_services_docker_stacks_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-stacks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__docker_stacks_services_docker_services_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__docker_stacks_services_docker_containers_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-containers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_swarms_service__ = __webpack_require__("../../../../../src/app/services/swarms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_drag_service__ = __webpack_require__("../../../../../src/app/services/drag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__metrics_services_metrics_service__ = __webpack_require__("../../../../../src/app/metrics/services/metrics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__logs_services_logs_service__ = __webpack_require__("../../../../../src/app/logs/services/logs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nodes_services_nodes_service__ = __webpack_require__("../../../../../src/app/nodes/services/nodes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_services_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_colors_service__ = __webpack_require__("../../../../../src/app/services/colors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_dropdown_directive__ = __webpack_require__("../../../../../src/app/directives/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_draggable_directive__ = __webpack_require__("../../../../../src/app/directives/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_drop_target_directive__ = __webpack_require__("../../../../../src/app/directives/drop-target.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_tooltip_directive__ = __webpack_require__("../../../../../src/app/directives/tooltip.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_directives_movable_directive__ = __webpack_require__("../../../../../src/app/dashboard/directives/movable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__auth_auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__nodes_nodes_component__ = __webpack_require__("../../../../../src/app/nodes/nodes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__docker_stacks_docker_stacks_component__ = __webpack_require__("../../../../../src/app/docker-stacks/docker-stacks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__password_password_component__ = __webpack_require__("../../../../../src/app/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pageheader_pageheader_component__ = __webpack_require__("../../../../../src/app/pageheader/pageheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__amp_amp_component__ = __webpack_require__("../../../../../src/app/amp/amp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__swarms_swarms_component__ = __webpack_require__("../../../../../src/app/swarms/swarms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__logs_logs_component__ = __webpack_require__("../../../../../src/app/logs/logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__metrics_metrics_component__ = __webpack_require__("../../../../../src/app/metrics/metrics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__organizations_organizations_component__ = __webpack_require__("../../../../../src/app/organizations/organizations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__organizations_organization_organization_component__ = __webpack_require__("../../../../../src/app/organizations/organization/organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__organizations_organization_team_team_component__ = __webpack_require__("../../../../../src/app/organizations/organization/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__docker_stacks_docker_stack_deploy_docker_stack_deploy_component__ = __webpack_require__("../../../../../src/app/docker-stacks/docker-stack-deploy/docker-stack-deploy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__docker_stacks_docker_services_docker_services_component__ = __webpack_require__("../../../../../src/app/docker-stacks/docker-services/docker-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__docker_stacks_docker_containers_docker_containers_component__ = __webpack_require__("../../../../../src/app/docker-stacks/docker-containers/docker-containers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__organizations_organization_create_organization_create_component__ = __webpack_require__("../../../../../src/app/organizations/organization-create/organization-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__organizations_organization_team_team_create_team_create_component__ = __webpack_require__("../../../../../src/app/organizations/organization/team/team-create/team-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__metrics_graph_lines_lines_component__ = __webpack_require__("../../../../../src/app/metrics/graph/lines/lines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__settings_settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__auth_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__auth_verify_verify_component__ = __webpack_require__("../../../../../src/app/auth/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__dashboard_dgraph_dgraph_component__ = __webpack_require__("../../../../../src/app/dashboard/dgraph/dgraph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__dashboard_dgraph_editor_dgraph_editor_component__ = __webpack_require__("../../../../../src/app/dashboard/dgraph-editor/dgraph-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__dashboard_dgraph_alert_dgraph_alert_component__ = __webpack_require__("../../../../../src/app/dashboard/dgraph-alert/dgraph-alert.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Services















//Module

//Directive





//components






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            //Directives
            __WEBPACK_IMPORTED_MODULE_20__directives_dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_21__directives_draggable_directive__["a" /* DraggableDirective */],
            __WEBPACK_IMPORTED_MODULE_22__directives_drop_target_directive__["a" /* DropTargetDirective */],
            __WEBPACK_IMPORTED_MODULE_23__directives_tooltip_directive__["a" /* TooltipDirective */],
            __WEBPACK_IMPORTED_MODULE_24__dashboard_directives_movable_directive__["a" /* MovableDirective */],
            //Components
            __WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_26__auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_27__auth_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_28__auth_auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_29__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_30__nodes_nodes_component__["a" /* NodesComponent */],
            __WEBPACK_IMPORTED_MODULE_32__password_password_component__["a" /* PasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_33__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_34__pageheader_pageheader_component__["a" /* PageheaderComponent */],
            __WEBPACK_IMPORTED_MODULE_35__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_36__amp_amp_component__["a" /* AmpComponent */],
            __WEBPACK_IMPORTED_MODULE_37__swarms_swarms_component__["a" /* SwarmsComponent */],
            __WEBPACK_IMPORTED_MODULE_38__logs_logs_component__["a" /* LogsComponent */],
            __WEBPACK_IMPORTED_MODULE_39__metrics_metrics_component__["a" /* MetricsComponent */],
            __WEBPACK_IMPORTED_MODULE_40__organizations_organizations_component__["a" /* OrganizationsComponent */],
            __WEBPACK_IMPORTED_MODULE_41__organizations_organization_organization_component__["a" /* OrganizationComponent */],
            __WEBPACK_IMPORTED_MODULE_42__organizations_organization_team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_31__docker_stacks_docker_stacks_component__["a" /* DockerStacksComponent */],
            __WEBPACK_IMPORTED_MODULE_43__docker_stacks_docker_stack_deploy_docker_stack_deploy_component__["a" /* DockerStackDeployComponent */],
            __WEBPACK_IMPORTED_MODULE_44__docker_stacks_docker_services_docker_services_component__["a" /* DockerServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_45__docker_stacks_docker_containers_docker_containers_component__["a" /* DockerContainersComponent */],
            __WEBPACK_IMPORTED_MODULE_46__organizations_organization_create_organization_create_component__["a" /* OrganizationCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_47__organizations_organization_team_team_create_team_create_component__["a" /* TeamCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_48__metrics_graph_lines_lines_component__["a" /* LinesComponent */],
            __WEBPACK_IMPORTED_MODULE_49__settings_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_50__auth_forgot_forgot_component__["a" /* ForgotComponent */],
            __WEBPACK_IMPORTED_MODULE_51__auth_verify_verify_component__["a" /* VerifyComponent */],
            __WEBPACK_IMPORTED_MODULE_52__dashboard_dgraph_dgraph_component__["a" /* DGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_53__dashboard_dgraph_editor_dgraph_editor_component__["a" /* DGraphEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_54__dashboard_dgraph_alert_dgraph_alert_component__["a" /* DgraphAlertComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__docker_stacks_services_docker_stacks_service__["a" /* DockerStacksService */],
            __WEBPACK_IMPORTED_MODULE_10__docker_stacks_services_docker_services_service__["a" /* DockerServicesService */],
            __WEBPACK_IMPORTED_MODULE_11__docker_stacks_services_docker_containers_service__["a" /* DockerContainersService */],
            __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_6__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_8__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_9__organizations_services_organizations_service__["a" /* OrganizationsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_swarms_service__["a" /* SwarmsService */],
            __WEBPACK_IMPORTED_MODULE_13__services_drag_service__["a" /* DragService */],
            __WEBPACK_IMPORTED_MODULE_14__metrics_services_metrics_service__["a" /* MetricsService */],
            __WEBPACK_IMPORTED_MODULE_15__logs_services_logs_service__["a" /* LogsService */],
            __WEBPACK_IMPORTED_MODULE_16__nodes_services_nodes_service__["a" /* NodesService */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_services_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_18__services_colors_service__["a" /* ColorsService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"text-center col-sm-4 col-sm-offset-4\">\n  <div style=\"height:100px\"></div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = (function () {
    function AuthComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], AuthComponent);

var _a, _b;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.ebutton {\n  color:white;\n  background: rgb(26, 89, 144);\n    border: 1px solid #ccc;\n    box-shadow: 1px 1px 10px black inset,\n                 0 1px 0 rgba( 255, 255, 255, 0.4);\n    padding: 6px 12px;\n    border-radius: 3px;\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div icon=\"fa-plus\" title=\"Add a new user\">\n        </div>\n        <div style=\"height:50px\">\n          <img src=\"/assets/images/amp.png\" alt=\"amp\" class=\"img-rounded\" style=\"max-height:40px\">\n        </div>\n        <div style=\"color:blue;margin-top=20px\">Forgot login or password</div>\n        <div>\n        <div style=\"margin-top=15px;margin-bottom:20Px\">\n          <button\n            [class]=\"forgotToggle?'btn btn-primary ebutton':'btn btn-primary'\"\n            (click)=\"forgotLogin()\">\n            <i class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></i>\n            Login\n          </button>\n          <button\n            [class]=\"!forgotToggle?'btn btn-primary ebutton':'btn btn-primary'\"\n            (click)=\"forgotPassword()\">\n            <i  class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n            Password\n          </button>\n        </div>\n        <div>\n          <form class=\"form-horizontal\" (ngSubmit)=\"onForgot(f)\" #f=\"ngForm\">\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <input\n                  [readonly]=\"forgotToggle\"\n                  ngModel\n                  [required]=\"!forgotToggle\"\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"username\"\n                  id=\"username\"\n                  placeholder=\"username\">\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <input\n                  [readonly]=\"!forgotToggle\"\n                  ngModel\n                  [required]=\"forgotToggle\"\n                  [email]=\"forgotToggle\"\n                  type=\"email\"\n                  class=\"form-control\"\n                  name=\"email\"\n                  id=\"email\"\n                  placeholder=\"email\"\n                  #email=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email</span>\n              </div>\n            </div>\n\n            <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ message }}</span>\n\n            <div class=\"form-group\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-primary btn-sm\"\n                  type=\"submit\"\n                  [disabled]=\"!f.valid\">\n                  <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> {{ submitCaption }}</button>\n                <button type=\"button\"\n                  class=\"btn btn-default btn-sm\"\n                  (click)=\"returnBack()\">\n                  <i aria-hidden=\"true\"></i> Cancel</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = (function () {
    function ForgotComponent(usersService, menuService, httpService) {
        this.usersService = usersService;
        this.menuService = menuService;
        this.httpService = httpService;
        this.message = "";
        this.submitCaption = "Submit";
        this.forgotToggle = true;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.menuService.setItemMenu('users', 'forgot login/pwd');
    };
    ForgotComponent.prototype.onForgot = function (event) {
        if (this.submitCaption == "Done") {
            this.menuService.returnToPreviousPath();
            return;
        }
        if (this.forgotToggle) {
            this.onForgotLogin(event);
        }
        else {
            this.onForgotPassword(event);
        }
    };
    ForgotComponent.prototype.onForgotLogin = function (event) {
        var _this = this;
        this.httpService.retrieveLogin(event.form.value.email).subscribe(function (data) {
            _this.message = "An email has been sent to you with your login name";
            _this.submitCaption = "Done";
        }, function (error) {
            var data = error.json();
            _this.message = data.error;
        });
    };
    ForgotComponent.prototype.onForgotPassword = function (event) {
        var _this = this;
        this.httpService.resetPassword(event.form.value.username).subscribe(function (data) {
            _this.message = "An email has been sent to you to allow you to set a new password";
            _this.submitCaption = "Done";
        }, function (error) {
            var data = error.json();
            _this.message = data.error;
        });
    };
    ForgotComponent.prototype.forgotLogin = function () {
        this.message = "";
        this.forgotToggle = true;
    };
    ForgotComponent.prototype.forgotPassword = function () {
        this.message = "";
        this.forgotToggle = false;
    };
    ForgotComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-forgot',
        template: __webpack_require__("../../../../../src/app/auth/forgot/forgot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/forgot/forgot.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _c || Object])
], ForgotComponent);

var _a, _b, _c;
//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [hidden]=\"byPass\">\n  <div class=\"col-sm-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div icon=\"fa-plus\" title=\"Login user\"></div>\n        <div>\n\n          <div style=\"height:50px\">\n            <img src=\"/assets/images/amp.png\" alt=\"amp\" class=\"img-rounded\" style=\"max-height:25px\">\n          </div>\n\n          <form class=\"form-horizontal\" (ngSubmit)=\"signin(f)\" #f=\"ngForm\">\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n                  <input [(ngModel)]=\"login\" type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" #username>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                  <input ngModel type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" #userpwd>\n                </div>\n              </div>\n            </div>\n\n            <h5 style=\"color:green\"> {{message}} </h5>\n            <h5 style=\"color:red\"> {{messageError}} </h5>\n            <a *ngIf=\"validateLink\" [href]=\"httpService.addr+'/gw/validate'\" >please validate this link: {{ httpService.addr }}</a>\n\n            <div style=\"height:20px\"></div>\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" autofocus type=\"submit\"><i class=\"glyphicon glyphicon-log-in\"></i> Sign in</button>\n                <i id=\"createUserSpinner\" class=\"fa fa-cog fa-spin\" style=\"margin-left: 5px; display: none;\"></i>\n                <a class=\"text-danger\" style=\"margin-left: 20px\" routerLink=\"/auth/signup\">\n                  <u> SignUp </u>\n                </a>\n                <a class=\"text-danger\" style=\"margin-left: 20px\" routerLink=\"/auth/forgot\">\n                  <u>Forgot</u>\n                </a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = (function () {
    function SigninComponent(usersService, menuService, httpService) {
        this.usersService = usersService;
        this.menuService = menuService;
        this.httpService = httpService;
        this.message = "";
        this.messageError = "";
        this.byPass = false;
        this.login = "";
        this.validateLink = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.validateLink = false;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            this.login = currentUser.username;
            var token = JSON.parse(localStorage.getItem('token'));
            if (token) {
                this.byPass = true;
                this.usersService.setCurrentUser(token.token, true);
            }
        }
    };
    SigninComponent.prototype.ngOnDestroy = function () {
        //this.endpointsService.onEndpointsLoaded.unsubscribe()
        //this.endpointsService.onEndpointsError.unsubscribe()
    };
    SigninComponent.prototype.signin = function (form) {
        var _this = this;
        this.httpService.login(form.value.username, form.value.password).subscribe(function (data) {
            var ret = data.json();
            _this.usersService.login(ret.auth);
        }, function (error) {
            var data = error.json();
            if (!data.error) {
                _this.validateGtw();
                return;
            }
            _this.messageError = data.error;
        });
    };
    SigninComponent.prototype.validateGtw = function () {
        this.validateLink = true;
        this.messageError = "First time: Certificat issue: Please, clic on the link below and accept the connection";
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div icon=\"fa-plus\" title=\"Add a new user\">\n        </div>\n        <div style=\"height:50px\">\n          <img src=\"/assets/images/amp.png\" alt=\"amp\" class=\"img-rounded\" style=\"max-height:25px\">\n        </div>\n        <div style=\"color:blue\">Sign Up</div>\n        <div>\n          <form class=\"form-horizontal\" (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <input\n                  ngModel\n                  required\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"username\"\n                  id=\"username\"\n                  placeholder=\"username\">\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <input\n                  ngModel\n                  required\n                  email\n                  type=\"email\"\n                  class=\"form-control\"\n                  name=\"email\"\n                  id=\"email\"\n                  placeholder=\"email\"\n                  #email=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email</span>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                  <input\n                    ngModel\n                    required\n                    type=\"password\"\n                    class=\"form-control\"\n                    name=\"password\"\n                    placeholder=\"password\"\n                    id=\"password\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                  <input\n                    ngModel\n                    required\n                    type=\"password\"\n                    class=\"form-control\"\n                    name=\"passwordConfirm\"\n                    placeholder=\"password confirmation\"\n                    id=\"passwordConfirm\">\n                </div>\n              </div>\n            </div>\n\n            <span class=\"help-block\" style=\"color:green;margin-left:20px\">{{ message }}</span>\n            <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ messageError }}</span>\n            <a *ngIf=\"validateLink\" [href]=\"httpService.addr+'/gw/validate'\" >please validate this link: {{ httpService.addr }}</a>\n\n            <div class=\"form-group\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-primary btn-sm\"\n                  type=\"submit\"\n                  [disabled]=\"!f.valid\">\n                  <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> {{ submitCaption }}</button>\n                <button type=\"button\"\n                  class=\"btn btn-default btn-sm\"\n                  (click)=\"returnBack()\">\n                  <i aria-hidden=\"true\"></i> Cancel</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(usersService, menuService, route, httpService) {
        this.usersService = usersService;
        this.menuService = menuService;
        this.route = route;
        this.httpService = httpService;
        this.message = "";
        this.messageError = "";
        this.submitCaption = "Submit";
        this.validateLink = false;
        this.internal = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.internal = false;
        this.validateLink = false;
        this.menuService.setItemMenu('users', 'sign up');
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id'] == 'internal') {
                _this.internal = true;
            }
        });
    };
    SignupComponent.prototype.onSignup = function (event) {
        var _this = this;
        if (this.submitCaption == "Done") {
            var previousPath = this.menuService.getPreviousPath();
            console.log("previous path: " + previousPath);
            if (this.internal) {
                this.usersService.loadUsers(true);
                this.menuService.navigate(['/amp', 'users']);
            }
            else {
                if (previousPath.indexOf("signup") >= 0) {
                    this.menuService.navigate(["/auth", "signin"]);
                }
                else {
                    this.menuService.returnToPreviousPath();
                }
            }
            return;
        }
        var pwd = event.form.value.password;
        if (pwd != event.form.value.passwordConfirm) {
            this.messageError = "your password must match";
            return;
        }
        this.httpService.signup(event.form.value.username, pwd, event.form.value.email).subscribe(function (data) {
            _this.httpService.registration().subscribe(function (rep) {
                var ret = rep.json();
                _this.messageError = "";
                if (ret.email_confirmation) {
                    _this.message = "Your account is created, you are going to receive an email to validate your account";
                }
                else {
                    _this.message = "Your account is created";
                }
                _this.submitCaption = "Done";
            }, function (err) {
                var error = err.json();
                _this.messageError = error.error;
            });
        }, function (error) {
            var data = error.json();
            if (!data.error) {
                _this.validateGtw();
                return;
            }
            _this.messageError = data.error;
        });
    };
    SignupComponent.prototype.validateGtw = function () {
        this.validateLink = true;
        this.messageError = "First time: Certificat issue: Please, clic on the link below and accept the connection";
    };
    SignupComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _d || Object])
], SignupComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/verify/verify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/verify/verify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div icon=\"fa-plus\" title=\"Login user\"></div>\n          <h5 style=\"color:green\"> {{message}} </h5>\n          <h5 style=\"color:red\"> {{messageError}} </h5>\n\n          <div style=\"height:20px\"></div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-12\">\n              <button *ngIf=\"successStatus=='ok'\" (click)=\"routeToLogin()\" type=\"button\" class=\"btn btn-primary btn-sm\" autofocus type=\"submit\"><i class=\"glyphicon glyphicon-log-in\"></i> LogIn</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/verify/verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyComponent = (function () {
    function VerifyComponent(menuService, route, httpService) {
        this.menuService = menuService;
        this.route = route;
        this.httpService = httpService;
        this.successStatus = "ongoing";
        this.message = "";
        this.messageError = "";
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.successStatus = "";
            _this.message = "";
            _this.messageError = "";
            var token = params['token'];
            _this.httpService.verify(token).subscribe(function () {
                _this.successStatus = "ok";
                _this.message = "You have successfully validated your email, please click to login";
            }, function (err) {
                _this.successStatus = "ko";
                var error = err.json();
                _this.messageError = "Email validation error: " + error.error;
            });
        });
    };
    VerifyComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    VerifyComponent.prototype.routeToLogin = function () {
        this.menuService.navigate(["/auth", "signin"]);
    };
    return VerifyComponent;
}());
VerifyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-verify',
        template: __webpack_require__("../../../../../src/app/auth/verify/verify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/verify/verify.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === "function" && _c || Object])
], VerifyComponent);

var _a, _b, _c;
//# sourceMappingURL=verify.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-bottom:0px\">\n    <div class=\"panel panel-default\" style=\"border-style:none;margin-bottom:0px\">\n      <div class=\"panel-body\" style=\"padding:05px 20px 5px 20px;margin-top:5px\">\n        <div class=\"pull-left\">\n          <span class=\"glyphicon glyphicon-stats space-right\" aria-hidden=\"true\"></span>\n        </div>\n        <div class=\"pull-left\" style=\"color:blue;margin-left:10px\">\n          {{ currentDashboard.name }}\n        </div>\n      </div>\n      <div class=\"panel-body\" style=\"padding:5px 20px 5px 20px\">\n        <div class=\"col-lg-12 col-md-12 col-xs-12\">\n          <div class=\"btn dropdown\" style=\"padding:0px;padding-left:2px;padding-right:2px\">\n\n            <div class=\"btn dropdown\" style=\"padding:0px\">\n              <button class=\"dropdown btn btn-primary dropdown-toggle\" type=\"button\" id=\"object\" data-toggle=\"dropdown\">\n                <span class=\"glyphicon glyphicon-file\"></span>\n                File\n                <span class=\"caret\" style=\"cursor:pointer;color:white\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"dashboardService.clear()\">Clear all</a></li>\n                <li><a (click)=\"create()\">New</a></li>\n                <li><a (click)=\"open()\">Open...</a></li>\n                <li><a (click)=\"save()\">Save</a></li>\n                <li><a (click)=\"saveAs()\">Save As...</a></li>\n                <li><a (click)=\"delete()\">Delete</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a (click)=\"export()\">Export to json file</a></li>\n                <li><a (click)=\"import()\">Import from json file</a></li>\n              </div>\n            </div>\n\n            <button type=\"button\"\n              class=\"btn btn-primary\"\n              (click)=\"toggleEditor()\">\n              Editor\n            </button>\n\n            <div class=\"btn dropdown\" style=\"padding-left:2px;padding-right:2px\">\n              <button class=\"dropdown btn btn-primary dropdown-toggle\" type=\"button\" id=\"refreshperiod\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                Add graphs\n                <span class=\"caret\" style=\"cursor:pointer;color:white\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"addGraph('text')\">Text</a></li>\n                <li><a (click)=\"addGraph('lines')\">Lines</a></li>\n                <li><a (click)=\"addGraph('areas')\">Areas</a></li>\n                <li><a (click)=\"addGraph('bars')\">Bars</a></li>\n                <li><a (click)=\"addGraph('pie')\">Pie</a></li>\n                <li><a (click)=\"addGraph('bubbles')\">Bubbles</a></li>\n                <li><a (click)=\"addGraph('counterSquare')\">Square counter</a></li>\n                <!--<li><a (click)=\"addGraph('counterCircle')\">Circle counter</a></li>-->\n                <li *ngIf=\"usersService.currentUser.sp\" role=\"separator\" class=\"divider\"></li>\n                <li *ngIf=\"usersService.currentUser.sp\"><a (click)=\"dashboardService.addInnerStats()\">InnerStats</a></li>\n                <!--<li><a (click)=\"dashboardService.copySelected()\">Copy selected</a></li>-->\n              </div>\n            </div>\n\n            <div class=\"btn dropdown\" style=\"padding-left:2px;padding-right:2px\">\n              <button class=\"dropdown btn btn-primary dropdown-toggle\" type=\"button\" id=\"refreshperiod\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                Legends\n                <span class=\"caret\" style=\"cursor:pointer;color:white\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"addLegend('stack')\">Stacks</a></li>\n                <li><a (click)=\"addLegend('service')\">Services</a></li>\n                <li><a (click)=\"addLegend('container')\">Containers</a></li>\n                <li><a (click)=\"addLegend('node')\">Nodes</a></li>\n              </div>\n            </div>\n\n            <div class=\"btn dropdown\" style=\"padding-left:2px;padding-right:2px\">\n              <button class=\"dropdown btn btn-primary dropdown-toggle\" type=\"button\" id=\"refreshperiod\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                Refresh: {{ periodRefreshLabel }}\n                <span class=\"caret\" style=\"cursor:pointer;color:white\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"setRefreshPeriod(10, '10 sec')\">10 sec</a></li>\n                <li><a (click)=\"setRefreshPeriod(30, '30 sec')\">30 sec</a></li>\n                <li><a (click)=\"setRefreshPeriod(60, '1 min')\">1 min</a></li>\n                <li><a (click)=\"setRefreshPeriod(120, '2 min')\">2 min</a></li>\n                <li><a (click)=\"setRefreshPeriod(300, '5 min')\">5 min</a></li>\n                <li><a (click)=\"setRefreshPeriod(600, '10 min')\">10 min</a></li>\n                <li><a (click)=\"setRefreshPeriod(1800, '30 min')\">30 min</a></li>\n                <li><a (click)=\"setRefreshPeriod(3600, '1 hour')\">1 hour</a></li>\n              </div>\n            </div>\n\n          <div class=\"btn dropdown\" style=\"padding-left:2px;padding-right:2px\">\n            <button class=\"dropdown btn btn-primary dropdown-toggle\" type=\"button\" id=\"refreshperiod\" data-toggle=\"dropdown\">\n              Period: {{ periodLabel }}\n              <span class=\"caret\" style=\"cursor:pointer;color:white\"></span>\n            </button>\n            <div class=\"dropdown-menu\">\n              <li><a (click)=\"setPeriod('now-1m', '1 min')\">1 min</a></li>\n              <li><a (click)=\"setPeriod('now-2m', '2 min')\">2 min</a></li>\n              <li><a (click)=\"setPeriod('now-5m', '5 min')\">5 min</a></li>\n              <li><a (click)=\"setPeriod('now-10m', '10 min')\">10 min</a></li>\n              <li><a (click)=\"setPeriod('now-30m', '30 min')\">30 min</a></li>\n              <li><a (click)=\"setPeriod('now-1h', '1 hour')\">1 hour</a></li>\n              <li><a (click)=\"setPeriod('now-2h', '2 hours')\">2 hours</a></li>\n              <li><a (click)=\"setPeriod('now-4h', '4 hours')\">4 hours</a></li>\n            </div>\n          </div>\n\n          <button type=\"button\"\n            class=\"btn btn-danger\"\n            [disabled]=\"this.dashboardService.selected.id==''\"\n            (click)=\"dashboardService.removeSelectedGraph()\">\n            <i class=\"fa fa-trash space-right\"></i>\n          </button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ messageError }}</span>\n\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\" style=\"border-style:none;margin-bottom:5px;margin-top:5px\">\n      <div style=\"position:relative;overflow:scroll;margin-top:00px\" class=\"graph-container panel panel-default\"\n        [style.height.px]=\"graphPanelHeight\"\n        [style.width.px]=\"graphPanelWidth\">\n        <div\n          class=\"panel-body\" #container\n          style=\"width:2000px;height:2000px;padding:0px;margin:0px\"\n          (mouseup)='onMouseUp($event)'>\n            <app-dgraph [graph]=\"graph00\"></app-dgraph>\n            <app-dgraph *ngFor=\"let graph of dashboardService.graphs\"\n              style=\"position:absolute\"\n              [graph]=\"graph\">\n            </app-dgraph>\n            <app-dgraph-editor\n              *ngIf=\"dashboardService.showEditor\"\n              [graph]=\"editorGraph\">\n            </app-dgraph-editor>\n            <app-dgraph-alert\n              *ngIf=\"dashboardService.showAlert\"\n              [graph]=\"editorGraph\">\n            </app-dgraph-alert>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"row\" graphMovable\n  style=\"position:absolute\"\n  [hidden] = \"dialogHidden\"\n  [style.left.px]=\"dialogx\"\n  [style.top.px]=\"dialogy\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-bottom:5px\">\n    <div class=\"panel panel-default\" style=\"margin-bottom:5px\">\n      <div class=\"panel-body\" style=\"padding-bottom:5px;background-color:#f0f0f0\">\n        <div class=\"form-group\">\n          <div>\n            <div class=\"pull-left\"><span class=\"menu-icon fa fa-server\" aria-hidden=\"true\"></span> {{ dialogMode }} Dashboard</div>\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px\">\n          <div class=\"panel panel-default\" style=\"border-style:none;background-color:#f0f0f0\">\n            <form class=\"form-horizontal\">\n\n              <div *ngIf=\"dialogMode=='SaveAs'\" class=\"form-group\">\n                <div class=\"col-sm-8\" style=\"padding:0px;margin-bottom:10px\">\n                  <input\n                    type=\"text\"\n                    style=\"width:400px\"\n                    class=\"form-control\"\n                    name=\"name\"\n                    placeholder=\"name\"\n                    id=\"name\"\n                    (change)=\"saveAsDashboardName=dashboardName.value\"\n                    #dashboardName>\n                </div>\n              </div>\n              <div *ngIf=\"dialogMode=='Import'\" class=\"form-group\">\n                <div class=\"form-group\">\n                  <div class=\"col-sm-8\">\n                    <input\n                      ngModel\n                      type=\"file\"\n                      class=\"form-control\"\n                      name=\"filename\"\n                      id=\"filename\"\n                      (change)=\"fileSelected($event)\"\n                      #filename>\n                    <span class=\"help-block\" *ngIf=\"!filename.valid && filename.touched\">Please choose a valid file</span>\n                  </div>\n                </div>\n              </div>\n\n              <span class=\"help-block\" style=\"color:red;margin-left:0px\">{{ message }}</span>\n\n              <div *ngIf=\"dialogMode=='Open'\" style=\"max-height:200px;overflow:scroll\">\n                <div class=\"list-group\">\n                  <table class=\"table-condensed table-hover\" style=\"font-size:12px;background-color:white\">\n                    <thead>\n                      <th style=\"padding-left:5px\">Name</th>\n                      <th style=\"padding-left:5px\">Type</th>\n                      <th style=\"padding-left:5px\">Owner</th>\n                      <th style=\"padding-left:5px\">Date</th>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let dash of dashboards\"\n                        (click)=\"openOneDashboard(dash.id)\">\n                          <td>{{ dash.name }}</td>\n                          <td>{{ dash.ownerOrganization }}</td>\n                          <td>{{ dash.ownerName }}</td>\n                          <td>{{ dash.date }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n\n              <div class=\"form-group\" style=\"margin-top:10px\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button *ngIf=\"dialogMode=='SaveAs'\"\n                    type=\"button\"\n                    class=\"btn btn-primary btn-sm\"\n                    (click)=\"saveNewDashboard()\">\n                    <i class=\"glyphicon glyphicon-save-file\"></i>\n                    {{ dialogMode }}\n                  </button>\n                  <button type=\"button\"\n                    class=\"btn btn-default btn-sm\"\n                    (click)=\"dialogHidden=true\">\n                    <i aria-hidden=\"true\"></i> Cancel\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_graph_model__ = __webpack_require__("../../../../../src/app/models/graph.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_dashboard_model__ = __webpack_require__("../../../../../src/app/dashboard/models/dashboard.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//sf


var DashboardComponent = (function () {
    function DashboardComponent(usersService, menuService, http, dashboardService, httpService, route, elementRef, renderer) {
        this.usersService = usersService;
        this.menuService = menuService;
        this.http = http;
        this.dashboardService = dashboardService;
        this.httpService = httpService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.saveAsDashboardName = "";
        this.periodRefreshLabel = "30 secs";
        this.periodLabel = '2 min';
        this.graphPanelHeight = 250;
        this.graphPanelWidth = 500;
        this.graph00 = new __WEBPACK_IMPORTED_MODULE_6__models_graph_model__["a" /* Graph */]("graph00", 0, 0, 10, 10, 'text', undefined);
        this.dialogGraph = new __WEBPACK_IMPORTED_MODULE_6__models_graph_model__["a" /* Graph */]("dialog", 0, 0, 10, 10, 'text', undefined);
        this.dashboards = [];
        this.noDashboard = new __WEBPACK_IMPORTED_MODULE_7__models_dashboard_model__["a" /* Dashboard */]("", "", "");
        this.currentDashboard = this.noDashboard;
        this.selected = this.noDashboard;
        this.messageError = "";
        this.message = "";
        this.dialogx = 0;
        this.dialogy = 0;
        this.dialogHidden = true;
        this.dialogMode = "";
        this.graph00.border = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.isVisible = true;
        this.menuService.setItemMenu('dashboard', 'View');
        this.offsetTop0 = this.container.nativeElement.getBoundingClientRect().top;
        this.offsetLeft0 = this.container.nativeElement.getBoundingClientRect().left;
        this.resizeGraphs(this.menuService.appWindow);
        this.menuService.onWindowResize.subscribe(function (win) {
            _this.resizeGraphs(win);
        });
        if (this.dashboardService.graphs.length == 0) {
            var dashboardId = localStorage.getItem('dashboard');
            if (dashboardId) {
                this.openOneDashboard(dashboardId);
            }
            else {
                this.openOneDashboard("");
            }
        }
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.dashboardService.isVisible = false;
        this.dashboardService.cancelRequests();
    };
    DashboardComponent.prototype.onMouseUp = function ($event) {
        if (!this.dashboardService.showEditor) {
            if ($event.target.className == 'panel-body') {
                this.dashboardService.selected = this.dashboardService.notSelected;
            }
        }
    };
    DashboardComponent.prototype.addGraph = function (type) {
        var offtop = this.container.nativeElement.getBoundingClientRect().top - this.offsetTop0;
        var offleft = this.container.nativeElement.getBoundingClientRect().left - this.offsetLeft0;
        this.dashboardService.addGraph(type, offtop, offleft);
    };
    DashboardComponent.prototype.addLegend = function (type) {
        var offtop = this.container.nativeElement.getBoundingClientRect().top - this.offsetTop0;
        var offleft = this.container.nativeElement.getBoundingClientRect().left - this.offsetLeft0;
        this.dashboardService.addLegend(type, offtop, offleft);
    };
    DashboardComponent.prototype.toggleEditor = function () {
        var offtop = this.container.nativeElement.getBoundingClientRect().top - this.offsetTop0;
        var offleft = this.container.nativeElement.getBoundingClientRect().left - this.offsetLeft0;
        this.dashboardService.toggleEditor(offtop, offleft);
    };
    DashboardComponent.prototype.resizeGraphs = function (win) {
        var cww = win.width - 25 - this.menuService.paddingLeftMenu;
        var chh = win.height - 190;
        this.graphPanelHeight = chh;
        this.graphPanelWidth = cww;
    };
    DashboardComponent.prototype.setRefreshPeriod = function (refresh, label) {
        this.periodRefreshLabel = label;
        this.dashboardService.setRefreshPeriod(refresh);
    };
    DashboardComponent.prototype.setPeriod = function (period, label) {
        this.periodLabel = label;
        this.dashboardService.setPeriod(period);
    };
    DashboardComponent.prototype.moveDialog = function () {
        this.message = "";
        this.dialogx = this.menuService.appWindow.width / 2 - 250 / 2;
        //this.dialogy = this.menuService.appWindow.height/2
        this.dialogy = 180;
    };
    DashboardComponent.prototype.create = function () {
        this.currentDashboard = this.noDashboard;
        this.dashboardService.clear();
    };
    DashboardComponent.prototype.save = function () {
        var _this = this;
        if (this.currentDashboard.id == "") {
            this.saveAs();
            return;
        }
        var data = this.dashboardService.getData();
        this.httpService.updateDashboard(this.currentDashboard.id, data).subscribe(function () {
            _this.dialogHidden = true;
        }, function (err) {
            var error = err.json();
            _this.setMessage(error.error);
        });
    };
    DashboardComponent.prototype.saveAs = function () {
        this.moveDialog();
        this.dialogMode = "SaveAs";
        this.dialogHidden = false;
    };
    DashboardComponent.prototype.open = function () {
        var _this = this;
        this.httpService.listDashboard().subscribe(function (data) {
            console.log(data);
            _this.dashboards = data;
            //console.log(this.dashboards)
            _this.moveDialog();
            _this.dialogMode = "Open";
            _this.dialogHidden = false;
            //console.log(data)
        }, function (err) {
            var error = err.json();
            _this.message = error.error;
        });
    };
    DashboardComponent.prototype.saveNewDashboard = function () {
        var _this = this;
        var data = this.dashboardService.getData();
        this.httpService.createDashboard(this.saveAsDashboardName, data).subscribe(function (id) {
            _this.dialogHidden = true;
            _this.currentDashboard = new __WEBPACK_IMPORTED_MODULE_7__models_dashboard_model__["a" /* Dashboard */](id, _this.saveAsDashboardName, '');
            localStorage.setItem('dashboard', id);
        }, function (err) {
            var error = err.json();
            _this.message = error.error;
        });
    };
    DashboardComponent.prototype.openOneDashboard = function (id) {
        var _this = this;
        this.httpService.getDashboard(id).subscribe(function (dashboard) {
            _this.currentDashboard = dashboard;
            _this.dialogHidden = true;
            _this.dashboardService.setData(dashboard.data);
            localStorage.setItem('dashboard', dashboard.id);
        }, function (err) {
            console.log(err);
            var error = err.json();
            _this.message = error.error;
            var dashboard = new __WEBPACK_IMPORTED_MODULE_7__models_dashboard_model__["a" /* Dashboard */]("", "default", _this.dashboardService.defaultDefaultDashboard());
            _this.currentDashboard = dashboard;
            _this.dialogHidden = true;
            _this.dashboardService.setData(dashboard.data);
            localStorage.setItem('dashboard', dashboard.id);
        });
    };
    DashboardComponent.prototype.delete = function () {
        var _this = this;
        this.httpService.removeDashboard(this.currentDashboard.id).subscribe(function () {
            _this.dashboardService.clear();
        }, function (err) {
            console.log(err);
            var error = err.json();
            _this.setMessage(error.error);
        });
    };
    DashboardComponent.prototype.setMessage = function (mes) {
        var _this = this;
        this.messageError = mes;
        setTimeout(function () { _this.messageError = ""; }, 3000);
    };
    DashboardComponent.prototype.export = function () {
        var data = JSON.stringify(this.dashboardService.graphs);
        var blob = new Blob(['\ufeff' + data], { type: 'application/json;charset=utf-8;' });
        var dwldLink = document.createElement("a");
        var url = URL.createObjectURL(blob);
        var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", "export.json");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    };
    DashboardComponent.prototype.import = function () {
        this.moveDialog();
        this.dialogMode = "Import";
        this.dialogHidden = false;
    };
    DashboardComponent.prototype.fileSelected = function (event) {
        var _this = this;
        var files = event.srcElement.files;
        if (!files || !files[0]) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (file) {
            var contents = file.target;
            _this.dashboardService.setData(contents.result);
            _this.dialogHidden = true;
        };
        reader.readAsText(files[0]);
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], DashboardComponent.prototype, "container", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_dashboard_service__["a" /* DashboardService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */]) === "function" && _j || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dgraph-alert/dgraph-alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.bound {\n  padding:1px;\n  margin:0px;\n  height:25px;\n  text-align:center;\n  border: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dgraph-alert/dgraph-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='dgraph-editor' graphMovable>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\" style=\"padding:10px;width:320px\">\n      <div style=\"color:blue\">Alerts</div>\n        <div class=\"col-sm-12\" style=\"padding:0px;margin-top:5px;margin-left:0px;\">\n          <div class=\"col-sm-4 col-sm-offset-2\" style=\"padding:0px\">\n            <input\n              type=\"text\"\n              class=\"form-control bound\"\n              placeholder=\"warn\"\n              [value]=\"dashboardService.selected.alertMin\"\n              #minValue\n              (change)=\"dashboardService.setMinAlert(minValue.value)\">\n          </div>\n          <div class=\"col-sm-4 col-sm-offset-0\" style=\"padding:0px\">\n            <input\n              type=\"text\"\n              class=\"form-control bound\"\n              placeholder=\"alert\"\n              [value]=\"dashboardService.selected.alertMax\"\n              #maxValue\n              (change)=\"dashboardService.setMaxAlert(maxValue.value)\">\n          </div>\n          <div class=\"col-sm-12\" style=\"padding:0px;margin:0px\">\n            <div class=\"pull-left\" style=\"background-color:green;width:100px;height:25px\"></div>\n            <div class=\"pull-left\" style=\"background-color:orange;width:100px;height:25px\"></div>\n            <div class=\"pull-left\" style=\"background-color:red;width:100px;height:25px\"></div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dgraph-alert/dgraph-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_graph_model__ = __webpack_require__("../../../../../src/app/models/graph.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DgraphAlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DgraphAlertComponent = (function () {
    function DgraphAlertComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.max = 1000;
        this.min = 0;
    }
    DgraphAlertComponent.prototype.ngOnInit = function () {
    };
    return DgraphAlertComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_graph_model__["a" /* Graph */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_graph_model__["a" /* Graph */]) === "function" && _a || Object)
], DgraphAlertComponent.prototype, "graph", void 0);
DgraphAlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dgraph-alert',
        template: __webpack_require__("../../../../../src/app/dashboard/dgraph-alert/dgraph-alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dgraph-alert/dgraph-alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object])
], DgraphAlertComponent);

var _a, _b;
//# sourceMappingURL=dgraph-alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dgraph-editor/dgraph-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#dgraph-editor {\n    position: absolute;\n    cursor:move;\n    background-color: white;\n    width: 250px;\n    border: 1px solid black;\n}\n\n.graph-selected {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.graph-not-selected {\n}\n\ninput.bound {\n  padding:1px;\n  margin:0px;\n  height:28px;\n  text-align:center;\n  border: none;\n}\n\ninput.text {\n  padding:1px;\n  margin:0px;\n  width:220px;\n  height:28px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dgraph-editor/dgraph-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='dgraph-editor'\n  graphMovable\n  [graph]=\"dashboardService.editorGraph\"\n  [style.top.px]='dashboardService.editorGraph.y'\n  [style.left.px]='dashboardService.editorGraph.x'>\n  <div class=\"panel panel-default\" style=\"margin:0px\">\n    <div class=\"panel-body\" style=\"padding:10px\">\n      <div style=\"color:blue\">Title {{dashboardService.selected.id}}</div>\n\n        <form class=\"form-horizontal\">\n          <div class=\"col-sm-12\" style=\"padding:0px\">\n            <input\n              type=\"text\"\n              class=\"form-control text\"\n              placeholder=\"title\"\n              [value]=\"dashboardService.selected.title\"\n              #title\n              (keyup.enter)=\"dashboardService.setTitle(title.value)\">\n          </div>\n\n          <div class=\"form-inline\" style=\"padding:0px\">\n            <label style=\"margin-top:5px\">\n            <input\n              style=\"height:12px\"\n              type=\"checkbox\"\n              class=\"form-control\"\n              [checked]=\"dashboardService.selected.border\"\n              #border\n              id=\"border\"\n              (click)=\"dashboardService.setBorder(border.checked)\"> Border</label>\n            <label *ngIf=\"isVisible('centertitle')\" style=\"margin-top:5px;margin-left:20px\">\n            <input\n              style=\"height:12px\"\n              type=\"checkbox\"\n              class=\"form-control\"\n              [checked]=\"dashboardService.selected.centerTitle\"\n              #centerTitle\n              id=\"centerTitle\"\n              (click)=\"dashboardService.setTitleCenter(centerTitle.checked)\"> Center title</label>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"isVisible('request')\"  style=\"padding:0px;margin:0px;margin-top:5px\">\n            <div style=\"color:blue\">Request</div>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"isVisible('request')\" style=\"padding:0px;margin:0px;margin-top:2px\">\n            <div class=\"form-inline\" style=\"padding:0px\">\n              <label>\n                <input\n                  style=\"height:12px\"\n                  type=\"checkbox\"\n                  class=\"form-control\"\n                  [checked]=\"dashboardService.selected.containerAvg\"\n                  #containerAvg\n                  id=\"containerAvg\"\n                  (click)=\"dashboardService.setContainerAvg(containerAvg.checked)\">\n                Containers Avg\n              </label>\n            </div>\n\n            <div class=\"btn dropdown\" style=\"padding:0px\">\n              <button class=\"dropdown btn btn-default dropdown-toggle\" style=\"width:218px;padding:2px\" type=\"button\" id=\"object\" data-toggle=\"dropdown\">\n                Request on: {{ dashboardService.selected.object }}\n                <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"dashboardService.setObject('all')\">All</a></li>\n                <li><a (click)=\"dashboardService.setObject('stack')\">Stack</a></li>\n                <li><a (click)=\"dashboardService.setObject('service')\">Service</a></li>\n                <li><a (click)=\"dashboardService.setObject('container')\">Container</a></li>\n                <li><a (click)=\"dashboardService.setObject('node')\">Node</a></li>\n              </div>\n            </div>\n\n            <div class=\"col-sm-12\" style=\"padding:0px;margin-top:3px\">\n              <div class=\"btn dropdown\" style=\"padding:0px\">\n                <button class=\"dropdown btn btn-default dropdown-toggle\" style=\"width:218px;padding:2px\" type=\"button\" id=\"refreshperiod\" data-toggle=\"dropdown\">\n                  Field: {{ dashboardService.selected.field }}\n                  <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n                </button>\n                <div class=\"dropdown-menu\">\n                  <li *ngIf=\"dashboardService.selected.type=='counter'\"><a (click)=\"dashboardService.setField('number')\">number</a></li>\n                  <li><a (click)=\"dashboardService.setField('cpu-usage')\">cpu-usage</a></li>\n                  <li><a (click)=\"dashboardService.setField('mem-limit')\">mem-limit</a></li>\n                  <li><a (click)=\"dashboardService.setField('mem-maxusage')\">mem-maxusage</a></li>\n                  <li><a (click)=\"dashboardService.setField('mem-usage')\">mem-usage</a></li>\n                  <li><a (click)=\"dashboardService.setField('mem-usage-p')\">mem-usage-p</a></li>\n                  <li><a (click)=\"dashboardService.setField('net-total-bytes')\">net-total-bytes</a></li>\n                  <li><a (click)=\"dashboardService.setField('net-rx-bytes')\">net-rx-bytes</a></li>\n                  <li><a (click)=\"dashboardService.setField('net-rx-packets')\">net-rx-packets</a></li>\n                  <li><a (click)=\"dashboardService.setField('net-tx-bytes')\">net-tx-bytes</a></li>\n                  <li><a (click)=\"dashboardService.setField('net-tx-packets')\">net-tx-packets</a></li>\n                  <li><a (click)=\"dashboardService.setField('io-total')\">io-total</a></li>\n                  <li><a (click)=\"dashboardService.setField('io-write')\">io-write</a></li>\n                  <li><a (click)=\"dashboardService.setField('io-read')\">io-read</a></li>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-sm-12\" style=\"padding:0px;margin-top:3px\">\n              <div class=\"btn dropdown\" style=\"padding:0px\">\n                <button class=\"dropdown btn btn-default dropdown-toggle\" style=\"width:218px;padding:2px\" type=\"button\" id=\"topNumber\" data-toggle=\"dropdown\">\n                  Filter: {{ dashboardService.selected.criterion }}\n                  <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n                </button>\n                <div class=\"dropdown-menu\">\n                  <li><a (click)=\"dashboardService.setCriterion('stack_name')\">Stack name</a></li>\n                  <li><a (click)=\"dashboardService.setCriterion('service_name')\">Service name</a></li>\n                  <li><a (click)=\"dashboardService.setCriterion('container_id')\">Container id</a></li>\n                  <li><a (click)=\"dashboardService.setCriterion('node_id')\">Node id</a></li>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-sm-12\" style=\"padding:0px;margin-top:3px\">\n              <input\n                type=\"text\"\n                class=\"form-control text \"\n                placeholder=\"filter value\"\n                [value]=\"dashboardService.selected.criterionValue\"\n                #criterionValue\n                (keyup.enter)=\"dashboardService.setCriterionValue(criterionValue.value)\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"isVisible('setting')\" style=\"padding:0px;margin:0px;margin-top:7px\">\n            <div style=\"color:blue\">Graph setting</div>\n          </div>\n\n          <div class=\"form-inline\" style=\"padding:0px\">\n            <label *ngIf=\"isVisible('legend')\" style=\"margin-top:5px;margin-left:0px\">\n            <input\n              style=\"height:12px\"\n              type=\"checkbox\"\n              class=\"form-control\"\n              [checked]=\"dashboardService.selected.transparentLegend\"\n              #transparentLegend\n              id=\"transparentLegend\"\n              (click)=\"dashboardService.setTransparentLegend(transparentLegend.checked)\"> Transparent legend</label>\n          </div>\n\n          <div *ngIf=\"isVisible('legend')\" class=\"form-group\" style=\"margin-left:0px\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n              <button type=\"button\"\n                class=\"btn btn-default btn-sm\"\n                (click)=\"dashboardService.linkLegendToGraph()\">\n                Attach graph\n              </button>\n              <button type=\"button\"\n                class=\"btn btn-default btn-sm\"\n                (click)=\"dashboardService.unlinkLegend()\">\n                Detach\n              </button>\n            </div>\n          </div>\n\n          <div class=\"form-inline\" style=\"padding:0px\">\n            <label *ngIf=\"isVisible('removelegend')\" style=\"margin-top:5px;margin-left:20px\">\n            <input\n              style=\"height:12px\"\n              type=\"checkbox\"\n              class=\"form-control\"\n              [checked]=\"dashboardService.selected.removeLocalLegend\"\n              #removeLocalLegend\n              id=\"removeLocalLegend\"\n              (click)=\"dashboardService.setRemoveLocalLegend(removeLocalLegend.checked)\"> Remove local legend</label>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"isVisible('top')\" style=\"padding:0px;margin-top:3px\">\n            <div class=\"btn dropup\" style=\"padding:0px\">\n              <button class=\"dropup btn btn-default dropdown-toggle\" style=\"width:218px;padding:2px\" type=\"button\" id=\"topNumber\" data-toggle=\"dropdown\">\n                Limited to: {{ dashboardService.getTopLabel() }}\n                <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"dashboardService.setTop(1)\">Top1</a></li>\n                <li><a (click)=\"dashboardService.setTop(3)\">Top3</a></li>\n                <li><a (click)=\"dashboardService.setTop(5)\">Top5</a></li>\n                <li><a (click)=\"dashboardService.setTop(10)\">Top10</a></li>\n                <li><a (click)=\"dashboardService.setTop(0)\">All</a></li>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"isVisible('histoperiod')\" style=\"padding:0px;margin-top:3px\">\n            <div class=\"btn dropup\" style=\"padding:0px\">\n              <button class=\"dropup btn btn-default dropdown-toggle\" style=\"width:218px;padding:2px\" type=\"button\" id=\"topNumber\" data-toggle=\"dropdown\">\n                Range: {{ dashboardService.selected.histoPeriod }}\n              <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-5m', '30s')\">5 min</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-10m', '30s')\">10 min</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-30m', '1m')\">30 min</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-1h', '1m')\">1 hour</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-5h', '5m')\">5 hour</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-10h', '10m')\">10 hours</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-1d', '30m')\">1 day</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-10d', '6h')\">10 days</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-1M', '1d')\">1 month</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-6M', '7d')\">6 months</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-1y', '1M')\">1 year</a></li>\n                <li><a (click)=\"dashboardService.setHistoPeriod('now-2y', '1M')\">2 years</a></li>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"isVisible('bubble')\" style=\"padding:0px;margin:0px;margin-top:7px\">\n            <div style=\"color:blue\">Bubble setting</div>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"isVisible('bubble')\" style=\"padding:0px;margin-top:3px\">\n            <div class=\"btn dropup\" style=\"padding:0px\">\n              <button class=\"dropup btn btn-default dropdown-toggle\" style=\"width:218px;padding:2px\" type=\"button\" id=\"refreshperiod\" data-toggle=\"dropdown\">\n                Axe X: {{ dashboardService.selected.bubbleXField }}\n                <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"dashboardService.setBubbleXField('cpu-usage')\">cpu-usage</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('mem-limit')\">mem-limit</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('mem-maxusage')\">mem-maxusage</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('mem-usage')\">mem-usage</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('mem-usage-p')\">mem-usage-p</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('net-total-bytes')\">net-total-bytes</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('net-rx-bytes')\">net-rx-bytes</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('net-rx-packets')\">net-rx-packets</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('net-tx-bytes')\">net-tx-bytes</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('net-tx-packets')\">net-tx-packets</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('io-total')\">io-total</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('io-write')\">io-write</a></li>\n                <li><a (click)=\"dashboardService.setBubbleXField('io-read')\">io-read</a></li>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"isVisible('bubble')\" style=\"padding:0px;margin-top:3px\">\n            <div class=\"btn dropup\" style=\"padding:0px\">\n              <button class=\"dropup btn btn-default dropdown-toggle\" style=\"width:218px;padding:2px\" type=\"button\" id=\"refreshperiod\" data-toggle=\"dropdown\">\n                Axe Y: {{ dashboardService.selected.bubbleYField }}\n                <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"dashboardService.setBubbleYField('cpu-usage')\">cpu-usage</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('mem-limit')\">mem-limit</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('mem-maxusage')\">mem-maxusage</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('mem-usage')\">mem-usage</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('mem-usage-p')\">mem-usage-p</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('net-total-bytes')\">net-total-bytes</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('net-rx-bytes')\">net-rx-bytes</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('net-rx-packets')\">net-rx-packets</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('net-tx-bytes')\">net-tx-bytes</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('net-tx-packets')\">net-tx-packets</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('io-total')\">io-total</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('io-write')\">io-write</a></li>\n                <li><a (click)=\"dashboardService.setBubbleYField('io-read')\">io-read</a></li>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"isVisible('bubble')\" style=\"padding:0px;margin-top:3px\">\n            <div class=\"btn dropup\" style=\"padding:0px\">\n              <button class=\"dropup btn btn-default dropdown-toggle\" style=\"width:218px;padding:2px\" type=\"button\" id=\"refreshperiod\" data-toggle=\"dropdown\">\n                Scale: {{ dashboardService.selected.bubbleScale }}\n                <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n              </button>\n              <div class=\"dropdown-menu\">\n                <li><a (click)=\"dashboardService.setBubbleScale('small')\">Small</a></li>\n                <li><a (click)=\"dashboardService.setBubbleScale('medium')\">Medium</a></li>\n                <li><a (click)=\"dashboardService.setBubbleScale('large')\">Large</a></li>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-inline\" *ngIf=\"isVisible('areas')\" style=\"padding:0px\">\n            <label style=\"margin-top:5px\">\n            <input\n              style=\"height:12px\"\n              type=\"checkbox\"\n              class=\"form-control\"\n              [checked]=\"dashboardService.selected.stackedAreas\"\n              #stackedAreas\n              id=\"stackedArea\"\n              (click)=\"dashboardService.setStackedAreas(stackedAreas.checked)\"> Stacked</label>\n            <label style=\"margin-top:5px;margin-left:20px\">\n            <input\n              style=\"height:12px\"\n              type=\"checkbox\"\n              class=\"form-control\"\n              [checked]=\"dashboardService.selected.percentAreas\"\n              #percentAreas\n              id=\"percentAreas\"\n              (click)=\"dashboardService.setPercentAreas(percentAreas.checked)\"> Percent</label>\n          </div>\n\n      </form>\n    </div>\n\n    <div *ngIf=\"isVisible('alert')\">\n      <div class=\"panel-body\" style=\"padding:10px\">\n        <div style=\"color:blue\">Color events</div>\n        <div class=\"form-inline\" style=\"padding:0px\">\n          <label style=\"margin-top:5px\">\n          <input\n            style=\"height:12px\"\n            type=\"checkbox\"\n            class=\"form-control\"\n            [checked]=\"dashboardService.selected.alert\"\n            #alert\n            id=\"border\"\n            (click)=\"dashboardService.setAlert(alert.checked)\"> Enabled</label>\n        </div>\n          <div class=\"col-sm-12\" style=\"padding:0px;margin-top:5px;margin-left:0px;\">\n            <div class=\"col-sm-4 col-sm-offset-2\" style=\"padding:0px\">\n              <input\n                type=\"text\"\n                class=\"form-control bound\"\n                placeholder=\"warn\"\n                [value]=\"dashboardService.selected.alertMin\"\n                #minValue\n                (keyup.enter)=\"dashboardService.setMinAlert(minValue.value)\">\n            </div>\n            <div class=\"col-sm-4 col-sm-offset-0\" style=\"padding:0px\">\n              <input\n                type=\"text\"\n                class=\"form-control bound\"\n                placeholder=\"alert\"\n                [value]=\"dashboardService.selected.alertMax\"\n                #maxValue\n                (keyup.enter)=\"dashboardService.setMaxAlert(maxValue.value)\">\n            </div>\n            <div class=\"col-sm-12\" style=\"padding:0px;margin:0px\">\n              <div class=\"pull-left\" style=\"background-color:green;width:70px;height:25px\"></div>\n              <div class=\"pull-left\" style=\"background-color:orange;width:70px;height:25px\"></div>\n              <div class=\"pull-left\" style=\"background-color:red;width:70px;height:25px\"></div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dgraph-editor/dgraph-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_graph_model__ = __webpack_require__("../../../../../src/app/models/graph.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DGraphEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DGraphEditorComponent = (function () {
    function DGraphEditorComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.all = "[centertitle][request][setting][top][histoperiod][bubble][areas][alert]";
        this.visibility = {};
        this.messageLegend = "";
        this.visibility['text'] = "";
        this.visibility['lines'] = "[request][centertitle][setting][top][histoperiod]";
        this.visibility['areas'] = "[request][centertitle][setting][top][histoperiod][areas]";
        this.visibility['bars'] = "[request][centertitle][setting][top][removelegend]";
        this.visibility['pie'] = "[request][setting][top]";
        this.visibility['bubbles'] = "[request][centertitle][setting][top][bubble]";
        this.visibility['counterSquare'] = "[horizontal][request][alert]";
        this.visibility['counterCircle'] = "[horizontal][request][alert]";
        this.visibility['legend'] = "[centertitle][setting][legend]";
        this.visibility['innerStats'] = "[centertitle][setting][legend]";
    }
    DGraphEditorComponent.prototype.ngOnInit = function () {
    };
    DGraphEditorComponent.prototype.ngOnDestroy = function () {
    };
    DGraphEditorComponent.prototype.isVisible = function (name) {
        var visibility = this.visibility[this.dashboardService.selected.type];
        if (!visibility) {
            return false;
        }
        if (visibility.indexOf("[" + name + "]") >= 0) {
            return true;
        }
        return false;
    };
    return DGraphEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_graph_model__["a" /* Graph */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_graph_model__["a" /* Graph */]) === "function" && _a || Object)
], DGraphEditorComponent.prototype, "graph", void 0);
DGraphEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dgraph-editor',
        template: __webpack_require__("../../../../../src/app/dashboard/dgraph-editor/dgraph-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dgraph-editor/dgraph-editor.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object])
], DGraphEditorComponent);

var _a, _b;
//# sourceMappingURL=dgraph-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dgraph/dgraph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dgraph {\n    position: absolute;\n    cursor:move;\n    background-color: white;\n    font-size: 12px;\n    border-radius: 3px;\n}\n\n.graph-transparent {\n  opacity: .50;\n}\n\n.dgraph-corner-resize {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n}\n#dgraph-top-left-resize {\n  top: 0px; left: 0px;\n  cursor: nwse-resize;\n}\n\n#dgraph-top-right-resize {\n  top: 0px; right: 0px;\n  cursor: nesw-resize;\n}\n\n#dgraph-bottom-left-resize {\n  bottom: 0px; left: 0px;\n  cursor: nesw-resize;\n}\n\n#dgraph-bottom-right-resize {\n  bottom: 0px; right: 0px;\n  cursor: nwse-resize;\n}\n\n.corner {\n\n}\n\n.graph-selected {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.graph-not-selected {\n}\n\n.graph-border {\n  border: 1px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dgraph/dgraph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='dgraph' #chart\n  style=\"overflow:hidden\"\n  [class.graph-selected]=\"dashboardService.selected.id==graph.id\"\n  [class.graph-not-selected]=\"dashboardService.selected.id!=graph.id\"\n  [class.graph-border]=\"graph.border\"\n  [style.top.px]='graph.y'\n  [style.left.px]='graph.x'\n  [style.width.px]='graph.width'\n  [style.height.px]='graph.height'\n  (mousedown)='onWindowPress($event)'\n  (mousemove)='onWindowDrag($event)'>\n  <div\n    (mousedown)='onCornerClick($event, topLeftResize)'\n    [class.corner]=\"dashboardService.selected.id==graph.id\"\n    id='dgraph-top-left-resize'\n    class='dgraph-corner-resize'>\n  </div>\n  <div\n    (mousedown)='onCornerClick($event, topRightResize)'\n    [class.corner]=\"dashboardService.selected.id==graph.id\"\n    id='dgraph-top-right-resize'\n    class='dgraph-corner-resize'>\n  </div>\n  <div\n    (mousedown)='onCornerClick($event, bottomLeftResize)'\n    [class.corner]=\"dashboardService.selected.id==graph.id\"\n    id='dgraph-bottom-left-resize'\n    class='dgraph-corner-resize'>\n  </div>\n  <div\n    (mousedown)='onCornerClick($event, bottomRightResize)'\n    [class.corner]=\"dashboardService.selected.id==graph.id\"\n    id='dgraph-bottom-right-resize'\n    class='dgraph-corner-resize'>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dgraph/dgraph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_graph_model__ = __webpack_require__("../../../../../src/app/models/graph.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_graph_text_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-text.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_graph_pie_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-pie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_graph_lines_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-lines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_graph_bars_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-bars.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_graph_areas_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-areas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_graph_bubbles_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-bubbles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_graph_counter_square_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-counter-square.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_graph_counter_circle_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-counter-circle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_graph_legend_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-legend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_graph_inner_stats_service__ = __webpack_require__("../../../../../src/app/dashboard/services/graph-inner-stats.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DGraphComponent = (function () {
    function DGraphComponent(dashboardService, menuService, graphPie, graphLines, graphBars, graphAreas, graphBubbles, graphText, graphCounterSquare, graphCounterCircle, graphLegend, graphInnerStats) {
        this.dashboardService = dashboardService;
        this.menuService = menuService;
        this.graphPie = graphPie;
        this.graphLines = graphLines;
        this.graphBars = graphBars;
        this.graphAreas = graphAreas;
        this.graphBubbles = graphBubbles;
        this.graphText = graphText;
        this.graphCounterSquare = graphCounterSquare;
        this.graphCounterCircle = graphCounterCircle;
        this.graphLegend = graphLegend;
        this.graphInnerStats = graphInnerStats;
        //Resizer variable
        this.px = 0;
        this.py = 0;
        this.minWidth = 20;
        this.minHeight = 20;
        this.draggingCorner = false;
        this.draggingWindow = false;
        this.serviceMap = {};
        this.legendMode = {};
        this.isDelayUpdate = false;
        this.serviceMap['text'] = graphText;
        this.serviceMap['pie'] = graphPie;
        this.serviceMap['lines'] = graphLines;
        this.serviceMap['bars'] = graphBars;
        this.serviceMap['areas'] = graphAreas;
        this.serviceMap['bubbles'] = graphBubbles;
        this.serviceMap['counterSquare'] = graphCounterSquare;
        this.serviceMap['counterCircle'] = graphCounterCircle;
        this.serviceMap['legend'] = graphLegend;
        this.serviceMap['innerStats'] = graphInnerStats;
        //possible graphs link to legend
        this.legendMode['pie'] = true;
        this.legendMode['lines'] = true;
        this.legendMode['bars'] = true;
        this.legendMode['areas'] = true;
        this.legendMode['bubbles'] = true;
    }
    DGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.serviceMap[this.graph.type].init(this.graph, this.chartContainer)
        this.serviceMap[this.graph.type].createGraph(this.graph, this.chartContainer);
        this.dashboardService.onNewData.subscribe(function () {
            if (_this.graph.type != "legend") {
                _this.updateGraph();
            }
            else {
                _this.setDelayUpdate(1000);
            }
        });
        this.menuService.onWindowResize.subscribe(function (win) {
            //this.resizeGraph()
        });
    };
    DGraphComponent.prototype.ngOnDestroy = function () {
        this.serviceMap[this.graph.type].destroy();
        //this.metricsService.onNewData.unsubscribe()
    };
    DGraphComponent.prototype.setDelayUpdate = function (delay) {
        var _this = this;
        if (!this.isDelayUpdate) {
            this.isDelayUpdate = true;
            setTimeout(function () {
                _this.updateGraph();
                _this.isDelayUpdate = false;
            }, delay);
        }
    };
    DGraphComponent.prototype.resizeGraph = function () {
        this.serviceMap[this.graph.type].resizeGraph(this.graph);
    };
    DGraphComponent.prototype.updateGraph = function () {
        this.serviceMap[this.graph.type].updateGraph(this.graph);
    };
    //----------------------------------------------------------------------------
    // Edition mode
    //----------------------------------------------------------------------------
    DGraphComponent.prototype.onWindowPress = function (event) {
        this.draggingWindow = true;
        var pos = this.adjustToGrid(event);
        this.px = pos.x;
        this.py = pos.y;
        if (this.graph.id != 'graph00') {
            this.executeClickMode();
        }
        //event.stopPropagation();
        return false;
    };
    DGraphComponent.prototype.onWindowDrag = function (event) {
        if (!this.draggingWindow) {
            return;
        }
        var pos = this.adjustToGrid(event);
        var offsetX = pos.x - this.px;
        var offsetY = pos.y - this.py;
        this.graph.x += offsetX;
        this.graph.y += offsetY;
        this.graph.x = Math.floor(this.graph.x / 10) * 10;
        this.graph.y = Math.floor(this.graph.y / 10) * 10;
        this.px = pos.x;
        this.py = pos.y;
        event.stopPropagation();
    };
    DGraphComponent.prototype.topLeftResize = function (offsetX, offsetY) {
        this.graph.x += offsetX;
        this.graph.y += offsetY;
        this.graph.width -= offsetX;
        this.graph.height -= offsetY;
        this.adjustSizeOnGrid();
        this.resizeGraph();
    };
    DGraphComponent.prototype.topRightResize = function (offsetX, offsetY) {
        this.graph.y += offsetY;
        this.graph.width += offsetX;
        this.graph.height -= offsetY;
        this.adjustSizeOnGrid();
        this.resizeGraph();
    };
    DGraphComponent.prototype.bottomLeftResize = function (offsetX, offsetY) {
        this.graph.x += offsetX;
        this.graph.width -= offsetX;
        this.graph.height += offsetY;
        this.adjustSizeOnGrid();
        this.resizeGraph();
    };
    DGraphComponent.prototype.bottomRightResize = function (offsetX, offsetY) {
        this.graph.width += offsetX;
        this.graph.height += offsetY;
        this.adjustSizeOnGrid();
        this.resizeGraph();
    };
    DGraphComponent.prototype.onCornerClick = function (event, resizer) {
        this.draggingCorner = true;
        this.dashboardService.selected = this.graph;
        var pos = this.adjustToGrid(event);
        this.px = pos.x;
        this.py = pos.y;
        this.resizer = resizer;
        event.preventDefault();
        event.stopPropagation();
    };
    DGraphComponent.prototype.onCornerMove = function (event) {
        if (!this.draggingCorner) {
            return;
        }
        var pos = this.adjustToGrid(event);
        var offsetX = pos.x - this.px;
        var offsetY = pos.y - this.py;
        var lastX = this.graph.x;
        var lastY = this.graph.y;
        var pWidth = this.graph.width;
        var pHeight = this.graph.height;
        this.resizer(offsetX, offsetY);
        if (this.graph.width < this.minWidth || this.graph.height < this.minHeight) {
            this.graph.x = lastX;
            this.graph.y = lastY;
            this.graph.width = pWidth;
            this.graph.height = pHeight;
            this.resizeGraph();
        }
        this.px = pos.x;
        this.py = pos.y;
    };
    DGraphComponent.prototype.onCornerRelease = function (event) {
        this.draggingWindow = false;
        this.draggingCorner = false;
        //event.stopPropagation();
        return false;
    };
    DGraphComponent.prototype.executeClickMode = function () {
        if (this.dashboardService.clickMode == this.dashboardService.ModeLinkLegendToGraph) {
            if (this.dashboardService.selected.type == 'legend' && this.graph.object != 'all' && this.legendMode[this.graph.type]) {
                this.dashboardService.selected.legendGraphId = this.graph.id;
                this.dashboardService.selected.object = this.graph.object;
                this.dashboardService.selected.title = "Legend " + this.graph.object + 's';
            }
            this.dashboardService.clickMode = this.dashboardService.ModeSetting;
            this.dashboardService.redisplay();
            return;
        }
        this.dashboardService.selected = this.graph;
    };
    DGraphComponent.prototype.adjustToGrid = function (event) {
        return {
            x: Math.floor(event.clientX / 10) * 10,
            y: Math.floor(event.clientY / 10) * 10
        };
    };
    DGraphComponent.prototype.adjustSizeOnGrid = function () {
        this.graph.width = Math.floor(this.graph.width / 10) * 10;
        this.graph.height = Math.floor(this.graph.height / 10) * 10;
    };
    return DGraphComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('chart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], DGraphComponent.prototype, "chartContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models_graph_model__["a" /* Graph */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_graph_model__["a" /* Graph */]) === "function" && _b || Object)
], DGraphComponent.prototype, "graph", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('document:mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DGraphComponent.prototype, "onCornerMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('document:mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DGraphComponent.prototype, "onCornerRelease", null);
DGraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dgraph',
        template: __webpack_require__("../../../../../src/app/dashboard/dgraph/dgraph.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dgraph/dgraph.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_graph_text_service__["a" /* GraphText */], __WEBPACK_IMPORTED_MODULE_5__services_graph_pie_service__["a" /* GraphPie */], __WEBPACK_IMPORTED_MODULE_6__services_graph_lines_service__["a" /* GraphLines */], __WEBPACK_IMPORTED_MODULE_7__services_graph_bars_service__["a" /* GraphBars */], __WEBPACK_IMPORTED_MODULE_8__services_graph_areas_service__["a" /* GraphAreas */], __WEBPACK_IMPORTED_MODULE_9__services_graph_bubbles_service__["a" /* GraphBubbles */], __WEBPACK_IMPORTED_MODULE_10__services_graph_counter_square_service__["a" /* GraphCounterSquare */], __WEBPACK_IMPORTED_MODULE_11__services_graph_counter_circle_service__["a" /* GraphCounterCircle */], __WEBPACK_IMPORTED_MODULE_12__services_graph_legend_service__["a" /* GraphLegend */], __WEBPACK_IMPORTED_MODULE_13__services_graph_inner_stats_service__["a" /* GraphInnerStats */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_graph_pie_service__["a" /* GraphPie */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_graph_pie_service__["a" /* GraphPie */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_graph_lines_service__["a" /* GraphLines */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_graph_lines_service__["a" /* GraphLines */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_graph_bars_service__["a" /* GraphBars */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_graph_bars_service__["a" /* GraphBars */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_graph_areas_service__["a" /* GraphAreas */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_graph_areas_service__["a" /* GraphAreas */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__services_graph_bubbles_service__["a" /* GraphBubbles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_graph_bubbles_service__["a" /* GraphBubbles */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_graph_text_service__["a" /* GraphText */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_graph_text_service__["a" /* GraphText */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10__services_graph_counter_square_service__["a" /* GraphCounterSquare */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_graph_counter_square_service__["a" /* GraphCounterSquare */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_11__services_graph_counter_circle_service__["a" /* GraphCounterCircle */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_graph_counter_circle_service__["a" /* GraphCounterCircle */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_12__services_graph_legend_service__["a" /* GraphLegend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_graph_legend_service__["a" /* GraphLegend */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_13__services_graph_inner_stats_service__["a" /* GraphInnerStats */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_graph_inner_stats_service__["a" /* GraphInnerStats */]) === "function" && _p || Object])
], DGraphComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
//# sourceMappingURL=dgraph.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/directives/movable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_graph_model__ = __webpack_require__("../../../../../src/app/models/graph.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovableDirective = (function () {
    function MovableDirective(eRef) {
        this.eRef = eRef;
        this.keys = [37, 38, 39, 40];
        this.clienty0 = 0;
        this.clientx0 = 0;
        this.graphx0 = 0;
        this.graphy0 = 0;
        this.movable = false;
        this.corner = 0;
    }
    MovableDirective.prototype.ngOnInit = function () {
        this.eRef.nativeElement.style.position = "absolute";
        this.eRef.nativeElement.style.left = "0px";
        this.eRef.nativeElement.style.top = "0px";
    };
    MovableDirective.prototype.onMouseDown = function ($event) {
        this.movable = true;
        this.graphx0 = parseInt(this.eRef.nativeElement.style.left.replace('px', ''));
        this.graphy0 = parseInt(this.eRef.nativeElement.style.top.replace('px', ''));
        this.clientx0 = $event.clientX;
        this.clienty0 = $event.clientY;
    };
    MovableDirective.prototype.onMouseUp = function ($event) {
        this.movable = false;
    };
    MovableDirective.prototype.onMouseMove = function ($event) {
        if (this.movable) {
            if (!this.graph) {
                this.eRef.nativeElement.style.left = (($event.clientX - this.clientx0) + this.graphx0) + 'px';
                this.eRef.nativeElement.style.top = (($event.clientY - this.clienty0) + this.graphy0) + 'px';
            }
            else {
                this.graph.x = (($event.clientX - this.clientx0) + this.graphx0);
                this.graph.y = (($event.clientY - this.clienty0) + this.graphy0);
            }
        }
    };
    MovableDirective.prototype.onNudge = function ($event) {
        this.keys[$event.keyCode] = $event.type === 'keydown' ? 1 : 0;
        var x = parseInt(this.eRef.nativeElement.style.left.replace('px', ''));
        var y = parseInt(this.eRef.nativeElement.style.top.replace('px', ''));
        x = x - this.keys[37] + this.keys[39];
        y = y - this.keys[38] + this.keys[40];
        this.eRef.nativeElement.style.left = x + 'px';
        this.eRef.nativeElement.style.top = y + 'px';
    };
    return MovableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_graph_model__["a" /* Graph */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_graph_model__["a" /* Graph */]) === "function" && _a || Object)
], MovableDirective.prototype, "graph", void 0);
MovableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[graphMovable]',
        host: {
            '(mousedown)': 'onMouseDown($event)',
            '(document: mousemove)': 'onMouseMove($event)',
            '(document: mouseup)': 'onMouseUp($event)',
        }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object])
], MovableDirective);

var _a, _b;
//# sourceMappingURL=movable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/models/dashboard-default.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDefault; });
var DashboardDefault = (function () {
    function DashboardDefault() {
        this.graphs = "\n    [\n      {\n        \"id\": \"graph2\",\n        \"x\": 10,\n        \"y\": 20,\n        \"width\": 300,\n        \"height\": 90,\n        \"type\": \"counterSquare\",\n        \"fields\": [],\n        \"title\": \"Stacks CPU: \",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": true,\n        \"alertMin\": \"30\",\n        \"alertMax\": \"100\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"all\",\n        \"field\": \"cpu-usage\",\n        \"counterHorizontal\": true,\n        \"requestId\": \"graph2\"\n      },\n      {\n        \"id\": \"graph3\",\n        \"x\": 10,\n        \"y\": 130,\n        \"width\": 300,\n        \"height\": 90,\n        \"type\": \"counterSquare\",\n        \"fields\": [],\n        \"title\": \"Stacks Mem: \",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": true,\n        \"alertMin\": \"4GB\",\n        \"alertMax\": \"7GB\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"all\",\n        \"field\": \"mem-usage\",\n        \"counterHorizontal\": true,\n        \"requestId\": \"graph3\"\n      },\n      {\n        \"id\": \"graph4\",\n        \"x\": 10,\n        \"y\": 240,\n        \"width\": 300,\n        \"height\": 100,\n        \"type\": \"counterSquare\",\n        \"fields\": [],\n        \"title\": \"Stacks Net: \",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": true,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"all\",\n        \"field\": \"net-total-bytes\",\n        \"counterHorizontal\": true,\n        \"requestId\": \"graph4\"\n      },\n      {\n        \"id\": \"graph5\",\n        \"x\": 10,\n        \"y\": 360,\n        \"width\": 300,\n        \"height\": 100,\n        \"type\": \"counterSquare\",\n        \"fields\": [],\n        \"title\": \"Stacks IO: \",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": true,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"all\",\n        \"field\": \"io-total\",\n        \"counterHorizontal\": true,\n        \"requestId\": \"graph5\"\n      },\n      {\n        \"id\": \"graph6\",\n        \"x\": 440,\n        \"y\": 20,\n        \"width\": 210,\n        \"height\": 50,\n        \"type\": \"counterSquare\",\n        \"fields\": [],\n        \"title\": \"Stack number: \",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": true,\n        \"alertMin\": \"\",\n        \"alertMax\": \"1\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"stack\",\n        \"field\": \"number\",\n        \"counterHorizontal\": true,\n        \"requestId\": \"graph6\"\n      },\n      {\n        \"id\": \"graph7\",\n        \"x\": 440,\n        \"y\": 80,\n        \"width\": 210,\n        \"height\": 50,\n        \"type\": \"counterSquare\",\n        \"fields\": [],\n        \"title\": \"Service number: \",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": true,\n        \"alertMin\": \"\",\n        \"alertMax\": \"10\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"service\",\n        \"field\": \"number\",\n        \"counterHorizontal\": true,\n        \"requestId\": \"graph7\"\n      },\n      {\n        \"id\": \"graph8\",\n        \"x\": 440,\n        \"y\": 140,\n        \"width\": 210,\n        \"height\": 50,\n        \"type\": \"counterSquare\",\n        \"fields\": [],\n        \"title\": \"Container number: \",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": true,\n        \"alertMin\": \"\",\n        \"alertMax\": \"14\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"container\",\n        \"field\": \"number\",\n        \"counterHorizontal\": true,\n        \"requestId\": \"graph8\"\n      },\n      {\n        \"id\": \"graph9\",\n        \"x\": 670,\n        \"y\": 200,\n        \"width\": 530,\n        \"height\": 260,\n        \"type\": \"bubbles\",\n        \"fields\": [],\n        \"title\": \"5 first services CPU/Mem size: Net\",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 5,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"service\",\n        \"field\": \"net-total-bytes\",\n        \"bubbleXField\": \"mem-usage\",\n        \"bubbleYField\": \"cpu-usage\",\n        \"bubbleScale\": \"medium\",\n        \"requestId\": \"graph9\"\n      },\n      {\n        \"id\": \"graph10\",\n        \"x\": 670,\n        \"y\": 20,\n        \"width\": 170,\n        \"height\": 170,\n        \"type\": \"pie\",\n        \"fields\": [],\n        \"title\": \"CPU: 3 First services\",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"service\",\n        \"field\": \"cpu-usage\",\n        \"requestId\": \"graph10\"\n      },\n      {\n        \"id\": \"graph11\",\n        \"x\": 1030,\n        \"y\": 20,\n        \"width\": 170,\n        \"height\": 170,\n        \"type\": \"pie\",\n        \"fields\": [],\n        \"title\": \"Net: 3 first services\",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"service\",\n        \"field\": \"net-total-bytes\",\n        \"requestId\": \"graph11\"\n      },\n      {\n        \"id\": \"graph12\",\n        \"x\": 850,\n        \"y\": 20,\n        \"width\": 170,\n        \"height\": 170,\n        \"type\": \"pie\",\n        \"fields\": [],\n        \"title\": \"Mem: 3 First services\",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"service\",\n        \"field\": \"mem-usage\",\n        \"requestId\": \"graph12\"\n      },\n      {\n        \"id\": \"graph13\",\n        \"x\": 440,\n        \"y\": 200,\n        \"width\": 210,\n        \"height\": 210,\n        \"type\": \"legend\",\n        \"fields\": [],\n        \"title\": \"Legend services\",\n        \"border\": false,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"service\",\n        \"transparentLegend\": false\n      },\n      {\n        \"id\": \"graph14\",\n        \"x\": 320,\n        \"y\": 20,\n        \"width\": 100,\n        \"height\": 90,\n        \"type\": \"lines\",\n        \"fields\": [],\n        \"title\": \"all\",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"all\",\n        \"field\": \"cpu-usage\",\n        \"histoPeriod\": \"now-30m\",\n        \"requestId\": \"graph14\",\n        \"yTitle\": \"cpu usage\",\n        \"histoStep\": \"1m\"\n      },\n      {\n        \"id\": \"graph15\",\n        \"x\": 320,\n        \"y\": 130,\n        \"width\": 100,\n        \"height\": 90,\n        \"type\": \"lines\",\n        \"fields\": [],\n        \"title\": \"all\",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"all\",\n        \"field\": \"mem-usage\",\n        \"histoPeriod\": \"now-30m\",\n        \"requestId\": \"graph15\",\n        \"yTitle\": \"cpu usage\",\n        \"histoStep\": \"1m\"\n      },\n      {\n        \"id\": \"graph16\",\n        \"x\": 320,\n        \"y\": 240,\n        \"width\": 100,\n        \"height\": 100,\n        \"type\": \"lines\",\n        \"fields\": [],\n        \"title\": \"all\",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"all\",\n        \"field\": \"net-total-bytes\",\n        \"histoPeriod\": \"now-30m\",\n        \"requestId\": \"graph16\",\n        \"yTitle\": \"cpu usage\",\n        \"histoStep\": \"1m\"\n      },\n      {\n        \"id\": \"graph17\",\n        \"x\": 320,\n        \"y\": 360,\n        \"width\": 100,\n        \"height\": 100,\n        \"type\": \"lines\",\n        \"fields\": [],\n        \"title\": \"all\",\n        \"border\": true,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"all\",\n        \"field\": \"cpu-usage\",\n        \"histoPeriod\": \"now-30m\",\n        \"requestId\": \"graph17\",\n        \"yTitle\": \"cpu usage\",\n        \"histoStep\": \"1m\"\n      },\n      {\n        \"id\": \"graph18\",\n        \"x\": 320,\n        \"y\": 0,\n        \"width\": 100,\n        \"height\": 20,\n        \"type\": \"text\",\n        \"fields\": [],\n        \"title\": \"30 min\",\n        \"border\": false,\n        \"modeParameter\": false,\n        \"topNumber\": 3,\n        \"alert\": false,\n        \"alertMin\": \"\",\n        \"alertMax\": \"\",\n        \"criterion\": \"\",\n        \"criterionValue\": \"\",\n        \"stackedAreas\": true,\n        \"legendNames\": [],\n        \"legendColors\": [],\n        \"containerAvg\": false,\n        \"roundedBox\": true,\n        \"object\": \"stack\",\n        \"field\": \"cpu-usage\",\n        \"requestId\": \"graph18\"\n      }\n    ]\n";
    }
    return DashboardDefault;
}());

//# sourceMappingURL=dashboard-default.model.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/models/dashboard-inner-stats.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardInnerStats; });
var DashboardInnerStats = (function () {
    function DashboardInnerStats() {
        this.refreshNb = 0;
        this.totalRefreshTime = 0;
    }
    DashboardInnerStats.prototype.initNewRefresh = function () {
        this.refreshRequestNb = 0;
        this.totalRequestTime = 0;
        this.maxRequestTime = 0;
        this.requestErrorNb = 0;
        this.maxGraphTitle = "";
        this.refreshNb++;
    };
    DashboardInnerStats.prototype.setRequestTime = function (t0, title) {
        var requestTime = (new Date().getTime()) - t0;
        this.refreshRequestNb++;
        this.totalRequestTime += requestTime;
        if (requestTime > this.maxRequestTime) {
            this.maxRequestTime = requestTime;
            this.maxGraphTitle = title;
        }
        this.totalRefreshTime += requestTime;
        this.avgRefreshTime = this.totalRefreshTime / this.refreshNb;
    };
    DashboardInnerStats.prototype.setRequestError = function () {
        this.requestErrorNb++;
    };
    return DashboardInnerStats;
}());

//# sourceMappingURL=dashboard-inner-stats.model.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/models/dashboard.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
var Dashboard = (function () {
    function Dashboard(id, name, data) {
        this.id = id;
        this.name = name;
        this.data = data;
    }
    Dashboard.prototype.set = function (ownerName, ownerOrganization, sdate) {
        this.ownerName = ownerName;
        this.ownerOrganization = ownerOrganization;
        this.date = sdate;
    };
    return Dashboard;
}());

//# sourceMappingURL=dashboard.model.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/models/stats-request-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsRequestItem; });
var StatsRequestItem = (function () {
    function StatsRequestItem(id, req, title) {
        this.id = id;
        this.request = req;
        this.graphTitle = title;
    }
    return StatsRequestItem;
}());

//# sourceMappingURL=stats-request-item.model.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_graph_model__ = __webpack_require__("../../../../../src/app/models/graph.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_dashboard_inner_stats_model__ = __webpack_require__("../../../../../src/app/dashboard/models/dashboard-inner-stats.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_stats_request_model__ = __webpack_require__("../../../../../src/app/models/stats-request.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_stats_request_item_model__ = __webpack_require__("../../../../../src/app/dashboard/models/stats-request-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_graph_historic_data_model__ = __webpack_require__("../../../../../src/app/models/graph-historic-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_graph_historic_answer_model__ = __webpack_require__("../../../../../src/app/models/graph-historic-answer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_colors_service__ = __webpack_require__("../../../../../src/app/services/colors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_dashboard_default_model__ = __webpack_require__("../../../../../src/app/dashboard/models/dashboard-default.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DashboardService = (function () {
    function DashboardService(httpService, menuService, usersService, colorsService) {
        var _this = this;
        this.httpService = httpService;
        this.menuService = menuService;
        this.usersService = usersService;
        this.colorsService = colorsService;
        this.graphs = [];
        this.editor = false;
        this.nullPeriod = [];
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.onGraphSelect = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.yTitleMap = {};
        this.unit = {};
        this.x0 = 280;
        this.y0 = 5;
        this.w0 = 300;
        this.h0 = 150;
        this.refresh = 30;
        this.period = 'now-2m';
        this.requestMap = {};
        this.nbGraph = 1;
        this.innerStats = new __WEBPACK_IMPORTED_MODULE_6__models_dashboard_inner_stats_model__["a" /* DashboardInnerStats */]();
        this.showEditor = false;
        this.showAlert = false;
        this.nodeColorIndex = 0;
        this.editorGraph = new __WEBPACK_IMPORTED_MODULE_5__models_graph_model__["a" /* Graph */]('graph1', this.x0, this.y0, this.w0, this.h0, 'editor', '');
        this.notSelected = new __WEBPACK_IMPORTED_MODULE_5__models_graph_model__["a" /* Graph */]('', 0, 0, 0, 0, "", "");
        this.selected = this.notSelected;
        this.isVisible = false;
        this.ModeSetting = "setting";
        this.ModeLinkLegendToGraph = "linkLegendToGraph";
        this.clickMode = this.ModeSetting;
        this.notSelected.title = "";
        this.notSelected.object = "stack";
        this.notSelected.field = "cpu-usage";
        this.notSelected.topNumber = 3;
        this.notSelected.border = true;
        this.yTitleMap['cpu-usage'] = 'cpu usage';
        this.yTitleMap['mem-limit'] = 'memory limit';
        this.yTitleMap['mem-maxusage'] = 'memory max usage';
        this.yTitleMap['mem-usage'] = 'memory usage';
        this.yTitleMap['mem-usage-p'] = 'memory usage';
        this.yTitleMap['net-total-bytes'] = 'network traffic';
        this.yTitleMap['net-rx-bytes'] = 'network rx traffic';
        this.yTitleMap['net-rx-packets'] = 'network rx traffic';
        this.yTitleMap['net-tx-bytes'] = 'network tx traffic';
        this.yTitleMap['net-tx-packets'] = 'network tx traffic';
        this.yTitleMap['io-total'] = 'io r/w';
        this.yTitleMap['io-write'] = 'io write';
        this.yTitleMap['io-read'] = 'io read';
        //
        this.unit['cpu-usage'] = '%';
        this.unit['mem-limit'] = 'bytes';
        this.unit['mem-maxusage'] = 'bytes';
        this.unit['mem-usage'] = 'bytes';
        this.unit['mem-usage-p'] = '%';
        this.unit['net-total-bytes'] = 'bytes/s';
        this.unit['net-rx-bytes'] = 'bytes/s';
        this.unit['net-rx-packets'] = 'packets/s';
        this.unit['net-tx-bytes'] = 'bytes/s';
        this.unit['net-tx-packets'] = 'packets/s';
        this.unit['io-total'] = 'bytes/s';
        this.unit['io-write'] = 'bytes/s';
        this.unit['io-read'] = 'bytes/s';
        this.cancelRequests();
        this.menuService.setCurrentTimer(setInterval(function () {
            _this.redisplay();
        }, this.refresh * 1000));
        var histo0 = new __WEBPACK_IMPORTED_MODULE_9__models_graph_historic_data_model__["a" /* GraphHistoricData */](new Date());
        histo0.graphValues = [0];
        var yest = new Date();
        yest.setDate(yest.getDate() - 1);
        var histo1 = new __WEBPACK_IMPORTED_MODULE_9__models_graph_historic_data_model__["a" /* GraphHistoricData */](yest);
        histo0.graphValues = [0];
        histo1.graphValues = [0];
        this.nullPeriod.push(histo0);
        this.nullPeriod.push(histo1);
        this.menuService.onRefreshClicked.subscribe(function () {
            if (_this.isVisible) {
                _this.redisplay();
            }
        });
    }
    DashboardService.prototype.cancelRequests = function () {
        this.menuService.clearCurrentTimer();
    };
    DashboardService.prototype.addGraph = function (type, offTop, offLeft) {
        this.nbGraph++;
        var graph = new __WEBPACK_IMPORTED_MODULE_5__models_graph_model__["a" /* Graph */]('graph' + this.nbGraph, this.x0 - offLeft, this.y0 - offTop, this.w0, this.h0, type, '');
        this.x0 += 2;
        this.y0 += 2;
        if (graph.type == "pie") {
            graph.width = graph.height;
        }
        graph.title = this.notSelected.title;
        graph.object = this.notSelected.object;
        graph.field = this.notSelected.field;
        if (graph.type == 'counterSquare' || graph.type == 'counterCircle') {
            graph.field = 'number';
            if (graph.type == 'counterSquare') {
                graph.counterHorizontal = true;
                graph.height /= 2;
            }
        }
        if (graph.type == 'lines' || graph.type == 'areas') {
            graph.histoPeriod = 'now-10m';
            graph.histoStep = '30s';
        }
        if (graph.type == 'bubbles') {
            graph.bubbleXField = 'mem-usage';
            graph.bubbleYField = 'cpu-usage';
            graph.field = 'net-total-bytes';
            graph.bubbleScale = 'medium';
            graph.topNumber = 0;
        }
        if (graph.type == 'areas') {
            graph.stackedAreas = true;
        }
        this.graphs.push(graph);
        this.addRequest(graph);
        //this.onNewData.next()
        this.selected = graph;
    };
    DashboardService.prototype.copySelected = function () {
        //
    };
    DashboardService.prototype.addLegend = function (object, offTop, offLeft) {
        this.x0 += 2;
        this.y0 += 2;
        this.nbGraph++;
        var graph = new __WEBPACK_IMPORTED_MODULE_5__models_graph_model__["a" /* Graph */]('graph' + this.nbGraph, this.x0 - offLeft, this.y0 - offTop, this.w0 * 2 / 3, this.h0, "legend", "Legend " + object + "s");
        graph.object = object;
        this.graphs.push(graph);
        this.selected = graph;
    };
    DashboardService.prototype.addInnerStats = function () {
        this.x0 += 2;
        this.y0 += 2;
        this.nbGraph++;
        var graph = new __WEBPACK_IMPORTED_MODULE_5__models_graph_model__["a" /* Graph */]('graph' + this.nbGraph, this.x0, this.y0, this.w0 * 2 / 3, this.h0, "innerStats", "Inner stats");
        this.graphs.push(graph);
    };
    DashboardService.prototype.removeSelectedGraph = function () {
        var list = [];
        for (var _i = 0, _a = this.graphs; _i < _a.length; _i++) {
            var graph = _a[_i];
            if (graph.id != this.selected.id) {
                list.push(graph);
            }
        }
        this.graphs = list;
        delete this.requestMap[this.selected.requestId];
        this.selected = this.notSelected;
    };
    DashboardService.prototype.toggleEditor = function (offsetTop, offsetLeft) {
        if (this.showEditor) {
            this.showEditor = false;
            this.selected = this.notSelected;
        }
        else {
            this.showEditor = true;
            this.editorGraph.x = -offsetLeft;
            this.editorGraph.y = -offsetTop;
        }
    };
    DashboardService.prototype.getTopLabel = function () {
        if (this.selected.topNumber == 0) {
            return 'all';
        }
        return 'top' + this.selected.topNumber;
    };
    DashboardService.prototype.getObjectColor = function (graph, name) {
        return this.colorsService.getColor(graph.object, name, graph.id);
    };
    DashboardService.prototype.computeUnit = function (field, val, refUnit) {
        if (this.unit[field] == '%') {
            return { val: val, sval: val.toFixed(1) + ' %', unit: '%' };
        }
        if (this.unit[field] != 'bytes' && this.unit[field] != 'bytes/s') {
            return { val: val, sval: val.toFixed(0) + " " + this.unit[field], unit: this.unit[field] };
        }
        if (refUnit) {
            //force to compute in the refUnit unit
            return { val: val, sval: (val / this.unitdivider(refUnit)).toFixed(1) + " " + refUnit, unit: refUnit };
        }
        var past = '';
        if (this.unit[field] == 'bytes/s') {
            past = '/s';
        }
        if (val < 1024) {
            return { val: val, sval: val.toFixed(0) + ' Bytes' + past, unit: 'Bytes' + past };
        }
        else if (val < 1048576) {
            return { val: (val / 1024), sval: (val / 1024).toFixed(1) + ' KB' + past, unit: 'KB' + past };
        }
        else if (val < 1073741824) {
            return { val: (val / 1048576), sval: (val / 1048576).toFixed(1) + ' MB' + past, unit: 'MB' + past };
        }
        return { val: (val / 1073741824), sval: (val / 1073741824).toFixed(1) + ' GB' + past, unit: 'GB' + past };
    };
    DashboardService.prototype.adjustCurrentDataToUnit = function (unit, field, data) {
        var div = this.unitdivider(unit);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var gdata = data_1[_i];
            gdata.valueUnit = gdata.values[field] / div;
        }
        return data;
    };
    DashboardService.prototype.adjustCurrentXYDataToUnit = function (unitx, unity, fieldx, fieldy, data) {
        var divx = this.unitdivider(unitx);
        var divy = this.unitdivider(unity);
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var gdata = data_2[_i];
            gdata.valueUnitx = gdata.values[fieldx] / divx;
            gdata.valueUnity = gdata.values[fieldy] / divy;
        }
        return data;
    };
    DashboardService.prototype.adjustHistoricDataToUnit = function (unit, field, data) {
        var div = this.unitdivider(unit);
        for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
            var hdata = data_3[_i];
            for (var ii = 0; ii < hdata.graphValues.length; ii++) {
                hdata.graphValuesUnit[ii] = hdata.graphValues[ii] / div;
            }
        }
        return data;
    };
    DashboardService.prototype.unitdivider = function (unit) {
        if (unit == 'KB' || unit == 'KB/s') {
            return 1024;
        }
        else if (unit == 'MB' || unit == 'MB/s') {
            return 1048576;
        }
        else if (unit == 'GB' || unit == 'GB/s') {
            return 1073741824;
        }
        return 1;
    };
    DashboardService.prototype.computeUnitFormat = function (graph, val, unit) {
        if (this.unit[graph.field] != "bytes" && this.unit[graph.field] != "bytes/s") {
            return val + " " + unit;
        }
        var div = this.unitdivider(unit);
        return val / div + " " + unit;
    };
    DashboardService.prototype.setRefreshPeriod = function (refresh) {
        var _this = this;
        this.refresh = refresh;
        this.cancelRequests();
        this.menuService.setCurrentTimer(setInterval(function () {
            _this.redisplay();
        }, this.refresh * 1000));
    };
    DashboardService.prototype.redisplay = function () {
        this.colorsService.refresh();
        this.executeRequests();
    };
    DashboardService.prototype.setPeriod = function (period) {
        this.period = period;
        for (var id in this.requestMap) {
            var req = this.requestMap[id];
            if (req) {
                req.period = period;
            }
        }
        this.menuService.onRefreshClicked.next();
        for (var _i = 0, _a = this.graphs; _i < _a.length; _i++) {
            var graph = _a[_i];
            this.addRequest(graph);
        }
    };
    DashboardService.prototype.setObject = function (name) {
        this.selected.object = name;
        this.addRequest(this.selected);
        this.onNewData.next();
    };
    DashboardService.prototype.setField = function (name) {
        this.selected.field = name;
        this.addRequest(this.selected);
        this.onNewData.next();
    };
    DashboardService.prototype.setTop = function (top) {
        this.selected.topNumber = top;
        this.redisplay();
    };
    DashboardService.prototype.setTitle = function (title) {
        this.selected.title = title;
        this.onNewData.next();
    };
    DashboardService.prototype.setTitleCenter = function (val) {
        this.selected.centerTitle = val;
        this.onNewData.next();
    };
    DashboardService.prototype.setRoundedBox = function (val) {
        this.selected.roundedBox = val;
        this.onNewData.next();
    };
    DashboardService.prototype.setAlert = function (val) {
        this.selected.alert = val;
        this.onNewData.next();
    };
    DashboardService.prototype.setMinAlert = function (val) {
        this.selected.alertMin = val;
        this.onNewData.next();
    };
    DashboardService.prototype.setMaxAlert = function (val) {
        this.selected.alertMax = val;
        this.onNewData.next();
    };
    DashboardService.prototype.setBorder = function (border) {
        this.selected.border = border;
        this.onNewData.next();
    };
    DashboardService.prototype.setCriterion = function (name) {
        this.selected.criterion = name;
        this.addRequest(this.selected);
        this.onNewData.next();
    };
    DashboardService.prototype.setCriterionValue = function (val) {
        this.selected.criterionValue = val;
        this.addRequest(this.selected);
        this.onNewData.next();
    };
    DashboardService.prototype.setContainerAvg = function (val) {
        this.selected.containerAvg = val;
        this.addRequest(this.selected);
        this.onNewData.next();
    };
    DashboardService.prototype.setHistoPeriod = function (period, step) {
        this.selected.histoPeriod = period;
        this.selected.histoStep = step;
        this.addRequest(this.selected);
        this.onNewData.next();
    };
    DashboardService.prototype.setCounterHorizontal = function (val) {
        this.selected.counterHorizontal = val;
        this.onNewData.next();
    };
    DashboardService.prototype.setBubbleXField = function (name) {
        this.selected.bubbleXField = name;
        this.addRequest(this.selected);
        this.onNewData.next();
    };
    DashboardService.prototype.setBubbleYField = function (name) {
        this.selected.bubbleYField = name;
        this.addRequest(this.selected);
        this.onNewData.next();
    };
    DashboardService.prototype.setBubbleScale = function (name) {
        this.selected.bubbleScale = name;
        this.addRequest(this.selected);
        this.onNewData.next();
    };
    DashboardService.prototype.setStackedAreas = function (val) {
        this.selected.stackedAreas = val;
        if (val) {
            this.selected.percentAreas = false;
        }
        this.onNewData.next();
    };
    DashboardService.prototype.setPercentAreas = function (val) {
        this.selected.percentAreas = val;
        if (val) {
            this.selected.stackedAreas = false;
        }
        this.onNewData.next();
    };
    DashboardService.prototype.setTransparentLegend = function (val) {
        this.selected.transparentLegend = val;
        this.onNewData.next();
    };
    DashboardService.prototype.setRemoveLocalLegend = function (val) {
        this.selected.removeLocalLegend = val;
        this.onNewData.next();
    };
    DashboardService.prototype.linkLegendToGraph = function () {
        this.clickMode = this.ModeLinkLegendToGraph;
    };
    DashboardService.prototype.unlinkLegend = function () {
        this.selected.legendGraphId = undefined;
        this.clickMode = this.ModeSetting;
        this.onNewData.next();
    };
    DashboardService.prototype.getTextWidth = function (text, fontSize, fontFace) {
        var a = document.createElement('canvas');
        var b = a.getContext('2d');
        b.font = fontSize + 'px ' + fontFace;
        return b.measureText(text).width;
    };
    DashboardService.prototype.executeRequests = function () {
        console.log("nbRequest: " + Object.keys(this.requestMap).length);
        this.innerStats.initNewRefresh();
        for (var id in this.requestMap) {
            this.executeRequest(this.requestMap[id]);
        }
    };
    DashboardService.prototype.executeRequest = function (req) {
        var _this = this;
        if (!req) {
            return;
        }
        //console.log(req.id)
        //console.log(req.request)
        var t0 = new Date().getTime();
        if (!req.request.time_group) {
            this.httpService.statsCurrent(req.request).subscribe(function (data) {
                //console.log("data size: "+data.length)
                _this.innerStats.setRequestTime(t0, req.graphTitle);
                req.currentResult = data;
                req.historicResult = [];
                _this.onNewData.next(req.id);
            }, function (err) {
                _this.innerStats.setRequestError();
                console.log("request error");
                console.log(err);
            });
        }
        else {
            this.httpService.statsHistoric(req.request).subscribe(function (data) {
                _this.innerStats.setRequestTime(t0, req.graphTitle);
                req.historicResult = data;
                req.currentResult = [];
                _this.onNewData.next(req.id);
            }, function (err) {
                _this.innerStats.setRequestError();
                console.log("request error");
                console.log(err);
            });
        }
    };
    DashboardService.prototype.sumRequest = function (data) {
        //console.log(data)
        return data;
    };
    DashboardService.prototype.addRequest = function (graph) {
        if (graph.type == "legend" || graph.type == "innerStats") {
            return;
        }
        if (graph.title == '' || graph.title == 'stacks' || graph.title == 'services' || graph.title == 'containers' || graph.title == 'nodes') {
            graph.title = graph.object;
            if (graph.object != 'all') {
                graph.title += 's';
            }
            if (graph.type == 'counterSquare' && graph.counterHorizontal) {
                graph.title += ": ";
            }
        }
        var req = new __WEBPACK_IMPORTED_MODULE_7__models_stats_request_model__["a" /* StatsRequest */]();
        if (graph.object == "stack") {
            req.group = "stack_name";
        }
        else if (graph.object == "service") {
            req.group = "service_name";
        }
        else if (graph.object == "container") {
            req.group = "container_short_name";
        }
        else if (graph.object == "node") {
            req.group = "node_id";
        }
        else if (graph.object == 'all') {
            req.group = "";
        }
        else {
            return;
        }
        req.avg = graph.containerAvg;
        if (!req.avg) {
            req.avg = false;
        }
        //if (graph.type == "counter" && graph.field != "number") {
        //  req.group="container_short_name"
        //}
        req.period = this.period;
        if (graph.type == 'lines' || graph.type == 'areas') {
            req.period = graph.histoPeriod;
            req.time_group = graph.histoStep;
        }
        req.stats_cpu = true;
        req.stats_mem = true;
        req.stats_net = true;
        req.stats_io = true;
        req.allows_infra = this.usersService.currentUser.sp;
        if (graph.criterion == 'stack_name') {
            req.filter_stack_name = graph.criterionValue;
        }
        else if (graph.criterion == 'service_name') {
            req.filter_service_name = graph.criterionValue;
        }
        else if (graph.criterion == 'container_id') {
            req.filter_container_id = graph.criterionValue;
        }
        else if (graph.criterion == 'node_id') {
            req.filter_node_id = graph.criterionValue;
        }
        var id = graph.id;
        var newItem = new __WEBPACK_IMPORTED_MODULE_8__models_stats_request_item_model__["a" /* StatsRequestItem */](id, req, graph.title);
        newItem.subscriberNumber = 1;
        this.requestMap[id] = newItem;
        graph.requestId = id;
        this.executeRequest(newItem);
        return id;
    };
    DashboardService.prototype.getCurrentData = function (graph) {
        var item = this.requestMap[graph.id];
        if (!item) {
            return [];
        }
        if (!item.currentResult) {
            return [];
        }
        this.sortCurrentByField(graph, item.currentResult);
        if (graph.topNumber == 0 || graph.type == 'counterSquare' || graph.type == 'counterCircle') {
            return item.currentResult;
        }
        return item.currentResult.slice(0, graph.topNumber);
    };
    DashboardService.prototype.sortCurrentByField = function (graph, data) {
        data.sort(function (a, b) {
            if (graph.type == 'bubbles') {
                if (a.values[graph.bubbleXField] * a.values[graph.bubbleXField] + a.values[graph.bubbleYField] * a.values[graph.bubbleYField] <
                    b.values[graph.bubbleXField] * b.values[graph.bubbleXField] + b.values[graph.bubbleYField] * b.values[graph.bubbleYField]) {
                    return 1;
                }
                return -1;
            }
            else {
                if (a.values[graph.field] < b.values[graph.field]) {
                    return 1;
                }
                return -1;
            }
        });
    };
    DashboardService.prototype.getHistoricData = function (graph) {
        var item = this.requestMap[graph.id];
        if (!item) {
            return new __WEBPACK_IMPORTED_MODULE_10__models_graph_historic_answer_model__["a" /* GraphHistoricAnswer */]([''], this.nullPeriod);
        }
        if (!item.historicResult) {
            return new __WEBPACK_IMPORTED_MODULE_10__models_graph_historic_answer_model__["a" /* GraphHistoricAnswer */]([''], this.nullPeriod);
        }
        //let list = this.sortHistoricByField(item.historicResult, graph.field)
        var dateMap = {};
        var list = [];
        var names = [];
        var nameMap = {};
        for (var _i = 0, _a = item.historicResult; _i < _a.length; _i++) {
            var dat = _a[_i];
            var pdata = dateMap[dat.sdate];
            if (!pdata) {
                pdata = new __WEBPACK_IMPORTED_MODULE_9__models_graph_historic_data_model__["a" /* GraphHistoricData */](dat.date);
                dateMap[dat.sdate] = pdata;
                list.push(pdata);
            }
            var max = nameMap[dat.name];
            if (!max) {
                names.push(dat.name);
                nameMap[dat.name] = dat.values[graph.field];
            }
            else if (dat.values[graph.field] > max) {
                nameMap[dat.name] = dat.values[graph.field];
            }
            pdata.graphValues.push(dat.values[graph.field]);
            pdata.graphValuesUnit.push(0); //graphValues and valuesUnit should have the same size
        }
        if (graph.topNumber > 0) {
            this.sortHistoricResult(graph, list, names, graph.topNumber);
            names = names.slice(0, graph.topNumber);
        }
        return new __WEBPACK_IMPORTED_MODULE_10__models_graph_historic_answer_model__["a" /* GraphHistoricAnswer */](names, list);
    };
    DashboardService.prototype.sortHistoricResult = function (graph, list, names, topNumber) {
        var size = names.length;
        var sumCol = new Array(size);
        for (var i = 0; i < size; i++) {
            sumCol[i] = 0;
        }
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            var i = 0;
            for (var _a = 0, _b = item.graphValues; _a < _b.length; _a++) {
                var val = _b[_a];
                sumCol[i] = sumCol[i] + val;
                i++;
            }
        }
        var indexes = [];
        for (var i = 0; i < topNumber; i++) {
            var max = sumCol[0];
            var index = 0;
            for (var j = 1; j < size; j++) {
                if (sumCol[j] > max) {
                    max = sumCol[j];
                    index = j;
                }
            }
            sumCol[index] = 0;
            indexes.push(index);
        }
        for (var i = 0; i < size; i++) {
            names[i] = names[indexes[i]];
        }
        for (var _c = 0, list_2 = list; _c < list_2.length; _c++) {
            var item = list_2[_c];
            var data = [];
            for (var _d = 0, indexes_1 = indexes; _d < indexes_1.length; _d++) {
                var index = indexes_1[_d];
                data.push(item.graphValues[index]);
            }
            item.graphValues = data;
        }
    };
    DashboardService.prototype.clear = function () {
        this.requestMap = {};
        this.graphs = [];
        this.selected = this.notSelected;
        this.nbGraph = 1;
    };
    DashboardService.prototype.getData = function () {
        return JSON.stringify(this.graphs);
    };
    DashboardService.prototype.setData = function (data) {
        this.clear();
        var graphs = JSON.parse(data);
        this.nbGraph = 1;
        for (var _i = 0, graphs_1 = graphs; _i < graphs_1.length; _i++) {
            var graph = graphs_1[_i];
            this.ascendingCompatibilityAdjustment(graph);
            this.nbGraph++;
            graph.id = "graph" + this.nbGraph;
            this.graphs.push(graph);
            this.addRequest(graph);
        }
        this.menuService.onRefreshClicked.next();
    };
    DashboardService.prototype.ascendingCompatibilityAdjustment = function (graph) {
        //nothing to do for now
    };
    DashboardService.prototype.defaultDefaultDashboard = function () {
        return new __WEBPACK_IMPORTED_MODULE_12__models_dashboard_default_model__["a" /* DashboardDefault */]().graphs;
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__services_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_colors_service__["a" /* ColorsService */]) === "function" && _d || Object])
], DashboardService);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-areas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphAreas; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphAreas = (function () {
    function GraphAreas(httpService, menuService, dashboardService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.margin = { top: 40, bottom: 30, left: 60, right: 20 };
        this.created = false;
        this.data = [];
        this.names = [];
        this.valuelines = [];
    }
    GraphAreas.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphAreas.prototype.computeSize = function (graph) {
        this.margin.top = graph.height * 0.1;
        this.margin.bottom = graph.height * 0.2;
        this.margin.left = graph.width * 0.15;
        this.margin.right = 10;
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphAreas.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        this.created = true;
        this.updateGraph(graph);
    };
    GraphAreas.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphAreas.prototype.updateGraph = function (graph) {
        var _this = this;
        var ans = this.dashboardService.getHistoricData(graph);
        this.data = ans.data;
        this.names = ans.names;
        if (this.data.length == 0 || this.names.length == 0) {
            return;
        }
        //stack data
        if (graph.stackedAreas) {
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var dat = _a[_i];
                for (var x = dat.graphValues.length - 2; x >= 0; x--) {
                    dat.graphValues[x] = dat.graphValues[x] + dat.graphValues[x + 1];
                }
            }
        }
        else if (graph.percentAreas) {
            for (var _b = 0, _c = this.data; _b < _c.length; _b++) {
                var dat = _c[_b];
                var tot = 0;
                for (var _d = 0, _e = dat.graphValues; _d < _e.length; _d++) {
                    var val = _e[_d];
                    tot += val;
                }
                for (var x = 0; x < dat.graphValues.length; x++) {
                    dat.graphValues[x] = dat.graphValues[x] / tot;
                }
                for (var x = dat.graphValues.length - 2; x >= 0; x--) {
                    dat.graphValues[x] = dat.graphValues[x] + dat.graphValues[x + 1];
                }
            }
        }
        this.svg.selectAll("*").remove();
        this.xScale = __WEBPACK_IMPORTED_MODULE_5_d3__["scaleTime"]().range([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_5_d3__["scaleLinear"]().range([this.height, 0]);
        var fontSize = this.height / 10;
        var dx = this.margin.left;
        var dy = this.margin.top;
        // Scale the range of the data
        this.xScale.domain(__WEBPACK_IMPORTED_MODULE_5_d3__["extent"](this.data, function (d) { return d.date; }));
        var ymax = 0;
        for (var _f = 0, _g = this.data; _f < _g.length; _f++) {
            var tmp = _g[_f];
            for (var yy = 0; yy < tmp.graphValues.length; yy++) {
                if (tmp.graphValues[yy] > ymax) {
                    ymax = tmp.graphValues[yy];
                }
            }
        }
        var yunit = this.dashboardService.computeUnit(graph.field, ymax, "").unit;
        this.data = this.dashboardService.adjustHistoricDataToUnit(yunit, graph.field, this.data);
        ymax = ymax / this.dashboardService.unitdivider(yunit);
        var yDomain = [0, ymax];
        this.yScale.domain([0, ymax]);
        var _loop_1 = function (ll) {
            var area = __WEBPACK_IMPORTED_MODULE_5_d3__["area"]()
                .defined(function (d) { return d.graphValues[ll] !== undefined; })
                .x(function (d) { return _this.xScale(d.date); })
                .y0(this_1.height)
                .y1(function (d) { return _this.yScale(d.graphValuesUnit[ll]); });
            this_1.svg.append("path")
                .data([this_1.data])
                .style("fill", function (d) { return _this.dashboardService.getObjectColor(graph, _this.names[ll]); })
                .attr("transform", "translate(" + [dx, dy] + ")")
                .attr("d", area);
        };
        var this_1 = this;
        for (var ll = 0; ll < this.names.length; ll++) {
            _loop_1(ll);
        }
        // add the X Axis
        if (this.width > 80) {
            this.xAxis = this.svg.append("g")
                .attr("class", "axisx")
                .attr("transform", "translate(" + [dx, this.height + dy] + ")")
                .style("font-size", fontSize / 2 + 'px')
                .call(__WEBPACK_IMPORTED_MODULE_5_d3__["axisBottom"](this.xScale).ticks(5));
        }
        // add the Y Axis
        if (this.height > 50) {
            this.yAxis = this.svg.append("g")
                .attr("class", "axisy")
                .attr("transform", "translate(" + [dx, dy] + ")")
                .style("font-size", fontSize / 2 + 'px')
                .call(__WEBPACK_IMPORTED_MODULE_5_d3__["axisLeft"](this.yScale));
            if (graph.title) {
                var xt = -5;
                var anchor = 'left';
                if (graph.centerTitle) {
                    xt = (this.width) / 2;
                    anchor = 'middle';
                }
                this.svg.append("text")
                    .attr("class", "wtitle")
                    .attr("transform", "translate(" + [xt + dx, dy - this.margin.top] + ")")
                    .attr("dy", "1em")
                    .style("text-anchor", anchor)
                    .style("font-size", fontSize + 'px')
                    .text(graph.title);
            }
            graph.yTitle = this.dashboardService.yTitleMap[graph.field];
            if (graph.yTitle) {
                this.svg.append("text")
                    .attr("class", "y-title")
                    .attr("y", dx - this.margin.left)
                    .attr("x", dy - (this.height + this.margin.top + this.margin.bottom) / 2)
                    .attr("transform", "rotate(-90)")
                    .attr("dy", "1em")
                    .style("text-anchor", "middle")
                    .style("font-size", fontSize / 2 + 'px')
                    .text(graph.yTitle + " (" + yunit + ")");
            }
        }
        /*
        this.svg.append("rect")
          .attr('width', this.width)
          .attr('height', this.height)
          .attr("transform", "translate(" + [dx, dy] + ")")
          .attr('stroke', 'lightgrey')
          .style('fill', 'none')
        */
        /*
            this.focus = this.svg.append('g')
              .attr('class', 'focus')
              .style('display', 'none');
        
            this.focus.append('circle')
              .attr('class', 'select-circle')
              .attr('r', 5)
              .style('fill', 'none')
              .style("stroke", 'black')
        */
    };
    return GraphAreas;
}());
GraphAreas = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], GraphAreas);

var _a, _b, _c;
//# sourceMappingURL=graph-areas.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-bars.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphBars; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphBars = (function () {
    function GraphBars(httpService, menuService, dashboardService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.margin = { top: 40, bottom: 30, left: 60, right: 20 };
        this.created = false;
        this.data = [];
    }
    GraphBars.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphBars.prototype.computeSize = function (graph) {
        this.margin.top = graph.height * 0.1;
        this.margin.bottom = graph.height * 0.15;
        if (graph.topNumber > 3) {
            this.margin.bottom = graph.height * 0.2;
        }
        if (graph.removeLocalLegend) {
            this.margin.bottom = 10;
        }
        this.margin.left = graph.width * 0.15;
        this.margin.right = 10;
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphBars.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        this.created = true;
        this.updateGraph(graph);
    };
    GraphBars.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphBars.prototype.updateGraph = function (graph) {
        this.data = this.dashboardService.getCurrentData(graph);
        if (this.data.length == 0) {
            return;
        }
        var xDomain = this.data.map(function (d) { return d.group; });
        var ymax = __WEBPACK_IMPORTED_MODULE_5_d3__["max"](this.data, function (d) { return d.values[graph.field]; });
        var yunit = this.dashboardService.computeUnit(graph.field, ymax, "").unit;
        this.data = this.dashboardService.adjustCurrentDataToUnit(yunit, graph.field, this.data);
        ymax = ymax / this.dashboardService.unitdivider(yunit);
        var yDomain = [0, ymax];
        this.computeSize(graph);
        this.svg.selectAll("*").remove();
        this.xScale = __WEBPACK_IMPORTED_MODULE_5_d3__["scaleBand"]()
            .range([0, this.width])
            .padding(0.1);
        this.yScale = __WEBPACK_IMPORTED_MODULE_5_d3__["scaleLinear"]()
            .range([this.height, 0]);
        this.xScale.domain(this.data.map(function (d) { return d.group; }));
        this.yScale.domain([0, __WEBPACK_IMPORTED_MODULE_5_d3__["max"](this.data, function (d) { return d.valueUnit; })]);
        //let wwt = this.dashboardService.getTextWidth(graph.title, "10", "Arial")
        var fontSize = this.height / 10;
        var dx = this.margin.left;
        var dy = this.margin.top;
        var angle = 15;
        var anchor = "start";
        if (this.data.length <= 3) {
            angle = 0;
            anchor = "middle";
        }
        if (!graph.removeLocalLegend) {
            this.xAxis = this.svg.append('g')
                .attr('class', 'axis axis-x')
                .attr('transform', "translate(" + [dx, this.height + dy] + ")")
                .call(__WEBPACK_IMPORTED_MODULE_5_d3__["axisBottom"](this.xScale))
                .style("font-size", fontSize / 2 + 'px')
                .selectAll("text")
                .style("text-anchor", anchor)
                .attr("transform", "rotate(" + angle + ")");
        }
        this.yAxis = this.svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + [dx, dy] + ")")
            .call(__WEBPACK_IMPORTED_MODULE_5_d3__["axisLeft"](this.yScale))
            .style("font-size", fontSize / 2 + 'px');
        var ethis = this;
        this.svg.selectAll(".bar")
            .data(this.data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return ethis.xScale(d.group) + dx; })
            .attr("width", ethis.xScale.bandwidth())
            .attr("y", function (d) { return ethis.yScale(d.valueUnit) + dy; })
            .attr("height", function (d) { return ethis.height - ethis.yScale(d.valueUnit); })
            .attr("fill", function (d, i) { return ethis.dashboardService.getObjectColor(graph, d.group); });
        if (graph.title) {
            var xt = -5;
            var anchor_1 = 'left';
            if (graph.centerTitle) {
                xt = (this.width) / 2;
                anchor_1 = 'middle';
            }
            this.svg.append("text")
                .attr("class", "wtitle")
                .attr("transform", "translate(" + [xt + dx, dy - this.margin.top] + ")")
                .attr("dy", "1em")
                .style("text-anchor", anchor_1)
                .style("font-size", fontSize + 'px')
                .text(graph.title);
        }
        graph.yTitle = this.dashboardService.yTitleMap[graph.field];
        if (graph.yTitle) {
            this.svg.append("text")
                .attr("class", "y-title")
                .attr("transform", "rotate(-90)")
                .attr("y", dx - this.margin.left)
                .attr("x", dy - (this.height + this.margin.top + this.margin.bottom) / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .style("font-size", fontSize * 2 / 3 + 'px')
                .text(graph.yTitle + " (" + yunit + ")");
        }
        /*
      this.svg.append("rect")
        .attr('width', this.width)
        .attr('height', this.height)
        .attr('stroke', 'lightgrey')
        .style('fill', 'none')
        */
    };
    return GraphBars;
}());
GraphBars = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], GraphBars);

var _a, _b, _c;
//# sourceMappingURL=graph-bars.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-bubbles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphBubbles; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphBubbles = (function () {
    function GraphBubbles(httpService, menuService, dashboardService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.margin = { top: 40, bottom: 30, left: 60, right: 20 };
        this.created = false;
        this.data = [];
    }
    GraphBubbles.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphBubbles.prototype.computeSize = function (graph) {
        this.margin.top = graph.height * 0.10;
        this.margin.bottom = graph.height * 0.15;
        this.margin.left = graph.width * 0.15;
        this.margin.right = graph.width * 0.15;
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphBubbles.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        this.created = true;
        this.updateGraph(graph);
    };
    GraphBubbles.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphBubbles.prototype.updateGraph = function (graph) {
        this.data = this.dashboardService.getCurrentData(graph);
        if (this.data.length == 0) {
            return;
        }
        this.svg.selectAll("*").remove();
        this.xScale = __WEBPACK_IMPORTED_MODULE_5_d3__["scaleLinear"]()
            .range([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_5_d3__["scaleLinear"]()
            .range([this.height, 0]);
        var xmax = __WEBPACK_IMPORTED_MODULE_5_d3__["max"](this.data, function (d) { return d.values[graph.bubbleXField]; });
        var ymax = __WEBPACK_IMPORTED_MODULE_5_d3__["max"](this.data, function (d) { return d.values[graph.bubbleYField]; });
        var xunit = this.dashboardService.computeUnit(graph.bubbleXField, xmax, "").unit;
        var yunit = this.dashboardService.computeUnit(graph.bubbleYField, ymax, "").unit;
        this.data = this.dashboardService.adjustCurrentXYDataToUnit(xunit, yunit, graph.bubbleXField, graph.bubbleYField, this.data);
        xmax = xmax / this.dashboardService.unitdivider(xunit);
        ymax = ymax / this.dashboardService.unitdivider(yunit);
        this.xScale.domain([0, xmax]);
        this.yScale.domain([0, ymax]);
        //let wwt = this.dashboardService.getTextWidth(graph.title, "10", "Arial")
        var fontSize = this.height / 10;
        var dx = this.margin.left;
        var dy = this.margin.top;
        this.xAxis = this.svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + [dx, this.height + dy] + ")")
            .call(__WEBPACK_IMPORTED_MODULE_5_d3__["axisBottom"](this.xScale))
            .style("font-size", fontSize / 2 + 'px');
        this.yAxis = this.svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + [dx, dy] + ")")
            .call(__WEBPACK_IMPORTED_MODULE_5_d3__["axisLeft"](this.yScale))
            .style("font-size", fontSize / 2 + 'px');
        var ethis = this;
        var d = 0;
        var size = 400;
        if (graph.bubbleScale == 'large') {
            size = size * 2;
        }
        if (graph.bubbleScale == 'small') {
            size = size / 2;
        }
        if (graph.field != 'none') {
            this.sScale = __WEBPACK_IMPORTED_MODULE_5_d3__["scaleLinear"]().range([0, size]);
            this.sScale.domain([0, __WEBPACK_IMPORTED_MODULE_5_d3__["max"](this.data, function (d) { return d.values[graph.field]; })]);
        }
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var dat = _a[_i];
            d++;
            var x = this.xScale(dat.valueUnitx) + dx;
            var y = this.yScale(dat.valueUnity) + dy;
            var s = size;
            if (graph.field != 'none') {
                s = Math.sqrt(this.sScale(dat.values[graph.field]));
            }
            this.svg.append('circle')
                .attr('class', 'circle')
                .attr('r', s + 2)
                .attr("transform", "translate(" + [x, y] + ")")
                .style('fill', ethis.dashboardService.getObjectColor(graph, dat.group))
                .style("stroke", 'black');
        }
        if (graph.title) {
            var xt = -5;
            var anchor = 'left';
            if (graph.centerTitle) {
                xt = (this.width) / 2;
                anchor = 'middle';
            }
            this.svg.append("text")
                .attr("class", "wtitle")
                .attr("transform", "translate(" + [xt + dx, dy - this.margin.top] + ")")
                .attr("dy", "1em")
                .style("text-anchor", anchor)
                .style("font-size", fontSize + 'px')
                .text(graph.title);
        }
        var yTitle = this.dashboardService.yTitleMap[graph.bubbleYField];
        //if (graph.yTitle) {
        this.svg.append("text")
            .attr("class", "y-title")
            .attr("transform", "rotate(-90)")
            .attr("y", dx - this.margin.left)
            .attr("x", dy - (this.height + this.margin.top + this.margin.bottom) / 2)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("font-size", fontSize * 2 / 3 + 'px')
            .text(yTitle + " (" + yunit + ")");
        // }
        var xTitle = this.dashboardService.yTitleMap[graph.bubbleXField];
        //if (graph.yTitle) {
        this.svg.append("text")
            .attr("class", "y-title")
            .attr("y", this.height + this.margin.bottom + dy)
            .attr("x", dx + (this.width) / 2)
            .attr("dy", "-0.50em")
            .style("text-anchor", "middle")
            .style("font-size", fontSize * 2 / 3 + 'px')
            .text(xTitle + " (" + xunit + ")");
        //}
    };
    return GraphBubbles;
}());
GraphBubbles = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], GraphBubbles);

var _a, _b, _c;
//# sourceMappingURL=graph-bubbles.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-counter-circle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_graph_current_data_model__ = __webpack_require__("../../../../../src/app/models/graph-current-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphCounterCircle; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GraphCounterCircle = (function () {
    function GraphCounterCircle(httpService, menuService, dashboardService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.margin = { top: 0, bottom: 0, left: 0, right: 0 };
        this.created = false;
        this.data = [];
    }
    GraphCounterCircle.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphCounterCircle.prototype.computeSize = function (graph) {
        this.margin.top = Math.floor(graph.height * 0.1);
        this.margin.bottom = 10;
        this.margin.left = 10;
        this.margin.right = 10;
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphCounterCircle.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_6_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        this.created = true;
        this.updateGraph(graph);
    };
    GraphCounterCircle.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphCounterCircle.prototype.updateGraph = function (graph) {
        var _this = this;
        var tmpdata = this.dashboardService.getCurrentData(graph);
        if (tmpdata.length == 0) {
            return;
        }
        this.svg.selectAll("*").remove();
        var title = graph.title;
        var val = this.data.length;
        var sval = "";
        if (this.data.length > 0) {
            if (graph.field != 'number') {
                val = 0;
                for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                    var dat = _a[_i];
                    val += dat.values[graph.field];
                }
                var unit = this.dashboardService.computeUnit(graph.field, Math.floor(val), "");
                val = unit.val;
                sval = unit.sval;
            }
        }
        var values0 = {};
        values0[graph.field] = 0;
        var values = {};
        values[graph.field] = val;
        this.data = [
            new __WEBPACK_IMPORTED_MODULE_5__models_graph_current_data_model__["a" /* GraphCurrentData */](graph.object, values0),
            new __WEBPACK_IMPORTED_MODULE_5__models_graph_current_data_model__["a" /* GraphCurrentData */](graph.object, values)
        ];
        var xDomain = this.data.map(function (d) { return d.group; });
        var yDomain = [0, __WEBPACK_IMPORTED_MODULE_6_d3__["max"](this.data, function (d) { return d.values[graph.field]; })];
        var fontSize = this.height / 10;
        var dx = this.margin.left;
        var dy = this.margin.top;
        this.svg.selectAll("*").remove();
        var arcs = __WEBPACK_IMPORTED_MODULE_6_d3__["pie"]()
            .value(function (d) {
            var val = d.values[graph.field];
            var format = _this.dashboardService.computeUnit(graph.field, val, "");
            return format.val;
        })(this.data);
        var arc = __WEBPACK_IMPORTED_MODULE_6_d3__["arc"]()
            .outerRadius(Math.min(this.height, this.width) / 2)
            .innerRadius(Math.min(this.height, this.width) / 4)
            .padAngle(0.03)
            .cornerRadius(8);
        var pieG = this.svg.selectAll("g")
            .data([this.data])
            .enter()
            .append("g")
            .attr("transform", "translate(" + [this.width / 2 + dx, this.height / 2 + dy] + ")");
        var block = pieG.selectAll(".arc")
            .data(arcs);
        var newBlock = block.enter().append("g").classed("arc", true);
        var athis = this;
        newBlock.append("path")
            .attr("d", arc)
            .attr("id", function (d, i) { return "arc-" + i; })
            .attr("stroke", "gray")
            .attr("fill", function (d, i) { return athis.dashboardService.getObjectColor(graph, d.data.group); });
        this.svg.append("text")
            .attr("class", "wtitle")
            .attr("transform", "translate(" + [this.width / 2 + dx, this.height / 2 + dy] + ")")
            .style("text-anchor", "middle")
            .attr("dy", ".36em")
            .style("font-size", fontSize / 2 + 'px')
            .text(graph.field);
        /*
        this.svg.append("text")
         .attr("class", "wtitle")
         .attr("transform", "translate("+[this.width/2+dx,this.height/2+dy] +")")
         .style("text-anchor", "middle")
         .style("font-size", fontSize/2+'px')
         .attr("dy", ".95em")
         .text(this.dashboardService.unit[graph.field]);
       */
        /*
            newBlock.append("text")
              .attr("transform", function(d) {
                d.outerRadius = 100;
                return "translate(" + arc.centroid(d) + ")";
              })
              .style("text-anchor", "middle")
              .attr("dy", ".35em")
              .style("font-size", fontSize/2+'px')
              .text(function(d) {
                let val = d.data.values[graph.field]
                let format = athis.dashboardService.computeUnit(graph, val)
                return format.sval
              });
        */
        if (graph.title) {
            this.svg.append("text")
                .attr("class", "wtitle")
                .attr("transform", "translate(" + [this.width / 2 + dx, -this.margin.top * 0.5 + dy] + ")")
                .style("text-anchor", "middle")
                .attr("dy", ".36em")
                .style("font-size", fontSize + 'px')
                .text(graph.title);
        }
    };
    return GraphCounterCircle;
}());
GraphCounterCircle = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], GraphCounterCircle);

var _a, _b, _c;
//# sourceMappingURL=graph-counter-circle.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-counter-square.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphCounterSquare; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphCounterSquare = (function () {
    function GraphCounterSquare(httpService, menuService, dashboardService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.margin = { top: 0, bottom: 0, left: 0, right: 0 };
        this.created = false;
        this.data = [];
    }
    GraphCounterSquare.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphCounterSquare.prototype.computeSize = function (graph) {
        this.margin.top = 0;
        this.margin.bottom = 0;
        this.margin.left = 10;
        this.margin.right = 0;
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphCounterSquare.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        this.created = true;
        this.updateGraph(graph);
    };
    GraphCounterSquare.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphCounterSquare.prototype.updateGraph = function (graph) {
        this.data = this.dashboardService.getCurrentData(graph);
        this.svg.selectAll("*").remove();
        var dx = this.margin.left;
        var dy = this.margin.top;
        var val = this.data.length;
        var uval = val;
        var sval = "" + val;
        if (this.data.length > 0) {
            if (graph.field != 'number') {
                val = 0;
                for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                    var dat = _a[_i];
                    val += dat.values[graph.field];
                }
                var unit = this.dashboardService.computeUnit(graph.field, val, "");
                uval = unit.val;
                sval = unit.sval;
            }
        }
        var title = graph.title + " " + sval;
        if (title == " ") {
            return;
        }
        this.svg.append("text")
            .attr("id", "title")
            .attr("class", "wtitle")
            .style("text-anchor", "middle")
            .text(title);
        var padding = 10;
        var titleBox;
        this.svg.select("#title").each(function (d, i) {
            titleBox = this.getBBox();
        });
        if (titleBox.width == 0 || titleBox.height == 0) {
            return;
        }
        var fontSize = this.computeFontSize(titleBox, padding);
        var dty = this.computeDty(titleBox, fontSize);
        this.svg.select("#title")
            .attr("transform", "translate(" + [(this.width - padding) / 2 + dx, (this.height - padding) / 2 + dy + dty] + ")")
            .style("font-size", fontSize + 'px');
        var color = "green";
        var alertMin = this.getRealNumber(graph.alertMin);
        var alertMax = this.getRealNumber(graph.alertMax);
        if (graph.alert) {
            if (!graph.alertMax) {
                if (val < alertMin) {
                    color = "orange";
                }
                else if (val < alertMin / 2) {
                    color = "red";
                }
            }
            else if (!graph.alertMin) {
                if (val > alertMax) {
                    color = "orange";
                }
                else if (val > alertMax * 2) {
                    color = "red";
                }
            }
            else if (alertMin < alertMax) {
                if (val >= alertMin) {
                    color = "orange";
                    if (val >= alertMax) {
                        color = "red";
                    }
                }
            }
            else {
                if (val <= alertMin) {
                    color = "orange";
                    if (val <= alertMax) {
                        color = "red";
                    }
                }
            }
            this.svg.append("rect")
                .attr('width', this.width + this.margin.left + this.margin.right)
                .attr('height', this.height + this.margin.top + this.margin.bottom)
                .attr("transform", "translate(" + [0, 0] + ")")
                .attr('stroke', 'lightgrey')
                .style('fill', color)
                .attr('fill-opacity', 0.4)
                .attr("rx", 3)
                .attr("ry", 3);
        }
    };
    GraphCounterSquare.prototype.getRealNumber = function (val) {
        if (!val) {
            return 0;
        }
        var ret = parseInt(val);
        if (val.length <= 2) {
            return ret;
        }
        if (val.substring(val.length - 2) == 'KB')
            return ret * 1024;
        if (val.substring(val.length - 2) == 'MB')
            return ret * 1048576;
        if (val.substring(val.length - 2) == 'GB')
            return ret * 1073741824;
        return ret;
    };
    //box1 mandatory, box2 optionnal
    GraphCounterSquare.prototype.computeFontSize = function (box1, padding) {
        var nn;
        var dd;
        nn = Math.max(this.width - padding, this.height - padding);
        dd = Math.max(box1.width, box1.height);
        //console.log(nn+","+dd)
        return nn / dd * 12;
    };
    GraphCounterSquare.prototype.computeDty = function (box, fontSize) {
        return fontSize / 12 * box.height / 3;
    };
    return GraphCounterSquare;
}());
GraphCounterSquare = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], GraphCounterSquare);

var _a, _b, _c;
//# sourceMappingURL=graph-counter-square.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-inner-stats.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphInnerStats; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphInnerStats = (function () {
    function GraphInnerStats(httpService, menuService, dashboardService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.margin = { top: 0, bottom: 0, left: 30, right: 30 };
        this.created = false;
    }
    GraphInnerStats.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphInnerStats.prototype.computeSize = function (graph) {
        this.margin.top = graph.height * 0.15;
        this.margin.bottom = 10;
        this.margin.left = 10;
        this.margin.right = 10;
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphInnerStats.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        this.created = true;
        this.updateGraph(graph);
    };
    GraphInnerStats.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphInnerStats.prototype.updateGraph = function (graph) {
        var _this = this;
        this.svg.selectAll("*").remove();
        if (graph.transparentLegend) {
            this.addClass("graph-transparent");
        }
        else {
            this.removeClass("graph-transparent");
        }
        var fontSize = this.height / 6;
        var dx = this.margin.left;
        var dy = this.margin.top;
        this.svg.on('click', function () { return _this.titleClick(); });
        //this.svg.attr('fill-opacity', 0.4)
        if (graph.title) {
            var xt = -5;
            var anchor = 'left';
            if (graph.centerTitle) {
                xt = (this.width) / 2;
                anchor = 'middle';
            }
            this.svg.append("text")
                .attr("class", "wtitle")
                .attr("transform", "translate(" + [xt + dx, dy - this.margin.top] + ")")
                .attr("dy", "1em")
                .style("text-anchor", anchor)
                .style("font-size", fontSize + 'px')
                .text(graph.title);
        }
        //let colorObject = this.dashboardService.graphObjectColorMap[graph.object]
        var stats = this.dashboardService.innerStats;
        var lines = [
            { name: 'refresh number', value: stats.refreshNb.toFixed(0) },
            { name: 'refresh time', value: (stats.totalRequestTime / 1000).toFixed(3) + " s" },
            { name: 'avg refresh time', value: (stats.avgRefreshTime / 1000).toFixed(3) + " s" },
            { name: 'request number', value: stats.refreshRequestNb.toFixed(0) },
            { name: 'max request time', value: (stats.maxRequestTime / 1000).toFixed(3) + " s" },
            { name: 'max graph', value: stats.maxGraphTitle },
            { name: 'request error', value: stats.requestErrorNb.toFixed(0) }
        ];
        var yy = dy * 1.2;
        var dh = this.height / lines.length;
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            this.svg.append("text")
                .attr("class", "wsname")
                .attr("transform", "translate(" + [dx, yy + dh * .65] + ")")
                .style("text-anchor", "start")
                .style("font-size", fontSize * .75 + 'px')
                .text(line.name + ': ' + line.value);
            yy += dh;
        }
        /*
        let ww = 0
        this.svg.selectAll(".wsname").each(function(d, i) {
          let box = this.getBBox();
          if (box.width > ww) {
            ww=box.width
          }
        });
        console.log(ww)
        ww = ww *.1 * fontSize
        yy = dy*1.2
        for (let line of lines) {
          this.svg.append("text")
          .attr("class", "wvalue")
          .attr("transform", "translate(" + [dx+ww, yy+dh*.65] + ")")
          .style("text-anchor", "start")
          .style("font-size", fontSize*.75+'px')
          .text(line.value);
          yy+=dh
        }
        */
    };
    GraphInnerStats.prototype.titleClick = function () {
    };
    GraphInnerStats.prototype.addClass = function (name) {
        if (this.element.className.indexOf(name) >= 0) {
            return;
        }
        this.element.className += " " + name;
    };
    GraphInnerStats.prototype.removeClass = function (name) {
        if (this.element.className.indexOf(name) < 0) {
            return;
        }
        //warning: works only for this component
        this.element.className = this.element.className.replace(name, "");
    };
    return GraphInnerStats;
}());
GraphInnerStats = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], GraphInnerStats);

var _a, _b, _c;
//# sourceMappingURL=graph-inner-stats.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-legend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_colors_service__ = __webpack_require__("../../../../../src/app/services/colors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphLegend; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GraphLegend = (function () {
    function GraphLegend(httpService, menuService, dashboardService, colorsService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.colorsService = colorsService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.margin = { top: 0, bottom: 0, left: 30, right: 30 };
        this.created = false;
    }
    GraphLegend.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphLegend.prototype.computeSize = function (graph) {
        this.margin.top = 10;
        this.margin.bottom = 10;
        this.margin.left = 10;
        this.margin.right = 10;
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphLegend.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_6_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        this.created = true;
        this.updateGraph(graph);
    };
    GraphLegend.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphLegend.prototype.updateGraph = function (graph) {
        var _this = this;
        var colorList = this.colorsService.getColors(graph.object, graph.legendGraphId);
        if (colorList.length == 0) {
            return;
        }
        this.svg.selectAll("*").remove();
        if (graph.transparentLegend) {
            this.addClass("graph-transparent");
        }
        else {
            this.removeClass("graph-transparent");
        }
        var fontSize = this.height / 7;
        var dx = this.margin.left;
        var dy = this.margin.top;
        this.svg.on('click', function () { return _this.titleClick(); });
        //this.svg.attr('fill-opacity', 0.4)
        var yy = dy * 1.2;
        var ddy = this.height / colorList.length * 0.8;
        var dh = (this.height - this.height / colorList.length * .9) / colorList.length;
        var coef = colorList.length / 20;
        if (graph.title) {
            var xt = -5;
            var anchor = 'left';
            if (graph.centerTitle) {
                xt = (this.width) / 2;
                anchor = 'middle';
            }
            this.svg.append("text")
                .attr("class", "wtitle")
                .attr("transform", "translate(" + [xt + dx, dy - this.margin.top] + ")")
                .attr("dy", "1em")
                .style("text-anchor", anchor)
                .style("font-size", this.height / colorList.length / 3 * 2 + 'px')
                .text(graph.title);
        }
        for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
            var col = colorList_1[_i];
            this.svg.append("rect")
                .attr('width', dh * .90)
                .attr('height', dh * .90)
                .attr("transform", "translate(" + [dx, ddy + yy] + ")")
                .attr('stroke', 'lightgrey')
                .style('fill', col.color);
            this.svg.append("text")
                .attr("class", "wtitle")
                .attr("transform", "translate(" + [dx + dh, yy + ddy + dh / 2 + this.height / 200] + ")")
                .style("text-anchor", "start")
                .style("font-size", this.height / colorList.length / 2 + 'px')
                .text(col.name);
            yy += dh;
        }
    };
    GraphLegend.prototype.titleClick = function () {
    };
    GraphLegend.prototype.addClass = function (name) {
        if (this.element.className.indexOf(name) >= 0) {
            return;
        }
        this.element.className += " " + name;
    };
    GraphLegend.prototype.removeClass = function (name) {
        if (this.element.className.indexOf(name) < 0) {
            return;
        }
        //warning: works only for this component
        this.element.className = this.element.className.replace(name, "");
    };
    return GraphLegend;
}());
GraphLegend = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_colors_service__["a" /* ColorsService */]) === "function" && _d || Object])
], GraphLegend);

var _a, _b, _c, _d;
//# sourceMappingURL=graph-legend.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-lines.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphLines; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphLines = (function () {
    function GraphLines(httpService, menuService, dashboardService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.margin = { top: 40, bottom: 30, left: 60, right: 20 };
        this.created = false;
        this.data = [];
        this.names = [];
    }
    GraphLines.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphLines.prototype.computeSize = function (graph) {
        this.margin.top = graph.height * 0.1;
        this.margin.bottom = graph.height * 0.2;
        this.margin.left = graph.width * 0.15;
        this.margin.right = 10;
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphLines.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        this.created = true;
        this.updateGraph(graph);
    };
    GraphLines.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphLines.prototype.updateGraph = function (graph) {
        var _this = this;
        var ans = this.dashboardService.getHistoricData(graph);
        this.data = ans.data;
        this.names = ans.names;
        if (this.data.length == 0 || this.names.length == 0) {
            return;
        }
        this.svg.selectAll("*").remove();
        this.xScale = __WEBPACK_IMPORTED_MODULE_5_d3__["scaleTime"]().range([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_5_d3__["scaleLinear"]().range([this.height, 0]);
        var fontSize = this.height / 10;
        var dx = this.margin.left;
        var dy = this.margin.top;
        // Scale the range of the data
        this.xScale.domain(__WEBPACK_IMPORTED_MODULE_5_d3__["extent"](this.data, function (d) { return d.date; }));
        var ymax = 0;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var tmp = _a[_i];
            for (var yy = 0; yy < tmp.graphValues.length; yy++) {
                if (tmp.graphValues[yy] > ymax) {
                    ymax = tmp.graphValues[yy];
                }
            }
        }
        var yunit = this.dashboardService.computeUnit(graph.field, ymax, "").unit;
        this.data = this.dashboardService.adjustHistoricDataToUnit(yunit, graph.field, this.data);
        ymax = ymax / this.dashboardService.unitdivider(yunit);
        var yDomain = [0, ymax];
        this.yScale.domain([0, ymax]);
        var _loop_1 = function (ll) {
            var valueline = __WEBPACK_IMPORTED_MODULE_5_d3__["line"]()
                .defined(function (d) { return d.graphValuesUnit[ll] !== undefined; })
                .x(function (d) { return _this.xScale(d.date); })
                .y(function (d) { return _this.yScale(d.graphValuesUnit[ll]); });
            this_1.svg.append("path")
                .data([this_1.data])
                .style("stroke", function (d) { return _this.dashboardService.getObjectColor(graph, _this.names[ll]); })
                .attr("transform", "translate(" + [dx, dy] + ")")
                .style("fill", 'none')
                .style("stroke-width", 2)
                .attr("d", valueline);
        };
        var this_1 = this;
        for (var ll = 0; ll < this.names.length; ll++) {
            _loop_1(ll);
        }
        // add the X Axis
        if (this.width > 80) {
            this.xAxis = this.svg.append("g")
                .attr("class", "axisx")
                .attr("transform", "translate(" + [dx, this.height + dy] + ")")
                .style("font-size", fontSize / 2 + 'px')
                .call(__WEBPACK_IMPORTED_MODULE_5_d3__["axisBottom"](this.xScale).ticks(5));
        }
        // add the Y Axis
        if (this.height > 80) {
            this.yAxis = this.svg.append("g")
                .attr("class", "axisy")
                .attr("transform", "translate(" + [dx, dy] + ")")
                .style("font-size", fontSize / 2 + 'px')
                .call(__WEBPACK_IMPORTED_MODULE_5_d3__["axisLeft"](this.yScale));
            if (graph.title) {
                var xt = -5;
                var anchor = 'left';
                if (graph.centerTitle) {
                    xt = (this.width) / 2;
                    anchor = 'middle';
                }
                this.svg.append("text")
                    .attr("class", "wtitle")
                    .attr("transform", "translate(" + [xt + dx, dy - this.margin.top] + ")")
                    .attr("dy", "1em")
                    .style("text-anchor", anchor)
                    .style("font-size", fontSize + 'px')
                    .text(graph.title);
            }
            graph.yTitle = this.dashboardService.yTitleMap[graph.field];
            if (graph.yTitle) {
                this.svg.append("text")
                    .attr("class", "y-title")
                    .attr("y", dx - this.margin.left)
                    .attr("x", dy - (this.height + this.margin.top + this.margin.bottom) / 2)
                    .attr("transform", "rotate(-90)")
                    .attr("dy", "1em")
                    .style("text-anchor", "middle")
                    .style("font-size", fontSize / 2 + 'px')
                    .text(graph.yTitle + " (" + yunit + ")");
            }
        }
        /*
        this.svg.append("rect")
          .attr('width', this.width)
          .attr('height', this.height)
          .attr("transform", "translate(" + [dx, dy] + ")")
          .attr('stroke', 'lightgrey')
          .style('fill', 'none')
        */
    };
    return GraphLines;
}());
GraphLines = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], GraphLines);

var _a, _b, _c;
//# sourceMappingURL=graph-lines.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-pie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphPie; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphPie = (function () {
    function GraphPie(httpService, menuService, dashboardService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.margin = { top: 40, bottom: 30, left: 60, right: 20 };
        this.created = false;
        this.data = [];
    }
    GraphPie.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphPie.prototype.computeSize = function (graph) {
        this.margin.top = Math.floor(graph.height * 0.1);
        this.margin.bottom = 10;
        this.margin.left = 10;
        this.margin.right = 10;
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphPie.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        //.append("g")
        this.created = true;
        this.updateGraph(graph);
    };
    GraphPie.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphPie.prototype.updateGraph = function (graph) {
        var _this = this;
        this.data = this.dashboardService.getCurrentData(graph);
        if (this.data.length == 0) {
            return;
        }
        var xDomain = this.data.map(function (d) { return d.group; });
        var ymax = __WEBPACK_IMPORTED_MODULE_5_d3__["max"](this.data, function (d) { return d.values[graph.field]; });
        var yunit = this.dashboardService.computeUnit(graph.field, __WEBPACK_IMPORTED_MODULE_5_d3__["min"](this.data, function (d) { return d.values[graph.field]; }), "").unit;
        this.data = this.dashboardService.adjustCurrentDataToUnit(yunit, graph.field, this.data);
        ymax = ymax / this.dashboardService.unitdivider(yunit);
        var yDomain = [0, ymax];
        var fontSize = this.height / 10;
        var dx = this.margin.left;
        var dy = this.margin.top;
        this.svg.selectAll("*").remove();
        var arcs = __WEBPACK_IMPORTED_MODULE_5_d3__["pie"]()
            .value(function (d) {
            var val = d.values[graph.field];
            var format = _this.dashboardService.computeUnit(graph.field, val, yunit);
            return format.val;
        })(this.data);
        var arc = __WEBPACK_IMPORTED_MODULE_5_d3__["arc"]()
            .outerRadius(Math.min(this.height, this.width) / 2)
            .innerRadius(Math.min(this.height, this.width) / 4)
            .padAngle(0.03)
            .cornerRadius(8);
        var pieG = this.svg.selectAll("g")
            .data([this.data])
            .enter()
            .append("g")
            .attr("transform", "translate(" + [this.width / 2 + dx, this.height / 2 + dy] + ")");
        var block = pieG.selectAll(".arc")
            .data(arcs);
        var newBlock = block.enter().append("g").classed("arc", true);
        var athis = this;
        newBlock.append("path")
            .attr("d", arc)
            .attr("id", function (d, i) { return "arc-" + i; })
            .attr("stroke", "gray")
            .attr("fill", function (d, i) { return athis.dashboardService.getObjectColor(graph, d.data.group); });
        this.svg.append("text")
            .attr("class", "wtitle")
            .attr("transform", "translate(" + [this.width / 2 + dx, this.height / 2 + dy] + ")")
            .style("text-anchor", "middle")
            .attr("dy", ".36em")
            .style("font-size", fontSize / 2 + 'px')
            .text(graph.field);
        newBlock.append("text")
            .attr("transform", function (d) {
            d.outerRadius = 100;
            return "translate(" + arc.centroid(d) + ")";
        })
            .style("text-anchor", "middle")
            .attr("dy", ".35em")
            .style("font-size", fontSize / 2 + 'px')
            .text(function (d) {
            var val = d.data.values[graph.field];
            var format = athis.dashboardService.computeUnit(graph.field, val, yunit);
            return format.sval;
        });
        if (graph.title) {
            this.svg.append("text")
                .attr("class", "wtitle")
                .attr("transform", "translate(" + [this.width / 2 + dx, -this.margin.top * 0.5 + dy] + ")")
                .style("text-anchor", "middle")
                .attr("dy", ".36em")
                .style("font-size", fontSize + 'px')
                .text(graph.title);
        }
        /*
        this.svg.append("rect")
          .attr('width', this.width)
          .attr('height', this.height)
          .attr("transform", "translate("+[dx,dy]+")")
          .attr('stroke', 'lightgrey')
          .style('fill', 'none')
       */
    };
    return GraphPie;
}());
GraphPie = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], GraphPie);

var _a, _b, _c;
//# sourceMappingURL=graph-pie.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/services/graph-text.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphText; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphText = (function () {
    function GraphText(httpService, menuService, dashboardService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.dashboardService = dashboardService;
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.margin = { top: 0, bottom: 0, left: 30, right: 30 };
        this.created = false;
    }
    GraphText.prototype.destroy = function () {
        this.svg.selectAll("*").remove();
    };
    GraphText.prototype.computeSize = function (graph) {
        this.width = graph.width - this.margin.left - this.margin.right;
        this.height = graph.height - this.margin.top - this.margin.bottom;
    };
    GraphText.prototype.createGraph = function (graph, chartContainer) {
        this.element = chartContainer.nativeElement;
        this.computeSize(graph);
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) //graph.width)
            .attr('height', 2000); //graph.height)
        this.created = true;
        this.updateGraph(graph);
    };
    GraphText.prototype.resizeGraph = function (graph) {
        if (!this.created) {
            return;
        }
        this.computeSize(graph);
        this.updateGraph(graph);
    };
    GraphText.prototype.updateGraph = function (graph) {
        this.svg.selectAll("*").remove();
        if (graph.title) {
            var wwt = this.dashboardService.getTextWidth(graph.title, "10", "Arial");
            this.svg.append("text")
                .text(graph.title)
                .style("text-anchor", "middle")
                .attr("transform", "translate(" + [this.width / 2 + this.margin.left, this.height / 2 + this.margin.top] + ")")
                .style("font-size", this.width / wwt * 10 * 0.90 + "px")
                .attr("dy", ".35em");
        }
    };
    return GraphText;
}());
GraphText = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], GraphText);

var _a, _b, _c;
//# sourceMappingURL=graph-text.service.js.map

/***/ }),

/***/ "../../../../../src/app/directives/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drag_service__ = __webpack_require__("../../../../../src/app/services/drag.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraggableDirective = (function () {
    function DraggableDirective(dragService) {
        this.dragService = dragService;
        this.options = {};
    }
    Object.defineProperty(DraggableDirective.prototype, "draggable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "appDraggable", {
        set: function (options) {
            if (options) {
                this.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.onDragStart = function (event) {
        var _a = this.options, _b = _a.zone, zone = _b === void 0 ? 'zone' : _b, _c = _a.data, data = _c === void 0 ? {} : _c;
        this.dragService.startDrag(zone);
        event.dataTransfer.setData('Text', JSON.stringify(data));
    };
    return DraggableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('draggable'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], DraggableDirective.prototype, "draggable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DraggableDirective.prototype, "appDraggable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('dragstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DraggableDirective.prototype, "onDragStart", null);
DraggableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[appDraggable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_drag_service__["a" /* DragService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_drag_service__["a" /* DragService */]) === "function" && _a || Object])
], DraggableDirective);

var _a;
//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/drop-target.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drag_service__ = __webpack_require__("../../../../../src/app/services/drag.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropTargetDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropTargetDirective = (function () {
    function DropTargetDirective(dragService) {
        this.dragService = dragService;
        this.drop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.options = {};
    }
    Object.defineProperty(DropTargetDirective.prototype, "appDropTarget", {
        set: function (options) {
            if (options) {
                this.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    DropTargetDirective.prototype.onDragOver = function (event) {
        var _a = this.options.zone, zone = _a === void 0 ? 'zone' : _a;
        if (this.dragService.accepts(zone)) {
            event.preventDefault();
        }
    };
    DropTargetDirective.prototype.onDrop = function (event) {
        var data = JSON.parse(event.dataTransfer.getData('Text'));
        this.drop.next(data);
    };
    return DropTargetDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DropTargetDirective.prototype, "appDropTarget", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])('appDrop'),
    __metadata("design:type", Object)
], DropTargetDirective.prototype, "drop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('dragenter', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropTargetDirective.prototype, "onDragOver", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropTargetDirective.prototype, "onDrop", null);
DropTargetDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[appDropTarget]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_drag_service__["a" /* DragService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_drag_service__["a" /* DragService */]) === "function" && _a || Object])
], DropTargetDirective);

var _a;
//# sourceMappingURL=drop-target.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    DropdownDirective.prototype.close = function () {
        this.isOpen = false;
    };
    DropdownDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('document.click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "close", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('document:click', ['$event', '$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "onClick", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[appDropdown]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
], DropdownDirective);

var _a;
//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/tooltip.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipDirective = (function () {
    function TooltipDirective(menuService, eRef, renderer) {
        this.menuService = menuService;
        this.eRef = eRef;
        this.renderer = renderer;
    }
    TooltipDirective.prototype.ngOnInit = function () {
    };
    TooltipDirective.prototype.onMouseEnter = function ($event) {
        this.menuService.tooltipLabel = this.tooltipLabel;
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        this.menuService.tooltipLabel = "";
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this.menuService.tooltipLabel = "";
    };
    return TooltipDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], TooltipDirective.prototype, "tooltipLabel", void 0);
TooltipDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[tooltip]',
        host: {
            '(mouseenter)': 'onMouseEnter($event)',
            '(mouseleave)': 'onMouseLeave()'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */]) === "function" && _c || Object])
], TooltipDirective);

var _a, _b, _c;
//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-containers/docker-containers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-containers/docker-containers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div>\n          <div class=\"pull-left\">\n            <span class=\"fa fa-server\" aria-hidden=\"true\"></span>\n            Service: {{ dockerServicesService.currentService.name }}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"panel-body\">\n        <div classes=\"col-lg-12\">\n          <div class=\"pull-left\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"returnBack()\">\n                <i class=\"glyphicon glyphicon-backward\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-primary\"\n                (click)=\"logs(dockerContainersService.currentContainer.id)\">\n                <i class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></i>\n                Logs\n              </button>\n              <button type=\"button\"\n                class=\"btn btn-primary\"\n                (click)=\"metrics(dockerContainersService.currentContainer.id)\">\n                <i class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></i>\n                Metrics\n              </button>\n            </div>\n          </div>\n          <div class=\"pull-right\">\n            <input type=\"text\"\n              #filter\n              id=\"filter\"\n              placeholder=\"Filter...\"\n              class=\"form-control\"\n              (keyup)=\"listService.filter(filter.value)\"/>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div classes=\"no-padding\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>\n                    <a>\n                      Id\n                      <span (click)=\"listService.order('id', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('id', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Image\n                      <span (click)=\"listService.order('image', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('image', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      State\n                      <span (click)=\"listService.order('state', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('state', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Desired state\n                      <span (click)=\"listService.order('desiredState', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('desiredState', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Node Id\n                      <span (click)=\"listService.order('nodeId', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('nodeId', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <<th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr (click)=\"selectContainer(cont.id)\" [style.color]=getColor(cont) *ngFor=\"let cont of listService.getData()\">\n                  <td><input type=\"checkbox\" [checked]=\"dockerContainersService.currentContainer.id===cont.id\"></td>\n                  <td class=\"{{select_class}}\">{{ cont.shortId }}</td>\n                  <td class=\"{{select_class}}\">{{ cont.image }}</td>\n                  <td class=\"{{select_class}}\">{{ cont.state }}</td>\n                  <td class=\"{{select_class}}\">{{ cont.desiredState }}</td>\n                  <td class=\"{{select_class}}\">{{ cont.nodeId }}</td>\n                  <td>\n                    <a>details</a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-containers/docker-containers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_docker_stacks_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-stacks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_docker_containers_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-containers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_docker_services_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_docker_container_model__ = __webpack_require__("../../../../../src/app/docker-stacks/models/docker-container.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__metrics_services_metrics_service__ = __webpack_require__("../../../../../src/app/metrics/services/metrics.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerContainersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DockerContainersComponent = (function () {
    function DockerContainersComponent(listService, dockerContainersService, dockerServicesService, dockerStacksService, menuService, route, metricsService) {
        this.listService = listService;
        this.dockerContainersService = dockerContainersService;
        this.dockerServicesService = dockerServicesService;
        this.dockerStacksService = dockerStacksService;
        this.menuService = menuService;
        this.route = route;
        this.metricsService = metricsService;
        this.currentContainer = new __WEBPACK_IMPORTED_MODULE_5__models_docker_container_model__["a" /* DockerContainer */]("", "", "", "", "");
        listService.setFilterFunction(dockerContainersService.match);
    }
    DockerContainersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.setItemMenu('containers', 'List');
        this.routeSub = this.route.params.subscribe(function (params) {
            var stackName = params['stackName'];
            _this.dockerStacksService.setCurrentStack(stackName);
            var serviceId = params['serviceId'];
            _this.dockerServicesService.setCurrentServiceById(serviceId);
            _this.dockerContainersService.onContainersLoaded.subscribe(function () {
                _this.listService.setData(_this.dockerContainersService.containers);
            });
            _this.menuService.onRefreshClicked.subscribe(function () {
                _this.dockerContainersService.loadContainers(true);
            });
            _this.dockerContainersService.loadContainers(false);
        });
        this.menuService.setCurrentTimer(setInterval(function () {
            _this.dockerContainersService.loadContainers(true);
        }, 3000));
    };
    DockerContainersComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.menuService.clearCurrentTimer();
    };
    DockerContainersComponent.prototype.getColor = function (cont) {
        if (cont.state == 'running') {
            return 'limegreen';
        }
        if (cont.state == 'failed') {
            return 'red';
        }
        if (cont.state == 'shutdown') {
            return 'lightgrey';
        }
        return 'black';
    };
    DockerContainersComponent.prototype.selectContainer = function (id) {
        this.dockerContainersService.setCurrentContainer(id);
    };
    DockerContainersComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    DockerContainersComponent.prototype.metrics = function (taskId) {
        this.menuService.navigate(['/amp', 'metrics', 'task', 'single', taskId]);
    };
    DockerContainersComponent.prototype.logs = function (taskId) {
        console.log(taskId);
        this.menuService.navigate(['/amp', 'logs', 'task', taskId]);
    };
    return DockerContainersComponent;
}());
DockerContainersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-containers',
        template: __webpack_require__("../../../../../src/app/docker-stacks/docker-containers/docker-containers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docker-stacks/docker-containers/docker-containers.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_docker_containers_service__["a" /* DockerContainersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_docker_containers_service__["a" /* DockerContainersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_docker_services_service__["a" /* DockerServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_docker_services_service__["a" /* DockerServicesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_docker_stacks_service__["a" /* DockerStacksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_docker_stacks_service__["a" /* DockerStacksService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_menu_service__["a" /* MenuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__metrics_services_metrics_service__["a" /* MetricsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__metrics_services_metrics_service__["a" /* MetricsService */]) === "function" && _g || Object])
], DockerContainersComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=docker-containers.component.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-services/docker-services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-services/docker-services.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div>\n          <div class=\"pull-left\">\n            <span class=\"fa fa-server\" aria-hidden=\"true\"></span>\n            Stack: {{ dockerStacksService.currentStack.name }}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"panel-body\">\n        <div classes=\"col-lg-12\">\n          <div class=\"pull-left\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n              <button type=\"button\"\n                class=\"btn btn-primary\"\n                (click)=\"returnBack()\">\n                <i class=\"glyphicon glyphicon-backward\"></i>\n              </button>\n              <button type=\"button\"\n                class=\"btn btn-primary\"\n                [disabled]=\"dockerServicesService.currentService.id==''\"\n                (click)=\"logs(dockerServicesService.currentService.name)\">\n                <i class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></i>\n                Logs\n              </button>\n              <button type=\"button\"\n                class=\"btn btn-primary\"\n                [disabled]=\"dockerServicesService.currentService.id==''\"\n                (click)=\"metrics(dockerServicesService.currentService.name)\">\n                <i class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></i>\n                Metrics\n              </button>\n              <button type=\"button\"\n                class=\"btn btn-primary\"\n                [disabled]=\"dockerServicesService.currentService.id==''\"\n                (click)=\"scaleModeToggle()\">\n                <i class=\"glyphicon glyphicon-resize-vertical\" aria-hidden=\"true\"></i>\n                Scale\n              </button>\n              <div *ngIf=\"scaleMode\" class=\"pull-left\" style=\"margin-top:2px;padding:1px;width:100px\">\n                <input\n                  type=\"text\"\n                  class=\"form-control text\"\n                  [placeholder]=\"dockerServicesService.currentService.totalTasks\"\n                  #scaleNumber\n                  (keyup.enter)=\"scale(scaleNumber.value)\">\n              </div>\n            </div>\n          </div>\n          <div class=\"pull-right\">\n            <input type=\"text\"\n              #filter\n              id=\"filter\"\n              placeholder=\"Filter...\"\n              class=\"form-control\"\n              (keyup)=\"listService.filter(filter.value)\"/>\n          </div>\n        </div>\n      </div>\n\n      <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ message }}</span>\n\n      <div class=\"row\">\n        <div classes=\"no-padding\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>\n                    <a>\n                      Id\n                      <span (click)=\"listService.order('id', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('id', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Name\n                      <span (click)=\"listService.order('name', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('name', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Mode\n                      <span (click)=\"listService.order('mode', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('mode', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Status\n                      <span (click)=\"listService.order('status', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('status', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Image\n                      <span (click)=\"listService.order('image', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('image', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Tag\n                      <span (click)=\"listService.order('tag', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('tag', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Containers\n                      <span (click)=\"listService.orderNum('readyTasks', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.orderNum('readyTasks', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr (click)=\"selectService(service.name)\" [style.color]=getColor(service) *ngFor=\"let service of listService.getData()\">\n                  <td><input type=\"checkbox\" [checked]=\"dockerServicesService.currentService.name===service.name\"></td>\n                  <td>{{ service.id }}</td>\n                  <td>{{ service.shortName }}</td>\n                  <td>{{ service.mode }}</td>\n                  <td>{{ service.status }}</td>\n                  <td>{{ service.image }}</td>\n                  <td>{{ service.tag }}</td>\n                  <td>\n                    <a (click)=\"containerList(service.id)\">{{service.replicas}}</a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-services/docker-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_docker_services_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_docker_stacks_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-stacks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metrics_services_metrics_service__ = __webpack_require__("../../../../../src/app/metrics/services/metrics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DockerServicesComponent = (function () {
    function DockerServicesComponent(listService, dockerServicesService, dockerStacksService, menuService, route, metricsService, httpService) {
        this.listService = listService;
        this.dockerServicesService = dockerServicesService;
        this.dockerStacksService = dockerStacksService;
        this.menuService = menuService;
        this.route = route;
        this.metricsService = metricsService;
        this.httpService = httpService;
        this.scaleMode = false;
        this.message = "";
        listService.setFilterFunction(dockerServicesService.match);
    }
    DockerServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scaleMode = false;
        this.message = "";
        this.menuService.setItemMenu('services', 'List');
        this.routeSub = this.route.params.subscribe(function (params) {
            var stackName = params['stackName'];
            for (var _i = 0, _a = _this.dockerStacksService.stacks; _i < _a.length; _i++) {
                var stack = _a[_i];
                if (stack.name == stackName) {
                    _this.dockerStacksService.currentStack = stack;
                }
            }
            _this.dockerServicesService.onServicesLoaded.subscribe(function () {
                _this.listService.setData(_this.dockerServicesService.services);
            });
            _this.menuService.onRefreshClicked.subscribe(function () {
                _this.dockerServicesService.loadServices(true);
            });
            _this.dockerServicesService.loadServices(false);
        });
        this.menuService.setCurrentTimer(setInterval(function () {
            _this.dockerServicesService.loadServices(true);
        }, 3000));
    };
    DockerServicesComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.menuService.clearCurrentTimer();
    };
    DockerServicesComponent.prototype.getColor = function (stack) {
        if (stack.status == 'running') {
            return 'limegreen';
        }
        if (stack.status == 'starting') {
            return 'orange';
        }
        return 'red';
    };
    DockerServicesComponent.prototype.containerList = function (serviceId) {
        this.dockerServicesService.setCurrentService(serviceId);
        this.menuService.navigate(["/amp", "stacks", this.dockerStacksService.currentStack.name, "services", serviceId, "containers"]);
    };
    DockerServicesComponent.prototype.selectService = function (name) {
        this.scaleMode = false;
        if (this.dockerServicesService.currentService.name == name) {
            this.dockerServicesService.setCurrentService("");
            return;
        }
        this.dockerServicesService.setCurrentService(name);
    };
    DockerServicesComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    DockerServicesComponent.prototype.metrics = function (serviceName) {
        this.menuService.navigate(['/amp', 'metrics', 'service', 'single', serviceName]);
    };
    DockerServicesComponent.prototype.logs = function (serviceName) {
        this.menuService.navigate(['/amp', 'logs', 'service', serviceName]);
    };
    DockerServicesComponent.prototype.scaleModeToggle = function () {
        this.scaleMode = !this.scaleMode;
        if (this.dockerServicesService.currentService.name == '') {
            this.scaleMode = false;
        }
    };
    DockerServicesComponent.prototype.scale = function (number) {
        var _this = this;
        var num = +number;
        this.httpService.serviceScale(this.dockerServicesService.currentService.id, num).subscribe(function () {
            _this.scaleMode = false;
            _this.dockerServicesService.loadServices(true);
        }, function (err) {
            _this.scaleMode = false;
            var error = err.json();
            _this.message = error.errror;
        });
    };
    return DockerServicesComponent;
}());
DockerServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/docker-stacks/docker-services/docker-services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docker-stacks/docker-services/docker-services.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_docker_services_service__["a" /* DockerServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_docker_services_service__["a" /* DockerServicesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_docker_stacks_service__["a" /* DockerStacksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_docker_stacks_service__["a" /* DockerStacksService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__metrics_services_metrics_service__["a" /* MetricsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__metrics_services_metrics_service__["a" /* MetricsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_http_service__["a" /* HttpService */]) === "function" && _g || Object])
], DockerServicesComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=docker-services.component.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-stack-deploy/docker-stack-deploy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-stack-deploy/docker-stack-deploy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-bottom:5px\">\n    <div class=\"panel panel-default\" style=\"margin-bottom:5px\">\n      <div class=\"panel-body\" style=\"padding-bottom:5px\">\n        <div class=\"form-group\">\n          <div>\n            <div class=\"pull-left\"><span class=\"menu-icon fa fa-server\" aria-hidden=\"true\"></span>Stack</div>\n            <div class=\"pull-right\" style=\"color:blue\">{{updateStackName}}</div>\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px\">\n          <div class=\"panel panel-default\" style=\"border-style:none\">\n            <form class=\"form-horizontal\" (ngSubmit)=\"onDeploy(f)\" #f=\"ngForm\">\n\n              <div class=\"form-group\">\n                <div *ngIf=\"updateStackName==='new stack'\" class=\"col-sm-8\">\n                  <input\n                    ngModel\n                    required\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"name\"\n                    placeholder=\"name\"\n                    id=\"name\">\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"col-sm-8\">\n                  <input\n                    ngModel\n                    type=\"file\"\n                  \n                    style=\"margin:0px;padding:0px;border:0px\"\n                    name=\"filename\"\n                    id=\"filename\"\n                    (change)=\"fileSelected($event)\"\n                    #filename>\n                  <span class=\"help-block\" *ngIf=\"!filename.valid && filename.touched\">Please choose a valid file</span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"col-sm-8\">\n                  <textarea\n                    [(ngModel)]=\"fileText\"\n                    required\n                    type=\"filedata\"\n                    class=\"form-control\"\n                    name=\"filedata\"\n                    id=\"filedata\"\n                    [style.height.px]=\"deployPanelHeight\"\n                    [style.width.px]=\"deployPanelWidth\"\n                    #filedata>\n                  </textarea>\n                </div>\n              </div>\n\n              <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ message }}</span>\n\n              <div class=\"form-group\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-primary btn-sm\"\n                    type=\"submit\"\n                    [disabled]=\"!f.valid || message=='submitting...'\">\n                    <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n                    Submit\n                  </button>\n                  <button type=\"button\"\n                    class=\"btn btn-default btn-sm\"\n                    (click)=\"returnBack()\">\n                    <i aria-hidden=\"true\"></i> Cancel\n                  </button>\n                </div>\n              </div>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-stack-deploy/docker-stack-deploy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_docker_stacks_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-stacks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerStackDeployComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DockerStackDeployComponent = (function () {
    function DockerStackDeployComponent(menuService, route, httpService, dockerStacksService) {
        this.menuService = menuService;
        this.route = route;
        this.httpService = httpService;
        this.dockerStacksService = dockerStacksService;
        this.message = "";
        this.deployPanelHeight = 300;
        this.deployPanelWidth = 500;
        this.updateStackName = "new stack";
        this.fileText = "";
    }
    DockerStackDeployComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.setItemMenu('logs', 'View');
        this.resizeDeploy(this.menuService.appWindow);
        this.menuService.onWindowResize.subscribe(function (win) {
            _this.resizeDeploy(win);
        });
        this.menuService.setItemMenu('stack', 'Deploy');
        this.route.params.subscribe(function (params) {
            if (params['stackName']) {
                _this.menuService.setItemMenu('stack', params['stackName']);
                _this.updateStackName = params['stackName'];
            }
        });
    };
    DockerStackDeployComponent.prototype.onDeploy = function (form) {
        var _this = this;
        this.message = "submitting...";
        var name = form.value.name;
        if (this.updateStackName != 'new stack') {
            name = this.updateStackName;
        }
        this.httpService.deployStack(name, form.value.filedata).subscribe(function (data) {
            _this.message = "";
            _this.dockerStacksService.loadStacks(false);
            _this.menuService.returnToPreviousPath();
            _this.menuService.onRefreshClicked.next();
        }, function (error) {
            var data = error.json();
            _this.message = data.error;
        });
    };
    DockerStackDeployComponent.prototype.fileSelected = function (event) {
        var _this = this;
        var ele = event.srcElement || event.target;
        var files = ele.files;
        if (!files || !files[0]) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (file) {
            var contents = file.target;
            _this.fileText = contents.result;
        };
        reader.readAsText(files[0]);
    };
    DockerStackDeployComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    DockerStackDeployComponent.prototype.resizeDeploy = function (win) {
        this.deployPanelHeight = win.height - 340;
        this.deployPanelWidth = win.width - 90 - this.menuService.paddingLeftMenu;
    };
    return DockerStackDeployComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], DockerStackDeployComponent.prototype, "form", void 0);
DockerStackDeployComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-stack-deploy',
        template: __webpack_require__("../../../../../src/app/docker-stacks/docker-stack-deploy/docker-stack-deploy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docker-stacks/docker-stack-deploy/docker-stack-deploy.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_docker_stacks_service__["a" /* DockerStacksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_docker_stacks_service__["a" /* DockerStacksService */]) === "function" && _e || Object])
], DockerStackDeployComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=docker-stack-deploy.component.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-stacks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-stacks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div>\n          <div class=\"pull-left\">\n            <span class=\"fa fa-server\" aria-hidden=\"true\"></span> Stacks</div>\n        </div>\n      </div>\n\n      <div class=\"panel-body\">\n        <div classes=\"col-lg-12\">\n          <div class=\"pull-left\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n              <button type=\"button\" class=\"btn btn-primary\"\n                (click)=deploy()>\n                <i class=\"glyphicon glyphicon-tasks space-right\"></i>\n                Deploy\n              </button>\n            </div>\n            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n              <button type=\"button\" class=\"btn btn-danger\"\n                [disabled]=\"dockerStacksService.currentStack.name==''\"\n                (click)=\"remove()\">\n                <i class=\"fa fa-trash space-right\"></i>\n                Remove\n              </button>\n              <button type=\"button\" class=\"btn btn-primary\"\n                [disabled]=\"dockerStacksService.currentStack.name==''\"\n                (click)=update()>\n                <i class=\"glyphicon glyphicon-tasks space-right\"></i>\n                Update\n              </button>\n              <button type=\"button\" class=\"btn btn-primary\"\n                [disabled]=\"dockerStacksService.currentStack.name==''\"\n                (click)=\"logs(dockerStacksService.currentStack.name)\">\n                <i class=\"glyphicon glyphicon-list-alt space-right\"></i>\n                Logs\n              </button>\n              <button type=\"button\" class=\"btn btn-primary\"\n                [disabled]=\"dockerStacksService.currentStack.name==''\"\n                (click)=\"metrics(dockerStacksService.currentStack.name)\">\n                <i class=\"glyphicon glyphicon-stats space-right\"></i>\n                Metrics\n              </button>\n            </div>\n          </div>\n          <div class=\"pull-right\">\n            <input type=\"text\"\n              #filter\n              id=\"filter\"\n              placeholder=\"Filter...\"\n              class=\"form-control\"\n              (keyup)=\"listService.filter(filter.value)\"/>\n          </div>\n        </div>\n      </div>\n\n      <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ message }}</span>\n\n      <div class=\"row\">\n        <div classes=\"no-padding\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>\n                    <a>\n                      Id\n                      <span (click)=\"listService.order('id', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('id', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Name\n                      <span (click)=\"listService.order('name', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('name', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Status\n                      <span (click)=\"listService.order('status', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('status', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Owner\n                      <span (click)=\"listService.order('ownerName', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('ownerName', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Organization\n                      <span (click)=\"listService.order('ownerOrganization', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('ownerOrganization', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Created on\n                      <span (click)=\"listService.order('createDate', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('createDate', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Services\n                      <span (click)=\"listService.orderNum('runningServices', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.orderNum('runningServices', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr (click)=\"dockerStacksService.setCurrentStack(stack.name)\" [style.color]=getColor(stack) *ngFor=\"let stack of listService.getData()\">\n                  <td><input type=\"checkbox\" [checked]=\"dockerStacksService.currentStack.name===stack.name\"></td>\n                  <td>{{ stack.shortId }}</td>\n                  <td>{{ stack.name }}</td>\n                  <td>{{ stack.status }}</td>\n                  <td> {{ stack.ownerName }}</td>\n                  <td> {{ stack.ownerOrganization }}</td>\n                  <td> {{ stack.createDate }}</td>\n                  <td>\n                    <a (click)=\"serviceList(stack.name)\">{{stack.services}}</a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/docker-stacks/docker-stacks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_docker_stacks_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-stacks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__metrics_services_metrics_service__ = __webpack_require__("../../../../../src/app/metrics/services/metrics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerStacksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DockerStacksComponent = (function () {
    function DockerStacksComponent(route, dockerStacksService, listService, menuService, metricsService, httpService) {
        this.route = route;
        this.dockerStacksService = dockerStacksService;
        this.listService = listService;
        this.menuService = menuService;
        this.metricsService = metricsService;
        this.httpService = httpService;
        this.deployTitle = "Deploy";
        this.message = "";
        listService.setFilterFunction(dockerStacksService.match);
    }
    DockerStacksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.setItemMenu('stacks', 'List');
        this.dockerStacksService.onStacksLoaded.subscribe(function () {
            _this.listService.setData(_this.dockerStacksService.stacks);
            var id = _this.dockerStacksService.currentStack.id;
            if (id == "") {
                _this.deployTitle = "Deploy";
            }
            else {
                _this.deployTitle = "Update";
            }
        });
        this.menuService.onRefreshClicked.subscribe(function () {
            _this.dockerStacksService.loadStacks(true);
        });
        this.dockerStacksService.loadStacks(false);
        this.menuService.setCurrentTimer(setInterval(function () {
            _this.dockerStacksService.loadStacks(true);
        }, 3000));
    };
    DockerStacksComponent.prototype.ngOnDestroy = function () {
        this.menuService.clearCurrentTimer();
        //this.dockerStacksService.onStacksLoaded.unsubscribe();
    };
    DockerStacksComponent.prototype.serviceList = function (stackName) {
        this.dockerStacksService.setCurrentStack(stackName);
        this.menuService.navigate(["/amp", "stacks", stackName, "services"]);
    };
    DockerStacksComponent.prototype.getColor = function (stack) {
        if (stack.status == 'running') {
            return 'limegreen';
        }
        if (stack.status == 'starting') {
            return 'orange';
        }
        return 'red';
    };
    DockerStacksComponent.prototype.deploy = function () {
        this.menuService.navigate(["/amp", "stacks", "deploy"]);
    };
    DockerStacksComponent.prototype.update = function () {
        var stackName = this.dockerStacksService.currentStack.name;
        this.menuService.navigate(["/amp", "stacks", stackName, "update"]);
    };
    DockerStacksComponent.prototype.remove = function () {
        var _this = this;
        this.httpService.removeStack(this.dockerStacksService.currentStack.name).subscribe(function (data) {
            _this.dockerStacksService.setCurrentStack("");
            _this.dockerStacksService.loadStacks(true);
        }, function (error) {
            var data = error.json();
            _this.message = data.error;
        });
    };
    DockerStacksComponent.prototype.metrics = function (stackName) {
        this.menuService.navigate(['/amp', 'metrics', 'stack', 'single', stackName]);
    };
    DockerStacksComponent.prototype.logs = function (stackName) {
        this.menuService.navigate(['/amp', 'logs', 'stack', stackName]);
    };
    return DockerStacksComponent;
}());
DockerStacksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-stacks',
        template: __webpack_require__("../../../../../src/app/docker-stacks/docker-stacks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docker-stacks/docker-stacks.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_list_service__["a" /* ListService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_docker_stacks_service__["a" /* DockerStacksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_docker_stacks_service__["a" /* DockerStacksService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_list_service__["a" /* ListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__metrics_services_metrics_service__["a" /* MetricsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__metrics_services_metrics_service__["a" /* MetricsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */]) === "function" && _f || Object])
], DockerStacksComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=docker-stacks.component.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/models/docker-container.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerContainer; });
var DockerContainer = (function () {
    function DockerContainer(id, image, state, desiredState, nodeId) {
        this.id = id;
        this.shortId = id.substring(0, 12);
        this.image = image;
        this.state = state;
        this.desiredState = desiredState;
        this.nodeId = nodeId;
    }
    return DockerContainer;
}());

//# sourceMappingURL=docker-container.model.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/models/docker-service.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerService; });
var DockerService = (function () {
    function DockerService(id, name, mode, image, tag) {
        this.id = id;
        this.name = name;
        this.shortName = this.extractShortName(name);
        this.mode = mode;
        this.image = image;
        this.tag = tag;
    }
    DockerService.prototype.set = function (status, totalTasks, readyTasks) {
        this.status = status;
        this.totalTasks = totalTasks;
        this.readyTasks = readyTasks;
        this.replicas = "" + this.readyTasks + "/" + this.totalTasks;
    };
    DockerService.prototype.extractShortName = function (fullName) {
        if (!fullName) {
            return "unknow";
        }
        var ll = fullName.indexOf('_');
        if (ll < 0) {
            return fullName;
        }
        return fullName.substring(ll + 1);
    };
    return DockerService;
}());

//# sourceMappingURL=docker-service.model.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/models/docker-stack.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerStack; });
var DockerStack = (function () {
    function DockerStack(id, name, services, ownerName, ownerOrganization) {
        this.id = id,
            this.shortId = id.substring(0, 12);
        this.name = name;
        this.ownerName = ownerName;
        this.ownerOrganization = ownerOrganization;
    }
    DockerStack.prototype.set = function (status, date, totalService, runningService) {
        this.status = status;
        this.createDate = date;
        this.totalService = totalService;
        this.runningService = runningService;
        this.services = "" + this.runningService + "/" + this.totalService;
    };
    return DockerStack;
}());

//# sourceMappingURL=docker-stack.model.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/services/docker-containers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_docker_container_model__ = __webpack_require__("../../../../../src/app/docker-stacks/models/docker-container.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__docker_services_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerContainersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DockerContainersService = (function () {
    function DockerContainersService(dockerServicesService, httpService) {
        this.dockerServicesService = dockerServicesService;
        this.httpService = httpService;
        this.containers = [];
        this.emptyContainer = new __WEBPACK_IMPORTED_MODULE_1__models_docker_container_model__["a" /* DockerContainer */]("", "", "", "", "");
        this.currentContainer = this.emptyContainer;
        this.onContainersLoaded = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.onContainersError = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.currentLoadedServiceId = "";
    }
    DockerContainersService.prototype.match = function (cont, value) {
        if (value == "") {
            return true;
        }
        if (cont.id && cont.id.includes(value)) {
            return true;
        }
        if (cont.state && cont.state.includes(value)) {
            return true;
        }
        if (cont.desiredState && cont.desiredState.includes(value)) {
            return true;
        }
        if (cont.nodeId && cont.nodeId.includes(value)) {
            return true;
        }
        if (cont.image && cont.image.toString().includes(value)) {
            return true;
        }
        return false;
    };
    DockerContainersService.prototype.setCurrentContainer = function (id) {
        if (this.currentContainer.id == id) {
            this.currentContainer = this.emptyContainer;
            return;
        }
        this.currentContainer = this.emptyContainer;
        for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
            var cont = _a[_i];
            if (cont.id === id) {
                this.currentContainer = cont;
            }
        }
    };
    DockerContainersService.prototype.loadContainers = function (refresh) {
        var _this = this;
        if (!refresh && this.currentLoadedServiceId == this.dockerServicesService.currentService.id) {
            this.onContainersLoaded.next();
            return;
        }
        this.httpService.tasks(this.dockerServicesService.currentService.id).subscribe(function (data) {
            _this.containers = data;
            _this.currentLoadedServiceId = _this.dockerServicesService.currentService.id;
            _this.onContainersLoaded.next();
        }, function (error) {
            console.log(error);
            _this.onContainersError.next(error);
        });
    };
    return DockerContainersService;
}());
DockerContainersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__docker_services_service__["a" /* DockerServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__docker_services_service__["a" /* DockerServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _b || Object])
], DockerContainersService);

var _a, _b;
//# sourceMappingURL=docker-containers.service.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/services/docker-services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_docker_service_model__ = __webpack_require__("../../../../../src/app/docker-stacks/models/docker-service.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__docker_stacks_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-stacks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerServicesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DockerServicesService = (function () {
    function DockerServicesService(dockerStacksService, httpService) {
        this.dockerStacksService = dockerStacksService;
        this.httpService = httpService;
        this.services = [];
        this.emptyService = new __WEBPACK_IMPORTED_MODULE_1__models_docker_service_model__["a" /* DockerService */]("", "", "", "", "");
        this.currentService = this.emptyService;
        this.onServicesLoaded = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.onServicesError = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.currentLoadedStackName = "";
    }
    DockerServicesService.prototype.match = function (serv, value) {
        if (value == "") {
            return true;
        }
        if (serv.id && serv.id.includes(value)) {
            return true;
        }
        if (serv.name && serv.name.includes(value)) {
            return true;
        }
        if (serv.image && serv.image.toString().includes(value)) {
            return true;
        }
        if (serv.mode && serv.mode.includes(value)) {
            return true;
        }
        return false;
    };
    DockerServicesService.prototype.setCurrentService = function (name) {
        if (this.currentService.name == name) {
            this.currentService = this.emptyService;
            return;
        }
        this.currentService = this.emptyService;
        for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
            var service = _a[_i];
            if (service.name === name) {
                this.currentService = service;
            }
        }
    };
    DockerServicesService.prototype.setCurrentServiceById = function (id) {
        this.currentService = this.emptyService;
        for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
            var service = _a[_i];
            if (service.id === id) {
                this.currentService = service;
            }
        }
    };
    DockerServicesService.prototype.loadServices = function (refresh) {
        var _this = this;
        if (!refresh && this.currentLoadedStackName == this.dockerStacksService.currentStack.name) {
            this.onServicesLoaded.next();
            return;
        }
        this.httpService.services(this.dockerStacksService.currentStack.name).subscribe(function (data) {
            _this.currentLoadedStackName = _this.dockerStacksService.currentStack.name;
            _this.services = data;
            _this.onServicesLoaded.next();
        }, function (error) {
            //console.log("loadStacksError")
            //console.log(error)
            _this.onServicesError.next(error);
        });
    };
    DockerServicesService.prototype.scaleCurrentService = function () {
    };
    return DockerServicesService;
}());
DockerServicesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__docker_stacks_service__["a" /* DockerStacksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__docker_stacks_service__["a" /* DockerStacksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _b || Object])
], DockerServicesService);

var _a, _b;
//# sourceMappingURL=docker-services.service.js.map

/***/ }),

/***/ "../../../../../src/app/docker-stacks/services/docker-stacks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_docker_stack_model__ = __webpack_require__("../../../../../src/app/docker-stacks/models/docker-stack.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerStacksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DockerStacksService = (function () {
    function DockerStacksService(httpService) {
        this.httpService = httpService;
        this.stacks = [];
        this.emptyStack = new __WEBPACK_IMPORTED_MODULE_1__models_docker_stack_model__["a" /* DockerStack */]("", "", 0, "", "");
        this.currentStack = this.emptyStack;
        this.onStacksLoaded = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.onStacksError = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    DockerStacksService.prototype.match = function (stack, value) {
        if (value == "") {
            return true;
        }
        if (stack.id && stack.id.includes(value)) {
            return true;
        }
        if (stack.name && stack.name.includes(value)) {
            return true;
        }
        if (stack.services && stack.services.toString().includes(value)) {
            return true;
        }
        if (stack.ownerName && stack.ownerName.includes(value)) {
            return true;
        }
        if (stack.ownerOrganization && stack.ownerOrganization.includes(value)) {
            return true;
        }
        return false;
    };
    DockerStacksService.prototype.setCurrentStack = function (name) {
        if (this.currentStack.name == name) {
            this.currentStack = this.emptyStack;
            return;
        }
        this.currentStack = this.emptyStack;
        for (var _i = 0, _a = this.stacks; _i < _a.length; _i++) {
            var stack = _a[_i];
            if (stack.name === name) {
                this.currentStack = stack;
            }
        }
    };
    DockerStacksService.prototype.loadStacks = function (refresh) {
        var _this = this;
        if (!refresh && this.stacks.length > 0) {
            this.onStacksLoaded.next();
            return;
        }
        this.httpService.stacks().subscribe(function (data) {
            _this.stacks = data;
            _this.onStacksLoaded.next();
        }, function (error) {
            //console.log("loadStacksError")
            //console.log(error)
            _this.onStacksError.next(error);
        });
    };
    return DockerStacksService;
}());
DockerStacksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _a || Object])
], DockerStacksService);

var _a;
//# sourceMappingURL=docker-stacks.service.js.map

/***/ }),

/***/ "../../../../../src/app/logs/logs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntable.tableLog {\n  font-family:courier, \"courier new\", monospace;\n  font-size: 14px;\n  color: black;\n  background-color: white;\n  border: none;\n  width: 100%;\n  overflow-x: scroll;\n}\n\ntr.rowLog {\n  padding: 1px 5px 1px 5px;\n  margin: 1px 5px 1px 5px;\n}\n\ntr.rowTitleLog {\n  padding: 1px 5px 1px 5px;\n  margin: 1px 5px 1px 5px;\n}\n\nth.titleLog {\n  padding: 3px 10px 3px 10px;\n  border: 1px solid #ddd;\n  border-top:none;\n  border-bottom:none;\n  border-right:none;\n  border-left:none;\n  display: inline-block;\n}\n\ntd.cellLog {\n  padding: 3px 10px 3px 10px;\n  border: 1px solid #ddd;\n  border-top:none;\n  border-bottom:none;\n  border-right:none;\n  min-width: 20px\n}\n\ntbody {\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: block;\n  padding: 0px;\n  margin: 0px;\n  border: 1px solid #ddd;\n}\n\nthead {\n  overflow-x: scroll;\n  display: table-header-group;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\" style=\"border-style:none;margin-bottom:5px\">\n      <div class=\"panel-body\" style=\"padding:05px 20px 5px 20px;margin-top:5px\">\n        <div class=\"pull-left\"><span class=\"menu-icon fa fa-list-alt\" aria-hidden=\"true\"></span> {{ object }}</div>\n        <div class=\"pull-right\" style=\"color:blue\">{{ ref }}</div>\n      </div>\n      <div class=\"panel-body\" style=\"padding:5px 20px 5px 20px\">\n        <div class=\"pull-left\">\n          <button *ngIf=\"isReturnBack\" type=\"button\" class=\"btn btn-primary\" (click)=returnBack()>\n            <i class=\"glyphicon glyphicon-backward\"></i>\n          </button>\n          <div class=\"btn dropdown\" style=\"padding-left:2px;padding-right:2px\">\n            <button class=\"dropdown btn btn-primary dropdown-toggle\" type=\"button\" id=\"fields\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n              Fields\n              <span class=\"caret\" style=\"cursor:pointer;color:white\"></span>\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"refreshperiod\">\n              <li><a (click)=\"logsService.toggleColVisibility('timestamp')\"><input type=\"checkbox\" [checked]=\"logsService.isColVisible('timestamp')\"> Timestamp</a></li>\n              <li><a (click)=\"logsService.toggleColVisibility('stackName')\"><input type=\"checkbox\" [checked]=\"logsService.isColVisible('stackName')\"> Stack name</a></li>\n              <li><a (click)=\"logsService.toggleColVisibility('serviceName')\"><input type=\"checkbox\" [checked]=\"logsService.isColVisible('serviceName')\"> Service name</a></li>\n              <li><a (click)=\"logsService.toggleColVisibility('containerShortName')\"><input type=\"checkbox\" [checked]=\"logsService.isColVisible('containerShortName')\"> Container short name</a></li>\n              <!--<li><a (click)=\"columnToggle('containerState')\"><input type=\"checkbox\" [checked]=\"columnVisible['containerState']\"> Container state</a></li>-->\n              <li><a (click)=\"logsService.toggleColVisibility('nodeId')\"><input type=\"checkbox\" [checked]=\"logsService.isColVisible('nodeId')\"> Node id</a></li>\n              <div class=\"dropdown-divider\"></div>\n              <li><a (click)=\"logsService.toggleColVisibility('serviceId')\"><input type=\"checkbox\" [checked]=\"logsService.isColVisible('serviceId')\"> Service id</a></li>\n              <li><a (click)=\"logsService.toggleColVisibility('containerId')\"><input type=\"checkbox\" [checked]=\"logsService.isColVisible('containerId')\"> Container id</a></li>\n              <!--<li><a (click)=\"columnToggle('containerName')\"><input type=\"checkbox\" [checked]=\"columnVisible['containerName']\"> Container name</a></li>-->\n              <li><a (click)=\"logsService.toggleColVisibility('taskId')\"><input type=\"checkbox\" [checked]=\"logsService.isColVisible('taskId')\"> Task id</a></li>\n            </div>\n          </div>\n          <label style=\"margin:5px 0px 0px 10px\">\n            <input\n              style=\"height:12px\"\n              type=\"checkbox\"\n              [checked]=\"autoRefresh\"\n              (click)=\"autoRefreshToggle()\"> Follow</label>\n          <label *ngIf=\"this.usersService.currentUser.sp\" style=\"margin:5px 0px 0px 10px\">\n            <input\n              style=\"height:12px\"\n              type=\"checkbox\"\n              [checked]=\"infraStacks\"\n              (click)=\"infraStacksToggle()\"> Infra stacks</label>\n            <span class=\"help-block\" style=\"color:blue;margin-left:20px\">{{ currentStack }}{{ currentService }}</span>\n      </div>\n        <div class=\"pull-right\">\n          <input\n            style=\"width:400px\"\n            #filter\n            type=\"text\"\n            id=\"filter\"\n            placeholder=\"Filter... (enter to execute) service:xxx to select a service xxx\"\n            class=\"form-control input-sm\"\n            (keydown.enter)=\"setFilter(filter.value)\"/>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"padding:0px\">\n      <div class=\"panel panel-default\" style=\"border-style:none;margin-bottom:5px\">\n        <div class=\"panel-body\" style=\"overflow-x:scroll;padding:0px;margin-top:5px\">\n          <table class=\"tableLog\">\n            <thead>\n              <tr class='rowTitleLog'>\n                <th class=\"titleLog timestampTitle\" style=\"min-width:230px\" *ngIf=\"logsService.isColVisible('timestamp')\">Timestamp</th>\n                <th class=\"titleLog stackNameTitle\" *ngIf=\"logsService.isColVisible('stackName')\">Stack</th>\n                <th class=\"titleLog serviceNameTitle\" *ngIf=\"logsService.isColVisible('serviceName')\">Service</th>\n                <th class=\"titleLog containerShortNameTitle\" *ngIf=\"logsService.isColVisible('containerShortName')\">Container</th>\n                <!--<th class=\"titleLog containerStateTitle\" *ngIf=\"columnVisible['containerState']\">State</th>-->\n                <th class=\"titleLog nodeIdTitle\" *ngIf=\"logsService.isColVisible('nodeId')\">Node id</th>\n                <th class=\"titleLog serviceIdTitle\" *ngIf=\"logsService.isColVisible('serviceId')\">Service id</th>\n                <th class=\"titleLog containerIdTitle\" *ngIf=\"logsService.isColVisible('containerId')\">Container id</th>\n                <!--<th class=\"titleLog containerNameTitle\" *ngIf=\"columnVisible['containerName']\">Container name</th>-->\n                <th class=\"titleLog taskIdTitle\" *ngIf=\"logsService.isColVisible('taskId')\">Task id</th>\n                <th class='titleLog'>Message</th>\n              </tr>\n            </thead>\n            <tbody #logScroll [style.height.px]=\"logsPanelHeight\">\n              <tr class='rowLog' *ngFor=\"let log of logs\">\n                <td class=\"cellLog timestampCell\" style=\"min-width:230px\" *ngIf=\"logsService.isColVisible('timestamp')\">{{log.timestamp}}</td>\n                <td class=\"cellLog stackNameCell\" *ngIf=\"logsService.isColVisible('stackName')\">{{log.stack_name}}</td>\n                <td class=\"cellLog serviceNameCell\" *ngIf=\"logsService.isColVisible('serviceName')\">{{log.service_name}}</td>\n                <td class=\"cellLog containerShortNameCell\" *ngIf=\"logsService.isColVisible('containerShortName')\">{{log.container_short_name}}</td>\n                <!--<td class=\"cellLog containerStateCell\" *ngIf=\"columnVisible['containerState']\">{{log.container_state}}</td>-->\n                <td class=\"cellLog nodeIdCell\" *ngIf=\"logsService.isColVisible('nodeId')\">{{log.node_id}}</td>\n                <td class=\"cellLog serviceIdCell\" *ngIf=\"logsService.isColVisible('serviceId')\">{{log.service_id}}</td>\n                <td class=\"cellLog containerIdCell\" *ngIf=\"logsService.isColVisible('containerId')\">{{log.container_id}}</td>\n                <!--<td class=\"cellLog containerNameCell\" *ngIf=\"columnVisible['containerName']\">{{log.container_name}}</td>-->\n                <td class=\"cellLog taskIdCell\" *ngIf=\"logsService.isColVisible('taskId')\">{{log.task_id}}</td>\n                <td class=\"cellLog\">{{log.msg}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/logs/logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logs_service__ = __webpack_require__("../../../../../src/app/logs/services/logs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_logs_request_model__ = __webpack_require__("../../../../../src/app/logs/models/logs-request.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LogsComponent = (function () {
    function LogsComponent(menuService, route, httpService, usersService, logsService) {
        this.menuService = menuService;
        this.route = route;
        this.httpService = httpService;
        this.usersService = usersService;
        this.logsService = logsService;
        this.object = "";
        this.ref = "";
        this.periodRefreshLabel = "30 sec";
        this.logs = [];
        this.logsPanelHeight = 400;
        this.req = new __WEBPACK_IMPORTED_MODULE_6__models_logs_request_model__["a" /* LogsRequest */]();
        this.filter = "";
        this.isReturnBack = false;
        this.autoRefresh = false;
        this.lastTimestamp = "";
        this.infraStacks = false;
        this.currentService = "";
        this.currentStack = "";
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.setItemMenu('logs', 'View');
        this.resizeLogs(this.menuService.appWindow);
        this.menuService.onWindowResize.subscribe(function (win) {
            _this.resizeLogs(win);
        });
        this.routeSub = this.route.params.subscribe(function (params) {
            var object = params['object']; //'global' or 'stack' or 'service' or 'container'
            var ref = params['ref']; //stackName or serviceId or containerId or 'all'
            _this.computeNames(object, ref);
            if (ref) {
                _this.isReturnBack = true;
            }
            _this.req.includeAmpLogs = false;
            _this.req.size = 1000;
            if (object == 'stack') {
                _this.req.stack = ref;
                _this.menuService.setItemMenu('logs', 'Vie stack');
            }
            if (object == 'service') {
                _this.req.service = ref;
                _this.menuService.setItemMenu('logs', 'View service');
            }
            if (object == 'task') {
                _this.req.task = ref;
                _this.menuService.setItemMenu('logs', 'View container');
            }
            if (object == 'node') {
                _this.req.node = ref;
                _this.menuService.setItemMenu('logs', 'View node');
            }
            _this.executeRequest();
        });
    };
    LogsComponent.prototype.ngAfterViewChecked = function () {
        if (this.logs.length > 0) {
            var last = this.logs[this.logs.length - 1].timestamp;
            if (this.lastTimestamp !== last) {
                this.lastTimestamp = last;
                this.scrollToBottom();
            }
        }
        this.alignColumnTitleToContent();
    };
    LogsComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    LogsComponent.prototype.scrollToBottom = function () {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    LogsComponent.prototype.executeRequest = function () {
        var _this = this;
        console.log(this.req);
        this.httpService.logs(this.req).subscribe(function (data) {
            _this.logs = data;
        }, function (error) {
            console.log(error);
        });
    };
    LogsComponent.prototype.autoRefreshToggle = function () {
        var _this = this;
        this.autoRefresh = !this.autoRefresh;
        if (this.autoRefresh) {
            this.menuService.setCurrentTimer(setInterval(function () { return _this.executeRequest(); }, 3000));
        }
        else {
            if (this.timer) {
                this.menuService.clearCurrentTimer();
            }
        }
    };
    LogsComponent.prototype.infraStacksToggle = function () {
        this.infraStacks = !this.infraStacks;
        this.req.includeAmpLogs = this.infraStacks;
        this.executeRequest();
    };
    LogsComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    LogsComponent.prototype.resizeLogs = function (win) {
        this.logsPanelHeight = win.height - 240;
    };
    LogsComponent.prototype.alignColumnTitleToContent = function () {
        var list = this.logsService.getVisibleColsName();
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var name = list_1[_i];
            __WEBPACK_IMPORTED_MODULE_7_jquery__('.' + name + 'Title').width(__WEBPACK_IMPORTED_MODULE_7_jquery__('.' + name + 'Cell').width());
        }
    };
    LogsComponent.prototype.setFilter = function (filter) {
        if (filter.toLowerCase().startsWith("stack:")) {
            var stack = filter.substring(6).trim();
            this.req.stack = stack;
            this.req.service = "";
            if (stack == "") {
                this.currentStack = "";
            }
            else {
                this.currentStack = "Filter on stack: " + stack;
            }
        }
        else if (filter.toLowerCase().startsWith("service:")) {
            var service = filter.substring(8).trim();
            this.req.service = service;
            this.req.stack = "";
            if (service == "") {
                this.currentService = "";
            }
            else {
                this.currentService = "Filter on service: " + service;
            }
        }
        else {
            this.req.message = filter;
        }
        this.executeRequest();
    };
    LogsComponent.prototype.computeNames = function (object, ref) {
        if (object == "") {
            this.object = "global";
            return;
        }
        this.object = object;
        this.ref = ref;
    };
    return LogsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('logScroll'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], LogsComponent.prototype, "scrollContainer", void 0);
LogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-logs',
        template: __webpack_require__("../../../../../src/app/logs/logs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logs/logs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_logs_service__["a" /* LogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_logs_service__["a" /* LogsService */]) === "function" && _f || Object])
], LogsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=logs.component.js.map

/***/ }),

/***/ "../../../../../src/app/logs/models/log.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });
var Log = (function () {
    function Log(timestamp, msg) {
        this.timestamp = this.dateFormat(timestamp);
        this.msg = msg;
    }
    Log.prototype.dateFormat = function (date) {
        return date.replace('T', ' ').replace('Z', '');
    };
    return Log;
}());

//# sourceMappingURL=log.model.js.map

/***/ }),

/***/ "../../../../../src/app/logs/models/logs-request.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsRequest; });
var LogsRequest = (function () {
    function LogsRequest() {
    }
    return LogsRequest;
}());

//# sourceMappingURL=logs-request.model.js.map

/***/ }),

/***/ "../../../../../src/app/logs/services/logs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogsService = (function () {
    function LogsService(httpService, menuService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.columnVisible = {};
        this.initColumns();
    }
    LogsService.prototype.initColumns = function () {
        this.columnVisible['timestamp'] = true;
        this.columnVisible['stackName'] = false;
        this.columnVisible['serviceName'] = false;
        this.columnVisible['containerShortName'] = false;
        this.columnVisible['containerState'] = false;
        this.columnVisible['nodeId'] = false;
        this.columnVisible['serviceId'] = false;
        this.columnVisible['containerId'] = false;
        this.columnVisible['containerName'] = false;
        this.columnVisible['taskId'] = false;
    };
    LogsService.prototype.isColVisible = function (name) {
        return this.columnVisible[name];
    };
    LogsService.prototype.toggleColVisibility = function (name) {
        this.columnVisible[name] = !this.columnVisible[name];
    };
    LogsService.prototype.getVisibleColsName = function () {
        var list = [];
        for (var key in this.columnVisible) {
            if (this.columnVisible[key]) {
                list.push(key);
            }
        }
        return list;
    };
    return LogsService;
}());
LogsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
], LogsService);

var _a, _b;
//# sourceMappingURL=logs.service.js.map

/***/ }),

/***/ "../../../../../src/app/metrics/graph/lines/lines.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\napp-graph-line {\n  position: absolute;\n}\n\n.d3-chart {\n  margin: 0px;\n  padding: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.d3-chart .axis path,\n.d3-chart .axis line {\n  stroke: #999;\n}\n\n.d3-chart .axis text {\n  fill: #999;\n}\n\n.line {\n  fill: none;\n  stroke-width: 2px;\n}\n\n.selectedLine {\n  fill: none;\n  stroke-width: 3px;\n}\n\n.info {\n  font-size: 12px;\n}\n\n.grid line {\n  stroke: lightgrey;\n  stroke-opacity: 0.7;\n  shape-rendering: crispEdges;\n}\n\n\n.grid path {\n  stroke-width: 0;\n}\n\n.axis {\n  color: black;\n}\n\n.overlay {\n  fill: none;\n  pointer-events: all;\n}\n\n.focus circle {\n  fill: none;\n  stroke: steelblue;\n}\n\n.text-label {\n  font: 12px sans-serif;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/metrics/graph/lines/lines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_metrics_service__ = __webpack_require__("../../../../../src/app/metrics/services/metrics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_graph_model__ = __webpack_require__("../../../../../src/app/models/graph.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//style="height:parentdiv.offsetHeight;width:parentdiv.offsetWidth"
var LinesComponent = (function () {
    function LinesComponent(metricsService, menuService) {
        this.metricsService = metricsService;
        this.menuService = menuService;
        this.formatValue = __WEBPACK_IMPORTED_MODULE_1_d3__["format"](',.2f');
        this.dateFormat = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]("%y-%m-%d %H:%M:%S");
        this.selectedLine = -1;
        this.margin = { top: 40, bottom: 30, left: 60, right: 20 };
        this.lines = [];
        this.data = [];
        this.created = false;
    }
    LinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createGraph();
        this.metricsService.onNewData.subscribe(function () {
            //this.svg.remove();
            _this.svg.selectAll("*").remove();
            _this.updateGraph();
        });
        this.menuService.onWindowResize.subscribe(function (win) {
            _this.svg.selectAll("*").remove();
            _this.resizeGraph();
        });
    };
    LinesComponent.prototype.ngOnDestroy = function () {
        this.svg.selectAll("*").remove();
        //this.metricsService.onNewData.unsubscribe()
    };
    LinesComponent.prototype.createGraph = function () {
        var _this = this;
        // set the dimensions and margins of the graph
        this.element = this.chartContainer.nativeElement;
        this.width = this.graph.width - this.margin.left - this.margin.right;
        this.height = this.graph.height - this.margin.top - this.margin.bottom;
        //console.log("create: "+this.graph.title+": "+this.width+","+this.height)
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.element)
            .append('svg')
            .attr('width', 2000) // this.graph.width)
            .attr('height', 2000) //this.graph.height)
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
            .on('click', function () { return _this.selectedClick(); });
        this.updateGraph();
        this.created = true;
    };
    LinesComponent.prototype.resizeGraph = function () {
        if (!this.created) {
            return;
        }
        this.element = this.chartContainer.nativeElement;
        this.width = this.graph.width - this.margin.left - this.margin.right;
        this.height = this.graph.height - this.margin.top - this.margin.bottom;
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('svg')
            .attr('width', this.graph.width)
            .attr('height', this.graph.height);
        this.updateGraph();
    };
    LinesComponent.prototype.updateGraph = function () {
        var _this = this;
        var ans = this.metricsService.getHistoricData(this.graph.fields, this.metricsService.object, this.metricsService.type);
        this.data = ans.data;
        this.lines = ans.lines;
        //console.log(this.lineRefs)
        this.chart = this.svg.append('g')
            .attr('class', 'lines')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        this.x = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleTime"]().range([0, this.width]);
        this.y = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([this.height, 0]);
        // Scale the range of the data
        this.x.domain(__WEBPACK_IMPORTED_MODULE_1_d3__["extent"](this.data, function (d) { return d.date; }));
        var ymax = 0;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var tmp = _a[_i];
            for (var yy = 0; yy < tmp.graphValues.length; yy++) {
                if (this.isVisible(this.lines[yy].name)) {
                    if (tmp.graphValues[yy] > ymax) {
                        ymax = tmp.graphValues[yy];
                    }
                }
            }
        }
        this.y.domain([0, ymax]);
        // define the lines
        this.valuelines = [];
        var _loop_1 = function (ll) {
            if (!this_1.isVisible(this_1.lines[ll].name)) {
                this_1.valuelines.push(null);
            }
            else {
                this_1.valuelines.push(__WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
                    .defined(function (d) { return d.graphValues[ll] !== undefined; })
                    .x(function (d) { return _this.x(d.date); })
                    .y(function (d) { return _this.y(d.graphValues[ll]); }));
                this_1.svg.append("path")
                    .data([this_1.data])
                    .attr("class", this_1.lines[ll].name + " line ")
                    .style("stroke", this_1.metricsService.getColor(this_1.lines[ll].name))
                    .attr("d", this_1.valuelines[ll]);
            }
        };
        var this_1 = this;
        //console.log(this.metricsService.lineVisibleMap)
        for (var ll = 0; ll < this.lines.length; ll++) {
            _loop_1(ll);
        }
        // add the X Axis
        if (this.width > 80) {
            this.xAxis = this.svg.append("g")
                .attr("class", "axisx")
                .attr("transform", "translate(0," + this.height + ")")
                .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.x).ticks(5));
        }
        // add the Y Axis
        if (this.height > 50) {
            this.yAxis = this.svg.append("g")
                .attr("class", "axisy")
                .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](this.y));
            if (this.graph.yTitle != '') {
                this.svg.append("text")
                    .attr("class", "y-title")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 0 - this.margin.left)
                    .attr("x", 0 - (this.height / 2))
                    .attr("dy", "1em")
                    .style("text-anchor", "middle")
                    .text(this.graph.yTitle);
            }
        }
        if (this.graph.title != '') {
            this.svg.append("text")
                .attr("class", "wtitle")
                .attr("transform", "translate(-" + (this.margin.left - 5) + ",-" + (this.margin.top - 10) + ")")
                .style("text-anchor", "left")
                .text(this.graph.title);
        }
        this.svg.append("rect")
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.bottom)
            .attr("transform", "translate(-" + this.margin.left + ",-" + (this.margin.top - 15) + ")")
            .attr('stroke', 'lightgrey')
            .style('fill', 'none');
        this.focus = this.svg.append('g')
            .attr('class', 'focus')
            .style('display', 'none');
        this.focus.append('circle')
            .attr('class', 'select-circle')
            .attr('r', 5)
            .style('fill', 'none')
            .style("stroke", 'black');
        this.svg.append('rect')
            .attr('class', 'overlay')
            .attr('width', this.width)
            .attr('height', this.height)
            .on('mouseover', function () { return _this.focus.style('display', null); })
            .on('mouseout', function () { return _this.removeSelected; })
            .on('mousemove', function () { _this.mousemove(_this.x, _this.y); });
    };
    LinesComponent.prototype.mousemove = function (x, y) {
        var _this = this;
        var pt = __WEBPACK_IMPORTED_MODULE_1_d3__["mouse"](__WEBPACK_IMPORTED_MODULE_1_d3__["event"].currentTarget);
        var x0 = x.invert(pt[0]);
        var y0 = y.invert(pt[1]);
        var dist;
        var yy = 0;
        var ptx;
        var pty = 0;
        var d;
        for (var jj = 0; jj < this.data.length; jj++) {
            var dn = this.data[jj];
            var xn = x(dn.date);
            for (var ii = 0; ii < dn.graphValues.length; ii++) {
                if (this.isVisible(this.lines[ii].name)) {
                    var yn = y(dn.graphValues[ii]);
                    var dist2_1 = (xn - pt[0]) * (xn - pt[0]) + (yn - pt[1]) * (yn - pt[1]);
                    if (dist === undefined || dist2_1 < dist) {
                        dist = dist2_1;
                        pty = dn.graphValues[ii];
                        ptx = dn.date;
                        d = dn;
                        yy = ii;
                    }
                }
            }
        }
        var epty = y(pty);
        var eptx = x(ptx);
        var dist2 = (eptx - pt[0]) * (eptx - pt[0]) + (epty - pt[1]) * (epty - pt[1]);
        dist = Math.sqrt(dist2);
        if (dist < 20) {
            this.removeSelected();
            this.selectedLine = yy;
            this.focus.style('display', null);
            var valueLine = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
                .x(function (d) { return _this.x(d.date); })
                .y(function (d) { return _this.y(d.graphValues[yy]); });
            this.svg.append("path")
                .data([this.data])
                .attr("class", "selectedLine")
                .style("stroke", this.metricsService.getColor(this.lines[yy].name))
                .attr("d", valueLine);
            this.focus.attr('transform', "translate(" + eptx + ", " + epty + ")");
            this.svg.append("text")
                .attr("class", "info")
                .attr("transform", "translate(10,-10)")
                .style("text-anchor", "left")
                .style("fill", this.metricsService.getColor(this.lines[yy].name))
                .text(this.lines[yy].displayedName + ": " + this.dateFormat(ptx) + " -> " + this.formatValue(pty));
            this.focus.selectAll('rect').classed('toolTip', true)
                .style("left", 10)
                .style("top", 10);
        }
        else {
            this.removeSelected();
        }
    };
    LinesComponent.prototype.removeSelected = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]("path.selectedLine").remove();
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]("text.info").remove();
        this.selectedLine = -1;
        this.focus.style('display', 'none');
    };
    LinesComponent.prototype.selectedClick = function () {
        if (this.metricsService.type == 'single' && this.metricsService.object != 'global') {
            return;
        }
        var nn = this.selectedLine;
        //console.log("selected="+nn+" object="+this.object+" ref="+this.lineLabels[nn])
        if (nn >= 0) {
            this.removeSelected();
            this.metricsService.route(this.lines[nn].name);
        }
    };
    LinesComponent.prototype.isVisible = function (ref) {
        if (this.metricsService.lineVisibleMap[ref] === undefined) {
            return true;
        }
        return this.metricsService.lineVisibleMap[ref];
    };
    return LinesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('chart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], LinesComponent.prototype, "chartContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__models_graph_model__["a" /* Graph */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_graph_model__["a" /* Graph */]) === "function" && _b || Object)
], LinesComponent.prototype, "graph", void 0);
LinesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-graph-line',
        template: "<div class=\"d3-chart\" #chart></div>",
        styles: [__webpack_require__("../../../../../src/app/metrics/graph/lines/lines.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_metrics_service__["a" /* MetricsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_metrics_service__["a" /* MetricsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */]) === "function" && _d || Object])
], LinesComponent);

var _a, _b, _c, _d;
/*
// add the X gridlines
this.xAxis = svg.append("g")
  .attr("class", "axisx grid")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(this.x).tickSize(-this.height)) //.tickFormat("")
  .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-55)");

// add the Y gridlines
this.yAxis = svg.append("g")
  .attr("class", "axisy grid")
  .call(d3.axisLeft(this.y).tickSize(-this.width)
    //.tickFormat()
)
*/
//# sourceMappingURL=lines.component.js.map

/***/ }),

/***/ "../../../../../src/app/metrics/metrics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-default {\n  margin-top:5px;\n  margin-bottom:5px;\n}\n\n.legend-item {\n  font-size:12px;\n  float: left;\n  margin: 2px 4px 2px 4px;\n  padding: 2px 5px 2px 5px;\n  border-style: solid;\n  color:black;\n  border-width: 2px;\n}\n\n.line-hidden {\n  color: grey;\n  background-color: lightgrey;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/metrics/metrics.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\" style=\"border-style:none;margin-bottom:5px\">\n      <div class=\"panel-body\" style=\"padding:05px 20px 5px 20px;margin-top:5px\">\n        <div class=\"pull-left\"><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> {{ dashboardName }}</div>\n        <div class=\"pull-right\" style=\"color:blue\">{{ refName }}</div>\n      </div>\n      <div class=\"panel-body\" style=\"padding:5px 20px 5px 20px\">\n        <div class=\"col-lg-12 col-md-12 col-xs-12\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=returnBack()>\n            <i class=\"glyphicon glyphicon-backward\"></i>\n          </button>\n          <div class=\"btn dropdown\" style=\"padding-left:2px;padding-right:2px\">\n            <button class=\"dropdown btn btn-primary dropdown-toggle\" type=\"button\" id=\"timeperiod\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n              Period: {{ periodTimeLabel }}\n              <span class=\"caret\" style=\"cursor:pointer;color:white\"></span>\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"timeperiod\">\n              <li><a (click)=\"setTimePeriod('10 minutes','now-10m', '30s')\">10 minutes</a></li>\n              <li><a (click)=\"setTimePeriod('30 minutes','now-30m', '30s')\">30 minutes</a></li>\n              <li><a (click)=\"setTimePeriod('1 hours','now-60m', '1m')\">1 hour</a></li>\n              <li><a (click)=\"setTimePeriod('5 hours','now-5h', '5m')\">5 hours</a></li>\n              <li><a (click)=\"setTimePeriod('10 hours','now-10h', '10m')\">10 hours</a></li>\n              <li><a (click)=\"setTimePeriod('1 day','now-24h', '30m')\">1 day</a></li>\n              <li><a (click)=\"setTimePeriod('10 days','now-10d', '6h')\">10 days</a></li>\n              <li><a (click)=\"setTimePeriod('30 days','now-30d', '1d')\">30 days</a></li>\n              <li><a (click)=\"setTimePeriod('6 months','now-6M', '7d')\">6 months</a></li>\n              <li><a (click)=\"setTimePeriod('1 year','now-1y', '1M')\">1 year</a></li>\n              <li><a (click)=\"setTimePeriod('2 years','now-2y', '1M')\">2 years</a></li>\n            </div>\n          </div>\n          <div class=\"btn dropdown\" style=\"padding-left:2px;padding-right:2px\">\n            <button class=\"dropdown btn btn-primary dropdown-toggle\" type=\"button\" id=\"refreshperiod\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n              Refresh: {{ periodRefreshLabel }}\n              <span class=\"caret\" style=\"cursor:pointer;color:white\"></span>\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"refreshperiod\">\n              <li><a (click)=\"setRefreshPeriod('10 sec','10s')\">10 sec</a></li>\n              <li><a (click)=\"setRefreshPeriod('30 sec','30s')\">30 sec</a></li>\n              <li><a (click)=\"setRefreshPeriod('1 min','1m')\">1 min</a></li>\n              <li><a (click)=\"setRefreshPeriod('2 min','2m')\">2 min</a></li>\n              <li><a (click)=\"setRefreshPeriod('5 min','5m')\">5 min</a></li>\n              <li><a (click)=\"setRefreshPeriod('10 min', '10m')\">10 min</a></li>\n              <li><a (click)=\"setRefreshPeriod('30 min','30m')\">30 min</a></li>\n              <li><a (click)=\"setRefreshPeriod('1 hour','1h')\">1 hour</a></li>\n            </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=containerAvgToggle()>\n            {{ containerAvg }}\n          </button>\n        </div>\n      </div>\n    </div>\n    <div style=\"position:relative;overflow:hidden\" class=\"graph-container panel panel-default\">\n      <div [style.height.px]=\"graphPanelHeight\" [style.width.px]=\"graphPanelWidth\" class=\"panel-body\" style=\"padding-top:0px;padding-bottom:0px;margin-bottom:0px\">\n        <app-graph-line *ngFor=\"let graph of graphs\"\n          [style.top.px]=\"graph.y\"\n          [style.left.px]=\"graph.x\"\n          [style.width.px]=\"graph.width\"\n          [style.height.px]=\"graph.height\"\n          [graph]=\"graph\">\n        </app-graph-line>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"graph-bottom panel-body\" style=\"padding-top:3px;padding-bottom:3px;margin-top:3px\">\n        <button *ngFor=\"let line of metricsService.lines\"\n          class=\"btn btn-default legend-item\"\n          [style.border-color]=\"line.color\"\n          [class.line-hidden]=\"!metricsService.lineVisibleMap[line.name]\"\n          (click)=\"metricsService.toggleLine(line.name)\">\n          {{ line.displayedName }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/metrics/metrics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_metrics_service__ = __webpack_require__("../../../../../src/app/metrics/services/metrics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docker_stacks_services_docker_stacks_service__ = __webpack_require__("../../../../../src/app/docker-stacks/services/docker-stacks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_stats_request_model__ = __webpack_require__("../../../../../src/app/models/stats-request.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_graph_model__ = __webpack_require__("../../../../../src/app/models/graph.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MetricsComponent = (function () {
    function MetricsComponent(menuService, usersService, metricsService, route, dockerStacksService) {
        this.menuService = menuService;
        this.usersService = usersService;
        this.metricsService = metricsService;
        this.route = route;
        this.dockerStacksService = dockerStacksService;
        this.periodTimeLabel = "10 min";
        this.periodRefreshLabel = "30 sec";
        this.containerAvg = "Total";
        this.name = "";
        this.dashboardName = "";
        this.refName = "";
        this.graphPanelHeight = 250;
        this.graphPanelWidth = 500;
        this.graphs = [];
        var graph_nw = new __WEBPACK_IMPORTED_MODULE_7__models_graph_model__["a" /* Graph */]('', 0, 0, 0, 0, "lines", "cpu");
        graph_nw.fields = ['cpu-usage'];
        graph_nw.yTitle = "usage %";
        this.graphs.push(graph_nw);
        var graph_ne = new __WEBPACK_IMPORTED_MODULE_7__models_graph_model__["a" /* Graph */]('', 0, 0, 0, 0, "lines", "memory");
        graph_ne.fields = ['mem-usage'];
        graph_ne.yTitle = "usage MB";
        this.graphs.push(graph_ne);
        var graph_sw = new __WEBPACK_IMPORTED_MODULE_7__models_graph_model__["a" /* Graph */]('', 0, 0, 0, 0, "lines", "network");
        graph_sw.fields = ['net-total-bytes'];
        graph_sw.yTitle = "total bytes";
        this.graphs.push(graph_sw);
        var graph_se = new __WEBPACK_IMPORTED_MODULE_7__models_graph_model__["a" /* Graph */]('', 0, 0, 0, 0, "lines", "disk io");
        graph_se.fields = ['io-total'];
        graph_se.yTitle = "total bytes";
        this.graphs.push(graph_se);
        this.resizeGraphs(this.menuService.appWindow);
    }
    MetricsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resizeGraphs(this.menuService.appWindow);
        this.menuService.onWindowResize.subscribe(function (win) {
            _this.resizeGraphs(win);
        });
        this.menuService.setItemMenu('metrics', 'View');
        this.routeSub = this.route.params.subscribe(function (params) {
            var object = params['object']; //'stack' or 'service' or 'task'
            var type = params['type']; //'single' or 'multi'
            var ref = params['ref']; //stackName or serviceId or taskId
            //console.log("object="+this.object+" type="+this.type+" ref="+this.ref)
            _this.metricsService.set(object, type, ref);
            _this.computeNames();
            var req = new __WEBPACK_IMPORTED_MODULE_5__models_stats_request_model__["a" /* StatsRequest */]();
            req.allows_infra = _this.usersService.currentUser.sp;
            req.stats_cpu = true;
            req.stats_mem = true;
            req.stats_io = true;
            req.stats_net = true;
            req.period = _this.metricsService.timePeriod;
            req.time_group = _this.metricsService.timeGroup;
            if (object == 'stack') {
                if (type == 'single') {
                    req.filter_stack_name = ref;
                    _this.menuService.setItemMenu('metrics', 'View stack');
                }
                if (type == 'multi') {
                    req.group = 'stack_name';
                    _this.menuService.setItemMenu('metrics', 'View stacks');
                }
            }
            if (object == 'service') {
                if (type == 'single') {
                    req.filter_service_name = ref;
                    _this.menuService.setItemMenu('metrics', 'View service');
                }
                if (type == 'multi') {
                    req.group = 'service_name';
                    req.filter_stack_name = ref;
                    _this.menuService.setItemMenu('metrics', 'View services');
                }
            }
            if (object == 'task') {
                if (type == 'single') {
                    req.filter_task_id = ref;
                    _this.menuService.setItemMenu('metrics', 'View container');
                }
                if (type == 'multi') {
                    req.group = 'container_short_name';
                    req.filter_service_name = ref;
                    _this.menuService.setItemMenu('metrics', 'View containers');
                }
                if (object == 'node') {
                    req.group = 'node_id';
                    if (ref != '') {
                        req.filter_node_id = ref;
                        _this.menuService.setItemMenu('metrics', 'View node');
                    }
                    else {
                        _this.menuService.setItemMenu('metrics', 'View nodes');
                    }
                }
            }
            //console.log(req)
            _this.metricsService.setHistoricRequest(req, _this.metricsService.periodRefresh);
        });
    };
    MetricsComponent.prototype.ngOnDestroy = function () {
        this.metricsService.cancelRequests();
    };
    MetricsComponent.prototype.containerAvgToggle = function () {
        if (this.containerAvg == 'Total') {
            this.containerAvg = "Containers Avg";
            this.metricsService.setContainerAvg(true);
        }
        else {
            this.containerAvg = "Total";
            this.metricsService.setContainerAvg(false);
        }
    };
    MetricsComponent.prototype.setTimePeriod = function (label, period, group) {
        this.periodTimeLabel = label;
        this.metricsService.setTimePeriod(period, group);
    };
    MetricsComponent.prototype.setRefreshPeriod = function (label, period) {
        this.periodRefreshLabel = label;
        this.metricsService.setRefreshPeriod(period);
    };
    MetricsComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    MetricsComponent.prototype.computeNames = function () {
        //console.log("compute.name: "+[this.metricsService.object, this.metricsService.type, this.metricsService.ref])
        this.dashboardName = this.metricsService.object;
        this.refName = this.metricsService.ref;
        if (this.metricsService.object == 'global') {
            this.dashboardName = "Global";
            this.refName = "";
        }
        if (this.metricsService.object == 'stack') {
            this.dashboardName = "All stacks";
        }
        if (this.metricsService.object == 'service') {
            this.dashboardName = "Services of stack:";
        }
        if (this.metricsService.object == 'task') {
            this.dashboardName = "Containers of service:";
        }
        if (this.metricsService.object == 'node') {
            if (this.metricsService.ref == "") {
                this.dashboardName = "All nodes";
            }
            else {
                this.dashboardName = "Node: " + this.metricsService.ref;
            }
        }
    };
    //[style.height.px]="parentdiv.offsetHeight"
    MetricsComponent.prototype.resizeGraphs = function (win) {
        //let cww = $('.graph-container').width()
        var cww = win.width - 25 - this.menuService.paddingLeftMenu;
        var chh = win.height - 240;
        //console.log("Window: "+win.width+","+win.height)
        //console.log("Container: "+cww+","+chh)
        this.graphPanelHeight = chh;
        this.graphPanelWidth = cww;
        var xx = 10;
        var yy = 10;
        for (var _i = 0, _a = this.graphs; _i < _a.length; _i++) {
            var graph = _a[_i];
            graph.width = Math.floor(cww / 2 - 20);
            graph.height = Math.floor(chh / 2 - 15);
            graph.x = Math.floor(xx);
            graph.y = Math.floor(yy);
            xx = xx + cww / 2 - 10;
            if (xx + graph.width > cww) {
                xx = 10;
                yy = yy + chh / 2 - 15;
            }
            //console.log(graph)
        }
    };
    return MetricsComponent;
}());
MetricsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/metrics/metrics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/metrics/metrics.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_metrics_service__["a" /* MetricsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_metrics_service__["a" /* MetricsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__docker_stacks_services_docker_stacks_service__["a" /* DockerStacksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__docker_stacks_services_docker_stacks_service__["a" /* DockerStacksService */]) === "function" && _e || Object])
], MetricsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=metrics.component.js.map

/***/ }),

/***/ "../../../../../src/app/metrics/models/graph-data-answer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphDataAnswer; });
var GraphDataAnswer = (function () {
    function GraphDataAnswer(lines, data) {
        this.lines = lines;
        this.data = data;
    }
    return GraphDataAnswer;
}());

//# sourceMappingURL=graph-data-answer.model.js.map

/***/ }),

/***/ "../../../../../src/app/metrics/models/graph-line.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphLine; });
var GraphLine = (function () {
    function GraphLine(name, color) {
        this.name = name;
        var list = name.split('_');
        if (list.length > 1) {
            this.displayedName = list[1];
            for (var ii = 2; ii < list.length; ii++) {
                this.displayedName += '_' + list[ii];
            }
        }
        else {
            this.displayedName = name;
        }
        this.color = color;
    }
    return GraphLine;
}());

//# sourceMappingURL=graph-line.model.js.map

/***/ }),

/***/ "../../../../../src/app/metrics/services/metrics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_graph_historic_data_model__ = __webpack_require__("../../../../../src/app/models/graph-historic-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_graph_data_answer_model__ = __webpack_require__("../../../../../src/app/metrics/models/graph-data-answer.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_graph_line_model__ = __webpack_require__("../../../../../src/app/metrics/models/graph-line.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_colors_service__ = __webpack_require__("../../../../../src/app/services/colors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MetricsService = (function () {
    function MetricsService(httpService, menuService, colorsService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.colorsService = colorsService;
        this.histoData = [];
        this.lineVisibleMap = {};
        this.lines = [];
        this.onNewData = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.timePeriod = "now-10m";
        this.timeGroup = "30s";
        this.periodRefresh = 30;
        this.object = "";
        this.type = "";
        this.ref = "";
    }
    MetricsService.prototype.setHistoricRequest = function (request, period) {
        var _this = this;
        this.statsRequest = request;
        if (period < 5) {
            period = 5;
        }
        this.updateHistoricData();
        this.cancelRequests();
        this.menuService.setCurrentTimer(setInterval(function () { return _this.updateHistoricData(); }, period * 1000));
    };
    MetricsService.prototype.cancelRequests = function () {
        this.menuService.clearCurrentTimer();
    };
    MetricsService.prototype.getColor = function (name) {
        return this.colorsService.getColor(this.object, name, undefined);
    };
    MetricsService.prototype.getHistoricData = function (fields, object, graphType) {
        var _this = this;
        var data = [];
        var lines = [];
        //console.log(fields)
        //console.log("type="+graphType+" data.length="+this.histoData.length)
        //console.log(this.histoData)
        if (graphType == 'single') {
            for (var ii = 0; ii < fields.length; ii++) {
                var name = fields[ii];
                lines.push(new __WEBPACK_IMPORTED_MODULE_3__models_graph_line_model__["a" /* GraphLine */](name, 'dodgerBlue')); //this.graphColors[ii]))
                if (this.lineVisibleMap[name] === undefined) {
                    this.lineVisibleMap[name] = true;
                }
            }
            this.histoData.forEach(function (ele) {
                var ret = [];
                for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                    var field = fields_1[_i];
                    ret.push(ele.values[field]);
                }
                var newEle = new __WEBPACK_IMPORTED_MODULE_1__models_graph_historic_data_model__["a" /* GraphHistoricData */](ele.date);
                newEle.graphValues = ret;
                data.push(newEle);
            });
        }
        else {
            if (this.histoData.length > 0) {
                var date_1 = this.histoData[0].date;
                var ret_1 = [];
                var localLineRefMap_1 = {};
                this.histoData.forEach(function (ele) {
                    if (date_1.getTime() !== ele.date.getTime()) {
                        var newEle_1 = new __WEBPACK_IMPORTED_MODULE_1__models_graph_historic_data_model__["a" /* GraphHistoricData */](ele.date);
                        newEle_1.graphValues = ret_1;
                        data.push(newEle_1);
                        date_1 = ele.date;
                        ret_1 = [];
                    }
                    if (ele.name.toLowerCase() != 'nostack' && ele.name.toLowerCase() != 'noservice') {
                        ret_1.push(ele.values[fields[0]]);
                        if (localLineRefMap_1[ele.name] === undefined) {
                            localLineRefMap_1[ele.name] = ele.name;
                            var line = new __WEBPACK_IMPORTED_MODULE_3__models_graph_line_model__["a" /* GraphLine */](ele.name, _this.colorsService.getColor(object, ele.name, undefined));
                            lines.push(line);
                            if (_this.lineVisibleMap[line.name] === undefined) {
                                _this.lineVisibleMap[line.name] = true;
                            }
                        }
                    }
                });
                var newEle = new __WEBPACK_IMPORTED_MODULE_1__models_graph_historic_data_model__["a" /* GraphHistoricData */](date_1);
                newEle.graphValues = ret_1;
                data.push(newEle);
            }
        }
        //console.log(lines)
        //console.log(data)
        this.lines = lines;
        return new __WEBPACK_IMPORTED_MODULE_2__models_graph_data_answer_model__["a" /* GraphDataAnswer */](lines, data);
    };
    MetricsService.prototype.updateHistoricData = function () {
        var _this = this;
        this.statsRequest.format = true;
        this.httpService.statsHistoric(this.statsRequest).subscribe(function (data) {
            _this.histoData = data;
            //console.log(data)
            _this.onNewData.next();
        }, function (error) {
            //console.log("loadStacksError")
            console.log(error);
        });
    };
    MetricsService.prototype.set = function (object, type, ref) {
        this.object = object;
        this.type = type;
        this.ref = ref;
    };
    MetricsService.prototype.setTimePeriod = function (period, group) {
        this.timePeriod = period;
        this.timeGroup = group;
        if (this.statsRequest) {
            this.statsRequest.period = period;
            this.statsRequest.time_group = group;
            this.updateHistoricData();
        }
    };
    MetricsService.prototype.setContainerAvg = function (val) {
        this.statsRequest.avg = val;
        this.updateHistoricData();
    };
    MetricsService.prototype.setRefreshPeriod = function (period) {
        var _this = this;
        this.periodRefresh = parseInt(period);
        this.menuService.clearCurrentTimer();
        this.menuService.setCurrentTimer(setInterval(function () { return _this.updateHistoricData(); }, parseInt(period) * 1000));
    };
    MetricsService.prototype.toggleLine = function (name) {
        this.lineVisibleMap[name] = !this.lineVisibleMap[name];
        this.onNewData.next();
    };
    MetricsService.prototype.route = function (ref) {
        if (this.object == 'global') {
            if (this.type == 'multi') {
                this.menuService.navigate(['/amp', 'metrics', 'stack', 'multi', 'all']);
            }
            else {
                this.menuService.navigate(['/amp', 'metrics', 'stack', 'multi', 'all']);
            }
        }
        if (this.object == 'stack') {
            if (this.type == 'multi') {
                this.menuService.navigate(['/amp', 'metrics', 'service', 'multi', ref]);
            }
            else {
                this.menuService.navigate(['/amp', 'metrics', 'service', 'single', this.ref]);
            }
        }
        if (this.object == 'service') {
            if (this.type == 'multi') {
                this.menuService.navigate(['/amp', 'metrics', 'task', 'multi', ref]);
            }
            else {
                this.menuService.navigate(['/amp', 'metrics', 'task', 'single', this.ref]);
            }
        }
    };
    return MetricsService;
}());
MetricsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_colors_service__["a" /* ColorsService */]) === "function" && _c || Object])
], MetricsService);

var _a, _b, _c;
//# sourceMappingURL=metrics.service.js.map

/***/ }),

/***/ "../../../../../src/app/models/app-window.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWindow; });
var AppWindow = (function () {
    function AppWindow(ww, hh) {
        this.width = ww;
        this.height = hh;
    }
    return AppWindow;
}());

//# sourceMappingURL=app-window.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/graph-color.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphColor; });
var GraphColor = (function () {
    function GraphColor(name, graphId, color) {
        this.name = name;
        this.graphId = graphId;
        this.color = color;
    }
    return GraphColor;
}());

//# sourceMappingURL=graph-color.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/graph-current-data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphCurrentData; });
var GraphCurrentData = (function () {
    function GraphCurrentData(group, values) {
        this.group = group;
        this.values = values;
        this.valueUnit = 0;
        this.valueUnitx = 0;
        this.valueUnity = 0;
    }
    return GraphCurrentData;
}());

//# sourceMappingURL=graph-current-data.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/graph-historic-answer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphHistoricAnswer; });
var GraphHistoricAnswer = (function () {
    function GraphHistoricAnswer(names, data) {
        this.names = names;
        this.data = data;
    }
    return GraphHistoricAnswer;
}());

//# sourceMappingURL=graph-historic-answer.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/graph-historic-data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphHistoricData; });
var GraphHistoricData = (function () {
    function GraphHistoricData(date) {
        this.date = date;
        this.graphValues = [];
        this.graphValuesUnit = [];
    }
    return GraphHistoricData;
}());

//# sourceMappingURL=graph-historic-data.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/graph.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graph; });
var Graph = (function () {
    function Graph(id, x, y, w, h, type, title) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.type = type;
        this.fields = [];
        this.title = title;
        this.border = true;
        this.modeParameter = false;
        this.topNumber = 3;
        this.alert = false;
        this.alertMin = "";
        this.alertMax = "";
        this.criterion = "";
        this.criterionValue = "";
        this.stackedAreas = true;
        this.legendNames = [];
        this.legendColors = [];
        this.containerAvg = false;
        this.roundedBox = true;
    }
    return Graph;
}());

//# sourceMappingURL=graph.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/item-menu.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemMenu; });
var ItemMenu = (function () {
    function ItemMenu(name, description) {
        this.name = name;
        this.description = description;
    }
    return ItemMenu;
}());

//# sourceMappingURL=item-menu.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/stats-request.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsRequest; });
// copy amp stats proto file
var StatsRequest = (function () {
    function StatsRequest() {
        this.allows_infra = true;
    }
    return StatsRequest;
}());

//# sourceMappingURL=stats-request.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/swarm.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Swarm; });
var Swarm = (function () {
    function Swarm(name, organization) {
        this.name = name;
        this.organization = organization;
    }
    return Swarm;
}());

//# sourceMappingURL=swarm.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.member = undefined;
        this.verified = false;
        this.checked = false;
        this.pendingOrganizations = [];
        this.label = name;
        this.sp = false;
        if (role == "owner") {
            this.label += " (owner)";
        }
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/nodes/models/node.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
var Node = (function () {
    function Node(id) {
        this.id = id;
        this.shortId = id.substring(0, 12);
        this.labels = {};
        this.labelNames = [];
    }
    return Node;
}());

//# sourceMappingURL=node.model.js.map

/***/ }),

/***/ "../../../../../src/app/nodes/nodes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nodes/nodes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div>\n          <div class=\"pull-left\">\n            <span class=\"fa fa-server\" aria-hidden=\"true\"></span> Nodes</div>\n        </div>\n      </div>\n\n      <div class=\"panel-body\">\n        <div classes=\"col-lg-12\">\n          <div class=\"pull-left\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n              <button type=\"button\" class=\"btn btn-primary\"\n                [disabled]=\"nodesService.currentNode.id==''\"\n                (click)=\"logs(nodesService.currentNode.id)\">\n                <i class=\"glyphicon glyphicon-list-alt space-right\"></i>\n                Logs\n              </button>\n              <button type=\"button\" class=\"btn btn-primary\"\n                (click)=\"metrics(nodesService.currentNode.id)\">\n                <i class=\"glyphicon glyphicon-stats space-right\"></i>\n                Metrics\n              </button>\n            </div>\n          </div>\n          <div class=\"pull-right\">\n            <input type=\"text\"\n              #filter\n              id=\"filter\"\n              placeholder=\"Filter...\"\n              class=\"form-control\"\n              (keyup)=\"listService.filter(filter.value)\"/>\n          </div>\n        </div>\n      </div>\n\n      <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ message }}</span>\n\n      <div class=\"row\" [style.height.px]=\"listHeight\" style=\"overflow-y:scroll;margin-bottom:10px\">\n        <div style=\"margin-bottom:400px\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>\n                    <a>\n                      Labels\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Role\n                      <span (click)=\"listService.order('role', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('role', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Id\n                      <span (click)=\"listService.order('id', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('id', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Hostname\n                      <span (click)=\"listService.order('hostname', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('hostname', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Archi.\n                      <span (click)=\"listService.order('architecture', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('architecture', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      OS\n                      <span (click)=\"listService.order('os', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('os', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Engine\n                      <span (click)=\"listService.order('engine', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('engine', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Status\n                      <span (click)=\"listService.order('status', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('status', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Avail.\n                      <span (click)=\"listService.order('availability', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('availability', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Addr\n                      <span (click)=\"listService.order('addr', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('addr', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Reach.\n                      <span (click)=\"listService.order('reachability', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('reachability', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr (click)=\"nodesService.setCurrentNode(node.id)\" [style.color]=\"getColor(node)\" *ngFor=\"let node of listService.getData()\">\n                  <td><input type=\"checkbox\" [checked]=\"nodesService.currentNode.id===node.id\"></td>\n                  <td>\n                    <div class=\"btn dropdown\" style=\"padding:0px\">\n                      <button class=\"dropdown dropdown-toggle\" id=\"topNumber\" data-toggle=\"dropdown\" style=\"background-color:white;border:none\">\n                        {{ node.labelNames.length }}\n                        <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n                      </button>\n                      <div class=\"dropdown-menu\" style=\"position:absolute\">\n                        <li *ngFor=\"let name of node.labelNames\" (click)=\"listService.filter('label:'+name+':'+node.labels[name])\"><a>{{name}} = {{node.labels[name]}}</a></li>\n                      </div>\n                    </div>\n                  </td>\n                  <td>{{ node.role }}</td>\n                  <td>{{ node.shortId }}</td>\n                  <td>{{ node.hostname }}</td>\n                  <td>{{ node.architecture }}</td>\n                  <td>{{ node.os }}</td>\n                  <td>{{ node.engine }}</td>\n                  <td>{{ node.status }}</td>\n                  <td>{{ node.availability }}</td>\n                  <td>{{ node.addr }}</td>\n                  <td>{{ node.reachability }}</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nodes/nodes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_nodes_service__ = __webpack_require__("../../../../../src/app/nodes/services/nodes.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NodesComponent = (function () {
    function NodesComponent(listService, nodesService, menuService, httpService) {
        this.listService = listService;
        this.nodesService = nodesService;
        this.menuService = menuService;
        this.httpService = httpService;
        listService.setFilterFunction(this.nodesService.match);
    }
    NodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.setItemMenu('nodes', 'List');
        this.nodesService.onNodesLoaded.subscribe(function () {
            _this.listService.setData(_this.nodesService.nodes);
        });
        this.menuService.onRefreshClicked.subscribe(function () {
            _this.nodesService.loadNodes(true);
        });
        this.nodesService.loadNodes(false);
    };
    NodesComponent.prototype.getColor = function (node) {
        if (node.reachability == 'unreachable' || node.status == 'disconnected') {
            return 'red';
        }
        else if (node.reachability == 'unknown' || node.status == 'unknown') {
            return 'orange';
        }
        else if (node.status == 'down') {
            return 'lightgrey';
        }
        else if (node.role == 'manager' || node.role == 'leader') {
            return 'limegreen';
        }
        return 'green';
    };
    NodesComponent.prototype.metrics = function (id) {
        this.menuService.navigate(['/amp', 'metrics', 'node', 'single', id]);
    };
    NodesComponent.prototype.logs = function (id) {
        this.menuService.navigate(['/amp', 'logs', 'node', id]);
    };
    return NodesComponent;
}());
NodesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-nodes',
        template: __webpack_require__("../../../../../src/app/nodes/nodes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nodes/nodes.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_nodes_service__["a" /* NodesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_nodes_service__["a" /* NodesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _d || Object])
], NodesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nodes.component.js.map

/***/ }),

/***/ "../../../../../src/app/nodes/services/nodes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_node_model__ = __webpack_require__("../../../../../src/app/nodes/models/node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NodesService = (function () {
    function NodesService(httpService, menuService) {
        this.httpService = httpService;
        this.menuService = menuService;
        this.nodes = [];
        this.emptyNode = new __WEBPACK_IMPORTED_MODULE_1__models_node_model__["a" /* Node */]("");
        this.currentNode = this.emptyNode;
        this.onNodesLoaded = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.onNodesError = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    NodesService.prototype.match = function (item, value) {
        if (value.startsWith('label:')) {
            var param = value.split(':');
            for (var _i = 0, _a = item.labelNames; _i < _a.length; _i++) {
                var lname = _a[_i];
                if (lname == param[1] && item.labels[lname] == param[2]) {
                    return true;
                }
            }
            return false;
        }
        if (item.id && item.id.includes(value)) {
            return true;
        }
        if (item.shortId && item.shortId.includes(value)) {
            return true;
        }
        if (item.name && item.name.includes(value)) {
            return true;
        }
        if (item.role && item.role.includes(value)) {
            return true;
        }
        if (item.hostname && item.hostname.includes(value)) {
            return true;
        }
        if (item.architecture && item.architecture.includes(value)) {
            return true;
        }
        if (item.os && item.os.includes(value)) {
            return true;
        }
        if (item.engine && item.engine.includes(value)) {
            return true;
        }
        if (item.status && item.status.includes(value)) {
            return true;
        }
        if (item.availability && item.availability.includes(value)) {
            return true;
        }
        if (item.addr && item.addr.includes(value)) {
            return true;
        }
        if (item.reachability && item.reachability.includes(value)) {
            return true;
        }
        return false;
    };
    NodesService.prototype.loadNodes = function (refresh) {
        var _this = this;
        if (!refresh && this.nodes.length > 0) {
            this.onNodesLoaded.next();
            return;
        }
        this.httpService.nodes().subscribe(function (data) {
            _this.nodes = data;
            _this.onNodesLoaded.next();
        }, function (error) {
            var data = error.json();
            _this.onNodesError.next(data.error);
        });
    };
    NodesService.prototype.setCurrentNode = function (id) {
        if (this.currentNode.id == id) {
            this.currentNode = this.emptyNode;
            return;
        }
        this.currentNode = this.emptyNode;
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node.id === id) {
                this.currentNode = node;
            }
        }
    };
    return NodesService;
}());
NodesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
], NodesService);

var _a, _b;
//# sourceMappingURL=nodes.service.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/models/member.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Member; });
var Member = (function () {
    function Member(name, role) {
        this.userName = name;
        if (role === undefined) {
            this.role = "Member";
        }
        else if (role == "ORGANIZATION_MEMBER") {
            this.role = "Member";
        }
        else if (role == "ORGANIZATION_OWNER") {
            this.role = "Owner";
        }
        else {
            this.role = ".";
        }
        this.status = 0;
        this.saved = false;
        this.saveError = "";
    }
    Member.prototype.getLabeledName = function () {
        if (this.role != "Owner") {
            return this.userName;
        }
        else {
            return this.userName + " (owner)";
        }
    };
    return Member;
}());

//# sourceMappingURL=member.model.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/models/organization-resource.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationResource; });
var labels = ['read', 'write', 'admin'];
var OrganizationResource = (function () {
    function OrganizationResource(id, type, name) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.setAuthorization(0);
        this.status = 0;
        this.saved = false;
        this.saveError = "";
    }
    OrganizationResource.prototype.setAuthorization = function (perm) {
        this.permissionLevel = perm;
        if (perm < 0 || perm >= labels.length) {
            this.permissionLevel = 0;
        }
        this.permissionLabel = labels[this.permissionLevel];
    };
    OrganizationResource.prototype.getLabeledName = function () {
        return this.type + ":" + this.name;
    };
    return OrganizationResource;
}());

//# sourceMappingURL=organization-resource.model.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/models/organization.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Organization; });
var Organization = (function () {
    function Organization(name, email) {
        this.name = name;
        this.email = email;
        this.members = [];
        this.resources = [];
        this.teams = [];
    }
    return Organization;
}());

//# sourceMappingURL=organization.model.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/models/team.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = (function () {
    function Team(name) {
        this.name = name;
        this.members = [];
        this.resources = [];
    }
    return Team;
}());

//# sourceMappingURL=team.model.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/organization-create/organization-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/organizations/organization-create/organization-create.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <div class=\"panel panel-default\" style=\"margin-bottom:5px\">\n      <div class=\"panel-body\" style=\"padding-bottom:5px\">\n        <div class=\"panel-body\">\n          <div>\n            <div class=\"pull-left\">\n              <span class=\"glyphicon glyphicon-book\" aria-hidden=\"true\"></span> Organization creation</div>\n          </div>\n        </div>\n        <div style=\"margin: 10px 30px 10px 30px\">\n          <form class=\"form-horizontal\" (ngSubmit)=\"create(f)\" #f=\"ngForm\">\n            <div class=\"form-group\">\n              <input\n                ngModel required\n                type=\"text\"\n                class=\"form-control\"\n                pattern=\"^[a-z0-9\\-]{3,128}$\"\n                name=\"name\"\n                id=\"name\"\n                placeholder=\"name\"\n                #name=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">Name should be lowercase and must not start by a number</span>\n            </div>\n\n            <div class=\"form-group\">\n              <input\n                ngModel required email\n                type=\"email\"\n                class=\"form-control\"\n                name=\"email\"\n                id=\"email\"\n                placeholder=\"email\"\n                #email=\"ngModel\">\n              <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email</span>\n            </div>\n\n            <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ messageError }}</span>\n\n            <div class=\"panel panel-default\" style=\"border-style:none\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                <button [disabled]=\"!f.valid\" type=\"button\" class=\"btn btn-primary\" autofocus type=\"submit\"><i class=\"glyphicon glyphicon-book\"></i> Create</button>\n                <button class=\"btn btn-primary\" (click)=\"cancel()\">\n                  <i class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></i>\n                  Cancel\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/organizations/organization-create/organization-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__organizations_models_organization_model__ = __webpack_require__("../../../../../src/app/organizations/models/organization.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrganizationCreateComponent = (function () {
    function OrganizationCreateComponent(organizationsService, usersService, menuService, httpService) {
        this.organizationsService = organizationsService;
        this.usersService = usersService;
        this.menuService = menuService;
        this.httpService = httpService;
        this.organization = new __WEBPACK_IMPORTED_MODULE_1__organizations_models_organization_model__["a" /* Organization */]("", "");
        this.messageError = "";
    }
    OrganizationCreateComponent.prototype.ngOnInit = function () {
        this.menuService.setItemMenu('organization', 'Create');
    };
    OrganizationCreateComponent.prototype.create = function (form) {
        var _this = this;
        this.organization.name = form.value.name;
        this.organization.email = form.value.email;
        this.menuService.waitingCursor(true);
        this.httpService.createOrganization(this.organization.name, this.organization.email).subscribe(function () {
            _this.menuService.waitingCursor(false);
            _this.httpService.userOrganization(_this.usersService.currentUser.name).subscribe(function (data) {
                _this.organizationsService.organizations = data;
                _this.menuService.navigate(['/amp', 'organizations', _this.organization.name]);
            }, function (err) {
                var error = err.json();
                _this.messageError = "Organization created, but: " + error.error;
                console.log(err);
            });
        }, function (err) {
            _this.menuService.waitingCursor(false);
            var error = err.json();
            _this.messageError = error.error;
            console.log(error);
        });
    };
    OrganizationCreateComponent.prototype.cancel = function () {
        this.menuService.returnToPreviousPath();
    };
    return OrganizationCreateComponent;
}());
OrganizationCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-organization-create',
        template: __webpack_require__("../../../../../src/app/organizations/organization-create/organization-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/organizations/organization-create/organization-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* HttpService */]) === "function" && _d || Object])
], OrganizationCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=organization-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/organization/organization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/organizations/organization/organization.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-bottom:5px\">\n    <div class=\"panel panel-default\" style=\"margin-bottom:5px\">\n      <div class=\"panel-body\" style=\"padding-bottom:5px\">\n        <div class=\"form-group\">\n          <div>\n            <div class=\"pull-left\">\n              <span class=\"glyphicon glyphicon-book space-right\" aria-hidden=\"true\"></span>\n              Organization\n            </div>\n            <div class=\"pull-left\" style=\"color:blue;margin-left:10px\">{{name}}</div>\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px\">\n          <div class=\"panel panel-default\" style=\"border-style:none\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n              <button class=\"btn btn-primary\" (click)=\"userList()\">\n                <i class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></i>\n                Users\n              </button>\n              <button appDropdown [disabled]=\"updated\" type=\"button\" class=\"btn btn-primary\">\n                <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n                Teams\n                <span class=\"caret\"></span>\n                <ul class=\"dropdown-menu\">\n                  <li><a [routerLink]=\"['/amp/organizations', organization.name, 'team', 'create']\">Create team</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li *ngFor=\"let team of organization.teams\">\n                    <a [routerLink]=\"['/amp/organizations', name, 'team', team.name]\">{{ team.name }}</a>\n                  </li>\n                </ul>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\" style=\"padding-top:5px\">\n\n        <div class=\"col-sm-4\" style=\"height=100%\">\n          <div class=\"list-group\">\n            <input\n              #filter1\n              type=\"text\"\n              id=\"filter\"\n              placeholder=\"Filter...\"\n              class=\"form-control input-sm\"\n              style=\"margin-bottom:15px\"\n              (keyup)=\"listUserService.filter(filter1.value)\"/>\n            <a class=\"disabled list-group-item\">Available users</a>\n            <a *ngFor=\"let user of listUserService.getData()\" (click)=\"addUser(user)\" class=\"list-group-item\" style=\"padding:5px;color:blue\">\n              {{user.getLabeledName()}}\n              <div *ngIf=\"user.saved && user.saveError===''\" style=\"color:green\" class=\"menu-icon glyphicon glyphicon-ok space-left\"></div>\n              <div *ngIf=\"user.saved && user.saveError!==''\" style=\"color:red\" class=\"menu-icon glyphicon glyphicon-remove space-left space-right\"></div>\n              <div *ngIf=\"user.saved && user.saveError!==''\" style=\"color:red\">{{user.saveError}}</div>\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4 btn-group btn-group-vertical\" align=\"center\" style=\"margin-top:50px\">\n          <div style=\"\">\n            <a (click)=\"addAll()\" style=\"background-color:white;display:block;margin:20px\">\n              Add all\n              <i class=\"glyphicon glyphicon-chevron-right\"></i>\n            </a>\n            <a (click)=\"removeAll()\" style=\"background-color:white;display:block;margin:20px\">\n              <i class=\"glyphicon glyphicon-chevron-left\"></i>\n              Remove all\n            </a>\n            <button [disabled]=\"nbSaveInProgress>0\" class=\"btn btn-primary\" (click)=\"applyUsers()\">\n              <i class=\"glyphicon glyphicon-send\" aria-hidden=\"true\"></i>\n              Apply\n            </button>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"list-group\">\n            <input\n              #filter2\n              type=\"text\"\n              id=\"filter\"\n              placeholder=\"Filter...\"\n              class=\"form-control input-sm\"\n              style=\"margin-bottom:15px\"\n              (keyup)=\"listUserAddedService.filter(filter2.value)\"/>\n            <a class=\"disabled list-group-item\">Organization users</a>\n            <a *ngFor=\"let addedUser of listUserAddedService.getData()\" (click)=\"removeUser(addedUser)\" class=\"list-group-item\" style=\"padding:5px;color:blue\">\n              {{addedUser.getLabeledName()}}\n              <div *ngIf=\"addedUser.saved && addedUser.saveError===''\" style=\"color:green\" class=\"menu-icon glyphicon glyphicon-ok space-left\"></div>\n              <div *ngIf=\"addedUser.saved && addedUser.saveError!==''\" style=\"color:red\" class=\"menu-icon glyphicon glyphicon-remove space-left space-right\"></div>\n              <div *ngIf=\"addedUser.saved && addedUser.saveError!==''\" style=\"color:red\">{{addedUser.saveError}}</div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/organizations/organization/organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organizations_models_organization_model__ = __webpack_require__("../../../../../src/app/organizations/models/organization.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrganizationComponent = (function () {
    function OrganizationComponent(route, usersService, organizationsService, menuService, httpService) {
        this.route = route;
        this.usersService = usersService;
        this.organizationsService = organizationsService;
        this.menuService = menuService;
        this.httpService = httpService;
        this.organization = new __WEBPACK_IMPORTED_MODULE_5__organizations_models_organization_model__["a" /* Organization */]("", "");
        this.name = "";
        this.modeCreation = false;
        this.listUserService = new __WEBPACK_IMPORTED_MODULE_3__services_list_service__["a" /* ListService */]();
        this.listUserAddedService = new __WEBPACK_IMPORTED_MODULE_3__services_list_service__["a" /* ListService */]();
        this.addedUsers = [];
        this.users = [];
        this.initialUserList = [];
        this.updated = false;
        this.nbSaveInProgress = 0;
        this.listUserService.setFilterFunction(this.match);
        this.listUserAddedService.setFilterFunction(this.match);
    }
    OrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.setItemMenu('organization', 'Edit');
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.name = params['orgName'];
            for (var _i = 0, _a = _this.organizationsService.organizations; _i < _a.length; _i++) {
                var org = _a[_i];
                if (org.name == _this.name) {
                    _this.organization = org;
                    _this.organizationsService.setCurrentOrganization(_this.organization);
                }
            }
            if (_this.organization) {
                _this.initialUserList = _this.usersService.getAllNoMembers(_this.organization.members);
                _this.addedUsers = _this.organization.members.slice();
                _this.users = _this.initialUserList.slice();
                _this.listUserAddedService.setData(_this.addedUsers);
                _this.listUserService.setData(_this.users);
            }
        });
    };
    OrganizationComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    OrganizationComponent.prototype.match = function (item, value) {
        if (value == '' || item.userName === '') {
            return true;
        }
        if (item.userName && item.userName.includes(value)) {
            return true;
        }
        return false;
    };
    OrganizationComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    OrganizationComponent.prototype.addUser = function (user) {
        user.status++;
        user.saved = false;
        var list = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.userName !== user.userName) {
                list.push(item);
            }
        }
        this.users = list;
        this.listUserService.setData(this.users);
        this.addedUsers.push(user);
        this.listUserAddedService.setData(this.addedUsers);
        this.updated = this.isUpdated();
    };
    OrganizationComponent.prototype.removeUser = function (user) {
        user.status--;
        user.saved = false;
        var list = [];
        for (var _i = 0, _a = this.addedUsers; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.userName !== user.userName) {
                list.push(item);
            }
        }
        this.addedUsers = list;
        this.listUserAddedService.setData(this.addedUsers);
        this.users.push(user);
        this.listUserService.setData(this.users);
        this.updated = this.isUpdated();
    };
    OrganizationComponent.prototype.addAll = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            this.addUser(user);
        }
        this.updated = this.isUpdated();
    };
    OrganizationComponent.prototype.removeAll = function () {
        for (var _i = 0, _a = this.addedUsers; _i < _a.length; _i++) {
            var user = _a[_i];
            this.removeUser(user);
        }
        this.updated = this.isUpdated();
    };
    OrganizationComponent.prototype.isUpdated = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.status !== 0) {
                return true;
            }
        }
        for (var _b = 0, _c = this.addedUsers; _b < _c.length; _b++) {
            var user = _c[_b];
            if (user.status !== 0) {
                return true;
            }
        }
        return false;
    };
    OrganizationComponent.prototype.applyUsers = function () {
        var _this = this;
        this.nbSaveInProgress = 0;
        this.menuService.waitingCursor(true);
        var _loop_1 = function (user) {
            user.saved = false;
            user.saveError = "";
            if (user.status == -1) {
                this_1.nbSaveInProgress++;
                this_1.httpService.removeUserFromOrganization(this_1.organization.name, user.userName).subscribe(function () {
                    user.saved = true;
                    user.status = 0;
                    user.saveError = "";
                    _this.decrSaveInProgress();
                }, function (error) {
                    console.log(error);
                    try {
                        var data = JSON.parse(error._body);
                        user.saveError = data.error;
                    }
                    catch (errorj) {
                        console.log(errorj);
                    }
                    _this.addUser(user);
                    user.saved = true;
                    _this.decrSaveInProgress();
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            _loop_1(user);
        }
        var _loop_2 = function (user) {
            user.saved = false;
            user.saveError = "";
            if (user.status == 1) {
                this_2.nbSaveInProgress++;
                this_2.httpService.addUserToOrganization(this_2.organization.name, user.userName).subscribe(function () {
                    user.saved = true;
                    user.saveError = "";
                    user.status = 0;
                    _this.decrSaveInProgress();
                }, function (error) {
                    console.log(error);
                    try {
                        var data = JSON.parse(error._body);
                        user.saveError = data.error;
                    }
                    catch (errorj) {
                        console.log(errorj);
                    }
                    _this.removeUser(user);
                    user.saved = true;
                    _this.decrSaveInProgress();
                });
            }
        };
        var this_2 = this;
        for (var _b = 0, _c = this.addedUsers; _b < _c.length; _b++) {
            var user = _c[_b];
            _loop_2(user);
        }
        if (this.nbSaveInProgress === 0) {
            this.menuService.waitingCursor(false);
        }
        this.organization.members = this.addedUsers.slice();
        this.updated = false;
    };
    OrganizationComponent.prototype.decrSaveInProgress = function () {
        this.nbSaveInProgress--;
        if (this.nbSaveInProgress === 0) {
            this.menuService.waitingCursor(false);
        }
    };
    OrganizationComponent.prototype.userList = function () {
        this.menuService.navigate(['/amp', 'users', this.organization.name]);
    };
    return OrganizationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], OrganizationComponent.prototype, "form", void 0);
OrganizationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-organization',
        template: __webpack_require__("../../../../../src/app/organizations/organization/organization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/organizations/organization/organization.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_menu_service__["a" /* MenuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_http_service__["a" /* HttpService */]) === "function" && _f || Object])
], OrganizationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=organization.component.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/organization/team/team-create/team-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/organizations/organization/team/team-create/team-create.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-sm-6 col-sm-offset-3\">\n    <div class=\"panel panel-default\" style=\"margin-bottom:5px\">\n      <div class=\"panel-body\" style=\"padding-bottom:5px\">\n        <div class=\"panel-body\" style=\"padding:10px\">\n          <div>\n            <div class=\"pull-left\">\n              <span class=\"glyphicon glyphicon-book\" aria-hidden=\"true\"></span> Organization</div>\n              <div class=\"pull-right\" style=\"color:blue\">{{organization.name}}</div>\n          </div>\n        </div>\n        <div class=\"panel-body\" style=\"padding:10px\">\n          <div>\n            <div class=\"pull-left\">\n              <span class=\"fa fa-user-plus\" aria-hidden=\"true\"></span> Team creation</div>\n          </div>\n        </div>\n        <div style=\"margin: 10px 30px 10px 30px\">\n          <form class=\"form-horizontal\" style=\"margin-top:20px\" (ngSubmit)=\"create(f)\" #f=\"ngForm\">\n            <div class=\"form-group\">\n              <input\n                ngModel required\n                type=\"text\"\n                class=\"form-control\"\n                pattern=\"^[a-z0-9\\-]{3,128}$\"\n                name=\"name\"\n                id=\"name\"\n                placeholder=\"name\"\n                #name=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">Name should be lowercase and must not start by a number</span>\n            </div>\n\n            <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ messageError }}</span>\n\n            <div class=\"form-group\">\n              <div class=\"panel panel-default\" style=\"border-style:none\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button [disabled]=\"!f.valid\" type=\"button\" class=\"btn btn-primary\" autofocus type=\"submit\"><i class=\"glyphicon glyphicon-book\"></i> Create</button>\n                  <button class=\"btn btn-primary\" (click)=\"cancel()\">\n                    <i class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></i>\n                    Cancel\n                  </button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/organizations/organization/team/team-create/team-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__organizations_models_team_model__ = __webpack_require__("../../../../../src/app/organizations/models/team.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamCreateComponent = (function () {
    function TeamCreateComponent(organizationsService, menuService, route, httpService) {
        this.organizationsService = organizationsService;
        this.menuService = menuService;
        this.route = route;
        this.httpService = httpService;
        this.team = new __WEBPACK_IMPORTED_MODULE_1__organizations_models_team_model__["a" /* Team */]("");
        this.messageError = "";
    }
    TeamCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageError = "";
        this.menuService.setItemMenu('organization', 'Team creation');
        this.routeSub = this.route.params.subscribe(function (params) {
            var name = params['orgName'];
            for (var _i = 0, _a = _this.organizationsService.organizations; _i < _a.length; _i++) {
                var org = _a[_i];
                if (org.name == name) {
                    _this.organization = org;
                }
            }
        });
    };
    TeamCreateComponent.prototype.create = function (form) {
        var _this = this;
        this.team.name = form.value.name;
        this.organization.teams.push(this.team);
        this.menuService.waitingCursor(true);
        this.httpService.createTeam(this.organization.name, this.team.name).subscribe(function () {
            _this.menuService.waitingCursor(false);
            _this.menuService.navigate(['/amp', 'organizations', _this.organization.name, 'team', _this.team.name]);
        }, function (err) {
            _this.menuService.waitingCursor(false);
            var error = err.json();
            _this.messageError = error.error;
            console.log(error);
        });
    };
    TeamCreateComponent.prototype.cancel = function () {
        this.menuService.returnToPreviousPath();
    };
    return TeamCreateComponent;
}());
TeamCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-team-create',
        template: __webpack_require__("../../../../../src/app/organizations/organization/team/team-create/team-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/organizations/organization/team/team-create/team-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */]) === "function" && _d || Object])
], TeamCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=team-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/organization/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.ebutton {\n  color:white;\n  background: rgb(26, 89, 144);\n    border: 1px solid #ccc;\n    box-shadow: 1px 1px 10px black inset,\n                 0 1px 0 rgba( 255, 255, 255, 0.4);\n    padding: 6px 12px;\n    border-radius: 3px;\n    cursor: pointer;\n}\n\ntd {\n  padding: 20px 20px 1px 1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/organizations/organization/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-bottom:5px\">\n    <div class=\"panel panel-default\" style=\"margin-bottom:5px\">\n      <div class=\"panel-body\" style=\"padding-bottom:5px\">\n        <div class=\"form-group\">\n          <div>\n            <div class=\"pull-left\">\n              <span class=\"glyphicon glyphicon-book space-right\" aria-hidden=\"true\"></span>\n              Organization:\n            </div>\n            <div class=\"pull-left\" style=\"color:blue;margin-left:10px\">\n              {{organization.name}}\n            </div>\n          </div>\n        </div>\n        <div>\n          <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px\">\n            <div class=\"panel panel-default\" style=\"border-style:none\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                <button type=\"button\"\n                  class=\"btn btn-primary\"\n                  (click)=returnBack()>\n                  <i class=\"glyphicon glyphicon glyphicon-backward\"></i>\n                </button>\n                <button type=\"button\"\n                  class=\"btn btn-danger\"\n                  (click)=removeTeam()>\n                  <i class=\"fa fa-trash space-right\"></i>\n                  Remove\n                </button>\n                <button\n                  [class]=\"teamMode=='user'?'btn btn-primary ebutton':'btn btn-primary'\"\n                  (click)=\"userManagement()\">\n                  <i class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></i>\n                  Users\n                </button>\n                <button\n                  [class]=\"teamMode=='resource'?'btn btn-primary ebutton':'btn btn-primary'\"\n                  (click)=\"resourceManagement()\">\n                  <i  lass=\"glyphicon glyphicon-duplicate\" aria-hidden=\"true\"></i>\n                  Resources\n                </button>\n                <button\n                  [class]=\"teamMode=='authorization'?'btn btn-primary ebutton':'btn btn-primary'\"\n                  (click)=\"authorizationManagement()\">\n                  <i class=\"glyphicon glyphicon-duplicate\" aria-hidden=\"true\"></i>\n                  Authorizations\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Panel: Users exchange between organization and team -->\n<div class=\"row\" [hidden]=\"teamMode!='user'\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\" style=\"padding-top:5px\">\n        <div class=\"form-group\">\n          <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px\">\n            <div>\n              <div class=\"pull-left\"><span class=\"fa fa-user-plus space-right\" aria-hidden=\"true\">\n              </span> Team:\n              </div>\n              <div class=\"pull-left\" style=\"color:blue;margin-left:10px\">\n                {{team.name}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Panel: Users exchange between organization and team -->\n        <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px\">\n          <div class=\"col-sm-4\">\n            <div class=\"list-group\">\n              <input\n                #filteru1\n                type=\"text\"\n                id=\"filter\"\n                placeholder=\"Filter...\"\n                class=\"form-control input-sm\"\n                style=\"margin-bottom:15px\"\n                (keyup)=\"listUserService.filter(filteru1.value)\"/>\n              <a class=\"disabled list-group-item\">Organization users</a>\n              <a *ngFor=\"let user of listUserService.getData()\" (click)=\"addUser(user)\" class=\"list-group-item\" style=\"padding:5px;color:blue\">\n                {{user.getLabeledName()}}\n                <div *ngIf=\"user.saved && user.saveError===''\" style=\"color:green\" class=\"menu-icon glyphicon glyphicon-ok space-left\"></div>\n                <div *ngIf=\"user.saved && user.saveError!==''\" style=\"color:red\" class=\"menu-icon glyphicon glyphicon-remove space-left space-right\"></div>\n                <div *ngIf=\"user.saved && user.saveError!==''\" style=\"color:red\">{{user.saveError}}</div>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4 btn-group btn-group-vertical\" align=\"center\" style=\"margin-top:50px\">\n            <div style=\"\">\n              <a (click)=\"addAllUsers()\" style=\"background-color:white;display:block;margin:20px\">\n                Add all\n                <i class=\"glyphicon glyphicon-chevron-right\"></i>\n              </a>\n              <a (click)=\"removeAllUsers()\" style=\"background-color:white;display:block;margin:20px\">\n                <i class=\"glyphicon glyphicon-chevron-left\"></i>\n                Remove all\n              </a>\n              <button [disabled]=\"nbSaveInProgress>0\" class=\"btn btn-primary\" (click)=\"applyUsers()\">\n                <i class=\"glyphicon glyphicon-send\" aria-hidden=\"true\"></i>\n                Apply\n              </button>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"list-group\">\n              <input\n                #filteru2\n                type=\"text\"\n                id=\"filter\"\n                placeholder=\"Filter...\"\n                class=\"form-control input-sm\"\n                style=\"margin-bottom:15px\"\n                (keyup)=\"listUserAddedService.filter(filteru2.value)\"/>\n              <a class=\"disabled list-group-item\">Team users</a>\n              <a *ngFor=\"let addedUser of listUserAddedService.getData()\" (click)=\"removeUser(addedUser)\" class=\"list-group-item\" style=\"padding:5px;color:blue\">\n                {{addedUser.getLabeledName()}}\n                <div *ngIf=\"addedUser.saved && addedUser.saveError===''\" style=\"color:green\" class=\"menu-icon glyphicon glyphicon-ok space-left\"></div>\n                <div *ngIf=\"addedUser.saved && addedUser.saveError!==''\" style=\"color:red\" class=\"menu-icon glyphicon glyphicon-remove space-left space-right\"></div>\n                <div *ngIf=\"addedUser.saved && addedUser.saveError!==''\" style=\"color:red\">{{addedUser.saveError}}</div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Panel: Resources exchange between organization and team -->\n<div class=\"row\" [hidden]=\"teamMode!='resource'\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\" style=\"padding-top:5px\">\n        <div class=\"form-group\">\n          <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px\">\n            <div>\n              <div class=\"pull-left\"><span class=\"fa fa-user-plus\" aria-hidden=\"true\"></span> Team</div>\n              <div class=\"pull-right\" style=\"color:blue\">{{team.name}}</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px\">\n          <div class=\"col-sm-4\">\n            <div class=\"list-group\">\n              <input\n                #filterr1\n                type=\"text\"\n                id=\"filter\"\n                placeholder=\"Filter...\"\n                class=\"form-control input-sm\"\n                style=\"margin-bottom:15px\"\n                (keyup)=\"listResourceService.filter(filterr1.value)\"/>\n              <a class=\"disabled list-group-item\">Org. resources</a>\n              <a *ngFor=\"let res of listResourceService.getData()\" (click)=\"addResource(res)\" class=\"list-group-item\" style=\"padding:5px;color:blue\">\n                {{res.getLabeledName()}}\n                <div *ngIf=\"res.saved && res.saveError===''\" style=\"color:green\" class=\"menu-icon glyphicon glyphicon-ok space-left\"></div>\n                <div *ngIf=\"res.saved && res.saveError!==''\" style=\"color:red\" class=\"menu-icon glyphicon glyphicon-remove space-left space-right\"></div>\n                <div *ngIf=\"res.saved && res.saveError!==''\" style=\"color:red\">{{res.saveError}}</div>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4 btn-group btn-group-vertical\" align=\"center\" style=\"margin-top:50px\">\n            <div style=\"\">\n              <a (click)=\"addAllResources()\" style=\"background-color:white;display:block;margin:20px\">\n                Add all\n                <i class=\"glyphicon glyphicon-chevron-right\"></i>\n              </a>\n              <a (click)=\"removeAllResources()\" style=\"background-color:white;display:block;margin:20px\">\n                <i class=\"glyphicon glyphicon-chevron-left\"></i>\n                Remove all\n              </a>\n              <button [disabled]=\"nbSaveInProgress>0\" class=\"btn btn-primary\" (click)=\"applyResources()\">\n                <i class=\"glyphicon glyphicon-send\" aria-hidden=\"true\"></i>\n                Apply\n              </button>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"list-group\">\n              <input\n                #filterr2\n                type=\"text\"\n                id=\"filter\"\n                placeholder=\"Filter...\"\n                class=\"form-control input-sm\"\n                style=\"margin-bottom:15px\"\n                (keyup)=\"listResourceAddedService.filter(filterr2.value)\"/>\n              <a class=\"disabled list-group-item\">Team ressources</a>\n              <a *ngFor=\"let addedRes of listResourceAddedService.getData()\" (click)=\"removeResource(addedRes)\" class=\"list-group-item\" style=\"padding:5px;color:blue\">\n                {{addedRes.getLabeledName()}}\n                <div *ngIf=\"addedRes.saved && addedRes.saveError===''\" style=\"color:green\" class=\"menu-icon glyphicon glyphicon-ok space-left\"></div>\n                <div *ngIf=\"addedRes.saved && addedRes.saveError!==''\" style=\"color:red\" class=\"menu-icon glyphicon glyphicon-remove space-left space-right\"></div>\n                <div *ngIf=\"addedRes.saved && addedRes.saveError!==''\" style=\"color:red\">{{addedRes.saveError}}</div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Panel: set team resources authorizations -->\n<div class=\"row\" [hidden]=\"teamMode!='authorization'\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\" style=\"padding-top:5px\">\n        <div class=\"form-group\">\n          <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px\">\n            <div>\n              <div class=\"pull-left\"><span class=\"fa fa-user-plus\" aria-hidden=\"true\"></span> Team</div>\n              <div class=\"pull-right\" style=\"color:blue\">{{team.name}}</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-xs-12\" style=\"margin-top:20px;margin-bottom:40px\">\n          <div class=\"col-sm-2\">\n            <div class=\"list-group\">\n              <input\n                #filtera1\n                type=\"text\"\n                id=\"filter1\"\n                placeholder=\"Filter...\"\n                class=\"form-control input-sm\"\n                style=\"margin-bottom:15px\"\n                (keyup)=\"listResourceAddedService.filter(filtera1.value)\"/>\n              <table class=\"table table-hover\">\n                <thead>\n                  <tr>\n                    <th>\n                      <a>\n                        Id\n                        <span (click)=\"listResourceAddedService.order('id', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                        <span (click)=\"listResourceAddedService.order('id', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                      </a>\n                    </th>\n                    <th>\n                      <a>\n                        Type\n                        <span (click)=\"listResourceAddedService.order('type', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                        <span (click)=\"listResourceAddedService.order('type', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                      </a>\n                    </th>\n                    <th>\n                      <a>\n                        Name\n                        <span (click)=\"listResourceAddedService.order('name', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                        <span (click)=\"listResourceAddedService.order('name', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                      </a>\n                    </th>\n                    <th>\n                      <a>\n                        Permission\n                        <span (click)=\"listResourceAddedService.order('permissionLabel', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                        <span (click)=\"listResourceAddedService.order('permissionLabel', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                      </a>\n                    </th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let res of listResourceAddedService.getData()\">\n                    <td style=\"min-width:100px\">{{res.id.substring(0,12)}}</td>\n                    <td style=\"min-width:100px\">{{res.type}}</td>\n                    <td style=\"min-width:200px\">{{res.name}}</td>\n                    <td style=\"min-width:200px\">\n                      <div class=\"btn dropdown\" style=\"padding:0px\">\n                        <button class=\"dropdown btn btn-default dropdown-toggle\" style=\"border:none;padding:2px\" type=\"button\" id=\"object\" data-toggle=\"dropdown\">\n                          {{res.permissionLabel}}\n                          <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n                        </button>\n                        <div class=\"dropdown-menu\">\n                          <li><a (click)=\"setAuthorization(res, 0)\">read</a></li>\n                          <li><a (click)=\"setAuthorization(res, 1)\">write</a></li>\n                          <li><a (click)=\"setAuthorization(res, 2)\">admin</a></li>\n                        </div>\n                      </div>\n                    </td>\n                    <td style=\"min-width:200px\">\n                      <div *ngIf=\"res.changeAuth && res.changeAuthError==''\" style=\"color:green\" class=\"menu-icon glyphicon glyphicon-ok space-left\"></div>\n                      <div *ngIf=\"res.changeAuth && res.changeAuthError!==''\" style=\"color:red\" class=\"menu-icon glyphicon glyphicon-remove space-left space-right\"></div>\n                      <div *ngIf=\"res.changeAuth && res.changeAuthError!==''\" style=\"color:red\">{{res.changeAuthError}}</div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/organizations/organization/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organizations_models_team_model__ = __webpack_require__("../../../../../src/app/organizations/models/team.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__organizations_models_organization_model__ = __webpack_require__("../../../../../src/app/organizations/models/organization.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TeamComponent = (function () {
    function TeamComponent(route, organizationsService, usersService, menuService, httpService) {
        this.route = route;
        this.organizationsService = organizationsService;
        this.usersService = usersService;
        this.menuService = menuService;
        this.httpService = httpService;
        this.modeCreation = false;
        this.teamMode = 'user';
        this.listUserService = new __WEBPACK_IMPORTED_MODULE_3__services_list_service__["a" /* ListService */]();
        this.listUserAddedService = new __WEBPACK_IMPORTED_MODULE_3__services_list_service__["a" /* ListService */]();
        this.listResourceService = new __WEBPACK_IMPORTED_MODULE_3__services_list_service__["a" /* ListService */]();
        this.listResourceAddedService = new __WEBPACK_IMPORTED_MODULE_3__services_list_service__["a" /* ListService */]();
        this.organization = new __WEBPACK_IMPORTED_MODULE_6__organizations_models_organization_model__["a" /* Organization */]("", "");
        this.team = new __WEBPACK_IMPORTED_MODULE_5__organizations_models_team_model__["a" /* Team */]("");
        this.addedUsers = [];
        this.users = [];
        this.initialUserList = [];
        this.addedResources = [];
        this.resources = [];
        this.initialResourceList = [];
        this.permisionLabel = ['read', 'write', 'admin'];
        this.userUpdated = false;
        this.resUpdated = false;
        this.nbSaveInProgress = 0;
        this.listUserService.setFilterFunction(this.matchUser);
        this.listUserAddedService.setFilterFunction(this.matchUser);
        this.listResourceService.setFilterFunction(this.matchResource);
        this.listResourceAddedService.setFilterFunction(this.matchResource);
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.setItemMenu('organization', 'Team edit');
        this.routeSub = this.route.params.subscribe(function (params) {
            var orgName = _this.organizationsService.currentOrganization.name;
            _this.organization = _this.organizationsService.currentOrganization;
            var name = params['teamName'];
            for (var _i = 0, _a = _this.organization.teams; _i < _a.length; _i++) {
                var team = _a[_i];
                if (team.name == name) {
                    _this.team = team;
                }
            }
            if (_this.team) {
                //Users
                _this.initialUserList = _this.organizationsService.getAllNoMembers(_this.team.members);
                _this.addedUsers = _this.team.members.slice();
                _this.initialResourceList = _this.organizationsService.getAllNoResources(_this.team.resources);
                _this.addedResources = _this.team.resources.slice();
                //
                _this.users = _this.initialUserList.slice();
                _this.listUserAddedService.setData(_this.addedUsers);
                _this.listUserService.setData(_this.users);
                //
                _this.resources = _this.initialResourceList.slice();
                _this.listResourceAddedService.setData(_this.addedResources);
                _this.listResourceService.setData(_this.resources);
            }
        });
    };
    TeamComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    TeamComponent.prototype.userManagement = function () {
        this.teamMode = 'user';
    };
    TeamComponent.prototype.resourceManagement = function () {
        this.teamMode = 'resource';
    };
    TeamComponent.prototype.authorizationManagement = function () {
        this.teamMode = 'authorization';
    };
    TeamComponent.prototype.returnBack = function () {
        this.menuService.navigate(['/amp', 'organizations', this.organization.name]);
    };
    TeamComponent.prototype.removeTeam = function () {
        var _this = this;
        if (confirm("Are you sure to delete the team: " + this.team.name)) {
            this.menuService.waitingCursor(true);
            this.httpService.deleteTeam(this.organization.name, this.team.name).subscribe(function () {
                _this.menuService.waitingCursor(false);
                var list = [];
                for (var _i = 0, _a = _this.organization.teams; _i < _a.length; _i++) {
                    var team = _a[_i];
                    if (team.name !== _this.team.name) {
                        list.push(team);
                    }
                }
                _this.organization.teams = list;
                _this.menuService.navigate(['/amp', 'organizations', _this.organization.name]);
            }, function (error) {
                _this.menuService.waitingCursor(false);
                console.log(error);
            });
        }
    };
    //----------------------------------------------------------------------------
    // Users add-remove management
    TeamComponent.prototype.matchUser = function (item, value) {
        if (value == '' || item.userName === '') {
            return true;
        }
        if (item.userName && item.userName.includes(value)) {
            return true;
        }
        return false;
    };
    TeamComponent.prototype.addUser = function (user) {
        user.status++;
        user.saved = false;
        var list = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.userName !== user.userName) {
                list.push(item);
            }
        }
        this.users = list;
        this.listUserService.setData(this.users);
        this.addedUsers.push(user);
        this.listUserAddedService.setData(this.addedUsers);
        this.userUpdated = this.isUserUpdated();
    };
    TeamComponent.prototype.removeUser = function (user) {
        user.status--;
        user.saved = false;
        var list = [];
        for (var _i = 0, _a = this.addedUsers; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.userName !== user.userName) {
                list.push(item);
            }
        }
        this.addedUsers = list;
        this.listUserAddedService.setData(this.addedUsers);
        this.users.push(user);
        this.listUserService.setData(this.users);
        this.userUpdated = this.isUserUpdated();
    };
    TeamComponent.prototype.addAllUsers = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            this.addUser(user);
        }
        this.userUpdated = this.isUserUpdated();
    };
    TeamComponent.prototype.removeAllUsers = function () {
        for (var _i = 0, _a = this.addedUsers; _i < _a.length; _i++) {
            var user = _a[_i];
            this.removeUser(user);
        }
        this.userUpdated = this.isUserUpdated();
    };
    TeamComponent.prototype.isUserUpdated = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.status !== 0) {
                return true;
            }
        }
        for (var _b = 0, _c = this.addedUsers; _b < _c.length; _b++) {
            var user = _c[_b];
            if (user.status !== 0) {
                return true;
            }
        }
        return false;
    };
    TeamComponent.prototype.applyUsers = function () {
        var _this = this;
        this.nbSaveInProgress = 0;
        this.menuService.waitingCursor(true);
        var _loop_1 = function (user) {
            user.saved = false;
            user.saveError = "";
            if (user.status == -1) {
                this_1.nbSaveInProgress++;
                this_1.httpService.removeUserFromTeam(this_1.organization.name, this_1.team.name, user.userName).subscribe(function () {
                    user.saved = true;
                    user.status = 0;
                    user.saveError = "";
                    _this.decrSaveUsersInProgress();
                }, function (error) {
                    console.log(error);
                    try {
                        var data = JSON.parse(error._body);
                        user.saveError = data.error;
                    }
                    catch (errorj) {
                        console.log(errorj);
                    }
                    _this.addUser(user);
                    user.saved = true;
                    user.saveError = error;
                    _this.decrSaveUsersInProgress();
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            _loop_1(user);
        }
        var _loop_2 = function (user) {
            user.saved = false;
            user.saveError = "";
            if (user.status == 1) {
                this_2.nbSaveInProgress++;
                this_2.httpService.addUserToTeam(this_2.organization.name, this_2.team.name, user.userName).subscribe(function () {
                    user.saved = true;
                    user.saveError = "";
                    user.status = 0;
                    _this.decrSaveUsersInProgress();
                }, function (error) {
                    console.log(error);
                    try {
                        var data = JSON.parse(error._body);
                        user.saveError = data.error;
                    }
                    catch (errorj) {
                        console.log(errorj);
                    }
                    _this.removeUser(user);
                    user.saved = true;
                    _this.decrSaveUsersInProgress();
                });
            }
        };
        var this_2 = this;
        for (var _b = 0, _c = this.addedUsers; _b < _c.length; _b++) {
            var user = _c[_b];
            _loop_2(user);
        }
        if (this.nbSaveInProgress === 0) {
            this.menuService.waitingCursor(false);
        }
        this.team.members = this.addedUsers.slice();
        this.userUpdated = false;
    };
    TeamComponent.prototype.decrSaveUsersInProgress = function () {
        this.nbSaveInProgress--;
        if (this.nbSaveInProgress === 0) {
            this.menuService.waitingCursor(false);
        }
    };
    //----------------------------------------------------------------------------
    // resource add-remove management
    TeamComponent.prototype.matchResource = function (item, value) {
        if (value == '') {
            return true;
        }
        if (item.id && item.id.includes(value)) {
            return true;
        }
        if (item.type && item.type.includes(value)) {
            return true;
        }
        if (item.name && item.name.includes(value)) {
            return true;
        }
        return false;
    };
    TeamComponent.prototype.addResource = function (res) {
        res.status++;
        res.saved = false;
        var list = [];
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id !== res.id) {
                list.push(item);
            }
        }
        this.resources = list;
        this.listResourceService.setData(this.resources);
        this.addedResources.push(res);
        this.listResourceAddedService.setData(this.addedResources);
        this.resUpdated = this.isResourceUpdated();
    };
    TeamComponent.prototype.removeResource = function (res) {
        res.status--;
        res.saved = false;
        var list = [];
        for (var _i = 0, _a = this.addedResources; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id !== res.id) {
                list.push(item);
            }
        }
        this.addedResources = list;
        this.listResourceAddedService.setData(this.addedResources);
        this.resources.push(res);
        this.listResourceService.setData(this.resources);
        this.resUpdated = this.isResourceUpdated();
    };
    TeamComponent.prototype.addAllResources = function () {
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var res = _a[_i];
            this.addResource(res);
        }
        this.resUpdated = this.isResourceUpdated();
    };
    TeamComponent.prototype.removeAllResources = function () {
        for (var _i = 0, _a = this.addedResources; _i < _a.length; _i++) {
            var res = _a[_i];
            this.removeResource(res);
        }
        this.resUpdated = this.isResourceUpdated();
    };
    TeamComponent.prototype.isResourceUpdated = function () {
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var res = _a[_i];
            if (res.status !== 0) {
                return true;
            }
        }
        for (var _b = 0, _c = this.addedResources; _b < _c.length; _b++) {
            var res = _c[_b];
            if (res.status !== 0) {
                return true;
            }
        }
        return false;
    };
    TeamComponent.prototype.applyResources = function () {
        var _this = this;
        console.log("apply resources");
        this.nbSaveInProgress = 0;
        this.menuService.waitingCursor(true);
        var _loop_3 = function (res) {
            res.saved = false;
            res.saveError = "";
            if (res.status == -1) {
                console.log("removing resources " + res.name);
                this_3.nbSaveInProgress++;
                this_3.httpService.removeResourceFromTeam(this_3.organization.name, this_3.team.name, res.id).subscribe(function () {
                    res.saved = true;
                    res.status = 0;
                    res.saveError = "";
                    _this.decrSaveResourcesInProgress();
                    console.log("done");
                }, function (error) {
                    console.log(error);
                    try {
                        var data = JSON.parse(error._body);
                        res.saveError = data.error;
                    }
                    catch (errorj) {
                        console.log(errorj);
                    }
                    _this.addResource(res);
                    res.saved = true;
                    res.saveError = error;
                    _this.decrSaveResourcesInProgress();
                });
            }
        };
        var this_3 = this;
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var res = _a[_i];
            _loop_3(res);
        }
        console.log("apply addedResources");
        var _loop_4 = function (res) {
            res.saved = false;
            res.saveError = "";
            if (res.status == 1) {
                console.log("adding resource " + res.name);
                this_4.nbSaveInProgress++;
                this_4.httpService.addResourceToTeam(this_4.organization.name, this_4.team.name, res.id).subscribe(function () {
                    console.log("done");
                    res.saved = true;
                    res.saveError = "";
                    res.status = 0;
                    _this.decrSaveResourcesInProgress();
                }, function (error) {
                    console.log(error);
                    try {
                        var data = JSON.parse(error._body);
                        res.saveError = data.error;
                    }
                    catch (errorj) {
                        console.log(errorj);
                    }
                    _this.removeResource(res);
                    res.saved = true;
                    _this.decrSaveResourcesInProgress();
                });
            }
        };
        var this_4 = this;
        for (var _b = 0, _c = this.addedResources; _b < _c.length; _b++) {
            var res = _c[_b];
            _loop_4(res);
        }
        if (this.nbSaveInProgress === 0) {
            this.menuService.waitingCursor(false);
        }
        this.team.resources = this.addedResources.slice();
        this.resUpdated = false;
    };
    TeamComponent.prototype.decrSaveResourcesInProgress = function () {
        this.nbSaveInProgress--;
        if (this.nbSaveInProgress === 0) {
            this.menuService.waitingCursor(false);
        }
    };
    //----------------------------------------------------------------------------
    // Authorization management
    TeamComponent.prototype.setAuthorization = function (res, level) {
        this.httpService.changeTeamResourcePermissionLevel(this.organization.name, this.team.name, res.id, level).subscribe(function () {
            res.changeAuth = true;
            res.changeAuthError = '';
            res.setAuthorization(level);
        }, function (err) {
            var error = err.json();
            res.changeAuth = true;
            res.changeAuthError = error.error;
        });
    };
    return TeamComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], TeamComponent.prototype, "form", void 0);
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-organization',
        template: __webpack_require__("../../../../../src/app/organizations/organization/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/organizations/organization/team/team.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_menu_service__["a" /* MenuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_http_service__["a" /* HttpService */]) === "function" && _f || Object])
], TeamComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/organizations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/organizations/organizations.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div>\n          <div class=\"pull-left\">\n            <span class=\"glyphicon glyphicon-book\" aria-hidden=\"true\"></span> Organizations</div>\n        </div>\n      </div>\n\n      <div class=\"panel-body\">\n        <div classes=\"col-lg-12\">\n          <div class=\"pull-left\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n              <button type=\"button\" class=\"btn btn-danger\" [disabled]=\"this.organization.name===''\" (click)=\"removeOrganization()\">\n                <i class=\"fa fa-trash space-right\"></i>Remove</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"createOrganization()\">\n                <i class=\"glyphicon glyphicon-tasks\"></i>Create</button>\n            </div>\n          </div>\n          <div class=\"pull-right\">\n            <input type=\"text\"\n              #filter\n              id=\"filter\"\n              placeholder=\"Filter...\"\n              class=\"form-control\"\n              (keyup)=\"listService.filter(filter.value)\"/>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div classes=\"no-padding\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>\n                    <a>\n                      Name\n                      <span (click)=\"listService.order('id', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('id', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Email\n                      <span (click)=\"listService.order('name', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('name', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Teams\n                      <span (click)=\"listService.order('ownerName', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('ownerName', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Users\n                      <span (click)=\"listService.order('ownerType', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('ownerType', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr (click)=\"selectOrganization(org)\" *ngFor=\"let org of listService.getData()\">\n                  <td><input type=\"checkbox\" [checked]=\"organization.name===org.name\"></td>\n                  <td>{{ org.name }}</td>\n                  <td>{{ org.email }}</td>\n                  <td> {{ org.teams.length }}</td>\n                  <td> {{ org.members.length }}</td>\n                  <td>\n                    <a (click)=\"editOrganization(org)\">\n                      <i class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></i> Edit</a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/organizations/organizations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizations_models_organization_model__ = __webpack_require__("../../../../../src/app/organizations/models/organization.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrganizationsComponent = (function () {
    function OrganizationsComponent(route, organizationsService, listService, menuService, httpService, usersService) {
        this.route = route;
        this.organizationsService = organizationsService;
        this.listService = listService;
        this.menuService = menuService;
        this.httpService = httpService;
        this.usersService = usersService;
        this.noOrganization = new __WEBPACK_IMPORTED_MODULE_2__organizations_models_organization_model__["a" /* Organization */]("", "");
        this.organization = this.noOrganization;
        listService.setFilterFunction(organizationsService.match);
    }
    OrganizationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.setItemMenu('organizations', 'List');
        this.organizationsService.onOrganizationsLoaded.subscribe(function () {
            _this.listService.setData(_this.organizationsService.organizations);
        });
        this.menuService.onRefreshClicked.subscribe(function () {
            _this.organizationsService.loadOrganizations(_this.usersService.currentUser.name, true);
            _this.usersService.loadUsers(true);
        });
        this.organizationsService.loadOrganizations(this.usersService.currentUser.name, false);
    };
    OrganizationsComponent.prototype.removeOrganization = function () {
        var _this = this;
        if (confirm("Are you sure to delete the organization: " + this.organization.name)) {
            this.menuService.waitingCursor(true);
            this.httpService.deleteOrganization(this.organization.name).subscribe(function () {
                _this.menuService.waitingCursor(false);
                var list = [];
                for (var _i = 0, _a = _this.organizationsService.organizations; _i < _a.length; _i++) {
                    var org = _a[_i];
                    if (org.name != _this.organization.name) {
                        list.push(org);
                    }
                }
                _this.organizationsService.organizations = list;
                _this.listService.setData(_this.organizationsService.organizations);
            }, function (error) {
                _this.menuService.waitingCursor(false);
                console.log(error);
            });
        }
    };
    OrganizationsComponent.prototype.selectOrganization = function (org) {
        this.organization = org;
    };
    OrganizationsComponent.prototype.createOrganization = function () {
        this.menuService.navigate(['/amp', 'organizations', 'create']);
    };
    OrganizationsComponent.prototype.editOrganization = function (org) {
        this.menuService.navigate(['/amp', 'organizations', org.name]);
    };
    return OrganizationsComponent;
}());
OrganizationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-organizations',
        template: __webpack_require__("../../../../../src/app/organizations/organizations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/organizations/organizations.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_list_service__["a" /* ListService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__organizations_services_organizations_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__organizations_services_organizations_service__["a" /* OrganizationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_list_service__["a" /* ListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_http_service__["a" /* HttpService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === "function" && _f || Object])
], OrganizationsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=organizations.component.js.map

/***/ }),

/***/ "../../../../../src/app/organizations/services/organizations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organizations_models_organization_model__ = __webpack_require__("../../../../../src/app/organizations/models/organization.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organizations_models_member_model__ = __webpack_require__("../../../../../src/app/organizations/models/member.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organizations_models_organization_resource_model__ = __webpack_require__("../../../../../src/app/organizations/models/organization-resource.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrganizationsService = (function () {
    function OrganizationsService(router, httpService, menuService) {
        this.router = router;
        this.httpService = httpService;
        this.menuService = menuService;
        this.noOrganization = new __WEBPACK_IMPORTED_MODULE_3__organizations_models_organization_model__["a" /* Organization */]("", "");
        this.organizations = [];
        this.currentOrganization = this.noOrganization;
        this.onOrganizationsLoaded = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.onOrganizationsError = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.onUserLogout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.currentLoadedUser = "";
    }
    OrganizationsService.prototype.match = function (item, value) {
        if (item.name && item.name.includes(value)) {
            return true;
        }
        if (item.email && item.email.includes(value)) {
            return true;
        }
        return false;
    };
    OrganizationsService.prototype.loadOrganizations = function (userName, refresh) {
        var _this = this;
        if (!refresh && this.currentLoadedUser == userName) {
            this.onOrganizationsLoaded.next();
            return;
        }
        this.httpService.userOrganization(userName).subscribe(function (data) {
            _this.organizations = data;
            _this.currentLoadedUser = userName;
            _this.onOrganizationsLoaded.next();
        }, function (error) {
            _this.onOrganizationsError.next(error);
            console.log(error);
        });
    };
    OrganizationsService.prototype.setCurrentOrganization = function (org) {
        var _this = this;
        this.httpService.switchOrganization(org.name).subscribe(function (rep) {
            var data = rep.json();
            var token = data.auth;
            _this.httpService.setToken(token);
            localStorage.setItem('token', JSON.stringify({ token: token }));
            _this.currentOrganization = org;
            _this.httpService.organizationRessources().subscribe(function (data) {
                org.resources = data;
                for (var _i = 0, _a = org.teams; _i < _a.length; _i++) {
                    var team = _a[_i];
                    for (var _b = 0, _c = team.resources; _b < _c.length; _b++) {
                        var res = _c[_b];
                        for (var _d = 0, data_1 = data; _d < data_1.length; _d++) {
                            var ref = data_1[_d];
                            if (ref.id == res.id) {
                                res.name = ref.name;
                                res.type = ref.type;
                                break;
                            }
                        }
                    }
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    OrganizationsService.prototype.edit = function () {
        this.menuService.navigate(["/amp", "organizations", this.currentOrganization.name]);
    };
    //to be refactor with associative array
    OrganizationsService.prototype.getAllNoMembers = function (members) {
        var list = [];
        for (var _i = 0, _a = this.currentOrganization.members; _i < _a.length; _i++) {
            var user = _a[_i];
            var found = false;
            for (var _b = 0, members_1 = members; _b < members_1.length; _b++) {
                var member = members_1[_b];
                if (member.userName == user.userName) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                list.push(new __WEBPACK_IMPORTED_MODULE_4__organizations_models_member_model__["a" /* Member */](user.userName, undefined));
            }
        }
        return list;
    };
    //to be refactor with associative array
    OrganizationsService.prototype.getAllNoResources = function (resources) {
        var list = [];
        for (var _i = 0, _a = this.currentOrganization.resources; _i < _a.length; _i++) {
            var ref = _a[_i];
            var found = false;
            for (var _b = 0, resources_1 = resources; _b < resources_1.length; _b++) {
                var res = resources_1[_b];
                if (ref.id == res.id) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                list.push(new __WEBPACK_IMPORTED_MODULE_5__organizations_models_organization_resource_model__["a" /* OrganizationResource */](ref.id, ref.type, ref.name));
            }
        }
        return list;
    };
    return OrganizationsService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], OrganizationsService.prototype, "onUserLogout", void 0);
OrganizationsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]) === "function" && _c || Object])
], OrganizationsService);

var _a, _b, _c;
//# sourceMappingURL=organizations.service.js.map

/***/ }),

/***/ "../../../../../src/app/pageheader/pageheader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pageheader/pageheader.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row header\" style=\"margin-bottom:5px\">\n  <div class=\"col-xs-12\" style=\"margin-bottom:5px\">\n    <div class=\"meta\">\n      <div title=\"Cluster overview\">\n        <div class=\"page white-space-normal\">\n          <div class=\"pull-left space-right\">\n            <span [hidden]=\"menuService.currentMenuItem.name==''\" class=\"btn btn-default space-right\" class=\"header_title_content\" (click)=\"menuService.refresh()\">\n              <a data-toggle=\"tooltip\" title=\"Refresh\">\n                <i class=\"fa fa-refresh\"></i>\n              </a>\n            </span>\n          </div>\n          <div class=\"pull-left space-right\">{{menuService.currentMenuItem.name}}</div>\n          <div *ngIf=\"menuService.tooltipLabel\" class=\"pull-left space-right\" style=\"color:blue\"><i class=\"glyphicon glyphicon-arrow-right\" style=\"font-size:10px\"></i></div>\n          <div style=\"color:blue;font-size:14px;margin-top:3px\" class=\"pull-left\">{{menuService.tooltipLabel}}</div>\n          <div class=\"pull-right ng-scope\">\n            <a ui-sref=\"\" class=\"text-danger\" routerLinkActive=\"active\" (click)=\"organizationsService.edit()\" style=\"margin-right:25px;font-size:18px;\">\n              {{ organizationsService.currentOrganization.name }}\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"ng-scope\">\n        <div class=\"breadcrumb-links\">\n          <div class=\"pull-left\" ng-transclude=\"\">\n            <span class=\"ng-scope\">{{menuService.currentMenuItem.description}}</span>\n          </div>\n          <span appDropdown class=\"pull-right user-box\" style=\"cursor:pointer;font-size:14px\">\n            <i *ngIf=\"this.usersService.currentUser.sp\" class=\"fa fa-user-circle-o\" style=\"cursor:pointer\"></i>\n            <i *ngIf=\"!this.usersService.currentUser.sp\" class=\"fa fa-user\" style=\"cursor:pointer\"></i>\n            {{ usersService.currentUser.name }}\n            <span class=\"caret\" style=\"cursor:pointer\"></span>\n            <ul class=\"dropdown-menu\">\n              <li class=\"disabled\" [hidden]=\"organizationsService.organizations.length===0\"><a>organizations</a></li>\n              <li *ngFor=\"let org of organizationsService.organizations\" (click)=\"organizationsService.setCurrentOrganization(org)\"><a>{{org.name}}</a></li>\n              <li role=\"separator\" class=\"divider\" [hidden]=\"organizationsService.organizations.length===0\"></li>\n              <li><a (click)=\"usersService.switchToUserOnly()\">Switch to user only</a></li>\n              <li><a (click)=\"createOrganization()\">Create organization</a></li>\n              <li><a>Settings</a></li>\n              <li (click)=\"usersService.logout()\"><a>Sign out</a></li>\n            </ul>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pageheader/pageheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageheaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageheaderComponent = (function () {
    function PageheaderComponent(menuService, usersService, organizationsService) {
        this.menuService = menuService;
        this.usersService = usersService;
        this.organizationsService = organizationsService;
        this.menuTitle = "title";
        this.menuItem = "item";
        this.menuOver = "";
    }
    PageheaderComponent.prototype.ngOnInit = function () {
    };
    PageheaderComponent.prototype.createOrganization = function () {
        this.menuService.navigate(['/amp', 'organizations', 'create']);
    };
    return PageheaderComponent;
}());
PageheaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-pageheader',
        template: __webpack_require__("../../../../../src/app/pageheader/pageheader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pageheader/pageheader.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__organizations_services_organizations_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__organizations_services_organizations_service__["a" /* OrganizationsService */]) === "function" && _c || Object])
], PageheaderComponent);

var _a, _b, _c;
//# sourceMappingURL=pageheader.component.js.map

/***/ }),

/***/ "../../../../../src/app/password/password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div icon=\"fa-plus\" title=\"Add a new user\">\n        </div>\n        <div>\n          <form class=\"form-horizontal\" (ngSubmit)=\"onValidation(f)\" #f=\"ngForm\">\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-8\">\n                <input\n                ngModel\n                readonly\n                type=\"text\"\n                class=\"form-control\"\n                name=\"username\"\n                id=\"username\"\n                [placeholder]=\"usersService.currentUser.name\">\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-8\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                  <input\n                    ngModel\n                    required\n                    type=\"password\"\n                    class=\"form-control\"\n                    name=\"currentPassword\"\n                    placeholder=\"current password\"\n                    id=\"currentPassword\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-8\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                  <input\n                    ngModel\n                    required\n                    type=\"password\"\n                    class=\"form-control\"\n                    name=\"newPassword\"\n                    placeholder=\"new password\"\n                    id=\"newPassword\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-8\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n                  <input\n                    ngModel\n                    required\n                    type=\"password\"\n                    class=\"form-control\"\n                    name=\"newPasswordVerif\"\n                    placeholder=\"new password confirmation\"\n                    id=\"newPasswordVerif\">\n                </div>\n              </div>\n            </div>\n\n            <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ message }}</span>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-8\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-primary btn-sm\"\n                    type=\"submit\"\n                    [disabled]=\"!f.valid\">\n                    <i class=\"glyphicon glyphicon-flash\" aria-hidden=\"true\"></i> {{ submitCaption }}</button>\n                  <button type=\"button\"\n                    class=\"btn btn-default btn-sm\"\n                    (click)=\"returnBack()\">\n                    <i aria-hidden=\"true\"></i> Cancel</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordComponent = (function () {
    function PasswordComponent(usersService, menuService, httpService) {
        this.usersService = usersService;
        this.menuService = menuService;
        this.httpService = httpService;
        this.message = "";
        this.submitCaption = "Submit";
    }
    PasswordComponent.prototype.ngOnInit = function () {
        this.menuService.setItemMenu('Password', 'change');
    };
    PasswordComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    PasswordComponent.prototype.onValidation = function (event) {
        var _this = this;
        this.message = "";
        if (this.submitCaption == "Done") {
            this.menuService.returnToPreviousPath();
            return;
        }
        console.log(event.form.value.newPassword + "," + event.form.value.newPasswordVerif);
        if (event.form.value.newPassword != event.form.value.newPasswordVerif) {
            this.message = "The new password is not the same than the new password verification";
            return;
        }
        this.httpService.changePassword(event.form.value.currentPassword, event.form.value.newPassword).subscribe(function (data) {
            _this.message = "Your password has been changed";
            _this.submitCaption = "Done";
        }, function (error) {
            var data = error.json();
            _this.message = data.error;
        });
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-password',
        template: __webpack_require__("../../../../../src/app/password/password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/password/password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _c || Object])
], PasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=password.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (this.usersService.currentUser.name !== currentUser.username) {
                var token = JSON.parse(localStorage.getItem('token'));
                //console.log(this.usersService.currentUser.name + "<>" + currentUser.username + "-> reload user")
                this.usersService.setCurrentUser(token.token, false);
            }
            return true;
        }
        this.router.navigate(['/auth", "signin']);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/colors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_graph_color_model__ = __webpack_require__("../../../../../src/app/models/graph-color.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsService; });

var ObjectColors = (function () {
    function ObjectColors(object, refColor) {
        this.colorMap = {};
        this.index = 0;
        this.refColor = refColor;
        this.object = object;
        this.colorList = [];
        this.colorMap = {};
        this.graphMap = {};
        this.nameMap = {};
    }
    ObjectColors.prototype.getColor = function (name, graphId) {
        if (!name) {
            return "#000000";
        }
        this.graphMap[name + '-' + graphId] = true;
        var col = this.colorMap[name];
        if (col) {
            var exist = this.nameMap[name];
            if (!exist) {
                this.nameMap[name] = ".";
                this.colorList.push(col);
            }
            return col.color;
        }
        if (this.index >= this.refColor.length) {
            this.index = 10;
        }
        col = new __WEBPACK_IMPORTED_MODULE_0__models_graph_color_model__["a" /* GraphColor */](name, graphId, this.refColor[this.index]);
        //console.log(name +": "+col.name+"-"+col.color+" index="+this.index)
        this.index++;
        this.colorMap[name] = col;
        this.nameMap[name] = ".";
        this.colorList.push(col);
        return col.color;
    };
    ObjectColors.prototype.getColorList = function (graphId) {
        var list = [];
        for (var _i = 0, _a = this.colorList; _i < _a.length; _i++) {
            var col = _a[_i];
            if (!graphId || this.graphMap[col.name + '-' + graphId]) {
                list.push(col);
            }
        }
        return list;
    };
    ObjectColors.prototype.refresh = function () {
        this.colorList = [];
        this.nameMap = {};
        this.graphMap = {};
    };
    return ObjectColors;
}());
var ColorsService = (function () {
    function ColorsService() {
        this.defaultColor = 'magenta';
        this.refColors = []; //['#396AB1', '#DA7C30', '#3E9651', '#CC2529', '#535154', '#6B4C9A', '#922428', '#948B3D']
        this.objectColorsMap = {};
        var baseColList = [0x396AB1, 0xDA7C30, 0x3E9651, 0xCC2529, 0x535154, 0x6B4C9A, 0x922428, 0x948B3D];
        this.refColors = this.getNewColors(baseColList, 50, 50);
        this.objectColorsMap['stack'] = new ObjectColors('stack', this.refColors);
        this.objectColorsMap['service'] = new ObjectColors('service', this.refColors);
        this.objectColorsMap['container'] = new ObjectColors('container', this.refColors);
        this.objectColorsMap['node'] = new ObjectColors('node', this.refColors);
    }
    ColorsService.prototype.hex2rgb = function (h) {
        return [(h & (255 << 16)) >> 16, (h & (255 << 8)) >> 8, h & 255];
    };
    ColorsService.prototype.distanceColors = function (a, b) {
        var d = [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
        return Math.sqrt((d[0] * d[0]) + (d[1] * d[1]) + (d[2] * d[2]));
    };
    ColorsService.prototype.newColor = function (list, d) {
        var n = 0;
        var ok;
        var nl = 0;
        while (true) {
            nl++;
            ok = true;
            n = Math.random() * 0xFFFFFF << 0;
            if (this.distanceColors(this.hex2rgb(0), this.hex2rgb(n)) < 100) {
                ok = false;
            }
            else {
                for (var c in list) {
                    if (this.distanceColors(this.hex2rgb(list[c]), this.hex2rgb(n)) < d) {
                        ok = false;
                        break;
                    }
                }
            }
            if (ok) {
                return n;
            }
            else if (nl > 100) {
                return Math.random() * 0xFFFFFF << 0;
            }
        }
    };
    ColorsService.prototype.getNewColors = function (list, n, d) {
        var a = list;
        for (; n > 0; n--) {
            a.push(this.newColor(a, d));
        }
        var ret = [];
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var col = a_1[_i];
            if (col != 0) {
                ret.push("#" + col.toString(16));
            }
        }
        return ret;
    };
    ColorsService.prototype.getColor = function (object, name, graphId) {
        var objectColors = this.objectColorsMap[object];
        if (!objectColors) {
            return this.defaultColor;
        }
        return objectColors.getColor(name, graphId);
    };
    ColorsService.prototype.getColors = function (object, graphId) {
        var objectColors = this.objectColorsMap[object];
        if (!objectColors) {
            return [];
        }
        return objectColors.getColorList(graphId);
    };
    ColorsService.prototype.refresh = function () {
        for (var key in this.objectColorsMap) {
            var objectColors = this.objectColorsMap[key];
            objectColors.refresh();
        }
    };
    return ColorsService;
}());

//# sourceMappingURL=colors.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/drag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragService = (function () {
    function DragService() {
    }
    DragService.prototype.startDrag = function (zone) {
        this.zone = zone;
    };
    DragService.prototype.accepts = function (zone) {
        return zone == this.zone;
    };
    return DragService;
}());
DragService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], DragService);

//# sourceMappingURL=drag.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organizations_models_team_model__ = __webpack_require__("../../../../../src/app/organizations/models/team.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organizations_models_organization_model__ = __webpack_require__("../../../../../src/app/organizations/models/organization.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__organizations_models_member_model__ = __webpack_require__("../../../../../src/app/organizations/models/member.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__organizations_models_organization_resource_model__ = __webpack_require__("../../../../../src/app/organizations/models/organization-resource.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__docker_stacks_models_docker_stack_model__ = __webpack_require__("../../../../../src/app/docker-stacks/models/docker-stack.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__docker_stacks_models_docker_service_model__ = __webpack_require__("../../../../../src/app/docker-stacks/models/docker-service.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__docker_stacks_models_docker_container_model__ = __webpack_require__("../../../../../src/app/docker-stacks/models/docker-container.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_graph_historic_data_model__ = __webpack_require__("../../../../../src/app/models/graph-historic-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_graph_current_data_model__ = __webpack_require__("../../../../../src/app/models/graph-current-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__logs_models_log_model__ = __webpack_require__("../../../../../src/app/logs/models/log.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nodes_models_node_model__ = __webpack_require__("../../../../../src/app/nodes/models/node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_models_dashboard_model__ = __webpack_require__("../../../../../src/app/dashboard/models/dashboard.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_retryWhen__ = __webpack_require__("../../../../rxjs/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'RxJS/Rx';



















var httpRetryDelay = 200;
var httpRetryNumber = 3;
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.token = "";
        this.onHttpError = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.parseTime = __WEBPACK_IMPORTED_MODULE_16_d3__["timeParse"]("%Y-%m-%dT%H:%M:%S");
        //default dev debug url
        this.addr = "https://gw.local.appcelerator.io/v1";
        if (window.location.host.substring(0, 9) == "localhost") {
            console.log("Dev mode, Gateway url: " + this.addr);
            return;
        }
        var host = "gw." + window.location.host;
        this.addr = window.location.protocol + "//" + host + "/v1";
        console.log("Gateway url: " + this.addr);
    }
    HttpService.prototype.users = function () {
        var _this = this;
        return this.httpGet("/users")
            .map(function (res) {
            var data = res.json();
            var list = [];
            if (data.users) {
                for (var _i = 0, _a = data.users; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */](item.name, item.email, "User");
                    user.verified = item.is_verified;
                    user.tokenUsed = item.token_used;
                    user.createDate = _this.formatedDate(item.create_dt);
                    list.push(user);
                }
            }
            return list;
        });
    };
    HttpService.prototype.getVersion = function () {
        return this.httpGet("/version");
    };
    HttpService.prototype.changePassword = function (currentPwd, newPwd) {
        return this.httpPut("/users/password/change", { existingPassword: currentPwd, newPassword: newPwd });
    };
    HttpService.prototype.retrieveLogin = function (email) {
        return this.httpPost("/users/" + email + "/reminder", { email: email });
    };
    HttpService.prototype.resetPassword = function (name) {
        return this.httpPost("/users/" + name + "/password/reset", { name: name });
    };
    HttpService.prototype.createOrganization = function (orgName, orgEmail) {
        return this.httpPost("/organizations", { name: orgName, email: orgEmail });
    };
    HttpService.prototype.switchOrganization = function (orgName) {
        return this.httpPost("/switch", { account: orgName });
    };
    HttpService.prototype.deleteOrganization = function (orgName) {
        return this.httpDelete("/organizations/" + orgName);
    };
    HttpService.prototype.addUserToOrganization = function (orgName, memberName) {
        return this.httpPost("/organizations/" + orgName + "/members", { organization_name: orgName, user_name: memberName });
    };
    HttpService.prototype.removeUserFromOrganization = function (orgName, memberName) {
        return this.httpDelete("/organizations/" + orgName + "/members/" + memberName);
    };
    HttpService.prototype.createTeam = function (orgName, teamName) {
        return this.httpPost("/organizations/" + orgName + "/teams", { organization_name: orgName, team_name: teamName });
    };
    HttpService.prototype.deleteTeam = function (orgName, teamName) {
        return this.httpDelete("/organizations/" + orgName + "/teams/" + teamName);
    };
    HttpService.prototype.addUserToTeam = function (orgName, teamName, memberName) {
        return this.httpPost("/organizations/" + orgName + "/teams/" + teamName + "/members", { organization_name: orgName, team_name: teamName, user_name: memberName });
    };
    HttpService.prototype.removeUserFromTeam = function (orgName, teamName, memberName) {
        return this.httpDelete("/organizations/" + orgName + "/teams/" + teamName + "/members/" + memberName);
    };
    HttpService.prototype.userOrganization = function (userName) {
        //return this.http.get(this.addr+"/users/"+user.name+"/organizations", { headers: this.setHeaders() })
        return this.httpGet("/users/" + userName + "/organizations")
            .map(function (res) {
            var data = res.json();
            //console.log("data")
            //console.log(data)
            var list = [];
            if (data.organizations) {
                for (var _i = 0, _a = data.organizations; _i < _a.length; _i++) {
                    var org = _a[_i];
                    var newOrg = new __WEBPACK_IMPORTED_MODULE_5__organizations_models_organization_model__["a" /* Organization */](org.name, org.email);
                    if (org.members) {
                        for (var _b = 0, _c = org.members; _b < _c.length; _b++) {
                            var mem = _c[_b];
                            newOrg.members.push(new __WEBPACK_IMPORTED_MODULE_6__organizations_models_member_model__["a" /* Member */](mem.name, mem.role));
                        }
                    }
                    if (org.teams) {
                        for (var _d = 0, _e = org.teams; _d < _e.length; _d++) {
                            var team = _e[_d];
                            var newTeam = new __WEBPACK_IMPORTED_MODULE_4__organizations_models_team_model__["a" /* Team */](team.name);
                            if (team.members) {
                                for (var _f = 0, _g = team.members; _f < _g.length; _f++) {
                                    var mname = _g[_f];
                                    newTeam.members.push(new __WEBPACK_IMPORTED_MODULE_6__organizations_models_member_model__["a" /* Member */](mname, undefined));
                                }
                            }
                            if (team.resources) {
                                for (var _h = 0, _j = team.resources; _h < _j.length; _h++) {
                                    var res_1 = _j[_h];
                                    newTeam.resources.push(new __WEBPACK_IMPORTED_MODULE_7__organizations_models_organization_resource_model__["a" /* OrganizationResource */](res_1.id, "", ""));
                                }
                            }
                            newOrg.teams.push(newTeam);
                        }
                    }
                    list.push(newOrg);
                }
            }
            //console.log(list)
            return list;
        });
    };
    //role=0 Member
    //role=1 Owner
    HttpService.prototype.changeOrganizationMemberRole = function (orgName, userName, role) {
        return this.httpPut("/organizations/" + orgName + "/members/" + userName, {
            organization_name: orgName, user_name: userName, role: role
        });
    };
    HttpService.prototype.login = function (username, pwd) {
        return this.httpPost("/login", { name: username, password: pwd });
    };
    HttpService.prototype.signup = function (username, pwd, email) {
        return this.httpPost("/signup", { name: username, password: pwd, email: email, url: window.location.protocol + "//" + window.location.host });
    };
    HttpService.prototype.verify = function (token) {
        return this.httpPost("/verify/" + token, { token: token });
    };
    HttpService.prototype.registration = function () {
        return this.httpGet("/clusters/registration");
    };
    HttpService.prototype.removeUser = function (username) {
        return this.httpDelete("/users/" + username);
    };
    HttpService.prototype.stacks = function () {
        var _this = this;
        return this.httpGet("/stacks")
            .map(function (res) {
            var data = res.json();
            var list = [];
            if (data.entries) {
                for (var _i = 0, _a = data.entries; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var stack = new __WEBPACK_IMPORTED_MODULE_8__docker_stacks_models_docker_stack_model__["a" /* DockerStack */](item.stack.id, item.stack.name, item.services, item.stack.owner.name, item.stack.owner.type);
                    stack.set(_this.convertStatus(item.status), _this.formatedDate(item.stack.create_dt), item.total_services, item.running_services);
                    list.push(stack);
                }
            }
            return list;
        });
    };
    HttpService.prototype.deployStack = function (stackName, fileContent) {
        var data = [];
        for (var i = 0; i < fileContent.length; i++) {
            data.push(fileContent.charCodeAt(i));
        }
        return this.httpPost("/stacks", { name: stackName, compose: data });
    };
    HttpService.prototype.removeStack = function (stackName) {
        return this.httpDelete("/stacks/" + stackName);
    };
    HttpService.prototype.services = function (stackName) {
        var _this = this;
        return this.httpGet("/services/" + stackName)
            .map(function (res) {
            var data = res.json();
            console.log(data);
            var list = [];
            if (data.entries) {
                for (var _i = 0, _a = data.entries; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.service && item.service.id) {
                        var serv = new __WEBPACK_IMPORTED_MODULE_9__docker_stacks_models_docker_service_model__["a" /* DockerService */](_this.shortcutId(item.service.id), item.service.name, item.service.mode, item.service.image, item.service.tag);
                        serv.set(_this.convertStatus(item.status), item.total_tasks, item.ready_tasks);
                        list.push(serv);
                    }
                }
            }
            console.log(list);
            return list;
        });
    };
    HttpService.prototype.tasks = function (serviceId) {
        var _this = this;
        return this.httpGet("/tasks/" + serviceId)
            .map(function (res) {
            var data = res.json();
            console.log(data);
            var list = [];
            if (data.tasks) {
                for (var _i = 0, _a = data.tasks; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.id) {
                        var cont = new __WEBPACK_IMPORTED_MODULE_10__docker_stacks_models_docker_container_model__["a" /* DockerContainer */](_this.shortcutId(item.id), item.image, _this.convertStatus(item.current_state), _this.convertStatus(item.desired_state), _this.shortcutId(item.node_id));
                        list.push(cont);
                    }
                }
            }
            return list;
        });
    };
    HttpService.prototype.serviceScale = function (serviceId, replicas) {
        return this.httpPut("/scale/" + serviceId + "/" + replicas, { service_id: serviceId, replicas_number: replicas });
    };
    HttpService.prototype.organizationRessources = function () {
        return this.httpGet("/resources")
            .map(function (res) {
            var data = res.json();
            //console.log(data)
            var list = [];
            if (data.resources) {
                for (var _i = 0, _a = data.resources; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var type = "unknow:" + item.type;
                    if (!item.type || item.type == 'RESOURCE_STACK') {
                        type = "Stack";
                    }
                    else if (item.type == 'RESOURCE_DASHBOARD') {
                        type = "Dashboard";
                    }
                    var res_2 = new __WEBPACK_IMPORTED_MODULE_7__organizations_models_organization_resource_model__["a" /* OrganizationResource */](item.id, type, item.name);
                    list.push(res_2);
                }
            }
            return list;
        });
    };
    HttpService.prototype.addResourceToTeam = function (orgName, teamName, resourceId) {
        return this.httpPost("/resources/" + resourceId + "/organizations/" + orgName + "/teams/" + teamName, { organization_name: orgName, team_name: teamName, resource_id: resourceId });
    };
    HttpService.prototype.removeResourceFromTeam = function (orgName, teamName, resourceId) {
        return this.httpDelete("/resources/" + resourceId + "/organizations/" + orgName + "/teams/" + teamName);
    };
    HttpService.prototype.changeTeamResourcePermissionLevel = function (orgName, teamName, resourceId, level) {
        return this.httpPut("/resources/" + resourceId + "/organizations/" + orgName + "/teams/" + teamName, { organization_name: orgName, team_name: teamName, resource_id: resourceId, permission_level: level });
    };
    HttpService.prototype.nodes = function () {
        return this.httpGet("/nodes")
            .map(function (res) {
            var data = res.json();
            var list = [];
            if (data.entries) {
                for (var _i = 0, _a = data.entries; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var node = new __WEBPACK_IMPORTED_MODULE_14__nodes_models_node_model__["a" /* Node */](item.id);
                    node.name = item.name;
                    node.hostname = item.hostname;
                    node.role = item.role;
                    node.architecture = item.architecture;
                    node.os = item.os;
                    node.engine = item.engine;
                    node.status = item.status;
                    node.availability = item.availability;
                    node.leader = item.leader;
                    if (node.leader) {
                        node.role = 'leader';
                    }
                    node.addr = item.addr;
                    node.reachability = item.reachability;
                    node.labels = item.labels;
                    node.labelNames = Object.getOwnPropertyNames(item.labels);
                    list.push(node);
                }
            }
            return list;
        });
    };
    HttpService.prototype.logs = function (req) {
        return this.httpPost("/logs", req)
            .map(function (res) {
            var data = res.json();
            var list = [];
            if (data.entries) {
                for (var _i = 0, _a = data.entries; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var log = new __WEBPACK_IMPORTED_MODULE_13__logs_models_log_model__["a" /* Log */](item.timestamp, item.msg);
                    log.container_id = item.container_id;
                    log.container_name = item.container_mame;
                    log.container_short_name = item.container_short_name;
                    log.service_name = item.service_name;
                    log.service_id = item.service_id;
                    log.task_id = item.task_id;
                    log.stack_name = item.stack_name;
                    log.node_id = item.node_id;
                    list.push(log);
                }
            }
            return list;
        });
    };
    HttpService.prototype.stats = function (req) {
        if (req.time_group == "") {
            return this.statsCurrent(req);
        }
        return this.statsHistoric(req);
    };
    HttpService.prototype.statsHistoric = function (request) {
        var _this = this;
        return this.httpPost("/stats", request)
            .map(function (res) {
            var data = res.json();
            //console.log(data)
            var list = [];
            if (data.entries) {
                for (var _i = 0, _a = data.entries; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var datal = {};
                    var datalm = {};
                    if (request.stats_cpu) {
                        _this.setValue(datal, datalm, 'cpu-usage', item.cpu.total_usage, 1, 1);
                    }
                    if (request.stats_io) {
                        _this.setValue(datal, datalm, 'io-total', item.io.total, 1, 60);
                        _this.setValue(datal, datalm, 'io-write', item.io.write, 1, 60);
                        _this.setValue(datal, datalm, 'io-read', item.io.read, 1, 60);
                    }
                    if (request.stats_mem) {
                        _this.setValue(datal, datalm, 'mem-limit', item.mem.limit, 1, 1);
                        _this.setValue(datal, datalm, 'mem-maxusage', item.mem.maxusage, 1, 1);
                        if (request.format) {
                            _this.setValue(datal, datalm, 'mem-usage', item.mem.usage, 1, 1024 * 1024);
                        }
                        else {
                            _this.setValue(datal, datalm, 'mem-usage', item.mem.usage, 1, 1);
                        }
                        _this.setValue(datal, datalm, 'mem-usage-p', item.mem.usage_p, 100, 1);
                    }
                    if (request.stats_net) {
                        _this.setValue(datal, datalm, 'net-rx-bytes', item.net.rx_bytes, 1, 60);
                        _this.setValue(datal, datalm, 'net-rx-packets', item.net.rx_packets, 1, 60);
                        _this.setValue(datal, datalm, 'net-tx-bytes', item.net.tx_bytes, 1, 60);
                        _this.setValue(datal, datalm, 'net-tx-packets', item.net.tx_packets, 1, 60);
                        _this.setValue(datal, datalm, 'net-total-bytes', item.net.total_bytes, 1, 60);
                    }
                    var hgraph = new __WEBPACK_IMPORTED_MODULE_11__models_graph_historic_data_model__["a" /* GraphHistoricData */](_this.parseTime(item.group));
                    hgraph.name = item.sgroup;
                    hgraph.values = datal;
                    hgraph.sdate = item.group;
                    hgraph.values = datal;
                    if (datal['mem-usage-p'] > 100) {
                        hgraph.values = datalm;
                    }
                    list.push(hgraph);
                }
            }
            return list;
        });
    };
    HttpService.prototype.statsCurrent = function (request) {
        var _this = this;
        return this.httpPost("/stats", request)
            .map(function (res) {
            var data = res.json();
            //console.log(data)
            var list = [];
            if (data.entries) {
                for (var _i = 0, _a = data.entries; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var datal = {};
                    if (request.stats_cpu) {
                        _this.setValue(datal, undefined, 'cpu-usage', item.cpu.total_usage, 1, 1);
                    }
                    if (request.stats_io) {
                        _this.setValue(datal, undefined, 'io-total', item.io.total, 1, 60);
                        _this.setValue(datal, undefined, 'io-write', item.io.write, 1, 60);
                        _this.setValue(datal, undefined, 'io-read', item.io.read, 1, 60);
                    }
                    if (request.stats_mem) {
                        _this.setValue(datal, undefined, 'mem-limit', item.mem.limit, 1, 1);
                        _this.setValue(datal, undefined, 'mem-maxusage', item.mem.maxusage, 1, 1);
                        _this.setValue(datal, undefined, 'mem-usage', item.mem.usage, 1, 1);
                        _this.setValue(datal, undefined, 'mem-usage-p', item.mem.usage_p, 100, 1);
                    }
                    if (request.stats_net) {
                        _this.setValue(datal, undefined, 'net-rx-bytes', item.net.rx_bytes, 1, 60);
                        _this.setValue(datal, undefined, 'net-rx-packets', item.net.rx_packets, 1, 60);
                        _this.setValue(datal, undefined, 'net-tx-bytes', item.net.tx_bytes, 1, 60);
                        _this.setValue(datal, undefined, 'net-tx-packets', item.net.tx_packets, 1, 60);
                        _this.setValue(datal, undefined, 'net-total-bytes', item.net.total_bytes, 1, 60);
                    }
                    list.push(new __WEBPACK_IMPORTED_MODULE_12__models_graph_current_data_model__["a" /* GraphCurrentData */](item.group, datal));
                }
            }
            return list;
        });
    };
    HttpService.prototype.setValue = function (datal, datalm, name, val, mul, div) {
        if (datalm) {
            datalm[name] = datal[name];
            if (!datalm[name]) {
                datalm[name] = 0;
            }
        }
        datal[name] = this.getValue(val, mul, div);
    };
    HttpService.prototype.getValue = function (val, mul, div) {
        if (val) {
            return (val * mul) / div;
        }
        return 0;
    };
    HttpService.prototype.createDashboard = function (name, data) {
        return this.httpPost("/dashboards", { name: name, data: data })
            .map(function (res) {
            var data = res.json();
            if (data.dashboard) {
                return data.dashboard.id;
            }
            return undefined;
        });
    };
    HttpService.prototype.getDashboard = function (id) {
        var _this = this;
        return this.httpGet("/dashboards/" + id)
            .map(function (res) {
            var data = res.json();
            if (data.dashboard) {
                var dashboard = new __WEBPACK_IMPORTED_MODULE_15__dashboard_models_dashboard_model__["a" /* Dashboard */](data.dashboard.id, data.dashboard.name, data.dashboard.data);
                var sdate = _this.formatedDate(data.dashboard.create_dt);
                dashboard.set(data.dashboard.owner.name, data.dashboard.owner.type, sdate);
                return dashboard;
            }
            return undefined;
        });
    };
    HttpService.prototype.listDashboard = function () {
        var _this = this;
        return this.httpGet("/dashboards")
            .map(function (res) {
            var data = res.json();
            var list = [];
            if (data.dashboards) {
                for (var _i = 0, _a = data.dashboards; _i < _a.length; _i++) {
                    var dash = _a[_i];
                    var dashboard = new __WEBPACK_IMPORTED_MODULE_15__dashboard_models_dashboard_model__["a" /* Dashboard */](dash.id, dash.name, dash.data);
                    var sdate = _this.formatedDate(dash.create_dt);
                    dashboard.set(dash.owner.name, dash.owner.type, sdate);
                    list.push(dashboard);
                }
            }
            list.sort(function (a, b) {
                if (a.date < b.date) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
            return list;
        });
    };
    HttpService.prototype.updateDashboardName = function (id, name) {
        return this.httpPut("/dashboards/" + id + "/name/" + name, {});
    };
    HttpService.prototype.updateDashboard = function (id, data) {
        return this.httpPut("/dashboards/" + id + "/data", { id: id, data: data });
    };
    HttpService.prototype.removeDashboard = function (id) {
        return this.httpDelete("/dashboards/" + id);
    };
    //--------------------------------------------------------------------------------------
    // http core functions
    //--------------------------------------------------------------------------------------
    HttpService.prototype.formatedDate = function (daten) {
        var date = new Date(daten * 1000);
        var num = "" + date.getDate();
        if (date.getDate() < 10) {
            num = '0' + num;
        }
        var month = "" + (date.getMonth() + 1);
        if (date.getMonth() + 1 < 10) {
            month = '0' + month;
        }
        return date.getFullYear() + "-" +
            month + "-" +
            num + " " +
            date.getHours() + ":" +
            date.getMinutes();
    };
    HttpService.prototype.convertStatus = function (status) {
        if (status) {
            return status.toLowerCase();
        }
        return "unknow";
    };
    HttpService.prototype.shortcutId = function (id) {
        if (!id) {
            return "unknow";
        }
        return id.substring(0, 12);
    };
    HttpService.prototype.setHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.set('Authorization', 'amp ' + this.token);
        return headers;
    };
    HttpService.prototype.setToken = function (token) {
        this.token = token;
    };
    HttpService.prototype.httpGet = function (url) {
        var headers = this.setHeaders();
        return this.http.get(this.addr + url, { headers: this.setHeaders() })
            .retryWhen(function (e) { return e.scan(function (errorCount, err) {
            console.log("retry: " + (errorCount + 1));
            if (errorCount >= httpRetryNumber - 1) {
                throw err;
            }
            return errorCount + 1;
        }, 0).delay(httpRetryDelay); });
    };
    HttpService.prototype.httpDelete = function (url) {
        var headers = this.setHeaders();
        return this.http.delete(this.addr + url, { headers: this.setHeaders() })
            .retryWhen(function (e) { return e.scan(function (errorCount, err) {
            console.log("retry: " + (errorCount + 1));
            if (errorCount >= httpRetryNumber - 1) {
                throw err;
            }
            return errorCount + 1;
        }, 0).delay(httpRetryDelay); });
    };
    HttpService.prototype.httpPost = function (url, data) {
        var headers = this.setHeaders();
        return this.http.post(this.addr + url, data, { headers: this.setHeaders() })
            .retryWhen(function (e) { return e.scan(function (errorCount, err) {
            console.log("retry: " + (errorCount + 1));
            if (errorCount >= httpRetryNumber - 1) {
                throw err;
            }
            return errorCount + 1;
        }, 0).delay(httpRetryDelay); });
    };
    HttpService.prototype.httpPut = function (url, data) {
        var headers = this.setHeaders();
        return this.http.put(this.addr + url, data, { headers: this.setHeaders() })
            .retryWhen(function (e) { return e.scan(function (errorCount, err) {
            console.log("retry: " + (errorCount + 1));
            if (errorCount >= httpRetryNumber - 1) {
                throw err;
            }
            return errorCount + 1;
        }, 0).delay(httpRetryDelay); });
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
var ListService = (function () {
    function ListService() {
        this.allData = [];
        this.filteredData = [];
        this.filteredDataSize = 0;
        this.filterValue = "";
        this.pageIndex = 0;
        this.pageSize = 0;
    }
    ListService.prototype.setFilterFunction = function (filter) {
        this.filterFunction = filter;
    };
    ListService.prototype.setData = function (data) {
        this.allData = data;
        this.filter(this.filterValue);
    };
    ListService.prototype.getData = function () {
        return this.filteredData;
    };
    ListService.prototype.filter = function (value) {
        var _this = this;
        this.filterValue = value;
        if (value == '') {
            this.filteredData = this.page(this.allData.slice());
        }
        this.filteredData = this.page(this.allData.filter(function (item) {
            return _this.filterFunction(item, value);
        }));
    };
    ListService.prototype.order = function (field, asc) {
        this.filteredData.sort(function (a, b) {
            return a[field].localeCompare(b[field]) * asc;
        });
    };
    ListService.prototype.orderNum = function (field, asc) {
        this.filteredData.sort(function (a, b) {
            return (a[field] - b[field]) * asc;
        });
    };
    ListService.prototype.page = function (list) {
        this.filteredDataSize = list.length;
        if (this.pageSize == 0) {
            return list;
        }
        if (this.pageIndex * this.pageSize >= list.length) {
            return [];
        }
        if (this.pageIndex * this.pageSize + this.pageSize >= list.length) {
            return list.slice(this.pageIndex * this.pageSize);
        }
        return list.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
    };
    ListService.prototype.setPageSize = function (size) {
        this.pageSize = size;
        this.filter(this.filterValue);
    };
    ListService.prototype.setPageIndex = function (relative, absolute) {
        //console.log("r="+relative+", abs="+absolute+", index="+this.pageIndex)
        if (relative == 0) {
            this.pageIndex = absolute - 1;
        }
        else if (relative == 1) {
            this.pageIndex++;
        }
        else if (relative == -1) {
            this.pageIndex--;
        }
        //console.log("dataLength="+this.filteredDataSize+", pageSize="+this.pageSize)
        var index = Math.floor(this.filteredDataSize / this.pageSize);
        var modulus = this.filteredDataSize % this.pageSize;
        //console.log("newindexPage="+this.pageIndex+", index="+index+", modulo="+modulus)
        if (this.pageIndex > index) {
            this.pageIndex = index;
        }
        else if (this.pageIndex == index && modulus == 0) {
            this.pageIndex = index - 1;
        }
        if (this.pageIndex < 0) {
            this.pageIndex = 0;
        }
        //console.log("index="+this.pageIndex)
        this.filter(this.filterValue);
    };
    return ListService;
}());

//# sourceMappingURL=list.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item_menu_model__ = __webpack_require__("../../../../../src/app/models/item-menu.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_app_window_model__ = __webpack_require__("../../../../../src/app/models/app-window.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = (function () {
    function MenuService(router) {
        this.router = router;
        this.currentMenuItem = new __WEBPACK_IMPORTED_MODULE_2__models_item_menu_model__["a" /* ItemMenu */]("", "");
        this.tooltipLabel = "";
        this.autoRefresh = false;
        this.onRefreshClicked = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.onWindowResize = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.paths = [];
        this.lastPath = "";
        this.cursorClass = "";
        this.paddingLeftMenu = 250;
        this.appWindow = new __WEBPACK_IMPORTED_MODULE_3__models_app_window_model__["a" /* AppWindow */](document.documentElement.clientWidth, document.documentElement.clientHeight);
    }
    MenuService.prototype.resize = function (evt) {
        this.appWindow = new __WEBPACK_IMPORTED_MODULE_3__models_app_window_model__["a" /* AppWindow */](event.target.innerWidth, event.target.innerHeight);
        this.onWindowResize.next(this.appWindow);
    };
    MenuService.prototype.setItemMenu = function (name, description) {
        this.tooltipLabel = "";
        var item = new __WEBPACK_IMPORTED_MODULE_2__models_item_menu_model__["a" /* ItemMenu */](name, description);
        this.currentMenuItem = item;
    };
    MenuService.prototype.pushPath = function (path) {
        if (!path || this.lastPath == path) {
            return;
        }
        this.lastPath = path;
        //console.log("push path: "+path)
        this.paths.push(path);
    };
    MenuService.prototype.getPreviousPath = function () {
        return this.paths.pop();
    };
    MenuService.prototype.returnToPreviousPath = function () {
        var path = this.paths.pop();
        path = this.paths.pop();
        if (path) {
            this.navigate(path.split('/'));
        }
    };
    MenuService.prototype.navigate = function (path) {
        this.router.navigate(path);
    };
    MenuService.prototype.refresh = function () {
        this.autoRefresh = false;
        this.onRefreshClicked.next();
    };
    MenuService.prototype.waitingCursor = function (mode) {
        if (mode) {
            this.cursorClass = 'waiting';
        }
        else {
            this.cursorClass = '';
        }
    };
    MenuService.prototype.getCursorClass = function () {
        return this.cursorClass;
    };
    MenuService.prototype.setCurrentTimer = function (timer) {
        if (this.currentTimer) {
            clearInterval(this.currentTimer);
        }
        this.currentTimer = timer;
    };
    MenuService.prototype.clearCurrentTimer = function () {
        if (this.currentTimer) {
            clearInterval(this.currentTimer);
        }
        this.currentTimer = undefined;
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], MenuService);

var _a;
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/swarms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_swarm_model__ = __webpack_require__("../../../../../src/app/models/swarm.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwarmsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwarmsService = (function () {
    function SwarmsService() {
        this.swarms = [];
        this.allSwarm = new __WEBPACK_IMPORTED_MODULE_1__models_swarm_model__["a" /* Swarm */]("<all>", "");
        this.currentSwarm = this.allSwarm;
    }
    return SwarmsService;
}());
SwarmsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SwarmsService);

//# sourceMappingURL=swarms.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organizations_models_member_model__ = __webpack_require__("../../../../../src/app/organizations/models/member.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersService = (function () {
    function UsersService(httpService, organizationsService, menuService) {
        this.httpService = httpService;
        this.organizationsService = organizationsService;
        this.menuService = menuService;
        this.onUsersLoaded = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.onUsersError = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.users = [];
        this.noLoginUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]('not signin', '', '');
        this.currentUser = this.noLoginUser;
        this.onUserLogout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.loadUsers(true);
    }
    UsersService.prototype.match = function (item, value) {
        if (item.name && item.name.includes(value)) {
            return true;
        }
        if (item.email && item.email.includes(value)) {
            return true;
        }
        if (item.member && item.member && item.member.role.includes(value)) {
            return true;
        }
        return false;
    };
    UsersService.prototype.loadUsers = function (refresh) {
        var _this = this;
        if (!refresh && this.users.length > 0) {
            this.onUsersLoaded.next();
            return;
        }
        this.httpService.users().subscribe(function (data) {
            _this.users = data;
            _this.onUsersLoaded.next();
        }, function (error) {
            _this.onUsersError.next(error);
        });
    };
    UsersService.prototype.logout = function () {
        this.currentUser = this.noLoginUser;
        localStorage.removeItem('token');
        this.menuService.navigate(["/auth", "signin"]);
    };
    UsersService.prototype.login = function (token) {
        localStorage.setItem('token', JSON.stringify({ token: token }));
        this.setCurrentUser(token, true);
    };
    UsersService.prototype.setCurrentUser = function (token, nav) {
        var _this = this;
        var plainToken = this.parseJwt(token);
        if (plainToken.Type != 'login' || plainToken.iss != 'amplifier') {
            return;
        }
        this.httpService.setToken(token);
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */](plainToken.AccountName, "", "");
        localStorage.setItem('currentUser', JSON.stringify({ username: this.currentUser.name, email: this.currentUser.email }));
        this.httpService.userOrganization(this.currentUser.name).subscribe(function (data) {
            _this.organizationsService.organizations = data;
            _this.organizationsService.currentOrganization = _this.organizationsService.noOrganization;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var org = data_1[_i];
                if (org.name == 'so') {
                    _this.currentUser.sp = true;
                }
                if (org.name == plainToken.ActiveOrganization) {
                    _this.organizationsService.currentOrganization = org;
                }
            }
            _this.httpService.users().subscribe(function (data) {
                _this.users = data;
                if (nav) {
                    _this.menuService.navigate(['/amp', 'dashboard']);
                }
            }, function (error) {
                console.log(error);
                _this.logout();
                _this.onUsersError.next(error);
            });
        }, function (error) {
            console.log(error);
            _this.logout();
            _this.onUsersError.next(error);
        });
    };
    UsersService.prototype.switchToUserOnly = function () {
        var _this = this;
        if (this.currentUser) {
            this.httpService.switchOrganization(this.currentUser.name).subscribe(function (rep) {
                var data = rep.json();
                var token = data.auth;
                _this.httpService.setToken(token);
                localStorage.setItem('token', JSON.stringify({ token: token }));
                _this.organizationsService.currentOrganization = _this.organizationsService.noOrganization;
            });
        }
    };
    UsersService.prototype.parseJwt = function (token) {
        if (!token) {
            return {};
        }
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        var ret = JSON.parse(window.atob(base64));
        console.log("token organization: " + ret.ActiveOrganization);
        return ret;
    };
    UsersService.prototype.signup = function (user, pwd) {
        this.users.push(user);
        //this.onUserEndCreateMode.emit();
        localStorage.setItem('currentUser', JSON.stringify({ username: user.name, email: user.email }));
        this.menuService.navigate(["/auth", "signin"]);
    };
    UsersService.prototype.isAuthenticated = function () {
        if (this.currentUser === this.noLoginUser) {
            return false;
        }
        return true;
    };
    UsersService.prototype.returnToCaller = function () {
        if (this.isAuthenticated()) {
            this.menuService.navigate(["/amp", "users"]);
        }
        else {
            this.menuService.navigate(["/auth", "signin"]);
        }
    };
    //to be refactor with associative array
    UsersService.prototype.getAllNoMembers = function (members) {
        var list = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            var found = false;
            for (var _b = 0, members_1 = members; _b < members_1.length; _b++) {
                var member = members_1[_b];
                if (member.userName == user.name) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                list.push(new __WEBPACK_IMPORTED_MODULE_4__organizations_models_member_model__["a" /* Member */](user.name, undefined));
            }
        }
        return list;
    };
    UsersService.prototype.getUserList = function (orgName) {
        var userList = [];
        for (var _i = 0, _a = this.organizationsService.organizations; _i < _a.length; _i++) {
            var org = _a[_i];
            if (org.name == orgName) {
                for (var _b = 0, _c = org.members; _b < _c.length; _b++) {
                    var member = _c[_b];
                    for (var _d = 0, _e = this.users; _d < _e.length; _d++) {
                        var user = _e[_d];
                        if (member.userName == user.name) {
                            user.member = member;
                            userList.push(user);
                        }
                    }
                }
            }
        }
        return userList;
    };
    return UsersService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], UsersService.prototype, "onUserLogout", void 0);
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__organizations_services_organizations_service__["a" /* OrganizationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_menu_service__["a" /* MenuService */]) === "function" && _c || Object])
], UsersService);

var _a, _b, _c;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/settings/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.sidebar {\n  position: absolute;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  text-indent: 20px;\n  list-style: none;\n}\n\nul.sidebar .sidebar-title {\n  height: auto;\n}\n\nul.sidebar .sidebar-list a.active {\n  color: #fff;\n  text-indent: 22px;\n  border-left: 3px solid #fff;\n  background: #2d3e63;\n}\n\nul.sidebar .sidebar-list .sidebar-sublist a {\n  text-indent: 35px;\n  font-size: 12px;\n  color: #b2bfdc;\n  line-height: 40px;\n}\n\nul.sidebar .sidebar-list .sidebar-sublist a.active {\n  color: #fff;\n  border-left: 3px solid #fff;\n  background: #2d3e63;\n}\n\na.sidebarm {\n  width: 70px;\n  text-align: center;\n}\n\n.amp-title {\n  font-size: 12px;\n  font-family:'Verdana';\n  color: white;\n}\n\n.sidebar-footer {\n  height:70px\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n to be completly refactor in pur bootstrap classes in v1.1\n-->\n\n<div id=\"sidebar-wrapper\" *ngIf=\"sidebarDisplay=='normal'\">\n\n  <ul class=\"sidebar\">\n    <li class=\"sidebar-main\">\n      <a (click)=\"minimize()\" class=\"interactive amp-title\">\n        <!--<img src=\"/assets/images/amp.png\" alt=\"amp\" class=\"img-rounded\" style=\"max-height:35px\">-->\n        AMP\n        <span class=\"menu-icon glyphicon glyphicon-transfer\"></span>\n      </a>\n    </li>\n    <li class=\"sidebar-title\"><span></span></li>\n\n    <li class=\"sidebar-list\">\n      <a routerLink=\"/amp/dashboard\">\n        Dashboard\n        <span class=\"menu-icon fa fa-tachometer\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\">\n      <a routerLink=\"/amp/stacks\">\n        Stacks\n        <span class=\"menu-icon fa fa-server\"></span></a>\n    </li>\n\n    <li class=\"sidebar-list\">\n      <a routerLink=\"/amp/logs\">\n        Logs\n        <span class=\"menu-icon fa fa-list-alt\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\">\n      <a routerLink=\"/amp/metrics/global/single/all\">\n        Metrics\n        <span class=\"menu-icon glyphicon glyphicon-stats\"></span></a>\n    </li>\n\n    <li class=\"sidebar-list\">\n      <a routerLink=\"/amp/nodes\">\n        Nodes\n        <span class=\"menu-icon glyphicon glyphicon-hdd\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-title\"><span>Settings</span></li>\n\n    <li class=\"sidebar-list\">\n      <a routerLink=\"/amp/organizations\">\n        Organizations\n        <span class=\"menu-icon glyphicon glyphicon-book\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\">\n      <a routerLink=\"/amp/users\">\n        Users\n        <span class=\"menu-icon fa fa-user-plus\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\">\n      <a routerLink=\"/amp/password\">\n        Password\n        <span class=\"menu-icon fa fa-user\"></span>\n      </a>\n    </li>\n\n  </ul>\n  <div class=\"sidebar-footer\">\n    <div class=\"col-xs-12\" style=\"height:20px;padding-top:5px;padding-bottom:5px\">\n      <a>\n        <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n        AMP {{ serverVersion }}\n      </a>\n    </div>\n    <div *ngIf=\"serverVersion!==portalVersion\" class=\"col-xs-12\" style=\"height:20px;padding-top:5px;padding-bottom:5px\">\n      <a style=\"color:red\">\n        <i class=\"fa fa-github\" aria-hidden=\"true\" style=\"color:red\"></i>\n        PortalVersion: {{ portalVersion }}\n      </a>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"sidebarDisplay=='mini'\" id=\"sidebar-wrapper\" style=\"width:70px;margin-right:0px;padding-right:0px\">\n  <ul class=\"sidebar\" style=\"width:70px;margin-right:0px;padding-right:0px\">\n\n    <li class=\"sidebar-list\">\n      <a class=\"sidebarm\" (click)=\"minimize()\">\n        <span style=\"color:white;font-size: 18px;margin-top:20px;margin-bottom:25px\" class=\"menu-icon glyphicon glyphicon-transfer\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\" tooltipLabel=\"dashboard\" tooltip>\n      <a class=\"sidebarm\" routerLink=\"/amp/dashboard\">\n        <span class=\"menu-icon fa fa-tachometer\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\" tooltipLabel=\"stacks\" tooltip>\n      <a class=\"sidebarm\" routerLink=\"/amp/stacks\">\n        <span class=\"menu-icon fa fa-server\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\" tooltipLabel=\"logs\" tooltip>\n      <a class=\"sidebarm\" routerLink=\"/amp/logs\">\n        <span class=\"menu-icon fa fa-list-alt\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\" tooltipLabel=\"stats\" tooltip>\n      <a class=\"sidebarm\" routerLink=\"/amp/metrics/global/single/all\">\n        <span class=\"menu-icon glyphicon glyphicon-stats\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\" tooltipLabel=\"nodes\" tooltip>\n      <a class=\"sidebarm\" routerLink=\"/amp/nodes\">\n        <span class=\"menu-icon glyphicon glyphicon-hdd\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\" tooltipLabel=\"organizations\" tooltip>\n      <a class=\"sidebarm\" routerLink=\"/amp/organizations\">\n        <span class=\"menu-icon glyphicon glyphicon-book\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\" tooltipLabel=\"users\" tooltip>\n      <a class=\"sidebarm\" routerLink=\"/amp/users\">\n        <span class=\"menu-icon fa fa-user-plus\"></span>\n      </a>\n    </li>\n\n    <li class=\"sidebar-list\" tooltipLabel=\"password\" tooltip>\n      <a class=\"sidebarm\" routerLink=\"/amp/password\">\n        <span class=\"menu-icon fa fa-user\"></span>\n      </a>\n    </li>\n\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_swarms_service__ = __webpack_require__("../../../../../src/app/services/swarms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = (function () {
    function SidebarComponent(menuService, organizationsService, swarmsService, httpService) {
        this.menuService = menuService;
        this.organizationsService = organizationsService;
        this.swarmsService = swarmsService;
        this.httpService = httpService;
        this.onMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.sidebarDisplay = "normal";
        this.serverVersion = "";
        this.portalVersion = "v0.12.0-dev";
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.loadVersion();
        this.sidebarDisplay = localStorage.getItem('sidebar');
        if (!this.sidebarDisplay) {
            this.sidebarDisplay = 'normal';
        }
        this.resize();
    };
    SidebarComponent.prototype.minimize = function () {
        if (this.sidebarDisplay == 'normal') {
            this.sidebarDisplay = 'mini';
        }
        else {
            this.sidebarDisplay = 'normal';
        }
        localStorage.setItem('sidebar', this.sidebarDisplay);
        this.resize();
    };
    SidebarComponent.prototype.resize = function () {
        if (this.sidebarDisplay == 'mini') {
            this.menuService.paddingLeftMenu = 70;
            __WEBPACK_IMPORTED_MODULE_5_jquery__('.sidebar-list').width(70);
        }
        else {
            this.menuService.paddingLeftMenu = 250;
            __WEBPACK_IMPORTED_MODULE_5_jquery__('.sidebar-list').width(250);
        }
        this.menuService.onWindowResize.next(this.menuService.appWindow);
    };
    SidebarComponent.prototype.loadVersion = function () {
        var _this = this;
        this.httpService.getVersion().subscribe(function (data) {
            var version = data.json();
            console.log("server version");
            console.log(version);
            _this.serverVersion = version.info.version;
        }, function (err) {
            console.log(err);
            _this.serverVersion = "Server error";
        });
    };
    return SidebarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], SidebarComponent.prototype, "onMenu", void 0);
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__organizations_services_organizations_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__organizations_services_organizations_service__["a" /* OrganizationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_swarms_service__["a" /* SwarmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_swarms_service__["a" /* SwarmsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === "function" && _d || Object])
], SidebarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/swarms/swarms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/swarms/swarms.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/swarms/swarms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwarmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwarmsComponent = (function () {
    function SwarmsComponent(menuService) {
        this.menuService = menuService;
    }
    SwarmsComponent.prototype.ngOnInit = function () {
        this.menuService.setItemMenu('swarms', 'List');
    };
    return SwarmsComponent;
}());
SwarmsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-swarms',
        template: __webpack_require__("../../../../../src/app/swarms/swarms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/swarms/swarms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], SwarmsComponent);

var _a;
//# sourceMappingURL=swarms.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.panel-body {\n    background-color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div class=\"pull-left\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>{{title}}</div>\n\n      <div class=\"panel-body\">\n        <div classes=\"col-lg-12\">\n          <div class=\"pull-left\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n              <button *ngIf=\"orgName\"\n                type=\"button\"\n                class=\"btn btn-primary\"\n                (click)=returnBack()>\n                <i class=\"glyphicon glyphicon glyphicon-backward\"></i>\n              </button>\n              <button\n                type=\"button\" class=\"btn btn-danger\"\n                [disabled]=\"selectedUser.name==''\"\n                (click)=\"removeUser()\">\n                <i class=\"fa fa-trash space-right\" aria-hidden=\"true\"></i>\n                Remove\n              </button>\n              <button *ngIf=\"!orgName\"\n                type=\"button\"\n                class=\"btn btn-primary\"\n                routerLink=\"/amp/signup/internal\">\n                <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n                Add user\n              </button>\n            </div>\n          </div>\n          <div class=\"pull-right\">\n            <input\n              #filter\n              type=\"text\"\n              id=\"filter\"\n              placeholder=\"Filter...\"\n              class=\"form-control input-sm\"\n              (keyup)=\"listService.filter(filter.value)\"/>\n          </div>\n        </div>\n      </div>\n\n      <span class=\"help-block\" style=\"color:red;margin-left:20px\">{{ message }}</span>\n\n      <div class=\"row\" [style.height.px]=\"listHeight\" style=\"overflow-y:scroll;margin-bottom:30px\">\n        <div classes=\"no-padding\">\n          <div class=\"\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th>\n                    <input type=\"checkbox\" (change)=\"selectAllItems()\" />\n                  </th>\n                  <th>\n                    <a>\n                      Name\n                      <span (click)=\"listService.order('name', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('name', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Email\n                      <span (click)=\"listService.order('email', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('email', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a>\n                      Created\n                      <span (click)=\"listService.order('date', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('date', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th *ngIf=\"orgName\">\n                    <a>\n                      Role\n                      <span (click)=\"listService.order('role', 1)\" class=\"glyphicon glyphicon-chevron-down\"></span>\n                      <span (click)=\"listService.order('role', -1)\" class=\"glyphicon glyphicon-chevron-up\"></span>\n                    </a>\n                  </th>\n                  <th>\n                    <a ui-sref=\"users\">\n                      Verified\n                    </a>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"ng-scope\" (click)=selectUser(user.name) *ngFor=\"let user of listService.getData()\">\n                  <td><input type=\"checkbox\" [checked]=\"user.name===selectedUser.name\" (click)=selectUser(user.name)></td>\n                  <td>{{ user.name }}</td>\n                  <td>{{ user.email }}</td>\n                  <td>{{ user.createDate }}</td>\n                  <td *ngIf=\"orgName\">\n                    <div class=\"btn dropdown\" style=\"padding:0px\">\n                      <button class=\"dropdown btn btn-default dropdown-toggle\" style=\"border:none;background-color:white\" type=\"button\" id=\"object\" data-toggle=\"dropdown\">\n                        {{ user.member.role }}\n                        <i *ngIf=\"user.role=='Owner'\"\n                          class=\"fa fa-user-circle-o\"\n                          aria-hidden=\"true\" style=\"margin-left: 2px;\">\n                        </i>\n                        <i *ngIf=\"user.role=='Member'\"\n                          class=\"fa fa-user\"\n                          aria-hidden=\"true\" style=\"margin-left: 2px;\">\n                        </i>\n                        <span class=\"caret\" style=\"cursor:pointer;color:black\"></span>\n                      </button>\n                      <div class=\"dropdown-menu\">\n                        <li *ngIf=\"user.member.role=='Member'\"><a (click)=\"setUserRole(user, 'Owner')\">Grant to Owner</a></li>\n                        <li *ngIf=\"user.member.role=='Owner'\"><a (click)=\"setUserRole(user, 'Member')\">Grant to Member</a></li>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <label class=\"switch\" style=\"margin-left: 20px;\">\n                      <input type=\"checkbox\" disabled [checked]=\"user.verified\"><i></i>\n                    </label>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organizations_services_organizations_service__ = __webpack_require__("../../../../../src/app/organizations/services/organizations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_menu_service__ = __webpack_require__("../../../../../src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsersComponent = (function () {
    function UsersComponent(usersService, organizationsService, listService, menuService, httpService, route) {
        this.usersService = usersService;
        this.organizationsService = organizationsService;
        this.listService = listService;
        this.menuService = menuService;
        this.httpService = httpService;
        this.route = route;
        this.createMode = false;
        this.emptyUser = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]("", "", "");
        this.selectedUser = this.emptyUser;
        this.message = "";
        this.title = "users";
        this.orgName = "";
        this.changeRoleTitle = "Update role";
        this.listHeight = 400;
        listService.setFilterFunction(usersService.match);
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = " Users";
        this.menuService.setItemMenu('users', 'List');
        this.resize(this.menuService.appWindow);
        this.menuService.onWindowResize.subscribe(function (win) {
            _this.resize(win);
        });
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.orgName = params['orgName'];
            if (_this.orgName) {
                _this.title = " Organization " + _this.orgName + ": users";
            }
            //update user list if users list reloaded
            _this.usersService.onUsersLoaded.subscribe(function () {
                if (!_this.orgName) {
                    _this.listService.setData(_this.usersService.users);
                }
            });
            //update orgName user list if organization users list reloaded
            _this.organizationsService.onOrganizationsLoaded.subscribe(function () {
                if (_this.orgName) {
                    _this.listService.setData(_this.usersService.getUserList(_this.orgName));
                }
            });
            //reload users list on refresh click
            _this.menuService.onRefreshClicked.subscribe(function () {
                if (_this.orgName) {
                    _this.organizationsService.loadOrganizations(_this.usersService.currentUser.name, true);
                }
                else {
                    _this.usersService.loadUsers(true);
                }
            });
            //if user list alreday in memory, don't reload
            if (_this.orgName) {
                //load orgName users only if not already in memory
                if (_this.organizationsService.organizations.length == 0) {
                    _this.organizationsService.loadOrganizations(_this.usersService.currentUser.name, true);
                }
                else {
                    _this.listService.setData(_this.usersService.getUserList(_this.orgName));
                }
            }
            else {
                //load all users only if not already in memory
                if (_this.usersService.users.length == 0) {
                    _this.usersService.loadUsers(true);
                }
                else {
                    _this.listService.setData(_this.usersService.users);
                }
            }
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    UsersComponent.prototype.setCreateMode = function (mode) {
        this.createMode = mode;
    };
    UsersComponent.prototype.selectAllItems = function () {
        for (var _i = 0, _a = this.usersService.users; _i < _a.length; _i++) {
            var user = _a[_i];
            user.checked = true;
        }
    };
    UsersComponent.prototype.selectUser = function (name) {
        this.selectedUser = this.emptyUser;
        for (var _i = 0, _a = this.usersService.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.name == name) {
                this.selectedUser = user;
            }
        }
    };
    UsersComponent.prototype.removeUser = function () {
        var _this = this;
        if (this.orgName) {
            this.httpService.removeUserFromOrganization(this.orgName, this.selectedUser.name).subscribe(function (data) {
                _this.organizationsService.loadOrganizations(_this.usersService.currentUser.name, true);
            }, function (error) {
                var data = error.json();
                _this.message = data.error;
            });
        }
        else {
            this.httpService.removeUser(this.selectedUser.name).subscribe(function (data) {
                _this.usersService.loadUsers(true);
            }, function (error) {
                var data = error.json();
                _this.message = data.error;
            });
        }
    };
    UsersComponent.prototype.returnBack = function () {
        this.menuService.returnToPreviousPath();
    };
    UsersComponent.prototype.resize = function (win) {
        this.listHeight = win.height - 240;
    };
    UsersComponent.prototype.setUserRole = function (user, role) {
        var _this = this;
        if (user.member.role != role) {
            var nrole = 0;
            if (role == 'Owner') {
                nrole = 1;
            }
            this.httpService.changeOrganizationMemberRole(this.orgName, user.name, nrole).subscribe(function () {
                user.member.role = role;
            }, function (err) {
                var error = err.json();
                _this.message = error.error;
            });
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_list_service__["a" /* ListService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__organizations_services_organizations_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__organizations_services_organizations_service__["a" /* OrganizationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_list_service__["a" /* ListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_menu_service__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], UsersComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map