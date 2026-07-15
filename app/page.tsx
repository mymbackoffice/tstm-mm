import Link from "next/link";
import { Image } from "./site-image";
import { SiteFooter, SiteHeader } from "./site-shell";

const programs = [
  { title: "Master of Divinity", detail: "96 credits · Online (Zoom)", href: "/programs#master" },
  { title: "Bachelor of Theology", detail: "Four-year program", href: "/programs#bachelor" },
  { title: "Diploma in Practical Theology", detail: "66–70 credits · Online", href: "/programs#diploma" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Faith · Learning · Mission</p>
          <h1>Equipping faithful servants for church and world.</h1>
          <p className="hero-lead">Trinity School of Theology & Mission offers Christ-centered theological education for ministry, leadership, and lifelong service.</p>
          <div className="hero-actions"><Link className="button gold" href="/admissions">Apply for admission</Link><Link className="button ghost" href="/programs">Explore programs</Link></div>
          <div className="hero-stats"><span><strong>Est. 1999</strong>Yangon, Myanmar</span><span><strong>Online & campus</strong>Flexible study</span><span><strong>2026–2027</strong>Admissions open</span></div>
        </div>
        <div className="hero-art"><Image src="/media/master-divinity.jpg" alt="Master of Divinity online course announcement" fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </section>

      <section className="section intro">
        <p className="eyebrow">Study at TSTM</p><h2>Formed in Scripture. Prepared for ministry.</h2>
        <p className="section-lead">Choose a program designed to deepen biblical knowledge, strengthen Christian character, and develop practical ministry skills.</p>
        <div className="program-grid">{programs.map((p, i) => <Link className="program-card" href={p.href} key={p.title}><span>0{i + 1}</span><h3>{p.title}</h3><p>{p.detail}</p><b>View program →</b></Link>)}</div>
      </section>

      <section className="split-band">
        <div className="split-image"><Image src="/media/leadership.jpg" alt="TSTM president, faculty and students" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <div className="split-copy"><p className="eyebrow">Our community</p><h2>Learning together for faithful service.</h2><p>Students learn with experienced pastors, scholars, and ministry leaders in a community shaped by worship, discipleship, and mission.</p><Link className="text-link" href="/about">Meet our leadership →</Link></div>
      </section>

      <section className="section news"><div className="section-heading"><div><p className="eyebrow">Latest announcements</p><h2>What’s happening at TSTM</h2></div><Link href="/admissions" className="text-link">All admissions details →</Link></div>
        <div className="news-grid"><article className="info-news"><div className="news-date"><strong>02</strong><span>JUN<br/>2026</span></div><div><small>Admissions</small><h3>Academic Year 2026–2027</h3><p>New student registration opens June 2. Entrance examination, interview, and orientation follow before classes begin June 8.</p><Link href="/admissions">View the full schedule →</Link></div></article><article className="info-news"><div className="news-date"><strong>08</strong><span>JUN<br/>2026</span></div><div><small>Diploma schedule</small><h3>Evening online classes</h3><p>New Testament Survey and Denominational Doctrine meet Tuesday. Spiritual Formation and Foundation of Faith meet Thursday.</p><Link href="/programs#diploma">See class times →</Link></div></article></div>
      </section>
      <SiteFooter />
    </main>
  );
}
