/**
 * Platform defines the target execution environment.
 * @x-go-file platform.go
 */
export interface Platform {
    /**
     * Arch defines the target cpu architecture.
     */
    os?: "linux" | "windows" | "macos" | "darwin" | string;

    /**
     * OS defines the target operating system.
     */
    arch?: "amd64" | "arm64" | string;

    /**
     * Variant defines the target cpu architecture variant.
     * Not currently used.
     */
    variant?: string;

    /**
     * Version defines the target operating system version.
     * Not currently used.
     */
    version?: string;

    /**
     * Features defines the target platform features.
     * Not currently used.
     */
    features?: string[];
}

// properties:
//   arch:
//     enum:
//     - amd64
//     - arm
//     - arm64

//     # unsupported
//     - "386"
//     - ppc
//     - ppc64
//     - ppc64le
//     - riscv
//     - riscv64
//     - s390
//     - s390x
//     - sparc
//     - sparc64
//   os:
//     enum:
//     - linux
//     - windows
//     - macos

//     # unsupported
//     - darwin
//     - dragonfly
//     - freebsd
//     - netbsd
//     - openbsd
//     - plan9
//     - solaris
