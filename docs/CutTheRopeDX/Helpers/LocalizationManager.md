---
title: Class LocalizationManager
description: Manages JSON-based localization strings loaded from per-language files.
---

# Class LocalizationManager

Namespace: `CutTheRopeDX.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `LocalizationManager.cs`

Manages JSON-based localization strings loaded from per-language files.

## Declaration

```csharp
internal static class LocalizationManager
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [LocalizationManager](LocalizationManager.md)

## Fields

### langStringsLock_ {#f-cuttheropedx-helpers-localizationmanager-langstringslock}

```csharp
private static readonly Lock langStringsLock_
```

Lock protecting concurrent access to [langStrings_](#f-cuttheropedx-helpers-localizationmanager-langstrings).

### langStrings_ {#f-cuttheropedx-helpers-localizationmanager-langstrings}

```csharp
private static readonly Dictionary<string, Dictionary<string, string>> langStrings_
```

Per-language localized strings storage. Structure: languageCode -> (stringKey -> localizedText)

## Methods

### ClearCache() {#m-cuttheropedx-helpers-localizationmanager-clearcache}

```csharp
public static void ClearCache()
```

Clears the cached strings, forcing a reload on next access.

### EnsureLoaded() {#m-cuttheropedx-helpers-localizationmanager-ensureloaded}

```csharp
public static void EnsureLoaded()
```

Ensures localization strings are loaded for English and the current language.

### GetLanguageStrings(string languageCode) {#m-cuttheropedx-helpers-localizationmanager-getlanguagestrings-system-string}

```csharp
private static Dictionary<string, string> GetLanguageStrings(string languageCode)
```

Returns the cached string dictionary for the given language, loading it from disk if necessary.

Parameters:

- `languageCode`: The language code to retrieve.

Returns: The cached or newly loaded string dictionary for the requested language.

### GetString(string key, string languageCode) {#m-cuttheropedx-helpers-localizationmanager-getstring-system-string-system-string}

```csharp
public static string GetString(string key, string languageCode)
```

Gets a localized string for the given key and language.

Parameters:

- `key`: The string key (e.g., `PLAY`, `OPTIONS`)
- `languageCode`: The language code (e.g., `en`, `ru`, `de`, `fr`)

Returns: The localized string, or empty string if not found.

### GetString(string key) {#m-cuttheropedx-helpers-localizationmanager-getstring-system-string}

```csharp
public static string GetString(string key)
```

Gets a localized string for the given key using the current language.

Parameters:

- `key`: The string key (e.g., "PLAY", "OPTIONS")

Returns: The localized string, or empty string if not found.

### HasString(string key) {#m-cuttheropedx-helpers-localizationmanager-hasstring-system-string}

```csharp
public static bool HasString(string key)
```

Checks if a string key exists in the localization data.

Parameters:

- `key`: The string key to look up.

Returns: `true` when the key exists in the current language or English fallback; otherwise `false`.

### LoadLanguageFile(string languageCode) {#m-cuttheropedx-helpers-localizationmanager-loadlanguagefile-system-string}

```csharp
private static Dictionary<string, string> LoadLanguageFile(string languageCode)
```

Loads and parses a localization JSON file for the given language.

Parameters:

- `languageCode`: The language code (e.g., "en", "ru").

Returns: A dictionary containing all parsed localized strings for the language.

### OpenStream(string fileName) {#m-cuttheropedx-helpers-localizationmanager-openstream-system-string}

```csharp
private static Stream OpenStream(string fileName)
```

Opens a content stream for the given file name, returning `null` on failure.

Parameters:

- `fileName`: Relative path within the content root.

Returns: An open content stream, or `null` if opening fails.

