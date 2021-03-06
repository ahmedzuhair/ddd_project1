"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var president_service_1 = require("./president.service");
var PresidentDetailComponent = (function () {
    function PresidentDetailComponent(presidentService, route, location) {
        this.presidentService = presidentService;
        this.route = route;
        this.location = location;
    }
    PresidentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.presidentService.getPresident(+params.get('id')); })
            .subscribe(function (president) { return _this.president = president; });
    };
    PresidentDetailComponent.prototype.save = function () {
        var _this = this;
        this.presidentService.update(this.president)
            .then(function () { return _this.goBack(); });
    };
    PresidentDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PresidentDetailComponent;
}());
PresidentDetailComponent = __decorate([
    core_1.Component({
        selector: 'president-detail',
        templateUrl: './president-detail.component.html',
        styleUrls: ['./president-detail.component.css']
    }),
    __metadata("design:paramtypes", [president_service_1.PresidentService,
        router_1.ActivatedRoute,
        common_1.Location])
], PresidentDetailComponent);
exports.PresidentDetailComponent = PresidentDetailComponent;
//# sourceMappingURL=president-detail.component.js.map