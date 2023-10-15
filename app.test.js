const http = require("http");
const { describe, it, before, after } = require("node:test");
const assert = require("node:assert");

const app = require("./app");
const port = 3000;
const url = `http://localhost:${port}`;

describe("Test the LPDG server", () => {
	let server;
	before(
		() =>
			new Promise((resolve, reject) => {
				server = http.createServer(app);
				server.listen(port);
				server.on("error", (err) => {
					console.error(err);
					reject();
				});
				server.on("listening", () => {
					console.info("Server started");
					resolve();
				});
			})
	);

	it("Get /health", async () => {
		const res = await fetch(`${url}/health`);
		const data = await res.json();
		assert.equal(data.message, "OK");
	});

	it("Post /parse/link", async () => {
		const res = await fetch(`${url}/parse/link`, {
			method: "POST",
			body: JSON.stringify({ url: "https://www.google.com" }),
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();
		assert.ok("img" in data);
	});

	it("should Rate limit the request at 100", async () => {
		const sampleRequestsCount = 120;
		for (let i = 1; i <= sampleRequestsCount; i++) {
			try {
				const res = await fetch(`${url}/health`);
				const data = await res.json();
			} catch (error) {
				console.log("Rate limit reached at ", i + 1);
				assert.ok(i <= 101); // current limit is 100 requests per 15 minutes
				break;
			}
		}
	});

	after(() => {
		server.close();
	});
});
