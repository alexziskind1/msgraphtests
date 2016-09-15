import { EventData } from "data/observable";
import { Page } from "ui/page";
import { ExpensesModel } from "./expenses.vm";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    var vm = new ExpensesModel();
    page.bindingContext = vm;
    vm.init();
}