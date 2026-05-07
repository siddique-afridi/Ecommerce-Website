// GitCommits.jsx
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'


const ITEM_HEIGHT = 90

const GitCommits = ({ username, repo, count = 5 }) => {
  const [commits, setCommits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [displayCount, setDisplayCount] = useState(count)
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          `https://api.github.com/repos/${username}/${repo}/commits?per_page=30`
        )
        setCommits(res.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCommits()
  }, [username, repo])

  function timeAgo(dateStr) {
    const diff = (Date.now() - new Date(dateStr)) / 1000
    if (diff < 60) return Math.round(diff) + 's ago'
    if (diff < 3600) return Math.round(diff / 60) + 'm ago'
    if (diff < 86400) return Math.round(diff / 3600) + 'h ago'
    if (diff < 604800) return Math.round(diff / 86400) + 'd ago'
    return new Date(dateStr).toLocaleDateString()
  }

  const visible = commits.slice(0, displayCount)

  const offset = activeIndex * ITEM_HEIGHT

  const prev = () => setActiveIndex(i => Math.max(0, i - 1))
  const next = () => setActiveIndex(i => Math.min(visible.length - 1, i + 1))

  const getItemClass = (i) => {
    if (i === activeIndex) return 'commit-item active'
    if (Math.abs(i - activeIndex) === 1) return 'commit-item adjacent'
    return 'commit-item'
  }

  if (loading) return (
    <div className="commits-wrapper">
      <p className="loading-text">▋ fetching commits...</p>
    </div>
  )

  if (error) return (
    <div className="commits-wrapper">
      <p className="error-text">error: {error}</p>
    </div>
  )

  return (
    <>
    <div className="commits-wrapper absolute z-50 left-60 top-10">

      <div className="commits-header">
        <h3>~/git log</h3>
        <span className="commits-counter">
          <span>{activeIndex + 1}</span>/{visible.length}
        </span>
      </div>

      <div className="commits-control">
        <label>PER_PAGE=</label>
        <input
          type="range"
          min={1}
          max={commits.length}
          value={displayCount}
          onChange={(e) => {
            setDisplayCount(Number(e.target.value))
            setActiveIndex(0)
          }}
        />
        <span style={{ color: '#00ff88', fontSize: '12px' }}>{displayCount}</span>
      </div>

      <div className="commits-viewport">
        <p className='mb-2 text-lg text-[#00ff88]'>Recent Commits</p>
        <div
          className="commits-track"
          ref={trackRef}
          style={{ transform: `translateY(-${offset}px)` }}
        >
          {visible.map((c, i) => (
            <div
              key={c.sha}
              className={getItemClass(i)}
              style={{ minHeight: `${ITEM_HEIGHT - 10}px` }}
              onClick={() => setActiveIndex(i)}
            >
              <div className="commit-dot-col">
                <div className="commit-dot" />
                {i < visible.length - 1 && <div className="commit-line" />}
              </div>
              <div className="commit-body">
                <p className="commit-msg">
                  {c.commit.message.split('\n')[0]}
                </p>
                <div className="commit-meta">
                  <a
                    href={c.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="commit-sha"
                  >
                    {c.sha.slice(0, 7)}
                  </a>
                  <span className="commit-author">{c.commit.author.name}</span>
                  <span className="commit-date">{timeAgo(c.commit.author.date)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="commits-nav">
        <button className="nav-btn" onClick={prev} disabled={activeIndex === 0}>↑</button>
        <div className="nav-dots">
          {visible.map((_, i) => (
            <div
              key={i}
              className={`nav-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        <button className="nav-btn" onClick={next} disabled={activeIndex === visible.length - 1}>↓</button>
      </div>

    </div>
    </>
  )
}

export default GitCommits