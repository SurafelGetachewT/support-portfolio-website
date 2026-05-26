import Badge from "./Badge";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import { cryptoBadges, cryptoCaseStudies } from "../data/portfolioData";

function CryptoP2PSupport() {
  return (
    <section id="crypto-p2p-support-case-studies" className="section-padding bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Crypto & P2P Support"
              title="Crypto & P2P Support Knowledge"
              description="My crypto support background includes helping users with deposits, withdrawals, P2P trading, payment verification, dispute handling, KYC/AML workflows, account security, and safe trading education."
            />
            <div className="flex flex-wrap gap-2">
              {cryptoBadges.map((badge, index) => (
                <Badge
                  key={badge}
                  tone={index % 3 === 0 ? "blue" : index % 3 === 1 ? "green" : "navy"}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {cryptoCaseStudies.map((study) => (
              <Card key={study.title} className="card-hover p-6">
                <h3 className="text-xl font-bold text-navy-950">
                  {study.title}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
                      Support goal
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {study.supportGoal}
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Information to collect
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {study.information}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoP2PSupport;
