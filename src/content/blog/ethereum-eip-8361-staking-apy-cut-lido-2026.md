---
title: "Ethereum EIP-8361: What a 54% Staking APY Cut Means for Lido Holders"
description: "EIP-8361 proposes cutting Ethereum validator APY from 2.6% to 1.2%. Here's how it hits Lido stakers, leveraged positions, and what to do before mid-August 2026."
pubDate: "2026-08-06"
category: "staking"
tags: ["ethereum", "staking", "lido", "defi", "eip-8361"]
level: "intermediate"
image: "/og/ethereum-eip-8361-staking-apy-cut-lido-2026.png"
draft: false
---

My phone buzzed at 7 AM Bali time, August 6. A Telegram alert from a DeFi governance tracker I'd set up months ago: "EIP-8361 enters voting — Ethereum validator APY proposed cut from 2.6% to 1.2%."

I set down my coffee, stared at the screen, and did the math. A 54% haircut on staking rewards. Eighteen months to implement if it passes. Voting closes mid-August.

That number matters more to me than most. I hold ETH currently staked through Lido, and I've been running a leveraged position on top of it via Aave. The math on that entire strategy just changed overnight.

Here's what's actually happening, what it means for different staker profiles, and the three scenarios I'm watching for before the vote closes.

---

## What EIP-8361 Actually Does

The Ethereum community has debated issuance reduction for years. EIP-8361 is the most aggressive version yet — it proposes slashing the annual percentage yield paid to validators from the current ~2.6% (as of August 2026, APY fluctuates) down to ~1.2%.

Why the cut? The core argument: Ethereum's security budget — the ETH issued to reward validators — is higher than the network actually needs given current staking participation rates and total security. Proponents argue the network over-pays for security, full stop. Opponents say it punishes long-term holders who chose to stake and subsidize the network's safety.

Whatever your position on that debate, the vote is live as of August 6, 2026. The decision window closes around mid-August. Implementation, if the proposal passes, rolls out over 18 months.

---

## The Math: From 2.6% to 1.2%

Let's run estimated annual returns at different stack sizes. These use stated APY rates as of August 2026 and a rough ETH price of $65,000 for illustration — actual returns will vary as APY fluctuates.

| ETH Held | Current ~2.6% APY | Post-EIP ~1.2% APY | Annual Reduction |
|---|---|---|---|
| 1 ETH | ~$1,690/yr | ~$780/yr | ~$910 |
| 5 ETH | ~$8,450/yr | ~$3,900/yr | ~$4,550 |
| 18 ETH | ~$30,420/yr | ~$14,040/yr | ~$16,380 |

*As of August 2026, APY fluctuates. These are estimates only, not guaranteed returns.*

Those numbers assume ETH price holds flat. They don't capture the second-order effects: what happens to Lido's total value locked, how stETH's peg behaves under capital flight, or what happens to the DeFi derivatives built on stETH.

---

## The Leveraged Strategy Gets Hammered Harder

This is the piece that matters most for anyone running [stETH-Aave yield stacking](/blog/steth-aave-yield-stacking-2026).

The strategy works like this: deposit ETH into Lido to get stETH → supply stETH as collateral on Aave → borrow ETH → redeposit into Lido → repeat. Every loop amplifies your staking yield. It also amplifies your risk and your exposure to any rate compression.

Current estimated returns on a two-loop leveraged position: **8–15% APY** (as of August 2026, APY fluctuates), depending on leverage ratio and Aave borrow rates at the time.

If EIP-8361 passes and base validator APY drops to 1.2%, that same leveraged position yields roughly **4–7% APY** (as of August 2026, APY fluctuates) — assuming Aave borrowing costs stay stable. If Aave rates rise as yield-seeking capital shifts behavior, the compression gets worse.

A three-loop position could turn negative if borrowing costs exceed the new staking yield. That's not catastrophizing — it's arithmetic.

For a full breakdown of how risk compounds across staking positions, the [DeFi staking risk tiers guide for Aave, Lido, and EigenLayer](/blog/defi-staking-risk-tiers-2026-aave-lido-eigenlayer) covers the layered math.

---

## Confession: I'm Watching This Vote Nervously

Honest moment: my stETH position isn't a "set it and forget it" allocation. I've been counting on the 3–4% base staking yield to anchor my Aave borrowing cost math. If EIP-8361 passes, my personal yield equation goes from "comfortable" to "worth re-evaluating immediately."

That said, I'm not liquidating on a vote that hasn't closed yet. Ethereum governance has killed or heavily modified proposals before, and the 54% cut figure has drawn real pushback from major validators and Lido's stakeholder community. The final outcome is genuinely uncertain.

But I'm also not pretending the risk doesn't exist. The governance risk on protocol-level yield is real, and EIP-8361 is a reminder that validator APY isn't a locked rate.

---

## Three Scenarios, Three Responses

**Scenario 1: EIP-8361 Passes As Written**

If it passes: Validator APY begins migrating toward 1.2% over 18 months. Lido stakers see progressively lower monthly distributions. Leveraged strategies lose their yield advantage as the base rate compresses.

What to do:
- Unwind or reduce leveraged stETH-Aave positions before rate compression tightens further
- Redirect displaced capital toward higher-yield alternatives (restaking, RWA yield, stablecoin lending)
- Consider holding plain ETH if you believe price appreciation compensates for the yield reduction long-term

**Scenario 2: EIP-8361 Fails or Gets Withdrawn**

If it fails: Current ~2.6% APY (as of August 2026, APY fluctuates) holds. Lido continues business as usual. Leveraged stacking remains viable for risk-tolerant users.

What to do:
- Nothing urgent. Monitor for the next governance round on issuance — this won't be the last attempt.
- Use the anxiety of this vote productively: stress-test your current position. If you couldn't sleep while the vote was live, your leverage ratio is probably too high.

**Scenario 3: Modified EIP Passes (Smaller Cut)**

Possibly the most likely outcome — Ethereum governance tends toward compromise. A modified version cutting APY to 1.8–2.0% instead of 1.2% would hurt leveraged strategies less severely.

What to do:
- Gradually reduce leverage over 6 months rather than immediately unwinding
- Watch Aave borrow rate trends closely after any vote outcome — they'll signal the magnitude of secondary yield compression

---

## Alternatives If Yields Drop Below Your Target

If ETH staking yields slide below your personal floor, here are the realistic alternatives:

**EigenLayer Restaking:** Certain AVS operator slots still target 5–8% APY (as of August 2026, APY fluctuates), though access is capacity-limited. The [EigenLayer restaking with stETH and Lido guide](/blog/eigenlayer-restaking-steth-lido-2026) covers current entry points and the additional risk layer.

**Lido v3 Custom Yield Vaults:** If EIP-8361 passes, Lido needs to compete for capital. [Lido v3's custom strategy framework](/blog/lido-v3-custom-yield-strategy-2026) routes stETH into additional yield layers — this becomes more attractive relative to base staking if the base gets cut.

**Stablecoin Lending on Aave or Morpho:** If the risk-adjusted math on ETH staking drops below 2%, stablecoin lending at 4–6% APY (as of August 2026, APY fluctuates) offers better yield per unit of risk for capital preservation goals.

**Exchange Staking Products:** For holders who don't want to manage DeFi complexity, custodial ETH staking products on [OKX](https://www.okx.com/join/26575603) and [Bybit](https://www.bybit.com/invite?ref=WKNA1V) will update their rates to reflect whatever the new issuance rate becomes. Worth watching those pages after the vote settles.

If you're earlier in the journey and want to understand Ethereum staking fundamentals before running any of this math, the [Ethereum staking guide for 2026](/blog/ethereum-staking-guide-2026) covers the core mechanics.

---

## Risk Section

**Governance risk:** EIP-8361 is a reminder that protocol-level yield on Ethereum is not a fixed rate. Community votes can alter baseline validator rewards, and future proposals may target issuance again regardless of how this vote resolves.

**Liquidation risk:** Leveraged staking via stETH collateral on Aave carries liquidation risk independent of staking yield. If ETH price drops sharply, collateral value drops, and positions face forced unwinding regardless of APY changes.

**Protocol risk:** Lido carries smart contract risk, validator set centralization risk, and increasing regulatory scrutiny as staking platforms face global policy attention.

**Timing risk:** The 18-month implementation window, if EIP-8361 passes, creates an extended period of yield uncertainty. Planning around a rate you don't fully know yet is inherently difficult.

**Borrow rate risk:** Aave borrowing costs fluctuate with market conditions. A compression in staking yield combined with a rise in borrow rates can squeeze leveraged positions from both ends simultaneously.

---

## FAQ

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is EIP-8361?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EIP-8361 is an Ethereum Improvement Proposal that, if passed, would reduce annual validator reward APY from approximately 2.6% to 1.2% — a 54% reduction. It entered community voting on August 6, 2026, with a decision expected by mid-August 2026. APY fluctuates."
      }
    },
    {
      "@type": "Question",
      "name": "How does EIP-8361 affect Lido stakers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lido passes validator rewards to stETH holders. If base validator APY drops to 1.2%, stETH annual yield falls proportionally. Leveraged strategies combining stETH collateral on Aave would see larger relative impact, with estimated returns dropping from 8-15% to 4-7% APY (as of August 2026, APY fluctuates)."
      }
    },
    {
      "@type": "Question",
      "name": "Should I sell my ETH before the EIP-8361 vote closes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selling based on a pending governance vote carries its own risks — the EIP may fail or be significantly modified. Reducing leverage on staking positions while the outcome is uncertain is more defensible than full liquidation for most holders."
      }
    },
    {
      "@type": "Question",
      "name": "When would EIP-8361 take effect if it passes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The proposal includes an 18-month implementation timeline, meaning any APY reduction phases in gradually rather than taking effect immediately after the vote."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best alternatives to ETH staking if yields drop significantly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EigenLayer restaking (5-8% APY as of August 2026, APY fluctuates), Lido v3 custom yield vaults, stablecoin lending on Aave or Morpho (4-6% APY as of August 2026, APY fluctuates), and yield-bearing stablecoins are the main alternatives for capital displaced from lower-yield ETH staking."
      }
    }
  ]
}
</script>

**What is EIP-8361?**
EIP-8361 proposes cutting Ethereum validator APY from ~2.6% to ~1.2% — a 54% reduction. It entered voting August 6, 2026, with a decision expected mid-August. APY fluctuates.

**How does EIP-8361 affect Lido stakers?**
Lido passes validator rewards to stETH holders, so the cut flows through directly. Leveraged stETH-Aave strategies take the bigger hit: estimated returns could drop from 8–15% to 4–7% APY (as of August 2026, APY fluctuates).

**Should I sell ETH before the vote?**
Most holders are watching rather than acting until the vote closes. Reducing leveraged positions while the outcome is uncertain is reasonable. Liquidating ETH entirely on a vote that may fail is a different risk than the one you're trying to avoid.

**When does EIP-8361 take effect if it passes?**
18-month phased implementation — changes roll in gradually, not on day one after the vote.

**What are alternatives if staking yield drops?**
EigenLayer restaking, Lido v3 vaults, stablecoin lending on Aave or Morpho (4–6% APY as of August 2026, APY fluctuates), and custodial staking products on OKX or Bybit.

---

*Passive income isn't lazy money — it's freedom money.*

---

**Disclaimer:** This article is for educational purposes only and does not constitute financial or investment advice. Cryptocurrency staking involves significant risks including smart contract vulnerabilities, liquidation risk in leveraged positions, and governance changes such as EIP-8361 that may alter expected returns. All APY figures are estimates as of August 2026 and fluctuate based on market conditions. Past performance does not guarantee future results. Consult a qualified financial advisor before making investment decisions. Some links in this article are affiliate links — this site may earn a commission if you sign up through them, at no extra cost to you.
