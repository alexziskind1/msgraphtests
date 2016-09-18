import {Entity} from './Entity';
import {IWorkbookTablesCollectionPage} from './IWorkbookTablesCollectionPage';

export class Workbook extends Entity {
            /// <summary>
        /// Gets or sets application.
        /// </summary>
        //public  Application : WorkbookApplication;
    
        /// <summary>
        /// Gets or sets names.
        /// </summary>
        //public  Names : IWorkbookNamesCollectionPage;
    
        /// <summary>
        /// Gets or sets tables.
        /// </summary>
        public  Tables : IWorkbookTablesCollectionPage;
    
        /// <summary>
        /// Gets or sets worksheets.
        /// </summary>
        //public  Worksheets : IWorkbookWorksheetsCollectionPage;
    
        /// <summary>
        /// Gets or sets functions.
        /// </summary>
        //public  Functions : WorkbookFunctions;
}