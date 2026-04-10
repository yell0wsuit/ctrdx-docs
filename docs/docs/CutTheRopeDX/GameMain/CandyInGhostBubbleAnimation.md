---
title: Class CandyInGhostBubbleAnimation
description: Animation for candy inside a ghost-transformed bubble, including supporting ghost cloud elements.
---

# Class CandyInGhostBubbleAnimation

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CandyInGhostBubbleAnimation.cs`

Animation for candy inside a ghost-transformed bubble, including supporting ghost cloud elements.

## Declaration

```csharp
internal sealed class CandyInGhostBubbleAnimation : Animation
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [CandyInGhostBubbleAnimation](CandyInGhostBubbleAnimation.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### backCloud {#f-cuttheropedx-gamemain-candyinghostbubbleanimation-backcloud}

```csharp
public Image backCloud
```

Primary background ghost cloud element.

### backCloud2 {#f-cuttheropedx-gamemain-candyinghostbubbleanimation-backcloud2}

```csharp
public Image backCloud2
```

Secondary background ghost cloud element.

### backCloud3 {#f-cuttheropedx-gamemain-candyinghostbubbleanimation-backcloud3}

```csharp
public Image backCloud3
```

Tertiary background ghost cloud element.

## Methods

### AddSupportingCloudsTimelines() {#m-cuttheropedx-gamemain-candyinghostbubbleanimation-addsupportingcloudstimelines}

```csharp
public void AddSupportingCloudsTimelines()
```

Adds looping background cloud animations that support the ghost bubble visual.

### CIGBAnimation_create(CTRTexture2D texture) {#m-cuttheropedx-gamemain-candyinghostbubbleanimation-cigbanimation-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static CandyInGhostBubbleAnimation CIGBAnimation_create(CTRTexture2D texture)
```

Creates a candy-in-ghost-bubble animation from a texture.

Parameters:

- `texture`: Texture used by the animation.

Returns: The initialized candy-in-ghost-bubble animation.

### CIGBAnimation_createWithResID(string resourceName) {#m-cuttheropedx-gamemain-candyinghostbubbleanimation-cigbanimation-createwithresid-system-string}

```csharp
public static CandyInGhostBubbleAnimation CIGBAnimation_createWithResID(string resourceName)
```

Creates a candy-in-ghost-bubble animation from a texture resource name.

Parameters:

- `resourceName`: Texture resource name to load.

Returns: The initialized candy-in-ghost-bubble animation.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-candyinghostbubbleanimation-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

