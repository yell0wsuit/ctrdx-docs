---
title: Class Resources
description: Centralized string constants for content assets grouped by type to simplify resource lookups.
---

# Class Resources

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Resources.cs`

Centralized string constants for content assets grouped by type to simplify resource lookups.

## Declaration

```csharp
internal static class Resources
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [Resources](Resources.md)

## Fields

### backgroundImgNames_ {#f-cuttheropedx-gamemain-resources-backgroundimgnames}

```csharp
private static HashSet<string> backgroundImgNames_
```

Cached background image resource names.

### fontNames_ {#f-cuttheropedx-gamemain-resources-fontnames}

```csharp
private static HashSet<string> fontNames_
```

Cached font resource names.

### imageNames_ {#f-cuttheropedx-gamemain-resources-imagenames}

```csharp
private static HashSet<string> imageNames_
```

Cached atlas image resource names.

### musicNames_ {#f-cuttheropedx-gamemain-resources-musicnames}

```csharp
private static HashSet<string> musicNames_
```

Cached music resource names.

### soundFieldNames_ {#f-cuttheropedx-gamemain-resources-soundfieldnames}

```csharp
private static Dictionary<string, string> soundFieldNames_
```

Cached map from sound constant identifiers to sound resource names.

### soundNames_ {#f-cuttheropedx-gamemain-resources-soundnames}

```csharp
private static HashSet<string> soundNames_
```

Cached sound resource names.

## Methods

### InitializeBackgroundImgNames() {#m-cuttheropedx-gamemain-resources-initializebackgroundimgnames}

```csharp
private static void InitializeBackgroundImgNames()
```

Initializes the cached background image resource name set.

### InitializeFontNames() {#m-cuttheropedx-gamemain-resources-initializefontnames}

```csharp
private static void InitializeFontNames()
```

Initializes the cached font resource name set.

### InitializeImageNames() {#m-cuttheropedx-gamemain-resources-initializeimagenames}

```csharp
private static void InitializeImageNames()
```

Initializes the cached atlas image resource name set.

### InitializeMusicNames() {#m-cuttheropedx-gamemain-resources-initializemusicnames}

```csharp
private static void InitializeMusicNames()
```

Initializes the cached music resource name set.

### InitializeSoundNames() {#m-cuttheropedx-gamemain-resources-initializesoundnames}

```csharp
private static void InitializeSoundNames()
```

Initializes cached sound resource names and sound identifier mapping.

### IsBackgroundImg(string resourceName) {#m-cuttheropedx-gamemain-resources-isbackgroundimg-system-string}

```csharp
public static bool IsBackgroundImg(string resourceName)
```

Checks if a resource name is a background image. Background images are loaded without JSON atlas files.

Parameters:

- `resourceName`: Resource name to check.

Returns: `true` when the resource name is a known background image; otherwise, `false`.

### IsFont(string resourceName) {#m-cuttheropedx-gamemain-resources-isfont-system-string}

```csharp
public static bool IsFont(string resourceName)
```

Checks if a resource name is a font.

Parameters:

- `resourceName`: Resource name to check.

Returns: `true` when the resource name is a known font; otherwise, `false`.

### IsImage(string resourceName) {#m-cuttheropedx-gamemain-resources-isimage-system-string}

```csharp
public static bool IsImage(string resourceName)
```

Checks if a resource name is an image.

Parameters:

- `resourceName`: Resource name to check.

Returns: `true` when the resource name is a known image or background image; otherwise, `false`.

### IsMusic(string resourceName) {#m-cuttheropedx-gamemain-resources-ismusic-system-string}

```csharp
public static bool IsMusic(string resourceName)
```

Checks if a resource name is music.

Parameters:

- `resourceName`: Resource name to check.

Returns: `true` when the resource name is known music; otherwise, `false`.

### IsSound(string resourceName) {#m-cuttheropedx-gamemain-resources-issound-system-string}

```csharp
public static bool IsSound(string resourceName)
```

Checks if a resource name is a sound.

Parameters:

- `resourceName`: Resource name to check.

Returns: `true` when the resource name is a known sound; otherwise, `false`.

### IsValidResourceName(string resourceName) {#m-cuttheropedx-gamemain-resources-isvalidresourcename-system-string}

```csharp
public static bool IsValidResourceName(string resourceName)
```

Checks if a resource name is valid (exists in Resources.cs).

Parameters:

- `resourceName`: Resource name to check.

Returns: `true` when the resource name is known; otherwise, `false`.

### NameMapFrom(Type type) {#m-cuttheropedx-gamemain-resources-namemapfrom-system-type}

```csharp
private static Dictionary<string, string> NameMapFrom(Type type)
```

Builds a map from literal public field names to resource values on a catalog type.

Parameters:

- `type`: Catalog type to inspect.

Returns: A map of field names to resource values declared on `type`.

### NamesFrom(Type type) {#m-cuttheropedx-gamemain-resources-namesfrom-system-type}

```csharp
private static HashSet<string> NamesFrom(Type type)
```

Builds a set of resource values from literal public fields on a catalog type.

Parameters:

- `type`: Catalog type to inspect.

Returns: The resource values declared on `type`.

### TryResolveSoundIdentifier(string soundIdentifier, out string soundResourceName) {#m-cuttheropedx-gamemain-resources-tryresolvesoundidentifier-system-string-system-string}

```csharp
public static bool TryResolveSoundIdentifier(string soundIdentifier, out string soundResourceName)
```

Resolves a sound identifier such as MonsterExcited to the underlying resource name. Accepts either the constant identifier or the resource value.

Parameters:

- `soundIdentifier`: Sound constant identifier or resource name to resolve.
- `soundResourceName`: Resolved sound resource name when this method returns `true`.

Returns: `true` when the identifier maps to a known sound; otherwise, `false`.

