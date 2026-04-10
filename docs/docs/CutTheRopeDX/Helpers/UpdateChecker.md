---
title: Class UpdateChecker
description: Handles background checks for newer releases on GitHub.
---

# Class UpdateChecker

Namespace: `CutTheRopeDX.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `UpdateChecker.cs`

Handles background checks for newer releases on GitHub.

## Declaration

```csharp
internal static class UpdateChecker
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [UpdateChecker](UpdateChecker.md)

## Fields

### Http {#f-cuttheropedx-helpers-updatechecker-http}

```csharp
private static readonly HttpClient Http
```

Shared HTTP client for update checks.

### LatestReleaseUrl {#f-cuttheropedx-helpers-updatechecker-latestreleaseurl}

```csharp
private const string LatestReleaseUrl
```

GitHub API endpoint for the latest release.

### ReleasesPageUrl {#f-cuttheropedx-helpers-updatechecker-releasespageurl}

```csharp
private const string ReleasesPageUrl
```

Fallback release page when API url is missing.

### consumed {#f-cuttheropedx-helpers-updatechecker-consumed}

```csharp
private static int consumed
```

Ensures update info is consumed at most once.

### cts {#f-cuttheropedx-helpers-updatechecker-cts}

```csharp
private static readonly CancellationTokenSource cts
```

Cancellation token source for the update request.

### started {#f-cuttheropedx-helpers-updatechecker-started}

```csharp
private static int started
```

Ensures the update check only starts once per session.

### updateInfo {#f-cuttheropedx-helpers-updatechecker-updateinfo}

```csharp
private static UpdateChecker.UpdateInfo updateInfo
```

Latest update info fetched from the server.

## Methods

### Cancel() {#m-cuttheropedx-helpers-updatechecker-cancel}

```csharp
public static void Cancel()
```

Cancels any in-flight update check requests.

### FetchLatestReleaseAsync(string currentVersionString, CancellationToken cancellationToken) {#m-cuttheropedx-helpers-updatechecker-fetchlatestreleaseasync-system-string-system-threading-cancellationtoken}

```csharp
private static async Task<UpdateChecker.UpdateInfo> FetchLatestReleaseAsync(string currentVersionString, CancellationToken cancellationToken)
```

Fetches the latest GitHub release and returns update info when newer than current.

Parameters:

- `currentVersionString`: The current version string used for comparison.
- `cancellationToken`: Token used to cancel the HTTP request.

Returns: Update information when a newer release exists; otherwise `null`.

### GetCurrentVersionString() {#m-cuttheropedx-helpers-updatechecker-getcurrentversionstring}

```csharp
private static string GetCurrentVersionString()
```

Gets the current assembly informational version string.

Returns: The current assembly version string.

### IsDirtyVersion(string version) {#m-cuttheropedx-helpers-updatechecker-isdirtyversion-system-string}

```csharp
public static bool IsDirtyVersion(string version)
```

Determines if the version string represents a dirty/dev build.

Parameters:

- `version`: The version to check.

Returns: `true` when the version indicates a dirty/dev build; otherwise `false`.

### StartIfNeeded() {#m-cuttheropedx-helpers-updatechecker-startifneeded}

```csharp
public static void StartIfNeeded()
```

Starts the update check in the background if enabled and not already started.

### TryConsumeUpdate(out UpdateChecker.UpdateInfo info) {#m-cuttheropedx-helpers-updatechecker-tryconsumeupdate-cuttheropedx-helpers-updatechecker-updateinfo}

```csharp
public static bool TryConsumeUpdate(out UpdateChecker.UpdateInfo info)
```

Attempts to consume the latest update info once.

Parameters:

- `info`: Receives the update info if available.

Returns: `true` if update info was available and consumed; otherwise `false`.

### TryParseVersion(string input, out Version version) {#m-cuttheropedx-helpers-updatechecker-tryparseversion-system-string-system-version}

```csharp
private static bool TryParseVersion(string input, out Version version)
```

Attempts to parse a semantic version from a tag or version string.

Parameters:

- `input`: The input tag or version string.
- `version`: The parsed version when successful.

Returns: `true` when parsing succeeded; otherwise `false`.

