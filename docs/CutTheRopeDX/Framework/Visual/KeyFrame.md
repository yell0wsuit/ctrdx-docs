---
title: Class KeyFrame
description: A single keyframe in a timeline track, holding a time offset, transition type, and parameter values.
---

# Class KeyFrame

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `KeyFrame.cs`

A single keyframe in a timeline track, holding a time offset, transition type, and parameter values.

## Declaration

```csharp
internal sealed class KeyFrame
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [KeyFrame](KeyFrame.md)

## Constructors

### KeyFrame() {#m-cuttheropedx-framework-visual-keyframe-ctor}

```csharp
public KeyFrame()
```

Initializes a new [KeyFrame](KeyFrame.md) with default values.

## Fields

### timeOffset {#f-cuttheropedx-framework-visual-keyframe-timeoffset}

```csharp
public float timeOffset
```

Time offset in seconds from the start of the timeline or previous keyframe.

### trackType {#f-cuttheropedx-framework-visual-keyframe-tracktype}

```csharp
public Track.TrackType trackType
```

Track type this keyframe belongs to.

### transitionType {#f-cuttheropedx-framework-visual-keyframe-transitiontype}

```csharp
public KeyFrame.TransitionType transitionType
```

Interpolation mode between this keyframe and the next.

### value {#f-cuttheropedx-framework-visual-keyframe-value}

```csharp
public KeyFrameValue value
```

Parameter values for this keyframe.

## Methods

### MakeAction(List&lt;CTRAction&gt; actions, float time) {#m-cuttheropedx-framework-visual-keyframe-makeaction-system-collections-generic-list-cuttheropedx-framework-visual-ctraction-system-single}

```csharp
public static KeyFrame MakeAction(List<CTRAction> actions, float time)
```

Creates an action keyframe with the specified `actions` and `time` offset.

Parameters:

- `actions`: Actions to execute at this keyframe.
- `time`: Time offset in seconds.

Returns: A new action keyframe.

### MakeColor(RGBAColor c, KeyFrame.TransitionType transition, float time) {#m-cuttheropedx-framework-visual-keyframe-makecolor-cuttheropedx-framework-rgbacolor-cuttheropedx-framework-visual-keyframe-transitiontype-system-single}

```csharp
public static KeyFrame MakeColor(RGBAColor c, KeyFrame.TransitionType transition, float time)
```

Creates a color keyframe.

Parameters:

- `c`: Target color.
- `transition`: Transition type.
- `time`: Time offset in seconds.

Returns: A new color keyframe.

### MakePos(int x, int y, KeyFrame.TransitionType transition, float time) {#m-cuttheropedx-framework-visual-keyframe-makepos-system-int32-system-int32-cuttheropedx-framework-visual-keyframe-transitiontype-system-single}

```csharp
public static KeyFrame MakePos(int x, int y, KeyFrame.TransitionType transition, float time)
```

Creates a position keyframe with integer coordinates.

Parameters:

- `x`: X position.
- `y`: Y position.
- `transition`: Transition type.
- `time`: Time offset in seconds.

Returns: A new position keyframe.

### MakePos(float x, float y, KeyFrame.TransitionType transition, float time) {#m-cuttheropedx-framework-visual-keyframe-makepos-system-single-system-single-cuttheropedx-framework-visual-keyframe-transitiontype-system-single}

```csharp
public static KeyFrame MakePos(float x, float y, KeyFrame.TransitionType transition, float time)
```

Creates a position keyframe with float coordinates.

Parameters:

- `x`: X position.
- `y`: Y position.
- `transition`: Transition type.
- `time`: Time offset in seconds.

Returns: A new position keyframe.

### MakePosCore(float x, float y, KeyFrame.TransitionType transition, float time) {#m-cuttheropedx-framework-visual-keyframe-makeposcore-system-single-system-single-cuttheropedx-framework-visual-keyframe-transitiontype-system-single}

```csharp
private static KeyFrame MakePosCore(float x, float y, KeyFrame.TransitionType transition, float time)
```

Creates a position keyframe.

Parameters:

- `x`: X position.
- `y`: Y position.
- `transition`: Transition type.
- `time`: Time offset in seconds.

Returns: A new position keyframe.

### MakeRotation(int r, KeyFrame.TransitionType transition, float time) {#m-cuttheropedx-framework-visual-keyframe-makerotation-system-int32-cuttheropedx-framework-visual-keyframe-transitiontype-system-single}

```csharp
public static KeyFrame MakeRotation(int r, KeyFrame.TransitionType transition, float time)
```

Creates a rotation keyframe with an integer angle.

Parameters:

- `r`: Rotation angle in degrees.
- `transition`: Transition type.
- `time`: Time offset in seconds.

Returns: A new rotation keyframe.

### MakeRotation(float r, KeyFrame.TransitionType transition, float time) {#m-cuttheropedx-framework-visual-keyframe-makerotation-system-single-cuttheropedx-framework-visual-keyframe-transitiontype-system-single}

```csharp
public static KeyFrame MakeRotation(float r, KeyFrame.TransitionType transition, float time)
```

Creates a rotation keyframe with a float angle.

Parameters:

- `r`: Rotation angle in degrees.
- `transition`: Transition type.
- `time`: Time offset in seconds.

Returns: A new rotation keyframe.

### MakeRotationCore(float r, KeyFrame.TransitionType transition, float time) {#m-cuttheropedx-framework-visual-keyframe-makerotationcore-system-single-cuttheropedx-framework-visual-keyframe-transitiontype-system-single}

```csharp
private static KeyFrame MakeRotationCore(float r, KeyFrame.TransitionType transition, float time)
```

Creates a rotation keyframe.

Parameters:

- `r`: Rotation angle in degrees.
- `transition`: Transition type.
- `time`: Time offset in seconds.

Returns: A new rotation keyframe.

### MakeScale(float x, float y, KeyFrame.TransitionType transition, float time) {#m-cuttheropedx-framework-visual-keyframe-makescale-system-single-system-single-cuttheropedx-framework-visual-keyframe-transitiontype-system-single}

```csharp
public static KeyFrame MakeScale(float x, float y, KeyFrame.TransitionType transition, float time)
```

Creates a scale keyframe.

Parameters:

- `x`: Horizontal scale factor.
- `y`: Vertical scale factor.
- `transition`: Transition type.
- `time`: Time offset in seconds.

Returns: A new scale keyframe.

### MakeSingleAction(BaseElement target, string action, int p, int sp, float time) {#m-cuttheropedx-framework-visual-keyframe-makesingleaction-cuttheropedx-framework-visual-baseelement-system-string-system-int32-system-int32-system-single}

```csharp
public static KeyFrame MakeSingleAction(BaseElement target, string action, int p, int sp, float time)
```

Creates an action keyframe with a single `action`.

Parameters:

- `target`: Target element for the action.
- `action`: Action name.
- `p`: Primary action parameter.
- `sp`: Secondary action parameter.
- `time`: Time offset in seconds.

Returns: A new action keyframe wrapping a single `action`.

### MakeSkew(float x, float y, KeyFrame.TransitionType transition, float time) {#m-cuttheropedx-framework-visual-keyframe-makeskew-system-single-system-single-cuttheropedx-framework-visual-keyframe-transitiontype-system-single}

```csharp
public static KeyFrame MakeSkew(float x, float y, KeyFrame.TransitionType transition, float time)
```

Creates a skew keyframe.

Parameters:

- `x`: Horizontal skew factor.
- `y`: Vertical skew factor.
- `transition`: Transition type.
- `time`: Time offset in seconds.

Returns: A new skew keyframe.

