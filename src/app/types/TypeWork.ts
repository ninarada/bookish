export interface TypeWork {
    key: string;
    title: string;
    covers: number[];
    authors: {
        author: {
            key: string;
        };
        type?: {
            key?: string;
        };
    }[];
    type?: {
        key?: string;
    };
    description: string;
    
    subject_places?: string[];
    subjects?: string[];
    subject_people?: string[];
    subject_times?: string[];
    location?: string;
    latest_revision?: number;
    revision?: number;
    created?: {
        type?: string;
        value?: string;
    };
    last_modified?: {
        type?: string;
        value?: string;
    };
}
