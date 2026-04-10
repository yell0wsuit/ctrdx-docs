---
title: Class Camera2D
description: 2D camera that tracks a target point and applies translation to the renderer.
---

# Class Camera2D

Namespace: `CutTheRopeDX.Framework.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `Camera2D.cs`

2D camera that tracks a target point and applies translation to the renderer.

## Declaration

```csharp
internal sealed class Camera2D : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [Camera2D](Camera2D.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### offset {#f-cuttheropedx-framework-helpers-camera2d-offset}

```csharp
public Vector offset
```

Per-frame movement offset applied while moving toward [target](#f-cuttheropedx-framework-helpers-camera2d-target).

### pos {#f-cuttheropedx-framework-helpers-camera2d-pos}

```csharp
public Vector pos
```

Current camera position.

### speed {#f-cuttheropedx-framework-helpers-camera2d-speed}

```csharp
public float speed
```

Camera movement speed or proportional factor, depending on [type](#f-cuttheropedx-framework-helpers-camera2d-type).

### target {#f-cuttheropedx-framework-helpers-camera2d-target}

```csharp
public Vector target
```

Target position the camera is moving toward.

### type {#f-cuttheropedx-framework-helpers-camera2d-type}

```csharp
public CAMERATYPE type
```

Current movement mode used when approaching the target.

## Methods

### ApplyCameraTransformation() {#m-cuttheropedx-framework-helpers-camera2d-applycameratransformation}

```csharp
public void ApplyCameraTransformation()
```

Applies the current camera translation to the renderer.

### CancelCameraTransformation() {#m-cuttheropedx-framework-helpers-camera2d-cancelcameratransformation}

```csharp
public void CancelCameraTransformation()
```

Reverses the current camera translation on the renderer.

### InitWithSpeedandType(float s, CAMERATYPE t) {#m-cuttheropedx-framework-helpers-camera2d-initwithspeedandtype-system-single-cuttheropedx-framework-helpers-cameratype}

```csharp
public Camera2D InitWithSpeedandType(float s, CAMERATYPE t)
```

Initializes the camera with the specified movement speed and camera mode.

Parameters:

- `s`: Camera movement speed or proportional factor.
- `t`: Movement mode used when approaching the target.

Returns: The initialized camera instance.

### MoveToXYImmediate(float x, float y, bool immediate) {#m-cuttheropedx-framework-helpers-camera2d-movetoxyimmediate-system-single-system-single-system-boolean}

```csharp
public void MoveToXYImmediate(float x, float y, bool immediate)
```

Sets a new camera target and optionally snaps to it immediately.

Parameters:

- `x`: Target X coordinate.
- `y`: Target Y coordinate.
- `immediate`: `true` to snap instantly; `false` to move using the current camera mode.

### Update(float delta) {#m-cuttheropedx-framework-helpers-camera2d-update-system-single}

```csharp
public void Update(float delta)
```

Advances the camera position toward its target for one frame.

Parameters:

- `delta`: Elapsed frame time in seconds.

