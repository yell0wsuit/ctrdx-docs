---
title: Class PopupBuilder
description: Builds and displays popups from reusable templates.
---

# Class PopupBuilder

Namespace: `CutTheRopeDX.Commons`

Assembly: `CutTheRope-DX.dll`

Source: `PopupBuilder.cs`

Builds and displays popups from reusable templates.

## Declaration

```csharp
internal sealed class PopupBuilder
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [PopupBuilder](PopupBuilder.md)

## Constructors

### PopupBuilder(MenuController controller) {#m-cuttheropedx-commons-popupbuilder-ctor-cuttheropedx-gamemain-menucontroller}

```csharp
public PopupBuilder(MenuController controller)
```

Builds and displays popups from reusable templates.

Parameters:

- `controller`: The menu controller that owns the active view for popup display.

## Fields

### DefaultButtonSpacing {#f-cuttheropedx-commons-popupbuilder-defaultbuttonspacing}

```csharp
internal const float DefaultButtonSpacing
```

Default spacing between popup buttons.

### DefaultScrollableHeight {#f-cuttheropedx-commons-popupbuilder-defaultscrollableheight}

```csharp
internal const float DefaultScrollableHeight
```

Default height for scrollable popup text blocks.

### DefaultScrollableWidth {#f-cuttheropedx-commons-popupbuilder-defaultscrollablewidth}

```csharp
internal const float DefaultScrollableWidth
```

Default width for scrollable popup text blocks.

### LargeScale {#f-cuttheropedx-commons-popupbuilder-largescale}

```csharp
internal const float LargeScale
```

Scale multiplier for large popup templates.

### XLargeScale {#f-cuttheropedx-commons-popupbuilder-xlargescale}

```csharp
internal const float XLargeScale
```

Scale multiplier for extra-large popup templates.

### menuController {#f-cuttheropedx-commons-popupbuilder-menucontroller}

```csharp
private readonly MenuController menuController
```

Menu controller that owns the active view receiving popups.

## Methods

### AddButtons(BaseElement contentRoot, PopupBuilder.PopupTemplate template, PopupBuilder.PopupLayout layout) {#m-cuttheropedx-commons-popupbuilder-addbuttons-cuttheropedx-framework-visual-baseelement-cuttheropedx-commons-popupbuilder-popuptemplate-cuttheropedx-commons-popupbuilder-popuplayout}

```csharp
private void AddButtons(BaseElement contentRoot, PopupBuilder.PopupTemplate template, PopupBuilder.PopupLayout layout)
```

Adds buttons to the popup based on the template layout rules.

Parameters:

- `contentRoot`: The parent element to add buttons to.
- `template`: The template defining button specs and layout direction.
- `layout`: The popup layout used for anchor position calculations.

### ApplyTemplateScale(Popup popup, PopupBuilder.PopupTemplate template, out float backgroundScaleX, out float backgroundScaleY) {#m-cuttheropedx-commons-popupbuilder-applytemplatescale-cuttheropedx-commons-popup-cuttheropedx-commons-popupbuilder-popuptemplate-system-single-system-single}

```csharp
private static void ApplyTemplateScale(Popup popup, PopupBuilder.PopupTemplate template, out float backgroundScaleX, out float backgroundScaleY)
```

Applies template scaling either to popup content or to the background, based on the template mode.

Parameters:

- `popup`: The popup whose content scale may be adjusted.
- `template`: The template defining size and scale mode.
- `backgroundScaleX`: Receives the horizontal scale factor for the background image.
- `backgroundScaleY`: Receives the vertical scale factor for the background image.

### CreateScrollableText(Popup popup, PopupBuilder.PopupTextBlock textBlock, PopupBuilder.PopupLayout layout) {#m-cuttheropedx-commons-popupbuilder-createscrollabletext-cuttheropedx-commons-popup-cuttheropedx-commons-popupbuilder-popuptextblock-cuttheropedx-commons-popupbuilder-popuplayout}

```csharp
private static ScrollableContainer CreateScrollableText(Popup popup, PopupBuilder.PopupTextBlock textBlock, PopupBuilder.PopupLayout layout)
```

Creates a scrollable text container for long content.

Parameters:

- `popup`: The popup to register the scrollable container with.
- `textBlock`: The text block defining content, font, and scroll dimensions.
- `layout`: The popup layout used for positioning.

Returns: The configured scrollable text container.

### CreateText(PopupBuilder.PopupTextBlock textBlock) {#m-cuttheropedx-commons-popupbuilder-createtext-cuttheropedx-commons-popupbuilder-popuptextblock}

```csharp
private static Text CreateText(PopupBuilder.PopupTextBlock textBlock)
```

Creates a text element from a text block definition.

Parameters:

- `textBlock`: The text block defining content, font, alignment, and wrapping.

Returns: The configured text element.

### Show(PopupBuilder.PopupTemplate template) {#m-cuttheropedx-commons-popupbuilder-show-cuttheropedx-commons-popupbuilder-popuptemplate}

```csharp
public Popup Show(PopupBuilder.PopupTemplate template)
```

Builds and shows a popup from the provided template definition.

Parameters:

- `template`: Template describing the popup's content and layout.

Returns: The created popup instance.

