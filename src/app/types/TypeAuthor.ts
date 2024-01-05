export interface TypeAuthor {
    type?: {
        key: string;
      };
    source_records?: string[];
    name?: string;
    alternate_names?: string[];
    birth_date?: string;
    photos?: number[];
    key?: string;
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