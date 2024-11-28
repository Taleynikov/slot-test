import { Component, ElementRef, OnInit } from '@angular/core';
import { PixiApp } from 'src/app/pixi-app';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    // ########################################

    public loading = true;

    // ########################################

    constructor(
        private elementRef: ElementRef,
        private pixiApp: PixiApp
    ) {}

    // ########################################

    ngOnInit() {
        this.pixiApp.init(this.elementRef.nativeElement).then(() => {
            this.loading = false;
        });
    }

    // ########################################
}
