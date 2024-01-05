/*export interface TypeBook {
    title: string;
    author?: string;
    cover?: string;
}*/

export interface TypeBook {
    description?: string;
    title: string;
    covers?: [];
    subject_places?: [];
    subjects?: [];
    key?: string;
    isbn_13?: string;
    isbn_10?: string;
    number_of_pages?: number;
    publishers?: string;
    authors?: [{
        author: {
            key: string;
        },
        type: {
            key: string;
        }
    }];
    publish_date?: string;
    works?: [{key: string;}];
    type?: {
        key: string;
    };
    links?: [{
        title: string;
        url: string;
        type: {key: string; };
    }];
    latest_revision?: number;
    revision?: number;
    created?: {
        type: string;
        value: string;
    };
    last_modified?: {
        type: string;
        value: string;
    };
}
