import { EventData } from "data/observable";
import { Page, NavigatedData } from 'ui/page';
import { ExcelPageViewModel } from './excel-page-vm';
import { ExplorerPageViewModel } from '../explorer-page/explorer-page-vm';
import {SDKHelper} from '../../SDKHelper';

var vm: ExcelPageViewModel;
var page: Page;


export function pageLoaded(args: EventData) {
    page = <Page>args.object;


        vm = new ExcelPageViewModel();
        //vm.loadWorkbook();


    page.bindingContext = vm;
}