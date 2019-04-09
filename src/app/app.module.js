"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxvR0FBMkc7QUFFM0csaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCwyREFBd0Q7QUFDeEQsa0ZBQStFO0FBQy9FLHdEQUFzRDtBQUN0RCxvR0FBaUc7QUFFakcsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBd0JuRjtJQUhBOztNQUVFO0lBQ0Y7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF0QnJCLGVBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qix1REFBOEI7Z0JBQzlCLHFDQUFnQjtnQkFDaEIsNEJBQVk7Z0JBQ1osaURBQXNCO2FBQ3ZCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLHVDQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsZUFBZSxFQUFFLENBQUMsdUNBQWlCLENBQUM7U0FDckMsQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyL3NpZGUtZHJhd2VyLWRpcmVjdGl2ZXMnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9hdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRGF5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZXMvZGF5LW1vZGFsL2RheS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1hY3Rpb25zL2NoYWxsZW5nZS1hY3Rpb25zLm1vZHVsZSc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBBdXRoQ29tcG9uZW50LFxuICAgIERheU1vZGFsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGF5TW9kYWxDb21wb25lbnRdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=