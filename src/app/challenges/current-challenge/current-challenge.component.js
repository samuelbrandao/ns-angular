"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_modal_component_1 = require("../day-modal/day-modal.component");
var ui_service_1 = require("~/app/shared/ui.service");
var challenge_service_1 = require("../challenge.service");
var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(modalDialog, vcRef, uiService, challengeService) {
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        this.uiService = uiService;
        this.challengeService = challengeService;
        this.weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
    CurrentChallengeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.curChallengeSub = this.challengeService.currentChallenge.subscribe(function (challenge) {
            _this.currentChallenge = challenge;
        });
    };
    CurrentChallengeComponent.prototype.getRow = function (index, day) {
        var startRow = 1;
        var weekRow = Math.floor(index / 7);
        var firstWeekDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
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
    CurrentChallengeComponent.prototype.ngOnDestroy = function () {
        if (this.curChallengeSub) {
            this.curChallengeSub.unsubscribe();
        }
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
            ui_service_1.UIService,
            challenge_service_1.ChallengeService])
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());
exports.CurrentChallengeComponent = CurrentChallengeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBQy9FLGtFQUF1RTtBQUd2RSx3RUFBcUU7QUFDckUsc0RBQW9EO0FBQ3BELDBEQUF3RDtBQVl4RDtJQUtFLG1DQUNVLFdBQStCLEVBQy9CLEtBQXVCLEVBQ3ZCLFNBQW9CLEVBQ3BCLGdCQUFrQztRQUhsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUjVDLGFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBUzVDLENBQUM7SUFFSiw0Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQ3JFLFVBQUEsU0FBUztZQUNQLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDcEMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsMENBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxHQUE4QztRQUNsRSxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLElBQUksQ0FDbEMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFDeEIsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDckIsQ0FBQyxDQUNGLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRSxPQUFPLFFBQVEsR0FBRyxPQUFPLEdBQUcsWUFBWSxDQUFDO0lBQzNDLENBQUM7SUFFRCxrREFBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFdBQVc7YUFDYixTQUFTLENBQUMsdUNBQWlCLEVBQUU7WUFDNUIsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7Z0JBQzdDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2QsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUU7U0FDOUIsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLE1BQWM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBbkRVLHlCQUF5QjtRQVRyQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRTtnQkFDVCw0Q0FBNEM7Z0JBQzVDLG9DQUFvQzthQUNyQztZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU91QixpQ0FBa0I7WUFDeEIsdUJBQWdCO1lBQ1osc0JBQVM7WUFDRixvQ0FBZ0I7T0FUakMseUJBQXlCLENBb0RyQztJQUFELGdDQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYXlNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2RheS1tb2RhbC9kYXktbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC91aS5zZXJ2aWNlJztcbmltcG9ydCB7IENoYWxsZW5nZVNlcnZpY2UgfSBmcm9tICcuLi9jaGFsbGVuZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2UgfSBmcm9tICcuLi9jaGFsbGVuZ2UubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jdXJyZW50LWNoYWxsZW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL19jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY29tbW9uLnNjc3MnLFxuICAgICcuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHdlZWtEYXlzID0gWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ107XG4gIGN1cnJlbnRDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgcHJpdmF0ZSBjdXJDaGFsbGVuZ2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsRGlhbG9nOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbGxlbmdlU2VydmljZTogQ2hhbGxlbmdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJDaGFsbGVuZ2VTdWIgPSB0aGlzLmNoYWxsZW5nZVNlcnZpY2UuY3VycmVudENoYWxsZW5nZS5zdWJzY3JpYmUoXG4gICAgICBjaGFsbGVuZ2UgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRDaGFsbGVuZ2UgPSBjaGFsbGVuZ2U7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGdldFJvdyhpbmRleDogbnVtYmVyLCBkYXk6IHsgZGF5SW5Nb250aDogbnVtYmVyOyBkYXlJbldlZWs6IG51bWJlciB9KSB7XG4gICAgY29uc3Qgc3RhcnRSb3cgPSAxO1xuICAgIGNvbnN0IHdlZWtSb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gNyk7XG4gICAgY29uc3QgZmlyc3RXZWVrRGF5T2ZNb250aCA9IG5ldyBEYXRlKFxuICAgICAgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgMVxuICAgICkuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXJyZWd1bGFyUm93ID0gZGF5LmRheUluV2VlayA8IGZpcnN0V2Vla0RheU9mTW9udGggPyAxIDogMDtcblxuICAgIHJldHVybiBzdGFydFJvdyArIHdlZWtSb3cgKyBpcnJlZ3VsYXJSb3c7XG4gIH1cblxuICBvbkNoYW5nZVN0YXR1cygpIHtcbiAgICB0aGlzLm1vZGFsRGlhbG9nXG4gICAgICAuc2hvd01vZGFsKERheU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudWlTZXJ2aWNlLmdldFJvb3RWQ1JlZigpXG4gICAgICAgICAgPyB0aGlzLnVpU2VydmljZS5nZXRSb290VkNSZWYoKVxuICAgICAgICAgIDogdGhpcy52Y1JlZixcbiAgICAgICAgY29udGV4dDogeyBkYXRlOiBuZXcgRGF0ZSgpIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigoYWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY3VyQ2hhbGxlbmdlU3ViKSB7XG4gICAgICB0aGlzLmN1ckNoYWxsZW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19