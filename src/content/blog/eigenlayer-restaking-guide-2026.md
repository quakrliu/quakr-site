---
title: "EigenLayer Restaking Guide 2026: Earn Extra Yield on Staked ETH"
description: "A complete guide to EigenLayer restaking — how it works, current APY rates, step-by-step tutorial for native and LST restaking, risks, and whether the extra yield is worth it in 2026."
pubDate: 2026-03-31
updatedDate: 2026-03-31
author: "PassiveYieldLab"
tags: ["eigenlayer", "restaking", "ethereum", "defi", "passive income", "staking"]
category: "staking"
slug: "eigenlayer-restaking-guide-2026"
canonical: "https://passiveyieldlab.com/blog/eigenlayer-restaking-guide-2026"
ogImage: "/images/eigenlayer-restaking-guide-2026.jpg"
featured: true
---

Your ETH is already staked. It's earning the standard ~3% a year from Ethereum's proof-of-stake consensus. Good, but not exciting.

EigenLayer changes the math. By *restaking* that same ETH, you let other networks borrow Ethereum's security infrastructure — and pay you for the privilege. The same capital, working two jobs at once.

That's the pitch. The reality is a little more nuanced, which is exactly why you need this guide before committing funds.

As of March 2026, EigenLayer holds over **$15 billion in TVL** with 4.3+ million ETH restaked, commanding roughly 94% of the restaking market. It has paid out more than $28 million in cumulative rewards to participants. This is no longer an experiment — but it's still a protocol with risks most guides gloss over.

Let's get into it.

---

## What Is Restaking?

Standard ETH staking is simple: lock 32 ETH (or a fractional amount via liquid staking), help validate Ethereum transactions, earn ~3–4% APY. Your stake only secures Ethereum.

**Restaking** takes that already-staked ETH and extends its economic security to other protocols — called Actively Validated Services (AVSs). Think of AVSs as new networks, middleware layers, or decentralized services that need cryptoeconomic security but can't bootstrap their own validator set from scratch.

Instead of waiting years to build a validator base, an AVS can rent Ethereum's security through EigenLayer. Restakers who opt into an AVS earn additional yield from that AVS. In exchange, they accept that their stake can be slashed if the operator they delegate to misbehaves.

That trade-off — extra yield versus extra slashing risk — is the core tension you need to understand.

---

## How EigenLayer Actually Works

### The Three Actors

**Restakers** deposit ETH (natively or via LSTs) into EigenLayer and delegate to an operator. They earn yield from the AVSs their operator validates.

**Operators** are professional node operators who register with EigenLayer and opt into AVSs. They run the actual infrastructure. Operators stake their reputation on correct behavior — if they misbehave on an AVS, their delegators' funds get slashed.

**AVSs (Actively Validated Services)** are the protocols using EigenLayer's shared security. Examples include decentralized sequencers, data availability layers, oracle networks, and cross-chain bridges. Each AVS sets its own slashing conditions and reward structure.

### The EigenPod

For native restaking (full 32 ETH validators), you create an **EigenPod** — a smart contract that your Ethereum validator's withdrawal credentials point to. This is how EigenLayer gets cryptoeconomic leverage over your staked ETH without actually taking custody.

For LST restaking (stETH, rETH, cbETH, etc.), no EigenPod is needed. You deposit the LST directly into EigenLayer's strategy contracts.

### The EIGEN Token

EIGEN is EigenLayer's native token. As of Q1 2026, the Incentives Committee launched to direct EIGEN rewards toward "productive stake" — ETH that is actively securing live AVSs, not just passively sitting in the protocol. This means restakers who engage with real AVSs earn more than those who don't.

EIGEN holders can also participate in governance and are exposed to slashing for intersubjective faults (disputes that can't be resolved on-chain by cryptographic proof alone).

---

## Current Restaking Yields (as of March 2026)

APY varies significantly by how you restake and which operators/AVSs you choose.

| Strategy | Approximate APY |
|---|---|
| ETH staking baseline (Lido stETH) | ~3.5–4% |
| LST restaking via EigenLayer (1–2 AVSs) | ~3.8–6% total |
| Native restaking + active AVS selection | ~5–8% total |
| High-AVS-exposure operators | 8–12%+ (higher risk) |

*APY figures are estimates as of March 2026 and fluctuate based on ETH price, operator selection, AVS fee structures, and EIGEN incentive programs. These are not guaranteed returns.*

The "extra" yield on top of base staking typically comes from:
1. AVS service fees paid by the AVS to operators/restakers
2. EIGEN token incentives for productive stake
3. Potential airdrop/point programs from AVS protocols themselves

One honest note: the highest-yield operators on EigenLayer carry materially more slashing risk. Chasing 12% APY by delegating to operators running 10+ AVSs is a different risk profile than 5% from a conservative operator on 2 AVSs.

---

## Who Should Consider EigenLayer Restaking?

EigenLayer restaking makes sense if you:

- Already hold stETH, rETH, or other LSTs earning base staking yield
- Have long-term ETH conviction (restaked positions can face withdrawal delays)
- Understand smart contract and slashing risks and accept them
- Are comfortable monitoring operator behavior periodically

It's probably *not* for you if you:

- Need quick liquidity (withdrawal delays can be weeks during high congestion)
- Don't understand how slashing works and just want yield
- Are treating this like a savings account with guaranteed returns

---

## Step-by-Step: How to Restake on EigenLayer

There are two paths: **LST Restaking** (easier, lower barrier) and **Native Restaking** (requires a full 32 ETH validator).

### Option A: LST Restaking (Recommended for Most)

**Step 1: Acquire ETH and stake for LSTs**

If you don't have stETH or rETH yet, buy ETH first. [Binance](https://www.binance.com/en/register?ref=725285686) is one of the most liquid exchanges for ETH purchases globally.

After acquiring ETH, stake on Lido to receive stETH or Rocket Pool to receive rETH. Both integrate with EigenLayer's LST strategies.

**Step 2: Go to app.eigenlayer.xyz**

Connect your wallet (MetaMask, Coinbase Wallet, WalletConnect, or OKX Wallet). Ensure you're on Ethereum mainnet.

**Step 3: Deposit your LST**

Navigate to the **Restake** tab. You'll see the list of accepted LSTs. Select your asset (stETH, rETH, cbETH, etc.) and click **Deposit**. Approve the token spend and confirm the deposit transaction.

Gas fees apply — Ethereum mainnet gas, typically $5–20 depending on network conditions.

**Step 4: Delegate to an Operator**

After depositing, go to the **Operator** tab. This is the most important decision you'll make.

Research operators before delegating:
- How many AVSs do they run? More = higher yield potential but higher slashing exposure
- What's their track record? Look for established names with long operational history
- What are their slashing conditions per AVS?

Click **Delegate** next to your chosen operator and sign the transaction.

**Step 5: Monitor your position**

Your dashboard shows your deposited assets, delegated operator, and earned rewards. Check in periodically — especially if an AVS announces rule changes or your operator's behavior raises flags.

---

### Option B: Native Restaking (32 ETH Validators)

This is for users who already run their own Ethereum validator node with 32 ETH.

**Step 1: Create an EigenPod**

In the Restake tab, click **Create EigenPod** next to "Beacon Ether." Review the warning carefully — you're changing your validator's withdrawal credentials. Confirm the transaction.

Your EigenPod address is now deployed on Ethereum mainnet.

**Step 2: Point your validator's withdrawal credentials to the EigenPod**

This is a one-way operation on the Ethereum Beacon Chain. Your validator's withdrawal address must be set to your EigenPod's Ethereum address. If you're running a fresh validator, do this at setup. If you have an existing validator with BLS withdrawal credentials (0x00), you can update to your EigenPod (0x01).

*If you're unsure how to do this, consult your validator client's documentation (Lighthouse, Prysm, Teku, Nimbus, Lodestar) before proceeding.*

**Step 3: Verify your validator on EigenLayer**

After your validator is active with the EigenPod withdrawal address, you'll need to submit a balance verification proof on EigenLayer. This involves a Merkle proof of your validator's balance — EigenLayer walks you through it in the app.

Gas note: Native restaking proof verification costs approximately 200k gas (~0.0002 ETH) plus a fixed ~0.01 ETH commission per proof.

**Step 4: Delegate to an Operator**

Same as LST path — go to Operators tab, choose your operator, delegate.

---

## The Risks You Need to Understand

### 1. Slashing Risk

This is the big one. If the operator you delegate to violates an AVS's rules (double-signing, downtime, protocol-specific faults), your restaked ETH can be partially or fully slashed.

In practice, major slashing events have been rare in EigenLayer's history. But rare isn't zero. And as more AVSs launch with complex slashing conditions, this risk increases.

**Mitigation:** Choose well-established operators with conservative AVS exposure. Diversify across multiple operators if your position is large.

### 2. Smart Contract Risk

EigenLayer is a complex system of interacting smart contracts. A bug in EigenLayer's core contracts, an AVS's contracts, or operator middleware could result in fund loss. The protocol has been audited, but no audit eliminates all risk.

**Mitigation:** Don't put more in than you'd be comfortable losing in a worst-case scenario.

### 3. Withdrawal Delay Risk

Withdrawals from EigenLayer aren't instant. There are standard unstaking delays (similar to ETH staking's ~days-to-weeks withdrawal queue) plus potential additional delays if an AVS has active slashing disputes.

If you need quick liquidity, liquid restaking tokens (LRTs) like those from Renzo or Kelp DAO are designed to give you tradeable exposure to EigenLayer positions — but they add another layer of smart contract risk.

**Mitigation:** Only restake ETH you can afford to have illiquid for weeks to months.

### 4. Operator Risk

Not all operators are equal. Some are anonymous, understaffed, or running too many AVSs with thin margins for error. If an operator makes mistakes across multiple AVSs simultaneously, losses compound.

**Mitigation:** Research your operator thoroughly. Stick to established operators with long track records, transparent operations, and appropriate AVS scope.

### 5. Yield Isn't Guaranteed

The extra yield over base staking depends on AVS fee revenue and EIGEN incentive programs — both of which can change. The 8%+ figures circulating online often represent optimistic scenarios or include volatile token rewards. Base case is probably 4–6% total for a conservative setup.

---

## EigenLayer vs. Liquid Restaking Protocols

You don't have to interact with EigenLayer directly. Several **liquid restaking protocols** (LRTs) do it for you and issue a tradeable token representing your restaked position:

- **Renzo** (ezETH) — auto-selects operators, issues liquid token
- **Kelp DAO** (rsETH) — similar model
- **Puffer Finance** (pufETH) — focuses on native restaking

The appeal: easier UX, immediate liquidity via the LRT token. The tradeoff: you add another protocol's smart contract risk on top of EigenLayer's, and you give up control over operator selection.

For users who want simplicity over control, LRTs are worth exploring. For users who want to understand and manage their own risk exposure, direct EigenLayer restaking gives more transparency.

---

## The Real Math: Is It Worth It?

Let's say you hold 10 ETH in stETH, earning 3.5% base APY.

**Without restaking:**
- Annual yield: ~0.35 ETH (~$1,050 at $3,000/ETH)

**With conservative EigenLayer restaking (5.5% total):**
- Annual yield: ~0.55 ETH (~$1,650 at $3,000/ETH)
- Extra yield: ~0.2 ETH per year (~$600)

That extra $600/year comes with slashing exposure on your full 10 ETH position. Whether that's a good trade depends on your risk tolerance and how carefully you select operators.

For large ETH holders, the math becomes more interesting. For smaller positions under 1 ETH, the gas costs of restaking on mainnet can eat into the incremental yield — consider whether the net benefit justifies the friction.

---

## Frequently Asked Questions

**Is my ETH safe in EigenLayer?**
EigenLayer is non-custodial — you retain control of your assets via your wallet. However, you accept slashing risk when you restake. Your ETH is not "safe" in the way a savings account is safe. It's an active DeFi position with meaningful risk.

**What is the minimum amount to restake?**
For LST restaking, there's no minimum — you can restake any amount of stETH or rETH. For native restaking, you need a full 32 ETH validator. Note that small positions on Ethereum mainnet will see gas costs eat into returns significantly.

**Can I unstake any time?**
You can initiate a withdrawal, but it's not instant. Expect Ethereum's standard unstaking queue (typically days, sometimes weeks during congestion) plus any additional delays for ongoing slashing resolutions.

**What chains does EigenLayer support?**
EigenLayer's core protocol is on Ethereum mainnet. Some AVSs may have components on Layer 2 networks, but the base restaking happens on L1.

**What is EigenCloud?**
EigenCloud is the brand under which EigenLayer's AVS ecosystem now operates, reflecting its expansion beyond simple restaking to a broader decentralized cloud computing infrastructure.

**Do I need the EIGEN token to restake?**
No. You restake ETH or LSTs. EIGEN is a separate token used for governance and for securing intersubjective AVSs. Holding EIGEN is optional.

---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is EigenLayer restaking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EigenLayer restaking allows ETH holders to extend their staked ETH's economic security to other networks (Actively Validated Services) and earn additional yield beyond standard Ethereum staking rewards."
      }
    },
    {
      "@type": "Question",
      "name": "What APY can I earn from EigenLayer restaking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of March 2026, conservative EigenLayer restaking setups earn approximately 4–6% total APY (including base staking yield). Higher-yield positions with more AVS exposure can reach 8–12%+ but carry increased slashing risk. APY fluctuates based on operator selection, AVS fees, and EIGEN incentive programs."
      }
    },
    {
      "@type": "Question",
      "name": "Is EigenLayer restaking safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EigenLayer is non-custodial but not risk-free. Key risks include slashing (losing ETH if your operator misbehaves), smart contract bugs, and withdrawal delays. Research your operator carefully and only restake what you can afford to have illiquid."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum to restake on EigenLayer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no minimum for LST restaking (stETH, rETH, etc.). Native restaking requires a full 32 ETH Ethereum validator. Note that mainnet gas costs can reduce net yield for very small positions."
      }
    }
  ]
}
</script>

---

## The Bottom Line

EigenLayer is a legitimate yield amplification layer for ETH holders who understand what they're getting into. At $15+ billion TVL and 28M+ in paid rewards, it has moved well past the "experimental" phase.

The extra 1.5–4% APY it offers over base staking is real, but it comes with real slashing risk, real withdrawal illiquidity, and real operator selection decisions that matter. This isn't a passive "deposit and forget" setup — it rewards informed participants.

If you're new to crypto and want to buy ETH to start your staking journey, [Binance](https://www.binance.com/en/register?ref=725285686) is a solid starting point for purchasing ETH before exploring staking and restaking options.

For existing ETH holders with clear risk tolerance and a long-term mindset, EigenLayer is one of the most compelling yield-enhancement tools available in DeFi today.

---

*Risk Disclaimer: This article is for informational purposes only and does not constitute financial or investment advice. Restaking involves significant risks including loss of principal through slashing, smart contract vulnerabilities, and market volatility. APY figures cited are estimates as of March 2026 and are not guaranteed. Always do your own research and consult a financial advisor before committing funds. Never invest more than you can afford to lose.*
