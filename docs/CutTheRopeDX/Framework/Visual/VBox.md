---
title: Class VBox
description: A BaseElement that arranges children vertically with configurable spacing and horizontal alignment.
---

# Class VBox

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `VBox.cs`

A [BaseElement](BaseElement.md) that arranges children vertically with configurable spacing and horizontal alignment.

## Declaration

```csharp
internal sealed class VBox : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [VBox](VBox.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### align {#f-cuttheropedx-framework-visual-vbox-align}

```csharp
public int align
```

Horizontal alignment flag for children.

### nextElementY {#f-cuttheropedx-framework-visual-vbox-nextelementy}

```csharp
public float nextElementY
```

Y position where the next child will be placed.

### offset {#f-cuttheropedx-framework-visual-vbox-offset}

```csharp
public float offset
```

Spacing between children in pixels.

## Methods

### AddChildwithID(BaseElement c, int i) {#m-cuttheropedx-framework-visual-vbox-addchildwithid-cuttheropedx-framework-visual-baseelement-system-int32}

```csharp
public override int AddChildwithID(BaseElement c, int i)
```

Adds a child element at the specified ID slot, disposing any existing child at that slot.

Parameters:

- `c`: Child element to add.
- `i`: Slot ID, or -1 to auto-assign.

Returns: The slot ID at which the child was inserted.

### InitWithOffsetAlignWidth(float of, int a, float w) {#m-cuttheropedx-framework-visual-vbox-initwithoffsetalignwidth-system-single-system-int32-system-single}

```csharp
public VBox InitWithOffsetAlignWidth(float of, int a, float w)
```

Initializes the vertical box with spacing, alignment, and width.

Parameters:

- `of`: Spacing between children in pixels.
- `a`: Horizontal alignment flag (LEFT, HCENTER, or RIGHT).
- `w`: Width of the box.

Returns: The initialized vertical box instance.

