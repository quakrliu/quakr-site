export interface AffiliateLink {
  name: string;
  url: string;
  description: string;
}

export const affiliates: Record<string, AffiliateLink> = {
  binance: {
    name: 'Binance',
    url: 'https://www.binance.com/en/register?ref=725285686',
    description: 'The world\'s largest crypto exchange by volume.',
  },
  bitget: {
    name: 'Bitget',
    url: 'https://www.bitget.com/referral/register?from=referral&clacCode=YOUR_REF',
    description: 'Copy-trading & derivatives exchange.',
  },
  kucoin: {
    name: 'KuCoin',
    url: 'https://www.kucoin.com/r/YOUR_REF',
    description: 'Wide altcoin selection with earning products.',
  },
  bybit: {
    name: 'Bybit',
    url: 'https://www.bybit.com/invite?ref=WKNA1V',
    description: 'Top derivatives exchange with earn features.',
  },
  bitfinex: {
    name: 'Bitfinex',
    url: 'https://www.bitfinex.com/sign-up?refcode=VzaPAa8Lh',
    description: 'Professional exchange with margin funding.',
  },
  ledger: {
    name: 'Ledger',
    url: 'https://shop.ledger.com/?r=YOUR_REF',
    description: 'Industry-leading hardware wallet.',
  },
  okx: {
    name: 'OKX',
    url: 'https://www.okx.com/join/26575603',
    description: 'Global exchange with diverse earning products.',
  },
  coinledger: {
    name: 'CoinLedger',
    url: 'https://coinledger.io?fpr=4bsqmx',
    description: 'Crypto tax reporting made simple.',
  },
};

export function getAffiliate(key: string): AffiliateLink | undefined {
  return affiliates[key];
}
