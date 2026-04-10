---
title: Class FlashXmlImporter
description: Parser for Flash XML animation exports.
---

# Class FlashXmlImporter

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlImporter.cs`

Parser for Flash XML animation exports.

## Declaration

```csharp
public static class FlashXmlImporter
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FlashXmlImporter](FlashXmlImporter.md)

## Fields

### GroupEpsilon {#f-cuttheropedx-gamemain-flashxmlimporter-groupepsilon}

```csharp
private const float GroupEpsilon
```

Time offset threshold used to decide when action tokens belong to the same keyframe group.

### parseCache {#f-cuttheropedx-gamemain-flashxmlimporter-parsecache}

```csharp
private static readonly ConcurrentDictionary<string, Lazy<FlashXmlAnimationDefinition>> parseCache
```

Process-local cache of parsed Flash XML animation definitions keyed by XML path.

## Methods

### ParseActionTrack(string rawTrack) {#m-cuttheropedx-gamemain-flashxmlimporter-parseactiontrack-system-string}

```csharp
private static List<FlashXmlActionGroupKeyFrame> ParseActionTrack(string rawTrack)
```

Parses a Flash action track and groups actions that belong to the same keyframe.

Parameters:

- `rawTrack`: Raw action track string from the XML element.

Returns: The parsed action keyframe groups, or an empty list when the track is empty.

### ParseEmptyTimelineIds(string rawEmptyTimelines) {#m-cuttheropedx-gamemain-flashxmlimporter-parseemptytimelineids-system-string}

```csharp
private static List<int> ParseEmptyTimelineIds(string rawEmptyTimelines)
```

Parses the semicolon-separated list of exported empty timeline IDs.

Parameters:

- `rawEmptyTimelines`: Raw empty timeline ID string from the XML node.

Returns: The parsed timeline IDs, or an empty list when no IDs are present.

### ParseFile(string xmlPath) {#m-cuttheropedx-gamemain-flashxmlimporter-parsefile-system-string}

```csharp
public static FlashXmlAnimationDefinition ParseFile(string xmlPath)
```

Parses a Flash XML animation file, using a process-local cache for repeated paths.

Parameters:

- `xmlPath`: Absolute or relative path to the Flash XML file.

Returns: The parsed Flash XML animation definition.

### ParseFileCore(string xmlPath) {#m-cuttheropedx-gamemain-flashxmlimporter-parsefilecore-system-string}

```csharp
private static FlashXmlAnimationDefinition ParseFileCore(string xmlPath)
```

Parses a Flash XML animation file without consulting the parse cache.

Parameters:

- `xmlPath`: Absolute or relative path to the Flash XML file.

Returns: The parsed Flash XML animation definition.

### ParseFloat1Track(string rawTrack) {#m-cuttheropedx-gamemain-flashxmlimporter-parsefloat1track-system-string}

```csharp
private static List<FlashXmlFloat1KeyFrame> ParseFloat1Track(string rawTrack)
```

Parses a single-value Flash track into keyframes.

Parameters:

- `rawTrack`: Raw track string from the XML element.

Returns: The parsed single-value keyframes, or an empty list when the track is empty.

### ParseFloat2Track(string rawTrack, int expectedArity) {#m-cuttheropedx-gamemain-flashxmlimporter-parsefloat2track-system-string-system-int32}

```csharp
private static List<FlashXmlFloat2KeyFrame> ParseFloat2Track(string rawTrack, int expectedArity)
```

Parses a two-value Flash track into keyframes when each token has the expected arity.

Parameters:

- `rawTrack`: Raw track string from the XML element.
- `expectedArity`: Number of comma-separated values expected in each token.

Returns: The parsed two-value keyframes, or an empty list when the track is empty.

### ParseFloat4Track(string rawTrack) {#m-cuttheropedx-gamemain-flashxmlimporter-parsefloat4track-system-string}

```csharp
private static List<FlashXmlFloat4KeyFrame> ParseFloat4Track(string rawTrack)
```

Parses a four-value Flash track into keyframes.

Parameters:

- `rawTrack`: Raw track string from the XML element.

Returns: The parsed four-value keyframes, or an empty list when the track is empty.

### ParseImageNode(XElement imageNode) {#m-cuttheropedx-gamemain-flashxmlimporter-parseimagenode-system-xml-linq-xelement}

```csharp
private static FlashXmlPartDefinition ParseImageNode(XElement imageNode)
```

Parses an image node into a part definition.

Parameters:

- `imageNode`: Flash XML image element to parse.

Returns: The parsed image part definition.

### ParseImageTimeline(XElement timelineNode) {#m-cuttheropedx-gamemain-flashxmlimporter-parseimagetimeline-system-xml-linq-xelement}

```csharp
private static FlashXmlTimelineDefinition ParseImageTimeline(XElement timelineNode)
```

Parses an image timeline node into per-track keyframe lists.

Parameters:

- `timelineNode`: Flash XML timeline element to parse.

Returns: The parsed image timeline definition.

### ParseToken(string token) {#m-cuttheropedx-gamemain-flashxmlimporter-parsetoken-system-string}

```csharp
private static FlashXmlImporter.ParsedToken ParseToken(string token)
```

Parses a Flash keyframe token into payload, interpolation, and time offset parts.

Parameters:

- `token`: Raw token to parse.

Returns: The parsed token parts.

### ResolveTextureResourceName(string rawSourceId, string sourceKind) {#m-cuttheropedx-gamemain-flashxmlimporter-resolvetextureresourcename-system-string-system-string}

```csharp
private static string ResolveTextureResourceName(string rawSourceId, string sourceKind)
```

Resolves and validates a texture resource name exported by Flash XML.

Parameters:

- `rawSourceId`: Raw source identifier from the XML attribute.
- `sourceKind`: Source kind used in error messages.

Returns: The validated texture resource name.

