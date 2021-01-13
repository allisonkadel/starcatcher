import { Label } from './label';

export interface Issue {
    title: string;
    labels: Label[];
    state: string;
    id: number;
}