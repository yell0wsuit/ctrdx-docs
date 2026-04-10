---
title: Class FfmpegRootPathResolver
description: Resolves the root path where FFmpeg libraries are located.
---

# Class FfmpegRootPathResolver

Namespace: `CutTheRopeDX.Framework.Media`

Assembly: `CutTheRope-DX.dll`

Source: `FfmpegRootPathResolver.cs`

Resolves the root path where FFmpeg libraries are located.

## Declaration

```csharp
internal static class FfmpegRootPathResolver
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FfmpegRootPathResolver](FfmpegRootPathResolver.md)

## Remarks

On Windows and Linux, FFmpeg libraries are bundled in the "ffmpeg" subfolder. On macOS, they are bundled in the "Frameworks" folder inside the app bundle.

## Methods

### GetCandidatePaths(string appBaseDirectory) {#m-cuttheropedx-framework-media-ffmpegrootpathresolver-getcandidatepaths-system-string}

```csharp
private static string[] GetCandidatePaths(string appBaseDirectory)
```

Gets the platform-specific candidate directories to search for FFmpeg libraries.

Parameters:

- `appBaseDirectory`: Base application directory used to build probe paths.

Returns: Candidate directories to probe for FFmpeg binaries.

### GetProbeLibrary() {#m-cuttheropedx-framework-media-ffmpegrootpathresolver-getprobelibrary}

```csharp
private static string GetProbeLibrary()
```

Gets a library name pattern to probe for FFmpeg presence.

Returns: A platform-specific library filename pattern.

### Resolve(string appBaseDirectory, Func&lt;string, bool&gt; directoryExists) {#m-cuttheropedx-framework-media-ffmpegrootpathresolver-resolve-system-string-system-func-system-string-system-boolean}

```csharp
public static string Resolve(string appBaseDirectory, Func<string, bool> directoryExists)
```

Searches for FFmpeg libraries in known locations and returns the first valid path.

Parameters:

- `appBaseDirectory`: The application's base directory.
- `directoryExists`: Function to check if a directory exists.

Returns: The path to the directory containing FFmpeg libraries, or `null` if not found.

