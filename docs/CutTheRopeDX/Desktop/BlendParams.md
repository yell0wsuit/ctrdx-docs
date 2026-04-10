---
title: Class BlendParams
description: Encapsulates the desktop renderer's current blend configuration and cached blend states.
---

# Class BlendParams

Namespace: `CutTheRopeDX.Desktop`

Assembly: `CutTheRope-DX.dll`

Source: `BlendParams.cs`

Encapsulates the desktop renderer's current blend configuration and cached blend states.

## Declaration

```csharp
internal sealed class BlendParams
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [BlendParams](BlendParams.md)

## Constructors

### BlendParams() {#m-cuttheropedx-desktop-blendparams-ctor}

```csharp
public BlendParams()
```

Initializes a blend configuration that uses the default opaque blend state.

### BlendParams(BlendingFactor s, BlendingFactor d) {#m-cuttheropedx-desktop-blendparams-ctor-cuttheropedx-desktop-blendingfactor-cuttheropedx-desktop-blendingfactor}

```csharp
public BlendParams(BlendingFactor s, BlendingFactor d)
```

Initializes a blend configuration with explicit source and destination factors.

Parameters:

- `s`: The source blend factor.
- `d`: The destination blend factor.

## Fields

### defaultBlending {#f-cuttheropedx-desktop-blendparams-defaultblending}

```csharp
private readonly bool defaultBlending
```

Indicates whether this instance represents the renderer's default blend behavior.

### dfactor {#f-cuttheropedx-desktop-blendparams-dfactor}

```csharp
private readonly BlendingFactor dfactor
```

The destination blend factor for custom blending.

### enabled {#f-cuttheropedx-desktop-blendparams-enabled}

```csharp
private bool enabled
```

Indicates whether the custom blend parameters are enabled.

### lastBlend {#f-cuttheropedx-desktop-blendparams-lastblend}

```csharp
private BlendParams.BlendType lastBlend
```

Tracks the last applied blend mode to avoid redundant state changes.

### sfactor {#f-cuttheropedx-desktop-blendparams-sfactor}

```csharp
private readonly BlendingFactor sfactor
```

The source blend factor for custom blending.

### states {#f-cuttheropedx-desktop-blendparams-states}

```csharp
private static readonly BlendState[] states
```

Caches reusable MonoGame blend states keyed by [BlendType](BlendParams.md).

## Methods

### Apply() {#m-cuttheropedx-desktop-blendparams-apply}

```csharp
public void Apply()
```

Applies the current blend configuration to the graphics device.

### ApplyDefault() {#m-cuttheropedx-desktop-blendparams-applydefault}

```csharp
public static void ApplyDefault()
```

Applies the default opaque blend state to the graphics device.

### Disable() {#m-cuttheropedx-desktop-blendparams-disable}

```csharp
public void Disable()
```

Disables this blend configuration and restores default blending when applied.

### Enable() {#m-cuttheropedx-desktop-blendparams-enable}

```csharp
public void Enable()
```

Enables this blend configuration for subsequent draw calls.

### ToString() {#m-cuttheropedx-desktop-blendparams-tostring}

```csharp
public override string ToString()
```

Returns a debug representation of the current blend configuration.

Returns: A string describing the blend configuration.

