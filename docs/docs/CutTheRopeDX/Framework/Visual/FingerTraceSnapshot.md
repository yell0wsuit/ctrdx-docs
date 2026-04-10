---
title: Class FingerTraceSnapshot
description: Immutable view of a trace after it has built its current sampled path and sprite list.
---

# Class FingerTraceSnapshot

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `FingerTrace.cs`

Immutable view of a trace after it has built its current sampled path and sprite list.

## Declaration

```csharp
internal sealed class FingerTraceSnapshot
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FingerTraceSnapshot](FingerTraceSnapshot.md)

## Constructors

### FingerTraceSnapshot(IReadOnlyList&lt;Vector&gt; sampledPoints, IReadOnlyList&lt;FingerTraceSpritePose&gt; sprites) {#m-cuttheropedx-framework-visual-fingertracesnapshot-ctor-system-collections-generic-ireadonlylist-cuttheropedx-framework-core-vector-system-collections-generic-ireadonlylist-cuttheropedx-framework-visual-fingertracespritepose}

```csharp
public FingerTraceSnapshot(IReadOnlyList<Vector> sampledPoints, IReadOnlyList<FingerTraceSpritePose> sprites)
```

Immutable view of a trace after it has built its current sampled path and sprite list.

## Properties

### SampledPoints {#p-cuttheropedx-framework-visual-fingertracesnapshot-sampledpoints}

```csharp
public IReadOnlyList<Vector> SampledPoints { get; }
```

Gets the sampled path points used for previewing or testing the current trace state.

### Sprites {#p-cuttheropedx-framework-visual-fingertracesnapshot-sprites}

```csharp
public IReadOnlyList<FingerTraceSpritePose> Sprites { get; }
```

Gets the sprites emitted by the trace for the current frame.

