import { bar } from "./shared";

it("should compile fine", () => {
	expect(bar).toBe("bar");
	const hash = __STATS__.assetsByChunkName.async[0];
	expect(hash).toBe(STATE.hash);
});

it("should load the async chunk", () => {
	return import(/* webpackChunkName: "async" */ "./other-chunk");
});
