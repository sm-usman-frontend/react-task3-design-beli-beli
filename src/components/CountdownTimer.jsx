import { useEffect, useState } from 'react'

function CountdownTimer({ initialSeconds = 43200 }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds)

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const h = Math.floor(secondsLeft / 3600)
    .toString()
    .padStart(2, '0')
  const m = Math.floor((secondsLeft % 3600) / 60)
    .toString()
    .padStart(2, '0')
  const s = (secondsLeft % 60).toString().padStart(2, '0')

  return (
    <span className="countdown">
      <span className="countdown-circle">{h}</span>
      <span className="countdown-separator">:</span>
      <span className="countdown-circle">{m}</span>
      <span className="countdown-separator">:</span>
      <span className="countdown-circle">{s}</span>
    </span>
  )
}

export default CountdownTimer
