SHELL := /bin/bash
BASEDIR := $(shell echo $${PWD})

# =============================================================================
# BUILD MANAGEMENT
# Variables declared here are used by this Makefile *and* are exported to
# override default values used by supporting scripts in the hack directory
# =============================================================================
export UG := $(shell echo "$$(id -u):$$(id -g)")

export VERSION := $(shell cat VERSION)
export BUILD := $(shell git rev-parse HEAD | cut -c1-8)
export LDFLAGS := "-X=main.Version=$(VERSION) -X=main.Build=$(BUILD)"

export OWNER := appcelerator
export REPO := github.com/$(OWNER)/portal

# =============================================================================
# DEFAULT TARGET
# =============================================================================
all: build

# =============================================================================
# CLEAN
# =============================================================================
.PHONY: clean cleanall
# clean doesn't remove the vendor directory since installing is time-intensive;
# you can do this explicitly: `ampmake clean-deps clean`

clean: clean-portal
cleanall: clean

# =============================================================================
# BUILD
# =============================================================================
# When running in the amptools container, set DOCKER_CMD="sudo docker"
DOCKER_CMD ?= "docker"

build-base: build-portal
build: build-base

# =============================================================================
# BUILD PORTAL (`amp-portal`)
# Build portal server binary
# then build `appcelerator/portal` image
# =============================================================================
PORTAL := portal
PORTALDIR=.
PORTALSERVERDIR=$(PORTALDIR)/server
PORTALTAG := localtest
PORTALIMG := appcelerator/$(PORTAL):$(PORTALTAG)

build-portal: $(PORTALSERVERTARGET)
	@echo "build $(PORTALIMG)"
	@$(DOCKER_CMD) build -t $(PORTALIMG) $(PORTALDIR)/server || (rm -f $(PORTALSERVERTARGET); exit 1)

rebuild-portal: build-portal
