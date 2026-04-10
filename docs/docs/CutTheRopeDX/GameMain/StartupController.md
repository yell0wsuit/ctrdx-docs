---
title: Class StartupController
description: Coordinates the startup loading screen, ZeptoLab splash animation, and transition into the root controller.
---

# Class StartupController

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `StartupController.cs`

Coordinates the startup loading screen, ZeptoLab splash animation, and transition into the root controller.

## Declaration

```csharp
internal sealed class StartupController : ViewController, IResourceMgrDelegate, IMovieMgrDelegate, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [ViewController](../Framework/Core/ViewController.md)
- [StartupController](StartupController.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITouchDelegate](../Framework/Visual/ITouchDelegate.md)
- [IResourceMgrDelegate](../Framework/Core/IResourceMgrDelegate.md)
- [IMovieMgrDelegate](../Framework/Media/IMovieMgrDelegate.md)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Constructors

### StartupController(ViewController parent) {#m-cuttheropedx-gamemain-startupcontroller-ctor-cuttheropedx-framework-core-viewcontroller}

```csharp
public StartupController(ViewController parent)
```

Initializes a startup controller.

Parameters:

- `parent`: Parent view controller.

## Fields

### DisclaimerFadeDuration {#f-cuttheropedx-gamemain-startupcontroller-disclaimerfadeduration}

```csharp
private const float DisclaimerFadeDuration
```

Duration of the legal disclaimer fade-out in seconds.

### DisclaimerTextBaseAlpha {#f-cuttheropedx-gamemain-startupcontroller-disclaimertextbasealpha}

```csharp
private const float DisclaimerTextBaseAlpha
```

Base alpha applied to the legal disclaimer text before fade-out.

### PackCommon {#f-cuttheropedx-gamemain-startupcontroller-packcommon}

```csharp
private static readonly string[] PackCommon
```

Common startup resources loaded before entering the menu, terminated by `null`.

### PackCommonImages {#f-cuttheropedx-gamemain-startupcontroller-packcommonimages}

```csharp
private static readonly string[] PackCommonImages
```

Shared menu image resources loaded before entering the menu, terminated by `null`.

### PackLocalizationMenu {#f-cuttheropedx-gamemain-startupcontroller-packlocalizationmenu}

```csharp
private static readonly string[] PackLocalizationMenu
```

Localized menu resources loaded before entering the menu, terminated by `null`.

### PackMenu {#f-cuttheropedx-gamemain-startupcontroller-packmenu}

```csharp
private static readonly string[] PackMenu
```

Main menu image resources loaded before entering the menu, terminated by `null`.

### animElapsed {#f-cuttheropedx-gamemain-startupcontroller-animelapsed}

```csharp
private float animElapsed
```

Elapsed splash animation time in seconds.

### animFinished {#f-cuttheropedx-gamemain-startupcontroller-animfinished}

```csharp
private bool animFinished
```

Whether the splash animation should finish and transition away.

### animParts {#f-cuttheropedx-gamemain-startupcontroller-animparts}

```csharp
private List<Image> animParts
```

Flat list of splash animation parts addressed by timeline targets.

### animRoot {#f-cuttheropedx-gamemain-startupcontroller-animroot}

```csharp
private FlashXmlStageRoot animRoot
```

Root node for the Flash XML splash animation.

### animStageHeight {#f-cuttheropedx-gamemain-startupcontroller-animstageheight}

```csharp
private float animStageHeight
```

Original Flash XML stage height for splash layout scaling.

### animStageWidth {#f-cuttheropedx-gamemain-startupcontroller-animstagewidth}

```csharp
private float animStageWidth
```

Original Flash XML stage width for splash layout scaling.

### animTotalDuration {#f-cuttheropedx-gamemain-startupcontroller-animtotalduration}

```csharp
private float animTotalDuration
```

Total expected splash animation duration in seconds.

### currentPercent {#f-cuttheropedx-gamemain-startupcontroller-currentpercent}

```csharp
internal float currentPercent
```

Smoothed visible loading percentage for the startup progress bar.

### currentPhase {#f-cuttheropedx-gamemain-startupcontroller-currentphase}

```csharp
private StartupController.Phase currentPhase
```

Current startup phase.

### disclaimerFadeElapsed {#f-cuttheropedx-gamemain-startupcontroller-disclaimerfadeelapsed}

```csharp
private float disclaimerFadeElapsed
```

Elapsed fade time for the legal disclaimer text.

### legalDisclaimerText {#f-cuttheropedx-gamemain-startupcontroller-legaldisclaimertext}

```csharp
private Text legalDisclaimerText
```

Legal disclaimer text drawn over the splash animation.

### resourcesLoaded {#f-cuttheropedx-gamemain-startupcontroller-resourcesloaded}

```csharp
private bool resourcesLoaded
```

Whether all requested startup resource packs have finished loading.

## Methods

### Activate() {#m-cuttheropedx-gamemain-startupcontroller-activate}

```csharp
public override void Activate()
```

Activates the controller and notifies the root controller.

### AllResourcesLoaded() {#m-cuttheropedx-gamemain-startupcontroller-allresourcesloaded}

```csharp
public void AllResourcesLoaded()
```

Marks startup resource loading as complete.

### EnsureDisclaimerText() {#m-cuttheropedx-gamemain-startupcontroller-ensuredisclaimertext}

```csharp
private void EnsureDisclaimerText()
```

Creates or refreshes the legal disclaimer text shown during the splash animation.

### MoviePlaybackFinished(string url) {#m-cuttheropedx-gamemain-startupcontroller-movieplaybackfinished-system-string}

```csharp
public void MoviePlaybackFinished(string url)
```

Starts resource loading after startup movie playback has finished.

Parameters:

- `url`: Movie URL reported by the movie manager, or `null` when loading starts directly.

### StartSplashAnimation() {#m-cuttheropedx-gamemain-startupcontroller-startsplashanimation}

```csharp
private void StartSplashAnimation()
```

Builds and starts the Flash XML splash animation once loading has completed.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-startupcontroller-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-startupcontroller-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### TouchesBeganwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-gamemain-startupcontroller-touchesbeganwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public override bool TouchesBeganwithEvent(IList<TouchLocation> touches)
```

Forwards the first pressed touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### Update(float t) {#m-cuttheropedx-gamemain-startupcontroller-update-system-single}

```csharp
public override void Update(float t)
```

Updates the active view, if one is currently shown.

### UpdateDisclaimerAlpha() {#m-cuttheropedx-gamemain-startupcontroller-updatedisclaimeralpha}

```csharp
private void UpdateDisclaimerAlpha()
```

Applies the legal disclaimer alpha based on the current fade timer.

### UpdateSplashLayout() {#m-cuttheropedx-gamemain-startupcontroller-updatesplashlayout}

```csharp
private void UpdateSplashLayout()
```

Updates the splash animation root and legal disclaimer position for the current screen size.

