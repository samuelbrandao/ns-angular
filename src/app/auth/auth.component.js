"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("nativescript-angular/router");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(router) {
        this.router = router;
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLogin = true;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl(null, {
                updateOn: 'blur',
                validators: [forms_1.Validators.required, forms_1.Validators.email]
            }),
            password: new forms_1.FormControl(null, {
                updateOn: 'blur',
                validators: [forms_1.Validators.required, forms_1.Validators.minLength(6)]
            })
        });
        this.form.get('email').statusChanges.subscribe(function (status) {
            _this.emailControlIsValid = status === 'VALID';
        });
        this.form.get('password').statusChanges.subscribe(function (status) {
            _this.passwordControlIsValid = status === 'VALID';
        });
    };
    AuthComponent.prototype.onSubmit = function () {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            return;
        }
        var email = this.form.get('email').value;
        var password = this.form.get('password').value;
        this.form.reset();
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        if (this.isLogin) {
            console.log('Logging in...');
        }
        else {
            console.log('Signing up ...');
        }
        this.router.navigate(['/challenges']);
    };
    AuthComponent.prototype.onDone = function () {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
    };
    AuthComponent.prototype.onSwitch = function () {
        this.isLogin = !this.isLogin;
    };
    __decorate([
        core_1.ViewChild('passwordEl'),
        __metadata("design:type", core_1.ElementRef)
    ], AuthComponent.prototype, "passwordEl", void 0);
    __decorate([
        core_1.ViewChild('emailEl'),
        __metadata("design:type", core_1.ElementRef)
    ], AuthComponent.prototype, "emailEl", void 0);
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'ns-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSx3Q0FBb0U7QUFDcEUsc0RBQStEO0FBUy9EO0lBUUUsdUJBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTjVDLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksQ0FBQztJQUlnQyxDQUFDO0lBRWhELGdDQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFTLENBQUM7WUFDeEIsS0FBSyxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUU7Z0JBQzNCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixVQUFVLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLEtBQUssQ0FBQzthQUNwRCxDQUFDO1lBQ0YsUUFBUSxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixVQUFVLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzRCxDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkQsS0FBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sS0FBSyxPQUFPLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN0RCxLQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxLQUFLLE9BQU8sQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUF4RHdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFhLGlCQUFVO3FEQUFZO0lBQ3JDO1FBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDO2tDQUFVLGlCQUFVO2tEQUFZO0lBTjFDLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBUzRCLHlCQUFnQjtPQVJqQyxhQUFhLENBOER6QjtJQUFELG9CQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hdXRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRoLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBlbWFpbENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgcGFzc3dvcmRDb250cm9sSXNWYWxpZCA9IHRydWU7XG4gIGlzTG9naW4gPSB0cnVlO1xuICBAVmlld0NoaWxkKCdwYXNzd29yZEVsJykgcGFzc3dvcmRFbDogRWxlbWVudFJlZjxUZXh0RmllbGQ+O1xuICBAVmlld0NoaWxkKCdlbWFpbEVsJykgZW1haWxFbDogRWxlbWVudFJlZjxUZXh0RmllbGQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCB7XG4gICAgICAgIHVwZGF0ZU9uOiAnYmx1cicsXG4gICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXVxuICAgICAgfSksXG4gICAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKG51bGwsIHtcbiAgICAgICAgdXBkYXRlT246ICdibHVyJyxcbiAgICAgICAgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybS5nZXQoJ2VtYWlsJykuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAgIHRoaXMuZW1haWxDb250cm9sSXNWYWxpZCA9IHN0YXR1cyA9PT0gJ1ZBTElEJztcbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sSXNWYWxpZCA9IHN0YXR1cyA9PT0gJ1ZBTElEJztcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuZW1haWxFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5kaXNtaXNzU29mdElucHV0KCk7XG5cbiAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5mb3JtLmdldCgnZW1haWwnKS52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWU7XG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgdGhpcy5lbWFpbENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgICB0aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmlzTG9naW4pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMb2dnaW5nIGluLi4uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTaWduaW5nIHVwIC4uLicpO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGFsbGVuZ2VzJ10pO1xuICB9XG5cbiAgb25Eb25lKCkge1xuICAgIHRoaXMuZW1haWxFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5kaXNtaXNzU29mdElucHV0KCk7XG4gIH1cblxuICBvblN3aXRjaCgpIHtcbiAgICB0aGlzLmlzTG9naW4gPSAhdGhpcy5pc0xvZ2luO1xuICB9XG59XG4iXX0=