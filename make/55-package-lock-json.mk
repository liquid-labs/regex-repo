pnpm-lock.yaml: package.json
	pnpm install

package-lock.json: pnpm-lock.yaml
	npm install --package-lock-only

BUILD_TARGETS+=$(PACKAGE_LOCK_JSON)