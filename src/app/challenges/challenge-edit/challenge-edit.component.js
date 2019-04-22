"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var challenge_service_1 = require("../challenge.service");
var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent(activatedRoute, pageRoute, router, challengeService) {
        this.activatedRoute = activatedRoute;
        this.pageRoute = pageRoute;
        this.router = router;
        this.challengeService = challengeService;
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
    ChallengeEditComponent.prototype.onSubmit = function (title, description) {
        // ...
        this.challengeService.createNewChallenge(title, description);
        this.router.backToPreviousPage();
    };
    ChallengeEditComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-edit',
            templateUrl: './challenge-edit.component.html',
            styleUrls: ['./challenge-edit.component.scss'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.PageRoute,
            router_2.RouterExtensions,
            challenge_service_1.ChallengeService])
    ], ChallengeEditComponent);
    return ChallengeEditComponent;
}());
exports.ChallengeEditComponent = ChallengeEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBMEU7QUFFMUUsMERBQXdEO0FBUXhEO0lBR0UsZ0NBQ1UsY0FBOEIsRUFDOUIsU0FBb0IsRUFDcEIsTUFBd0IsRUFDeEIsZ0JBQWtDO1FBSGxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFONUMsZUFBVSxHQUFHLElBQUksQ0FBQztJQU9mLENBQUM7SUFFSix5Q0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyx1REFBdUQ7UUFDdkQsdUNBQXVDO1FBQ3ZDLE1BQU07UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxjQUFjO1lBQ3BELGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDO2lCQUNuRDtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQVEsR0FBUixVQUFTLEtBQWEsRUFBRSxXQUFtQjtRQUN6QyxNQUFNO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQTdCVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztZQUM5QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLMEIsdUJBQWM7WUFDbkIsa0JBQVM7WUFDWix5QkFBZ0I7WUFDTixvQ0FBZ0I7T0FQakMsc0JBQXNCLENBOEJsQztJQUFELDZCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENoYWxsZW5nZVNlcnZpY2UgfSBmcm9tICcuLi9jaGFsbGVuZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNoYWxsZW5nZS1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnNjc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNDcmVhdGluZyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGNoYWxsZW5nZVNlcnZpY2U6IENoYWxsZW5nZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHBhcmFtTWFwLmdldCgnbW9kZScpKTtcbiAgICAvLyB9KTtcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5zdWJzY3JpYmUoYWN0aXZhdGVkUm91dGUgPT4ge1xuICAgICAgYWN0aXZhdGVkUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbU1hcC5oYXMoJ21vZGUnKSkge1xuICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gcGFyYW1NYXAuZ2V0KCdtb2RlJykgIT09ICdlZGl0JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgLy8gLi4uXG4gICAgdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLmNyZWF0ZU5ld0NoYWxsZW5nZSh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG59XG4iXX0=