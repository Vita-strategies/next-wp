import {
  Author,
  Category,
  FeaturedMedia,
  Page,
  Post,
  Tag,
} from "./wordpress.d";

const baseLink = "https://vita-strategies.example.com";

const media: FeaturedMedia[] = [
  {
    id: 1,
    date: "2024-01-05T10:00:00",
    date_gmt: "2024-01-05T15:00:00",
    modified: "2024-01-05T10:00:00",
    modified_gmt: "2024-01-05T15:00:00",
    slug: "strategic-planning-session",
    status: "publish",
    link: `${baseLink}/?attachment_id=1`,
    guid: {
      rendered: `${baseLink}/?attachment_id=1`,
    },
    title: {
      rendered: "Strategic Planning Session",
    },
    author: 1,
    caption: {
      rendered: "<p>Team collaborating during a planning workshop.</p>",
    },
    alt_text: "Team collaborating in a modern office",
    media_type: "image",
    mime_type: "image/jpeg",
    media_details: {
      width: 1200,
      height: 630,
      file: "strategic-planning-session.jpg",
      sizes: {
        full: {
          file: "strategic-planning-session.jpg",
          width: 1200,
          height: 630,
          mime_type: "image/jpeg",
          source_url:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        },
        medium: {
          file: "strategic-planning-session-768.jpg",
          width: 768,
          height: 404,
          mime_type: "image/jpeg",
          source_url:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=768&q=80",
        },
      },
    },
    source_url:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    date: "2024-01-12T09:30:00",
    date_gmt: "2024-01-12T14:30:00",
    modified: "2024-01-12T09:30:00",
    modified_gmt: "2024-01-12T14:30:00",
    slug: "data-insights-dashboard",
    status: "publish",
    link: `${baseLink}/?attachment_id=2`,
    guid: {
      rendered: `${baseLink}/?attachment_id=2`,
    },
    title: {
      rendered: "Data Insights Dashboard",
    },
    author: 2,
    caption: {
      rendered: "<p>Dashboard visualizing key growth metrics.</p>",
    },
    alt_text: "Dashboard charts on a laptop screen",
    media_type: "image",
    mime_type: "image/jpeg",
    media_details: {
      width: 1200,
      height: 630,
      file: "data-insights-dashboard.jpg",
      sizes: {
        full: {
          file: "data-insights-dashboard.jpg",
          width: 1200,
          height: 630,
          mime_type: "image/jpeg",
          source_url:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        },
        medium: {
          file: "data-insights-dashboard-768.jpg",
          width: 768,
          height: 404,
          mime_type: "image/jpeg",
          source_url:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=768&q=80",
        },
      },
    },
    source_url:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
];

const authors: Author[] = [
  {
    id: 1,
    name: "Mara Thompson",
    url: `${baseLink}/team/mara-thompson`,
    description: "Lead strategist focused on operational excellence and transformation programs.",
    link: `${baseLink}/author/mara-thompson`,
    slug: "mara-thompson",
    avatar_urls: {
      "24": "https://i.pravatar.cc/24?img=21",
      "48": "https://i.pravatar.cc/48?img=21",
      "96": "https://i.pravatar.cc/96?img=21",
    },
    meta: {},
  },
  {
    id: 2,
    name: "Devon Lee",
    url: `${baseLink}/team/devon-lee`,
    description: "Data analyst translating market signals into growth strategies.",
    link: `${baseLink}/author/devon-lee`,
    slug: "devon-lee",
    avatar_urls: {
      "24": "https://i.pravatar.cc/24?img=45",
      "48": "https://i.pravatar.cc/48?img=45",
      "96": "https://i.pravatar.cc/96?img=45",
    },
    meta: {},
  },
];

const categories: Category[] = [
  {
    id: 1,
    count: 0,
    description: "Insights on streamlining operations and aligning teams.",
    link: `${baseLink}/category/operations`,
    name: "Operations",
    slug: "operations",
    meta: {},
    taxonomy: "category",
    parent: 0,
  },
  {
    id: 2,
    count: 0,
    description: "Strategies for accelerating growth and market impact.",
    link: `${baseLink}/category/growth`,
    name: "Growth",
    slug: "growth",
    meta: {},
    taxonomy: "category",
    parent: 0,
  },
];

const tags: Tag[] = [
  {
    id: 1,
    count: 0,
    description: "Strategic planning frameworks and best practices.",
    link: `${baseLink}/tag/strategy`,
    name: "Strategy",
    slug: "strategy",
    meta: {},
    taxonomy: "post_tag",
  },
  {
    id: 2,
    count: 0,
    description: "Change management and transformation leadership.",
    link: `${baseLink}/tag/change-management`,
    name: "Change Management",
    slug: "change-management",
    meta: {},
    taxonomy: "post_tag",
  },
  {
    id: 3,
    count: 0,
    description: "Data-driven insights and analytics trends.",
    link: `${baseLink}/tag/data-insights`,
    name: "Data Insights",
    slug: "data-insights",
    meta: {},
    taxonomy: "post_tag",
  },
];

const posts: Post[] = [
  {
    id: 101,
    date: "2024-01-24T08:00:00",
    date_gmt: "2024-01-24T13:00:00",
    modified: "2024-01-24T09:15:00",
    modified_gmt: "2024-01-24T14:15:00",
    slug: "integrated-strategy-sprints",
    status: "publish",
    link: `${baseLink}/posts/integrated-strategy-sprints`,
    guid: {
      rendered: `${baseLink}/?p=101`,
    },
    title: {
      rendered: "Building Momentum with Integrated Strategy Sprints",
    },
    content: {
      rendered:
        "<p>Vita Strategies helps executive teams run quarterly strategy sprints that align projects, budgets, and talent. Our framework keeps long-term vision and near-term execution in sync.</p><p>Each sprint ends with a measurable roadmap, communications plan, and dashboard updates so teams can move quickly with clarity.</p>",
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Learn how integrated strategy sprints keep teams aligned and accountable from ideation to execution.</p>",
      protected: false,
    },
    author: 1,
    featured_media: 1,
    comment_status: "open",
    ping_status: "open",
    sticky: true,
    template: "",
    format: "standard",
    categories: [1],
    tags: [1, 2],
    meta: {},
  },
  {
    id: 102,
    date: "2024-01-18T11:30:00",
    date_gmt: "2024-01-18T16:30:00",
    modified: "2024-01-18T12:00:00",
    modified_gmt: "2024-01-18T17:00:00",
    slug: "navigating-change-with-operational-roadmaps",
    status: "publish",
    link: `${baseLink}/posts/navigating-change-with-operational-roadmaps`,
    guid: {
      rendered: `${baseLink}/?p=102`,
    },
    title: {
      rendered: "Navigating Change with Operational Roadmaps",
    },
    content: {
      rendered:
        "<p>Change succeeds when every team understands the larger narrative. We create operational roadmaps that clarify dependencies and highlight critical enablement work.</p><p>Our clients use these living documents to coordinate technology upgrades, policy changes, and capability-building programs.</p>",
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Operational roadmaps communicate the why, what, and how of transformation in a single view.</p>",
      protected: false,
    },
    author: 1,
    featured_media: 2,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    categories: [1],
    tags: [2],
    meta: {},
  },
  {
    id: 103,
    date: "2024-01-10T07:45:00",
    date_gmt: "2024-01-10T12:45:00",
    modified: "2024-01-11T08:00:00",
    modified_gmt: "2024-01-11T13:00:00",
    slug: "turning-market-signals-into-growth-plays",
    status: "publish",
    link: `${baseLink}/posts/turning-market-signals-into-growth-plays`,
    guid: {
      rendered: `${baseLink}/?p=103`,
    },
    title: {
      rendered: "Turning Market Signals into Growth Plays",
    },
    content: {
      rendered:
        "<p>We analyze market signals to help leaders prioritize growth investments. From customer insights to pricing models, Vita Strategies translates data into clear plays.</p><p>Our Growth Navigator dashboard highlights leading indicators so executives can course-correct faster.</p>",
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Convert market signals into a growth engine with our Navigator dashboard.</p>",
      protected: false,
    },
    author: 2,
    featured_media: 2,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    categories: [2],
    tags: [1, 3],
    meta: {},
  },
];

const pages: Page[] = [
  {
    id: 201,
    date: "2024-01-06T09:00:00",
    date_gmt: "2024-01-06T14:00:00",
    modified: "2024-01-20T10:00:00",
    modified_gmt: "2024-01-20T15:00:00",
    slug: "about",
    status: "publish",
    link: `${baseLink}/pages/about`,
    guid: {
      rendered: `${baseLink}/?page_id=201`,
    },
    title: {
      rendered: "About Vita Strategies",
    },
    content: {
      rendered:
        "<p>Vita Strategies partners with executive teams to build resilient operating models. We focus on aligning people, processes, and technology so organizations can execute bold strategies.</p><p>From strategic planning to change enablement, our advisors guide leaders through every phase of transformation.</p>",
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>We help organizations translate strategy into action through collaborative advisory services.</p>",
      protected: false,
    },
    author: 1,
    featured_media: 1,
    parent: 0,
    menu_order: 0,
    comment_status: "closed",
    ping_status: "closed",
    template: "",
    meta: {},
  },
  {
    id: 202,
    date: "2024-01-08T09:00:00",
    date_gmt: "2024-01-08T14:00:00",
    modified: "2024-01-18T10:30:00",
    modified_gmt: "2024-01-18T15:30:00",
    slug: "services",
    status: "publish",
    link: `${baseLink}/pages/services`,
    guid: {
      rendered: `${baseLink}/?page_id=202`,
    },
    title: {
      rendered: "Services",
    },
    content: {
      rendered:
        "<p>Our advisors support leaders with strategy activation, operating model redesign, and growth enablement. We tailor each engagement to your culture and ambition.</p><ul><li>Strategy sprints and portfolio governance</li><li>Change management and communications</li><li>Data-driven growth playbooks</li></ul>",
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>An overview of Vita Strategies advisory services.</p>",
      protected: false,
    },
    author: 2,
    featured_media: 2,
    parent: 0,
    menu_order: 1,
    comment_status: "closed",
    ping_status: "closed",
    template: "",
    meta: {},
  },
];

const data = {
  media,
  authors,
  categories,
  tags,
  posts,
  pages,
};

data.categories.forEach((category) => {
  category.count = data.posts.filter((post) => post.categories.includes(category.id)).length;
});

data.tags.forEach((tag) => {
  tag.count = data.posts.filter((post) => post.tags.includes(tag.id)).length;
});

const clone = <T,>(value: T): T => {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value)) as T;
};

const parseNumeric = (value?: string | number) => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  }

  return undefined;
};

const stripHtml = (input: string) => input.replace(/<[^>]+>/g, " ").trim();

const matchesSearch = (post: Post, term?: string) => {
  if (!term) {
    return true;
  }

  const normalized = term.trim().toLowerCase();

  if (!normalized) {
    return true;
  }

  const haystack = [
    stripHtml(post.title.rendered),
    stripHtml(post.content.rendered),
    stripHtml(post.excerpt.rendered),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(normalized);
};

const sortByDateDesc = (items: Post[]) =>
  [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const fallbackGetAllPosts = async (filterParams?: {
  author?: string;
  tag?: string;
  category?: string;
  search?: string;
}): Promise<Post[]> => {
  const authorId = parseNumeric(filterParams?.author);
  const tagId = parseNumeric(filterParams?.tag);
  const categoryId = parseNumeric(filterParams?.category);
  const searchTerm = filterParams?.search;

  let results = data.posts;

  if (authorId !== undefined) {
    results = results.filter((post) => post.author === authorId);
  }

  if (tagId !== undefined) {
    results = results.filter((post) => post.tags.includes(tagId));
  }

  if (categoryId !== undefined) {
    results = results.filter((post) => post.categories.includes(categoryId));
  }

  results = results.filter((post) => matchesSearch(post, searchTerm));

  return clone(sortByDateDesc(results));
};

export const fallbackGetPostById = async (id: number): Promise<Post> => {
  const post = data.posts.find((item) => item.id === id);
  return clone(post ?? data.posts[0]);
};

export const fallbackGetPostBySlug = async (slug: string): Promise<Post> => {
  const post = data.posts.find((item) => item.slug === slug);
  return clone(post ?? data.posts[0]);
};

export const fallbackGetAllCategories = async (): Promise<Category[]> =>
  clone(data.categories);

export const fallbackGetCategoryById = async (
  id: number
): Promise<Category> => {
  const category = data.categories.find((item) => item.id === id);
  return clone(category ?? data.categories[0]);
};

export const fallbackGetCategoryBySlug = async (
  slug: string
): Promise<Category> => {
  const category = data.categories.find((item) => item.slug === slug);
  return clone(category ?? data.categories[0]);
};

export const fallbackGetPostsByCategory = async (
  categoryId: number
): Promise<Post[]> => {
  const results = data.posts.filter((post) => post.categories.includes(categoryId));
  return clone(sortByDateDesc(results));
};

export const fallbackGetPostsByTag = async (tagId: number): Promise<Post[]> => {
  const results = data.posts.filter((post) => post.tags.includes(tagId));
  return clone(sortByDateDesc(results));
};

export const fallbackGetTagsByPost = async (postId: number): Promise<Tag[]> => {
  const post = data.posts.find((item) => item.id === postId);

  if (!post) {
    return clone([]);
  }

  const relatedTags = data.tags.filter((tag) => post.tags.includes(tag.id));
  return clone(relatedTags);
};

export const fallbackGetAllTags = async (): Promise<Tag[]> => clone(data.tags);

export const fallbackGetTagById = async (id: number): Promise<Tag> => {
  const tag = data.tags.find((item) => item.id === id);
  return clone(tag ?? data.tags[0]);
};

export const fallbackGetTagBySlug = async (slug: string): Promise<Tag> => {
  const tag = data.tags.find((item) => item.slug === slug);
  return clone(tag ?? data.tags[0]);
};

export const fallbackGetAllPages = async (): Promise<Page[]> =>
  clone([...data.pages].sort((a, b) => a.menu_order - b.menu_order || a.id - b.id));

export const fallbackGetPageById = async (id: number): Promise<Page> => {
  const page = data.pages.find((item) => item.id === id);
  return clone(page ?? data.pages[0]);
};

export const fallbackGetPageBySlug = async (slug: string): Promise<Page> => {
  const page = data.pages.find((item) => item.slug === slug);
  return clone(page ?? data.pages[0]);
};

export const fallbackGetAllAuthors = async (): Promise<Author[]> =>
  clone(data.authors);

export const fallbackGetAuthorById = async (id: number): Promise<Author> => {
  const author = data.authors.find((item) => item.id === id);
  return clone(author ?? data.authors[0]);
};

export const fallbackGetAuthorBySlug = async (
  slug: string
): Promise<Author> => {
  const author = data.authors.find((item) => item.slug === slug);
  return clone(author ?? data.authors[0]);
};

export const fallbackGetPostsByAuthor = async (
  authorId: number
): Promise<Post[]> => {
  const results = data.posts.filter((post) => post.author === authorId);
  return clone(sortByDateDesc(results));
};

export const fallbackGetPostsByAuthorSlug = async (
  authorSlug: string
): Promise<Post[]> => {
  const author = data.authors.find((item) => item.slug === authorSlug);

  if (!author) {
    return clone([]);
  }

  return fallbackGetPostsByAuthor(author.id);
};

export const fallbackGetPostsByCategorySlug = async (
  categorySlug: string
): Promise<Post[]> => {
  const category = data.categories.find((item) => item.slug === categorySlug);

  if (!category) {
    return clone([]);
  }

  return fallbackGetPostsByCategory(category.id);
};

export const fallbackGetPostsByTagSlug = async (
  tagSlug: string
): Promise<Post[]> => {
  const tag = data.tags.find((item) => item.slug === tagSlug);

  if (!tag) {
    return clone([]);
  }

  return fallbackGetPostsByTag(tag.id);
};

export const fallbackGetFeaturedMediaById = async (
  id: number
): Promise<FeaturedMedia> => {
  const item = data.media.find((mediaItem) => mediaItem.id === id);
  return clone(item ?? data.media[0]);
};

export const fallbackSearchCategories = async (
  query: string
): Promise<Category[]> => {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return clone(data.categories);
  }

  return clone(
    data.categories.filter(
      (category) =>
        category.name.toLowerCase().includes(normalized) ||
        category.description.toLowerCase().includes(normalized)
    )
  );
};

export const fallbackSearchTags = async (query: string): Promise<Tag[]> => {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return clone(data.tags);
  }

  return clone(
    data.tags.filter(
      (tag) =>
        tag.name.toLowerCase().includes(normalized) ||
        tag.description.toLowerCase().includes(normalized)
    )
  );
};

export const fallbackSearchAuthors = async (
  query: string
): Promise<Author[]> => {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return clone(data.authors);
  }

  return clone(
    data.authors.filter(
      (author) =>
        author.name.toLowerCase().includes(normalized) ||
        author.description.toLowerCase().includes(normalized)
    )
  );
};
