---
title: Class OmNomSkinRegistry
description: Loads and provides access to available Om Nom skins from the manifest. Slot 0 is always the classic sprite-frame skin (not in the manifest). Slot 1+ correspond to XML skins in the manifest (index = slot - 1).
---

# Class OmNomSkinRegistry

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `OmNomSkinRegistry.cs`

Loads and provides access to available Om Nom skins from the manifest. Slot 0 is always the classic sprite-frame skin (not in the manifest). Slot 1+ correspond to XML skins in the manifest (index = slot - 1).

## Declaration

```csharp
internal static class OmNomSkinRegistry
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [OmNomSkinRegistry](OmNomSkinRegistry.md)

## Fields

### ManifestFileName {#f-cuttheropedx-gamemain-omnomskinregistry-manifestfilename}

```csharp
private const string ManifestFileName
```

File name of the Om Nom skin manifest within the animations content directory.

### xmlSkins {#f-cuttheropedx-gamemain-omnomskinregistry-xmlskins}

```csharp
private static readonly List<OmNomSkinDefinition> xmlSkins
```

XML-based skin definitions loaded from the manifest.

## Properties

### TotalSkinCount {#p-cuttheropedx-gamemain-omnomskinregistry-totalskincount}

```csharp
public static int TotalSkinCount { get; }
```

Total skin count including classic slot 0.

### XmlSkins {#p-cuttheropedx-gamemain-omnomskinregistry-xmlskins}

```csharp
public static IReadOnlyList<OmNomSkinDefinition> XmlSkins { get; }
```

XML-based skins only (slot 1+). Index 0 here = slot 1.

## Methods

### GetSelectedSkinIndex() {#m-cuttheropedx-gamemain-omnomskinregistry-getselectedskinindex}

```csharp
public static int GetSelectedSkinIndex()
```

Gets the currently selected skin index from preferences.

Returns: The selected skin index, or 0 when the saved value is out of range.

### GetStringProperty(JsonElement element, string propertyName) {#m-cuttheropedx-gamemain-omnomskinregistry-getstringproperty-system-text-json-jsonelement-system-string}

```csharp
private static string GetStringProperty(JsonElement element, string propertyName)
```

Reads and trims a string property from a JSON object.

Parameters:

- `element`: JSON object that owns the property.
- `propertyName`: Property name to read.

Returns: The trimmed string value, or `null` when the property is missing or not a string.

### GetXmlSkinDefinition(int skinIndex) {#m-cuttheropedx-gamemain-omnomskinregistry-getxmlskindefinition-system-int32}

```csharp
public static OmNomSkinDefinition GetXmlSkinDefinition(int skinIndex)
```

Gets the XML skin definition for a non-classic skin index.

Parameters:

- `skinIndex`: Non-classic skin slot index.

Returns: The XML skin definition for `skinIndex`.

### IsClassicSkin(int skinIndex) {#m-cuttheropedx-gamemain-omnomskinregistry-isclassicskin-system-int32}

```csharp
public static bool IsClassicSkin(int skinIndex)
```

Whether the given index is the classic sprite-frame skin.

Parameters:

- `skinIndex`: Skin slot index to inspect.

Returns: `true` when `skinIndex` is the classic skin slot; otherwise, `false`.

### LoadManifest() {#m-cuttheropedx-gamemain-omnomskinregistry-loadmanifest}

```csharp
private static List<OmNomSkinDefinition> LoadManifest()
```

Loads XML-based skin definitions from the manifest.

Returns: The skin definitions loaded from the manifest, or an empty list when the manifest is missing or invalid.

### ParseSkinEntry(JsonElement entry) {#m-cuttheropedx-gamemain-omnomskinregistry-parseskinentry-system-text-json-jsonelement}

```csharp
internal static OmNomSkinDefinition ParseSkinEntry(JsonElement entry)
```

Parses a single skin manifest entry.

Parameters:

- `entry`: JSON object that describes an Om Nom skin.

Returns: The parsed skin definition, or `null` when the entry is invalid.

