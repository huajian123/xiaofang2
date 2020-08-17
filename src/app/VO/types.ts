export class PageInfo<T> {
    pageNum?: number;
    pageSize?: number;
    size?: number;
    orderBy?: string;
    startRow: number;
    endRow: number;
    total: number;
    pages: number;
    list: Array<T>;
    firstPage: number;
    prePage: number;
    nextPage: number;
    lastPage: number;
    isFirstPage: boolean;
    isLastPage: boolean;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    navigatePages: number;
    navigatepageNums: number[];
}

export class SearchCommonVO<T> {
    pageNum: number;
    pageSize: number;
    searchDTO?: T;
}

export enum UserRole {
    User,
    Manage
}
