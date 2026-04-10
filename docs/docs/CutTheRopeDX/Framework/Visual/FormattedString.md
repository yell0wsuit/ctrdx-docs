---
title: Class FormattedString
description: A string paired with a pre-measured pixel width for text layout.
---

# Class FormattedString

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `FormattedString.cs`

A string paired with a pre-measured pixel width for text layout.

## Declaration

```csharp
internal sealed class FormattedString : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [FormattedString](FormattedString.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### string_ {#f-cuttheropedx-framework-visual-formattedstring-string}

```csharp
public string string_
```

The text content.

### width {#f-cuttheropedx-framework-visual-formattedstring-width}

```csharp
public float width
```

Pre-measured pixel width of the text.

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-formattedstring-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### InitWithStringAndWidth(string str, float w) {#m-cuttheropedx-framework-visual-formattedstring-initwithstringandwidth-system-string-system-single}

```csharp
public FormattedString InitWithStringAndWidth(string str, float w)
```

Initializes the formatted string with text and its measured width.

Parameters:

- `str`: Text content.
- `w`: Pre-measured pixel width of the text.

Returns: The initialized formatted string instance.

