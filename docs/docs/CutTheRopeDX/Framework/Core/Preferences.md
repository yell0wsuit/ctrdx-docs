---
title: Class Preferences
description: Stores global and per-box preferences, persists them as JSON, and handles migration from older save layouts.
---

# Class Preferences

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `Preferences.cs`

Stores global and per-box preferences, persists them as JSON, and handles migration from older save layouts.

## Declaration

```csharp
internal class Preferences : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [Preferences](Preferences.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [CTRPreferences](../../GameMain/CTRPreferences.md)

## Constructors

### Preferences() {#m-cuttheropedx-framework-core-preferences-ctor}

```csharp
public Preferences()
```

Initializes a preferences instance and loads saved preference data from disk.

## Fields

### BooleanPreferenceKeys {#f-cuttheropedx-framework-core-preferences-booleanpreferencekeys}

```csharp
private static readonly HashSet<string> BooleanPreferenceKeys
```

Preference keys that should be interpreted as booleans during JSON migration.

### BoxData {#f-cuttheropedx-framework-core-preferences-boxdata}

```csharp
private static readonly List<Dictionary<string, object>> BoxData
```

Per-box game data dictionaries indexed by box index.

### DynamicBoxSaveFileExtension {#f-cuttheropedx-framework-core-preferences-dynamicboxsavefileextension}

```csharp
private const string DynamicBoxSaveFileExtension
```

File extension used for per-box save slot JSON files.

### DynamicBoxSaveFilePrefix {#f-cuttheropedx-framework-core-preferences-dynamicboxsavefileprefix}

```csharp
private const string DynamicBoxSaveFilePrefix
```

File name prefix used for per-box save slot JSON files.

### GlobalData {#f-cuttheropedx-framework-core-preferences-globaldata}

```csharp
private static readonly Dictionary<string, object> GlobalData
```

Global preferences keyed by their persisted preference names.

### GlobalSaveFileName {#f-cuttheropedx-framework-core-preferences-globalsavefilename}

```csharp
private const string GlobalSaveFileName
```

File name used for the global preferences JSON file.

### SaveFolderName {#f-cuttheropedx-framework-core-preferences-savefoldername}

```csharp
private const string SaveFolderName
```

Directory name used for Cut the Rope DX save data.

### UnlockedKeyPrefix {#f-cuttheropedx-framework-core-preferences-unlockedkeyprefix}

```csharp
private const string UnlockedKeyPrefix
```

Prefix used by legacy numeric unlocked-state keys that are migrated to booleans.

## Properties

### GameSaveRequested {#p-cuttheropedx-framework-core-preferences-gamesaverequested}

```csharp
public static bool GameSaveRequested { get; set; }
```

Gets or sets a value indicating whether preferences should be written to disk on the next update.

### GlobalSaveFilePath {#p-cuttheropedx-framework-core-preferences-globalsavefilepath}

```csharp
private static string GlobalSaveFilePath { get; }
```

Gets the full path to the global preferences JSON file.

### SaveDirectory {#p-cuttheropedx-framework-core-preferences-savedirectory}

```csharp
private static string SaveDirectory { get; }
```

Gets the save directory with the following fallback priority: Next to the executable (preferred for portability) User's Documents folder LocalApplicationData (final fallback)

## Methods

### ClearAllBoxData() {#m-cuttheropedx-framework-core-preferences-clearallboxdata}

```csharp
protected static void ClearAllBoxData()
```

Clears all in-memory per-box preference dictionaries.

### ContainsKey(string key) {#m-cuttheropedx-framework-core-preferences-containskey-system-string}

```csharp
protected static bool ContainsKey(string key)
```

Checks if a global preference `key` exists in memory.

Parameters:

- `key`: Preference key to check.

Returns: `true` if the `key` exists; otherwise `false`.

### DeserializeFromJson(string json, Dictionary&lt;string, object&gt; dest) {#m-cuttheropedx-framework-core-preferences-deserializefromjson-system-string-system-collections-generic-dictionary-system-string-system-object}

```csharp
private static bool DeserializeFromJson(string json, Dictionary<string, object> dest)
```

Deserializes JSON into the destination dictionary (AOT-safe).

Parameters:

- `json`: JSON document to deserialize.
- `dest`: Destination dictionary.

Returns: `true` if any boolean migration occurred; otherwise `false`.

### DeserializeFromJsonRouted(string json, Dictionary&lt;string, object&gt; globalDest, Dictionary&lt;string, object&gt; gameDataDest) {#m-cuttheropedx-framework-core-preferences-deserializefromjsonrouted-system-string-system-collections-generic-dictionary-system-string-system-object-system-collections-generic-dictionary-system-string-system-object}

```csharp
private static bool DeserializeFromJsonRouted(string json, Dictionary<string, object> globalDest, Dictionary<string, object> gameDataDest)
```

Deserializes JSON routing game data keys to `gameDataDest` and all other keys to `globalDest`. Used for migration of old save files that mixed global prefs and game data in one file.

Parameters:

- `json`: JSON document to deserialize.
- `globalDest`: Destination for global preference keys.
- `gameDataDest`: Destination for box-scoped game-data keys.

Returns: `true` if any migration occurred; otherwise `false`.

### DetermineSaveDirectory() {#m-cuttheropedx-framework-core-preferences-determinesavedirectory}

```csharp
private static string DetermineSaveDirectory()
```

Determines the best available save directory based on writability and platform constraints.

Returns: The path to the save directory.

### EnsureBoxData(int box) {#m-cuttheropedx-framework-core-preferences-ensureboxdata-system-int32}

```csharp
private static Dictionary<string, object> EnsureBoxData(int box)
```

Ensures that a dictionary exists for the specified `box` slot and returns it.

Parameters:

- `box`: Box slot index.

Returns: Dictionary backing the specified `box` slot.

### GetBooleanForKey(string key) {#m-cuttheropedx-framework-core-preferences-getbooleanforkey-system-string}

```csharp
public static bool GetBooleanForKey(string key)
```

Gets a boolean preference. Returns `false` if not found.

Parameters:

- `key`: Preference key.

Returns: Stored boolean value, or `false` if missing.

### GetBoxBoolForKey(int box, string key) {#m-cuttheropedx-framework-core-preferences-getboxboolforkey-system-int32-system-string}

```csharp
public static bool GetBoxBoolForKey(int box, string key)
```

Gets a boolean preference for a specific `box` slot.

Parameters:

- `box`: Box slot index.
- `key`: Preference key.

Returns: Stored boolean value, or `false` if missing.

### GetBoxIntForKey(int box, string key) {#m-cuttheropedx-framework-core-preferences-getboxintforkey-system-int32-system-string}

```csharp
public static int GetBoxIntForKey(int box, string key)
```

Gets an integer preference for a specific `box` slot.

Parameters:

- `box`: Box slot index.
- `key`: Preference key.

Returns: Stored integer value, or `0` if missing or invalid.

### GetBoxSaveFileName(int slot) {#m-cuttheropedx-framework-core-preferences-getboxsavefilename-system-int32}

```csharp
private static string GetBoxSaveFileName(int slot)
```

Returns the JSON file name for the specified box `slot`.

Parameters:

- `slot`: Box slot index.

Returns: Box save file name.

### GetBoxSaveFilePath(int slot) {#m-cuttheropedx-framework-core-preferences-getboxsavefilepath-system-int32}

```csharp
private static string GetBoxSaveFilePath(int slot)
```

Returns the full path to the JSON file for the specified box `slot`.

Parameters:

- `slot`: Box slot index.

Returns: Box save file path.

### GetBoxStringForKey(int box, string key) {#m-cuttheropedx-framework-core-preferences-getboxstringforkey-system-int32-system-string}

```csharp
public static string GetBoxStringForKey(int box, string key)
```

Gets a string preference for a specific `box` slot.

Parameters:

- `box`: Box slot index.
- `key`: Preference key.

Returns: Stored string value, or an empty string if missing.

### GetIntForKey(string key) {#m-cuttheropedx-framework-core-preferences-getintforkey-system-string}

```csharp
public static int GetIntForKey(string key)
```

Gets an integer preference. Returns 0 if not found.

Parameters:

- `key`: Preference key.

Returns: Stored integer value, or `0` if missing or not numeric.

### GetStringForKey(string key) {#m-cuttheropedx-framework-core-preferences-getstringforkey-system-string}

```csharp
public static string GetStringForKey(string key)
```

Gets a string preference. Returns empty string if not found.

Parameters:

- `key`: Preference key.

Returns: Stored string value, or an empty string if missing.

### IsDirectoryWritable(string path) {#m-cuttheropedx-framework-core-preferences-isdirectorywritable-system-string}

```csharp
private static bool IsDirectoryWritable(string path)
```

Tests whether a directory is writable by creating and deleting a temporary file.

Parameters:

- `path`: The directory path to test.

Returns: `true` if the directory is writable; otherwise, `false`.

### IsGameDataKey(string key) {#m-cuttheropedx-framework-core-preferences-isgamedatakey-system-string}

```csharp
private static bool IsGameDataKey(string key)
```

Returns `true` if `key` belongs to per-box game data (STARS_, SCORE_, UNLOCKED_).

Parameters:

- `key`: Preference key to inspect.

Returns: `true` if the `key` belongs to box-scoped game data; otherwise `false`.

### IsInsideMacAppBundle(string path) {#m-cuttheropedx-framework-core-preferences-isinsidemacappbundle-system-string}

```csharp
private static bool IsInsideMacAppBundle(string path)
```

Determines whether the given `path` is inside a macOS .app bundle. Checks for the standard bundle structure: *.app/Contents/MacOS/

Parameters:

- `path`: The path to check.

Returns: `true` if the `path` is inside a macOS .app bundle; otherwise, `false`.

### LoadFromStream(Stream stream) {#m-cuttheropedx-framework-core-preferences-loadfromstream-system-io-stream}

```csharp
public static bool LoadFromStream(Stream stream)
```

Deserializes all preferences from a JSON `stream` (global prefs only).

Parameters:

- `stream`: Source stream to read.

Returns: `true` if deserialization succeeded; otherwise `false`.

### LoadPreferences() {#m-cuttheropedx-framework-core-preferences-loadpreferences}

```csharp
public static void LoadPreferences()
```

Loads preferences from disk. Global prefs go to GlobalData; per-box game data goes to BoxData[b]. Old saves that mixed data in one file are routed automatically.

### MigrateOldSaveFiles(string oldDir, string newDir) {#m-cuttheropedx-framework-core-preferences-migrateoldsavefiles-system-string-system-string}

```csharp
private static void MigrateOldSaveFiles(string oldDir, string newDir)
```

Migrates save files from an old location to a new directory. Only moves files that exist in the old location and don't exist in the new location.

Parameters:

- `oldDir`: The old directory containing save files.
- `newDir`: The new directory to move save files to.

### RemoveBoxKey(int box, string key) {#m-cuttheropedx-framework-core-preferences-removeboxkey-system-int32-system-string}

```csharp
public static void RemoveBoxKey(int box, string key)
```

Removes a preference `key` from a specific `box` slot.

Parameters:

- `box`: Box slot index.
- `key`: Preference key to remove.

### RemoveKey(string key) {#m-cuttheropedx-framework-core-preferences-removekey-system-string}

```csharp
protected static void RemoveKey(string key)
```

Removes a global preference `key` from memory.

Parameters:

- `key`: Preference key to remove.

### RequestSave() {#m-cuttheropedx-framework-core-preferences-requestsave}

```csharp
public static void RequestSave()
```

Requests the preferences to be saved on the next Update call.

### SaveToStream(Stream stream) {#m-cuttheropedx-framework-core-preferences-savetostream-system-io-stream}

```csharp
public static bool SaveToStream(Stream stream)
```

Serializes all preferences to a JSON `stream` (global prefs only).

Parameters:

- `stream`: Destination stream to write.

Returns: `true` if serialization succeeded; otherwise `false`.

### SerializeToJson(Dictionary&lt;string, object&gt; data) {#m-cuttheropedx-framework-core-preferences-serializetojson-system-collections-generic-dictionary-system-string-system-object}

```csharp
private static string SerializeToJson(Dictionary<string, object> data)
```

Serializes a preferences dictionary to JSON string (AOT-safe).

Parameters:

- `data`: Dictionary to serialize.

Returns: JSON representation of the supplied dictionary.

### SetBooleanForKey(bool value, string key, bool commit = false) {#m-cuttheropedx-framework-core-preferences-setbooleanforkey-system-boolean-system-string-system-boolean}

```csharp
public static void SetBooleanForKey(bool value, string key, bool commit = false)
```

Sets a boolean preference and optionally saves to disk.

Parameters:

- `value`: Boolean value to store.
- `key`: Preference key.
- `commit`: `true` to request an immediate save; otherwise `false`.

### SetBoxBoolForKey(int box, bool value, string key, bool commit = false) {#m-cuttheropedx-framework-core-preferences-setboxboolforkey-system-int32-system-boolean-system-string-system-boolean}

```csharp
public static void SetBoxBoolForKey(int box, bool value, string key, bool commit = false)
```

Sets a boolean preference for a specific `box` slot and optionally requests a save.

Parameters:

- `box`: Box slot index.
- `value`: Boolean value to store.
- `key`: Preference key.
- `commit`: `true` to request an immediate save; otherwise `false`.

### SetBoxIntForKey(int box, int value, string key, bool commit = false) {#m-cuttheropedx-framework-core-preferences-setboxintforkey-system-int32-system-int32-system-string-system-boolean}

```csharp
public static void SetBoxIntForKey(int box, int value, string key, bool commit = false)
```

Sets an integer preference for a specific `box` slot and optionally requests a save.

Parameters:

- `box`: Box slot index.
- `value`: Integer value to store.
- `key`: Preference key.
- `commit`: `true` to request an immediate save; otherwise `false`.

### SetBoxStringForKey(int box, string value, string key, bool commit = false) {#m-cuttheropedx-framework-core-preferences-setboxstringforkey-system-int32-system-string-system-string-system-boolean}

```csharp
public static void SetBoxStringForKey(int box, string value, string key, bool commit = false)
```

Sets a string preference for a specific `box` slot and optionally requests a save.

Parameters:

- `box`: Box slot index.
- `value`: String value to store.
- `key`: Preference key.
- `commit`: `true` to request an immediate save; otherwise `false`.

### SetIntForKey(int value, string key, bool commit = false) {#m-cuttheropedx-framework-core-preferences-setintforkey-system-int32-system-string-system-boolean}

```csharp
public static void SetIntForKey(int value, string key, bool commit = false)
```

Sets an integer preference and optionally saves to disk.

Parameters:

- `value`: Integer value to store.
- `key`: Preference key.
- `commit`: `true` to request an immediate save; otherwise `false`.

### SetStringForKey(string value, string key, bool commit = false) {#m-cuttheropedx-framework-core-preferences-setstringforkey-system-string-system-string-system-boolean}

```csharp
public static void SetStringForKey(string value, string key, bool commit = false)
```

Sets a string preference and optionally saves to disk.

Parameters:

- `value`: String value to store.
- `key`: Preference key.
- `commit`: `true` to request an immediate save; otherwise `false`.

### TryCreateDirectory(string path) {#m-cuttheropedx-framework-core-preferences-trycreatedirectory-system-string}

```csharp
private static bool TryCreateDirectory(string path)
```

Attempts to create a directory and verifies it is writable.

Parameters:

- `path`: The directory path to create.

Returns: `true` if the directory exists and is writable; otherwise, `false`.

### TryParseBoxSlotFromFileName(string fileName, out int slot) {#m-cuttheropedx-framework-core-preferences-tryparseboxslotfromfilename-system-string-system-int32}

```csharp
private static bool TryParseBoxSlotFromFileName(string fileName, out int slot)
```

Attempts to parse a box `slot` index from a save file name.

Parameters:

- `fileName`: File name to parse.
- `slot`: Parsed slot index when successful.

Returns: `true` if the file name matches the expected `slot` pattern; otherwise `false`.

### TryReadJsonValue(string key, JsonElement element, out object parsedValue, out bool migratedBooleanValue) {#m-cuttheropedx-framework-core-preferences-tryreadjsonvalue-system-string-system-text-json-jsonelement-system-object-system-boolean}

```csharp
private static bool TryReadJsonValue(string key, JsonElement element, out object parsedValue, out bool migratedBooleanValue)
```

Attempts to parse a JSON value into one of the supported preference value types.

Parameters:

- `key`: Preference key associated with the JSON value.
- `element`: JSON element to parse.
- `parsedValue`: Parsed CLR value when successful.
- `migratedBooleanValue`: Whether numeric legacy data was migrated to a boolean value.

Returns: `true` if the value was parsed successfully; otherwise `false`.

### Update() {#m-cuttheropedx-framework-core-preferences-update}

```csharp
public static void Update()
```

Saves pending preferences to disk if requested. Called once per frame by the game loop.

### WritePreferenceFiles() {#m-cuttheropedx-framework-core-preferences-writepreferencefiles}

```csharp
private static void WritePreferenceFiles()
```

Writes the global preferences file and all current box-slot preference files to disk.

