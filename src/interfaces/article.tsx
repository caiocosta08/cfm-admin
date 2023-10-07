export interface Article {
    id: string;
    question: string;
    answer: string;
    created_at?: string;
    published?: boolean;
    published_at: string;
    divergence: string;
    divergence_reason?: string;
    author: string;
    responsible: string;
    tags?: string[];
    category?: string;
    subcategory: string[];
    visibility_tags: string[];
    url?: string;
    status: string;
    references: number;
    version: string;
}