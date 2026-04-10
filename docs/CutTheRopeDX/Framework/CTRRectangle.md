---
title: Struct CTRRectangle
description: A rectangle defined by position and size.
---

# Struct CTRRectangle

Namespace: `CutTheRopeDX.Framework`

Assembly: `CutTheRope-DX.dll`

Source: `CTRRectangle.cs`

A rectangle defined by position and size.

## Declaration

```csharp
internal sealed struct CTRRectangle
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [CTRRectangle](CTRRectangle.md)

## Constructors

### CTRRectangle(float xParam, float yParam, float width, float height) {#m-cuttheropedx-framework-ctrrectangle-ctor-system-single-system-single-system-single-system-single}

```csharp
public CTRRectangle(float xParam, float yParam, float width, float height)
```

A rectangle defined by position and size.

Parameters:

- `xParam`: X position.
- `yParam`: Y position.
- `width`: Width.
- `height`: Height.

## Fields

### h {#f-cuttheropedx-framework-ctrrectangle-h}

```csharp
public float h
```

Height of the rectangle.

### w {#f-cuttheropedx-framework-ctrrectangle-w}

```csharp
public float w
```

Width of the rectangle.

### x {#f-cuttheropedx-framework-ctrrectangle-x}

```csharp
public float x
```

X position of the rectangle.

### y {#f-cuttheropedx-framework-ctrrectangle-y}

```csharp
public float y
```

Y position of the rectangle.

## Methods

### IsValid() {#m-cuttheropedx-framework-ctrrectangle-isvalid}

```csharp
public bool IsValid()
```

Returns `true` if any component is non-zero.

Returns: `true` when at least one rectangle component is non-zero; otherwise `false`.

