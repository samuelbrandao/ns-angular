"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var ui_service_1 = require("../../ui.service");
var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(page, router, uiService) {
        this.page = page;
        this.router = router;
        this.uiService = uiService;
        this.showBackButton = true;
        this.hasMenu = true;
    }
    ActionBarComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ActionBarComponent.prototype, "android", {
        get: function () {
            return platform_1.isAndroid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarComponent.prototype, "canGoBack", {
        get: function () {
            return this.router.canGoBack() && this.showBackButton;
        },
        enumerable: true,
        configurable: true
    });
    ActionBarComponent.prototype.onGoBack = function () {
        this.router.backToPreviousPage();
    };
    ActionBarComponent.prototype.onLoadedActionBar = function () {
        if (platform_1.isAndroid) {
            var androidToolbar = this.page.actionBar.nativeView;
            var backButton = androidToolbar.getNavigationIcon();
            var color = '#171717';
            if (this.hasMenu) {
                color = '#ffffff';
            }
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor(color), android.graphics.PorterDuff.Mode.SRC_ATOP);
            }
        }
    };
    ActionBarComponent.prototype.onToggleMenu = function () {
        this.uiService.toggleDrawer();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "showBackButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "hasMenu", void 0);
    ActionBarComponent = __decorate([
        core_1.Component({
            selector: 'ns-action-bar',
            templateUrl: './action-bar.component.html',
            styleUrls: ['./action-bar.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            ui_service_1.UIService])
    ], ActionBarComponent);
    return ActionBarComponent;
}());
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBc0Q7QUFDdEQsaURBQWdEO0FBQ2hELHNEQUErRDtBQUMvRCwrQ0FBNkM7QUFVN0M7SUFLRSw0QkFDVSxJQUFVLEVBQ1YsTUFBd0IsRUFDeEIsU0FBb0I7UUFGcEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFOckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsWUFBTyxHQUFHLElBQUksQ0FBQztJQU1yQixDQUFDO0lBRUoscUNBQVEsR0FBUixjQUFZLENBQUM7SUFFYixzQkFBSSx1Q0FBTzthQUFYO1lBQ0UsT0FBTyxvQkFBUyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0UsSUFBSSxvQkFBUyxFQUFFO1lBQ2IsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ3RELElBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxTQUFTLENBQUE7YUFDbEI7WUFDRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLENBQUMsY0FBYyxDQUN2QixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQ2xDLE9BQU8sQ0FBQyxRQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ2pELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVELHlDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUEzQ1E7UUFBUixZQUFLLEVBQUU7O3FEQUFlO0lBQ2Q7UUFBUixZQUFLLEVBQUU7OzhEQUF1QjtJQUN0QjtRQUFSLFlBQUssRUFBRTs7dURBQWdCO0lBSGIsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU9nQixXQUFJO1lBQ0YseUJBQWdCO1lBQ2Isc0JBQVM7T0FSbkIsa0JBQWtCLENBNkM5QjtJQUFELHlCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7QUE3Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS5zZXJ2aWNlJztcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hY3Rpb24tYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93QmFja0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGhhc01lbnUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgZ2V0IGFuZHJvaWQoKSB7XG4gICAgcmV0dXJuIGlzQW5kcm9pZDtcbiAgfVxuXG4gIGdldCBjYW5Hb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmNhbkdvQmFjaygpICYmIHRoaXMuc2hvd0JhY2tCdXR0b247XG4gIH1cblxuICBvbkdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIG9uTG9hZGVkQWN0aW9uQmFyKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGNvbnN0IGFuZHJvaWRUb29sYmFyID0gdGhpcy5wYWdlLmFjdGlvbkJhci5uYXRpdmVWaWV3O1xuICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGFuZHJvaWRUb29sYmFyLmdldE5hdmlnYXRpb25JY29uKCk7XG4gICAgICBsZXQgY29sb3IgPSAnIzE3MTcxNyc7XG4gICAgICBpZiAodGhpcy5oYXNNZW51KSB7XG4gICAgICAgIGNvbG9yID0gJyNmZmZmZmYnXG4gICAgICB9XG4gICAgICBpZiAoYmFja0J1dHRvbikge1xuICAgICAgICBiYWNrQnV0dG9uLnNldENvbG9yRmlsdGVyKFxuICAgICAgICAgIGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcihjb2xvciksXG4gICAgICAgICAgKDxhbnk+YW5kcm9pZC5ncmFwaGljcykuUG9ydGVyRHVmZi5Nb2RlLlNSQ19BVE9QXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Ub2dnbGVNZW51KCkge1xuICAgIHRoaXMudWlTZXJ2aWNlLnRvZ2dsZURyYXdlcigpO1xuICB9XG59XG4iXX0=