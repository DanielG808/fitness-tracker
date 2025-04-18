import { cn } from "./cn"

describe("cn utility function", () => {
    it("should merge classes together", () => {
        const result = cn("bg-red-500", "text-white")
        expect(result).toBe("bg-red-500 text-white")
    })
})