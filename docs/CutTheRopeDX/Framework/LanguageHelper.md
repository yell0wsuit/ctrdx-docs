---
title: Class LanguageHelper
description: Centralized utility for language-related conversions and current language state.
---

# Class LanguageHelper

Namespace: `CutTheRopeDX.Framework`

Assembly: `CutTheRope-DX.dll`

Source: `LanguageHelper.cs`

Centralized utility for language-related conversions and current language state.

## Declaration

```csharp
public static class LanguageHelper
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [LanguageHelper](LanguageHelper.md)

## Fields

### uiLanguageCodes {#f-cuttheropedx-framework-languagehelper-uilanguagecodes}

```csharp
private static readonly string[] uiLanguageCodes
```

Language codes available in the UI language selector.

## Properties

### Current {#p-cuttheropedx-framework-languagehelper-current}

```csharp
public static Language Current { get; set; }
```

Gets or sets the current language setting.

### CurrentAsInt {#p-cuttheropedx-framework-languagehelper-currentasint}

```csharp
public static int CurrentAsInt { get; }
```

Gets the current language as its integer enum value.

### CurrentCode {#p-cuttheropedx-framework-languagehelper-currentcode}

```csharp
public static string CurrentCode { get; }
```

Gets the current language as the game's language code (for example: `en`, `pt_br`, `zh_tw`).

### UiLanguageCodes {#p-cuttheropedx-framework-languagehelper-uilanguagecodes}

```csharp
public static IReadOnlyList<string> UiLanguageCodes { get; }
```

Gets the list of language codes available in the UI.

## Methods

### FromCode(string code) {#m-cuttheropedx-framework-languagehelper-fromcode-system-string}

```csharp
public static Language FromCode(string code)
```

Converts a game language `code` to a [Language](Language.md) value. Returns [LANGEN](Language.md#f-cuttheropedx-framework-language-langen) for unrecognized codes.

Parameters:

- `code`: Language code to convert.

Returns: The corresponding [Language](Language.md) value.

### FromSystemCulture() {#m-cuttheropedx-framework-languagehelper-fromsystemculture}

```csharp
public static Language FromSystemCulture()
```

Detects the appropriate Language from the system's current culture.

Returns: A supported [Language](Language.md) inferred from the current system culture.

### GetLanguageDisplayName(string code) {#m-cuttheropedx-framework-languagehelper-getlanguagedisplayname-system-string}

```csharp
public static string GetLanguageDisplayName(string code)
```

Gets the English display name for a language `code` (e.g. "ru" → "Russian").

Parameters:

- `code`: Language code to look up.

Returns: The English display name for `code`, or the input code when unknown.

### GetNextUiLanguageCode(string currentCode) {#m-cuttheropedx-framework-languagehelper-getnextuilanguagecode-system-string}

```csharp
public static string GetNextUiLanguageCode(string currentCode)
```

Gets the next language code in the UI cycle.

Parameters:

- `currentCode`: Current language code.

Returns: The next UI language code, or the first entry when `currentCode` is not found.

### IsCurrent(Language language) {#m-cuttheropedx-framework-languagehelper-iscurrent-cuttheropedx-framework-language}

```csharp
public static bool IsCurrent(Language language)
```

Checks if the given `language` matches the current language.

Parameters:

- `language`: Language to check.

Returns: `true` when `language` equals [Current](#p-cuttheropedx-framework-languagehelper-current).

### IsCurrentAny(params Language[] languages) {#m-cuttheropedx-framework-languagehelper-iscurrentany-cuttheropedx-framework-language}

```csharp
public static bool IsCurrentAny(params Language[] languages)
```

Checks if the current language matches any of the given `languages`.

Parameters:

- `languages`: Languages to check against.

Returns: `true` when any provided language equals [Current](#p-cuttheropedx-framework-languagehelper-current).

### IsUiLanguage(Language language) {#m-cuttheropedx-framework-languagehelper-isuilanguage-cuttheropedx-framework-language}

```csharp
public static bool IsUiLanguage(Language language)
```

Checks if the given `language` is available in the UI.

Parameters:

- `language`: Language to check.

Returns: `true` when the language is present in the UI language list.

### IsUiLanguageCode(string code) {#m-cuttheropedx-framework-languagehelper-isuilanguagecode-system-string}

```csharp
public static bool IsUiLanguageCode(string code)
```

Checks if the given language `code` is available in the UI.

Parameters:

- `code`: Language code to check.

Returns: `true` when `code` is present in the UI language list.

### ToCode(Language language) {#m-cuttheropedx-framework-languagehelper-tocode-cuttheropedx-framework-language}

```csharp
public static string ToCode(Language language)
```

Converts `language` to the game's language code.

Parameters:

- `language`: Language to convert.

Returns: The game language code for `language`.

