"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.activeChallenge = '';
    }
    AppComponent.prototype.onChallengeInput = function (challengeDescription) {
        this.activeChallenge = challengeDescription;
        console.log('onChallengeInput: ', challengeDescription);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ns-app',
            moduleId: module.id,
            templateUrl: './app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFPMUM7SUFMQTtRQU1FLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBTXZCLENBQUM7SUFKQyx1Q0FBZ0IsR0FBaEIsVUFBaUIsb0JBQTRCO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFOVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO09BQ1csWUFBWSxDQU94QjtJQUFELG1CQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYXBwJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgYWN0aXZlQ2hhbGxlbmdlID0gJyc7XG5cbiAgb25DaGFsbGVuZ2VJbnB1dChjaGFsbGVuZ2VEZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5hY3RpdmVDaGFsbGVuZ2UgPSBjaGFsbGVuZ2VEZXNjcmlwdGlvbjtcbiAgICBjb25zb2xlLmxvZygnb25DaGFsbGVuZ2VJbnB1dDogJywgY2hhbGxlbmdlRGVzY3JpcHRpb24pO1xuICB9XG59XG4iXX0=