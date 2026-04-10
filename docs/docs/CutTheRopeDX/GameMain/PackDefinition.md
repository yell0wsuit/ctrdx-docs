---
title: Class PackDefinition
description: Immutable pack description using string resource names.
---

# Class PackDefinition

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `PackConfig.cs`

Immutable pack description using string resource names.

## Declaration

```csharp
internal sealed class PackDefinition
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [PackDefinition](PackDefinition.md)

## Constructors

### PackDefinition(int unlockStars, int levelCount, int saveSlot, string packSpritesheet, int packQuadIndex, string[] boxBackgrounds, int boxBackgroundP2Y, int sittingPlatform, string[] boxCovers, RGBAColor boxHoleBgColor, string[] musicPack, string[] musicList, bool earthBg, Vector? earthBgPosition, string boxLabelText, string packName, RGBAColor? ghostGrabColor) {#m-cuttheropedx-gamemain-packdefinition-ctor-system-int32-system-int32-system-int32-system-string-system-int32-system-string-system-int32-system-int32-system-string-cuttheropedx-framework-rgbacolor-system-string-system-string-system-boolean-system-nullable-cuttheropedx-framework-core-vector-system-string-system-string-system-nullable-cuttheropedx-framework-rgbacolor}

```csharp
public PackDefinition(int unlockStars, int levelCount, int saveSlot, string packSpritesheet, int packQuadIndex, string[] boxBackgrounds, int boxBackgroundP2Y, int sittingPlatform, string[] boxCovers, RGBAColor boxHoleBgColor, string[] musicPack, string[] musicList, bool earthBg, Vector? earthBgPosition, string boxLabelText, string packName, RGBAColor? ghostGrabColor)
```

Immutable pack description using string resource names.

Parameters:

- `unlockStars`: Number of stars required to unlock this pack.
- `levelCount`: Total number of levels in the pack.
- `saveSlot`: Save slot index used to route this pack's progress file.
- `packSpritesheet`: Resource name for the spritesheet containing this pack's box sprite.
- `packQuadIndex`: Quad index within `packSpritesheet` for this pack's box sprite.
- `boxBackgrounds`: Resource names for the pack background assets.
- `boxBackgroundP2Y`: Y position for the secondary background in long levels, or 0 when unused.
- `sittingPlatform`: Quad index used for the support platform.
- `boxCovers`: Resource names for the pack cover assets.
- `boxHoleBgColor`: Background color used behind the box hole in the pack selection menu.
- `musicPack`: Resource names for pack-specific music.
- `musicList`: Resource names for level music in this pack.
- `earthBg`: Whether this pack uses earth background animations.
- `earthBgPosition`: Position override for earth background animation, or `null` to use the default.
- `boxLabelText`: Localization key for optional box label text.
- `packName`: Localized box pack name.
- `ghostGrabColor`: Optional ghost grab circle color override, or `null` to use the default.

## Properties

### BoxBackgroundP2Y {#p-cuttheropedx-gamemain-packdefinition-boxbackgroundp2y}

```csharp
public int BoxBackgroundP2Y { get; }
```

Y position for secondary background (p2) in long levels. 0 means no p2.

### BoxBackgrounds {#p-cuttheropedx-gamemain-packdefinition-boxbackgrounds}

```csharp
public string[] BoxBackgrounds { get; }
```

String resource names for pack assets.

### BoxCovers {#p-cuttheropedx-gamemain-packdefinition-boxcovers}

```csharp
public string[] BoxCovers { get; }
```

String resource names for cover assets.

### BoxHoleBgColor {#p-cuttheropedx-gamemain-packdefinition-boxholebgcolor}

```csharp
public RGBAColor BoxHoleBgColor { get; }
```

Box background color for pack selection menu.

### BoxLabelText {#p-cuttheropedx-gamemain-packdefinition-boxlabeltext}

```csharp
public string BoxLabelText { get; }
```

Localization key for optional box label text (e.g., "the hardest one").

### EarthBg {#p-cuttheropedx-gamemain-packdefinition-earthbg}

```csharp
public bool EarthBg { get; }
```

Whether this pack uses earth background animations.

### EarthBgPosition {#p-cuttheropedx-gamemain-packdefinition-earthbgposition}

```csharp
public Vector? EarthBgPosition { get; }
```

Position for earth background animation, or `null` to use the default.

### GhostGrabColor {#p-cuttheropedx-gamemain-packdefinition-ghostgrabcolor}

```csharp
public RGBAColor? GhostGrabColor { get; }
```

Optional ghost grab circle color override, or `null` to use the default.

### LevelCount {#p-cuttheropedx-gamemain-packdefinition-levelcount}

```csharp
public int LevelCount { get; }
```

Total number of levels in the pack.

### MusicList {#p-cuttheropedx-gamemain-packdefinition-musiclist}

```csharp
public string[] MusicList { get; }
```

String resource names for the music to play in this pack.

### MusicPack {#p-cuttheropedx-gamemain-packdefinition-musicpack}

```csharp
public string[] MusicPack { get; }
```

String resource names for the music to play in this pack.

### PackName {#p-cuttheropedx-gamemain-packdefinition-packname}

```csharp
public string PackName { get; }
```

The localized box pack name.

### PackQuadIndex {#p-cuttheropedx-gamemain-packdefinition-packquadindex}

```csharp
public int PackQuadIndex { get; }
```

Quad index within [PackSpritesheet](#p-cuttheropedx-gamemain-packdefinition-packspritesheet) for this pack's box sprite.

### PackSpritesheet {#p-cuttheropedx-gamemain-packdefinition-packspritesheet}

```csharp
public string PackSpritesheet { get; }
```

Resource ID for the spritesheet containing this pack's box sprite.

### SaveSlot {#p-cuttheropedx-gamemain-packdefinition-saveslot}

```csharp
public int SaveSlot { get; }
```

Save slot index used to route this pack's progress file.

### SittingPlatform {#p-cuttheropedx-gamemain-packdefinition-sittingplatform}

```csharp
public int SittingPlatform { get; }
```

Quad index in [CharSupports](Resources.md) used for the support platform.

### UnlockStars {#p-cuttheropedx-gamemain-packdefinition-unlockstars}

```csharp
public int UnlockStars { get; }
```

Number of stars required to unlock this pack.

