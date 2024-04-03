export interface StackTagsResponse {
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  items: StackTag[];
}

export interface StackTag {
  collectives?: [];
  has_synonyms?: boolean;
  is_moderator_only?: boolean;
  is_required?: boolean;
  count?: number;
  name: string;
  description?: string;
}

export interface StackWikiResponse {
  items: TagWiki[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface TagWiki {
  excerpt_last_edit_date: number;
  body_last_edit_date: number;
  excerpt: string;
  tag_name: string;
}
