export interface MyFile extends File {
    fileKey?: string;
    isLarge?: boolean;
    isErrored?: boolean;
    uploadState?: 'success' | 'failed' | 'cancel';
}