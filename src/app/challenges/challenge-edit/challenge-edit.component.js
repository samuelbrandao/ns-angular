"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent() {
        this.input = new core_1.EventEmitter();
        this.challengeDescription = '';
    }
    ChallengeEditComponent.prototype.onSetChallenge = function () {
        // this.currentChallenge = this.challengeDescription;
        this.input.emit(this.challengeDescription);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ChallengeEditComponent.prototype, "input", void 0);
    ChallengeEditComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-edit',
            templateUrl: './challenge-edit.component.html',
            styleUrls: ['./challenge-edit.component.css'],
            moduleId: module.id
        })
    ], ChallengeEditComponent);
    return ChallengeEditComponent;
}());
exports.ChallengeEditComponent = ChallengeEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdFO0FBUWhFO0lBTkE7UUFPWSxVQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFDN0MseUJBQW9CLEdBQUcsRUFBRSxDQUFDO0lBTTVCLENBQUM7SUFKQywrQ0FBYyxHQUFkO1FBQ0UscURBQXFEO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFOUztRQUFULGFBQU0sRUFBRTs7eURBQW9DO0lBRGxDLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1lBQzdDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO09BQ1csc0JBQXNCLENBUWxDO0lBQUQsNkJBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNoYWxsZW5nZS1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRDb21wb25lbnQge1xuICBAT3V0cHV0KCkgaW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgY2hhbGxlbmdlRGVzY3JpcHRpb24gPSAnJztcblxuICBvblNldENoYWxsZW5nZSgpIHtcbiAgICAvLyB0aGlzLmN1cnJlbnRDaGFsbGVuZ2UgPSB0aGlzLmNoYWxsZW5nZURlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW5wdXQuZW1pdCh0aGlzLmNoYWxsZW5nZURlc2NyaXB0aW9uKTtcbiAgfVxufVxuIl19