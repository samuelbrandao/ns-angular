"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_modal_component_1 = require("../day-modal/day-modal.component");
var ui_service_1 = require("~/app/shared/ui.service");
var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(modalDialog, vcRef, uiService) {
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        this.uiService = uiService;
        this.weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.days = [];
    }
    CurrentChallengeComponent.prototype.ngOnInit = function () {
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth();
        var daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        for (var i = 1; i < daysInMonth + 1; i++) {
            var date = new Date(this.currentYear, this.currentMonth, i);
            var dayInWeek = date.getDay();
            this.days.push({ dayInMonth: i, dayInWeek: dayInWeek });
        }
    };
    CurrentChallengeComponent.prototype.getRow = function (index, day) {
        var startRow = 1;
        var weekRow = Math.floor(index / 7);
        var firstWeekDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
        var irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    };
    CurrentChallengeComponent.prototype.onChangeStatus = function () {
        this.modalDialog
            .showModal(day_modal_component_1.DayModalComponent, {
            fullscreen: true,
            viewContainerRef: this.uiService.getRootVCRef()
                ? this.uiService.getRootVCRef()
                : this.vcRef,
            context: { date: new Date() }
        })
            .then(function (action) {
            console.log(action);
        });
    };
    CurrentChallengeComponent = __decorate([
        core_1.Component({
            selector: 'ns-current-challenge',
            templateUrl: './current-challenge.component.html',
            styleUrls: [
                './_current-challenge.component.common.scss',
                './current-challenge.component.scss'
            ],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            ui_service_1.UIService])
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());
exports.CurrentChallengeComponent = CurrentChallengeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBQ3BFLGtFQUF1RTtBQUV2RSx3RUFBcUU7QUFDckUsc0RBQW9EO0FBV3BEO0lBTUUsbUNBQ1UsV0FBK0IsRUFDL0IsS0FBdUIsRUFDdkIsU0FBb0I7UUFGcEIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFSOUIsYUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsU0FBSSxHQUFnRCxFQUFFLENBQUM7SUFRcEQsQ0FBQztJQUVKLDRDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUMxQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFDckIsQ0FBQyxDQUNGLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCwwQ0FBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLEdBQThDO1FBQ2xFLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFNLG1CQUFtQixHQUFHLElBQUksSUFBSSxDQUNsQyxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsWUFBWSxFQUNqQixDQUFDLENBQ0YsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpFLE9BQU8sUUFBUSxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQUVELGtEQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsV0FBVzthQUNiLFNBQVMsQ0FBQyx1Q0FBaUIsRUFBRTtZQUM1QixVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtnQkFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDZCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRTtTQUM5QixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsTUFBYztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJEVSx5QkFBeUI7UUFUckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUU7Z0JBQ1QsNENBQTRDO2dCQUM1QyxvQ0FBb0M7YUFDckM7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FRdUIsaUNBQWtCO1lBQ3hCLHVCQUFnQjtZQUNaLHNCQUFTO09BVG5CLHlCQUF5QixDQXNEckM7SUFBRCxnQ0FBQztDQUFBLEFBdERELElBc0RDO0FBdERZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5pbXBvcnQgeyBEYXlNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2RheS1tb2RhbC9kYXktbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC91aS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY3VycmVudC1jaGFsbGVuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9fY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNvbW1vbi5zY3NzJyxcbiAgICAnLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgd2Vla0RheXMgPSBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXTtcbiAgZGF5czogeyBkYXlJbk1vbnRoOiBudW1iZXI7IGRheUluV2VlazogbnVtYmVyIH1bXSA9IFtdO1xuICBwcml2YXRlIGN1cnJlbnRNb250aDogbnVtYmVyO1xuICBwcml2YXRlIGN1cnJlbnRZZWFyOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbERpYWxvZzogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB1aVNlcnZpY2U6IFVJU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKFxuICAgICAgdGhpcy5jdXJyZW50WWVhcixcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoICsgMSxcbiAgICAgIDBcbiAgICApLmdldERhdGUoKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF5c0luTW9udGggKyAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnRNb250aCwgaSk7XG4gICAgICBjb25zdCBkYXlJbldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgICAgdGhpcy5kYXlzLnB1c2goeyBkYXlJbk1vbnRoOiBpLCBkYXlJbldlZWs6IGRheUluV2VlayB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSb3coaW5kZXg6IG51bWJlciwgZGF5OiB7IGRheUluTW9udGg6IG51bWJlcjsgZGF5SW5XZWVrOiBudW1iZXIgfSkge1xuICAgIGNvbnN0IHN0YXJ0Um93ID0gMTtcbiAgICBjb25zdCB3ZWVrUm93ID0gTWF0aC5mbG9vcihpbmRleCAvIDcpO1xuICAgIGNvbnN0IGZpcnN0V2Vla0RheU9mTW9udGggPSBuZXcgRGF0ZShcbiAgICAgIHRoaXMuY3VycmVudFllYXIsXG4gICAgICB0aGlzLmN1cnJlbnRNb250aCxcbiAgICAgIDFcbiAgICApLmdldERheSgpO1xuICAgIGNvbnN0IGlycmVndWxhclJvdyA9IGRheS5kYXlJbldlZWsgPCBmaXJzdFdlZWtEYXlPZk1vbnRoID8gMSA6IDA7XG5cbiAgICByZXR1cm4gc3RhcnRSb3cgKyB3ZWVrUm93ICsgaXJyZWd1bGFyUm93O1xuICB9XG5cbiAgb25DaGFuZ2VTdGF0dXMoKSB7XG4gICAgdGhpcy5tb2RhbERpYWxvZ1xuICAgICAgLnNob3dNb2RhbChEYXlNb2RhbENvbXBvbmVudCwge1xuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnVpU2VydmljZS5nZXRSb290VkNSZWYoKVxuICAgICAgICAgID8gdGhpcy51aVNlcnZpY2UuZ2V0Um9vdFZDUmVmKClcbiAgICAgICAgICA6IHRoaXMudmNSZWYsXG4gICAgICAgIGNvbnRleHQ6IHsgZGF0ZTogbmV3IERhdGUoKSB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGFjdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gICAgICB9KTtcbiAgfVxufVxuIl19