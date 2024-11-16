import { ErrorRepository } from "../errors";

test("Testing valid error code", () => {
    const errors = new ErrorRepository()

    expect(errors.translate(200)).toEqual("User not found")
})

test("Testing not valid error code", () => {
    const errors = new ErrorRepository()

    expect(errors.translate(500)).toEqual("Unknown error")
})