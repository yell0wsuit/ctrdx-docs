---
title: Record Struct MenuSkinSelectionAction
description: Resolved action for a skin selection menu button.
---

# Record Struct MenuSkinSelectionAction

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MenuSkinSelectionActionResolver.cs`

Resolved action for a skin selection menu button.

## Declaration

```csharp
internal sealed readonly record struct MenuSkinSelectionAction : IEquatable<MenuSkinSelectionAction>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [MenuSkinSelectionAction](MenuSkinSelectionAction.md)

## Implements

- [IEquatable<MenuSkinSelectionAction>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### MenuSkinSelectionAction(MenuSkinSelectionActionKind Kind, SkinSelectionMode Mode, string PreferenceKey, int? SelectedIndex) {#m-cuttheropedx-gamemain-menuskinselectionaction-ctor-cuttheropedx-gamemain-menuskinselectionactionkind-cuttheropedx-gamemain-skinselectionmode-system-string-system-nullable-system-int32}

```csharp
public MenuSkinSelectionAction(MenuSkinSelectionActionKind Kind, SkinSelectionMode Mode, string PreferenceKey, int? SelectedIndex)
```

Resolved action for a skin selection menu button.

Parameters:

- `Kind`: Kind of skin selection action to perform.
- `Mode`: Skin selection mode associated with the action.
- `PreferenceKey`: Preference key to store for a slot selection, or `null` when no preference write is needed.
- `SelectedIndex`: Selected slot index, or `null` when the action does not select a slot.

## Properties

### Kind {#p-cuttheropedx-gamemain-menuskinselectionaction-kind}

```csharp
public MenuSkinSelectionActionKind Kind { get; set; }
```

Kind of skin selection action to perform.

### Mode {#p-cuttheropedx-gamemain-menuskinselectionaction-mode}

```csharp
public SkinSelectionMode Mode { get; set; }
```

Skin selection mode associated with the action.

### PreferenceKey {#p-cuttheropedx-gamemain-menuskinselectionaction-preferencekey}

```csharp
public string PreferenceKey { get; set; }
```

Preference key to store for a slot selection, or `null` when no preference write is needed.

### SelectedIndex {#p-cuttheropedx-gamemain-menuskinselectionaction-selectedindex}

```csharp
public int? SelectedIndex { get; set; }
```

Selected slot index, or `null` when the action does not select a slot.

