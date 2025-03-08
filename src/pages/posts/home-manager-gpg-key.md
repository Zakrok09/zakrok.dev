---
layout: "../../layouts/MarkdownLayout.astro"
title: 'Home manager GitHub GPG commit signing'
subtitle: 'With managing of all the necessary pinentry requirements.'
pubDate: 2024-12-16
description: 'Signing the commits improves trust and adds a proof of integrity to your work.
Doing it declaratively with Home Manager can save you the trouble of having to reconfigure options and can also give
you some bonus style points ;) '
author: 'Kiril Panayotov'
img:
  url: 'https://docs.astro.build/assets/rose.webp'
  alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["nixos"]
---

> **Important!** All of my configuration for NixOS is available on my [personal GitHub repository](). 
>
> Please refer to the commit with hash [`8bebd5148d403ff1410a70e9271d02867fc9aa2e`](https://github.com/Zakrok09/Zakrok09/tree/8bebd5148d403ff1410a70e9271d02867fc9aa2e) to get access to my complete 
> config at the time of writing this blog post.

Verifying your commits in GitHub (and possibly other git hosting platforms) using a private GPG key can bring many 
benefits (one of which, of course, being style points!) Since NixOS is already abundant in bringing said style 
points, it comes in with some issues and difference in management compared to other Linux distributions. In this 
tutorial we will go over how we can set up GPG signing of our commits using **home-manager** on our NixOS device.

## Creating a GPG on NixOS

When I first tried to do this, I did not have `gpg` on my computer, so I added it by adding the `gnupg` package to 
my configuration:

```nix
# I chose to add it to my system packages on the entire host because 
# it is something I believe should be present anywhere.
environment.systemPackages = with pkgs; [
    ...
    gnupg
    ...
];
```

This will let you use the `gpg` command. The [GitHub tutorial on generating a GPG key]() gives concrete steps on how 
to create one. Naturally, I followed the precisely but ended up with this error:

```
gpg: agent_genkey failed: No pinentry
Key generation failed: No pinentry
```

This is an error related to pinentry. After several checks I finally found a [solution posted by kiarie404](https://discourse.nixos.org/t/cant-get-gnupg-to-work-no-pinentry/15373/33) posted on the NixOS discussion forums.

Appending the flag `--pinentry-mode loopback` was just enough for me to get it running and produce me a GPG key. 
Please refer to the GitHub tutorial mentioned above to see which options are compatible with GitHub. Mine in 
particular were:
- RSA key pair
- 4096 size

```bash
gpg --full-generate-key --pinentry-mode loopback
```

After this, use the listing command to get all of your keys. This way, we will see the uuid of our recently 
generated key:

```bash
gpg --list-secret-keys --keyid-format=long
```

Probably, your return will look like this:

```
------------------------------------
sec   4096R/IVNV4948F... 2025-04-11 
uid                          ... <...@email.com>
ssb   4096R/332GG44G... 2025-04-11
```

The uuid for your key is the string located just after `4096R/`. In case you did not use RSA, this will be after the 
first slash on the `sec` row.

Use it to export your key content. If you are using / have `xclip` on your device you can even directly copy it to 
your clipboard:

```bash
gpg --armor --export IVNV4948F...

# append this pipe to get it to your clipboard
gpg --armor --export IVNV4948F... | xclip -sel clip
```

Finally, go to your [GitHub profile keys settings page](https://github.com/settings/keys) and add the GPG key (it 
should be the second table of keys, just below the SSG ones).

## Using the key to sign your commits.

Here comes the funny part. So far we have been using primarily imperative actions to generate and add our key. 
However, now we need to tell our git that we would like to have all of our future commits signed by our key 
declaratively in our `home-manager` config. 

The tutorials available online give you insight in the git configuration you need to have in order to achieve this 
goal. These involve setting the `user.name` and `user.email` in a global config and specifying the key that should 
be used for signing. All of this can be done using `home-manager`:

```nix
# git config options
programs = {
    git = {
        enable=true;                          # enable home manager config of git
        userName = "Zakrok09";
        userEmail = "31936449+Zakrok09@users.noreply.github.com";

        extraConfig = {
            commit.gpgsign = true;            # forcing each commit to be gpg signed
            tag.gpgSign = true;               
            user.signingkey = "IVNV4948F..."; # the uuid of your key that you got earlier
        };
    };
};

# gnupg
services = {
    gnome-keyring.enable = true;
    gpg-agent = {
        enable = true;
        defaultCacheTtl = 1800;
        enableSshSupport = true;
    };
};
programs.gpg.enable = true;
```

Rebuild and switch your `home-manager` after these changes.

When you are done, try commiting some changes to a repository and pushing them to GitHub. If you added your GPG key 
and did the rest of the steps, it should appear as "Verified" with a cool little checkmark. Congratz! 

If you are experiencing problems, please make sure e.g. that there are no local overrides of the global config in 
your opened repository that you used to test. 

### Issues with configuration not applying globally

When I was figuring this out, I ran into some issues where my git configuration i specified in my `home-manager` was 
not applying, and instead I got the username and email of some old `git config --global` commands I ran. To fix this,
check the file in your home folder called `~/.gitconfig`. This is where my configs went when I tried to apply them 
imperatively. Delete this file and rebuild and switch your `home-manager` config.

## Final remarks

In case you find anything wrongful with this explanation, please contact me at [contact@zakrok.dev](mailto:contact@zakrok.dev?subject=Blog%20post%20complaint%20%7C%20Home%20manager%20GitHub%20GPG%20commit%20signing%20%40%20zakrok.dev).
