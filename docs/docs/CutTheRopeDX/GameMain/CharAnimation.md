---
title: Class CharAnimation
description: Om Nom character animation that handles timeline-switch actions emitted by the animation graph.
---

# Class CharAnimation

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CharAnimation.cs`

Om Nom character animation that handles timeline-switch actions emitted by the animation graph.

## Declaration

```csharp
internal sealed class CharAnimation : Animation
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [CharAnimation](CharAnimation.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### CharAnimation_create(CTRTexture2D t) {#m-cuttheropedx-gamemain-charanimation-charanimation-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static CharAnimation CharAnimation_create(CTRTexture2D t)
```

Creates an Om Nom character animation from a texture.

Parameters:

- `t`: Texture used by the character animation.

Returns: The initialized character animation.

### CharAnimation_createWithResID(string resourceName) {#m-cuttheropedx-gamemain-charanimation-charanimation-createwithresid-system-string}

```csharp
public static CharAnimation CharAnimation_createWithResID(string resourceName)
```

Creates an Om Nom character animation from a texture resource name.

Parameters:

- `resourceName`: Texture resource name to load.

Returns: The initialized character animation.

### HandleAction(ActionData a) {#m-cuttheropedx-gamemain-charanimation-handleaction-cuttheropedx-framework-visual-actiondata}

```csharp
public override bool HandleAction(ActionData a)
```

Handles a timeline action. Returns `true` if the action was recognized.

Parameters:

- `a`: Action data to process.

Returns: `true` if the action was recognized and handled.

