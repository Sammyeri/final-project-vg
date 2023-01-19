import { ChildForm } from "../components/ChildForm";

export interface Child {
    name: string;
    platform: string;
    birthdate: string;
    rating: string
}

export let child: Child[] = [];

export function deleteChild(index: number) {
    child.slice(index, 1);
}