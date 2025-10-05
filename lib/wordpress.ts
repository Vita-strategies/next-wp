import querystring from "query-string";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";

import {
  Post,
  Category,
  Tag,
  Page,
  Author,
  FeaturedMedia,
} from "./wordpress.d";
import {
  fallbackGetAllPosts,
  fallbackGetPostById,
  fallbackGetPostBySlug,
  fallbackGetAllCategories,
  fallbackGetCategoryById,
  fallbackGetCategoryBySlug,
  fallbackGetPostsByCategory,
  fallbackGetPostsByTag,
  fallbackGetTagsByPost,
  fallbackGetAllTags,
  fallbackGetTagById,
  fallbackGetTagBySlug,
  fallbackGetAllPages,
  fallbackGetPageById,
  fallbackGetPageBySlug,
  fallbackGetAllAuthors,
  fallbackGetAuthorById,
  fallbackGetAuthorBySlug,
  fallbackGetPostsByAuthor,
  fallbackGetPostsByAuthorSlug,
  fallbackGetPostsByCategorySlug,
  fallbackGetPostsByTagSlug,
  fallbackGetFeaturedMediaById,
  fallbackSearchCategories,
  fallbackSearchTags,
  fallbackSearchAuthors,
} from "./wordpress-fallback";

const baseUrl = process.env.WORDPRESS_URL;
const isFallbackEnabled = !baseUrl;
let hasLoggedMissingConfig = false;

class WordPressAPIError extends Error {
  constructor(message: string, public status: number, public endpoint: string) {
    super(message);
    this.name = "WordPressAPIError";
  }
}

const notifyMissingConfig = () => {
  if (isFallbackEnabled && !hasLoggedMissingConfig) {
    console.warn(
      "WORDPRESS_URL is not configured. Using built-in fallback WordPress dataset."
    );
    hasLoggedMissingConfig = true;
  }
};

const withFallback = async <T>(
  fallbackFn: () => Promise<T>,
  action: () => Promise<T>
): Promise<T> => {
  if (isFallbackEnabled) {
    notifyMissingConfig();
    return fallbackFn();
  }

  return action();
};

interface FetchOptions {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
  headers?: HeadersInit;
}

const getUrl = (path: string, query?: Record<string, any>) => {
  if (!baseUrl) {
    throw new WordPressAPIError(
      "WORDPRESS_URL environment variable is not defined",
      500,
      path
    );
  }

  const params = query ? querystring.stringify(query) : null;
  return `${baseUrl}${path}${params ? `?${params}` : ""}`;
};

const defaultFetchOptions: FetchOptions = {
  next: {
    tags: ["wordpress"],
    revalidate: 3600,
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

async function wordpressFetch<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "Next.js WordPress Client";

  try {
    const response = await fetch(url, {
      ...defaultFetchOptions,
      ...options,
      headers: {
        ...defaultFetchOptions.headers,
        "User-Agent": userAgent,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new WordPressAPIError(
        `WordPress API request failed: ${response.statusText}`,
        response.status,
        url
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof WordPressAPIError) {
      throw error;
    }

    const message =
      error instanceof Error ? error.message : "Unknown network error";

    throw new WordPressAPIError(
      `WordPress API request failed: ${message}`,
      503,
      url
    );
  }
}

export async function getAllPosts(filterParams?: {
  author?: string;
  tag?: string;
  category?: string;
  search?: string;
}): Promise<Post[]> {
  return withFallback(
    () => fallbackGetAllPosts(filterParams),
    async () => {
      const query: Record<string, any> = {
        _embed: true,
        per_page: 100,
      };

      if (filterParams?.search) {
        query.search = filterParams.search;

        if (filterParams?.author) {
          query.author = filterParams.author;
        }
        if (filterParams?.tag) {
          query.tags = filterParams.tag;
        }
        if (filterParams?.category) {
          query.categories = filterParams.category;
        }
      } else {
        if (filterParams?.author) {
          query.author = filterParams.author;
        }
        if (filterParams?.tag) {
          query.tags = filterParams.tag;
        }
        if (filterParams?.category) {
          query.categories = filterParams.category;
        }
      }

      const url = getUrl("/wp-json/wp/v2/posts", query);
      return wordpressFetch<Post[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", "posts"],
        },
      });
    }
  );
}

export async function getPostById(id: number): Promise<Post> {
  return withFallback(
    () => fallbackGetPostById(id),
    async () => {
      const url = getUrl(`/wp-json/wp/v2/posts/${id}`);
      return wordpressFetch<Post>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `post-${id}`],
        },
      });
    }
  );
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return withFallback(
    () => fallbackGetPostBySlug(slug),
    async () => {
      const url = getUrl("/wp-json/wp/v2/posts", { slug });
      const response = await wordpressFetch<Post[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `post-${slug}`],
        },
      });

      return response[0];
    }
  );
}

export async function getAllCategories(): Promise<Category[]> {
  return withFallback(
    () => fallbackGetAllCategories(),
    async () => {
      const url = getUrl("/wp-json/wp/v2/categories");
      return wordpressFetch<Category[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", "categories"],
        },
      });
    }
  );
}

export async function getCategoryById(id: number): Promise<Category> {
  return withFallback(
    () => fallbackGetCategoryById(id),
    async () => {
      const url = getUrl(`/wp-json/wp/v2/categories/${id}`);
      return wordpressFetch<Category>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `category-${id}`],
        },
      });
    }
  );
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  return withFallback(
    () => fallbackGetCategoryBySlug(slug),
    async () => {
      const url = getUrl("/wp-json/wp/v2/categories", { slug });
      const response = await wordpressFetch<Category[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `category-${slug}`],
        },
      });

      return response[0];
    }
  );
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  return withFallback(
    () => fallbackGetPostsByCategory(categoryId),
    async () => {
      const url = getUrl("/wp-json/wp/v2/posts", { categories: categoryId });
      return wordpressFetch<Post[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `category-${categoryId}`],
        },
      });
    }
  );
}

export async function getPostsByTag(tagId: number): Promise<Post[]> {
  return withFallback(
    () => fallbackGetPostsByTag(tagId),
    async () => {
      const url = getUrl("/wp-json/wp/v2/posts", { tags: tagId });
      return wordpressFetch<Post[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `tag-${tagId}`],
        },
      });
    }
  );
}

export async function getTagsByPost(postId: number): Promise<Tag[]> {
  return withFallback(
    () => fallbackGetTagsByPost(postId),
    async () => {
      const url = getUrl("/wp-json/wp/v2/tags", { post: postId });
      return wordpressFetch<Tag[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `post-${postId}`],
        },
      });
    }
  );
}

export async function getAllTags(): Promise<Tag[]> {
  return withFallback(
    () => fallbackGetAllTags(),
    async () => {
      const url = getUrl("/wp-json/wp/v2/tags");
      return wordpressFetch<Tag[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", "tags"],
        },
      });
    }
  );
}

export async function getTagById(id: number): Promise<Tag> {
  return withFallback(
    () => fallbackGetTagById(id),
    async () => {
      const url = getUrl(`/wp-json/wp/v2/tags/${id}`);
      return wordpressFetch<Tag>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `tag-${id}`],
        },
      });
    }
  );
}

export async function getTagBySlug(slug: string): Promise<Tag> {
  return withFallback(
    () => fallbackGetTagBySlug(slug),
    async () => {
      const url = getUrl("/wp-json/wp/v2/tags", { slug });
      const response = await wordpressFetch<Tag[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `tag-${slug}`],
        },
      });

      return response[0];
    }
  );
}

export async function getAllPages(): Promise<Page[]> {
  return withFallback(
    () => fallbackGetAllPages(),
    async () => {
      const url = getUrl("/wp-json/wp/v2/pages");
      return wordpressFetch<Page[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", "pages"],
        },
      });
    }
  );
}

export async function getPageById(id: number): Promise<Page> {
  return withFallback(
    () => fallbackGetPageById(id),
    async () => {
      const url = getUrl(`/wp-json/wp/v2/pages/${id}`);
      return wordpressFetch<Page>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `page-${id}`],
        },
      });
    }
  );
}

export async function getPageBySlug(slug: string): Promise<Page> {
  return withFallback(
    () => fallbackGetPageBySlug(slug),
    async () => {
      const url = getUrl("/wp-json/wp/v2/pages", { slug });
      const response = await wordpressFetch<Page[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `page-${slug}`],
        },
      });

      return response[0];
    }
  );
}

export async function getAllAuthors(): Promise<Author[]> {
  return withFallback(
    () => fallbackGetAllAuthors(),
    async () => {
      const url = getUrl("/wp-json/wp/v2/users");
      return wordpressFetch<Author[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", "authors"],
        },
      });
    }
  );
}

export async function getAuthorById(id: number): Promise<Author> {
  return withFallback(
    () => fallbackGetAuthorById(id),
    async () => {
      const url = getUrl(`/wp-json/wp/v2/users/${id}`);
      return wordpressFetch<Author>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `author-${id}`],
        },
      });
    }
  );
}

export async function getAuthorBySlug(slug: string): Promise<Author> {
  return withFallback(
    () => fallbackGetAuthorBySlug(slug),
    async () => {
      const url = getUrl("/wp-json/wp/v2/users", { slug });
      const response = await wordpressFetch<Author[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `author-${slug}`],
        },
      });

      return response[0];
    }
  );
}

export async function getPostsByAuthor(authorId: number): Promise<Post[]> {
  return withFallback(
    () => fallbackGetPostsByAuthor(authorId),
    async () => {
      const url = getUrl("/wp-json/wp/v2/posts", { author: authorId });
      return wordpressFetch<Post[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `author-${authorId}`],
        },
      });
    }
  );
}

export async function getPostsByAuthorSlug(
  authorSlug: string
): Promise<Post[]> {
  return withFallback(
    () => fallbackGetPostsByAuthorSlug(authorSlug),
    async () => {
      const author = await getAuthorBySlug(authorSlug);
      const url = getUrl("/wp-json/wp/v2/posts", { author: author.id });
      return wordpressFetch<Post[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `author-${authorSlug}`],
        },
      });
    }
  );
}

export async function getPostsByCategorySlug(
  categorySlug: string
): Promise<Post[]> {
  return withFallback(
    () => fallbackGetPostsByCategorySlug(categorySlug),
    async () => {
      const category = await getCategoryBySlug(categorySlug);
      const url = getUrl("/wp-json/wp/v2/posts", { categories: category.id });
      return wordpressFetch<Post[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `category-${categorySlug}`],
        },
      });
    }
  );
}

export async function getPostsByTagSlug(tagSlug: string): Promise<Post[]> {
  return withFallback(
    () => fallbackGetPostsByTagSlug(tagSlug),
    async () => {
      const tag = await getTagBySlug(tagSlug);
      const url = getUrl("/wp-json/wp/v2/posts", { tags: tag.id });
      return wordpressFetch<Post[]>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `tag-${tagSlug}`],
        },
      });
    }
  );
}

export async function getFeaturedMediaById(
  id: number
): Promise<FeaturedMedia> {
  return withFallback(
    () => fallbackGetFeaturedMediaById(id),
    async () => {
      const url = getUrl(`/wp-json/wp/v2/media/${id}`);
      return wordpressFetch<FeaturedMedia>(url, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", `media-${id}`],
        },
      });
    }
  );
}

export async function searchCategories(query: string): Promise<Category[]> {
  return withFallback(
    () => fallbackSearchCategories(query),
    async () => {
      const url = getUrl("/wp-json/wp/v2/categories", {
        search: query,
        per_page: 100,
      });
      return wordpressFetch<Category[]>(url);
    }
  );
}

export async function searchTags(query: string): Promise<Tag[]> {
  return withFallback(
    () => fallbackSearchTags(query),
    async () => {
      const url = getUrl("/wp-json/wp/v2/tags", {
        search: query,
        per_page: 100,
      });
      return wordpressFetch<Tag[]>(url);
    }
  );
}

export async function searchAuthors(query: string): Promise<Author[]> {
  return withFallback(
    () => fallbackSearchAuthors(query),
    async () => {
      const url = getUrl("/wp-json/wp/v2/users", {
        search: query,
        per_page: 100,
      });
      return wordpressFetch<Author[]>(url);
    }
  );
}

export async function revalidateWordPressData(
  tags: string[] = ["wordpress"]
) {
  if (isFallbackEnabled) {
    notifyMissingConfig();
    return;
  }

  try {
    tags.forEach((tag) => {
      revalidateTag(tag);
    });
  } catch (error) {
    console.error("Failed to revalidate WordPress data:", error);
    throw new Error("Failed to revalidate WordPress data");
  }
}

export { WordPressAPIError };
