---
title: Class CTRResourceMgr
description: Game-specific ResourceMgr subclass that handles localized resource variants, language-dependent quad lookups, and texture atlas configuration.
---

# Class CTRResourceMgr

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CTRResourceMgr.cs`

Game-specific [ResourceMgr](../Framework/Core/ResourceMgr.md) subclass that handles localized resource variants, language-dependent quad lookups, and texture atlas configuration.

## Declaration

```csharp
internal sealed class CTRResourceMgr : ResourceMgr
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [ResourceMgr](../Framework/Core/ResourceMgr.md)
- [CTRResourceMgr](CTRResourceMgr.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### GetAspectRatioScaleX() {#m-cuttheropedx-gamemain-ctrresourcemgr-getaspectratioscalex}

```csharp
protected override float GetAspectRatioScaleX()
```

Returns the aspect-ratio compensation scale applied to the X axis.

Returns: Aspect-ratio scale factor.

### GetHudButtonQuadOffset() {#m-cuttheropedx-gamemain-ctrresourcemgr-gethudbuttonquadoffset}

```csharp
public static int GetHudButtonQuadOffset()
```

Returns the texture quad offset for the localized HUD button sprite.

Returns: Quad offset for the current language's HUD button.

### GetResultStampQuad() {#m-cuttheropedx-gamemain-ctrresourcemgr-getresultstampquad}

```csharp
public static int GetResultStampQuad()
```

Returns the texture quad index for the localized result stamp overlay.

Returns: Quad index for the current language's result stamp.

### GetTextureAtlasConfig(string resourceName) {#m-cuttheropedx-gamemain-ctrresourcemgr-gettextureatlasconfig-system-string}

```csharp
protected override TextureAtlasConfig GetTextureAtlasConfig(string resourceName)
```

Returns atlas configuration for the specified texture resource, if any.

Parameters:

- `resourceName`: Logical texture resource name.

Returns: Atlas configuration, or `null` when the texture is not atlas-backed.

### HandleLocalizedResource(string resourceName) {#m-cuttheropedx-gamemain-ctrresourcemgr-handlelocalizedresource-system-string}

```csharp
public static string HandleLocalizedResource(string resourceName)
```

Adjusts a resource name for the active language when localized variants exist.

Parameters:

- `resourceName`: The string name of the resource to look up.

Returns: The localized resource name variant, or `resourceName` unchanged if no variant exists.

### LoadResourceByName(string resourceName, ResourceMgr.ResourceType resType) {#m-cuttheropedx-gamemain-ctrresourcemgr-loadresourcebyname-system-string-cuttheropedx-framework-core-resourcemgr-resourcetype}

```csharp
public static object LoadResourceByName(string resourceName, ResourceMgr.ResourceType resType)
```

Loads a resource by its string name. Auto-assigns an ID if needed.

Parameters:

- `resourceName`: The string name of the resource to load.
- `resType`: The type of resource to load (image, sound, etc.).

Returns: The loaded resource object.

### XNA_ResName(string resourceName) {#m-cuttheropedx-gamemain-ctrresourcemgr-xna-resname-system-string}

```csharp
public static string XNA_ResName(string resourceName)
```

Resolves a localized XNA resource name for a string resource name.

Parameters:

- `resourceName`: The string name of the resource.

Returns: The localized resource name.

