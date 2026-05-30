---
title: "Solana DeFi Yield Farming 2026: mSOL vs JupSOL vs JLP (After the Drift Hack)"
description: "Three Solana yield strategies — mSOL from Marinade, JupSOL from Jupiter, and JLP from Jupiter Perps — each pay differently in 2026. Here's the real APY breakdown, what the Drift Protocol hack changes, and which one fits your risk tolerance."
pubDate: "2026-05-12"
category: "defi"
tags: ["solana", "mSOL", "JupSOL", "JLP", "liquid-staking", "defi", "yield-farming", "passive-income", "marinade-finance", "jupiter"]
level: "intermediate"
image: "/og/solana-defi-yield-farming-2026-msol-jupsol-perpetuals.png"
draft: false
---

Three weeks before the Drift Protocol hack, I almost did something I would have deeply regretted.

I had $4,200 in JLP tokens sitting in my Jupiter wallet — Jupiter's liquidity pool token for their perpetuals exchange. They were earning somewhere between 9% and 12% APY in trading fees, and I'd just read a thread about boosting returns by depositing JLP as collateral on Drift Protocol to borrow against it.

I built out the strategy in a spreadsheet. I drafted the transactions. Then my daughter interrupted me to ask if I could drive her to soccer practice, and I closed the laptop.

On April 1, 2026, Drift Protocol lost $285 million to a North Korea-linked exploit. JLP was among the hardest-hit collateral assets — approximately $155 million worth drained in 31 rapid withdrawals. I opened my phone, saw the alerts, and assumed it was an elaborate April Fools' joke.

It wasn't. And my laziness had just saved me from a very bad day.

Over at **PassiveYieldLab**, I track Solana DeFi yield strategies because this ecosystem moves faster than anywhere else in crypto — and 2026 has already proven that fast cuts both ways. Here's a real breakdown of three strategies dominating Solana yield conversations right now: holding mSOL, holding JupSOL, and providing liquidity to Jupiter's perpetuals market through JLP.

*Before reading: if you haven't covered the basics, our [DeFi yield farming beginners guide](/blog/defi-yield-farming-beginners-guide-2026) gives you the foundation this article skips.*

---

<div class="tl-dr">

**TL;DR**

- **mSOL** (Marinade Finance) — ~6.66% base staking APY as of May 2026. Stack with Kamino lending for 8–10% total. Low complexity, battle-tested infrastructure.
- **JupSOL** (Jupiter) — ~6.16% APY as of May 2026. Similar risk profile to mSOL with Jupiter ecosystem incentives.
- **JLP** (Jupiter Perps LP) — 9–15% from trading fees historically, variable. Meaningful risk context post-Drift. Not for everyone.

*APY fluctuates. This is what I do, not financial advice.*

</div>

---

## The State of Solana Yield in May 2026

Solana liquid staking crossed $3.3 billion TVL in early 2026 — Jito, Marinade, Jupiter, and Sanctum all growing as SOL held above $100 through Q1. Base staking yield sits in the 6–7% range across major protocols, with validators distributing around 6–6.5% annualized as of May 2026.

That baseline sounds boring until you notice two things:

First, you stay liquid. Unlike native staking, which requires unstaking windows, liquid staking tokens — mSOL, JupSOL, JitoSOL — move between DeFi protocols instantly.

Second, the baseline is just the floor. DeFi stacking pushes returns meaningfully higher.

The question isn't whether to liquid stake on Solana. It's which token to hold and where to put it next.

---

## Option A: mSOL — Marinade's Stake Pool

Marinade Finance runs one of Solana's largest stake pools, spreading delegated SOL across hundreds of validators. When you stake with Marinade, you receive mSOL — a token whose price ratio to SOL increases each epoch as staking rewards accumulate.

**Base APY:** ~6.66% over the last 10 epochs as of May 2026. APY fluctuates with network conditions.

**What makes mSOL useful beyond base staking:**

mSOL is the most battle-tested liquid staking token on Solana in terms of DeFi integration. Kamino Finance — which held $3.5 billion in TVL as of late 2025 — accepts mSOL as a supply asset. Depositing mSOL on Kamino earns the base staking APY *plus* Kamino's supply APY from lending demand.

During high-leverage bull markets, SOL lending rates on Kamino spike to 15%+. In normal conditions, the supply APY layer adds 1–3% on top of base staking yield. Blended total: roughly 7.5–10% depending on market activity.

**Stack example (what I actually run):**
1. Stake SOL on Marinade → receive mSOL
2. Deposit mSOL on Kamino Finance as collateral
3. Collect staking APY + Kamino supply rate
4. Optional: borrow USDC against mSOL, deploy USDC into stablecoin yield (adds complexity and liquidation risk)

Steps one and two are passive after setup. Step three requires watching your health factor. I do steps one and two. Full stop.

**Risk profile:** Marinade distributes stake across 150+ validators, reducing single-validator slashing risk. The main additional risk is Kamino smart contract exposure if you deposit there. Marinade has processed hundreds of millions in SOL without a major incident since its 2021 launch.

To get SOL for liquid staking, [OKX](https://www.okx.com/join/26575603), [Binance](https://www.binance.com/en/register?ref=725285686), and [Bybit](https://www.bybit.com/invite?ref=WKNA1V) all offer clean SOL on-ramps with Solana network support.

---

## Option B: JupSOL — Jupiter's Liquid Stake Token

Jupiter runs JupSOL on Sanctum's validator stake pool infrastructure. When Jupiter users stake SOL for JupSOL, they back Jupiter's validator set — and Jupiter routes a portion of protocol fee revenue back into the validator to enhance yield.

**Base APY:** ~6.16% as of May 2026. APY fluctuates.

**What separates JupSOL from mSOL:**

JupSOL's yield currently runs slightly below mSOL's base rate, but Jupiter adds ecosystem incentives that change the math for active Jupiter users. JUP token holders who also hold JupSOL receive boosted APY through Jupiter's governance incentive structure.

JupSOL also runs on Sanctum's infrastructure, which maintains a reserve against validator slashing events — a thin but meaningful protection layer that mSOL doesn't replicate exactly.

**DeFi integration:** JupSOL is accepted on Kamino, giving it the same stacking opportunity as mSOL. The Kamino strategy above works identically with JupSOL substituted in.

**Who benefits from JupSOL over mSOL:**
- Active Jupiter ecosystem participants (JUP holders, frequent DEX users)
- Anyone who values Sanctum's slashing coverage
- Users for whom a 0.5% APY spread is immaterial at current portfolio size

At $5,000 in liquid staking, the APY gap between mSOL and JupSOL amounts to roughly $25 per year. Not a deciding factor for most people.

**Who benefits from mSOL over JupSOL:**
- Users who want maximum DeFi integration depth — mSOL has a slightly longer integration history across Kamino and other protocols
- Users who prefer Marinade's wider validator diversification track record

Both work. At current APY levels, the difference is marginal. Splitting 50/50 is a reasonable choice if you genuinely can't decide.

---

## Option C: JLP — Jupiter Perps Liquidity Pool

Here's where the article gets complicated.

JLP is the liquidity pool token for Jupiter's perpetuals exchange. When traders open leveraged positions on Jupiter Perps, they trade against the JLP pool — which holds SOL, USDC, ETH, BTC, and USDT. The pool earns from trading fees, borrowing fees from leveraged traders, and spread on positions.

Jupiter currently captures 66% of Solana's perpetuals market share. Historically, JLP has paid 9–15% APY in real fees to liquidity providers. During high-volume markets, this number has gone higher.

That's the attractive part. Here's what April 1, 2026 changed.

**The Drift Incident and JLP:**

The $285 million Drift Protocol exploit targeted Drift, not Jupiter — but JLP was one of the collateral assets stored in Drift's vaults. Approximately 41.7 million JLP tokens worth $155 million at the time were drained from Drift through oracle manipulation and rapid withdrawals.

Jupiter immediately clarified: *the JLP pool itself remains fully backed*. If you held JLP in your own wallet or deposited on non-Drift platforms, your position was unaffected. This distinction matters — JLP the token wasn't compromised, but JLP deposited as collateral on Drift most certainly was.

Drift now runs a recovery program with $127.5 million in Tether contribution and a dedicated recovery token for impacted users. But the incident crystallized a risk JLP enthusiasts sometimes downplay:

**JLP's primary risk isn't Jupiter — it's where you deploy JLP next.**

JLP in your wallet: trading fee yield, subject to Jupiter smart contract risk.
JLP deployed as collateral elsewhere: add that protocol's exploit risk on top.

My $4,200 in JLP was in my wallet, never touched by the Drift exploit. The strategy I almost executed in March would have been a different story.

**Current JLP yield (as of May 2026):** Trading fee APY runs approximately 9–12% in current market conditions. APY fluctuates with volume — this is variable, volume-dependent income, not predictable yield.

**Who should use JLP:**
- You understand JLP is counter-party to leveraged traders — you profit when traders lose on net
- You're comfortable with variable, volume-dependent yield
- You keep JLP in your own wallet and don't deploy it as third-protocol collateral
- You're sizing JLP at under 20% of total Solana DeFi allocation

**Who should skip JLP:**
- Anyone wanting predictable yield
- Anyone tempted to maximize by deploying JLP as collateral on lending protocols post-Drift

For a deeper discussion of position sizing across multiple DeFi strategies, read our [DeFi position sizing and risk management guide](/blog/defi-position-sizing-risk-management-2026).

---

## Stacking Strategy: mSOL + Kamino = Two-Layer Yield

For readers who want a concrete starting point without the JLP complexity, here's the exact strategy I run:

**Step 1:** Stake SOL on Marinade → receive mSOL (~6.66% APY as of May 2026, APY fluctuates)

**Step 2:** Deposit mSOL on Kamino Finance as a supply asset → earn base staking yield + Kamino supply APY (~1–3% additional in normal conditions)

**Target blended yield:** 7.5–10%, depending on Kamino lending demand at time of deposit.

Setup takes about 15 minutes the first time. After that, fully passive.

I also compare this to exchange staking on [Binance](https://www.binance.com/en/register?ref=725285686) or [OKX](https://www.okx.com/join/26575603), which offer SOL staking at 4–5% APY as of May 2026 with custodial risk and zero DeFi composability. The mSOL+Kamino approach roughly doubles the yield while maintaining self-custody.

The gap isn't free — there's Marinade smart contract risk, Kamino smart contract risk, and more complexity. For intermediate DeFi users already comfortable with Solana wallets, that complexity is manageable. For beginners, exchange staking is a reasonable starting point while you learn the ecosystem.

---

## Head-to-Head Comparison

| Strategy | Est. APY* | Complexity | Main Risk | Self-Custody |
|----------|-----------|------------|-----------|--------------|
| mSOL (base) | ~6.66% | Low | Marinade contract | Yes |
| JupSOL (base) | ~6.16% | Low | Sanctum/Jupiter contract | Yes |
| mSOL + Kamino | ~7.5–10% | Medium | Marinade + Kamino contracts | Yes |
| JLP (wallet-held) | ~9–12% | Medium | Jupiter contract | Yes |
| Exchange SOL staking | ~4–5% | Very Low | Custodial | No |

*As of May 2026. APY fluctuates. These are estimates, not guarantees.*

**Estimated yield per $10,000 over 12 months:**

| Strategy | Estimated Annual Yield |
|----------|----------------------|
| Exchange staking at 4.5% | ~$450 |
| JupSOL base at 6.16% | ~$616 |
| mSOL base at 6.66% | ~$666 |
| mSOL + Kamino at 8.5% | ~$850 |
| JLP at 10% | ~$1,000 (variable) |

Numbers assume steady-state conditions. JLP yield varies significantly with trading volume. APY fluctuates for all strategies.

---

## AI Prompt Patterns for Research

If you use AI assistants to help evaluate DeFi strategies, these two prompts generate useful comparative analysis:

**Prompt 1:** *"What are the main differences between mSOL and JupSOL for Solana liquid staking in 2026? Which offers better DeFi composability on Kamino and what are the risk tradeoffs?"*

**Prompt 2:** *"Explain how JLP yield works on Jupiter Perps — what drives liquidity provider returns, and how does the April 2026 Drift Protocol exploit affect how I should think about JLP deployment risk?"*

Both prompts help you pressure-test any strategy before committing capital. The Drift incident in particular benefits from structured analysis — it's easy to conflate what happened to JLP-on-Drift with JLP itself, and getting that distinction right matters for sizing decisions.

---

## Tax Note

Running mSOL, JupSOL, and JLP positions across Kamino creates a significant number of small yield events. At year-end, tracking these manually across Solana wallets is tedious. [CoinLedger](https://coinledger.io/?fpr=4bsqmx) handles Solana DeFi positions including mSOL and Kamino integrations — in my experience, it saves about four hours of manual export work per tax season.

For the full picture of how DeFi yield income gets classified, see our [crypto passive income tax guide](/blog/crypto-passive-income-tax-guide-2026).

---

## What I Actually Do

**$4,200 in JLP** — held in my Phantom wallet, not deployed as collateral anywhere post-April 1.

**$6,000 in mSOL** — deposited on Kamino. I check the health factor once a week, adjust if Kamino's SOL borrowing rate spikes and shifts my position unexpectedly.

**$3,000 in JupSOL** — sitting in wallet while I watch post-Drift market sentiment. I'll probably deploy this to Kamino in June 2026 once Drift's recovery situation clarifies.

I don't run the Kamino borrow strategy (mSOL collateral → borrow USDC → stablecoin yield). The liquidation risk that adds isn't worth it for this slice of the portfolio. The compounding between Marinade staking rewards and Kamino supply APY does the work without the borrow layer.

If Drift's recovery progresses cleanly through Q2 and the Solana DeFi ecosystem rebuilds trust in cross-protocol collateral deployment, I'll revisit JLP collateral strategies in late 2026. Until then: wallet-held JLP only.

For comparison of how these Solana strategies fit into a broader crypto yield portfolio, see our [best crypto passive income strategies guide](/blog/best-crypto-passive-income-strategies-2026).

---

## FAQ

**What is mSOL and how does it earn yield?**
mSOL is Marinade Finance's liquid staking token on Solana. When you stake SOL through Marinade, you receive mSOL, whose price ratio to SOL increases each epoch as validator staking rewards accumulate. As of May 2026, mSOL earns approximately 6.66% APY — APY fluctuates with network conditions and validator performance.

**How is JupSOL different from mSOL?**
Both are Solana liquid staking tokens earning approximately 6–7% APY as of May 2026. JupSOL runs on Sanctum's validator infrastructure, is tied to Jupiter's validator set, and includes Sanctum's slashing protection reserve. mSOL runs Marinade's stake pool distributed across 150+ validators and has a longer DeFi integration history on Kamino and other protocols.

**Is JLP still safe to hold after the Drift Protocol hack?**
JLP the token was not compromised — Jupiter confirmed the JLP pool remained fully backed after the April 1, 2026 Drift exploit. JLP tokens that were deposited as collateral *on Drift* were affected by the drain. Holding JLP in a personal wallet remains subject to Jupiter Perps smart contract risk only, not Drift's risk. The lesson: understand where your JLP lives before depositing it on third-party protocols.

**What APY can I expect from JLP in 2026?**
JLP yield depends on Jupiter Perps trading volume. In 2026 market conditions, trading fee APY has ranged from 9–15%. APY fluctuates significantly with trading activity and can compress during low-volume periods. It is not predictable yield — it is variable, volume-dependent income.

**Can I deposit mSOL on Kamino to earn extra yield on top of staking?**
Yes. Depositing mSOL on Kamino Finance as a supply asset earns the base mSOL staking APY plus Kamino's SOL lending supply rate. In normal market conditions, the blended yield runs approximately 7.5–10%. During high-leverage bull phases, Kamino's supply rate spikes higher. APY fluctuates — check current rates on app.kamino.finance before entering.

**How does Solana liquid staking compare to just leaving SOL on a centralized exchange?**
Exchange SOL staking (Binance, OKX) offers approximately 4–5% APY as of May 2026 with custodial risk and no DeFi composability. mSOL or JupSOL + Kamino targets 7.5–10% with self-custody and full DeFi access. The tradeoff is more complexity and smart contract risk in exchange for higher yield and custody control.

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is mSOL and how does it earn yield?","acceptedAnswer":{"@type":"Answer","text":"mSOL is Marinade Finance's liquid staking token on Solana. When you stake SOL through Marinade, you receive mSOL whose price ratio to SOL increases each epoch as validator staking rewards accumulate. As of May 2026, mSOL earns approximately 6.66% APY — APY fluctuates with network conditions."}},{"@type":"Question","name":"How is JupSOL different from mSOL?","acceptedAnswer":{"@type":"Answer","text":"Both are Solana liquid staking tokens earning approximately 6–7% APY as of May 2026. JupSOL runs on Sanctum's validator infrastructure tied to Jupiter's validator set and includes Sanctum's slashing protection. mSOL runs Marinade's stake pool across 150+ validators with a longer DeFi integration history."}},{"@type":"Question","name":"Is JLP still safe to hold after the Drift Protocol hack?","acceptedAnswer":{"@type":"Answer","text":"JLP the token was not compromised — Jupiter confirmed the JLP pool remained fully backed after the April 1, 2026 Drift exploit. Only JLP deposited as collateral on Drift was affected. Holding JLP in a personal wallet is subject to Jupiter smart contract risk only."}},{"@type":"Question","name":"What APY can I expect from JLP in 2026?","acceptedAnswer":{"@type":"Answer","text":"JLP yield depends on Jupiter Perps trading volume. In 2026, trading fee APY has ranged from 9–15%. APY fluctuates significantly — it is variable, volume-dependent income, not predictable yield."}},{"@type":"Question","name":"Can I deposit mSOL on Kamino to earn extra yield on top of staking?","acceptedAnswer":{"@type":"Answer","text":"Yes. Depositing mSOL on Kamino Finance earns base mSOL staking APY plus Kamino's SOL lending supply rate. Blended yield runs approximately 7.5–10% in normal conditions. APY fluctuates — check current rates on app.kamino.finance before entering."}},{"@type":"Question","name":"How does Solana liquid staking compare to leaving SOL on a centralized exchange?","acceptedAnswer":{"@type":"Answer","text":"Exchange SOL staking offers approximately 4–5% APY as of May 2026 with custodial risk and no DeFi composability. mSOL or JupSOL plus Kamino targets 7.5–10% with self-custody and full DeFi access at the cost of more complexity and smart contract risk."}}]}
</script>

---

---

**Related Reading:**
- [Solana DEX Volume Beats Ethereum in May 2026: What It Means for Your Yield Strategy](/blog/solana-defi-beats-ethereum-may-2026)
- [Best SOL Staking Yield 2026: Jito vs Marinade vs Native Staking](/blog/best-sol-staking-yield-2026-jito-vs-marinade)
- [Solana Alpenglow Upgrade: What 150ms Finality Means for Stakers](/blog/solana-alpenglow-upgrade-150ms-finality-guide-2026)

*Disclosure: I hold mSOL, JupSOL, and JLP positions as described. This article contains affiliate links — if you sign up via my links, I may earn a commission at no cost to you. APY figures are estimates as of May 2026 and fluctuate. This is what I do, not financial advice. DeFi involves smart contract risk, liquidation risk, and potential total loss of deposited assets.*
