import { Metadata } from 'next'
import Terminal from '@/components/Terminal'
import AnalyticsDashboard from '@/components/AnalyticsDashboard'
import LiveDataFeed from '@/components/LiveDataFeed'

export const metadata: Metadata = {
  title: 'SVEN AI Terminal - Live AI Consulting Demonstrations',
  description: 'Experience AI consulting through an interactive terminal interface. Live business analytics, ROI calculators, and working automation demonstrations. 48-hour delivery guarantee.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Terminal */}
      <section className="relative pt-24 pb-12 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-matrix-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-matrix-primary/3 rounded-full blur-3xl" />
        </div>

        {/* Main Terminal Interface */}
        <div className="relative z-10 max-w-4xl mx-auto mb-8">
          <Terminal />
        </div>

        {/* Live Data Feeds - Enhanced Features */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <LiveDataFeed />
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnalyticsDashboard />
        </div>
      </section>

      {/* Business Intelligence Section */}
      <section className="py-16 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-matrix-primary mb-4">
              AI Consulting Excellence
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Experience the future of business automation through live demonstrations. 
              Every tool you interact with showcases real HARKA consulting capabilities 
              with our industry-leading 48-hour delivery guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ROI Calculator Demo */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-matrix-primary transition-all duration-300 hover:shadow-glow">
              <div className="text-matrix-primary text-2xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Live ROI Calculator</h3>
              <p className="text-gray-400 mb-4">
                Interactive tool demonstrating real business impact calculations. 
                See the VMS Group case study: 2,281% ROI achieved.
              </p>
              <div className="text-matrix-primary text-sm font-mono">
                Terminal Command: roi-calc
              </div>
            </div>

            {/* Market Intelligence Demo */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-matrix-primary transition-all duration-300 hover:shadow-glow">
              <div className="text-matrix-primary text-2xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Market Intelligence</h3>
              <p className="text-gray-400 mb-4">
                Real-time competitive analysis and market positioning. 
                Danish SME market insights with actionable strategies.
              </p>
              <div className="text-matrix-primary text-sm font-mono">
                Terminal Command: market-intel
              </div>
            </div>

            {/* Process Automation Demo */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-matrix-primary transition-all duration-300 hover:shadow-glow">
              <div className="text-matrix-primary text-2xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Automation Assessment</h3>
              <p className="text-gray-400 mb-4">
                Process optimization analyzer identifying high-value 
                automation opportunities with detailed ROI projections.
              </p>
              <div className="text-matrix-primary text-sm font-mono">
                Terminal Command: automation
              </div>
            </div>

            {/* Live Analytics Demo */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-matrix-primary transition-all duration-300 hover:shadow-glow">
              <div className="text-matrix-primary text-2xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Analytics</h3>
              <p className="text-gray-400 mb-4">
                Live business intelligence dashboard tracking visitor behavior, 
                command usage, and performance metrics in real-time.
              </p>
              <div className="text-matrix-primary text-sm font-mono">
                Terminal Command: analytics
              </div>
            </div>

            {/* AI Workflow Demo */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-matrix-primary transition-all duration-300 hover:shadow-glow">
              <div className="text-matrix-primary text-2xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Workflow Demo</h3>
              <p className="text-gray-400 mb-4">
                Interactive demonstrations of AI-powered business workflows 
                showcasing our 48-hour implementation methodology.
              </p>
              <div className="text-matrix-primary text-sm font-mono">
                Terminal Command: ai-demo
              </div>
            </div>

            {/* Business Status */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-matrix-primary transition-all duration-300 hover:shadow-glow">
              <div className="text-matrix-primary text-2xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-3">Business Intelligence</h3>
              <p className="text-gray-400 mb-4">
                Live HARKA business metrics, project pipeline status, 
                and performance indicators updated in real-time.
              </p>
              <div className="text-matrix-primary text-sm font-mono">
                Terminal Command: status
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-matrix-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Everything you've experienced here represents real HARKA consulting capabilities. 
            Book your free assessment and discover how AI automation can deliver 
            300-2,281% ROI within 48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:svenarnarsson@gmail.com?subject=AI%20Consultation%20Request"
              className="bg-matrix-primary text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-matrix-primary/90 transition-all duration-300 hover:shadow-glow inline-block"
            >
              Book Free Assessment
            </a>
            <div className="text-gray-400">
              or type <span className="text-matrix-primary font-mono">contact</span> in terminal
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="text-gray-400">
              <div className="text-matrix-primary font-bold text-2xl">48h</div>
              <div className="text-sm">Delivery Guarantee</div>
            </div>
            <div className="text-gray-400">
              <div className="text-matrix-primary font-bold text-2xl">300%+</div>
              <div className="text-sm">Typical ROI</div>
            </div>
            <div className="text-gray-400">
              <div className="text-matrix-primary font-bold text-2xl">100%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-gray-400 text-sm">
            <p className="mb-2">
              SVEN AI Terminal Portfolio - AI Consulting & Business Automation Expert
            </p>
            <p className="mb-4">
              Denmark's premier AI consultancy specializing in 48-hour delivery solutions for SME companies
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <span>HARKA.dk</span>
              <span>Copenhagen, Denmark</span>
              <span>AI Consulting</span>
              <span>Business Automation</span>
              <span>Process Optimization</span>
              <span>ROI Guarantee</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}