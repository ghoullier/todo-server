import { beforeEach, describe, it, mock } from "node:test";
import type { Request, Response } from "express";
import { findAll } from "./todo.ts";
import assert from "node:assert";

function setup(): [Request, Response] {
	const request = {
		params: {},
		query: {},
		body: {},
	} as unknown as Request;
	const response = {
		status: mock.fn<() => Response>(() => response),
		json: mock.fn<() => Response>(() => response),
		end: mock.fn<() => Response>(() => response),
	} as unknown as Response;
	return [request, response];
}

describe("Todo", () => {
	it("Can make sure findAll is returning data", (t) => {
		// Arrange
    const [request, response] = setup();
		// Act
		findAll(request, response);
		// Assert
    assert.strictEqual(response.status.mock.callCount(), 1, "response.status should have been called once");
    assert.strictEqual(response.status.mock.calls[0].arguments[0], 200, "response.status should have been called with 200");
    assert.strictEqual(response.json.mock.calls[0].arguments[0].length, 3, "response.json should have been called with an array of 3 todos" );
	});
});
