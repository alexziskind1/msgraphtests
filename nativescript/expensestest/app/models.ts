

export interface Transaction {
    date: string;
    amount: number;
    merchant: string;
    category: Category;
    typeofday: string;
    month: string;
}

export interface DriveItemResultIdName {
    id: string;
    name: string;
}

export type Category =
    "Travel"
    | "Restaurant"
    | "Entertainment"
    | "Groceries"
    | "Transportation"
    | "Shopping"
    | "Education"
    | "Communications"
    | "Other"

export const Categories = [
    "Travel"
    , "Restaurant"
    , "Entertainment"
    , "Groceries"
    , "Transportation"
    , "Shopping"
    , "Education"
    , "Communications"
    , "Other" 
    ];