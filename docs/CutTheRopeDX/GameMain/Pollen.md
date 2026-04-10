---
title: Struct Pollen
description: Runtime state for one animated pollen particle.
---

# Struct Pollen

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Pollen.cs`

Runtime state for one animated pollen particle.

## Declaration

```csharp
internal sealed struct Pollen
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [Pollen](Pollen.md)

## Fields

### alpha {#f-cuttheropedx-gamemain-pollen-alpha}

```csharp
public float alpha
```

Current particle alpha.

### endAlpha {#f-cuttheropedx-gamemain-pollen-endalpha}

```csharp
public float endAlpha
```

Current target alpha.

### endScaleX {#f-cuttheropedx-gamemain-pollen-endscalex}

```csharp
public float endScaleX
```

Current target scale on the horizontal axis.

### endScaleY {#f-cuttheropedx-gamemain-pollen-endscaley}

```csharp
public float endScaleY
```

Current target scale on the vertical axis.

### parentIndex {#f-cuttheropedx-gamemain-pollen-parentindex}

```csharp
public int parentIndex
```

Path point index that owns or originated this pollen particle.

### scaleX {#f-cuttheropedx-gamemain-pollen-scalex}

```csharp
public float scaleX
```

Current horizontal scale.

### scaleY {#f-cuttheropedx-gamemain-pollen-scaley}

```csharp
public float scaleY
```

Current vertical scale.

### startAlpha {#f-cuttheropedx-gamemain-pollen-startalpha}

```csharp
public float startAlpha
```

Alpha value to return to after reaching [endAlpha](#f-cuttheropedx-gamemain-pollen-endalpha).

### startScaleX {#f-cuttheropedx-gamemain-pollen-startscalex}

```csharp
public float startScaleX
```

Scale value to return to on the horizontal axis.

### startScaleY {#f-cuttheropedx-gamemain-pollen-startscaley}

```csharp
public float startScaleY
```

Scale value to return to on the vertical axis.

### x {#f-cuttheropedx-gamemain-pollen-x}

```csharp
public float x
```

World-space X position.

### y {#f-cuttheropedx-gamemain-pollen-y}

```csharp
public float y
```

World-space Y position.

