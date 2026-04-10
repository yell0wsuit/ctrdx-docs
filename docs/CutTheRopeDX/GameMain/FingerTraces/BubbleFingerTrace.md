---
title: Class BubbleFingerTrace
description: CTR2-style bubble finger trace with floating bubble particles that decelerate radially.
---

# Class BubbleFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `BubbleFingerTrace.cs`

CTR2-style bubble finger trace with floating bubble particles that decelerate radially.

## Declaration

```csharp
internal sealed class BubbleFingerTrace : ParticleFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [BubbleFingerTrace](BubbleFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### BubbleFingerTrace() {#m-cuttheropedx-gamemain-fingertraces-bubblefingertrace-ctor}

```csharp
public BubbleFingerTrace()
```

Initializes a bubble finger trace.

## Methods

### AppendSampledPoints(List&lt;Vector&gt; sampledPoints) {#m-cuttheropedx-gamemain-fingertraces-bubblefingertrace-appendsampledpoints-system-collections-generic-list-cuttheropedx-framework-core-vector}

```csharp
protected override void AppendSampledPoints(List<Vector> sampledPoints)
```

Appends the trace-specific sampled path into `sampledPoints`.

Parameters:

- `sampledPoints`: The destination list that receives the sampled path points.

