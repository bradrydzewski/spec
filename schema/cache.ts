/**
 * Cache defines pipeline caching behavior.
 */
export interface Cache {
    /**
     * Disabled disables cache intelligence.
     */
    disabled?: boolean;
    /**
     * Paths provides one or more paths to cache.
     */
    path?: string | string[];
    /**
     * Key provides a caching key.
     */
    key?: string;
    /**
     * Policy configures the pull and push behavior of the cache.
     * By default, the stage pulls the cache when the stage starts
     * and pushes changes to the cache when the stage ends.
     */
    policy?: "pull" | "pull-push" | "push"
}
