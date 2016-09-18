import { Entity } from './Entity';
import { IWorkbookTableRowsCollectionPage } from './IWorkbookTableRowsCollectionPage';
export declare class WorkbookTable extends Entity {
    Name: string;
    ShowHeaders: boolean;
    ShowTotals: boolean;
    Rows: IWorkbookTableRowsCollectionPage;
}
