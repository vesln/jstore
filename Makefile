#
# Paths
#

COV = node_modules/.bin/istanbul
TEST_EXEC = node_modules/.bin/hydro
COV_TEST_EXEC = node_modules/.bin/_hydro

#
# Install & test
#

all: install test

#
# Install node modules
#

install: node_modules

#
# Install Node.js modules
#

node_modules: package.json
	@npm install

#
# Run the tests
#

test: node_modules
	@$(TEST_EXEC)

#
# Test coverage
#

test-cov: node_modules
	@$(COV) cover $(COV_TEST_EXEC)

#
# Clean all
#

clean: clean-node clean-cov

#
# Clean Node.js modules
#

clean-node:
	@rm -rf node_modules

#
# Clean test coverage
#

clean-cov:
	@rm -rf coverage

#
# CI
#

ci:
	@./node_modules/.bin/istanbul cover ./node_modules/.bin/_hydro --report lcovonly -- \
		&& cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

#
# Instructions
#

.PHONY: all test
