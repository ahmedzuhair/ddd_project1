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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var president_search_service_1 = require("./president-search.service");
var PresidentSearchComponent = (function () {
    function PresidentSearchComponent(presidentSearchService, router) {
        this.presidentSearchService = presidentSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    PresidentSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    PresidentSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.presidents = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.presidentSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    PresidentSearchComponent.prototype.gotoDetail = function (president) {
        var link = ['/detail', president.id];
        this.router.navigate(link);
    };
    return PresidentSearchComponent;
}());
PresidentSearchComponent = __decorate([
    core_1.Component({
        selector: 'president-search',
        templateUrl: './president-search.component.html',
        styleUrls: ['./president-search.component.css'],
        providers: [president_search_service_1.PresidentSearchService]
    }),
    __metadata("design:paramtypes", [president_search_service_1.PresidentSearchService,
        router_1.Router])
], PresidentSearchComponent);
exports.PresidentSearchComponent = PresidentSearchComponent;
//# sourceMappingURL=president-search.component.js.map