---
title: Class OmNomSoundResolver
description: Resolves classic Om Nom sound resources to skin-specific variants when a skin declares them.
---

# Class OmNomSoundResolver

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `OmNomSoundResolver.cs`

Resolves classic Om Nom sound resources to skin-specific variants when a skin declares them.

## Declaration

```csharp
internal static class OmNomSoundResolver
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [OmNomSoundResolver](OmNomSoundResolver.md)

## Fields

### ThemedIdentifierSuffixesByClassicSound {#f-cuttheropedx-gamemain-omnomsoundresolver-themedidentifiersuffixesbyclassicsound}

```csharp
private static readonly Dictionary<string, string> ThemedIdentifierSuffixesByClassicSound
```

Maps classic Om Nom sound resource names to themed resource identifier suffixes.

## Methods

### GetSelectedXmlSkinDefinition() {#m-cuttheropedx-gamemain-omnomsoundresolver-getselectedxmlskindefinition}

```csharp
private static OmNomSkinDefinition GetSelectedXmlSkinDefinition()
```

Gets the XML-backed selected skin definition, excluding the classic skin.

Returns: The selected XML skin definition, or `null` when the classic skin is selected.

### ResolveSelectedSkinSoundResource(string classicSoundResourceName) {#m-cuttheropedx-gamemain-omnomsoundresolver-resolveselectedskinsoundresource-system-string}

```csharp
public static string ResolveSelectedSkinSoundResource(string classicSoundResourceName)
```

Resolves a classic Om Nom sound using the currently selected skin.

Parameters:

- `classicSoundResourceName`: Classic sound resource name.

Returns: The selected skin's themed sound resource, the original classic resource, or `null` for unavailable opt-in-only sounds.

### ResolveSoundResource(OmNomSkinDefinition skinDefinition, string classicSoundResourceName) {#m-cuttheropedx-gamemain-omnomsoundresolver-resolvesoundresource-cuttheropedx-gamemain-omnomskindefinition-system-string}

```csharp
public static string ResolveSoundResource(OmNomSkinDefinition skinDefinition, string classicSoundResourceName)
```

Resolves a classic Om Nom sound to a themed replacement when the selected skin supports it.

Parameters:

- `skinDefinition`: Skin definition to resolve against, or `null` for the classic skin.
- `classicSoundResourceName`: Classic sound resource name.

Returns: The themed sound resource, the original classic resource, or `null` when an opt-in-only sound is unavailable.

### ResolveThemedSoundResourceName(string skinName, string classicSoundResourceName) {#m-cuttheropedx-gamemain-omnomsoundresolver-resolvethemedsoundresourcename-system-string-system-string}

```csharp
private static string ResolveThemedSoundResourceName(string skinName, string classicSoundResourceName)
```

Builds and resolves the themed sound resource name for a specific skin and classic sound.

Parameters:

- `skinName`: Name of the themed Om Nom skin.
- `classicSoundResourceName`: Classic sound resource name.

Returns: The resolved themed sound resource name, or the original classic resource name when no themed resource exists.

