# Variables
NODE_MODULES_BIN = ./node_modules/.bin
SRC_DIR = ./src
DIST_DIR = ./dist
TEST_DIR = ./tests
SERVER_FILE = ./dist/src/app/shop/start.js

# Install Node.js dependencies
install:
	npm install

# Run TypeScript compilation
build:
	$(NODE_MODULES_BIN)/tsc --project $(SRC_DIR)

# Run tests
test:
	$(NODE_MODULES_BIN)/jest $(TEST_DIR)

# Start the server
start:
	node $(SERVER_FILE)

# Default target
.DEFAULT_GOAL := start