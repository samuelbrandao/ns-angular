"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var DayModalComponent = /** @class */ (function () {
    function DayModalComponent(modalParams) {
        this.modalParams = modalParams;
    }
    DayModalComponent.prototype.ngOnInit = function () {
        this.loadedDate = this.modalParams.context.date;
    };
    DayModalComponent.prototype.onHandleInput = function (action) {
        this.modalParams.closeCallback(action);
    };
    DayModalComponent = __decorate([
        core_1.Component({
            selector: 'ns-day-modal',
            templateUrl: './day-modal.component.html',
            styleUrls: ['./day-modal.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], DayModalComponent);
    return DayModalComponent;
}());
exports.DayModalComponent = DayModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRheS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBUXRFO0lBR0UsMkJBQW9CLFdBQThCO1FBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUFHLENBQUM7SUFFdEQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUEwQixDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLE1BQXNDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFYVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSWlDLGdDQUFpQjtPQUh2QyxpQkFBaUIsQ0FZN0I7SUFBRCx3QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRheS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXktbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXktbW9kYWwuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIERheU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9hZGVkRGF0ZTogRGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRlZERhdGUgPSAodGhpcy5tb2RhbFBhcmFtcy5jb250ZXh0IGFzIHsgZGF0ZTogRGF0ZSB9KS5kYXRlO1xuICB9XG5cbiAgb25IYW5kbGVJbnB1dChhY3Rpb246ICdjb21wbGV0ZScgfCAnZmFpbCcgfCAnY2FuY2VsJykge1xuICAgIHRoaXMubW9kYWxQYXJhbXMuY2xvc2VDYWxsYmFjayhhY3Rpb24pO1xuICB9XG59XG4iXX0=