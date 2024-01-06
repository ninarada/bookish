import { TypeWork } from "./TypeWork";

export interface TypeSubject {
    key: string;
    name: string;
    subject_type?: string;
    work_count?: number;
    works?: TypeWork[];
}
