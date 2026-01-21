# Microservices Monorepo with Split Webpack Config

This repository is a **monorepo template** that demonstrates a basic microservices-oriented setup combined with a **custom split Webpack configuration**.

The main focus of this project is **Webpack architecture and DX**, not business logic.

---

## Overview

The repository contains multiple applications and services managed in a single workspace.  
Each app or service is isolated, while shared configuration and utilities are reused across the repo.

Key goals:
- scalable monorepo structure
- reusable Webpack configuration
- clear separation of responsibilities
- production-ready frontend build setup

---

## Features

- Custom **split Webpack configuration**
  - loaders, plugins, resolvers, dev server, optimization split by responsibility
- **TypeScript** support (TS / TSX)
- **HTML template** generation
- **Static assets** handling (images, fonts, svg)
- **CSS / SCSS** support
- **Path aliases**
- **Global environment variables** via Webpack defines
- **SPA routing** support with history API fallback
- **Content hashing** and caching for production builds
- Monorepo-ready structure (apps, services, shared packages)

## Notes

This repository is intended as:
- a **starter template**
- a **reference implementation** for custom Webpack setups
- a **learning playground** for monorepos and microservice-oriented architecture

Business logic and frameworks can be swapped without affecting the core setup.