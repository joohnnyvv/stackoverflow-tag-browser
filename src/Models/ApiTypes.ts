export interface StackTagsResponse {
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  items: StackTag[];
}

export interface StackTag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}
