import {Entity} from './Entity';
import {IWorkbookTableRowsCollectionPage} from './IWorkbookTableRowsCollectionPage';

export class WorkbookTable extends Entity {

        /// <summary>
        /// Gets or sets name.
        /// </summary>
        public Name : string;
    
        /// <summary>
        /// Gets or sets show headers.
        /// </summary>
        public  ShowHeaders: boolean;
    
        /// <summary>
        /// Gets or sets show totals.
        /// </summary>
        public ShowTotals: boolean;
    
        /// <summary>
        /// Gets or sets style.
        /// </summary>
        //public Style: string;
    
        /// <summary>
        /// Gets or sets columns.
        /// </summary>
        //public  Columns : IWorkbookTableColumnsCollectionPage;
    
        /// <summary>
        /// Gets or sets rows.
        /// </summary>
        public  Rows : IWorkbookTableRowsCollectionPage;
    
        /// <summary>
        /// Gets or sets sort.
        /// </summary>
        //public  Sort : WorkbookTableSort;
    
        /// <summary>
        /// Gets or sets worksheet.
        /// </summary>
        //public  Worksheet : WorkbookWorksheet;

}