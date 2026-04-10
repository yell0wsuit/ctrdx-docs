---
title: Class AboutView
description: Builds and manages the About/Credits menu view and its scrolling behavior.
---

# Class AboutView

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `AboutView.cs`

Builds and manages the About/Credits menu view and its scrolling behavior.

## Declaration

```csharp
internal sealed class AboutView
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [AboutView](AboutView.md)

## Fields

### autoScrollEnabled {#f-cuttheropedx-gamemain-aboutview-autoscrollenabled}

```csharp
private bool autoScrollEnabled
```

Whether auto-scroll is currently enabled.

### currentContainer {#f-cuttheropedx-gamemain-aboutview-currentcontainer}

```csharp
private ScrollableContainer currentContainer
```

Scroll container holding the About/Credits content.

## Methods

### BuildAboutContainer(IButtonDelegation buttonDelegate) {#m-cuttheropedx-gamemain-aboutview-buildaboutcontainer-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
private static ScrollableContainer BuildAboutContainer(IButtonDelegation buttonDelegate)
```

Builds the scrollable About/Credits content container.

Parameters:

- `buttonDelegate`: Button delegate used by controls embedded in the about content.

Returns: The configured scrollable content container.

### BuildFanworkMainText() {#m-cuttheropedx-gamemain-aboutview-buildfanworkmaintext}

```csharp
private static string BuildFanworkMainText()
```

Builds the fanwork main text with version substitution.

Returns: The localized fanwork body text with version placeholders resolved.

### CreateAbout(BaseElement background, IButtonDelegation buttonDelegate) {#m-cuttheropedx-gamemain-aboutview-createabout-cuttheropedx-framework-visual-baseelement-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public MenuView CreateAbout(BaseElement background, IButtonDelegation buttonDelegate)
```

Creates the About/Credits view and attaches it to the provided background element.

Parameters:

- `background`: Background element that will host the about content.
- `buttonDelegate`: Delegate used for handling the back button.

Returns: A fully constructed [MenuView](MenuView.md) for the About/Credits screen.

### CreateCenteredLinkButton(string text, MenuButtonId buttonId, IButtonDelegation buttonDelegate, float width) {#m-cuttheropedx-gamemain-aboutview-createcenteredlinkbutton-system-string-cuttheropedx-gamemain-menubuttonid-cuttheropedx-framework-visual-ibuttondelegation-system-single}

```csharp
private static Button CreateCenteredLinkButton(string text, MenuButtonId buttonId, IButtonDelegation buttonDelegate, float width)
```

Creates a centered, clickable text button for URLs or actions.

Parameters:

- `text`: Button label text.
- `buttonId`: Identifier assigned to the button.
- `buttonDelegate`: Delegate that handles button events.
- `width`: Maximum width used for text layout.

Returns: A configured centered link button.

### CreateCenteredTextBlock(string text, float width) {#m-cuttheropedx-gamemain-aboutview-createcenteredtextblock-system-string-system-single}

```csharp
private static Text CreateCenteredTextBlock(string text, float width)
```

Creates a centered text block with the standard about font.

Parameters:

- `text`: Text to render in the block.
- `width`: Maximum width for wrapping.

Returns: Configured [Text](../Framework/Visual/Text.md) element.

### DisableAutoScroll() {#m-cuttheropedx-gamemain-aboutview-disableautoscroll}

```csharp
public void DisableAutoScroll()
```

Disables auto-scrolling for the About/Credits view.

### GetAssemblyVersion() {#m-cuttheropedx-gamemain-aboutview-getassemblyversion}

```csharp
private static string GetAssemblyVersion()
```

Gets the executing assembly version string.

Returns: The current assembly version string.

### HandleMouseWheel(int scrollDelta) {#m-cuttheropedx-gamemain-aboutview-handlemousewheel-system-int32}

```csharp
public bool HandleMouseWheel(int scrollDelta)
```

Handles mouse wheel scrolling for the About/Credits content.

Parameters:

- `scrollDelta`: Mouse wheel delta value.

Returns: `true` if the scroll was handled by the about container; otherwise `false`.

### ResetAndEnableAutoScroll() {#m-cuttheropedx-gamemain-aboutview-resetandenableautoscroll}

```csharp
public void ResetAndEnableAutoScroll()
```

Resets scroll position to the top and enables auto-scrolling.

### UpdateAutoScroll() {#m-cuttheropedx-gamemain-aboutview-updateautoscroll}

```csharp
public bool UpdateAutoScroll()
```

Advances auto-scroll if enabled.

Returns: `true` if auto-scroll was applied this frame; otherwise `false`.

