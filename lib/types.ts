import { links } from "./data";

export type SectionName = typeof links[number]['name'];
export type SlideData = {
    imageUrl: string;
    component: React.ReactNode;
    // Outros campos necessários
}