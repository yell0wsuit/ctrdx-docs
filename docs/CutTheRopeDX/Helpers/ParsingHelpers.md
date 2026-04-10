---
title: Class ParsingHelpers
description: Provides safe parsing methods that return default values instead of throwing on invalid input.
---

# Class ParsingHelpers

Namespace: `CutTheRopeDX.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `ParsingHelpers.cs`

Provides safe parsing methods that return default values instead of throwing on invalid input.

## Declaration

```csharp
public static class ParsingHelpers
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ParsingHelpers](ParsingHelpers.md)

## Methods

### ParseFloatOrZero(string value) {#m-cuttheropedx-helpers-parsinghelpers-parsefloatorzero-system-string}

```csharp
public static float ParseFloatOrZero(string value)
```

Parses a floating-point number from a string using invariant culture, returning 0 if the value is `null`, empty, or not a valid number.

Parameters:

- `value`: The string to parse.

Returns: The parsed float, or 0 if parsing fails.

### ParseIntOrZero(string value) {#m-cuttheropedx-helpers-parsinghelpers-parseintorzero-system-string}

```csharp
public static int ParseIntOrZero(string value)
```

Parses an integer from a string, returning 0 if the value is `null`, empty, or not a valid integer.

Parameters:

- `value`: The string to parse.

Returns: The parsed integer, or 0 if parsing fails.

