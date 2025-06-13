import assets from "../../assets/assets";

const Pricing = () => {
  return (
    <div className="w-5xl m-auto">
      <div>
        <div className="py-20 text-center">
          <h2 className="text-4xl font-medium mb-2">Kandl Pricing Guide</h2>
          <p>List of all charges and taxes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <img src={assets.pricingEq} alt="" className="w-1/2" />
            <div className="text-center w-3/4">
              <h3 className="">Free equity delivery</h3>
              <p>
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={assets.otherTrades} alt="" className="w-1/2" />
            <div className="text-center w-3/4">
              <h3 className="">Intraday and F&O trades</h3>
              <p>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={assets.pricingEq} alt="" className="w-1/2" />
            <div className="text-center w-3/4">
              <h3 className="">Free direct MF</h3>
              <p>
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-20 my-15">
          <div>
            <div className="mb-8">
              <h4 className=" mb-2">NRI Account Charges</h4>
              <p className="text-[12px] text-gray-600">
                For our global investors holding NRI accounts, Kandl applies a
                simplified and transparent fee structure. Futures and options
                trades are charged ₹100 per order. For equity investments,
                accounts without Portfolio Investment Scheme (non-PIS) are
                charged 0.5% or ₹100 per executed order, whichever is lower.
                PIS-enabled accounts incur 0.5% or ₹200 per executed order.
                Annual maintenance for NRI accounts is ₹500 plus applicable tax.
              </p>
            </div>
            <div className="mb-8">
              <h4 className=" mb-2">Charges on Accounts with Debit Balance</h4>
              <p className="text-[12px] text-gray-600">
                If a trading account reflects a negative balance, any subsequent
                orders placed will attract a revised charge of ₹40 per executed
                order, instead of the standard ₹20. This measure ensures
                responsible use of trading limits within the platform.
              </p>
            </div>
            <div className="mb-8">
              <h4 className=" mb-2">
                Investor Protection Contribution (IPC) by KSE
              </h4>
              <p className="text-[12px] text-gray-600">
                To support the Investor Protection Trust managed by the Kandl
                Stock Exchange, a nominal fee is collected per transaction.
                Equity and futures trades are charged ₹10 per crore, while
                option transactions are charged ₹50 per crore based on the
                premium value. For currency trades, charges stand at ₹0.05 per
                lakh for futures and ₹2 per lakh for options, plus applicable
                taxes.
              </p>
            </div>
            <div className="mb-8">
              <h4 className=" mb-2">Margin Trade Facility (MTF)</h4>
              <p className="text-[12px] text-gray-600">
                Kandl offers Margin Trading Facility to eligible clients,
                enabling them to trade beyond available capital. Interest on
                funded amounts is charged at 0.04% per day (₹40 per lakh). MTF
                orders carry a brokerage of 0.3% or ₹20 per executed order,
                whichever is lower. A nominal pledge handling fee of ₹15 plus
                tax is applicable for each pledge and unpledge request.
              </p>
            </div>
            <div className="mb-8">
              <h4 className=" mb-2">Service Taxation (GST Equivalent)</h4>
              <p className="text-[12px] text-gray-600">
                All service-related fees at Kandl, including brokerage, market
                authority fees, and transaction charges, are subject to a Goods
                and Services Tax of 18%. This is mandated as part of national
                financial policy compliance.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h4 className=" mb-2">
                Kandl Market Authority (KMA) Regulatory Fee
              </h4>
              <p className="text-[12px] text-gray-600">
                A regulatory charge of ₹10 per crore is levied by the Kandl
                Market Authority (KMA), our governing market body, to ensure the
                health, transparency, and compliance of the marketplace
                ecosystem.
              </p>
            </div>
            <div className="mb-8">
              <h4 className=" mb-2">Kandl Depository Charges (KDS)</h4>
              <p className="text-[12px] text-gray-600">
                Whenever stocks are sold, a depository charge of ₹15.34 per
                security is levied. This includes ₹3.5 as KDS fees, ₹9.5 as
                platform support fee, and ₹2.34 in taxes. Female investors
                listed as the primary holder on a demat account receive a ₹0.25
                discount per transaction. The same discount applies to mutual
                fund and bond redemptions.
              </p>
            </div>
            <div className="mb-8">
              <h4 className=" mb-2">Pledging and Unpledging Fees</h4>
              <p className="text-[12px] text-gray-600">
                A fee of ₹30 plus applicable tax is charged for each pledge or
                unpledge instruction submitted per security (ISIN). This ensures
                smooth and secure collateral management across the trading
                lifecycle.
              </p>
            </div>
            <div className="mb-8">
              <h4 className=" mb-2">Demat Account Maintenance (AMC)</h4>
              <p className="text-[12px] text-gray-600">
                Basic demat accounts under Kandl’s Simple Secure Demat Plan
                (SSDP) are maintenance-free if the total holding value remains
                below ₹4,00,000. For other accounts, the annual maintenance cost
                is ₹300 plus tax, billed quarterly. This ensures continuous
                support, statements, and security.
              </p>
            </div>
            <div className="mb-8">
              <h4 className=" mb-2">Corporate Action Order Handling</h4>
              <p className="text-[12px] text-gray-600">
                For corporate actions such as buybacks, delistings, or takeovers
                initiated via the Kandl Console, an order processing fee of ₹20
                plus tax will be applicable. This covers execution, reporting,
                and settlement coordination.
              </p>
            </div>
            <div className="mb-8">
              <h4 className=" mb-2">Off-Market Transfer Fees</h4>
              <p className="text-[12px] text-gray-600">
                Transfers of securities outside the Kandl platform will attract
                a standard fee of ₹25 per transaction. This includes
                verification, reconciliation, and ledger updates.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h4 className="text-2xl mb-2">Disclaimer</h4>
          <p className="text-[12px] text-gray-600">
            All fees are subject to applicable laws and regulatory guidelines.
            For delivery-based trades, a minimum fee of ₹0.01 per contract note
            is charged. Physical contract notes, if requested, are billed at ₹20
            per note plus courier charges. Brokerage and transaction charges
            comply with limits set by regulatory authorities. Corporate, HUF,
            and institutional accounts may attract slightly varied fees. For
            contracts requiring physical settlement, brokerage will be 0.25% of
            the contract value, or 0.1% for netted-off positions. All statutory
            levies are passed through at actuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
