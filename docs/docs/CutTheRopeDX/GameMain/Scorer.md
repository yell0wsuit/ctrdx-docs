---
title: Class Scorer
description: Stubbed scoring and platform achievement integration surface.
---

# Class Scorer

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Scorer.cs`

Stubbed scoring and platform achievement integration surface.

## Declaration

```csharp
internal sealed class Scorer
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [Scorer](Scorer.md)

## Methods

### ActivateScorerUIAtProfile() {#m-cuttheropedx-gamemain-scorer-activatescoreruiatprofile}

```csharp
public static void ActivateScorerUIAtProfile()
```

Opens the platform scorer profile UI.

### PostAchievementName(string _) {#m-cuttheropedx-gamemain-scorer-postachievementname-system-string}

```csharp
public static void PostAchievementName(string _)
```

Posts an achievement by name.

Parameters:

- `_`: Achievement name or identifier.

### PostLeaderboardResultforLaderboardIdlowestValFirstforGameCenter() {#m-cuttheropedx-gamemain-scorer-postleaderboardresultforladerboardidlowestvalfirstforgamecenter}

```csharp
public static void PostLeaderboardResultforLaderboardIdlowestValFirstforGameCenter()
```

Posts a leaderboard result to the platform scorer integration.

