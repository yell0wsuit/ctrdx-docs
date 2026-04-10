---
title: Class GhostBubble
description: Ghost-transformed bubble variant with supporting cloud visuals and custom draw behavior.
---

# Class GhostBubble

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GhostBubble.cs`

Ghost-transformed bubble variant with supporting cloud visuals and custom draw behavior.

## Declaration

```csharp
internal sealed class GhostBubble : Bubble
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [Bubble](Bubble.md)
- [GhostBubble](GhostBubble.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)

## Fields

### backCloud {#f-cuttheropedx-gamemain-ghostbubble-backcloud}

```csharp
public Image backCloud
```

Primary background ghost cloud element.

### backCloud2 {#f-cuttheropedx-gamemain-ghostbubble-backcloud2}

```csharp
public Image backCloud2
```

Secondary background ghost cloud element.

### backCloud3 {#f-cuttheropedx-gamemain-ghostbubble-backcloud3}

```csharp
public Image backCloud3
```

Tertiary background ghost cloud element.

## Methods

### AddSupportingCloudsTimelines() {#m-cuttheropedx-gamemain-ghostbubble-addsupportingcloudstimelines}

```csharp
public void AddSupportingCloudsTimelines()
```

Adds looping ghost cloud timelines around the bubble.

### Create(CTRTexture2D texture) {#m-cuttheropedx-gamemain-ghostbubble-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static GhostBubble Create(CTRTexture2D texture)
```

Creates a ghost bubble from a texture.

Parameters:

- `texture`: Texture used by the bubble.

Returns: The initialized ghost bubble.

### CreateWithResIDQuad(string resourceName, int quad) {#m-cuttheropedx-gamemain-ghostbubble-createwithresidquad-system-string-system-int32}

```csharp
public static GhostBubble CreateWithResIDQuad(string resourceName, int quad)
```

Creates a ghost bubble from a texture resource and applies a draw quad.

Parameters:

- `resourceName`: Texture resource name.
- `quad`: Quad index to draw.

Returns: The initialized ghost bubble.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-ghostbubble-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-ghostbubble-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

