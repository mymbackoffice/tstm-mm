import { SiteFooter, SiteHeader } from "../site-shell";

const curriculum = [
  {title:"Biblical Studies",items:["Old Testament Survey","Pentateuch","Historical Books","Poetical Books","Major & Minor Prophets","New Testament Survey","Gospels & Acts","Romans and Galatians","Pauline & General Epistles"]},
  {title:"Theological Studies",items:["Bibliology","Doctrine of God & Angelology","Christology","Pneumatology","Soteriology","Ecclesiology","Eschatology","Foundation of Faith"]},
  {title:"Ministry & Mission",items:["Evangelism","Church Planting","Christian Leadership","Pastoral Care & Counseling","Spiritual Formation","Homiletics","Church Growth","Christian Education"]},
  {title:"Christian Life & Society",items:["Discipleship","Christian Ethics","Christian Home","World Religions","Church & Society","Apologetics","Church History","Christian Marriage & Family"]},
];
const diplomaSchedule=[
  {day:"Tuesday",time:"5:30–7:30 PM",course:"New Testament Survey",teacher:"Sya Mang Kim Sang"},
  {day:"Tuesday",time:"7:45–9:45 PM",course:"Distinctive Doctrine of Major Denominations",teacher:"Rev. Chang Bawng"},
  {day:"Thursday",time:"5:30–7:30 PM",course:"Spiritual Formation",teacher:"Rev. Cing Ngaih Lun"},
  {day:"Thursday",time:"7:45–9:45 PM",course:"Foundation of Faith",teacher:"Sya Kshin Khin Phang"},
];

function Program({id,label,title,summary,facts}:{id:string;label:string;title:string;summary:string;facts:string[]}){return <article id={id} className="program-detail"><div><span className="tag">{label}</span><h2>{title}</h2><p>{summary}</p></div><ul className="fact-list">{facts.map(x=><li key={x}>{x}</li>)}</ul></article>}

export default function Programs(){return <main><SiteHeader/><section className="page-hero"><p className="eyebrow">Academic programs</p><h1>Study deeply. Serve faithfully.</h1><p>Every program brings biblical foundations, theological reflection, Christian formation, and practical ministry into one purposeful course of study.</p></section>
  <section className="section program-list">
    <Program id="master" label="Graduate · Online" title="Master of Divinity" summary="A rigorous 96-credit graduate program for pastors, ministry leaders, and students preparing for advanced Christian service." facts={["Online classes via Zoom","Wednesday and Friday · 5:30–9:30 PM","Bachelor certificate and transcript required","Pastoral recommendation required"]}/>
    <Program id="bachelor" label="Undergraduate · Four years" title="Bachelor of Theology" summary="A broad theological education covering Scripture, doctrine, Christian life, mission, ministry practice, language, research, and media." facts={["Four-year course of study","Biblical and theological core","Leadership and ministry formation","English and Greek language studies"]}/>
    <Program id="diploma" label="Online · 66–70 credits" title="Diploma in Practical Theology" summary="A flexible online program designed for church workers and emerging leaders who want a strong foundation for practical ministry." facts={["Delivered online through Zoom","Evening class schedule","Biblical, theological, and ministry subjects","Orientation: June 1 · Classes: June 2"]}/>
  </section>
  <section className="schedule-section"><div className="section"><p className="eyebrow">Diploma schedule</p><h2>Weekly evening classes</h2><div className="schedule-grid">{diplomaSchedule.map((x,i)=><article key={x.course}><span className="schedule-number">0{i+1}</span><div><small>{x.day} · {x.time}</small><h3>{x.course}</h3><p>{x.teacher}</p></div></article>)}</div></div></section>
  <section className="curriculum"><div className="section"><p className="eyebrow">Areas of study</p><h2>A whole-person theological education</h2><div className="curriculum-grid">{curriculum.map(g=><div key={g.title}><h3>{g.title}</h3><ul>{g.items.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div></div></section><SiteFooter/></main>}
