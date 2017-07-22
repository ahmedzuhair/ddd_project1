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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var PresidentService = (function () {
    function PresidentService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.presidentsUrl = 'api/presidents'; // URL to web api
    }
    PresidentService.prototype.getPresidents = function () {
        return this.http.get(this.presidentsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PresidentService.prototype.getPresident = function (id) {
        var url = this.presidentsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PresidentService.prototype.delete = function (id) {
        var url = this.presidentsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PresidentService.prototype.create = function (name) {
        return this.http
            .post(this.presidentsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PresidentService.prototype.update = function (president) {
        var url = this.presidentsUrl + "/" + president.id;
        return this.http
            .put(url, JSON.stringify(president), { headers: this.headers })
            .toPromise()
            .then(function () { return president; })
            .catch(this.handleError);
    };
    PresidentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo
        return Promise.reject(error.message || error);
    };
    return PresidentService;
}());
PresidentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PresidentService);
exports.PresidentService = PresidentService;
//# sourceMappingURL=president.service.js.map