---
title: Class LevelResourceScanner
description: Discovers gameplay resource dependencies from parsed level XML.
---

# Class LevelResourceScanner

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `LevelResourceScanner.cs`

Discovers gameplay resource dependencies from parsed level XML.

## Declaration

```csharp
internal static class LevelResourceScanner
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [LevelResourceScanner](LevelResourceScanner.md)

## Methods

### AddAlwaysLoadedLevelResources(HashSet&lt;string&gt; resources) {#m-cuttheropedx-gamemain-levelresourcescanner-addalwaysloadedlevelresources-system-collections-generic-hashset-system-string}

```csharp
private static void AddAlwaysLoadedLevelResources(HashSet<string> resources)
```

Adds resources that are expected in every gameplay map regardless of XML contents.

Parameters:

- `resources`: The destination set being accumulated.

### AddGrabResources(HashSet&lt;string&gt; resources, XElement node) {#m-cuttheropedx-gamemain-levelresourcescanner-addgrabresources-system-collections-generic-hashset-system-string-system-xml-linq-xelement}

```csharp
private static void AddGrabResources(HashSet<string> resources, XElement node)
```

Adds hook-related resources based on a grab node's attributes.

Parameters:

- `resources`: The destination set being accumulated.
- `node`: The grab XML node being inspected.

### AddTargetResources(HashSet&lt;string&gt; resources) {#m-cuttheropedx-gamemain-levelresourcescanner-addtargetresources-system-collections-generic-hashset-system-string}

```csharp
private static void AddTargetResources(HashSet<string> resources)
```

Adds Om Nom animation resources, including the pack-specific support sprite.

Parameters:

- `resources`: The destination set being accumulated.

### GetBoxResources(int pack) {#m-cuttheropedx-gamemain-levelresourcescanner-getboxresources-system-int32}

```csharp
public static HashSet<string> GetBoxResources(int pack)
```

Scans all levels in a pack and returns every required image resource.

Parameters:

- `pack`: Pack index to scan.

Returns: Unique image resource names required by the pack's levels.

### GetRequiredResources(XElement map) {#m-cuttheropedx-gamemain-levelresourcescanner-getrequiredresources-system-xml-linq-xelement}

```csharp
public static string[] GetRequiredResources(XElement map)
```

Computes the gameplay resources required to instantiate a single parsed map.

Parameters:

- `map`: The parsed level XML.

Returns: A de-duplicated array of resource identifiers needed for the map.

### ParseBool(string value) {#m-cuttheropedx-gamemain-levelresourcescanner-parsebool-system-string}

```csharp
private static bool ParseBool(string value)
```

Parses a boolean XML attribute value, defaulting to `false` when absent or invalid.

Parameters:

- `value`: The attribute text to parse.

Returns: The parsed boolean value.

