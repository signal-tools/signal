import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";

const [tarballArgument] = process.argv.slice(2);

if (tarballArgument === undefined) {
	throw new Error("Expected a package tarball path");
}

const tarball = resolve(tarballArgument);
const metadata = JSON.parse(execFileSync("tar", ["-xOf", tarball, "package/package.json"], { encoding: "utf8" }));
const manifest = {
	package: metadata.name,
	version: metadata.version,
	tarball: basename(tarball),
	sourceSha: process.env.GITHUB_SHA ?? null,
};

writeFileSync(join(dirname(tarball), "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
