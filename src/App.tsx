import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import GlassCard from './components/GlassCard'
import Badge from './components/Badge'
import Section from './components/Section'
import Grid from './components/Grid'
import List from './components/List'
import GlowBlob from './components/GlowBlob'

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-primary-alpha overflow-x-hidden">
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-16 text-center"
      >
        <GlowBlob
          className="w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2"
          color="rgba(100, 200, 180, 1)"
        />
        <GlowBlob
          className="w-[400px] h-[400px] top-1/3 -left-20"
          color="rgba(120, 160, 220, 1)"
        />
        <GlowBlob
          className="w-[350px] h-[350px] bottom-20 -right-20"
          color="rgba(100, 200, 180, 1)"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="glass-panel w-16 h-16 md:w-20 md:h-20 mb-8 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(100,200,180,0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            </svg>
          </div>

          <Badge>Reference Manual</Badge>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
            Trading Guide
          </h1>

          <p
            className="mt-4 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Futures / ICT / GxT
          </p>

          <p className="mt-6 text-lg md:text-xl font-light tracking-wide text-secondary-alpha max-w-md">
            Master liquidity. Master timing. Master structure.
          </p>
        </motion.div>
      </section>

      {/* ==================== BASICS ==================== */}
      <Section id="basics">
        <GlassCard>
          <Badge>Foundation</Badge>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
            Futures Basics
          </h2>
          <div className="mt-6">
            <List
              items={[
                'Futures contracts are standardized agreements to buy/sell an asset at a set price on a future date',
                'Key instruments: NQ (Nasdaq), ES (S&P 500), YM (Dow), RTY (Russell), GC (Gold), SI (Silver)',
                'Leverage amplifies both gains and losses — size accordingly',
                'Tick size and tick value vary by instrument — know your instrument',
                'Margin requirements differ between intraday and overnight positions',
                'Futures are zero-sum: for every winner there is a loser',
              ]}
            />
          </div>
        </GlassCard>
      </Section>

      {/* ==================== SESSIONS ==================== */}
      <Section id="sessions">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Trading Sessions
        </h2>
        <Grid cols={3}>
          <GlassCard delay={0}>
            <Badge>Accumulation</Badge>
            <h3 className="mt-4 text-xl font-semibold">Asia Session</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>
                <span className="text-white font-medium">Hours:</span> 8:00 PM – 12:00 AM ET
              </p>
              <p>Low volatility range formation</p>
              <p>Sets the high and low that London will target</p>
              <p className="text-white">
                Action: mark Asia high and low — these are liquidity targets
              </p>
            </div>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Badge>Manipulation</Badge>
            <h3 className="mt-4 text-xl font-semibold">London Killzone</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>
                <span className="text-white font-medium">Hours:</span> 2:00 AM – 5:00 AM ET
              </p>
              <p>Fake moves designed to trap retail traders</p>
              <p>Sweeps Asia highs or lows before reversing</p>
              <p className="text-white">
                Action: watch for sweep of Asia High/Low, look for SMT divergence and reversal setups
              </p>
            </div>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Badge>Distribution</Badge>
            <h3 className="mt-4 text-xl font-semibold">New York Killzone</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>
                <span className="text-white font-medium">Hours:</span> 9:30 AM – 11:00 AM ET
              </p>
              <p>Real directional move of the day</p>
              <p>Highest volume and volatility</p>
              <p className="text-white">
                Action: look for BOS, CISD entries, continuation or reversal from London
              </p>
            </div>
          </GlassCard>
        </Grid>
      </Section>

      {/* ==================== CYCLE ==================== */}
      <Section id="cycle">
        <Grid cols={2}>
          <GlassCard>
            <Badge>Framework</Badge>
            <h3 className="mt-4 text-xl font-semibold">Daily Market Cycle</h3>
            <div className="mt-4 space-y-4 text-sm text-secondary-alpha leading-relaxed">
              <div>
                <span className="text-white font-medium block mb-1">Accumulation</span>
                Asia session range, liquidity resting above and below
              </div>
              <div>
                <span className="text-white font-medium block mb-1">Manipulation</span>
                London stop hunt, sweep of Asia high or low
              </div>
              <div>
                <span className="text-white font-medium block mb-1">Distribution</span>
                NY session, true directional move begins
              </div>
            </div>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Badge>Macro</Badge>
            <h3 className="mt-4 text-xl font-semibold">Quarterly Behavior</h3>
            <div className="mt-4 space-y-4 text-sm text-secondary-alpha leading-relaxed">
              <div>
                <span className="text-white font-medium block mb-1">Q1 (Jan–Mar)</span>
                Accumulation — institutions build positions
              </div>
              <div>
                <span className="text-white font-medium block mb-1">Q2 (Apr–Jun)</span>
                Expansion — trend establishes, clear direction
              </div>
              <div>
                <span className="text-white font-medium block mb-1">Q3 (Jul–Sep)</span>
                Manipulation — choppy, stop-hunting environment
              </div>
              <div>
                <span className="text-white font-medium block mb-1">Q4 (Oct–Dec)</span>
                Distribution — end of year repositioning and volatility
              </div>
            </div>
          </GlassCard>
        </Grid>
      </Section>

      {/* ==================== GxT ==================== */}
      <Section id="gxt">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          GxT 4-Hour Profiling
        </h2>
        <Grid cols={3}>
          <GlassCard>
            <Badge>Core Formation</Badge>
            <h3 className="mt-4 text-xl font-semibold">OLHC / OHLC Logic</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>
                <span className="text-white">OLHC</span> (Open → Low → High → Close): bullish profile — low forms first, then expansion up
              </p>
              <p>
                <span className="text-white">OHLC</span> (Open → High → Low → Close): bearish profile — high forms first, then expansion down
              </p>
              <p>The 4-hour open sets the directional bias</p>
              <p>If price sweeps low first and reverses up: OLHC confirmed — look for longs</p>
              <p>If price sweeps high first and reverses down: OHLC confirmed — look for shorts</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Badge>Bias</Badge>
            <h3 className="mt-4 text-xl font-semibold">4-Hour Profile Rules</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>Identify the 4-hour open at the start of each block</p>
              <p>Wait for the initial sweep (manipulation leg)</p>
              <p>Entry comes after the sweep is confirmed and structure shifts</p>
              <p>Target the opposite side liquidity (if OLHC, target draw on highs)</p>
              <p>Avoid trading into the middle of a range — wait for extremes</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Badge>Protocol</Badge>
            <h3 className="mt-4 text-xl font-semibold">Monday Rules</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>Monday is typically the accumulation day for the weekly range</p>
              <p className="text-white font-medium">Do not trade Monday — observe and mark key levels</p>
              <p>Monday often produces a Judas Swing: false move that sets direction for the week</p>
              <p>Mark Monday high and low — these become weekly liquidity targets</p>
              <p>Tuesday onwards: look for the weekly profile to develop (trend, reversal, or balanced)</p>
            </div>
          </GlassCard>
        </Grid>
      </Section>

      {/* ==================== LIQUIDITY ==================== */}
      <Section id="liquidity">
        <Grid cols={2}>
          <GlassCard>
            <Badge>Liquidity</Badge>
            <h3 className="mt-4 text-xl font-semibold">Liquidity Types</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>
                <span className="text-white">Buy-side liquidity:</span> rests above highs (stop losses of shorts, buy stops)
              </p>
              <p>
                <span className="text-white">Sell-side liquidity:</span> rests below lows (stop losses of longs, sell stops)
              </p>
              <p>
                <span className="text-white">Equal highs:</span> double tops — strong buy-side liquidity pool
              </p>
              <p>
                <span className="text-white">Equal lows:</span> double bottoms — strong sell-side liquidity pool
              </p>
              <p>Institutions move price to sweep liquidity before reversing</p>
              <p className="text-white font-medium">Never chase breakouts — wait for the sweep and reaction</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Badge>Structure</Badge>
            <h3 className="mt-4 text-xl font-semibold">Market Structure</h3>
            <div className="mt-4 space-y-4 text-sm text-secondary-alpha leading-relaxed">
              <div className="flex items-center gap-3">
                <span
                  className="px-2 py-0.5 text-xs font-semibold rounded"
                  style={{ background: 'rgba(100,200,180,0.12)', color: 'rgba(100,200,180,0.9)' }}
                >
                  HH
                </span>
                <span>Higher High: bullish market structure</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="px-2 py-0.5 text-xs font-semibold rounded"
                  style={{ background: 'rgba(100,200,180,0.12)', color: 'rgba(100,200,180,0.9)' }}
                >
                  HL
                </span>
                <span>Higher Low: bullish continuation</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="px-2 py-0.5 text-xs font-semibold rounded"
                  style={{ background: 'rgba(100,200,180,0.12)', color: 'rgba(100,200,180,0.9)' }}
                >
                  LH
                </span>
                <span>Lower High: bearish structure</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="px-2 py-0.5 text-xs font-semibold rounded"
                  style={{ background: 'rgba(100,200,180,0.12)', color: 'rgba(100,200,180,0.9)' }}
                >
                  LL
                </span>
                <span>Lower Low: bearish continuation</span>
              </div>
            </div>
          </GlassCard>
        </Grid>
      </Section>

      {/* ==================== SMT ==================== */}
      <Section id="smt">
        <GlassCard>
          <Badge>Divergence</Badge>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
            SMT Divergence
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>
                <span className="text-white font-medium">SMT = Smart Money Technique</span>
              </p>
              <p>Compares two correlated instruments (NQ vs ES)</p>
              <p>When NQ makes a new high but ES does not → bearish signal</p>
              <p>When NQ makes a new low but ES does not → bullish signal</p>
              <p>Divergence = institutions are not confirming the move</p>
            </div>
            <div className="space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>Use SMT at session opens: London (2–5AM) and NY (9:30–11AM)</p>
              <p>SMT is strongest during killzones</p>
              <p>Combine with liquidity sweep for high-probability setups</p>
              <p className="text-white font-medium">
                Do not use SMT in isolation — it is a confirmation tool, not an entry trigger
              </p>
              <p>Best used after a liquidity sweep to confirm the reversal</p>
            </div>
          </div>
        </GlassCard>
      </Section>

      {/* ==================== PROFILES ==================== */}
      <Section id="profiles">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Weekly Profiles
        </h2>
        <Grid cols={2}>
          <GlassCard>
            <Badge>Trend</Badge>
            <h3 className="mt-4 text-xl font-semibold">Classic Trend Week</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>
                <span className="text-white">Monday:</span> accumulation, small range, mark highs and lows
              </p>
              <p>
                <span className="text-white">Tuesday:</span> initial move in weekly direction begins
              </p>
              <p>
                <span className="text-white">Wednesday:</span> continuation, possible mid-week pullback
              </p>
              <p>
                <span className="text-white">Thursday:</span> expansion, trend accelerates
              </p>
              <p>
                <span className="text-white">Friday:</span> distribution, partial profit-taking, avoid new entries
              </p>
            </div>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Badge>Reversal</Badge>
            <h3 className="mt-4 text-xl font-semibold">Reversal Week</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>
                <span className="text-white">Monday:</span> accumulation with slight directional bias
              </p>
              <p>
                <span className="text-white">Tuesday:</span> Judas Swing — false move in the wrong direction
              </p>
              <p>
                <span className="text-white">Wednesday:</span> reversal confirmed, structure shifts
              </p>
              <p>
                <span className="text-white">Thursday:</span> full expansion in the true direction
              </p>
              <p>
                <span className="text-white">Friday:</span> close near weekly high or low
              </p>
            </div>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Badge>Range</Badge>
            <h3 className="mt-4 text-xl font-semibold">Balanced Week</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>Monday to Wednesday: tight, overlapping ranges</p>
              <p>No clear directional bias</p>
              <p>Wait for Thursday for directional expansion</p>
              <p>Best approach: reduce size, avoid over-trading</p>
              <p>Balanced weeks often precede strong trend weeks</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.3}>
            <Badge>Expansion</Badge>
            <h3 className="mt-4 text-xl font-semibold">Expansion & Consolidation</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>Expansion weeks follow accumulation or reversal weeks</p>
              <p>Price moves impulsively through key levels with little retracement</p>
              <p>Consolidation weeks have overlapping candles and no clear structure</p>
              <p>During consolidation: mark boundaries, wait for the breakout</p>
              <p className="text-white font-medium">High expansion follows tight consolidation — patience is the edge</p>
            </div>
          </GlassCard>
        </Grid>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-xs text-secondary-alpha max-w-3xl mx-auto leading-relaxed"
        >
          Weekly profiles are defined by AM session behavior. The weekly candle wicks reveal where liquidity was swept. Always align the daily profile with the weekly directional bias.
        </motion.p>
      </Section>

      {/* ==================== RISK ==================== */}
      <Section id="risk">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Risk & Probabilities
        </h2>
        <Grid cols={2}>
          <GlassCard>
            <Badge>Protocol</Badge>
            <h3 className="mt-4 text-xl font-semibold">Risk Management</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>Risk 1–2% of account per trade maximum</p>
              <p>Never move stop loss further from entry once placed</p>
              <p>Use hard stop losses on every trade — no exceptions</p>
              <p>Risk-to-reward minimum: 2:1 before taking any trade</p>
              <p>Formula: position size = (account × risk %) ÷ (stop distance × tick value)</p>
              <p>If daily loss limit is reached, stop trading immediately</p>
              <p>Move stop to breakeven once trade moves in your favor</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Badge>Edge</Badge>
            <h3 className="mt-4 text-xl font-semibold">
              Confluences — Stacking Probability
            </h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p className="text-white font-medium mb-2">Best trades have ALL of:</p>
              <p>Session timing (London or NY killzone)</p>
              <p>Liquidity sweep confirmed</p>
              <p>Other key levels hit (ex: FVG, CISD, or OB)</p>
              <p>SMT divergence signal</p>
              <p>CISD (Change in State of Delivery) entry zone</p>
              <p className="text-white font-medium mt-2">
                More confluence = higher probability — do not trade with only 1-2 factors
              </p>
            </div>
          </GlassCard>
        </Grid>
      </Section>

      {/* ==================== PSYCHOLOGY ==================== */}
      <Section id="psychology">
        <Grid cols={2}>
          <GlassCard>
            <Badge>Mindset</Badge>
            <h3 className="mt-4 text-xl font-semibold">Trading Psychology</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>Patience is the primary edge — most losses come from boredom entries</p>
              <p>A losing trade that followed the rules is not a mistake</p>
              <p className="text-white font-medium">A winning trade that broke the rules is more dangerous than a loss</p>
              <p>Journal every trade: entry reason, result, and emotional state</p>
              <p>Do not increase size after wins — stay consistent</p>
              <p>The market does not owe you anything — trade what you see</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Badge>Macro</Badge>
            <h3 className="mt-4 text-xl font-semibold">What Moves the Market</h3>
            <div className="mt-4 space-y-3 text-sm text-secondary-alpha leading-relaxed">
              <p>High-impact news events (CPI, FOMC, NFP) create liquidity voids</p>
              <p>Session opens create predictable liquidity patterns</p>
              <p>Institutional order flow is invisible — infer it from price action</p>
              <p className="text-white font-medium">Liquidity is always the target — price moves to find it</p>
              <p>Retail patterns (H&S, triangles) exist to be hunted, not traded</p>
              <p>Positioning into end-of-month and end-of-quarter windows matters</p>
            </div>
          </GlassCard>
        </Grid>
      </Section>

      {/* ==================== DAILY PLAN ==================== */}
      <Section id="plan">
        <div className="space-y-6">
          <GlassCard>
            <Badge>Execution</Badge>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
              Daily Trading Plan
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Pre-market
                </h4>
                <p className="text-sm text-secondary-alpha leading-relaxed">
                  Mark previous day high/low, weekly high/low, Asia range high/low
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  London Open (2–5AM)
                </h4>
                <p className="text-sm text-secondary-alpha leading-relaxed">
                  Watch for sweep of Asia range, note High or Low of the day
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  NY Open (9:30–11AM)
                </h4>
                <p className="text-sm text-secondary-alpha leading-relaxed">
                  Look for confirmation — reversal or continuation
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Entry
                </h4>
                <p className="text-sm text-secondary-alpha leading-relaxed">
                  CISD (Change in State of Delivery) after structure shift
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Risk & Target
                </h4>
                <p className="text-sm text-secondary-alpha leading-relaxed">
                  Stop beyond swept liquidity. Target nearest buy/sell-side liquidity.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Review
                </h4>
                <p className="text-sm text-secondary-alpha leading-relaxed">
                  After trade: journal the result and follow rules.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard delay={0.15}>
            <Badge variant="accent">Core Tenets</Badge>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
              Final Principles
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <span
                  className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ background: 'rgba(100, 200, 180, 0.7)' }}
                />
                <p className="text-secondary-alpha leading-relaxed">
                  Trade only during killzones — random entries bleed accounts
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span
                  className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ background: 'rgba(100, 200, 180, 0.7)' }}
                />
                <p className="text-secondary-alpha leading-relaxed">
                  Focus on 1-2 instruments maximum (NQ and ES)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span
                  className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ background: 'rgba(100, 200, 180, 0.7)' }}
                />
                <p className="text-secondary-alpha leading-relaxed">
                  Futures trading is not about predicting — it is about timing and structure
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span
                  className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ background: 'rgba(100, 200, 180, 0.7)' }}
                />
                <p className="text-secondary-alpha leading-relaxed">
                  Master these and consistency follows
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p className="text-xs text-secondary-alpha">
          Trading Guide — Futures / ICT / GxT Reference Manual
        </p>
      </footer>
    </div>
  )
}

export default App
