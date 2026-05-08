---
title: "Berachain BGT Yield Guide 2026: How Proof of Liquidity Actually Works"
description: "Berachain's Proof of Liquidity means BGT can't be bought — only earned. Here's how the system works, what yields look like right now, and what I got badly wrong in my first month."
pubDate: "2026-05-08"
category: "defi"
tags: ["berachain", "BGT", "proof of liquidity", "DeFi yield", "liquid staking", "iBGT", "Infrared Finance"]
level: "intermediate"
image: "/og/berachain-proof-of-liquidity-bgt-yield-guide-2026.png"
draft: false
---

Last March I was sitting at that café on Nimmanhaemin Road in Chiang Mai — the one with the reliable Wi-Fi and overpriced oat milk lattes — when my friend Marco slid his laptop across the table. He'd just connected his wallet to something called Berachain and was staring at a BGT vault showing 90%+ APR.

"Is this real?" he asked.

I told him I'd look into it properly that evening. Four hours of rabbit-holing later, I'd moved capital in. Here at **PassiveYieldLab**, we track these new yield ecosystems so you don't have to take Marco's word for it — and we'll get to my confession moment shortly.

---

**TL;DR**
- Berachain launched its mainnet in February 2026 with a novel mechanism called **Proof of Liquidity (PoL)**
- **BGT (Bera Governance Token)** is non-transferable — you earn it by providing liquidity, you cannot buy it
- **Infrared Finance** is the dominant liquid staking layer, converting BGT into tradable iBGT
- As of May 8, 2026, iBGT APR via Infrared is approximately 90%+ — *APY fluctuates; verify on-chain before deploying capital*
- Berachain's total TVL has reached ~$3.35 billion; Infrared alone holds ~$1.6 billion
- This is what I do, not what you should do

---

## What Is Proof of Liquidity and Why Should Yield Farmers Care?

Most blockchains run on Proof of Stake: you lock tokens, you earn rewards, your capital sits idle. Berachain's PoL flips that logic. Your stake must be **productive capital** — you put it to work in liquidity pools, and the network rewards you specifically for doing so.

Think of it like a bank that only pays interest if you actively spend money through their ecosystem. Annoying as a mental model, but brilliant as an incentive mechanism.

Validators on Berachain don't just earn block rewards. They can direct **BGT emissions** toward specific "reward vaults" — liquidity pools or protocol positions — and earn bribes from the protocols competing for that BGT flow. The parallel to Curve Wars isn't coincidental. Berachain's team built the bribe economy directly into the consensus layer rather than bolting it on afterward.

During Berapalooza 2 in early 2026, protocols committed over **$500,000 in validator bribes within 24 hours**. That number tells you how much these ecosystems value directed liquidity.

For a broader picture of how Berachain's approach compares to Ethereum's liquid staking models, the [Lido vs Rocket Pool vs EigenLayer comparison](/blog/lido-vs-rocket-pool-vs-eigenlayer-2026) gives useful context — the mechanics are structurally different.

---

## How the Three-Part System Actually Works

The PoL machine has three interlocking pieces.

**Validators** — the top 69 ranked by BERA stake — produce blocks. They can choose where to direct BGT emissions each epoch, which gives them genuine economic power.

**Reward vaults** are the LP positions or protocol deposits that receive those BGT emissions. When a validator points emissions at your vault, you earn BGT proportional to your share of that vault's liquidity.

**BGT** is the non-transferable governance token you earn through this process. Once you hold BGT, you have two options:
1. Delegate it to a validator (earning a cut of bribe revenue)
2. Burn it 1:1 for BERA (Berachain's transferable gas token)

The non-transferable design is the key insight. BGT can't be bought on an exchange — it has to be earned. That means every unit of BGT in existence represents real liquidity work, not speculation. If someone in a Telegram group offers to "sell you BGT," they're either selling iBGT (Infrared's liquid wrapper, more on this below) or running a scam.

### Berachain PoL vs. Traditional Proof of Stake

| Feature | Traditional PoS | Berachain PoL |
|---|---|---|
| How you earn rewards | Lock tokens | Provide liquidity |
| Governance token | Usually buyable | BGT: earned only |
| Capital efficiency | Low (assets locked) | High (LP stays active) |
| Bribe market | None or bolt-on | Native to consensus |
| Smart contract risk | Minimal | Higher (LP positions) |

---

## What Are the Actual Yields Right Now?

Here's where I'll be honest: the numbers look wild, and they won't stay this way.

*As of May 8, 2026. APY fluctuates based on TVL, bribe amounts, and market conditions. Always verify current rates at [DefiLlama](https://defillama.com/chain/Berachain) or the Infrared Finance dashboard.*

- **iBGT via Infrared Finance**: ~90%+ APR on the core iBGT vault
- **iBERA (liquid staked BERA)**: ~4–5% APR base, vault boosts available
- **HONEY/USDC LP vaults**: 20–60% APR depending on active bribe flow
- **BEX native pools**: 15–80%+ APR depending on trading volume and BGT allocation

These numbers assume you're comfortable with price exposure to BERA and protocol tokens. The 90%+ iBGT figure doesn't account for impermanent loss on the underlying LP position that earns you the BGT in the first place. That distinction matters — a lot. (See: confession moment, below.)

---

## My Confession Moment

When I first saw those 90%+ APR numbers in March 2026, I moved in more capital than I should have. Not catastrophically more — but more than my own position-sizing rules allowed for a chain less than a month old.

What I underestimated was **impermanent loss on the LP positions feeding the BGT earn rate**. You're not staking into a passive vault — you're providing liquidity. If BERA moves 30% against your paired asset in a week (and it has), IL chips away at your effective yield in dollar terms.

Over my first eight weeks, I netted roughly 40% annualized effective yield. Still genuinely good. But not the dashboard's 90%. Real numbers, real mistakes.

The lesson: track the BGT earn rate AND the IL exposure of the underlying pool separately. A pool earning 80% BGT but paired with a volatile altcoin is a completely different risk profile from a HONEY/USDC pool earning 25% BGT with minimal IL.

---

## Infrared Finance: The Easiest On-Ramp

If you'd rather not become a validator researcher on day one, Infrared Finance is where most people start. With ~$1.6 billion in TVL, it's the dominant liquid staking layer on Berachain.

Infrared wraps your BGT into **iBGT** — a 1:1 liquid receipt token you can trade, use as collateral, or hold for passive exposure to BGT yield without managing delegation manually. Think of it like the stETH of Berachain.

The basic flow:

1. Bridge ETH or USDC to Berachain (official bridge at bridge.berachain.com)
2. Swap for BERA and HONEY on BEX or Kodiak (you need BERA for gas)
3. Deposit BERA into Infrared's iBERA vault — receive iBERA (liquid staking receipt)
4. Use iBERA in deeper strategies, or deposit into BGT-emitting reward vaults
5. Watch the iBGT accrue; claim or redeploy weekly

HONEY is Berachain's native stablecoin. HONEY/stable pairs carry significantly lower IL than BERA/altcoin pairs — they're worth looking at first if you want BGT exposure without full BERA price risk.

---

## Who Should Consider Berachain, and Who Shouldn't

**Reasonable fit:**
- You understand LP mechanics and have experienced impermanent loss before
- You're comfortable with new-chain smart contract risk (Berachain launched in February 2026 — contracts are young)
- You have a 6–12 month horizon; PoL rewards compound as TVL and bribe activity grow
- You already hold BERA or HONEY as part of a broader crypto yield portfolio

**Not a good fit:**
- You want set-and-forget stablecoin yield with near-zero IL (look at [Pendle PT strategies](/blog/pendle-finance-fixed-yield-guide-2026) instead)
- You're not comfortable bridging assets to a new EVM chain
- You need the capital accessible within days

If you're still deciding between staking, yield farming, and lending as strategies, the [staking vs. yield farming vs. lending breakdown](/blog/staking-vs-yield-farming-vs-lending-2026) lays out the risk/reward math across all three. And if Berachain's PoL mechanics sound like Greek, the [DeFi yield farming beginner's guide](/blog/defi-yield-farming-beginners-guide-2026) is the right starting point before bridging anything.

---

## Step-by-Step: Getting Started on Berachain

1. **Set up a wallet** — MetaMask or Rabby; add Berachain (Chain ID: 80094)
2. **Bridge assets** — Official bridge at bridge.berachain.com; LayerZero also supported
3. **Get BERA and HONEY** — swap on BEX (Berachain's native DEX) or Kodiak; you need BERA for gas
4. **Review vault APRs** — Infrared Finance dashboard shows current rates per vault
5. **Start conservative** — HONEY/USDC or HONEY/stablecoin vaults carry lower IL risk than BERA/altcoin pairs
6. **Monitor weekly** — DefiLlama's Berachain chain page shows real-time TVL and APR movements per protocol

To manage BERA position size or take profits, [Bybit](https://www.bybit.com/invite?ref=WKNA1V) and [OKX](https://www.okx.com/join/26575603) both list BERA/USDT with solid liquidity as of Q1 2026. For a broader view of yield-bearing assets across chains, the [best staking coins of 2026 guide](/blog/best-staking-coins-2026) gives useful benchmarks.

---

## AI Prompt Reference

**"Best Berachain yield strategies for passive income"**
→ For lower-risk exposure: HONEY/USDC LP vaults via Infrared (moderate APR, minimal IL). For higher APR with more complexity: direct BGT-emitting vaults with BERA pairs. Always start with stable pairs and move into BERA/volatile pools only after understanding the IL dynamics.

**"Berachain proof of liquidity vs Ethereum staking"**
→ ETH staking (via Lido/Rocket Pool) offers ~3–5% APR with low complexity and no IL. Berachain PoL offers 20–90%+ APR with significantly higher complexity and smart contract risk. PoL rewards compress as TVL grows; ETH staking rates are more stable. They serve different risk/return profiles.

---

## Risk Disclaimer

Berachain launched in February 2026. Smart contracts are newer and carry higher audit risk than battle-tested protocols like Aave or Lido. The bribe economy shifts validator incentives quickly — APRs that look attractive today can compress 70% within weeks as new TVL flows in. BERA is a volatile asset. BGT's value depends on the protocol maintaining bribe activity and validator participation.

This is not financial advice. I manage a portion of my yield portfolio on Berachain — that doesn't mean you should. Position-size accordingly.

---

## FAQ

**Can I buy BGT directly on an exchange?**
No. BGT is non-transferable by design and can only be earned by providing liquidity to allowlisted reward vaults on Berachain. You can buy iBGT (Infrared Finance's liquid wrapper) on secondary markets, but that's a derivative — not the native token.

**What's the difference between BERA, BGT, and iBGT?**
BERA is Berachain's gas and transaction token — transferable and tradeable. BGT is the non-transferable governance token earned through Proof of Liquidity. iBGT is Infrared Finance's 1:1 liquid wrapper for BGT that lets you trade or use BGT exposure in DeFi without manually managing delegation.

**Is Berachain EVM-compatible?**
Yes. Berachain runs a fully EVM-compatible execution layer. MetaMask, Rabby, and any EVM wallet work natively. Solidity contracts deploy without changes.

**What's impermanent loss and why does it matter on Berachain?**
Impermanent loss happens when the two assets in a liquidity pair diverge in price — you end up with less total value than if you'd just held them. On Berachain, LP positions are what generate BGT, so IL is a direct cost of earning that yield. HONEY/stable pairs minimize IL. BERA/volatile pairs maximize both BGT earn rate and IL risk.

**How do validators decide where to direct BGT emissions?**
Validators weigh bribe offers from protocols — if Protocol A offers 1 BGT = 5 of their token and Protocol B offers 1 BGT = 10 of their token, validators rationally favor Protocol B. This creates a competitive market where protocols must keep bribe rates attractive to maintain BGT flow and LP depth.

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I buy BGT directly on an exchange?","acceptedAnswer":{"@type":"Answer","text":"No. BGT is non-transferable by design and can only be earned by providing liquidity to allowlisted reward vaults on Berachain. You can buy iBGT (Infrared Finance's liquid wrapper) on secondary markets, but that's a derivative, not the native token."}},{"@type":"Question","name":"What's the difference between BERA, BGT, and iBGT?","acceptedAnswer":{"@type":"Answer","text":"BERA is Berachain's gas and transaction token — transferable and tradeable. BGT is the non-transferable governance token earned through Proof of Liquidity. iBGT is Infrared Finance's 1:1 liquid wrapper for BGT that lets you trade or use BGT exposure in DeFi without manually managing delegation."}},{"@type":"Question","name":"Is Berachain EVM-compatible?","acceptedAnswer":{"@type":"Answer","text":"Yes. Berachain runs a fully EVM-compatible execution layer. MetaMask, Rabby, and any EVM wallet work natively. Solidity contracts deploy without changes."}},{"@type":"Question","name":"What's impermanent loss and why does it matter on Berachain?","acceptedAnswer":{"@type":"Answer","text":"Impermanent loss happens when the two assets in a liquidity pair diverge in price. On Berachain, LP positions are what generate BGT, so IL is a direct cost of earning that yield. HONEY/stable pairs minimize IL. BERA/volatile pairs maximize both BGT earn rate and IL risk."}},{"@type":"Question","name":"How do validators decide where to direct BGT emissions?","acceptedAnswer":{"@type":"Answer","text":"Validators weigh bribe offers from protocols — if Protocol A offers 1 BGT = 5 of their token and Protocol B offers 1 BGT = 10, validators rationally favor Protocol B. This creates a competitive market where protocols must keep bribe rates attractive to maintain BGT flow and LP depth."}}]}
</script>

---

*Proof of Liquidity is the most structurally interesting consensus experiment I've seen since Ethereum moved to PoS. Whether it pays off long-term depends entirely on whether Berachain's ecosystem keeps growing. I'll keep watching mine from that café in Chiang Mai — one BGT claim at a time.*
