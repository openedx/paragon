# Deprecation of font-awesome icons in favor of Paragon icons

## Context

We've found that Font Awesome doesn't necessarily have icons for everything we need, and we also have found versions in other icon libraries that we like more.  Many (most?) of our micro-frontends currently use Font Awesome.

## Decision

We're moving away from Font Awesome in favor of the icons in the paragon/icons subdirectory.  We gather the best free and open source icons that suit our purposes and form a cohesive visual look and feel.  There are instructions on the wiki for how to add a new icon.

See instructions here: https://openedx.atlassian.net/wiki/spaces/BPL/pages/2152661212/Iconography

We should opportunistically remove font-awesome and cut over to paragon icons wherever possible, which will simplify our dependency tree and CSS, while promoting a consistent look and feel.
