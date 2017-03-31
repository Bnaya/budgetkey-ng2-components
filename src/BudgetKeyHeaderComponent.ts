import { Component } from '@angular/core';
import {template} from './BudgetKeyHeaderComponent.html';
import {style} from './BudgetKeyHeaderComponent.css';

@Component({
    selector: 'budgetkey-header',
    styles: [style],
    template
})

export class BudgetKeyHeaderComponent {

    title = "מפתח התקציב";

}
