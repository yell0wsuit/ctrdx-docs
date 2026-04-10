---
title: Struct TraceSegment
description: Represents a single live trace segment with a `start` point, `end` point, and remaining lifetime.
---

# Struct TraceSegment

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `FingerTrace.cs`

Represents a single live trace segment with a `start` point, `end` point, and remaining lifetime.

## Declaration

```csharp
internal sealed struct TraceSegment
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [TraceSegment](TraceSegment.md)

## Constructors

### TraceSegment(Vector start, Vector end, float life) {#m-cuttheropedx-framework-visual-tracesegment-ctor-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single}

```csharp
public TraceSegment(Vector start, Vector end, float life)
```

Represents a single live trace segment with a `start` point, `end` point, and remaining lifetime.

## Fields

### End {#f-cuttheropedx-framework-visual-tracesegment-end}

```csharp
public Vector End
```

Segment end point in world space.

### Life {#f-cuttheropedx-framework-visual-tracesegment-life}

```csharp
public float Life
```

Remaining segment lifetime in seconds.

### Start {#f-cuttheropedx-framework-visual-tracesegment-start}

```csharp
public Vector Start
```

Segment start point in world space.

