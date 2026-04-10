---
title: Class ContentPaths
description: Centralized content path management.
---

# Class ContentPaths

Namespace: `CutTheRopeDX.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `ContentPaths.cs`

Centralized content path management.

## Declaration

```csharp
internal static class ContentPaths
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ContentPaths](ContentPaths.md)

## Fields

### AnimationsDirectory {#f-cuttheropedx-helpers-contentpaths-animationsdirectory}

```csharp
public static readonly string AnimationsDirectory
```

Subdirectory for flash animation JSON files.

### BackgroundsDirectory {#f-cuttheropedx-helpers-contentpaths-backgroundsdirectory}

```csharp
public static readonly string BackgroundsDirectory
```

The subdirectory for background images without JSON atlas.

### FontsDirectory {#f-cuttheropedx-helpers-contentpaths-fontsdirectory}

```csharp
public const string FontsDirectory
```

The subdirectory for font files.

### ImagesDirectory {#f-cuttheropedx-helpers-contentpaths-imagesdirectory}

```csharp
public const string ImagesDirectory
```

The subdirectory for texture images (JSON+PNG pairs).

### MapsDirectory {#f-cuttheropedx-helpers-contentpaths-mapsdirectory}

```csharp
public const string MapsDirectory
```

The subdirectory for level files.

### RootDirectory {#f-cuttheropedx-helpers-contentpaths-rootdirectory}

```csharp
public const string RootDirectory
```

The root content directory name.

### SoundsDirectory {#f-cuttheropedx-helpers-contentpaths-soundsdirectory}

```csharp
public const string SoundsDirectory
```

The subdirectory for music files.

### SoundsSfxDirectory {#f-cuttheropedx-helpers-contentpaths-soundssfxdirectory}

```csharp
public const string SoundsSfxDirectory
```

The subdirectory for sound effects.

### StringsDirectory {#f-cuttheropedx-helpers-contentpaths-stringsdirectory}

```csharp
public const string StringsDirectory
```

The directory containing per-language localization JSON files.

### VideoDirectory {#f-cuttheropedx-helpers-contentpaths-videodirectory}

```csharp
public const string VideoDirectory
```

The subdirectory for SD video files.

### VideoExtension {#f-cuttheropedx-helpers-contentpaths-videoextension}

```csharp
public const string VideoExtension
```

The video file extension.

### VideoHdDirectory {#f-cuttheropedx-helpers-contentpaths-videohddirectory}

```csharp
public const string VideoHdDirectory
```

The subdirectory for HD video files.

## Methods

### GetAnimationXmlAbsolutePath(string fileName) {#m-cuttheropedx-helpers-contentpaths-getanimationxmlabsolutepath-system-string}

```csharp
public static string GetAnimationXmlAbsolutePath(string fileName)
```

Gets the absolute filesystem path to a flash animation XML file.

Parameters:

- `fileName`: The XML file name, including extension.

Returns: The absolute path to the animation XML file.

### GetBackgroundImageContentPath(string resourceName) {#m-cuttheropedx-helpers-contentpaths-getbackgroundimagecontentpath-system-string}

```csharp
public static string GetBackgroundImageContentPath(string resourceName)
```

Gets the ContentManager-relative path to a background image resource. Use for ContentManager.Load which already has "content" as root.

Parameters:

- `resourceName`: The resource name (e.g., "bgr_01_p1")

Returns: The relative path from content root (e.g., "backgrounds/bgr_01_p1")

### GetContentPath(string relativePath) {#m-cuttheropedx-helpers-contentpaths-getcontentpath-system-string}

```csharp
public static string GetContentPath(string relativePath)
```

Gets the full path to a content file, including the root directory.

Parameters:

- `relativePath`: The relative path from the content root (e.g., "maps/1_1.xml")

Returns: The full content path (e.g., "content/maps/1_1.xml")

### GetContentRootAbsolute() {#m-cuttheropedx-helpers-contentpaths-getcontentrootabsolute}

```csharp
public static string GetContentRootAbsolute()
```

Gets the absolute path to the content root directory for the current runtime context.

Returns: The absolute content root path for the active platform/runtime.

### GetFontPath(string fileName) {#m-cuttheropedx-helpers-contentpaths-getfontpath-system-string}

```csharp
public static string GetFontPath(string fileName)
```

Gets the full path to a font file.

Parameters:

- `fileName`: The font filename

Returns: The full path to the font file (e.g., "content/fonts/fontname.ttf")

### GetImageContentPath(string resourceName) {#m-cuttheropedx-helpers-contentpaths-getimagecontentpath-system-string}

```csharp
public static string GetImageContentPath(string resourceName)
```

Gets the ContentManager-relative path to a texture image resource. Use for ContentManager.Load which already has "content" as root.

Parameters:

- `resourceName`: The resource name (e.g., "obj_ghost" or "candies/obj_candy_02")

Returns: The relative path from content root (e.g., "images/obj_ghost")

### GetImagePath(string resourceName, string extension) {#m-cuttheropedx-helpers-contentpaths-getimagepath-system-string-system-string}

```csharp
public static string GetImagePath(string resourceName, string extension)
```

Gets the full path to a texture image resource (JSON or PNG). Use for TitleContainer.OpenStream and direct file access.

Parameters:

- `resourceName`: The resource name (e.g., "obj_ghost" or "candies/obj_candy_02")
- `extension`: The file extension (e.g., ".json" or ".png")

Returns: The full path to the image file (e.g., "content/images/obj_ghost.json")

### GetMapPath(string mapFileName) {#m-cuttheropedx-helpers-contentpaths-getmappath-system-string}

```csharp
public static string GetMapPath(string mapFileName)
```

Gets the path to a level file.

Parameters:

- `mapFileName`: The level filename (e.g., "1_1.xml")

Returns: The full path to the level file

### GetMusicPath(string fileName) {#m-cuttheropedx-helpers-contentpaths-getmusicpath-system-string}

```csharp
public static string GetMusicPath(string fileName)
```

Gets the path to a music file.

Parameters:

- `fileName`: The music filename

Returns: The relative path to the music file (e.g., "sounds/menu_music")

### GetSoundEffectPath(string fileName) {#m-cuttheropedx-helpers-contentpaths-getsoundeffectpath-system-string}

```csharp
public static string GetSoundEffectPath(string fileName)
```

Gets the path to a sound effect file.

Parameters:

- `fileName`: The sound effect filename

Returns: The relative path to the sound effect file (e.g., "sounds/sfx/tap")

### GetStringsFullPath(string languageCode) {#m-cuttheropedx-helpers-contentpaths-getstringsfullpath-system-string}

```csharp
public static string GetStringsFullPath(string languageCode)
```

Gets the full path to a per-language localization JSON file.

Parameters:

- `languageCode`: Language code used to resolve the strings file.

Returns: The full path to the requested localization file.

### GetStringsPath(string languageCode) {#m-cuttheropedx-helpers-contentpaths-getstringspath-system-string}

```csharp
public static string GetStringsPath(string languageCode)
```

Gets the path to a per-language localization JSON file.

Parameters:

- `languageCode`: The language code (e.g., "en", "ru")

Returns: The relative path (e.g., "strings/en.json")

### GetVideoPath(string fileName) {#m-cuttheropedx-helpers-contentpaths-getvideopath-system-string}

```csharp
public static string GetVideoPath(string fileName)
```

Gets the path to an HD video file.

Parameters:

- `fileName`: The video filename without extension

Returns: The relative path to the video file

### LoadXml(string fileName) {#m-cuttheropedx-helpers-contentpaths-loadxml-system-string}

```csharp
public static XElement LoadXml(string fileName)
```

Loads an XML file from the content directory and returns the root element. Returns `null` on failure or if `fileName` is empty.

Parameters:

- `fileName`: Relative file name under the content root.

Returns: The root XML element, or `null` when loading fails.

