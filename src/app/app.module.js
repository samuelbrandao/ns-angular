"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var auth_component_1 = require("./auth/auth.component");
var app_routing_module_1 = require("./app-routing.module");
var day_modal_component_1 = require("./challenges/day-modal/day-modal.component");
var shared_module_1 = require("./shared/shared.module");
var challenge_actions_module_1 = require("./challenges/challenge-actions/challenge-actions.module");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                side_drawer_directives_1.NativeScriptUISideDrawerModule,
                forms_2.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule,
                challenge_actions_module_1.ChallengeActionsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                auth_component_1.AuthComponent,
                day_modal_component_1.DayModalComponent
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            entryComponents: [day_modal_component_1.DayModalComponent]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxvR0FBMkc7QUFDM0csd0NBQXFEO0FBRXJELGlEQUErQztBQUMvQyx3REFBc0Q7QUFDdEQsMkRBQXdEO0FBQ3hELGtGQUErRTtBQUMvRSx3REFBc0Q7QUFDdEQsb0dBQWlHO0FBRWpHLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLG1GQUFtRjtBQXlCbkY7SUFIQTs7TUFFRTtJQUNGO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBdkJyQixlQUFRLENBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsdURBQThCO2dCQUM5QiwyQkFBbUI7Z0JBQ25CLHFDQUFnQjtnQkFDaEIsNEJBQVk7Z0JBQ1osaURBQXNCO2FBQ3ZCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLHVDQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsZUFBZSxFQUFFLENBQUMsdUNBQWlCLENBQUM7U0FDckMsQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyL3NpZGUtZHJhd2VyLWRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvYXV0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IERheU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFsbGVuZ2VzL2RheS1tb2RhbC9kYXktbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlQWN0aW9uc01vZHVsZSB9IGZyb20gJy4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtYWN0aW9ucy9jaGFsbGVuZ2UtYWN0aW9ucy5tb2R1bGUnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBBdXRoQ29tcG9uZW50LFxuICAgIERheU1vZGFsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGF5TW9kYWxDb21wb25lbnRdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=