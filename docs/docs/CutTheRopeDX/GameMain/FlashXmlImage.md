---
title: Class FlashXmlImage
description: Image subclass used by the Flash XML animation system. The source atlas is stored in PC-exported retina space, so quad sizes and offsets need to be normalized back into Flash XML point space before BaseElement anchor and rotation math runs.
---

# Class FlashXmlImage

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlImage.cs`

Image subclass used by the Flash XML animation system. The source atlas is stored in PC-exported retina space, so quad sizes and offsets need to be normalized back into Flash XML point space before BaseElement anchor and rotation math runs.

## Declaration

```csharp
internal sealed class FlashXmlImage : Image
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [FlashXmlImage](FlashXmlImage.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### CreateWithResID(string resourceName) {#m-cuttheropedx-gamemain-flashxmlimage-createwithresid-system-string}

```csharp
public static FlashXmlImage CreateWithResID(string resourceName)
```

Creates a Flash XML image for the specified texture resource.

Parameters:

- `resourceName`: Texture resource name to load.

Returns: The initialized Flash XML image.

### DoRestoreCutTransparency() {#m-cuttheropedx-gamemain-flashxmlimage-dorestorecuttransparency}

```csharp
public override void DoRestoreCutTransparency()
```

Restores the pre-cut size so that trimmed transparency is accounted for in positioning.

### DrawQuad(int n) {#m-cuttheropedx-gamemain-flashxmlimage-drawquad-system-int32}

```csharp
public override void DrawQuad(int n)
```

Draws the specified quad from the bound texture.

Parameters:

- `n`: Quad index to draw.

### NormalizeAtlasDimension(float rawValue) {#m-cuttheropedx-gamemain-flashxmlimage-normalizeatlasdimension-system-single}

```csharp
internal static int NormalizeAtlasDimension(float rawValue)
```

Converts an atlas-space dimension to an integer Flash point dimension.

Parameters:

- `rawValue`: Atlas-space dimension to normalize.

Returns: The normalized Flash point dimension.

### SetDrawQuad(int n) {#m-cuttheropedx-gamemain-flashxmlimage-setdrawquad-system-int32}

```csharp
public override void SetDrawQuad(int n)
```

Sets the quad index to draw and updates width/height accordingly.

Parameters:

- `n`: Quad index to draw.

