---
title: Class ActionData
description: Holds the name and parameters for a timeline action dispatched to a BaseElement.
---

# Class ActionData

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `ActionData.cs`

Holds the name and parameters for a timeline action dispatched to a [BaseElement](BaseElement.md).

## Declaration

```csharp
internal sealed class ActionData
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ActionData](ActionData.md)

## Fields

### actionName {#f-cuttheropedx-framework-visual-actiondata-actionname}

```csharp
public string actionName
```

Name identifying the action to perform.

### actionParam {#f-cuttheropedx-framework-visual-actiondata-actionparam}

```csharp
public int actionParam
```

Primary integer parameter for the action.

### actionParamFloat {#f-cuttheropedx-framework-visual-actiondata-actionparamfloat}

```csharp
public float actionParamFloat
```

Primary float parameter for the action.

### actionSubParam {#f-cuttheropedx-framework-visual-actiondata-actionsubparam}

```csharp
public int actionSubParam
```

Secondary integer parameter for the action.

### actionSubParamFloat {#f-cuttheropedx-framework-visual-actiondata-actionsubparamfloat}

```csharp
public float actionSubParamFloat
```

Secondary float parameter for the action.

