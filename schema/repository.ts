/**
 * Repository defines a remote git repository.
 * @x-go-file repository.go
 */
export interface Repository {

    /**
     * Name provides the repository name.
     */
    name?: string;

    /**
     * Connector provides the repository connector.
     */
    connector?: string;
}
