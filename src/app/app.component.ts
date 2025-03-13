/**
 * App component script
 */
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BryntumSchedulerComponent } from '@bryntum/scheduler-angular';
import { Scheduler } from '@bryntum/scheduler';
import { schedulerProps } from './app.config';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.ShadowDom
})
export class AppComponent implements AfterViewInit {

    public schedulerProps: any = schedulerProps;
    private scheduler!: Scheduler;

    columnLinesFeature = { disabled : false };
    stripeFeature = { disabled : true };
    public dragSelect:boolean = true;

    @ViewChild(BryntumSchedulerComponent, { static : true }) schedulerComponent!: BryntumSchedulerComponent;

    ngAfterViewInit(): void {
        // Store Scheduler instance
        this.scheduler = this.schedulerComponent.instance;
        this.scheduler.features.eventDragCreate.disabled = this.dragSelect;
        // // The following lines are only needed for ViewEncapsulation.ShadowDom
        document.fonts.add(new FontFace('FontAwesome6Free', `url(assets/fonts/fa-solid-900.woff2)`));
        document.fonts.add(new FontFace('Roboto', `url(assets/fonts/Roboto-Regular.woff2)`));

    }



    toggleSelection(event : any): void {
        
        this.dragSelect=!this.dragSelect;
        this.scheduler.features.eventDragCreate.disabled = this.dragSelect;
        
    }

}
