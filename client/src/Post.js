export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/05/IMG_5632.jpeg?resize=768,576" alt="" />
      </div>

      <div className="texts">
        <h2>Waymo's robotaxis under investigation after crashes and traffic mishaps</h2>
        <p className="info">
          <a className="author">Chaitany Arora</a>
          <time>14-05-2024 20:44</time>
        </p>
        <p className="summary">Waymo's autonomous vehicle software is under investigation after federal regulators received 22 reports of the robotaxis crashing or potentially violating traffic safety laws by driving in the wrong lane or into construction zones.</p>
      </div>
    </div>
  )
}