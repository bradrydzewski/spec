/**
  * Concurrency groups provide a way to limit concurrency
  * execution of pipelines that share the same concurrency key.
  */
export type Concurrency = string | ConcurrencyLong;

export interface ConcurrencyLong {
    /**
     * Group provides the key used to group pipelines or stages
     * together into a concurrency group.
     */
    group?: string;

    /**
     * Cancel any in-progress pipelines or stages that are
     * in-progress when a new pipeline or stage is received.
     */
    "cancel-in-progress"?: boolean;
}
