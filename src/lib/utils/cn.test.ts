import { cn } from "./cn"

describe("cn utility function", () => {
    it("should merge classes together", () => {
        const result = cn("bg-red-500", "text-white")
        expect(result).toBe("bg-red-500 text-white")
    })

    it("should handle conflicting classes", () => {
        const result = cn("bg-white", "bg-red", "sm:text-sm", "sm:text-lg")
        expect(result).toBe("bg-red sm:text-lg")
    })

    it("should handle conditional class objects", () => {
        const result = cn({ hidden: true, block: false })
        expect(result).toBe("hidden")
    })

    it("should handle multiple data types", () => {
        const result = cn("text-lg", { "text-red-500": true }, ["bg-white", "font-bold"], null, undefined)
        expect(result).toBe("text-lg text-red-500 bg-white font-bold")
    })
})