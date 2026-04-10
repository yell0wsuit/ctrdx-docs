---
title: Class DateTimeJavaHelper
description: Provides Java-style time helpers for desktop code paths.
---

# Class DateTimeJavaHelper

Namespace: `CutTheRopeDX.Desktop`

Assembly: `CutTheRope-DX.dll`

Source: `DateTimeJavaHelper.cs`

Provides Java-style time helpers for desktop code paths.

## Declaration

```csharp
public static class DateTimeJavaHelper
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [DateTimeJavaHelper](DateTimeJavaHelper.md)

## Remarks

TODO: replace with `DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()`

## Fields

### Jan1st1970 {#f-cuttheropedx-desktop-datetimejavahelper-jan1st1970}

```csharp
private static readonly DateTime Jan1st1970
```

The Unix epoch used by [CurrentTimeMillis](#m-cuttheropedx-desktop-datetimejavahelper-currenttimemillis).

## Methods

### CurrentTimeMillis() {#m-cuttheropedx-desktop-datetimejavahelper-currenttimemillis}

```csharp
public static long CurrentTimeMillis()
```

Returns the current UTC time as Unix time in milliseconds.

Returns: The current UTC time in milliseconds since January 1, 1970.

