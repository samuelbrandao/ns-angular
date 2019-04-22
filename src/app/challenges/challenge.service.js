"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var challenge_model_1 = require("./challenge.model");
var ChallengeService = /** @class */ (function () {
    function ChallengeService() {
        this._currentChallenge = new rxjs_1.BehaviorSubject(null);
    }
    Object.defineProperty(ChallengeService.prototype, "currentChallenge", {
        get: function () {
            return this._currentChallenge.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ChallengeService.prototype.createNewChallenge = function (title, description) {
        var newChallenge = new challenge_model_1.Challenge(title, description, new Date().getFullYear(), new Date().getMonth());
        // Save it to server
        this._currentChallenge.next(newChallenge);
    };
    ChallengeService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], ChallengeService);
    return ChallengeService;
}());
exports.ChallengeService = ChallengeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFsbGVuZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBdUM7QUFFdkMscURBQThDO0FBRzlDO0lBREE7UUFFVSxzQkFBaUIsR0FBRyxJQUFJLHNCQUFlLENBQVksSUFBSSxDQUFDLENBQUM7SUFnQm5FLENBQUM7SUFkQyxzQkFBSSw4Q0FBZ0I7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELDZDQUFrQixHQUFsQixVQUFtQixLQUFhLEVBQUUsV0FBbUI7UUFDbkQsSUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBUyxDQUNoQyxLQUFLLEVBQ0wsV0FBVyxFQUNYLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQ3hCLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQ3RCLENBQUM7UUFDRixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBaEJVLGdCQUFnQjtRQUQ1QixpQkFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLGdCQUFnQixDQWlCNUI7SUFBRCx1QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2UgfSBmcm9tICcuL2NoYWxsZW5nZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlU2VydmljZSB7XG4gIHByaXZhdGUgX2N1cnJlbnRDaGFsbGVuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENoYWxsZW5nZT4obnVsbCk7XG5cbiAgZ2V0IGN1cnJlbnRDaGFsbGVuZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudENoYWxsZW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNyZWF0ZU5ld0NoYWxsZW5nZSh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3Q2hhbGxlbmdlID0gbmV3IENoYWxsZW5nZShcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICBuZXcgRGF0ZSgpLmdldE1vbnRoKClcbiAgICApO1xuICAgIC8vIFNhdmUgaXQgdG8gc2VydmVyXG4gICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KG5ld0NoYWxsZW5nZSk7XG4gIH1cbn1cbiJdfQ==