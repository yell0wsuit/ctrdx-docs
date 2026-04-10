---
title: Class TexturePackerAtlasParser
description: Parses TexturePacker JSON atlas data into the engine's runtime atlas representation.
---

# Class TexturePackerAtlasParser

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `TexturePackerAtlasParser.cs`

Parses TexturePacker JSON atlas data into the engine's runtime atlas representation.

## Declaration

```csharp
internal static class TexturePackerAtlasParser
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [TexturePackerAtlasParser](TexturePackerAtlasParser.md)

## Methods

### ApplyCenteredOffsets(ParsedTexturePackerAtlas atlas, List&lt;(float w, float h)&gt; rectSizes) {#m-cuttheropedx-framework-core-texturepackeratlasparser-applycenteredoffsets-cuttheropedx-framework-core-parsedtexturepackeratlas-system-collections-generic-list-system-valuetuple-system-single-system-single}

```csharp
private static void ApplyCenteredOffsets(ParsedTexturePackerAtlas atlas, List<(float w, float h)> rectSizes)
```

Replaces parsed offsets with centered trim offsets derived from source size and trimmed rectangle size.

Parameters:

- `atlas`: Atlas whose offsets should be updated.
- `rectSizes`: Trimmed rectangle sizes corresponding to atlas frames.

### CreateFrameEntries(JsonElement framesElement) {#m-cuttheropedx-framework-core-texturepackeratlasparser-createframeentries-system-text-json-jsonelement}

```csharp
private static List<TexturePackerAtlasParser.FrameEntry> CreateFrameEntries(JsonElement framesElement)
```

Creates a normalized list of named frame entries from the TexturePacker `frames` block.

Parameters:

- `framesElement`: JSON element representing the `frames` block.

Returns: Parsed frame entries.

### OrderFrameEntries(List&lt;TexturePackerAtlasParser.FrameEntry&gt; entries, IReadOnlyList&lt;string&gt; frameOrder) {#m-cuttheropedx-framework-core-texturepackeratlasparser-orderframeentries-system-collections-generic-list-cuttheropedx-framework-core-texturepackeratlasparser-frameentry-system-collections-generic-ireadonlylist-system-string}

```csharp
private static List<TexturePackerAtlasParser.FrameEntry> OrderFrameEntries(List<TexturePackerAtlasParser.FrameEntry> entries, IReadOnlyList<string> frameOrder)
```

Reorders parsed frame `entries` according to an explicit frame-order list. Unlisted frames remain sorted by name after listed `entries`.

Parameters:

- `entries`: Frame entries to reorder.
- `frameOrder`: Preferred frame order.

Returns: Reordered frame `entries`.

### Parse(string json, TexturePackerParserOptions options) {#m-cuttheropedx-framework-core-texturepackeratlasparser-parse-system-string-cuttheropedx-framework-core-texturepackerparseroptions}

```csharp
public static ParsedTexturePackerAtlas Parse(string json, TexturePackerParserOptions options)
```

Parses TexturePacker atlas JSON into rectangle, offset, and source-size data.

Parameters:

- `json`: TexturePacker atlas JSON text.
- `options`: Optional parsing and post-processing options.

Returns: Parsed atlas data.

### ParseFrame(TexturePackerAtlasParser.FrameEntry entry, ParsedTexturePackerAtlas atlas, List&lt;(float w, float h)&gt; rectSizes) {#m-cuttheropedx-framework-core-texturepackeratlasparser-parseframe-cuttheropedx-framework-core-texturepackeratlasparser-frameentry-cuttheropedx-framework-core-parsedtexturepackeratlas-system-collections-generic-list-system-valuetuple-system-single-system-single}

```csharp
private static void ParseFrame(TexturePackerAtlasParser.FrameEntry entry, ParsedTexturePackerAtlas atlas, List<(float w, float h)> rectSizes)
```

Parses a single frame `entry` and appends its data to the output `atlas`.

Parameters:

- `entry`: Frame entry to parse.
- `atlas`: Output atlas receiving parsed frame data.
- `rectSizes`: List tracking parsed rectangle sizes for later offset normalization.

### ReadFloat(JsonElement element, string propertyName) {#m-cuttheropedx-framework-core-texturepackeratlasparser-readfloat-system-text-json-jsonelement-system-string}

```csharp
private static float ReadFloat(JsonElement element, string propertyName)
```

Reads a numeric property from a JSON object `element` as a float.

Parameters:

- `element`: JSON object element to inspect.
- `propertyName`: Property name to read.

Returns: Numeric property value, or `0` when missing or not numeric.

### TryGetString(JsonElement element, string propertyName) {#m-cuttheropedx-framework-core-texturepackeratlasparser-trygetstring-system-text-json-jsonelement-system-string}

```csharp
private static string TryGetString(JsonElement element, string propertyName)
```

Attempts to read a string property from a JSON object `element`.

Parameters:

- `element`: JSON object element to inspect.
- `propertyName`: Property name to read.

Returns: String property value, or `null` when missing or not a string.

