"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent(activatedRoute, pageRoute) {
        this.activatedRoute = activatedRoute;
        this.pageRoute = pageRoute;
        this.isCreating = true;
    }
    ChallengeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.activatedRoute.paramMap.subscribe(paramMap => {
        //   console.log(paramMap.get('mode'));
        // });
        this.pageRoute.activatedRoute.subscribe(function (activatedRoute) {
            activatedRoute.paramMap.subscribe(function (paramMap) {
                if (!paramMap.has('mode')) {
                    _this.isCreating = true;
                }
                else {
                    _this.isCreating = paramMap.get('mode') !== 'edit';
                }
            });
        });
    };
    ChallengeEditComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-edit',
            templateUrl: './challenge-edit.component.html',
            styleUrls: ['./challenge-edit.component.scss'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.PageRoute])
    ], ChallengeEditComponent);
    return ChallengeEditComponent;
}());
exports.ChallengeEditComponent = ChallengeEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBd0Q7QUFReEQ7SUFHRSxnQ0FDVSxjQUE4QixFQUM5QixTQUFvQjtRQURwQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUo5QixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBS2YsQ0FBQztJQUVKLHlDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLHVEQUF1RDtRQUN2RCx1Q0FBdUM7UUFDdkMsTUFBTTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFBLGNBQWM7WUFDcEQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDekIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUM7aUJBQ25EO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFyQlUsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSzBCLHVCQUFjO1lBQ25CLGtCQUFTO09BTG5CLHNCQUFzQixDQXNCbEM7SUFBRCw2QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jaGFsbGVuZ2UtZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5zY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzQ3JlYXRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHBhcmFtTWFwLmdldCgnbW9kZScpKTtcbiAgICAvLyB9KTtcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5zdWJzY3JpYmUoYWN0aXZhdGVkUm91dGUgPT4ge1xuICAgICAgYWN0aXZhdGVkUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbU1hcC5oYXMoJ21vZGUnKSkge1xuICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gcGFyYW1NYXAuZ2V0KCdtb2RlJykgIT09ICdlZGl0JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==