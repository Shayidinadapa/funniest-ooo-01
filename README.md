# The Funniest Out-of-Office

[![Bounty](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/Shayidinadapa/funniest-ooo-01/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/Shayidinadapa/funniest-ooo-01/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

A one-line out-of-office auto-reply, written to be the funniest a real person would actually set — then left in the paws of the cat now running the inbox.

> I'm out of office until Monday — my inbox is now run by my cat, who has already replied to three people with just 'no'.

## Run

```sh
node main.ts
```

`main.ts` validates the line (1–140 characters, a single line, no control or zero-width characters, no leading or trailing whitespace), writes it to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (or `OUTPUT_DIR`, default `/output`) with no trailing newline, then reads it back and throws if it does not match exactly.

## make.fun

Built for the [make.fun](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf) bounty "The Funniest Out-of-Office". Referral code: `1bz6mt7h`.
