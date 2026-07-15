import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-shell";
const steps=["Apply","Register","Entrance exam","Interview","Confirm admission"];
const dates=[
  ["June 2, 2026","New student registration"],["June 3, 2026","Entrance examination"],["June 4, 2026","Interview"],["June 5, 2026","Orientation program"],["June 8, 2026","Classes begin"]
];
const fees=[["Registration","100,000 Ks"],["Hostel","100,000 Ks"],["Tuition","800,000 Ks"],["Examination","50,000 Ks"],["Uniform","70,000 Ks"],["Library","50,000 Ks"],["Sports","50,000 Ks"]];
export default function Admissions(){return <main><SiteHeader/><section className="page-hero admissions-hero"><p className="eyebrow">2026–2027 admissions</p><h1>Your journey starts here.</h1><p>Applications are open for students seeking faithful, rigorous theological formation in a supportive Christian community.</p></section>
  <section className="section"><p className="eyebrow">Admission process</p><h2>Five clear steps to join TSTM</h2><div className="steps">{steps.map((s,i)=><div key={s}><b>{i+1}</b><span>{s}</span></div>)}</div>
    <div className="admission-columns"><div className="admission-panel"><span className="panel-label">Important dates</span><h2>Admission schedule</h2><dl className="date-list">{dates.map(([date,event])=><div key={date}><dt>{date}</dt><dd>{event}</dd></div>)}</dl></div>
    <div className="admission-panel navy-panel"><span className="panel-label">What you need</span><h2>Application requirements</h2><ul className="check-list"><li>Completed application and registration</li><li>Previous certificate and academic transcript</li><li>Recommendation from a pastor</li><li>Entrance examination</li><li>Admission interview</li></ul><Link className="button gold" href="/contact">Speak with admissions</Link></div></div>
  </section>
  <section className="fees-section"><div className="section"><div className="section-heading"><div><p className="eyebrow">Annual fees</p><h2>Clear and transparent costs</h2></div><div className="total-fee"><small>Estimated annual total</small><strong>1,220,000 Ks</strong></div></div><div className="fee-grid">{fees.map(([name,amount])=><div key={name}><span>{name}</span><strong>{amount}</strong></div>)}</div><p className="fee-note">Program-specific charges may vary. Contact the admissions team to confirm the latest payment schedule.</p></div></section><SiteFooter/></main>}
