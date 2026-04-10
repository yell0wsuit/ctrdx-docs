---
title: Class FingerTraceFactory
description: Factory for finger trace skin instances.
---

# Class FingerTraceFactory

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FingerTraceFactory.cs`

Factory for finger trace skin instances.

## Declaration

```csharp
internal static class FingerTraceFactory
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FingerTraceFactory](FingerTraceFactory.md)

## Fields

### TotalTraceSkins {#f-cuttheropedx-gamemain-fingertracefactory-totaltraceskins}

```csharp
public const int TotalTraceSkins
```

Total number of selectable finger trace skins.

## Methods

### Create(int traceIndex) {#m-cuttheropedx-gamemain-fingertracefactory-create-system-int32}

```csharp
public static FingerTrace Create(int traceIndex)
```

Creates a finger trace instance for a selected trace skin.

Parameters:

- `traceIndex`: Trace skin index.

Returns: The finger trace for the requested skin index, or the classic trace for unknown indices.

