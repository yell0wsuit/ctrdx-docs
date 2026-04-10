---
title: Class BoxOpenClose
description: Manages the level transition, result panel, score countdown, and confetti effects.
---

# Class BoxOpenClose

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `BoxOpenClose.cs`

Manages the level transition, result panel, score countdown, and confetti effects.

## Declaration

```csharp
internal sealed class BoxOpenClose : BaseElement, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [BoxOpenClose](BoxOpenClose.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Fields

### BOX_ANIM_LEVEL_FIRST_START {#f-cuttheropedx-gamemain-boxopenclose-box-anim-level-first-start}

```csharp
public const int BOX_ANIM_LEVEL_FIRST_START
```

Box animation state for the first level start transition.

### BOX_ANIM_LEVEL_LOST {#f-cuttheropedx-gamemain-boxopenclose-box-anim-level-lost}

```csharp
public const int BOX_ANIM_LEVEL_LOST
```

Box animation state for a lost level transition.

### BOX_ANIM_LEVEL_QUIT {#f-cuttheropedx-gamemain-boxopenclose-box-anim-level-quit}

```csharp
public const int BOX_ANIM_LEVEL_QUIT
```

Box animation state for a quit-level transition.

### BOX_ANIM_LEVEL_START {#f-cuttheropedx-gamemain-boxopenclose-box-anim-level-start}

```csharp
public const int BOX_ANIM_LEVEL_START
```

Box animation state for a normal level start transition.

### BOX_ANIM_LEVEL_WON {#f-cuttheropedx-gamemain-boxopenclose-box-anim-level-won}

```csharp
public const int BOX_ANIM_LEVEL_WON
```

Box animation state for a won level transition.

### RESULTS_HIDE_ANIM {#f-cuttheropedx-gamemain-boxopenclose-results-hide-anim}

```csharp
public const int RESULTS_HIDE_ANIM
```

Result panel timeline ID for hiding the panel.

### RESULTS_SHOW_ANIM {#f-cuttheropedx-gamemain-boxopenclose-results-show-anim}

```csharp
public const int RESULTS_SHOW_ANIM
```

Result panel timeline ID for showing the panel.

### RESULT_STATE_COUNTDOWN_STAR_BONUS {#f-cuttheropedx-gamemain-boxopenclose-result-state-countdown-star-bonus}

```csharp
public const int RESULT_STATE_COUNTDOWN_STAR_BONUS
```

Result panel state that counts star bonus points into the score.

### RESULT_STATE_COUNTDOWN_TIME_BONUS {#f-cuttheropedx-gamemain-boxopenclose-result-state-countdown-time-bonus}

```csharp
public const int RESULT_STATE_COUNTDOWN_TIME_BONUS
```

Result panel state that counts time bonus points into the score.

### RESULT_STATE_HIDE_STAR_BONUS {#f-cuttheropedx-gamemain-boxopenclose-result-state-hide-star-bonus}

```csharp
public const int RESULT_STATE_HIDE_STAR_BONUS
```

Result panel state that fades out the star bonus row.

### RESULT_STATE_HIDE_TIME_BONUS {#f-cuttheropedx-gamemain-boxopenclose-result-state-hide-time-bonus}

```csharp
public const int RESULT_STATE_HIDE_TIME_BONUS
```

Result panel state that fades out the time bonus row.

### RESULT_STATE_SHOW_FINAL_SCORE {#f-cuttheropedx-gamemain-boxopenclose-result-state-show-final-score}

```csharp
public const int RESULT_STATE_SHOW_FINAL_SCORE
```

Result panel state that shows the final score label.

### RESULT_STATE_SHOW_STAR_BONUS {#f-cuttheropedx-gamemain-boxopenclose-result-state-show-star-bonus}

```csharp
public const int RESULT_STATE_SHOW_STAR_BONUS
```

Result panel state that fades in the star bonus row.

### RESULT_STATE_SHOW_TIME_BONUS {#f-cuttheropedx-gamemain-boxopenclose-result-state-show-time-bonus}

```csharp
public const int RESULT_STATE_SHOW_TIME_BONUS
```

Result panel state that fades in the time bonus row.

### RESULT_STATE_WAIT {#f-cuttheropedx-gamemain-boxopenclose-result-state-wait}

```csharp
public const int RESULT_STATE_WAIT
```

Result panel state before the countdown sequence begins.

### boxAnim {#f-cuttheropedx-gamemain-boxopenclose-boxanim}

```csharp
public int boxAnim
```

Current box animation state.

### confettiAnims {#f-cuttheropedx-gamemain-boxopenclose-confettianims}

```csharp
public BaseElement confettiAnims
```

Container for active confetti particle elements.

### cscore {#f-cuttheropedx-gamemain-boxopenclose-cscore}

```csharp
public int cscore
```

Displayed countdown score value.

### cstarBonus {#f-cuttheropedx-gamemain-boxopenclose-cstarbonus}

```csharp
public int cstarBonus
```

Displayed countdown star bonus value.

### ctime {#f-cuttheropedx-gamemain-boxopenclose-ctime}

```csharp
public float ctime
```

Displayed countdown time value.

### delegateboxClosed {#f-cuttheropedx-gamemain-boxopenclose-delegateboxclosed}

```csharp
public BoxOpenClose.boxClosed delegateboxClosed
```

Callback invoked after the box closing transition completes.

### openCloseAnims {#f-cuttheropedx-gamemain-boxopenclose-opencloseanims}

```csharp
public BaseElement openCloseAnims
```

Container for active box cover transition elements.

### raDelay {#f-cuttheropedx-gamemain-boxopenclose-radelay}

```csharp
public float raDelay
```

Delay timer used by the result panel countdown state machine.

### raState {#f-cuttheropedx-gamemain-boxopenclose-rastate}

```csharp
public int raState
```

Current result panel countdown state.

### result {#f-cuttheropedx-gamemain-boxopenclose-result}

```csharp
public BaseElement result
```

Result panel root element.

### score {#f-cuttheropedx-gamemain-boxopenclose-score}

```csharp
public int score
```

Base score before result countdown bonuses are applied.

### shouldShowConfetti {#f-cuttheropedx-gamemain-boxopenclose-shouldshowconfetti}

```csharp
public bool shouldShowConfetti
```

Whether confetti should be shown after the box closes.

### shouldShowImprovedResult {#f-cuttheropedx-gamemain-boxopenclose-shouldshowimprovedresult}

```csharp
public bool shouldShowImprovedResult
```

Whether the improved-result stamp should be shown.

### stamp {#f-cuttheropedx-gamemain-boxopenclose-stamp}

```csharp
public Image stamp
```

Improved-result stamp image.

### starBonus {#f-cuttheropedx-gamemain-boxopenclose-starbonus}

```csharp
public int starBonus
```

Star bonus score used by the result countdown.

### time {#f-cuttheropedx-gamemain-boxopenclose-time}

```csharp
public float time
```

Level completion time used by the result countdown.

### timeBonus {#f-cuttheropedx-gamemain-boxopenclose-timebonus}

```csharp
public int timeBonus
```

Time bonus score used by the result countdown.

## Methods

### CreateConfettiParticleNear() {#m-cuttheropedx-gamemain-boxopenclose-createconfettiparticlenear}

```csharp
public static BaseElement CreateConfettiParticleNear()
```

Creates one randomized confetti particle near the top of the screen.

Returns: The configured confetti particle element.

### CreateOpenCloseAnims() {#m-cuttheropedx-gamemain-boxopenclose-createopencloseanims}

```csharp
public void CreateOpenCloseAnims()
```

Creates the container used to hold box transition animation elements.

### InitWithButtonDelegate(IButtonDelegation b) {#m-cuttheropedx-gamemain-boxopenclose-initwithbuttondelegate-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public BoxOpenClose InitWithButtonDelegate(IButtonDelegation b)
```

Initializes the transition box UI, result panel, buttons, and score labels.

Parameters:

- `b`: Button delegate that receives result-panel button events.

Returns: The initialized transition box instance.

### LevelFirstStart() {#m-cuttheropedx-gamemain-boxopenclose-levelfirststart}

```csharp
public void LevelFirstStart()
```

Starts the first-level opening transition and hides any visible result panel.

### LevelLost() {#m-cuttheropedx-gamemain-boxopenclose-levellost}

```csharp
public void LevelLost()
```

Starts the closing transition for a lost level.

### LevelQuit() {#m-cuttheropedx-gamemain-boxopenclose-levelquit}

```csharp
public void LevelQuit()
```

Starts the closing transition for quitting a level.

### LevelStart() {#m-cuttheropedx-gamemain-boxopenclose-levelstart}

```csharp
public void LevelStart()
```

Starts the normal level opening transition and hides any visible result panel.

### LevelWon() {#m-cuttheropedx-gamemain-boxopenclose-levelwon}

```csharp
public void LevelWon()
```

Starts the closing transition for a won level and prepares the result panel countdown.

### PostBoxClosed() {#m-cuttheropedx-gamemain-boxopenclose-postboxclosed}

```csharp
public void PostBoxClosed()
```

Invokes the box-closed callback and optionally starts the confetti burst.

### RemoveOpenCloseAnims() {#m-cuttheropedx-gamemain-boxopenclose-removeopencloseanims}

```csharp
public void RemoveOpenCloseAnims()
```

Removes active box transition animation elements and restores result label opacity.

### Selector_postBoxClosed(FrameworkTypes obj) {#m-cuttheropedx-gamemain-boxopenclose-selector-postboxclosed-cuttheropedx-framework-frameworktypes}

```csharp
private static void Selector_postBoxClosed(FrameworkTypes obj)
```

Delayed-dispatcher callback that finalizes the closed-box state.

Parameters:

- `obj`: Box transition instance to update.

### Selector_removeOpenCloseAnims(FrameworkTypes obj) {#m-cuttheropedx-gamemain-boxopenclose-selector-removeopencloseanims-cuttheropedx-framework-frameworktypes}

```csharp
private static void Selector_removeOpenCloseAnims(FrameworkTypes obj)
```

Delayed-dispatcher callback that removes box open/close animation elements.

Parameters:

- `obj`: Box transition instance to update.

### ShowCloseAnim() {#m-cuttheropedx-gamemain-boxopenclose-showcloseanim}

```csharp
public void ShowCloseAnim()
```

Shows the box closing animation.

### ShowConfetti() {#m-cuttheropedx-gamemain-boxopenclose-showconfetti}

```csharp
public void ShowConfetti()
```

Adds a burst of confetti particles to the result panel.

### ShowOpenAnim() {#m-cuttheropedx-gamemain-boxopenclose-showopenanim}

```csharp
public void ShowOpenAnim()
```

Shows the box opening animation.

### ShowOpenCloseAnim(bool open) {#m-cuttheropedx-gamemain-boxopenclose-showopencloseanim-system-boolean}

```csharp
public void ShowOpenCloseAnim(bool open)
```

Builds and plays the animated box cover used for opening and closing transitions.

Parameters:

- `open`: `true` to play the opening animation; `false` to play the closing animation.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-boxopenclose-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-boxopenclose-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### Update(float delta) {#m-cuttheropedx-gamemain-boxopenclose-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

