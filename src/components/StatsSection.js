import "./StatsSection.css"

const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      sublabel: "Across India",
    },
    {
      number: "20+",
      label: "Years Experience",
      sublabel: "In Industry",
    },
    {
      number: "1000+",
      label: "Projects Completed",
      sublabel: "Successfully",
    },
  ]

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-card" data-aos="fade-up" data-aos-delay="200">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" data-aos="fade-up" data-aos-delay={300 + index * 100}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sublabel">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
