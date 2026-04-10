---
title: Homepage
sidebar_position: 1
slug: /
---

# _Cut the Rope: DX_ codebase documentation

Welcome to the documentation for the _Cut the Rope: DX_ codebase. This site covers the project's architecture, key systems, and API reference to help you navigate and understand the source code.

## Architecture overview

The codebase is organized into several top-level namespaces under `CutTheRopeDX`:

| Module                                           | Description                                                                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| **[Commons](CutTheRopeDX/Commons/index.md)**     | Shared application scaffolding — `CTRApp`, save management, popups, remote data, and scroll UI components.                          |
| **[Desktop](CutTheRopeDX/Desktop/index.md)**     | Desktop-specific platform layer — rendering, screen management, input cursors, and OpenGL helpers.                                  |
| **[Framework](CutTheRopeDX/Framework/index.md)** | Core engine modules: physics, visual/UI elements, media playback, resource management, math helpers, and the application lifecycle. |
| **[GameMain](CutTheRopeDX/GameMain/index.md)**   | Game-specific logic — levels, gameplay mechanics, and scene management.                                                             |
| **[Helpers](CutTheRopeDX/Helpers/index.md)**     | Utility and helper classes used across the project.                                                                                 |

## Key subsystems (Framework)

The **Framework** namespace contains most of the engine infrastructure:

- **Core** — Application lifecycle (`Application`, `RootController`, `ViewController`), resource loading (`ResourceMgr`), texture atlas parsing, and preferences.
- **Physics** — Constraint-based physics simulation (`ConstraintSystem`, `MaterialPoint`, `Constraint`).
- **Visual** — UI and rendering primitives: sprites, buttons, animations, draw helpers, textures, and the scene graph (`BaseElement`, `View`).
- **Media** — Sound (`SoundMgr`), video playback with multiple backends (FFmpeg, MonoGame), and movie management.
- **Helpers** — Camera, math utilities, delayed dispatch, movers, and game objects.
- **Platform** — Platform abstraction layer (`GLCanvas`).

## Code reference

The full auto-generated code reference is available in the sidebar under each namespace. Start from the [CutTheRopeDX](CutTheRopeDX/index.md) root to browse all types and members.
