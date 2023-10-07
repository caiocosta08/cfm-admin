import { Article } from "./article";
export interface ArticleQueryResponse {
    total: number;
    items: Article[];
}