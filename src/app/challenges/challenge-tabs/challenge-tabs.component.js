"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var ChallengeTabsComponent = /** @class */ (function () {
    function ChallengeTabsComponent(router, active, page) {
        this.router = router;
        this.active = active;
        this.page = page;
    }
    ChallengeTabsComponent.prototype.ngOnInit = function () {
        this.router.navigate([
            {
                outlets: { currentChallenge: ['current-challenge'], today: ['today'] }
            }
        ], {
            relativeTo: this.active
        });
        this.page.actionBarHidden = true;
    };
    ChallengeTabsComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-tabs',
            templateUrl: './challenge-tabs.component.html',
            styleUrls: ['./challenge-tabs.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            router_1.ActivatedRoute,
            page_1.Page])
    ], ChallengeTabsComponent);
    return ChallengeTabsComponent;
}());
exports.ChallengeTabsComponent = ChallengeTabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFDL0QsaURBQWdEO0FBUWhEO0lBQ0UsZ0NBQ1UsTUFBd0IsRUFDeEIsTUFBc0IsRUFDdEIsSUFBVTtRQUZWLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQU07SUFDakIsQ0FBQztJQUVKLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEI7WUFDRTtnQkFDRSxPQUFPLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDdkU7U0FDRixFQUNEO1lBQ0UsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3hCLENBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBbkJVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1lBQzdDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUdrQix5QkFBZ0I7WUFDaEIsdUJBQWM7WUFDaEIsV0FBSTtPQUpULHNCQUFzQixDQW9CbEM7SUFBRCw2QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jaGFsbGVuZ2UtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhY3RpdmU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBvdXRsZXRzOiB7IGN1cnJlbnRDaGFsbGVuZ2U6IFsnY3VycmVudC1jaGFsbGVuZ2UnXSwgdG9kYXk6IFsndG9kYXknXSB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIHJlbGF0aXZlVG86IHRoaXMuYWN0aXZlXG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxufVxuIl19