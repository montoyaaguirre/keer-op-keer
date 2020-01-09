(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _board_editor_board_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board-editor/board-editor.component */ "./src/app/board-editor/board-editor.component.ts");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./play/play.component */ "./src/app/play/play.component.ts");





var routes = [
    { path: 'edit', component: _board_editor_board_editor_component__WEBPACK_IMPORTED_MODULE_3__["BoardEditorComponent"] },
    { path: 'play', component: _play_play_component__WEBPACK_IMPORTED_MODULE_4__["PlayComponent"] },
    { path: '', redirectTo: 'play', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: monospace; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYW51ZWxcXERvY3VtZW50c1xcR2l0SHViXFxzb2xpdGFpcmUta2Vlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Solitaire Keer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dice_panel_dice_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dice-panel/dice-panel.component */ "./src/app/dice-panel/dice-panel.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _wildcard_panel_wildcard_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wildcard-panel/wildcard-panel.component */ "./src/app/wildcard-panel/wildcard-panel.component.ts");
/* harmony import */ var _board_generator_board_generator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./board-generator/board-generator.component */ "./src/app/board-generator/board-generator.component.ts");
/* harmony import */ var _board_editor_board_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./board-editor/board-editor.component */ "./src/app/board-editor/board-editor.component.ts");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./play/play.component */ "./src/app/play/play.component.ts");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./score/score.component */ "./src/app/score/score.component.ts");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ "./src/app/progress-bar/progress-bar.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dice_panel_dice_panel_component__WEBPACK_IMPORTED_MODULE_5__["DicePanelComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"],
                _wildcard_panel_wildcard_panel_component__WEBPACK_IMPORTED_MODULE_13__["WildcardPanelComponent"],
                _board_generator_board_generator_component__WEBPACK_IMPORTED_MODULE_14__["BoardGeneratorComponent"],
                _board_editor_board_editor_component__WEBPACK_IMPORTED_MODULE_15__["BoardEditorComponent"],
                _play_play_component__WEBPACK_IMPORTED_MODULE_16__["PlayComponent"],
                _score_score_component__WEBPACK_IMPORTED_MODULE_17__["ScoreComponent"],
                _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_18__["ProgressBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"]
            ],
            providers: [
                { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 2500 } }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board-editor/board-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/board-editor/board-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <mat-button-toggle-group (change)=\"onToolChange($event.value)\">\n    <mat-button-toggle value=\"B\" aria-label=\"Text align left\">\n      <mat-icon class=\"blue-brush\">brush</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle class=\"green-brush\" value=\"G\" aria-label=\"Text align left\">\n      <mat-icon>brush</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle class=\"pink-brush\" value=\"P\" aria-label=\"Text align left\">\n      <mat-icon>brush</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle class=\"orange-brush\" value=\"O\" aria-label=\"Text align left\">\n      <mat-icon>brush</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle class=\"yellow-brush\" value=\"Y\" aria-label=\"Text align left\">\n      <mat-icon>brush</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle value=\"S\" aria-label=\"Text align left\">\n      <mat-icon>star_outline</mat-icon>\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n  <button mat-mini-fab color=\"primary\" (click)=\"copyBoardString()\">\n    <mat-icon>file_copy</mat-icon>\n  </button>\n\n\n  <div class=\"board-header container\" id=\"header\">\n    <div *ngFor=\"let letter of letters\">{{letter}}</div>\n  </div>\n  <div class=\"grid-container container\">\n    <div\n    *ngFor=\"let cell of boardService.board; let i = index\"\n    (click)=\"handleBoxClick(i)\"\n    [ngClass]=\"{\n      'Green': cell.color === 'Green',\n      'Yellow': cell.color === 'Yellow',\n      'Pink': cell.color === 'Pink',\n      'Blue': cell.color === 'Blue',\n      'Orange': cell.color === 'Orange'\n    }\">\n      <mat-icon *ngIf=\"boardService.board[i].star\">star_outline</mat-icon>\n    </div>\n  </div>\n  <div class=\"board-header container\" id=\"header\">\n    <div *ngFor=\"let prize of fristPrizeCol\">{{prize}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/board-editor/board-editor.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/board-editor/board-editor.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(15, 2rem);\n  grid-template-rows: repeat(7, 2rem);\n  grid-row-gap: .1rem;\n  grid-column-gap: .1rem; }\n\n.grid-container div:nth-child(15n+8) {\n    border: 2px solid white; }\n\n.grid-container div {\n    border: px solid transparent; }\n\n.board-header {\n  display: grid;\n  grid-template-columns: repeat(15, 2rem);\n  grid-template-rows: 2rem;\n  grid-row-gap: .1rem;\n  grid-column-gap: .1rem; }\n\ndiv {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.green-brush {\n  color: yellowgreen; }\n\n.yellow-brush {\n  color: gold; }\n\n.blue-brush {\n  color: lightskyblue; }\n\n.pink-brush {\n  color: mediumvioletred; }\n\n.orange-brush {\n  color: orange; }\n\n.Green {\n  background-color: yellowgreen; }\n\n.Yellow {\n  background-color: gold; }\n\n.Blue {\n  background-color: lightskyblue; }\n\n.Pink {\n  background-color: mediumvioletred; }\n\n.Orange {\n  background-color: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQtZWRpdG9yL0M6XFxVc2Vyc1xcTWFudWVsXFxEb2N1bWVudHNcXEdpdEh1Ylxcc29saXRhaXJlLWtlZXIvc3JjXFxhcHBcXGJvYXJkLWVkaXRvclxcYm9hcmQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTs7QUFMeEI7SUFPSSx1QkFBdUIsRUFBQTs7QUFQM0I7SUFVSSw0QkFBNEIsRUFBQTs7QUFJaEM7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0Usd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC1lZGl0b3IvYm9hcmQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE1LCAycmVtKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAycmVtKTtcclxuICBncmlkLXJvdy1nYXA6IC4xcmVtO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogLjFyZW07XHJcbiAgZGl2Om50aC1jaGlsZCgxNW4rOCkge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG4gIGRpdiB7XHJcbiAgICBib3JkZXI6IHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuLmJvYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNSwgMnJlbSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtO1xyXG4gIGdyaWQtcm93LWdhcDogLjFyZW07XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAuMXJlbTtcclxufVxyXG5cclxuZGl2IHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmdyZWVuLWJydXNoIHtcclxuICBjb2xvcjogeWVsbG93Z3JlZW47XHJcbn1cclxuLnllbGxvdy1icnVzaCB7XHJcbiAgY29sb3I6IGdvbGQ7XHJcbn1cclxuLmJsdWUtYnJ1c2gge1xyXG4gIGNvbG9yOiBsaWdodHNreWJsdWU7XHJcbn1cclxuLnBpbmstYnJ1c2gge1xyXG4gIGNvbG9yOiBtZWRpdW12aW9sZXRyZWQ7XHJcbn1cclxuLm9yYW5nZS1icnVzaCB7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLkdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcclxufVxyXG4uWWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xyXG59XHJcbi5CbHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbn1cclxuLlBpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXZpb2xldHJlZDtcclxufVxyXG4uT3JhbmdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/board-editor/board-editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/board-editor/board-editor.component.ts ***!
  \********************************************************/
/*! exports provided: BoardEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardEditorComponent", function() { return BoardEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var BoardEditorComponent = /** @class */ (function () {
    function BoardEditorComponent(boardService, _snackbar) {
        this.boardService = boardService;
        this._snackbar = _snackbar;
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
        this.fristPrizeCol = [5, 3, 3, 3, 2, 2, 2, 1, 2, 2, 2, 3, 3, 3, 5];
        this.colors = {
            "g": "Green",
            "b": "Blue",
            "p": "Pink",
            "y": "Yellow",
            "o": "Orange"
        };
        this.tool = "";
        this.boardService.clearBoard();
    }
    BoardEditorComponent.prototype.ngOnInit = function () {
    };
    BoardEditorComponent.prototype.handleBoxClick = function (index) {
        if (this.tool === "") {
            this._snackbar.open("Select a tool before clicking on boxes");
            return;
        }
        if (this.tool === "S") {
            this.boardService.board[index].star = !this.boardService.board[index].star;
            return;
        }
        this.boardService.board[index].color = this.colors[this.tool.toLowerCase()];
    };
    BoardEditorComponent.prototype.onToolChange = function (initial) {
        this.tool = initial;
    };
    BoardEditorComponent.prototype.copyBoardString = function () {
        navigator.clipboard.writeText(this.boardService.boardToString());
    };
    BoardEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-editor',
            template: __webpack_require__(/*! ./board-editor.component.html */ "./src/app/board-editor/board-editor.component.html"),
            styles: [__webpack_require__(/*! ./board-editor.component.scss */ "./src/app/board-editor/board-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], BoardEditorComponent);
    return BoardEditorComponent;
}());



/***/ }),

/***/ "./src/app/board-generator/board-generator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/board-generator/board-generator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n"

/***/ }),

/***/ "./src/app/board-generator/board-generator.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/board-generator/board-generator.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLWdlbmVyYXRvci9ib2FyZC1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/board-generator/board-generator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/board-generator/board-generator.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardGeneratorComponent", function() { return BoardGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoardGeneratorComponent = /** @class */ (function () {
    function BoardGeneratorComponent() {
    }
    BoardGeneratorComponent.prototype.ngOnInit = function () {
    };
    BoardGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-generator',
            template: __webpack_require__(/*! ./board-generator.component.html */ "./src/app/board-generator/board-generator.component.html"),
            styles: [__webpack_require__(/*! ./board-generator.component.scss */ "./src/app/board-generator/board-generator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoardGeneratorComponent);
    return BoardGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/board.service.ts":
/*!**********************************!*\
  !*** ./src/app/board.service.ts ***!
  \**********************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/cell */ "./src/app/models/cell.ts");
/* harmony import */ var _dice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dice.service */ "./src/app/dice.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var boards = [
    "gggyyyyGbbbOyyyogYgYyoopBbooggBgpgggGpppyyoggbppgoObbggyyoPbpoooopbbooopppppBbPpppyYoPbbbOyybbbbpyyyggGoo"
];
var BoardService = /** @class */ (function () {
    function BoardService(diceService, _snackbar) {
        this.diceService = diceService;
        this._snackbar = _snackbar;
        this.difficultyLevel = 0;
        this._candidateCells = [];
        this._board = [];
        this.rows = 7;
        this.cols = 15;
        this.boardSize = this.rows * this.cols;
        this._playIsValid = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.playIsValid = this._playIsValid.asObservable();
        this._boardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._board);
        this.boardObservable = this._boardSubject.asObservable();
        this.resetBoard();
    }
    Object.defineProperty(BoardService.prototype, "board", {
        get: function () {
            return this._board;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardService.prototype, "candidates", {
        get: function () {
            return this._candidateCells;
        },
        enumerable: true,
        configurable: true
    });
    BoardService.prototype.resetBoard = function (difficultyLevel) {
        if (difficultyLevel === void 0) { difficultyLevel = 0; }
        this._candidateCells = [];
        this._board = this.stringToBoard(boards[difficultyLevel]);
        this._boardSubject.next(this._board);
    };
    BoardService.prototype.randomizeBoard = function () {
        this._candidateCells = [];
        var colors = ["Green", "Yellow", "Blue", "Pink", "Orange"];
        for (var i = 0; i < this.boardSize; i++) {
            var cell = new _models_cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](colors[Math.floor(Math.random() * 5)], false);
            this._board.push(cell);
        }
        this._boardSubject.next(this._board);
    };
    BoardService.prototype.playIsComplete = function () {
        var numberOfCandidates = this.candidates.length;
        // Using a "?" dice
        if (this.diceService.selectedNumber === "?" && numberOfCandidates > 0 && numberOfCandidates < 7) {
            return true;
        }
        // Using a number dice
        var maxCells = parseInt(this.diceService.selectedNumber);
        if (this.candidates.length === maxCells) {
            return true;
        }
        return false;
    };
    BoardService.prototype.promoteCandidateCells = function () {
        var _this = this;
        var indexes = this._candidateCells.map(function (cell) { return _this._board.indexOf(cell); });
        this.markCells(indexes);
        this.clearCandidateCells();
        this._playIsValid.next(this.playIsComplete());
        this._boardSubject.next(this._board);
    };
    BoardService.prototype.clearCandidateCells = function () {
        this._candidateCells = [];
    };
    BoardService.prototype.selectCandidateCell = function (index) {
        var cell = this._board[index];
        if (this.candidatesContain(cell)) {
            if (this.candidates.length === 1 && this.diceService.selectedColor === "Black") {
                this.diceService.selectedColorWildcard = "";
            }
            this.removeFromCandidates(cell);
            this._playIsValid.next(this.playIsComplete());
            return;
        }
        var maxCells = parseInt(this.diceService.selectedNumber);
        if (isNaN(maxCells)) {
            maxCells = 6;
        }
        if (this.candidates.length === maxCells) {
            this._snackbar.open("Can't mark more than " + maxCells + " box" + (maxCells > 1 ? 'es' : ''));
            this._playIsValid.next(this.playIsComplete());
            return;
        }
        if (!cell.isMarked && this.cellIsMarkable(index)) {
            this._candidateCells.push(cell);
            this._playIsValid.next(this.playIsComplete());
            return;
        }
    };
    BoardService.prototype.markCells = function (indexes) {
        var _this = this;
        indexes.forEach(function (i) { return _this._board[i].isMarked = true; });
    };
    BoardService.prototype.cellIsMarked = function (index) {
        return this._board[index].isMarked;
    };
    BoardService.prototype.setStars = function (indexes) {
        var _this = this;
        indexes.forEach(function (i) { return _this._board[i].star = true; });
    };
    BoardService.prototype.candidatesContain = function (cell) {
        return (this._candidateCells.indexOf(cell) !== -1);
    };
    BoardService.prototype.removeFromCandidates = function (cell) {
        var index = this._candidateCells.indexOf(cell);
        this._candidateCells.splice(index, 1);
    };
    BoardService.prototype.cellIsMarkable = function (cellIndex) {
        var cellIsFirstSelection = this.candidates.length === 0;
        // Cells in column H
        if (cellIsFirstSelection && cellIndex % this.cols === 7) {
            return true;
        }
        // Cells with a marked or candidate neighbor
        var neighbors = this.getCellneighbors(cellIndex);
        for (var i = 0; i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            if ((neighbor.isMarked && cellIsFirstSelection) || this.candidatesContain(neighbor)) {
                return true;
            }
        }
        this._snackbar.open("Can't mark this box");
        return false;
    };
    BoardService.prototype.getCellneighbors = function (cellIndex) {
        var neighbors = [];
        if (cellIndex % this.cols !== 0) {
            neighbors.push(this._board[cellIndex - 1]);
        }
        if (cellIndex % this.cols !== this.cols - 1) {
            neighbors.push(this._board[cellIndex + 1]);
        }
        if (cellIndex >= this.cols) {
            neighbors.push(this._board[cellIndex - this.cols]);
        }
        if (cellIndex < this.boardSize - 1 - this.cols) {
            neighbors.push(this._board[cellIndex + this.cols]);
        }
        return neighbors;
    };
    BoardService.prototype.boardToString = function (board) {
        if (board === void 0) { board = this._board; }
        var boardString = "";
        board.forEach(function (cell) {
            if (cell.star) {
                boardString += cell.color[0].toUpperCase();
            }
            else {
                boardString += cell.color[0].toLowerCase();
            }
        });
        return boardString;
    };
    BoardService.prototype.clearBoard = function () {
        for (var i = 0; i < this.boardSize; i++) {
            this.board[i] = new _models_cell__WEBPACK_IMPORTED_MODULE_2__["Cell"]("", false);
        }
    };
    BoardService.prototype.stringToBoard = function (boardString) {
        var board = [];
        for (var i = 0; i < boardString.length; i++) {
            board.push(this.cellFromChar(boardString[i]));
        }
        return board;
    };
    BoardService.prototype.cellFromChar = function (boardChar) {
        var colors = {
            "g": "Green",
            "b": "Blue",
            "p": "Pink",
            "y": "Yellow",
            "o": "Orange"
        };
        return new _models_cell__WEBPACK_IMPORTED_MODULE_2__["Cell"](colors[boardChar.toLowerCase()], boardChar === boardChar.toUpperCase());
    };
    BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dice_service__WEBPACK_IMPORTED_MODULE_3__["DiceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"board-header container\" id=\"header\">\n    <div class=\"prize\" *ngFor=\"let letter of letters\">{{letter}}</div>\n  </div>\n  <div class=\"grid-container container\" id=\"board\">\n    <div\n    *ngFor=\"let cell of boardService.board; let i = index\"\n    (click)=\"handleBoxClick(i)\"\n    [ngClass]=\"{\n      'candidate' : isCandidateCell(cell),\n      'Green': cell.color === 'Green',\n      'Yellow': cell.color === 'Yellow',\n      'Pink': cell.color === 'Pink',\n      'Blue': cell.color === 'Blue',\n      'Orange': cell.color === 'Orange',\n      'cell': true\n    }\">\n    <ng-container  *ngIf=\"cell.isMarked || isCandidateCell(cell)\">✗</ng-container >\n    <!-- <ng-container *ngIf=\"boardService.board[i].star && !(cell.isMarked || isCandidateCell(cell))\">☆</ng-container> -->\n    <mat-icon *ngIf=\"boardService.board[i].star && !(cell.isMarked || isCandidateCell(cell))\">star</mat-icon>\n    </div>\n  </div>\n  <div class=\"board-header container\" id=\"header\">\n    <div class=\"prize\" *ngFor=\"let prize of fristPrizeCol\">{{prize}}</div>\n  </div>\n  <!-- <div class=\"board-header container\" id=\"header\">\n    <div *ngFor=\"let prize of secondPrizeCol\">{{prize}}</div>\n  </div> -->"

/***/ }),

/***/ "./src/app/board/board.component.scss":
/*!********************************************!*\
  !*** ./src/app/board/board.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 1vmin; }\n\nbody {\n  background-color: teal; }\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(15, 6vmin);\n  grid-template-rows: repeat(7, 6vmin);\n  grid-row-gap: .1rem;\n  grid-column-gap: .1rem; }\n\n.grid-container div:nth-child(15n+8) {\n    border: 2px solid white; }\n\n.grid-container div {\n    border: px solid transparent; }\n\n.board-header {\n  display: grid;\n  grid-template-columns: repeat(15, 6vmin);\n  grid-template-rows: 6vmin;\n  grid-row-gap: .1rem;\n  grid-column-gap: .1rem; }\n\ndiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-size: 4.5vmin; }\n\n.prize {\n  background-color: white;\n  border-radius: 1vmin; }\n\n.cell {\n  border-radius: 1vmin;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-size: 5vmin;\n  font-weight: bold; }\n\n.candidate {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.3)));\n  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)); }\n\nmat-icon {\n  color: white;\n  opacity: .6; }\n\n.Green {\n  background-color: yellowgreen; }\n\n.Yellow {\n  background-color: gold; }\n\n.Blue {\n  background-color: lightskyblue; }\n\n.Pink {\n  background-color: mediumvioletred; }\n\n.Orange {\n  background-color: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvQzpcXFVzZXJzXFxNYW51ZWxcXERvY3VtZW50c1xcR2l0SHViXFxzb2xpdGFpcmUta2Vlci9zcmNcXGFwcFxcYm9hcmRcXGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBOztBQUx4QjtJQU9JLHVCQUF1QixFQUFBOztBQVAzQjtJQVVJLDRCQUE0QixFQUFBOztBQUloQztFQUNFLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBc0I7VUFBdEIsdUJBQXNCO0VBQ3RCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUFzQjtVQUF0Qix1QkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDZHQUdDO0VBSEQsbUVBR0MsRUFBQTs7QUFHSDtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxpQ0FBaUMsRUFBQTs7QUFFbkM7RUFDRSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxdm1pbjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE1LCA2dm1pbik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgNnZtaW4pO1xyXG4gIGdyaWQtcm93LWdhcDogLjFyZW07XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAuMXJlbTtcclxuICBkaXY6bnRoLWNoaWxkKDE1bis4KSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgZGl2IHtcclxuICAgIGJvcmRlcjogcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9hcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE1LCA2dm1pbik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2dm1pbjtcclxuICBncmlkLXJvdy1nYXA6IC4xcmVtO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogLjFyZW07XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogNC41dm1pbjtcclxufVxyXG5cclxuLnByaXplIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxdm1pbjtcclxufVxyXG5cclxuLmNlbGwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDF2bWluO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogNXZtaW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYW5kaWRhdGV7XHJcbiAgYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKVxyXG4gICk7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogLjY7XHJcbn1cclxuXHJcbi5HcmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbn1cclxuLlllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxufVxyXG4uQmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG59XHJcbi5QaW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW12aW9sZXRyZWQ7XHJcbn1cclxuLk9yYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _dice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dice.service */ "./src/app/dice.service.ts");
/* harmony import */ var _game_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-state.service */ "./src/app/game-state.service.ts");
/* harmony import */ var _models_game_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/game-state */ "./src/app/models/game-state.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");







var BoardComponent = /** @class */ (function () {
    function BoardComponent(boardService, diceService, gameState, _snackbar) {
        this.boardService = boardService;
        this.diceService = diceService;
        this.gameState = gameState;
        this._snackbar = _snackbar;
        this.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
        this.fristPrizeCol = [5, 3, 3, 3, 2, 2, 2, 1, 2, 2, 2, 3, 3, 3, 5];
        this.secondPrizeCol = [3, 2, 2, 2, 1, 1, 1, 0, 1, 1, 1, 2, 2, 2, 3];
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent.prototype.handleBoxClick = function (index) {
        if (this.gameState.state === _models_game_state__WEBPACK_IMPORTED_MODULE_5__["GameState"].gameOver) {
            return;
        }
        var cell = this.boardService.board[index];
        // Handle issing selection for number or color
        if (this.gameState.state !== _models_game_state__WEBPACK_IMPORTED_MODULE_5__["GameState"].markingCells) {
            this._snackbar.open("Select a Number and a Color");
            return;
        }
        // Handle color wildcard
        if (this.diceService.selectedColor === "Black" && this.diceService.selectedColorWildcard === "") {
            this.diceService.selectedColorWildcard = cell.color;
        }
        if (cell.color !== this.diceService.selectedColor && cell.color !== this.diceService.selectedColorWildcard) {
            var requiredColor = this.diceService.selectedColor === "Black" ? this.diceService.selectedColorWildcard : this.diceService.selectedColor;
            this._snackbar.open("Only " + requiredColor + " boxes can be marked");
            return;
        }
        this.boardService.selectCandidateCell(index);
        console.log("Clicked box " + index);
    };
    BoardComponent.prototype.isCandidateCell = function (cell) {
        return this.boardService.candidates.indexOf(cell) !== -1;
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/board/board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"],
            _dice_service__WEBPACK_IMPORTED_MODULE_3__["DiceService"],
            _game_state_service__WEBPACK_IMPORTED_MODULE_4__["GameStateService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/dice-panel/dice-panel.component.html":
/*!******************************************************!*\
  !*** ./src/app/dice-panel/dice-panel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-container\">\n  <mat-button-toggle-group [disabled]=\"gameOver\" #number=\"matButtonToggleGroup\" (change)=\"onNumberChange($event.value)\">\n    <mat-button-toggle [disabled]=\"!enabledNumbers[0]\" value=\"0\" aria-label=\"Text align left\">{{numberDice[0]}}\n    </mat-button-toggle>\n    <mat-button-toggle [disabled]=\"!enabledNumbers[1]\" value=\"1\" aria-label=\"Text align left\">{{numberDice[1]}}\n    </mat-button-toggle>\n    <mat-button-toggle [disabled]=\"!enabledNumbers[2]\" value=\"2\" aria-label=\"Text align left\">{{numberDice[2]}}\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n  <mat-button-toggle-group [disabled]=\"gameOver\" #color=\"matButtonToggleGroup\" (change)=\"onColorChange($event.value)\">\n    <mat-button-toggle [disabled]=\"!enabledColors[0]\" value=\"0\" [ngClass]=\"colorDice[0]\" aria-label=\"Text align left\">✘\n    </mat-button-toggle>\n    <mat-button-toggle [disabled]=\"!enabledColors[1]\" value=\"1\" [ngClass]=\"colorDice[1]\" aria-label=\"Text align left\">✘\n    </mat-button-toggle>\n    <mat-button-toggle [disabled]=\"!enabledColors[2]\" value=\"2\" [ngClass]=\"colorDice[2]\" aria-label=\"Text align left\">✘\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n  <button *ngIf=\"!gameOver\" mat-raised-button [color]=\"buttonColor\"  (click)=\"endTurn();color.value='';number.value='';\">{{buttonText}}</button>\n  <button *ngIf=\"gameOver\" mat-raised-button color=\"primary\"  (click)=\"endGame();color.value='';number.value='';\">New Game</button>\n</div>\n<div>\n  <app-wildcard-panel></app-wildcard-panel>\n</div>"

/***/ }),

/***/ "./src/app/dice-panel/dice-panel.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dice-panel/dice-panel.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Green {\n  color: yellowgreen; }\n\n.Yellow {\n  color: gold; }\n\n.Blue {\n  color: lightskyblue; }\n\n.Pink {\n  color: mediumvioletred; }\n\n.Orange {\n  color: orange; }\n\n.panel-container {\n  padding-top: 1vmin;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly; }\n\nbutton {\n  width: 20; }\n\nmat-button-toggle:focus {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljZS1wYW5lbC9DOlxcVXNlcnNcXE1hbnVlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXHNvbGl0YWlyZS1rZWVyL3NyY1xcYXBwXFxkaWNlLXBhbmVsXFxkaWNlLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQjtFQUNsQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBNkI7VUFBN0IsNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksU0FBUyxFQUFBOztBQUViO0VBQTBCLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RpY2UtcGFuZWwvZGljZS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5HcmVlbiB7XHJcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XHJcbn1cclxuLlllbGxvdyB7XHJcbiAgICBjb2xvcjogZ29sZDtcclxufVxyXG4uQmx1ZSB7XHJcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xyXG59XHJcbi5QaW5rIHtcclxuICAgIGNvbG9yOiBtZWRpdW12aW9sZXRyZWQ7XHJcbn1cclxuLk9yYW5nZSB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbi5wYW5lbC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDF2bWluO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjA7XHJcbn1cclxubWF0LWJ1dHRvbi10b2dnbGU6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9Il19 */"

/***/ }),

/***/ "./src/app/dice-panel/dice-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dice-panel/dice-panel.component.ts ***!
  \****************************************************/
/*! exports provided: DicePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DicePanelComponent", function() { return DicePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dice.service */ "./src/app/dice.service.ts");
/* harmony import */ var _game_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-state.service */ "./src/app/game-state.service.ts");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../board.service */ "./src/app/board.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _models_game_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/game-state */ "./src/app/models/game-state.ts");







var DicePanelComponent = /** @class */ (function () {
    function DicePanelComponent(boardService, diceService, gameStateService, _snackbar) {
        this.boardService = boardService;
        this.diceService = diceService;
        this.gameStateService = gameStateService;
        this._snackbar = _snackbar;
        this.numberDice = ["", "", ""];
        this.colorDice = ["", "", ""];
        this.enabledNumbers = [true, true, true];
        this.enabledColors = [true, true, true];
        this.buttonText = "Skip turn";
        this.buttonColor = "warn";
        this.gameOver = false;
        this.wildcardsRemaining = 0;
        this.wildcardsSelected = 0;
    }
    DicePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boardService.playIsValid.subscribe(function (isvalid) {
            if (isvalid) {
                _this.setFinishButton();
            }
            else {
                _this.setSkipButton();
            }
        });
        this.gameStateService.wildcardsRemaining.subscribe(function (numberOfWildcards) {
            _this.wildcardsRemaining = numberOfWildcards;
        });
        this.gameStateService.gameState.subscribe(function (state) {
            if (state === _models_game_state__WEBPACK_IMPORTED_MODULE_6__["GameState"].gameOver) {
                _this.gameOver = true;
            }
            else {
                _this.gameOver = false;
            }
        });
        this.endTurn();
    };
    DicePanelComponent.prototype.setFinishButton = function () {
        this.buttonText = "Finish Turn";
        this.buttonColor = "primary";
    };
    DicePanelComponent.prototype.setSkipButton = function () {
        this.buttonText = "Skip Turn";
        this.buttonColor = "warn";
    };
    DicePanelComponent.prototype.endTurn = function () {
        if (this.boardService.playIsComplete()) {
            this.boardService.promoteCandidateCells();
            // Remove wildcards used
            var wildcards = 0;
            if (this.diceService.selectedColor === "Black") {
                wildcards++;
            }
            if (this.diceService.selectedNumber === "?") {
                wildcards++;
            }
            this.gameStateService.useWildcards(wildcards);
        }
        else {
            this.boardService.clearCandidateCells();
        }
        this.gameStateService.nextTurn();
        if (this.gameOver) {
            this._snackbar.open("Game Over");
            return;
        }
        this.diceService.clearSelection();
        this.diceService.rollAllDice();
        this.numberDice = this.diceService.numberDice;
        this.colorDice = this.diceService.colorDice;
        // If wildcards are exausted, dissable the dice that contain wildcards
        if (this.wildcardsRemaining === 0) {
            this.dissableAllWildcards();
        }
        if (this.gameStateService.turn > 0) {
            this._snackbar.open("Turn " + this.gameStateService.turn + " of 30");
        }
    };
    DicePanelComponent.prototype.endGame = function () {
        this.gameStateService.newGame();
        this.boardService.resetBoard();
        this.endTurn();
    };
    DicePanelComponent.prototype.dissableAllWildcards = function () {
        var _this = this;
        this.numberDice.forEach(function (number, i) {
            if (number === "?") {
                _this.enabledNumbers[i] = false;
            }
        });
        this.colorDice.forEach(function (color, i) {
            if (color === "Black") {
                _this.enabledColors[i] = false;
            }
        });
    };
    DicePanelComponent.prototype.updateNumberOfWildcardsSelected = function () {
        this.wildcardsSelected = 0;
        if (this.diceService.selectedColor === "Black") {
            this.wildcardsSelected++;
        }
        if (this.diceService.selectedNumber === "?") {
            this.wildcardsSelected++;
        }
    };
    DicePanelComponent.prototype.onColorChange = function (index) {
        this.diceService.selectedColor = this.colorDice[index];
        this.boardService.clearCandidateCells();
        this.updateNumberOfWildcardsSelected();
        if (this.wildcardsRemaining - this.wildcardsSelected === 0) {
            this.dissableAllWildcards();
        }
        this.gameStateService.selectedColor();
        console.log(this.diceService.selectedColor);
    };
    DicePanelComponent.prototype.onNumberChange = function (index) {
        if (this.numberDice[index] < this.diceService.selectedNumber) {
            this.boardService.clearCandidateCells();
        }
        this.diceService.selectedNumber = this.numberDice[index];
        this.updateNumberOfWildcardsSelected();
        if (this.wildcardsRemaining - this.wildcardsSelected === 0) {
            this.dissableAllWildcards();
        }
        this.gameStateService.selectedNumber();
        console.log(this.diceService.selectedNumber);
    };
    DicePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dice-panel',
            template: __webpack_require__(/*! ./dice-panel.component.html */ "./src/app/dice-panel/dice-panel.component.html"),
            styles: [__webpack_require__(/*! ./dice-panel.component.scss */ "./src/app/dice-panel/dice-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_4__["BoardService"],
            _dice_service__WEBPACK_IMPORTED_MODULE_2__["DiceService"],
            _game_state_service__WEBPACK_IMPORTED_MODULE_3__["GameStateService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], DicePanelComponent);
    return DicePanelComponent;
}());



/***/ }),

/***/ "./src/app/dice.service.ts":
/*!*********************************!*\
  !*** ./src/app/dice.service.ts ***!
  \*********************************/
/*! exports provided: DiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceService", function() { return DiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiceService = /** @class */ (function () {
    function DiceService() {
        this.numberDice = ["", "", ""];
        this.colorDice = ["", "", ""];
        this.selectedNumber = "";
        this.selectedColor = "";
        this.selectedColorWildcard = "";
    }
    DiceService.prototype.rollNumberDice = function () {
        var numbers = ['1', '2', '3', '4', '5', '?'];
        return numbers[Math.floor(Math.random() * numbers.length)];
    };
    DiceService.prototype.rollColorDice = function () {
        var colors = ["Green", "Yellow", "Blue", "Pink", "Orange", "Black"];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    DiceService.prototype.rollAllDice = function () {
        var _this = this;
        this.numberDice.forEach(function (_x, i) { return _this.numberDice[i] = _this.rollNumberDice(); });
        this.colorDice.forEach(function (_x, i) { return _this.colorDice[i] = _this.rollColorDice(); });
    };
    DiceService.prototype.clearSelection = function () {
        this.selectedNumber = "";
        this.selectedColor = "";
        this.selectedColorWildcard = "";
    };
    DiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiceService);
    return DiceService;
}());



/***/ }),

/***/ "./src/app/game-state.service.ts":
/*!***************************************!*\
  !*** ./src/app/game-state.service.ts ***!
  \***************************************/
/*! exports provided: GameStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStateService", function() { return GameStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_game_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/game-state */ "./src/app/models/game-state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var GameStateService = /** @class */ (function () {
    function GameStateService() {
        this.state = _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].start;
        this._turn = 0;
        this._wildcards = 8;
        this._wildcardsRemaining = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._wildcards);
        this._gameState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.state);
        this._currentTurn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._turn);
        this.wildcardsRemaining = this._wildcardsRemaining.asObservable();
        this.currentTurn = this._currentTurn.asObservable();
        this.gameState = this._gameState.asObservable();
    }
    Object.defineProperty(GameStateService.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        enumerable: true,
        configurable: true
    });
    GameStateService.prototype.selectedColor = function () {
        switch (this.state) {
            case _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].selectedNumber:
                this.state = _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].markingCells;
                break;
            case _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].start:
                this.state = _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].selectedColor;
                break;
            default:
                break;
        }
    };
    GameStateService.prototype.selectedNumber = function () {
        switch (this.state) {
            case _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].selectedColor:
                this.state = _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].markingCells;
                break;
            case _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].start:
                this.state = _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].selectedNumber;
                break;
            default:
                break;
        }
    };
    GameStateService.prototype.nextTurn = function () {
        if (this._turn === 30) {
            this.state = _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].gameOver;
            this._gameState.next(this.state);
        }
        else {
            this.state = _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].start;
            this._gameState.next(this.state);
        }
        this._turn++;
        this._currentTurn.next(this._turn);
    };
    GameStateService.prototype.newGame = function () {
        this._turn = 0;
        this.state = _models_game_state__WEBPACK_IMPORTED_MODULE_2__["GameState"].start;
        this._wildcards = 8;
        this._wildcardsRemaining.next(this._wildcards);
    };
    GameStateService.prototype.useWildcards = function (wildcardsUsed) {
        this._wildcards -= wildcardsUsed;
        this._wildcardsRemaining.next(this._wildcards);
    };
    GameStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameStateService);
    return GameStateService;
}());



/***/ }),

/***/ "./src/app/models/cell.ts":
/*!********************************!*\
  !*** ./src/app/models/cell.ts ***!
  \********************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = /** @class */ (function () {
    function Cell(color, star) {
        this.color = color;
        this.star = star;
        this.isMarked = false;
    }
    return Cell;
}());



/***/ }),

/***/ "./src/app/models/game-state.ts":
/*!**************************************!*\
  !*** ./src/app/models/game-state.ts ***!
  \**************************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
var GameState;
(function (GameState) {
    GameState[GameState["start"] = 0] = "start";
    GameState[GameState["selectedColor"] = 1] = "selectedColor";
    GameState[GameState["selectedNumber"] = 2] = "selectedNumber";
    GameState[GameState["markingCells"] = 3] = "markingCells";
    GameState[GameState["gameOver"] = 4] = "gameOver";
})(GameState || (GameState = {}));


/***/ }),

/***/ "./src/app/models/score.ts":
/*!*********************************!*\
  !*** ./src/app/models/score.ts ***!
  \*********************************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
var Score = /** @class */ (function () {
    function Score() {
        this.colors = 0;
        this.columns = 0;
        this.wildcards = 0;
        this.stars = 0;
    }
    return Score;
}());



/***/ }),

/***/ "./src/app/play/play.component.html":
/*!******************************************!*\
  !*** ./src/app/play/play.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-dice-panel></app-dice-panel>\n  <!-- <app-progress-bar></app-progress-bar> -->\n  <app-board></app-board>\n  <app-score></app-score>\n</div>\n"

/***/ }),

/***/ "./src/app/play/play.component.scss":
/*!******************************************!*\
  !*** ./src/app/play/play.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center;\n  background-color: teal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9DOlxcVXNlcnNcXE1hbnVlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXHNvbGl0YWlyZS1rZWVyL3NyY1xcYXBwXFxwbGF5XFxwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCO0VBQ2pCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxheS9wbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/play/play.component.ts":
/*!****************************************!*\
  !*** ./src/app/play/play.component.ts ***!
  \****************************************/
/*! exports provided: PlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function() { return PlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayComponent = /** @class */ (function () {
    function PlayComponent() {
    }
    PlayComponent.prototype.ngOnInit = function () {
    };
    PlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-play',
            template: __webpack_require__(/*! ./play.component.html */ "./src/app/play/play.component.html"),
            styles: [__webpack_require__(/*! ./play.component.scss */ "./src/app/play/play.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayComponent);
    return PlayComponent;
}());



/***/ }),

/***/ "./src/app/progress-bar/progress-bar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar\n  class=\"example-margin\"\n  color=\"primary\"\n  mode=\"determinate\"\n  [value]=\"currentTurn*100/maxTurns\">\n</mat-progress-bar>"

/***/ }),

/***/ "./src/app/progress-bar/progress-bar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/progress-bar/progress-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.ts ***!
  \********************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-state.service */ "./src/app/game-state.service.ts");



var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent(gameState) {
        this.gameState = gameState;
        this.maxTurns = 30;
        this.currentTurn = 0;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameState.currentTurn.subscribe(function (turn) {
            _this.currentTurn = turn;
        });
    };
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/progress-bar/progress-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_state_service__WEBPACK_IMPORTED_MODULE_2__["GameStateService"]])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/score.service.ts":
/*!**********************************!*\
  !*** ./src/app/score.service.ts ***!
  \**********************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board.service */ "./src/app/board.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/score */ "./src/app/models/score.ts");
/* harmony import */ var _game_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-state.service */ "./src/app/game-state.service.ts");






var ScoreService = /** @class */ (function () {
    function ScoreService(boardService, gameStateService) {
        var _this = this;
        this.boardService = boardService;
        this.gameStateService = gameStateService;
        this._score = new _models_score__WEBPACK_IMPORTED_MODULE_4__["Score"]();
        this._scoreSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._score);
        this.boardObservable = this._scoreSubject.asObservable();
        this.boardService.boardObservable.subscribe(function (board) {
            _this.calcScore(board);
        });
        this.gameStateService.wildcardsRemaining.subscribe(function (numberOfWildcards) {
            _this._score.wildcards = numberOfWildcards;
        });
    }
    ScoreService.prototype.calcScore = function (board) {
        this._score.colors = this.calcColorScore(board);
        this._score.columns = this.calcColumnScore(board);
        this._score.stars = this.calcStarScore(board);
        this._scoreSubject.next(this._score);
    };
    ScoreService.prototype.calcStarScore = function (board) {
        return board.filter(function (cell) { return cell.star && !cell.isMarked; }).length * -1;
    };
    ScoreService.prototype.calcColumnScore = function (board) {
        var prizes = [5, 3, 3, 3, 2, 2, 2, 1, 2, 2, 2, 3, 3, 3, 5];
        var score = 0;
        var _loop_1 = function (i) {
            if (board.filter(function (cell, index) { return index % 15 === i; }).every(function (cell) { return cell.isMarked; })) {
                score += prizes[i];
            }
        };
        for (var i = 0; i < 15; i++) {
            _loop_1(i);
        }
        return score;
    };
    ScoreService.prototype.calcColorScore = function (board) {
        var colors = ["Green", "Yellow", "Blue", "Pink", "Orange"];
        var score = 0;
        var _loop_2 = function (i) {
            if (board.filter(function (cell) { return cell.color === colors[i]; }).every(function (cell) { return cell.isMarked; })) {
                score += 5;
            }
        };
        for (var i = 0; i < colors.length; i++) {
            _loop_2(i);
        }
        return score;
    };
    ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"],
            _game_state_service__WEBPACK_IMPORTED_MODULE_5__["GameStateService"]])
    ], ScoreService);
    return ScoreService;
}());



/***/ }),

/***/ "./src/app/score/score.component.html":
/*!********************************************!*\
  !*** ./src/app/score/score.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n    SCORE\n</div>\n<div class=\"container\">\n    <div>\n        BONUS\n    </div>\n    <div>\n        {{colorScore}}\n    </div>\n    <div>\n        A - O\n    </div>\n    <div>\n        {{columnScore}}\n    </div>\n    <div>\n        <mat-icon>error_outline</mat-icon>(+1)\n    </div>\n    <div>\n        {{wildcardScore}}\n    </div>\n    <div>\n        <mat-icon>star</mat-icon>(-2)\n    </div>\n    <div>\n        {{starScore}}\n    </div>\n    <div>\n        TOTAL\n    </div>\n    <div>\n        {{totalScore}}\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/score/score.component.scss":
/*!********************************************!*\
  !*** ./src/app/score/score.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: white; }\n\n.container {\n  padding: 1vmin;\n  font-size: 4vmin;\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n  grid-template-columns: repeat(2, 15vmin);\n  grid-row-gap: .1rem;\n  grid-column-gap: .1rem; }\n\n.container div:nth-child(2n) {\n    border: 2px solid white;\n    border-radius: 1vmin;\n    background-color: white; }\n\n.container div:nth-child(2n+1) {\n    border: px solid transparent;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUvQzpcXFVzZXJzXFxNYW51ZWxcXERvY3VtZW50c1xcR2l0SHViXFxzb2xpdGFpcmUta2Vlci9zcmNcXGFwcFxcc2NvcmVcXHNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBOztBQVAxQjtJQVNNLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsdUJBQXVCLEVBQUE7O0FBWDdCO0lBY00sNEJBQTRCO0lBQzVCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxdm1pbjtcclxuICAgIGZvbnQtc2l6ZTogNHZtaW47XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxNXZtaW4pO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAuMXJlbTtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogLjFyZW07XHJcbiAgICBkaXY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxdm1pbjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBkaXY6bnRoLWNoaWxkKDJuKzEpIHtcclxuICAgICAgYm9yZGVyOiBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/score/score.component.ts":
/*!******************************************!*\
  !*** ./src/app/score/score.component.ts ***!
  \******************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../score.service */ "./src/app/score.service.ts");



var ScoreComponent = /** @class */ (function () {
    function ScoreComponent(scoreService) {
        this.scoreService = scoreService;
        this.totalScore = 0;
        this.colorScore = 0;
        this.columnScore = 0;
        this.wildcardScore = 0;
        this.starScore = 0;
    }
    ScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scoreService.boardObservable.subscribe(function (score) {
            _this.colorScore = score.colors;
            _this.columnScore = score.columns;
            _this.wildcardScore = score.wildcards;
            _this.starScore = score.stars;
            _this.totalScore = _this.colorScore + _this.columnScore + _this.wildcardScore + _this.starScore;
        });
    };
    ScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-score',
            template: __webpack_require__(/*! ./score.component.html */ "./src/app/score/score.component.html"),
            styles: [__webpack_require__(/*! ./score.component.scss */ "./src/app/score/score.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]])
    ], ScoreComponent);
    return ScoreComponent;
}());



/***/ }),

/***/ "./src/app/wildcard-panel/wildcard-panel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/wildcard-panel/wildcard-panel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-icon [ngClass]=\"{available: wildcardsRemaining > 0}\">error_outline</mat-icon>\n  <mat-icon [ngClass]=\"{available: wildcardsRemaining > 1}\">error_outline</mat-icon>\n  <mat-icon [ngClass]=\"{available: wildcardsRemaining > 2}\">error_outline</mat-icon>\n  <mat-icon [ngClass]=\"{available: wildcardsRemaining > 3}\">error_outline</mat-icon>\n  <mat-icon [ngClass]=\"{available: wildcardsRemaining > 4}\">error_outline</mat-icon>\n  <mat-icon [ngClass]=\"{available: wildcardsRemaining > 5}\">error_outline</mat-icon>\n  <mat-icon [ngClass]=\"{available: wildcardsRemaining > 6}\">error_outline</mat-icon>\n  <mat-icon [ngClass]=\"{available: wildcardsRemaining > 7}\">error_outline</mat-icon>\n</p>\n"

/***/ }),

/***/ "./src/app/wildcard-panel/wildcard-panel.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/wildcard-panel/wildcard-panel.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon.available {\n  opacity: 1; }\n\nmat-icon {\n  opacity: .25; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lsZGNhcmQtcGFuZWwvQzpcXFVzZXJzXFxNYW51ZWxcXERvY3VtZW50c1xcR2l0SHViXFxzb2xpdGFpcmUta2Vlci9zcmNcXGFwcFxcd2lsZGNhcmQtcGFuZWxcXHdpbGRjYXJkLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2lsZGNhcmQtcGFuZWwvd2lsZGNhcmQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbi5hdmFpbGFibGUge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5tYXQtaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAuMjU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/wildcard-panel/wildcard-panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/wildcard-panel/wildcard-panel.component.ts ***!
  \************************************************************/
/*! exports provided: WildcardPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildcardPanelComponent", function() { return WildcardPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-state.service */ "./src/app/game-state.service.ts");



var WildcardPanelComponent = /** @class */ (function () {
    function WildcardPanelComponent(gameState) {
        this.gameState = gameState;
        this.wildcardsRemaining = 0;
    }
    WildcardPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameState.wildcardsRemaining.subscribe(function (numberOfWildcards) {
            _this.wildcardsRemaining = numberOfWildcards;
        });
    };
    WildcardPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wildcard-panel',
            template: __webpack_require__(/*! ./wildcard-panel.component.html */ "./src/app/wildcard-panel/wildcard-panel.component.html"),
            styles: [__webpack_require__(/*! ./wildcard-panel.component.scss */ "./src/app/wildcard-panel/wildcard-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_state_service__WEBPACK_IMPORTED_MODULE_2__["GameStateService"]])
    ], WildcardPanelComponent);
    return WildcardPanelComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Manuel\Documents\GitHub\solitaire-keer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map