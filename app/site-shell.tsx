import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark">T</span><span><b>TRINITY SCHOOL</b><small>OF THEOLOGY & MISSION</small></span></Link><nav><Link href="/about">About</Link><Link href="/programs">Programs</Link><Link href="/admissions">Admissions</Link><Link href="/contact">Contact</Link></nav><Link className="nav-apply" href="/admissions">Apply now</Link></header>;
}

export function SiteFooter() {
  return <footer><div><Link href="/" className="brand light"><span className="brand-mark">T</span><span><b>TRINITY SCHOOL</b><small>OF THEOLOGY & MISSION</small></span></Link><p>Equipping for faithful service in the church and the world.</p></div><div><h4>Explore</h4><Link href="/about">About TSTM</Link><Link href="/programs">Programs</Link><Link href="/admissions">Admissions</Link></div><div><h4>Contact</h4><a href="tel:+959777757667">09777757667</a><a href="mailto:trinitytstm99@gmail.com">trinitytstm99@gmail.com</a><p>Yangon, Myanmar</p></div><div className="footer-bottom">© 2026 Trinity School of Theology & Mission</div></footer>;
}
