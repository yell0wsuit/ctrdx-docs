---
title: Class TargetAnimationBackendFactory
description: Factory for target animation backends used by the active Om Nom skin.
---

# Class TargetAnimationBackendFactory

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `TargetAnimationBackendFactory.cs`

Factory for target animation backends used by the active Om Nom skin.

## Declaration

```csharp
internal static class TargetAnimationBackendFactory
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [TargetAnimationBackendFactory](TargetAnimationBackendFactory.md)

## Methods

### CreateOriginal(bool isNightLevel, bool isXmas) {#m-cuttheropedx-gamemain-targetanimationbackendfactory-createoriginal-system-boolean-system-boolean}

```csharp
public static ITargetAnimationBackend CreateOriginal(bool isNightLevel, bool isXmas)
```

Creates the target animation backend for the currently selected Om Nom skin.

Parameters:

- `isNightLevel`: Whether the current level uses night-mode animation variants.
- `isXmas`: Whether the current level uses Christmas animation variants.

Returns: The original backend for the classic skin, or a Flash XML backend for XML-backed skins.

