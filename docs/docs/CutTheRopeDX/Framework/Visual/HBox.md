---
title: Class HBox
description: A BaseElement that arranges children horizontally with configurable spacing and vertical alignment.
---

# Class HBox

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `HBox.cs`

A [BaseElement](BaseElement.md) that arranges children horizontally with configurable spacing and vertical alignment.

## Declaration

```csharp
internal sealed class HBox : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [HBox](HBox.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### align {#f-cuttheropedx-framework-visual-hbox-align}

```csharp
public int align
```

Vertical alignment flag for children.

### nextElementX {#f-cuttheropedx-framework-visual-hbox-nextelementx}

```csharp
public float nextElementX
```

X position where the next child will be placed.

### offset {#f-cuttheropedx-framework-visual-hbox-offset}

```csharp
public float offset
```

Spacing between children in pixels.

## Methods

### AddChildwithID(BaseElement c, int i) {#m-cuttheropedx-framework-visual-hbox-addchildwithid-cuttheropedx-framework-visual-baseelement-system-int32}

```csharp
public override int AddChildwithID(BaseElement c, int i)
```

Adds a child element at the specified ID slot, disposing any existing child at that slot.

Parameters:

- `c`: Child element to add.
- `i`: Slot ID, or -1 to auto-assign.

Returns: The slot ID at which the child was inserted.

### InitWithOffsetAlignHeight(float of, int a, float h) {#m-cuttheropedx-framework-visual-hbox-initwithoffsetalignheight-system-single-system-int32-system-single}

```csharp
public HBox InitWithOffsetAlignHeight(float of, int a, float h)
```

Initializes the horizontal box with spacing, alignment, and height.

Parameters:

- `of`: Spacing between children in pixels.
- `a`: Vertical alignment flag (TOP, VCENTER, or BOTTOM).
- `h`: Height of the box.

Returns: The initialized horizontal box instance.

