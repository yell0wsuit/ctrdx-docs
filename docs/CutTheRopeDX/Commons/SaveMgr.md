---
title: Class SaveMgr
description: Manages save-data backup and restore operations.
---

# Class SaveMgr

Namespace: `CutTheRopeDX.Commons`

Assembly: `CutTheRope-DX.dll`

Source: `SaveMgr.cs`

Manages save-data backup and restore operations.

## Declaration

```csharp
internal sealed class SaveMgr
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [SaveMgr](SaveMgr.md)

## Remarks

No-op code, leftover from mobile version.

## Methods

### Backup() {#m-cuttheropedx-commons-savemgr-backup}

```csharp
public static void Backup()
```

Creates a backup of the current save data.

### IsSaveAvailable() {#m-cuttheropedx-commons-savemgr-issaveavailable}

```csharp
public static bool IsSaveAvailable()
```

Returns whether a saved backup exists and can be restored.

Returns: `true` when a recoverable save exists; otherwise `false`.

### Restore() {#m-cuttheropedx-commons-savemgr-restore}

```csharp
public static void Restore()
```

Restores save data from a previous backup.

