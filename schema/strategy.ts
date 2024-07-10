/**
 * @x-go-file strategy.go
 */
export interface Strategy {
    /**
     * For defines a for loop execution strategy.
     */
    for?: For;

    /**
     * While defines a while loop execution strategy.
     */
    while?: While;

    /**
     * Matrix defines a matrix execution strategy.
     */
    matrix?: Matrix;

    /**
     * MaxParallel defines the maximum number of parallel
     * stages or steps.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    "max-parallel"?: number;

    /**
     * FailFast defines the how to handle stage or step
     * failure. If true, all in-progress or pending
     * stages or steps are cancelled if any stage or step
     * in the matrix fails.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    "fail-fast"?: boolean;
}

/**
 * For defines a for loop execution strategy.
 * @x-go-file strategy_for.go
 */
export interface For {
    /**
     * Iterations defines maximum number of interations.
     */
    iterations?: number;
}

/**
 * While defines a while loop execution strategy.
 * @x-go-file strategy_while.go
 */
export interface While {
    /**
     * Iterations defines maximum number of interations.
     */
    iterations?: number;

    /**
     * Condition defines the while condition.
     */
    condition?: string;
}

/**
 * Matrix defines a matrix execution strategy.
 * @x-go-file strategy_matrix.go
 * @additionalProperties
 */
export interface Matrix {
    [key: string]: any;
    include?: Record<string, any>[];
    exclude?: Record<string, any>[];
}
