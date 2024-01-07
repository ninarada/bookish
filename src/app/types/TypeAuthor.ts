export interface TypeAuthor {
    name: string;
    key: string;

    bio?: string;
    remote_ids?: {
      viaf?: string;
      goodreads?: string;
      storygraph?: string;
      isni?: string;
      librarything?: string;
      amazon?: string;
      wikidata?: string;
    };
    fuller_name?: string;
    wikipedia?: string;
    photos?: number[];
    type?: {
      key?: string;
    };
    personal_name?: string;
    entity_type?: string;
    alternate_names?: string[];
    source_records?: string[];
    links?: {
      title?: string;
      url?: string;
      type?: {
        key?: string;
      };
    }[];
    title?: string;
    birth_date?: string;
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
  