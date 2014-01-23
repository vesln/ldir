#
# Paths
#

TEST_EXEC = node_modules/.bin/hydro

#
# All
#

all: clean install test

#
# Install
#

install: node_modules

#
# Run the Node.js tests
#

test: node_modules
	@$(TEST_EXEC)

#
# CI
#

test-ci: test

#
# Clean node_modules
#

clean:
	@rm -rf node_modules

#
# Install Node.js modules
#

node_modules: package.json
	@npm install
	@touch $@

#
# Instructions
#

.PHONY: all test
