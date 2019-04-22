"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChallengeActionsComponent = /** @class */ (function () {
    function ChallengeActionsComponent() {
        this.actionSelect = new core_1.EventEmitter();
        this.cancelText = 'Cancel';
    }
    ChallengeActionsComponent.prototype.ngOnInit = function () { };
    ChallengeActionsComponent.prototype.onAction = function (action) {
        this.actionSelect.emit(action);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "actionSelect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "cancelText", void 0);
    ChallengeActionsComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-actions',
            templateUrl: './challenge-actions.component.html',
            styleUrls: ['./challenge-actions.component.scss'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [])
    ], ChallengeActionsComponent);
    return ChallengeActionsComponent;
}());
exports.ChallengeActionsComponent = ChallengeActionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBUS9FO0lBSUU7UUFIVSxpQkFBWSxHQUFHLElBQUksbUJBQVksRUFBa0MsQ0FBQztRQUNuRSxlQUFVLEdBQUcsUUFBUSxDQUFDO0lBRWhCLENBQUM7SUFFaEIsNENBQVEsR0FBUixjQUFZLENBQUM7SUFFYiw0Q0FBUSxHQUFSLFVBQVMsTUFBc0M7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQVRTO1FBQVQsYUFBTSxFQUFFOzttRUFBbUU7SUFDbkU7UUFBUixZQUFLLEVBQUU7O2lFQUF1QjtJQUZwQix5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztZQUNqRCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVyx5QkFBeUIsQ0FXckM7SUFBRCxnQ0FBQztDQUFBLEFBWEQsSUFXQztBQVhZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY2hhbGxlbmdlLWFjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFsbGVuZ2UtYWN0aW9ucy5jb21wb25lbnQuc2NzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgYWN0aW9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjwnY29tcGxldGUnIHwgJ2ZhaWwnIHwgJ2NhbmNlbCc+KCk7XG4gIEBJbnB1dCgpIGNhbmNlbFRleHQgPSAnQ2FuY2VsJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uQWN0aW9uKGFjdGlvbjogJ2NvbXBsZXRlJyB8ICdmYWlsJyB8ICdjYW5jZWwnKSB7XG4gICAgdGhpcy5hY3Rpb25TZWxlY3QuZW1pdChhY3Rpb24pO1xuICB9XG59XG4iXX0=