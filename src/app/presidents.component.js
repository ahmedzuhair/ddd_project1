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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var president_service_1 = require("./president.service");
var PresidentsComponent = (function () {
    function PresidentsComponent(presidentService, router) {
        this.presidentService = presidentService;
        this.router = router;
    }
    PresidentsComponent.prototype.getPresidents = function () {
        var _this = this;
        this.presidentService
            .getPresidents()
            .then(function (presidents) { return _this.presidents = presidents; });
    };
    PresidentsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.presidentService.create(name)
            .then(function (president) {
            _this.presidents.push(president);
            _this.selectedPresident = null;
        });
    };
    PresidentsComponent.prototype.delete = function (president) {
        var _this = this;
        this.presidentService
            .delete(president.id)
            .then(function () {
            _this.presidents = _this.presidents.filter(function (h) { return h !== president; });
            if (_this.selectedPresident === president) {
                _this.selectedPresident = null;
            }
        });
    };
    PresidentsComponent.prototype.ngOnInit = function () {
        this.getPresidents();
    };
    PresidentsComponent.prototype.onSelect = function (president) {
        this.selectedPresident = president;
    };
    PresidentsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPresident.id]);
    };
    return PresidentsComponent;
}());
PresidentsComponent = __decorate([
    core_1.Component({
        selector: 'my-presidents',
        templateUrl: './presidents.component.html',
        styleUrls: ['./presidents.component.css']
    }),
    __metadata("design:paramtypes", [president_service_1.PresidentService,
        router_1.Router])
], PresidentsComponent);
exports.PresidentsComponent = PresidentsComponent;
//# sourceMappingURL=presidents.component.js.map