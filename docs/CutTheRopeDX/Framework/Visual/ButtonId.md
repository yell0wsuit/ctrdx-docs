---
title: Record Struct ButtonId
description: Strongly typed identifier passed alongside button press events.
---

# Record Struct ButtonId

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `ButtonDelegation.cs`

Strongly typed identifier passed alongside button press events.

## Declaration

```csharp
public sealed readonly record struct ButtonId : IButtonIdentifier, IEquatable<ButtonId>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [ButtonId](ButtonId.md)

## Implements

- [IButtonIdentifier](IButtonIdentifier.md)
- [IEquatable<ButtonId>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### ButtonId(int Value) {#m-cuttheropedx-framework-visual-buttonid-ctor-system-int32}

```csharp
public ButtonId(int Value)
```

Strongly typed identifier passed alongside button press events.

Parameters:

- `Value`: Underlying numeric button identifier.

## Properties

### Value {#p-cuttheropedx-framework-visual-buttonid-value}

```csharp
public int Value { get; set; }
```

Underlying numeric button identifier.

## Methods

### From(IButtonIdentifier identifier) {#m-cuttheropedx-framework-visual-buttonid-from-cuttheropedx-framework-visual-ibuttonidentifier}

```csharp
public static ButtonId From(IButtonIdentifier identifier)
```

Creates a [ButtonId](ButtonId.md) from a typed `identifier` wrapper.

Parameters:

- `identifier`: Source identifier that exposes a numeric value.

Returns: Wrapped `identifier` usable by the generic button infrastructure.

