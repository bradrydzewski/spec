/**
 * Permissions defines the permission granted to the token
 * injected into the pipeline environment.
 */
export type Permissions = "write-all" | "read-all" | PermissionsLong;

export interface PermissionsLong {
    "actions"?:             Perm;
    "checks"?:              Perm;
    "contents"?:            Perm;
    "deployments"?:         Perm;
    "id-token"?:            Perm;
    "issues"?:              Perm
    "discussions"?:         Perm
    "packages"?:            Perm
    "pages"?:               Perm
    "pull-requests"?:       Perm
    "repository-projects"?: Perm
    "security-events"?:     Perm
    "statuses"?:            Perm
}

type Perm = "read" | "write" | "none";
