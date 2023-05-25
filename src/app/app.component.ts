import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IconModule, IconService} from "carbon-components-angular";

@Component({
    standalone: true,
    imports: [
        CommonModule,
        IconModule,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private iconService: IconService
    ) {
    }

}
