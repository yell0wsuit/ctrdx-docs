---
title: Class MechanicalHandClaw
description: Visual claw node attached to the end of a mechanical hand segment chain. Draws idle/active body and active fingers in separate passes.
---

# Class MechanicalHandClaw

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MechanicalHandClaw.cs`

Visual claw node attached to the end of a mechanical hand segment chain. Draws idle/active body and active fingers in separate passes.

## Declaration

```csharp
internal sealed class MechanicalHandClaw : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [MechanicalHandClaw](MechanicalHandClaw.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### MechanicalHandClaw() {#m-cuttheropedx-gamemain-mechanicalhandclaw-ctor}

```csharp
public MechanicalHandClaw()
```

Initializes claw sprites for idle, active body, and active fingers.

## Fields

### clawActive {#f-cuttheropedx-gamemain-mechanicalhandclaw-clawactive}

```csharp
public Image clawActive
```

Active claw body visual.

### clawActiveFingers {#f-cuttheropedx-gamemain-mechanicalhandclaw-clawactivefingers}

```csharp
public Image clawActiveFingers
```

Active claw fingers overlay visual.

### clawIdle {#f-cuttheropedx-gamemain-mechanicalhandclaw-clawidle}

```csharp
public Image clawIdle
```

Idle claw visual.

### mechanicalHand {#f-cuttheropedx-gamemain-mechanicalhandclaw-mechanicalhand}

```csharp
private MechanicalHand mechanicalHand
```

Cached owning mechanical hand.

### prevSegments {#f-cuttheropedx-gamemain-mechanicalhandclaw-prevsegments}

```csharp
public int prevSegments
```

Number of previous parent segments to walk when resolving the owning hand.

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-mechanicalhandclaw-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-mechanicalhandclaw-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawActiveHand() {#m-cuttheropedx-gamemain-mechanicalhandclaw-drawactivehand}

```csharp
public void DrawActiveHand()
```

Draws the active claw body pass for the currently grabbing hand.

### DrawFingers() {#m-cuttheropedx-gamemain-mechanicalhandclaw-drawfingers}

```csharp
public void DrawFingers()
```

Draws the active fingers overlay pass with inherited segment transforms.

### EnsureHandReference() {#m-cuttheropedx-gamemain-mechanicalhandclaw-ensurehandreference}

```csharp
private void EnsureHandReference()
```

Caches the owning mechanical hand reference when it has not been resolved yet.

### TheHand() {#m-cuttheropedx-gamemain-mechanicalhandclaw-thehand}

```csharp
public MechanicalHand TheHand()
```

Resolves the owning mechanical hand by walking up the segment chain.

Returns: Owning hand instance, or `null` when detached.

### Update(float delta) {#m-cuttheropedx-gamemain-mechanicalhandclaw-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

