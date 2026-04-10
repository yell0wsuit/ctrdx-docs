---
title: Class PackConfig
description: Loads pack metadata from JSON packs files and save routing from `packlist.json`.
---

# Class PackConfig

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `PackConfig.cs`

Loads pack metadata from JSON packs files and save routing from `packlist.json`.

## Declaration

```csharp
internal static class PackConfig
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [PackConfig](PackConfig.md)

## Fields

### DefaultBoxHoleBgColor {#f-cuttheropedx-gamemain-packconfig-defaultboxholebgcolor}

```csharp
private static readonly RGBAColor DefaultBoxHoleBgColor
```

Default box color when not specified in pack config (dark gray: 45, 45, 53).

### DefaultPacksConfigFile {#f-cuttheropedx-gamemain-packconfig-defaultpacksconfigfile}

```csharp
private const string DefaultPacksConfigFile
```

The configuration file for original Cut the Rope game.

### EmptyResourceNames {#f-cuttheropedx-gamemain-packconfig-emptyresourcenames}

```csharp
private static readonly string[] EmptyResourceNames
```

Sentinel resource list used when a pack has no resource names.

### PackListConfigFile {#f-cuttheropedx-gamemain-packconfig-packlistconfigfile}

```csharp
private const string PackListConfigFile
```

The master configuration list for game pack.

### packs {#f-cuttheropedx-gamemain-packconfig-packs}

```csharp
private static readonly List<PackDefinition> packs
```

Loaded pack definitions in display order.

### playablePackCount {#f-cuttheropedx-gamemain-packconfig-playablepackcount}

```csharp
private static readonly int playablePackCount
```

Number of packs that contain playable levels.

## Properties

### IntroVideo {#p-cuttheropedx-gamemain-packconfig-introvideo}

```csharp
public static string IntroVideo { get; private set; }
```

Video filename for the intro movie without extension, or `null` to skip.

### MaxLevelsPerPack {#p-cuttheropedx-gamemain-packconfig-maxlevelsperpack}

```csharp
public static int MaxLevelsPerPack { get; }
```

Gets the largest level count across all loaded packs.

### OutroVideo {#p-cuttheropedx-gamemain-packconfig-outrovideo}

```csharp
public static string OutroVideo { get; private set; }
```

Video filename for the outro/completion movie without extension, or `null` to skip.

### Packs {#p-cuttheropedx-gamemain-packconfig-packs}

```csharp
public static IReadOnlyList<PackDefinition> Packs { get; }
```

Gets all loaded pack definitions, including non-playable placeholder packs.

## Methods

### AddPackListEntry(JsonElement entryElement, ICollection&lt;PackConfig.PackListEntry&gt; entries) {#m-cuttheropedx-gamemain-packconfig-addpacklistentry-system-text-json-jsonelement-system-collections-generic-icollection-cuttheropedx-gamemain-packconfig-packlistentry}

```csharp
private static void AddPackListEntry(JsonElement entryElement, ICollection<PackConfig.PackListEntry> entries)
```

Parses and appends one pack list entry.

Parameters:

- `entryElement`: JSON object containing pack list entry data.
- `entries`: Destination collection for parsed entries.

### GetBoxBackgroundP2Y(int pack) {#m-cuttheropedx-gamemain-packconfig-getboxbackgroundp2y-system-int32}

```csharp
public static int GetBoxBackgroundP2Y(int pack)
```

Gets the secondary background Y position for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The secondary background Y position, or 0 when unused or when `pack` is out of range.

### GetBoxBackgrounds(int pack) {#m-cuttheropedx-gamemain-packconfig-getboxbackgrounds-system-int32}

```csharp
public static string[] GetBoxBackgrounds(int pack)
```

Gets the background resource names for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The pack background resource names, or the empty resource sentinel when `pack` is out of range.

### GetBoxCoverOrDefault(int pack) {#m-cuttheropedx-gamemain-packconfig-getboxcoverordefault-system-int32}

```csharp
public static string GetBoxCoverOrDefault(int pack)
```

Returns the first available cover resource name for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The first non-empty cover resource name.

### GetBoxCovers(int pack) {#m-cuttheropedx-gamemain-packconfig-getboxcovers-system-int32}

```csharp
public static string[] GetBoxCovers(int pack)
```

Gets the cover resource names for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The pack cover resource names, or the empty resource sentinel when `pack` is out of range.

### GetBoxHoleBgColor(int pack) {#m-cuttheropedx-gamemain-packconfig-getboxholebgcolor-system-int32}

```csharp
public static RGBAColor GetBoxHoleBgColor(int pack)
```

Gets the box hole background color for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The configured box hole background color, or the default color when `pack` is out of range.

### GetBoxLabelText(int pack) {#m-cuttheropedx-gamemain-packconfig-getboxlabeltext-system-int32}

```csharp
public static string GetBoxLabelText(int pack)
```

Gets the optional box label text key for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The box label text key, or `null` when none is configured or `pack` is out of range.

### GetComingSoonPackIndex() {#m-cuttheropedx-gamemain-packconfig-getcomingsoonpackindex}

```csharp
public static int GetComingSoonPackIndex()
```

Returns the index of the first non-playable pack entry (coming soon placeholder), or -1 if none.

Returns: The coming-soon pack index, or -1 when no placeholder pack exists.

### GetEarthBg(int pack) {#m-cuttheropedx-gamemain-packconfig-getearthbg-system-int32}

```csharp
public static bool GetEarthBg(int pack)
```

Gets whether a pack uses earth background animations.

Parameters:

- `pack`: Target pack index.

Returns: `true` when the pack uses earth background animations; otherwise, `false`.

### GetEarthBgPosition(int pack) {#m-cuttheropedx-gamemain-packconfig-getearthbgposition-system-int32}

```csharp
public static Vector? GetEarthBgPosition(int pack)
```

Gets the earth background position override for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The earth background position override, or `null` when none is configured or `pack` is out of range.

### GetGhostGrabColor(int pack) {#m-cuttheropedx-gamemain-packconfig-getghostgrabcolor-system-int32}

```csharp
public static RGBAColor? GetGhostGrabColor(int pack)
```

Gets the ghost grab circle color override for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The ghost grab color override, or `null` when none is configured or `pack` is out of range.

### GetLevelCount(int pack) {#m-cuttheropedx-gamemain-packconfig-getlevelcount-system-int32}

```csharp
public static int GetLevelCount(int pack)
```

Gets the level count for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The pack's level count, or 0 when `pack` is out of range.

### GetMusicList(int pack) {#m-cuttheropedx-gamemain-packconfig-getmusiclist-system-int32}

```csharp
public static string[] GetMusicList(int pack)
```

Gets the level music resource names for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The level music resource names, or the empty resource sentinel when `pack` is out of range.

### GetMusicListOrDefault(int pack) {#m-cuttheropedx-gamemain-packconfig-getmusiclistordefault-system-int32}

```csharp
public static string[] GetMusicListOrDefault(int pack)
```

Gets non-empty level music resource names for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The filtered level music resource names.

### GetMusicPack(int pack) {#m-cuttheropedx-gamemain-packconfig-getmusicpack-system-int32}

```csharp
public static string[] GetMusicPack(int pack)
```

Gets the pack-specific music resource names for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The pack music resource names, or the empty resource sentinel when `pack` is out of range.

### GetMusicPackOrDefault(int pack) {#m-cuttheropedx-gamemain-packconfig-getmusicpackordefault-system-int32}

```csharp
public static string GetMusicPackOrDefault(int pack)
```

Gets the first available pack-specific music resource name for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The first non-empty pack music resource name, or `null` when none exists.

### GetPackCount() {#m-cuttheropedx-gamemain-packconfig-getpackcount}

```csharp
public static int GetPackCount()
```

Gets the number of packs that contain playable levels.

Returns: The playable pack count.

### GetPackName(int pack) {#m-cuttheropedx-gamemain-packconfig-getpackname-system-int32}

```csharp
public static string GetPackName(int pack)
```

Gets the localized pack name key for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The pack name key, or `null` when none is configured or `pack` is out of range.

### GetPackQuadIndex(int pack) {#m-cuttheropedx-gamemain-packconfig-getpackquadindex-system-int32}

```csharp
public static int GetPackQuadIndex(int pack)
```

Gets the pack selection quad index for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The pack quad index, or 0 when `pack` is out of range.

### GetPackSpritesheet(int pack) {#m-cuttheropedx-gamemain-packconfig-getpackspritesheet-system-int32}

```csharp
public static string GetPackSpritesheet(int pack)
```

Gets the pack selection spritesheet resource name for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The pack spritesheet resource name, or `null` when `pack` is out of range.

### GetSaveSlot(int pack) {#m-cuttheropedx-gamemain-packconfig-getsaveslot-system-int32}

```csharp
public static int GetSaveSlot(int pack)
```

Gets the save slot used by a pack.

Parameters:

- `pack`: Target pack index.

Returns: The pack's save slot, or 0 when `pack` is out of range.

### GetSittingPlatform(int pack) {#m-cuttheropedx-gamemain-packconfig-getsittingplatform-system-int32}

```csharp
public static int GetSittingPlatform(int pack)
```

Gets the support platform quad index for a pack.

Parameters:

- `pack`: Target pack index.

Returns: The support platform quad index, or 0 when `pack` is out of range.

### GetUnlockStars(int pack) {#m-cuttheropedx-gamemain-packconfig-getunlockstars-system-int32}

```csharp
public static int GetUnlockStars(int pack)
```

Gets the star count required to unlock a pack.

Parameters:

- `pack`: Target pack index.

Returns: The required star count, or 0 when `pack` is out of range.

### LoadPackListEntries() {#m-cuttheropedx-gamemain-packconfig-loadpacklistentries}

```csharp
private static List<PackConfig.PackListEntry> LoadPackListEntries()
```

Loads pack list entries from the master configuration file.

Returns: The configured pack list entries, or a single default entry when no master list exists.

### LoadPacksFromEntries(IEnumerable&lt;PackConfig.PackListEntry&gt; packListEntries) {#m-cuttheropedx-gamemain-packconfig-loadpacksfromentries-system-collections-generic-ienumerable-cuttheropedx-gamemain-packconfig-packlistentry}

```csharp
private static List<PackDefinition> LoadPacksFromEntries(IEnumerable<PackConfig.PackListEntry> packListEntries)
```

Loads pack definitions from each configured pack file.

Parameters:

- `packListEntries`: Pack list entries that identify pack files and save slots.

Returns: The loaded pack definitions.

### NormalizePacksConfigFileName(string packsConfigName) {#m-cuttheropedx-gamemain-packconfig-normalizepacksconfigfilename-system-string}

```csharp
private static string NormalizePacksConfigFileName(string packsConfigName)
```

Normalizes a pack configuration name to a JSON file name.

Parameters:

- `packsConfigName`: Raw pack configuration name.

Returns: The normalized JSON file name, or the default file name when `packsConfigName` is empty.

### ParseBoolProperty(JsonElement element, string propertyName, bool defaultValue, string fileName) {#m-cuttheropedx-gamemain-packconfig-parseboolproperty-system-text-json-jsonelement-system-string-system-boolean-system-string}

```csharp
private static bool ParseBoolProperty(JsonElement element, string propertyName, bool defaultValue, string fileName)
```

Parses a boolean property from a JSON element.

Parameters:

- `element`: JSON object that owns the property.
- `propertyName`: Property name to parse.
- `defaultValue`: Value returned when the property is missing.
- `fileName`: Configuration file name used in error messages.

Returns: The parsed boolean value, or `defaultValue` when the property is missing.

### ParseColorParts(string[] parts) {#m-cuttheropedx-gamemain-packconfig-parsecolorparts-system-string}

```csharp
private static RGBAColor ParseColorParts(string[] parts)
```

Parses RGBA color channels from string parts.

Parameters:

- `parts`: Color channel parts in red, green, blue, and optional alpha order.

Returns: The parsed color, or the default box hole background color when too few channels are provided.

### ParseColorProperty(JsonElement element, string propertyName) {#m-cuttheropedx-gamemain-packconfig-parsecolorproperty-system-text-json-jsonelement-system-string}

```csharp
private static RGBAColor ParseColorProperty(JsonElement element, string propertyName)
```

Parses a color property from a string or array JSON value.

Parameters:

- `element`: JSON object that owns the property.
- `propertyName`: Property name to parse.

Returns: The parsed color, or the default box hole background color when the property is missing or invalid.

### ParseIntProperty(JsonElement element, string propertyName, int defaultValue, string fileName) {#m-cuttheropedx-gamemain-packconfig-parseintproperty-system-text-json-jsonelement-system-string-system-int32-system-string}

```csharp
private static int ParseIntProperty(JsonElement element, string propertyName, int defaultValue, string fileName)
```

Parses an integer property from a JSON element.

Parameters:

- `element`: JSON object that owns the property.
- `propertyName`: Property name to parse.
- `defaultValue`: Value returned when the property is missing.
- `fileName`: Configuration file name used in error messages.

Returns: The parsed integer value, or `defaultValue` when the property is missing.

### ParseNullableColorProperty(JsonElement element, string propertyName) {#m-cuttheropedx-gamemain-packconfig-parsenullablecolorproperty-system-text-json-jsonelement-system-string}

```csharp
private static RGBAColor? ParseNullableColorProperty(JsonElement element, string propertyName)
```

Parses an optional color property from a JSON element.

Parameters:

- `element`: JSON object that owns the property.
- `propertyName`: Property name to parse.

Returns: The parsed color, or `null` when the property is missing or `null`.

### ParseRequiredString(JsonElement element, string propertyName, string fileName) {#m-cuttheropedx-gamemain-packconfig-parserequiredstring-system-text-json-jsonelement-system-string-system-string}

```csharp
private static string ParseRequiredString(JsonElement element, string propertyName, string fileName)
```

Parses a required string property from a JSON element.

Parameters:

- `element`: JSON object that owns the property.
- `propertyName`: Property name to parse.
- `fileName`: Configuration file name used in error messages.

Returns: The parsed string value.

### ParseResourceNames(JsonElement element, string propertyName) {#m-cuttheropedx-gamemain-packconfig-parseresourcenames-system-text-json-jsonelement-system-string}

```csharp
private static string[] ParseResourceNames(JsonElement element, string propertyName)
```

Parses comma-separated or array-based resource names from a JSON element.

Parameters:

- `element`: JSON object that owns the property.
- `propertyName`: Property name to parse.

Returns: The parsed resource names with a trailing sentinel, or the empty resource sentinel when the property is missing.

### ParseStringProperty(JsonElement element, string propertyName) {#m-cuttheropedx-gamemain-packconfig-parsestringproperty-system-text-json-jsonelement-system-string}

```csharp
private static string ParseStringProperty(JsonElement element, string propertyName)
```

Parses an optional string property from a JSON element.

Parameters:

- `element`: JSON object that owns the property.
- `propertyName`: Property name to parse.

Returns: The trimmed string value, or `null` when the property is missing, `null`, or not a string.

### ParseVectorProperty(JsonElement element, string propertyName, string fileName) {#m-cuttheropedx-gamemain-packconfig-parsevectorproperty-system-text-json-jsonelement-system-string-system-string}

```csharp
private static Vector? ParseVectorProperty(JsonElement element, string propertyName, string fileName)
```

Parses a vector property from a string or array JSON value.

Parameters:

- `element`: JSON object that owns the property.
- `propertyName`: Property name to parse.
- `fileName`: Configuration file name used in error messages.

Returns: The parsed vector, or `null` when the property is missing or `null`.

### RequireResourceNames(string[] resourceNames, string context, string packsConfigFile) {#m-cuttheropedx-gamemain-packconfig-requireresourcenames-system-string-system-string-system-string}

```csharp
private static void RequireResourceNames(string[] resourceNames, string context, string packsConfigFile)
```

Ensures that a playable pack has at least one resource name for a required field.

Parameters:

- `resourceNames`: Resource names to inspect.
- `context`: Pack configuration property name used in error messages.
- `packsConfigFile`: Configuration file name used in error messages.

### ResolvePackSpritesheetId(string id) {#m-cuttheropedx-gamemain-packconfig-resolvepackspritesheetid-system-string}

```csharp
private static string ResolvePackSpritesheetId(string id)
```

Maps a shorthand spritesheet ID (e.g. "1", "2") to its full resource name. Falls back to [MenuPackSelection](Resources.md) for unrecognized or empty values.

Parameters:

- `id`: Spritesheet ID from the pack configuration.

Returns: The resolved spritesheet resource name.

### ResolvePacksArray(JsonElement root, string configFileName) {#m-cuttheropedx-gamemain-packconfig-resolvepacksarray-system-text-json-jsonelement-system-string}

```csharp
private static JsonElement ResolvePacksArray(JsonElement root, string configFileName)
```

Resolves the pack array from a pack configuration root.

Parameters:

- `root`: Root JSON element from the pack configuration file.
- `configFileName`: Configuration file name used in error messages.

Returns: The JSON array that contains pack definitions.

### TryLoadJsonRoot(string fileName, out JsonElement root) {#m-cuttheropedx-gamemain-packconfig-tryloadjsonroot-system-string-system-text-json-jsonelement}

```csharp
private static bool TryLoadJsonRoot(string fileName, out JsonElement root)
```

Attempts to load a JSON root element from the content directory.

Parameters:

- `fileName`: JSON file name relative to the content root directory.
- `root`: Loaded root element when the load succeeds.

Returns: `true` when the file was loaded and parsed; otherwise, `false`.

### ValidateResourceName(string resourceName, string context, string packsConfigFile) {#m-cuttheropedx-gamemain-packconfig-validateresourcename-system-string-system-string-system-string}

```csharp
private static void ValidateResourceName(string resourceName, string context, string packsConfigFile)
```

Validates a single resource name against the resource registry.

Parameters:

- `resourceName`: Resource name to validate.
- `context`: Pack configuration property name used in error messages.
- `packsConfigFile`: Configuration file name used in error messages.

### ValidateResourceNames(IEnumerable&lt;string&gt; resourceNames, string context, string packsConfigFile) {#m-cuttheropedx-gamemain-packconfig-validateresourcenames-system-collections-generic-ienumerable-system-string-system-string-system-string}

```csharp
private static void ValidateResourceNames(IEnumerable<string> resourceNames, string context, string packsConfigFile)
```

Validates resource names while preserving the trailing `null` sentinel.

Parameters:

- `resourceNames`: Resource names to validate.
- `context`: Pack configuration property name used in error messages.
- `packsConfigFile`: Configuration file name used in error messages.

